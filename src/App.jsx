import "./App.css";
import Contact from "./Components/Contact/Contact";
import About from './Components/About/About'
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Nav from "./Components/Nav/Nav";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./assets/ErrorPage";

function App() {
  return (
    <div className="">
      <Nav />
      <div className="">
        <Routes>
          <Route path="/" element={<About />} errorElement={<ErrorPage />}/>
          <Route path="skills" element={<Skills />} errorElement={<ErrorPage />} />
          <Route path="projects" element={<Projects />} errorElement={<ErrorPage />} />
          <Route path="contact" element={<Contact />} errorElement={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
