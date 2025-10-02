"use client";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-20">
      {/* Newsletter Section */}
      <div className="bg-blue-600 text-white py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold">Subscribe Newsletter</h3>
            <p className="mt-2 text-lg">
              Get the latest updates by subscribing to our newsletter
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex">
            <input
              type="email"
              placeholder="Your email address..."
              className="px-4 py-2 rounded-l-md text-gray-700 focus:outline-none"
            />
            <button className="bg-gray-900 text-white px-6 py-2 rounded-r-md hover:bg-gray-800 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Main */}
      <div className="bg-gray-900 text-gray-300 py-14">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          {/* About / Logo */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Medcare</h4>
            <p className="text-sm leading-relaxed">
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <FaEnvelope className="text-green-500" />
              <span>info@websitename.com</span>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <FaMapMarkerAlt className="text-green-500" />
              <span>1378 Whitetail Frisco, 75034</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Our Blogs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Book An Appointment
            </h4>
            <p className="text-sm">
              The doctorate staff members are well trained professionals.
            </p>
            <div className="mt-4 flex items-center gap-2 border p-2 rounded-md w-fit">
              <FaPhoneAlt className="text-green-500" />
              <span>+012 345 6789</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            All Rights Reserved © Company 2023 | Terms & Conditions | Privacy
            Policy
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="bg-green-600 p-2 rounded-full text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-green-600 p-2 rounded-full text-white">
              <FaTwitter />
            </a>
            <a href="#" className="bg-green-600 p-2 rounded-full text-white">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
