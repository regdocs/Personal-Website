import { useContext, useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { DotmapContext } from "../context/dotmap.context";
import { navConfig } from "../config/nav.config";

function Dotmap() {
  const [currentPage, setCurrentPage] = useState(0);
  const dotmapConfig = useContext(DotmapContext);

  useEffect(() => {
    setCurrentPage(0);
  }, [dotmapConfig]);

  useEffect(() => {
    document.getElementById("btn-next").style.display = "block";

    document.getElementById("btn-prev").style.display = "block";

    if (currentPage === navConfig[dotmapConfig[0]][4] - 1) {
      document.getElementById("btn-next").style.display = "none";
    }

    if (currentPage === 0) {
      document.getElementById("btn-prev").style.display = "none";
    }
  }, [currentPage, dotmapConfig]);

  useEffect(() => {
    const motionDiv = document.getElementsByClassName("container-1")[0];

    motionDiv.addEventListener("scrollend", () => {
      console.log("running event listener onscrollend");
      const container1 =
        document.getElementsByClassName("container-1")[0].children;

      for (var i = 0; i < container1.length; i++) {
        if (container1[i].getBoundingClientRect().top > 0) {
          setCurrentPage(i);
          return;
        }
      }
    });
  }, [dotmapConfig]);

  var dotList = new Array(dotmapConfig[1]);
  for (var i = 0; i < dotmapConfig[1]; i++) dotList[i] = i;

  return (
    <>
      <div className="z-40 absolute right-0 top-1/2 m-6 w-fit h-fit flex flex-col -translate-y-1/2 backdrop-blur-lg p-1 bg-opacity-0 rounded-full">
        {dotList.map((i) => (
          <div
            onClick={() => {
              const container1 =
                document.getElementsByClassName("container-1")[0].children;

              container1[i].scrollIntoView({ behavior: "smooth" });
              setCurrentPage(i);
              return;
            }}
            key={i}
            className={`m-2 rounded-full bg-white border ${
              i === currentPage ? "" : "bg-opacity-20"
            } h-3 w-3 hover:bg-blue-500 transition duration-300 hover:cursor-pointer hover:ring-4 ring-slate-300`}
          />
        ))}
      </div>

      <div
        id="btn-next"
        onClick={() => {
          const container1 =
            document.getElementsByClassName("container-1")[0].children;

          for (var i = 0; i < container1.length; i++) {
            if (container1[i].getBoundingClientRect().top > 100) {
              container1[i].scrollIntoView({ behavior: "smooth" });
              setCurrentPage(i);
              return;
            }
          }
        }}
        className="z-40 absolute hover:bg-white group transition duration-300 hover:cursor-pointer bottom-20 p-1 right-20 rounded-full border border-white"
      >
        <FaAngleDown fontSize={30} className="group-hover:fill-[#929aec]" />
      </div>

      <div
        id="btn-prev"
        onClick={() => {
          const container1 =
            document.getElementsByClassName("container-1")[0].children;

          for (var i = container1.length - 1; i >= 0; i--) {
            if (container1[i].getBoundingClientRect().top < 0) {
              container1[i].scrollIntoView({ behavior: "smooth" });

              setCurrentPage(i);
              return;
            }
          }
        }}
        className="z-40 absolute hover:bg-white group transition duration-300 hover:cursor-pointer bottom-20 p-1 right-36 rounded-full border border-white"
      >
        <FaAngleUp fontSize={30} className="group-hover:fill-[#929aec]" />
      </div>
    </>
  );
}

export default Dotmap;
