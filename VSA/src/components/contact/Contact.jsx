import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden bg-gray-100 dark:bg-gray-900">

      {/* 🔥 LOTTIE BACKGROUND (FIXED) */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Player
          autoplay
          loop
          src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json"
          style={{ height: "100%", width: "100%" }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Contact Me
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Feel free to reach out for collaborations or professional opportunities.
          </p>

          {/* INFO */}
          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <Mail className="text-blue-600" />
              <span className="text-sm">vidyashreeatanur@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-blue-600" />
              <span className="text-sm">+91 6361880128</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="text-blue-600" />
              <span className="text-sm">Bengaluru, India</span>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white/70 dark:bg-white/10 backdrop-blur-xl 
        border border-white/20 rounded-2xl p-8 shadow-xl">

          <form
            className="grid gap-5"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent successfully!");
            }}
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              className="p-3 rounded-lg border outline-none 
              focus:ring-2 focus:ring-blue-500 
              dark:bg-gray-800 dark:text-white"
            />

            <input
              type="email"
              placeholder="Your Email"
              required
              className="p-3 rounded-lg border outline-none 
              focus:ring-2 focus:ring-blue-500 
              dark:bg-gray-800 dark:text-white"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              required
              className="p-3 rounded-lg border outline-none 
              focus:ring-2 focus:ring-blue-500 
              dark:bg-gray-800 dark:text-white"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-600 text-white py-3 rounded-lg 
              hover:scale-105 transition duration-300"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;