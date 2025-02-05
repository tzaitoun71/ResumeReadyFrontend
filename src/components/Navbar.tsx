import { PaperAirplaneIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark"); // Apply dark mode to body
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 backdrop-blur-md shadow-md z-50 transition-colors duration-300">
      <div className="w-full px-6 py-4 flex items-center justify-between">
        
        {/* Left-Aligned Logo - JobStarter */}
        <div className="flex items-center space-x-2">
          <PaperAirplaneIcon className="h-8 w-8 text-[#4C51BF] rotate-45" />
          <a href="#" className="text-gray-900 dark:text-white font-extrabold text-2xl tracking-wide">
            JobStarter
          </a>
        </div>

        {/* Right-Aligned Navigation + Buttons */}
        <div className="flex items-center space-x-8 ml-auto">
          <ul className="hidden md:flex space-x-8 text-gray-800 dark:text-gray-300 font-medium">
            <li><a href="#" className="hover:text-[#4C51BF] transition">Features</a></li>
            <li><a href="#" className="hover:text-[#4C51BF] transition">Pricing</a></li>
          </ul>

          {/* Dark Mode Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {darkMode ? (
              <SunIcon className="h-6 w-6 text-yellow-400" />
            ) : (
              <MoonIcon className="h-6 w-6 text-gray-800" />
            )}
          </button>

          {/* CTA Buttons */}
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-[#4C51BF] font-semibold px-4 py-2 border border-[#4C51BF] rounded-lg hover:bg-[#4C51BF] hover:text-white transition">
              Contact Us
            </a>
            <a href="#" className="bg-[#4C51BF] text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:bg-[#3b3f7a] transition">
              Join the Waitlist
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
