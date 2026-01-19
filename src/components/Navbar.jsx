import React, { useState } from 'react';
import { FaWhatsapp, FaBars, FaTimes, FaHome, FaCogs, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import logo from '../assets/image/logo.jpg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const servicesItems = [
    { name: 'Web Development', link: '/services/web' },
    { name: 'App Development', link: '/services/app' },
    { name: 'UI/UX Design', link: '/services/design' },
    { name: 'Digital Marketing', link: '/services/marketing' },
    { name: 'Brand Strategy', link: '/services/branding' }
  ];

  const emailAddress = "gtainfotech89@gmail.com";
  const whatsappNumber = "+91-8603990820";

  return (
    <>
      {/* WhatsApp Floating Button */}
      <a 
        href={`https://wa.me/${whatsappNumber}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 animate-bounce"
      >
        <FaWhatsapp size={28} />
      </a>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-40 bg-gradient-to-r from-gray-900 to-blue-900 text-white shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            
            {/* Logo/Brand */}
            <div className="flex items-center space-x-3">
              <div className=" flex gap-2">
                <img src={logo} alt="Digital Wave Logo" className='h-16 rounded-full' />
                <div className="flex flex-col mt-2">
                  <h1 className="text-2xl font-bold tracking-wider bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    DIGITAL WAVE
                  </h1>
                  <p className="text-xs text-gray-300 italic">Where Creativity Meets Technology</p>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="flex items-center space-x-2 hover:text-cyan-300 transition-colors duration-200">
                <FaHome />
                <span>Home</span>
              </a>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-2 hover:text-cyan-300 transition-colors duration-200">
                  <FaCogs />
                  <span>Our Services</span>
                  <FaChevronDown className="text-xs" />
                </button>
                <div className="absolute left-0 mt-2 w-64 bg-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  {servicesItems.map((service, index) => (
                    <a
                      key={index}
                      href={service.link}
                      className="block px-4 py-3 hover:bg-blue-700 hover:text-white border-b border-gray-700 last:border-b-0 transition-colors duration-200"
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Updated Contact Us Link (Desktop) */}
              <a 
                href={`mailto:${emailAddress}`}
                className="flex items-center space-x-2 hover:text-cyan-300 transition-colors duration-200"
              >
                <FaEnvelope />
                <span>Contact Us</span>
              </a>

              <a 
                href={`https://wa.me/${whatsappNumber}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-full flex items-center space-x-2 transition-all duration-300"
              >
                <FaWhatsapp />
                <span>Chat Now</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-2xl focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                <a 
                  href="/" 
                  className="flex items-center space-x-3 py-2 hover:text-cyan-300 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <FaHome />
                  <span>Home</span>
                </a>

                <div className="border-t border-gray-700 pt-2">
                  <button 
                    className="flex items-center justify-between w-full py-2"
                    onClick={() => setServicesOpen(!servicesOpen)}
                  >
                    <div className="flex items-center space-x-3">
                      <FaCogs />
                      <span>Our Services</span>
                    </div>
                    <FaChevronDown className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {servicesOpen && (
                    <div className="pl-8 mt-2 space-y-2">
                      {servicesItems.map((service, index) => (
                        <a
                          key={index}
                          href={service.link}
                          className="block py-2 text-gray-300 hover:text-white transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Updated Contact Us Link (Mobile) */}
                <a 
                  href={`mailto:${emailAddress}`}
                  className="flex items-center space-x-3 py-2 hover:text-cyan-300 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <FaEnvelope />
                  <span>Contact Us</span>
                </a>

                <a 
                  href={`https://wa.me/${whatsappNumber}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 mt-4"
                  onClick={() => setIsOpen(false)}
                >
                  <FaWhatsapp />
                  <span>Start WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;