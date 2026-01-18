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

// 3. METADATA: The SEO Powerhouse
export const metadata: Metadata = {
  metadataBase: new URL('https://devsphere.agency'), // Must match your real domain

  // TITLE: Perfectly matches your H1 & H3 for keyword consistency
  title: {
    default: 'DevSphere — Web & Mobile App Development Agency | Revenue-Generating Platforms',
    template: '%s | DevSphere Digital Agency',
  },

  // DESCRIPTION: The "Sales Pitch" in Google Results. 
  // Targets: "Funded Startups", "Revenue", "Full-Stack", "Founder Name"
  description: 'DevSphere helps funded startups & enterprises build fast, secure, and revenue-generating web & mobile apps. Expert Full-Stack Development, UI/UX Design, & SEO strategies by Rajan Prasaila Yadav.',

  // KEYWORDS: Expanded to cover "SEO Expert" and specific tech stacks
  keywords: [
    'Web Development Agency',
    'Mobile App Development',
    'React Native Experts',
    'Next.js Developers',
    'UI/UX Design Services',
    'Enterprise Software Solutions',
    'SEO Expert Consultancy',
    'Rajan Prasaila Yadav', // Personal Branding
    'Custom Software Engineering',
    'Startup Tech Partner'
  ],

  authors: [{ name: 'Rajan Prasaila Yadav', url: 'https://devsphere.agency/about' }],
  creator: 'DevSphere Digital Agency',
  publisher: 'DevSphere',

  // ROBOTS: Explicit command to index everything
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

  // CANONICAL: Protects against duplicate content
  alternates: {
    canonical: '/',
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

  // OPEN GRAPH: For LinkedIn/Facebook/WhatsApp sharing
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://devsphere.agency',
    siteName: 'DevSphere',
    title: 'DevSphere — High-Performance Web & Mobile App Agency',
    description: 'We build revenue-generating digital platforms for startups and enterprises. Founded by Rajan Prasaila Yadav.',
    images: [
      {
        url: '/Image/Logo/logo-devsphere-social.png',
        width: 1200,
        height: 630,
        alt: 'DevSphere - Building Revenue-Generating Platforms',
      },
    ],
  },

  // TWITTER CARD: Large image for maximum visibility
  twitter: {
    card: 'summary_large_image',
    title: 'DevSphere — Web & Mobile App Development Agency',
    description: 'We help startups build scalable, revenue-generating digital products.',
    images: ['/Image/Logo/logo-devsphere-social.png'],
    creator: '@yourtwitterhandle', // Add this if you have one
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // 4. JSON-LD SCHEMA: This communicates directly with Google's Knowledge Graph
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DevSphere',
    url: 'https://devsphere.agency',
    logo: 'https://devsphere.agency/Image/Logo/logo-devsphere-social.png',
    founder: {
      '@type': 'Person',
      name: 'Rajan Prasaila Yadav',
      jobTitle: 'Full-Stack Architect & Digital Product Strategist'
    },
    description: 'DevSphere is a full-service web and mobile app development agency specializing in high-performance digital platforms.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN', // Assuming India based on context, change if needed
      addressLocality: 'Global Service'
    },
    sameAs: [
      'https://www.linkedin.com/in/rajan-prasaila-yadav', // Replace with actual links
      'https://twitter.com/devsphere',
      'https://github.com/devsphere'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-XXXXXXXXXX', // Add your business number
      contactType: 'customer service',
      areaServed: 'World'
    }
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