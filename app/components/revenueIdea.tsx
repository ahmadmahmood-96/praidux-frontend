import Image from "next/image";
import { useRouter } from "next/navigation";

export default function RevenueIdea() {
  const router = useRouter(); 

  const handleClick = () => {
    router.push("/?scrollTo=contact-us");
  };
  return (
     <div className="bg-[#FFFFFF] pt-[24px] md:pt-[51px] pb-[24px] md:pb-[40px] px-[24px] xl:px-[100px] lg:px-[70px] md:px-[50px]">
        <div className="bg-[#FEF9F5] p-[24px] sm:p-[32px] flex flex-col gap-[32px] items-center rounded-[8px]">
          <div className="flex flex-col items-center gap-[8px]">
            <div className="flex gap-[8px] items-center">
              <Image src="/dot.svg" alt="dot" width={9} height={9} priority />
              <p className="font-Pop font-semibold text-[16px] text-[#123042] leading-[25.2px]">
                Reach Out Now
              </p>
            </div>
            <p className="font-clash font-semibold lg:text-[38px] text-[#000000] text-center lg:leading-[40px] md:text-[28px] md:leading-[30px] text-[24px] leading-[28px]">
              Make Revenue from your Idea
            </p>
          </div>
          <p className="font-Pop font-medium text-[14px] md:text-[16px] lg:text-[18px] leading-[25.2px] text-[#757575] text-center">
            Sell templates, make referrals, and bring in clients.
            Keep 100% of your earnings.
          </p>
          <button 
           onClick={handleClick}
           className="bg-[#FF5F1F] py-[12px] px-[16px] rounded-[40px] border-none text-[#FFFFFF] font-Pop font-medium text-[16px] leading-[100%]">
            Contact Us Now
          </button>
        </div>
      </div>
  );
}
