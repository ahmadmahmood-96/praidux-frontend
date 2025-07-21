import LandingPage from "./components/LandingPage";
import { Metadata } from "next";
import { Suspense } from "react";
import CircularProgress from "@mui/material/CircularProgress";
export const metadata: Metadata = {
  title: "Praidux",
  description:
    "Praidux is a Pakistan-based global tech company providing top-tier web, mobile, iOS, and full-stack development services. We specialize in SEO-optimized, scalable digital solutions tailored for clients worldwide.",
};

export default function Home() {
  return (
    <Suspense  fallback={<CircularProgress sx={{ color: "#FF5F1F" }} size={50} thickness={5} />}>
      <main>
        <LandingPage />
      </main>
    </Suspense>
  );
}
