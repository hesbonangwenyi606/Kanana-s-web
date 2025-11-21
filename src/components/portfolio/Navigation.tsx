import React, { useState } from 'react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button onClick={scrollToTop} className="text-2xl font-bold text-gray-900">
            WK
          </button>

          <div className="hidden md:flex space-x-8">
            <button onClick={scrollToTop} className="text-gray-700 hover:text-green-600 font-semibold transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-green-600 font-semibold transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-green-600 font-semibold transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-green-600 font-semibold transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-green-600 font-semibold transition-colors">
              Contact
            </button>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <button onClick={scrollToTop} className="block w-full text-left text-gray-700 hover:text-green-600 font-semibold">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-700 hover:text-green-600 font-semibold">
              About
            </button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left text-gray-700 hover:text-green-600 font-semibold">
              Projects
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left text-gray-700 hover:text-green-600 font-semibold">
              Services
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-700 hover:text-green-600 font-semibold">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
