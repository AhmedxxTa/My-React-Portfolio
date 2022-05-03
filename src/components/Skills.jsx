import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Bootstrap from "../assets/bootstrap.png";
import Tailwind from "../assets/tailwind.png";
import JavaScript from "../assets/javascript.svg";
import TypeScript from "../assets/typescript.png";
import ReactImg from "../assets/react.png";
import NextJs from "../assets/nextjs.png";
import NodeJs from "../assets/nodejs.png";
import Github from "../assets/github.png";
import MongoDB from "../assets/mongodb.png";
import MySql from "../assets/mysql.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">Experience</p>
          <p className="py-4">These are the skills I Learned.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div>
            <img className="w-20 mx-auto" src={HTML} alt="html icon" />
            <p>HTML</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;
