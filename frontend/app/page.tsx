import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Industries from "@/components/Industries";
import Aboutsection from "@/components/Aboutsection";
import ServicesSection from "@/components/ServiceSection";
import CaseStudysection from "@/components/CaseStudysection";
import Techstack from "@/components/Techstack";
import BlogSection from "@/components/BlogSection";
import Testimonials from "@/components/Testimonials";
import HomeSlider from "@/components/HomeSlider";

export default function Home() {
  return (
    <>
    
      <Navbar />
      <HomeSlider />
      <Industries />
      <Aboutsection />
      <ServicesSection />
      <CaseStudysection />
      <Techstack />
      <BlogSection />
      <Testimonials />
      <Footer />

    </>
  );
}