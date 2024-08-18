import AboutMe from "@/components/AboutMe";
import { Image } from "antd";
import { FaCopy } from "react-icons/fa6";
export default function Home() {
  return (
    <main>
      <div className="p-20">
        <div className="grid grid-cols-2">
          <div>
            <div className=" font-semibold text-3xl">
              <span className="text-white"> 👋🏻 Hey there, i'm </span>
              <span className="font-bold text-blue-400 ">Rohan Mali. </span>
            </div>
            <div className="font-semibold text-xl my-2 text-white">
              <div> A Full-Stack Developer turning caffeine into code and </div>
              <div>pixels into laughter. </div>
              <div className="w-1/2  my-10">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative px-5  bg-gray-900 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-end ">
                    <div className="my-5 text-lg flex text-gray-100">
                      npm install -g hello-rohan{" "}
                      <span className=" mx-2">
                        <button>
                          <FaCopy
                            size={20}
                            className="text-pink-400 mx-1 mt-1"
                          />
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Image
              preview={false}
              className="rounded-3xl border-4 border-pink-800"
              draggable={false}
              src="/bg1.gif"
            />
          </div>
        </div>
      </div>
      <div>
        <AboutMe />
      </div>
    </main>
  );
}
