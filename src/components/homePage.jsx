import React from 'react';
import Navbar from './Navbar.jsx';
import Services from './Services.jsx';
import Contact from './Contacts.jsx';
import { motion } from 'framer-motion';


const HomePage = () => {
    return (
        <>
            <Navbar />

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
                                href="https://wa.me/8603990820"
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
                <footer className="bg-gray-900 text-white py-16">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <h2 className="text-4xl font-black bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                            DIGITAL WAVE STUDIO
                        </h2>
                        <p className="mt-4 text-lg text-gray-400">
                            Where Creativity Meets Technology
                        </p>
                        <div className="mt-10 space-x-8 text-lg">
                            <a href="tel:+918603990820" className="hover:text-cyan-400 transition">
                                +91 8603990820
                            </a>
                            <a href="mailto:- gtainfotech89@gmail.com" className="hover:text-cyan-400 transition">
                                gtainfotech89@gmail.com
                            </a>
                            <a
                                href="https://wa.me/8603990820"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-cyan-400 transition"
                            >
                                WhatsApp
                            </a>
                        </div>
                        <p className="mt-10 text-gray-500">
                            © {new Date().getFullYear()} Digital Wave Studio. All rights reserved.
                        </p>
                    </div>
                </footer>
            </main>




        </>
    );
};

export default HomePage;