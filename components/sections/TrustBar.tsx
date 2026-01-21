import Image from 'next/image';

export default function TrustBar() {
    const clients = [
        {
            name: 'Pinnacle Nepal',
            logo: '/Brand logo/pinnaclenepal-logo.webp',
            width: 160,
            height: 56,
        },
        {
            name: 'EduNexus',
            logo: '/Brand logo/school-ogo.webp',
            width: 160,
            height: 56,
        },
        {
            name: 'HealthMind AI',
            logo: '/Brand logo/health-assistant-ai-logo.webp',
            width: 160,
            height: 56,
        },
        {
            name: 'College Management',
            logo: '/Brand logo/college-management-logo.webp',
            width: 160,
            height: 56,
        },
        {
            name: 'RAG System',
            logo: '/Brand logo/rag-logo.webp',
            width: 160,
            height: 56,
            hideOnMobile: true, // Hide on mobile, show on desktop
        },
    ];

    return (
        <section className="py-4 md:py-6 border-t-2 border-b-2 border-text-muted/50 bg-bg-main">
            <div className="w-full px-2 md:px-6">
                <p className="text-center text-xs md:text-sm font-medium text-text-muted mb-3 md:mb-5">
                    Trusted by startups and global brands
                </p>

                {/* Card-based logo layout */}
                <div className="flex justify-center items-center gap-2 md:gap-4 flex-wrap">
                    {clients.map((client, index) => (
                        <div
                            key={index}
                            className={`flex justify-center items-center bg-bg-card rounded-lg p-3 md:p-4 shadow-soft hover:shadow-strong transition-all hover:-translate-y-1 shrink-0 ${client.hideOnMobile ? 'hidden md:flex' : ''
                                }`}
                        >
                            <Image
                                src={client.logo}
                                alt={`${client.name} logo`}
                                width={client.width}
                                height={client.height}
                                className="h-12 md:h-16 lg:h-20 w-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}