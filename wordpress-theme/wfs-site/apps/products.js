const App = () => (
  <>
    <SiteHeader active="Fences" />
    <ProductsHero />
    <FenceCategories />
    <ProductHardware />
    <GateSystems />
    <FeaturedGrid />
    <ProductsCTA />
    <Footer />
  </>
);
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
