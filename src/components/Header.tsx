import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import "../assets/style/header.css"; // Import the CSS file

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Close menu on scroll if it's open
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  useEffect(() => {
    // Disable scrolling when the menu is open
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable body scroll
    } else {
      document.body.style.overflow = "auto"; // Enable body scroll
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
      <nav className="container mx-auto px-16 py-3 flex justify-between items-center">
        {/* Centered Logo */}
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="logo-container"
        >
          <span className="text-green-500">&lt;</span>
          <span className="logo-text">Richa.</span>
          <span className="text-green-500">/&gt;</span>
        </Link>

        {/* Desktop Menu */}
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 z-50 hover:text-purple-400 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
          <div className="flex flex-col items-center justify-center h-full space-y-8">
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
