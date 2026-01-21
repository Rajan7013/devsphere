export default function Founder() {
    return (
        <section className="pt-16 pb-4 md:pt-24 md:pb-8 bg-bg-card border-t-2 border-b-2 border-text-muted/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Founder Image */}
                    <div className="flex justify-center lg:justify-start">
                        <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-strong">
                            <img
                                src="/Image/founder-rajan.webp"
                                alt="Rajan Prasaila Yadav - Founder of DevSphere"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Founder Story */}
                    <div>
                        <h2 className="text-h2-mobile md:text-h2-desktop font-heading font-bold mb-6 leading-heading tracking-heading">
                            I'm Rajan Prasaila Yadav,{' '}
                            <span className="text-skin">founder of DevSphere</span>
                        </h2>
                        <p className="text-body-lg text-text-muted mb-6 leading-body">
                            I design and engineer digital platforms that scale — not just websites.
                        </p>
                        <p className="text-text-muted mb-6 leading-body">
                            With over 5 years of experience in full-stack development, I've helped startups
                            and enterprises build high-performance digital products that drive real business results.
                        </p>
                        <p className="text-text-muted leading-body">
                            My approach combines technical excellence with strategic thinking, ensuring
                            every project delivers measurable value and long-term success.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
