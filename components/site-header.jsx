/* Unified site header — matches the wireframe header */

const SiteHeader = ({ active }) => {
  const t = useT();
  const [curLang, setCurLang] = useLang();
  const [curMode, setCurMode] = useMode();
  const [openMenu, setOpenMenu] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mobileExpanded, setMobileExpanded] = React.useState(null);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // NAV: id stays stable (used by `active` prop). label + items get translated.
  const NAV = [
    { id: 'Fences', label: { EN: 'Fences', ES: 'Cercas' }, def: { kind: 'mega-fences' } },
    { id: 'Gates',  label: { EN: 'Gates',  ES: 'Portones' }, def: { kind: 'mega-gates' } },
    { id: 'Full Catalog', label: { EN: 'Full Catalog', ES: 'Catálogo completo' }, def: { kind: 'link', href: 'products.html' } },
    { id: 'Get a Quote', label: { EN: 'Get a Quote', ES: 'Cotizar' }, def: { kind: 'list', items: [
      { label: { EN: 'Request Estimate',     ES: 'Pedir estimado' },        href: 'estimate.html', sub: { EN: 'Send measurements, get pricing in 24h',   ES: 'Envía medidas, recibe precios en 24h' } },
      { label: { EN: 'Talk to a Live Agent', ES: 'Hablar con un agente' },  href: 'estimate.html', sub: { EN: 'Mon–Fri · Fort Myers + Port Charlotte',   ES: 'Lun–Vie · Fort Myers + Port Charlotte' } },
      { label: { EN: 'Call (239) 689-5496',  ES: 'Llamar (239) 689-5496' }, href: 'tel:2396895496', sub: { EN: 'Avg pickup under 18s in business hours', ES: 'Tiempo medio de respuesta: 18s en horario' } },
    ]}},
    { id: 'Company', label: { EN: 'Company', ES: 'Empresa' }, def: { kind: 'list', items: [
      { label: { EN: 'About WFS',       ES: 'Sobre WFS' },         href: 'about.html',     sub: { EN: 'Family-owned · fabricated in-house',            ES: 'Familiar · fabricado en planta' } },
      { label: { EN: 'Yard Locations',  ES: 'Sucursales' },        href: 'solutions.html', sub: { EN: '2 yards across SW Florida',                     ES: '2 sucursales en el suroeste de FL' } },
      { label: { EN: 'Projects',        ES: 'Proyectos' },         href: 'projects.html',  sub: { EN: 'Recent installs from Cape Coral to Naples',     ES: 'Instalaciones de Cape Coral a Naples' } },
      { label: { EN: 'Warranty',        ES: 'Garantía' },          href: 'warranty.html',  sub: { EN: 'Lifetime coverage · submit a claim',            ES: 'Cobertura de por vida · envía un reclamo' } },
      { label: { EN: 'Contact',         ES: 'Contacto' },          href: 'estimate.html',  sub: { EN: 'Phone, email, hours by yard',                   ES: 'Teléfono, email, horarios por sucursal' } },
    ]}},
    { id: 'Fence Education Hub', label: { EN: 'Fence Education Hub', ES: 'Centro Educativo' }, def: { kind: 'list', items: [
      { label: { EN: 'Articles & Guides',     ES: 'Artículos y guías' },           href: 'articles.html',              sub: { EN: 'Picking the right fence the first time',   ES: 'Elige la cerca correcta a la primera' } },
      { label: { EN: 'FAQ',                    ES: 'Preguntas frecuentes' },       href: 'faq.html',                   sub: { EN: 'The questions we get every week',          ES: 'Las preguntas que recibimos cada semana' } },
      { label: { EN: 'Materials Comparison',  ES: 'Comparativa de materiales' },   href: 'materials-comparison.html',  sub: { EN: 'Aluminum vs Vinyl vs Chain Link vs Metal', ES: 'Aluminio vs Vinilo vs Malla vs Metal' } },
      { label: { EN: 'Florida Pool Code',     ES: 'Código de piscinas FL' },       href: 'pool-code.html',             sub: { EN: 'Code-compliant enclosure profiles',         ES: 'Perfiles de cerramiento según código' } },
    ]}},
  ];

  const FENCE_TILES = [
    { key: 'aluminum',  name: { EN: 'Aluminum',          ES: 'Aluminio' },          tag: { EN: 'Mech · Welded',          ES: 'Mecánico · Soldado' },      href: 'aluminum.html' },
    { key: 'chainlink', name: { EN: 'Chain Link',        ES: 'Malla ciclónica' },   tag: { EN: 'Galv · Vinyl-Coated',    ES: 'Galv · Recubierto vinilo' }, href: 'chain-link.html' },
    { key: 'metal',     name: { EN: 'Metal / DuraFence', ES: 'Metal / DuraFence' }, tag: { EN: 'Aluminum Board Privacy', ES: 'Privacidad de tabla aluminio' }, href: 'metal.html' },
    { key: 'vinyl',     name: { EN: 'Vinyl / PVC',       ES: 'Vinilo / PVC' },      tag: { EN: 'Veka-Extruded PVC',      ES: 'PVC extruido Veka' },       href: 'vinyl.html' },
    { key: 'ecfence',   name: { EN: 'ecFence',           ES: 'ecFence' },           tag: { EN: 'Galv Steel · HVHZ',      ES: 'Acero galv · HVHZ' },       href: 'ecfence.html' },
  ];

  const GATE_TILES = [
    { key: 'aluminum',  name: { EN: 'Single Swing', ES: 'Batiente sencillo' },   tag: { EN: 'Walk + entry gates', ES: 'Peatonal + entrada' },       href: 'gate-single.html' },
    { key: 'metal',     name: { EN: 'Double Swing', ES: 'Batiente doble' },      tag: { EN: 'Driveway access',    ES: 'Acceso vehicular' },          href: 'gate-double.html' },
    { key: 'vinyl',     name: { EN: 'Sliding',      ES: 'Corredizo' },           tag: { EN: 'Track-mounted',      ES: 'Sobre riel' },                href: 'gate-sliding.html' },
    { key: 'chainlink', name: { EN: 'Cantilever',   ES: 'Cantilever' },          tag: { EN: 'No-ground-track',    ES: 'Sin riel en piso' },          href: 'gate-cantilever.html' },
    { key: 'ecfence',   name: { EN: 'Rolling',      ES: 'Rodante industrial' },  tag: { EN: 'Industrial V-track', ES: 'V-track industrial' },        href: 'gate-rolling.html' },
  ];

  const Caret = () => (
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" style={{ marginLeft: 4 }}>
      <path d="M3 4.5 L6 7.5 L9 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square"/>
    </svg>
  );

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 60, background: 'var(--white)' }}>
      <style>{`
        @keyframes wfsFadeDown { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
      {/* Utility bar */}
      <div className="wfs-utility-bar" style={{ background: 'var(--ink)', borderBottom: '1px solid rgba(255,255,255,0.08)', color: 'var(--alice-blue)' }}>
        <div className="container" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 32, paddingTop: 10, paddingBottom: 10, fontFamily: 'var(--mono)', fontSize: 11,
          letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700,
        }}>
          {/* Left: mode toggle + catalog link */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            {/* Mode toggle — dot indicator */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 18 }}>
              {[
                { key: 'HOMEOWNER',  label: { EN: 'HOMEOWNER',  ES: 'PROPIETARIO' } },
                { key: 'CONTRACTOR', label: { EN: 'CONTRACTOR', ES: 'CONTRATISTA' } },
              ].map((m) => {
                const isActive = curMode === m.key;
                return (
                  <button key={m.key} onClick={() => setCurMode(m.key)} style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: 0, background: 'transparent',
                    fontFamily: 'inherit', fontSize: 11, fontWeight: 700,
                    letterSpacing: '0.18em', textTransform: 'uppercase',
                    color: isActive ? 'var(--white)' : 'rgba(219,233,238,0.55)',
                    cursor: 'pointer',
                  }}>
                    <span style={{
                      width: 6, height: 6, borderRadius: '50%',
                      background: isActive ? 'var(--tangerine)' : 'transparent',
                      border: isActive ? 'none' : '1px solid rgba(219,233,238,0.4)',
                    }}/>
                    {t(m.label)}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Center: featured CTA */}
          <a href="estimate.html" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            color: 'var(--white)',
            paddingBottom: 4,
            borderBottom: '1px solid var(--tangerine)',
          }}>
            <span style={{
              width: 5, height: 5, borderRadius: '50%',
              background: 'var(--tangerine)',
            }}/>
            {t('Get a quote — 24h turnaround', 'Cotiza — respuesta en 24h')}
            <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square"/>
            </svg>
          </a>

          {/* Right: phone + lang toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <a href="tel:2396895496" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              color: 'var(--alice-blue)', textDecoration: 'none',
            }}>
              <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M3 3h3l1.5 4-2 1c1 2 2.5 3.5 4.5 4.5l1-2 4 1.5v3c0 0.5-0.5 1-1 1C8 16 0 8 0 4c0-0.5 0.5-1 1-1z" transform="translate(0.5,0)"/>
              </svg>
              (239) 689-5496
            </a>
            <span style={{ width: 1, height: 14, background: 'rgba(255,255,255,0.15)' }}/>
            {/* Lang toggle */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 14 }}>
              {['EN', 'ES'].map((l) => {
                const isActive = curLang === l;
                return (
                  <button key={l} onClick={() => setCurLang(l)} style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    padding: 0, background: 'transparent',
                    fontFamily: 'inherit', fontSize: 11, fontWeight: 700,
                    letterSpacing: '0.18em', textTransform: 'uppercase',
                    color: isActive ? 'var(--white)' : 'rgba(219,233,238,0.55)',
                    cursor: 'pointer',
                  }}>
                    <span style={{
                      width: 5, height: 5, borderRadius: '50%',
                      background: isActive ? 'var(--tangerine)' : 'transparent',
                      border: isActive ? 'none' : '1px solid rgba(219,233,238,0.4)',
                    }}/>
                    {l}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        onMouseLeave={() => setOpenMenu(null)}
        style={{ borderBottom: '1px solid var(--ink)', background: 'var(--white)' }}>
        <div className="container" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 24, paddingTop: 14, paddingBottom: 14,
        }}>
          {/* Logo */}
          <a href="Homepage.html" style={{
            display: 'inline-flex', alignItems: 'center',
            padding: '6px 4px',
          }}>
            <img src="assets/wfs-logo.svg" alt="Western Fence Supply" style={{ height: 40, width: 'auto', display: 'block' }}/>
          </a>

          {/* Nav */}
          <nav className="wfs-desktop-nav" style={{ display: 'flex', gap: 26, alignItems: 'center' }}>
            {NAV.map(({ id, label, def }) => (
              def.kind === 'link' ? (
                <a key={id} href={def.href}
                  onMouseEnter={() => setOpenMenu(null)}
                  style={{
                    display: 'inline-flex', alignItems: 'center',
                    fontSize: 15, fontWeight: 500,
                    color: active === id ? 'var(--laser-blue)' : 'var(--ink)',
                    textDecoration: 'none', padding: '8px 0',
                    borderBottom: active === id ? '2px solid var(--tangerine)' : '2px solid transparent',
                    transition: 'color 0.15s, border-color 0.15s',
                  }}>
                  {t(label)}
                </a>
              ) : (
                <div key={id} style={{ position: 'static' }}
                  onMouseEnter={() => setOpenMenu(id)}>
                  <button style={{
                    display: 'inline-flex', alignItems: 'center',
                    fontSize: 15, fontWeight: 500,
                    color: openMenu === id ? 'var(--laser-blue)' : 'var(--ink)',
                    background: 'transparent', cursor: 'pointer', padding: '8px 0',
                    borderBottom: (active === id || openMenu === id) ? '2px solid var(--tangerine)' : '2px solid transparent',
                    transition: 'color 0.15s, border-color 0.15s',
                  }}>
                    {t(label)} <Caret />
                  </button>
                </div>
              )
            ))}
          </nav>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
            <a href="estimate.html" className="mono wfs-hide-tablet" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '8px 0',
              fontSize: 11, fontWeight: 700,
              letterSpacing: '0.22em', textTransform: 'uppercase',
              color: 'var(--ink)',
              borderBottom: '1px solid var(--ink)',
            }}>
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M3 3 H13 V13 H3 Z M3 6 H13 M6 3 V13" stroke="currentColor" strokeWidth="1.4"/>
              </svg>
              {t('Request Estimate', 'Pedir estimado')}
            </a>
            <a href="estimate.html" style={{
              display: 'inline-flex', alignItems: 'center', gap: 12,
              padding: '8px 8px 8px 18px',
              borderRadius: 999,
              background: 'var(--ink)', color: 'var(--white)',
              fontFamily: 'var(--mono)',
              fontSize: 11, fontWeight: 700,
              letterSpacing: '0.22em', textTransform: 'uppercase',
              transition: 'background 0.2s ease, transform 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#0f1832'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.transform = 'none'; }}>
              <span style={{
                width: 6, height: 6, borderRadius: '50%', background: '#22c55e',
                boxShadow: '0 0 0 3px rgba(34,197,94,0.25)',
              }}/>
              {t('Live Agent', 'Agente en vivo')}
              <span style={{
                width: 26, height: 26, borderRadius: '50%',
                background: 'var(--tangerine)', color: 'var(--ink)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="square"/>
                </svg>
              </span>
            </a>

            {/* Hamburger */}
            <button
              className="wfs-mobile-trigger"
              onClick={() => setMobileOpen(true)}
              aria-label={t('Open menu', 'Abrir menú')}
              style={{
                display: 'none',
                width: 42, height: 42,
                alignItems: 'center', justifyContent: 'center',
                background: 'transparent',
                border: '1px solid var(--ink)',
                cursor: 'pointer',
              }}>
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                <path d="M0 1h18M0 7h18M0 13h18" stroke="var(--ink)" strokeWidth="1.6"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="wfs-mobile-menu" style={{
          position: 'fixed', inset: 0,
          background: 'var(--white)',
          zIndex: 100,
          display: 'none',
          flexDirection: 'column',
          transform: mobileOpen ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.3s ease',
          overflowY: 'auto',
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '14px 20px',
            borderBottom: '1px solid rgba(0,16,17,0.12)',
          }}>
            <img src="assets/wfs-logo.svg" alt="Western Fence Supply" style={{ height: 32, width: 'auto' }}/>
            <button onClick={() => setMobileOpen(false)} aria-label={t('Close menu', 'Cerrar menú')} style={{
              flexShrink: 0,
              width: 44, height: 44,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: 0,
              background: '#1a2548',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
            }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 3 L15 15 M15 3 L3 15" stroke="#ff7133" strokeWidth="2" strokeLinecap="square"/>
              </svg>
            </button>
          </div>

          {/* Mode select (mobile) — pick a mode, page reloads in that mode */}
          <div style={{
            padding: '20px',
            borderBottom: '1px solid rgba(0,16,17,0.08)',
            display: 'flex', gap: 12,
          }}>
            {[
              { key: 'HOMEOWNER',  label: { EN: "I'm a homeowner",  ES: 'Soy propietario' } },
              { key: 'CONTRACTOR', label: { EN: "I'm a contractor", ES: 'Soy contratista' } },
            ].map((m) => {
              const isActive = curMode === m.key;
              return (
                <button key={m.key}
                  onClick={() => { setCurMode(m.key); window.location.reload(); }}
                  className="mono" style={{
                    flex: 1,
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                    padding: '14px 12px',
                    background: isActive ? 'var(--ink)' : 'var(--white)',
                    color: isActive ? 'var(--white)' : 'var(--ink)',
                    border: `1px solid ${isActive ? 'var(--ink)' : 'rgba(0,16,17,0.25)'}`,
                    fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
                    textTransform: 'uppercase', lineHeight: 1.3,
                    cursor: 'pointer',
                  }}>
                  <span style={{
                    flexShrink: 0,
                    width: 6, height: 6, borderRadius: '50%',
                    background: isActive ? 'var(--tangerine)' : 'rgba(0,16,17,0.3)',
                  }}/>
                  {t(m.label)}
                </button>
              );
            })}
          </div>

          {/* Nav list (mobile) */}
          <nav style={{ flex: 1, padding: '8px 0' }}>
            {NAV.map(({ id, label, def }) => {
              if (def.kind === 'link') {
                return (
                  <div key={id} style={{ borderBottom: '1px solid rgba(0,16,17,0.08)' }}>
                    <a href={def.href} style={{
                      width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '18px 20px',
                      fontFamily: 'var(--sans)', fontSize: 18, fontWeight: 500,
                      color: 'var(--ink)', textDecoration: 'none',
                    }}>
                      {t(label)}
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square"/>
                      </svg>
                    </a>
                  </div>
                );
              }
              const isExpanded = mobileExpanded === id;
              const fallbackHref = def.kind === 'mega-fences' ? 'products.html'
                : def.kind === 'mega-gates' ? 'estimate.html'
                : def.items && def.items[0] ? def.items[0].href : '#';
              return (
                <div key={id} style={{
                  borderBottom: '1px solid rgba(0,16,17,0.08)',
                }}>
                  <button onClick={() => setMobileExpanded(isExpanded ? null : id)} style={{
                    width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '18px 20px', background: 'transparent',
                    fontFamily: 'var(--sans)', fontSize: 18, fontWeight: 500,
                    color: 'var(--ink)', textAlign: 'left', cursor: 'pointer',
                  }}>
                    {t(label)}
                    {def.items ? (
                      <span style={{
                        width: 28, height: 28,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: isExpanded ? 'var(--tangerine)' : 'transparent',
                        border: `1px solid ${isExpanded ? 'var(--tangerine)' : 'rgba(0,16,17,0.2)'}`,
                        color: 'var(--ink)',
                      }}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square"/>
                          {!isExpanded && <path d="M6 2v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square"/>}
                        </svg>
                      </span>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square"/>
                      </svg>
                    )}
                  </button>
                  {def.items && (
                    <div style={{
                      maxHeight: isExpanded ? 500 : 0,
                      overflow: 'hidden',
                      transition: 'max-height 0.3s ease',
                      background: '#faf9f7',
                    }}>
                      {def.items.map((it, i) => (
                        <a key={i} href={it.href} style={{
                          display: 'block', padding: '14px 20px 14px 36px',
                          borderTop: '1px solid rgba(0,16,17,0.06)',
                          fontSize: 14, color: 'var(--ink)',
                        }}>
                          <div style={{ fontWeight: 500 }}>{t(it.label)}</div>
                          {it.sub && <div style={{ fontSize: 12, color: 'var(--charcoal)', marginTop: 2 }}>{t(it.sub)}</div>}
                        </a>
                      ))}
                    </div>
                  )}
                  {(def.kind === 'mega-fences' || def.kind === 'mega-gates') && isExpanded && (
                    <a href={fallbackHref} style={{
                      display: 'block', padding: '14px 20px 14px 36px',
                      borderTop: '1px solid rgba(0,16,17,0.06)',
                      background: '#faf9f7',
                      fontSize: 14, color: 'var(--ink)', fontWeight: 500,
                    }}>
                      {def.kind === 'mega-fences'
                        ? t('View all fence systems →', 'Ver todos los sistemas de cerca →')
                        : t('View all gate systems →',  'Ver todos los sistemas de portón →')}
                    </a>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Mobile footer: phone + lang */}
          <div style={{
            padding: '20px',
            borderTop: '1px solid rgba(0,16,17,0.12)',
            display: 'flex', flexDirection: 'column', gap: 16,
          }}>
            <a href="tel:2396895496" style={{
              display: 'inline-flex', alignItems: 'center', gap: 14,
              padding: '14px 16px',
              background: 'var(--ink)', color: 'var(--white)',
              fontFamily: 'var(--mono)', fontSize: 13, fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase',
            }}>
              <span style={{
                width: 7, height: 7, borderRadius: '50%', background: '#22c55e',
                boxShadow: '0 0 0 3px rgba(34,197,94,0.25)',
              }}/>
              {t('Call (239) 689-5496', 'Llamar (239) 689-5496')}
            </a>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span className="mono" style={{
                fontSize: 10, fontWeight: 700, letterSpacing: '0.22em',
                textTransform: 'uppercase', color: 'var(--charcoal)',
              }}>{t('Language', 'Idioma')}</span>
              <div style={{ display: 'flex', gap: 12 }}>
                {[
                  { code: 'EN', label: 'English' },
                  { code: 'ES', label: 'Español' },
                ].map((l) => {
                  const isActive = curLang === l.code;
                  return (
                    <button key={l.code} onClick={() => setCurLang(l.code)} className="mono" style={{
                      flex: 1,
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                      padding: '13px 12px',
                      background: isActive ? 'var(--ink)' : 'var(--white)',
                      color: isActive ? 'var(--white)' : 'var(--ink)',
                      border: `1px solid ${isActive ? 'var(--ink)' : 'rgba(0,16,17,0.25)'}`,
                      fontSize: 12, fontWeight: 700, letterSpacing: '0.14em',
                      textTransform: 'uppercase', cursor: 'pointer',
                    }}>
                      <span style={{
                        flexShrink: 0,
                        width: 6, height: 6, borderRadius: '50%',
                        background: isActive ? 'var(--tangerine)' : 'rgba(0,16,17,0.3)',
                      }}/>
                      {l.code}
                      <span style={{ fontWeight: 500, letterSpacing: '0.03em', textTransform: 'none', opacity: 0.75 }}>
                        · {l.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Mega menu panel */}
        {openMenu && (() => {
          const navItem = NAV.find(n => n.id === openMenu);
          const def = navItem.def;
          const navIdx = NAV.findIndex(n => n.id === openMenu);
          return (
            <div onMouseEnter={() => setOpenMenu(openMenu)} onMouseLeave={() => setOpenMenu(null)} style={{
              position: 'absolute', left: 0, right: 0, top: '100%',
              background: 'var(--white)',
              borderTop: '1px solid rgba(0,16,17,0.06)',
              borderBottom: '1px solid var(--ink)',
              boxShadow: '0 24px 40px -16px rgba(0,16,17,0.18)',
              animation: 'wfsFadeDown 0.18s ease',
            }}>
              <div className="container" style={{ paddingTop: 40, paddingBottom: 48 }}>
                {def.kind === 'mega-fences' || def.kind === 'mega-gates' ? (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 4fr', gap: 56 }}>
                    <div>
                      <span className="eyebrow" style={{ color: 'var(--laser-blue)' }}>
                        0{navIdx + 1} — {def.kind === 'mega-fences' ? t('By material', 'Por material') : t('By gate type', 'Por tipo de portón')}
                      </span>
                      <h3 className="display" style={{ fontSize: 36, lineHeight: 0.98, margin: '14px 0 16px', maxWidth: 240 }}>
                        {def.kind === 'mega-fences'
                          ? t('Four systems,\none yard.', 'Cuatro sistemas,\nuna sucursal.')
                          : t('Welded\nin-house.',         'Soldados\nen planta.')}
                      </h3>
                      <p style={{ fontSize: 14, lineHeight: 1.5, color: 'var(--charcoal)', maxWidth: 240, margin: '0 0 20px' }}>
                        {def.kind === 'mega-fences'
                          ? t('Supplier-direct pricing for contractors, homeowners and DIY projects across SW Florida.',
                              'Precios directos de fábrica para contratistas, propietarios y proyectos DIY en el suroeste de Florida.')
                          : t('Sized to fit your run. Quoted in 24h, delivered or shop-pickup.',
                              'A la medida de tu proyecto. Cotizado en 24h, entrega o recoge en planta.')}
                      </p>
                      <a href={def.kind === 'mega-fences' ? 'products.html' : 'estimate.html'}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontWeight: 500, fontSize: 14, color: 'var(--ink)' }}>
                        {def.kind === 'mega-fences' ? t('Full catalog', 'Catálogo completo') : t('Custom quote', 'Cotización a medida')} <ArrowRight size={12}/>
                      </a>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12 }}>
                      {(def.kind === 'mega-fences' ? FENCE_TILES : GATE_TILES).map((tile, i) => (
                        <a key={i} href={tile.href} style={{
                          position: 'relative', aspectRatio: '4/5',
                          borderRadius: 'var(--radius)',
                          overflow: 'hidden', display: 'block',
                          border: '1px solid rgba(0,16,17,0.06)',
                          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 18px 40px -20px rgba(0,16,17,0.25)'; }}
                        onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                          <img src={FENCE_IMG[tile.key]} alt={t(tile.name)}
                            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}/>
                          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,16,17,0) 35%, rgba(0,16,17,0.85) 100%)' }}/>
                          <div style={{
                            position: 'absolute', top: 12, left: 12,
                            fontFamily: 'var(--sans)', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em',
                            color: 'var(--ink)', background: 'var(--tangerine)',
                            padding: '4px 8px', borderRadius: 3,
                          }}>
                            0{i + 1}
                          </div>
                          <div style={{ position: 'absolute', bottom: 14, left: 14, right: 14, color: 'var(--white)' }}>
                            <div className="display" style={{ fontSize: 17, lineHeight: 1.1, marginBottom: 6 }}>{t(tile.name)}</div>
                            <div className="eyebrow" style={{ fontSize: 10, color: 'var(--alice-blue)' }}>{t(tile.tag)}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: 56 }}>
                    <div>
                      <span className="eyebrow" style={{ color: 'var(--laser-blue)' }}>
                        0{navIdx + 1} — {t(navItem.label)}
                      </span>
                      <h3 className="display" style={{ fontSize: 36, margin: '14px 0 0', lineHeight: 0.98, maxWidth: 240 }}>
                        {openMenu === 'Get a Quote' && t('Three ways\nto start.','Tres maneras\nde empezar.')}
                        {openMenu === 'Company' && t('About\nthe yard.',         'Sobre\nla empresa.')}
                        {openMenu === 'Fence Education Hub' && t('Pick the\nright fence.', 'Elige la\ncerca correcta.')}
                      </h3>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0, borderTop: '1px solid rgba(0,16,17,0.08)' }}>
                      {def.items.map((it, i) => (
                        <a key={i} href={it.href} style={{
                          display: 'block', padding: '20px 22px',
                          borderBottom: '1px solid rgba(0,16,17,0.08)',
                          borderRight: i % 2 === 0 ? '1px solid rgba(0,16,17,0.08)' : 'none',
                          transition: 'background 0.15s',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = '#fafafa'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
                            <span className="eyebrow" style={{ color: 'var(--tangerine)', fontSize: 10 }}>
                              0{i + 1}
                            </span>
                            <span style={{ fontSize: 17, fontWeight: 500, color: 'var(--ink)' }}>{t(it.label)}</span>
                          </div>
                          <div style={{ fontSize: 13, color: 'var(--charcoal)', paddingLeft: 28, lineHeight: 1.45 }}>{t(it.sub)}</div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })()}
      </div>
    </header>
  );
};

Object.assign(window, { SiteHeader });
