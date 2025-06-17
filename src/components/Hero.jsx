import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            {/* Content */}
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Step Into
                <span className="block text-gradient">Premium Style</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
                Discover the finest collection of sneakers and footwear from the world's most coveted brands. Every step is a statement.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/products" className="btn-primary inline-flex items-center justify-center group">
                  Shop Now
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link to="/brands" className="btn-secondary inline-flex items-center justify-center">
                  Explore Brands
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-12 flex items-center justify-center lg:justify-start space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Premium Styles</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Top Brands</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">10K+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-fade-in p-4">
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Premium Sneakers"
                  className="w-full h-auto max-w-md mx-auto lg:max-w-none lg:w-full rounded-2xl shadow-2xl"
                />
              </div>
              
              {/* Background Elements */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full opacity-20"></div>
              <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-gray-400 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-gray-300 rounded-full opacity-40 animate-bounce" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-gray-500 rounded-full opacity-25 animate-bounce" style={{animationDelay: '1s'}}></div>
    </section>
  );
};

export default Hero;