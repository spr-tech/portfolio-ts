import Header from "./Header";
import Experience from "./Experience";
import Skills from "./Skills";
import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <div className=" lg">
      <Header />
      <Experience />
      <Skills />
      <div className="fixed z-50 flex items-center justify-center bottom-5 right-8 group">
        <span className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[11px] font-medium px-2.5 py-1.5 rounded-lg whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-200 z-50 shadow-md">
          Download CV
        </span>
        <span className="absolute inline-flex w-12 h-12 opacity-75 pointer-events-none rounded-xl bg-gray-600/60 animate-ping" />
        <a
          href="/001_ Muizz  Jamiu_cv.pdf"
          download="001_ Muizz  Jamiu_cv.pdf"
          className="w-12 h-12 flex items-center justify-center text-white bg-gray-900 hover:bg-gray-700 active:scale-[0.95] rounded-xl transition-all shadow-md shadow-gray-900/10"
          aria-label="Download CV"
        >
          <FaDownload className="text-base transition-transform duration-200 group-hover:translate-y-0.5" />
        </a>
      </div>
    </div>
  );
};

export default About;
