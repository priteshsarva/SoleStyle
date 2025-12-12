import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Heart, Truck, RefreshCcw, Shield, Star, Plus, Minus } from 'lucide-react';
const baseUrl = import.meta.env.VITE_BASE_URL;


const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageUrlArray, setimageUrlArray] = useState("")
  const [sizes, setsizes] = useState("")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    size: "",
  });
  const [simillarproducts, setsimillarproducts] = useState("")


  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.contact.trim()) {
      errors.contact = "Contact number is required";
    } else if (!/^\d{10}$/.test(formData.contact.trim())) {
      errors.contact = "Contact must be a valid 10-digit number";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (
      !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email.trim())
    ) {
      errors.email = "Enter a valid email";
    }

    if (!formData.size.trim()) errors.size = "Size is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  useEffect(() => {
    // const foundProduct = products.find(p => p.id === parseInt(id));
    // setProduct(foundProduct);
    // if (foundProduct) {
    //   setSelectedImage(0);
    // }

    fetch(`${baseUrl}/product/${id}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        setProduct(data.results[0]);
        setSelectedImage(Array.isArray(data.results[0].image) ? data.results.image[0] : data.results[0].featuredimg);
        setimageUrlArray(JSON.parse(data.results[0].imageUrl));
        setsizes(JSON.parse(data.results[0].sizeName));
        // console.log("data", data.results[0]);
      })
      .catch(error => console.error('Error:', error));



  }, [id]);

  useEffect(() => {
    // Fetch similar products only when product is available
    if (product) {
      fetch(`${baseUrl}/product/search?q=${product.productName.slice(0, 3)}&category=${product.catName}&result={30}&page={1}`, {
        method: 'GET',
      })
        .then(response => response.json())
        .then(data => {
          setsimillarproducts(data.results);
          // console.log(data.results);
        })
        .catch(error => console.error('Error in Similar:', error));
    }
  }, [product]); // This remains unchanged 

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Product not found</h2>
          <Link to="/products" className="btn-primary">
            Browse Products
          </Link>
        </div>
      </div>
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    swipeToSlide: true,

    // lazyLoad: true,

    className: "slider variable-width",
    variableWidth: true,
    centerMode: true,
    // Disable swiping globally (optional)
    // swipe: false,
    // touchMove: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          // slidesToShow: 2,
          // slidesToScroll: 1,
          arrows: false,
          // 👇 Disable swipe specifically for mobile
          // swipe: false,
          // touchMove: false,
          // swipeToSlide: false
        }
      }
    ]
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    // Add to cart logic here
    alert(`Added ${quantity} ${product.name} (Size ${selectedSize}) to cart!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-gray-700">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-gray-700">Products</Link>
            <span>/</span>
            <span className="text-gray-900">{product.productName}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-white rounded-2xl overflow-hidden">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="flex space-x-4">

              {
                Array.isArray(imageUrlArray) ? imageUrlArray.map((image, index) => (
                  <>
                    <button
                      key={index}
                      onClick={() => setSelectedImage(image)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${selectedImage === image ? 'border-gray-900' : 'border-gray-200'
                        }`}
                    >
                      <img
                        src={image}
                        alt={`${product.productName} view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>

                    {/* <div key={index} className="col-3">
                      <img
                        src={image}
                        alt={`${product.productName} thumbnail ${index + 1}`}
                        className="img-fluid rounded cursor-pointer"
                        style={{
                          height: '100px',
                          objectFit: 'cover',
                          // width: '100%',
                          aspectRatio: "1/1",
                          border: selectedImage === image ? '2px solid #000' : '1px solid #ddd',
                        }}
                        onClick={() => setSelectedImage(image)}
                      />
                    </div> */}
                  </>

                )) : ""
              }


              {/* {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${selectedImage === index ? 'border-gray-900' : 'border-gray-200'
                    }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))} */}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Product Header */}
            <div>
              {/* <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-500 uppercase tracking-wide">{product.brand}</span>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`p-2 rounded-full transition-colors ${isWishlisted ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                    }`}
                >
                  <Heart size={20} fill={isWishlisted ? 'currentColor' : 'none'} />
                </button>
              </div> */}
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.productName}</h1>

              {/* Price */}
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-3xl font-bold text-gray-900">${product.productOriginalPrice}</span>
                {product.productOriginalPrice && (
                  <span className="text-xl text-gray-500 line-through">${product.productOriginalPrice}</span>
                )}
              </div>

              {/* Rating */}
              {/* <div className="flex items-center space-x-2 mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">(4.8) • 127 reviews</span>
              </div> */}
            </div>

            {/* Description */}
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">{product.productDescription}</p>

              {/* Features */}
              {/* <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Key Features:</h4>
                <ul className="space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div> */}
            </div>

            {/* Size Selection */}

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Size (US)</h4>
              {sizes.length === 0 || JSON.stringify(sizes) === '[]' ? (
                <div className="my-5">
                  <button className="w-full py-3 px-4 bg-red-500 text-white rounded-md border border-red-600 hover:bg-red-600 transition-colors">
                    Out of Stock
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-6 gap-2 mb-5">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`py-2 px-3 text-sm font-medium border rounded-md transition-colors ${selectedSize === size
                          ? 'border-gray-900 bg-gray-900 text-white'
                          : 'border-gray-300 text-gray-700 hover:border-gray-400'
                          }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>

                  {/* Add to Cart and Share Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      className="w-full py-3 px-4 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
                      onClick={() => setShowModal(true)}
                    >
                      Request for size
                    </button>

                    <div className="relative">
                      <button
                        className="w-full py-3 px-4 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors flex items-center justify-center"
                        onClick={handleToggle}
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                        </svg>
                        Share
                      </button>

                      {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}

                      {isDropdownOpen && selectedSize && (
                        <div className="absolute z-10 w-full mt-2 bg-white rounded-md shadow-lg py-1">
                          <a
                            className="flex items-center px-4 py-2 text-sm text-white bg-green-500 hover:bg-green-600 rounded mx-2 mb-1"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                              `📦 *Product*\n\n 🛍️ product: ${product.productName}\n👟 Size: ${selectedSize}\n 🔗 URL: ${window.location.href}`
                            )}`}
                          >
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-6.29-12.21c-5.297 0-9.598 4.293-9.598 9.587 0 1.918.56 3.74 1.544 5.307l-1.107 3.226 3.387-1.082a9.58 9.58 0 004.774 1.27c5.293 0 9.598-4.293 9.598-9.587 0-5.295-4.305-9.588-9.598-9.588" />
                            </svg>
                            WhatsApp
                          </a>
                          <a
                            className="flex items-center px-4 py-2 text-sm text-white bg-blue-500 hover:bg-blue-600 rounded mx-2 mb-1"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                              window.location.href
                            )}`}
                          >
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0" />
                            </svg>
                            Facebook
                          </a>
                          <a
                            className="flex items-center px-4 py-2 text-sm text-white bg-blue-400 hover:bg-blue-500 rounded mx-2 mb-1"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                              `📦 *Product*\n\n 🛍️ product: ${product.productName}\n👟 Size: ${selectedSize}\n 🔗 URL: ${window.location.href}`
                            )}`}
                          >
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                            </svg>
                            Twitter
                          </a>
                          <a
                            className="flex items-center px-4 py-2 text-sm text-white bg-red-500 hover:bg-red-600 rounded mx-2"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={`mailto:?subject=Check this out&body=${encodeURIComponent(
                              `📦 *Product*\n\n 🛍️ product: ${product.productName}\n👟 Size: ${selectedSize}\n 🔗 URL: ${window.location.href}`
                            )}`}
                          >
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.65 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.068.432.27.268.432.643.432 1.068z" />
                            </svg>
                            Email
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* old code for size */}

            {/* <div>
              <h4 className="font-semibold text-gray-900 mb-3">Size (US)</h4>
              <div className="grid grid-cols-6 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 px-3 text-sm font-medium border rounded-md transition-colors ${selectedSize === size
                        ? 'border-gray-900 bg-gray-900 text-white'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div> */}

            {/* Quantity */}
            {/* <div>
              <h4 className="font-semibold text-gray-900 mb-3">Quantity</h4>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div> */}

            {/* Add to Cart */}
            {/* <button
              onClick={handleAddToCart}
              className="w-full btn-primary"
            >
              Add to Cart • ${(product.price * quantity).toFixed(2)}
            </button> */}

            {/* Product Benefits */}
            <div className="space-y-3 pt-6 border-t border-gray-200">
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Truck size={16} />
                <span>Free shipping on orders over $75</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <RefreshCcw size={16} />
                <span>Free returns within 7 days</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Shield size={16} />
                <span>Authenticity guaranteed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Products */}
        {/* {similarProducts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {similarProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )} */}


        {simillarproducts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">You Might Also Like</h2>
            <div className="relative pb-12">
              {simillarproducts.length > 0 ? (
                <Slider {...settings}>
                  {simillarproducts.map((product) => (


                    <div key={product.productId} className="w-full sm:w-1/2 md:w-1/4 px-2" style={{ width: '200px' }}>
                      <ProductCard product={product} />
                    </div>

                    // <div key={product.id} className="px-2">
                    //   <div className="card border-0 h-100 rounded-none" style={{ overflow: 'hidden' }}>
                    //     <Link
                    //       to={`/product/${product.id}`}
                    //       className="text-decoration-none position-relative"
                    //       style={{ color: 'inherit' }}
                    //     >
                    //       <div className="relative aspect-square">
                    //         <img
                    //           className="w-full h-full object-cover transition-opacity duration-300"
                    //           src={Array.isArray(product.image) ? product.image[0] : product.featuredimg}
                    //           alt={product.productName}
                    //           loading="lazy"
                    //           style={{ opacity: 1 }}
                    //         />
                    //       </div>

                    //       <div className="card-body pt-2 px-2">
                    //         <p className="text-gray-900 font-medium mb-2 line-clamp-2">
                    //           {product.productName}
                    //         </p>

                    //         <div className="flex flex-wrap gap-1 mb-2">
                    //           {JSON.parse(product.sizeName).map((size) => (
                    //             <span
                    //               key={size}
                    //               className="text-xs border border-gray-300 px-2 py-0.5"
                    //             >
                    //               {size}
                    //             </span>
                    //           ))}
                    //         </div>
                    //       </div>
                    //     </Link>
                    //   </div>
                    // </div>
                  ))}
                </Slider>
              ) : (
                <p className="text-gray-500">No results found</p>
              )}
            </div>
          </section>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true" onClick={() => setShowModal(false)}></div>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Request Size for Product</h3>
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-500 focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="sr-only">Close</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="mt-4">
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      className={`w-full px-3 py-2 border ${formErrors.name ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                    <input
                      type="tel"
                      className={`w-full px-3 py-2 border ${formErrors.contact ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    />
                    {formErrors.contact && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.contact}</p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      className={`w-full px-3 py-2 border ${formErrors.email ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      value={product.productName}
                      disabled
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Size</label>
                    <input
                      type="text"
                      className={`w-full px-3 py-2 border ${formErrors.size ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                      value={formData.size || ""}
                      onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                    />
                    {formErrors.size && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.size}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50"
                  disabled={
                    !formData.name.trim() ||
                    !formData.contact.trim() ||
                    !formData.email.trim() ||
                    !formData.size.trim()
                  }
                  onClick={() => {
                    if (validateForm()) {
                      const message = `📦 *Product Request*\n\n👤 Name: ${formData.name}\n📱 Contact: ${formData.contact}\n📧 Email: ${formData.email}\n🛍️ Product: ${product.productName}\n👟 Requested Size: ${formData.size}\n🔗 URL: ${window.location.href}`;
                      const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
                      window.open(whatsappUrl, '_blank');
                      setShowModal(false);
                      setFormData({
                        name: "",
                        contact: "",
                        email: "",
                        size: "",
                      })
                    }
                  }}
                >
                  Send via WhatsApp
                </button>

                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;