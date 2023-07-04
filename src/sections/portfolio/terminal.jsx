/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "../../styles/terminal.css";
import TERMINAL from "../../assets/terminal.svg";
import ReactTypingEffect from "react-typing-effect";
import { FaGithub, FaRocket } from "react-icons/fa";
import Marquee from "react-fast-marquee";

function Terminal({ object }) {
  useEffect(() => {
    const topLevelContainer = document.getElementsByClassName("container-1")[0];
    topLevelContainer.classList.add("pf-overlay");
  }, []);
  // bg-[#4d538f]

  return (
    <div className="py-56 px-20 h-full w-full flex items-center">
      <div className="h-fit w-fit relative m-7">
        <img
          src={TERMINAL}
          className="rounded-2xl h-fit w-full drop-shadow-2xl pointer-events-none select-none"
        ></img>
        <div className="absolute -top-[1%] left-[10%] glow-text text-lg uppercase aurebesh">
          <ReactTypingEffect
            text={["XS-TERMINAL", "SDESTROYER"]}
            className="select-none"
            cursor=" "
            eraseSpeed={10}
            eraseDelay={3000}
            typingDelay={500}
            speed={10}
          />
        </div>
        <div
          id="terminal-content"
          className="absolute top-0 left-0 h-full w-full aurebesh flex flex-col"
        >
          {/* <img
            id="project-banner"
            src={object.banner}
            alt="project banner"
            className="h-[20%] object-cover object-bottom bg-blend-multiply select-none opacity-[0.85]"
          />
          <div className="absolute top-0 left-0 h-[20%] w-full">
            <ReactTypingEffect
              text={[
                "> Searching for ancient Jedi wisdom",
                "> Force sensitivity detected",
                "> Decrypting Sith archives",
              ]}
              className="select-none absolute left-0 bottom-0 pl-7 pb-3 glow-text text-xs"
              cursor=" "
              eraseSpeed={1}
              eraseDelay={6000}
              typingDelay={100}
              speed={5}
            />
          </div> */}
          {<div className="h-[10%]"></div>}
          <div
            id="terminal-marquee"
            className="absolute bottom-[6%] left-[10%] text-xs uppercase aurebesh z-50"
          >
            <Marquee className="select-none glow-text">
              May the Force be with you, young Padawan! Embrace the power of the
              Light Side and discover the secrets of the Jedi Order. Journey
              through distant galaxies, face the trials of the Force, and become
              a true guardian of peace and justice. Unleash your inner strength
              and let the Force guide you on an epic adventure. Engage in
              lightsaber duels, pilot starships through asteroid fields, and
              unlock the ancient wisdom of the Jedi. Remember, the path to
              becoming a Jedi is not an easy one. It requires discipline,
              training, and unwavering dedication. But with every step, you will
              grow stronger, gaining mastery over the Force. The galaxy awaits
              your heroism. Rise above the challenges, overcome the darkness,
              and bring balance to the Force. May your journey be filled with
              adventure and triumph. May you become a legend in the Star Wars
              universe. May the Force be with you, always.
            </Marquee>
          </div>
          <div className="pt-5 pb-20 font-mono text-sm mx-10 space-y-2 flex flex-col flex-grow overflow-auto no-scrollbar">
            <div>
              <span className="font-bold glow-text">$ PROJECT_TITLE </span>
              <span className="opacity-[0.85]">{object.title}</span>
            </div>
            <div>
              <span className="font-bold glow-text">$ TECH_STACK </span>
              <span className="inline space-x-5 align-middle ml-4">
                {object.tech_stack.map((i) => (
                  <span
                    onClick={() =>
                      window
                        .open(
                          "https://google.com/search?q=" +
                            encodeURIComponent(i.name),
                          "_blank"
                        )
                        .focus()
                    }
                    key={i.name}
                    className="font-bold hover:underline cursor-pointer transition-all duration-200 glow-text-hover"
                  >
                    {i.icon}{" "}
                    <span className="opacity-[0.85] hover:opacity-100">
                      {i.name.toUpperCase()}
                    </span>
                  </span>
                ))}
              </span>
            </div>
            <div>
              <span className="font-bold glow-text">$ DESCRIPTION </span>
              <span className="opacity-[0.85]">{object.desc}</span>
            </div>
            <div>
              <span className="font-bold glow-text">$ LINKS </span>
              <span className="inline-flex flex-row space-x-5 h-fit">
                <a href={object.github}>
                  <span className="group cursor-pointer transition-all duration-200 glow-text-hover">
                    <FaGithub className="inline align-middle" fontSize={20} />{" "}
                    <span className="group-hover:underline font-bold opacity-[0.85] group-hover:opacity-100">
                      [GITHUB]
                    </span>
                  </span>
                </a>
                <a href={object.live}>
                  <span className="group cursor-pointer transition-all duration-200 glow-text-hover">
                    <FaRocket className="inline align-middle" fontSize={20} />{" "}
                    <span className="group-hover:underline font-bold opacity-[0.85] group-hover:opacity-100">
                      [DEPLOYMENT]
                    </span>
                  </span>
                </a>
              </span>
            </div>
            <div className="overflow-x-auto min-h-[110px] flex-grow flex items-center rounded-lg bg-[#2c3059] bg-opacity-50 backdrop-blur-sm trans-border">
              {object.images.map((i) => (
                <img
                  key={i}
                  src={i}
                  alt="project image asset"
                  className="hover:brightness-50 cursor-pointer transition-all duration-200 h-full"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terminal;
