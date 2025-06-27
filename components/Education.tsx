import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
            Education
          </h2>
          
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
            <div className="flex items-start gap-6">
              <div className="bg-white rounded-full p-3 flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-black" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Bachelor of Science in Data Science
                </h3>
                <p className="text-xl text-gray-300 mb-4">
                  Telkom University
                </p>
                <div className="flex flex-wrap gap-4 text-gray-400">
                  <span>GPA: 3.75/4.0</span>
                  <span>•</span>
                  <span>Undergraduate</span>
                  <span>•</span>
                  <span>Bandung, Indonesia</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
