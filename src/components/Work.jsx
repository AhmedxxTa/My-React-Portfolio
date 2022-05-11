import React from "react";
import workImg from "../assets/workImg1.png";
import workImg2 from "../assets/workImg2.png";
import workImg3 from "../assets/workImg3.png";
import workImg4 from "../assets/workImg4.png";
import workImg5 from '../assets/workImg5.png';

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent projects</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${workImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React DeFi Landing
              </span>
              <div className="pt-8 text-center">
                <a href="https://ahmedxxta.github.io/Defi-landing-Page/">
                  <button className="text-center text-lg rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/AhmedxxTa/Defi-landing-Page">
                  <button className="text-center text-lg rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${workImg2})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React Shutter landing
              </span>
              <div className="pt-8 text-center">
                <a href="https://ahmedxxta.github.io/react-shutter-landing-page/">
                  <button className="text-center text-lg rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/AhmedxxTa/react-shutter-landing-page">
                  <button className="text-center text-lg rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${workImg4})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React Mem Game
              </span>
              <div className="pt-8 text-center">
                <a href="https://ahmedxxta.github.io/react-tech-memory-game/">
                  <button className="text-center text-lg rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/AhmedxxTa/react-tech-memory-game">
                  <button className="text-center text-lg rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${workImg3})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Js Music Player
              </span>
              <div className="pt-8 text-center">
                <a href="https://vanilla-music-player1.netlify.app">
                  <button className="text-center text-lg rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/AhmedxxTa/Vanilla-Music-Player">
                  <button className="text-center text-lg rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${workImg5})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Expenses Dashboard
              </span>
              <div className="pt-8 text-center">
                <a href="https://ahmedxxta.github.io/React-Dashboard/">
                  <button className="text-center text-lg rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/AhmedxxTa/React-Dashboard/">
                  <button className="text-center text-lg rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Work;
