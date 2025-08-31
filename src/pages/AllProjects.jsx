import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import codefeast from "../assets/codefeast.png"
import careerlaunch from "../assets/careerlaunch.png"
import portfolio from "../assets/portfolio.png"

const projects = [
  {
    title: "CODEFEAST",
    description:
      "An advertisement platform that showcases different recipes worked on from dworld-class chefs from all over the world. All recipees can be accesssed with a single subscription.Built using React and Tailwind strictly",
    image: codefeast,
    github: "https://github.com/Jedidah-Roberts/advert-project",
    live: "https://code-feast.netlify.app/",
  },
  {
    title: "CAREERLAUNCH",
    description:
      "An app that simulates the actual working environment providing experiences from the working environment experienced from the comfort of your home . Built using React and Tailwind strictly",
    image: careerlaunch,
    github: "https://github.com/Jedidah-Roberts/job-simulation",
    live: "https://careerlaunchdev.netlify.app/",
  },
  
  {
    title: "MY PERSONAL PORTFOLIO",
    description:
      "A clean website page built using React and Tailwind CSS, showcasing my works and experiences as a junior web developer.",
    image: portfolio,
    github: "https://github.com/Jedidah-Roberts/UPDATED-PORTFOLIO",
    live: "https://jedidahportfoliodev.netlify.app/",
  },
  

];

const AllProjects = () => {
  return (
    <section id="project-section" className="bg-gray-50 py-16 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-12">

       
        <motion.h2
          className="text-center text-4xl md:text-5xl font-extrabold text-gray-800"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          Featured <span className="text-orange-600">Projects</span>
        </motion.h2>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 rounded-lg shadow-lg overflow-hidden group relative hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
            >
              <div className="h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>

                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-orange-600 text-lg"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-orange-600 text-lg"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
