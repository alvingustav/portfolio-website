import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      id: 1,
      name: 'Indonesian Major Stock Prediction and Valuation', 
      description: 'A comprehensive financial analytics platform that combines advanced machine learning algorithms with Large Language Models to predict and valuate Indonesian major stocks. The system leverages historical market data, fundamental analysis, and sentiment analysis to provide accurate stock predictions and fair value assessments, helping investors make informed decisions in the Indonesian capital market.',
      technologies: ['Python', 'Streamlit', 'Azure'],
      url: 'https://indonesia-stock-prediction.graydesert-93f3e756.japaneast.azurecontainerapps.io/',
      status: 'Completed'
    },
    {
      id: 2,
      name: 'AI-Powered Marketplace Search Assistant',
      description: 'An intelligent chatbot system designed to help users discover products on marketplaces through natural language queries. Users can search using conversational phrases like "trending snacks in my area" or "viral women\'s t-shirts," and the system leverages LLM capabilities with PostgreSQL database integration to provide personalized product recommendations based on location, trends, and user preferences.',
      technologies: ['Azure', 'LLM', 'PostgreSQL'],
      url: 'https://rag-e5aiusnc6z4ks-ca.gentlesea-db421002.japaneast.azurecontainerapps.io/',
      status: 'Ongoing'
    },
    {
      id: 3,
      name: 'Indonesian Earthquake Distribution Analysis',
      description: 'An interactive data visualization dashboard analyzing earthquake patterns and distribution across Indonesia using Tableau. The dashboard provides comprehensive insights into seismic activity, including geographical distribution, magnitude patterns, and temporal trends, helping researchers and policymakers understand earthquake risks and patterns in the Indonesian archipelago.',
      technologies: ['Tableau', 'Data Visualization', 'Geospatial Analysis'],
      url: 'https://public.tableau.com/app/profile/alvin.gustav/viz/KatalogGempa/PetaSebaranTitikGempa',
      status: 'Completed'
    },
    {
      id: 4,
      name: 'Project Coming Soon',
      description: 'Another exciting project is currently in development. Stay tuned for updates on this innovative data science solution.',
      technologies: ['TBD'],
      url: '#',
      status: 'Planning'
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
            Portfolio
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Showcasing data science projects spanning stock prediction, AI-powered search systems, and geospatial analysis
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black rounded-2xl p-6 card-hover"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Completed' ? 'bg-green-900 text-green-300' :
                    project.status === 'Ongoing' ? 'bg-blue-900 text-blue-300' :
                    'bg-gray-700 text-gray-300'
                  }`}>
                    {project.status}
                  </span>
                  <Calendar className="w-4 h-4 text-gray-400" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.name}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {project.url !== '#' && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
