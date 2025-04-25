# Limitless Labs - Modern SaaS Boilerplate

A production-ready boilerplate for building full-stack SaaS applications with Next.js, TypeScript, and Tailwind CSS. This template provides a solid foundation for creating scalable web applications with modern best practices and a beautiful UI.

## Features

- 🚀 **Next.js 15** with App Router
- 💎 **TypeScript** for type safety
- 🎨 **Tailwind CSS** for styling
- 🌙 **Dark Mode** support
- 📱 **Responsive Design**
- ⚡ **Performance Optimized**
- 🔒 **Authentication Ready**
- 🎯 **SEO Friendly**
- 📦 **Component Library** with shadcn/ui
- 🛠 **Modern Development Tools** (ESLint, PostCSS)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- Docker
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/limitless-labs-ai/limitless-framework.git
cd limitless-framework
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
chmod +x start.sh
./start.sh
```

## Project Structure

```
limitless-framework/
├── src/
│   ├── app/                 # Next.js app router pages
│   ├── components/          # Reusable UI components
│   ├── config/             # Configuration files
│   │   ├── navlinks.ts     # Navigation configuration
│   │   ├── logo.ts         # Brand identity settings
│   │   ├── metadata.ts     # SEO and metadata
│   │   ├── footer.ts       # Footer configuration
│   │   ├── feature.ts      # Features section content
│   │   └── hero.tsx        # Hero section configuration
│   └── lib/                # Utility functions and shared logic
├── public/                 # Static assets
├── components.json         # UI components configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## Configuration

The project uses a configuration-based approach to manage various aspects of the application. All configuration files are located in the `src/config` directory:

### Navigation (`navlinks.ts`)

- Defines the main navigation structure
- Configure navigation items with display names, paths, and icons

### Brand Identity (`logo.ts`)

- Centralizes brand identity settings
- Configure brand name, logo, and styling

### Metadata (`metadata.ts`)

- Manages SEO and metadata settings
- Configure site name, URL, and social media handles

### Footer (`footer.ts`)

- Controls the site-wide footer configuration
- Define company information and links

### Features (`feature.ts`)

- Manages the features section content
- Configure feature cards and layout

### Hero Section (`hero.tsx`)

- Controls the hero section content
- Configure headlines and call-to-action buttons

## Customization

1. **Styling**: Modify `tailwind.config.js` to customize the design system
2. **Components**: Edit components in `src/components` directory
3. **Configuration**: Update files in `src/config` to modify content and layout
4. **Pages**: Add or modify pages in `src/app` directory

## Development

```bash
# Run development server
npm run dev

# Run Supabase instance
npm run db:start

# Stop Supabase instance
npm run db:stop

# Open Supabase Studio
npm run db:studio

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Copyright

This project is the proprietary property of Limitless Labs AI and is intended for use by authorized personnel only. Unauthorized access, use, or distribution is strictly prohibited.
