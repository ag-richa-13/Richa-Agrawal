import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaMedium, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { RiHomeHeartLine } from "react-icons/ri";
import "../assets/style/contact.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle change for form fields
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when starting to send

    // Form validation: Ensure all fields are filled
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      toast.error("All fields are required!", {
        className: "toast-error",
      });
      setLoading(false); // Stop loading on error
      return;
    }

    // Use EmailJS to send the email
    emailjs
      .send(
        "service_2jvyrmd", // Replace with your EmailJS service ID
        "template_uxwydsc", // Replace with your EmailJS template ID
        {
          ...formData, // Send form data
          from_name: formData.name, // Ensure the sender's name is correctly set
        },
        "l7LRkSGlwOuhCx-2d" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("Email sent successfully", response);
          toast.success("Message Sent Successfully!", {
            className: "toast-success",
          });
        },
        (error) => {
          console.error("Error sending email", error);
          toast.error("Failed to send the message. Please try again later.", {
            className: "toast-error",
          });
        }
      )
      .finally(() => {
        setLoading(false); // Stop loading after completion
        setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
      });
  };

  return (
    <div
      id="contact"
      className="bg-[#0a0a0a] min-h-[80vh] flex flex-col justify-center items-center px-4 py-8 text-gray-300 w-full relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>

      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse">
        Player Connect Hub
      </h1>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 z-10">
        {/* Quick Connect Panel */}
        <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-4 space-y-4">
          <h2 className="text-lg font-gaming text-cyan-400 mb-2 border-b border-cyan-500/30 pb-2">
            Quick Connect
          </h2>
          
          {/* Contact Info Links */}
          <div className="space-y-2">
            <a href="mailto:agrawalricha013@gmail.com" 
               className="flex items-center gap-3 p-2 border border-gray-700 rounded-lg hover:border-cyan-500 hover:bg-black/30 transition-all group">
              <div className="bg-red-500/20 p-1.5 rounded-lg group-hover:bg-red-500/30 transition-all">
                <SiGmail size={18} className="text-red-500" />
              </div>
              <span className="text-xs group-hover:text-red-400 transition-colors">agrawalricha013@gmail.com</span>
            </a>
            
            <a href="https://wa.me/919079531049" 
               className="flex items-center gap-3 p-2 border border-gray-700 rounded-lg hover:border-cyan-500 hover:bg-black/30 transition-all group">
              <div className="bg-green-500/20 p-1.5 rounded-lg group-hover:bg-green-500/30 transition-all">
                <FaWhatsapp size={18} className="text-green-500" />
              </div>
              <span className="text-xs group-hover:text-green-400 transition-colors">+91 9079531049</span>
            </a>

            <div className="flex items-center gap-3 p-2 border border-gray-700 rounded-lg group">
              <div className="bg-purple-500/20 p-1.5 rounded-lg">
                <RiHomeHeartLine size={18} className="text-purple-500" />
              </div>
              <span className="text-xs">Gangapur City, Rajasthan</span>
            </div>
          </div>

          {/* Social Icons Grid */}
          <div className="pt-3 border-t border-gray-700">
            <h3 className="text-xs text-gray-400 mb-3">Connect on Social Media</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { 
                  icon: <FaGithub size={18} />, 
                  link: "https://github.com/ag-richa-13", 
                  bgColor: "from-gray-700 to-gray-900",
                  iconColor: "group-hover:text-white"
                },
                { 
                  icon: <FaLinkedin size={18} />, 
                  link: "https://www.linkedin.com/in/ag-richa-13s/", 
                  bgColor: "from-blue-600 to-blue-800",
                  iconColor: "group-hover:text-blue-200"
                },
                { 
                  icon: <FaXTwitter size={18} />, 
                  link: "https://twitter.com/IAMRICHAAGRAWAL", 
                  bgColor: "from-sky-600 to-sky-800",
                  iconColor: "group-hover:text-sky-200"
                },
                { 
                  icon: <FaInstagram size={18} />, 
                  link: "https://www.instagram.com/r.i._c.h.a/", 
                  bgColor: "from-pink-600 to-purple-600",
                  iconColor: "group-hover:text-pink-200"
                },
                { 
                  icon: <FaFacebook size={18} />, 
                  link: "https://www.facebook.com/ag.richa13", 
                  bgColor: "from-blue-500 to-blue-700",
                  iconColor: "group-hover:text-blue-200"
                },
                { 
                  icon: <FaMedium size={18} />, 
                  link: "https://medium.com/@agricha-13", 
                  bgColor: "from-gray-600 to-gray-800",
                  iconColor: "group-hover:text-white"
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="group relative"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-500 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className={`relative w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr ${social.bgColor} transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                    <div className={`text-gray-300 transition-all duration-300 ${social.iconColor} transform group-hover:-rotate-6`}>
                      {social.icon}
                    </div>
                  </div>
                </a>
              ))}
            </div>
            
            {/* Thank You Message */}
            <div className="mt-6 text-center relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl"></div>
              <div className="relative">
                <p className="text-sm font-gaming bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                  Thanks for Connecting! 🎮
                </p>
                <p className="text-xs text-gray-500 mt-1">Let's create something amazing together</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Panel */}
        <div className="bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6">
          <h2 className="text-xl font-gaming text-purple-400 mb-6 border-b border-purple-500/30 pb-2">
            Send Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full bg-black/50 border border-purple-500/30 rounded-lg px-4 py-2 text-sm focus:border-cyan-500 focus:outline-none transition-colors"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full bg-black/50 border border-purple-500/30 rounded-lg px-4 py-2 text-sm focus:border-cyan-500 focus:outline-none transition-colors"
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full bg-black/50 border border-purple-500/30 rounded-lg px-4 py-2 text-sm focus:border-cyan-500 focus:outline-none transition-colors"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={4}
              className="w-full bg-black/50 border border-purple-500/30 rounded-lg px-4 py-2 text-sm focus:border-cyan-500 focus:outline-none transition-colors resize-none"
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 rounded-lg hover:opacity-90 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 font-medium"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      <Toaster position="top-right" />
    </div>
  );
};

export default ContactPage;
