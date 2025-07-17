
import Faq from "./faq";
import Contactus from "./contactus"
import Hero from "./hero";
import ProjectSlider from "./projectSlider";
import ManagementValue from "./managementValues";
import StaticTestimonial from "./staticTestimonial";
import Blogs from "./blogs";
export default function LandingPage() {
  return (
    <div className="bg-[#FAFAFA]">
      <Hero />
      <ProjectSlider/>
      <Blogs />
      <ManagementValue />
      <StaticTestimonial/>
      <Contactus />
      <Faq />
    </div>
  );
}
