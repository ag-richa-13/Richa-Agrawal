import React from "react";
import { motion } from "framer-motion";

import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from "react-icons/fa"; // Import social media icons from react-icons
import { SiGmail } from "react-icons/si";
import { FaMedium, FaPhone } from "react-icons/fa6";
import { PiMapPinBold } from "react-icons/pi";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-700 text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Let's collaborate on something amazing together. Feel free to reach
            out to me anytime.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 p-8 bg-gray-800 rounded-xl shadow-2xl border-4 border-indigo-600 hover:border-indigo-400 transition-all ease-in-out"
          >
            {/* Email */}
            <div className="flex items-center space-x-4">
              <div className="bg-indigo-600 p-3 rounded-full shadow-lg">
                <SiGmail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">Email</h3>
                <p className="text-gray-400">agrawalricha013@gmail.com</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-4">
              <div className="bg-indigo-600 p-3 rounded-full shadow-lg">
                <PiMapPinBold className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  Location
                </h3>
                <p className="text-gray-400">Gangapur City, Rajasthan, India</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-4">
              <div className="bg-indigo-600 p-3 rounded-full shadow-lg">
                <FaPhone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">Phone</h3>
                <p className="text-gray-400">9079531049</p>
              </div>
            </div>
          </motion.div>

          {/* Social Media Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 flex justify-center flex-col items-center p-8 bg-gray-800 rounded-xl shadow-2xl border-4 border-indigo-600 hover:border-indigo-400 transition-all ease-in-out"
          >
            <h3 className="text-2xl font-semibold text-gray-300 mb-4">
              Follow Me
            </h3>
            <div className="flex space-x-6 justify-center">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ag-richa-13s/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-12 h-12 bg-indigo-600 p-3 rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:bg-indigo-500 transition-all">
                  <FaLinkedinIn className="h-6 w-6 text-white group-hover:text-gray-100" />
                </div>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/ag.richa13"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-12 h-12 bg-indigo-600 p-3 rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:bg-indigo-500 transition-all">
                  <FaFacebookF className="h-6 w-6 text-white group-hover:text-gray-100" />
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/r.i._c_.h.a/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-12 h-12 bg-indigo-600 p-3 rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:bg-indigo-500 transition-all">
                  <FaInstagram className="h-6 w-6 text-white group-hover:text-gray-100" />
                </div>
              </a>

              {/* Twitter */}
              <a
                href="https://twitter.com/IAMRICHAAGRAWAL"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-12 h-12 bg-indigo-600 p-3 rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:bg-indigo-500 transition-all">
                  <FaTwitter className="h-6 w-6 text-white group-hover:text-gray-100" />
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/ag-richa-13"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-12 h-12 bg-indigo-600 p-3 rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:bg-indigo-500 transition-all">
                  <FaGithub className="h-6 w-6 text-white group-hover:text-gray-100" />
                </div>
              </a>

              {/* Medium */}
              <a
                href="https://medium.com/@agricha-13"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-12 h-12 bg-indigo-600 p-3 rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:bg-indigo-500 transition-all">
                  <FaMedium className="h-6 w-6 text-white group-hover:text-gray-100" />
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
