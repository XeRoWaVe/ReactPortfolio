import React from "react";

function Menu({ showMenu, setShowMenu }) {
  return (
    <nav className={`fixed flex top-0 left-0 w-full px-10 z-10 h-screen pt-24 bg-gray-900 transform delay-100 transition-all duration-300 ${showMenu ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"}`}>
      <ul className="w-full flex flex-col items-start">
        <li className="flex w-full leading-8 list-none focus:outline-none group py-2 tracking-normal opacity-50 hover:opacity-100 transition-all duration-200 ease-in-out">
          <a className="h-full w-full py-2 text-lg text-white" href="/" onClick={() => setShowMenu(false)}>
            Home
          </a>
        </li>
        <li className="flex w-full leading-8 list-none focus:outline-none group py-2 tracking-normal opacity-50 hover:opacity-100 transition-all duration-200 ease-in-out">
          <a className="h-full w-full py-2 text-lg text-white" href="/" onClick={() => setShowMenu(false)}>
            About
          </a>
        </li>
        <li className="flex w-full leading-8 list-none focus:outline-none group py-2 tracking-normal opacity-50 hover:opacity-100 transition-all duration-200 ease-in-out">
          <a className="h-full w-full py-2 text-lg text-white" href="/" onClick={() => setShowMenu(false)}>
            Projects
          </a>
        </li>
        <li className="flex w-full leading-8 list-none focus:outline-none group py-2 tracking-normal opacity-50 hover:opacity-100 transition-all duration-200 ease-in-out">
          <a className="h-full w-full py-2 text-lg text-white" href="/" onClick={() => setShowMenu(false)}>
            Skills
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
