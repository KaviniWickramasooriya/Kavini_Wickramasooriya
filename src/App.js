import React from "react";
import Banner from "./components/banner/Banner";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
//import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText sm:px-7 sm:py-1">
      <Navbar />
      <div className="max-w-screen-xl mx-auto sm:px-1">
        <Banner />
        <About />
        <Features />
        <Projects />
        <Resume />
        <Contact />
        {/* <Footer /> */}
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;