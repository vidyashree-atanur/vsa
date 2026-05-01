import React from "react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import {
  Briefcase,
  Calendar,
  CheckCircle,
  ExternalLink,
} from "lucide-react";

const experiences = [
  {
    company: "Vizionex Technologies",
    role: "Web Developer Intern",
    duration: "Nov 2025 – Present",
    link: "https://share.google/VFssmDkRXpKD4OiWg",
    points: [
      "Developing responsive web interfaces using modern frontend technologies",
      "Working on real-time client modules with focus on performance and UI consistency",
      "Enhancing UI using reusable components and clean architecture",
    ],
  },
  {
    company: "Folksoft Technologies Pvt. Ltd",
    role: "Frontend Developer (Full-time)",
    duration: "Mar 2024 – Sep 2025",
    link: "https://blog.folksoft.tech/",
    points: [
      "Built Compliance & Audit Management system with role-based dashboards",
      "Developed reusable React + TypeScript components",
      "Integrated REST APIs and managed state using Zustand",
      "Improved performance and ensured cross-browser compatibility",
    ],
  },
  {
    company: "SRT Softech Pvt. Ltd",
    role: "Full Stack Developer Intern",
    duration: "Aug 2023 – Feb 2024",
    link: "https://srtsoftech.com/",
    points: [
      "Developed Tourism Management System (College Project)",
      "Built booking modules, dashboards, and UI workflows",
      "Used React, Node.js, Express, and MySQL",
      "Gained real-time full-stack development experience",
    ],
  },
];

const ProfessionalExperience = () => {
  return (
    <section className="relative w-full px-6 py-16 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-blue-50">

      {/* 🔥 LOTTIE BACKGROUND */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Player
          autoplay
          loop
          src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json"
        />
      </div>

      {/* SOFT GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-blue-400/20 blur-[120px] rounded-full top-10 left-1/2 -translate-x-1/2" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold 
          bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 
          bg-clip-text text-transparent">
            Professional Experience
          </h2>

          <p className="text-gray-500 mt-3 text-sm">
            Building scalable and modern web applications
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative pl-6 space-y-12">

          {/* GRADIENT LINE */}
          <div className="absolute left-0 top-0 h-full w-[2px] 
          bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >

              {/* CARD */}
              <div className="bg-white/70 backdrop-blur-xl 
              border border-gray-200 rounded-2xl p-6 shadow-lg 
              hover:shadow-2xl transition duration-300">

                {/* TOP */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

                  <div className="flex gap-3 items-start">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Briefcase className="text-blue-600" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg">
                        {exp.company}
                      </h3>
                      <p className="text-sm text-blue-600">
                        {exp.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 text-xs">
                    <span className="flex items-center gap-1 text-gray-500">
                      <Calendar size={14} />
                      {exp.duration}
                    </span>

                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-blue-600 hover:underline"
                    >
                      Visit <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                {/* POINTS */}
                <ul className="mt-5 space-y-3">
                  {exp.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-sm text-gray-700"
                    >
                      <CheckCircle
                        size={16}
                        className="text-blue-500 mt-1"
                      />
                      {point}
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperience;