
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img 
                src="/lovable-uploads/893de670-b1b1-4412-8852-e47ee9f85ca5.png" 
                alt="DYP Logo" 
                className="h-12 mr-3"
              />
              <span className="text-2xl font-bold text-green-800">E-Learning <span className="text-green-600">DYP</span></span>
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <nav>
              <ul className="flex space-x-6">
                <li><a href="#" className="text-gray-700 hover:text-green-800">Home</a></li>
                <li className="group relative">
                  <button className="flex items-center text-gray-700 hover:text-green-800">
                    Cybersecurity <ChevronDown size={16} className="ml-1" />
                  </button>
                  <div className="absolute left-0 top-full mt-2 w-60 bg-white shadow-lg rounded-lg py-3 px-4 hidden group-hover:block">
                    <a href="#" className="block py-2 text-sm hover:text-green-800">Introduction to Cybersecurity</a>
                    <a href="#" className="block py-2 text-sm hover:text-green-800">Network Security</a>
                    <a href="#" className="block py-2 text-sm hover:text-green-800">Cryptography</a>
                    <a href="#" className="block py-2 text-sm hover:text-green-800">Security Governance</a>
                    <a href="#" className="block py-2 text-sm hover:text-green-800">Incident Response</a>
                  </div>
                </li>
                <li><a href="#" className="text-gray-700 hover:text-green-800">About Us</a></li>
                <li><a href="#" className="text-gray-700 hover:text-green-800">Contact</a></li>
              </ul>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="border-green-800 text-green-800 hover:bg-green-50">Log in</Button>
              <Button className="bg-green-800 hover:bg-green-900 text-white">Sign up</Button>
            </div>
          </div>

          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              <li><a href="#" className="block py-2 text-gray-700 hover:text-green-800">Home</a></li>
              <li>
                <button className="flex items-center justify-between w-full text-gray-700 hover:text-green-800 py-2">
                  Cybersecurity <ChevronDown size={16} />
                </button>
                <div className="pl-4 mt-2 space-y-2">
                  <a href="#" className="block py-1 text-sm hover:text-green-800">Introduction to Cybersecurity</a>
                  <a href="#" className="block py-1 text-sm hover:text-green-800">Network Security</a>
                  <a href="#" className="block py-1 text-sm hover:text-green-800">Cryptography</a>
                  <a href="#" className="block py-1 text-sm hover:text-green-800">Security Governance</a>
                  <a href="#" className="block py-1 text-sm hover:text-green-800">Incident Response</a>
                </div>
              </li>
              <li><a href="#" className="block py-2 text-gray-700 hover:text-green-800">About Us</a></li>
              <li><a href="#" className="block py-2 text-gray-700 hover:text-green-800">Contact</a></li>
              <li className="pt-4 flex space-x-4">
                <Button variant="outline" className="w-full border-green-800 text-green-800 hover:bg-green-50">Log in</Button>
                <Button className="w-full bg-green-800 hover:bg-green-900 text-white">Sign up</Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
