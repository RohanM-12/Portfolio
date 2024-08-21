import Image from "next/image";
import React from "react";

const ProjectCard = ({ title, description, gitHub, liveLink, imgSrc }) => {
  return (
    <div className="bg-blue-950 rounded-lg">
      <div className="p-5">
        <Image width={300} height={300} src={imgSrc} />
      </div>
      <div>
        <div className="text-white">{title}</div>
        <div className="text-white">{description}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
