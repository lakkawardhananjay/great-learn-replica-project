
import React from 'react';
import { Button } from './ui/button';
import { Building, Users, Globe, Database } from 'lucide-react';

const CorporateSection = () => {
  return (
    <section className="py-20 bg-greatblue">
      <div className="container mx-auto px-4 text-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner With Us for Corporate Training</h2>
          <p className="max-w-2xl mx-auto text-blue-100">
            Empower your workforce with customized training programs designed for the digital age
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Building className="text-greatblue" />
            </div>
            <h3 className="text-xl font-bold mb-3">Customized Programs</h3>
            <p className="text-blue-100">
              Tailored solutions that align with your organization's specific requirements and goals
            </p>
          </div>
          
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Users className="text-greatblue" />
            </div>
            <h3 className="text-xl font-bold mb-3">Expert Mentoring</h3>
            <p className="text-blue-100">
              Learn from industry practitioners with extensive experience in their domains
            </p>
          </div>
          
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Globe className="text-greatblue" />
            </div>
            <h3 className="text-xl font-bold mb-3">Global Certification</h3>
            <p className="text-blue-100">
              Internationally recognized credentials to validate your employees' expertise
            </p>
          </div>
          
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Database className="text-greatblue" />
            </div>
            <h3 className="text-xl font-bold mb-3">Learning Analytics</h3>
            <p className="text-blue-100">
              Comprehensive insights into your team's progress and performance
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button className="bg-white text-greatblue hover:bg-gray-100">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CorporateSection;
