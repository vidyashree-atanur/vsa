import React from "react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import {
  Award,
  Trophy,
  Activity,
  BookOpen,
  Music,
  Users,
} from "lucide-react";

const achievements = [
  {
    title: "Internship Completion",
    year: "2024",
    description:
      "Successfully completed internship with strong contribution in UI development and project delivery.",
    icon: <Award className="text-orange-500" />,
  },
  {
    title: "Hackathon Participation",
    year: "2023 – 2024",
    description:
      "Participated in technical hackathons, solving real-world problems collaboratively.",
    icon: <Trophy className="text-purple-500" />,
  },
  {
    title: "Technical Events",
    year: "2023 – 2025",
    description:
      "Attended coding events and workshops to enhance technical and networking skills.",
    icon: <Activity className="text-green-500" />,
  },
  {
    title: "Continuous Learning",
    year: "Ongoing",
    description:
      "Actively learning modern web technologies and improving frontend architecture skills.",
    icon: <BookOpen className="text-blue-500" />,
  },
  {
    title: "Web Development Teaching",
    year: "Ongoing",
    description:
      "Teaching web development basics and guiding learners in building real-world UI projects.",
    icon: <Users className="text-indigo-500" />,
  },
  {
    title: "Creative Interests",
    year: "Personal",
    description:
      "Engaged in guitar playing and dance, maintaining creativity and balance alongside technical work.",
    icon: <Music className="text-pink-500" />,
  },
];

const AchievementsRecognition = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold 
          bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 
          bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>

          <p className="text-gray-500 mt-3 text-sm max-w-xl mx-auto">
            Key milestones reflecting my growth, learning, and contributions
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4 bg-white/70 backdrop-blur-xl 
              border border-gray-200 rounded-2xl p-6 shadow-lg 
              hover:shadow-2xl hover:-translate-y-1 transition duration-300"
            >

              {/* ICON */}
              <div className="p-3 bg-gray-100 rounded-lg">
                {item.icon}
              </div>

              {/* CONTENT */}
              <div className="flex-1">

                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg">
                    {item.title}
                  </h3>
                  <span className="text-xs text-gray-400">
                    {item.year}
                  </span>
                </div>

                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  {item.description}
                </p>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default AchievementsRecognition;