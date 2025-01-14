import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import emailjs from "emailjs-com"; // Import EmailJS
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaMedium, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { RiHomeHeartLine } from "react-icons/ri";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // Loading state for the button

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
      className="bg-[#000000] min-h-screen flex flex-col justify-center items-center px-6 text-gray-300 text-sm md:text-base"
    >
      <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-pink-400 animate__animated animate__fadeIn animate__delay-1s hover:text-yellow-400 cursor-pointer transition-all duration-300 transform hover:scale-105">
        Let's connect.
      </h1>
      <p className="text-center mb-10 text-lg md:text-xl animate__animated animate__fadeIn animate__delay-2s">
        If you want to know more about my work, or just say hello, send me a
        message. I'd love to hear from you.
      </p>

      {/* Contact Form and Info Section */}
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Contact Info */}
        <div className="bg-[#000000] border-2 border-[#D4BDAC] shadow-lg rounded-lg p-6 flex flex-col items-center h-auto">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-yellow-400">
            Get in Touch
          </h2>
          <p className="text-center mb-4 text-gray-400">
            Feel free to reach out via email or connect with me on social media.
          </p>
          <div className="text-gray-400 space-y-3 text-center">
            {/* Gmail Button with Blue Color */}
            <a
              href="mailto:agrawalricha013@gmail.com"
              className="flex items-center justify-center gap-2 gmail-btn hover:bg-[#030637] hover:text-white transition-all duration-300 rounded-full p-2 text-sm md:text-base transform hover:scale-105"
            >
              <SiGmail size={24} />
              agrawalricha013@gmail.com
            </a>
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919079531049" // WhatsApp link
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 whatsapp-btn hover:bg-[#006A67] hover:text-white transition-all duration-300 rounded-full p-2 text-sm md:text-base transform hover:scale-105"
            >
              <FaWhatsapp size={24} />
              +91 9079531049
            </a>
            {/* Location Button (Heart Color) */}
            <a
              href="https://www.google.com/maps?q=Gangapur+City,+Rajasthan,+India"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 location-btn hover:bg-[#FF4D4D] hover:text-white transition-all duration-300 rounded-full p-2 text-sm md:text-base transform hover:scale-105"
            >
              <RiHomeHeartLine size={24} />
              Gangapur City, Rajasthan, India
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-6 justify-center">
            <a
              href="https://github.com/ag-richa-13"
              className="text-gray-400 hover:bg-gray-300 hover:text-gray-900 transition-all duration-300 rounded-full p-2 transform hover:scale-105 hover-fill"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ag-richa-13s/"
              className="text-gray-400 hover:bg-gray-300 hover:text-gray-900 transition-all duration-300 rounded-full p-2 transform hover:scale-105 hover-fill"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/r.i._c_.h.a/"
              className="text-gray-400 hover:bg-gray-300 hover:text-gray-900 transition-all duration-300 rounded-full p-2 transform hover:scale-105 hover-fill"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.facebook.com/ag.richa13"
              className="text-gray-400 hover:bg-gray-300 hover:text-gray-900 transition-all duration-300 rounded-full p-2 transform hover:scale-105 hover-fill"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com/IAMRICHAAGRAWAL"
              className="text-gray-400 hover:bg-gray-300 hover:text-gray-900 transition-all duration-300 rounded-full p-2 transform hover:scale-105 hover-fill"
            >
              <FaXTwitter size={24} />
            </a>
            <a
              href="https://medium.com/@agricha-13"
              className="text-gray-400 hover:bg-gray-300 hover:text-gray-900 transition-all duration-300 rounded-full p-2 transform hover:scale-105 hover-fill"
            >
              <FaMedium size={24} />
            </a>
          </div>

          {/* Thank You Note */}
          <p className="text-gray-400 text-center mt-6">
            Thank you for visiting! 😊🎉 I'm glad you're here! Let's stay
            connected! 🌟
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-[#000000] border-2 border-[#D4BDAC] shadow-lg rounded-lg p-6 h-auto">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-orange-400">
            Send a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-[#A0D683] font-medium mb-1 text-sm md:text-base"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-[#000] border border-[#EDDFE0] rounded px-3 py-1.5 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF8A08]"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-[#A0D683] font-medium mb-1 text-sm md:text-base"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#000] border border-[#EDDFE0] rounded px-3 py-1.5 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF8A08]"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-[#A0D683] font-medium mb-1 text-sm md:text-base"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-[#000] border border-[#EDDFE0] rounded px-3 py-1.5 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF8A08]"
                placeholder="Enter the subject"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-[#A0D683] font-medium mb-1 text-sm md:text-base"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-[#000] border border-[#EDDFE0] rounded px-3 py-1.5 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF8A08] resize-none"
                placeholder="Write your message"
                required
              ></textarea>
            </div>
            {/* Send Message Button with Fixed Length */}
            <button
              type="submit"
              disabled={loading}
              className="w-auto bg-[#A78295] text-[#22092C] font-bold py-2 px-4 rounded-lg transition-colors hover:bg-[#22092C] hover:text-[#CDC1FF] transform hover:scale-105"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      {/* Toast Notifications Container */}
      <Toaster position="top-right" />
    </div>
  );
};

export default ContactPage;
