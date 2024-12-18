import React from 'react';
import { Shield, Smartphone, CreditCard, Coins, Clock, Globe } from 'lucide-react';
import Card from '../ui/Card';

const Features = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-blue-900" />,
      title: 'Advanced Security',
      description: 'Bank with confidence using our state-of-the-art security systems and encryption technology'
    },
    {
      icon: <Smartphone className="h-8 w-8 text-blue-900" />,
      title: 'Mobile Banking',
      description: 'Access your accounts anytime, anywhere with our award-winning mobile app'
    },
    {
      icon: <CreditCard className="h-8 w-8 text-blue-900" />,
      title: 'Smart Cards',
      description: 'Advanced credit cards with contactless payments and real-time fraud protection'
    },
    {
      icon: <Coins className="h-8 w-8 text-blue-900" />,
      title: 'Investment Options',
      description: 'Grow your wealth with our diverse range of investment products and expert guidance'
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-900" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support through multiple channels for your convenience'
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-900" />,
      title: 'Global Banking',
      description: 'International banking services with competitive exchange rates and global transfers'
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Digital Bank?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We combine cutting-edge technology with personalized service to provide 
            you with the best banking experience possible
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;