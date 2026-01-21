import Link from 'next/link';

export default function FinalCTA() {
    return (
        <section className="pt-4 pb-4 md:pt-6 md:pb-8 border-t-2 border-b-2 border-text-muted/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-linear-to-br from-skin/10 to-skin/5 rounded-3xl p-12 md:p-16 text-center">
                    <h2 className="text-h2-mobile md:text-h2-desktop font-heading font-bold mb-6 leading-heading tracking-heading">
                        Ready to Build Something{' '}
                        <span className="text-skin">Exceptional?</span>
                    </h2>
                    <p className="text-body-lg text-text-muted mb-8 max-w-2xl mx-auto leading-body">
                        Let's discuss your project and create a digital solution that drives real results.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-skin text-white px-8 py-3 rounded-[10px] font-semibold tracking-button text-center hover:opacity-90 transition-opacity"
                        >
                            Start Your Project
                        </Link>
                        <Link
                            href="/contact"
                            className="border-2 border-skin text-skin px-8 py-3 rounded-[10px] font-semibold tracking-button text-center hover:bg-skin hover:text-white transition-all"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
