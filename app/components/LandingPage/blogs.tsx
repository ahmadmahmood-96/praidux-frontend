"use client";
import Image from "next/image";
import BlogCard from "../blogCard";
import { useEffect, useState } from "react";
import striptags from "striptags";
import client from "@/utils/client";
import CircularProgress from "@mui/material/CircularProgress";

type Blog = {
  _id: string;
  id: string;
  writerName: string;
  createdAt: string;
  blogImageUrl?: string;
  blogTitle: string;
  blogContent: string;
  categories?: string[];
};
type Category = {
  label: string;
  bgColor: string;
  textColor: string;
};

export default function Blogs() {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog[]>([]);

  useEffect(() => {
    const Fetchblogs = async () => {
      try {
        const { data } = await client.get(`/blog/listed-blogs`);
        console.log("blog data", data);
        setBlog(data);
      } catch (err) {
        console.error("Error fetching initial projects:", err);
      } finally {
        setLoading(false);
      }
    };
    Fetchblogs();
  }, []);

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
      {loading ? (
  <div className="w-full flex justify-center items-center py-10">
    <CircularProgress style={{ color: "#FF5F1F" }} />
  </div>
) : (
      <div className="grid gap-[16px] justify-center 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 xl:px-[100px] px-[0]">
        {/* // BlogState && BlogState.length > 0 ? ( */}
        {
          blog?.map((blog, index) => {
            // Dynamic category colors (rotating)
            const colorList = [
              { bgColor: "#EEF4FF", textColor: "#3538CD" },
              { bgColor: "#ECFDF3", textColor: "#027A48" },
              { bgColor: "#FDF2FA", textColor: "#C11574" },
              { bgColor: "#F9F5FF", textColor: "#6941C6" },
            ];

            const formattedCategories =
              blog.categories?.map((cat: string, idx: number) => ({
                label: cat,
                ...colorList[idx % colorList.length],
              })) || [];
            const plainText = striptags(blog.blogContent);
            const preview =
              plainText.length > 100
                ? plainText.slice(0, 60) + "..."
                : plainText;
            return (
              <BlogCard
                key={blog._id || index}
                author={blog.writerName}
                id={blog._id}
                date={new Date(blog.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
                imageUrl={blog.blogImageUrl || "/fallback.png"} // fallback if missing
                title={blog.blogTitle}
                description={preview}
                categories={formattedCategories}
              />
            );
          })
          // ) : (
          //   <p>No blogs found.</p>
          // )
        }
      </div>
      )}
      <div className="w-full items-center flex justify-center">
        <button className="border rounded-[40px] w-fit px-[16px] text-[#000000] font-poppins font-[normal] text-[16.4px] leading-[146%] cursor-pointer py-[12px] border-[#C6C6C6]">
          More
        </button>
      </div>
    </div>
  );
}
