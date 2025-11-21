import React from 'react';
import { Project } from '../../data/projectsData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-96 object-cover rounded-t-2xl"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-sm text-gray-500 mb-1">Category</p>
              <p className="font-semibold text-gray-900 capitalize">{project.category}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Client</p>
              <p className="font-semibold text-gray-900">{project.client}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Location</p>
              <p className="font-semibold text-gray-900">{project.location}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Completion Date</p>
              <p className="font-semibold text-gray-900">{project.date}</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Project Description</h3>
            <p className="text-gray-700 leading-relaxed">{project.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
