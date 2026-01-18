# Layout System

> **Universal Layout & Grid System for Consistent, Responsive Design**

This is the most important part that separates real systems from random websites. Without a layout system, everything breaks on mobile and looks inconsistent page to page. This system ensures every page you build automatically looks clean on mobile, tablet, laptop, and large screens with one codebase.

---

## 1. The Core Principle

**This fixes 90% of layout problems.**

### Your Old Problem

✅ Desktop looks good  
❌ Mobile looks broken  
❌ Horizontal scroll appears  

### Root Cause

You were designing in pixels and guessing.

### Correct Rule

> **Pages must be built on a fixed grid + fluid scaling system.**

**This is how Apple, Stripe, and Linear build websites.**

---

## 2. The Universal Container System

**Everything must live inside ONE master container.**

**Never full-width text again.**

### Global Container Rule

| Screen | Max Width |
|--------|-----------|
| **Desktop** | 1280px |
| **Large screens** | 1440px (optional later) |

### CSS Implementation

```css
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding-left: 24px;
  padding-right: 24px;
}
```

### Tailwind Implementation

```html
<div class="max-w-7xl mx-auto px-6">
  <!-- Content -->
</div>
```

### This Single Rule Prevents

❌ Stretched layouts  
❌ Ugly wide text  
❌ Broken mobile scaling  

### Universal Section Structure

**Every section must follow this pattern:**

```html
<section>
  <div class="container">
    <!-- Content here -->
  </div>
</section>
```

**No exceptions. Ever.**

---

## 3. Section Spacing System (Vertical Rhythm)

**Random spacing is what makes sites look amateur.**

### Locked Vertical Spacing

| Device | Section Padding (Top & Bottom) |
|--------|-------------------------------|
| **Desktop** | 96px |
| **Mobile** | 64px |

### Tailwind Implementation

```html
<section class="py-16 md:py-24">
  <div class="container">
    <!-- Content -->
  </div>
</section>
```

**Breakdown:**
- `py-16` = 64px (mobile)
- `md:py-24` = 96px (desktop)

### All Sections Use Same Rhythm

✅ Hero  
✅ Services  
✅ Projects  
✅ About  
✅ Contact  
✅ Footer  

**This creates visual harmony automatically.**

---

## 4. Universal Grid System (The Backbone)

**All layouts are based on 12-column grid.**

### Responsive Column System

| Screen | Columns |
|--------|---------|
| **Mobile** | 1 |
| **Tablet** | 2 |
| **Desktop** | 3–4 |

### Universal Grid Pattern

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <!-- Grid items -->
</div>
```

### Standard Grid Configurations

| Section | Columns (Desktop) | Tailwind Class |
|---------|------------------|----------------|
| **Services** | 3 | `lg:grid-cols-3` |
| **Projects** | 3 | `lg:grid-cols-3` |
| **Blog** | 3 | `lg:grid-cols-3` |
| **Team** | 4 | `lg:grid-cols-4` |
| **Stats** | 4 | `lg:grid-cols-4` |
| **Features** | 2 | `lg:grid-cols-2` |

**Never invent new grid rules.**

### Grid Gap System

| Gap Size | Tailwind Class | Pixels |
|----------|----------------|--------|
| **Small** | `gap-4` | 16px |
| **Medium** | `gap-6` | 24px |
| **Large** | `gap-8` | 32px |

**Default: Use `gap-8` (32px) for most grids.**

---

## 5. Hero Section Layout Formula

**Every hero section must follow this structure.**

### Responsive Layout

| Screen | Layout |
|--------|--------|
| **Desktop** | 2 columns (text + image) |
| **Mobile** | 1 column (stacked) |

### Universal Hero Pattern

```html
<section class="py-16 md:py-24">
  <div class="container">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <!-- Text Column -->
      <div>
        <h1>Hero Heading</h1>
        <p>Hero description</p>
        <div class="flex gap-4">
          <button>Primary CTA</button>
          <button>Secondary CTA</button>
        </div>
      </div>
      
      <!-- Image Column -->
      <div>
        <img src="..." alt="..." />
      </div>
    </div>
  </div>
</section>
```

### This Guarantees

✅ Perfect stacking on mobile  
✅ Balanced layout on desktop  
✅ No page will ever break again  

---

## 6. Card System (Projects, Services, Blog)

**All cards must obey consistent rules.**

### Card Specifications

| Property | Value |
|----------|-------|
| **Border Radius** | 16px |
| **Padding** | 24px |
| **Shadow** | Soft (0 4px 20px rgba(0,0,0,0.08)) |
| **Background** | var(--bg-card) |

### Universal Card Class

```css
.card {
  background: var(--bg-card);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}
