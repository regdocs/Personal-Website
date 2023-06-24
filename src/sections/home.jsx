import { useEffect } from "react";
import {
  FaAngleRight,
  FaDownload,
  FaGithub,
  FaLinkedinIn,
  FaMastodon,
  FaTwitter,
} from "react-icons/fa";
import ReactTypingEffect from "react-typing-effect";
import { navConfig } from "../config/nav.config";

// eslint-disable-next-line react/prop-types
function Home({ setDotmapConfig }) {
  useEffect(() => {
    setDotmapConfig([navConfig[0][0], navConfig[0][4]]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-row h-full w-full relative snap-start">
      <div className="w-1/2 p-16 overflow-visible flex flex-col justify-between">
        <div className="text-3xl font-black h-20"></div>
        <div className="overflow-visible z-10 pl-32">
          <div className="text-4xl font-sans font-black whitespace-nowrap leading-tight text-opacity-75 mb-3">
            <ReactTypingEffect
              speed={50}
              eraseDelay={2500}
              typingDelay={1500}
              eraseSpeed={20}
              cursor="█"
              text={[
                "Passionate Technologist.",
                "Programmer & Open Source Advocate.",
              ]}
            />
          </div>
          <div className="text-9xl font-sans font-black whitespace-nowrap text-white mb-8">
            Jayanta Pandit
          </div>
          <div className="font-sans pr-24 text-white mb-5">
            I&apos;m a driven Full Stack Developer with a deep commitment to
            design and innovation, collaborating with startups to establish a
            robust online presence and streamline their sales workflows. I find
            fulfillment in teaching programming to aspiring students, inspiring
            their passion for Computer Science, technology and open source.
          </div>
          <div className="space-x-6">
            <button className="w-fit font-mono border border-white group rounded-full fill-transparent p-2 px-4 outline-none uppercase font-bold hover:bg-white hover:text-[#31275b] transition-colors duration-200">
              Know more{" "}
              <FaAngleRight className="group-hover:fill-[#31275b] inline-block duration-200" />
            </button>
            <button className="w-fit font-mono border border-white group rounded-full fill-transparent p-2 px-4 outline-none uppercase font-bold hover:bg-white hover:text-[#31275b] transition-colors duration-200">
              Resume{" "}
              <FaDownload className="group-hover:fill-[#31275b] inline-block duration-200" />
            </button>
          </div>
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
  );
}

export default Home;
