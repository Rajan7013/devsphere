# Project Setup Blueprint

> **Production Engineering Standard for High-Performance SEO Machines**

This is the exact project setup blueprint that guarantees Lighthouse 95-100, perfect SEO foundations, and zero technical debt. This is where your site stops being "a website" and becomes a high-performance SEO machine.

**Most people skip this and suffer forever. You won't.**

---

## 1. Next.js Configuration (Performance First)

**Your `next.config.js` must follow this philosophy:**

| Rule | Reason |
|------|--------|
| **App Router only** | Best SEO, modern architecture |
| **Strict mode ON** | Catch bugs early |
| **Image optimization ON** | Faster LCP, automatic WebP/AVIF |
| **Compression ON** | Smaller payload, faster downloads |
| **React strict mode** | Prevent common mistakes |

### Production next.config.js

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // React strict mode for better error detection
  reactStrictMode: true,
  
  // Remove X-Powered-By header
  poweredByHeader: false,
  
  // Enable compression
  compress: true,
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  
  // Experimental optimizations
  experimental: {
    optimizeCss: true,
  },
  
  // Redirects (if needed)
  async redirects() {
    return [
      // Example: redirect old URLs
      // {
      //   source: '/old-page',
      //   destination: '/new-page',
      //   permanent: true,
      // },
    ];
  },
  
  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig
```

### What This Achieves

✅ **Pre-render all marketing pages** - Static generation  
✅ **Optimize images automatically** - WebP/AVIF conversion  
✅ **Minimize JavaScript** - Tree shaking, code splitting  
✅ **Security headers** - Protection against common attacks  

**This is how you reach 100 Lighthouse.**

---

## 2. Rendering Rules (Non-Negotiable)

**We define this now so you never break SEO later.**

### Page Rendering Strategy

| Page | Rendering | Export Type | Why |
|------|-----------|-------------|-----|
| **Home** | Static (SSG) | `export const dynamic = 'force-static'` | Instant load, perfect SEO |
| **About** | Static (SSG) | `export const dynamic = 'force-static'` | Static content |
| **Services** | Static (SSG) | `export const dynamic = 'force-static'` | Pre-rendered, cached |
| **Projects** | Static (SSG) | `export const dynamic = 'force-static'` | Fast, indexable |
| **Contact** | Static (SSG) | `export const dynamic = 'force-static'` | Form is client-side only |

### Implementation

```typescript
// app/page.tsx (Home)
export const dynamic = 'force-static';
export const revalidate = false; // Never revalidate

export default function HomePage() {
  return (
    // Page content
  );
}
```

**No client-side rendering for core pages.**

### This Ensures

✅ **Instant load** - Pre-rendered HTML  
✅ **Clean HTML for Google** - Perfect indexing  
✅ **Perfect SEO** - Static content crawlable  
✅ **Global caching** - Edge CDN distribution  

---

## 3. Global Metadata System

**Every page must inherit defaults.**

### Root Layout Metadata

```typescript
// app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://devsphere.com'),
  title: {
    default: 'DevSphere | Digital Agency',
    template: '%s | DevSphere',
  },
  description: 'DevSphere is a full-stack digital agency building scalable web and mobile products for modern businesses.',
  keywords: ['web development', 'mobile app development', 'UI/UX design', 'digital agency', 'full stack development'],
  authors: [{ name: 'DevSphere' }],
  creator: 'DevSphere',
  publisher: 'DevSphere',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://devsphere.com',
    siteName: 'DevSphere',
    title: 'DevSphere | Digital Agency',
    description: 'Full-stack digital agency building scalable web and mobile products',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DevSphere Digital Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevSphere | Digital Agency',
    description: 'Full-stack digital agency building scalable web and mobile products',
    images: ['/og-image.jpg'],
    creator: '@devsphere',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};
```

### Page-Specific Metadata

```typescript
// app/services/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Web development, mobile apps, UI/UX design, and digital solutions for modern businesses.',
  openGraph: {
    title: 'Our Services | DevSphere',
    description: 'Comprehensive digital solutions for modern businesses',
    images: ['/og-images/services.jpg'],
  },
};
```

### This Ensures

✅ **Proper Google snippets** - Rich search results  
✅ **Clean social sharing** - Beautiful previews  
✅ **Consistent branding** - Template inheritance  
✅ **SEO best practices** - All meta tags covered  

---

## 4. Image Optimization Rules

**We enforce your image system technically.**

### Global Image Rules

| Rule | Implementation | Why |
|------|---------------|-----|
| **Only WebP/AVIF** | `formats: ['image/avif', 'image/webp']` | Smallest file size |
| **Use next/image** | `<Image />` component | Auto resize, lazy load |
| **Lazy load** | Default behavior | Faster initial page load |
| **Fixed aspect boxes** | `aspect-[16/9]` wrapper | No layout shift |
| **Priority for hero** | `priority` prop | Faster LCP |

### Implementation Examples

```typescript
// Hero image (above fold)
<div className="aspect-[16/9] overflow-hidden rounded-2xl">
  <Image
    src="/images/hero.jpg"
    alt="Hero image description"
    width={1920}
    height={1080}
    priority
    className="w-full h-full object-cover"
  />
