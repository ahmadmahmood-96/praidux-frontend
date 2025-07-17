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
          <div className="flex gap-[24px] max-[600px]:flex-col">
            <div className="bg-[#FF5F1F] rounded-[10px] h-[295px] max-w-[364px] max-[500px]:h-[250px]  w-full max-[500]:max-w-[100%]"></div>
             <div className="bg-[#FF5F1F] rounded-[10px] h-[295px] max-w-[364px] max-[500px]:h-[250px] w-full max-[500]:max-w-[100%]"></div>
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
          <div className="flex gap-[24px] max-[600px]:flex-col">
            <div className="bg-[#FF5F1F] rounded-[10px] h-[295px] max-w-[364px] max-[500px]:h-[250px]  w-full max-[500]:max-w-[100%]"></div>
             <div className="bg-[#FF5F1F] rounded-[10px] h-[295px] max-w-[364px] max-[500px]:h-[250px] w-full max-[500]:max-w-[100%]"></div>
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
          <div className="flex gap-[24px] max-[600px]:flex-col">
            <div className="bg-[#FF5F1F] rounded-[10px] h-[295px] max-[500px]:h-[250px] max-[500px]:h-[250px] max-w-[364px]  w-full max-[500]:max-w-[100%]"></div>
             <div className="bg-[#FF5F1F] rounded-[10px] h-[295px] max-[500px]:h-[250px] max-[500px]:h-[250px] max-w-[364px]  w-full max-[500]:max-w-[100%]"></div>
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
          <div className="flex gap-[24px] max-[600px]:flex-col">
            <div className="bg-[#FF5F1F] rounded-[10px] h-[295px] max-w-[364px] max-[500px]:h-[250px] w-full max-[500]:max-w-[100%]"></div>
             <div className="bg-[#FF5F1F] rounded-[10px] h-[295px] max-w-[364px] max-[500px]:h-[250px]  w-full max-[500]:max-w-[100%]"></div>
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
          <div className="flex gap-[24px] max-[600px]:flex-col">
            <div className="bg-[#FF5F1F] rounded-[10px] h-[295px] max-w-[364px] max-[500px]:h-[250px] w-full max-[500]:max-w-[100%]"></div>
             <div className="bg-[#FF5F1F] rounded-[10px] h-[295px] max-w-[364px] max-[500px]:h-[250px]  w-full max-[500]:max-w-[100%]"></div>
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
          <div className="flex gap-[24px] max-[600px]:flex-col">
            <div className="bg-[#FF5F1F] rounded-[10px] h-[295px] max-w-[364px] max-[500px]:h-[250px] w-full max-[500]:max-w-[100%]"></div>
             <div className="bg-[#FF5F1F] rounded-[10px] h-[295px] max-w-[364px] max-[500px]:h-[250px] w-full max-[500]:max-w-[100%]"></div>
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
          <div className="flex gap-[24px] max-[600px]:flex-col">
            <div className="bg-[#FF5F1F] rounded-[10px] h-[295px] max-w-[364px] max-[500px]:h-[250px] w-full max-[500]:max-w-[100%]"></div>
             <div className="bg-[#FF5F1F] rounded-[10px] h-[295px] max-w-[364px] max-[500px]:h-[250px] w-full max-[500]:max-w-[100%]"></div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="px-[100px] py-[48px] flex flex-col gap-[28px] bg-[#FFFFFF] max-[1277px]:px-[70px] max-[1177px]:px-[50px] max-[768px]:px-[24px]">
      <div className="flex flex-col gap-[8px]">
        <div className="flex gap-[8px] items-center">
          <Image src="/dot.svg" alt="dot" width={9} height={9} />
          <p className="font-Pop font-semibold text-[16px] text-[#123042] leading-[25.2px]">
            Process
          </p>
        </div>
        <p className="font-clash font-semibold text-[38px] text-[#000000] leading-[48px]  max-[951px]:text-[28px] max-[951px]:leading-[38px] max-[470px]:text-[24px] max-[470px]:leading-[34px]">
          How we elevate the ideas to greater userbase?
        </p>
      </div>
      <div className="relative w-full overflow-clip">
        <Timeline data={data} />
      </div>
    </div>
  );
};
export default Process;
