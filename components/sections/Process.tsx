import { Search, Palette, Code, Rocket } from 'lucide-react';

export default function Process() {
    const steps = [
        {
            icon: Search,
            title: 'Discovery & Strategy',
            description: 'Understanding your goals and defining the project scope.',
        },
        {
            icon: Palette,
            title: 'Design & Architecture',
            description: 'Creating user-centered designs and technical blueprints.',
        },
        {
            icon: Code,
            title: 'Development & Testing',
            description: 'Building robust solutions with rigorous quality assurance.',
        },
        {
            icon: Rocket,
            title: 'Launch & Scale',
            description: 'Deploying your product and supporting growth.',
        },
    ];

    return (
        <section className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-h2-mobile md:text-h2-desktop font-heading font-bold mb-4 leading-heading tracking-heading">
                        Our Process
                    </h2>
                    <p className="text-body-lg text-text-muted max-w-2xl mx-auto leading-body">
                        A proven methodology for delivering exceptional results
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-skin/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Icon className="w-8 h-8 text-skin" />
                                </div>
                                <h3 className="text-h4-mobile md:text-h4-desktop font-heading font-semibold mb-2 leading-heading tracking-heading">
                                    {step.title}
                                </h3>
                                <p className="text-text-muted leading-body">{step.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
