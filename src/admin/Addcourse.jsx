import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AddCourse = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const [courseData, setCourseData] = useState({
    title: '',
    shortDescription: '',
    description: '',
    instructor: '',
    duration: '',
    image: '',
    price: '',
    category: '',
    featured: false,
    syllabus: '',
    prerequisites: '',
    reviews: '',
    rating: 0
  });

  const categories = ['Data Science', 'Web Development', 'Machine Learning', 'Design', 'Marketing'];

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    if (isAdmin !== 'true') {
      navigate('/admin/login');
    } else {
      setLoading(false);
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setCourseData({ ...courseData, [name]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedCourse = {
      ...courseData,
      reviews: courseData.reviews
        ? courseData.reviews.split(',').map(review => review.trim())
        : [],
      rating: parseFloat(courseData.rating),
      price: parseFloat(courseData.price)
    };

    console.log('Course Added:', formattedCourse);
    alert('Course Added Successfully!');

    // Reset
    setCourseData({
      title: '',
      shortDescription: '',
      description: '',
      instructor: '',
      duration: '',
      image: '',
      price: '',
      category: '',
      featured: false,
      syllabus: '',
      prerequisites: '',
      reviews: '',
      rating: 0
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-center mb-6">Add New Course</h2>

        {/* Input Fields */}
        {[
          { name: 'title', placeholder: 'Course Title' },
          { name: 'shortDescription', placeholder: 'Short Description' },
          { name: 'instructor', placeholder: 'Instructor Name' },
          { name: 'duration', placeholder: 'Duration (e.g., 10 weeks)' },
          { name: 'image', placeholder: 'Course Image URL' },
          { name: 'price', placeholder: 'Price', type: 'number' },
          { name: 'rating', placeholder: 'Course Rating (0 to 5)', type: 'number' }
        ].map(({ name, placeholder, type = 'text' }) => (
          <input
            key={name}
            type={type}
            name={name}
            placeholder={placeholder}
            value={courseData[name]}
            onChange={handleChange}
            className="w-full p-3 mb-3 border rounded"
            required
          />
        ))}

        {/* Textareas */}
        {[
          { name: 'description', placeholder: 'Detailed Description' },
          { name: 'syllabus', placeholder: 'Syllabus' },
          { name: 'prerequisites', placeholder: 'Prerequisites' }
        ].map(({ name, placeholder }) => (
          <textarea
            key={name}
            name={name}
            placeholder={placeholder}
            value={courseData[name]}
            onChange={handleChange}
            className="w-full p-3 mb-3 border rounded"
            required
          />
        ))}

        {/* Category */}
        <select
          name="category"
          value={courseData.category}
          onChange={handleChange}
          className="w-full p-3 mb-3 border rounded"
          required
        >
          <option value="">Select Category</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>

        {/* Featured */}
        <div className="mb-3">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="featured"
              checked={courseData.featured}
              onChange={handleChange}
              className="form-checkbox"
            />
            <span className="ml-2">Featured</span>
          </label>
        </div>

        {/* Reviews */}
        <textarea
          name="reviews"
          placeholder="Add comma-separated reviews (e.g., 'John: 5: Great course, Lisa: 4: Good!')"
          value={courseData.reviews}
          onChange={handleChange}
          className="w-full p-3 mb-3 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
        >
          Add Course
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
