import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen } from 'lucide-react';

export function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Achievements & Publications</h2>
          <p className="text-gray-400">Recognition and knowledge sharing</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800 p-6 rounded-xl border border-gray-700"
          >
            <div className="flex items-center mb-4">
              <Award className="h-8 w-8 text-indigo-400 mr-3" />
              <h3 className="text-xl font-bold text-white">Recognition</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="h-2 w-2 bg-indigo-400 rounded-full mt-2 mr-3"></span>
                <p className="text-gray-300">Recognized as 'Quality Enforcer' at MyTeam11 Fantasy Sports</p>
              </li>
              <li className="flex items-start">
                <span className="h-2 w-2 bg-indigo-400 rounded-full mt-2 mr-3"></span>
                <p className="text-gray-300">Awarded 'Intern of the Month' at Labdox</p>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800 p-6 rounded-xl border border-gray-700"
          >
            <div className="flex items-center mb-4">
              <BookOpen className="h-8 w-8 text-indigo-400 mr-3" />
              <h3 className="text-xl font-bold text-white">Technical Blogs</h3>
            </div>
            <ul className="space-y-4">
              <li>
                <a href="#" className="block p-4 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors">
                  <h4 className="font-semibold text-white">Streamlined In-App Updates: Unity & Custom Android Library</h4>
                  <p className="text-gray-400 mt-2">Exploring the integration of seamless updates in Unity games</p>
                </a>
              </li>
              <li>
                <a href="#" className="block p-4 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors">
                  <h4 className="font-semibold text-white">Bringing Tic-Tac-Toe Online: Build a Multiplayer Game with PUN2</h4>
                  <p className="text-gray-400 mt-2">Step-by-step guide to implementing multiplayer functionality</p>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}