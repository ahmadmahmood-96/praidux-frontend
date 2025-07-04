import Cars from "./Cars";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cars",
  description:
    "Browse a wide selection of high-quality cars available for export from Japan and beyond. Hikar Trading Company Ltd. connects you with trusted vehicles at competitive prices.",
};

const App = () => {
  return (
    <>
      <Cars />
    </>
  );
};

export default App;
