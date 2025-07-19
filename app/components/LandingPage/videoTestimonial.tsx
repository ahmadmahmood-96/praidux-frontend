"use client";
import Image from "next/image";
import { useEffect } from "react";
import VideoTestCard from "../videoTestCard";
import { getVideoTestimonial } from "@/services/redux/middleware/getVideotestimonial";
import { AppDispatch, useAppSelector } from "@/services/redux/store";
import { useDispatch, useSelector } from "react-redux";

export default function VideoTestimonial() {
 const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const res = await dispatch<any>(getVideoTestimonial());
        // console.log("🚀 API Response for Video:", res.payload); // ✅ Logs API data
      } catch (err) {
        console.error("❌ API Error:", err);
      }
    };

    fetchVideo();
  }, [dispatch]);
   interface VideoState {
    result: any[];
    [key: string]: any;
  }
    const VideoState: VideoState = useAppSelector((state) => {
    const data = state.getVideoTestimonial.getVideoTestimonial;
    if (typeof data === "object" && data !== null && "result" in data) {
      return {
        ...data,
        result: Array.isArray(data.result) ? data.result : [],
      };
    }
    return { result: [] };
  });
    useEffect(() => {
      // console.log("🧠 Redux video Store Data:", VideoState); // ✅ Logs Redux state when it changes
    }, [VideoState]);
  // const testimonials = [
  //   {
  //     clientName: "Jane Doe",
  //     designation: "CEO, TechWave",
  //     projectName: "WaveApp",
  //     stars: 5,
  //     description:
  //       "Working with this team was a pleasure. They delivered the product on time and exceeded expectations!",
  //     websiteLink: "https://waveapp.io",
  //     iosLink: "https://apps.apple.com/us/app/waveapp",
  //     androidLink: "https://play.google.com/store/apps/details?id=waveapp",
  //     liveStatus: "yes",
  //     videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  //     thumbnailUrl: "https://via.placeholder.com/300x200.png?text=Thumbnail",
  //     _id: "dummy-id-1",
  //   },
  //   {
  //     clientName: "John Smith",
  //     designation: "CTO, DevCorp",
  //     projectName: "DevTools",
  //     stars: 4,
  //     description:
  //       "Great collaboration and timely delivery. Highly recommended!",
  //     websiteLink: "https://devcorp.io",
  //     iosLink: "https://apps.apple.com/us/app/devtools",
  //     androidLink: "https://play.google.com/store/apps/details?id=devtools",
  //     liveStatus: "yes",
  //     videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  //     thumbnailUrl: "https://via.placeholder.com/300x200.png?text=DevTools",
  //     _id: "dummy-id-2",
  //   },
  //   {
  //     clientName: "Alice Johnson",
  //     designation: "Founder, AppNest",
  //     projectName: "Nestify",
  //     stars: 5,
  //     description:
  //       "Top-notch design and development support throughout the project!",
  //     websiteLink: "https://appnest.io",
  //     iosLink: "https://apps.apple.com/us/app/nestify",
  //     androidLink: "https://play.google.com/store/apps/details?id=nestify",
  //     liveStatus: "yes",
  //     videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  //     thumbnailUrl: "https://via.placeholder.com/300x200.png?text=Nestify",
  //     _id: "dummy-id-3",
  //   },
  //   {
  //     clientName: "Alice Johnson",
  //     designation: "Founder, AppNest",
  //     projectName: "Nestify",
  //     stars: 5,
  //     description:
  //       "Top-notch design and development support throughout the project!",
  //     websiteLink: "https://appnest.io",
  //     iosLink: "https://apps.apple.com/us/app/nestify",
  //     androidLink: "https://play.google.com/store/apps/details?id=nestify",
  //     liveStatus: "yes",
  //     videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  //     thumbnailUrl: "https://via.placeholder.com/300x200.png?text=Nestify",
  //     _id: "dummy-id-4",
  //   },
  // ];

 const testimonials = VideoState?.result || [];

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
        <div className="flex w-max gap-[16px] testimonial-slide group">
  {testimonials.map((testimonial, index) => (
    <VideoTestCard key={`${testimonial._id}-${index}`} testimonial={testimonial} />
  ))}
</div>

      </div>
    </div>
  );
}
