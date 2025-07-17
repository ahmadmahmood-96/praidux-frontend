import Image from "next/image";
import StaticTestimonialCard from "../statictestCard";
export default function StaticTestimonial() {
  return (
    <div className="px-[100px] py-[51px] flex flex-col gap-[16px] max-[1150px]:px-[50px] max-[768px]:px-[24px]">
      <div className="flex flex-col gap-[8px]">
        <div className="flex gap-[8px] items-center">
          <Image src="/dot.svg" alt="dot" width={9} height={9} />
          <p className="font-Pop font-semibold text-[16px] text-[#123042] leading-[25.2px]">
            Testimonials
          </p>
        </div>
        <p className="font-clash font-semibold text-[38px] text-[#000000] leading-[48px]  max-[951px]:text-[28px] max-[951px]:leading-[38px] max-[470px]:text-[24px] max-[470px]:leading-[34px]">
          Hear it from our clients
        </p>
      </div>
     <div className="columns-3 max-[850px]:columns-2 max-[600px]:columns-1 gap-[20px]">
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
