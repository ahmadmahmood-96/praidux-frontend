import Faq from "./faq";
import Contactus from "./contactus";
import Hero from "./hero";
import ProjectSlider from "./projectSlider";
import ManagementValue from "./managementValues";
import StaticTestimonial from "./staticTestimonial";
import Blogs from "./blogs";
import Process from "./process";
import Project from "./project";

export default function LandingPage() {
  return (
    <div className="bg-[#FAFAFA] flex flex-col gap-[8px]">
      <Hero />
      <ProjectSlider />
      <Project />
      <Process />
      <Blogs />
      <StaticTestimonial />
      <ManagementValue />
      <Contactus />
      <Faq />
    </div>
  );
}
