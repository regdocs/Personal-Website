import { FaAngleRight } from "react-icons/fa";
import "../../styles/about.css";

function Page6() {
  return (
    <div className="flex flex-row h-full w-full relative snap-start">
      <div className="px-36 flex flex-col justify-center pt-12">
        <div className="text-5xl mb-6 font-sans font-black">
          Future Goals &amp; Aspirations
        </div>
        <div className="font-sans space-y-5 overflow-auto h-fit">
          <p>
            As a passionate Full Stack Developer, I am currently pursuing a
            Bachelor&apos;s degree in Electronics and Communication Engineering.
            Alongside my academic , I find immense joy in mentoring aspiring
            students, nurturing their curiosity and passion for Computer Science
            and technology.
          </p>
          <p>
            {" "}
            In my role as a Full Stack Developer, I collaborate with startups to
            establish a strong online presence and streamline their sales
            workflows, empowering them to thrive in the digital landscape.
            Drawing on my expertise in backend development, microservice
            architecture, and the MERN stack, I craft scalable and efficient web
            applications, creating dynamic user experiences with JavaScript and
            Python. Additionally, my knowledge of Linux and open-source
            technologies allows me to develop adaptable and secure systems
            tailored to evolving business needs.
          </p>
          <p>
            {" "}
            Beyond my academic pursuits and professional endeavors, I am an avid
            Star Wars fanatic, finding inspiration in the power of storytelling.
            I am also deeply intrigued by the realms of physics and astronomy,
            constantly seeking to explore the wonders of the universe.
          </p>
          <p>
            {" "}
            With a genuine passion for technology, a commitment to mentoring,
            and an unwavering fascination with the mysteries of the cosmos, I am
            dedicated to shaping the future of digital innovation. Let&apos;s
            connect and embark on a transformative journey, where we can turn
            ideas into reality and navigate the endless possibilities of the
            ever-evolving digital landscape.
          </p>
        </div>

        <button className="w-fit font-mono border border-white group rounded-full fill-transparent p-2 px-4 outline-none uppercase font-bold hover:bg-white hover:text-[#31275b] transition-colors duration-200 mt-9">
          <FaAngleRight className="group-hover:fill-[#31275b] inline-block duration-200" />
          Go to the Top
        </button>
      </div>
    </div>
  );
}

export default Page6;
