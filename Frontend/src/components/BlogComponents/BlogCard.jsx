import React from "react";
import { Link } from "react-router-dom";

function BlogCard({ post }) {
  return (
    <div className="flex">
      <Link
        to={`/blogs/blog-detail/${post.id}`}
        className="w-full text-decoration-none"
      >
        <div className="flex flex-col h-full bg-gray-100 rounded-lg shadow-sm w-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-200">
          <img
            src={post.image}
            alt={post.title}
            className="w-[250px] h-[150px] object-cover mx-auto mt-4 rounded-md"
          />
          <div className="flex flex-col flex-grow p-4">
            <h2 className="text-lg font-semibold mb-2 text-center">
              {post.title}
            </h2>
            <p className="text-gray-600 text-sm mb-4 text-center">
              {post.description}
            </p>
            <button className="text-white font-semibold bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md transition-all mt-auto mx-auto cursor-pointer">
              Read More
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default BlogCard;
