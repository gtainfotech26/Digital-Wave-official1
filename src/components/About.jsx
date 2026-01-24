import React, { useState } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'hi' : 'en'));
  };

  const content = {
    aboutTitle: {
      en: 'About Us',
      hi: 'हमारे बारे में',
    },
    aboutPara1: {
      en: 'Grow your business with Digital Wave Studio. We create modern, impactful, and user-friendly digital solutions that give your business a distinct online presence. From website development to branding and digital marketing, we transform your ideas into tangible results.',
      hi: 'Digital Wave Studio के साथ अपना व्यवसाय बढ़ाइए म आधुनिक, प्रभावशाली और उपयोगकर्ता‑अनुकूल डिजिटल समाधान तैयार करते हैं, जो आपके व्यवसाय को ऑनलाइन एक अलग पहचान दिलाते हैं। वेबसाइट निर्माण से लेकर ब्रांडिंग और डिजिटल प्रचार तक, हम आपके विचारों को वास्तविक परिणामों में बदलते हैं' },
    aboutPara2: {
      en: 'Digital Wave Studio is a creative digital agency dedicated to helping businesses grow online. We focus on creating modern, responsive, and result‑oriented digital solutions that build trust and drive growth. We work with startups, small businesses, and growing brands to transform ideas into professional digital experiences using the latest technologies and creative strategies.',
      hi: 'Digital Wave Studio एक रचनात्मक डिजिटल एजेंसी है, जो व्यवसायों को ऑनलाइन आगे बढ़ाने में सहायता करती है। हम आधुनिक, मोबाइल‑अनुकूल और परिणाम‑केंद्रित डिजिटल समाधान बनाते हैं, जो विश्वास पैदा करते हैं और विकास को बढ़ावा देते हैं। स्टार्टअप, छोटे व्यवसायों और बढ़ते हुए ब्रांड्स के साथ मिलकर काम करते हैं और उनके विचारों को नवीनतम तकनीक और रचनात्मक रणनीतियों के माध्यम से पेशेवर डिजिटल अनुभवों में बदलते हैं।' },
    servicesTitle: {
      en: 'Our Services',
      hi: 'हमारी सेवाएँ',
    },
    servicesList: {
      en: [
        'Website Design & Development',
        'E‑commerce Website Development',
        'Logo & Brand Identity Design',
        'Responsive & Mobile‑Friendly Design',
        'SEO & Digital Marketing',
        'Business & Portfolio Websites',
      ],
      hi: [
        'वेबसाइट डिज़ाइन और विकास',
        'ई‑कॉमर्स वेबसाइट निर्माण',
        'लोगो एवं ब्रांड पहचान डिज़ाइन',
        'मोबाइल‑अनुकूल और उत्तरदायी डिज़ाइन',
        'खोज इंजन अनुकूलन एवं डिजिटल प्रचार',
        'व्यावसायिक एवं पोर्टफोलियो वेबसाइट',
      ],
    },
    whyTitle: {
      en: 'Why Choose Us',
      hi: 'हमें क्यों चुनें',
    },
    whyList: {
      en: [
        'Creative & Modern Designs',
        'Affordable Pricing',
        'Client‑Focused Approach',
        'On‑Time Project Delivery',
        'Reliable Support',
      ],
      hi: [
        'रचनात्मक और आधुनिक डिज़ाइन',
        'किफायती मूल्य निर्धारण',
        'ग्राहक‑केंद्रित कार्यप्रणाली',
        'समय पर परियोजना की डिलीवरी',
        'भरोसेमंद सहायता',
      ],
    },
    missionTitle: {
      en: 'Our Mission',
      hi: 'हमारा उद्देश्य',
    },
    missionText: {
      en: 'Our mission is to provide affordable, high‑quality, and scalable digital solutions that help businesses succeed in the digital world.',
      hi: 'हमारा उद्देश्य किफायती, उच्च‑गुणवत्ता और विस्तार योग्य डिजिटल समाधान प्रदान करना है, ताकि व्यवसाय डिजिटल दुनिया में सफलता प्राप्त कर सकें।',
    },
    contactTitle: {
      en: 'Contact Us',
      hi: 'संपर्क करें',
    },
    contactText: {
      en: 'Have a project in mind? Let’s work together to create something amazing.',
      hi: 'क्या आपके पास कोई परियोजना या विचार है? आइए मिलकर कुछ बेहतरीन तैयार करें।',
    },
    ctaStarted: {
      en: 'Get Started',
      hi: 'अभी शुरू करें',
    },
    ctaContact: {
      en: 'Contact Us',
      hi: 'संपर्क करें',
    },
    footer: '© Digital Wave Studio. All Rights Reserved.',
  };

  const current = content;

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="fixed top-22 left-0 right-0 bg-white shadow-lg z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-indigo-600">Digital Wave Studio</h1>
          <button
            onClick={toggleLanguage}
            className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition duration-300 shadow-md"
          >
            {language === 'en' ? 'हिंदी' : 'English'}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500 text-white overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-5xl md:text-7xl font-extrabold mb-6"
          >
            {current.aboutTitle[language]}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            {language === 'en'
              ? 'Grow Your Business with Digital Wave Studio'
              : 'Digital Wave Studio के साथ अपना व्यवसाय बढ़ाइए'}
          </motion.p>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-32">
            <path
              fill="#f9fafb"
              d="M0,0 C320,80 1120,40 1440,0 L1440,120 L0,120 Z"
            />
          </svg>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-lg md:text-xl text-gray-700 leading-relaxed space-y-6 text-center"
          >
            <p>{current.aboutPara1[language]}</p>
            <p>{current.aboutPara2[language]}</p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center text-indigo-700 mb-16"
          >
            {current.servicesTitle[language]}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {current.servicesList[language].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.7 }}
                className="bg-gradient-to-b from-indigo-50 to-white p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center"
              >
                <h3 className="text-xl font-semibold text-indigo-800">{service}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center text-indigo-700 mb-16"
          >
            {current.whyTitle[language]}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
            {current.whyList[language].map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="w-24 h-24 mx-auto mb-6 bg-indigo-600 rounded-full flex items-center justify-center text-white text-4xl shadow-lg">
                  ✓
                </div>
                <p className="text-lg font-medium text-gray-800">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-indigo-700 mb-10"
          >
            {current.missionTitle[language]}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-700 leading-relaxed"
          >
            {current.missionText[language]}
          </motion.p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            {current.contactTitle[language]}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl mb-10 max-w-2xl mx-auto"
          >
            {current.contactText[language]}
          </motion.p>
          <div className="space-y-4 text-lg mb-12">
            <p>Email: gtainfotech89@gmail.com</p>
            <p>Phone: +91‑8603990820</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a
              href="mailto:info@digitalwavestudio.com"
              whileHover={{ scale: 1.1 }}
              className="px-10 py-5 bg-white text-indigo-600 font-bold rounded-full shadow-lg hover:bg-gray-100 transition"
            >
              {current.ctaStarted[language]}
            </motion.a>
            <motion.a
              href="tel:+918603990820"
              whileHover={{ scale: 1.1 }}
              className="px-10 py-5 bg-transparent border-4 border-white font-bold rounded-full hover:bg-white hover:text-indigo-600 transition"
            >
              {current.ctaContact[language]}
            </motion.a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-indigo-900 text-white text-center">
        <p className="text-lg">{current.footer}</p>
      </footer>
    </div>
  );
};

export default About;