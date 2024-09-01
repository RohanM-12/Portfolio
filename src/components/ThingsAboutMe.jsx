import React from "react";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { BsFillTerminalFill } from "react-icons/bs";
import Link from "next/link";

const ThingsAboutMe = () => {
  return (
    <div className="relative bg-gray-900 text-white w-full max-w-3xl mx-auto p-4 sm:p-6 my-10 shadow-2xl border-4 border-indigo-600 rounded-lg">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        {/* Traffic Lights and File Name Section */}
        <div className="flex space-x-2 mb-4 sm:mb-0">
          <div className="bg-red-500 rounded-full w-4 h-4"></div>
          <div className="bg-yellow-400 rounded-full w-4 h-4"></div>
          <div className="bg-green-400 rounded-full w-4 h-4"></div>
        </div>
        <span className="font-mono flex items-center text-gray-400 text-sm sm:text-base mb-4 sm:mb-0">
          <BsFillTerminalFill className="text-green-500 mr-2" size={18} />
          aboutRohan.json
        </span>
        {/* Tech Icons Section */}
        <div className="flex space-x-3">
          <FaNodeJs className="text-green-500" size={18} />
          <FaReact className="text-blue-500" size={18} />
        </div>
      </div>

      {/* Separator Line */}
      <div className="bg-gray-700 border-t border-gray-600 my-3"></div>

      {/* JSON-Like Structure */}
      <div className="text-sm sm:text-base font-mono">
        <div>
          <span className="text-blue-400">{"{"}</span>
        </div>
        <div className="ml-4">
          <span className="text-yellow-400">"name": </span>
          <span className="text-pink-400">"Rohan Mali"</span>,
        </div>
        <div className="ml-4">
          <span className="text-yellow-400">"version": </span>
          <span className="text-pink-400">"B.TECH_2025"</span>,
        </div>
        <div className="ml-4">
          <span className="text-yellow-400">"skills": </span>
          <span className="text-blue-400">{"["}</span>
          <span className="text-pink-400">
            "JavaScript", "Node.js", "React", "Express", "MongoDB"
          </span>
          <span className="text-blue-400">{"]"}</span>,
        </div>

        {/* Projects Section */}
        <div className="ml-4">
          <span className="text-yellow-400">"projects": </span>
          <span className="text-blue-400">{"{"}</span>
          <div className="ml-4">
            <div>
              <span className="text-yellow-400">"EncryptShare": </span>
              <span className="text-pink-400">
                "Secure document-sharing portal with E-2-E encryption"
              </span>
              ,
            </div>
            <div>
              <span className="text-yellow-400">"DevsConnect": </span>
              <span className="text-pink-400">
                "A social media like web app for your projects"
              </span>
            </div>
          </div>
          <span className="text-blue-400 ml-4">{"}"}</span>
        </div>

        {/* Contact Section */}
        <div className="ml-4">
          <span className="text-yellow-400">"contact": </span>
          <span className="text-blue-400">{"{"}</span>
          <div className="ml-4">
            <div>
              <span className="text-yellow-400">"email": </span>
              <span className="text-pink-400">"rohanmali.2002@gmail.com"</span>,
            </div>
            <div>
              <span className="text-yellow-400">"github": </span>
              <Link
                href={"https://github.com/RohanM-12"}
                className="text-pink-400 hover:underline"
              >
                "https://github.com/RohanM-12"
              </Link>
              ,
            </div>
            <div>
              <span className="text-yellow-400">"linkedIn": </span>
              <Link
                href={"https://www.linkedin.com/in/rohan-m1212/"}
                className="text-pink-400 hover:underline"
              >
                "https://www.linkedin.com/in/rohan-m1212/"
              </Link>
              ,
            </div>
            <div>
              <span className="text-yellow-400">"x.com(twitter)": </span>
              <Link
                href={"https://x.com/Rohan_M1212"}
                className="text-pink-400 hover:underline"
              >
                "https://x.com/Rohan_M1212"
              </Link>
            </div>
          </div>
          <span className="text-blue-400 ml-4">{"}"}</span>
        </div>
        <div>
          <span className="text-blue-400">{"}"}</span>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-5 text-xs text-gray-500 text-center font-mono">
        <span className="animate-pulse">
          /* More cool stuff coming soon... */
        </span>
      </div>
    </div>
  );
};

export default ThingsAboutMe;
