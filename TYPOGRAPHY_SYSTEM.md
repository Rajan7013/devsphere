# Typography System

> **Professional Font System for Premium Agency Positioning**

This typography system is designed for premium agency positioning, high readability, strong SEO & UX signals, and a timeless look. Most developers ignore typography and their sites look cheap even with good layouts. We will not make that mistake.

---

## 1. Font Strategy (How Professionals Do It)

**A serious brand never uses random fonts.**

### Two-Font System

| Role | Font | Purpose |
|------|------|---------|
| **Primary Font** | Space Grotesk | Headings, brand voice, authority |
| **Secondary Font** | Inter | Body text, UI, readability |

**This creates hierarchy and authority.**

---

## 2. Primary Font — Brand Authority Font

### Space Grotesk

**This is your main identity font.**

#### Why Space Grotesk is Perfect

✅ **Modern tech feel** - Contemporary, engineered aesthetic  
✅ **Industry standard** - Used by AI, SaaS, Web3 companies  
✅ **Clean but distinctive** - Memorable without being decorative  
✅ **Geometric precision** - Matches your geometric logo perfectly  
✅ **Professional credibility** - Signals technical expertise  

#### Usage

| Element | Weight | Size (Desktop) | Size (Mobile) |
|---------|--------|----------------|---------------|
| **Hero Heading (H1)** | 700 (Bold) | 56px | 36px |
| **Section Titles (H2)** | 600 (SemiBold) | 40px | 28px |
| **Subsection Titles (H3)** | 600 (SemiBold) | 28px | 22px |
| **Card Titles (H4)** | 600 (SemiBold) | 22px | 18px |

#### Implementation

```css
/* Import Space Grotesk */
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600;700&display=swap');

/* Or use Next.js next/font */
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['600', '700'],
  display: 'swap',
});
```

---

## 3. Secondary Font — Readability Font

### Inter

**Best UI font on the internet.**

#### Why Inter is Perfect

✅ **Designed for screens** - Optimized for digital readability  
✅ **Extremely readable on mobile** - Clear at all sizes  
✅ **Google recommended** - Industry best practice  
✅ **Excellent Lighthouse metrics** - Fast loading, performance optimized  
✅ **Variable font support** - Flexible weight options  

#### Usage

| Element | Weight | Size |
|---------|--------|------|
| **Body Text** | 400 (Regular) | 16–18px |
| **Descriptions** | 400 (Regular) | 16px |
| **Buttons** | 500 (Medium) | 16px |
| **Forms** | 400–500 | 16px |
| **Small Text** | 400 (Regular) | 14px |
| **Navigation** | 500 (Medium) | 16px |

#### Implementation

```css
/* Import Inter */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

/* Or use Next.js next/font */
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});
```

---

## 4. Font Pairing Preview

**Your brand voice becomes:**

```
Space Grotesk = "We build systems"
Inter = "We are clear and professional"
```

### Industry Validation

**This is the same pairing philosophy used by:**

- ✅ **Linear** - Project management tool
- ✅ **Vercel** - Deployment platform
- ✅ **Notion** - Similar system (custom fonts but same strategy)
- ✅ **Stripe** - Payment platform (similar approach)

**This pairing will not age for 5+ years.**

---

## 5. Exact Font Sizes System (Responsive Safe)

**This avoids the mobile/desktop mismatch.**

### Headings (Space Grotesk)

| Level | Desktop | Mobile | Line Height | Weight |
|-------|---------|--------|-------------|--------|
| **H1** | 56px | 36px | 1.1 | 700 (Bold) |
| **H2** | 40px | 28px | 1.2 | 600 (SemiBold) |
| **H3** | 28px | 22px | 1.2 | 600 (SemiBold) |
| **H4** | 22px | 18px | 1.3 | 600 (SemiBold) |

### Body Text (Inter)

| Type | Size | Line Height | Weight |
|------|------|-------------|--------|
| **Normal Text** | 16–18px | 1.6 | 400 (Regular) |
| **Small Text** | 14px | 1.5 | 400 (Regular) |
| **Button Text** | 16px | 1.4 | 500 (Medium) |
| **Navigation** | 16px | 1.5 | 500 (Medium) |

**Never go below 14px (SEO + UX rule).**

### CSS Implementation

```css
/* Headings */
h1 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 56px;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

@media (max-width: 768px) {
  h1 {
    font-size: 36px;
  }
}

h2 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 40px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

@media (max-width: 768px) {
  h2 {
    font-size: 28px;
  }
}

/* Body */
body {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
}

p {
  font-size: 16px;
  line-height: 1.6;
}
```

---

## 6. Line Height Rules

**Bad spacing kills design quality.**

| Type | Line Height | Why |
|------|-------------|-----|
| **Headings** | 1.1 – 1.2 | Tight, impactful |
| **Body Text** | 1.6 – 1.8 | Readable, comfortable |
| **Small Text** | 1.5 | Compact but clear |
| **Buttons** | 1.4 | Centered, balanced |

### Benefits

