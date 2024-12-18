import { Target, Users, Award, TrendingUp } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">About Digital Bank</h1>
            <p className="text-xl max-w-3xl mx-auto">
              With over 10 years of experience, we are dedicated to providing
              innovative and modern banking services, continuously striving to
              elevate digital banking to new heights.
            </p>
            <img
              src="/images/digital.jpg"
              alt="Digital Banking Illustration"
              className="mt-8 rounded-lg shadow-lg mx-auto w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
                <Target className="h-8 w-8 text-blue-900" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To become a leader in digital banking by providing cutting-edge
                banking services and transforming the banking industry.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
                <Users className="h-8 w-8 text-blue-900" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To deliver innovative, user-friendly banking services with the
                highest security standards and exceptional customer experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <img
              src="/images/statistic.jpg"
              alt="Bank Statistics"
              className="rounded-lg shadow-md mx-auto w-[800px] h-64"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">1M+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">100+</div>
              <div className="text-gray-600">Digital Branches</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">24/7</div>
              <div className="text-gray-600">Online Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">99.9%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600">
              Guiding principles that shape our mission and vision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <img
                src="/images/new.jpg"
                alt="Excellence"
                className="rounded-lg shadow-md mx-auto mb-4"
              />
              <Award className="h-12 w-12 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                Striving for the highest quality in all our services.
              </p>
            </div>

            <div className="text-center p-6">
              <img
                src="/images/new.jpg"
                alt="Customer Centric"
                className="rounded-lg shadow-md mx-auto mb-4"
              />
              <Users className="h-12 w-12 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Customer-Centric</h3>
              <p className="text-gray-600">
                Ensuring customer satisfaction and convenience at every step.
              </p>
            </div>

            <div className="text-center p-6">
              <img
                src="/images/new.jpg"
                alt="Innovation"
                className="rounded-lg shadow-md mx-auto mb-4"
              />
              <TrendingUp className="h-12 w-12 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                Adopting the latest technologies to enhance banking experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
