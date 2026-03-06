import CybersecurrityServiceHero from "@/components/CyberSecurityService/CyberSecurityServiceHero";
import CybersecurrityServices    from "@/components/CyberSecurityService/CyberSecurityServices";
import Cybersecurrity            from "@/components/CyberSecurityService/CyberSecurity";
import CybersecurritySolutins    from "@/components/CyberSecurityService/CyberSecuritySolutions";
import CybersecurrityStrategies  from "@/components/CyberSecurityService/CyberSecurityStrategies";
import CybersecurrityContact     from "@/components/CyberSecurityService/CyberSecurityContact";
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
      <CybersecurrityStrategies />
      <CybersecurrityContact />
      <Footer />
    </main>
  );
}