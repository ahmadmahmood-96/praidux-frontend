"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Faq from "@/app/components/LandingPage/faq";
import Process from "./processProject";
import RevenueIdea from "@/app/components/revenueIdea";
export default function Project() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <div className="bg-[#FAFAFA] flex flex-col gap-[8px]">
      <div className="px-[24px] xl:px-[100px] lg:px-[70px] md:px-[50px] py-[35px]">
        <div className="flex flex-col gap-[15px]">
          <div className="py-[12px] flex flex-col gap-[16px]">
            <div
              className="border-[#D0D5DD] w-fit border-[0.72px] bg-[#FFFFFF] rounded-[5.8px] flex gap-[5.8px] items-center py-[7.25px] px-[11.6px] cursor-pointer"
              onClick={handleBack}
            >
              <Image
                src="/arrowback.svg"
                alt="back"
                width={14.5}
                height={14.5}
              />
              <p className="font-inter font-semibold text-[10.15px] leading-[14.5px] text-[#344054]">
                Home / Category / Project
              </p>
            </div>
            <p className="font-clash font-semibold text-[30px] sm:text-[40px] md:text-[46px] xl:text-[54px] leading-[40px] sm:leading-[50px] md:leading-[56px] xl:leading-[64px] text-[#000000]">
              Project Name Goes Here
            </p>
            <p className="font-[satoshi] font-[medium] text-[16px] text-[#150A3D] leading-[20.6px] w-full lg:w-[686px]">
              Convert AI-generated content into 100% human text with MyWords Ai.
              Streamline your writing, enhance efficiency, and bypass AI
              detectors like GPTZero and TurnItIn effortlessly.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[15px] sm:gap-[8px] flex-wrap">
              <button className="bg-[#FF5F1F] rounded-[40px] py-[12px] px-[16px] font-Pop font-medium text-[16px] leading-[100%] text-[#FFFFFF]">
                Get Your Idea Live
              </button>
              <div className="flex items-center gap-[8px]">
                {/* {websiteLink && ( */}
                <a
                  href="https://apps.apple.com/us/app/waveapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-black/10 rounded-full px-3 py-2 bg-white"
                >
                  <Image
                    src="/testimonial/language.svg"
                    alt="Web"
                    width={20}
                    height={20}
                  />
                  <p className="sm:text-[14px] text-[12px] font-lato font-bold text-black">
                    Web
                  </p>
                </a>
                {/* )} */}

                {/* {iosLink && ( */}
                <a
                  href="https://apps.apple.com/us/app/waveapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-black/10 rounded-full px-3 py-2 bg-white"
                >
                  {/* <img src="/testimonial/apple.svg" alt="iOS" /> */}
                  <Image
                    src="/testimonial/apple.svg"
                    alt="Web"
                    width={20}
                    height={20}
                  />
                  <p className="sm:text-[14px] text-[12px] font-lato font-bold text-black">
                    iOS
                  </p>
                </a>
                {/* )} */}

                {/* {androidLink && ( */}
                <a
                  href="https://apps.apple.com/us/app/waveapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-black/10 rounded-full px-3 py-2 bg-white"
                >
                  <Image
                    src="/testimonial/Android.svg"
                    alt="Web"
                    width={20}
                    height={20}
                  />

                  <p className="sm:text-[14px] text-[12px] font-lato font-bold text-black">
                    Android
                  </p>
                </a>
                {/* )} */}
              </div>
              <div className="flex items-center gap-[10px]">
                <div className="bg-[#00DF78] w-[9px] h-[9px] rounded-full"></div>
                <p className="font-Pop font-medium text-[14.4px] text-[#757575] leading-[21.6px]">
                  The app is live
                </p>
              </div>
            </div>
          </div>
          <div className="py-[24px] justify-between flex flex-col lg:flex-row gap-[8px] ">
            <div className="flex flex-col gap-[8px]">
              <p className="font-satoshi font-medium text-[16px] leading-[20.6px] text-[#150A3D]">
                Client
              </p>
              <p className="font-helvetica font-bold text-[#150A3D] text-[17.45px] leading-[110%]">
                Client Name
              </p>
            </div>
            <div className="flex gap-[8px]">
              <div className="w-[1px] h-[100%] bg-[#0000001A] hidden lg:block"></div>
              <div className="flex flex-col gap-[8px]">
                <p className="font-satoshi font-medium text-[16px] leading-[20.6px] text-[#150A3D]">
                  Duration
                </p>
                <p className="font-helvetica font-bold text-[#150A3D] text-[17.45px] leading-[110%] ">
                  1 month 2 weeks
                </p>
              </div>
            </div>
            <div className="flex gap-[8px]">
              <div className="w-[1px] h-[100%] bg-[#0000001A] hidden lg:block"></div>
              <div className="flex flex-col gap-[8px]">
                <p className="font-satoshi font-medium text-[16px] leading-[20.6px] text-[#150A3D]">
                  Downloads / Visitors
                </p>
                <p className="font-helvetica font-bold text-[#150A3D] text-[17.45px] leading-[110%]">
                  24k
                </p>
              </div>
            </div>
            <div className="flex gap-[8px]">
              <div className="w-[1px] h-[100%] bg-[#0000001A] hidden lg:block"></div>
              <div className="flex flex-col gap-[8px]">
                <p className="font-satoshi font-medium text-[16px] leading-[20.6px] text-[#150A3D]">
                  Category
                </p>
                <p className="font-helvetica font-bold text-[#150A3D] text-[17.45px] leading-[110%]">
                  Category Name
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-[15px] justify-center 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 pb-[35px]">
            <div className="relative h-[300px] sm:h-[380px] lg:h-[453px] w-full rounded-[8px]">
              <Image src="/projectImage.png" alt="project" fill />
            </div>
            <div className="relative h-[300px] sm:h-[380px] lg:h-[453px] w-full rounded-[8px]">
              <Image src="/projectImage.png" alt="project" fill />
            </div>
            <div className="relative h-[300px] sm:h-[380px] lg:h-[453px] w-full rounded-[8px]">
              <Image src="/projectImage.png" alt="project" fill />
            </div>
            <div className="relative h-[300px] sm:h-[380px] lg:h-[453px] w-full rounded-[8px]">
              <Image src="/projectImage.png" alt="project" fill />
            </div>
          </div>
        </div>

        <div className="w-full h-[400px] lg:h-[502px] bg-[#FF5F1F] rounded-[8px] flex items-center justify-center">
          <Image
            src="/contact/play.png"
            alt="play"
            width={180}
            height={120}
          />
        </div>
      </div>
      <Process />
      <Faq />
    <RevenueIdea/>
    </div>
  );
}
