import Image from "next/image";
import BlogCard from "../blogCard";

export default function Blogs() {
  return (
    <div className="px-[24px] py-[40px] flex flex-col gap-[32px] xl:px-[100px] lg:px-[70px] md:px-[50px]">
      <div className="flex flex-col gap-[8px] xl:px-[100px] px-[0]">
        <div className="flex gap-[8px] items-center">
          <Image src="/dot.svg" alt="dot" width={9} height={9} />
          <p className="font-Pop font-semibold text-[16px] text-[#123042] leading-[25.2px]">
            Blogs
          </p>
        </div>
       <p className="font-clash font-semibold lg:text-[38px] text-[#000000] lg:leading-[48px]  md:text-[28px] md:leading-[38px] text-[24px] leading-[34px]">
            What our experts and modern tech world says in out blogs?
        </p>
        <p className="font-Pop font-normal text-[18px] text-[#000000] leading-[140%]">
          We thrive on pushing boundaries and exploring new ideas. By embracing
          the latest technologies and creative approaches, we ensure that every
          app we build is not only functional but also future-ready.
        </p>
      </div>
      <div
        className="grid gap-[16px] justify-center 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 xl:px-[100px] px-[0]"
      >
        <BlogCard
          author="Umar"
          date="17 Jan 2022"
          imageUrl="/picture.png"
          title="Bill Walsh leadership lessons"
          description="Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?"
          categories={[
            { label: "UIUX", bgColor: "#EEF4FF", textColor: "#3538CD" },
            {
              label: "Software Development",
              bgColor: "#ECFDF3",
              textColor: "#027A48",
            },
            { label: "AI ML", bgColor: "#FDF2FA", textColor: "#C11574" },
            {
              label: "Cross Platform",
              bgColor: "#F9F5FF",
              textColor: "#6941C6",
            },
          ]}
        />
        <BlogCard
          author="Umar"
          date="17 Jan 2022"
          title="Bill Walsh leadership lessons"
          description="Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?"
          categories={[
            { label: "UIUX", bgColor: "#EEF4FF", textColor: "#3538CD" },
            {
              label: "Software Development",
              bgColor: "#ECFDF3",
              textColor: "#027A48",
            },
            { label: "AI ML", bgColor: "#FDF2FA", textColor: "#C11574" },
            {
              label: "Cross Platform",
              bgColor: "#F9F5FF",
              textColor: "#6941C6",
            },
          ]}
        />
        <BlogCard
          author="Umar"
          date="17 Jan 2022"
          imageUrl="/picture.png"
          title="Bill Walsh leadership lessons"
          description="Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?"
          categories={[
            { label: "UIUX", bgColor: "#EEF4FF", textColor: "#3538CD" },
            {
              label: "Software Development",
              bgColor: "#ECFDF3",
              textColor: "#027A48",
            },
            { label: "AI ML", bgColor: "#FDF2FA", textColor: "#C11574" },
            {
              label: "Cross Platform",
              bgColor: "#F9F5FF",
              textColor: "#6941C6",
            },
          ]}
        />
      </div>
    </div>
  );
}
