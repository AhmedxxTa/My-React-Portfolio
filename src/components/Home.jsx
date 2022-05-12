import React from "react";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 text-lg">Hi, My Name Is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Ahmed Tamer
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Web Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm an enthusiastic Web Developer with a good foundation in HTML, CSS,
          JavaScript, Reactjs.
        </p>

        <div>
          <button className="text-white group border-2 rounded-md px-6 py-3 my-2 flex items-center duration-100 hover:bg-pink-600 hover:border-pink-600 hover:scale-105 active:scale-95">
            <Link to="work" smooth={true} duration={500}>
              View Projects
            </Link>
          </button>
        </div>
      </div>

    </div>
  );
};

export default Home;
