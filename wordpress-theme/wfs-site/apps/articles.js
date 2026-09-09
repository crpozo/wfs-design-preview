const App = () => (
  <>
    <SiteHeader active="Fence Education Hub" />
    <ArticlesHero />
    <ArticlesFeatured />
    <ArticlesGrid />
    <Footer />
  </>
);
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
