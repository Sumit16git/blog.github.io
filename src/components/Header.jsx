import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage on initial render to preserve user theme preference
    return localStorage.getItem("theme") === "dark";
  });

  // Track window scroll coordinates to toggle solid background layout
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Synchronize darkMode state changes directly with the HTML root tag element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-200 transition-all duration-300 ${
        isScrolled
          ? "bg-white dark:bg-[#1a1e21] shadow-md border-b border-gray-100 dark:border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-267 mx-auto w-full px-4 py-4.5 flex items-center justify-between">
        {/* Brand Identity Logo (Now shifts text color properly based on darkMode even when at the top) */}
        <Link
          to="/"
          className={`text-2xl font-semibold tracking-wide transition-colors duration-300 ${
            isScrolled
              ? "text-[#172317] dark:text-white"
              : darkMode
                ? "text-white"
                : "text-[#172317]"
          }`}
        >
          My <span className="text-[#fd8f44]">Blog</span>
        </Link>

        {/* Right Interface Controls */}
        <div className="flex items-center gap-4">
          {/* Dynamic Theme Controller Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`text-xl p-2 rounded-full transition-all duration-300 ${
              isScrolled
                ? "text-[#172317] dark:text-[#fd8f44] hover:bg-gray-100 dark:hover:bg-gray-800"
                : darkMode
                  ? "text-white dark:text-[#fd8f44] hover:bg-white/10 dark:hover:bg-gray-800/40"
                  : "text-[#172317] hover:bg-gray-200/50"
            }`}
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? (
              <i className="fas fa-sun"></i> // Render sun icon during dark runtime layout
            ) : (
              <i className="fas fa-moon"></i> // Render moon icon during light runtime layout
            )}
          </button>

          {/* User Portal Action Redirection */}
          <Link
            to="#"
            className="px-3.5 py-2 uppercase font-medium text-sm rounded bg-[#fd8f44] text-white hover:bg-[#e2762f] transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
