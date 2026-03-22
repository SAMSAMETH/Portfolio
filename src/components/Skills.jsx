import React from "react";
import { FaReact, FaPython, FaDatabase, FaCogs } from "react-icons/fa";
import { SiDjango, SiTailwindcss } from "react-icons/si";
import { MdOutlinePsychology } from "react-icons/md"; // For AI/Agents
import { AiOutlineApi } from "react-icons/ai"; // For LangChain / automation

const Skills = () => {
  const skills = [
    { name: "React.js", icon: <FaReact size={40} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} /> },
    { name: "Python", icon: <FaPython size={40} /> },
    { name: "Django", icon: <SiDjango size={40} /> },
    { name: "MySQL", icon: <FaDatabase size={40} /> },
  ];

  return (
    <section id="skills" className="px-6 md:px-12 py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-violet-500 via-pink-500 to-orange-500 bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient-x font-hero-font">
          My Skills
        </h1>
        <p className="text-gray-400 mb-12 text-lg md:text-xl font-light">
          Tools, frameworks, and technologies I work with
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-800/50 backdrop-blur-md shadow-lg border border-gray-700 hover:border-violet-500 transform hover:scale-110 hover:shadow-violet-500/40 transition duration-500 ease-in-out group"
            >
              <div className="mb-4 text-4xl group-hover:animate-bounce">
                {skill.icon}
              </div>
              <span className="text-lg font-semibold tracking-wide">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
