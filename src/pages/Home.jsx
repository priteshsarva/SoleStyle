import Hero from '../components/Hero';
import BrandGrid from '../components/BrandGrid';
import BestSellers from '../components/BestSellers';
import CategoryGrid from '../components/CategoryGrid';
import ProductPreview from '../components/ProductPreview';
import Benefits from '../components/Benefits';

const Home = (products) => {




  return (
    <>
      <main className="animate-fade-in">
        <Hero />
        <BrandGrid />
        <BestSellers productss={products} />
        <CategoryGrid />
        <ProductPreview productss={products}/>
        <Benefits />
      </main>
    </>

  );
};

export default Home;