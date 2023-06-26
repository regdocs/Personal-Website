import { useEffect } from "react";
import { navConfig } from "../config/nav.config";
import Page1 from "./portfolio/page1";

// eslint-disable-next-line react/prop-types
function Portfolio({ setDotmapConfig }) {
  useEffect(() => {
    setDotmapConfig([navConfig[2][0], navConfig[2][4]]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Page1 />;
}

export default Portfolio;
