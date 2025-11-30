# Newstel Website Redesign

A modern, beautiful redesign of the [Newstel.com](https://newstel.com) website built with React, TypeScript, Vite, and Tailwind CSS.

![Newstel Website](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38bdf8)

## 🎨 Design Features

- **Modern Aesthetic**: Clean, professional design with smooth animations and transitions
- **Curved Wave Dividers**: Elegant SVG wave dividers on all hero sections
- **Consistent Color Scheme**: Navy blue (#2C3E50), coral accent (#FF6B6B), and light grey backgrounds
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop devices
- **Sticky Navigation**: Smart navigation bar that shrinks on scroll for better UX
- **Multi-Page Layout**: Separate pages for better SEO and user navigation

## 📄 Pages

- **Home**: Hero section with stats, features, video, client logos, testimonials, services overview
- **Services**: Detailed service offerings with pricing tiers (Express, Business, Enterprise)
- **Technology**: Platform integrations and technology stack showcase
- **About Us**: Company information, values, and global locations
- **Case Studies**: Client success stories (Wolfson Brands, Chilly's Bottles, OnBuy.com)
- **Careers**: Join the team section with career opportunities
- **Contact**: Contact form and office information

## 🚀 Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript 5.6
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **Routing**: Wouter
- **Icons**: Lucide React
- **UI Components**: shadcn/ui

## 📦 Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

## 🌐 Deployment

### Netlify (Recommended)

The project includes Netlify configuration files for easy deployment:

1. Build the project: `pnpm run build`
2. Deploy the `dist/public` folder to Netlify
3. The `_redirects` file ensures proper SPA routing

### Other Platforms

The built files in `dist/public` can be deployed to any static hosting service:
- Vercel
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront

## 📁 Project Structure

```
newstel_redesign/
├── client/
│   ├── public/              # Static assets
│   │   ├── clients/         # Client logos
│   │   ├── tech/            # Technology platform logos
│   │   ├── case-studies/    # Case study images
│   │   ├── values/          # Values section icons
│   │   └── _redirects       # Netlify SPA routing
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   │   ├── ui/          # shadcn/ui components
│   │   │   ├── Navigation.tsx
│   │   │   ├── PageHero.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ...
│   │   ├── pages/           # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Technology.tsx
│   │   │   └── ...
│   │   ├── App.tsx          # Main app with routing
│   │   ├── main.tsx         # Entry point
│   │   └── index.css        # Global styles
│   └── index.html
├── netlify.toml             # Netlify configuration
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite configuration
```

## 🎯 Key Features

### Navigation
- Sticky header that shrinks on scroll
- Active page highlighting
- Mobile-responsive hamburger menu
- Smooth scroll behavior

### Hero Sections
- Curved wave dividers using SVG
- Gradient backgrounds
- Animated stats counters
- Call-to-action buttons

### Content Sections
- Client logos carousel with auto-rotation
- Testimonials carousel with ratings
- Interactive world map showing office locations
- Technology platform integrations
- Company values with custom icons

### Forms
- Contact form with validation
- Professional styling
- Responsive layout

## 🎨 Color Palette

```css
/* Primary Navy Blue */
--primary: oklch(0.42 0.04 245);

/* Coral Accent */
--accent: oklch(0.65 0.19 25);

/* Light Grey Background */
--secondary: oklch(0.96 0.01 245);

/* White Background */
--background: oklch(1 0 0);
```

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Customization

### Updating Content

1. **Navigation Links**: Edit `client/src/components/Navigation.tsx`
2. **Hero Content**: Edit `client/src/components/Hero.tsx` or page-specific hero sections
3. **Footer**: Edit `client/src/components/Footer.tsx`
4. **Page Content**: Edit files in `client/src/pages/`

### Updating Styles

1. **Global Styles**: Edit `client/src/index.css`
2. **Tailwind Config**: Edit `tailwind.config.ts`
3. **Component Styles**: Use Tailwind utility classes in component files

### Adding Images

1. Place images in `client/public/` directory
2. Reference with absolute paths: `/image-name.jpg`
3. Organize in subdirectories for better structure

## 📝 License

This project is a redesign of the Newstel.com website. All content and branding belong to Newstel Worldwide.

## 🤝 Contributing

This is a client project. For any changes or improvements, please contact the project maintainer.

## 📧 Contact

For questions or support regarding this redesign, please reach out through the contact form on the website.

---

Built with ❤️ using modern web technologies
