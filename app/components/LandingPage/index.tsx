
import Faq from "./faq";
import Contactus from "./contactus"
import Hero from "./hero";
export default function LandingPage() {
  return (
    <div className="bg-[#FAFAFA]">
      <Hero />
      <Contactus />
      <Faq />
    </div>
  );
}
