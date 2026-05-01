import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiFigma } from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", level: 95, icon: <FaHtml5 /> },
      { name: "CSS3", level: 90, icon: <FaCss3Alt /> },
      { name: "JavaScript", level: 88, icon: <FaJs /> },
      { name: "React.js", level: 85, icon: <FaReact /> },
      { name: "TypeScript", level: 70, icon: <SiTypescript /> },
    ],
  },
  {
    title: "UI Frameworks",
    skills: [
      { name: "Tailwind CSS", level: 92, icon: <SiTailwindcss /> },
      { name: "Bootstrap", level: 90 },
      { name: "Material UI", level: 85 },
    ],
  },
  {
    title: "Design Tools",
    skills: [
      { name: "Figma", level: 80, icon: <SiFigma /> },
      { name: "Adobe XD", level: 75 },
    ],
  },
  {
    title: "Core Concepts",
    skills: [
      { name: "Responsive Design", level: 92 },
      { name: "Accessibility", level: 80 },
      { name: "UI/UX Principles", level: 85 },
    ],
  },
];

const TechnicalSkills = () => {
  return (
    <section
      id="skills"
      className="relative py-24 px-6 md:px-12 overflow-hidden
      bg-gradient-to-br from-white via-gray-50 to-blue-50"
    >
      {/* 🔥 BACKGROUND LOTTIE */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Player
          autoplay
          loop
          src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json"
        />
      </div>

      {/* 🎨 GLOW EFFECT */}
      <div className="absolute w-[500px] h-[500px] bg-blue-400/20 
      blur-[120px] rounded-full top-10 left-1/2 -translate-x-1/2" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold 
          bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 
          bg-clip-text text-transparent">
            Technical Skills
          </h2>

          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Strong foundation in modern frontend technologies,
            UI systems, and scalable component architecture.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/60 backdrop-blur-xl 
              border border-gray-200 rounded-2xl p-6 shadow-lg
              hover:shadow-xl transition duration-300"
            >
              <h3 className="text-lg font-semibold mb-6 text-blue-600">
                {group.title}
              </h3>

              <div className="space-y-5">
                {group.skills.map((skill, i) => (
                  <div key={i}>
                    
                    {/* TOP ROW */}
                    <div className="flex justify-between items-center mb-1 text-sm">
                      <div className="flex items-center gap-2">
                        {skill.icon && (
                          <span className="text-blue-500">
                            {skill.icon}
                          </span>
                        )}
                        <span>{skill.name}</span>
                      </div>
                      <span className="text-gray-500">
                        {skill.level}%
                      </span>
                    </div>

                    {/* PROGRESS BAR */}
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1 }}
                        className="h-2 rounded-full 
                        bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                      />
                    </div>

                  </div>
                ))}
              </div>
            </motion.div>
          ))}

        </div>

        {/* EXTRA */}
        <div className="mt-16 text-center">
          <h4 className="text-sm text-gray-500 mb-4">
            Additional Tools & Practices
          </h4>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "REST APIs",
              "Git",
              "GitHub",
              "Node.js",
              "Express.js",
              "VS Code",
              "Responsive UI",
              "Component Design",
            ].map((item) => (
              <span
                key={item}
                className="px-4 py-2 text-xs rounded-full 
                bg-white shadow border border-gray-200 
                hover:scale-105 transition"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechnicalSkills;