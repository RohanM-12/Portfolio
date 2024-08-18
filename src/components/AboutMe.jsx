import { Image } from "antd";
import React from "react";

const AboutMe = () => {
  return (
    <section>
      <div className="flex justify-center items-center gap-3">
        <span>
          <Image height={80} width={80} className="mr-2" src="/lift.png" />
        </span>
        <span className="text-3xl text-white font-bold ">ABOUT ME</span>
        <span>
          <Image height={60} width={60} className="mx-2" src="/laptop.png" />
        </span>
      </div>
    </section>
  );
};

export default AboutMe;
