import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { products } from '../data/products';
import { ArrowRight } from 'lucide-react';

const ProductPreview = () => {
  const featuredProducts = products.slice(0, 6);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Handpicked selections from our curated collection. Each pair tells a story of craftsmanship and style.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Link
            to="/products"
            className="btn-primary inline-flex items-center group"
          >
            View All Products
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;