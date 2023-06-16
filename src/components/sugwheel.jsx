import "../styles/sugwheel.css";
import LiveClockUpdate from "./liveclock";

function Sugwheel() {
  return (
    <div className="z-50 absolute p-2 shadow-white shadow-lg rounded-full group transition-all duration-300 ease-in-out bottom-[-1350px] left-1/2 -translate-x-1/2 h-[1500px] w-[1500px] pointer-events-auto">
      <div className="border-[3px] p-10 border-dashed border-white border-opacity-70 rounded-full w-full h-full orbit" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono uppercase text-3xl pt-4 font-bold rounded-full w-[95%] h-[95%] border-white border bg-white bg-opacity-[0.05] backdrop-blur-2xl flex flex-col justify-start items-center">
        <LiveClockUpdate />
      </div>
    </div>
  );
}

export default Sugwheel;
