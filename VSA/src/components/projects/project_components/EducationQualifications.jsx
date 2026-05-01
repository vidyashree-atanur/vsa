import React from "react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import {
  GraduationCap,
  Calendar,
  Percent,
  CheckCircle,
  School,
} from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    university: "Rani Channamma University",
    year: "2025",
    score: "75%",
    status: "Completed",
  },
  {
    degree: "Master of Computer Applications (MCA)",
    university: "Karnataka State Open University (KSOU), Mysuru",
    year: "2025 – Present",
    score: "-",
    status: "Ongoing",
  },
];

function EducationQualifications() {
  return (
    <section className="relative py-20 px-6 overflow-hidden 
    bg-gradient-to-br from-white via-gray-50 to-blue-50">

      {/* 🔥 LOTTIE BACKGROUND */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Player
          autoplay
          loop
          src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json"
        />
      </div>

      {/* SOFT GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-blue-400/20 
      blur-[120px] rounded-full top-10 left-1/2 -translate-x-1/2" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="text-sm tracking-widest text-blue-500 font-semibold">
            ACADEMIC BACKGROUND
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-2 
          bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 
          bg-clip-text text-transparent">
            Education & Qualifications
          </h2>
        </div>

        {/* GRID */}
        <div className="space-y-8">

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/70 backdrop-blur-xl 
              border border-gray-200 rounded-2xl p-6 md:p-8 
              shadow-lg hover:shadow-2xl transition duration-300"
            >

              <div className="flex flex-col md:flex-row gap-6">

                {/* ICON */}
                <div className="w-16 h-16 flex items-center justify-center 
                rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                  <GraduationCap size={28} />
                </div>

                {/* CONTENT */}
                <div className="flex-1">

                  {/* TITLE */}
                  <h3 className="text-xl font-semibold">
                    {edu.degree}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
                    <School size={16} />
                    {edu.university}
                  </p>

                  {/* DETAILS */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 text-sm">

                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-gray-400" />
                      <div>
                        <p className="text-gray-400">Year</p>
                        <p className="font-semibold">{edu.year}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Percent size={16} className="text-green-500" />
                      <div>
                        <p className="text-gray-400">Score</p>
                        <p className="font-semibold">{edu.score}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-blue-500" />
                      <div>
                        <p className="text-gray-400">Status</p>
                        <p className="font-semibold">
                          {edu.status}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <GraduationCap size={16} className="text-purple-500" />
                      <div>
                        <p className="text-gray-400">Field</p>
                        <p className="font-semibold">Computer Applications</p>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default EducationQualifications;