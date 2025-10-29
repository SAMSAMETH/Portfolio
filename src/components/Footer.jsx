import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6"; // Import X logo

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center space-y-4">
        
        {/* Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://www.instagram.com/sam_sameth_?igsh=emxmcjVmNnNiYWV5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-400 transition duration-300 transform hover:scale-125"
          >
            <AiFillInstagram size={30} />
          </a>
          <a
            href="https://github.com/SAMSAMETH"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition duration-300 transform hover:scale-125"
          >
            <AiFillGithub size={30} />
          </a>
          <a
            href="http://www.linkedin.com/in/samuel-k-22772a262"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 transition duration-300 transform hover:scale-125"
          >
            <AiFillLinkedin size={30} />
          </a>
          <a
            href="https://x.com/SamuelStep61169?t=x5jEiweMshExCPXPUS79tw&s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition duration-300 transform hover:scale-125"
          >
            <FaXTwitter size={30} />
          </a>
        </div>

        {/* Bottom Note */}
        <div className="text-center text-gray-400 text-sm md:text-base font-medium tracking-wide">
          © {new Date().getFullYear()} Samuel K. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
