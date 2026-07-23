const App = () => (
  <>
    <SiteHeader />
    <Hero />
    {/* <InstallerMarquee />, hidden for now */}
    <AboutIntro />
    <FenceCategories />
    <ProductMarquee />
    <WhyWFS />
    <GateSystems />
    {/* <ProjectGallery />, hidden for now */}
    <Testimonials />
    <FAQ />
    <ServiceAreas />
    <FinalCTA />
    <Footer />
  </>
);
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
