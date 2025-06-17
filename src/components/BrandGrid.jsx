import { Link } from 'react-router-dom';
import { brands } from '../data/products';

const BrandGrid = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Discover by Brands
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Shop from the world's most iconic sneaker brands, each bringing their unique style and innovation to your wardrobe.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              to={`/products?brand=${brand.name.toLowerCase().replace(' ', '-')}`}
              className="group relative bg-gray-50 rounded-2xl overflow-hidden card-hover p-8 text-center"
            >
              {/* Brand Image */}
              <div className="aspect-square mb-4 overflow-hidden rounded-xl">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Brand Info */}
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                {brand.name}
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                {brand.description}
              </p>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-300 rounded-2xl"></div>
            </Link>
          ))}
        </div>

        {/* View All Brands Button */}
        <div className="text-center mt-12">
          <Link
            to="/brands"
            className="btn-secondary inline-flex items-center"
          >
            View All Brands
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandGrid;