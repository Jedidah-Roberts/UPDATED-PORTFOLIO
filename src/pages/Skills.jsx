import { motion } from "framer-motion";

const skills = [
  "React",
  "TailwindCSS",
  "JavaScript",
  "HTML",
  "CSS",
  "VS Code",
  "Git/GitHub",
  "Chrome DevTools",
  "Project Coordination",
  "Team Collaboration",
  "Customer-Centered Mindset",
  "Communication",
];

const Skills = () => {
  return (
    <section className="bg-white pt-10 pb-16 px-6 min-h-screen font-sans flex items-center">
      <div className="max-w-6xl mx-auto w-full space-y-12">
        
        {/* Intro */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase text-orange-500 font-semibold tracking-widest mb-2">
            Code, Design and Everything Between
          </p>
          <p className="text-lg text-gray-600 mb-3">Junior Web Developer</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Hi, I'm <span className="text-orange-600">Jedidah</span>.
            <br />
            My Toolkit (So Far)
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              className="bg-gray-100 p-4 rounded-md shadow-sm text-center text-gray-700 font-medium"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
