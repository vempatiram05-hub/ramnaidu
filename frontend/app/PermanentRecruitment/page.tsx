import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WebDevelopmentHero from "@/components/PermanentRecruitmentService/WebDevelopmentHero";
import WebDevelopmentchoose from "@/components/PermanentRecruitmentService/WebDevelopmentchoose";
import WebDevelopmentContact from "@/components/PermanentRecruitmentService/WebDevelopmentContact"
import WebDevelopmentTech from "@/components/PermanentRecruitmentService/WebDevelopmentTech";
import CloudSolutionCTA from "@/components/PermanentRecruitmentService/CloudSolutionCTA";
import WebDevelopmentProcess from "@/components/PermanentRecruitmentService/WebDevelopmentProcess";



export default function WebDevelopmentServicePage() {
  return (
    <>
      <Navbar />
      <WebDevelopmentHero />
      <WebDevelopmentchoose />
      <WebDevelopmentContact />
      {/* <WebDevelopmentTech /> */}
      <WebDevelopmentProcess />
      <CloudSolutionCTA />


      <Footer />
    </>
  );
}