import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import { useState, useCallback } from "react";
import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";

function App() {
  const [showMenu, setShowMenu] = useState(false);


  return (
    <main className="dark:text-gray-400 bg-white dark:bg-gray-900 body-font">
      <div className="w-full bg-gray-800">
        <Header showMenu={showMenu} setShowMenu={setShowMenu} />
        <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