</div>

// Below-fold image (lazy loaded)
<div className="aspect-square overflow-hidden rounded-2xl">
  <Image
    src="/images/project.jpg"
    alt="Project screenshot"
    width={800}
    height={800}
    className="w-full h-full object-cover"
  />
</div>
```

### This Directly Improves

✅ **LCP** (Largest Contentful Paint) - Faster image loading  
✅ **CLS** (Cumulative Layout Shift) - No jumping layouts  
✅ **SEO ranking** - Performance is a ranking factor  
✅ **User experience** - Smooth, fast browsing  

---

## 5. Font Optimization (Critical for CLS)

**Load fonts via `next/font` to eliminate layout shift.**

### Font Configuration

```typescript
// app/layout.tsx
import { Space_Grotesk, Inter } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['600', '700'],
  display: 'swap',
  variable: '--font-space-grotesk',
  preload: true,
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

### Why This Matters

✅ **No render blocking** - Fonts load asynchronously  
✅ **No layout shift** - `font-display: swap` prevents FOIT  
✅ **Faster first paint** - Optimized loading strategy  
✅ **Better Core Web Vitals** - Improved CLS score  

**This alone can boost Lighthouse by 10-15 points.**

---

## 6. CSS Strategy

**Keep bundle size tiny with strict CSS rules.**

### CSS Rules

| Rule | Reason |
|------|--------|
| **Only Tailwind + CSS variables** | No bloated CSS files |
| **No UI libraries** | They destroy performance (Material-UI, Ant Design) |
| **No inline styles** | Hard to maintain, no reusability |
| **Purge unused CSS** | Tailwind automatically removes unused classes |

### globals.css Structure

```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* CSS Variables for theming */
:root {
  /* Light mode */
  --bg-main: #f2f2fc;
  --bg-card: #fdf9ff;
  --text-main: #302e4d;
  --text-muted: #6e6d7a;
  
  /* Default skin color */
  --skin-color: #ec1839;
}

.dark {
  /* Dark mode */
  --bg-main: #151515;
  --bg-card: #222222;
  --text-main: #ffffff;
  --text-muted: #a0a0a0;
}

/* Custom utilities */
@layer utilities {
  .shadow-soft {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  }
  
  .shadow-strong {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
}
```

**This keeps bundle size tiny.**

---

## 7. JavaScript Budget System

**Hard rule: No heavy libraries on marketing pages.**

### Allowed Libraries

| Library | Size | Purpose |
|---------|------|---------|
| **React** | ~45KB | Framework (required) |
| **Framer Motion** | ~30KB | Animations |
| **Lucide React** | ~5KB | Icons (tree-shaken) |

**Total: ~80KB (gzipped)**

### Forbidden Libraries

❌ **Moment.js** - Use native Date or date-fns  
❌ **Lodash** - Use native JS methods  
❌ **jQuery** - Not needed with React  
❌ **Material-UI** - Too heavy (200KB+)  
❌ **Chart.js** - Use lightweight alternatives  

### Why This Matters

**JavaScript is the biggest performance killer.**

✅ **Your site must feel instant**  
✅ **Mobile users have slower devices**  
✅ **Less JS = better Core Web Vitals**  

---

## 8. Folder Structure (Production Grade)

**We lock this now for scalability.**

