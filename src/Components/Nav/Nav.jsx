import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
      <ul className="flex justify-end  md:justify-center w-full text-white">
        <li className="px-4 lg:absolute top-4 right-[40%]">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "inline-flex text-white bg-green-500   border-0 py-2 px-6 focus:outline-none  rounded text-lg" : "ml-4 inline-flex  hover:bg-gray-500 text-white bg-[#0D0D0D] border-0 py-2 px-6 focus:outline-none dark:hover:bg-gray-700 dark:hover:text-white rounded text-lg")}
          >
            Home
          </NavLink>
        </li>
        <li className="px-4 lg:absolute top-4 right-[30%]">
          <NavLink
            to="/skills"
            className={({ isActive }) => (isActive ? "inline-flex text-white bg-green-500   border-0 py-2 px-6 focus:outline-none  rounded text-lg" : "ml-4 inline-flex  hover:bg-gray-500 text-white bg-[#0D0D0D] border-0 py-2 px-6 focus:outline-none dark:hover:bg-gray-700 dark:hover:text-white rounded text-lg")}
          >
            Skills
          </NavLink>
        </li>
        <li className="px-4 lg:absolute top-4 right-[20%]">
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "inline-flex text-white bg-green-500   border-0 py-2 px-6 focus:outline-none  rounded text-lg" : "ml-4 inline-flex  hover:bg-gray-500 text-white bg-[#0D0D0D] border-0 py-2 px-6 focus:outline-none dark:hover:bg-gray-700 dark:hover:text-white rounded text-lg")}
          >
            Projects
          </NavLink>
        </li>
        <li className="px-4 lg:absolute top-4 right-[10%]">
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "inline-flex text-white bg-green-500   border-0 py-2 px-6 focus:outline-none  rounded text-lg" : "ml-4 inline-flex  hover:bg-gray-500  text-white bg-[#0D0D0D] border-0 py-2 px-6 focus:outline-none dark:hover:bg-gray-700 dark:hover:text-white rounded text-lg")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
  );
};

export default Nav;
