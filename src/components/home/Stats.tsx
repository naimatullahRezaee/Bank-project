import React from 'react';
import Card from '../ui/Card';

const Stats = () => {
  const stats = [
    { number: '2M+', label: 'Active Users' },
    { number: '150+', label: 'Countries Served' },
    { number: '99.9%', label: 'Uptime' },
    { number: '$50B+', label: 'Transactions Processed' }
  ];

  return (
    <div className="bg-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;