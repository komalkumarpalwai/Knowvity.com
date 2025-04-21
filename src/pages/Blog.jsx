import React from 'react';
import { motion } from 'framer-motion';
import { FiClock, FiUser, FiCalendar } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with React in 2023',
    excerpt: 'Learn the fundamentals of React and how to build your first application with modern best practices.',
    author: 'Jane Smith',
    date: '2023-05-15',
    readTime: '8 min read',
    category: 'React',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
  },
  {
    id: 2,
    title: 'Mastering JavaScript ES6 Features',
    excerpt: 'Explore the powerful features introduced in ES6 that every JavaScript developer should know.',
    author: 'John Doe',
    date: '2023-04-22',
    readTime: '10 min read',
    category: 'JavaScript',
    image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
  },
  {
    id: 3,
    title: 'CSS Grid vs Flexbox: When to Use Each',
    excerpt: 'A comprehensive guide to understanding when to use CSS Grid and when Flexbox is the better choice.',
    author: 'Alex Johnson',
    date: '2023-03-10',
    readTime: '12 min read',
    category: 'CSS',
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
  },
  {
    id: 4,
    title: 'Building RESTful APIs with Node.js',
    excerpt: 'Step-by-step guide to creating robust REST APIs using Node.js and Express.',
    author: 'Sarah Williams',
    date: '2023-02-28',
    readTime: '15 min read',
    category: 'Node.js',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
  },
  {
    id: 5,
    title: 'Python for Data Science: First Steps',
    excerpt: 'Begin your data science journey with Python and essential libraries like Pandas and NumPy.',
    author: 'Michael Chen',
    date: '2023-01-18',
    readTime: '9 min read',
    category: 'Python',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80'
  },
  {
    id: 6,
    title: 'The Future of Web Development in 2023',
    excerpt: 'Explore the emerging trends and technologies shaping the future of web development.',
    author: 'Emily Rodriguez',
    date: '2022-12-05',
    readTime: '11 min read',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80'
  }
];

const BlogPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handlePostClick = (postId) => {
    navigate(`/blog/${postId}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
   

      <main className="flex-grow py-12 bg-[#F5F9F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#353535] mb-4">Our Blog</h1>
            <p className="text-xl text-[#6A7B6D]">Learn from our expert developers and stay updated with the latest trends</p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="Search blog posts..."
                  className="block w-full pl-4 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#3EC1C9] focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="relative">
                <select
                  className="appearance-none block w-full pl-4 pr-10 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#3EC1C9] focus:border-transparent"
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

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => handlePostClick(post.id)}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="inline-block px-3 py-1 bg-[#3EC1C9]/20 text-[#3EC1C9] text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-[#6A7B6D] text-sm">
                      <FiClock className="mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#353535] mb-2">{post.title}</h3>
                  <p className="text-[#6A7B6D] text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-[#6A7B6D]">
                    <div className="flex items-center">
                      <FiUser className="mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <FiCalendar className="mr-1" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-[#353535]">No blog posts found</h3>
              <p className="text-[#6A7B6D] mt-2">Try adjusting your search or filter</p>
            </div>
          )}
        </div>
      </main>

      
    </div>
  );
};

export default BlogPage;
