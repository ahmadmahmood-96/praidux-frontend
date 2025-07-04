"use client";

import Image from "next/image";
import Link from "next/link";
import SedanImage from "@/public/Sedan.webp";
import CoupeImage from "@/public/Coupe.webp";
import SuvImage from "@/public/SUV.webp";
import TruckImage from "@/public/Truck.webp";
import HatchbackImage from "@/public/Hatchback.webp";
import MinivanImage from "@/public/Minivan.webp";
import { useAppSelector } from "@/redux/store";

const bodyStyles = [
  { type: "Sedan", image: SedanImage },
  { type: "Coupe", image: CoupeImage },
  { type: "SUV", image: SuvImage },
  { type: "Truck", image: TruckImage },
  { type: "Hatchback", image: HatchbackImage },
  { type: "Minivan", image: MinivanImage },
];

const BodyStyleSection = () => {
  const theme = useAppSelector((state) => state.themeReducer.value.lightMode);

  return (
    <div className="px-6 py-8">
      <h2 className="text-4xl font-bold text-left mb-6 text-primary">
        Select Body Style
      </h2>
      <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-2 sm:p-2 md:grid-cols-3 md:p-6 lg:grid-cols-6">
        {bodyStyles.map(({ type, image }) => (
          <Link
            key={type}
            href={`/vehicles?bodyType=${type}`}
            className={`group ${
              theme
                ? "bg-white/30 backdrop-blur-xl shadow-lg text-gray-800"
                : "bg-white/10 backdrop-blur-xl shadow-lg text-white"
            } flex flex-col items-center rounded-lg shadow-custom-lg outline-none outline-offset-0 hover:cursor-pointer hover:outline hover:outline-primary`}
          >
            <div className="mt-2 flex h-20 items-center justify-center px-5 py-2">
              <Image
                src={image}
                alt={`${type} Image`}
                width={160}
                height={80}
                className="h-auto w-40 object-cover transition-all duration-100 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="w-full rounded-b-md bg-primary text-center">
              <span className="text-xs font-medium text-white group-hover:text-sm">
                {type}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BodyStyleSection;
