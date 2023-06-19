import "./App.css";
import Navigation from "./components/navigation";
import Dotmap from "./components/dotmap";
import Marq from "./components/marq";
import Home from "./sections/home";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const location = useLocation();

  const containerClass =
    "h-full w-full snap-y snap-mandatory overflow-y-scroll no-scrollbar";

  const pageTransitions = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div className="theme-bg h-full wide:p-5 flex justify-center items-center">
      <div className="wide:rounded-3xl h-full w-full relative max-w-[1750px] theme-fg shadow-xl overflow-hidden">
        {/* Navigational components */}
        <Marq />
        <Navigation />
        <Dotmap />

        {/* Content sections */}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/home"
              element={
                <motion.div
                  key="home"
                  className={containerClass}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageTransitions}
                  transition={{ duration: 0.3, delay: 0 }}
                >
                  <Home />
                </motion.div>
              }
            />
            <Route
              path="/about"
              element={
                <motion.div
                  key="about"
                  className={containerClass}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageTransitions}
                  transition={{ duration: 0.3, delay: 0 }}
                >
                  <Home />
                </motion.div>
              }
            />
            <Route
              path="/portfolio"
              element={
                <motion.div
                  key="portfolio"
                  className={containerClass}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageTransitions}
                  transition={{ duration: 0.3, delay: 0 }}
                >
                  <Home />
                </motion.div>
              }
            />
            <Route
              path="/blogs"
              element={
                <motion.div
                  key="blogs"
                  className={containerClass}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageTransitions}
                  transition={{ duration: 0.3, delay: 0 }}
                >
                  <Home />
                </motion.div>
              }
            />
            <Route
              path="/publications"
              element={
                <motion.div
                  key="publications"
                  className={containerClass}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageTransitions}
                  transition={{ duration: 0.3, delay: 0 }}
                >
                  <Home />
                </motion.div>
              }
            />
            <Route
              path="/communities"
              element={
                <motion.div
                  key="communities"
                  className={containerClass}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageTransitions}
                  transition={{ duration: 0.3, delay: 0 }}
                >
                  <Home />
                </motion.div>
              }
            />
            <Route
              path="/resume"
              element={
                <motion.div
                  key="resume"
                  className={containerClass}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageTransitions}
                  transition={{ duration: 0.3, delay: 0 }}
                >
                  <Home />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
