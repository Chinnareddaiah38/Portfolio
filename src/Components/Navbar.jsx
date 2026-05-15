import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import resume from "../assets/Chinnareddiah_Chagalamarri_Resume.pdf";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu when clicking outside or on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      if (!event.target.closest('.mobile-menu-container')) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 h-[70px] md:h-[75px] bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 bg-[length:300%_300%] animate-[darkWave_12s_linear_infinite] flex items-center justify-between px-3 sm:px-4 md:px-10 lg:px-16 xl:px-20 box-border z-50 shadow-2xl">
      {/* BRAND */}
      <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
        <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-sky-400 via-indigo-500 to-purple-500 animate-[spinBox_4s_linear_infinite] shadow-[0_0_18px_rgba(99,102,241,0.6),0_8px_20px_rgba(0,0,0,0.4)]"></div>
          <div className="absolute inset-0 flex items-center justify-center font-black text-sm sm:text-lg md:text-xl text-white z-10">C</div>
        </div>
        <h2 className="text-sky-100 font-bold text-sm sm:text-base md:text-lg whitespace-nowrap">Chinnareddaiah</h2>
      </div>

      {/* DESKTOP LINKS */}
      <div className="hidden md:flex items-center gap-4 lg:gap-6">
        <Link to="/" className="text-sky-100 font-medium relative px-2 lg:px-3 py-2 rounded-md transition-all duration-300 hover:text-sky-400 hover:bg-sky-400/10 whitespace-nowrap text-sm lg:text-base">
          Home
        </Link>
        <Link to="/about" className="text-sky-100 font-medium relative px-2 lg:px-3 py-2 rounded-md transition-all duration-300 hover:text-sky-400 hover:bg-sky-400/10 whitespace-nowrap text-sm lg:text-base">
          About
        </Link>
        <Link to="/certificates" className="text-sky-100 font-medium relative px-2 lg:px-3 py-2 rounded-md transition-all duration-300 hover:text-sky-400 hover:bg-sky-400/10 whitespace-nowrap text-sm lg:text-base">
          Certificates
        </Link>
        <Link to="/contact" className="text-sky-100 font-medium relative px-2 lg:px-3 py-2 rounded-md transition-all duration-300 hover:text-sky-400 hover:bg-sky-400/10 whitespace-nowrap text-sm lg:text-base">
          Contact
        </Link>
        <a
          href={resume}
          target="_blank"
          rel="noreferrer"
          className="px-3 lg:px-4 py-2 bg-gradient-to-br from-sky-400 to-indigo-500 rounded-lg text-white font-semibold text-xs lg:text-sm whitespace-nowrap transition-all duration-300 hover:shadow-lg hover:scale-105"
        >
          Resume
        </a>
      </div>

      {/* MOBILE MENU BUTTON */}
      <div className="mobile-menu-container md:hidden">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          className="text-sky-100 p-2 rounded-md hover:bg-sky-400/10 transition-colors z-60"
          aria-label="Toggle mobile menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-slate-900/98 backdrop-blur-md border-t border-slate-700 md:hidden shadow-2xl z-40">
          <div className="flex flex-col items-center py-6 space-y-4 px-4">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-sky-100 font-medium px-6 py-3 rounded-md transition-all duration-300 hover:text-sky-400 hover:bg-sky-400/10 w-full text-center text-base"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="text-sky-100 font-medium px-6 py-3 rounded-md transition-all duration-300 hover:text-sky-400 hover:bg-sky-400/10 w-full text-center text-base"
            >
              About
            </Link>
            <Link
              to="/certificates"
              onClick={() => setIsOpen(false)}
              className="text-sky-100 font-medium px-6 py-3 rounded-md transition-all duration-300 hover:text-sky-400 hover:bg-sky-400/10 w-full text-center text-base"
            >
              Certificates
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="text-sky-100 font-medium px-6 py-3 rounded-md transition-all duration-300 hover:text-sky-400 hover:bg-sky-400/10 w-full text-center text-base"
            >
              Contact
            </Link>
            <a
              href={resume}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="px-6 py-3 bg-gradient-to-br from-sky-400 to-indigo-500 rounded-lg text-white font-semibold text-base transition-all duration-300 hover:shadow-lg hover:scale-105 w-full text-center"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}