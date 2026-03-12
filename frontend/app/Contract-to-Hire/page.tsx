// app/services/cloud-solutions/page.tsx

import CloudHero from "@/components/Contract-to-HireServices/CloudHero";
import CloudSolutionsProcess from "@/components/Contract-to-HireServices/CloudSolutionsProcess";
import CloudSolutionchoose from "@/components/Contract-to-HireServices/CloudSolutionchoose";
import CloudExpertise from "@/components/Contract-to-HireServices/CloudExpertise";
import CloudSolutionsBenifits from "@/components/Contract-to-HireServices/CloudSolutionsBenifits";
import CloudSolutionCta from "@/components/Contract-to-HireServices/CloudSolutionCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CloudSolutionsPage() {
  return (
    <main>
      <Navbar />
      <CloudHero />
     
      <CloudSolutionchoose />

      


      <CloudExpertise />
       <CloudSolutionsBenifits />
            {/* <CloudSolutionsProcess /> */}




      <CloudSolutionCta />

      <Footer />
    </main>
  );
}