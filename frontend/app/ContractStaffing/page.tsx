import DevCont from "@/components/ContractStaffingServices/DevCont";
import DevFetures from "@/components/ContractStaffingServices/DevFetures";
import DevHero from "@/components/ContractStaffingServices/DevHero";
import DevPoint from "@/components/ContractStaffingServices/DevPoint";
import DevSpecs from "@/components/ContractStaffingServices/DevSpecs";
import DevProcess from "@/components/ContractStaffingServices/DevProcess";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


export default function MobileAppDevelopmentpage() {
  return (
    <>
      <Navbar />
      <DevHero />
      <div className="sections-wrapper">
      <DevSpecs />
      <DevFetures />
      </div>
      <DevPoint />
      {/* <DevProcess /> */}
      <DevCont />
      <Footer />

    </>
  )
}
