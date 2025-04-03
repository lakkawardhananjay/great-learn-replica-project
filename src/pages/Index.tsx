
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CybersecuritySection from '../components/CybersecuritySection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CybersecuritySection />
      <Footer />
    </div>
  );
};

export default Index;
