import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ContactPage = () => {
  const contactMethods = [
    {
      icon: <FiMail className="w-6 h-6 text-[#3EC1C9]" />,
      title: "Email Us",
      description: "Our friendly team is here to help.",
      details: "hello@knowvity.com",
      link: "mailto:hello@knowvity.com"
    },
    {
      icon: <FiPhone className="w-6 h-6 text-[#6A7B6D]" />,
      title: "Call Us",
      description: "Mon-Fri from 9am to 5pm.",
      details: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <FiMapPin className="w-6 h-6 text-[#3EC1C9]" />,
      title: "Visit Us",
      description: "Come say hello at our office.",
      details: "123 Education St, San Francisco, CA",
      link: "https://maps.google.com"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Contact Hero Section */}
      <section className="relative bg-gradient-to-r from-[#3EC1C9] to-[#6A7B6D] text-white py-16">
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
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            We'd love to hear from you! Reach out for questions, feedback, or partnerships.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <main className="flex-grow bg-[#F9FAFB] dark:bg-[#353535] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-[#353535] dark:text-white mb-4">Contact Information</h2>
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
                    className="flex items-start gap-4 p-4 rounded-lg bg-white dark:bg-[#2E2E2E] shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="p-3 bg-[#E6F9FA] dark:bg-[#444] rounded-full">
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-[#353535] dark:text-white">{method.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{method.description}</p>
                      <p className="text-[#3EC1C9] font-medium mt-1">{method.details}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Media */}
              <div className="pt-4">
                <h3 className="text-lg font-medium text-[#353535] dark:text-white mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {[
                    { icon: <FaFacebook />, color: "#3EC1C9" },
                    { icon: <FaTwitter />, color: "#6A7B6D" },
                    { icon: <FaInstagram />, color: "#F06292" },
                    { icon: <FaLinkedin />, color: "#3EC1C9" },
                  ].map((item, idx) => (
                    <motion.a
                      key={idx}
                      href="#"
                      whileHover={{ y: -3 }}
                      className="w-10 h-10 bg-white dark:bg-[#2E2E2E] rounded-full flex items-center justify-center shadow-sm hover:shadow-md"
                      aria-label="Social Icon"
                    >
                      {React.cloneElement(item.icon, { className: `w-5 h-5`, style: { color: item.color } })}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-[#2E2E2E] rounded-xl shadow-sm p-6 sm:p-8"
            >
              <h2 className="text-2xl font-bold text-[#353535] dark:text-white mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {["First name", "Last name"].map((label, i) => (
                    <div key={i}>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        {label}
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#3EC1C9] focus:border-[#3EC1C9] outline-none bg-white dark:bg-[#444]"
                        required
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#3EC1C9] focus:border-[#3EC1C9] outline-none bg-white dark:bg-[#444]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <select
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#3EC1C9] focus:border-[#3EC1C9] outline-none bg-white dark:bg-[#444]"
                  >
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Partnership</option>
                    <option>Feedback</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#3EC1C9] focus:border-[#3EC1C9] outline-none bg-white dark:bg-[#444]"
                    required
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-[#3EC1C9] to-[#6A7B6D] text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:shadow-lg"
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
      <section className="bg-[#F0F4F8] dark:bg-[#2E2E2E] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#353535] dark:text-white mb-6 text-center">Our Location</h2>
          <div className="rounded-xl overflow-hidden shadow-lg h-80 bg-gray-300 dark:bg-[#444]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.258418205297!2d78.4483714153847!3d17.44860578803975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9158f201b205%3A0xad1a8b9f2b118d8a!2sHitech%20City%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="dark:grayscale dark:opacity-80"
              title="Our Hyderabad Office Location"
            ></iframe>
          </div>
          <div className="mt-4 text-center text-gray-600 dark:text-gray-300">
            <p>2nd Floor, Tech Tower, Hitech City, Hyderabad, Telangana 500081</p>
          </div>
        </div>
      </section>

      {/* Optional Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;
