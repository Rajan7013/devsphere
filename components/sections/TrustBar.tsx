import Image from 'next/image';

export default function TrustBar() {
    // Row 1: Wider logos (Pinnacle Nepal, RAG)
    const row1Clients = [
        {
            name: 'Pinnacle Nepal',
            logo: '/Brand logo/pinnaclenepal-logo.webp',
            width: 140,
            height: 50,
        },
        {
            name: 'RAG System',
            logo: '/Brand logo/rag-logo.webp',
            width: 140,
            height: 50,
        },
    ];

    // Row 2: Other logos (HealthMind AI, EduNexus, College Management)
    const row2Clients = [
        {
            name: 'HealthMind AI',
            logo: '/Brand logo/health-assistant-ai-logo.webp',
            width: 140,
            height: 50,
        },
        {
            name: 'EduNexus',
            logo: '/Brand logo/school-ogo.webp',
            width: 140,
            height: 50,
        },
        {
            name: 'College Management',
            logo: '/Brand logo/college-management-logo.webp',
            width: 140,
            height: 50,
        },
    ];

    return (
        <section className="pb-4 md:pb-6 border-t-2 border-b-2 border-text-muted/50 bg-bg-main">
            <div className="max-w-7xl mx-auto px-2 md:px-4">
                <p className="text-center text-xs md:text-sm font-medium text-text-muted mb-3 md:mb-4 pt-2 md:pt-3">
                    Trusted by startups and global brands
                </p>

                {/* Mobile: Custom 2-row layout, Desktop: All in one row */}
                <div className="flex flex-col md:hidden gap-3">
                    {/* Row 1: 2 logos (Pinnacle Nepal, RAG) */}
                    <div className="flex justify-center items-center gap-4">
                        {row1Clients.map((client, index) => (
                            <div
                                key={index}
                                className="flex justify-center opacity-80 hover:opacity-100 transition-opacity duration-300"
                            >
                                <Image
                                    src={client.logo}
                                    alt={`${client.name} logo`}
                                    width={client.width}
                                    height={client.height}
                                    className="h-12 w-auto object-contain"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Row 2: 3 logos (HealthMind AI, EduNexus, College Management) */}
                    <div className="flex justify-center items-center gap-4">
                        {row2Clients.map((client, index) => (
                            <div
                                key={index}
                                className="flex justify-center opacity-80 hover:opacity-100 transition-opacity duration-300"
                            >
                                <Image
                                    src={client.logo}
                                    alt={`${client.name} logo`}
                                    width={client.width}
                                    height={client.height}
                                    className="h-12 w-auto object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Desktop: All logos in one row */}
                <div className="hidden md:flex flex-wrap justify-center items-center gap-8 lg:gap-12">
                    {[...row1Clients, ...row2Clients].map((client, index) => (
                        <div
                            key={index}
                            className="flex justify-center opacity-80 hover:opacity-100 transition-opacity duration-300 hover:scale-105 transform"
                        >
                            <Image
                                src={client.logo}
                                alt={`${client.name} logo`}
                                width={client.width}
                                height={client.height}
                                className="h-16 lg:h-20 w-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
