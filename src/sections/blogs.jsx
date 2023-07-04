/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { navConfig } from "../config/nav.config";
import Page1 from "./blogs/page1";
import Page2 from "./blogs/page2";

function Blogs({ setDotmapConfig }) {
  useEffect(() => {
    setDotmapConfig([navConfig[3][0], navConfig[3][4]]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Page1 />
      <Page2 />
    </>
  );
}

export default Blogs;
