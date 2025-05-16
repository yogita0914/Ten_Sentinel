import React from "react";
import blogData from "../assets/blogData";
import BlogCard from "../components/BlogComponents/BlogCard";
import BlogBackground1 from "../assets/BlogPage_Images/BlogBackground2.jpg";
import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";

const BlogPage = () => {
  return (
    <>
      <header
      className="relative text-white text-center h-screen bg-cover bg-center overflow-hidden flex items-center justify-center px-4"
      style={{ backgroundImage: `url(${BlogBackground1})` }}
    >
      {/* Gradient Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.75 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-r from-green-900 to-indigo-900"
      ></motion.div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
            <Newspaper className="w-10 h-10 md:w-16 md:h-16 text-blue-300" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-2xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          Explore Our Latest Blogs
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 text-sm md:text-xl max-w-3xl mx-auto text-blue-100"
        >
          Discover insights, stories and updates from our team!
        </motion.p>
      </div>

      {/* Optional bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 hidden md:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L0,320Z"
          ></path>
        </svg>
      </div>
    </header>

      <div className="container mx-auto px-7 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {blogData.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogPage;
