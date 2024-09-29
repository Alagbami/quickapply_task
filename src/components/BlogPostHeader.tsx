import React from "react";
import { useNavigate } from "react-router-dom";
// Import FontAwesome core
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import brand icons
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const BlogPostHeader: React.FC = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1); // Go back to the previous page
  };
  return (
    <nav className="bg-gray-100 p-4 flex justify-between items-center">
      {/* Go Back Button */}
      <button
        onClick={goBack}
        className="flex items-center bg-white px-4 py-2 rounded-md shadow hover:bg-gray-200"
      >
        <span className="mr-2">←</span> Go Back
      </button>
      {/* Social Media Share */}
      <div className="flex items-center">
        <span className="mr-4 font-medium">Share Article:</span>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <FontAwesomeIcon
            icon={faFacebookF}
            className="text-gray-600 hover:text-black"
            size="lg"
          />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <FontAwesomeIcon
            icon={faTwitter}
            className="text-gray-600 hover:text-black"
            size="lg"
          />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-gray-600 hover:text-black"
            size="lg"
          />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <FontAwesomeIcon
            icon={faYoutube}
            className="text-gray-600 hover:text-black"
            size="lg"
          />
        </a>
      </div>
    </nav>
  );
};
export default BlogPostHeader;