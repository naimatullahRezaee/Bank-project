import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import Stats from "../components/home/Stats";
import Button from "../components/ui/Button";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <Features />

      {/* CTA Section */}
      <div className="bg-blue-900 text-white py-12 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Open Your Account Today</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join millions of satisfied customers who trust Digital Bank for
              their financial needs. Get started in less than 10 minutes with
              our simple online process.
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="inline-flex items-center"
            >
              Open Account
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <hr className="border-t border-blue-500  w-full mx-auto" />
    </div>
  );
};

export default Home;
