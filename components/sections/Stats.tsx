export default function Stats() {
    const stats = [
        { number: '50+', label: 'Projects' },
        { number: '30+', label: 'Clients' },
        { number: '5+', label: 'Years' },
        { number: 'High', label: 'Satisfaction' },
    ];

    return (
        <section className="py-4 md:py-6 border-t-2 border-b-2 border-text-muted/50 bg-bg-card">
            <div className="max-w-7xl mx-auto px-2 md:px-6">
                <div className="flex justify-center items-center gap-2 md:gap-4 flex-wrap">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center bg-bg-main rounded-lg p-4 md:p-6 shadow-soft hover:shadow-strong transition-all hover:-translate-y-1 flex-1 min-w-[70px] md:min-w-[120px] max-w-[280px]"
                        >
                            <div className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-skin mb-2 leading-tight">
                                {stat.number}
                            </div>
                            <div className="text-xs md:text-base text-text-muted whitespace-nowrap">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
