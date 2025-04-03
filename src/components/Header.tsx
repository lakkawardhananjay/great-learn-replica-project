
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
            <a href="#" className="text-2xl font-bold text-greatblue">Great<span className="text-greatorange">Learning</span></a>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <nav>
              <ul className="flex space-x-6">
                <li className="group relative">
                  <button className="flex items-center text-gray-700 hover:text-greatblue">
                    Courses <ChevronDown size={16} className="ml-1" />
                  </button>
                  <div className="absolute left-0 top-full mt-2 w-60 bg-white shadow-lg rounded-lg py-3 px-4 hidden group-hover:block">
                    <a href="#" className="block py-2 text-sm hover:text-greatblue">Data Science</a>
                    <a href="#" className="block py-2 text-sm hover:text-greatblue">Machine Learning</a>
                    <a href="#" className="block py-2 text-sm hover:text-greatblue">Web Development</a>
                    <a href="#" className="block py-2 text-sm hover:text-greatblue">Cloud Computing</a>
                  </div>
                </li>
                <li className="group relative">
                  <button className="flex items-center text-gray-700 hover:text-greatblue">
                    Programs <ChevronDown size={16} className="ml-1" />
                  </button>
                  <div className="absolute left-0 top-full mt-2 w-60 bg-white shadow-lg rounded-lg py-3 px-4 hidden group-hover:block">
                    <a href="#" className="block py-2 text-sm hover:text-greatblue">PG Programs</a>
                    <a href="#" className="block py-2 text-sm hover:text-greatblue">Masters Degree</a>
                    <a href="#" className="block py-2 text-sm hover:text-greatblue">Certificate Programs</a>
                  </div>
                </li>
                <li><a href="#" className="text-gray-700 hover:text-greatblue">For Enterprise</a></li>
                <li><a href="#" className="text-gray-700 hover:text-greatblue">About Us</a></li>
              </ul>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="border-greatblue text-greatblue hover:bg-greatblue-light hover:text-white">Log in</Button>
              <Button className="bg-greatblue hover:bg-greatblue-dark">Sign up</Button>
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
              <li>
                <button className="flex items-center justify-between w-full text-gray-700 hover:text-greatblue py-2">
                  Courses <ChevronDown size={16} />
                </button>
                <div className="pl-4 mt-2 space-y-2">
                  <a href="#" className="block py-1 text-sm hover:text-greatblue">Data Science</a>
                  <a href="#" className="block py-1 text-sm hover:text-greatblue">Machine Learning</a>
                  <a href="#" className="block py-1 text-sm hover:text-greatblue">Web Development</a>
                  <a href="#" className="block py-1 text-sm hover:text-greatblue">Cloud Computing</a>
                </div>
              </li>
              <li>
                <button className="flex items-center justify-between w-full text-gray-700 hover:text-greatblue py-2">
                  Programs <ChevronDown size={16} />
                </button>
                <div className="pl-4 mt-2 space-y-2">
                  <a href="#" className="block py-1 text-sm hover:text-greatblue">PG Programs</a>
                  <a href="#" className="block py-1 text-sm hover:text-greatblue">Masters Degree</a>
                  <a href="#" className="block py-1 text-sm hover:text-greatblue">Certificate Programs</a>
                </div>
              </li>
              <li><a href="#" className="block py-2 text-gray-700 hover:text-greatblue">For Enterprise</a></li>
              <li><a href="#" className="block py-2 text-gray-700 hover:text-greatblue">About Us</a></li>
              <li className="pt-4 flex space-x-4">
                <Button variant="outline" className="w-full border-greatblue text-greatblue hover:bg-greatblue-light hover:text-white">Log in</Button>
                <Button className="w-full bg-greatblue hover:bg-greatblue-dark">Sign up</Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
