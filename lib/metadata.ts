import { Metadata } from 'next'

// Additional meta tags for specific pages
export const homePageMetadata: Metadata = {
    title: 'DevSphere — #1 Web & Mobile Development Agency | Custom App Development',
    description: 'DevSphere is a leading web development agency and mobile app development company. We build custom web applications, mobile apps, and enterprise software for startups and businesses worldwide.',
    keywords: 'DevSphere, web development agency, mobile development agency, mobile app development company, custom app development',
    openGraph: {
        title: 'DevSphere — #1 Web & Mobile Development Agency',
        description: 'Leading web development agency and mobile app development company',
        url: 'https://devsphere-red.vercel.app',
        type: 'website',
    },
}

export const aboutPageMetadata: Metadata = {
    title: 'About DevSphere — Expert Web & Mobile Development Team',
    description: 'Learn about DevSphere, a leading web and mobile development agency founded by Rajan Prasaila Yadav. Expert team specializing in React, Next.js, and React Native development.',
    keywords: 'DevSphere team, Rajan Prasaila Yadav, web development experts, mobile app developers',
}

export const servicesPageMetadata: Metadata = {
    title: 'Our Services — Web Development, Mobile Apps & UI/UX Design',
    description: 'DevSphere offers comprehensive web development, mobile app development, UI/UX design, and full-stack development services. Custom solutions for startups and enterprises.',
    keywords: 'web development services, mobile app development services, UI/UX design, full-stack development, React development, Next.js development',
}

export const projectsPageMetadata: Metadata = {
    title: 'Our Projects — Portfolio of Web & Mobile Applications',
    description: 'Explore DevSphere\'s portfolio of successful web applications and mobile apps. See our work in React, Next.js, and React Native development.',
    keywords: 'web development portfolio, mobile app portfolio, React projects, Next.js projects, DevSphere work',
}

export const contactPageMetadata: Metadata = {
    title: 'Contact DevSphere — Get a Free Project Quote',
    description: 'Contact DevSphere for web development, mobile app development, or UI/UX design services. Get a free consultation and project quote within 24 hours.',
    keywords: 'contact DevSphere, web development quote, mobile app quote, free consultation',
}
