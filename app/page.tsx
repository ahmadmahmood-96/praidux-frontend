import LandingPage from "./components/LandingPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hikar",
  description:
    "Hikar Trading Company Ltd. is a Japan-based exporter dealing in all types of cars and auto parts, delivering quality vehicles and components to clients worldwide.",
};

export default function Home() {
  return (
    <main>
      <LandingPage />
    </main>
  );
}
