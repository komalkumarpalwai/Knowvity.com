import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaHome, FaBook, FaBlog, FaEnvelope, FaLaptopCode } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: <FaHome /> },
    { name: 'Courses', href: '/courses', icon: <FaBook /> },
    { name: 'Blog', href: '/blog', icon: <FaBlog /> },
    { name: 'Contact', href: '/contact', icon: <FaEnvelope /> },
    { name: 'Internship', href: '/Internship', icon: <FaLaptopCode /> },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '100%' },
  };

  return (
    <div className="font-sans">
      <nav className={`sticky top-0 z-50 transition-all ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Brand */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3">
            <motion.svg
              className="w-8 h-8 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </motion.svg>
            <a href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Knowvity
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`px-3 py-2 rounded-lg flex items-center gap-2 ${
                  location.pathname === item.href 
                    ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-blue-500">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </motion.a>
            ))}
            <motion.a
              href="/register"
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2.5 rounded-full font-medium shadow-lg hover:shadow-blue-400/30 transition-all flex items-center gap-2"
            >
              <span className="hidden sm:inline">Get Started</span>
              <span className="inline sm:hidden">Join</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <FaTimes className="text-xl text-gray-700" /> : <FaBars className="text-xl text-gray-700" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden fixed inset-0 bg-white/95 backdrop-blur-xl z-50"
            >
              <div className="flex justify-end p-4">
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                >
                  <FaTimes className="text-xl text-gray-700" />
                </button>
              </div>
              
              <div className="px-6 py-4 space-y-4">
                {navigation.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-3 p-3 rounded-xl ${
                      location.pathname === item.href
                        ? 'bg-gradient-to-r from-blue-50 to-purple-50'
                        : 'hover:bg-gray-50'
                    }`}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-blue-500 text-lg">{item.icon}</span>
                    <span className="text-gray-700 font-medium">{item.name}</span>
                  </motion.a>
                ))}
                <motion.a
                  href="/register"
                  className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 rounded-xl font-medium shadow-lg mt-4"
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started Now
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Header;