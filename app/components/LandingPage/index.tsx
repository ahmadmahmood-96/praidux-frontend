
import Faq from "./faq";
import Contactus from "./contactus"
import Hero from "./hero";
import ProjectSlider from "./projectSlider"
export default function LandingPage() {
  return (
    <div className="bg-[#FAFAFA]">
      <Hero />
      <ProjectSlider/>
      <Contactus />
      <Faq />
    </div>
  );
}
