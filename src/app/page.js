import { Image } from "antd";

export default function Home() {
  return (
    <main>
      <div className="p-20">
        <div className="grid grid-cols-2">
          <div>
            <div className=" font-semibold text-3xl">
              👋🏻 Hey there, i'm{" "}
              <span className="font-bold text-blue-400 ">Rohan Mali. </span>
            </div>
            <div className="font-semibold text-xl my-2">
              <div> A Full-Stack Developer Turning caffeine into code and </div>
              <div>pixels into laughter. </div>
            </div>
          </div>
          <div>
            <Image preview={false} draggable={false} src="/bg1.gif" />
          </div>
        </div>
      </div>
    </main>
  );
}
