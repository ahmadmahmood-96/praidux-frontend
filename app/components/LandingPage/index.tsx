"use client";

import { useEffect } from "react";
import dynamic from 'next/dynamic';

// Static components (load normally)
import Hero from "./hero";
import ProjectSlider from "./projectSlider";
import Process from "./process";

// Dynamic components
const Faq = dynamic(() => import('./faq'), { ssr: false });
const Contactus = dynamic(() => import('./contactus'), { ssr: false });
const StaticTestimonial = dynamic(() => import('./staticTestimonial'), { ssr: false });
const Blogs = dynamic(() => import('./blogs'), { ssr: false });
const Project = dynamic(() => import('./project'), { ssr: false });
const VideoTestimonial = dynamic(() => import('./videoTestimonial'), { ssr: false });
const ManagementValue = dynamic(() => import('./managementValues'), { ssr: false });

import { useSearchParams } from "next/navigation";

export default function LandingPage() {
   const searchParams = useSearchParams();
  const scrollTo = searchParams.get("scrollTo");

 useEffect(() => {
  if (scrollTo) {
    // Delay to ensure DOM is ready
    setTimeout(() => {
      const section = document.getElementById(scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 200); // 200ms delay works well
  }
}, [scrollTo]);

  return (
    <div className="bg-[#FAFAFA] flex flex-col gap-[8px]">
      <div className="bg-[#FAFAFA] flex flex-col gap-[8px]">
      <section id="hero"><Hero /></section>
      <section id="project-slider"><ProjectSlider /></section>
      <section id="video-testimonial"><VideoTestimonial /></section>
      <section id="project"><Project /></section>
      <section id="process"><Process /></section>
      <section id="blogs"><Blogs /></section>
      <section id="static-testimonial"><StaticTestimonial /></section>
      <section id="management-values"><ManagementValue /></section>
      <section id="contact-us"><Contactus /></section>
      <section id="faq"><Faq /></section>
    </div>
    </div>
  );
}
