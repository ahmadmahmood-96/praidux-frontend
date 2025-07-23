import Image from "next/image";
import { Timeline } from "../timeline";
import { memo, useMemo } from "react";
interface ProcessStepContentProps {
  text: string;          
  className?: string;     
}
const ProcessStepContent = memo(({ text, className = "" }: ProcessStepContentProps) => (
  <div className={`flex flex-col gap-6 mb-[18px] max-[1057px]:pl-20 ${className}`}>
    <p className="font-Pop font-normal text-[18px] leading-[140%] text-[#000000] max-[1250px]:text-[16px]">
      {text}
    </p>
    <div className="flex gap-6 sm:flex-row flex-col">
      <div className="bg-[#FF5F1F] rounded-[10px] h-[295px] max-w-[364px] w-full timeLineimages" />
      <div className="bg-[#FF5F1F] rounded-[10px] h-[295px] max-w-[364px] w-full timeLineimages" />
    </div>
  </div>
));

ProcessStepContent.displayName = 'ProcessStepContent';

const Process = memo(() => {
  // Memoize data array - you can customize each step's content here
  const processData = useMemo(() => [
    {
      title: "Discovery Call",
      content: (
        <ProcessStepContent 
          text="We start with understanding your vision and requirements. During this phase, we dive deep into your business goals, target audience, and technical needs to create a solid foundation for your project."
        />
      ),
    },
    {
      title: "Feasibility & Research",
      content: (
        <ProcessStepContent 
          text="We conduct thorough market research and technical feasibility analysis. This ensures your app idea is viable, competitive, and technically sound before moving to the design phase."
        />
      ),
    },
    {
      title: "UI/UX Design",
      content: (
        <ProcessStepContent 
          text="Our design team creates intuitive and engaging user interfaces. We focus on user experience, accessibility, and modern design principles to ensure your app is both beautiful and functional."
        />
      ),
    },
    {
      title: "Development",
      content: (
        <ProcessStepContent 
          text="We thrive on pushing boundaries and exploring new ideas. By embracing the latest technologies and creative approaches, we ensure that every app we build is not only functional but also future-ready."
        />
      ),
    },
    {
      title: "Custom\nAI & ML Solution",
      content: (
        <ProcessStepContent 
          text="We integrate cutting-edge AI and machine learning capabilities tailored to your specific needs. Our solutions enhance user experience and provide intelligent automation for your business processes."
        />
      ),
    },
    {
      title: "Deployment",
      content: (
        <ProcessStepContent 
          text="We handle the complete deployment process across all platforms. From app store submissions to server configuration, we ensure your app launches smoothly and reaches your target audience."
        />
      ),
    },
    {
      title: "Maintenance",
      content: (
        <ProcessStepContent 
          text="Post-launch support and continuous improvement are our priorities. We provide ongoing maintenance, updates, and feature enhancements to keep your app competitive and bug-free."
        />
      ),
    },
  ], []);

  return (
    <div className="px-6 py-12 flex flex-col gap-7 bg-white xl:px-[100px] lg:px-[70px] md:px-[50px]">
      <header className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <Image 
            src="/dot.svg" 
            alt="Process indicator" 
            width={9} 
            height={9}
            priority={false}
            loading="lazy"
          />
          <span className="font-Pop font-semibold text-base text-[#123042] leading-[25.2px]">
            Process
          </span>
        </div>
        <h2 className="font-clash font-semibold lg:text-[38px] text-black lg:leading-[48px] md:text-[28px] md:leading-[38px] text-2xl leading-[34px]">
          How we elevate the ideas to greater userbase?
        </h2>
      </header>
      
      <div className="relative w-full overflow-clip">
        <Timeline data={processData} />
      </div>
    </div>
  );
});

Process.displayName = 'Process';

export default Process;