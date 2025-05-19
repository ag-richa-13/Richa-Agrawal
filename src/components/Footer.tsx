import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] py-8 md:py-12 w-full relative overflow-hidden">
      {/* Animated background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-72 md:w-96 h-72 md:h-96 -top-36 md:-top-48 -left-36 md:-left-48 bg-purple-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-72 md:w-96 h-72 md:h-96 -bottom-36 md:-bottom-48 -right-36 md:-right-48 bg-blue-600 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 text-center w-full relative z-10">
        {/* Social Media Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-6 md:mb-8">
          <a
            href="https://github.com/ag-richa-13"
            className="text-gray-400 hover:text-white transition-all transform hover:scale-110 hover:-translate-y-1 duration-300 ease-out"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-6 h-6 md:w-7 md:h-7 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
          </a>
          <a
            href="https://linkedin.com/in/agricha-13"
            className="text-gray-400 hover:text-white transition-all transform hover:scale-110 hover:-translate-y-1 duration-300 ease-out"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-6 h-6 md:w-7 md:h-7 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
          </a>
          <a
            href="https://www.instagram.com/r.i._c_.h.a/"
            className="text-gray-400 hover:text-white transition-all transform hover:scale-110 hover:-translate-y-1 duration-300 ease-out"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="w-6 h-6 md:w-7 md:h-7 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
          </a>
        </div>

        {/* Footer Text */}
        <div className="space-y-3 md:space-y-4">
          <p className="text-gray-300 text-xs md:text-sm font-light tracking-widest mb-2 opacity-90">
            Crafting Digital Experiences with Passion
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center text-xs md:text-sm font-light gap-2 md:gap-0">
            <span className="text-gray-400">© {new Date().getFullYear()}</span>
            <span className="hidden md:block mx-3 text-purple-400">•</span>
            <span className="text-gray-400">Designed & Developed by</span>
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent ml-0 md:ml-2 font-medium">
              Richa Agrawal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
