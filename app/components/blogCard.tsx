import Image from "next/image";

type Category = {
  label: string;
  bgColor: string;
  textColor: string;
};

type BlogCardProps = {
  author: string;
  date: string;
  title: string;
  description: string;
  imageUrl?: string; // for future
  categories?: Category[];
};

export default function BlogCard({
  author,
  date,
  title,
  description,
  imageUrl,
  categories = [],
}: BlogCardProps) {
  return (
    <div className="p-4 flex flex-col gap-5 bg-white rounded-[16px] w-full">
      {/* Image Placeholder or Image */}
      <div className="bg-[#FEF9F5] rounded-[8px] h-[324px] w-full relative overflow-hidden max-[500px]:h-[280px] max-[400px]:h-[250px]">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt="Blog Image"
            fill
            className="object-cover rounded-[8px]"
          />
        )}
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-[5px]">
        <div className="flex justify-between items-center">
          <p className="font-poppins font-normal text-[16px] text-[#161C2D] leading-[28px] max-[500px]:text-[14px] max-[500px]:leading-[26px]">
            {author} • {date}
          </p>
          <Image src="/arrow-up.svg" alt="arrow" className="cursor-pointer" width={24} height={24} />
        </div>

        <p className="font-inter font-semibold text-[24px] text-[#101828] leading-[32px] max-[500px]:text-[20px] max-[500px]:leading-[28px]">
          {title}
        </p>

        <p className="font-inter font-normal text-[16px] text-[#667085] leading-[24px] max-[500px]:text-[14px]">
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
