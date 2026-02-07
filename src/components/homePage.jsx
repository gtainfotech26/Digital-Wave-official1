import React from 'react';
import Navbar from './Navbar.jsx';
import Services from './Services.jsx';
import Contact from './Contacts.jsx';
import { motion } from 'framer-motion';
import logo from '../assets/image/logo.jpg'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HomePage = () => {
    const location = useLocation();

useEffect(() => {
  if (location.hash) {
    const el = document.querySelector(location.hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
}, [location]);

    return (
        <>
            

            <main>
                {/* Hero Section - Attractive, modern, and engaging */}
                <section
                    className="relative min-h-screen bg-cover bg-center bg-fixed flex items-center pb-10 justify-center"
                    style={{
                        backgroundImage:
                            "url('https://images.pexels.com/photos/29586675/pexels-photo-29586675.jpeg?auto=compress&cs=tinysrgb&w=1600')",
                    }}
                >
                    {/* Dark gradient overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-purple-900/70 to-cyan-900/80" />

                    <motion.div className="relative z-10 text-center px-6 max-w-5xl mx-auto "  >
                        <motion.h1 initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight drop-shadow-2xl">
                            DIGITAL WAVE<br />STUDIO
                        </motion.h1>

                        <motion.p initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="mt-6 text-2xl md:text-4xl text-cyan-200 font-medium drop-shadow-lg">
                            Where Creativity Meets Technology
                        </motion.p>
                        <p className="mt-8 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                            We craft stunning websites, powerful brands, engaging videos, and growth-driven digital marketing
                            solutions that help your business thrive in the digital world.
                        </p>

                        <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="mt-12 flex flex-wrap justify-center gap-6">
                            <a
                                href="#services"
                                className="bg-white text-indigo-700 px-10 py-5 rounded-full text-xl font-bold shadow-2xl hover:shadow-3xl hover:scale-105 transition duration-300"
                            >
                                Explore Services
                            </a>
                            <a
                                href="#contact"
                                className="bg-transparent border-4 border-white text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-white hover:text-indigo-700 transition duration-300"
                            >
                                Get in Touch
                            </a>
                            <a
                                href="https://wa.me/+91-8603990820"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-500 text-white px-10 py-5 rounded-full text-xl font-bold shadow-2xl hover:bg-green-600 hover:scale-105 transition duration-300"
                            >
                                WhatsApp Now
                            </a>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Services Section */}
                <Services />


                <Contact />





                {/* Simple Footer */}
               <footer className="bg-gray-900 text-white py-12 md:py-16">
  <div className="max-w-7xl mx-auto px-6">
    {/* Upper Section: Logo & Branding */}
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-center md:text-left">
      <img 
        src={logo} 
        alt="Digital Wave Logo" 
        className="h-24 w-24 md:h-36 md:w-36 rounded-full object-cover shadow-lg border-2 border-indigo-500/30" 
      />

      <div className="flex flex-col">
        <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          DIGITAL WAVE STUDIO
        </h2>
        <p className="mt-2 md:mt-4 text-base md:text-lg text-gray-400">
          Where Creativity Meets Technology
        </p>
      </div>
    </div>

    {/* Middle Section: Links */}
    <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-center">
      <a href="tel:+918603990820" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2">
        <span className="md:hidden">📞</span> +91 8603990820
      </a>
      
      <span className="hidden md:block text-gray-700">|</span>
      
      <a href="mailto:gtainfotech89@gmail.com" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 break-all">
        gtainfotech89@gmail.com
      </a>

      <span className="hidden md:block text-gray-700">|</span>

      <a
        href="https://wa.me/8603990820"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-green-400 transition-colors duration-300"
      >
        WhatsApp
      </a>
    </div>

    {/* Bottom Section: Copyright */}
    <div className="mt-12 pt-8 border-t border-gray-800 text-center">
      <p className="text-sm md:text-base text-gray-500">
        © {new Date().getFullYear()} <span className="text-gray-400 font-semibold">Digital Wave Studio</span>. All rights reserved.
      </p>
    </div>
  </div>
</footer>
            </main>




        </>
    );
};

export default HomePage;