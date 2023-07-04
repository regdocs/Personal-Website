import { featured } from "../../config/blogs.config";
import FEATURED_SCREEN from "../../assets/featured-blog-screen.svg";
import "../../styles/blogs.css";
import ReactTypingEffect from "react-typing-effect";
import { FaAngleDoubleRight } from "react-icons/fa";

function Page1() {
  return (
    <div
      id="featured"
      className="flex flex-col w-full relative snap-start justify-center h-full"
    >
      <div className="flex-grow flex flex-col">
        <div className="mt-48 mx-36 font-sans text-4xl">
          <span className="font-bold uppercase">Blogs: </span>
          <span className="uppercase font-light">Featured</span>
          <ReactTypingEffect cursor="█" />
        </div>
        <div className="overflow-x-scroll w-full flex-grow snap-x snap-proximity flex flex-row no-scrollbar items-center">
          <div className="ml-36" />
          {featured.map((article) => (
            <div
              key={article}
              className="mr-24 cursor-pointer h-fit w-fit shrink-0 relative group snap-center"
            >
              <div className="absolute top-0 left-0 featured-mask h-full w-full -z-[1]">
                <img
                  src={article.image}
                  className="h-[68%] object-cover object-top trans-border border-b"
                />
                <div className="h-[32%] bg-[#37366e8f] p-[10%] py-[4%] flex flex-col">
                  <p className="hover-backlight text-lg font-mono uppercase glow-text group-hover:font-bold">
                    <FaAngleDoubleRight className="inline-block group-hover:mr-2 transition-all duration-200" />{" "}
                    <span>{"🪐 " + article.title}</span>
                  </p>
                  <p className="text-xs text-slate-300 tresco overflow-hidden pl-8 flex-grow">
                    {article.preview}
                  </p>
                </div>
              </div>
              <img
                src={FEATURED_SCREEN}
                alt="featured banner"
                className="h-[400px] pointer-events-none"
              />
            </div>
          ))}
          <div className="ml-48" />
        </div>
      </div>
      <div className="mb-40  w-full flex flex-row justify-evenly font-mono uppercase font-bold bg-white">
        {/* {["Programming", "Space & Tech", "Journal"].map((i) => (
          <span key={i} className="px-[10%] text-[#565d9f] py-[1px]">
            {i}
          </span>
        ))} */}
      </div>
    </div>
  );
}

export default Page1;
