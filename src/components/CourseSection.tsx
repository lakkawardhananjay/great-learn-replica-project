
import React from 'react';
import { Button } from './ui/button';
import { ChevronRight, Star } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Data Science Bootcamp',
    description: 'Comprehensive program to master data science tools and techniques',
    duration: '6 months',
    level: 'Intermediate',
    rating: 4.8,
    reviews: 1240,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 2,
    title: 'Full Stack Web Development',
    description: 'Learn front-end and back-end development to build complete web applications',
    duration: '8 months',
    level: 'Intermediate',
    rating: 4.7,
    reviews: 980,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 3,
    title: 'Machine Learning Specialization',
    description: 'Master machine learning algorithms and implement real-world projects',
    duration: '5 months',
    level: 'Advanced',
    rating: 4.9,
    reviews: 850,
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 4,
    title: 'Cloud Computing & DevOps',
    description: 'Learn cloud platforms, CI/CD pipelines, and infrastructure automation',
    duration: '4 months',
    level: 'Intermediate',
    rating: 4.6,
    reviews: 720,
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80&w=600'
  },
];

const categories = [
  'Data Science', 'Web Development', 'Machine Learning', 'Cloud Computing', 
  'Artificial Intelligence', 'DevOps', 'Business Analytics', 'Cybersecurity'
];

const CourseSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Popular Programs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from hundreds of courses designed by industry experts to help you advance your career
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Button variant="outline" className="rounded-full border-greatblue text-greatblue bg-white hover:bg-greatblue hover:text-white">
            All Categories
          </Button>
          {categories.map((category, index) => (
            <Button key={index} variant="outline" className="rounded-full border-gray-300 text-gray-700 bg-white hover:bg-greatblue hover:text-white">
              {category}
            </Button>
          ))}
        </div>

        {/* Course cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="course-card bg-white rounded-lg overflow-hidden border border-gray-200">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{course.description}</p>
                <div className="flex justify-between mb-3">
                  <span className="text-sm text-gray-500">{course.duration}</span>
                  <span className="text-sm text-gray-500">{course.level}</span>
                </div>
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        fill={i < Math.floor(course.rating) ? "#FFB400" : "none"} 
                        stroke={i < Math.floor(course.rating) ? "#FFB400" : "#CBD5E0"} 
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm font-medium">{course.rating}</span>
                  <span className="ml-1 text-xs text-gray-500">({course.reviews})</span>
                </div>
                <Button className="w-full bg-white text-greatblue border border-greatblue hover:bg-greatblue hover:text-white">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="border-greatblue text-greatblue hover:bg-greatblue hover:text-white">
            View All Courses <ChevronRight size={16} className="ml-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
