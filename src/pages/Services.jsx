import { motion } from "framer-motion";
import { FaMobileAlt } from "react-icons/fa";
import {
  FaCode,
  FaLaptopCode,
  FaBugSlash,
  FaReact,
  FaServer,

  FaUniversalAccess,
} from "react-icons/fa6";

const services = [
  {
    icon: <FaReact size={30} className="text-orange-500" />,
    title: "Component-Based UI Development",
    description:
      "Building scalable and maintainable front-end applications using React, with reusable components and clean state management.",
  },
  {
    icon: <FaServer size={30} className="text-orange-500" />,
    title: "API Integration & Data Fetching",
    description:
      "Connecting front-end interfaces to REST APIs and handling asynchronous data with Axios or Fetch for dynamic, data-driven apps.",
  },
  {
    icon: <FaMobileAlt size={30} className="text-orange-500" />,
    title: "Responsive & Mobile-First Design",
    description:
      "Creating fully responsive layouts that adapt seamlessly to any screen size using Tailwind CSS and modern design principles.",
  },
  {
    icon: <FaUniversalAccess size={30} className="text-orange-500" />,
    title: "Accessibility Best Practices",
    description:
      "Writing semantic HTML, implementing ARIA roles, and ensuring websites are usable by everyone — including screen reader users.",
  },
  {
    icon: <FaCode size={30} className="text-orange-500" />,
    title: "HTML/CSS Site Layouts",
    description:
      "Structuring web content with clean HTML and styling it with modern CSS to create visually appealing and accessible pages.",
  },
  {
    icon: <FaBugSlash size={30} className="text-orange-500" />,
    title: "Debugging & Code Cleanup",
    description:
      "Troubleshooting layout issues, fixing broken components, and optimizing code for readability and performance.",
  },
];


const Services = () => {
  return (
    <section id="services" className="bg-gray-50 pt-10 pb-16 px-6 min-h-screen font-sans flex items-center">
      <div className="max-w-6xl mx-auto w-full space-y-12">
        
        {/* Section Title */}
        <motion.h2
          className="text-center text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          DESIGN. <br /> <span className="text-orange-600">BUILD.</span> DELIVER.
        </motion.h2>

        {/* Services List */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
         initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center space-y-4 border-t-4 border-orange-500 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
             initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
