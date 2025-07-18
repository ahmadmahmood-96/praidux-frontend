"use client";
import Image from "next/image";
import { useState } from "react";
import ProjectCard from "../projectCard";

const allProjects = [
  {
    projectType: "Mobile",
    imageUrl: "/picture.png",
    title: "Mobile App - Bill Walsh leadership lessons",
    categories: [
      { label: "UIUX", bgColor: "#EEF4FF", textColor: "#3538CD" },
      {
        label: "Software Development",
        bgColor: "#ECFDF3",
        textColor: "#027A48",
      },
      { label: "AI ML", bgColor: "#FDF2FA", textColor: "#C11574" },
      { label: "Cross Platform", bgColor: "#F9F5FF", textColor: "#6941C6" },
    ],
  },
  {
    projectType: "Web",
    imageUrl: "/picture.png",
    title: "Web App - Bill Walsh leadership lessons",
    categories: [
      { label: "UIUX", bgColor: "#EEF4FF", textColor: "#3538CD" },
      {
        label: "Software Development",
        bgColor: "#ECFDF3",
        textColor: "#027A48",
      },
    ],
  },
  {
    projectType: "AI & ML",
    imageUrl: "/picture.png",
    title: "AI ML Project - Bill Walsh leadership lessons",
    categories: [{ label: "AI ML", bgColor: "#FDF2FA", textColor: "#C11574" }],
  },
  {
    projectType: "AI Chatbot",
    imageUrl: "/picture.png",
    title: "Chatbot Project - Customer Support",
    categories: [
      { label: "Chatbot", bgColor: "#F9F5FF", textColor: "#6941C6" },
    ],
  },
];

export default function Project() {
  const [selected, setSelected] = useState("All");
  const filteredProjects =
    selected === "All"
      ? allProjects
      : allProjects.filter((project) => project.projectType === selected);
  const buttons = ["All", "Web", "Mobile", "AI & ML", "AI Chatbot"];
  return (
    <div className="px-[24px] py-[51px] flex flex-col gap-[16px] xl:px-[100px] lg:px-[70px] md:px-[50px]">
      <div className="flex flex-col gap-[24px] items-center">
        <div className="flex flex-col items-center">
          <div className="flex gap-[8px] items-center">
            <Image src="/dot.svg" alt="dot" width={9} height={9} />
            <p className="font-Pop font-semibold text-[16px] text-[#123042] leading-[25.2px]">
              Projects
            </p>
          </div>
          <p className="font-clash font-semibold lg:text-[38px] text-[#000000] lg:leading-[48px]  md:text-[28px] md:leading-[38px] text-[24px] leading-[34px]">
            Our Recent Projects
          </p>
          <p className="font-roboto font-normal  text-[14px] sm:text-[16px] md:text-[18px] leading-[100%] text-[#000000]">
            We're a design & development partner for startup founders and online
            brands.
          </p>
        </div>
        <div className="flex gap-[8px] flex-wrap justify-center">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => setSelected(btn)}
              className={`py-[12px] px-[16px] rounded-[40px] text-[16.4px] leading-[146%] font-Pop font-normal transition 
                  ${
                    selected === btn
                      ? "bg-[#FF5F1F] text-white border-none"
                      : "bg-transparent text-black border border-[#C6C6C6]"
                  }`}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-[16px] justify-center 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 xl:px-[100px] px-[0]">
        {filteredProjects.map((project, idx) => (
          <ProjectCard
            key={idx}
            projectType={project.projectType}
            imageUrl={project.imageUrl}
            title={project.title}
            categories={project.categories}
          />
        ))}
      </div>
    </div>
  );
}
