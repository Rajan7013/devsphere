import Link from 'next/link';
import { Code, Smartphone, Palette, TrendingUp, Video } from 'lucide-react';

export default function Services() {
    const services = [
        {
            icon: Code,
            title: 'Web Development',
            description: 'Build scalable, high-performance web applications with modern technologies.',
            href: '/services/web-development',
        },
        {
            icon: Smartphone,
            title: 'Mobile App Development',
            description: 'Native and cross-platform mobile apps for iOS and Android.',
            href: '/services/mobile-app',
        },
        {
            icon: Palette,
            title: 'UI/UX Design',
            description: 'User-centered design that combines aesthetics with functionality.',
            href: '/services/ui-ux-design',
        },
        {
            icon: TrendingUp,
            title: 'Digital Growth & SEO',
            description: 'Drive organic traffic and improve search rankings with proven strategies.',
            href: '/services/seo',
        },
        {
            icon: Video,
            title: 'Video Editing & Branding',
            description: 'Professional video production and brand identity development.',
            href: '/services/video-editing',
        },
    ];

    return (
        <section className="py-16 md:py-24 border-t-2 border-b-2 border-text-muted/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-h2-mobile md:text-h2-desktop font-heading font-bold mb-4 leading-heading tracking-heading">
                        Our Core Services
                    </h2>
                    <p className="text-body-lg text-text-muted max-w-2xl mx-auto leading-body">
                        Comprehensive digital solutions for modern businesses
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <Link
                                key={index}
                                href={service.href}
                                className="bg-bg-card rounded-2xl p-6 shadow-soft hover:shadow-strong transition-all hover:-translate-y-1 group"
                            >
                                <div className="w-12 h-12 bg-skin/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-skin/20 transition-colors">
                                    <Icon className="w-6 h-6 text-skin" />
                                </div>
                                <h3 className="text-h4-mobile md:text-h4-desktop font-heading font-semibold mb-2 leading-heading tracking-heading">
                                    {service.title}
                                </h3>
                                <p className="text-text-muted mb-4 leading-body">{service.description}</p>
                                <span className="text-skin font-medium">Learn More →</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
