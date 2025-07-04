"use client";

import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/redux/provider";
import { useAppSelector } from "@/redux/store";

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
  subsets: ["latin"],
  preload: true,
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
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
