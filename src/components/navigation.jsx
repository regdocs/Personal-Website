import "../styles/navigation.css";

function Navigation() {
  return (
    <div className="w-full absolute top-0 h-20 flex justify-between">
      <div className="shadow-xl text-3xl font-semibold font-sans h-full flex justify-center items-center w-fit p-12 px-10 pr-16 bg-white text-[#474a75] rounded-br-full">
        @jayzsh
      </div>
      <div className="shadow-lg w-[65%] cscrollbar overflow-auto h-full bg-[#2c3059] bg-opacity-60 justify-between flex flex-row px-10 items-center rounded-3xl inset-5 backdrop-blur-xl m-6">
        {[
          [0, "Home", "/home"],
          [1, "About", "/about"],
          [2, "Portfolio", "/portfolio"],
          [3, "Blogs", "/blogs"],
          [4, "Publications", "/publications"],
          [5, "Communities", "/communities"],
          [6, "Resume", "/resume"],
        ].map((i) => (
          <div
            key={i[0]}
            className="h-[80%] rounded-lg flex items-center uppercase whitespace-nowrap font-mono font-bold hover:bg-white hover:bg-opacity-20 text-white px-5 glow-on-hover transition duration-150"
          >
            {i[1]}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navigation;
