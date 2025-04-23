import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin 
} from 'react-icons/fa';

const ContactPage = () => {
  const contactMethods = [
    {
      icon: <FiMail className="w-6 h-6 text-blue-600" />,
      title: "Email Us",
      description: "Our friendly team is here to help.",
      details: "codemindswebservices@gmail.com",
      link: "mailto:codemindswebservices@gmail.com"
    },
    {
      icon: <FiPhone className="w-6 h-6 text-purple-600" />,
      title: "Call Us",
      description: "Mon-Fri from 9am to 5pm.",
      details: "+91 93902 28526 / 81422 85266",
      link: "tel:+919390228526"
    },
    {
      icon: <FiMapPin className="w-6 h-6 text-blue-400" />,
      title: "Visit Us",
      description: "Come say hello at our office.",
      details: "Brindavan Colony, Ibrahimpatnam, Hyderabad",
      link: "https://maps.google.com/?q=Brindavan+Colony,+Ibrahimpatnam,+Hyderabad"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Contact Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100 max-w-2xl mx-auto"
          >
            We'd love to hear from you! Reach out for questions, feedback, or partnerships.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <main className="flex-grow bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Information</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Fill out the form or use one of these methods to reach our team. We typically respond within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.link}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="p-3 bg-blue-50 dark:bg-gray-700 rounded-full">
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">{method.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{method.description}</p>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">{method.details}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Media */}
              <div className="pt-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <motion.a
                    href="#"
                    whileHover={{ y: -3 }}
                    className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-sm hover:shadow-md"
                    aria-label="Facebook"
                  >
                    <FaFacebook className="text-blue-600 dark:text-blue-400 w-5 h-5" />
                  </motion.a>

                  <motion.a
                    href="#"
                    whileHover={{ y: -3 }}
                    className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-sm hover:shadow-md"
                    aria-label="Twitter"
                  >
                    <FaTwitter className="text-blue-400 dark:text-blue-300 w-5 h-5" />
                  </motion.a>

                  <motion.a
                    href="#"
                    whileHover={{ y: -3 }}
                    className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-sm hover:shadow-md"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="text-pink-600 dark:text-pink-400 w-5 h-5" />
                  </motion.a>

                  <motion.a
                    href="#"
                    whileHover={{ y: -3 }}
                    className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-sm hover:shadow-md"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="text-blue-700 dark:text-blue-500 w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 sm:p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      First name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white dark:bg-gray-700"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white dark:bg-gray-700"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white dark:bg-gray-700"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white dark:bg-gray-700"
                  >
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Partnership</option>
                    <option>Feedback</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white dark:bg-gray-700"
                    required
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:shadow-lg"
                >
                  Send Message
                  <FiSend className="w-5 h-5" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Map Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Our Location</h2>
          <div className="rounded-xl overflow-hidden shadow-lg h-80 bg-gray-300 dark:bg-gray-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.785578579538!2d78.66913711547447!3d17.34514930557494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1931db836a53b%3A0x53011840c2c56856!2sBrindavan%20Colony%2C%20Ibrahimpatnam%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1650290453297!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
