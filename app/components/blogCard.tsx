import Image from "next/image";
import { useRouter } from "next/navigation";
type Category = {
  label: string;
  bgColor: string;
  textColor: string;
};

type BlogCardProps = {
  author: string;
  id:string;
  date: string;
  title: string;
  description: string;
  imageUrl?: string; // for future
  categories?: Category[];
};

export default function BlogCard({
  author,
  id,
  date,
  title,
  description,
  imageUrl,
  categories = [],
}: BlogCardProps) {
   const router = useRouter(); // ✅ hook

  const handleNavigation = () => {
    router.push(`/blog/${id}`); // ✅ navigate to /blog/[id]
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
            {author} • {date}
          </p>
          <Image src="/arrow-up.svg" alt="arrow" className="cursor-pointer" width={24} height={24}  onClick={handleNavigation}/>
        </div>

        <p className="font-inter font-semibold sm:text-[24px] text-[#101828] sm:leading-[32px] text-[20px] leading-[28px]">
          {title}
        </p>

        <p className="font-inter font-normal sm:text-[16px] text-[#667085] leading-[24px] text-[14px]">
          {description}
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