```

### Tailwind Card Implementation

```html
<div class="bg-bg-card rounded-2xl p-6 shadow-soft hover:shadow-strong transition-all hover:-translate-y-1">
  <!-- Card content -->
</div>
```

### Card Internal Structure

**Every card must follow this hierarchy:**

```html
<div class="card">
  <!-- Icon/Image -->
  <div class="icon">...</div>
  
  <!-- Title -->
  <h3>Card Title</h3>
  
  <!-- Description -->
  <p>Card description text</p>
  
  <!-- Optional CTA -->
  <a href="#">Learn More →</a>
</div>
```

**Now every card across the site looks related.**

---

## 7. Image System (Prevents Layout Shift)

**Images must NEVER control layout size.**

### Universal Image Rule

> **Images must be inside fixed-ratio boxes.**

### Aspect Ratio System

| Ratio | Usage | Tailwind Class |
|-------|-------|----------------|
| **16:9** | Hero images, screenshots | `aspect-[16/9]` |
| **4:3** | Project thumbnails | `aspect-[4/3]` |
| **1:1** | Profile images, icons | `aspect-square` |
| **3:2** | Blog featured images | `aspect-[3/2]` |

### Implementation

```html
<!-- 16:9 Image Container -->
<div class="aspect-[16/9] overflow-hidden rounded-2xl">
  <img src="..." alt="..." class="w-full h-full object-cover" />
</div>

<!-- Square Image Container -->
<div class="aspect-square overflow-hidden rounded-2xl">
  <img src="..." alt="..." class="w-full h-full object-cover" />
</div>
```

### This Prevents

❌ Jumping layouts  
❌ Broken grids  
❌ Mobile overflow  
❌ Cumulative Layout Shift (CLS)  

### Image Optimization Rules

- [ ] Use WebP/AVIF formats
- [ ] Lazy load below-the-fold images
- [ ] Set explicit width/height attributes
- [ ] Use responsive images (srcset)
- [ ] Optimize file size (50-150KB)

---

## 8. Page Structure Template

**Every page must follow this skeleton.**

### Universal Page Structure

```html
<!-- 1. Navbar -->
<nav>...</nav>

<!-- 2. Hero Section -->
<section class="hero py-16 md:py-24">
  <div class="container">
    <!-- Hero content -->
  </div>
</section>

<!-- 3. Content Sections (Repeatable) -->
<section class="py-16 md:py-24">
  <div class="container">
    <h2>Section Title</h2>
    <p>Section subtitle</p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Grid items -->
    </div>
  </div>
</section>

<!-- 4. CTA Section -->
<section class="py-16 md:py-24 bg-skin text-white">
  <div class="container text-center">
    <h2>Ready to Start?</h2>
    <button>Get Started</button>
  </div>
</section>

<!-- 5. Footer -->
<footer>...</footer>
```

**No page should invent new structure.**

---

## 9. Breakpoint System

**We only use Tailwind defaults. No chaos.**

### Standard Breakpoints

| Prefix | Screen Size | Device |
|--------|-------------|--------|
| **(none)** | < 768px | Mobile |
| **md:** | ≥ 768px | Tablet |
| **lg:** | ≥ 1024px | Desktop |
| **xl:** | ≥ 1280px | Large Desktop |
| **2xl:** | ≥ 1536px | Extra Large |

### Usage Examples

```html
<!-- Responsive Text Size -->
<h1 class="text-4xl md:text-5xl lg:text-6xl">
  Heading
</h1>

<!-- Responsive Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  <!-- Items -->
</div>

<!-- Responsive Spacing -->
<section class="py-16 md:py-24">
  <!-- Content -->
</section>

<!-- Responsive Visibility -->
<div class="hidden lg:block">
  Desktop only content
