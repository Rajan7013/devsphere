# SEO Operations Playbook

> **Professional SEO Execution System for Digital Agencies**

This is your permanent SEO operations system — the same structure used by real digital agencies. This is not theory. This is an execution framework.

**Print it. Save it. Follow it.**

---

## 1. Daily Operations (Automatic, Not Manual)

**These must be active 24/7. If these are not installed, SEO is already broken.**

| System | Purpose | Status Check |
|--------|---------|--------------|
| **Google Analytics 4** | User behavior tracking | ✅ Active & collecting data |
| **Google Search Console** | Indexing & search data | ✅ Verified & monitoring |
| **Sitemap.xml** | Page discovery | ✅ Submitted to GSC |
| **Robots.txt** | Crawl control | ✅ Configured correctly |
| **Core Web Vitals** | Speed & UX ranking | ✅ Passing targets |

### Setup Verification

```bash
# Check if systems are active
✓ GA4: https://analytics.google.com
✓ GSC: https://search.google.com/search-console
✓ Sitemap: https://yourdomain.com/sitemap.xml
✓ Robots: https://yourdomain.com/robots.txt
✓ Core Web Vitals: https://pagespeed.web.dev
```

**If any system is not active, fix immediately before proceeding.**

---

## 2. Weekly SEO Checklist (15–20 Minutes)

**This prevents silent ranking damage.**

### Every Monday Morning

#### A. Google Search Console Health Check

