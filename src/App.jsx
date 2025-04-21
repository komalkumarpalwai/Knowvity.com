import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // we'll create this next
import './index.css';

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Contact = lazy(() => import('./pages/Contact'));
const Courses = lazy(() => import('./pages/Courses'));
const CourseDetails = lazy(() => import('./pages/CourseDetails'));
const Privacy = lazy(() => import('./components/Privacy'));
const Terms = lazy(() => import('./components/Terms'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Faq =lazy (()=> import ('./components/Faq'))
const Register = lazy (()=> import ('./pages/Register'))
const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main>
        <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseDetails />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
