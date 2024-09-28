import React from "react";
import ProjectCard from "./ProjectCard";
import Image from "next/image";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Link from "next/link";
const Projects = () => {
  return (
    <section>
      <div className="flex justify-center items-center text-3xl font-mono font-bold">
        <span>
          <Image
            className="mx-2 rounded-full"
            width={70}
            height={70}
            src={"/build.gif"}
          />
        </span>
        Projects.<span className="text-orange-700">built()</span>
      </div>
      <div className="grid   grid-cols-1 sm:grid-cols-3  ">
        <ProjectCard
          title={"EcryptShare"}
          description={
            "An E-2-E encrypted document sharing portal with access logging"
          }
          imgSrc={"/Projects/EncryptShare.png"}
        />
        <ProjectCard
          title={"DevsConnect"}
          description={"Social media like platform to showcase projects"}
          imgSrc={"/Projects/DevsConnect.png"}
        />
        <ProjectCard
          title={"QuickBuy"}
          description={
            "An e-commerce website with content based recommendation system"
          }
          imgSrc={"/Projects/QuickBuy.png"}
        />
      </div>
      <Link href={"https://github.com/RohanM-12"}>
        <div className="flex px-5 py-2 justify-center items-center font-semibold font-mono text-orange-500 text-xl drop-shadow-2xl">
          checkout more projects <FaArrowAltCircleRight className="mx-2" />
        </div>
      </Link>
    </section>
  );
};

export default Projects;
