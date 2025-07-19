"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import StaticTestimonialCard from "../statictestCard";
import client from "@/utils/client";
import CircularProgress from "@mui/material/CircularProgress";
export default function StaticTestimonial() {
  interface StaticState {
    result: any[];
    [key: string]: any;
  }
  const [staticTestimonials, setstaticTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchStatic = async (): Promise<void> => {
      try {
        const { data } = await client.get(
          "/staticTestimonial/view-listed-static-testimonials"
        );
        console.log("data", data?.result);
        setstaticTestimonials(data?.result);
      } catch (err) {
        console.error("Failed to fetch testimonials", err);
      } finally {
        setLoading(false);
      }
    };
    fetchStatic();
  }, []);

  return (
    <div className="px-[24px] py-[51px] flex flex-col gap-[16px] xl:px-[100px] lg:px-[70px] md:px-[50px]">
      <div className="flex flex-col gap-[8px]">
        <div className="flex gap-[8px] items-center">
          <Image src="/dot.svg" alt="dot" width={9} height={9} />
          <p className="font-Pop font-semibold text-[16px] text-[#123042] leading-[25.2px]">
            Testimonials
          </p>
        </div>
        <p className="font-clash font-semibold lg:text-[38px] text-[#000000] lg:leading-[48px]  md:text-[28px] md:leading-[38px] text-[24px] leading-[34px]">
          Hear it from our clients
        </p>
      </div>
       {loading ? (
        <div className="flex justify-center items-center h-[300px]">
          <CircularProgress
            style={{ color: "#FF5F1F" }}
            size={60}
            thickness={5}
          />
        </div>
      ) : (
      <div className="lg:columns-3 sm:columns-2 columns-1 gap-[20px]">
        {staticTestimonials.map((testimonial, index) => (
          <div
            key={testimonial._id}
            style={{ breakInside: "avoid", marginBottom: "20px" }}
          >
            <StaticTestimonialCard
              title={testimonial.projectName}
              description={testimonial.description}
              projectLogo={testimonial.projectLogo}
              imageSrc={testimonial.clientImage || undefined}
              name={testimonial.clientName}
              role={testimonial.designation}
            />
          </div>
        ))}
      </div>
       )}
    </div>
  );
}
