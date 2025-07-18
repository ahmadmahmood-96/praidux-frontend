import Image from "next/image";
import VideoTestCard from "../videoTestCard";
export default function VideoTestimonial() {
  const testimonials = [
    {
      clientName: "Jane Doe",
      designation: "CEO, TechWave",
      projectName: "WaveApp",
      stars: 5,
      description:
        "Working with this team was a pleasure. They delivered the product on time and exceeded expectations!",
      websiteLink: "https://waveapp.io",
      iosLink: "https://apps.apple.com/us/app/waveapp",
      androidLink: "https://play.google.com/store/apps/details?id=waveapp",
      liveStatus: "yes",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      thumbnailUrl: "https://via.placeholder.com/300x200.png?text=Thumbnail",
      _id: "dummy-id-1",
    },
    {
      clientName: "John Smith",
      designation: "CTO, DevCorp",
      projectName: "DevTools",
      stars: 4,
      description:
        "Great collaboration and timely delivery. Highly recommended!",
      websiteLink: "https://devcorp.io",
      iosLink: "https://apps.apple.com/us/app/devtools",
      androidLink: "https://play.google.com/store/apps/details?id=devtools",
      liveStatus: "yes",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      thumbnailUrl: "https://via.placeholder.com/300x200.png?text=DevTools",
      _id: "dummy-id-2",
    },
    {
      clientName: "Alice Johnson",
      designation: "Founder, AppNest",
      projectName: "Nestify",
      stars: 5,
      description:
        "Top-notch design and development support throughout the project!",
      websiteLink: "https://appnest.io",
      iosLink: "https://apps.apple.com/us/app/nestify",
      androidLink: "https://play.google.com/store/apps/details?id=nestify",
      liveStatus: "yes",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      thumbnailUrl: "https://via.placeholder.com/300x200.png?text=Nestify",
      _id: "dummy-id-3",
    },
    {
      clientName: "Alice Johnson",
      designation: "Founder, AppNest",
      projectName: "Nestify",
      stars: 5,
      description:
        "Top-notch design and development support throughout the project!",
      websiteLink: "https://appnest.io",
      iosLink: "https://apps.apple.com/us/app/nestify",
      androidLink: "https://play.google.com/store/apps/details?id=nestify",
      liveStatus: "yes",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      thumbnailUrl: "https://via.placeholder.com/300x200.png?text=Nestify",
      _id: "dummy-id-4",
    },
  ];
const repeatedTestimonials =
  testimonials.length < 3
    ? Array(3).fill(testimonials).flat()
    : [...testimonials, ...testimonials];

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
        <div className="flex w-max gap-[16px] testimonial-slide">
  {repeatedTestimonials.map((testimonial, index) => (
    <VideoTestCard key={`${testimonial._id}-${index}`} testimonial={testimonial} />
  ))}
</div>

      </div>
    </div>
  );
}
