import Image from "next/image";
import { useRouter } from "next/navigation";

type Category = {
  label: string;
  bgColor: string;
  textColor: string;
};

type BlogCardProps = {
  id: string;
  title: string;
  imageUrl?: string;
  categories?: Category[];
  projectType?: string;
};

export default function ProjectCard({
  id,
  title,
  imageUrl,
  categories = [],
  projectType,
}: BlogCardProps) {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(`/project/${id}`);
  };

  return (
    <div className="p-4 flex flex-col gap-5 bg-white rounded-[16px] w-full">

        {imageUrl && (
          <Image
            src={imageUrl}
            alt="Blog Image"
            width={450}
            height={324}
            className=" rounded-[8px] sm:h-[324px] w-full h-[280px]"
          />
        )}
    

      {/* Text Content */}
      <div className="flex flex-col gap-[5px]">
        <div className="flex justify-between items-center">
          <p className="font-Pop font-normal sm:text-[16px] text-[#161C2D] sm:leading-[28px] text-[14px] leading-[26px]">
            {projectType}
          </p>
          <div
            className="flex gap-[10px] items-center cursor-pointer"
            onClick={handleNavigate}
          >
            <p className="font-inter font-[medium] text-[14px] text-[#123042] leading-[20px]">
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
