import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import profilePic from "../../assets/images/vidyashree.png"; // ✅ correct import

const Navbar = () => {
  const menu = ["About", "Skills", "Experience", "Education", "Contact"];

  const { dark, toggleTheme } = useTheme();

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-white/30 dark:bg-black/30 backdrop-blur-xl border-b border-white/20 dark:border-gray-700 shadow-sm"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* LOGO */}
        <a
          href="#About"
          className="flex items-center gap-3 group"
        >
          {/* PROFILE IMAGE */}
          <img
            src={profilePic}
            alt="Vidyashree"
            className="w-10 h-10 rounded-full object-cover border border-blue-500 shadow group-hover:scale-110 transition duration-300"
          />

          {/* SIGNATURE NAME */}
          <span className="relative text-2xl font-['Pacifico'] tracking-wide">
            
            {/* Gradient Text */}
            <span className="bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
              Vidyashree
            </span>

            {/* Animated underline */}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 group-hover:w-full transition-all duration-500"></span>
          </span>
        </a>

        {/* MENU */}
        <div className="hidden md:flex gap-8 items-center">

          {menu.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="relative group text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 transition"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          {/* TOGGLE BUTTON */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="relative w-10 h-10 flex items-center justify-center"
          >
            {/* Moon */}
            <i
              className={`ri-moon-line text-xl text-slate-600 dark:text-slate-300 absolute transition-all duration-500 ${
                dark ? "-rotate-90 opacity-0" : "rotate-0 opacity-100"
              }`}
            />

            {/* Sun */}
            <i
              className={`ri-sun-line text-xl text-amber-500 absolute transition-all duration-500 ${
                dark ? "rotate-0 opacity-100" : "rotate-90 opacity-0"
              }`}
            />
          </button>

        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;