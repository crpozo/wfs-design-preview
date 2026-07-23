const App = () => (
  <>
    <SiteHeader active="Fence Education Hub" />
    <PoolCodeHero />
    <PoolCodeRequirements />
    <PoolCodeProfiles />
    <PoolCodeChecklist />
    <PoolCodeCTA />
    <Footer />
  </>
);
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
