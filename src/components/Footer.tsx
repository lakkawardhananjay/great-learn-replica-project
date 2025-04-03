
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-6">Great<span className="text-greatorange">Learning</span></h2>
            <p className="mb-6">
              Great Learning is an ed-tech platform that offers impactful online programs in high-growth areas like data science, AI, ML, cloud computing, and more.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Data Science</a></li>
              <li><a href="#" className="hover:text-white">Machine Learning</a></li>
              <li><a href="#" className="hover:text-white">Web Development</a></li>
              <li><a href="#" className="hover:text-white">Cloud Computing</a></li>
              <li><a href="#" className="hover:text-white">Business Analytics</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Our Team</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Press</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Great Learning. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <select className="bg-gray-800 text-gray-300 py-1 px-3 rounded border border-gray-700">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
