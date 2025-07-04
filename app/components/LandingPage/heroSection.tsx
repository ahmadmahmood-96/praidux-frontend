"use client";

import Image from "next/image";
import { useAppSelector } from "@/redux/store";
import CarBg from "@/public/car-1920x1280.webp"; // Make sure this is in your public folder or imported
import { Select, Button } from "antd";
import styles from "./HeroSection.module.css";

const { Option } = Select;

export default function HeroSection() {
  const theme = useAppSelector((state) => state.themeReducer.value.lightMode);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={CarBg}
        alt="Car Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="z-0"
      />

      {/* Top Tagline */}
      <div className="absolute top-0 left-0 w-full flex items-center justify-center pt-16">
        <div className="relative">
          <h1 className="z-[2] text-center text-3xl font-bold text-black mix-blend-overlay xs:text-3xl sm:text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl">
            Selling The Best Vehicles
          </h1>
          <p className="absolute left-0 top-0 z-[2] text-center text-3xl font-bold text-black mix-blend-overlay xs:text-3xl sm:text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl">
            Selling The Best Vehicles
          </p>
        </div>
      </div>

      {/* Floating filter box */}
      <div className="absolute bottom-24 w-full max-w-[400px] px-4 sm:max-w-[500px] md:max-w-[850px] lg:max-w-[900px] xl:max-w-[900px] 2xl:max-w-[1200px] left-1/2 transform -translate-x-1/2 z-20">
        <div
          className={`grid items-center gap-4 rounded-xl 
            ${theme ? "bg-transparent" : "bg-transparent"} 
            backdrop-blur-xl shadow-md
            px-6 pb-6 pt-6 text-sm 
            sm:grid-cols-2 md:flex md:grid-cols-4 md:pb-8 md:pt-12 lg:grid-cols-5 xl:grid-cols-5`}
        >
          <div className="w-full">
            <Select
              placeholder="Select Year"
              className="w-full px-3 py-2 rounded-lg bg-[#F1F1F1] select-black-placeholder select-black-icon"
              dropdownStyle={{ zIndex: 9999 }}
              size="large"
              style={{
                height: "100%",
              }}
              bordered={false}
            >
              <Option value="2024">2024</Option>
              <Option value="2023">2023</Option>
            </Select>
          </div>
          <div className="w-full">
            <Select
              placeholder="Select Make"
              className="w-full px-3 py-2 rounded-lg bg-[#F1F1F1] select-black-placeholder select-black-icon"
              dropdownStyle={{ zIndex: 9999 }}
              size="large"
              style={{
                height: "100%",
              }}
              bordered={false}
            >
              <Option value="Toyota">Toyota</Option>
              <Option value="Nissan">Nissan</Option>
            </Select>
          </div>
          <div className="w-full">
            <Select
              placeholder="Select Model"
              className="w-full px-3 py-2 rounded-lg bg-[#F1F1F1] select-black-placeholder select-black-icon"
              dropdownStyle={{ zIndex: 9999 }}
              size="large"
              style={{
                height: "100%",
              }}
              bordered={false}
            >
              <Option value="Corolla">Corolla</Option>
              <Option value="Civic">Civic</Option>
            </Select>
          </div>
          <div className="w-full">
            <Select
              placeholder="Select Price"
              className="w-full px-3 py-2 rounded-lg bg-[#F1F1F1] select-black-placeholder select-black-icon"
              dropdownStyle={{ zIndex: 9999 }}
              size="large"
              style={{
                height: "100%",
              }}
              bordered={false}
            >
              <Option value="0-10000">$0 - $10k</Option>
              <Option value="10000-20000">$10k - $20k</Option>
            </Select>
          </div>
          <div className="h-full w-full sm:col-span-2">
            <Button
              type="primary"
              className="flex cursor-pointer place-items-center items-center justify-center gap-2 rounded-lg bg-[#4299e1] hover:bg-[#3182ce] px-3 py-1.5 text-sm text-white sm:py-2 sm:text-base md:py-3 md:text-lg border-none h-full w-full"
            >
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
