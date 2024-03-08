import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Nav from "./Components/Nav/Nav";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import { useState, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion } from "framer-motion";

function App() {

  const particlesInit = useCallback(async engine => {
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async container => {
    await console.log(container)
  }, [])

  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Nav />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
