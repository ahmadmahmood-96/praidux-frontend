"use client";
import Image from "next/image";
import { useEffect } from "react";
import StaticTestimonialCard from "../statictestCard";
import { getStaticTestimonial } from "@/services/redux/middleware/getStaticTestimonial";
import { AppDispatch, useAppSelector } from "@/services/redux/store";
import { useDispatch, useSelector } from "react-redux";
export default function StaticTestimonial() {
   const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
      const fetchStatic = async () => {
        try {
          const res = await dispatch<any>(getStaticTestimonial());
           console.log("🚀 API Response for static:", res.payload); // ✅ Logs API data
        } catch (err) {
          console.error("❌ API Error:", err);
        }
      };
  
      fetchStatic();
    }, [dispatch]);
    interface StaticState {
        result: any[];
        [key: string]: any;
      }
        const StaticState: StaticState = useAppSelector((state) => {
        const data = state.getStaticTestimonial.getStaticTestimonial;
        if (typeof data === "object" && data !== null && "result" in data) {
          return {
            ...data,
            result: Array.isArray(data.result) ? data.result : [],
          };
        }
        return { result: [] };
      });
        useEffect(() => {
           console.log("🧠 Redux static Store Data:", StaticState); // ✅ Logs Redux state when it changes
        }, [StaticState]);
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
    <div className="lg:columns-3 sm:columns-2 columns-1 gap-[20px]">
  {StaticState.result.map((testimonial, index) => (
    <div key={testimonial._id} style={{ breakInside: "avoid", marginBottom: "20px" }}>
      <StaticTestimonialCard
        title={testimonial.projectName}
        description={testimonial.description}
        imageSrc={testimonial.clientImage || undefined}
        name={testimonial.clientName}
        role={testimonial.designation}
      />
    </div>
  ))}
</div>

    </div>
  );
}
