import { Tooltip } from "antd";
import Image from "next/image";
import React from "react";
import { FaGithub, FaLink, FaYoutube } from "react-icons/fa";

const ProjectCard = ({
  title,
  description,
  gitHub,
  liveLink,
  youTubeLink,
  imgSrc,
}) => {
  return (
    <div className="bg-gray-950 rounded-2xl p-4 sm:p-6 m-5 w-full max-w-md mx-auto shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
      {/* Image Section */}
      <div className="overflow-hidden rounded-lg">
        <Image
          className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          width={500}
          height={300}
          src={imgSrc}
          alt={title}
        />
      </div>

      {/* Title and Description */}
      <div className="mt-4">
        <h3 className="text-pink-500 font-semibold text-lg sm:text-xl mb-2">
          • {title}
        </h3>
        <p className="text-white text-sm sm:text-base mx-1 sm:mx-3">
          {description}
        </p>
      </div>

      {/* Icons Section */}
      <div className="flex justify-around items-center pt-4">
        {/* GitHub Icon */}
        {gitHub && (
          <Tooltip title={"GitHub"} placement="top">
            <a href={gitHub} target="_blank" rel="noopener noreferrer">
              <FaGithub
                size={28}
                className="text-white hover:text-pink-500 hover:scale-125 transition-transform duration-300"
              />
            </a>
          </Tooltip>
        )}

        {/* YouTube Icon */}
        {youTubeLink && (
          <Tooltip title={"YouTube"} placement="top">
            <a href={youTubeLink} target="_blank" rel="noopener noreferrer">
              <FaYoutube
                size={28}
                className="text-white hover:text-pink-500 hover:scale-125 transition-transform duration-300"
              />
            </a>
          </Tooltip>
        )}

        {/* Live Link Icon */}
        {liveLink && (
          <Tooltip title={"Live Link"} placement="top">
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <FaLink
                size={28}
                className="text-white hover:text-pink-500 hover:scale-125 transition-transform duration-300"
              />
            </a>
          </Tooltip>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
