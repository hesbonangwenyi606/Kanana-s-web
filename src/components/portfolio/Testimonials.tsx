import React, { useState } from 'react';

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      name: 'David Mwangi',
      role: 'Property Developer',
      company: 'Greenfield Developers',
      text: 'Weddy delivered exceptional accuracy on our 50-lot residential development. His attention to detail and professional approach made the entire surveying process seamless.',
      rating: 5
    },
    {
      name: 'Sarah Ochieng',
      role: 'Project Manager',
      company: 'Urban Towers Ltd',
      text: 'Outstanding work on our commercial complex. The construction staking was precise, and the as-built survey documentation was thorough and delivered on time.',
      rating: 5
    },
    {
      name: 'James Kimani',
      role: 'County Engineer',
      company: 'Machakos County Government',
      text: 'Professional topographic mapping services that exceeded our expectations. The detailed terrain data was instrumental in our infrastructure planning.',
      rating: 5
    },
    {
      name: 'Grace Wanjiru',
      role: 'Real Estate Attorney',
      company: 'Investment Group',
      text: 'The ALTA survey for our corporate campus acquisition was comprehensive and met all requirements. Highly recommend for commercial transactions.',
      rating: 5
    }
  ];

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">Client Testimonials</h2>
        <p className="text-center text-green-100 mb-12 text-lg">
          Trusted by professionals across Kenya
        </p>
        
        <div className="bg-white text-gray-900 rounded-2xl shadow-2xl p-8 md:p-12 relative">
          <div className="text-6xl text-green-600 mb-4">"</div>
          <p className="text-xl mb-6 leading-relaxed">{testimonials[current].text}</p>
          <div className="flex items-center mb-4">
            {[...Array(testimonials[current].rating)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <div>
            <p className="font-bold text-lg">{testimonials[current].name}</p>
            <p className="text-gray-600">{testimonials[current].role}, {testimonials[current].company}</p>
          </div>

          <div className="flex justify-between mt-8">
            <button 
              onClick={prev}
              className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={next}
              className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
