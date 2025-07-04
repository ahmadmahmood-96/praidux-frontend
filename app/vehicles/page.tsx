import Vehicles from "./Vehicles";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vehicles",
  description:
    "Browse a wide selection of high-quality vehicles available for export from Japan and beyond. Hikar Trading Company Ltd. connects you with trusted vehicles at competitive prices.",
};

const App = () => {
  return (
    <>
      <Vehicles />
    </>
  );
};

export default App;
