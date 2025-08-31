import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "ROBERTS SISTERS GLAM",
    description:
      "A clean page built using HTML and CSS — perfect for a small startup makeup online marketplace.",
    image: "/images/robertsglam.jpg", // Screenshot or thumbnail (host locally or use URL)
    github: "https://github.com/Jedidah-Roberts/cprojects",
    live: "https://robertsglam.netlify.app/",
  },
  {
    title: "MY PERSONAL PORTFOLIO",
    description:
      "A clean landing page built using HTML and CSS — transforming structure into a usable portfolio tool.",
    image: "/images/portfolio.jpg",
    github: "https://github.com/Jedidah-Roberts/PROJECT-PORTFOLIO",
    live: "https://jedidahrobertsdev.netlify.app/",
  },
  {
    title: "CODEFEAST",
    description:
      "An advertisement platform that showcases different recipes worked on .",
    image: "/images/portfolio.jpg",
    github: "https://github.com/Jedidah-Roberts/PROJECT-PORTFOLIO",
    live: "https://jedidahrobertsdev.netlify.app/",
  },

];

const AllProjects = () => {
  return (
    <section id="project-section" className="bg-white py-16 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Title */}
        <motion.h2
          className="text-center text-4xl md:text-5xl font-extrabold text-gray-800"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          Featured <span className="text-orange-600">Projects</span>
        </motion.h2>

        {/* Projects Grid */}
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

                {/* Links */}
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
