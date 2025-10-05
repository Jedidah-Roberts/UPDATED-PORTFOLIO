import { Link } from "react-router";
import about from "../assets/about.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-white pt-10 pb-16 px-6 min-h-screen font-sans flex items-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-14">

        
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={about}
            alt="About"
            className="rounded-2xl shadow-xl transition-transform duration-500 hover:scale-105"
          />
        </motion.div>

        
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h4 className="text-orange-400 uppercase font-semibold tracking-widest text-sm mb-2">
            My Learning Journal
          </h4>
          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            A Junior Front-End Developer With Drive
          </h2>
          <p className="text-gray-600 text-base mb-4 leading-relaxed">
            Just a few months ago, I typed my first line of code and today, I've graduated as a junior front-end developer. Through consistent learning, hands-on projects, and a deep dive into HTML, CSS, JavaScript, and React, I've transformed my curiosity into skill.
            But this journey isn’t my first professional chapter. I bring with me real-world experience that sharpens my approach to design, detail, and development.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            My portfolio isn’t just a showcase ;it's a reflection of how far I’ve come and where I’m going. I'm passionate about building responsive, user-friendly web experiences, collaborating with others, and continuously leveling up. This is only the beginning.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
