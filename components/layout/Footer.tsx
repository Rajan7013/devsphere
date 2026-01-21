import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-bg-card border-t border-text-muted/10">
            <div className="max-w-7xl mx-auto px-6 py-4 md:py-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {/* Brand */}
                    <div>
                        <img
                            src="/Image/Logo/logo-devsphere-navbar.svg"
                            alt="DevSphere Logo"
                            className="h-8 w-auto mb-2"
                            width="120"
                            height="32"
                        />
                        <p className="text-text-muted text-sm leading-body mb-2">
                            Building scalable digital products for modern businesses.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-heading font-semibold mb-2 tracking-heading">Services</h3>
                        <ul className="space-y-1 text-sm text-text-muted">
                            <li><Link href="/services/web-development" className="hover:text-skin transition-colors leading-body">Web Development</Link></li>
                            <li><Link href="/services/mobile-app" className="hover:text-skin transition-colors leading-body">Mobile Apps</Link></li>
                            <li><Link href="/services/ui-ux-design" className="hover:text-skin transition-colors leading-body">UI/UX Design</Link></li>
                            <li><Link href="/services/seo" className="hover:text-skin transition-colors leading-body">Digital Growth</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-heading font-semibold mb-2 tracking-heading">Company</h3>
                        <ul className="space-y-1 text-sm text-text-muted">
                            <li><Link href="/about" className="hover:text-skin transition-colors leading-body">About Us</Link></li>
                            <li><Link href="/projects" className="hover:text-skin transition-colors leading-body">Projects</Link></li>
                            <li><Link href="/contact" className="hover:text-skin transition-colors leading-body">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-heading font-semibold mb-2 tracking-heading">Legal</h3>
                        <ul className="space-y-1 text-sm text-text-muted">
                            <li><Link href="/privacy" className="hover:text-skin transition-colors leading-body">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-skin transition-colors leading-body">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-4 pt-4 border-t border-text-muted/10 text-center text-sm text-text-muted leading-body">
                    <p>© {currentYear} DevSphere Digital Agency. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
