import React from "react";
import { motion } from "framer-motion";
import { blogPosts } from "../data/portfolio";
import richaImage from "../assets/images/richa.jpg";
import { BookOpen, Calendar, Clock, ChevronRight } from "lucide-react";

// Import the CSS file
import "../assets/style/blogs.css";

const Blogs = () => {
  return (
    <section id="blogs" className="py-12 md:py-20 relative w-full">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -top-48 -left-48"></div>
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -bottom-48 -right-48"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative w-full">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block"
          >
            <h2 className="relative inline-block">
              <span className="relative z-10 text-3xl md:text-4xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-purple-500 to-pink-500">
                Dev Quest Logs
              </span>
              <div className="flex items-center justify-center space-x-4 mt-2">
                <span className="h-[1px] w-20 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></span>
                <BookOpen className="w-5 h-5 text-purple-500" />
                <span className="h-[1px] w-20 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></span>
              </div>
            </h2>
          </motion.div>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="blog-card group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl transform group-hover:scale-[1.02] transition-transform duration-300"></div>
                <div className="relative overflow-hidden rounded-xl border border-purple-500/20 backdrop-blur-sm bg-black/40">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="category absolute top-4 left-4">
                    <span className="px-4 py-1.5 text-xs font-medium rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25">
                      Dev Blog
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="meta-info flex items-center justify-center space-x-4 text-xs text-gray-400 mb-3">
                      <span className="flex items-center gap-2 bg-purple-500/10 px-3 py-1 rounded-full">
                        <Calendar size={12} className="text-purple-400" />
                        Mar 2024
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white text-center mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 transition-all duration-300">
                      <a href={post.url}>{post.title}</a>
                    </h3>

                    <motion.a
                      href={post.url}
                      className="flex items-center justify-center gap-2 text-purple-400 text-sm font-medium group-hover:text-pink-400 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      Read More
                      <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <motion.a
            href="https://agricha-13.medium.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300"
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
