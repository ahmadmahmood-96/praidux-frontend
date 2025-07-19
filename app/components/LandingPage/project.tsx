"use client";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import ProjectCard from "../projectCard";
import client from "@/utils/client";
import CircularProgress from "@mui/material/CircularProgress";

interface Project {
  _id: string;
  mainCategory: string;
  logo: string;
  title: string;
  categories: string[];
}

export default function Project() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selected, setSelected] = useState("All");
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);

  const buttons = ["All", "Web", "Mobile", "IOS"];

  // ✅ Fetch initial projects (6)
  useEffect(() => {
    const fetchInitialProjects = async () => {
      try {
        const res = await client.get(`/project/public-projects?skip=0&limit=6`);
        setProjects(res.data);
        setSkip(6); // Set next skip for load more
      } catch (err) {
        console.error("Error fetching initial projects:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchInitialProjects();
  }, []);

  // ✅ Load more (2 at a time)
  // const fetchMoreProjects = async () => {
  //   try {
  //     const res = await client.get(
  //       `/project/public-projects?skip=${skip}&limit=2`
  //     );
  //     const newProjects = res.data.result;

  //     if (newProjects.length < 2) setHasMore(false); // no more to load
  //     setProjects((prev) => [...prev, ...newProjects]);
  //     setSkip((prev) => prev + 2);
  //   } catch (err) {
  //     console.error("Error loading more projects:", err);
  //     // setError("Failed to load more.");
  //   }
  // };

  // ✅ Filtering logic
  const filteredProjects = useMemo(() => {
    if (selected === "All") return projects;
    const selectedLower = selected.toLowerCase();
    return projects.filter((project) => {
      const category = project.mainCategory?.toLowerCase() || "";
      if (selectedLower === "mobile") return category.includes("mobile");
      if (selectedLower === "ios") return category.includes("ios");
      return category.includes(selectedLower);
    });
  }, [selected, projects]);

  const colorList = [
    { bgColor: "#EEF4FF", textColor: "#3538CD" },
    { bgColor: "rgba(236, 253, 243, 1)", textColor: "#027A48" },
    { bgColor: "#FDF2FA", textColor: "#C11574" },
    { bgColor: "#F9F5FF", textColor: "#6941C6" },
  ];

  return (
    <div className="px-[24px] py-[51px] flex flex-col gap-[16px] xl:px-[100px] lg:px-[70px] md:px-[50px]">
      <div className="flex flex-col gap-[24px] items-center">
        <div className="flex flex-col items-center">
          <div className="flex gap-[8px] items-center">
            <Image src="/dot.svg" alt="dot" width={9} height={9} priority />
            <p className="font-Pop font-semibold text-[16px] text-[#123042] leading-[25.2px]">
              Projects
            </p>
          </div>
          <p className="font-clash font-semibold lg:text-[38px] text-[#000000] lg:leading-[48px] md:text-[28px] md:leading-[38px] text-[24px] leading-[34px]">
            Our Recent Projects
          </p>
          <p className="font-roboto font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[100%] text-black">
            We&apos;re a design & development partner for startup founders and
            online brands.
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
        {loading ? (
          <div className="col-span-full flex justify-center items-center py-8">
            <CircularProgress
              sx={{ color: "#FF5F1F" }}
              size={50}
              thickness={5}
            />
          </div>
        ) : (
          filteredProjects.map((project) => (
            <ProjectCard
              key={project._id}
              id={project._id}
              projectType={project.mainCategory}
              imageUrl={project.logo}
              title={project.title}
              categories={(project.categories || []).map((label, index) => ({
                label,
                bgColor: colorList[index % colorList.length]?.bgColor || "#EEE",
                textColor:
                  colorList[index % colorList.length]?.textColor || "#000",
              }))}
            />
          ))
        )}
      </div>

      {hasMore && (
        <div className="w-full items-center flex justify-center mt-6">
          <button
            // onClick={fetchMoreProjects}
            className="border rounded-[40px] w-fit px-[16px] text-[#000000] font-poppins font-[normal] text-[16.4px] leading-[146%] cursor-pointer py-[12px] border-[#C6C6C6]"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
