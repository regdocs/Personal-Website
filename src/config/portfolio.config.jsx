/* eslint-disable react/jsx-key */
import { FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import BANR1 from "../assets/project-banners/1.png";
import BANR2 from "../assets/project-banners/2.png";
import BANR3 from "../assets/project-banners/3.png";
import BANR4 from "../assets/project-banners/4.png";
import BANR5 from "../assets/project-banners/5.png";
import ASSET1_1 from "../assets/project-assets/1.1.png";
import ASSET1_2 from "../assets/project-assets/1.2.png";
import ASSET1_3 from "../assets/project-assets/1.3.png";
import ASSET1_4 from "../assets/project-assets/1.4.png";
import ASSET1_5 from "../assets/project-assets/1.5.png";
import ASSET1_6 from "../assets/project-assets/1.6.png";

export const projects = [
  {
    index: 0,
    title: "Project 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    banner: BANR1,
    github: "https://github.com/jayzsh",
    live: "https://jayantapandit.com",
    tech_stack: [
      { icon: <FaReact className="inline" fontSize={20} />, name: "React.js" },
      { icon: <FaNodeJs className="inline" fontSize={20} />, name: "Node.js" },
      { icon: <FaPython className="inline" fontSize={20} />, name: "Python 3" },
    ],
    images: [ASSET1_1, ASSET1_2, ASSET1_3, ASSET1_4, ASSET1_5, ASSET1_6],
  },
  {
    index: 1,
    title: "Project 2",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    banner: BANR2,
    github: "https://github.com/jayzsh",
    live: "https://jayantapandit.com",
    tech_stack: [
      { icon: <FaReact className="inline" fontSize={20} />, name: "React.js" },
      { icon: <FaNodeJs className="inline" fontSize={20} />, name: "Node.js" },
      { icon: <FaPython className="inline" fontSize={20} />, name: "Python 3" },
    ],
    images: [ASSET1_1, ASSET1_2, ASSET1_3, ASSET1_4, ASSET1_5, ASSET1_6],
  },
  {
    index: 2,
    title: "Project 3",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    banner: BANR3,
    github: "https://github.com/jayzsh",
    live: "https://jayantapandit.com",
    tech_stack: [
      { icon: <FaReact className="inline" fontSize={20} />, name: "React.js" },
      { icon: <FaNodeJs className="inline" fontSize={20} />, name: "Node.js" },
      { icon: <FaPython className="inline" fontSize={20} />, name: "Python 3" },
    ],
    images: [ASSET1_1, ASSET1_2, ASSET1_3, ASSET1_4, ASSET1_5, ASSET1_6],
  },
  {
    index: 3,
    title: "Project 4",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    banner: BANR4,
    github: "https://github.com/jayzsh",
    live: "https://jayantapandit.com",
    tech_stack: [
      { icon: <FaReact className="inline" fontSize={20} />, name: "React.js" },
      { icon: <FaNodeJs className="inline" fontSize={20} />, name: "Node.js" },
      { icon: <FaPython className="inline" fontSize={20} />, name: "Python 3" },
    ],
    images: [ASSET1_1, ASSET1_2, ASSET1_3, ASSET1_4, ASSET1_5, ASSET1_6],
  },
  {
    index: 4,
    title: "Project 5",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    banner: BANR5,
    github: "https://github.com/jayzsh",
    live: "https://jayantapandit.com",
    tech_stack: [
      { icon: <FaReact className="inline" fontSize={20} />, name: "React.js" },
      { icon: <FaNodeJs className="inline" fontSize={20} />, name: "Node.js" },
      { icon: <FaPython className="inline" fontSize={20} />, name: "Python 3" },
    ],
    images: [ASSET1_1, ASSET1_2, ASSET1_3, ASSET1_4, ASSET1_5, ASSET1_6],
  },
];
