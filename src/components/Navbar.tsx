import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/30 backdrop-blur-md shadow-md z-50">
      <div className="w-full px-6 py-4 flex items-center justify-between">
        
        {/* Left-Aligned Logo - Resu */}
        <div className="flex items-center space-x-2">
          <PaperAirplaneIcon className="h-8 w-8 text-[#4C51BF] rotate-45" />
          <a href="#" className="text-gray-900 font-extrabold text-2xl tracking-wide">
            Resu
          </a>
        </div>

        {/* Right-Aligned Navigation + Buttons */}
        <div className="flex items-center space-x-8 ml-auto">
          <ul className="hidden md:flex space-x-8 text-gray-800 font-medium">
            <li><a href="#" className="hover:text-[#4C51BF] transition">Features</a></li>
            <li><a href="#" className="hover:text-[#4C51BF] transition">Pricing</a></li>
          </ul>

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
