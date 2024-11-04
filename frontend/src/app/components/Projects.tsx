import React from "react";

interface Project {
  title: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Project 1",
    description: "Description of project 1",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Project 2",
    description: "Description of project 2",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Project 3",
    description: "Description of project 3",
    image: "https://via.placeholder.com/150",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="w-full bg-bg_dark py-20 text-center">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8 text-light_text">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition hover:shadow-xl py-20">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
