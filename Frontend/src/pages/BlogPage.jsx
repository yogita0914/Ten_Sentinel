import React from "react";
import blogData from "../assets/blogData.json";
import BlogCard from "../components/BlogComponents/BlogCard";

const BlogPage = () => {
  return (
    <div className="container mx-auto pt-24 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {blogData.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
