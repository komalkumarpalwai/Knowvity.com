import { FaCode, FaServer, FaLayerGroup, FaRegClock, FaChalkboardTeacher, FaCertificate, FaUserGraduate } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState } from 'react';

const InternshipPage = () => {
  const [activeTab, setActiveTab] = useState('fullstack');
  
  const tracks = {
    frontend: {
      title: "Frontend Engineering",
      icon: <FaCode className="w-8 h-8" />,
      tech: ['React 18', 'Next.js 14', 'TypeScript', 'Tailwind CSS', 'Web Performance', 'Accessibility'],
      projects: 8,
      duration: '3 months'
    },
    backend: {
      title: "Backend Engineering",
      icon: <FaServer className="w-8 h-8" />,
      tech: ['Node.js', 'Python/Django', 'REST APIs', 'GraphQL', 'Microservices', 'Database Design'],
      projects: 6,
      duration: '3 months'
    },
    fullstack: {
      title: "Full Stack Mastery",
      icon: <FaLayerGroup className="w-8 h-8" />,
      tech: ['MERN Stack', 'Authentication', 'WebSockets', 'CI/CD', 'Testing', 'Deployment'],
      projects: 10,
      duration: '3 months'
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300">
      {/* Premium Header */}
      

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            Elite Tech Internship Program
          </motion.h1>
          
          <div className="flex justify-center gap-8 mb-12">
            <div className="bg-gray-800/50 p-4 rounded-xl">
              <div className="text-2xl font-bold text-blue-400">10,000+</div>
              <div className="text-gray-400">Interns Trained</div>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-xl">
              <div className="text-2xl font-bold text-purple-400">94%</div>
              <div className="text-gray-400">Placement Rate</div>
            </div>
          </div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 p-[2px] rounded-full"
          >
    <a href="/courses">       <button className="bg-gray-900 px-12 py-3.5 rounded-full font-medium hover:bg-gray-900/90 transition-all">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Join Elite Coders
              </span>
            </button></a> 
          </motion.div>
        </div>
      </section>

      {/* Tracks Section */}
    

      {/* Pricing Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Exclusive Pricing</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative bg-gray-800 border-2 border-blue-400/20 rounded-2xl p-8"
            >
              <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-xl">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-4">3 Months Immersive</h3>
              <div className="text-4xl font-bold mb-4">
                ₹249<span className="text-xl text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3"><FaChalkboardTeacher /> Daily 1:1 Mentorship</li>
                <li className="flex items-center gap-3"><FaUserGraduate /> Career Coaching</li>
                <li className="flex items-center gap-3"><FaCertificate /> Industry Certifications</li>
              </ul>
          <a href="/courses">   <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-3.5 rounded-lg font-medium">
                Start Premium Journey
              </button></a> 
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 border-2 border-purple-400/20 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-4">2 Months Intensive</h3>
              <div className="text-4xl font-bold mb-4">
                ₹199<span className="text-xl text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3"><FaChalkboardTeacher /> Weekly Mentorship</li>
                <li className="flex items-center gap-3"><FaUserGraduate /> Resume Building</li>
                <li className="flex items-center gap-3"><FaCertificate /> Project Certificates</li>
              </ul>
              <a href="/courses">   <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-3.5 rounded-lg font-medium">
                Start Premium Journey
              </button></a> 
            </motion.div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Comprehensive Curriculum</h2>
          
          <div className="flex gap-4 mb-8 justify-center">
            {Object.keys(tracks).map((track) => (
              <button
                key={track}
                onClick={() => setActiveTab(track)}
                className={`px-6 py-2 rounded-full ${
                  activeTab === track 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
              >
                {tracks[track].title}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-blue-400">Core Technologies</h3>
              <ul className="space-y-3">
                {tracks[activeTab].tech.slice(0, 3).map((tech, i) => (
                  <li key={i} className="flex items-center gap-3 bg-gray-700/30 p-4 rounded-lg">
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-purple-400">Advanced Concepts</h3>
              <ul className="space-y-3">
                {tracks[activeTab].tech.slice(3).map((tech, i) => (
                  <li key={i} className="flex items-center gap-3 bg-gray-700/30 p-4 rounded-lg">
                    <div className="w-2 h-2 bg-purple-400 rounded-full" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="bg-gray-800/50 border border-gray-700 rounded-2xl p-12"
          >
            <h2 className="text-4xl font-bold mb-6">Join Our Elite Tech Community</h2>
            <p className="text-xl text-gray-400 mb-8">
              Limited seats available for our next cohort of 5000+ aspirants
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-gray-900 px-6 py-3.5 rounded-lg flex-1 border border-gray-700 focus:border-blue-500 outline-none"
              />
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3.5 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/30">
                Secure Your Spot Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Add your existing Footer component here */}
    </div>
  );
};

export default InternshipPage;