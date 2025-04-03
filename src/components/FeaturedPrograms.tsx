
import React from 'react';
import { Button } from './ui/button';
import { Award, Calendar, Clock, Users } from 'lucide-react';

const programs = [
  {
    id: 1,
    title: 'Post Graduate Program in Data Science',
    partner: 'In collaboration with MIT',
    features: [
      { icon: <Clock size={18} />, text: '12 months' },
      { icon: <Users size={18} />, text: 'Live classes' },
      { icon: <Award size={18} />, text: 'MIT Certificate' }
    ],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 2,
    title: 'Master\'s in Computer Science',
    partner: 'In collaboration with Stanford University',
    features: [
      { icon: <Clock size={18} />, text: '24 months' },
      { icon: <Calendar size={18} />, text: 'Flexible schedule' },
      { icon: <Award size={18} />, text: 'Masters Degree' }
    ],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600'
  }
];

const FeaturedPrograms = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-greatblue font-medium">ACADEMIC EXCELLENCE</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Our Featured Programs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Premium learning experiences with internationally recognized credentials and industry connections
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {programs.map((program) => (
            <div key={program.id} className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-6">
                  <h3 className="text-xl font-bold mb-1">{program.title}</h3>
                  <p className="text-greatorange mb-4">{program.partner}</p>
                  
                  <div className="border-t border-b border-gray-200 py-4 mb-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {program.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <span className="mr-2 text-gray-600">{feature.icon}</span>
                          <span className="text-sm">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button className="bg-greatblue hover:bg-greatblue-dark">Learn More</Button>
                    <Button variant="outline" className="border-greatblue text-greatblue hover:bg-greatblue hover:text-white">
                      Download Brochure
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;
