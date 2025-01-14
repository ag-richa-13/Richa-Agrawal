import React from "react";
import { motion } from "framer-motion";
import { blogPosts } from "../data/portfolio";
import richaImage from "../assets/images/richa.jpg";
import { BookOpen, Calendar, Clock } from "lucide-react";

// Import the CSS file
import "../assets/style/blogs.css";

const Blogs = () => {
  return (
    <section id="blogs">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-green-400">
          &lt;Blogs./&gt;
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 blog-container">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="blog-card"
            >
              <div className="blog-content">
                <div className="post-image">
                  <img src={post.imageUrl} alt={post.title} />
                </div>
                <div className="post-info">
                  <div className="meta-info">
                    <span className="flex items-center gap-1">
                      <Calendar size={16} />
                      Mar 2024
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={16} />5 min read
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-purple-400 mb-4 hover:text-purple-300 transition-colors">
                    <a href={post.url}>{post.title}</a>
                  </h3>
                  <p className="text-gray-300 mb-4">{post.description} </p>
                  <div className="author-info">
                    <div className="author-image">
                      <img
                        src={richaImage}
                        alt="Richa Agrawal"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-gray-400">Richa Agrawal</span>
                  </div>
                  <motion.a
                    href={post.url}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="read-more"
                  >
                    Read More →
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="see-more-btn mt-12 text-center">
          <motion.a
            href="https://agricha-13.medium.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 py-3 bg-green-400 text-[#1e1e1e] font-medium rounded-lg shadow-lg hover:bg-green-300 transition-all"
          >
            See More Blogs
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
