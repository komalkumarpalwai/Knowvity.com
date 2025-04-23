import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AddCourse = () => {
  const navigate = useNavigate();
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
    reviews: [],
    rating: 0
  });
  const [loading, setLoading] = useState(true);  // Loading state for protection check

  const categories = ['Data Science', 'Web Development', 'Machine Learning', 'Design', 'Marketing'];

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    if (isAdmin !== 'true') {
      navigate('/admin/login');  // Redirect to admin login if not an admin
    } else {
      setLoading(false);  // Set loading to false once the admin check is done
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Course Added:', courseData);
    alert('Course Added Successfully!');
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
      reviews: [],
      rating: 0
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );  // Show loading message while checking admin status
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-center mb-6">Add New Course</h2>

        {/* Course Title */}
        <input
          type="text"
          name="title"
          placeholder="Course Title"
          value={courseData.title}
          onChange={handleChange}
          className="w-full p-3 mb-3 border rounded"
          required
        />

        {/* Short Description */}
        <input
          type="text"
          name="shortDescription"
          placeholder="Short Description"
          value={courseData.shortDescription}
          onChange={handleChange}
          className="w-full p-3 mb-3 border rounded"
          required
        />

        {/* Description */}
        <textarea
          name="description"
          placeholder="Detailed Description"
          value={courseData.description}
          onChange={handleChange}
          className="w-full p-3 mb-3 border rounded"
          required
        />

        {/* Instructor */}
        <input
          type="text"
          name="instructor"
          placeholder="Instructor Name"
          value={courseData.instructor}
          onChange={handleChange}
          className="w-full p-3 mb-3 border rounded"
          required
        />

        {/* Duration */}
        <input
          type="text"
          name="duration"
          placeholder="Duration (e.g., 10 weeks)"
          value={courseData.duration}
          onChange={handleChange}
          className="w-full p-3 mb-3 border rounded"
          required
        />

        {/* Course Image URL */}
        <input
          type="text"
          name="image"
          placeholder="Course Image URL"
          value={courseData.image}
          onChange={handleChange}
          className="w-full p-3 mb-3 border rounded"
          required
        />

        {/* Price */}
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={courseData.price}
          onChange={handleChange}
          className="w-full p-3 mb-3 border rounded"
          required
        />

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
              onChange={(e) => setCourseData({ ...courseData, featured: e.target.checked })}
              className="form-checkbox"
            />
            <span className="ml-2">Featured</span>
          </label>
        </div>

        {/* Syllabus */}
        <textarea
          name="syllabus"
          placeholder="Syllabus"
          value={courseData.syllabus}
          onChange={handleChange}
          className="w-full p-3 mb-3 border rounded"
          required
        />

        {/* Prerequisites */}
        <textarea
          name="prerequisites"
          placeholder="Prerequisites"
          value={courseData.prerequisites}
          onChange={handleChange}
          className="w-full p-3 mb-3 border rounded"
          required
        />

        {/* Reviews */}
        <div className="mb-3">
          <h3 className="font-semibold">Reviews</h3>
          <textarea
            name="reviews"
            placeholder="Add Reviews (User: Rating: Comment)"
            value={courseData.reviews}
            onChange={handleChange}
            className="w-full p-3 mb-3 border rounded"
          />
        </div>

        {/* Rating */}
        <input
          type="number"
          name="rating"
          min="0"
          max="5"
          placeholder="Course Rating (0 to 5)"
          value={courseData.rating}
          onChange={handleChange}
          className="w-full p-3 mb-3 border rounded"
          required
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
