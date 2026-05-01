import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import {
  FaReact,
  FaLaptopCode,
  FaLayerGroup,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";

const AboutMe = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [activeWord, setActiveWord] = useState(null);

  // PARALLAX BACKGROUND
  useEffect(() => {
    const move = (e) => {
      setMouse({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // WORD CLICK ANIMATION
  const handleClick = (word) => {
    setActiveWord(word);
    setTimeout(() => setActiveWord(null), 500);
  };

  return (
    <section
      id="about"
      className="relative py-24 px-6 md:px-12 overflow-hidden
      bg-gradient-to-br from-white via-gray-50 to-blue-50"
    >
      {/* BACKGROUND LOTTIE */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Player
          autoplay
          loop
          src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json"
        />
      </div>

      {/* PARALLAX GLOW */}
      <motion.div
        style={{ transform: `translate(${mouse.x}px, ${mouse.y}px)` }}
        className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px]
        rounded-full top-10 left-1/2 -translate-x-1/2"
      />

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto relative z-10 text-center">

        {/* HEADER */}
        <h2 className="text-4xl md:text-5xl font-bold 
        bg-gradient-to-r from-blue-600 to-purple-600 
        bg-clip-text text-transparent">
          About Me
        </h2>

        <p className="mt-4 text-gray-500">
          Get to Know Me
        </p>

        {/* MAIN TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-12 space-y-6 text-gray-600 leading-relaxed"
        >
          <h3 className="text-xl font-semibold text-gray-800">
            Passionate about creating exceptional digital experiences
          </h3>

          <p>
            I'm a dedicated{" "}
            <Clickable word="UI Developer" activeWord={activeWord} onClick={handleClick} />{" "}
            focused on building{" "}
            <Clickable word="responsive web applications" activeWord={activeWord} onClick={handleClick} />{" "}
            with clean design and high performance.
          </p>

          <p>
            I specialize in{" "}
            <Clickable word="scalable component libraries" activeWord={activeWord} onClick={handleClick} />,{" "}
            <Clickable word="responsive design" activeWord={activeWord} onClick={handleClick} />, and
            enterprise-level UI systems.
          </p>

          <p>
            UI Developer with 1.7 years of experience working with React.js,
            TypeScript, and modern frontend architecture.
          </p>

          {/* TECH ICONS */}
          <div className="flex justify-center gap-6 text-2xl text-blue-600 mt-6">
            <FaReact />
            <SiTypescript />
            <SiTailwindcss />
            <FaLaptopCode />
            <FaLayerGroup />
          </div>
        </motion.div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <Stat value="1.7+" label="Years Experience" />
          <Stat value="10+" label="Projects Completed" />
          <Stat value="5+" label="Technologies" />
          <Stat value="Core" label="Expertise" />
        </div>

        {/* SKILLS */}
        <div className="mt-16">
          <h4 className="text-lg font-semibold mb-6">
            Core Expertise
          </h4>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React.js",
              "TypeScript",
              "Tailwind CSS",
              "UI/UX Design",
              "Responsive Design",
              "Component Libraries",
            ].map((skill) => (
              <span
                key={skill}
                className="px-5 py-2 bg-white shadow rounded-full text-sm
                border border-gray-200 hover:scale-105 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

/* CLICKABLE WORD */
const Clickable = ({ word, activeWord, onClick }) => (
  <span
    onClick={() => onClick(word)}
    className={`cursor-pointer text-blue-600 font-medium inline-block
    ${activeWord === word ? "animate-zoomWord" : ""}`}
  >
    {word}
  </span>
);

/* STAT CARD */
const Stat = ({ value, label }) => (
  <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 text-center shadow hover:scale-105 transition">
    <h3 className="text-xl font-bold text-blue-600">{value}</h3>
    <p className="text-sm text-gray-500 mt-2">{label}</p>
  </div>
);

export default AboutMe;