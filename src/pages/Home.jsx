import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCheckCircle, FaRegGem, FaStar } from 'react-icons/fa';
import { FiCode,FiArrowRight, FiBookOpen, FiUsers, FiChevronRight } from 'react-icons/fi';
import { FiArrowRightCircle } from 'react-icons/fi';
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import courses from '../data/CoursesData.json';

const Home = () => {
  const navigate = useNavigate();
  const featuredCourses = courses.courses.filter(course => course.featured).slice(0, 3);
  const stats = [
    { value: "15+", label: "Courses", icon: <FaRegGem className="w-6 h-6" /> },
    { value: "70k+", label: "Students", icon: <FiUsers className="w-6 h-6" /> },
    { value: "3 Months", label: "Since Launch", icon: <FiBookOpen className="w-6 h-6" /> },
    { value: "4.76", label: "Rating", icon: <FaCheckCircle className="w-6 h-6" /> }
  ];

  const handleViewCourse = (courseId) => navigate(`/courses/${courseId}`);
  const handleViewAllCourses = () => navigate('/courses');
  const handleStartNow = () => navigate('/courses');

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      (
        <section className="relative h-screen bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] overflow-hidden">
      {/* Glowing gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-[#0ea5e9]/30 via-transparent to-transparent blur-3xl"></div>

      {/* Sparkling particles */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-5 mix-blend-soft-light z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 flex flex-col items-center text-center">
        {/* Glow ring */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="mb-4"
        >
          <span className="inline-flex items-center px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sky-300 font-medium shadow-lg text-sm">
            <FiCode className="mr-2" />
            Learn Future Skills
          </span>
        </motion.div>

        {/* Gradient headline */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-sky-400 to-indigo-300 text-transparent bg-clip-text drop-shadow-md"
        >
          Make Your Career Right Now
        </motion.h1>

        {/* Type animation */}
        <TypeAnimation
          sequence={[
            'Coding', 1000,
            'Design', 1000,
            'Photography', 1000,
            'Marketing', 1000,
          ]}
          speed={50}
          repeat={Infinity}
          className="text-xl text-blue-100 mt-4 tracking-wide"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg text-blue-200 mt-6 max-w-2xl"
        >
          Confused about which course to take? We’ve got you covered! Browse courses and discover the best option for you. Knowvity is our effort to teach skills, coding, and those techniques in a short time that took years to master.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <button
            onClick={() => navigate('/courses')}
            className="px-8 py-4 bg-gradient-to-r from-sky-500 to-indigo-600 text-white rounded-xl shadow-md font-semibold hover:scale-105 transition-transform"
          >
            Explore Courses <FiArrowRight className="inline ml-2" />
          </button>

          <button
            onClick={() => navigate('/contact')}
            className="px-8 py-4 border border-white/20 text-white rounded-xl backdrop-blur hover:bg-white/10 transition"
          >
            Get in Touch
          </button>
        </motion.div>
      </div>
    </section>

      {/* Featured Courses Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Courses
            </motion.h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Master modern technologies through hands-on projects and real-world applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <motion.div
                key={course.id}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative h-60">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 p-4">
                    <span className="text-sm font-medium text-blue-400">{course.category}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-yellow-400">
                      ★★★★☆ <span className="text-sm text-gray-500">({course.rating})</span>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Bestseller</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 line-clamp-2 mb-4">{course.shortDescription}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-gray-900">${course.price}</span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      onClick={() => handleViewCourse(course.id)}
                    >
                      Enroll Now
                      <FiChevronRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Success Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="max-w-lg">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                  Transform Your Career
                </h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <FaCheckCircle className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-gray-900 mb-2">6 Months</p>
                      <p className="text-gray-600">Average time to land first developer job</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="bg-purple-100 p-3 rounded-xl">
                      <FiUsers className="w-8 h-8 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-gray-900 mb-2">70K+</p>
                      <p className="text-gray-600">Students learning together</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl shadow-xl p-8 h-fit"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Our Alumni Work At</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['Amazon', 'Google', 'Microsoft', 'PayPal', 'Samsung', 'JPMorgan'].map((company) => (
                  <div 
                    key={company}
                    className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center"
                  >
                    <img
                      src={`https://logo.clearbit.com/${company.toLowerCase()}.com`}
                      alt={company}
                      className="h-8 object-contain grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center text-gray-500 text-sm">
                ...and 500+ other top tech companies
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Student Success Stories
            </motion.h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from our alumni who transformed their careers through our programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-xl mr-2 flex gap-1">
                  {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "I don't have words to thank this platform. The project-based learning approach helped me land my first developer job within 6 months. The community support is incredible!"
              </p>
              <div className="flex items-center">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="Mohit Kumar"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Mohit Kumar</h4>
                  <p className="text-gray-600">Frontend Developer @Amazon</p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-xl mr-2 flex gap-1">
                  {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "The mentorship program was a game-changer. I went from basic coding skills to building production-ready applications. The career services helped me negotiate a 40% salary increase!"
              </p>
              <div className="flex items-center">
                <img 
                  src="https://randomuser.me/api/portraits/women/45.jpg" 
                  alt="Priya Sharma"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Priya Sharma</h4>
                  <p className="text-gray-600">Full Stack Developer @Google</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Career?
            </h3>
            <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
              Join thousands of students who accelerated their careers with our project-based learning approach
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
              onClick={handleStartNow}
            >
              Start Learning Now
            </motion.button>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;