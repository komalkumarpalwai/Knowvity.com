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
            <p className="text-gray-600 mb-6">Last updated: March 19th, 2024</p>

            <div className="prose max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
                <p className="text-gray-700 mb-4">
                  This privacy policy applies to your use of Razorpay services including our website, mobile applications, 
                  and payment services. By using our services, you agree to the collection and use of information in 
                  accordance with this policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li className="mb-2">Personal Information (name, email, phone number)</li>
                  <li className="mb-2">Financial information (credit/debit card details, bank account information)</li>
                  <li className="mb-2">KYC documents as per RBI regulations</li>
                  <li className="mb-2">Usage data (IP address, browser type, pages visited)</li>
                  <li className="mb-2">Third-party account information (when authorized)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Usage</h2>
                <p className="text-gray-700 mb-4">
                  We use your information to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li className="mb-2">Provide and maintain our services</li>
                  <li className="mb-2">Process transactions and send payment alerts</li>
                  <li className="mb-2">Comply with legal obligations (RBI regulations)</li>
                  <li className="mb-2">Improve service quality and security</li>
                  <li className="mb-2">Communicate important updates</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Sharing</h2>
                <p className="text-gray-700 mb-4">
                  We may share information with:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li className="mb-2">Banks and financial institutions for transaction processing</li>
                  <li className="mb-2">Regulatory authorities as required by law</li>
                  <li className="mb-2">Service providers under confidentiality agreements</li>
                  <li className="mb-2">Affiliated companies under common control</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cookies</h2>
                <p className="text-gray-700 mb-4">
                  We use cookies to improve service quality. You can manage cookies through your browser settings:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li className="mb-2">Session cookies (expire when browser closes)</li>
                  <li className="mb-2">Persistent cookies (remain until deleted)</li>
                  <li className="mb-2">Third-party cookies for analytics and advertising</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Security Measures</h2>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li className="mb-2">Industry-standard encryption</li>
                  <li className="mb-2">Regular security audits</li>
                  <li className="mb-2">Role-based access controls</li>
                  <li className="mb-2">Secure server infrastructure</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Rights</h2>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li className="mb-2">Access and update personal information</li>
                  <li className="mb-2">Request data deletion</li>
                  <li className="mb-2">Opt-out of marketing communications</li>
                  <li className="mb-2">Withdraw consent for data processing</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Grievance Redressal</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">Data Protection Officer:</p>
                  <p className="text-gray-700">Mr. Shashank Karincheti</p>
                  <p className="text-gray-700">Razorpay Software Private Limited</p>
                  <p className="text-gray-700">Bangalore - 560030, India</p>
                  <p className="text-gray-700">Phone: 080-46669555</p>
                  <p className="text-gray-700">Email: <a href="mailto:dpo@razorpay.com" className="text-blue-600 hover:underline">dpo@razorpay.com</a></p>
                  <p className="text-gray-700 mt-2">Grievance Portal: <a href="https://razorpay.com/grievances/" className="text-blue-600 hover:underline">https://razorpay.com/grievances/</a></p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Legal Compliance</h2>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li className="mb-2">Governed by Indian law</li>
                  <li className="mb-2">Jurisdiction: Courts in Bengaluru, India</li>
                  <li className="mb-2">RBI compliance for financial transactions</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Policy Updates</h2>
                <p className="text-gray-700">
                  We may update this policy periodically. Continued use of services after changes constitutes acceptance 
                  of the revised policy.
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