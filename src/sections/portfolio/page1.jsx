import { useEffect, useState } from "react";
import "../../styles/portfolio.css";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { projects } from "../../config/portfolio.config";
import Terminal from "./terminal";

function Page1() {
  const [currentSelection, setCurrentSelection] = useState(0);

  const menuItemBaseClassList =
    "relative cursor-pointer w-full h-16 main-menu-item transition duration-200 uppercase font-bold font-mono snap-center";
  const menuItemClassList =
    menuItemBaseClassList + " " + "hover:bg-white hover:bg-opacity-10";
  const menuItemSelectedClassList =
    menuItemClassList + " " + "bg-white bg-opacity-10 border-y";

  function removeCurrentSelection(virtualIndex) {
    console.log("removing selection: " + virtualIndex);
    const menuItem =
      document.getElementsByClassName("main-menu-item")[virtualIndex];
    menuItem.className = menuItemClassList;
  }

  useEffect(() => {
    const container = document.getElementsByClassName("main-menu-container")[0];
    const menuItems = document.getElementsByClassName("main-menu-item");
    const { top, height } = container.getBoundingClientRect();
    const menuItemHeight =
      document
        .getElementsByClassName("main-menu-item")[0]
        .getBoundingClientRect().height || 64;

    container.addEventListener("scrollend", () => {
      for (var i = 0; i < menuItems.length; i++) {
        const childYOffset = menuItems[i].getBoundingClientRect().top;

        if (childYOffset > top + height / 2 - menuItemHeight) {
          setCurrentSelection((prev) => {
            if (i !== prev) removeCurrentSelection(prev);
            return i;
          });
          return;
        }
      }
    });

    return () => {
      container.removeEventListener("fullscreenchange", () => {});
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function setSelectionEffect() {
    const menuItem =
      document.getElementsByClassName("main-menu-item")[currentSelection];
    menuItem.className = menuItemSelectedClassList;
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(setSelectionEffect, [currentSelection]);

  return (
    <div className="flex flex-row h-full w-full relative snap-start items-center">
      <div className="w-[33%] h-[90%] main-menu-edge ml-32 relative overflow-visible">
        <div className="h-full w-full main-menu-container space-y-6 relative overflow-auto no-scrollbar snap-y snap-mandatory">
          <div id="mmenu-0" className="h-[calc(50%-2.25rem)]" />

          {projects.map((i) => (
            <div
              key={i.index}
              className={menuItemClassList}
              onClick={(e) => {
                e.currentTarget.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              }}
            >
              <span className="w-full h-full flex justify-center items-center">
                {i.title}
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

      <div className="w-[67%] h-full flex justify-center items-center">
        <Terminal object={projects[currentSelection]} />
      </div>
    </div>
  );
}

export default Page1;
