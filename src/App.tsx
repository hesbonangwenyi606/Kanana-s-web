import React, { useEffect, useState } from 'react';
import { Project } from '../../data/projectsData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (project) setVisible(true);
  }, [project]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300); // match transition duration
  };

  if (!project) return null;

  return (
    <div 
      className={`fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
      onClick={handleClose}
    >
      <div 
        className={`bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-transform duration-300 ${visible ? "scale-100" : "scale-95"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-64 md:h-96 object-cover rounded-t-2xl"
          />
          <button 
            onClick={handleClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{project.title}</h2>
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
