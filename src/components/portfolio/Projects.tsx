import React, { useState } from 'react';
import { projects } from '../../data/projectsData';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

// Define a type for your projects
export interface Project {
  id: number;
  name: string;
  category: 'residential' | 'commercial' | 'topographic' | 'alta';
  description: string;
  imageUrl: string;
  // Add other fields your projects have
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | Project['category']>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((p) => p.category === filter);

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'residential', label: 'Residential' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'topographic', label: 'Topographic' },
    { value: 'alta', label: 'ALTA' },
  ];

  return (
    <section className="py-20 bg-white" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Featured Projects
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          A showcase of precision surveying across diverse project types
        </p>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value as any)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ease-in-out ${
                filter === cat.value
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:shadow-md'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length === 0 ? (
            <p className="text-center text-gray-500 col-span-full">
              No projects found for this category.
            </p>
          ) : (
            filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))
          )}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
