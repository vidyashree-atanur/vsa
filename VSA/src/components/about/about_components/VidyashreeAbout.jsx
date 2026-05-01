import React from "react";
import {
  FaArrowRight,
  FaDownload,
  FaLinkedin,
  FaGithub,
  FaReact,
  FaEnvelope,
} from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { HiCode } from "react-icons/hi";

const VidyashreeAbout = () => {
  return (
    <section
      className="
      pt-28 md:pt-32 
      pb-16
      bg-gray-100 dark:bg-gray-900 
      text-gray-800 dark:text-gray-200 
      transition duration-500
    "
    >
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 -z-10 grid-bg"></div>

      {/* TOP GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 
        w-[500px] h-[500px] bg-blue-400/10 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div className="space-y-8 animate-fadeInUp">

          {/* STATUS */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full 
            bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border shadow-sm">

            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute h-full w-full bg-emerald-400 rounded-full opacity-75"></span>
              <span className="relative h-2 w-2 bg-emerald-500 rounded-full"></span>
            </span>

            <span className="text-xs text-slate-700 dark:text-slate-300">
              Available for Opportunities
            </span>
          </div>

          {/* NAME */}
          <h1 className="leading-tight">
            <a
              href="#"
              className="
                text-4xl md:text-6xl 
                font-['Pacifico'] 
                bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                bg-clip-text text-transparent
                animate-nameZoom
                hover:scale-105 transition duration-500
                leading-tight
              "
            >
              VIDYASHREE <br /> ATANUR
            </a>
          </h1>

          {/* BUTTONS */}
          <div className="flex gap-4 flex-wrap">
            <a 
              href="#projects"
              className="group px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition flex items-center gap-2 hover:scale-105"
            >
              View Projects
              <FaArrowRight className="group-hover:translate-x-1 transition" />
            </a>

            <a
              href="/resume/Vidyashree.pdf"
              download
              className="px-8 py-4 border rounded-xl flex items-center gap-2 hover:border-blue-500 hover:scale-105"
            >
              <FaDownload />
              Resume
            </a>
          </div>

          {/* SOCIAL */}
          <div className="flex items-center gap-4 pt-4">
            <span className="text-sm text-slate-500">Connect with me:</span>

            <div className="flex gap-3">
              {/* LINKEDIN */}
              <a 
                href="https://www.linkedin.com/in/er-vidyashree-atanur-17037138a"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaLinkedin />
              </a>

              {/* GITHUB */}
              <a 
                href="https://github.com/vidyashreeatanur-sudo"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon delay"
              >
                <FaGithub />
              </a>

              {/* EMAIL */}
              <a 
                href="mailto:vidyashreeatanur@gmail.com"
                className="social-icon delay2"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center items-center animate-scaleUp">
          <div className="relative w-[320px] h-[320px] flex items-center justify-center">

            <div className="absolute w-full h-full rounded-full 
              bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 
              blur-3xl animate-pulse"></div>

            <div className="relative w-[260px] h-[260px] rounded-full 
              backdrop-blur-xl bg-white/10 dark:bg-white/5 
              border border-white/20 shadow-2xl flex items-center justify-center">

              <div className="w-[200px] h-[200px] rounded-full overflow-hidden">
                <video
                  src="/animation/anglebrackets.mp4"
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover scale-110"
                />
              </div>
            </div>

            <div className="absolute w-[300px] h-[300px] rounded-full 
              border border-blue-400/20 animate-spin-slow"></div>

            <div className="tag top-4 right-4">
              <FaReact /> React
            </div>

            <div className="tag bottom-4 left-4 delay">
              <HiCode /> UI Dev
            </div>

            <div className="tag top-1/2 -right-6 delay2">
              <MdOutlineDesignServices /> Design
            </div>

          </div>
        </div>
      </div>

      {/* STYLES */}
      <style>{`

        .grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(to right, rgba(0,0,0,0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.07) 1px, transparent 1px);
          background-size: 45px 45px;
          animation: moveGrid 35s linear infinite;
        }

        @keyframes moveGrid {
          from { transform: translate(0,0); }
          to { transform: translate(45px,45px); }
        }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0); }
        }

        .delay { animation-delay: 0.5s; }
        .delay2 { animation-delay: 1s; }

        .tag {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 5px;
          background: white;
          padding: 6px 10px;
          border-radius: 10px;
          font-size: 12px;
          animation: float 4s infinite;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        .social-icon {
          width: 40px;
          height: 40px;
          background: #f1f5f9;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: float 4s infinite;
          transition: 0.3s;
        }

        .social-icon:hover {
          transform: scale(1.1);
          background: #2563eb;
          color: white;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
        }

        @keyframes scaleUp {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .animate-scaleUp {
          animation: scaleUp 1s ease forwards;
        }

        @keyframes nameZoom {
          0% { transform: scale(0.9); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }

        .animate-nameZoom {
          animation: nameZoom 3s ease-in-out infinite;
        }

        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-spin-slow {
          animation: spinSlow 18s linear infinite;
        }

      `}</style>
    </section>
  );
};

export default VidyashreeAbout;