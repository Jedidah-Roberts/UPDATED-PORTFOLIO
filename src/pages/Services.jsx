import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaBugSlash } from "react-icons/fa6";

const services = [
  {
    icon: <FaCode size={30} className="text-orange-500" />,
    title: "Basic HTML/CSS Site Layouts",
    description:
      "Structuring web content with HTML and styling it with CSS to create visually appealing and easy-to-navigate pages.",
  },
  {
    icon: <FaLaptopCode size={30} className="text-orange-500" />,
    title: "Simple Landing Pages",
    description:
      "Clean, mobile-friendly pages built using HTML and CSS — perfect for personal brands, portfolios, or small businesses starting out online.",
  },
  {
    icon: <FaBugSlash size={30} className="text-orange-500" />,
    title: "Beginner-Level Bug Fixes",
    description:
      "Able to spot and fix simple HTML/CSS issues such as broken layouts, alignment problems, or incorrect tags.",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-gray-50 pt-10 pb-16 px-6 min-h-screen font-sans flex items-center">
      <div className="max-w-6xl mx-auto w-full space-y-12">
        
        {/* Section Title */}
        <motion.h2
          className="text-center text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          DESIGN. <br /> <span className="text-orange-600">BUILD.</span> DELIVER.
        </motion.h2>

        {/* Services List */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center space-y-4 border-t-4 border-orange-500"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
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
