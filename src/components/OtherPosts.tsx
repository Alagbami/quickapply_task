import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { blogPosts } from "../data/blogData";

const OtherPosts: React.FC = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Scroll to the top when the link is clicked
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle navigation to the previous page
  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Other Posts</h2>
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
                  {/* Add onClick to scroll to top before navigating */}
                  <a
                    href={`/posts#post-${post.id}`}
                    onClick={handleScrollToTop}  // Scroll to top on click
                    className="text-black font-semibold border border-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition"
                  >
                    Read Article
                  </a>
                </div>
              </div>
            ))}
        </div>

        {/* Centered Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleGoBack}  // Navigate back to the previous page
            className="text-[#F6D155] bg-[#131D26] py-2 px-4 rounded-md cursor-pointer hover:text-[#131D26] hover:bg-[#F6D155] transition flex items-center"
          >
            View More &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default OtherPosts;


