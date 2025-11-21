import React from 'react';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Weddy Kanana</h3>
            <p className="text-gray-400">Professional Survey Services</p>
            <p className="text-gray-400 mt-2">3 Years of Excellence</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['about', 'projects', 'services', 'contact'].map((id) => (
                <li key={id}>
                  <button 
                    onClick={() => scrollToSection(id)} 
                    className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-400 transition-colors"
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Boundary Surveys</li>
              <li>Topographic Mapping</li>
              <li>Construction Staking</li>
              <li>ALTA/NSPS Surveys</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {/* LinkedIn SVG */}
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="WhatsApp"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {/* WhatsApp SVG */}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Weddy Kanana. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
