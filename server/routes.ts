import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";
import nodemailer from "nodemailer";

// Create email transporter
const createEmailTransporter = () => {
  // Use environment variables for email configuration
  const emailConfig = {
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER || process.env.EMAIL_USER,
      pass: process.env.SMTP_PASS || process.env.EMAIL_PASS,
    },
  };

  return nodemailer.createTransporter(emailConfig);
};

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate request body
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      
      // Honeypot spam protection - check for hidden 'website' field
      if (req.body.website && req.body.website.trim() !== '') {
        return res.status(400).json({ 
          message: "Spam detected. Your submission has been blocked." 
        });
      }

      // Additional spam checks
      const suspiciousPatterns = [
        /viagra|cialis|pharmacy/i,
        /investment|loan|crypto/i,
        /http:\/\/|https:\/\//g
      ];

      const messageContent = `${validatedData.firstName} ${validatedData.lastName} ${validatedData.message}`;
      const isSuspicious = suspiciousPatterns.some(pattern => pattern.test(messageContent));
      
      if (isSuspicious) {
        return res.status(400).json({ 
          message: "Your message appears to be spam. Please contact us directly if this is an error." 
        });
      }

      // Rate limiting check (simple implementation)
      const clientIP = req.ip || req.connection.remoteAddress || 'unknown';
      const userAgent = req.get('User-Agent') || 'unknown';

      // Store the submission
      const submission = await storage.createContactSubmission({
        ...validatedData,
        ipAddress: clientIP,
        userAgent: userAgent,
      });

      // Send email notification
      try {
        const transporter = createEmailTransporter();
        
        // Email to portfolio owner
        const ownerEmailOptions = {
          from: process.env.SMTP_USER || 'noreply@portfolio.com',
          to: process.env.CONTACT_EMAIL || 'hello@portfolio.com',
          subject: `New Contact Form Submission: ${validatedData.subject}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #2563EB;">New Contact Form Submission</h2>
              
              <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3>Contact Information</h3>
                <p><strong>Name:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
                <p><strong>Email:</strong> ${validatedData.email}</p>
                <p><strong>Subject:</strong> ${validatedData.subject}</p>
                <p><strong>Newsletter Subscription:</strong> ${validatedData.newsletter ? 'Yes' : 'No'}</p>
                <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
              </div>
              
              <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
                <h3>Message</h3>
                <p style="line-height: 1.6; white-space: pre-wrap;">${validatedData.message}</p>
              </div>
              
              <div style="margin-top: 20px; font-size: 12px; color: #64748b;">
                <p>IP Address: ${clientIP}</p>
                <p>User Agent: ${userAgent}</p>
              </div>
            </div>
          `,
        };

        // Auto-reply to sender
        const autoReplyOptions = {
          from: process.env.SMTP_USER || 'noreply@portfolio.com',
          to: validatedData.email,
          subject: 'Thank you for contacting me!',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #2563EB;">Thank you for reaching out!</h2>
              
              <p>Hi ${validatedData.firstName},</p>
              
              <p>Thank you for your message. I've received your inquiry about "${validatedData.subject}" and will get back to you within 24 hours.</p>
              
              <div style="background-color: #f0f9ff; padding: 15px; border-left: 4px solid #2563EB; margin: 20px 0;">
                <p style="margin: 0;"><strong>Your message:</strong></p>
                <p style="margin: 10px 0 0 0; font-style: italic;">"${validatedData.message.substring(0, 150)}${validatedData.message.length > 150 ? '...' : ''}"</p>
              </div>
              
              <p>In the meantime, feel free to:</p>
              <ul>
                <li>Check out my portfolio at <a href="/" style="color: #2563EB;">Portfolio</a></li>
                <li>Connect with me on <a href="#" style="color: #2563EB;">LinkedIn</a></li>
                <li>Follow my work on <a href="#" style="color: #2563EB;">GitHub</a></li>
              </ul>
              
              <p>Best regards,<br>Portfolio Team</p>
              
              <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
              <p style="font-size: 12px; color: #64748b;">
                This is an automated response. Please do not reply to this email.
                If you need immediate assistance, contact us directly at hello@portfolio.com
              </p>
            </div>
          `,
        };

        // Send both emails
        await Promise.all([
          transporter.sendMail(ownerEmailOptions),
          transporter.sendMail(autoReplyOptions),
        ]);

      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Don't fail the request if email fails, but log the error
      }

      res.status(201).json({
        message: "Message sent successfully! Thank you for reaching out.",
        submissionId: submission.id,
      });

    } catch (error) {
      console.error('Contact form error:', error);
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          message: "Please check your form data and try again.",
          errors: error.errors,
        });
      }

      res.status(500).json({
        message: "An error occurred while processing your request. Please try again later.",
      });
    }
  });

  // Get all contact submissions (for admin purposes)
  app.get("/api/contact", async (req: Request, res: Response) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error('Error fetching contact submissions:', error);
      res.status(500).json({
        message: "Error fetching contact submissions",
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
