import React from "react";
import ProjectCard from "./ProjectCard";
import Image from "next/image";

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
    </section>
  );
};

export default Projects;
