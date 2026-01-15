import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaCode, FaPalette, FaVideo, FaFilter, FaExternalLinkAlt
} from 'react-icons/fa';

// FIX: Import without curly braces because data.js uses 'export default'
import projectData from './data'; 

const MyWorks = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const categories = [
        { id: 'all', label: 'All', icon: <FaFilter /> },
        { id: 'web', label: 'Web', icon: <FaCode /> },
        { id: 'design', label: 'Design', icon: <FaPalette /> },
        { id: 'video', label: 'Video', icon: <FaVideo /> },
    ];

    // FIX: Renamed this variable to 'displayProjects' to avoid shadowing the imported 'projectData'
    const displayProjects = activeFilter === 'all' 
        ? projectData 
        : projectData.filter(p => p.category === activeFilter);

    return (
        <section className="py-20 bg-[#0f172a] mt-30 rounded-xl min-h-screen text-white font-sans">
            <div className="container mx-auto px-6">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-extrabold mb-4"
                    >
                        Our <span className="text-blue-500">Creative</span> Portfolio
                    </motion.h2>
                    <p className="text-slate-400 max-w-xl mx-auto">Innovative solutions crafted with precision and passion.</p>
                </div>

                {/* Filter Bar */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveFilter(cat.id)}
                            className={`flex items-center gap-2 px-6 py-2 rounded-full border transition-all duration-300 ${
                                activeFilter === cat.id 
                                ? 'bg-blue-600 border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.5)]' 
                                : 'bg-slate-800/50 border-slate-700 hover:border-slate-500'
                            }`}
                        >
                            {cat.icon} <span className="text-sm font-medium">{cat.label}</span>
                        </button>
                    ))}
                </div>

                {/* Animated Project Grid */}
                <motion.div layout className="grid grid-cols-1 md:px-30 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <AnimatePresence mode='popLayout'>
                        {displayProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={project.id}
                                className="group relative bg-slate-800/40 border border-slate-700 hover:border-blue-500/50 rounded-2xl overflow-hidden backdrop-blur-sm transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] flex flex-col"
                            >
                                <div className="aspect-video overflow-hidden bg-slate-700">
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                
                                <div className="p-5 text-center flex-grow flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-400 text-xs mb-4 line-clamp-2">
                                            {project.description}
                                        </p>
                                    </div>
                                    
                                    <div className="mt-auto">
                                        <a 
                                            href={project.projectLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="w-full py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2"
                                        >
                                            Launch Project <FaExternalLinkAlt size={10}/>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default MyWorks;