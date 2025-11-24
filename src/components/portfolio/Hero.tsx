import React from 'react';

const Hero: React.FC = () => {
  // Smooth scroll functions
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://d64gsuwffb70l.cloudfront.net/691f328154ac71f65665617a_1763652287344_5849d10b.webp)',
          filter: 'brightness(0.4)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl">
        <h1 className="text-6xl md:text-7xl font-bold mb-4 tracking-tight">
          Weddy Kanana
        </h1>
        <p className="text-2xl md:text-3xl mb-3 text-green-300 font-semibold">
          Survey Professional
        </p>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          3 Years of Precision & Excellence
        </p>
        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-200">
          Delivering accurate land surveys, topographic mapping, and construction staking 
          services across Kenya with cutting-edge technology and meticulous attention to detail.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToProjects}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            View Projects
          </button>
          <button
            onClick={scrollToContact}
            className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
