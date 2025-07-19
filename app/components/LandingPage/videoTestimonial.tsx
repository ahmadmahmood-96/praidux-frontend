"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import VideoTestCard from "../videoTestCard";
import client from "@/utils/client";
import CircularProgress from "@mui/material/CircularProgress";
interface Testimonial {
  clientName: string;
  designation: string;
  projectName: string;
  stars: number;
  description: string;
  websiteLink?: string;
  iosLink?: string;
  androidLink?: string;
  liveStatus: string;
  videoUrl?: string;
  thumbnailUrl?: string;
  _id: string;
}

export default function VideoTestimonial() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchTestimonials = async (): Promise<void> => {
      try {
        const { data } = await client.get(
          "/videoTestimonial/view-listed-video-testimonials"
        );
        console.log("data", data?.result);
        setTestimonials(data?.result);
      } catch (err) {
        console.error("Failed to fetch testimonials", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);
  return (
    <div className="flex flex-col gap-[16px] py-[51px]">
      <div className="flex flex-col px-[24px]  xl:px-[100px] lg:px-[70px] md:px-[50px] items-center">
        <div className="flex flex-col items-center gap-[8px]">
          <div className="flex gap-[8px] items-center">
            <Image src="/dot.svg" alt="dot" width={9} height={9} />
            <p className="font-Pop font-semibold text-[16px] text-[#123042] leading-[25.2px]">
              150+ Satisfied Clients
            </p>
          </div>
          <p className="font-clash font-semibold lg:text-[38px] text-[#000000] lg:leading-[48px]  md:text-[28px] md:leading-[38px] text-[24px] leading-[34px]">
            Don’t just take our words
          </p>
        </div>
      </div>
      <div className="w-full overflow-hidden">
        {loading ? (
          <div className="flex justify-center items-center w-full h-[200px]">
            <CircularProgress
              sx={{ color: "#FF5F1F" }} // MUI custom color
              thickness={5}
              size={50}
            />
          </div>
        ) : (
          <div className="flex w-max gap-[16px] testimonial-slide group">
            {testimonials.map((testimonial, index) => (
              <VideoTestCard
                key={`${testimonial._id}-${index}`}
                testimonial={testimonial}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
