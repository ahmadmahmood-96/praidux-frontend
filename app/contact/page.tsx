import Contact from "./Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Hikar Trading Company Ltd. for inquiries about car and auto parts exports from Japan. Reach us by phone, email, or visit our Chiba-based office. We're here to assist you Monday to Friday.",
};

const App = () => {
  return (
    <>
      <Contact />
    </>
  );
};

export default App;
