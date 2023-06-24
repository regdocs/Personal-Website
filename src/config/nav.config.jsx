/* eslint-disable react/jsx-key */
import {
  FaCode,
  FaFileDownload,
  FaGraduationCap,
  FaHome,
  FaMandalorian,
  FaRegNewspaper,
  FaScroll,
} from "react-icons/fa";

export const navConfig = [
  [0, "Home", <FaHome className="inline-block mr-2" fontSize={20} />, "/", 1],
  [
    1,
    "About",
    <FaMandalorian className="inline-block mr-2" fontSize={20} />,
    "/about",
    6,
  ],
  [
    2,
    "Portfolio",
    <FaCode className="inline-block mr-2" fontSize={20} />,
    "/portfolio",
    1,
  ],
  [
    3,
    "Blogs",
    <FaRegNewspaper className="inline-block mr-2" fontSize={20} />,
    "/blogs",
    1,
  ],
  [
    4,
    "Publications",
    <FaScroll className="inline-block mr-2" fontSize={20} />,
    "/publications",
    1,
  ],
  [
    5,
    "Communities",
    <FaGraduationCap className="inline-block mr-2" fontSize={20} />,
    "/communities",
    1,
  ],
  [
    6,
    "Resume",
    <FaFileDownload className="inline-block mr-2" fontSize={20} />,
    "/resume",
    1,
  ],
];
