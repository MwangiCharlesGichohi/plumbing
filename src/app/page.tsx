import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";

export const metadata = {
  title: "4-AquaFlow | Professional Plumbing Solutions in Nairobi",
  description: "Fast, reliable plumbing services. Emergency repairs, installations, drain cleaning. Licensed professionals, transparent pricing, 24/7 availability.",
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Services />
        <div id="why-us">
          <WhyChooseUs />
        </div>
        <div id="contact">
          <CTABanner />
        </div>
      </main>
      <Footer />
    </>
  );
}