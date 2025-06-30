import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Loader from './components/Loader';

import { useEffect, useState } from 'react';

const baseUrl = import.meta.env.VITE_BASE_URL;

function App() {
  const [products, setproducts] = useState('')

  useEffect(() => {
    if (products == '') {
      fetch(`${baseUrl}/product/firstdata`, {
        method: 'GET',
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
        <Router basename="/SoleStyle">
          <div className="min-h-screen flex flex-col">
            {/* header search pending */}
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home products={products} />} />
                <Route path="/products" element={<Products products={products}/>} />
                <Route path="/product/:id" element={<ProductDetail />} />
                {/* Placeholder routes */}
                <Route path="/brands" element={<Products />} />
                <Route path="/categories" element={<Products />} />
                <Route path="/contact" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><h1 className="text-3xl font-bold text-gray-900">Contact Page Coming Soon</h1></div>} />
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