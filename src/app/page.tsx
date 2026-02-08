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
      {/* Fixed Global Background */}
      <div className="fixed inset-0 -z-50 overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-[0.03] dark:opacity-[0.05]" />
        
        {/* Modern Center Gradient Splash */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 dark:from-primary/10 dark:via-primary/20 dark:to-primary/10 blur-[120px] rounded-full opacity-50 pointer-events-none" />
        
        {/* Additional splash for color variety */}
        <div className="absolute top-[20%] right-[10%] w-[40vw] h-[40vh] bg-accent/5 dark:bg-accent/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[20%] left-[10%] w-[30vw] h-[30vh] bg-blue-500/5 dark:bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />
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
