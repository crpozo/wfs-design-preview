const App = () => (
  <>
    <SiteHeader active="Company" />
    <AboutHero />
    <AboutStory />
    <AboutValues />
    <AboutShop />
    <Testimonials />
    <AboutCTA />
    <Footer />
  </>
);
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
