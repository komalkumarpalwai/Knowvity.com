import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiClock, FiUser, FiCalendar, FiArrowLeft } from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';
const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with React in 2023',
    content: `...`, // same as before
    author: 'Jane Smith',
    date: '2023-05-15',
    readTime: '8 min read',
    category: 'React',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?...'
  },
  {
    id: 2,
    title: 'Mastering JavaScript ES2023 Features',
    content: `
      <p>JavaScript continues to evolve. In 2023, new features like Record & Tuple, pattern matching, and Array findLastIndex are becoming essential.</p>
      
      <h2>What’s New?</h2>
      <ul>
        <li>Top-level await</li>
        <li>Private class fields</li>
        <li>ES decorators</li>
        <li>New array methods</li>
      </ul>
      <p>Embrace modern JS and write cleaner, more powerful code.</p>
    `,
    author: 'Alex Johnson',
    date: '2023-04-10',
    readTime: '7 min read',
    category: 'JavaScript',
    image: 'https://images.unsplash.com/photo-1581091870620-1e7bff5c5a95?auto=format&fit=crop&w=1470&q=80'
  },
  {
    id: 3,
    title: 'Tailwind CSS: Utility-First Styling for Speed & Consistency',
    content: `
      <p>Tailwind CSS is rapidly becoming the go-to framework for developers who value speed, responsiveness, and customization.</p>
      
      <h2>Why Tailwind?</h2>
      <ul>
        <li>Fast styling using utility classes</li>
        <li>Responsive and mobile-first out of the box</li>
        <li>Customizable with your own theme</li>
      </ul>
      <p>From prototypes to production-ready UIs, Tailwind has it all.</p>
    `,
    author: 'Priya Agarwal',
    date: '2023-06-25',
    readTime: '5 min read',
    category: 'CSS',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1470&q=80'
  },
  {
    id: 4,
    title: 'How to Build a Full Stack App with MERN',
    content: `
      <p>The MERN stack (MongoDB, Express.js, React, Node.js) is a powerful way to build modern full-stack applications.</p>
      
      <h2>Stack Overview</h2>
      <ul>
        <li>MongoDB – NoSQL database</li>
        <li>Express.js – Server-side web framework</li>
        <li>React – Frontend UI</li>
        <li>Node.js – Backend runtime</li>
      </ul>
      <p>Start by scaffolding your backend API and then connect it with a responsive React frontend.</p>
    `,
    author: 'David Lee',
    date: '2023-07-05',
    readTime: '10 min read',
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1600195077073-4b0a6acb1c8e?auto=format&fit=crop&w=1470&q=80'
  },
  {
    id: 5,
    title: 'Deploying Your Website with Vercel and Netlify',
    content: `
      <p>Learn how to deploy your static or dynamic website using platforms like Vercel and Netlify in a few simple steps.</p>
      
      <h2>Deployment Made Easy</h2>
      <ul>
        <li>Push your code to GitHub</li>
        <li>Connect your repo on Vercel or Netlify</li>
        <li>Enjoy automatic builds and deployments!</li>
      </ul>
      <p>Perfect for hobby projects and professional portfolios.</p>
    `,
    author: 'Sara Gomez',
    date: '2023-08-12',
    readTime: '4 min read',
    category: 'Deployment',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1470&q=80'
  }
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

     
    </div>
  );
};

export default BlogPost;