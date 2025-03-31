import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] py-10 w-full relative overflow-hidden">
      {/* Animated background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-purple-600 rounded-full blur-3xl"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 text-center w-full relative z-10">
        {/* Social Media Links */}
        <div className="flex justify-center gap-10 mb-8">
          <a
            href="https://github.com/ag-richa-13"
            className="text-gray-400 hover:text-white transition-all transform hover:scale-110 hover:-translate-y-1 duration-300 ease-out"
            aria-label="GitHub"
          >
            <FaGithub size={30} className="drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
          </a>
          <a
            href="https://linkedin.com/in/agricha-13"
            className="text-gray-400 hover:text-white transition-all transform hover:scale-110 hover:-translate-y-1 duration-300 ease-out"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={30} className="drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
          </a>
          <a
            href="https://www.instagram.com/r.i._c_.h.a/"
            className="text-gray-400 hover:text-white transition-all transform hover:scale-110 hover:-translate-y-1 duration-300 ease-out"
            aria-label="Instagram"
          >
            <FaInstagram size={30} className="drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
          </a>
        </div>

        {/* Footer Text */}
        <div className="space-y-4">
          <p className="text-gray-300 text-sm font-light tracking-widest mb-2 opacity-90">
            Crafting Digital Experiences with Passion
          </p>
          <div className="flex justify-center items-center text-sm font-light">
            <span className="text-gray-400">© {new Date().getFullYear()}</span>
            <span className="mx-3 text-purple-400">•</span>
            <span className="text-gray-400">Designed & Developed by</span>
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent ml-2 font-medium">
              Richa Agrawal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
