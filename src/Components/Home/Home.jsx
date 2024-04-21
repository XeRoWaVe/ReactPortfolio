import { Link } from "react-router-dom";



const Home = () => {
  return (
    <section id="home" className="">
      <div
        className={`container mx-auto flex px-10 py-20 md:flex-row flex-col items-center`}
      >
        <div className="lg:flex-grow md:w-1/2  lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0">
          <h1 className="title-font cursor-default sm:text-8xl text-3xl mb-4 font-medium text-white ">
            <span className="hover:text-gray-500">Welcome, I'm </span><span className="text-green-400 hover:text-green-500">Aaron</span>.
            {/* <br className="hidden lg:inline-block" /> A Web Developer from Texas */}
          </h1>
          <p className="mb-8 leading-relaxed text-gray-100">
            
          </p>
          <div className="flex justify-center">
            <Link
              to="mailto:xerowave22@hotmail.com"
              className="inline-flex text-white bg-green-500 active:translate-y-0.5  border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </Link>
            <Link
              to="/projects"
              className="ml-4 inline-flex  hover:bg-gray-500 text-gray-400 active:translate-y-0.5 bg-gray-800 border-0 py-2 px-6 focus:outline-none dark:hover:bg-gray-700 dark:hover:text-white rounded text-lg"
            >
              See My Past Work
            </Link>

          </div>
        </div>
          <img
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 object-cover object-center rounded mt-14"
            alt="hero"
            src={`/images/profilephoto.png`}
          />
      </div>
    </section>
  );
};

export default Home;
