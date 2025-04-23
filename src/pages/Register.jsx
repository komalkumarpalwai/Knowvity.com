import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = formData;
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedPassword = password.trim();

    // Get existing users from localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (isLogin) {
      // Admin login
      if (trimmedEmail === "admin@site.com" && trimmedPassword === "admin123") {
        localStorage.setItem("isAdmin", "true");
        alert("Admin login successful!");
        navigate("/admin/dashboard");
        return;
      }

      // Regular user login
      const user = users.find(
        (u) => u.email === trimmedEmail && u.password === trimmedPassword
      );

      if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        alert("Login successful!");
        navigate("/"); // or a user-specific dashboard
      } else {
        alert("Invalid credentials!");
      }
    } else {
      // Signup
      if (users.find((u) => u.email === trimmedEmail)) {
        alert("Email already registered!");
        return;
      }

      const newUser = { name, email: trimmedEmail, password: trimmedPassword };
      const updatedUsers = [...users, newUser];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      alert("Signup successful! Please log in now.");
      setIsLogin(true);
    }

    // Reset form after submission
    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#121212] px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-[#813BEA]">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h2>
        <p className="text-center text-gray-600">
          {isLogin
            ? "Login to your premium account"
            : "Join us for a premium experience"}
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#2A60EB] focus:border-[#2A60EB] outline-none"
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#2A60EB] focus:border-[#2A60EB] outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#2A60EB] focus:border-[#2A60EB] outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#813BEA] hover:bg-[#2A60EB] text-white font-semibold rounded-lg transition duration-200"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <div className="text-center text-sm text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            className="text-[#813BEA] hover:text-[#2A60EB] hover:underline font-medium"
            onClick={() => {
              setIsLogin(!isLogin);
              setFormData({ name: "", email: "", password: "" });
            }}
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default RegisterPage;
