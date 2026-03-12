import CybersecurrityServiceHero from "@/components/RPOServices/CyberSecurityServiceHero";
import CybersecurrityServices    from "@/components/RPOServices/CyberSecurityServices";
import Cybersecurrity            from "@/components/RPOServices/CyberSecurity";
import CybersecurritySolutins    from "@/components/RPOServices/CyberSecuritySolutions";
import CybersecurrityStrategies  from "@/components/RPOServices/CyberSecurityStrategies";
import CybersecurrityContact     from "@/components/RPOServices/CyberSecurityContact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function CyberSecurityServicePage() {
  return (
    <main>
      <Navbar />
      <CybersecurrityServiceHero />
      <CybersecurrityServices />
      <Cybersecurrity /> 
      <CybersecurritySolutins />
      {/* <CybersecurrityStrategies /> */}
      <CybersecurrityContact />
      <Footer />
    </main>
  );
}