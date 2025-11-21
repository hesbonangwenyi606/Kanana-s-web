import React from 'react';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-20 bg-gray-900 text-white"
      style={{
        backgroundImage: "url('https://example.com/new-image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg mb-4">
              With 3 years of dedicated experience in land surveying, I specialize in delivering 
              precise and reliable surveying services across residential, commercial, and 
              infrastructure projects throughout Kenya.
            </p>
            <p className="text-lg mb-6">
              My expertise spans boundary surveys, topographic mapping, construction staking, 
              and ALTA/NSPS surveys. I utilize state-of-the-art GPS equipment, total stations, 
              and CAD software to ensure accuracy and efficiency in every project.
            </p>
            <div className="space-y-3">
              {[
                "Licensed Survey Professional",
                "Certified in AutoCAD Civil 3D",
                "Advanced GPS & Total Station Operations",
                "50+ Successfully Completed Projects",
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Optional: You can remove the image div since it's now a background */}
        </div>
      </div>
    </section>
  );
};

export default About;
