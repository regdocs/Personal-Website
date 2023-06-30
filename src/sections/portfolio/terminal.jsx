import { useEffect } from "react";
import "../../styles/terminal.css";
import TERMINAL from "../../assets/terminal.svg";
import ReactTypingEffect from "react-typing-effect";

function Terminal({ object }) {
  useEffect(() => {
    const topLevelContainer = document.getElementsByClassName("container-1")[0];
    topLevelContainer.classList.add("pf-overlay");
  }, []);
  // bg-[#4d538f]
  return (
    <div className="py-56 px-36 h-full w-full flex items-center">
      <div className="h-fit w-fit relative m-7">
        <img
          src={TERMINAL}
          className="rounded-2xl h-fit w-full drop-shadow-2xl pointer-events-none select-none"
        ></img>
        <div className="absolute -top-[1%] left-[10%] glow-text text-lg uppercase aurebesh">
          <ReactTypingEffect
            text={["C-TERMINAL", "DESTROYER"]}
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
          className="absolute top-0 left-0 h-full w-full pt-12 px-10 aurebesh"
        >
          hiiiiiiiiiiiiiiiii
        </div>
      </div>
    </div>
  );
}

export default Terminal;
