import React from 'react';
import Navigation from './portfolio/Navigation';
import Hero from './portfolio/Hero';
import About from './portfolio/About';
import Skills from './portfolio/Skills';
import Projects from './portfolio/Projects';
import Services from './portfolio/Services';
import Testimonials from './portfolio/Testimonials';
import Contact from './portfolio/Contact';
import Footer from './portfolio/Footer';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default AppLayout;

