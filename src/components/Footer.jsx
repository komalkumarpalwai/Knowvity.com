import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import React from 'react';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Our Services',
      links: [
        { name: 'Internships', href: '/' },
        { name: 'Ecommerce Solutions', href: '/' },
        { name: 'Website Creation', href: '/' },
        { name: 'Digital Marketing (AI)', href: '/d' },
        { name: 'Animation Videos', href: '/' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { name: 'Branding Consultancy', href: '/contact' },
        { name: 'Careers', href: '/contact' },
        { name: 'Client Support', href: '/contact' },
        { name: 'Case Studies', href: '/contact' },
      ],
    },
  ];

  const contactInfo = [
    { icon: <FaPhone className="w-5 h-5" />, text: '93902 28526 / 81422 85266' },
    { icon: <FaEnvelope className="w-5 h-5" />, text: 'codemindswebservices@gmail.com' },
    { icon: <FaMapMarkerAlt className="w-5 h-5" />, text: 'Brindavan Colony, Ibrahimpatnam-501506, Rangareddy, Hyderabad, TG' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-12">
          {/* Company Info */}
          <div className="space-y-6">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3"
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                CodeMinds Web Services
              </span>
            </motion.div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Srinivas Rao</h3>
              <p className="text-gray-400">Founder</p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-0.5 text-blue-400">
                    {item.icon}
                  </div>
                  <p className="text-gray-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((column, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-white">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Branding Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Branding Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">Full Brand Strategy</li>
              <li className="text-gray-400">Corporate Identity Design</li>
              <li className="text-gray-400">Digital Presence Setup</li>
              <li className="text-gray-400">AI-Powered Marketing Solutions</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 py-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} CodeMinds Web Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;