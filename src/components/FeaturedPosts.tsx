import React from 'react';
import { blogPosts } from "../data/blogData"; // Adjust path based on your project structure

const FeaturedPosts: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Featured Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts
            .filter((post) => post.id <= 3)  // Filter posts with id <= 3
            .map((post) => (
              <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                  <h3 className="text-lg font-bold mb-4">{post.title}</h3>
                  <a
                    href={`/posts#post-${post.id}`}
                    className="text-black font-semibold border border-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition"
                  >
                    Read Article
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;


