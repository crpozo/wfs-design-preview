const App = () => (
  <>
    <SiteHeader active="Company" />
    <AreasHero />
    <AreasIntro />
    <AreasSouthwest />
    <AreasFlorida />
    <LocationsPickup />
    <AreasMaterials />
    <AreasCTA />
    <Footer />
  </>
);
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
