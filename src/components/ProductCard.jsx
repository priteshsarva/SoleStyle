import { Link } from 'react-router-dom';
// import { Heart, Eye } from 'lucide-react';
import { sizeMap } from '../data/products';

const ProductCard = ({ product, className = '' }) => {


  const normalizeSize = (inputSize) => {

    for (const [baseSize, variants] of Object.entries(sizeMap)) {
      if (variants.includes(inputSize)) {
        return baseSize;
      }
    }
    return inputSize; // fallback if not found
  };

  return (
    <Link to={`/product/${product.productId}`} className="block">
      <div className={`group relative bg-white rounded-lg overflow-hidden card-hover ${className}`}>
        {/* Product Image */}
        <div className="aspect-square overflow-hidden bg-gray-100 relative">
          <img
            src={Array.isArray(product.image) ? product.image[0] : product.featuredimg}
            alt={product.productName}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Badges */}
          {/* <div className="absolute top-3 left-3 flex flex-col space-y-2">
          {product.isNew && (
            <span className="bg-green-500 text-white text-xs font-medium px-2 py-1 rounded-full">
              New
            </span>
          )}
          {product.originalPrice && (
            <span className="bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full">
              Sale
            </span>
          )}
        </div> */}

          {/* Quick Actions */}
          {/* <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
            <Heart size={16} className="text-gray-600" />
          </button>
          <Link
            to={`/product/${product.id}`}
            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
          >
            <Eye size={16} className="text-gray-600" />
          </Link>
        </div> */}

          {/* Quick Add to Cart (appears on hover) */}
          {/* <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-full bg-gray-900 text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
            Quick Add
          </button>
        </div> */}
        </div>

        {/* Product Info */}
        <div className="p-4">
          <div className="flex items-start justify-between mb-1 md:mb-2">
            <div className="flex-1">
              <p className="text-sm text-gray-500 mb-0 md:mb-1">{product.productBrand}</p>
              <h3 className="font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                <Link to={`/product/${product.productId}`} className="block">
                  {product.productName}
                </Link>
              </h3>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900">
              {/* ${product.price} */}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.productOriginalPrice}
              </span>
            )}
          </div>

          {/* Available Sizes Preview */}
          <div className="mt-0 md:mt-2 flex items-center space-x-1">
            <span className="text-xs text-gray-500">Sizes:</span>
            <div className="flex space-x-1">


              {product.sizeName && (
                <>
                  {(() => {
                    try {
                      const sizes = JSON.parse(product.sizeName);
                      return sizes.map((size) => {
                        const normalized = normalizeSize(size);
                        return (
                          <span key={normalized} className="text-xs text-gray-400">
                            {normalized}
                          </span>
                        );
                      });
                    } catch (e) {
                      console.error('Error parsing sizeName:', e);
                      return null;
                    }
                  })()}
                </>
              )}
              {/* {product.sizes.length > 4 && (
                <span className="text-xs text-gray-400">+{product.sizes.length - 4}</span>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </Link>

  );
};

export default ProductCard;
