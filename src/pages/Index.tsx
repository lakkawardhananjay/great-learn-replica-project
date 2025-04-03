
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CourseSection from '../components/CourseSection';
import CybersecuritySection from '../components/CybersecuritySection';
import FeaturedPrograms from '../components/FeaturedPrograms';
import Testimonials from '../components/Testimonials';
import CorporateSection from '../components/CorporateSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CourseSection />
      <CybersecuritySection />
      <FeaturedPrograms />
      <Testimonials />
      <CorporateSection />
      <Footer />
    </div>
  );
};

export default Index;
