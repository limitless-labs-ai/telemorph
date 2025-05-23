# TeleMorph - Modern Telecommunications Platform

A modern, full-stack web application for TeleMorph's telecommunications platform built with Next.js, TypeScript, and Tailwind CSS. This application provides a comprehensive digital presence with contact management, career opportunities, and modern UI components.

## Features

- 🚀 **Next.js 15** with App Router
- 💎 **TypeScript** for type safety
- 🎨 **Tailwind CSS** with custom design system
- 🌙 **Dark Mode** support (forced dark theme)
- 📱 **Responsive Design** across all devices
- ⚡ **Performance Optimized** with motion animations
- 📧 **Email Integration** with nodemailer for contact forms and job applications
- 💼 **Dynamic Job Listings** with Markdown-based content management
- 🎯 **SEO Friendly** with comprehensive metadata
- 📦 **Component Library** with shadcn/ui and custom components
- 🎭 **Advanced Animations** with Framer Motion and custom CSS animations
- 🔔 **Toast Notifications** with Sonner
- 🎨 **Brand Design System** with custom color palette and gradients

## Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS, CSS Variables, Custom Animations
- **UI Components**: shadcn/ui, Custom Components
- **Animations**: Framer Motion, CSS Keyframes
- **Email**: Nodemailer with Gmail SMTP
- **Content**: Markdown with frontmatter
- **Development Tools**: ESLint, PostCSS, TypeScript

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- Docker
- npm or yarn package manager
- Gmail account with App Password for email functionality

### Installation

1. Clone the repository:

```bash
git clone https://github.com/limitless-labs-ai/telemorph.git
cd telemorph
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory:

```env
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-gmail-app-password
CONTACT_EMAIL=contact@yourdomain.com
CAREERS_EMAIL=hr@yourdomain.com
```

4. Start the development server:

```bash
chmod +x start.sh
./start.sh
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
telemorph/
├── src/
│   ├── app/                     # Next.js app router
│   │   ├── (landing)/          # Landing page routes
│   │   │   ├── contact/        # Contact page
│   │   │   └── careers/        # Careers page with dynamic job listings
│   │   ├── api/                # API routes
│   │   │   ├── contact/        # Contact form API
│   │   │   └── careers/        # Job application API
│   │   ├── globals.css         # Global styles and CSS variables
│   │   └── layout.tsx          # Root layout with theme provider
│   ├── components/             # Reusable UI components
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── Landing Page/       # Landing page specific components
│   │   ├── Careers/            # Career page components
│   │   ├── Navbar.tsx          # Navigation component
│   │   ├── Footer.tsx          # Footer component
│   │   └── Utilities/          # Utility components
│   ├── config/                 # Configuration files
│   │   ├── landing/            # Landing page configurations
│   │   ├── contact.ts          # Contact page configuration
│   │   └── career.ts           # Career page configuration
│   ├── lib/                    # Utility functions
│   │   ├── jobs.ts             # Job listing utilities
│   │   └── utils.ts            # General utilities
│   └── jobs/                   # Markdown job listings
├── public/                     # Static assets
├── components.json             # shadcn/ui configuration
├── tailwind.config.js          # Tailwind CSS configuration
└── tsconfig.json              # TypeScript configuration
```

## Configuration

### Brand Colors

The application uses a custom color palette defined in CSS variables:

- **Primary**: `#0fd12c` (TeleMorph Green)
- **Secondary**: `#6e2fff` (Purple)
- **Accent**: `#74d371` (Light Green)
- **Indigo Theme**: `#6366f1` series

### Email Setup

For email functionality to work:

1. Enable 2-Step Verification in your Google Account
2. Generate an App Password:
   - Go to Google Account → Security → 2-Step Verification → App passwords
   - Select "Mail" and "Other" → Name it "TeleMorph"
   - Use the generated 16-character password in `EMAIL_PASSWORD`

### Job Listings

Jobs are managed through Markdown files in the `src/jobs/` directory:

```markdown
---
title: "Software Engineer"
department: "Engineering"
location: "Remote"
employmentType: "Full-time"
date: "2024-01-15"
---

# Job Description

Content in Markdown format...
```

## Features Overview

### Contact Form

- Multi-field contact form with validation
- Email notifications via nodemailer
- Toast notifications for user feedback
- Dark mode optimized styling

### Careers System

- Dynamic job listings from Markdown files
- Department-based organization
- Individual job detail pages
- Job application form with file upload
- Resume attachment via email
- Cover letter support

### UI Components

- Custom text reveal animations
- Gradient backgrounds with animations
- Responsive navigation
- Dark theme throughout
- Motion animations for interactions

## Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint

# Type checking
npm run type-check
```

## Email Functionality

The application includes comprehensive email functionality:

### Contact Form (`/contact`)

- Sends structured emails with contact information
- Includes company details if provided
- Professional HTML email formatting

### Job Applications (`/careers/[id]`)

- Processes job applications with file uploads
- Attaches resumes as email attachments
- Includes cover letter content
- Validates file types and sizes (5MB limit)

## Deployment

### Environment Variables

Ensure these variables are set in your production environment:

```env
EMAIL_USER=your-production-email@domain.com
EMAIL_PASSWORD=your-app-password
CONTACT_EMAIL=contact@telemorph.com
CAREERS_EMAIL=hr@telemorph.com
```

### Build Process

```bash
npm run build
```

The application is optimized for deployment on platforms like Vercel, Netlify, or any Node.js hosting service.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary to TeleMorph. All rights reserved.

## Support

For support and questions, please contact the development team or create an issue in the repository.

---

Built with ❤️ by the TeleMorph development team
