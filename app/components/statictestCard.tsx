import Image from "next/image";

interface StaticTestimonialCardProps {
  title: string;
  description: string;
  imageSrc?: string; // Optional image
  name: string;
  role: string;
  avatarColor?: string; // Optional fallback avatar color
}

export default function StaticTestimonialCard({
  title,
  description,
  imageSrc,
  name,
  role,
  avatarColor = "#FF5F1F",
}: StaticTestimonialCardProps) {
  return (
    <div className="bg-[#FFFFFF] p-[14px] flex flex-col gap-[16px] rounded-[8px] max-w-[full]">
      <p className="font-clash font-semibold text-[16px] text-[#000000] leading-[100%]">
        {title}
      </p>

    {imageSrc && (
  <div className="rounded-[8px] h-[239px] w-full">
    <Image
      src={imageSrc}
      alt={title}
      fill
      className="object-cover rounded-[8px]"
    />
  </div>
)}

      <p className="font-roboto font-normal text-[16px] text-[#000000] leading-[24px] max-[500px]:text-[14px]">
        {description}
      </p>

      <div className="flex gap-[16px] items-center">
        <div
          className="w-[36px] h-[36px] rounded-full"
          style={{ backgroundColor: avatarColor }}
        ></div>
        <div>
          <p className="font-clash font-semibold text-[16px] text-[#000000] leading-[100%] max-[500px]:text-[14px]">
            {name}
          </p>
          <p className="font-roboto font-normal text-[14px] text-[#000000] leading-[100%] max-[500px]:text-[12px]">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}
