import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiClock, FiUser, FiCalendar, FiArrowLeft } from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with React in 2023',
    content: `
      <p>React continues to dominate the frontend development landscape in 2023. Whether you're a complete beginner or coming from another framework, this guide will help you get started with React using modern best practices.</p>
      
      <h2>Why Learn React?</h2>
      <p>React's component-based architecture makes it perfect for building complex user interfaces. With its vast ecosystem and strong community support, React remains one of the most sought-after skills in web development.</p>
      
      <h2>Setting Up Your Environment</h2>
      <p>The easiest way to start a new React project is by using Create React App (CRA) or Vite. Both provide excellent development environments with hot reloading and other modern features.</p>
      
      <h2>Core Concepts</h2>
      <p>Understanding these concepts is crucial for React development:</p>
      <ul>
        <li>Components and Props</li>
        <li>State and Lifecycle</li>
        <li>Hooks (useState, useEffect, etc.)</li>
        <li>JSX Syntax</li>
      </ul>
      
      <h2>Next Steps</h2>
      <p>After mastering the basics, explore more advanced topics like Context API, React Router, and state management solutions like Redux or Zustand.</p>
    `,
    author: 'Jane Smith',
    date: '2023-05-15',
    readTime: '8 min read',
    category: 'React',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  // ... other posts data
];

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen">
       
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800">Post not found</h1>
            <button 
              onClick={() => navigate('/blog')}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Back to Blog
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-blue-600 mb-6"
          >
            <FiArrowLeft className="mr-2" /> Back to Blog
          </button>

          <article className="bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between mb-4">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-2">
                  {post.category}
                </span>
                <div className="flex items-center text-gray-500 text-sm">
                  <FiClock className="mr-1" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
              
              <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                <div className="flex items-center">
                  <FiUser className="mr-1" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <FiCalendar className="mr-1" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
              </div>
              
              <div 
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </article>

          <div className="mt-8 text-center">
            <button
              onClick={() => navigate('/blog')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Blog Posts
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;