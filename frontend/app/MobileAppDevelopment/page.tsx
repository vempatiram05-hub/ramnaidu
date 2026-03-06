import DevCont from "@/components/MobileAppDevelopment/DevCont";
import DevFetures from "@/components/MobileAppDevelopment/DevFetures";
import DevHero from "@/components/MobileAppDevelopment/DevHero";
import DevPoint from "@/components/MobileAppDevelopment/DevPoint";
import DevSpecs from "@/components/MobileAppDevelopment/DevSpecs";
import DevProcess from "@/components/MobileAppDevelopment/DevProcess";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


export default function MobileAppDevelopmentpage() {
  return (
    <>
      <Navbar />
      <DevHero />
      <DevSpecs />


      <DevPoint />
      <DevFetures />
      <DevProcess />
            <DevCont />



      <Footer />

    </>
  )
}
