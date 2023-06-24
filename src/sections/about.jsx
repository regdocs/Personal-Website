import { useEffect } from "react";
import Page1 from "./about/page1";
import Page2 from "./about/page2";
import Page3 from "./about/page3";
import Page4 from "./about/page4";
import Page5 from "./about/page5";
import Page6 from "./about/page6";
import { navConfig } from "../config/nav.config";

// eslint-disable-next-line react/prop-types
export default function About({ setDotmapConfig }) {
  useEffect(() => {
    setDotmapConfig([navConfig[1][0], navConfig[1][4]]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
    </>
  );
}
