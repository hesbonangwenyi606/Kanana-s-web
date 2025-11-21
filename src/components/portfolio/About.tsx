import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://i.pinimg.com/736x/c8/e7/5b/c8e75bcde0fcb4b2db91d1b4f79f11ef.jpg"
              alt="Wenddy Kanana"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
            <p className="text-lg text-gray-700 mb-4">
              With 3 years of dedicated experience in land surveying, I specialize in delivering 
              precise and reliable surveying services across residential, commercial, and 
              infrastructure projects throughout Kenya.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              My expertise spans boundary surveys, topographic mapping, construction staking, 
              and ALTA/NSPS surveys. I utilize state-of-the-art GPS equipment, total stations, 
              and CAD software to ensure accuracy and efficiency in every project.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">Licensed Survey Professional</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">Certified in AutoCAD Civil 3D</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">Advanced GPS & Total Station Operations</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">50+ Successfully Completed Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
