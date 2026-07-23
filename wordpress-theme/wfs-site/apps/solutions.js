const App = () => (
  <>
    <SiteHeader />
    <SolutionsHero />
    <SolutionsAudiences />
    <div id="yards">
      <ServiceAreas />
    </div>
    <SolutionsCTA />
    <Footer />
  </>
);
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
