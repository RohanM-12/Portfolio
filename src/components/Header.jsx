import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { PiReadCvLogoFill } from "react-icons/pi";

const Header = () => {
  return (
    <div className="flex items-center justify-between h-16 my-5 mx-auto max-w-5xl px-4 sm:px-10 border-2 bg-gray-900 rounded-3xl shadow-2xl border-pink-600 transition-all duration-300">
      {/* Logo and Title */}
      <div className="text-center mx-3 text-lg sm:text-2xl w-40 sm:w-52 text-white font-bold font-mono flex items-center justify-center">
        <span className="font-mono text-white cursor-pointer hover:text-pink-600 transition-all duration-300">
          {"<Rohan_M/>"}
        </span>
      </div>

      {/* Social Media Icons */}
      <div className="flex items-center space-x-4 sm:space-x-6 text-white">
        <PiReadCvLogoFill
          size={28}
          className="hover:scale-125 hover:text-pink-600 transition-transform duration-300 cursor-pointer"
        />

        <a
          target="_blank"
          href={"https://www.linkedin.com/in/rohan-m1212/"}
          className="hover:scale-125 hover:text-pink-600 transition-transform duration-300 cursor-pointer"
        >
          <IoLogoLinkedin size={28} />
        </a>

        <a
          target="_blank"
          href={"https://github.com/RohanM-12"}
          className="hover:scale-125 hover:text-pink-600 transition-transform duration-300 cursor-pointer"
        >
          <FaGithub size={28} />
        </a>

        <a
          target="_blank"
          href={"https://x.com/Rohan_M1212"}
          className="hover:scale-125 hover:text-pink-600 transition-transform duration-300 cursor-pointer"
        >
          <FaXTwitter size={28} />
        </a>
      </div>
    </div>
  );
};

export default Header;
