"use client";
import React from "react";
import useProjects from "../hooks/useProjects";

const Projects: React.FC = () => {
  const { data: projects, error, isLoading } = useProjects();

  console.log("miv");
  console.log(projects);

  if (isLoading) return <p>Loading projects...</p>;
  if (error) {
    console.error("Error loading projects:", error);
    return <p>Error loading projects: {error}</p>;
  }

  return (
    <section id="projects" className="w-full bg-bg_dark py-20 text-center">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8 text-light_text">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {!isLoading &&
            projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition hover:shadow-xl py-20">
                <img src={project.img_url || "https://via.placeholder.com/150"} alt={project.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">{project.name}</h2>
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
