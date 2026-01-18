# Architecture Documentation

> **Technical Foundation for a Long-Term Agency Platform**

This document explains the technical stack, architectural decisions, and scalability roadmap for the agency platform.

---

## The Brutal Truth

**You are not building a small portfolio site.**

You are building:
- A long-term agency platform that must scale with you for years
- A system that can evolve into a full product company

**If you choose a weak stack now:**
- ❌ You will rebuild in 1–2 years
- ❌ SEO will break
- ❌ Performance will suffer
- ❌ Codebase will become messy

**We design this like a product company, not a college project.**

---

## Your Use Case

You need a site that:

✅ **Looks premium** - Matches high-end agency standards  
✅ **Is extremely fast** - Sub-second page loads, perfect Lighthouse scores  
✅ **Is SEO-strong** - Ranks well, drives organic traffic  
✅ **Is future-proof** - Can evolve without rebuilding  

**Can later add:**
- Blog with CMS
- Case studies
- Admin panel
- Client portal
- E-commerce features

**WordPress is already out.**

---

## The Stack (Locked)

This is the same class of stack used by:
- Vercel
- Linear
- Notion marketing site
- Stripe marketing site

### 1. Framework: Next.js (App Router)

**Why:**
- ✅ Best SEO in React world
- ✅ Server-side rendering (SSR)
- ✅ Fastest page loads
- ✅ Scales from marketing site → web app
- ✅ Built-in image optimization
- ✅ API routes for future backend needs

**Anything else is a downgrade.**

**Version**: Next.js 14+ with App Router

---

### 2. Language: TypeScript

**Why:**
- ✅ Prevents silent bugs
- ✅ Scales cleanly as project grows
- ✅ Looks professional to clients & developers
- ✅ Better IDE support and autocomplete
- ✅ Easier refactoring

**Plain JavaScript = hobby-level for serious products.**

**Configuration**: Strict mode enabled

---

### 3. Styling: Tailwind CSS

**Why:**
- ✅ Perfect for design systems
- ✅ Easy dark/light mode
- ✅ Rapid iteration
- ✅ Pixel-level control
- ✅ No CSS file bloat

**This fits your theme-switcher system perfectly.**

**Custom Configuration**: Extended with design system tokens (spacing, colors, shadows)

---

### 4. Animations: Framer Motion

**Why:**
- ✅ Smooth hero animations
- ✅ Page transitions
- ✅ Micro-interactions
- ✅ Makes your site feel like a product, not a template

**Usage**: Hero sections, scroll animations, hover effects

---

### 5. Icons: Lucide Icons

**Why:**
- ✅ Clean, modern, tech aesthetic
- ✅ Matches your minimalist brand
- ✅ Tree-shakeable (only imports what you use)
- ✅ Consistent design language

**Alternative**: Heroicons (if preferred)

---

### 6. Fonts: Inter + Poppins (via next/font)

**Why:**
- ✅ **Inter**: Technical clarity, modern SaaS aesthetic
- ✅ **Poppins**: Strong, impactful headings
- ✅ This combo is used by modern SaaS brands
- ✅ Optimized loading via `next/font`

**Implementation:**
```typescript
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ weight: ['600', '700'], subsets: ['latin'] });
```

---

### 7. CMS: Sanity CMS (Headless)

**Why:**
- ✅ Update content without touching code
- ✅ Extremely fast
- ✅ Real-time collaboration
- ✅ Structured content modeling
- ✅ Image optimization built-in

**You can update:**
- Projects
- Blog posts
- Team members
- Services
- Case studies

**This is how real agencies manage content.**

**When to integrate**: After core pages are built

---

### 8. Deployment: Vercel

**Why:**
- ✅ Built for Next.js
- ✅ Auto-optimized
- ✅ Global CDN
- ✅ Free for now
- ✅ Zero-config deployments
- ✅ Automatic HTTPS

**Alternative**: Cloudflare Pages (for redundancy)

---

## Architecture Type

**You are building a:**

```
Marketing Site + Portfolio Platform
```

**Not a blog theme.**  
**Not a template site.**

### Architecture Pattern

```
Frontend (Next.js)
        ↓
Headless CMS (Sanity)
        ↓
Future Admin / Dashboard
```

This lets you evolve into a real product company later.

---

## Folder Structure

**This is important because messy structure = dead project later.**

