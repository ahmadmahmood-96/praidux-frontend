import Parts from "./Parts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parts",
  description:
    "Explore premium car parts from Hikar Trading Company Ltd. Coming soon – high-quality automotive parts for Japanese and global vehicles.",
};

const App = () => {
  return (
    <>
      <Parts />
    </>
  );
};

export default App;
