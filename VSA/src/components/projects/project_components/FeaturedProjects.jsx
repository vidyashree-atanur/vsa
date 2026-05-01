import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Compliance Management System",
    description:
      "Enterprise SaaS platform with role-based dashboards and automated compliance workflows.",
    tech: ["React.js", "Tailwind CSS", "REST API"],
  },
  {
    title: "Audit Management Platform",
    description:
      "Audit lifecycle system with scheduling, tracking, and reporting for enterprise audits.",
    tech: ["React.js", "JavaScript", "Bootstrap"],
  },
  {
    title: "Tourism Management System",
    description:
      "College project for managing tourism bookings and dashboards using full-stack architecture.",
    tech: ["React.js", "Node.js", "Express", "MySQL"],
  },
  {
    title: "Client UI Modules",
    description:
      "Responsive UI modules and real-time features developed for production client systems.",
    tech: ["React.js", "Tailwind", "UI Design"],
  },
];

const FeaturedProjects = () => {
  const [index, setIndex] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative py-24 px-6 overflow-hidden 
    bg-gradient-to-br from-white via-gray-50 to-blue-50">

      {/* 🔥 LOTTIE BACKGROUND */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Player
          autoplay
          loop
          src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json"
        />
      </div>

      {/* GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-blue-400/20 
      blur-[120px] rounded-full top-10 left-1/2 -translate-x-1/2" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">

        {/* HEADER */}
        <h2 className="text-3xl md:text-4xl font-bold 
        bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 
        bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <p className="text-gray-500 mt-3 text-sm">
          Highlighting real-world applications and system design experience
        </p>

        {/* CAROUSEL */}
        <div className="relative mt-16">

          {/* CARD */}
          <div className="relative h-[300px] flex items-center justify-center">

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className="absolute w-full bg-white/70 backdrop-blur-xl 
                border border-gray-200 rounded-2xl p-8 shadow-xl"
              >

                <h3 className="text-xl font-semibold mb-3">
                  {projects[index].title}
                </h3>

                <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                  {projects[index].description}
                </p>

                <div className="flex flex-wrap justify-center gap-2">
                  {projects[index].tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full 
                      bg-gray-100 text-gray-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

          {/* CONTROLS */}
          <div className="flex justify-center gap-6 mt-6">

            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white shadow hover:scale-110 transition"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white shadow hover:scale-110 transition"
            >
              <ChevronRight size={18} />
            </button>

          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-4">
            {projects.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition 
                ${i === index ? "bg-blue-500" : "bg-gray-300"}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;