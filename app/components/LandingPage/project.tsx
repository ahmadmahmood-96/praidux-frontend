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
  const [loadingMore, setLoadingMore] = useState(false);

  const limit = 6; // initial load
  const loadMoreLimit = 2; // per click load

  const buttons = ["All", "Web", "Mobile", "IOS"];

  // ✅ Fetch initial projects (6)
useEffect(() => {
  const controller = new AbortController();

  const fetchInitialProjects = async () => {
    try {
      const res = await client.get(`/project/public-projects?skip=0&limit=${limit}`, {
        signal: controller.signal,
      });
      setProjects(res.data);
      setHasMore(res.data.length === limit); // hide "Load More" if fewer than limit
    } catch (err: any) {
      if (err.name === "CanceledError" || err.name === "AbortError") {
        console.log("Request aborted");
      } else {
        console.error("Error fetching initial projects:", err);
      }
    } finally {
      setLoading(false);
    }
  };

  fetchInitialProjects();

  return () => {
    controller.abort(); // Cleanup: abort request on unmount
  };
}, []);


  // ✅ Load more handler
  const fetchMoreProjects = async () => {
    setLoadingMore(true);
    try {
      const res = await client.get(`/project/public-projects?skip=${skip}&limit=${loadMoreLimit}`);
      const newProjects: Project[] = res.data;

      if (newProjects.length < loadMoreLimit) {
        setHasMore(false); // hide Load More button if no more data
      }

      setProjects(prev => [...prev, ...newProjects]);
      setSkip(prev => prev + newProjects.length);
    } catch (err) {
      console.error("Error loading more projects:", err);
    } finally {
      setLoadingMore(false);
    }
  };

  // ✅ Filtering logic
  const filteredProjects = useMemo(() => {
    if (selected === "All") return projects;
    const selectedLower = selected.toLowerCase();
    return projects.filter((project) =>
      project.mainCategory?.toLowerCase().includes(selectedLower)
    );
  }, [selected, projects]);

  const colorList = [
    { bgColor: "#EEF4FF", textColor: "#3538CD" },
    { bgColor: "rgba(236, 253, 243, 1)", textColor: "#027A48" },
    { bgColor: "#FDF2FA", textColor: "#C11574" },
    { bgColor: "#F9F5FF", textColor: "#6941C6" },
  ];

  return (
    <div className="px-[24px] py-[51px] flex flex-col gap-[16px] xl:px-[100px] lg:px-[70px] md:px-[50px]">
      {/* Header */}
      <div className="flex flex-col gap-[24px] items-center">
        <div className="flex flex-col items-center">
          <div className="flex gap-[8px] items-center">
            <Image src="/dot.svg" alt="dot" width={9} height={9} priority />
            <span className="font-Pop font-semibold text-[16px] text-[#123042] leading-[25.2px]">
              Projects
            </span>
          </div>
          <h2 className="font-clash font-semibold lg:text-[38px] text-[#000000] lg:leading-[48px] md:text-[28px] md:leading-[38px] text-[24px] leading-[34px]">
            Our Recent Projects
          </h2>
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

      {/* Project Grid */}
      <section className="grid gap-[16px] justify-center 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 xl:px-[100px] px-[0]">
        {loading ? (
          <div className="col-span-full flex justify-center items-center py-8">
            <CircularProgress sx={{ color: "#FF5F1F" }} size={50} thickness={5} />
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
                textColor: colorList[index % colorList.length]?.textColor || "#000",
              }))}
            />
          ))
        )}
      </section>

      {/* Load More Button */}
      {hasMore && !loading && (
        <div className="w-full items-center flex justify-center mt-6">
          <button
            onClick={fetchMoreProjects}
            className="border rounded-[40px] w-fit px-[16px] text-[#000000] font-poppins font-[normal] text-[16.4px] leading-[146%] cursor-pointer py-[12px] border-[#C6C6C6]"
            disabled={loadingMore}
          >
            {loadingMore ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
}
