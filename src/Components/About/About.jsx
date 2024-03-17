import { useRef } from "react";
import { useIsVisible } from "../../util";
import { motion } from "framer-motion";


const About = () => {
  const ref = useRef();
  const isVisible = useIsVisible(ref);

  return (
    <section id="about">
      <div
        ref={ref}
        className={`container mx-auto flex px-10 py-20 md:flex-row flex-col items-center transition-opacity ease-in duration-1000 delay-75 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Aaron.
            <br className="hidden lg:inline-block" />I am an aspiring Web Developer.
          </h1>
          <p className="mb-8 leading-relaxed">
            My father was a software engineer for the Defense Industry, but passed away before he could teach me the craft. Ever since I've wanted to learn how to code, but life has a way of getting in the way. I'm finally taking the time to learn and I'm loving it. I've learned HTML, CSS, Javascript, and React by finishing the Front End Engineer course on Codecademy.com. I have begun learning Typescript and Next.js to further my understanding of web development.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <motion.div 
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
          animate={{ y: [-50, 150, 50], x: [50, 150, 50], opacity: 1, scale: 1 }}
          transition={{
            duration: 5,
            delay: 0.3,
            ease: [0.5, 0.71, 1, 1.5],
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.2 }}>
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={`/public/assets/mugshot2023.jpeg`}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
