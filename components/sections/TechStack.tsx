import Image from 'next/image';

export default function TechStack() {
    const techCategories = [
        {
            category: 'Frontend',
            technologies: [
                { name: 'React', logo: '/technology logo/react-native.svg' },
                { name: 'Next.js', logo: '/technology logo/next-js.svg' },
                { name: 'TypeScript', logo: '/technology logo/typescript.svg' },
                { name: 'JavaScript', logo: '/technology logo/javascript-1.svg' },
                { name: 'Tailwind CSS', logo: '/technology logo/tailwind-css.svg' },
                { name: 'Framer Motion', logo: '/technology logo/framer-motion.svg' },
            ],
        },
        {
            category: 'Backend',
            technologies: [
                { name: 'Node.js', logo: '/technology logo/nodejs.svg' },
                { name: 'Python', logo: '/technology logo/python.svg' },
                { name: 'Java', logo: '/technology logo/javasvg.svg' },
            ],
        },
        {
            category: 'Database',
            technologies: [
                { name: 'MongoDB', logo: '/technology logo/mongodb-icon.svg' },
                { name: 'PostgreSQL', logo: '/technology logo/postgresql-inc.svg' },
                { name: 'Firebase', logo: '/technology logo/firebase.svg' },
                { name: 'Supabase', logo: '/technology logo/Supabase.svg' },
            ],
        },
        {
            category: 'DevOps & Cloud',
            technologies: [
                { name: 'Docker', logo: '/technology logo/docker.svg' },
                { name: 'Vercel', logo: '/technology logo/vercel.svg' },
                { name: 'Cloudflare', logo: '/technology logo/cloudflare.svg' },
                { name: 'Git', logo: '/technology logo/git.svg' },
                { name: 'GitHub', logo: '/technology logo/github.svg' },
            ],
        },
        {
            category: 'AI & Tools',
            technologies: [
                { name: 'ChatGPT', logo: '/technology logo/chatgpt.svg' },
                { name: 'Claude', logo: '/technology logo/claude.svg' },
                { name: 'Gemini', logo: '/technology logo/gemini.svg' },
                { name: 'DeepSeek', logo: '/technology logo/deepseek.svg' },
                { name: 'Figma', logo: '/technology logo/figma.svg' },
                { name: 'Canva', logo: '/technology logo/canva.svg' },
            ],
        },
        {
            category: 'Analytics & SEO',
            technologies: [
                { name: 'Google Analytics', logo: '/technology logo/google-analytics.svg' },
                { name: 'Search Console', logo: '/technology logo/google-search-console.svg' },
                { name: 'Semrush', logo: '/technology logo/Semrush.svg' },
            ],
        },
        {
            category: 'Authentication',
            technologies: [
                { name: 'Clerk', logo: '/technology logo/Clerk.svg' },
            ],
        },
    ];

    return (
        <section className="py-16 md:py-24 bg-bg-main border-t-2 border-b-2 border-text-muted/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-h2-mobile md:text-h2-desktop font-heading font-bold mb-4 leading-heading tracking-heading">
                        Technology <span className="text-skin">Stack</span>
                    </h2>
                    <p className="text-body-lg text-text-muted max-w-2xl mx-auto leading-body">
                        Modern tools and frameworks we use to build exceptional products
                    </p>
                </div>

                <div className="space-y-12">
                    {techCategories.map((category, idx) => (
                        <div key={idx}>
                            <h3 className="text-xl font-heading font-semibold mb-6 text-text-main">
                                {category.category}
                            </h3>
                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
                                {category.technologies.map((tech, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center justify-center p-4 bg-bg-card rounded-xl shadow-soft hover:shadow-strong transition-all hover:-translate-y-1 group"
                                    >
                                        <div className="w-12 h-12 md:w-16 md:h-16 mb-3 flex items-center justify-center">
                                            <Image
                                                src={tech.logo}
                                                alt={`${tech.name} logo`}
                                                width={64}
                                                height={64}
                                                className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                                            />
                                        </div>
                                        <span className="text-xs md:text-sm font-medium text-text-muted group-hover:text-skin transition-colors text-center">
                                            {tech.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
