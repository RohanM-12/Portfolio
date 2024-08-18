import React from "react";
import { FaNodeJs } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { FaCircleMinus } from "react-icons/fa6";
import { BsArrowUpLeftCircleFill } from "react-icons/bs";
const ThingsAboutMe = () => {
  return (
    <div className="rounded-xl bg-gray-100 w-2/6 h-80 m-10 border-2 border-pink-300">
      <span className="flex float-start items-center ml-2 mt-3 drop-shadow-2xl">
        <div className="bg-red-400  mx-2 text-red-400 rounded-full w-5 h-5"></div>
        <div className="bg-green-400 mx-2 text-green-400 rounded-full w-5 h-5"></div>
        <div className="bg-yellow-400 mx-2 text-yellow-400  rounded-full w-5 h-5"></div>
      </span>
      <span className="flex justify-center items-center drop-shadow-2xl">
        <span className="font-mono font-bold flex justify-center items-center mt-3 -ml-16">
          <FaNodeJs className="text-green-800 mx-1" size={20} />
          aboutRohan.json
        </span>
      </span>
      <div className="border-t-2 my-2 mx-1 drop-shadow-2xl border-gray-400"></div>
    </div>
  );
};

export default ThingsAboutMe;
