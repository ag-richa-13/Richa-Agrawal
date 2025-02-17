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
import { AuthProvider } from './context/AuthContext';
import { useAuth } from './context/AuthContext';
import { AccessRequestForm } from './components/AccessRequestForm';

function ProtectedApp() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <AccessRequestForm />;
  }

  return (
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
  );
}

function App() {
  return (
    <AuthProvider>
      <ProtectedApp />
    </AuthProvider>
  );
}

export default App;
