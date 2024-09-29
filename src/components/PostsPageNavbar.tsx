import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const PostsPageNavbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="container mx-auto flex justify-between items-center border-y p-4 bg-white">
      {/* Go Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center bg-gray-200 px-4 py-2 rounded-md shadow-md hover:bg-gray-300 transition"
      >
        <span className="mr-2">←</span> Go Back
      </button>

      {/* Share Icons */}
      <div className="flex items-center space-x-4">
        <span className="text-gray-700">Share Article:</span>
        <button className="bg-gray-200 p-2 rounded-md shadow-md hover:bg-gray-300 transition">
          <FontAwesomeIcon icon={faFacebook} className="text-black" />
        </button>
        <button className="bg-gray-200 p-2 rounded-md shadow-md hover:bg-gray-300 transition">
          <FontAwesomeIcon icon={faTwitter} className="text-black" />
        </button>
        <button className="bg-gray-200 p-2 rounded-md shadow-md hover:bg-gray-300 transition">
          <FontAwesomeIcon icon={faInstagram} className="text-black" />
        </button>
        <button className="bg-gray-200 p-2 rounded-md shadow-md hover:bg-gray-300 transition">
          <FontAwesomeIcon icon={faYoutube} className="text-black" />
        </button>
      </div>
    </nav>
  );
};

export default PostsPageNavbar;
