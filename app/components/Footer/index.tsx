import Image from "next/image";
import Link from "next/link";
import footerLinks from "@/app/links";

export default function Footer() {
  return (
    <footer className="w-full bg-[#123042] py-[34px] px-[24px] flex flex-col gap-[24px] lg:px-[100px] md:px-[50px]">
      <div className="flex justify-between lg:items-center gap-[30px] flex-col lg:flex-row items-start">
        <Image src="/praiduxWhite.png" alt="Logo" width={83} height={28} />
        <div className="flex gap-[20px] sm:flex-row flex-col">
          <p className="font-roboto font-normal md:text-[16px] text-white leading-[100%] cursor-pointer text-[14px]">
            Projects
          </p>
          <p className="font-roboto font-normal md:text-[16px] text-white leading-[100%] cursor-pointer text-[14px]">
            Services
          </p>
          <p className="font-roboto font-normal md:text-[16px] text-white leading-[100%] cursor-pointer text-[14px]">
            Testimonials
          </p>
          <p className="font-roboto font-normal md:text-[16px] text-white leading-[100%] cursor-pointer text-[14px]">
            FAQs
          </p>
          <p className="font-roboto font-normal md:text-[16px] text-white leading-[100%] cursor-pointer text-[14px]">
            Contact Us
          </p>
        </div>
        <div className="flex gap-[10px] items-center">
          <div className="flex gap-[10px]">
            <div className="bg-[#1E293B] rounded-full w-[27px] h-[27px] flex items-center justify-center cursor-pointer hover:bg-[#FF5F1F]">
              <Image src="/fb.svg" alt="fb" width={6.05} height={10.96} />
            </div>
            <div className="bg-[#1E293B] rounded-full w-[27px] h-[27px] flex items-center justify-center cursor-pointer hover:bg-[#FF5F1F]">
              <Image src="/insta.svg" alt="fb" width={12.96} height={12.19} />
            </div>
            <div className="bg-[#1E293B] rounded-full w-[27px] h-[27px] flex items-center justify-center cursor-pointer hover:bg-[#FF5F1F]">
              <Image src="/linkd.svg" alt="fb" width={11.69} height={12} />
            </div>
          </div>
          <button
            className="font-lato font-bold md:text-[16px] text-white leading-[100%] bg-[#FF5F1F]
          md:h-[43px] rounded-[40px] md:w-[132px] flex items-center justify-center py-[10px]
          text-[14px] w-fit md:px-[0] px-[15px] h-fit md:py-[0px]">
            Contact Us
          </button>
        </div>
      </div>
      <div className="px-[136.8px] bg-[#1E293B] h-[0.9px] w-full"></div>
      <div className="w-full flex items-center justify-center">
        <p className="font-Pop font-normal text-center sm:text-[12.6px] text-[#CBD5E1] leading-[19.8px] text-[11px]">
          © Copyright 2025, All Rights Reserved by Praidux
        </p>
      </div>
    </footer>
  );
}
