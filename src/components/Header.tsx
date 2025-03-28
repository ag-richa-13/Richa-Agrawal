import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import "../assets/style/header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const menuItems = [
    { label: "About", to: "about" },
    { label: "Experience", to: "experience" },
    { label: "Projects", to: "projects" },
    { label: "Skills", to: "skills" },
    { label: "Contact", to: "contact" },
  ];

  return (
    <header
      className={`header fixed top-0 left-0 right-0 z-50 backdrop-blur-sm w-full overflow-x-hidden ${
        isScrolled ? "bg-black/80 shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center max-w-full">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="flex items-center space-x-1 group"
        >
          <div className="flex items-center">
            <span className="text-2xl font-bold text-neon-blue group-hover:text-neon-pink transition-colors duration-300">
              R
              <span className="text-neon-pink group-hover:text-neon-blue">
                A
              </span>
            </span>
            <span className="animate-blink ml-0.5 text-neon-blue">_</span>
          </div>
        </Link>

        <div className="hidden md:flex space-x-6 lg:space-x-8 menu-list">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="nav-link text-sm lg:text-base hover:text-neon-pink transition-colors duration-300"
              activeClass="nav-link-active"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-neon-blue z-50 relative hover:text-neon-pink transition-colors p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-gradient-to-b from-black/95 to-[#0a0a16]/95 backdrop-blur-md transform transition-all duration-500 ease-in-out md:hidden ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, y: 20 }}
                animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="relative group py-4 px-6 text-2xl font-semibold"
                  onClick={() => setIsOpen(false)}
                  activeClass="text-neon-pink"
                >
                  <span className="relative z-10 text-neon-blue group-hover:text-neon-pink transition-colors duration-300">
                    {item.label}
                  </span>
                  <div className="absolute inset-0 bg-white/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
