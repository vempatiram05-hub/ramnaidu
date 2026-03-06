import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutMission from "@/components/about/AboutMission";
import AboutCoreValues from "@/components/about/AboutCoreValues";
import AboutUniq from "@/components/about/AboutUniq";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <AboutMission />
      <AboutCoreValues />
      <AboutUniq />
      <AboutCTA />
      <Footer />
    </>
  );
}