import { FaAngleDown } from "react-icons/fa";
import DOWNARR from "../assets/downarrow.svg";

function Dotmap() {
  return (
    <>
      <div className="absolute left-[3rem] top-1/2 -translate-y-1/2">
        <img src={DOWNARR} className="opacity-80" alt="down arrow" />
      </div>
      <div className="absolute right-0 top-1/2 m-6 w-fit h-fit flex flex-col -translate-y-1/2 bg-[#2c3059] backdrop-blur-lg p-1 bg-opacity-10 rounded-full">
        <div className="m-2 rounded-full bg-white border h-2 w-2" />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="m-2 rounded-full bg-white border bg-opacity-20 h-2 w-2"
          />
        ))}
      </div>
      <div className="absolute hover:bg-white group transition duration-300 hover:cursor-pointer bottom-20 p-1 right-20 rounded-full border border-white">
        <FaAngleDown fontSize={30} className="group-hover:fill-[#929aec]" />
      </div>
    </>
  );
}

export default Dotmap;
