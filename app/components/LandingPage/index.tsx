
import Faq from "./faq";
import Contactus from "./contactus"
import Hero from "./hero";
import ProjectSlider from "./projectSlider";
import ManagementValue from "./managementValues";
export default function LandingPage() {
  return (
    <div className="bg-[#FAFAFA]">
      <Hero />
      <ProjectSlider/>
      <ManagementValue />
      <Contactus />
      <Faq />
    </div>
  );
}
