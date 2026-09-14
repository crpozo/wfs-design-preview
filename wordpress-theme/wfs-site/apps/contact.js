const App = () => (
  <>
    <SiteHeader active="Company" />
    <ContactHero />
    <FinalCTA />
    <Footer />
  </>
);
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
