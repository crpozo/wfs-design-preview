/* Nav + Hero */

const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50, background: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent', backdropFilter: scrolled ? 'blur(10px)' : 'none', borderBottom: scrolled ? '1px solid rgba(0,16,17,0.08)' : '1px solid transparent', transition: 'all 0.2s ease', }}>
      <div className="container" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 18, paddingBottom: 18, gap: 24, }}>
        <Logo />
        <nav style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          {[['Products', 'products.html'], ['Solutions', 'solutions.html'], ['Projects', 'projects.html'], ['Resources', 'resources.html'], ['About', 'about.html']].map(([l, href]) => (
            <a key={l} href={href} style={{
              fontSize: 15.5, letterSpacing: '0.01em', fontWeight: 500, color: 'var(--ink)', }}>{l}</a>
          ))}
        </nav>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <button className="btn btn-ghost" style={{ padding: '10px 16px', fontSize: 14.5 }}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5"/><path d="M11 11 L14 14" stroke="currentColor" strokeWidth="1.5"/></svg>
            Search
          </button>
          <button className="btn btn-dark" style={{ padding: '12px 18px', fontSize: 14.5 }}>
            Request Quote <ArrowRight />
          </button>
        </div>
      </div>
    </header>
  );
};

/* Banner de campaña del chat, solo en la portada.
 *
 * Va entre la cabecera y el hero, a todo el ancho. El boton "Talk to a live
 * agent" de la barra superior ya abre el chat, pero es una pastilla pequeña
 * entre otras cinco cosas; esto es una franja que no se puede no ver.
 *
 * Abre el MISMO chat que el resto del sitio (tawk.to) via openLiveChat, y
 * ademas es un enlace de verdad a contact.html: si el widget no ha cargado o
 * el navegador lo bloquea, el clic sigue llevando a alguien con quien hablar
 * en vez de no hacer nada.
 */
const ChatBanner = () => {
  const t = useT();
  return (
    <a className="wfs-chatbanner" href="contact.html" onClick={openLiveChat}>
      {/* Alineado al mismo container que el logo y el titular del hero: suelto
          a todo el ancho, el texto no cuadraba con nada de la pagina. */}
      <span className="container wfs-chatbanner__in">
        <span className="wfs-chatbanner__txt">
          {t('New & Improved ChatBot: Chat with a real person NOW!',
             'ChatBot nuevo y mejorado: habla con una persona real AHORA')}
        </span>
        <span className="wfs-chatbanner__cta">
          <span className="wfs-chatbanner__cta-txt">{t('Start chatting', 'Empezar a chatear')}</span>
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.7"
                  strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </span>
    </a>
  );
};

