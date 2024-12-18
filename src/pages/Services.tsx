import React from "react";
import {
  CreditCard,
  Smartphone,
  Wallet,
  PiggyBank,
  Building,
  ArrowRight,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <CreditCard className="h-8 w-8 text-blue-900" />,
      title: "Bank Cards",
      description:
        "Choose from a range of credit and debit cards designed for your needs.",
      features: ["Credit Card", "Gift Card", "Currency Card"],
    },
    {
      icon: <Smartphone className="h-8 w-8 text-blue-900" />,
      title: "Mobile Banking",
      description: "Bank anytime, anywhere with our secure mobile app.",
      features: ["Money Transfer", "Bill Payments", "Top-Up Recharge"],
    },
    {
      icon: <Wallet className="h-8 w-8 text-blue-900" />,
      title: "Bank Accounts",
      description: "Simplify your finances with our versatile bank accounts.",
      features: ["Current Account", "Savings Account", "Currency Account"],
    },
    {
      icon: <PiggyBank className="h-8 w-8 text-blue-900" />,
      title: "Investments",
      description: "Grow your wealth with our investment solutions.",
      features: ["Investment Funds", "Fixed Deposits", "Securities"],
    },
    {
      icon: <Building className="h-8 w-8 text-blue-900" />,
      title: "Bank Loans",
      description: "Discover flexible loan options tailored to your needs.",
      features: ["Home Loan", "Car Loan", "Personal Loan"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-24"
        role="banner"
        aria-label="Digital Bank Services"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">
              Welcome to Digital Banking
            </h1>
            <p className="text-lg max-w-3xl mx-auto">
              Enjoy a wide range of modern banking services tailored to your
              financial goals.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
              >
                <div
                  className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  aria-hidden="true"
                >
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 ml-2 text-blue-900" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className="mt-6 bg-gradient-to-r from-blue-600 to-blue-900 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-colors w-full"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us help you take the first step toward financial success.
            Contact our team today!
          </p>
          <button
            className="bg-gradient-to-r from-blue-600 to-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-colors"
            aria-label="Contact Us"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
