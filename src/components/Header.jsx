import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { PiReadCvLogoFill } from "react-icons/pi";
const Header = () => {
  return (
    <>
      <div className="flex items-center h-16 my-5 mx-10 border-2 bg-slate-500 rounded-3xl drop-shadow-2xl border-white">
        <div className="text-center mx-2 text-xl w-52 text-white font-bold font-mono ">
          <span className=" cursor-pointer object-contain hover:text-3xl mx-1 transition-all duration-300 ">
            👋🏻
          </span>
          <span className="font-mono">Rohan M. </span>
        </div>

        <div className=" flex justify-end w-full mr-5">
          <div className="mx-2 text-white drop-shadow-lg  ">
            <PiReadCvLogoFill
              size={30}
              className="object-contain hover:scale-150 transition-transform duration-300 hover:cursor-pointer "
            />
          </div>
          <div className="mx-2 text-white drop-shadow-lg ">
            <IoLogoLinkedin
              size={30}
              className="object-contain hover:scale-150 transition-transform duration-300 hover:cursor-pointer "
            />
          </div>

          <div className="mx-2 text-white drop-shadow-lg  ">
            <FaGithub
              size={30}
              className="object-contain hover:scale-150 transition-transform duration-300 hover:cursor-pointer "
            />
          </div>
          <div className="mx-2 text-white drop-shadow-lg ">
            <FaXTwitter
              size={30}
              className="object-contain hover:scale-150 transition-transform duration-300 hover:cursor-pointer "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
