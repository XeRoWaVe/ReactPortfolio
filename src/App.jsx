import "./App.css";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Nav from "./Components/Nav/Nav";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./assets/ErrorPage";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";

function App() {
  return (
    <div className="">
      <Nav />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} errorElement={<ErrorPage />}/>
          <Route path="about" element={<About />} errorElement={<ErrorPage />}/>
          <Route path="projects" element={<Projects />} errorElement={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
