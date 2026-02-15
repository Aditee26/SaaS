// src/app/page.tsx
import { Hero } from '@/components/landing/Hero';
import { FeatureBoxes } from '@/components/landing/FeatureBoxes';
import { BoxSections } from '@/components/landing/BoxSections';
import { Pricing } from '@/components/landing/Pricing';
import { FAQ } from '@/components/landing/FAQ';
import { MoreSections } from '@/components/landing/MoreSections';
import { Companies } from '@/components/landing/Companies';
import { CTASection } from '@/components/landing/CTASection';
import { Contact } from '@/components/landing/Contact';
import { Footer } from '@/components/layout/Footer';
import { Testimonials } from '@/components/landing/Testimonials';

export default function Home() {
  return (
    <main className="bg-[#222228] min-h-screen">
      <Hero />
      <FeatureBoxes />
      <Testimonials />
      <BoxSections />
      <Pricing />
      <FAQ />
      <MoreSections />
      <Companies />
      <CTASection />
      <Contact />
      <Footer />
    </main>
  );
}