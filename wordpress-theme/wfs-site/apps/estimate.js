const App = () => (
  <>
    <SiteHeader active="Get a Quote" />
    <EstimateHero />
    <LiveAgentBand />
    <div id="form">
      <FinalCTA />
    </div>
    <Footer />
  </>
);
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
