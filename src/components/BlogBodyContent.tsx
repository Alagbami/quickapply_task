import React from 'react';
import { blogPosts, BlogPost } from '../data/blogData'; // Assuming your data is in the data file

const blogBodyContent: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      {blogPosts.map((post: BlogPost) => (
        <div key={post.id} className="mb-8">
          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{post.title}</h2>

          {/* Description */}
          <p className="text-gray-700 mb-6">
            {post.description}
          </p>

          {/* Quotation block (only for the post with id=4, adjust as needed) */}
          {post.id === 4 && (
            <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-600 mb-6">
              “{post.description}”
              <footer className="text-right font-semibold text-gray-700 mt-2">John Doe Smith</footer>
            </blockquote>
          )}

          {/* Description with link (only for specific posts if needed) */}
          {post.id === 4 && (
            <p className="text-gray-700 mb-6">
              {post.description} <a href="https://www.quickapply.ai" className="text-blue-500 underline">https://www.quickapply.ai</a>
            </p>
          )}

          {/* List of descriptions (for specific posts) */}
          {post.id === 4 && (
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>{post.description}</li>
              <li>{post.description}</li>
              <li>{post.description}</li>
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default blogBodyContent;


