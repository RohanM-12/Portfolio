import { Image } from "antd";
import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
import ThingsAboutMe from "./ThingsAboutMe";
const AboutMe = () => {
  return (
    <section>
      <div className="flex justify-center items-center gap-3">
        <span>
          <Image
            draggable={false}
            preview={false}
            height={80}
            width={80}
            className="mr-2"
            src="/lift.png"
          />
        </span>
        <span className="text-2xl text-orange-500 font-bold ">ABOUT ME</span>
        <span>
          <Image
            draggable={false}
            preview={false}
            height={60}
            width={60}
            className="mx-2"
            src="/laptop.png"
          />
        </span>
      </div>
      <div className="flex justify-center items-center font-bold text-2xl font-mono text-pink-600">
        <span className="mx-3 mb-3">
          <ImQuotesLeft size={20} className="text-pink-500" />
        </span>
        <span className="font-mono animate-pulse">I LIFT 💪🏻 & I CODE 💻</span>
        <span className="mx-3 mb-3">
          <ImQuotesRight size={20} className="text-pink-500" />
        </span>
      </div>
      <div>
        <ThingsAboutMe />
      </div>
    </section>
  );
};

export default AboutMe;
