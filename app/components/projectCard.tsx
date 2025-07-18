import Image from "next/image";

type Category = {
  label: string;
  bgColor: string;
  textColor: string;
};

type BlogCardProps = {
  title: string;
  imageUrl?: string;
  categories?: Category[];
  projectType?: string;
};

export default function ProjectCard({
  title,
  imageUrl,
  categories = [],
  projectType,
}: BlogCardProps) {

  return (
    <div className="p-4 flex flex-col gap-5 bg-white rounded-[16px] w-full">
      {/* Image Placeholder or Image */}
      <div className="bg-[#FEF9F5] rounded-[8px] sm:h-[324px] w-full relative overflow-hidden  h-[280px]">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt="Blog Image"
            fill
            className="rounded-[8px]"
          />
        )}
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-[5px]">
        <div className="flex justify-between items-center">
          <p className="font-Pop font-normal sm:text-[16px] text-[#161C2D] sm:leading-[28px] text-[14px] leading-[26px]">
            {projectType}
          </p>
          <div className="flex gap-[10px] items-center cursor-pointer">
            <p className="font-inter font-[medium] text-[14] text-[#123042] leading-[20px]">
              View
            </p>
            <Image
              src="/arrow-up.svg"
              alt="arrow"
              className="cursor-pointer"
              width={24}
              height={24}
            />
          </div>
        </div>

        <p className="font-Pop font-semibold sm:text-[20px] text-[#161C2D] sm:leading-[36.4px] text-[18px] leading-[28px]">
          {title}
        </p>
        {/* Category Chips */}
        {categories.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className={`py-1 px-2 rounded-[16px]`}
                style={{
                  backgroundColor: cat.bgColor,
                }}
              >
                <p
                  className={`font-inter font-medium text-[14px] leading-[20px]`}
                  style={{
                    color: cat.textColor,
                  }}
                >
                  {cat.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
