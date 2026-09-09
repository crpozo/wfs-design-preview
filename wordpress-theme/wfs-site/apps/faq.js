const App = () => (
  <>
    <SiteHeader active="Fence Education Hub" />
    <FaqHero />
    <FaqTopics />
    <FaqCTA />
    <Footer />
  </>
);
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
