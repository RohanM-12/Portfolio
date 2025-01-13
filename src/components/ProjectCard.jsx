"use client";

import {  CardBody, CardItem } from "./ui/3d-card";
import { Tooltip } from "antd";
import Image from "next/image";
import React from "react";
import { FaGithub, FaLink, FaYoutube } from "react-icons/fa";
import { CardContainer } from "./ui/3d-card";


const ProjectCard = ({ title, description, gitHub, liveLink, youTubeLink, imgSrc }) => {
  return (
    <CardContainer containerClassName="m-5 w-full max-w-md mx-auto">
      <CardBody className="bg-stone-500/30 z-50 backdrop-blur-3xl rounded-2xl p-4 sm:p-6 shadow-lg">
        {/* Image Section */}
        <CardItem translateZ={30} className="overflow-hidden rounded-lg">
          <Image
            className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            width={500}
            height={300}
            src={imgSrc}
            alt={title}
          />
        </CardItem>

        {/* Title and Description */}
        <CardItem translateZ={20} className="mt-4">
          <h3 className="text-pink-500 font-semibold text-lg sm:text-xl mb-2">
            • {title}
          </h3>
          <p className="text-white text-sm sm:text-base mx-1 sm:mx-3">
            {description}
          </p>
        </CardItem>

        {/* Icons Section */}
        <CardItem translateZ={10} className="flex justify-around items-center pt-4">
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
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default ProjectCard;
