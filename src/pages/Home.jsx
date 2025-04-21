import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { FiCode, FiBookOpen, FiUsers } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import courses from '../data/CoursesData.json';

const Home = () => {
  const navigate = useNavigate();
  const featuredCourses = courses.courses.filter(course => course.featured).slice(0, 3);
  const stats = [
    { value: "15+", label: "Courses" },
    { value: "500k+", label: "Students" },
    { value: "4.76", label: "Rating" }
  ];

  const handleViewCourse = (courseId) => {
    navigate(`/courses/${courseId}`);
  };

  const handleViewAllCourses = () => {
    navigate('/courses');
  };

  const handleStartNow = () => {
    navigate('/courses');
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      
      {/* Hero Section */}
      <section className="relative overflow-hidden flex-grow">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-[#353535] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#3EC1C980] to-[#6A7B6D80]"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-30"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left space-y-6 md:space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Learn coding <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3EC1C9] to-[#6A7B6D]">the right way</span>
                </h1>
                <h2 className="text-lg sm:text-xl md:text-2xl text-[#3EC1C9] mt-2 sm:mt-4">
                  Welcome to Knowvity
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4 md:space-y-6"
              >
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-4">
                  <span className="text-white font-medium bg-[#3EC1C9]/30 px-3 py-1 sm:px-4 sm:py-2 rounded-full backdrop-blur-sm flex items-center gap-1 sm:gap-2 text-sm sm:text-base">
                    <FiCode className="w-4 h-4 sm:w-5 sm:h-5" /> Learn
                  </span>
                  <span className="text-white font-medium text-sm sm:text-base">C Programming</span>
                  <span className="text-white/50 text-sm sm:text-base">|</span>
                  <span className="text-white/70 text-sm sm:text-base">Python</span>
                  <span className="text-white/50 text-sm sm:text-base">|</span>
                  <span className="text-white/70 text-sm sm:text-base">JavaScript</span>
                </div>

                <p className="text-base sm:text-lg text-gray-300 max-w-2xl px-2 sm:px-0">
                  Confused about which course to take? We've got you covered! Browse courses and discover the best option for you. 
                  It's free! Knowvity is our effort to teach the basics and those coding techniques in a short time that took years to master.
                </p>

                <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start px-2 sm:px-0">
                  <motion.button
                    onClick={handleViewAllCourses}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-[#3EC1C9] to-[#6A7B6D] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium flex items-center gap-1 sm:gap-2 hover:shadow-lg text-sm sm:text-base"
                  >
                    Explore Courses
                    <FaArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.button>
                  <motion.button
                    onClick={() => navigate('/blog')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/10 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium flex items-center gap-1 sm:gap-2 hover:bg-white/20 backdrop-blur-sm text-sm sm:text-base"
                  >
                    <FiBookOpen className="w-4 h-4 sm:w-5 sm:h-5" /> Read Articles
                  </motion.button>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 max-w-md mx-auto lg:mx-0 lg:ml-auto mt-8 lg:mt-0"
            >
              <div className="space-y-6 sm:space-y-8">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-4 sm:gap-6">
                    <div className="bg-gradient-to-br from-[#3EC1C9] to-[#6A7B6D] p-2 sm:p-3 rounded-xl">
                      <FaCheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</p>
                      <p className="text-gray-300 text-sm sm:text-base">{stat.label}</p>
                    </div>
                  </div>
                ))}
                
                <div className="pt-4 sm:pt-6 border-t border-white/20">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((item) => (
                        <img
                          key={item}
                          src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item + 20}.jpg`}
                          alt="Student"
                          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white"
                        />
                      ))}
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm sm:text-base">Join our community</p>
                      <p className="text-gray-300 text-xs sm:text-sm">500K+ students learning together</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating elements */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="hidden sm:block absolute top-1/4 left-10 w-8 h-8 rounded-full bg-[#6A7B6D]/30 blur-xl"
        />
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="hidden sm:block absolute bottom-1/3 right-20 w-12 h-12 rounded-full bg-[#3EC1C9]/30 blur-xl"
        />
      </section>

      {/* Featured Courses Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#353535] mb-4">Featured Courses</h2>
            <p className="text-lg text-[#6A7B6D]">Start learning with our most popular courses</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-[#3EC1C9]">{course.category}</span>
                    <span className="flex items-center text-sm text-[#6A7B6D]">
                      {course.rating} ★
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#353535] mb-2">{course.title}</h3>
                  <p className="text-[#6A7B6D] text-sm mb-4">{course.shortDescription}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-[#353535]">${course.price}</span>
                    <motion.button
                      onClick={() => handleViewCourse(course.id)}
                      whileHover={{ scale: 1.05 }}
                      className="bg-[#3EC1C9] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#36a9af] transition-colors"
                    >
                      View Course
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <motion.button
              onClick={handleViewAllCourses}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-[#3EC1C9] to-[#6A7B6D] text-white px-8 py-3 rounded-full font-medium text-lg inline-flex items-center gap-2"
            >
              View All Courses
              <FaArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Career Success Section */}
      <section className="py-16 bg-gradient-to-br from-[#353535] to-[#3EC1C9] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Stats */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6">Transform Your Career</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="bg-[#3EC1C9]/20 p-3 rounded-xl">
                      <FaCheckCircle className="w-8 h-8 text-[#3EC1C9]" />
                    </div>
                    <div>
                      <p className="text-4xl font-bold mb-2">6 Months</p>
                      <p className="text-gray-300">Average time to land first developer job</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="bg-[#6A7B6D]/20 p-3 rounded-xl">
                      <FiUsers className="w-8 h-8 text-[#6A7B6D]" />
                    </div>
                    <div>
                      <p className="text-4xl font-bold mb-2">7M+</p>
                      <p className="text-gray-300">Students trained worldwide</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Companies */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
            >
              <h3 className="text-xl font-semibold mb-6">Our Alumni Work At</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['Amazon', 'Google', 'Microsoft', 'Goldman Sachs', 'PayPal', 'Samsung'].map((company) => (
                  <div 
                    key={company}
                    className="flex items-center justify-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition"
                  >
                    <span className="text-[#3EC1C9] font-medium">{company}</span>
                  </div>
                ))}
                <div className="col-span-full text-center text-gray-300 mt-4">
                  ...and 500+ other companies worldwide
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#353535] mb-4">What Our Students Say</h2>
            <p className="text-lg text-[#6A7B6D]">Hear from those who transformed their careers</p>
          </div>

          {/* ... (Keep testimonials section same, just update any color classes) */}

          {/* Coding Journey CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-[#3EC1C9] to-[#6A7B6D] rounded-2xl p-8 md:p-12 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Start Your Coding Journey</h3>
            <p className="text-lg text-[#e0f7fa] mb-8 max-w-2xl mx-auto">
              Learn coding step-by-step with India's most loved programming mentor.
            </p>
            <motion.button
              onClick={handleStartNow}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-[#3EC1C9] px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Start Now
            </motion.button>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;