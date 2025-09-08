import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section className="bg-gray-50 pt-10 pb-16 px-6 min-h-screen font-sans flex items-center">
      <div className="max-w-6xl mx-auto w-full space-y-12">

        {/* Intro */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase text-orange-500 font-semibold tracking-widest mb-2">
            Aspiring Frontend Developer
          </p>
          <p className="text-lg text-gray-600 mb-3">A Code Novice on a Quest</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Hi, I'm <span className="text-orange-600">Jedidah</span>.
            <br />This is My Learning Journal.
          </h1>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-10">
          
          {/*  Item 1*/}
           <motion.div
            className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-orange-500"
            initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          >
            <span className="text-sm text-gray-500 font-medium block mb-2">July 2025 – August 2025</span>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Web Development Intern – Beyond the Line Africa
            </h3>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1">
              <li>Worked as part of a collaborative development team,building real-world web products using React.js and Tailwind CSS</li>
              <li>Contributed to the development of user-facing features, responsive UI components, and seamless user experiences</li>
              <li>Gained hands-on experiences working in a real -world development environment with emphasis on clean,maintainable code </li>
              
              
            </ul>
          </motion.div>
          {/* Item 2 */}
          <motion.div
            className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-orange-500"
            initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          >
            <span className="text-sm text-gray-500 font-medium block mb-2">May 2025 – July 2025</span>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Web Development Trainee – GROW's Web Development Program
            </h3>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1">
              <li>Built a personal portfolio from scratch using React and Tailwind CSS</li>
              <li>Collaborated with fellow learners on small projects using clean, structured code.</li>
              <li>Collaborated in groups to ceate big projects, focusing on API integrations and reusable components.</li>
              <li>Applied version control using Git and GitHub to manage and document progress.</li>
              
            </ul>
          </motion.div>

          {/*  Item 3*/}
          <motion.div
            className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-orange-500"
            initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          >
            <span className="text-sm text-gray-500 font-medium block mb-2">Jan 2025 – May 2025</span>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Operations Associate – NAYA by Africa
            </h3>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1">
              <li>Identified repetitive tasks and proposed automation solutions.</li>
              <li>Worked extensively with spreadsheets and dashboards.</li>
              <li>Developed data organization and workflow management skills.</li>
            </ul>
          </motion.div>

          {/* Item 4 */}
          <motion.div
            className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-orange-500"
           initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          >
            <span className="text-sm text-gray-500 font-medium block mb-2">May 2023 – Jan 2025</span>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Branch Manager – Kab-Fam Ghana Limited
            </h3>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1">
              <li>Optimized in-store customer experience, sparking interest in UI/UX design.</li>
              <li>Oversaw all aspects of branch operations including sales and staff training.</li>
              <li>Led teams and managed the launch of various promotional campaigns.</li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
