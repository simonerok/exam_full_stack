"use client";

import React from "react";
import useProjects from "../hooks/useProjects";

const Projects: React.FC = () => {
  const { data: projects = [], isLoading } = useProjects();

  if (isLoading) return <p>Loading projects...</p>;

  return (
    <section id="projects" className="w-full bg-bg_dark py-12 text-center">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-light_text">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.length > 0 ? (
            projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl overflow-hidden transition-transform transform hover:-translate-y-1 flex flex-col" style={{ height: "400px" }}>
                {/* Image */}
                <div className="flex-grow">
                  <img src={project.img_url || "/splash.avif"} alt={project.name} className="w-full h-full object-cover" />
                </div>

                {/* Overlay for text */}
                <div className="bg-white text-bg_darker bg-opacity-60 p-4 flex flex-col justify-end">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-2">
                    {["Design", "Development", "WordPress"].map((tag, index) => (
                      <span key={index} className="text-xs text-bg_darker border border-bg_darker rounded-[9999px] px-2 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* Title */}
                  <h2 className="text-lg font-semibold text-bg_darker text-left">{project.name}</h2>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-gray-500">Projects loading</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
