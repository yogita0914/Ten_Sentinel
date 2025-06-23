import React from "react";
import blogData from "../assets/blogData";
import BlogCard from "../components/BlogComponents/BlogCard";
import BlogBackground1 from "../assets/BlogPage_Images/BlogBackground2.jpg";
import { MessageSquare } from "lucide-react";
import HeroSection from "../components/cloud-security/HeroSection";

const BlogPage = () => {
  return (
    <>
      <HeroSection
        subtitle="Discover insights, stories and updates from our team!"
        title="Explore Our Latest Blogs"
        backgroundImage={BlogBackground1}
        Icon={MessageSquare}
        showButton={false}
      />

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
