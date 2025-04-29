import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import blogData from "../../assets/blogData.json";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const blogId = parseInt(id, 10);
  const blog = blogData.find((item) => item.id === blogId);

  if (!blog) {
    return <p className="text-center my-10 text-lg">Blog not found.</p>;
  }

  return (
    <div className="max-w-6xl mx-auto px-2 py-8">
      <div className="w-full flex justify-center mb-8 pt-14">
        <img
          src={blog.image}
          alt={blog.title}
          className="rounded-lg shadow-md w-full max-w-3xl object-cover"
        />
      </div>

      <div className="text-center px-2">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          {blog.title}
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 mb-6">
          {blog.description}
        </p>

        <div className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed max-w mx-auto">
          <p>{blog.content}</p>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={() => navigate(-1)}
            className="bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 cursor-pointer"
          >
            &larr; Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
