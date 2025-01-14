import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#000] border-2 border-[#fff] rounded-lg py-6">
      <div className="container mx-auto px-4 text-center">
        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://github.com/ag-richa-13"
            className="text-gray-300 hover:text-red-500 transition-transform transform hover:scale-125 duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/agricha-13"
            className="text-gray-300 hover:text-blue-500 transition-transform transform hover:scale-125 duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/r.i._c_.h.a/"
            className="text-gray-300 hover:text-pink-500 transition-transform transform hover:scale-125 duration-300"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Footer Text */}
        <div className="flex justify-center items-center text-gray-500 text-xs">
          <p className="text-gray-400 text-sm mb-2">
            Built with creativity and passion.
          </p>
        </div>
        <div className="flex justify-center items-center text-gray-500 text-xs">
          <span className="mr-1">© {new Date().getFullYear()} Made with</span>
          <span style={{ fontSize: "1.5em", color: "pink" }}>🩷</span>
          <span className="ml-1">by Richa Agrawal.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
