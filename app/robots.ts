import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://devsphere-red.vercel.app'

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/admin/'],
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
                crawlDelay: 0,
            },
            {
                userAgent: 'Googlebot-Image',
                allow: '/',
            },
            {
                userAgent: 'Bingbot',
                allow: '/',
                crawlDelay: 0,
            },
            {
                userAgent: 'GPTBot', // OpenAI's crawler
                allow: '/',
            },
            {
                userAgent: 'Google-Extended', // Google's AI training bot
                allow: '/',
            },
            {
                userAgent: 'ChatGPT-User', // ChatGPT web browsing
                allow: '/',
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
        host: baseUrl,
    }
}
