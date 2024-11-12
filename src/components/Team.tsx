import React from 'react';
import { TeamMember } from '../types';
import AnishImage from '../assets/images/Anish_Bhowmick.jpg';
import NeeladriImage from '../assets/images/Neeladri_Hazra.png';
import SaikatImage from '../assets/images/Saikat_Sarkar.png';

const team: TeamMember[] = [
  {
    name: 'Anish Bhowmick',
    role: 'Software Developer',
    image: AnishImage
  },
  {
    name: 'Neeladri Hazra',
    role: 'Frontend Developer',
    image: NeeladriImage
  },
  {
    name: 'Saikat Sarkar',
    role: 'Hardware & IoT',
    image: SaikatImage
  }
];

export default function Team() {
  return (
    <div id="team" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-xl text-gray-600">
            Meet our team of dedicated techies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="bg-white rounded-xl overflow-hidden shadow-lg 
                                            transform hover:-translate-y-1 transition-transform">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}