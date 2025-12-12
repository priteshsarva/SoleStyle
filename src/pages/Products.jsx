import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { filterbrands, categories } from '../data/products';
import { Filter, X, Search } from 'lucide-react';
import Loader from '../components/Loader';
import { useLocation } from 'react-router-dom';

const baseUrl = import.meta.env.VITE_BASE_URL;


const Products = ({ products }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [totalCount, settotalCount] = useState(0)
  const [noproductFound, setnoproductFound] = useState(false)

  const [totalPage, settotalPage] = useState()
  const [curentPage, setcurentPage] = useState()
  const [url, seturl] = useState('')

  // Filter states
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [selectedBrand, setSelectedBrand] = useState(searchParams.get('brand') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');
  const [selectedSize, setSelectedSize] = useState(searchParams.get('size') || '');
  const [sortBy, setSortBy] = useState('name');
  const { pathname } = useLocation();




  // Available sizes
  // const availableSizes = [...new Set(products.flatMap(product => product.sizes))].sort((a, b) => a - b);
  const availableSizes = [
    "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46",
    "47",
  ];



  useEffect(() => {
    setSearchQuery(searchParams.get('search') || '')
    setSelectedBrand(searchParams.get('brand') || '')
    setSelectedCategory(searchParams.get('category') || '')
    setSelectedSize(searchParams.get('size') || '')
    // console.log("fedfsd");

  }, [pathname, searchParams]);  // Added searchParams to dependency array


  // Apply filters
  useEffect(() => {
    let urls = `${baseUrl}/product/search?`;
    setFilteredProducts("")

    // Brand filter
    if (selectedBrand) {
      const brandName = selectedBrand.toLowerCase().replace('-', ' ');
      if (brandName === "crocs slide") {
        urls += `q=${encodeURIComponent("croc")}&`;
      } else if (brandName === "airforce") {
        urls += `q=${encodeURIComponent("force")}&`;
      } else if (brandName === "louis vuitton") {
        urls += `q=${encodeURIComponent("Vuitton")}&`;
      } else if (brandName === "converse") {
        urls += `q=${encodeURIComponent("conver")}&`;
      } else {
        urls += `q=${encodeURIComponent(brandName)}&`;
      }
    }
    // Search query
    if (searchQuery) {

      // console.log(urls);

      let cleanedUrl = urls.replace(/q=[^&]*&?/g, '');

      // Clean up any trailing '&' or '?' if left behind
      urls = cleanedUrl.replace(/[&]+$/, '');

      urls += `q=${encodeURIComponent(searchQuery)}&`;
    }
    // Category filter
    if (selectedCategory) {
      // console.log(encodeURIComponent(selectedCategory));

      if (encodeURIComponent(selectedCategory) === "men's%20shoe") {
        urls += `category=Mens Shoes&`;
      } else if (encodeURIComponent(selectedCategory) === "women's%20shoe") {
        urls += `category=Women shoes&`;
      } else if (encodeURIComponent(selectedCategory) === "flip-flop") {
        urls += `category=flip-flop&`;
      } else if (encodeURIComponent(selectedCategory) === "ua%20quality") {
        urls += `category=UA Quality&`;
      } else {
        urls += `category=${encodeURIComponent(selectedCategory)}&`;
      }

    }

    // Size filter
    if (selectedSize) {
      urls += `size=${encodeURIComponent(selectedSize)}&`;
    }



    seturl(`${urls}&result=20&page=?`)
    // Add pagination
    // console.log(urls);

    urls += `result=20&page=1`;

    // console.log("Constructed URL:", urls);

    fetch(urls, {
      method: 'GET',
    }).then(response => response.json()).then(data => {
      if (data.results && data.results.length > 0) {
        setFilteredProducts(data.results);
        settotalPage(data.totalPages);
        setcurentPage(1);
        settotalCount(data.totalCount)

      } else {
        setFilteredProducts("no product");
        settotalCount(0)

      }
    }).catch(error => console.error('Error:', error));

  }, [searchQuery, selectedBrand, selectedCategory, selectedSize, sortBy, pathname]);

  // Handle sort change
  useEffect(() => {
    if (url) {
      const sortParam = sortBy === 'price-low' ? 'price_asc' :
        sortBy === 'price-high' ? 'price_desc' :
          sortBy === 'brand' ? 'brand_asc' : 'name_asc';

      const newUrl = url.replace(/&sort=[^&]*/g, '') + `&sort=${sortParam}`;
      seturl(newUrl);

      fetch(newUrl, {
        method: 'GET',
      }).then(response => response.json()).then(data => {
        if (data.results && data.results.length > 0) {
          setFilteredProducts(data.results);
        }
      }).catch(error => console.error('Error:', error));
    }
  }, [sortBy, url]);



  const handleloadmore = () => {
    const nextPage = curentPage + 1;
    // console.log(totalPage);
    // console.log(curentPage);
    // console.log(url);


    // Update the page number in the existing URL
    const updatedUrl = url.replace("page=?", `page=${nextPage}`);
    // console.log("Loading from URL:", updatedUrl);

    fetch(updatedUrl, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        if (data.results && data.results.length > 0) {
          setFilteredProducts([...(filteredProducts || []), ...data.results]);
          settotalPage(data.totalPages);
          setcurentPage(nextPage);
          setnoproductFound(false);

        } else {
          setnoproductFound(true);
        }
      })
      .catch(error => console.error('Error:', error));
  };


  // Update URL parameters
  useEffect(() => {
    // const params = new URLSearchParams();
    // if (searchQuery) params.set('search', searchQuery);
    // if (selectedBrand) params.set('brand', selectedBrand);
    // if (selectedCategory) params.set('category', selectedCategory);
    // if (selectedSize) params.set('size', selectedSize);

    // setSearchParams(params);
  }, [searchQuery, selectedBrand, selectedCategory, selectedSize, setSearchParams]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedBrand('');
    setSelectedCategory('');
    setSelectedSize('');
    setSortBy('name');
    setSearchParams({});

  };

  useEffect(() => {
    setSearchQuery(searchParams.get('search') || '')
    setSelectedBrand(searchParams.get('brand') || '')
    setSelectedCategory(searchParams.get('category') || '')
    setSelectedSize(searchParams.get('size') || '')
    // console.log("fedfsd");

  }, [pathname, searchParams]);  // Added searchParams to dependency array

  const activeFiltersCount = [searchQuery, selectedBrand, selectedCategory, selectedSize].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-gray-600">
              {/* Showing {filteredProducts.length} products */}
              Showing {totalCount} products

            </p>

            {/* Mobile Filter Toggle & Sort */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="lg:hidden btn-secondary flex items-center"
              >
                <Filter size={18} className="mr-2" />
                Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
              </button>

              {/* <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="brand">Sort by Brand</option>
              </select> */}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-64 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-lg p-6 sticky" style={{ top: "9rem" }}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                {activeFiltersCount > 0 && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-gray-500 hover:text-gray-700 flex items-center"
                  >
                    <X size={16} className="mr-1" />
                    Clear All
                  </button>
                )}
              </div>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full border border-gray-300 rounded-md pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />
                  <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              {/* Brand Filter */}
              {/* <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Brand
                </label>
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                >
                  <option value="">All Brands</option>
                  {filterbrands.map((brand) => (
                    <option value={brand.toLowerCase().replace(' ', '-')}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div> */}

              {/* Category Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                >
                  <option value="">All Categories</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.name.toLowerCase()}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Size Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Size (US)
                </label>
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                >
                  <option value="">All Sizes</option>
                  {availableSizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              {/* <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range
                </label>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={priceRange.min}
                    onChange={(e) => setPriceRange(prev => ({ ...prev, min: e.target.value }))}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={priceRange.max}
                    onChange={(e) => setPriceRange(prev => ({ ...prev, max: e.target.value }))}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />
                </div>
              </div> */}
            </div>
          </div>


          {/* Products Grid */}

          <div className="flex-1">
            {filteredProducts == "" ? <Loader /> :
              (filteredProducts !== "no product" ?
                (filteredProducts.length > 0 ? <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}

                  </div>
                  {noproductFound == false ?
                    <div className="flex justify-center mt-8">
                      <Link onClick={handleloadmore} className="btn-secondary inline-flex items-center justify-center">
                        Load More
                      </Link>
                    </div>
                    : ""
                  }

                </> : "") :
                (
                  <div className="text-center py-12">
                    <div className="text-gray-400 text-6xl mb-4">👟</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                    <p className="text-gray-600 mb-4">
                      Try adjusting your filters or search terms to find what you're looking for.
                    </p>
                    <button onClick={clearFilters} className="btn-secondary">
                      Clear Filters
                    </button>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
