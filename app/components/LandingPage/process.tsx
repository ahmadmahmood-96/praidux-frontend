import Image from "next/image";
import { Timeline } from "../timeline";
const Process = () => {
  const data = [
    {
      title: "Discovery Call",
      content: (
        <div className="flex flex-col gap-[24px] mb-[18px]  max-[1057px]:pl-20">
          <p className="font-Pop font-normal text-[18px] leading-[140%] text-[#000000] max-[1250px]:text-[16px]">
            We thrive on pushing boundaries and exploring new ideas. By
            embracing the latest technologies and creative approaches, we ensure
            that every app we build is not only functional but also
            future-ready.
          </p>
          <div className="flex gap-[24px] sm:flex-row flex-col">
            <div className="bg-[#FF5F1F] rounded-[10px] h-[295px] max-w-[364px]  w-full timeLineimages"></div>
             <div className="bg-[#FF5F1F] rounded-[10px] h-[295px] max-w-[364px]  w-full timeLineimages "></div>
          </div>
        </div>
      ),
    },
      {
      title: "Feasibility & Research",
      content: (
        <div className="flex flex-col gap-[24px] mb-[18px]  max-[1057px]:pl-20">
          <p className="font-Pop font-normal text-[18px] leading-[140%] text-[#000000]">
            We thrive on pushing boundaries and exploring new ideas. By
            embracing the latest technologies and creative approaches, we ensure
            that every app we build is not only functional but also
            future-ready.
          </p>
          <div className="flex gap-[24px] sm:flex-row flex-col">
            <div className="bg-[#FF5F1F] rounded-[10px] h-[295px] max-w-[364px]  w-full timeLineimages"></div>
             <div className="bg-[#FF5F1F] rounded-[10px] h-[295px] max-w-[364px]  w-full timeLineimages "></div>
          </div>
        </div>
      ),
    },
     {
      title: "UI/UX Design",
      content: (
        <div className="flex flex-col gap-[24px] mb-[18px] max-[1057px]:pl-20">
          <p className="font-Pop font-normal text-[18px] leading-[140%] text-[#000000]">
            We thrive on pushing boundaries and exploring new ideas. By
            embracing the latest technologies and creative approaches, we ensure
            that every app we build is not only functional but also
            future-ready.
          </p>
          <div className="flex gap-[24px] sm:flex-row flex-col">
            <div className="bg-[#FF5F1F] rounded-[10px] h-[295px] max-w-[364px]  w-full timeLineimages"></div>
             <div className="bg-[#FF5F1F] rounded-[10px] h-[295px] max-w-[364px]  w-full timeLineimages "></div>
          </div>
        </div>
      ),
    },
     {
      title: "Development",
      content: (
        <div className="flex flex-col gap-[24px] mb-[18px] max-[1057px]:pl-20">
          <p className="font-Pop font-normal text-[18px] leading-[140%] text-[#000000]">
            We thrive on pushing boundaries and exploring new ideas. By
            embracing the latest technologies and creative approaches, we ensure
            that every app we build is not only functional but also
            future-ready.
          </p>
           <div className="flex gap-[24px] sm:flex-row flex-col">
            <div className="bg-[#FF5F1F] rounded-[10px] h-[295px] max-w-[364px]  w-full timeLineimages"></div>
             <div className="bg-[#FF5F1F] rounded-[10px] h-[295px] max-w-[364px]  w-full timeLineimages "></div>
          </div>
        </div>
      ),
    },
      {
     title: `Custom\n AI & ML Solution`,
      content: (
        <div className="flex flex-col gap-[24px] mb-[18px] max-[1057px]:pl-20">
          <p className="font-Pop font-normal text-[18px] leading-[140%] text-[#000000]">
            We thrive on pushing boundaries and exploring new ideas. By
            embracing the latest technologies and creative approaches, we ensure
            that every app we build is not only functional but also
            future-ready.
          </p>
          <div className="flex gap-[24px] sm:flex-row flex-col">
            <div className="bg-[#FF5F1F] rounded-[10px] h-[295px] max-w-[364px]  w-full timeLineimages"></div>
             <div className="bg-[#FF5F1F] rounded-[10px] h-[295px] max-w-[364px]  w-full timeLineimages "></div>
          </div>
        </div>
      ),
    },
      {
      title: "Deployment",
      content: (
        <div className="flex flex-col gap-[24px] mb-[18px] max-[1057px]:pl-20">
          <p className="font-Pop font-normal text-[18px] leading-[140%] text-[#000000]">
            We thrive on pushing boundaries and exploring new ideas. By
            embracing the latest technologies and creative approaches, we ensure
            that every app we build is not only functional but also
            future-ready.
          </p>
           <div className="flex gap-[24px] sm:flex-row flex-col">
            <div className="bg-[#FF5F1F] rounded-[10px] h-[295px] max-w-[364px]  w-full timeLineimages"></div>
             <div className="bg-[#FF5F1F] rounded-[10px] h-[295px] max-w-[364px]  w-full timeLineimages "></div>
          </div>
        </div>
      ),
    },
     {
      title: "Maintenance",
      content: (
        <div className="flex flex-col gap-[24px] mb-[18px] max-[1057px]:pl-20">
          <p className="font-Pop font-normal text-[18px] leading-[140%] text-[#000000]">
            We thrive on pushing boundaries and exploring new ideas. By
            embracing the latest technologies and creative approaches, we ensure
            that every app we build is not only functional but also
            future-ready.
          </p>
          <div className="flex gap-[24px] sm:flex-row flex-col">
            <div className="bg-[#FF5F1F] rounded-[10px] h-[295px] max-w-[364px]  w-full timeLineimages"></div>
             <div className="bg-[#FF5F1F] rounded-[10px] h-[295px] max-w-[364px]  w-full timeLineimages "></div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="px-[24px] py-[48px] flex flex-col gap-[28px] bg-[#FFFFFF] xl:px-[100px] lg:px-[70px] md:px-[50px]">
      <div className="flex flex-col gap-[8px]">
        <div className="flex gap-[8px] items-center">
          <Image src="/dot.svg" alt="dot" width={9} height={9} />
          <span className="font-Pop font-semibold text-[16px] text-[#123042] leading-[25.2px]">
            Process
          </span>
        </div>
        <h2 className="font-clash font-semibold lg:text-[38px] text-[#000000] lg:leading-[48px]  md:text-[28px] md:leading-[38px] text-[24px] leading-[34px]">
           How we elevate the ideas to greater userbase?
        </h2>
      </div>
      <div className="relative w-full overflow-clip">
        <Timeline data={data} />
      </div>
    </div>
  );
};
export default Process;
