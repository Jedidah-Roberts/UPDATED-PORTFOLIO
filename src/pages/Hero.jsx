import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa6";

const Hero = () => {
  return (
    <section
      className="relative bg-[url('/hero.png')] bg-fixed bg-cover bg-top min-h-screen flex items-center justify-center px-6 py-16 text-center"
    >
      <div className="absolute inset-0 bg-black/70">

      </div>
      <div className="relative z-10 max-w-4xl mx-auto space-y-6">
        
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-3"
        >
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
            Junior Frontend Developer
          </p>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Every Expert Was Once a Novice.
            <br />
            <span className="text-orange-600">Welcome to my journey.</span>
          </h1>
        </motion.div>

        
        <motion.div
         initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <a
            href="/Jedidah_CV.pdf"
            // download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-orange-600 transition"
          >
            VIEW MY RESUME
            {/* <FaDownload /> */}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
