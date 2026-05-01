import AboutMe from "./about_components/AboutMe";
import VidyashreeAbout from "./about_components/VidyashreeAbout";

const About = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 
text-gray-800 dark:text-gray-200 transition duration-500">

      {/* TOP SECTION */}
      <div className="m-0 p-0">
        <VidyashreeAbout />
      </div>

      {/* 🔥 GRADIENT DIVIDER */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-blue-400 to-transparent opacity-40"></div>

      {/* BOTTOM SECTION */}
      <div className="m-0 p-0">
        <AboutMe />
      </div>

    </section>
  );
};

export default About;