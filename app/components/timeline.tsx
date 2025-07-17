"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="py-[20px]" ref={containerRef}>
      <div ref={ref} className="relative max-w-full ">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start max-[1057px]:flex-col">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="bg-[#FEF9F5] absolute left-[5px] max-[1157px]:left-[10px]  w-[56px] h-[56px] rounded-full flex items-center justify-center max-[1157px]:w-[40px] max-[1157px]:h-[40px]">
                <p className="font-clash font-medium text-[32px] text-[#FF5F1F] leading-[100%] max-[1157px]:text-[28px]">
                  {index + 1}
                </p>
              </div>
              <h3 className="block max-[1057px]:hidden font-clash font-medium pl-20 text-[24px] text-[#12141D] leading-[100%] max-[1356px]:text-[20px] ">
                {item.title}
              </h3>
            </div>

            <div className="relative w-full">
              <h3 className=" hidden max-[1057px]:block font-clash pl-20 font-medium text-[20px] text-[#12141D] leading-[100%]">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[5px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[5px] 
     bg-gradient-to-t from-[#FF5F1F] via-[#FF874A] to-transparent 
     from-[0%] via-[20%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
