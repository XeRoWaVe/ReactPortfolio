import { projects } from "../../assets/data";


const Projects = () => {


  return (
    <section id="projects" className={`text-gray-400`}>
      <div
        className={`container px-5 py-10 mx-auto mt-20 text-center lg:px-40`}
      >
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl cursor-default text-3xl font-medium title-font mb-4 text-white">
           <span className="hover:text-gray-500">Apps I've</span> <span className="text-green-400 hover:text-green-500">Built</span>
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-100">
            These are the projects I've used to learn new skills and technologies. Currently working on a unique project that is a mixture of Todoist / Pomodoro Timer that'll serve as a Random Intermittent Reward App. This all ties into the ongoing theme of Dopamine, of course.
          </p>
        </div>
        <div className="flex flex-wrap justify-center -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative h-60">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-[#0D0D0D]  opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium  text-green-400 mb-1">
                    {project.subTitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed text-white ">{project.description}</p>
                  <p className="">Tech: {project.tech}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
