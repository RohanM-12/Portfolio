import { Tooltip } from "antd";
import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const ProjectCard = ({
  title,
  description,
  gitHub,
  liveLink,
  youTubeLink,
  imgSrc,
}) => {
  return (
    <div className="bg-gray-950 rounded-lg w-96 p-5 m-5 drop-shadow-2xl">
      <div className="px-0 py-1">
        <Image
          className="rounded-lg drop-shadow-xl hover:scale-105 transition-transform duration-300"
          width={500}
          height={500}
          src={imgSrc}
        />
      </div>
      <div>
        <div className="m-1 font-bold text-pink-500">• {title}</div>
        <div className="text-white text-sm mx-3">- {description}.</div>
      </div>
      <div className="grid grid-cols-3 pt-3">
        <div className="flex justify-center hover:cursor-pointer">
          <Tooltip title={"GitHub"} placement="left">
            <a href={gitHub}>
              <FaGithub
                size={26}
                className="text-white  hover:scale-125 transition-transform duration-300 "
              />
            </a>
          </Tooltip>
        </div>
        <div className="flex justify-center hover:cursor-pointer">
          <Tooltip title={"YouTube"} placement="bottom">
            <a href={gitHub}>
              <FaYoutube
                size={30}
                className="text-white  hover:scale-125 transition-transform duration-300 "
              />
            </a>
          </Tooltip>
        </div>
        <div className="flex justify-center hover:cursor-pointer">
          <Tooltip title={"Live link"} placement="right">
            <a href={liveLink}>
              <FaLink
                size={26}
                className="text-white  hover:scale-125 transition-transform duration-300 "
              />
            </a>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
