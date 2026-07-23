const App = () => (
  <>
    <SiteHeader active="Company" />
    <LocationsHero />
    <LocationsYards />
    <LocationsPickup />
    <LocationsCTA />
    <Footer />
  </>
);
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
