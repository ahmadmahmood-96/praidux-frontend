
import Faq from "./faq";
import Contactus from "./contactus"
import Hero from "./hero";
import ProjectSlider from "./projectSlider";
import ManagementValue from "./managementValues";
import StaticTestimonial from "./staticTestimonial";
export default function LandingPage() {
  return (
    <div className="bg-[#FAFAFA]">
      <Hero />
      <ProjectSlider/>
    
      <StaticTestimonial/>
        <ManagementValue />
      <Contactus />
      <Faq />
    </div>
  );
}
