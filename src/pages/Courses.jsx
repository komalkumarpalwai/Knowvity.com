import React from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiFilter } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import coursesData from '../data/CoursesData.json';

const CoursesPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const categories = ['All', ...new Set(coursesData.courses.map(course => course.category))];

  const filteredCourses = coursesData.courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         course.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCourseClick = (courseId) => {
    navigate(`/courses/${courseId}`);
  };

  return (
    <div className="py-12 bg-[#F8FAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#353535] mb-4">Our Courses</h1>
          <p className="text-xl text-[#6A7B6D]">Find the perfect course to boost your career</p>
        </div>

        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-[#6A7B6D]" />
              </div>
              <input
                type="text"
                placeholder="Search courses..."
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiFilter className="h-5 w-5 text-[#6A7B6D]" />
              </div>
              <select
                className="appearance-none block pl-10 pr-10 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleCourseClick(course.id)}
            >
              <div>
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="inline-block px-3 py-1 bg-blue-400/20 rounded-full">
                      <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-xs font-medium">
                        {course.category}
                      </span>
                    </span>
                    <span className="flex items-center text-yellow-500">
                      <span className="font-bold">{course.rating}</span>
                      <span> ★</span>
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#353535] mb-2">{course.title}</h3>
                  <p className="text-[#6A7B6D] text-sm mb-4">{course.shortDescription}</p>
                  <div className="flex justify-between items-center">
                    <button
                      className="bg-gradient-to-r from-blue-400 to-purple-400 text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCourseClick(course.id);
                      }}
                    >
                     Explore the Course Details
                    </button>
                    <span className="text-sm text-[#6A7B6D]">{course.duration}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-[#6A7B6D]">No courses found</h3>
            <p className="text-[#353535] mt-2">Try adjusting your search or filter</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;