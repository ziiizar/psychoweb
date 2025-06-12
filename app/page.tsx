import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { Testimonials } from '@/components/Testimonials';
import { CTA } from '@/components/CTA';

export default function Home() {
  return (
    <div className="bg-slate-50">
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <CTA />
    </div>
  );
}