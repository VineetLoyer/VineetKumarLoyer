import React, { useState } from 'react';
import { Github, ExternalLink, X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "NutriVision",
    image: "./assets/projects/nutrivision.png", // Using placeholder for demo
    shortDescription: "An end-to-end automated solution to analyze food labels and calculate a health score.",
    fullDescription: "NutriVision leverages image recognition and text extraction to analyze food labels and calculate comprehensive health scores. The system provides detailed nutritional insights and recommendations based on the analyzed data.",
    tags: ["Computer Vision", "Machine Learning", "OCR"],
    github: "https://github.com/VineetLoyer/NutriVision",
    demo: null
  },
  {
    id: 2,
    title: "Chat-DB",
    image: "./assets/projects/chatdb.png", // Using placeholder for demo
    shortDescription: "A full-stack application that simplifies database interaction.",
    fullDescription: "Chat-DB allows users to upload datasets, explore database schemas, execute complex queries, and generate queries from natural language inputs. The project supports both MySQL and MongoDB, offering a seamless experience for working with structured and unstructured data.",
    tags: ["Full Stack", "Natural Language Processing", "Database"],
    github: "https://github.com/VineetLoyer/ChatDB",
    demo: null
  },
  {
    id: 3,
    title: "Real-Time Twitter Sentiment Analysis Pipeline",
    image: "./assets/projects/analysispipeline.png", // Using placeholder for demo
    shortDescription: "Real-time data pipeline processing 5K tweets/hour.",
    fullDescription: "Created real-time data pipeline processing 5K tweets/hour leveraging AWS Lambda, Kinesis Data Streams, and DynamoDB. The system performs sentiment analysis on tweets and provides real-time insights.",
    tags: ["AWS", "Big Data", "Sentiment Analysis"],
    github: null,
    demo: null
  }
];

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative">
      {/* Main Card */}
      <div 
        className={`bg-white/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all duration-300 h-[250px] flex flex-col
          ${isExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        onClick={() => setIsExpanded(true)}
      >
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-48 object-cover"
        />
        <h2 className="text-xl font-bold p-4 text-center text-gray-800">
          {project.title}
        </h2>
      </div>

      {/* Expanded View */}
      {isExpanded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover"
              />
                <img 
                src={imageError ? '/api/placeholder/400/300' : project.image}
                alt={project.title} 
                className="w-full h-[300px] object-cover"
                onError={handleImageError}
                />
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute top-4 right-4 bg-white rounded-full p-1 shadow-lg hover:bg-gray-100"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">{project.title}</h2>
              
              <p className="text-gray-600">{project.fullDescription}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                  >
                    <Github className="w-5 h-5" />
                    View Source
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ProjectsGrid = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsGrid;