import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { blogPosts, BlogPost } from '../data/blogData';

const BlogPosts: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>(''); 
  const [activeFilter, setActiveFilter] = useState<string>('All');

  // Filter blog posts based on the active filter and search term
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    if (activeFilter === 'All') return matchesSearch;
    return post.category === activeFilter && matchesSearch;
  });

  return (
    <section className="py-12 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        {/* Blog Header */}
        <h2 className="text-2xl text-black font-bold mb-4">Blog Posts</h2>

        {/* Search Input */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search blog posts"
            className="px-4 py-2 w-full md:w-1/3 border rounded-md bg-gray-200"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Filter Buttons */}
        <div className="mb-6 flex space-x-4">
          <button
            className={`px-4 py-2 border rounded-md font-semibold ${
              activeFilter === 'All' ? 'bg-[#131D26] text-[#F6D155]' : 'bg-gray-200'
            }`}
            onClick={() => setActiveFilter('All')}
          >
            All Posts
          </button>
          <button
            className={`px-4 py-2 border rounded-md font-semibold ${
              activeFilter === 'Pricing' ? 'bg-[#131D26] text-[#F6D155]' : 'bg-gray-200'
            }`}
            onClick={() => setActiveFilter('Pricing')}
          >
            Pricing
          </button>
          <button
            className={`px-4 py-2 border rounded-md font-semibold ${
              activeFilter === 'Announcements' ? 'bg-[#131D26] text-[#F6D155]' : 'bg-gray-200'
            }`}
            onClick={() => setActiveFilter('Announcements')}
          >
            Announcements
          </button>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post: BlogPost) => (
              <div
                key={post.id}
                id={`post-${post.id}`} // Add id for scrolling to section
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                  <h3 className="text-lg font-bold mb-4 text-gray-800">{post.title}</h3>
                  <Link to={`/posts#post-${post.id}`}>
                    <button className="text-black font-semibold border border-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition">
                      Read Article
                    </button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-black font-bold">No posts found</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;

