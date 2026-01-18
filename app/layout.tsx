import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import Script from 'next/script'; // Import Script for JSON-LD
import './globals.css';

// 1. FONTS: Preloading with 'swap' for 0 Cumulative Layout Shift (CLS)
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'], // Added 500 for more heading options
  display: 'swap',
  variable: '--font-space-grotesk',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Added 700 for bold body text
  display: 'swap',
  variable: '--font-inter',
});

// 2. VIEWPORT: Explicit mobile optimization for 100% Mobile Score
export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5, // Accessibility best practice (don't block zooming)
};

// 3. METADATA: The SEO Powerhouse for #1 Google Ranking
export const metadata: Metadata = {
  metadataBase: new URL('https://devsphere-red.vercel.app'),

  // TITLE: Optimized for "DevSphere", "mobile development agency", "web development agency"
  title: {
    default: 'DevSphere — #1 Web & Mobile Development Agency | Custom App Development',
    template: '%s | DevSphere',
  },

  // DESCRIPTION: Keyword-rich for top ranking
  description: 'DevSphere is a leading web development agency and mobile app development company. We build custom web applications, mobile apps, and enterprise software for startups and businesses worldwide. Expert React, Next.js, React Native development by Rajan Prasaila Yadav.',

  // KEYWORDS: Comprehensive for all target searches
  keywords: [
    // Primary Keywords
    'DevSphere',
    'web development agency',
    'mobile development agency',
    'mobile app development company',
    'custom app development',

    // Service Keywords
    'web application development',
    'mobile app development',
    'React Native development',
    'Next.js development',
    'full-stack development',
    'UI/UX design agency',
    'enterprise software development',
    'custom software development',

    // Technology Keywords
    'React development agency',
    'Node.js development',
    'TypeScript development',
    'Progressive Web Apps',
    'cross-platform mobile apps',

    // Location & Branding
    'Rajan Prasaila Yadav',
    'DevSphere agency',
    'startup development partner',
    'scalable web solutions',
    'SEO-optimized development',
  ],

  authors: [{ name: 'Rajan Prasaila Yadav', url: 'https://devsphere-red.vercel.app/about' }],
  creator: 'DevSphere Digital Agency',
  publisher: 'DevSphere',
  category: 'Technology',

  // ROBOTS: Explicit command to index everything + AI bots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // CANONICAL: Protects against duplicate content
  alternates: {
    canonical: '/',
  },

  // VERIFICATION: Add your verification codes
  verification: {
    google: 'your-google-verification-code', // Add from Google Search Console
    // yandex: 'your-yandex-code',
    // bing: 'your-bing-code',
  },

  // ICONS: Perfect
  icons: {
    icon: [
      { url: '/Image/Logo/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/Image/Logo/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/Image/Logo/favicon-48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: [
      { url: '/Image/Logo/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    other: [
      { rel: 'icon', url: '/Image/Logo/favicon.ico' },
    ],
  },

  // OPEN GRAPH: For social sharing
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://devsphere-red.vercel.app',
    siteName: 'DevSphere',
    title: 'DevSphere — #1 Web & Mobile Development Agency',
    description: 'Leading web development agency and mobile app development company. Custom React, Next.js, and React Native development for startups and enterprises.',
    images: [
      {
        url: '/Image/Logo/logo-devsphere-social.png',
        width: 1200,
        height: 630,
        alt: 'DevSphere - Web & Mobile Development Agency',
      },
    ],
  },

  // TWITTER CARD: Large image for maximum visibility
  twitter: {
    card: 'summary_large_image',
    title: 'DevSphere — Web & Mobile Development Agency',
    description: 'Expert web and mobile app development. React, Next.js, React Native specialists.',
    images: ['/Image/Logo/logo-devsphere-social.png'],
    creator: '@devsphere', // Add your Twitter handle
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // 4. ENHANCED JSON-LD SCHEMA: For Google Knowledge Graph & AI Bots
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://devsphere-red.vercel.app/#organization',
    name: 'DevSphere',
    alternateName: 'DevSphere Digital Agency',
    url: 'https://devsphere-red.vercel.app',
    logo: {
      '@type': 'ImageObject',
      url: 'https://devsphere-red.vercel.app/Image/Logo/logo-devsphere-social.png',
      width: 1200,
      height: 630,
    },
    description: 'Leading web development agency and mobile app development company specializing in custom React, Next.js, and React Native development for startups and enterprises worldwide.',

    // Founder Information
    founder: {
      '@type': 'Person',
      name: 'Rajan Prasaila Yadav',
      jobTitle: 'Full-Stack Architect & Founder',
      url: 'https://devsphere-red.vercel.app/about',
    },

    // Service Offerings (Critical for ranking)
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Development',
            description: 'Custom web application development using React, Next.js, and modern frameworks',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobile App Development',
            description: 'Cross-platform mobile app development using React Native',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'UI/UX Design',
            description: 'User interface and user experience design for web and mobile applications',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Full-Stack Development',
            description: 'End-to-end software development from frontend to backend',
          },
        },
      ],
    },

    // Keywords for AI bots
    keywords: 'web development agency, mobile development agency, mobile app development company, React development, Next.js development, React Native development, custom app development, DevSphere',

    // Contact Information
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'Global',
      addressLocality: 'Worldwide Service',
    },

    // Social Media
    sameAs: [
      'https://www.linkedin.com/company/devsphere',
      'https://twitter.com/devsphere',
      'https://github.com/devsphere',
    ],

    // Contact Point
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      areaServed: 'Worldwide',
      availableLanguage: ['English'],
    },

    // Aggregate Rating (add when you have reviews)
    // aggregateRating: {
    //   '@type': 'AggregateRating',
    //   ratingValue: '5.0',
    //   reviewCount: '50',
    // },
  };

  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        {/* Preload hero image for faster LCP */}
        <link
          rel="preload"
          href="/Image/founder-rajan.webp"
          as="image"
          type="image/webp"
        />
      </head>
      <body className="font-body antialiased selection:bg-skin selection:text-white">

        {/* Inject JSON-LD Schema */}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />

        {children}
      </body>
    </html>
  );
}