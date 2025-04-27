import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import coursesData from '../data/CoursesData.json';
import { FaStar, FaRegStar, FaCheck, FaClock, FaUserTie, FaArrowLeft } from 'react-icons/fa';

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showEnrollMessage, setShowEnrollMessage] = useState(false);
  const course = coursesData.courses.find(c => c.id === parseInt(id));

  if (!course) {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-[#353535]">Course not found</h1>
            <p className="text-[#6A7B6D] mt-2">The course you're looking for doesn't exist.</p>
            <button 
              onClick={() => navigate('/courses')}
              className="mt-4 bg-gradient-to-r from-blue-400 to-purple-400 text-white px-4 py-2 rounded-lg"
            >
              Back to Courses
            </button>
          </div>
        </main>
      </div>
    );
  }

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= Math.round(rating) ? 
        <FaStar key={i} className="text-yellow-400" /> : 
        <FaRegStar key={i} className="text-yellow-400" />
      );
    }
    return stars;
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          <FaArrowLeft className="mr-2 text-blue-400" /> Back to Courses
        </button>

        {/* Course Header */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:w-1/2">
              <div className="tracking-wide text-sm bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold mb-1">
                {course.category}
              </div>
              <h1 className="text-3xl font-bold text-[#353535] mb-4">{course.title}</h1>
              <p className="text-[#6A7B6D] mb-6">{course.shortDescription}</p>
              
              <div className="flex items-center mb-6">
                <div className="flex mr-4">
                  {renderStars(course.rating)}
                </div>
                <span className="text-[#6A7B6D] font-medium">
                  {course.rating} ({course.enrollment} students)
                </span>
              </div>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-[#6A7B6D]">
                  <FaClock className="mr-2 text-blue-400" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center text-[#6A7B6D]">
                  <FaUserTie className="mr-2 text-blue-400" />
                  <span>{course.instructor}</span>
                </div>
              </div>

              <div className="mb-8">
                <button 
                  onClick={() => setShowEnrollMessage(true)}
                  className="w-full bg-gradient-to-r from-blue-400 to-purple-400 hover:opacity-90 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center transition-opacity"
                >
                  Enroll Now
                </button>
                {showEnrollMessage && (
                  <div className="mt-4 text-center text-blue-500 font-medium">
                    Launching soon! Stay tuned for updates.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Course Description */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-[#353535] mb-6">About This Course</h2>
              <p className="text-[#6A7B6D] mb-6">{course.description}</p>
              
              <h3 className="text-xl font-bold text-[#353535] mb-4">What You'll Learn</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.syllabus.slice(0, 8).flatMap(week => week.content).map((item, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheck className="text-blue-400 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-[#6A7B6D]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Syllabus */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-[#353535] mb-6">Course Syllabus</h2>
              <div className="space-y-6">
                {course.syllabus.map((week) => (
                  <div key={week.week} className="border-b border-gray-200 pb-6 last:border-0">
                    <h3 className="text-xl font-semibold text-[#353535] mb-3">
                      Week {week.week}: {week.topic}
                    </h3>
                    <ul className="space-y-2">
                      {week.content.map((item, index) => (
                        <li key={index} className="text-[#6A7B6D] flex items-start">
                          <FaCheck className="text-blue-400 mt-1 mr-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Prerequisites */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-[#353535] mb-4">Requirements</h3>
              <ul className="space-y-2">
                {course.prerequisites.map((item, index) => (
                  <li key={index} className="text-[#6A7B6D] flex items-start">
                    <FaCheck className="text-blue-400 mt-1 mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-[#353535] mb-4">Student Reviews</h3>
              <div className="space-y-4">
                {course.reviews.map((review, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-[#353535]">{review.user}</h4>
                      <div className="flex text-yellow-400">
                        {Array.from({ length: 5 }).map((_, i) => (
                          i < review.rating ? <FaStar key={i} /> : <FaRegStar key={i} />
                        ))}
                      </div>
                    </div>
                    <p className="text-[#6A7B6D] text-sm">{review.comment}</p>
                    <p className="text-gray-400 text-xs mt-2">{review.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;