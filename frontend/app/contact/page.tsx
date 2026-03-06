import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/Contact/ContactHero";
import ContactSection from "@/components/Contact/ContactSection";
import ContactMap from "@/components/Contact/ContactMap";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ContactHero />
      <ContactSection />
      <ContactMap />
      <Footer />
    </>
  );
}