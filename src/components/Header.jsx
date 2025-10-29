
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    "Home",
    "About",
    "Education",
    "Skills",
    "Projects",
    "Internship",
    "Certificate",
    "Workshop Events",
    "Contact",
  ];

  return (
    <header className=" w-full h-20 flex justify-between items-center px-6 md:px-12 bg-gradient-to-r from-gray-900 via-gray-900 to-gray-900 shadow-lg backdrop-blur-md sticky top-0 z-50">
      {/* Logo / Name */}
      <a
        href="#"
        className="flex items-center space-x-2 font-Header-font text-2xl md:text-4xl font-extrabold tracking-wide"
      >
        {/* Stylish "S" logo */}
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-violet-500  text-white text-2xl font-bold shadow-md animate-pulse">
          S
        </span>
        <span className="bg-gradient-to-r from-violet-500 via-pink-500 to-orange-500 bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient-x">
          Samuel K
        </span>
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex space-x-2 text-base md:text-lg font-medium text-gray-200">
          {links.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="relative group px-2 py-1 transition-transform duration-300 hover:scale-105"
              >
                <span className="hover:text-violet-400 transition duration-300">
                  {item}
                </span>
                {/* underline animation */}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Nav */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <XMarkIcon className="text-white h-7 w-7 transition-transform duration-300 hover:scale-110" />
          ) : (
            <Bars3Icon className="text-white h-7 w-7 transition-transform duration-300 hover:scale-110" />
          )}
        </button>

        {isOpen && (
          <nav className="absolute top-20 left-0 w-full bg-gray-900/95 backdrop-blur-md shadow-lg z-50 animate-fadeIn">
            <ul className="flex flex-col items-center space-y-6 py-6 text-lg font-medium text-gray-200">
              {links.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-violet-400 transition duration-300 hover:scale-105"
                    onClick={() => setIsOpen(false)} // close menu on click
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
