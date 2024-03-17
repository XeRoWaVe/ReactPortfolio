import { skills } from "../../data";
import { useRef } from "react";
import { useIsVisible } from "../../util";
import { AnimatePresence, motion } from "framer-motion";

const Skills = () => {
  const ref = useRef();
  const isVisible = useIsVisible(ref);

  return (
    <section id="skills" className="bg-m2">
      <div
        ref={ref}
        className={`container px-5 py-10 mx-auto transition-opacity ease-in duration-1000 delay-75 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {isVisible &&<AnimatePresence>
          {skills.map((skill) => (
            <motion.div 
            initial={skill.id}
            animate={{ x: 0, y:0, opacity: 100 }}
            transition={{
              duration: 2.5,
              delay: 0.1,
              ease: [0, 0.71, 0.2, 1.01]
            }}
            key={skill.id} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <img
                  className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"
                  src={skill.image}
                />
                <span className="title-font font-medium text-white">
                  {skill.skill}
                </span>
              </div>
            </motion.div>
          ))}
          </AnimatePresence>}
        </div>
      </div>
    </section>
  );
};

export default Skills;
