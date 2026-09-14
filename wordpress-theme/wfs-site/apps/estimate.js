const App = () => (
  <>
    <SiteHeader active="Get a Quote" />
    <QuoteFlow />
    <Footer />
  </>
);
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
