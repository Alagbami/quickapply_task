// BlogBody.tsx
import React from 'react';

interface Post {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  readTime: string;
}

const posts: Post[] = [
  {
    id: 1,
    title: 'How to make QuickApply work efficiently for you',
    description: 'Learn how QuickApply can streamline your application process.',
    image: '/path-to-image/polygon.svg', // Replace with the real image path
    date: 'Sep 25, 2024',
    readTime: '5 min read',
  },
  // Add more posts here as needed
];

const BlogBody: React.FC = () => {
  return (
    <div className="w-full bg-gray-100">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-gray-800 to-blue-800 text-white py-12 text-center">
        <h1 className="text-4xl font-bold">Insights on everything QuickApply has to offer</h1>
        <p className="mt-4 text-lg">Master QuickApply and unlock streamlined job application workflows.</p>
      </div>

      {/* Featured Posts Section */}
      <div className="container mx-auto my-12">
        <h2 className="text-2xl font-semibold mb-6">Featured Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{post.description}</p>
                <div className="mt-4 flex justify-between items-center text-gray-500 text-sm">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blog Posts Section */}
      <div className="container mx-auto my-12">
        <h2 className="text-2xl font-semibold mb-6">Blog Posts</h2>
        <div className="flex gap-4 mb-6">
          <button className="px-4 py-2 bg-black text-white rounded">All</button>
          <button className="px-4 py-2 bg-gray-200 text-black rounded">Guides</button>
          <button className="px-4 py-2 bg-gray-200 text-black rounded">Announcements</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{post.description}</p>
                <div className="mt-4 flex justify-between items-center text-gray-500 text-sm">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogBody;
