"use client";

import RevenueIdea from "@/app/components/revenueIdea";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Faq from "@/app/components/LandingPage/faq";

export default function Blog() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <div className="bg-[#FAFAFA] flex flex-col gap-[8px]">
      <div className="px-[24px] xl:px-[100px] lg:px-[70px] md:px-[50px] py-[35px]">
        <div className="flex flex-col gap-[15px]">
          <div
            className="border-[#D0D5DD] w-fit border-[0.72px] bg-[#FFFFFF] rounded-[5.8px] flex gap-[5.8px] items-center py-[7.25px] px-[11.6px] cursor-pointer"
            onClick={handleBack}
          >
            <Image src="/arrowback.svg" alt="back" width={14.5} height={14.5} />
            <p className="font-inter font-semibold text-[10.15px] leading-[14.5px] text-[#344054]">
              Home / Blog
            </p>
           
          </div>
           <Image src="/Blog.png" alt="Blog" width={1240} height={456} className="w-full" />
           <p className="font-inter font-bold text-[26px] md:text-[32px] lg:text-[38px] xl:text-[45px] leading-[100%] text-[#2D3748]">Finibus Bonorum et Malorum</p>
           <div className="flex gap-[30px] items-center">
            <p className="font-inter font-bold text-[12px] sm:text-[14px] lg:text-[16px] xl:text-[18px] leading-[100%] text-[#2D3748]">Written by John doe</p>
            <p className="font-inter font-normal text-[12px] sm:text-[14px] lg:text-[16px] xl:text-[18px] text-[#718096] leading-[100%]">Monday  May 20</p>
           </div>
        </div>
      </div>
      <div className="flex gap-[16px]">

      </div>
      <Faq/>
      <RevenueIdea/>
    </div>
  );
}
