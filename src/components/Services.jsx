import React from 'react';
import {
    FaCode,
    FaPalette,
    FaVideo,
    FaShareAlt,
    FaBullhorn,
    FaRupeeSign,
    FaWhatsapp,
    FaCheckCircle,
    FaRocket,
    FaLightbulb,
    FaPaintBrush,
    FaChartLine
} from 'react-icons/fa';
import MyWorks from './MyWorks';

const Services = () => {
    const services = [
        {
            icon: <FaCode className="text-blue-500" size={32} />,
            title: "Website Development",
            description: "Fast, responsive websites (HTML/CSS/JS, React, or CMS) optimized for performance and conversions.",
            features: ["Custom Development", "Responsive Design", "SEO Optimized", "Performance Focused"]
        },
        {
            icon: <FaPalette className="text-purple-500" size={32} />,
            title: "Logo & Graphic Design",
            description: "Brand identities, social posts, banners, and print-ready designs with a professional look.",
            features: ["Logo Design", "Social Media Graphics", "Brand Guidelines", "Print Materials"]
        },
        {
            icon: <FaVideo className="text-red-500" size={32} />,
            title: "Video Editing",
            description: "Short promos, YouTube editing, and social video ads — tailored to engage your audience.",
            features: ["Promotional Videos", "YouTube Content", "Social Media Ads", "Engagement Focused"]
        },
        {
            icon: <FaShareAlt className="text-green-500" size={32} />,
            title: "Social Media Marketing",
            description: "Strategy, content calendars, ads setup and management to grow your followers and leads.",
            features: ["Content Strategy", "Ads Management", "Audience Growth", "Lead Generation"]
        },
        {
            icon: <FaLightbulb className="text-yellow-500" size={32} />,
            title: "Digital Branding",
            description: "Brand strategy, pitch decks, and visual systems that make your business memorable.",
            features: ["Brand Strategy", "Pitch Decks", "Visual Identity", "Market Positioning"]
        }
    ];

    const pricing = [
        { plan: "Landing Page / Small Site", price: "₹5,000", features: ["1-5 Pages", "Responsive Design", "Basic SEO", "Contact Form"] },
        { plan: "Branding Package", price: "₹8,000", features: ["Logo Design", "Color Palette", "Typography", "Brand Guidelines"] },
        { plan: "Social Media Package", price: "₹7,000/mo", features: ["15 Posts/Month", "Content Creation", "Community Management", "Performance Reports"] },
        { plan: "Video Editing", price: "₹1,500+/video", features: ["Up to 3 mins", "Color Correction", "Music & SFX", "Subtitles"] }
    ];

    return (
        <section id="services" className="py-16 bg-gradient-to-b  from-gray-50 to-white">
            <div className="container mx-auto ">
                {/* Header */}
               <div className="md:mx-20 mx-10">
                 <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                        Our Services
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Where creativity meets technology to transform your digital presence
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10  mb-16">
                    {services.map((service, index) => (
                        <div key={index}
                            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 border border-gray-100"
                        >
                            <div className="mb-4">
                                <div className="bg-gray-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                                <p className="text-gray-600 mb-4">{service.description}</p>

                                <div className="space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center text-sm text-gray-700">
                                            <FaCheckCircle className="text-green-500 mr-2" size={14} />
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div> 
               </div>

                {/* Pricing Section */}
                <div className="bg-gradient-to-r from-blue-900 to-gray-900  rounded-2xl p-8 md:p-19 text-white ">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-3">Transparent Pricing</h2>
                        <p className="text-blue-200">Starting from - No hidden costs</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                        {pricing.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                            >
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold mb-2">{item.plan}</h3>
                                    <div className="flex items-baseline mb-4">
                                        <span className="text-3xl font-bold text-cyan-300">{item.price}</span>
                                        {item.plan.includes("Package") && <span className="text-sm text-gray-300 ml-2">one-time</span>}
                                    </div>
                                </div>

                                <ul className="space-y-2">
                                    {item.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-sm text-blue-100">
                                            <FaRocket className="mr-2 text-cyan-400" size={12} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Custom Quote CTA */}
                    <div className="text-center p-6 bg-white/5 rounded-xl">
                        <FaLightbulb className="inline-block text-yellow-400 mb-3" size={32} />
                        <h3 className="text-2xl font-bold mb-2">Need a Custom Solution?</h3>
                        <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
                            Every project is unique. Contact us with your specific requirements for a personalized quote.
                        </p>
                        <a
                            href="https://wa.me/+91-8603990820"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                        >
                            <FaWhatsapp className="mr-2" size={20} />
                            Get Custom Quote on WhatsApp
                        </a>
                    </div>
                </div>

                {/* Process Section */}
               


                <MyWorks/>
            </div>
        </section>
    );
};

export default Services;