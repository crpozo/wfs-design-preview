const App = () => (
  <>
    <SiteHeader active="Fence Education Hub" />
    <MaterialsCompHero />
    <MaterialsComparison />
    <MaterialsCompDeepDive />
    <MaterialsCompCTA />
    <Footer />
  </>
);
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