**Navigate to:** [search.google.com/search-console](https://search.google.com/search-console)

| Check | Location | Action |
|-------|----------|--------|
| **Indexing Errors** | Pages → Indexing → Errors | Fix all errors immediately |
| **Mobile Issues** | Core Web Vitals → Mobile | Resolve mobile usability problems |
| **Manual Actions** | Security & Manual Actions | Must be clean (no penalties) |
| **Security Issues** | Security & Manual Actions | Must be empty |

**If errors exist, fix immediately.**

---

#### B. Website Health Check

| Check | Tool | Fix If Broken |
|-------|------|---------------|
| **Broken Links (404s)** | Screaming Frog / Ahrefs | Update or redirect |
| **Forms Working** | Manual test | Fix form submissions |
| **Page Speed (Mobile)** | PageSpeed Insights | Optimize slow pages |
| **HTTPS Active** | Browser check | Ensure SSL certificate valid |

**A broken site never ranks.**

---

#### C. Content Performance Review

**In GSC → Performance:**

Check:
1. **Which queries increased** (capitalize on momentum)
2. **Which pages dropped** (investigate and fix)
3. **New ranking keywords** (expand content)

**This tells you what Google likes or dislikes.**

### Weekly Checklist Template

```markdown
## Weekly SEO Check - [Date]

### Google Search Console
- [ ] Indexing errors: [Count] → [Action taken]
- [ ] Mobile issues: [Count] → [Action taken]
- [ ] Manual actions: Clean ✓
- [ ] Security issues: Clean ✓

### Website Health
- [ ] Broken links: [Count] → [Fixed]
- [ ] Forms tested: Working ✓
- [ ] Page speed (mobile): [Score] → [Action]

### Performance
- [ ] Top gaining query: [Query] → [Position change]
- [ ] Top losing page: [Page] → [Investigation]
- [ ] New keywords: [Count]
```

---

## 3. Monthly SEO Checklist (1–2 Hours)

**This is your growth engine.**

### First Week of Each Month

#### A. Keyword Ranking Review

**Track position changes month-over-month:**

| Page | Target Keyword | Last Month | This Month | Change |
|------|----------------|------------|------------|--------|
| `/services/web-development` | web development agency | #25 | #18 | +7 ↑ |
| `/services/mobile-app` | mobile app development | #30 | #23 | +7 ↑ |
| `/services/ui-ux-design` | UI/UX design services | #40 | #35 | +5 ↑ |
| `/projects` | portfolio development | #50 | #45 | +5 ↑ |

**SEO is slow but measurable. Track improvement month to month.**

---

#### B. Internal Linking Optimization

**Every month, strengthen your internal link structure:**

**Add strategic links from:**

```
Homepage
  ↓ Link to
Service Pages (Web Dev, Mobile App, UI/UX)
  ↓ Link to
Related Projects
  ↓ Link back to
Service Pages
```

**Example Monthly Links to Add:**

| From Page | To Page | Anchor Text |
|-----------|---------|-------------|
| Homepage | `/services/web-development` | "web development services" |
| Web Dev Service | `/projects/saas-platform` | "SaaS platform case study" |
| Project Page | `/services/ui-ux-design` | "UI/UX design expertise" |

**This strengthens topical authority.**

---

#### C. Content Upgrade

**Pick 1 important page each month and improve it:**

**Improvement Checklist:**

- [ ] Add 300–500 words of valuable content
- [ ] Add FAQ section (3-5 questions)
- [ ] Improve heading structure (H2/H3)
- [ ] Add relevant images with alt text
- [ ] Update meta description
- [ ] Add internal links (3-5)
- [ ] Add schema markup if missing

**Google rewards fresh improvements.**

**Example Monthly Content Plan:**

| Month | Page to Upgrade | Improvements |
|-------|----------------|--------------|
| January | `/services/web-development` | Add FAQs, case studies, 500 words |
| February | `/services/mobile-app` | Add process section, testimonials |
| March | `/projects` | Add project categories, filters |
| April | `/about` | Add team bios, company story |

---

#### D. Backlink Review

**In GSC → Links:**

Check:
1. **New backlinks** (celebrate quality links)
2. **Spam links** (identify low-quality sources)
3. **Disavow spam** if needed (use Google Disavow Tool)

**Backlink Quality Assessment:**

| Backlink Source | Domain Authority | Quality | Action |
|----------------|------------------|---------|--------|
| dev.to | High | ✅ Good | Keep |
| industry-blog.com | Medium | ✅ Good | Keep |
| spammy-directory.xyz | Low | ❌ Spam | Disavow |

---

### Monthly Checklist Template

```markdown
## Monthly SEO Review - [Month Year]

### Keyword Rankings
- [ ] Top 5 keywords tracked
- [ ] Position changes documented
- [ ] Improvement strategy for declining keywords

### Internal Linking
- [ ] 5-10 new strategic links added
- [ ] Link from: [Pages]
- [ ] Link to: [Pages]

### Content Upgrade
- [ ] Page selected: [URL]
- [ ] Words added: [Count]
- [ ] FAQs added: [Count]
- [ ] Schema markup: Added ✓

### Backlinks
- [ ] New backlinks: [Count]
- [ ] Quality backlinks: [Count]
- [ ] Spam links: [Count] → Disavowed
```

---

## 4. Quarterly SEO Checklist (Deep Optimization)

**This is where you outperform competitors.**

### Every 3 Months (January, April, July, October)

#### A. Full Site Audit

**Comprehensive technical review:**

| Audit Area | Tools | Target |
|------------|-------|--------|
| **Page Speed (Mobile)** | PageSpeed Insights | 95+ |
| **Unused CSS/JS** | Chrome DevTools Coverage | < 20% unused |
| **Image Sizes** | Lighthouse | All optimized |
| **Accessibility** | WAVE, Lighthouse | 100 score |
| **Broken Links** | Screaming Frog | 0 broken |
| **Duplicate Content** | Siteliner | 0 duplicates |
| **Mobile Usability** | GSC Mobile Report | 0 issues |

**Technical SEO keeps your site trusted.**

---

#### B. Keyword Expansion

**Add new service landing pages for:**

| New Page | Target Keyword | Search Volume | Difficulty |
|----------|----------------|---------------|------------|
| `/services/hire-web-developer` | hire web developer | 2,400/mo | Medium |
| `/services/saas-development` | SaaS development agency | 1,200/mo | Medium |
| `/services/ui-ux-company` | UI/UX design company | 1,800/mo | Medium |
| `/services/portfolio-development` | portfolio website developer | 900/mo | Low |

**This expands your keyword footprint.**

---

#### C. Competitor Analysis

**Research top competitors:**

**Search for:**
- "web development agency"
- "mobile app development company"
- "UI/UX design studio"

**Analyze:**

| Competitor | Ranking Page | Content Length | Backlinks | What They Do Better |
|------------|--------------|----------------|-----------|---------------------|
| Competitor A | `/services` | 2,500 words | 150 | Detailed case studies |
| Competitor B | `/web-dev` | 1,800 words | 200 | Video testimonials |
| Competitor C | `/portfolio` | 3,000 words | 180 | Interactive demos |

**Then build better pages.**

---

### Quarterly Checklist Template

```markdown
## Quarterly SEO Deep Dive - Q[X] [Year]

### Full Site Audit
- [ ] Page speed: [Score] → [Improvements made]
- [ ] Unused code: [%] → [Cleaned up]
- [ ] Images optimized: [Count]
- [ ] Accessibility score: [Score]
- [ ] Broken links fixed: [Count]

### Keyword Expansion
- [ ] New pages created: [Count]
- [ ] Target keywords: [List]
- [ ] Content written: [Word count]

### Competitor Analysis
- [ ] Competitors analyzed: [Count]
- [ ] Insights gained: [Summary]
- [ ] Action items: [List]
```

---

## 5. Lead Tracking System

**SEO without tracking money is useless.**

### A. Google Analytics Events

**Track these conversion actions:**

| Action | Event Name | Category | Value |
|--------|-----------|----------|-------|
| **Contact Form Submit** | `form_submit` | Lead Generation | High |
| **Start Project Button** | `cta_click` | Conversion | High |
| **Email Click** | `email_click` | Lead | Medium |
| **Phone Click** | `phone_click` | Lead | Medium |
| **Newsletter Signup** | `newsletter_signup` | Lead | Medium |

**This tells you which pages make money.**

### B. Event Tracking Implementation

```typescript
// Track contact form submission
gtag('event', 'form_submit', {
  'event_category': 'Lead Generation',
  'event_label': 'Contact Form',
  'value': 1
});

// Track CTA button clicks
gtag('event', 'cta_click', {
  'event_category': 'Conversion',
  'event_label': 'Start Project',
  'value': 1
});

// Track email clicks
gtag('event', 'email_click', {
  'event_category': 'Lead',
  'event_label': 'Email Contact',
  'value': 1
});

// Track phone clicks
gtag('event', 'phone_click', {
  'event_category': 'Lead',
  'event_label': 'Phone Contact',
  'value': 1
});
```

---

### C. User Behavior Analysis

**Using GA4 + Hotjar/Clarity:**

Track:

| Metric | Insight | Action |
|--------|---------|--------|
| **Country with most conversions** | Target future ads | Create location pages |
| **Pages with longest sessions** | High engagement | Replicate format |
| **Most clicked buttons** | User intent | Optimize placement |
| **Scroll depth** | Content consumption | Improve low-scroll pages |
| **Exit pages** | Drop-off points | Fix or improve |

**Then improve those pages.**

---

## 6. Geo & Time Analytics

**GA4 provides valuable insights:**

### Geographic Data

| Country | Sessions | Conversions | Conversion Rate |
|---------|----------|-------------|-----------------|
| United States | 5,000 | 50 | 1.0% |
| United Kingdom | 2,000 | 15 | 0.75% |
| Canada | 1,500 | 12 | 0.8% |
| India | 3,000 | 20 | 0.67% |

### Time Data

| Time of Day | Peak Traffic | Best Conversion Time |
|-------------|--------------|---------------------|
| 9 AM - 12 PM | High | 10 AM - 11 AM |
| 12 PM - 3 PM | Medium | 1 PM - 2 PM |
| 3 PM - 6 PM | High | 4 PM - 5 PM |
| 6 PM - 9 PM | Low | - |

**This helps you:**
- ✅ Target future ads
- ✅ Create location-based pages later
- ✅ Schedule content publishing
- ✅ Optimize support hours

---

## 7. Legal User Tracking

**What you MAY track:**

✅ **Allowed:**
- Country
- City
- Device type
- Browser
- Behavior on site
- Session duration
- Pages visited

❌ **Must NOT store without consent:**
- Exact IP addresses
- Personal identity information
- Email addresses (without opt-in)
- Phone numbers (without opt-in)

### GDPR Compliance

**Required:**
- [ ] Cookie consent banner
- [ ] Privacy policy page
- [ ] Data processing agreement
- [ ] User data deletion option
- [ ] Analytics anonymization

**Use cookie banner for GDPR safety.**

---

## 8. Google Maps Strategy (Digital Business)

**Even as a digital-only agency, use Google Business Profile.**

### Setup Steps

1. **Create Google Business Profile**
   - Go to: [business.google.com](https://business.google.com)
   - Click "Manage now"

2. **Business Information**

| Field | Value |
|-------|-------|
| **Business Name** | DevSphere Digital Agency |
| **Category** | Digital Agency, Web Development Company |
| **Website** | https://yourdomain.com |
| **Phone** | Your business phone |
| **Service Areas** | Worldwide (or specific cities) |
| **Description** | Keyword-rich description (750 chars) |

3. **Optimize Description**

```
DevSphere is a full-stack web and mobile app development agency 
specializing in modern web applications, UI/UX design, and digital 
product development. We serve clients worldwide with expert 
development services including React, Next.js, TypeScript, and 
cloud solutions. Our team delivers scalable, high-performance 
digital products for startups and enterprises.
```

**This gives:**
- ✅ Map visibility
- ✅ Trust signals
- ✅ Local brand authority
- ✅ Google Knowledge Panel

---

## 9. Content + SEO Flywheel

**This is your long-term ranking engine.**

### The Compound Authority System

```
Service Page (Pillar Content)
        ↓
    Creates
        ↓
Project Case Study (Proof)
        ↓
    Inspires
        ↓
Blog Article (Educational)
        ↓
    Links to
        ↓
Internal Linking (Authority Flow)
        ↓
    Results in
        ↓
Higher Domain Authority
        ↓
    Leads to
        ↓
Better Rankings
```

**This is how authority compounds.**

### Example Flywheel

| Month | Content Type | Topic | Links To |
|-------|--------------|-------|----------|
| Month 1 | Service Page | Web Development Services | - |
| Month 2 | Case Study | SaaS Platform Project | Web Dev Service |
| Month 3 | Blog Post | Next.js Performance Tips | Web Dev, Case Study |
| Month 4 | Service Page | Mobile App Development | Web Dev |
| Month 5 | Case Study | Mobile App Project | Mobile Service |
| Month 6 | Blog Post | React Native Best Practices | Mobile Service, Case Study |

---

## 10. Why This System Works

### What Most People Do

❌ **Random Approach:**
- Post random blogs
- Buy backlinks
- Hope for rankings
- Give up after 2 months

### What You're Building

✅ **Structured SEO Machine:**
- Systematic content creation
- Strategic internal linking
- Quality backlink earning
- Consistent optimization
- Long-term commitment

**Google trusts systems, not tricks.**

---

## Final Reality Check

### SEO Timeline Expectations

| Timeframe | Expected Results |
|-----------|------------------|
| **Month 1-3** | Foundation setup, initial movement |
| **Month 3-6** | Visible rankings, page 2-3 positions |
| **Month 6-12** | Page 1 potential, steady traffic growth |
| **Month 12+** | Strong authority, category dominance |

**Most people quit before month 3. You won't.**

---

## Complete Operations Summary

### Daily (Automatic)
- ✅ GA4 tracking
- ✅ GSC monitoring
- ✅ Sitemap active
- ✅ Robots.txt configured
- ✅ Core Web Vitals passing

### Weekly (15-20 min)
- ✅ GSC error check
- ✅ Website health check
- ✅ Content performance review

### Monthly (1-2 hours)
- ✅ Keyword ranking review
- ✅ Internal linking optimization
- ✅ Content upgrade (1 page)
- ✅ Backlink review

### Quarterly (Deep dive)
- ✅ Full site audit
- ✅ Keyword expansion
- ✅ Competitor analysis

### Ongoing
- ✅ Lead tracking
- ✅ User behavior analysis
- ✅ Geo & time analytics
- ✅ Content flywheel

---

## What You Now Have

✅ **A full professional SEO operating system**  
✅ **Not advice. Not hacks. A real growth framework.**  
✅ **The same system real agencies use**  
✅ **Measurable, systematic, compound growth**  

**This is how agencies build ranking empires.**

**Print this. Save this. Execute this.**
