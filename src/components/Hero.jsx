import { FaXTwitter } from 'react-icons/fa6';
import HeroImg from '../assets/man.png';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";

const Hero = () => {
  return (
    <section id="home" className="relative flex flex-col md:flex-row items-center px-6 md:px-12 py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      
      {/* Stylish Background Shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-20 w-72 h-72 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      </div>

      {/* Left Side - Text */}
      <div className="flex-1 text-center md:text-left pl-2 animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-violet-500 via-pink-500 to-orange-500 bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient-x tracking-wide font-hero-font">
          Hi,<br /> I'm Samuel K
        </h1>

        <p className="mt-4 text-lg md:text-xl font-medium text-gray-300 font-Logo-font">
           Gen AI Engineer / AI Fullstack Developer (Fresher)
        </p>

        {/* Social Media Links */}
        <div className="mt-8 flex justify-center md:justify-start space-x-6 text-2xl">
          <a
            href="https://x.com/SamuelStep61169?t=x5jEiweMshExCPXPUS79tw&s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800 hover:bg-black hover:text-white transform hover:scale-110 transition duration-300 shadow-lg"
          >
        <FaXTwitter size={28}/>
          </a>
          <a
            href="https://github.com/SAMSAMETH"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800 hover:bg-gray-900 hover:text-white transform hover:scale-110 transition duration-300 shadow-lg"
          >
            <AiFillGithub size={28} />
          </a>
          <a
            href="http://www.linkedin.com/in/samuel-k-22772a262"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800 hover:bg-blue-700 hover:text-white transform hover:scale-110 transition duration-300 shadow-lg"
          >
            <AiFillLinkedin size={28} />
          </a>
          <a
            href="https://www.instagram.com/sam_sameth_?igsh=emxmcjVmNnNiYWV5"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800 hover:bg-pink-700 hover:text-white transform hover:scale-110 transition duration-300 shadow-lg"
          >
            <AiFillInstagram size={28} />
          </a>
        </div>

        {/* Call to Action */}
        <div className="mt-8">
          <a
            href="#projects"
            className="px-6 py-3 bg-gradient-to-r from-violet-500 to-pink-500 rounded-xl font-semibold shadow-lg hover:opacity-90 transition"
          >
            View My Work
          </a>
        </div>
      </div>

      {/* Right Side - Image (No animation now) */}
      <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
        <img
          className="w-64 md:w-96 rounded-2xl shadow-xl"
          src={HeroImg}
          alt="Samuel K"
        />
      </div>
    </section>
  );
};

export default Hero;
