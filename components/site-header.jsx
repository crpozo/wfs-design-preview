/* Unified site header — matches the wireframe header */

const SiteHeader = ({ active, lang = 'EN' }) => {
  const [curLang, setCurLang] = React.useState(lang);
  const [curMode, setCurMode] = useMode();
  const [openMenu, setOpenMenu] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mobileExpanded, setMobileExpanded] = React.useState(null);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const NAV = [
    ['Fences', { kind: 'mega-fences' }],
    ['Gates', { kind: 'mega-gates' }],
    ['Warranty', { kind: 'list', items: [
      ['Lifetime Warranty', 'resources.html', 'Coverage details, what\'s included'],
      ['Warranty Claims', 'estimate.html', 'Submit a claim · 24h response'],
      ['Manufacturer Specs', 'resources.html', 'PDF spec sheets'],
    ]}],
    ['Get a Quote', { kind: 'list', items: [
      ['Request Estimate', 'estimate.html', 'Send measurements, get pricing in 24h'],
      ['Draw My Fence', 'estimate.html', 'Sketch your layout right in the browser'],
      ['Talk to a Live Agent', 'estimate.html', 'Mon–Fri · Fort Myers + Port Charlotte'],
    ]}],
    ['Company', { kind: 'list', items: [
      ['About WFS', 'about.html', 'Family-owned · fabricated in-house'],
      ['Yard Locations', 'solutions.html', '2 yards across SW Florida'],
      ['Projects', 'projects.html', 'Recent installs from Cape Coral to Naples'],
      ['Contact', 'estimate.html', 'Phone, email, hours by yard'],
    ]}],
    ['Fence Education Hub', { kind: 'list', items: [
      ['Articles & Guides', 'resources.html', 'Picking the right fence the first time'],
      ['FAQ', 'resources.html', 'The questions we get every week'],
      ['Materials Comparison', 'resources.html', 'Aluminum vs Vinyl vs Chain Link'],
      ['Florida Pool Code', 'resources.html', 'Code-compliant enclosure profiles'],
    ]}],
  ];

  const FENCE_TILES = [
    { key: 'aluminum', name: 'Aluminum', tag: 'Mech · Welded', href: 'aluminum.html' },
    { key: 'chainlink', name: 'Chain Link', tag: 'Galv · Vinyl-Coated', href: 'chain-link.html' },
    { key: 'metal', name: 'Metal / DuraFence', tag: 'Aluminum Board Privacy', href: 'metal.html' },
    { key: 'vinyl', name: 'Vinyl / PVC', tag: 'Veka-Extruded PVC', href: 'vinyl.html' },
    { key: 'ecfence', name: 'ecFence', tag: 'Galv Steel · HVHZ', href: 'ecfence.html' },
  ];

  const GATE_TILES = [
    { key: 'aluminum', name: 'Single Walk Gates', tag: 'Mechanical or welded', href: 'estimate.html' },
    { key: 'metal', name: 'Double Drive Gates', tag: 'Up to 16 ft welded', href: 'estimate.html' },
    { key: 'vinyl', name: 'Custom Estate Gates', tag: 'Fabricated in-house', href: 'estimate.html' },
    { key: 'chainlink', name: 'Chain Link Gates', tag: 'Welded + hardware kit', href: 'estimate.html' },
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
          gap: 32, padding: '10px 0', fontFamily: 'var(--mono)', fontSize: 11,
          letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700,
        }}>
          {/* Left: mode toggle + catalog link */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            {/* Mode toggle — dot indicator, no fill */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 18 }}>
              {['HOMEOWNER', 'CONTRACTOR'].map((m) => {
                const active = curMode === m;
                return (
                  <button key={m} onClick={() => setCurMode(m)} style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: 0, background: 'transparent',
                    fontFamily: 'inherit', fontSize: 11, fontWeight: 700,
                    letterSpacing: '0.18em', textTransform: 'uppercase',
                    color: active ? 'var(--white)' : 'rgba(219,233,238,0.55)',
                    cursor: 'pointer',
                  }}>
                    <span style={{
                      width: 6, height: 6, borderRadius: '50%',
                      background: active ? 'var(--tangerine)' : 'transparent',
                      border: active ? 'none' : '1px solid rgba(219,233,238,0.4)',
                    }}/>
                    {m}
                  </button>
                );
              })}
            </div>
            <span style={{ width: 1, height: 14, background: 'rgba(255,255,255,0.15)' }}/>
            <a href="products.html" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              color: 'var(--alice-blue)', textDecoration: 'none',
            }}>
              Full Catalog
              <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square"/>
              </svg>
            </a>
          </div>

          {/* Center: featured CTA with tangerine rule */}
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
            Draw your fence — get started
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
            {/* Lang — same dot pattern */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 14 }}>
              {['EN', 'ES'].map((l) => {
                const active = curLang === l;
                return (
                  <button key={l} onClick={() => setCurLang(l)} style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    padding: 0, background: 'transparent',
                    fontFamily: 'inherit', fontSize: 11, fontWeight: 700,
                    letterSpacing: '0.18em', textTransform: 'uppercase',
                    color: active ? 'var(--white)' : 'rgba(219,233,238,0.55)',
                    cursor: 'pointer',
                  }}>
                    <span style={{
                      width: 5, height: 5, borderRadius: '50%',
                      background: active ? 'var(--tangerine)' : 'transparent',
                      border: active ? 'none' : '1px solid rgba(219,233,238,0.4)',
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
      <div style={{ borderBottom: '1px solid var(--ink)', background: 'var(--white)' }}>
        <div className="container" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 24, padding: '14px 0',
        }}>
          {/* Logo block */}
          <a href="Homepage.html" style={{
            display: 'inline-flex', alignItems: 'center',
            padding: '6px 4px',
          }}>
            <img src="assets/wfs-logo.svg" alt="Western Fence Supply" style={{ height: 40, width: 'auto', display: 'block' }}/>
          </a>

          {/* Nav */}
          <nav className="wfs-desktop-nav" style={{ display: 'flex', gap: 26, alignItems: 'center' }}
            onMouseLeave={() => setOpenMenu(null)}>
            {NAV.map(([label, def]) => (
              <div key={label} style={{ position: 'static' }}
                onMouseEnter={() => setOpenMenu(label)}>
                <button style={{
                  display: 'inline-flex', alignItems: 'center',
                  fontSize: 15, fontWeight: 500,
                  color: openMenu === label ? 'var(--laser-blue)' : 'var(--ink)',
                  background: 'transparent', cursor: 'pointer', padding: '8px 0',
                  borderBottom: (active === label || openMenu === label) ? '2px solid var(--tangerine)' : '2px solid transparent',
                  transition: 'color 0.15s, border-color 0.15s',
                }}>
                  {label} <Caret />
                </button>
              </div>
            ))}
          </nav>

          {/* CTAs — match the editorial pill + mono-rule pattern used across the page */}
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
                <path d="M2 13 L11 4 L13 6 L4 15 L2 15 Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="miter"/>
              </svg>
              Draw My Fence
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
              Live Agent
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

            {/* Hamburger — visible only on tablet/mobile */}
            <button
              className="wfs-mobile-trigger"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
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

        {/* Mobile menu — slides down from top */}
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
          {/* Top bar */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '14px 20px',
            borderBottom: '1px solid rgba(0,16,17,0.12)',
          }}>
            <img src="assets/wfs-logo.svg" alt="Western Fence Supply" style={{ height: 32, width: 'auto' }}/>
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu" style={{
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

          {/* Mode toggle */}
          <div style={{
            padding: '20px',
            borderBottom: '1px solid rgba(0,16,17,0.08)',
            display: 'flex', alignItems: 'center', gap: 22,
          }}>
            {['HOMEOWNER', 'CONTRACTOR'].map((m) => {
              const isActive = curMode === m;
              return (
                <button key={m} onClick={() => setCurMode(m)} className="mono" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: 0, background: 'transparent',
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: isActive ? 'var(--ink)' : 'var(--charcoal)',
                  cursor: 'pointer',
                }}>
                  <span style={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: isActive ? 'var(--tangerine)' : 'transparent',
                    border: isActive ? 'none' : '1px solid rgba(0,16,17,0.3)',
                  }}/>
                  {m}
                </button>
              );
            })}
          </div>

          {/* Nav list with expandable sub-items */}
          <nav style={{ flex: 1, padding: '8px 0' }}>
            {NAV.map(([label, def]) => {
              const isExpanded = mobileExpanded === label;
              const fallbackHref = def.kind === 'mega-fences' ? 'products.html'
                : def.kind === 'mega-gates' ? 'estimate.html'
                : def.items && def.items[0] ? def.items[0][1] : '#';
              return (
                <div key={label} style={{
                  borderBottom: '1px solid rgba(0,16,17,0.08)',
                }}>
                  <button onClick={() => setMobileExpanded(isExpanded ? null : label)} style={{
                    width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '18px 20px', background: 'transparent',
                    fontFamily: 'var(--sans)', fontSize: 18, fontWeight: 500,
                    color: 'var(--ink)', textAlign: 'left', cursor: 'pointer',
                  }}>
                    {label}
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
                      {def.items.map(([l, href, sub], i) => (
                        <a key={i} href={href} style={{
                          display: 'block', padding: '14px 20px 14px 36px',
                          borderTop: '1px solid rgba(0,16,17,0.06)',
                          fontSize: 14, color: 'var(--ink)',
                        }}>
                          <div style={{ fontWeight: 500 }}>{l}</div>
                          {sub && <div style={{ fontSize: 12, color: 'var(--charcoal)', marginTop: 2 }}>{sub}</div>}
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
                      View all {def.kind === 'mega-fences' ? 'fence' : 'gate'} systems →
                    </a>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Footer: phone + lang */}
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
              Call (239) 689-5496
            </a>
            <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
              {['EN', 'ES'].map((l) => {
                const isActive = curLang === l;
                return (
                  <button key={l} onClick={() => setCurLang(l)} className="mono" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: 0, background: 'transparent',
                    fontSize: 11, fontWeight: 700, letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: isActive ? 'var(--ink)' : 'var(--charcoal)',
                    cursor: 'pointer',
                  }}>
                    <span style={{
                      width: 5, height: 5, borderRadius: '50%',
                      background: isActive ? 'var(--tangerine)' : 'transparent',
                      border: isActive ? 'none' : '1px solid rgba(0,16,17,0.3)',
                    }}/>
                    {l}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mega menu panel */}
        {openMenu && (() => {
          const def = NAV.find(([l]) => l === openMenu)[1];
          const navIdx = NAV.findIndex(([l]) => l === openMenu);
          return (
            <div onMouseEnter={() => setOpenMenu(openMenu)} onMouseLeave={() => setOpenMenu(null)} style={{
              position: 'absolute', left: 0, right: 0, top: '100%',
              background: 'var(--white)',
              borderTop: '1px solid rgba(0,16,17,0.06)',
              borderBottom: '1px solid var(--ink)',
              boxShadow: '0 24px 40px -16px rgba(0,16,17,0.18)',
              animation: 'wfsFadeDown 0.18s ease',
            }}>
              <div className="container" style={{ padding: '40px 0 48px' }}>
                {def.kind === 'mega-fences' || def.kind === 'mega-gates' ? (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 4fr', gap: 56 }}>
                    <div>
                      <span className="eyebrow" style={{ color: 'var(--laser-blue)' }}>
                        0{navIdx + 1} — {def.kind === 'mega-fences' ? 'By material' : 'By gate type'}
                      </span>
                      <h3 className="display" style={{ fontSize: 36, lineHeight: 0.98, margin: '14px 0 16px', maxWidth: 240 }}>
                        {def.kind === 'mega-fences' ? 'Four systems,\none yard.' : 'Welded\nin-house.'}
                      </h3>
                      <p style={{ fontSize: 14, lineHeight: 1.5, color: 'var(--charcoal)', maxWidth: 240, margin: '0 0 20px' }}>
                        {def.kind === 'mega-fences'
                          ? 'Supplier-direct pricing for contractors, homeowners and DIY projects across SW Florida.'
                          : 'Sized to fit your run. Quoted in 24h, delivered or shop-pickup.'}
                      </p>
                      <a href={def.kind === 'mega-fences' ? 'products.html' : 'estimate.html'}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontWeight: 500, fontSize: 14, color: 'var(--ink)' }}>
                        {def.kind === 'mega-fences' ? 'Full catalog' : 'Custom quote'} <ArrowRight size={12}/>
                      </a>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12 }}>
                      {(def.kind === 'mega-fences' ? FENCE_TILES : GATE_TILES).map((t, i) => (
                        <a key={i} href={t.href} style={{
                          position: 'relative', aspectRatio: '4/5',
                          borderRadius: 'var(--radius)',
                          overflow: 'hidden', display: 'block',
                          border: '1px solid rgba(0,16,17,0.06)',
                          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 18px 40px -20px rgba(0,16,17,0.25)'; }}
                        onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                          <img src={FENCE_IMG[t.key]} alt={t.name}
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
                            <div className="display" style={{ fontSize: 17, lineHeight: 1.1, marginBottom: 6 }}>{t.name}</div>
                            <div className="eyebrow" style={{ fontSize: 10, color: 'var(--alice-blue)' }}>{t.tag}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: 56 }}>
                    <div>
                      <span className="eyebrow" style={{ color: 'var(--laser-blue)' }}>
                        0{navIdx + 1} — {openMenu}
                      </span>
                      <h3 className="display" style={{ fontSize: 36, margin: '14px 0 0', lineHeight: 0.98, maxWidth: 240 }}>
                        {openMenu === 'Warranty' && 'Backed by\nthe maker.'}
                        {openMenu === 'Get a Quote' && 'Three ways\nto start.'}
                        {openMenu === 'Company' && 'About\nthe yard.'}
                        {openMenu === 'Fence Education Hub' && 'Pick the\nright fence.'}
                      </h3>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0, borderTop: '1px solid rgba(0,16,17,0.08)' }}>
                      {def.items.map(([l, href, sub], i) => (
                        <a key={i} href={href} style={{
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
                            <span style={{ fontSize: 17, fontWeight: 500, color: 'var(--ink)' }}>{l}</span>
                          </div>
                          <div style={{ fontSize: 13, color: 'var(--charcoal)', paddingLeft: 28, lineHeight: 1.45 }}>{sub}</div>
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
