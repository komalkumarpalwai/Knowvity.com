import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Expanded image list with 12 high-quality Unsplash images
const courseImages = [
  // Photography
  "https://images.stockcake.com/public/d/8/a/d8a4f070-2fc9-4728-90a8-df574e2fe820_large/coding-in-progress-stockcake.jpg",
  
  // Coding
  "https://www.recordnet.com/gcdn/presto/2021/03/22/NRCD/9d9dd9e4-e84a-402e-ba8f-daa659e6e6c5-PhotoWord_003.JPG?crop=1999,1125,x0,y78&width=1999&height=1125&format=pjpg&auto=webp",
  
  // Marketing
 
  // Tech Workspace
  "https://images.unsplash.com/photo-1581093588401-12f1f1f03876?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  
  // Learning
  "https://images.unsplash.com/photo-1584697964326-05b08fbc0ea1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  
  // Development
  "https://px-web-images1.pixpa.com/DcM_xhgQ0OTO0gy5E7HX72q5Nw1JwDvptyfIepSxSV0/rs:fit:640:0/q:80/aHR0cHM6Ly9waXhwYWNvbS1pbWcucGl4cGEuY29tL2NvbS9hcnRpY2xlcy8xNTQzNDgzMzg3LXJlaW5oYXJ0LWp1bGlhbi0xMTQ1OTQ3LXVuc3BsYXNoLmpwZw==",
  
  // Office
  "https://spaces-wp.imgix.net/2016/06/coding-in-the-classroom.png?auto=compress,format&q=80",
  
  // Coding Screen
  "https://images.stockcake.com/public/d/8/e/d8e21151-a0ea-4357-b08f-acaf57de5ed1_large/coding-on-laptop-stockcake.jpg",
  
  // Analytics
  "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  
  // Typing
  "https://newsroom.siliconslopes.com/content/images/size/w1000/2018/10/code.jpg",
  
  // Laptop
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  
  // Presentation
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
];


const InfiniteScrollColumn = ({ speed, direction, blur }) => {
  // Clone images 4 times to ensure seamless looping
  const clonedImages = [...courseImages, ...courseImages, ...courseImages, ...courseImages];

  const animation = {
    animate: {
      y: direction === "up" ? ["0%", "-100%"] : ["-100%", "0%"],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        },
      },
    },
  };

  return (
    <motion.div
      variants={animation}
      animate="animate"
      className="w-full h-full flex flex-col gap-0"
    >
      {clonedImages.map((img, i) => (
        <div key={i} className="h-[33.33vh] w-full"> {/* 1/3 of viewport height */}
          <img
            src={`${img}?auto=format&fit=crop&w=800&h=500&q=80`}
            alt={`bg-${i}`}
            className={`w-full h-full object-cover opacity-90 brightness-90 ${blur}`}
          />
        </div>
      ))}
    </motion.div>
  );
};

const RegisterPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = formData;
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedPassword = password.trim();
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (isLogin) {
      // Admin login check
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
        navigate("/");
      } else {
        alert("Invalid credentials!");
      }
    } else {
      // Signup logic
      if (users.find((u) => u.email === trimmedEmail)) {
        alert("Email already registered!");
        return;
      }
      const newUser = {
        name: name.trim(),
        email: trimmedEmail,
        password: trimmedPassword,
      };
      localStorage.setItem("users", JSON.stringify([...users, newUser]));
      alert("Signup successful! Please log in now.");
      setIsLogin(true);
    }
    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden flex">
        {/* Left Column - Faster scroll */}
        <div className="w-1/3 h-full overflow-hidden">
          <InfiniteScrollColumn 
            speed={15} 
            direction="down" 
            blur="blur-[4px]"
          />
        </div>
        
        {/* Center Column - Reverse scroll */}
        <div className="w-1/3 h-full overflow-hidden">
          <InfiniteScrollColumn 
            speed={20} 
            direction="up" 
            blur="blur-[1px]"
          />
        </div>
        
        {/* Right Column - Slowest scroll */}
        <div className="w-1/3 h-full overflow-hidden">
          <InfiniteScrollColumn 
            speed={25} 
            direction="down" 
            blur="blur-[4px]"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
      </div>

      {/* Auth Form */}
      <div className="relative z-10 w-full max-w-md bg-white/95 p-8 rounded-2xl shadow-2xl backdrop-blur-sm">
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-2">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h2>
        <p className="text-center text-gray-600 mb-6">
          {isLogin ? "Login to your premium account" : "Join us for a premium experience"}
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <label className="text-sm font-medium text-gray-700" htmlFor="name">Full Name</label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-purple-500 focus:border-purple-500 outline-none"
              />
            </div>
          )}
          <div>
            <label className="text-sm font-medium text-gray-700" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-purple-500 focus:border-purple-500 outline-none"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-purple-500 focus:border-purple-500 outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-2.5 rounded-md hover:opacity-90 transition-opacity duration-200 font-semibold shadow-lg"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <div className="text-center text-sm text-gray-600 mt-4">
          {isLogin ? "New here?" : "Already registered?"}{" "}
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setFormData({ name: "", email: "", password: "" });
            }}
            className="text-purple-600 hover:text-purple-800 font-medium ml-1 underline decoration-2 underline-offset-2"
          >
            {isLogin ? "Create account" : "Login instead"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
