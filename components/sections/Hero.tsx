'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <section
            aria-labelledby="hero-heading"
            className="relative w-full flex items-center py-12 pb-0 lg:py-16 lg:pb-0 bg-bg-main overflow-hidden border-b-2 border-text-muted/50"
        >
            <div className="max-w-[1200px] mx-auto px-6 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 items-center">

                    {/* LEFT COLUMN: Text Content */}
                    <div className="space-y-6">

                        {/* H1: Brand + Primary Service */}
                        <h1
                            id="hero-heading"
                            className="font-bold text-text-main"
                            style={{
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: 'clamp(24px, 3.5vw, 42px)',
                                lineHeight: '1.2',
                                letterSpacing: '-0.01em'
                            }}
                        >
                            <span className="text-skin">DevSphere</span> — Web & Mobile Development Agency
                        </h1>

                        {/* H2: Value Proposition */}
                        <h2
                            className="font-body text-text-muted"
                            style={{
                                fontSize: 'clamp(15px, 1.8vw, 19px)',
                                lineHeight: '1.5',
                                maxWidth: '540px'
                            }}
                        >
                            We build <span className="text-skin font-semibold">revenue-driving</span>, secure platforms for funded startups ready to scale.
                        </h2>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <Link
                                href="/contact"
                                className="bg-skin text-white px-7 py-3 rounded-xl font-semibold text-[14px] hover:opacity-90 transition-opacity shadow-lg shadow-skin/20 text-center"
                            >
                                Start Your Project
                            </Link>
                            <Link
                                href="/projects"
                                className="border-2 border-skin text-skin px-7 py-3 rounded-xl font-semibold text-[14px] hover:bg-skin hover:text-white transition-all text-center"
                            >
                                View Case Studies
                            </Link>
                        </div>

                        {/* Trust Line */}
                        <p className="text-[12px] text-text-muted flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            Response within 24 hours • No obligation
                        </p>

                        {/* Feature Pills */}
                        <div className="flex flex-wrap gap-2.5">
                            <div className="bg-linear-to-br from-skin/5 to-transparent px-4 py-2 rounded-lg border border-skin/10">
                                <span className="font-heading font-bold text-skin text-[14px]">Scalable</span>
                            </div>

                            <div className="bg-linear-to-br from-skin/5 to-transparent px-4 py-2 rounded-lg border border-skin/10">
                                <span className="font-heading font-bold text-skin text-[14px]">Secure</span>
                            </div>

                            <div className="bg-linear-to-br from-skin/5 to-transparent px-4 py-2 rounded-lg border border-skin/10">
                                <span className="font-heading font-bold text-skin text-[14px]">Fast</span>
                            </div>
                        </div>

                        {/* Founder Attribution */}
                        <div className="-mt-5">
                            <p className="text-[12px] text-text-muted pt-3">
                                Founded by <span className="font-semibold text-text-main">Rajan Prasaila Yadav</span> — Full-Stack Architect
                            </p>
                        </div>

                        {/* Hidden SEO Support */}
                        <p className="sr-only">
                            DevSphere is a full-service web development company and mobile app development agency specializing in scalable digital platforms for startups and enterprises worldwide. Founded by Rajan Prasaila Yadav, Full-Stack Architect.
                        </p>
                    </div>

                    {/* RIGHT COLUMN: Founder Image */}
                    <div className="flex justify-center lg:justify-end -order-1 lg:order-2">
                        <div className="relative">
                            {/* Brand Color Glow */}
                            <div className="absolute inset-0 -m-8 rounded-2xl pointer-events-none -z-10 hero-glow" />

                            {/* Image Container - Smaller on mobile, square with rounded corners */}
                            <div className="w-[250px] h-[250px] lg:w-[360px] lg:h-[360px] rounded-2xl overflow-hidden hero-shadow translate-y-4 lg:translate-y-0 lg:-translate-x-8">
                                <Image
                                    src="/Image/founder-rajan.webp"
                                    alt="Rajan Prasaila Yadav - Founder of DevSphere"
                                    width="360"
                                    height="360"
                                    priority
                                    fetchPriority="high"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}