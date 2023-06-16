import "./App.css";
import Navigation from "./components/navigation";
import Dotmap from "./components/dotmap";
import Marq from "./components/marq";
import Home from "./sections/home";

function App() {
  return (
    <div className="theme-bg h-full wide:p-5 flex justify-center items-center">
      <div className="wide:rounded-3xl h-full w-full relative max-w-[1750px] theme-fg shadow-xl flex flex-row overflow-hidden">
        {/* Navigational components */}
        <Marq />
        <Navigation />
        <Dotmap />

        {/* Content sections */}
        <div className="h-full w-full overflow-auto snap-center">
          <Home />
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
