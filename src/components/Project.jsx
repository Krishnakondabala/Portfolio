import React from "react";

const projects = [
  {
    title: "Crop Protection Using ML",
    description:
      "Using ML, AI-powered deterrents, and predictive analytics help protect crops from animals.",
    github: "#",
    liveDemo: "#",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio built using React, Bootstrap, and Framer Motion.",
    github: "#",
    liveDemo: "#",
  },
  {
    title: "Responsive Web Pages",
    description: "Responsive web pages built using HTML, CSS, JS, and Bootstrap.",
    github: "#",
    liveDemo: "#",
  },
];

const Projects = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card p-3 shadow-sm">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.description}</p>
              <div className="d-flex">
                <a href={project.github} className="btn btn-dark me-2">
                  GitHub
                </a>
                <a href={project.liveDemo} className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
