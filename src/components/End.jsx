import { Image } from "antd";
import React from "react";
import Socials from "./Socials";

const End = () => {
  return (
    <>
      <div className="p-10">
        <Image src={"/Duck.gif"} width={200} height={200} />
        <div className="text-center">
          <span className="font-bold drop-shadow-xl text-amber-700 ">
            Ohh! You Reached end !!
          </span>
          <div>
            <Socials />
          </div>
        </div>
      </div>
    </>
  );
};

export default End;
