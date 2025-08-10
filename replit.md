# Portfolio Contact Application

## Overview

This is a professional portfolio contact form application built with a modern full-stack architecture. The application provides a sophisticated contact form with email notifications, spam protection, and a polished user interface. It serves as a contact gateway for portfolio websites, enabling visitors to reach out for project inquiries, collaborations, and business opportunities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The client-side is built with **React 18** using **TypeScript** and styled with **Tailwind CSS**. The UI leverages the **shadcn/ui** component library for consistent, accessible components with a "new-york" style theme. The application uses **Wouter** for client-side routing and **TanStack Query** for server state management and API interactions.

Key frontend decisions:
- **Component-based architecture**: Modular React components for reusability and maintainability
- **Form management**: React Hook Form with Zod validation for type-safe form handling
- **State management**: TanStack Query for server state, React hooks for local state
- **Styling approach**: Utility-first CSS with Tailwind, CSS variables for theming
- **Build tool**: Vite for fast development and optimized production builds

### Backend Architecture
The server is built with **Express.js** and **TypeScript**, following a RESTful API pattern. The architecture includes custom middleware for request logging and error handling, with modular route organization.

Key backend decisions:
- **Storage abstraction**: Interface-based storage layer supporting both in-memory and database implementations
- **Email integration**: Nodemailer for SMTP-based email notifications
- **Security measures**: Multiple spam protection layers including honeypot fields and content analysis
- **Development integration**: Vite middleware integration for seamless full-stack development

### Database Layer
The application uses **Drizzle ORM** with **PostgreSQL** as the primary database. The schema is designed with proper relationships and constraints, supporting both user management and contact submission tracking.

Database design decisions:
- **Contact submissions table**: Comprehensive tracking with metadata (IP, user agent, timestamps)
- **User management**: Basic user authentication structure for future admin features
- **Schema validation**: Drizzle-Zod integration for runtime type safety
- **Migration support**: Drizzle Kit for database schema migrations

### Security and Spam Protection
Multi-layered spam protection approach:
- **Honeypot fields**: Hidden form fields to catch automated submissions
- **Content analysis**: Pattern matching for suspicious content (URLs, pharmaceutical terms, financial spam)
- **Rate limiting**: Request metadata tracking for potential abuse detection
- **Data validation**: Strict input validation with Zod schemas

### Development and Deployment
- **TypeScript configuration**: Strict type checking with path aliases for clean imports
- **Build process**: Vite for frontend bundling, esbuild for server compilation
- **Environment management**: Flexible configuration for SMTP and database connections
- **Development experience**: Hot reload, error overlay, and integrated debugging tools

## External Dependencies

### Core Framework Dependencies
- **React ecosystem**: React 18, React DOM, React Hook Form
- **Backend framework**: Express.js with TypeScript support
- **Database**: PostgreSQL via Neon Database serverless driver
- **ORM**: Drizzle ORM with Drizzle Kit for migrations

### UI and Styling
- **Component library**: Radix UI primitives (30+ components)
- **Styling**: Tailwind CSS with PostCSS processing
- **Icons**: Lucide React icon library
- **Fonts**: Inter font family from Google Fonts

### Development and Build Tools
- **Build tools**: Vite, esbuild, TypeScript compiler
- **Code quality**: ESLint configuration, TypeScript strict mode
- **Development**: tsx for Node.js TypeScript execution
- **Replit integration**: Custom plugins for Replit environment

### Third-party Services
- **Email service**: SMTP provider (configurable, defaults to Gmail)
- **Database hosting**: Neon Database (PostgreSQL-compatible)
- **Session management**: connect-pg-simple for PostgreSQL session storage
- **Validation**: Zod for runtime type validation

### Utility Libraries
- **Date handling**: date-fns for date manipulation
- **CSS utilities**: clsx and tailwind-merge for conditional styling
- **Class variance**: class-variance-authority for component variants
- **Command palette**: cmdk for search interfaces