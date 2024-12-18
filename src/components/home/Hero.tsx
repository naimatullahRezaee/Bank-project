import Button from "../ui/Button";

const Hero = () => {
  return (
    <div className="relative bg-blue-900 text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Banking"
          className="w-full h-full object-cover opacity-60"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Banking for a Better Future
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Experience the next generation of banking with our innovative
            digital solutions. Secure, convenient, and designed for modern life.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="primary" size="lg">
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
