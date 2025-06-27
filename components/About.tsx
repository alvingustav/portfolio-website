import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
            About Me
          </h2>
          
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
            <p className="text-lg text-gray-300 leading-relaxed">
              Currently pursuing a degree in Data Science with a GPA of 3.75/4.0, I bridge academic expertise with deep understanding of capital market dynamics and advanced data engineering techniques. My specialization encompasses machine learning for stock prediction, evolutionary algorithms, and cloud-based data transformation using ETL processes.[1]
            </p>
            <br />
            <p className="text-lg text-gray-300 leading-relaxed">
              I am passionate about developing robust, data-driven solutions for the Fintech sector, focusing on algorithmic trading, risk assessment, and fraud detection to enhance efficiency and security in financial services. My goal is to leverage cutting-edge technologies including predictive modeling and database optimization to create innovative solutions that transform how financial markets operate.[1]
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
