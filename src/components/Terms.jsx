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
            <p className="text-gray-600 mb-6">Effective Date: April 23, 2025</p>

            <div className="prose max-w-none">
              {/* Part A: General Terms and Conditions */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Agreement Scope</h2>
                <p className="text-gray-700 mb-4">
                  These Terms govern your use of Razorpay's payment services, technology, and related offerings ("Services"). By accessing our platform, you agree to be bound by these Terms, including our Privacy Policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Proprietary Rights</h2>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li className="mb-2">Razorpay retains all intellectual property rights in the Services</li>
                  <li className="mb-2">Users grant Razorpay a license to use their materials for service provision</li>
                  <li className="mb-2">Reverse engineering or unauthorized use of trademarks prohibited</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. User Obligations</h2>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li className="mb-2">Must be at least 18 years old to register</li>
                  <li className="mb-2">Responsible for account security and all activities under your account</li>
                  <li className="mb-2">Must provide accurate KYC documents and maintain updated information</li>
                  <li className="mb-2">Prohibited from engaging in cryptocurrency-related activities</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Payment Terms</h2>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li className="mb-2">Fees exclusive of applicable taxes</li>
                  <li className="mb-2">Monthly invoices available on dashboard</li>
                  <li className="mb-2">Daily reconciliation required for transactions</li>
                  <li className="mb-2">GST compliance mandatory for invoice generation</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Data Protection</h2>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li className="mb-2">Consent to data sharing with partners and third-party providers</li>
                  <li className="mb-2">PCI-DSS compliance required for payment processing</li>
                  <li className="mb-2">Mandatory reporting of security breaches</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Liability & Disclaimers</h2>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li className="mb-2">Services provided "as is" without warranties</li>
                  <li className="mb-2">Aggregate liability limited to 1 month's fees</li>
                  <li className="mb-2">Not liable for third-party content or services</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Prohibited Activities</h2>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li className="mb-2">Adult content/services</li>
                  <li className="mb-2">Cryptocurrency/NFT transactions</li>
                  <li className="mb-2">Gambling/betting activities</li>
                  <li className="mb-2">Sale of regulated goods</li>
                  <li className="mb-2">Money laundering services</li>
                </ul>
                <p className="text-gray-700">Full list contains 46 prohibited categories as per RBI guidelines</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Termination</h2>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li className="mb-2">Either party may terminate with notice</li>
                  <li className="mb-2">Immediate suspension for breaches</li>
                  <li className="mb-2">Post-termination obligations remain</li>
                </ul>
              </section>

              {/* Specific Terms Sections */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Special Provisions</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">E-Mandate Services</h3>
                    <p className="text-gray-700">NPCI guidelines compliance required for recurring payments</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Tokenization</h3>
                    <p className="text-gray-700">RBI-compliant card tokenization services</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Offline POS</h3>
                    <p className="text-gray-700">Device management terms and EMI services</p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Governing Law</h2>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li className="mb-2">Indian law applies</li>
                  <li className="mb-2">Exclusive jurisdiction in Bangalore courts</li>
                  <li className="mb-2">Dispute resolution through arbitration</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <strong>Data Protection Officer:</strong><br />
                    Mr. Shashank Karincheti<br />
                    dpo@razorpay.com<br />
                    SJR Cyber, Bangalore-560030
                  </p>
                  <p className="text-gray-700">
                    <strong>Grievance Officer:</strong><br />
                    Mr. Vijay Thakral<br />
                    nodal-officer@razorpay.com<br />
                    +91-8046180061
                  </p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

     
    </div>
  );
};

export default Terms;