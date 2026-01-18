# Design System Documentation

> **The Visual Operating System for the Agency Platform**

This document defines the complete design system that governs all visual decisions across the platform. Every component, page, and interaction must follow these rules to maintain consistency and premium quality.

---

## 1. Layout Grid System

The foundation of all layouts. **Non-negotiable.**

### Container Rules

```
Max Width: 1280px
Padding: 24px (left/right)
```

**Visual Structure:**
```
Screen edge
   ↓ 24px padding
[  1280px container  ]
   ↑ 24px padding
Screen edge
```

### Why This Matters
- Prevents content from stretching too wide on large screens
- Maintains readability and visual hierarchy
- Matches modern SaaS standards (Vercel, Linear, Stripe)

**Implementation:**
```css
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}
```

---

## 2. Spacing System

**No random margins or padding allowed.**

Use only these predefined values:

| Name | Value | Usage |
|------|-------|-------|
| `xs` | 4px | Tight spacing, icon gaps |
| `sm` | 8px | Small gaps between related items |
| `md` | 16px | Standard component spacing |
| `lg` | 24px | Section padding, card spacing |
| `xl` | 40px | Large gaps between sections |
| `2xl` | 64px | Section spacing (mobile) |
| `3xl` | 96px | Section spacing (desktop) |

### Section Spacing Rule

**Every major section must use:**

| Device | Top Padding | Bottom Padding |
|--------|-------------|----------------|
| Desktop | 96px | 96px |
| Mobile | 64px | 64px |

**This single rule makes your site look professional instantly.**

**Implementation:**
```css
.section {
  padding-top: 96px;
  padding-bottom: 96px;
}

@media (max-width: 768px) {
  .section {
    padding-top: 64px;
    padding-bottom: 64px;
  }
}
```

---

## 3. Typography System

**No random font sizes.**

### Headings

| Element | Desktop Size | Mobile Size | Font Weight | Line Height |
|---------|--------------|-------------|-------------|-------------|
| H1 | 56px | 40px | 700 (Bold) | 1.2 |
| H2 | 40px | 32px | 700 (Bold) | 1.3 |
| H3 | 28px | 24px | 600 (Semibold) | 1.4 |
| H4 | 20px | 18px | 600 (Semibold) | 1.5 |

### Body Text

| Type | Size | Font Weight | Line Height |
|------|------|-------------|-------------|
| Normal text | 16px | 400 (Regular) | 1.6 |
| Small text | 14px | 400 (Regular) | 1.5 |

### Font Families

**Primary Font Stack:**
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

**Heading Font (Optional):**
```css
font-family: 'Poppins', 'Inter', sans-serif;
```

**Why:**
- **Inter**: Technical clarity, modern SaaS aesthetic
- **Poppins**: Strong, impactful headings

---

## 4. Color System

The platform uses a **two-layer theming system**:

1. **Theme Modes** (2 options): Light/Dark
2. **Theme Colors** (5 skins): Red/Orange/Green/Blue/Pink

**Total Combinations**: 2 modes × 5 colors = **10 unique themes**

---

### Layer 1: Theme Modes (Light/Dark)

**Controlled by**: `.dark` class in `app/globals.css`

#### Light Mode (Default)

| Purpose | Variable | Hex Code | Description |
|---------|----------|----------|-------------|
| Background | `--bg-main` | `#f2f2fc` | Pale Blue-Grey |
| Card/Content | `--bg-card` | `#fdf9ff` | Off-White |
| Text Primary | `--text-main` | `#302e4d` | Dark Blue |
| Text Muted | `--text-muted` | `#6e6d7a` | Muted Grey |

#### Dark Mode

| Purpose | Variable | Hex Code | Description |
|---------|----------|----------|-------------|
| Background | `--bg-main` | `#151515` | Deep Grey |
| Card/Content | `--bg-card` | `#222222` | Dark Grey |
| Text Primary | `--text-main` | `#ffffff` | White |
| Text Muted | `--text-muted` | `#a0a0a0` | Light Grey |

**What Changes:**
- ✅ Background colors (inverted)
- ✅ Text colors (inverted for readability)
- ✅ Border colors
- ✅ Card/container backgrounds

---

### Layer 2: Theme Colors (Skin Colors)

**Controlled by**: `--skin-color` variable in `components/StyleSwitcher.tsx`

| Skin Name | Hex Code | Visual Color | Usage |
|-----------|----------|--------------|-------|
| `color-1` | `#ec1839` | 🔴 Red | Default accent |
| `color-2` | `#fa5b0f` | 🟠 Orange | Alternative accent |
| `color-3` | `#37b182` | 🟢 Green | Alternative accent |
| `color-4` | `#1854b4` | 🔵 Blue | Alternative accent |
| `color-5` | `#f021b2` | 🩷 Pink | Alternative accent |

