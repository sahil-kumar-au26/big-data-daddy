import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import HowItWorks from "@/components/HowItWorks";
import Workforce from "@/components/Workforce";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LogoSlider from "@/components/LogoSlider";
import GlobalReach from "@/components/GlobalReach";
import Trusted from "@/components/Trusted";

export default function Home() {
  return (
    <main>
      <Navbar />

    <Hero />

    <LogoSlider />

    <Trusted />

    <Stats />

    <Services />

    <Industries />

    <HowItWorks />

    <GlobalReach />

    <Workforce />

    <CTA />

    <Footer />
    </main>
  );
}