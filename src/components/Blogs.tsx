import React from "react";
import { motion } from "framer-motion";
import { blogPosts } from "../data/portfolio";
import richaImage from "../assets/images/richa.jpg";
import { BookOpen, Calendar, Clock, ChevronRight } from "lucide-react";

// Import the CSS file
import "../assets/style/blogs.css";

const Blogs = () => {
  return (
    <section id="blogs" className="py-12 md:py-20 ">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-3xl md:text-5xl font-bold text-green-400 mb-4"
          >
            &lt;Latest Blogs./&gt;
          </motion.h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl">
            Exploring the world of technology, one article at a time. Deep dive
            into web development, coding practices, and tech insights.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="blog-card group"
            >
              <div className="blog-content bg-[#2a2a2a] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-800 hover:border-green-400/30">
                <div className="post-image-wrapper">
                  <div className="post-image w-full aspect-[16/9] overflow-hidden">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="category absolute top-4 left-4">
                    <span className="px-3 py-1 bg-green-400/90 text-black text-xs font-medium rounded-full">
                      Technology
                    </span>
                  </div>
                </div>

                <div className="post-info p-5">
                  <div className="meta-info flex items-center space-x-4 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} className="text-green-400" />
                      Mar 2024
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} className="text-green-400" />5 min read
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300 line-clamp-2">
                    <a href={post.url}>{post.title}</a>
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {post.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                    <div className="author-info flex items-center gap-2">
                      <div className="author-image w-8 h-8 rounded-full overflow-hidden ring-2 ring-green-400/20">
                        <img
                          src={richaImage}
                          alt="Richa Agrawal"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-gray-300 text-sm">
                        Richa Agrawal
                      </span>
                    </div>
                    <motion.a
                      href={post.url}
                      className="read-more flex items-center gap-1 text-green-400 text-sm font-medium group-hover:gap-2 transition-all duration-300"
                    >
                      Read More
                      <ChevronRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <motion.a
            href="https://agricha-13.medium.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-400 to-green-500 text-black font-semibold rounded-lg shadow-lg hover:from-green-500 hover:to-green-600 transition-all duration-300"
          >
            View All Articles
            <ChevronRight size={18} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
