"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Poppins, Roboto, Inter, Lato, Caveat } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { createStore } from "../services/redux/store";

const store = createStore();

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-poppins",
});
const lato = Lato({
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
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
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-caveat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${lato.variable} ${roboto.variable} ${inter.variable} ${caveat.variable}bg-[#FAFAFA] font-poppins`}
      >
        <Provider store={store}>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
