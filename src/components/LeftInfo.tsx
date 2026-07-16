import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

const LeftInfo = () => {
  return (
    <div className="flex flex-col gap-4 p-10 text-white bg-gray-800 rounded-2xl lg:rounded-none lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:w-1/3 ">
      {" "}
      <div className="flex justify-center">
        <img
          src="./img/Muizz Jamiu.png"
          alt="muizzpic"
          className="w-70 h-70 md:w-70 md:h-70 lg:w-70 lg:h-70 rounded-full object-cover align-center border-4 border-[#888]"
        />
      </div>
      <div className="flex flex-col gap-3">
        <h4 className="text-2xl font-bold text-gray-400 uppercase">Info</h4>
        <hr className="border-gray-700" />

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 transition-all cursor-pointer hover:translate-x-1 ">
            <FaEnvelope size={20} />
            <a href="mailto:opeyemimuizz@gmail.com">opeyemimuizz@gmail.com</a>
          </div>

          <div className="flex items-center gap-3">
            <FaMapMarkerAlt size={20} />
            <span>Lagos, Nigeria</span>
          </div>

          <div className="flex items-center gap-3 transition-all cursor-pointer hover:translate-x-1 ">
            <FaGithub size={20} />
            <a
              href="https://github.com/spr-tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/spr-tech
            </a>
          </div>

          <div className="flex items-center gap-3 transition-all cursor-pointer hover:translate-x-1 ">
            {" "}
            <FaLinkedin size={20} />
            <a
              href="https://linkedin.com/in/muizz-opeyemi"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              linkedin.com/in/muizz-opeyemi
            </a>
          </div>

          <div className="flex justify-center ">
            <p className=" hidden lg:block max-w-lg text-center text-gray-300 bg-[#1f2937] border border-white/20 p-4 my-10">
              I build interfaces that feel easy to use, simple, intuitive, and
              responsive. I enjoy turning complex ideas into experiences people
              actually enjoy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftInfo;
