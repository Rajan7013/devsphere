import Link from 'next/link';

export default function Projects() {
    const projects = [
        {
            title: 'HealthMind AI',
            description: 'AI-powered mental health platform with personalized therapy recommendations.',
            tech: ['Next.js', 'Python', 'TensorFlow'],
            image: '/Image/Projects/HealthMind AI/project-healthmind-ai-desktop-home.webp',
            href: '/projects/healthmind-ai',
        },
        {
            title: 'EduNexus',
            description: 'Comprehensive learning management system for modern education.',
            tech: ['React', 'Node.js', 'MongoDB'],
            image: '/Image/Projects/edunexus/project-edunexus-desktop-home.webp',
            href: '/projects/edunexus',
        },
        {
            title: 'Pinnacle Nepal',
            description: 'Enterprise business management platform for Nepalese companies.',
            tech: ['Next.js', 'PostgreSQL', 'AWS'],
            image: '/Image/Projects/pinnacle-nepal/project-pinnacle-nepal-desktop-home.webp',
            href: '/projects/pinnacle-nepal',
        },
    ];

    return (
        <section className="py-16 md:py-24 bg-bg-card">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-h2-mobile md:text-h2-desktop font-heading font-bold mb-4 leading-heading tracking-heading">
                        Selected Work
                    </h2>
                    <p className="text-body-lg text-text-muted max-w-2xl mx-auto leading-body">
                        Recent projects showcasing our expertise
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Link
                            key={index}
                            href={project.href}
                            className="bg-bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-strong transition-all group"
                        >
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={`${project.title} - DevSphere Project`}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-h4-mobile md:text-h4-desktop font-heading font-semibold mb-2 leading-heading tracking-heading">
                                    {project.title}
                                </h3>
                                <p className="text-text-muted mb-4 leading-body">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-skin/15 text-skin rounded-full text-sm font-semibold"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
