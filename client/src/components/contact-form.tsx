import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { insertContactSubmissionSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { MapPin, Mail, Phone, Twitter, Linkedin, Github, Dribbble, Loader2 } from "lucide-react";
import ContactInfo from "./contact-info";

type ContactFormData = z.infer<typeof insertContactSubmissionSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  const [charCount, setCharCount] = useState(0);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
      newsletter: false,
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      // Add honeypot check on frontend
      const honeypotField = document.querySelector('input[name="website"]') as HTMLInputElement;
      if (honeypotField && honeypotField.value) {
        throw new Error("Spam detected");
      }
      
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
        duration: 5000,
      });
      form.reset();
      setCharCount(0);
    },
    onError: (error: Error) => {
      toast({
        title: "Oops! Something went wrong",
        description: error.message || "Please try again or contact me directly at muthyambharath2004@gmail.com",
        variant: "destructive",
        duration: 5000,
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    submitMutation.mutate(data);
  };

  const handleMessageChange = (value: string) => {
    setCharCount(value.length);
    form.setValue("message", value);
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Contact Information */}
            <ContactInfo />

            {/* Contact Form */}
            <div className="p-8 lg:p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Send Message</h2>
              
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Honeypot field for spam protection */}
                <input 
                  type="text" 
                  name="website" 
                  style={{ display: "none" }} 
                  tabIndex={-1} 
                  autoComplete="off" 
                />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      {...form.register("firstName")}
                      placeholder="John"
                      className="hover:border-gray-400 transition-colors"
                    />
                    {form.formState.errors.firstName && (
                      <p className="text-sm text-red-500">{form.formState.errors.firstName.message}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      {...form.register("lastName")}
                      placeholder="Doe"
                      className="hover:border-gray-400 transition-colors"
                    />
                    {form.formState.errors.lastName && (
                      <p className="text-sm text-red-500">{form.formState.errors.lastName.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...form.register("email")}
                    placeholder="john.doe@example.com"
                    className="hover:border-gray-400 transition-colors"
                  />
                  {form.formState.errors.email && (
                    <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Select onValueChange={(value) => form.setValue("subject", value)}>
                    <SelectTrigger className="hover:border-gray-400 transition-colors">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="job">Job Opportunity</SelectItem>
                      <SelectItem value="internship">Internship Opportunity</SelectItem>
                      <SelectItem value="project">Project Collaboration</SelectItem>
                      <SelectItem value="freelance">Freelance Work</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {form.formState.errors.subject && (
                    <p className="text-sm text-red-500">{form.formState.errors.subject.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    rows={6}
                    {...form.register("message")}
                    onChange={(e) => handleMessageChange(e.target.value)}
                    placeholder="Tell me about your job opportunity, project requirements, or how I can contribute to your team..."
                    maxLength={2000}
                    className="hover:border-gray-400 transition-colors resize-vertical"
                  />
                  <div className="flex justify-between items-center">
                    {form.formState.errors.message && (
                      <p className="text-sm text-red-500">{form.formState.errors.message.message}</p>
                    )}
                    <div className={`text-sm ml-auto ${charCount > 2000 ? 'text-red-500' : 'text-gray-500'}`}>
                      {charCount}/2000
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="newsletter"
                    {...form.register("newsletter")}
                  />
                  <Label htmlFor="newsletter" className="text-sm">
                    Keep me updated about future opportunities and your company updates
                  </Label>
                </div>
                
                <div className="pt-4">
                  <Button 
                    type="submit" 
                    disabled={submitMutation.isPending}
                    className="w-full bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {submitMutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
