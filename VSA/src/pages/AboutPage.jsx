import About from "../components/about/About";

const AboutPage = () => {
  return (
    <section
      id="About"   // ✅ CONNECTED TO NAVBAR
      className="min-h-screen scroll-mt-24"
    >
      <About />
    </section>
  );
};

export default AboutPage;