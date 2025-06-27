import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'alvingustav2@gmail.com',
      href: 'mailto:alvingustav2@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+62 896-5730-2721',
      href: 'tel:+6289657302721'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'alvin-gustav',
      href: 'https://www.linkedin.com/in/alvin-gustav-727329132/?originalSubdomain=id'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'alvingustav',
      href: 'https://github.com/alvingustav'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-12 gradient-text">
            Get In Touch
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a conversation about data science and fintech.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target={contact.label === 'Email' || contact.label === 'Phone' ? '_self' : '_blank'}
                  rel={contact.label === 'Email' || contact.label === 'Phone' ? '' : 'noopener noreferrer'}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900 rounded-2xl p-6 card-hover flex items-center gap-4"
                >
                  <div className="bg-white rounded-full p-3">
                    <IconComponent className="w-6 h-6 text-black" />
                  </div>
                  <div className="text-left">
                    <p className="text-gray-400 text-sm">{contact.label}</p>
                    <p className="text-white font-medium">{contact.value}</p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
