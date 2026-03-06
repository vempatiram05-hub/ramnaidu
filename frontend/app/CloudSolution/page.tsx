// app/services/cloud-solutions/page.tsx

import CloudHero from "@/components/CloudSolution/CloudHero";
import CloudSolutionsProcess from "@/components/CloudSolution/CloudSolutionsProcess";
import CloudSolutionchoose from "@/components/CloudSolution/CloudSolutionchoose";
import CloudExpertise from "@/components/CloudSolution/CloudExpertise";
import CloudSolutionsBenifits from "@/components/CloudSolution/CloudSolutionsBenifits";
import CloudSolutionCta from "@/components/CloudSolution/CloudSolutionCTA";
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
            <CloudSolutionsProcess />




      <CloudSolutionCta />

      <Footer />
    </main>
  );
}