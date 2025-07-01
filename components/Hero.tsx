import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-4">
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto mb-8 bg-gray-800 rounded-full flex items-center justify-center">
            <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">
            Alvin Gustav
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-2">
            Data Science Student
          </p>
          
          <p className="text-lg text-gray-500">
            Bandung, Indonesia
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Specializing in Fintech solutions with expertise in stock prediction, 
          machine learning, and cloud-based data engineering
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="mailto:alvingustav2@gmail.com"
            className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            Get In Touch
          </a>
          <a
            href="#portfolio"
            className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-colors"
          >
            View Portfolio (4 Projects)
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </motion.div>
    </section>
  );
};

export default Hero;
