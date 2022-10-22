import {
  HeroSection,
  FeaturePrompt,
  Footer,
  HomeProducts,
  Newsletter,
  ProductsGallery,
  StatSection,
} from "../Pages/index";

function Home() {
  return (
    <div className="hero py-16 bg-gray-50">
      <HeroSection />
      <StatSection />
      <FeaturePrompt />
      <ProductsGallery />
      <HomeProducts />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
