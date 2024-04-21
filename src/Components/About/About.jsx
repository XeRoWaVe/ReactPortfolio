import React from "react";
import { Link } from "react-router-dom";
import { skills } from "../../assets/data";

const About = () => {
  return (
    <section id="about" className="">
      <div className="flex mt-20">
        <img
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 object-cover object-center rounded mt-14"
          alt="hero"
          src={`/images/profilephoto.png`}
        />
        <div
          className={`container mx-auto flex px-10 py-20 md:flex-row flex-col items-center`}
        >
          <div className="lg:flex-grow md:w-1/2  lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0">
            <h1 className="title-font cursor-default sm:text-5xl text-3xl mb-4 font-medium text-white  ">
              <span className="hover:text-gray-500">About </span>
              <span className="text-green-400 hover:text-green-500">Me</span>
            </h1>
            <p className="mb-8 leading-relaxed text-gray-100">
              My name is Aaron Craig, in 2023 I decided to make a shift from
              working Technical Support with Verizon where I was using enterprise-level programs to troubleshoot 50+ customer devices per day. Since childhood I've had an affinity for technology, either playing video games or building computers. I chose to enroll myself in a coding course to begin my software development journey.
            </p>
            <div className="">
              <h1 className="sm:text-4xl cursor-default text-3xl font-medium title-font  text-white  mb-4">
                <span className="hover:text-gray-500">Skills</span> &amp;{" "}
                <span className="text-green-400 hover:text-green-500">
                  Technologies
                </span>
              </h1>
              <div className=" lg:w-2/5 sm:mb-2 ">
                {skills.map((skill) => (
                  <div key={skill.id} className=" sm:w-1/2 w-full">
                    <div className="bg-black rounded flex p-4 h-full items-center">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
