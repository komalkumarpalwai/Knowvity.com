import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Privacy = () => {
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
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
            <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="prose max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
                <p className="text-gray-700 mb-4">
                  We collect information when you register, enroll in courses, or interact with our platform:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li className="mb-2">Personal information (name, email, etc.)</li>
                  <li className="mb-2">Payment information (processed securely by our payment partners)</li>
                  <li className="mb-2">Usage data and analytics</li>
                  <li className="mb-2">Course progress and completion data</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">
                  We use collected information to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li className="mb-2">Provide and improve our services</li>
                  <li className="mb-2">Process transactions</li>
                  <li className="mb-2">Personalize your learning experience</li>
                  <li className="mb-2">Communicate important updates</li>
                  <li className="mb-2">Analyze platform usage</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Data Sharing</h2>
                <p className="text-gray-700 mb-4">
                  We do not sell your personal information. We may share data with:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li className="mb-2">Payment processors for transaction completion</li>
                  <li className="mb-2">Service providers who assist our operations</li>
                  <li className="mb-2">Legal authorities when required by law</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Cookies and Tracking</h2>
                <p className="text-gray-700 mb-4">
                  We use cookies and similar technologies to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li className="mb-2">Authenticate users</li>
                  <li className="mb-2">Remember preferences</li>
                  <li className="mb-2">Analyze site traffic</li>
                </ul>
                <p className="text-gray-700">
                  You can manage cookie preferences in your browser settings.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Data Security</h2>
                <p className="text-gray-700 mb-4">
                  We implement industry-standard security measures including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li className="mb-2">Encryption of sensitive data</li>
                  <li className="mb-2">Regular security audits</li>
                  <li className="mb-2">Access controls</li>
                </ul>
                <p className="text-gray-700">
                  However, no internet transmission is 100% secure. Please protect your account credentials.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Your Rights</h2>
                <p className="text-gray-700 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li className="mb-2">Access your personal data</li>
                  <li className="mb-2">Request correction of inaccurate data</li>
                  <li className="mb-2">Request deletion of your data</li>
                  <li className="mb-2">Opt-out of marketing communications</li>
                </ul>
                <p className="text-gray-700">
                  To exercise these rights, contact us at <a href="mailto:privacy@knowvity.com" className="text-blue-600 hover:underline">privacy@knowvity.com</a>.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Children's Privacy</h2>
                <p className="text-gray-700 mb-4">
                  Our services are not directed to children under 13. We do not knowingly collect data from children under 13.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Changes to This Policy</h2>
                <p className="text-gray-700">
                  We may update this policy. Significant changes will be communicated to users. Continued use after changes constitutes acceptance of the new policy.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

    </div>
  );
};

export default Privacy;