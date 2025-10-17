


import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Facilities from "./pages/Facilities";
import Doctors from "./pages/Doctors";


export default function Home() {

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
