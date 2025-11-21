import React from 'react';

interface Skill {
  name: string;
  level: number;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'AutoCAD Civil 3D', level: 90 },
    { name: 'GPS & Total Station', level: 95 },
    { name: 'Topographic Mapping', level: 88 },
    { name: 'Boundary Surveys', level: 92 },
    { name: 'Construction Staking', level: 85 },
    { name: 'ALTA/NSPS Surveys', level: 80 },
    { name: 'GIS Software', level: 82 },
    { name: 'Survey Data Processing', level: 90 }
  ];

  return (
    <section className="py-20 bg-gray-50" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Technical Skills</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Proficiency across surveying technologies and methodologies
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-gray-800">{skill.name}</span>
                <span className="text-green-600 font-bold">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
