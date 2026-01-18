import dynamic from 'next/dynamic';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import Stats from '@/components/sections/Stats';
import Services from '@/components/sections/Services';

// Lazy load below-fold sections for better performance
const Projects = dynamic(() => import('@/components/sections/Projects'));
const Process = dynamic(() => import('@/components/sections/Process'));
const Founder = dynamic(() => import('@/components/sections/Founder'));
const TechStack = dynamic(() => import('@/components/sections/TechStack'));
const Team = dynamic(() => import('@/components/sections/Team'));
const FinalCTA = dynamic(() => import('@/components/sections/FinalCTA'));
const StyleSwitcher = dynamic(() => import('@/components/StyleSwitcher'));

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Stats />
        <Services />
        <Projects />
        <Process />
        <Founder />
        <TechStack />
        <Team />
        <FinalCTA />
      </main>
      <Footer />

      {/* Theme Switcher */}
      <StyleSwitcher />
    </div>
  );
}
