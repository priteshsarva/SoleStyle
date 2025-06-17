import { Truck, RefreshCcw, Shield, Headphones } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'Free delivery on orders over $75. Fast and reliable shipping worldwide.'
    },
    {
      icon: RefreshCcw,
      title: '7-Day Returns',
      description: 'Easy returns and exchanges within 7 days. No questions asked.'
    },
    {
      icon: Shield,
      title: 'Secure Checkout',
      description: 'Your payment information is encrypted and completely secure.'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Our customer service team is here to help you anytime, anywhere.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose SoleStyle?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to providing you with the best shopping experience from start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-2xl card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                <benefit.icon size={28} className="text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;