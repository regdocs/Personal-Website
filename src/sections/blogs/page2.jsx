import { blogs } from "../../config/blogs.config";
import BLOG_SCREEN from "../../assets/blog-screen.svg";
import "../../styles/blogs.css";
import { FaAngleDoubleRight } from "react-icons/fa";

function Page2() {
  return (
    <div className="flex flex-row h-full w-full relative snap-start items-center px-24">
      {blogs.map((topic) => (
        <div
          key={topic}
          className="flex-grow h-full flex flex-col overflow-auto blinds no-scrollbar"
        >
          <div className="pt-32" />
          {topic.articles.map((article) => (
            <div
              key={article}
              className="m-16 mb-0 bg-opacity-25 flex flex-col relative drop-shadow-lg box-border"
            >
              <img
                src={BLOG_SCREEN}
                alt="article banner"
                className="w-full z-10 drop-shadow-xl pointer-events-none"
              />
              <div className="absolute top-0 left-0 w-full h-full blog-item overflow-hidden group flex flex-col cursor-pointer">
                <img
                  src={article.image}
                  alt="article banner"
                  className="h-3/5 border-b trans-border object-cover w-full object-top group-hover:object-center transition-all duration-200"
                />
                <div className="h-2/5 bg-[#37366e8f] p-[10%] py-[4%] flex flex-col">
                  <p className="hover-backlight text-lg font-mono uppercase glow-text group-hover:font-bold">
                    <FaAngleDoubleRight className="inline-block group-hover:mr-2 transition-all duration-200" />{" "}
                    <span>{"🪐 " + article.title}</span>
                  </p>
                  <p className="text-xs text-slate-300 tresco overflow-hidden pl-8 flex-grow">
                    {article.preview}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="pb-60" />
        </div>
      ))}
    </div>
  );
}

export default Page2;
