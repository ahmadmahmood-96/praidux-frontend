"use client";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import ProjectCard from "../projectCard";
import { getProjects } from "@/services/redux/middleware/getProjects";
import { AppDispatch, useAppSelector } from "@/services/redux/store";
import { useDispatch } from "react-redux";

// Project interface
interface Project {
  _id: string;
  mainCategory: string;
  logo: string;
  title: string;
  categories: string[];
}

interface ProjectsState {
  projects: Project[];
  loading: boolean;
  error: string;
}

export default function Project() {
  const dispatch = useDispatch<AppDispatch>();
  const [selected, setSelected] = useState("All");

  const [skip, setSkip] = useState(0);
const [limit, setLimit] = useState(6); // start with 6

  const [hasMore, setHasMore] = useState(true);

  const buttons = ["All", "Web", "Mobile", "AI & ML", "IOS"];

  const projects = useAppSelector(
    (state: { getProjects: ProjectsState }) => state.getProjects.projects
  );
  const loading = useAppSelector((state) => state.getProjects.loading);
  const error = useAppSelector((state) => state.getProjects.error);

  // Fetch paginated projects
  const fetchMoreProjects = async () => {
  try {
    const res = await dispatch(getProjects({ skip, limit }));
    if (res.payload.length < limit) setHasMore(false);
    setSkip((prev) => prev + limit);

    // After initial fetch of 6, switch to fetching 2
    if (limit === 6) setLimit(2);
  } catch (err) {
    console.error("❌ API Error:", err);
  }
};


  // On mount, load first batch
  useEffect(() => {
    if (projects.length === 0) fetchMoreProjects();
  }, []);

  const filteredProjects = useMemo(() => {
    if (selected === "All") return projects;

    const selectedLower = selected.toLowerCase();
    return projects.filter((project) => {
      const category = project.mainCategory?.toLowerCase() || "";

      if (selectedLower === "mobile") return category.includes("mobile");
      if (selectedLower === "ios") return category.includes("ios");
      if (selectedLower === "ai & ml")
        return (
          category.includes("ai") ||
          category.includes("ml") ||
          category.includes("machine learning")
        );

      return category.includes(selectedLower);
    });
  }, [selected, projects]);

  const colorList = [
    { bgColor: "#EEF4FF", textColor: "#3538CD" },
    { bgColor: "rgba(236, 253, 243, 1)", textColor: "#027A48" },
    { bgColor: "#FDF2FA", textColor: "#C11574" },
    { bgColor: "#F9F5FF", textColor: "#6941C6" },
  ];

  if (loading && projects.length === 0) return <div>Loading projects...</div>;
  if (error) return <div>Error: {error}</div>;

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
        {filteredProjects.map((project) => (
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
        ))}
      </div>

      {hasMore && (
        <div className="w-full items-center flex justify-center mt-6">
          <button
            onClick={fetchMoreProjects}
            className="border rounded-[40px] w-fit px-[16px] text-[#000000] font-poppins font-[normal] text-[16.4px] leading-[146%] cursor-pointer py-[12px] border-[#C6C6C6]"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
