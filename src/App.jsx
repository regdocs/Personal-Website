import {
  FaAngleRight,
  FaGithub,
  FaLinkedinIn,
  FaMastodon,
  FaTwitter,
} from "react-icons/fa";
import "./App.css";
import Navigation from "./components/navigation";
import Dotmap from "./components/dotmap";

function App() {
  return (
    <div className="theme-bg h-full wide:p-10 flex justify-center items-center">
      <div className="wide:rounded-3xl h-full w-full relative max-w-[1700px] theme-fg shadow-xl flex flex-row overflow-hidden">
        <Navigation />
        <Dotmap />

        <div className="w-1/2 p-16 overflow-visible flex flex-col justify-between">
          <div className="text-3xl font-black h-20"></div>
          <div className="overflow-visible z-10 pl-24">
            <div className="text-4xl font-sans font-black whitespace-nowrap leading-tight text-opacity-75 mb-3">
              Passionate Technologist,
              <br />
              Programmer & Open Source Advocate
            </div>
            <div className="text-9xl font-sans font-black whitespace-nowrap text-white mb-8">
              Jayanta Pandit
            </div>
            <div className="font-sans pr-24 text-white mb-5">
              I&apos;m a driven Full Stack Developer with a deep commitment to
              design and innovation, collaborating with startups to establish a
              robust online presence and streamline their sales workflows. I
              find fulfillment in teaching programming to aspiring students,
              inspiring their passion for Computer Science, technology and open
              source.
            </div>
            <button className="w-fit font-mono border border-white group rounded-full fill-transparent p-2 px-4 outline-none uppercase font-bold hover:bg-white hover:text-[#31275b] transition-colors duration-200">
              Know more{" "}
              <FaAngleRight className="group-hover:fill-[#31275b] inline-block duration-200" />
            </button>
          </div>
          <div className="flex flex-col">
            <div className="text-lg mb-3 font-sans font-bold">Follow me:</div>
            <div className="flex flex-row space-x-6">
              <FaGithub fontSize={30} />
              <FaLinkedinIn fontSize={30} />
              <FaTwitter fontSize={30} />
              <FaMastodon fontSize={30} />
            </div>
          </div>
        </div>

        <div className="w-1/2 simon-lee">
          <div className="w-full h-full simon-lee-2"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
