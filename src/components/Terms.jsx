import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Terms = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
    
      
      <main className="flex-grow py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.button
            onClick={() => navigate(-1)}
            whileHover={{ scale: 1.05 }}
            className="flex items-center text-blue-600 mb-8"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-md p-6 md:p-8"
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
            <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="prose max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
                <p className="text-gray-700 mb-4">
                  Welcome to Knowvity. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our platform, you agree to be bound by these Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Account Registration</h2>
                <p className="text-gray-700 mb-4">
                  To access certain features, you may need to register for an account. You must provide accurate information and keep your account secure. You are responsible for all activities under your account.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Content Usage</h2>
                <p className="text-gray-700 mb-4">
                  All course materials, including videos, text, and code samples, are protected by copyright. You may access them for personal use only. Redistribution or commercial use without permission is prohibited.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Payments and Refunds</h2>
                <p className="text-gray-700 mb-4">
                  Paid courses require payment before access. We offer a 30-day refund policy for unsatisfied customers. Refund requests must be submitted through our support system.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. User Conduct</h2>
                <p className="text-gray-700 mb-4">
                  You agree not to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li className="mb-2">Share your account credentials</li>
                  <li className="mb-2">Use our platform for illegal activities</li>
                  <li className="mb-2">Upload malicious content</li>
                  <li className="mb-2">Harass other users</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Termination</h2>
                <p className="text-gray-700 mb-4">
                  We reserve the right to terminate or suspend your account for violations of these Terms. You may also terminate your account at any time through your account settings.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Changes to Terms</h2>
                <p className="text-gray-700 mb-4">
                  We may update these Terms periodically. Continued use after changes constitutes acceptance of the new Terms. We will notify users of significant changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Contact Us</h2>
                <p className="text-gray-700">
                  For questions about these Terms, please contact us at <a href="mailto:legal@knowvity.com" className="text-blue-600 hover:underline">legal@knowvity.com</a>.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

    </div>
  );
};

export default Terms;