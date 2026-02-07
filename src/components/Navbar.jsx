import React, { useState } from 'react';
import { FaWhatsapp, FaBars, FaTimes, FaHome, FaCogs, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import logo from '../assets/image/logo.jpg';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const servicesItems = [
    { name: 'Web Development', link: '/#services' },
    { name: 'App Development', link: '/#services' },
    { name: 'UI/UX Design', link: '/#services' },
    { name: 'Digital Marketing', link: '/#services' },
    { name: 'Brand Strategy', link: '/#services' }
  ];

  const whatsappNumber = "+91-8603990820";

  // मोबाइल मेनू बंद करने के लिए फंक्शन
  const closeMenu = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-100 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 animate-bounce"
      >
        <FaWhatsapp size={28} />
      </a>

      <nav className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 to-blue-900 text-white shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3" onClick={closeMenu}>
              <div className="flex gap-2">
                <img src={logo} alt="Logo" className='h-12 md:h-16 rounded-full' />
                <div className="flex flex-col justify-center">
                  <h1 className="text-sm md:text-2xl font-bold tracking-wider bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    DIGITAL WAVE STUDIO
                  </h1>
                  <p className="text-[10px] md:text-xs text-gray-300 italic">Where Creativity Meets Technology</p>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="flex items-center space-x-2 hover:text-cyan-300 transition-colors">
                <FaHome /> <span>Home</span>
              </Link>

              <div className="relative group">
                <button className="flex items-center space-x-2 hover:text-cyan-300">
                  <FaCogs /> <span>Our Services</span> <FaChevronDown className="text-xs" />
                </button>
                <div className="absolute left-0 mt-2 w-64 bg-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  {servicesItems.map((service, index) => (
                    <a key={index} href={service.link} className="block px-4 py-3 hover:bg-blue-700 border-b border-gray-700 last:border-0">
                      {service.name}
                    </a>
                  ))}
                </div>
              </div>

              <Link to='/about' className="hover:text-cyan-300">About</Link>
              
              <a href="/#contact" className="hover:text-cyan-300 flex items-center gap-2">
                <FaEnvelope /> Contact Us
              </a>

              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="bg-green-500 px-5 py-2 rounded-full flex items-center space-x-2">
                <FaWhatsapp /> <span>Chat</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Container */}
        {isOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-700 absolute w-full left-0 shadow-2xl overflow-y-auto max-h-[90vh]">
            <div className="px-6 py-6 flex flex-col space-y-5">
              
              <Link to="/" className="flex items-center space-x-4 text-lg" onClick={closeMenu}>
                <FaHome className="text-cyan-400" /> <span>Home</span>
              </Link>

              <Link to="/about" className="flex items-center space-x-4 text-lg" onClick={closeMenu}>
                <FaEnvelope className="text-cyan-400" /> <span>About Us</span>
              </Link>

              {/* Mobile Services Accordion */}
              <div className="border-b border-gray-800 pb-2 z-100">
                <button 
                  className="flex items-center justify-between w-full text-lg" 
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  <div className="flex items-center space-x-4">
                    <FaCogs className="text-cyan-400" /> <span>Our Services</span>
                  </div>
                  <FaChevronDown className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {servicesOpen && (
                  <div className="pl-12 mt-4 space-y-4">
                    {servicesItems.map((service, index) => (
                      <a 
                        key={index} 
                        href={service.link} 
                        className="block text-gray-400 hover:text-white" 
                        onClick={closeMenu}
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a href="/#contact" className="flex items-center space-x-4 text-lg" onClick={closeMenu}>
                <FaEnvelope className="text-cyan-400" /> <span>Contact Us</span>
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white py-4 rounded-xl flex items-center justify-center space-x-3 shadow-lg"
                onClick={closeMenu}
              >
                <FaWhatsapp size={20} />
                <span className="font-bold">Start WhatsApp Chat</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;