✅ **Improved readability** - Easier to scan and read  
✅ **Better SEO engagement time** - Users stay longer  
✅ **Higher Lighthouse UX score** - Performance metrics  
✅ **Professional appearance** - Polished design  

---

## 7. Letter Spacing Rules

**Professional typographic polish.**

| Element | Letter Spacing | Why |
|---------|---------------|-----|
| **Headings** | -0.02em | Tighter, more impactful |
| **Buttons** | +0.05em | Easier to read, professional |
| **Navigation Links** | +0.03em | Clear, spaced out |
| **Body Text** | 0 (default) | Natural reading flow |
| **All Caps Text** | +0.1em | Improved readability |

### CSS Implementation

```css
h1, h2, h3, h4 {
  letter-spacing: -0.02em;
}

button, .btn {
  letter-spacing: 0.05em;
}

nav a {
  letter-spacing: 0.03em;
}

.uppercase {
  letter-spacing: 0.1em;
}
```

---

## 8. Font Loading (Performance & SEO)

**Critical for Core Web Vitals and SEO ranking.**

### Best Practices

✅ **Use woff2 format** - Modern, compressed format  
✅ **Self-host fonts** - Not CDN heavy loads  
✅ **Use font-display: swap** - Prevent invisible text  
✅ **Preload critical fonts** - Faster LCP  
✅ **Subset fonts** - Only load needed characters  

### Why This Matters

| Benefit | Impact |
|---------|--------|
| **Faster LCP** | Better Core Web Vitals |
| **Better performance** | Higher Lighthouse scores |
| **Higher SEO rank** | Google ranking factor |
| **Improved UX** | No font flash/flicker |

### Next.js Implementation (Recommended)

```typescript
// app/layout.tsx
import { Space_Grotesk, Inter } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['600', '700'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-inter',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

### CSS Variables

```css
:root {
  --font-heading: var(--font-space-grotesk), sans-serif;
  --font-body: var(--font-inter), sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
}

body, p, span, div {
  font-family: var(--font-body);
}
```

---

## 9. Final Typography System (Locked)

### Complete Font Stack

| Role | Font | Weights | Usage |
|------|------|---------|-------|
| **Brand / Headings** | Space Grotesk | 600, 700 | H1, H2, H3, H4, Hero text |
| **UI / Body** | Inter | 400, 500, 600 | Body text, buttons, forms, navigation |

### Fallback Stack

```css
--font-heading: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

---

## 10. Typography Checklist

### Implementation Checklist

- [ ] Space Grotesk installed (weights: 600, 700)
- [ ] Inter installed (weights: 400, 500, 600)
- [ ] Font loading optimized (woff2, font-display: swap)
- [ ] CSS variables defined (--font-heading, --font-body)
- [ ] Responsive font sizes (desktop/mobile)
- [ ] Line heights set (1.1-1.2 headings, 1.6-1.8 body)
- [ ] Letter spacing applied (headings, buttons, nav)
- [ ] Minimum font size 14px (never smaller)
- [ ] Fallback fonts configured
- [ ] Lighthouse performance tested

### Quality Checks

- [ ] Headings feel bold and authoritative
- [ ] Body text is comfortable to read
- [ ] Mobile text is large enough (no squinting)
- [ ] Line spacing feels natural
- [ ] No font loading flash (FOUT/FOIT)
- [ ] Core Web Vitals passing
- [ ] Typography matches brand identity

---

## 11. Tailwind CSS Configuration

**If using Tailwind, configure custom fonts:**

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        // Headings
        'h1-desktop': '56px',
        'h1-mobile': '36px',
        'h2-desktop': '40px',
        'h2-mobile': '28px',
        'h3-desktop': '28px',
        'h3-mobile': '22px',
        'h4-desktop': '22px',
        'h4-mobile': '18px',
        // Body
        'body': '16px',
        'small': '14px',
      },
      lineHeight: {
        'heading': '1.2',
        'body': '1.6',
      },
      letterSpacing: {
        'heading': '-0.02em',
        'button': '0.05em',
        'nav': '0.03em',
      },
    },
  },
};

export default config;
```

### Tailwind Usage

```html
<!-- Heading -->
<h1 class="font-heading text-h1-mobile md:text-h1-desktop leading-heading tracking-heading">
  Build Better Digital Products
</h1>

<!-- Body text -->
<p class="font-body text-body leading-body">
  We design and develop scalable web and mobile applications.
</p>

<!-- Button -->
<button class="font-body tracking-button font-medium">
  Start Project
</button>
```

---

## What This Achieves

✅ **Premium Brand Positioning** - Professional, authoritative typography  
✅ **High Readability** - Comfortable reading experience across devices  
✅ **Strong SEO Signals** - Fast loading, good UX metrics  
✅ **Timeless Design** - Won't look dated in 5+ years  
✅ **Performance Optimized** - Better Core Web Vitals, Lighthouse scores  
✅ **Consistent Hierarchy** - Clear visual structure  
✅ **Mobile-First** - Optimized for all screen sizes  

**This typography system matches the quality of your logo and design system.**
