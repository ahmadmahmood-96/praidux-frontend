"use client";
import { useParams } from "next/navigation";
import RevenueIdea from "@/app/components/revenueIdea";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Faq from "@/app/components/LandingPage/faq";
import { useState, useEffect } from "react";
import client from "@/utils/client";
import CircularProgress from "@mui/material/CircularProgress";
import BlogCard from "@/app/components/blogCard";
export default function Blog() {
  type Blog = {
    _id: string;
    writerName: string;
    createdAt: string;
    blogImageUrl?: string;
    blogTitle: string;
    blogContent: string;
    categories?: string[];
  };
  const router = useRouter();
  const { id } = useParams();
  const handleBack = () => {
    router.back();
  };
  const [blog, setBlog] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([]);
  useEffect(() => {
    const fetchBlogData = async (blogId: string) => {
      setLoading(true);
      try {
        const { data } = await client.get(`/blog/view-blog/${blogId}`);
        setBlog(data.result);

        const { data: allBlogs } = await client.get(
          `/blog/listed-blogs?limit=3`
        );
        const filtered = allBlogs
          .filter((b: Blog) => b._id !== blogId)
          .slice(0, 2);
        setRelatedBlogs(filtered);
      } catch (error) {
        console.error("Failed to fetch blog:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id && typeof id === "string") {
      fetchBlogData(id);
    }
  }, [id]);
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  };
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <CircularProgress style={{ color: "#FF5F1F" }} size={60} />
      </div>
    );
  }
  return (
    <div className="bg-[#FAFAFA] flex flex-col gap-[8px]">
      <div className="px-[24px] xl:px-[100px] lg:px-[70px] md:px-[50px] py-[35px]">
        <div className="flex flex-col gap-[15px]">
          <div
            className="border-[#D0D5DD] w-fit border-[0.72px] bg-[#FFFFFF] rounded-[5.8px] flex gap-[5.8px] items-center py-[7.25px] px-[11.6px] cursor-pointer"
            onClick={handleBack}
          >
            <Image src="/arrowback.svg" alt="back" width={20} height={20} />
            <p className="font-inter font-semibold text-[10.15px] leading-[14.5px] text-[#344054]">
              Praidux | Blog
            </p>
          </div>
          <Image
            src={blog?.blogImageUrl}
            alt={blog.blogTitle || "Blog image"}
            width={1240}
            loading="lazy"
            height={456}
            className="w-full lg:h-[456px] md:h-[400px] h-[350px]"
          />
          <p className="font-inter font-bold text-[26px] md:text-[32px] lg:text-[38px] xl:text-[45px] leading-[100%] text-[#2D3748]">
            {blog?.blogTitle}
          </p>
          <div className="flex gap-[30px] items-center">
            <p className="font-inter font-bold text-[12px] sm:text-[14px] lg:text-[16px] xl:text-[18px] leading-[100%] text-[#2D3748]">
              Written by {blog?.writerName}
            </p>
            <p className="font-inter font-normal text-[12px] sm:text-[14px] lg:text-[16px] xl:text-[18px] text-[#718096] leading-[100%]">
              {blog?.createdAt ? formatDate(blog.createdAt) : ""}
            </p>
          </div>
          <div
            className="blog-content text-[#718096] font-inter text-[16px] leading-[28px] mt-[20px]"
            dangerouslySetInnerHTML={{ __html: blog?.blogContent || "" }}
          ></div>
        </div>
      </div>
      <div className="px-[24px] xl:px-[100px] lg:px-[70px] md:px-[50px]"></div>
      {relatedBlogs.length > 0 && (
        <div className="grid gap-[16px] justify-center 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 xl:px-[100px] px-[0]">
          {relatedBlogs.map((item) => (
            <BlogCard
              key={item._id}
              id={item._id}
              author={item.writerName}
              title={item.blogTitle}
              description={
                item.blogContent.length > 80
                  ? item.blogContent.slice(0, 60) + "..."
                  : item.blogContent
              }
              imageUrl={item.blogImageUrl || "/fallback.png"}
              date={new Date(item.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            />
          ))}
        </div>
      )}
      <Faq />
      <RevenueIdea />
    </div>
  );
}
