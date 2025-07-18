"use client";

// import { useAppSelector } from "@/redux/store";

export default function Cars() {
  // const theme = useAppSelector((state) => state.themeReducer.value.lightMode);

  return (
    <div
      className={"min-h-screen flex items-center justify-center px-6 transition-colors duration-500 "
        // theme
        //   ? "bg-gradient-to-br from-[#f0f8ff] via-[#e6f0f8] to-[#f0f8ff] text-gray-800"
        //   : "bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white"
      }
    >
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#096AD8] animate-pulse">
          Cars — Coming Soon!
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto">
          We&apos;re preparing a wide collection of high-quality vehicles from
          Japan and beyond — including sedans, SUVs, and commercial cars. Get
          ready to explore and purchase directly from Hikar Trading.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Stay tuned for our full inventory, launching soon with complete
          details, images, and pricing.
        </p>
      </div>
    </div>
  );
}
