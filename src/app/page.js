"use client";
import AboutMe from "@/components/AboutMe";
import End from "@/components/End";
import Projects from "@/components/Projects";
import Work from "@/components/Work"; // Corrected the import for consistency
import { Image } from "antd";
import { FaCopy } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";

export default function Home() {
  return (
    <main>
      <div className="px-8 sm:px-20 py-8">
        {/* Intro Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <div>
            <div className="font-semibold text-3xl my-10 flex items-center">
              <Image
                src={"/wave.gif"}
                width={30}
                height={30}
                alt="Waving hand"
                preview={false}
              />
              <span className="ml-2 text-black">Hey there, I'm </span>
              <span className="font-bold text-pink-700 ml-1">Rohan Mali.</span>
            </div>

            {/* Description */}
            <div className="font-semibold text-xl my-2 text-black">
              <div className="text-orange-500">{"<div>"}</div>
              <div className="ml-10">
                A Full-Stack Developer turning caffeine into code and
              </div>
              <div className="ml-10">pixels into laughter.</div>
              <div className="text-orange-500">{"<div/>"}</div>
            </div>

            {/* NPM Install Section */}
            <div className="w-fit my-10">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative px-5 py-2 bg-gray-900 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-center">
                  <span className="text-sm text-gray-100">
                    npm install -g hello-rohan
                  </span>
                  <button className="ml-3">
                    <FaCopy size={20} className="text-pink-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <Image
              preview={false}
              className="rounded-3xl border-4 border-pink-800"
              draggable={false}
              src="/bg1.gif"
              alt="Background Image"
            />
          </div>
        </div>

        {/* Chevron Down */}
        <div className="flex justify-center mt-10">
          <FaChevronDown className="animate-bounce text-gray-500" size={40} />
        </div>
      </div>

      {/* Sections: About Me, Projects, Work, End */}
      <div className="mt-16">
        <AboutMe />
      </div>
      <div className="mt-16">
        <Projects />
      </div>
      <div className="mt-16">
        <Work />
      </div>
      <div className="flex justify-center mt-16">
        <End />
      </div>
    </main>
  );
}
