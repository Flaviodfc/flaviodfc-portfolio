import { HeroSection } from '@/sections/Hero';
import { AboutSection } from '@/sections/About';
import { ServicesSection } from '@/sections/Services';
import { TestimonialsSection } from '@/sections/Testimonials';
import { ContactSection } from '@/sections/Contact';

export function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
