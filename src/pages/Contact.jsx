import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Contact = () => {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/mzzagegk", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    setSubmitting(false);

    if (response.ok) {
      form.reset();
      navigate("/thank-you"); // Redirect manually
    } else {
      alert("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="bg-white py-16 px-6 min-h-screen font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Contact Details */}
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

        {/* Contact Form */}
        <motion.div
          className="bg-gray-50 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
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
              disabled={submitting}
              className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition"
            >
              {submitting ? "Sending..." : "Send Me A Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
