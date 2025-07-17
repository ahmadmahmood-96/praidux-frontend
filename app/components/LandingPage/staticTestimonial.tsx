import Image from "next/image";
import StaticTestimonialCard from "../statictestCard";
export default function StaticTestimonial() {
  return (
    <div className="px-[24px] py-[51px] flex flex-col gap-[16px] xl:px-[100px] lg:px-[70px] md:px-[50px]">
      <div className="flex flex-col gap-[8px]">
        <div className="flex gap-[8px] items-center">
          <Image src="/dot.svg" alt="dot" width={9} height={9} />
          <p className="font-Pop font-semibold text-[16px] text-[#123042] leading-[25.2px]">
            Testimonials
          </p>
        </div>
         <p className="font-clash font-semibold lg:text-[38px] text-[#000000] lg:leading-[48px]  md:text-[28px] md:leading-[38px] text-[24px] leading-[34px]">
           Hear it from our clients
        </p>
      </div>
     <div className="lg:columns-3 sm:columns-2 :columns-1 gap-[20px]">
        <div style={{ breakInside: "avoid", marginBottom: "20px" }}>
          <StaticTestimonialCard
            title="Project Logo"
            description="Lorem ipsem is a dumy text. Lorem ipsem is a dumy text. Lorem ipsem is a dumy text. Lorem ipsem is a dumy text. Lorem ipsem is a dumy text. Lorem ipsem is a dumy text. "
            imageSrc="/path/to/image.jpg" // or leave it undefined to fallback to orange block
            name="Ahmed Shah"
            role="Co-Founder of RecruitU"
          />
        </div>
        <div style={{ breakInside: "avoid", marginBottom: "20px" }}>
          <StaticTestimonialCard
            title="Project Logo"
            description="Lorem ipsem is a dumy text. Lorem ipsem is a dumy text. Lorem ipsem is a dumy text. Lorem ipsem is a dumy text. Lorem ipsem is a dumy text. Lorem ipsem is a dumy text. "
            name="Ahmed Shah"
            role="Co-Founder of RecruitU"
          />
        </div>
        <div style={{ breakInside: "avoid", marginBottom: "20px" }}>
          <StaticTestimonialCard
            title="Project Logo"
            description="Lorem ipsem is a dumy text. Lorem ipsem is a dumy text. Lorem ipsem is a dumy text. Lorem ipsem is a dumy text. Lorem ipsem is a dumy text. Lorem ipsem is a dumy text. "
            name="Ahmed Shah"
            role="Co-Founder of RecruitU"
          />
        </div>
        <div style={{ breakInside: "avoid", marginBottom: "20px" }}>
          <StaticTestimonialCard
            title="Project Logo"
            description="Lorem ipsem is a dumy text. Lorem ipsem is a dumy text. Lorem ipsem is a dumy text. Lorem ipsem is a dumy text. Lorem ipsem is a dumy text. Lorem ipsem is a dumy text. "
            name="Ahmed Shah"
            role="Co-Founder of RecruitU"
          />
        </div>
        <div style={{ breakInside: "avoid", marginBottom: "20px" }}>
          <StaticTestimonialCard
            title="Project Logo"
            description="Lorem ipsem is a dumy text. Lorem ipsem is a dumy text. Lorem ipsem is a dumy text. Lorem ipsem is a dumy text. Lorem ipsem is a dumy text. Lorem ipsem is a dumy text. "
            imageSrc="/path/to/image.jpg" // or leave it undefined to fallback to orange block
            name="Ahmed Shah"
            role="Co-Founder of RecruitU"
          />
        </div>
        <div style={{ breakInside: "avoid", marginBottom: "20px" }}>
          <StaticTestimonialCard
            title="Project Logo"
            description="Lorem ipsem is a dumy text. Lorem ipsem is a dumy text. Lorem ipsem is a dumy text. Lorem ipsem is a dumy text. Lorem ipsem is a dumy text. Lorem ipsem is a dumy text. "
            imageSrc="/path/to/image.jpg" // or leave it undefined to fallback to orange block
            name="Ahmed Shah"
            role="Co-Founder of RecruitU"
          />
        </div>
        <div style={{ breakInside: "avoid", marginBottom: "20px" }}>
          <StaticTestimonialCard
            title="Project Logo"
            description="Lorem ipsem is a dumy text. Lorem ipsem is a dumy text. Lorem ipsem is a dumy text. Lorem ipsem is a dumy text. Lorem ipsem is a dumy text. Lorem ipsem is a dumy text. "
            name="Ahmed Shah"
            role="Co-Founder of RecruitU"
          />
        </div>
      </div>
    </div>
  );
}
