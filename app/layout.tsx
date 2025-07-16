"use client";

import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Poppins, Roboto, Inter, Lato ,Caveat } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/redux/provider";
import { useAppSelector } from "@/redux/store";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-poppins",
});
const lato = Lato({
  weight: ["300", "400", "700", "900"], // add weights you need
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato", // enable CSS variable for Tailwind
});
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-roboto",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});
const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // choose weights you need
  display: "swap",
  variable: "--font-caveat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      <ThemedLayout>{children}</ThemedLayout>
    </ReduxProvider>
  );
}

function ThemedLayout({ children }: { children: React.ReactNode }) {
  const theme = useAppSelector((state) => state.themeReducer.value.lightMode);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const checkAndTrackVisit = () => {
      const hasCookie = document.cookie
        .split(";")
        .some((cookie) => cookie.trim().startsWith("visitor_id="));

      if (!hasCookie) {
        fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}visit/track-visit`, {
          method: "POST",
          credentials: "include",
          signal,
        }).catch((err) => {
          if (err.name !== "AbortError") {
            console.error("Visitor tracking failed", err);
          }
        });
      }
    };

    // Delay slightly to give time for cookies to be available
    const timer = setTimeout(checkAndTrackVisit, 300); // 300ms delay

    return () => {
      controller.abort();
      clearTimeout(timer);
    };
  }, []);

  return (
    <html data-theme={theme ? "light" : "dark"} lang="en">
      <body
        className={`${poppins.variable} ${lato.variable} ${roboto.variable} ${inter.variable} ${caveat.variable} font-sans`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
