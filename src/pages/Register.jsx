import React, { useState } from "react";
import { motion } from "framer-motion";

const RegisterPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Logging in with", formData);
    } else {
      console.log("Signing up with", formData);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#353535] px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-[#3EC1C9]">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h2>
        <p className="text-center text-[#6A7B6D]">
          {isLogin
            ? "Login to your premium account"
            : "Join us for a premium experience"}
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-[#6A7B6D]">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#3EC1C9] focus:border-[#3EC1C9] outline-none"
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-[#6A7B6D]">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#3EC1C9] focus:border-[#3EC1C9] outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#6A7B6D]">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#3EC1C9] focus:border-[#3EC1C9] outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#3EC1C9] hover:bg-[#6A7B6D] text-white font-semibold rounded-lg transition duration-200"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <div className="text-center text-sm text-[#6A7B6D]">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            className="text-[#3EC1C9] hover:underline font-medium"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default RegisterPage;
