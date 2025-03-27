import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
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
      className={`header ${
        isScrolled ? "header-scrolled" : "header-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="logo-container"
        >
          <span className="logo-bracket">[</span>
          <span className="logo-text">RICHA</span>
          <span className="logo-bracket">]</span>
        </Link>

        <div className="hidden md:flex space-x-8 menu-list">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="nav-link"
              activeClass="nav-link-active"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-neon-blue z-50 hover:text-neon-pink transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={`mobile-menu ${isOpen ? "open" : ""}`}
          onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}
        >
          <div className="mobile-menu-content">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="mobile-link"
                onClick={() => setIsOpen(false)}
                activeClass="mobile-link-active"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
