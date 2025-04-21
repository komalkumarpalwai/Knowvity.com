import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiChevronDown, FiChevronUp, FiArrowLeft } from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FAQ = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I enroll in a course?",
      answer: "To enroll in a course, simply navigate to the course page and click the 'Enroll Now' button. You'll be guided through the payment process if the course isn't free. After payment confirmation, you'll get immediate access to the course content."
    },
    {
      question: "Do you offer certificates upon completion?",
      answer: "Yes, we provide certificates of completion for all our paid courses. Free courses may or may not include certificates depending on the specific course. You'll find certificate information on each course's details page."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit/debit cards (Visa, MasterCard, American Express), PayPal, and in some regions, mobile payment options. All payments are processed securely through our payment partners."
    },
    {
      question: "Can I access courses on mobile devices?",
      answer: "Absolutely! Our platform is fully responsive and works on smartphones, tablets, and desktop computers. You can even download our mobile app from the App Store or Google Play for a better learning experience."
    },
    {
      question: "What's your refund policy?",
      answer: "We offer a 30-day money-back guarantee for all courses. If you're not satisfied with your purchase, simply contact our support team within 30 days of enrollment for a full refund, no questions asked."
    },
    {
      question: "How long do I have access to a course?",
      answer: "Once enrolled, you have lifetime access to the course content, including any future updates. You can learn at your own pace and revisit the material whenever you need."
    },
    {
      question: "Do you offer team or enterprise plans?",
      answer: "Yes, we offer special pricing for teams and organizations. Contact our sales team at enterprise@knowvity.com to discuss bulk enrollment options and customized learning solutions for your team."
    },
    {
      question: "How can I contact support?",
      answer: "Our support team is available 24/7 through the help center in your account dashboard. You can also email us at support@knowvity.com or use the live chat feature during business hours (9AM-6PM EST)."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen">
     
      
      <main className="flex-grow py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.button
            onClick={() => navigate(-1)}
            whileHover={{ scale: 1.05 }}
            className="flex items-center text-blue-600 mb-8"
          >
            <FiArrowLeft className="mr-2" />
            Back
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="p-6 md:p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h1>
              <p className="text-gray-600 mb-8">Find answers to common questions about our platform and courses</p>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.01 }}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <button
                      className="w-full flex justify-between items-center p-4 md:p-6 text-left focus:outline-none"
                      onClick={() => toggleFAQ(index)}
                    >
                      <h3 className="text-lg md:text-xl font-medium text-gray-900">{faq.question}</h3>
                      {activeIndex === index ? (
                        <FiChevronUp className="text-gray-500 text-xl" />
                      ) : (
                        <FiChevronDown className="text-gray-500 text-xl" />
                      )}
                    </button>
                    
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: activeIndex === index ? 'auto' : 0,
                        opacity: activeIndex === index ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 md:px-6 md:pb-6">
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Still have questions?</h3>
                <p className="text-gray-700 mb-4">We're here to help! Contact our support team for personalized assistance.</p>
                <button
                  onClick={() => navigate('/contact')}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Contact Support
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

    </div>
  );
};

export default FAQ;