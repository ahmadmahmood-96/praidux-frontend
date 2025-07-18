"use client";
import Image from "next/image";
import BlogCard from "../blogCard";
import { useEffect } from "react";
import { getBlogs } from "@/services/redux/middleware/getBlog";
import { AppDispatch, useAppSelector } from "@/services/redux/store";
import { useDispatch, useSelector } from "react-redux";
import striptags from "striptags";
type Blog = {
  _id?: string;
  writerName: string;
  createdAt: string;
  blogImageUrl?: string;
  blogTitle: string;
  blogContent: string;
  categories?: string[];
};

export default function Blogs() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await dispatch<any>(getBlogs());
        // console.log("🚀 API Response for Blog:", res.payload); // ✅ Logs API data
      } catch (err) {
        console.error("❌ API Error:", err);
      }
    };

    fetchBlog();
  }, [dispatch]);
  const BlogState = useAppSelector((state) => state.getBlogs.getBlogs) as Blog[];

  // useEffect(() => {
  //   console.log("🧠 Redux Blog Store Data:", BlogState); // ✅ Logs Redux state when it changes
  // }, [BlogState]);
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
      <div className="grid gap-[16px] justify-center 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 xl:px-[100px] px-[0]">
        
        {/* // BlogState && BlogState.length > 0 ? ( */}
          {BlogState.map((blog, index) => {
            // Dynamic category colors (rotating)
            const colorList = [
              { bgColor: "#EEF4FF", textColor: "#3538CD" },
              { bgColor: "#ECFDF3", textColor: "#027A48" },
              { bgColor: "#FDF2FA", textColor: "#C11574" },
              { bgColor: "#F9F5FF", textColor: "#6941C6" },
            ];

            const formattedCategories =
              blog.categories?.map((cat, idx) => ({
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
    </div>
  );
}
