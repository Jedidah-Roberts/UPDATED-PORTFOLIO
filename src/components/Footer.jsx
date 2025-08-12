import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left: Copyright */}
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Jedidah Roberts. All rights reserved.
        </p>

        {/* Right: Social Icons */}
        <div className="flex gap-5 text-white text-lg">
          <a
            href="https://github.com/Jedidah-Roberts"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/jedidahroberts"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            className="hover:text-orange-500 transition"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="hover:text-orange-500 transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
