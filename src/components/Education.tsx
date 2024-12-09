import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="py-20 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <p className="text-gray-400">Academic Background and Achievements</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900 rounded-2xl p-8 shadow-xl"
        >
          <div className="flex items-start space-x-6">
            <div className="bg-indigo-600 p-4 rounded-xl">
              <GraduationCap className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">B.Tech in Information Technology</h3>
              <p className="text-xl text-indigo-400 mb-4">Engineering College Ajmer</p>
              <div className="flex flex-wrap gap-4 mb-6">
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">CGPA: 7.53</span>
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">2019 - 2023</span>
              </div>
              <p className="text-gray-400">
                Focused on core computer science concepts, software development, and modern technologies.
                Participated in various technical competitions and workshops to enhance practical skills.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}