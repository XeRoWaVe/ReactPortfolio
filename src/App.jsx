import "./App.css";
import Contact from "./Components/Contact/Contact";
import About from './Components/About/About'
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Nav from "./Components/Nav/Nav";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Nav />
      <div className="">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
