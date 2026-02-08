import AboutSection from '@/components/landing/about';
import CaseStudies from '@/components/landing/case-studies';
import CtaSection from '@/components/landing/cta';
import DifferentiationTable from '@/components/landing/differentiation-table';
import Footer from '@/components/landing/footer';
import Hero from '@/components/landing/hero';
import Navigation from '@/components/landing/navigation';
import Pricing from '@/components/landing/pricing';
import RoiCalculator from '@/components/landing/roi-calculator';
import SecurityProcess from '@/components/landing/security-process';
import ServicesOverview from '@/components/landing/services-overview';
import TechStack from '@/components/landing/tech-stack';
import Chatbot from '@/components/chatbot';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Enhanced Global Glass Background */}
      <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none select-none">
        {/* Deep base color */}
        <div className="absolute inset-0 bg-background" />
        
        {/* Glassy Grains / Texture */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] mix-blend-overlay pointer-events-none" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
        />

        {/* Dynamic Colorful Blobs */}
        {/* Center Primary Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-primary/10 dark:bg-primary/20 blur-[140px] rounded-full" />
        
        {/* Top Right Cyan Splash */}
        <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vh] bg-cyan-500/10 dark:bg-cyan-500/15 blur-[120px] rounded-full" />
        
        {/* Bottom Left Indigo Splash */}
        <div className="absolute bottom-[5%] left-[-10%] w-[60vw] h-[60vh] bg-indigo-600/10 dark:bg-indigo-600/20 blur-[130px] rounded-full" />
        
        {/* Subtle Accent Shimmer */}
        <div className="absolute top-[30%] left-[20%] w-[30vw] h-[30vh] bg-accent/5 dark:bg-accent/10 blur-[100px] rounded-full animate-pulse" style={{ animationDuration: '8s' }} />

        {/* Shiny Edge Highlight (Glass Effect) */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 dark:via-white/2 dark:to-white/5 pointer-events-none" />
      </div>

      <Navigation />
      
      <main className="relative z-10">
        <Hero />
        <DifferentiationTable />
        <SecurityProcess />
        <CaseStudies />
        <ServicesOverview />
        <RoiCalculator />
        <TechStack />
        <Pricing />
        <AboutSection />
        <CtaSection />
      </main>
      
      <Footer />
      <Chatbot />
    </div>
  );
}