```
agency/
├── app/
│   ├── page.tsx                 # Home page
│   ├── about/
│   │   └── page.tsx             # About page
│   ├── services/
│   │   └── page.tsx             # Services page
│   ├── projects/
│   │   ├── page.tsx             # Projects listing
│   │   └── [slug]/
│   │       └── page.tsx         # Individual project
│   ├── contact/
│   │   └── page.tsx             # Contact page
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Global styles + theme variables
│
├── components/
│   ├── Navbar.tsx               # Navigation
│   ├── Footer.tsx               # Footer
│   ├── Hero.tsx                 # Hero section
│   ├── ProjectCard.tsx          # Project card component
│   ├── ServiceCard.tsx          # Service card component
│   ├── SectionHeader.tsx        # Section heading component
│   ├── StyleSwitcher.tsx        # Theme switcher (mode + color)
│   └── ui/                      # Reusable UI components
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Modal.tsx
│
├── lib/
│   ├── sanity.ts                # Sanity client configuration
│   ├── data.ts                  # Static data (before CMS)
│   └── utils.ts                 # Utility functions
│
├── public/
│   ├── images/
│   │   ├── backgrounds/         # Background images
│   │   ├── projects/            # Project screenshots
│   │   └── team/                # Team photos
│   └── favicon.ico
│
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
├── next.config.js               # Next.js configuration
└── package.json                 # Dependencies
```

**This matches real SaaS codebases.**

---

## Data Flow

### Current Phase (Static Content)

```
Components → lib/data.ts → Render
```

All content is defined in `lib/data.ts` as TypeScript objects.

### Future Phase (CMS Integration)

```
Sanity CMS → API → Components → Render
```

Content is fetched from Sanity and rendered dynamically.

---

## Scalability Plan

### Phase 1: Marketing Site (Current)
- Home, About, Services, Projects, Contact pages
- Static content
- Theme switching
- SEO optimization

### Phase 2: CMS Integration
- Sanity CMS setup
- Dynamic project/blog content
- Image optimization
- Content preview

### Phase 3: Advanced Features
- Blog with categories/tags
- Case studies with detailed breakdowns
- Client testimonials
- Newsletter integration

### Phase 4: Product Evolution
- Admin dashboard
- Client portal
- Project management tools
- Analytics integration

**Each phase builds on the previous foundation without breaking changes.**

---

## Why This Stack Fits YOU Specifically

Because you:

✅ Already think in systems  
✅ Want scalability  
✅ Care about performance & SEO  
✅ Plan multiple future products  

**Using anything simpler is a strategic mistake.**

---

## Technical Decisions

### Why App Router (Not Pages Router)?

- ✅ Future of Next.js
- ✅ Better performance with React Server Components
- ✅ Simpler data fetching
- ✅ Built-in layouts and loading states

### Why Tailwind (Not CSS Modules)?

- ✅ Faster development
- ✅ No naming conflicts
- ✅ Built-in responsive design
- ✅ Perfect for design systems

### Why Sanity (Not WordPress)?

- ✅ Headless = full control over frontend
- ✅ No PHP, no security vulnerabilities
- ✅ Real-time collaboration
- ✅ Modern developer experience

### Why Vercel (Not Traditional Hosting)?

- ✅ Zero-config deployments
- ✅ Automatic scaling
- ✅ Edge network for global speed
- ✅ Built-in analytics

---

## Performance Targets

| Metric | Target | Why |
|--------|--------|-----|
| Lighthouse Performance | 95+ | Fast page loads |
| Lighthouse SEO | 100 | Search visibility |
| First Contentful Paint | < 1.5s | User perception |
| Time to Interactive | < 3.5s | Usability |
| Cumulative Layout Shift | < 0.1 | Visual stability |

**These are non-negotiable for a professional platform.**

---

## SEO Strategy

### Built-In SEO Features

- ✅ Server-side rendering (SSR)
- ✅ Automatic sitemap generation
- ✅ Meta tags per page
- ✅ Structured data (JSON-LD)
- ✅ Image optimization
- ✅ Fast page loads

### Implementation

Every page must include:
```typescript
export const metadata = {
  title: 'Page Title | Agency Name',
  description: 'Page description for SEO',
  openGraph: {
    title: 'Page Title',
    description: 'Page description',
    images: ['/og-image.jpg'],
  },
};
```

---

## What We Achieved

You now have:

✅ **A professional tech stack** - Used by industry leaders  
✅ **A scalability roadmap** - Evolves with your business  
✅ **A clear folder structure** - Organized like real SaaS companies  
✅ **Performance targets** - Measurable quality standards  
✅ **Future-proof foundation** - Won't need rebuilding  

**You are no longer "making a website". You are building a digital product platform.**

**And now you finally have the correct foundation.**
