import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Portfolio />
      <Contact />
    </Layout>
  );
};

export default Home;
