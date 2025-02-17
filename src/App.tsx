import React, { useState } from "react";
import Terminal from "./components/Terminal";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Terminal onComplete={() => setIsLoading(false)} />
      <div
        className={`transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="bg-[#1e1e1e] text-white min-h-screen">
          <Header />
          <Hero />
          <About />
          <Experience />
          <Education />
          <Projects />
          <Skills />
          <Achievements />
          <Blogs />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
