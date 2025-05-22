import React, { useState, useEffect } from "react";
import Banner from "./components/banner/Banner";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Loading from "./components/loading/Loading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

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
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;