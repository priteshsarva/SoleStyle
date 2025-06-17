import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
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
  );
}

export default App;