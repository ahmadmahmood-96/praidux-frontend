"use client";
import Image from "next/image";
import BlogCard from "../blogCard";
import { useEffect, useState } from "react";
import striptags from "striptags";
import client from "@/utils/client";
import CircularProgress from "@mui/material/CircularProgress";

type Blog = {
  _id: string;
  writerName: string;
  createdAt: string;
  blogImageUrl?: string;
  blogTitle: string;
  blogContent: string;
  categories?: string[];
};

export default function Blogs() {
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const limit = 6;

useEffect(() => {
  const controller = new AbortController();

  const fetchInitialBlogs = async () => {
    try {
      const { data } = await client.get(`/blog/listed-blogs?skip=0&limit=6`, {
        signal: controller.signal,
      });
      setBlogs(data);
      if (data.length < 6) setHasMore(false); 
      setSkip(data.length); 
    } catch (err: any) {
      if (err.name === "CanceledError" || err.name === "AbortError") {
        console.log("Blog fetch aborted");
      } else {
        console.error("Error fetching blogs:", err);
      }
    } finally {
      setLoading(false);
    }
  };

  fetchInitialBlogs();

  return () => {
    controller.abort(); 
  };
}, []);


  const colorList = [
    { bgColor: "#EEF4FF", textColor: "#3538CD" },
    { bgColor: "#ECFDF3", textColor: "#027A48" },
    { bgColor: "#FDF2FA", textColor: "#C11574" },
    { bgColor: "#F9F5FF", textColor: "#6941C6" },
  ];
const loadMoreBlogs = async () => {
  setLoadingMore(true);
  try {
    const { data } = await client.get(`/blog/listed-blogs?skip=${skip}&limit=2`);

    if (data.length < 2) {
      setHasMore(false); 
    }

    setBlogs((prev) => [...prev, ...data]);
    setSkip((prev) => prev + data.length);
  } catch (err) {
    console.error("Error loading more blogs:", err);
  } finally {
    setLoadingMore(false);
  }
};



  return (
    <div className="px-[24px] py-[40px] flex flex-col gap-[32px] xl:px-[100px] lg:px-[70px] md:px-[50px]">
      {/* Header */}
      <div className="flex flex-col gap-[8px] xl:px-[100px] px-[0]">
        <div className="flex gap-[8px] items-center">
          <Image src="/dot.svg" alt="dot" width={9} height={9} />
          <span className="font-Pop font-semibold text-[16px] text-[#123042] leading-[25.2px]">
            Blogs
          </span>
        </div>
        <h2 className="font-clash font-semibold lg:text-[38px] text-[#000000] lg:leading-[48px]  md:text-[28px] md:leading-[38px] text-[24px] leading-[34px]">
          What our experts and modern tech world say in our blogs
        </h2>
        <p className="font-Pop font-normal text-[18px] text-[#000000] leading-[140%]">
          We thrive on pushing boundaries and exploring new ideas. By embracing
          the latest technologies and creative approaches, we ensure that every
          app we build is not only functional but also future-ready.
        </p>
      </div>

      {/* Blog Grid */}
      {loading ? (
        <div className="w-full flex justify-center items-center py-10">
          <CircularProgress style={{ color: "#FF5F1F" }} />
        </div>
      ) : (
        <section className="grid gap-[16px] justify-center 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 xl:px-[100px] px-[0]">
          {blogs.map((blog, index) => {
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
                imageUrl={blog.blogImageUrl || "/fallback.png"}
                title={blog.blogTitle}
                description={preview}
                categories={formattedCategories}
              />
            );
          })}
        </section>
      )}

      {/* Load More */}
      {hasMore && !loading && (
        <div className="w-full items-center flex justify-center mt-6">
          <button
            onClick={() => loadMoreBlogs()}
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
