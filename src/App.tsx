import "./index.css";
import LeftInfo from "./components/LeftInfo";
import About from "./components/About";

export default function App() {
  return (
    <div className="flex flex-col lg:flex-row lg:h-screen bg-black">
      <div className="p-3 ">
        <LeftInfo />
      </div>

      <div className="p-5 lg:ml-[32.333%] md:h-screen lg:h-screen overflow-y-auto ">
        <About />
      </div>
    </div>
  );
}