---

### What Changes When Skin Color Switches

The `--skin-color` variable updates globally, instantly affecting:

1. **Buttons**: Background color of primary buttons (e.g., "Hire Me", "Contact Us")
2. **Icons**: Primary color of icons in Navbar, Services, Contact sections
3. **Typography**: Highlight spans (e.g., name highlights, emphasized text)
4. **Animations**: Pulsing circles, hover effects, animated elements
5. **Scrollbar**: Browser scrollbar thumb color
6. **Text Selection**: Highlight color when selecting text
7. **Links**: Active/hover states for navigation and links

---

### CSS Variable System

**Theme Mode Variables** (defined in `globals.css`):
```css
:root {
  --bg-main: #f2f2fc;
  --bg-card: #fdf9ff;
  --text-main: #302e4d;
  --text-muted: #6e6d7a;
}

.dark {
  --bg-main: #151515;
  --bg-card: #222222;
  --text-main: #ffffff;
  --text-muted: #a0a0a0;
}
```

**Skin Color Variable** (defined in `StyleSwitcher.tsx`):
```css
:root {
  --skin-color: #ec1839; /* Default: Red */
}
```

---

### Tailwind Integration

**Tailwind Config** (`tailwind.config.ts`):
```typescript
colors: {
  skin: 'var(--skin-color)',
  'bg-main': 'var(--bg-main)',
  'bg-card': 'var(--bg-card)',
  'text-main': 'var(--text-main)',
  'text-muted': 'var(--text-muted)',
}
```

**CSS Classes That Inherit Skin Color:**
- `text-skin` - Text color
- `bg-skin` - Background color
- `border-skin` - Border color
- `fill-skin` - SVG fill color

**All components using these classes automatically inherit the active skin color.**

---

## 5. Border Radius System

**One of the biggest amateur mistakes is mixed rounding.**

| Element | Radius | Usage |
|---------|--------|-------|
| Buttons | 10px | All button elements |
| Cards | 16px | Content cards, containers |
| Images | 20px | Profile images, thumbnails |
| Modals | 24px | Dialogs, popups |

**Consistency = Premium Feel**

---

## 6. Shadow System

**Only 2 shadow types allowed:**

| Type | CSS Value | Usage |
|------|-----------|-------|
| **Soft** | `0 4px 20px rgba(0, 0, 0, 0.08)` | Cards, containers |
| **Strong** | `0 8px 30px rgba(0, 0, 0, 0.15)` | Hover states, elevated elements |

**Theme-Aware Variations:**

In dark mode, use lighter shadows:
```css
.dark .shadow-soft {
  box-shadow: 0 4px 20px rgba(255, 255, 255, 0.05);
}

.dark .shadow-strong {
  box-shadow: 0 8px 30px rgba(255, 255, 255, 0.1);
}
```

**No random shadows.**

---

## 7. Button System

**You only need 2 button types:**

### Primary Button

**Usage**: Main CTAs (Hire Me, Start Project, Contact Us)

**Styling:**
```css
.btn-primary {
  background-color: var(--skin-color);
  color: white;
  padding: 12px 32px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(var(--skin-color-rgb), 0.3);
}
```

### Secondary Button

**Usage**: Secondary actions (View Projects, Learn More)

**Styling:**
```css
.btn-secondary {
  background-color: transparent;
  color: var(--skin-color);
  border: 2px solid var(--skin-color);
  padding: 12px 32px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background-color: var(--skin-color);
  color: white;
}
```

**Never invent new button styles later.**

---

## Implementation Checklist

When building any new component or page, verify:

- [ ] Uses 1280px max-width container with 24px padding
- [ ] Uses only predefined spacing values (4px, 8px, 16px, 24px, 40px, 64px, 96px)
- [ ] Sections use 96px/64px top/bottom padding (desktop/mobile)
- [ ] Typography follows H1-H4 hierarchy with correct sizes
- [ ] Colors use CSS variables (`--skin-color`, `--bg-main`, etc.)
- [ ] All theme-aware elements use Tailwind classes (`text-skin`, `bg-skin`)
- [ ] Border radius matches element type (buttons: 10px, cards: 16px, images: 20px)
- [ ] Shadows use only soft or strong variants
- [ ] Buttons are either primary or secondary (no custom styles)
- [ ] Works flawlessly in all 10 theme combinations (2 modes × 5 colors)

---

## What We Achieved

You now have:

✅ **A design constitution** - Every future page must obey these rules  
✅ **Premium visual quality** - Matches $20k agency sites  
✅ **Scalability** - System grows with your platform  
✅ **Consistency** - No random design decisions  
✅ **Theme flexibility** - 10 unique theme combinations that work perfectly

**This is your visual operating system. Build everything on top of this foundation.**
