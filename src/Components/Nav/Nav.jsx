import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
      <ul className="flex lg:justify-end md:justify-center w-full text-white">
        <li className="lg:px-4 lg:absolute top-4 lg:right-[45%]">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "inline-flex text-white bg-green-500  active:translate-y-0.5 border-0 py-2 px-6 focus:outline-none  rounded text-lg" : "ml-4 inline-flex  hover:bg-gray-500 active:translate-y-0.5 text-white bg-[#0D0D0D] border-0 py-2 px-6 focus:outline-none dark:hover:bg-gray-700 dark:hover:text-white rounded text-lg")}
          >
            Home
          </NavLink>
        </li>
        <li className="lg:px-4 lg:absolute top-4 right-[35%]">
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "inline-flex text-white bg-green-500   border-0 py-2 px-6 focus:outline-none  rounded text-lg" : "ml-4 inline-flex  hover:bg-gray-500 text-white active:translate-y-0.5 bg-[#0D0D0D] border-0 py-2 px-6 focus:outline-none dark:hover:bg-gray-700 dark:hover:text-white rounded text-lg")}
          >
            About
          </NavLink>
        </li>
        <li className="lg:px-4 lg:absolute top-4 right-[25%]">
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "inline-flex text-white bg-green-500   border-0 py-2 px-6 focus:outline-none  rounded text-lg" : "ml-4 inline-flex  hover:bg-gray-500 text-white active:translate-y-0.5 bg-[#0D0D0D] border-0 py-2 px-6 focus:outline-none dark:hover:bg-gray-700 dark:hover:text-white rounded text-lg")}
          >
            Projects
          </NavLink>
        </li>
        <li className="lg:px-4 lg:absolute top-4 right-[15%]">
          <NavLink
            to="https://docs.google.com/document/d/1pYelRK0eGS3TPYYbqg_X1dv8RvyeaugmCGLwnQCcWaI/edit" target="_blank"
            className={({ isActive }) => (isActive ? "inline-flex text-white bg-green-500   border-0 py-2 px-6 focus:outline-none  rounded text-lg" : "ml-4 inline-flex  hover:bg-green-500  text-white active:translate-y-0.5 bg-[#0D0D0D] border-0 py-2 px-6 focus:outline-none dark:hover:bg-gray-700 dark:hover:text-white rounded text-lg")}
          >
            Resume
          </NavLink>
        </li>
        <li className="lg:px-4 lg:absolute top-4 right-[5%]">
          <NavLink
            to="mailto:xerowave22@hotmail.com"
            className={({ isActive }) => (isActive ? "inline-flex text-white bg-green-500   border-0 py-2 px-6 focus:outline-none  rounded text-lg" : "ml-4 inline-flex  hover:bg-green-500  text-white active:translate-y-0.5 bg-[#0D0D0D] border-0 py-2 px-6 focus:outline-none dark:hover:bg-gray-700 dark:hover:text-white rounded text-lg")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
  );
};

export default Nav;
