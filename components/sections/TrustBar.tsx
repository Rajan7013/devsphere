import Image from 'next/image';

export default function TrustBar() {
    const clients = [
        {
            name: 'Pinnacle Nepal',
            logo: '/Brand logo/pinnaclenepal-logo.webp',
            width: 100,
            height: 35,
        },
        {
            name: 'RAG System',
            logo: '/Brand logo/rag-logo.webp',
            width: 100,
            height: 35,
        },
        {
            name: 'HealthMind AI',
            logo: '/Brand logo/health-assistant-ai-logo.webp',
            width: 100,
            height: 35,
        },
        {
            name: 'EduNexus',
            logo: '/Brand logo/school-ogo.webp',
            width: 100,
            height: 35,
        },
        {
            name: 'College Management',
            logo: '/Brand logo/college-management-logo.webp',
            width: 100,
            height: 35,
        },
    ];

    return (
        <section className="pb-4 md:pb-6 border-t-2 border-b-2 border-text-muted/50 bg-bg-main">
            <div className="max-w-7xl mx-auto px-0 md:px-4">
                <p className="text-center text-xs md:text-sm font-medium text-text-muted mb-2 md:mb-4 pt-2 md:pt-3 px-2">
                    Trusted by startups and global brands
                </p>

                {/* All logos in one row for all screen sizes */}
                <div className="flex justify-center items-center gap-2 md:gap-8 lg:gap-12 px-1 md:px-0">
                    {clients.map((client, index) => (
                        <div
                            key={index}
                            className="flex justify-center opacity-80 hover:opacity-100 transition-opacity duration-300 hover:scale-105 transform"
                        >
                            <Image
                                src={client.logo}
                                alt={`${client.name} logo`}
                                width={client.width}
                                height={client.height}
                                className="h-8 md:h-16 lg:h-20 w-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
