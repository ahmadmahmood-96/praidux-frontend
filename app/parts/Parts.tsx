"use client";

import { useAppSelector } from "@/services/redux/store";

export default function Parts() {
  const theme = useAppSelector((state) => state.theme.value.lightMode);

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-6 transition-colors duration-500 ${
        theme
          ? "bg-gradient-to-br from-[#f0f8ff] via-[#e6f0f8] to-[#f0f8ff] text-gray-800"
          : "bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white"
      }`}
    >
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#096AD8] animate-pulse">
          Parts — Coming Soon!
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto">
          We&apos;re working hard to bring you a full catalog of high-quality
          car parts. Stay tuned — exciting updates are on the way!
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Visit again soon to browse and purchase authentic auto parts directly
          from Hikar Trading.
        </p>
      </div>
    </div>
  );
}
