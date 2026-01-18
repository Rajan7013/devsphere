export default function TechStack() {
    const technologies = [
        'React',
        'Next.js',
        'TypeScript',
        'Node.js',
        'PostgreSQL',
        'MongoDB',
        'AWS',
        'Docker',
        'Tailwind CSS',
        'Framer Motion',
    ];

    return (
        <section className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-h2-mobile md:text-h2-desktop font-heading font-bold mb-4 leading-heading tracking-heading">
                        Technology Stack
                    </h2>
                    <p className="text-body-lg text-text-muted max-w-2xl mx-auto leading-body">
                        Modern tools and frameworks we use to build exceptional products
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    {technologies.map((tech, index) => (
                        <div
                            key={index}
                            className="px-6 py-3 bg-bg-card rounded-lg shadow-soft hover:shadow-strong transition-all hover:-translate-y-1"
                        >
                            <span className="font-heading font-semibold text-skin">{tech}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