```
agency/
├── app/
│   ├── layout.tsx              # Root layout with fonts, metadata
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles + theme variables
│   ├── sitemap.ts              # Sitemap generation
│   ├── robots.ts               # Robots.txt generation
│   ├── about/
│   │   └── page.tsx
│   ├── services/
│   │   ├── page.tsx
│   │   ├── web-development/
│   │   │   └── page.tsx
│   │   ├── mobile-app-development/
│   │   │   └── page.tsx
│   │   └── ui-ux-design/
│   │       └── page.tsx
│   ├── projects/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   └── contact/
│       └── page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── StyleSwitcher.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Projects.tsx
│   │   └── CTA.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Modal.tsx
│
├── lib/
│   ├── data.ts                 # Static data
│   ├── utils.ts                # Utility functions
│   └── constants.ts            # Constants
│
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── projects/
│   │   └── team/
│   ├── favicon.ico
│   ├── og-image.jpg
│   └── robots.txt (generated)
│
├── styles/
│   └── (additional CSS if needed)
│
├── .env.local                  # Environment variables
├── .gitignore
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

**This keeps scaling clean.**

---

## 9. SEO Technical Foundations (Must Exist on Day 1)

**These are not optional.**

### Required SEO Files

| Feature | File | Purpose |
|---------|------|---------|
| **Sitemap** | `app/sitemap.ts` | Page discovery |
| **Robots.txt** | `app/robots.ts` | Crawl control |
| **Canonical URLs** | Metadata API | Avoid duplicates |
| **OpenGraph tags** | Metadata API | Social previews |
| **Schema.org** | JSON-LD | Rich results |

### Sitemap Implementation

```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://devsphere.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://devsphere.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://devsphere.com/services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://devsphere.com/projects',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://devsphere.com/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];
}
```

### Robots.txt Implementation

```typescript
// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: 'https://devsphere.com/sitemap.xml',
  };
}
```

### Schema.org Implementation

```typescript
// components/sections/Hero.tsx
export default function Hero() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DevSphere",
    "url": "https://devsphere.com",
    "logo": "https://devsphere.com/logo.png",
    "description": "Full-stack digital agency",
    "sameAs": [
      "https://twitter.com/devsphere",
      "https://linkedin.com/company/devsphere",
      "https://github.com/devsphere"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* Hero content */}
    </>
  );
}
```

---

## 10. Analytics & Tracking Ready

**Prepare for analytics without slowing down the site.**

### Google Analytics 4 Setup

```typescript
// app/layout.tsx
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### Environment Variables

```bash
# .env.local
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://devsphere.com
```

**We build clean HTML first, tracking second.**

---

## 11. Complete Setup Checklist

### Initial Setup

- [ ] Install Node.js v18+
- [ ] Create Next.js project: `npx create-next-app@latest`
- [ ] Install dependencies (TypeScript, Tailwind, Framer Motion, Lucide)
- [ ] Configure `next.config.js` with performance settings
- [ ] Configure `tailwind.config.ts` with design tokens
- [ ] Set up `globals.css` with CSS variables
- [ ] Install fonts via `next/font` (Space Grotesk + Inter)

### Configuration

- [ ] Set up folder structure (app, components, lib, public)
- [ ] Configure TypeScript strict mode
- [ ] Set up ESLint + Prettier
- [ ] Create root layout with metadata
- [ ] Implement sitemap.ts
- [ ] Implement robots.ts
- [ ] Add Schema.org markup

### Performance

- [ ] Configure image optimization
- [ ] Set all pages to static rendering
- [ ] Implement lazy loading for images
- [ ] Minimize JavaScript bundle
- [ ] Test Core Web Vitals
- [ ] Achieve Lighthouse 95+ score

### SEO

- [ ] Add global metadata
- [ ] Add page-specific metadata
- [ ] Implement OpenGraph tags
- [ ] Add canonical URLs
- [ ] Create sitemap
- [ ] Configure robots.txt
- [ ] Add Schema.org markup

### Analytics

- [ ] Set up Google Analytics 4
- [ ] Prepare for Google Search Console
- [ ] Plan heatmap integration (Hotjar/Clarity)
- [ ] Set up conversion tracking

---

## What We Just Did

**We created a production engineering standard.**

### Most Developers Think About

- ❌ Just making pages work
- ❌ Random configurations
- ❌ Copy-paste from tutorials

### You Are Building

✅ **A scalable digital platform**  
✅ **Production-grade architecture**  
✅ **Performance-first foundation**  
✅ **SEO-optimized from day 1**  
✅ **Zero technical debt**  

---

## What This Achieves

✅ **Lighthouse 95-100** - Performance excellence  
✅ **Perfect SEO foundations** - Google-ready from day 1  
✅ **No technical debt** - Clean, maintainable code  
✅ **Scalable architecture** - Grows from 5 to 500 pages  
✅ **Fast development** - Reusable patterns  
✅ **Professional quality** - Enterprise-grade standards  

**This is the DevSphere production standard. Every future project can reuse this blueprint.**
