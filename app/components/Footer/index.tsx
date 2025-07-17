import Image from "next/image";
import Link from "next/link";
import footerLinks from "@/app/links";

export default function Footer() {
  return (
    // <footer className="w-full bg-gradient-to-r from-[#096AD8] via-[#34749b] to-[#4194b4] text-white py-10 px-6">
    //   <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-10">
    //     {/* Logo Section */}
    //     <div className="flex flex-col items-start">
    //       <div className="bg-white/40 backdrop-blur-md p-2 rounded-xl border border-white/20 mb-4">
    //         <Link href="/">
    //           <Image
    //             src="/hikar-logo.png"
    //             alt="Hikar Logo"
    //             width={160}
    //             height={50}
    //             className="object-contain"
    //           />
    //         </Link>
    //       </div>

    //       <span className="text-sm text-white">
    //         &copy; 2024 Hikar Trading Co. All rights reserved.
    //       </span>
    //     </div>

    //     {/* Navigation Links */}
    //     <div className="flex flex-col">
    //       <span className="text-lg font-semibold text-white mb-3">
    //         Quick Links
    //       </span>
    //       {footerLinks.map((link) => (
    //         <Link
    //           key={link.name}
    //           href={link.href}
    //           className="text-sm text-white hover:text-[#EAF3FF] mb-2 transition-colors"
    //         >
    //           {link.name}
    //         </Link>
    //       ))}
    //     </div>

    //     {/* Policies */}
    //     <div className="flex flex-col">
    //       <span className="text-lg font-semibold text-white mb-3">Auction</span>
    //       <Link
    //         href="#"
    //         className="text-sm text-white hover:text-[#EAF3FF] mb-2 transition-colors"
    //       >
    //         Take Part in Auction
    //       </Link>
    //     </div>
    //   </div>
    // </footer>
    <footer className="w-full bg-[#123042] py-[34px] px-[100px] flex flex-col gap-[24px] max-[1150px]:px-[50px] max-[768px]:px-[24px]">
      <div className="flex justify-between items-center gap-[30px] max-[850px]:flex-col max-[850px]:items-start">
        <Image src="/praiduxWhite.png" alt="Logo" width={83} height={28} />
        <div className="flex gap-[20px] max-[850px]:flex-col">
          <p className="font-roboto font-normal text-[16px] text-white leading-[100%] cursor-pointer max-[940px]:text-[14px]">
            Projects
          </p>
          <p className="font-roboto font-normal text-[16px] text-white leading-[100%] cursor-pointer max-[940px]:text-[14px]">
            Services
          </p>
          <p className="font-roboto font-normal text-[16px] text-white leading-[100%] cursor-pointer max-[940px]:text-[14px]">
            Testimonials
          </p>
          <p className="font-roboto font-normal text-[16px] text-white leading-[100%] cursor-pointer max-[940px]:text-[14px]">
            FAQs
          </p>
          <p className="font-roboto font-normal text-[16px] text-white leading-[100%] cursor-pointer max-[940px]:text-[14px]">
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
            className="font-lato font-bold text-[16px] text-white leading-[100%] bg-[#FF5F1F]
          h-[43px] rounded-[40px] w-[132px] flex items-center justify-center
          max-[940px]:text-[14px] max-[940px]:w-fit max-[940px]:px-[15px] max-[940px]:h-fit max-[940px]:py-[10px]">
            Contact Us
          </button>
        </div>
      </div>
      <div className="px-[136.8px] bg-[#1E293B] h-[0.9px] w-full"></div>
      <div className="w-full flex items-center justify-center">
        <p className="font-Pop font-normal text-center text-[12.6px] text-[#CBD5E1] leading-[19.8px] max-[400px]:font-[11px]">
          © Copyright 2025, All Rights Reserved by Praidux
        </p>
      </div>
    </footer>
  );
}
