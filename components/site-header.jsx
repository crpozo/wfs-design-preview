/* Unified site header — matches the wireframe header */

const SiteHeader = ({ active, lang = 'EN' }) => {
  const [curLang, setCurLang] = React.useState(lang);
  const [curMode, setCurMode] = useMode();
  const [openMenu, setOpenMenu] = React.useState(null);

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
    { key: 'aluminum', name: 'Aluminum Fence', tag: 'Mech · Welded', href: 'aluminum.html' },
    { key: 'chainlink', name: 'Chain Link Fence', tag: 'Galv · Vinyl-Coated', href: 'chain-link.html' },
    { key: 'metal', name: 'Metal Fence', tag: 'Aluminum Board Privacy', href: 'metal.html' },
    { key: 'vinyl', name: 'Vinyl Fence', tag: 'Veka-Extruded PVC', href: 'vinyl.html' },
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
      <div style={{ background: 'var(--ink)', borderBottom: '1px solid rgba(255,255,255,0.08)', color: 'var(--alice-blue)' }}>
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
          <nav style={{ display: 'flex', gap: 26, alignItems: 'center' }}
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

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 10 }}>
            <a href="estimate.html" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '12px 18px', border: '1px solid var(--ink)',
              fontSize: 14, fontWeight: 500, color: 'var(--ink)', background: 'var(--white)',
              transition: 'all 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--tangerine)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--white)'; }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 13 L11 4 L13 6 L4 15 L2 15 Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="miter"/>
              </svg>
              Draw My Fence
            </a>
            <a href="estimate.html" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '12px 22px', background: 'var(--ink)',
              fontSize: 14, fontWeight: 500, color: 'var(--white)',
              transition: 'background 0.15s',
              position: 'relative',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--indigo-blue)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--ink)'; }}>
              <span style={{
                width: 7, height: 7, borderRadius: '50%', background: '#22c55e',
                boxShadow: '0 0 0 3px rgba(34,197,94,0.25)',
              }}/>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.4"/>
                <path d="M3 14 C3 11 5.5 10 8 10 C10.5 10 13 11 13 14" stroke="currentColor" strokeWidth="1.4"/>
              </svg>
              Live Agent
            </a>
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
                          ? 'Same wholesale floor for fence companies and homeowners across SW Florida.'
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
