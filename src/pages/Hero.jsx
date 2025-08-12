import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa6";

const Hero = () => {
  return (
    <section
      id="front-page"
      className="bg-white min-h-screen flex items-center justify-center px-6 py-16 text-center"
    >
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-3"
        >
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
            Aspiring Frontend Developer
          </p>
          <p className="text-gray-600 text-md">A Code Novice on a Quest</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Every Expert Was Once a Novice.
            <br />
            <span className="text-orange-600">Welcome to my journey.</span>
          </h1>
        </motion.div>

        {/* Download Resume Button */}
        <motion.div
         initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <a
            href="/assets/JEDIDAH'S CV.docx"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-orange-600 transition"
          >
            DOWNLOAD MY RESUME
            <FaDownload />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
