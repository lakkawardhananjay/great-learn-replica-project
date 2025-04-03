
import React from 'react';
import { Button } from './ui/button';
import { Search } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-50 to-blue-100 pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Advance Your Career With <span className="text-greatblue">Industry Relevant</span> Programs
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-lg">
              Learn from industry experts and gain job-ready skills with our online programs designed for today's professionals.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button className="bg-greatblue hover:bg-greatblue-dark text-white px-8 py-6 rounded-lg text-lg">
                Explore Programs
              </Button>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search for courses..." 
                  className="pl-10 pr-4 py-6 rounded-lg border border-gray-300 focus:outline-none focus:border-greatblue w-full sm:w-64"
                />
              </div>
            </div>
            <div className="mt-8 flex items-center space-x-6">
              <div>
                <p className="text-3xl font-bold text-greatblue">500+</p>
                <p className="text-sm text-gray-600">Courses</p>
              </div>
              <div className="h-10 w-px bg-gray-300"></div>
              <div>
                <p className="text-3xl font-bold text-greatblue">2M+</p>
                <p className="text-sm text-gray-600">Learners</p>
              </div>
              <div className="h-10 w-px bg-gray-300"></div>
              <div>
                <p className="text-3xl font-bold text-greatblue">300+</p>
                <p className="text-sm text-gray-600">Hiring Partners</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-10">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1000" 
              alt="Students learning online"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
      
      {/* Trusted by logos */}
      <div className="bg-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500 mb-6">TRUSTED BY LEADING COMPANIES</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-75">
            <div className="w-24 h-12 flex items-center justify-center">
              <p className="text-xl font-bold text-gray-500">Microsoft</p>
            </div>
            <div className="w-24 h-12 flex items-center justify-center">
              <p className="text-xl font-bold text-gray-500">Google</p>
            </div>
            <div className="w-24 h-12 flex items-center justify-center">
              <p className="text-xl font-bold text-gray-500">Amazon</p>
            </div>
            <div className="w-24 h-12 flex items-center justify-center">
              <p className="text-xl font-bold text-gray-500">IBM</p>
            </div>
            <div className="w-24 h-12 flex items-center justify-center">
              <p className="text-xl font-bold text-gray-500">Accenture</p>
            </div>
            <div className="w-24 h-12 flex items-center justify-center">
              <p className="text-xl font-bold text-gray-500">Dell</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
