import React, { useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaReact,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";
import profilePic from "/src/assets/images/vidyashree.png";

const Footer = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [activeText, setActiveText] = useState(null);

  // serial animation
  useEffect(() => {
    const items = ["location", "phone", "email"];
    items.forEach((item, i) => {
      setTimeout(() => {
        setVisibleItems((prev) => [...prev, item]);
      }, i * 500);
    });
  }, []);

  const handleClick = (id) => {
    setActiveText(id === activeText ? null : id);
  };

  const textClass = (id) =>
    `flex items-center gap-3 px-3 py-1.5 rounded-lg cursor-pointer transition-all duration-400
    ${
      activeText === id
        ? "scale-110 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white shadow-lg"
        : "hover:scale-105 hover:bg-gray-100"
    }`;

  const reveal = (id) =>
    visibleItems.includes(id)
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-4";

  return (
    <footer className="relative w-full overflow-hidden 
    bg-gradient-to-br from-gray-50 via-white to-blue-50 
    text-gray-800 py-6">

      {/* subtle lottie background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <Player
          autoplay
          loop
          src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">

        {/* 🔥 TOP ROW */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          {/* LOGO (YOUR STYLE PRESERVED) */}
          <a href="#About" className="flex items-center gap-3 group">

            <img
              src={profilePic}
              alt="Vidyashree"
              className="w-10 h-10 rounded-full object-cover border border-blue-500 shadow group-hover:scale-110 transition duration-300"
            />

            <span className="relative text-xl font-['Pacifico'] tracking-wide">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
                Vidyashree
              </span>

              <span className="absolute left-0 -bottom-1 w-0 h-[2px] 
              bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 
              group-hover:w-full transition-all duration-500"></span>
            </span>
          </a>

          {/* CONTACT (COMPACT + SERIAL) */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm">

            <div
              onClick={() => handleClick("location")}
              className={`${textClass("location")} transition-all duration-700 ${reveal("location")}`}
            >
              <FaMapMarkerAlt className="text-blue-500" />
              Bangalore, India
            </div>

            <div
              onClick={() => handleClick("phone")}
              className={`${textClass("phone")} transition-all duration-700 ${reveal("phone")}`}
            >
              <FaPhoneAlt className="text-green-500" />
              +91 6361880128
            </div>

            <div
              onClick={() => handleClick("email")}
              className={`${textClass("email")} transition-all duration-700 ${reveal("email")}`}
            >
              <FaEnvelope className="text-pink-500" />
              vidyashreeatanur@gmail.com
            </div>

          </div>

          {/* SOCIAL */}
          <div className="flex gap-3">
            <a href="#" className="iconBox hover:bg-blue-500">
              <FaLinkedinIn />
            </a>
            <a href="#" className="iconBox hover:bg-gray-900">
              <FaGithub />
            </a>
            <a href="#" className="iconBox hover:bg-pink-500">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* 🔻 BOTTOM */}
        <div className="mt-4 pt-3 border-t border-gray-200 flex justify-between items-center text-xs text-gray-500">

          <p>© 2026 Vidyashree</p>

          <div className="flex items-center gap-2 text-base">
            <FaReact className="animate-spin-slow text-blue-500" />
            <SiTailwindcss className="text-sky-400" />
            <SiJavascript className="text-yellow-400" />
          </div>
        </div>
      </div>

      {/* 🎨 ANIMATIONS */}
      <style>{`

        @keyframes gradientMove {
          0% { background-position: 0% }
          50% { background-position: 100% }
          100% { background-position: 0% }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientMove 5s ease infinite;
        }

        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-spin-slow {
          animation: spinSlow 6s linear infinite;
        }

        .iconBox {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          background: #f3f4f6;
          transition: all 0.3s;
        }

        .iconBox:hover {
          color: white;
          transform: scale(1.1);
        }

      `}</style>
    </footer>
  );
};

export default Footer;