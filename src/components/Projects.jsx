import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section>
      <div className="text-center text-3xl font-mono font-bold">
        Projects.<span className="text-orange-700">built()</span>
      </div>
      <div>
        <ProjectCard />
      </div>
    </section>
  );
};

export default Projects;
