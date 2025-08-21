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
          <h4 className="text-orange-500 uppercase font-bold tracking-widest text-sm mb-2">
            My Story
          </h4>
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6 leading-tight">
            A Beginner With Big Intentions
          </h2>
          <p className="text-gray-700 font-bold text-base mb-4 leading-relaxed">
            I typed my very first line of code only a few weeks ago. One project
            at a time, I've been diving deep into the foundations of HTML, CSS,
            and JavaScript. I don't just want to learn how to code , I want to
            understand how amazing digital experiences are created.
            What makes me different? I bring the fresh energy of a true beginner,
            combined with relentless motivation and a willingness to debug
            endlessly until things work. I'm also learning version control with
            Git & GitHub and applying skills from my professional background ,
            attention to detail, communication, and self-motivation.
          </p>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            This portfolio is my launchpad — a place to share what I’ve built and
            connect with people who believe in starting before you’re ready.
          </p>

          
          

        </motion.div>
        
      </div>
      
    </section>
    
  );
  
};

export default About;
