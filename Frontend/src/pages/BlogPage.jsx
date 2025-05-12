import React from "react";
import blogData from "../assets/blogData";
import BlogCard from "../components/BlogComponents/BlogCard";
import BlogBackground1 from "../assets/BlogPage_Images/BlogBackground2.jpg";

const BlogPage = () => {
  return (
    <>
      <div className="relative mt-[64px] min-h-[100px] sm:min-h-[120px] md:min-h-[150px] flex items-center justify-center text-center overflow-hidden">
        <img
          src={BlogBackground1}
          alt="Blog background"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="relative z-10 px-4 sm:px-6 py-4">
          <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-wide drop-shadow-md transition-all duration-300">
            Explore Our Latest Blogs
          </h1>
          <h3 className="text-sky-200 text-sm sm:text-base md:text-xl mt-2 font-medium tracking-wide drop-shadow-sm transition-all duration-300">
            Discover insights, stories, and updates from our team!
          </h3>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
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
