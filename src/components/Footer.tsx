import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 w-full">
      <div className="container max-w-[1500px] w-full flex flex-col gap-8 px-6">
        {/* Newsletter Signup */}
        <div className="border-b border-[#E7E7E7] w-full">
          <div className="max-w-[1200px] mx-auto pb-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="text-xl font-semibold">
                  Sign up to our Newsletter
                </h2>
                <p className="mt-2 text-[#C1C1C3]">
                  Stay up to date with latest news, announcements, and lots
                  more.
                </p>
              </div>
              <div className="flex mt-4 md:mt-0 w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="p-2 rounded-l bg-gray-800 text-white w-full md:w-auto flex-grow"
                />
                <button className="p-2 bg-yellow-500 rounded-r w-auto md:w-auto">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="">
          <div className="max-w-[1200px] flex flex-col lg:flex-row justify-between gap-8 mx-auto">
            {/* Logo and Social Icons */}
            <div className="flex flex-col items-start">
              <img
                src={logo}
                alt="logo"
                className="w-32 mb-6 lg:w-48 lg:mb-12"
              />
              <p className="text-[#C1C1C3]">
                Connect with us for any inquiries or support:
              </p>
              <div className="mt-4 flex space-x-4">
                <a
                  href="#"
                  className="hover:text-yellow-500 bg-[#E7E7E7] bg-opacity-10 py-2 px-4 border border-[#E7E7E7] border-opacity-30 rounded"
                >
                  <FontAwesomeIcon icon={faFacebook} className="text-white" />
                </a>
                <a
                  href="#"
                  className="hover:text-yellow-500 bg-[#E7E7E7] bg-opacity-10 py-2 px-4 border border-[#E7E7E7] border-opacity-30 rounded"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  href="#"
                  className="hover:text-yellow-500 bg-[#E7E7E7] bg-opacity-10 py-2 px-4 border border-[#E7E7E7] border-opacity-30 rounded"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="#"
                  className="hover:text-yellow-500 bg-[#E7E7E7] bg-opacity-10 py-2 px-4 border border-[#E7E7E7] border-opacity-30 rounded"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </div>
              <p className="mt-4">info@cloutra.com</p>
            </div>

            {/* Products Section */}
            <div className="flex flex-col items-start">
              <h2 className="text-lg font-semibold mb-4">Products</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-yellow-500">
                    AI Tailor Resume
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500">
                    AI Score Resume
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500">
                    AI Build Resume
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Section */}
            <div className="flex flex-col items-start">
              <h2 className="text-lg font-semibold mb-4">Company</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/blog" className="hover:text-yellow-500">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-yellow-500">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="hover:text-yellow-500">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/refund" className="hover:text-yellow-500">
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Join Our Community */}
            <div className="flex flex-col items-start">
              <h2 className="text-lg font-semibold mb-4">Join our Community</h2>
              <a
                href="#"
                className="mt-4 bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-600"
              >
                Join Discord Community
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-sm text-gray-500 px-4">
        <p className="mt-4">
          Copyright ©2024, ApplyQuick.ai | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
