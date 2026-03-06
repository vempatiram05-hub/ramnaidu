import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WebDevelopmentHero from "@/components/WebDevelopmentService/WebDevelopmentHero";
import WebDevelopmentchoose from "@/components/WebDevelopmentService/WebDevelopmentchoose";
import WebDevelopmentContact from "@/components/WebDevelopmentservice/WebDevelopmentContact"
import WebDevelopmentTech from "@/components/WebDevelopmentService/WebDevelopmentTech";
import CloudSolutionCTA from "@/components/WebDevelopmentservice/CloudSolutionCTA";
import WebDevelopmentProcess from "@/components/WebDevelopmentService/WebDevelopmentProcess";



export default function WebDevelopmentServicePage() {
  return (
    <>
      <Navbar />
      <WebDevelopmentHero />
      <WebDevelopmentchoose />
      <WebDevelopmentContact />
      <WebDevelopmentTech />
      <WebDevelopmentProcess />
      <CloudSolutionCTA />


      <Footer />
    </>
  );
}