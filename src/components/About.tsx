import React from 'react';
import { Shield, Heart, Clock } from 'lucide-react';

export default function About() {
  return (
    <div id="about" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to making healthcare accessible, efficient, and personal for everyone.
            Our platform connects patients with the best healthcare professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Shield,
              title: 'Trusted Care',
              description: 'All our healthcare providers are verified and certified professionals.'
            },
            {
              icon: Heart,
              title: 'Patient First',
              description: 'Your health and comfort are our top priorities in everything we do.'
            },
            {
              icon: Clock,
              title: '24/7 Support',
              description: 'Round-the-clock access to healthcare professionals and support staff.'
            }
          ].map((item, index) => (
            <div key={index} className="text-center p-6">
              <item.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}