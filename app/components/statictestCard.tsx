import Image from "next/image";

interface StaticTestimonialCardProps {
  title: string;
  description: string;
  imageSrc?: string; // Optional image
  name: string;
  role: string;
  avatarColor?: string;
  projectLogo?: string; // Optional fallback avatar color
}

export default function StaticTestimonialCard({
  title,
  description,
  imageSrc,
  name,
  role,
  projectLogo,
  avatarColor = "#FF5F1F",
}: StaticTestimonialCardProps) {
  return (
    <div className="bg-[#FFFFFF] p-[14px] flex flex-col gap-[16px] rounded-[8px] max-w-[full]">
      <p className="font-clash font-semibold text-[16px] text-[#000000] leading-[100%]">
        {title}
      </p>

      {projectLogo && (
        <div className="rounded-[8px] h-[239px] w-full relative ">
          <Image
            src={projectLogo}
            alt={title}
            fill
            className=" rounded-[8px] w-fit"
          />
        </div>
      )}

      <p className="font-roboto font-normal sm:text-[16px] text-[#000000] leading-[24px] text-[14px]">
        {description}
      </p>

      <div className="flex gap-[16px] items-center">
      {imageSrc && (
  <div className="w-[36px] h-[36px] rounded-full relative overflow-hidden">
    <Image
      src={imageSrc}
      alt={title}
      fill
    />
  </div>
)}


        <div>
          <p className="font-clash font-semibold sm:text-[16px] text-[#000000] leading-[100%] text-[14px]">
            {name}
          </p>
          <p className="font-roboto font-normal sm:text-[14px] text-[#000000] leading-[100%] text-[12px]">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}
