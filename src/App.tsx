import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Achievements } from "./components/Achievements";
import { Contact } from "./components/Contact";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa"; // Importing social media icons from react-icons/fa

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ag-richa-13s/",
    icon: <FaLinkedin size={24} />,
  },
  {
    name: "GitHub",
    url: "https://github.com/ag-richa-13",
    icon: <FaGithub size={24} />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/r.i._c_.h.a/",
    icon: <FaInstagram size={24} />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/IAMRICHAAGRAWAL",
    icon: <FaTwitter size={24} />,
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Social Media Links Section */}
          <div className="flex justify-center space-x-6 mb-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-indigo-600 transition-colors transform hover:scale-110"
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Call to Action */}
          <p className="text-sm text-gray-300">
            Stay connected and follow me for updates on my work!
          </p>

          {/* Copyright Information */}
          <p className="text-xs mt-2">
            © 2024 Richa Agrawal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
