import { FaAngleDown } from "react-icons/fa";

function Dotmap() {
  return (
    <>
      <div className="z-40 absolute right-0 top-1/2 m-6 w-fit h-fit flex flex-col -translate-y-1/2 backdrop-blur-lg p-1 bg-opacity-0 rounded-full">
        <div className="m-2 rounded-full bg-white border h-3 w-3" />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="m-2 rounded-full bg-white border bg-opacity-20 h-3 w-3 hover:bg-blue-500 transition duration-300 hover:cursor-pointer"
          />
        ))}
      </div>
      <div className="z-40 absolute hover:bg-white group transition duration-300 hover:cursor-pointer bottom-20 p-1 right-20 rounded-full border border-white">
        <FaAngleDown fontSize={30} className="group-hover:fill-[#929aec]" />
      </div>
    </>
  );
}

export default Dotmap;
