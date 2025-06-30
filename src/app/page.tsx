import Header from './components/header';
import Hero from './components/hero';
import TrustStrip from './components/trust-strip';
import PainPromise from './components/pain-promise';
import ProcessSteps from './components/process-steps';
import DemoSection from './components/demo-section';
import PricingSection from './components/pricing-section';
import FAQ from './components/faq';
import Footer from './components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustStrip />
      <PainPromise />
      <ProcessSteps />
      <DemoSection />
      <PricingSection />
      <FAQ />
      <Footer />
    </main>
  );
}
