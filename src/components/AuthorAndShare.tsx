import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const AuthorAndShare: React.FC = () => {
  return (
    <div className="container mx-auto flex justify-between items-center py-4 bg-white border-y border-gray-300">
      {/* Author Info */}
      <div className="flex items-center">
        <img
          src="/src/assets/author-image.png" 
          alt="Author"
          className="w-12 h-12 rounded-md mr-4"
        />
        <div>
          <p className="text-gray-500 text-sm">Written by:</p>
          <p className="text-black font-bold">QuickApply</p>
        </div>
      </div>

      {/* Share Article Section */}
      <div className="flex items-center">
        <p className="text-gray-600 mr-4">Share Article:</p>
        <div className="flex space-x-3">
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
      </div>
    </div>
  );
};

export default AuthorAndShare;
