import { skills } from "../../assets/data";
import { AnimatePresence } from "framer-motion";

const Skills = () => {
  return (
    <section id="skills" className="bg-m2 pt-52">
      <div
        className={`container px-5 py-10 mx-auto`}
      >
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white  mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-100">
            I began my journey learning HTML, CSS, Javascript, and React. Since then I've picked up Typescript and will soon learn Next.js.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div
            key={skill.id} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <img
                  className="text-green-400 w-6 flex-shrink-0 mr-4"
                  src={skill.image}
                />
                <span className="title-font font-medium text-white">
                  {skill.skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
