
"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Facilities from "./pages/Facilities";
import Doctors from "./pages/Doctors";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const timer = setTimeout(() => {
      fetch("https://hospital-backend-hfn7.onrender.com").catch(() => { });
    }, 2000); // ping after 2s
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Facilities />
      <Doctors />
      {/* <Contact /> */}
      <Footer />
    </>
  );
}
