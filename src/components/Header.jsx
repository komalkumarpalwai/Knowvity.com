import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import React from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [timer, setTimer] = useState({ days: 1, hours: 23, minutes: 59, seconds: 59 });
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);  // Toggle dark mode state
  };

  // Update body class for dark mode when state changes
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Countdown timer logic
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => {
        const total = prev.days * 86400 + prev.hours * 3600 + prev.minutes * 60 + prev.seconds - 1;
        return {
          days: Math.floor(total / 86400),
          hours: Math.floor((total % 86400) / 3600),
          minutes: Math.floor((total % 3600) / 60),
          seconds: total % 60
        };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Scroll event handler
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans">
      {/* Offer Banner */}
      <motion.div 
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="bg-[#3EC1C9] text-white py-3 px-4"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="bg-white/10 px-4 py-1 rounded-full text-sm">🎉 Limited Offer</span>
            <div className="flex items-center gap-3 font-mono">
              <span className="bg-white/10 px-3 py-1 rounded">{String(timer.days).padStart(2, '0')}D</span>
              <span className="text-white/50">:</span>
              <span className="bg-white/10 px-3 py-1 rounded">{String(timer.hours).padStart(2, '0')}H</span>
              <span className="text-white/50">:</span>
              <span className="bg-white/10 px-3 py-1 rounded">{String(timer.minutes).padStart(2, '0')}M</span>
              <span className="text-white/50">:</span>
              <span className="bg-white/10 px-3 py-1 rounded">{String(timer.seconds).padStart(2, '0')}S</span>
            </div>
          </div>
          <motion.a
            href="/courses"
            whileHover={{ scale: 1.05 }}
            className="bg-white text-[#3EC1C9] px-6 py-2 rounded-full font-medium flex items-center gap-2 hover:shadow-lg"
          >
            Enroll Now
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </div>
      </motion.div>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 transition-all ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className={`max-w-7xl mx-auto px-4 py-4 ${isDarkMode ? 'bg-gray-900/80' : ''}`}>
          <div className="flex justify-between items-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <a href="/">
                <img 
                  src="/logo.jpg" 
                  alt="Knowvity Logo" 
                  className="w-28 h-28 object-contain" 
                />
              </a>
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-[#3EC1C9] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#3EC1C9] hover:after:w-full after:transition-all"
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                </motion.a>
              ))}

              {/* Register Button */}
              <motion.a
                href="/register"
                whileHover={{ scale: 1.05 }}
                className="bg-[#3EC1C9] text-white px-4 py-2 rounded-full font-medium shadow hover:opacity-90 transition"
              >
                Register
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full bg-gray-100"
              whileHover={{ scale: 1.1 }}
            >
              {isMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute w-full bg-white shadow-lg"
            >
              <div className="px-4 pt-2 pb-4 space-y-4">
                {navigation.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-100"
                    whileHover={{ x: 5 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Header;
