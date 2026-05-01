import "./App.css";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="relative min-h-screen transition-all duration-500 
    bg-white text-black dark:bg-black dark:text-white overflow-hidden">

      {/* 🔥 Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="w-[500px] h-[500px] bg-purple-400/30 dark:bg-purple-600/20 rounded-full blur-3xl animate-pulse absolute top-[-100px] left-[-100px]" />
        <div className="w-[400px] h-[400px] bg-blue-400/30 dark:bg-blue-600/20 rounded-full blur-3xl animate-pulse absolute bottom-[-100px] right-[-100px]" />
      </div>

      <Navbar />

      {/* ✅ MAIN CONTENT */}
      <AppRoutes />

      <Footer />
    </div>
  );
}

export default App;