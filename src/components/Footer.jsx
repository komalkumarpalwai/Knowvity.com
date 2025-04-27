import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import React from 'react';

const Footer = () => {
  const footerLinks = [
    'Internships',
    'Ecommerce Solutions',
    'Website Creation',
    'Digital Marketing (AI)',
    'Animation Videos',
  ];

  const contactLinks = [
    'Branding Consultancy',
    'Careers',
    'Client Support',
    'Case Studies',
  ];

  const brandingServices = [
    'Full Brand Strategy',
    'Corporate Identity Design',
    'Digital Presence Setup',
    'AI-Powered Marketing Solutions',
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms & Conditions', href: '/terms' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap md:flex-nowrap justify-between gap-8">
        
        {/* Company Info */}
        <div className="w-full md:w-1/5 space-y-4">
          <motion.h2
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            CodeMinds Web Services
          </motion.h2>
          <p className="text-gray-400">Srinivas Rao - Founder</p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <FaPhone className="text-blue-400" />
              <span>93902 28526 / 81422 85266</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-blue-400" />
              <span>codemindswebservices@gmail.com</span>
            </div>
            <div className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-blue-400 mt-1" />
              <span>Brindavan Colony, Ibrahimpatnam-501506, Rangareddy, Hyderabad, TG</span>
            </div>
          </div>
        </div>

        {/* Our Services */}
        <div className="w-full md:w-1/5 space-y-4">
          <h3 className="text-lg font-semibold text-white">Our Services</h3>
          <ul className="space-y-2">
            {footerLinks.map((item, index) => (
              <li key={index} className="hover:text-blue-400 cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="w-full md:w-1/5 space-y-4">
          <h3 className="text-lg font-semibold text-white">Contact</h3>
          <ul className="space-y-2">
            {contactLinks.map((item, index) => (
              <li key={index} className="hover:text-blue-400 cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        {/* Branding Services */}
        <div className="w-full md:w-1/5 space-y-4">
          <h3 className="text-lg font-semibold text-white">Branding Services</h3>
          <ul className="space-y-2">
            {brandingServices.map((item, index) => (
              <li key={index} className="hover:text-blue-400 cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div className="w-full md:w-1/5 space-y-4">
          <h3 className="text-lg font-semibold text-white">Legal</h3>
          <ul className="space-y-2">
            {legalLinks.map((item, index) => (
              <li key={index}>
                <motion.a
                  href={item.href}
                  className="hover:text-blue-400 cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  {item.name}
                </motion.a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} CodeMinds Web Services. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
