import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const handleGetStarted = () => {
    window.location.href = 'https://medical-webpage-signup-aafo.vercel.app/';
  };

  return (
    <div id="home" className="pt-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Your Health, Our Priority
              <span className="text-blue-600">.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Experience healthcare reimagined. Connect with top doctors, manage your health records,
              and receive personalized care - all in one place.
            </p>
            <button
              onClick={handleGetStarted}
              className="group bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold 
                         hover:bg-blue-700 transition-colors flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
              alt="Doctor with patient"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">1000+ Doctors Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}