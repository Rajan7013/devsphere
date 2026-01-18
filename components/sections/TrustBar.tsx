export default function TrustBar() {
    const clients = [
        'HealthMind AI',
        'EduNexus',
        'Pinnacle Nepal',
        'Growing Startups',
        'Global Brands',
    ];

    return (
        <section className="py-8 border-t border-b border-text-muted/10">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-sm font-medium text-text-muted mb-6">
                    Trusted by startups and global brands
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                    {clients.map((client, index) => (
                        <div
                            key={index}
                            className="text-text-muted font-heading font-semibold text-sm md:text-base hover:text-text-main transition-colors"
                        >
                            {client}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
