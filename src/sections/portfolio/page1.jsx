import { useEffect } from "react";
import "../../styles/portfolio.css";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

function Page1() {
  /* useEffect(() => {
    const container = document.getElementsByClassName("main-menu-container")[0];
    const containerChildHeight =
      document
        .getElementsByClassName("main-menu-item")[0]
        .getBoundingClientRect().height || 64;

    var lastYOffset = Infinity;
    return;
    container.addEventListener("scrollend", () => {
      const currentYOffset = container.children[0].getBoundingClientRect().top;
      if (currentYOffset < lastYOffset) {
        // scroll down detected
        for (var i = 0; i < container.children.length; i++) {
          const { top, height } = container.children[i].getBoundingClientRect();
          const totalYOffsetToChildCenter = top + height / 2;
          container.scrollTo(
            0,
            totalYOffsetToChildCenter + containerChildHeight
          );
        }
        lastYOffset = currentYOffset;
      } else {
        // scroll up detected
        for (var j = 0; j < container.children.length; j++) {
          const { top, height } = container.children[j].getBoundingClientRect();
          const totalYOffsetToChildCenter = top + height / 2;
          container.scrollTo(
            0,
            totalYOffsetToChildCenter - containerChildHeight
          );
        }
        lastYOffset = currentYOffset;
      }
    });
  }, []); */

  return (
    <div className="flex flex-row h-full w-full relative snap-start items-center">
      <div className="w-[33%] h-[90%] main-menu-edge ml-32 relative overflow-visible">
        <div className="h-full w-full main-menu-container space-y-9 relative overflow-hidden no-scrollbar snap-y snap-mandatory">
          <div className="h-[calc(50%-2.25rem)]" />

          {[
            "Project 1",
            "Project 1.1",
            "Project 2",
            "Project 2.1",
            "Project 3",
            "Project 3.1",
            "Project 4",
            "Project 4.1",
            "Project 5",
            "Project 5.1",
            "Project 6",
            "Project 6.1",
          ].map((i) => (
            <div
              key={i}
              className="relative w-full h-16 hover:bg-white hover:bg-opacity-10 main-menu-item hover:border-y transition duration-200 uppercase font-bold font-mono snap-center"
              onClick={(e) => {
                e.currentTarget.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              }}
            >
              <span className="w-full h-full flex justify-center items-center">
                {i}
              </span>
              <div className="absolute top-0 left-0 pointer-events-none z-50 h-full w-full main-menu-item-overlay" />
            </div>
          ))}

          <div className="h-[calc(50%-1.25rem)]" />
        </div>

        <FaCaretRight
          fontSize={20}
          className="absolute top-1/2 -translate-y-1/2 -left-2 translate-x-1/2"
        />

        <FaCaretLeft
          fontSize={20}
          className="absolute top-1/2 -translate-y-1/2 -right-2 -translate-x-1/2"
        />
      </div>
      <div className="w-[67%] h-full"></div>
    </div>
  );
}

export default Page1;
