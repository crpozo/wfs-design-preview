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
      position: 'sticky', top: 0, zIndex: 50,
      background: scrolled ? 'rgba(252,246,240,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(0,16,17,0.08)' : '1px solid transparent',
      transition: 'all 0.2s ease',
    }}>
      <div className="container" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        paddingTop: 18, paddingBottom: 18, gap: 24,
      }}>
        <Logo />
        <nav style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          {[['Products', 'products.html'], ['Solutions', 'solutions.html'], ['Projects', 'projects.html'], ['Resources', 'resources.html'], ['About', 'about.html']].map(([l, href]) => (
            <a key={l} href={href} style={{
              fontSize: 14, letterSpacing: '0.01em', fontWeight: 500, color: 'var(--ink)',
            }}>{l}</a>
          ))}
        </nav>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <button className="btn btn-ghost" style={{ padding: '10px 16px', fontSize: 13 }}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5"/><path d="M11 11 L14 14" stroke="currentColor" strokeWidth="1.5"/></svg>
            Search
          </button>
          <button className="btn btn-dark" style={{ padding: '12px 18px', fontSize: 13 }}>
            Request Quote <ArrowRight />
          </button>
        </div>
      </div>
    </header>
  );
};

const Hero = () => {
  const t = useT();
  const [mode, setMode] = useMode();

  return (
    <section className="wfs-hero" style={{
      position: 'relative',
      color: 'var(--white)',
      overflow: 'hidden',
      minHeight: '78vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
    }}>
      {/* Full-bleed photo backdrop — WFS showroom */}
      <img src="assets/Showroom.png" alt="" aria-hidden="true"
        onError={e => { if (!e.currentTarget.dataset.fb) { e.currentTarget.dataset.fb = '1'; e.currentTarget.src = 'assets/wfs-shop.webp'; } }}
        style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        objectFit: 'cover', objectPosition: 'center 52%', zIndex: 0,
      }}/>
      {/* Dark scrim — strong on left, lighter on right */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(95deg, rgba(16,24,48,0.92) 0%, rgba(16,24,48,0.78) 38%, rgba(20,30,55,0.45) 68%, rgba(20,30,55,0.28) 100%)',
      }}/>
      {/* Bottom fade for fence-card band */}
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0, height: '50%', zIndex: 1,
        background: 'linear-gradient(180deg, rgba(20,30,55,0) 0%, rgba(20,30,55,0.4) 60%, rgba(20,30,55,0.75) 100%)',
      }}/>

      {/* Main content */}
      <div style={{
        position: 'relative', zIndex: 2,
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 72, paddingBottom: 40,
      }}>
        <div className="container" style={{ width: '100%' }}>
          <div style={{ maxWidth: 640, width: '100%' }}>
          {/* Thin accent bar */}
          <div aria-hidden style={{
            width: 56, height: 4, background: 'var(--tangerine)',
            marginBottom: 28, borderRadius: 2,
          }}/>
          <h1 style={{
            margin: '0 0 20px',
            fontFamily: 'var(--display)',
            fontVariationSettings: "'wdth' 100",
            fontWeight: 800,
            fontSize: 'clamp(34px, 3.8vw, 56px)',
            lineHeight: 1.04,
            letterSpacing: '-0.015em',
            textTransform: 'uppercase',
            color: 'var(--white)',
            textShadow: '0 2px 28px rgba(0,0,0,0.28)',
          }}>
            {t('Fence materials,', 'Material de cercas,')}<br/>
            <span style={{ color: 'var(--tangerine)' }}>{t('factory direct.', 'directo de fábrica.')}</span>
          </h1>

          <p style={{
            fontSize: 16,
            lineHeight: 1.55,
            maxWidth: 480,
            margin: '0 0 34px',
            color: 'rgba(255,255,255,0.85)',
          }}>
            {t(
              'SW Florida supplier — not an installer. Stocked in Fort Myers.',
              'Proveedor del suroeste de Florida — no instaladores. En stock en Fort Myers.'
            )}
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="homeowners.html" onClick={() => setMode('HOMEOWNER')}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 12,
                padding: '16px 26px', borderRadius: 999,
                background: 'var(--tangerine)', color: 'var(--white)',
                fontFamily: 'var(--sans)', fontSize: 15, fontWeight: 600,
                letterSpacing: '0.01em',
                boxShadow: '0 8px 24px rgba(231,114,53,0.35)',
                transition: 'transform 0.18s, box-shadow 0.18s, background 0.18s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(231,114,53,0.45)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(231,114,53,0.35)'; }}
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
                display: 'inline-flex', alignItems: 'center', gap: 12,
                padding: '16px 26px', borderRadius: 999,
                background: 'rgba(255,255,255,0.08)', color: 'var(--white)',
                border: '1px solid rgba(255,255,255,0.55)',
                backdropFilter: 'blur(6px)',
                fontFamily: 'var(--sans)', fontSize: 15, fontWeight: 600,
                letterSpacing: '0.01em',
                transition: 'background 0.18s, border-color 0.18s',
              }}
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
