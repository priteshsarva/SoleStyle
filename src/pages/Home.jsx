import Hero from '../components/Hero';
import BrandGrid from '../components/BrandGrid';
import BestSellers from '../components/BestSellers';
import CategoryGrid from '../components/CategoryGrid';
import ProductPreview from '../components/ProductPreview';
import Benefits from '../components/Benefits';

const Home = () => {
  return (
    <main className="animate-fade-in">
      <Hero />
      <BrandGrid />
      <BestSellers />
      <CategoryGrid />
      <ProductPreview />
      <Benefits />
    </main>
  );
};

export default Home;