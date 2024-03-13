const Nav = ({showMenu, setShowMenu}) => {
  return (
    <header className="w-full fixed top-0 left-0 flex z-5 bg-gray-800 md:sticky ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Aaron Craig
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Hire Me
        </a>
        <button
className="flex top-0 right-0 z-20 relative w-10 h-10 text-white focus:outline-none"
onClick={() => setShowMenu(!showMenu)}
>
<div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
    <span
    className={`absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${
        showMenu ? "rotate-45 delay-200" : "-translate-y-1.5"
    }`}
    ></span>
    <span
    className={`absolute h-0.5 bg-white transform transition-all duration-200 ease-in-out ${
        showMenu ? "w-0 opacity-50" : "w-5 delay-200 opacity-100"
    }`}
    ></span>
    <span
    className={`absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${
        showMenu ? "-rotate-45 delay-200" : "translate-y-1.5"
    }`}
    ></span>
</div>
</button>
      </div>
    </header>
  );
};

export default Nav;
