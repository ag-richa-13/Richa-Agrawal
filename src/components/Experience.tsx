import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-gray-400">My journey in software development</p>
        </motion.div>

        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute left-0 top-0 w-1 h-full bg-indigo-600/20 rounded"></div>
            <div className="ml-6">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-indigo-600 rounded-full"></div>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                <div className="flex items-center mb-4">
                  <Briefcase className="h-5 w-5 text-indigo-400 mr-2" />
                  <div>
                    <h3 className="text-xl font-bold">Software Development Engineer - 1</h3>
                    <p className="text-indigo-400">MyTeam11 Fantasy Sports</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-gray-300">
                  <li>• Developed and launched Power Ludo using Unity and C#</li>
                  <li>• Led front-end development and UI/UX optimization</li>
                  <li>• Implemented in-app updates using Android Library</li>
                  <li>• Enhanced system reliability and user satisfaction</li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="ml-6">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-indigo-600 rounded-full"></div>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                <div className="flex items-center mb-4">
                  <Briefcase className="h-5 w-5 text-indigo-400 mr-2" />
                  <div>
                    <h3 className="text-xl font-bold">Web Developer Intern</h3>
                    <p className="text-indigo-400">Labdox</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-gray-300">
                  <li>• Created portfolios and landing pages using Swipe Pages</li>
                  <li>• Developed HighOctane gaming zone website</li>
                  <li>• Collaborated with cross-functional teams</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}