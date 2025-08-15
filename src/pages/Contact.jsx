import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-50 py-16 px-6 min-h-screen font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Left: Contact Info */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            READY TO <span className="text-orange-600">COLLABORATE?</span>
          </h2>

          <div className="text-gray-700 space-y-2">
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-orange-500" />
              <a
                href="mailto:jedidahroberts@gmail.com"
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                robertsjedidah@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-3">
              <FaPhone className="text-orange-500" />
              +233 554436603
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com/Jedidah-Roberts"
              target="_blank"
              rel="noreferrer"
              className="text-gray-700 hover:text-orange-500"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/jedidahroberts"
              target="_blank"
              rel="noreferrer"
              className="text-gray-700 hover:text-orange-500"
            >
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-gray-700 hover:text-orange-500">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-700 hover:text-orange-500">
              <FaInstagram size={24} />
            </a>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            action="/thank-you"  // Optional: redirect after success
            className="space-y-4"
          >
            {/* Required for Netlify */}
            <input type="hidden" name="form-name" value="contact" />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition"
            >
              Send Me A Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
