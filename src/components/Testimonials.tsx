
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from './ui/button';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Data Scientist at Google',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: 'The Data Science program completely transformed my career. The curriculum was rigorous and relevant, and the career support helped me land my dream job at Google.',
    program: 'Post Graduate Program in Data Science'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Full Stack Developer at Amazon',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'I had zero coding experience before joining the program. The step-by-step approach and amazing instructors helped me master web development and get hired within a month of graduation.',
    program: 'Full Stack Web Development Bootcamp'
  },
  {
    id: 3,
    name: 'Priya Patel',
    role: 'AI Engineer at Microsoft',
    image: 'https://randomuser.me/api/portraits/women/67.jpg',
    quote: 'The machine learning specialization provided hands-on experience with cutting-edge AI techniques. The capstone project became a key talking point in my interviews and helped me stand out.',
    program: 'Machine Learning Specialization'
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };

  const handlePrev = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-greatblue font-medium">LEARNER STORIES</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Success Stories From Our Students</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our graduates who have successfully transformed their careers through our programs
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="testimonial-slider overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-blue-50 rounded-2xl p-8 relative">
                    <Quote size={40} className="absolute top-6 left-6 text-blue-100" />
                    <div className="relative z-10">
                      <p className="text-lg text-gray-700 mb-8 italic">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-16 h-16 rounded-full mr-4 border-2 border-white"
                        />
                        <div>
                          <h4 className="font-bold">{testimonial.name}</h4>
                          <p className="text-gray-600 text-sm">{testimonial.role}</p>
                          <p className="text-greatblue text-xs mt-1">{testimonial.program}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full mr-4"
              onClick={handlePrev}
            >
              <ChevronLeft size={20} />
            </Button>
            {testimonials.map((_, index) => (
              <button 
                key={index} 
                className={`w-3 h-3 rounded-full mx-1 ${
                  index === activeIndex ? 'bg-greatblue' : 'bg-gray-300'
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full ml-4"
              onClick={handleNext}
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
