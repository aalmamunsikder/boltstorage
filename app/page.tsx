import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import PhilosophySection from "@/components/sections/philosophy-section";
import PricingSection from "@/components/sections/pricing-section";
import TestimonialSection from "@/components/sections/testimonial-section";
import FAQSection from "@/components/sections/faq-section";
import NewsletterSection from "@/components/sections/newsletter-section";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="bg-[#030303] text-white overflow-hidden">
      <HeroSection />
      <AboutSection />
      <PhilosophySection />
      <PricingSection />
      <TestimonialSection />
      <FAQSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
