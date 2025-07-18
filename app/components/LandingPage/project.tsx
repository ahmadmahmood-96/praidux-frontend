"use client";
import Image from "next/image";
import { useState,useEffect } from "react";
import ProjectCard from "../projectCard";
import { getProjects } from "@/services/redux/middleware/getProjects";
import { AppDispatch, useAppSelector } from "@/services/redux/store";
import { useDispatch, useSelector } from "react-redux";

export default function Project() {
   const dispatch = useDispatch<AppDispatch>();
  const [selected, setSelected] = useState("All");
  const buttons = ["All", "Web", "Mobile", "AI & ML", "IOS"];
 useEffect(() => {
  const fetchProject = async () => {
    try {
      const res = await dispatch<any>(getProjects());
      // console.log("🚀 API Response:", res.payload); // ✅ Logs API data
    } catch (err) {
      console.error("❌ API Error:", err);
    }
  };

  fetchProject();
}, [dispatch]);

  interface ProjectState {
    result: any[];
    [key: string]: any;
  }

  const projectState: ProjectState = useAppSelector((state) => {
    const data = state.getProjects.getProjects;
    if (typeof data === "object" && data !== null && "result" in data) {
      return {
        ...data,
        result: Array.isArray(data.result) ? data.result : [],
      };
    }
    return { result: [] };
  });
// useEffect(() => {
//   console.log("🧠 Redux Store Data:", projectState); // ✅ Logs Redux state when it changes
// }, [projectState]);

const filteredProjects =
  selected === "All"
    ? projectState?.result || []
    : (projectState?.result || []).filter((project: any) => {
        const category = project.mainCategory?.toLowerCase();
        if (selected === "Mobile") {
          return category === "mobile" || category === "mobile app";
        }
        if (selected === "IOS") {
          return category === "ios" || category === "iOS";
        }
        return category === selected.toLowerCase();
      });
const colorList = [
  { bgColor: "#EEF4FF", textColor: "#3538CD" }, // Top 1 - Orange
  { bgColor: "rgba(236, 253, 243, 1)", textColor: "#027A48" }, // Top 2 - Blue
  { bgColor: "#FDF2FA", textColor: "#C11574" }, // Top 3 - Green
  { bgColor: "#F9F5FF", textColor: "#6941C6" }, // Top 4 - Indigo

];




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
  projectType={project.mainCategory}
  imageUrl={project.logo}
  title={project.title}
  categories={(project.categories || []).map((label: string, index: number) => ({
      label,
      bgColor: colorList[index % colorList.length]?.bgColor || "#EEE",
      textColor: colorList[index % colorList.length]?.textColor || "#000",
    }))}
/>

        ))}
      </div>
    </div>
  );
}
