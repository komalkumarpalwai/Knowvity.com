import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import React from 'react';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '/' },
        { name: 'Courses', href: '/courses' },
        { name: 'Pricing', href: '/courses' },
        { name: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'FAQ', href: '/faq' },
        { name: 'Help Center', href: '/contact' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Privacy Policy', href: '/privacy' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Partnerships', href: '/' },
      ],
    },
  ];

  const contactInfo = [
    { icon: <FaEnvelope className="w-5 h-5" />, text: 'hello@knowvity.com' },
    { icon: <FaPhone className="w-5 h-5" />, text: '+1 (555) 123-4567' },
    { icon: <FaMapMarkerAlt className="w-5 h-5" />, text: '123 Education St, San Francisco, CA' },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, href: 'https://facebook.com/knowvity' },
    { icon: <FaTwitter />, href: 'https://twitter.com/knowvity' },
    { icon: <FaInstagram />, href: 'https://instagram.com/knowvity' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com/company/knowvity' },
  ];

  return (
    <footer className="bg-[#f5f5f5] border-t border-[#e0e0e0] mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3"
            >
              <motion.svg
                className="w-8 h-8 text-[#3EC1C9]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </motion.svg>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#3EC1C9] to-[#6A7B6D] bg-clip-text text-transparent">
                Knowvity
              </span>
            </motion.div>
            <p className="text-[#6A7B6D]">
              Empowering learners worldwide with accessible, high-quality education.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-0.5 text-[#3EC1C9]">
                    {item.icon}
                  </div>
                  <p className="text-[#6A7B6D]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((column, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-[#353535]">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href={link.href}
                      className="text-[#6A7B6D] hover:text-[#3EC1C9] transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#353535]">Newsletter</h3>
            <p className="text-[#6A7B6D]">
              Subscribe to get updates on new courses and learning resources.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 border border-[#e0e0e0] rounded-lg focus:ring-2 focus:ring-[#3EC1C9] focus:border-[#3EC1C9] outline-none"
                required
              />
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-[#3EC1C9] to-[#6A7B6D] text-white px-6 py-2 rounded-lg font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </form>

            {/* Social Links */}
            <div className="pt-4">
              <h4 className="text-sm font-medium text-[#353535] mb-3">Follow Us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6A7B6D] hover:text-[#3EC1C9] transition-colors text-xl"
                    whileHover={{ y: -3 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#e0e0e0] py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#6A7B6D] text-sm">
            © {new Date().getFullYear()} Knowvity. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="/terms" className="text-[#6A7B6D] hover:text-[#3EC1C9] text-sm">Terms</a>
            <a href="/privacy" className="text-[#6A7B6D] hover:text-[#3EC1C9] text-sm">Privacy</a>
            <a href="/cookies" className="text-[#6A7B6D] hover:text-[#3EC1C9] text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;