</div>
```

**Never use custom breakpoints.**

**This keeps behavior predictable.**

---

## 10. Layout Constitution

**Every future page must obey these rules:**

### The Five Laws

| Law | Rule |
|-----|------|
| **1. One Container** | All content inside max-width container |
| **2. One Section Rhythm** | 96px desktop / 64px mobile padding |
| **3. One Grid System** | 1/2/3-4 column responsive grid |
| **4. One Card System** | 16px radius, 24px padding, soft shadow |
| **5. One Hero Pattern** | 2-column desktop, stacked mobile |

**This is how large design systems scale.**

---

## 11. Complete Layout Examples

### Example 1: Services Page

```html
<section class="py-16 md:py-24">
  <div class="container">
    <!-- Section Header -->
    <div class="text-center mb-12">
      <h2 class="text-4xl md:text-5xl font-heading font-bold mb-4">
        Our Services
      </h2>
      <p class="text-lg text-text-muted max-w-2xl mx-auto">
        Comprehensive digital solutions for modern businesses
      </p>
    </div>
    
    <!-- Services Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Service Card -->
      <div class="bg-bg-card rounded-2xl p-6 shadow-soft hover:shadow-strong transition-all hover:-translate-y-1">
        <div class="w-12 h-12 bg-skin/10 rounded-xl flex items-center justify-center mb-4">
          <svg class="w-6 h-6 text-skin">...</svg>
        </div>
        <h3 class="text-xl font-heading font-semibold mb-2">
          Web Development
        </h3>
        <p class="text-text-muted mb-4">
          Build scalable, high-performance web applications
        </p>
        <a href="#" class="text-skin font-medium">
          Learn More →
        </a>
      </div>
      
      <!-- Repeat for other services -->
    </div>
  </div>
</section>
```

### Example 2: Projects Grid

```html
<section class="py-16 md:py-24">
  <div class="container">
    <h2 class="text-4xl font-heading font-bold mb-12">
      Featured Projects
    </h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Project Card -->
      <div class="bg-bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-strong transition-all">
        <!-- Project Image -->
        <div class="aspect-[16/9] overflow-hidden">
          <img src="..." alt="..." class="w-full h-full object-cover hover:scale-105 transition-transform" />
        </div>
        
        <!-- Project Info -->
        <div class="p-6">
          <h3 class="text-xl font-heading font-semibold mb-2">
            Project Name
          </h3>
          <p class="text-text-muted mb-4">
            Project description
          </p>
          <div class="flex gap-2">
            <span class="px-3 py-1 bg-skin/10 text-skin rounded-full text-sm">
              React
            </span>
            <span class="px-3 py-1 bg-skin/10 text-skin rounded-full text-sm">
              Next.js
            </span>
          </div>
        </div>
      </div>
      
      <!-- Repeat for other projects -->
    </div>
  </div>
</section>
```

### Example 3: Stats Section

```html
<section class="py-16 md:py-24 bg-bg-card">
  <div class="container">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
      <!-- Stat Item -->
      <div class="text-center">
        <div class="text-4xl md:text-5xl font-heading font-bold text-skin mb-2">
          150+
        </div>
        <div class="text-text-muted">
          Projects Completed
        </div>
      </div>
      
      <!-- Repeat for other stats -->
    </div>
  </div>
</section>
```

---

## 12. Layout Checklist

### Implementation Checklist

- [ ] Container system implemented (max-width: 1280px)
- [ ] Section spacing consistent (96px desktop / 64px mobile)
- [ ] Grid system using 1/2/3-4 columns
- [ ] Card system standardized (16px radius, 24px padding)
- [ ] Hero pattern implemented (2-column desktop, stacked mobile)
- [ ] Image aspect ratios fixed (16:9, 4:3, 1:1)
- [ ] Breakpoints using Tailwind defaults only
- [ ] No horizontal scroll on any device
- [ ] All sections follow same structure
- [ ] Page structure template followed

### Quality Checks

- [ ] Mobile layout stacks properly
- [ ] Tablet layout uses 2 columns
- [ ] Desktop layout uses 3-4 columns
- [ ] No content touches screen edges
- [ ] Vertical rhythm is consistent
- [ ] Cards have equal heights in grids
- [ ] Images don't cause layout shift
- [ ] Responsive text sizes work well
- [ ] No custom breakpoints used
- [ ] Layout feels harmonious across pages

---

## What You Have Now

### Complete Design System

| Layer | Status |
|-------|--------|
| **Brand Identity** | ✅ Logo, colors, typography |
| **Design Tokens** | ✅ Spacing, shadows, radius |
| **Theme System** | ✅ Light/dark + 5 skin colors |
| **Layout Architecture** | ✅ Container, grid, sections |

**You are no longer designing websites.**

**You are building a frontend framework.**

---

## What This Achieves

✅ **Consistent Layouts** - Every page follows same system  
✅ **Mobile-First** - Perfect responsive behavior  
✅ **No Horizontal Scroll** - Ever, on any device  
✅ **Visual Harmony** - Consistent spacing and rhythm  
✅ **Scalable System** - Add pages without redesigning  
✅ **Professional Quality** - Matches enterprise standards  
✅ **Fast Development** - Reuse patterns, don't reinvent  
✅ **Maintainable Code** - One system, easy updates  

**This layout system is the foundation that makes everything else work.**
