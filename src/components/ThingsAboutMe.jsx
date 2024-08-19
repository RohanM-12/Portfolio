import React from "react";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { BsFillTerminalFill } from "react-icons/bs";
import Link from "next/link";

const ThingsAboutMe = () => {
  return (
    <div className="relative rounded-lg bg-gray-900 text-white w-4/5 max-w-3xl mx-auto p-6 my-10 shadow-2xl border-4 border-indigo-600">
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-2">
          <div className="bg-red-500 rounded-full w-4 h-4"></div>
          <div className="bg-yellow-400 rounded-full w-4 h-4"></div>
          <div className="bg-green-400 rounded-full w-4 h-4"></div>
        </div>
        <span className="font-mono flex items-center text-gray-400">
          <BsFillTerminalFill className="text-green-500 mr-2" size={18} />
          aboutRohan.json
        </span>
        <div className="flex space-x-3">
          <FaNodeJs className="text-green-500" size={18} />
          <FaReact className="text-blue-500" size={18} />
        </div>
      </div>

      <div className="bg-gray-700 border-t border-gray-600 my-3"></div>

      <div className="text-sm font-mono">
        <div>
          <span className="text-blue-400">{"{"}</span>
        </div>
        <div className="ml-6">
          <span className="text-yellow-400">"name": </span>
          <span className="text-pink-400">"Rohan Mali"</span>,
        </div>
        <div className="ml-6">
          <span className="text-yellow-400">"version": </span>
          <span className="text-pink-400">"B.TECH_2025"</span>,
        </div>
        <div className="ml-6">
          <span className="text-yellow-400">"skills": </span>
          <span className="text-blue-400">{"["}</span>
          <span className="text-pink-400">
            "JavaScript", "Node.js", "React", "Express", "MongoDB"
          </span>
          <span className="text-blue-400">{"]"}</span>,
        </div>

        <div className="ml-6">
          <span className="text-yellow-400">"projects": </span>
          <span className="text-blue-400">{"{"}</span>
          <div className="ml-6">
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
          <span className="text-blue-400 ml-6">{"}"}</span>
        </div>
        <div className="ml-6">
          <span className="text-yellow-400">"contact": </span>
          <span className="text-blue-400">{"{"}</span>
          <div className="ml-6">
            <div>
              <span className="text-yellow-400">"email": </span>
              <span className="text-pink-400">"rohanmali.2002@gmail.com"</span>,
            </div>
            <div>
              <span className="text-yellow-400">"github": </span>
              <Link
                href={"https://github.com/RohanM-12"}
                className="text-pink-400"
              >
                "https://github.com/RohanM-12"
              </Link>
            </div>
            <div>
              <span className="text-yellow-400">"linkedIn": </span>
              <Link
                href={"https://www.linkedin.com/in/rohan-m1212/"}
                className="text-pink-400"
              >
                "https://www.linkedin.com/in/rohan-m1212/"
              </Link>
            </div>
          </div>
          <span className="text-blue-400 ml-6">{"}"}</span>
        </div>
        <div>
          <span className="text-blue-400">{"}"}</span>
        </div>
      </div>

      <div className="mt-5 text-xs text-gray-500 text-center font-mono">
        <span className="animate-pulse">
          /** More cool stuff coming soon... */
        </span>
      </div>
    </div>
  );
};

export default ThingsAboutMe;
