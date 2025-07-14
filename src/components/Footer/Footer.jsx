import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section - App Download */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Get the FreshCart app
            </h2>
            <p className="text-gray-600">
              We will send you a link, open it on your phone to download the
              app.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Email..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Share App Link
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg"
              >
                <FaApple className="text-xl" />
                <span>App Store</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg"
              >
                <FaGooglePlay className="text-xl" />
                <span>Google Play</span>
              </a>
            </div>
          </div>

          {/* Right Section - Additional Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Partners
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-green-600">
                    Become a Partner
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-green-600">
                    Partner Login
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-green-600">
                    Partner Resources
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Get deliveries with FreshCart
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-green-600">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-green-600">
                    Delivery Areas
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-green-600">
                    Delivery Pricing
                  </a>
                </li>
              </ul>

              <button className="mt-4 flex items-center space-x-2 text-green-600 hover:text-green-800">
                <IoShareSocial className="text-xl" />
                <span>Share App</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="mt-12 pt-6 border-t border-gray-200 text-center text-gray-500">
          <p>© {new Date().getFullYear()} FreshCart. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
