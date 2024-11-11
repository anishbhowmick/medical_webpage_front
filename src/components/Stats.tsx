import React from 'react';
import { Statistic } from '../types';
import { Users, UserCheck, Heart } from 'lucide-react';

const stats: Statistic[] = [
  { label: 'Active Patients', value: 50000, suffix: '+' },
  { label: 'Expert Doctors', value: 500, suffix: '+' },
  { label: 'Satisfaction Rate', value: 98, suffix: '%' },
];

const icons = [Users, UserCheck, Heart];

export default function Stats() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = icons[index];
            return (
              <div key={stat.label} className="text-center p-6 rounded-xl bg-blue-50">
                <Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}