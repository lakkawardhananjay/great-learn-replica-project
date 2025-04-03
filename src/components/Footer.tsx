
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/893de670-b1b1-4412-8852-e47ee9f85ca5.png" 
                alt="DYP Logo" 
                className="h-10 mr-2"
              />
              <h2 className="text-2xl font-bold text-white">E-Learning <span className="text-green-300">DYP</span></h2>
            </div>
            <p className="mb-6">
              E-Learning DYP offers comprehensive cybersecurity training to help you build the skills needed in today's digital security landscape.
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
            <h3 className="text-lg font-semibold text-white mb-4">Cybersecurity Units</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Introduction to Cybersecurity</a></li>
              <li><a href="#" className="hover:text-white">Network Security</a></li>
              <li><a href="#" className="hover:text-white">Cryptography and Encryption</a></li>
              <li><a href="#" className="hover:text-white">Security Governance</a></li>
              <li><a href="#" className="hover:text-white">Incident Response</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">About DYP</a></li>
              <li><a href="#" className="hover:text-white">Our Faculty</a></li>
              <li><a href="#" className="hover:text-white">Campus</a></li>
              <li><a href="#" className="hover:text-white">News</a></li>
              <li><a href="#" className="hover:text-white">Events</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Student Support</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} E-Learning DYP. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <select className="bg-green-800 text-gray-300 py-1 px-3 rounded border border-green-700">
              <option>English</option>
              <option>Hindi</option>
              <option>Marathi</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