const Hero = () => {
  const t = useT();
  const [mode, setMode] = useMode();
  const videoRef = React.useRef(null);

  // Ensure the background video autoplays even when it's served from cache
  // (in that case `canplay` can fire before React attaches a handler, so we
  // also call play() directly on mount and keep the loop alive on any pause).
  React.useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const tryPlay = () => { const p = v.play(); if (p) p.catch(() => {}); };
    tryPlay();
    v.addEventListener('loadeddata', tryPlay);
    v.addEventListener('pause', tryPlay);
    return () => {
      v.removeEventListener('loadeddata', tryPlay);
      v.removeEventListener('pause', tryPlay);
    };
  }, []);

  return (
    <section className="wfs-hero" style={{
      position: 'relative', color: 'var(--white)', overflow: 'hidden', minHeight: '78vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', }}>
      {/* Full-bleed video backdrop, WFS yard walkthrough. The poster is the
          video's own first frame, so playback starts with no visible swap. */}
      <video
        ref={videoRef}
        src="assets/second-video.mp4?v=279"
        poster="assets/second-video-poster.jpg?v=245"
        autoPlay muted loop playsInline preload="auto"
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', zIndex: 0, }}
      />
      {/* Dark scrim, strong on left, lighter on right */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(95deg, rgba(38, 49, 103,0.82) 0%, rgba(38, 49, 103,0.66) 38%, rgba(38, 49, 103,0.38) 68%, rgba(38, 49, 103,0.22) 100%)', }}/>
      {/* Bottom fade for fence-card band */}
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0, height: '50%', zIndex: 1, background: 'linear-gradient(180deg, rgba(38, 49, 103,0) 0%, rgba(38, 49, 103,0.35) 60%, rgba(38, 49, 103,0.7) 100%)', }}/>
      {/* Soft dissolve into the next section so the hero doesn't end on a
          hard edge. Sits below the content layer (z-index 1 vs 2) so the
          headline and buttons stay crisp. Colour is set in CSS so it can
          match the section below at each breakpoint. */}
      <div aria-hidden className="wfs-hero-fade" style={{
        position: 'absolute', left: 0, right: 0, bottom: 0, height: 'clamp(30px, 3.6vh, 52px)', zIndex: 1, pointerEvents: 'none', }}/>

      {/* Main content */}
      <div style={{
        position: 'relative', zIndex: 2, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: 72, paddingBottom: 40, }}>
        <div className="container" style={{ width: '100%' }}>
          <div style={{ maxWidth: 720, width: '100%' }}>
          {/* Eyebrow */}
          <div className="mono" style={{
            display: 'inline-flex', alignItems: 'center', gap: 14, marginBottom: 24, fontSize: 'clamp(12px, 1.1vw, 13px)', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)', }}>
            <span aria-hidden style={{ width: 34, height: 3, background: 'var(--tangerine)', borderRadius: 2 }}/>
            {t('Factory direct fence supply · Fort Myers + Port Charlotte, FL', 'Suministro de cercas directo de fábrica · Fort Myers + Port Charlotte, FL')}
          </div>
          <h1 style={{
            margin: '0 0 22px', fontFamily: 'var(--display)', fontVariationSettings: "'wdth' 125", fontWeight: 800, fontSize: 'clamp(34px, 4.2vw, 56px)', lineHeight: 1.02, letterSpacing: '-0.02em', textTransform: 'uppercase', color: 'var(--white)', textShadow: '0 2px 28px rgba(0,0,0,0.28)', }}>
            {t('The Best Place to Buy Fences in', 'El mejor lugar para comprar cercas en el')}{' '}
            <span style={{ color: 'var(--blue-ice)' }}>{t('Southwest Florida', 'suroeste de Florida')}</span>
          </h1>

          <p style={{
            fontSize: 17.5, lineHeight: 1.55, maxWidth: 480, margin: '0 0 34px', color: 'rgba(255,255,255,0.85)', }}>
            {t(
              "We're a one stop fence supply shop selling superior fences and gates at wholesale prices.", 'Somos una tienda integral de suministro de cercas que vende cercas y portones superiores a precios mayoristas.'
            )}
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="homeowners.html" onClick={() => setMode('HOMEOWNER')}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 12, padding: '16px 26px', borderRadius: 999, background: 'var(--tangerine)', color: 'var(--white)', fontFamily: 'var(--sans)', fontSize: 16.5, fontWeight: 600, letterSpacing: '0.01em', boxShadow: '0 8px 24px rgba(255, 113, 51,0.35)', transition: 'transform 0.18s, box-shadow 0.18s, background 0.18s', }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(255, 113, 51,0.45)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 113, 51,0.35)'; }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 11 L12 4 L21 11"/>
                <path d="M5 10 V20 H19 V10"/>
              </svg>
              {t("I'm a Homeowner", 'Soy propietario')}
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
            </a>
            <a href="contractors.html" onClick={() => setMode('CONTRACTOR')}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 12, padding: '16px 26px', borderRadius: 999, background: 'rgba(255,255,255,0.08)', color: 'var(--white)', border: '1px solid rgba(255,255,255,0.55)', backdropFilter: 'blur(6px)', fontFamily: 'var(--sans)', fontSize: 16.5, fontWeight: 600, letterSpacing: '0.01em', transition: 'background 0.18s, border-color 0.18s', }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.18)'; e.currentTarget.style.borderColor = 'var(--white)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.55)'; }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 14 Q5 7 12 7 Q19 7 19 14"/>
                <path d="M3 14 H21 V17 H3 Z"/>
              </svg>
              {t("I'm a Contractor", 'Soy contratista')}
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
            </a>
          </div>
        </div>
        </div>
      </div>

    </section>
  );
};

Object.assign(window, { Nav, Hero });
