import About from "./About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Hikar Trading Company Ltd., a global car and parts trading business based in Japan. We specialize in exporting high-quality vehicles and genuine auto parts to clients worldwide, backed by years of industry experience and trusted logistics.",
};

const App = () => {
  return (
    <>
      <About />
    </>
  );
};

export default App;
