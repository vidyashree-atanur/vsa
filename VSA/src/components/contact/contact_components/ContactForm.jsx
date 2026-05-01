import React from "react";
import { Mail, Phone, Globe, Send } from "lucide-react";

const ContactForm = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 
text-gray-800 dark:text-gray-200 transition duration-500">
      <p className="text-sm tracking-widest text-blue-500 font-semibold mb-3">
        GET IN TOUCH
      </p>

      <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
        Let's Build Something <span className="text-blue-600">Amazing</span>
      </h1>

      <p className="text-gray-500 text-center max-w-xl mb-12">
        Open to opportunities and collaborations.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 w-full max-w-4xl">
        
        <a href="mailto:vidyashreeatanur@gmail.com" className="glass-card p-4 text-center">
          <Mail className="mx-auto text-pink-500 mb-2" />
          <p className="text-sm">Email</p>
        </a>

        <a href="tel:+916361180128" className="glass-card p-4 text-center">
          <Phone className="mx-auto text-green-500 mb-2" />
          <p className="text-sm">Phone</p>
        </a>

        <a href="#" className="glass-card p-4 text-center">
          <Globe className="mx-auto text-blue-500 mb-2" />
          <p className="text-sm">LinkedIn</p>
        </a>

        <a href="#" className="glass-card p-4 text-center">
          <Globe className="mx-auto text-gray-500 mb-2" />
          <p className="text-sm">GitHub</p>
        </a>

      </div>

      <button className="flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg">
        <Send size={18} />
        Send Message
      </button>
    </section>
  );
};

export default ContactForm;