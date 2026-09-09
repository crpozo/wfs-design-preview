const App = () => (
  <>
    <SiteHeader active="Fence Education Hub" />
    <ResourcesHero />
    <ResourceArticles />
    <MaterialsComparison />
    <PoolCodeSection />
    <FAQ />
    <DownloadsSection />
    <ResourcesCTA />
    <Footer />
  </>
);
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
