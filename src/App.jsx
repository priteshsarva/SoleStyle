import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import About from './pages/About';
import SizeGuide from './pages/SizeGuide';
import ShippingInfo from './pages/ShippingInfo';
import Loader from './components/Loader';
import ScrollToTop from './components/ScrollToTop';

import { useEffect, useState } from 'react';

const baseUrl = import.meta.env.VITE_BASE_URL;

function App() {
  const [products, setproducts] = useState('')

  useEffect(() => {
    if (products == '') {
      fetch(`${baseUrl}/product/firstdata`, {
        method: 'GET',
        headers: { "x-api-key": import.meta.env.VITE_PRIVATE_API_KEY },

      })
        .then(response => response.json())
        .then(data => {
          setproducts(data.results)

        })
        .catch(error => console.error('Error:', error));
    }
  }, [products])

  return (
    <>
      {products == "" ?
        <Loader />
        :
        <Router basename="/SoleStyle/">
          <ScrollToTop />
          <div className="min-h-screen flex flex-col">
            {/* header search pending */}
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home products={products} />} />
                <Route path="/products" element={<Products products={products} />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                {/* Placeholder routes */}
                <Route path="/brands" element={<Products />} />
                <Route path="/categories" element={<Products />} />
                <Route path="/contact" element={<Contact />} />
                {/* Footer Links Routes */}
                <Route path="/size-guide" element={<SizeGuide />} />
                <Route path="/shipping" element={<ShippingInfo />} />
                <Route path="/returns" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><h1 className="text-3xl font-bold text-gray-900">Returns Policy Coming Soon</h1></div>} />
                <Route path="/faq" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><h1 className="text-3xl font-bold text-gray-900">FAQ Coming Soon</h1></div>} />
                <Route path="/about" element={<About />} />
                <Route path="/careers" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><h1 className="text-3xl font-bold text-gray-900">Careers Coming Soon</h1></div>} />
                <Route path="/press" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><h1 className="text-3xl font-bold text-gray-900">Press Coming Soon</h1></div>} />
                <Route path="/privacy" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><h1 className="text-3xl font-bold text-gray-900">Privacy Policy Coming Soon</h1></div>} />
                <Route path="/terms" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><h1 className="text-3xl font-bold text-gray-900">Terms of Service Coming Soon</h1></div>} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      }
    </>
  );
}

export default App;
