import React, { useState } from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaPaperPlane,
  FaClock,
  FaCheckCircle,
  FaExclamationCircle
} from 'react-icons/fa';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitStatus('success');

      // Reset form after success
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FaPhone className="text-blue-500" size={24} />,
      title: "Call Us",
      details: "+91 8603990820",
      link: "tel:+918603990820",
      color: "bg-blue-50 border-blue-100"
    },
    {
      icon: <FaWhatsapp className="text-green-500" size={24} />,
      title: "WhatsApp",
      details: "Chat instantly",
      link: "https://wa.me/8603990820",
      color: "bg-green-50 border-green-100"
    },
    {
      icon: <FaEnvelope className="text-red-500" size={24} />,
      title: "Email",
      details: "gtainfotech89@gmail.com",
      link: "mailto:gtainfotech89@gmail.com",
      color: "bg-red-50 border-red-100"
    },
    {
      icon: <FaMapMarkerAlt className="text-purple-500" size={24} />,
      title: "Location",
      details: "Phulwari Sharif, Patna, Bihar – 801505, India",
      link: "https://maps.google.com",
      color: "bg-purple-50 border-purple-100"
    },
    {
      icon: <FaClock className="text-yellow-500" size={24} />,
      title: "Business Hours",
      details: "Mon - Sat: 10 AM - 7 PM",
      link: null,
      color: "bg-yellow-50 border-yellow-100"
    }
  ];

  const services = [
    'Website Development',
    'Logo & Graphic Design',
    'Video Editing',
    'Social Media Marketing',
    'Digital Branding',
    'Other'
  ];

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Ready to start your project? Reach out to us through any channel below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 px-10 gap-30">
          {/* Left Column - Contact Information */}
          <div>
            <div className="bg-gradient-to-br from-blue-900 to-gray-900 rounded-2xl p-8 text-white mb-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="text-blue-200 mb-8">
                Fill out the form or contact us directly. We typically respond within 24 hours.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  item.link ? (
                    <a
                      key={index}
                      href={item.link}
                      target={item.link.includes('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                    >
                      <div className="p-3 rounded-lg bg-white/10 group-hover:bg-white/20">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{item.title}</h3>
                        <p className="text-blue-200">{item.details}</p>
                      </div>
                    </a>
                  ) : (
                    <div key={index} className="flex items-start space-x-4 p-4">
                      <div className="p-3 rounded-lg bg-white/10">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{item.title}</h3>
                        <p className="text-blue-200">{item.details}</p>
                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Follow Our Journey</h3>
              <div className="flex space-x-4">
                {[
                  { icon: <FaInstagram size={24} />, color: 'bg-gradient-to-r from-purple-600 to-pink-600', label: 'Instagram' },
                  { icon: <FaFacebook size={24} />, color: 'bg-blue-600', label: 'Facebook' },
                  { icon: <FaTwitter size={24} />, color: 'bg-sky-500', label: 'Twitter' },
                  { icon: <FaLinkedin size={24} />, color: 'bg-blue-700', label: 'LinkedIn' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`${social.color} w-12 h-12 rounded-full flex items-center justify-center text-white hover:opacity-90 transition-all duration-300 transform hover:-translate-y-1`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <div className="p-3 rounded-lg bg-cyan-100 text-cyan-600 mr-4">
                <FaPaperPlane size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Send us a Message</h2>
                <p className="text-gray-600">We'll get back to you ASAP</p>
              </div>
            </div>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                <FaCheckCircle className="text-green-500 mr-3" size={24} />
                <div>
                  <h3 className="font-bold text-green-800">Message Sent Successfully!</h3>
                  <p className="text-green-600">We'll contact you within 24 hours.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all duration-300"
                    placeholder="+91 8603990820"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interested In *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all duration-300 resize-none"
                  placeholder="Tell us about your project requirements, timeline, and budget..."
                />
              </div>

              <div className="flex items-center justify-between">

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FaPaperPlane className="ml-2" />
                    </>
                  )}
                </button>
              </div>
            </form>


          </div>
        </div>

        {/* Map Placeholder */}
        {/* Our Location with Map */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Our Location
          </h3>

          <div className="bg-white rounded-xl p-4 shadow-inner">
            <div className="h-64 md:h-96 rounded-lg overflow-hidden">
              <iframe
                title="OpenStreetMap"
                src="https://www.openstreetmap.org/export/embed.html?bbox=85.02,25.56,85.15,25.64&layer=mapnik"
                width="100%"
                height="100%"
              ></iframe>

            </div>

            <div className="text-center mt-4">
              <p className="text-gray-700 font-semibold">
                Phulwari Sharif, Patna, Bihar – 801505, India
              </p>
              <p className="text-gray-500">Serving clients worldwide</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contacts;