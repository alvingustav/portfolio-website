import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const technicalSkills = [
    { name: 'Data Analysis', level: 'Intermediate' },
    { name: 'Cloud Computing', level: 'Beginner' },
    { name: 'Marketing', level: 'Intermediate' },
    { name: 'Computer Technology', level: 'Beginner' }
  ];

  const softSkills = [
    'Commitment',
    'Critical Thinking', 
    'Emotional Intelligence',
    'Negotiation',
    'Teamwork'
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Technical Skills</h3>
              <div className="space-y-4">
                {technicalSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-black rounded-lg p-4"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-white">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Soft Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-black rounded-lg p-4 text-center"
                  >
                    <span className="font-medium text-white">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
