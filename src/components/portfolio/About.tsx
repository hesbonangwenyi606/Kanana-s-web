import React, { useEffect, useState, useRef } from 'react';

const About: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Parallax effect (vertical + horizontal)
  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * 0.3); // vertical parallax
      setOffsetX(window.scrollY * 0.05); // horizontal parallax
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fade-in / slide-up content
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (contentRef.current) observer.observe(contentRef.current);
    return () => {
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  const highlights = [
    "Licensed Survey Professional",
    "Certified in AutoCAD Civil 3D",
    "Advanced GPS & Total Station Operations",
    "50+ Successfully Completed Projects",
  ];

  return (
    <section
      id="about"
      className="relative py-20 bg-gray-900 text-white overflow-hidden"
    >
      {/* Animated & Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transform scale-100 animate-zoomBlur"
        style={{
          backgroundImage: "url('https://example.com/new-image.jpg')",
          transform: `translate(${offsetX}px, ${offsetY}px) scale(1)`,
        }}
      ></div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div
        ref={contentRef}
        className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Profile Picture */}
          <div className="md:col-span-1 flex justify-center md:justify-start">
            <img
              src="https://i.pinimg.com/736x/64/ca/d0/64cad05ccb98eed1c6b166badd5e0550.jpg" // Replace with your profile picture URL
              alt="Weddy Kanana"
              className="w-700 h-700 md:w-480 md:h-900 rounded-full shadow-2xl object-cover border-4 border-white"
            />
          </div>

          {/* Text + Highlights */}
          <div className="md:col-span-1">
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
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start opacity-0 transform translate-y-6 transition-all duration-700`}
                  style={{
                    transitionDelay: `${index * 200}ms`,
                    ...(isVisible ? { opacity: 1, transform: 'translateY(0)' } : {}),
                  }}
                >
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
        </div>
      </div>

      {/* Tailwind custom animation */}
      <style>
        {`
          @keyframes zoomBlur {
            0% { transform: scale(1) translateZ(0); filter: blur(0px); }
            50% { transform: scale(1.05) translateZ(0); filter: blur(1.5px); }
            100% { transform: scale(1) translateZ(0); filter: blur(0px); }
          }
          .animate-zoomBlur {
            animation: zoomBlur 20s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default About;
