export default function Stats() {
    const stats = [
        { number: '50+', label: 'Projects' },
        { number: '30+', label: 'Clients' },
        { number: '5+', label: 'Years' },
        { number: '98%', label: 'Satisfaction' },
    ];

    return (
        <section className="py-16 md:py-24 bg-bg-card">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-h2-mobile md:text-h2-desktop font-heading font-bold text-skin mb-2 leading-heading tracking-heading">
                                {stat.number}
                            </div>
                            <div className="text-text-muted leading-body">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
