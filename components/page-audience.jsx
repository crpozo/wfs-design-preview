/* Homeowner + Contractor landing pages — entered from the homepage hero buttons */

/* ───────────────────────────── HOMEOWNER ───────────────────────────── */

const HomeownerHero = () => (
  <section style={{
    background: 'var(--white)',
    minHeight: 'calc(100svh - 80px)',
    padding: '40px 0',
    display: 'flex', alignItems: 'center',
    position: 'relative', overflow: 'hidden',
  }}>
    {/* Faint dotted grid texture behind */}
    <div aria-hidden style={{
      position: 'absolute', inset: 0,
      backgroundImage: 'radial-gradient(rgba(26,37,72,0.06) 1px, transparent 1px)',
      backgroundSize: '24px 24px',
      maskImage: 'radial-gradient(ellipse at center, #000 0%, transparent 70%)',
      WebkitMaskImage: 'radial-gradient(ellipse at center, #000 0%, transparent 70%)',
      pointerEvents: 'none',
    }}/>
    <div className="container" style={{ position: 'relative', maxWidth: 1280, width: '100%' }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '1.2fr 1fr',
        gap: 64, alignItems: 'center',
      }}>
        {/* Left — copy */}
        <div>
          <span className="mono" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '7px 14px', marginBottom: 22,
            border: '1px solid var(--ink)',
            background: 'var(--white)',
            fontSize: 10, fontWeight: 700, letterSpacing: '0.22em',
            textTransform: 'uppercase', color: 'var(--ink)',
          }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--tangerine)' }}/>
            Homeowner · Built for residential
          </span>
          <h1 className="display" style={{
            margin: '0 0 22px',
            fontSize: 'clamp(38px, 4.8vw, 72px)',
            lineHeight: 0.96, letterSpacing: '-0.025em',
            color: 'var(--ink)',
          }}>
            Fence solutions<br/>
            <span style={{ color: 'var(--tangerine)' }}>for your home.</span>
          </h1>
          <p className="mono" style={{
            margin: '0 0 26px',
            maxWidth: 520,
            fontSize: 14, lineHeight: 1.65,
            color: 'var(--charcoal)',
          }}>
            Enhance your property's value, privacy, and security with premium manufacturing-direct fencing. We help you plan the project and connect you with certified installers for the build.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 26 }}>
            <a href="estimate.html" style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              padding: '15px 30px',
              background: 'var(--ink)', color: 'var(--white)',
              fontFamily: 'var(--sans)', fontSize: 12, fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              boxShadow: '6px 6px 0 var(--tangerine)',
              transition: 'transform 0.18s ease, box-shadow 0.18s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-2px, -2px)'; e.currentTarget.style.boxShadow = '8px 8px 0 var(--tangerine)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '6px 6px 0 var(--tangerine)'; }}>
              Get Started
            </a>
            <a href="projects.html" style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              padding: '15px 30px',
              background: 'var(--white)', color: 'var(--ink)',
              border: '1.5px solid var(--ink)',
              fontFamily: 'var(--sans)', fontSize: 12, fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase',
            }}>
              View Gallery
            </a>
          </div>
          {/* Trust micro-bullets */}
          <div className="mono" style={{
            display: 'flex', gap: 22, flexWrap: 'wrap',
            fontSize: 10.5, fontWeight: 700, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: 'var(--charcoal)',
          }}>
            {['No minimums', 'Free takeoff', 'Supplier-direct floor'].map((t) => (
              <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8 L7 12 L13 4" stroke="var(--tangerine)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right — homeowner visual: illustrated home scene + benefits */}
        <div style={{ position: 'relative', aspectRatio: '5 / 6', maxHeight: 'calc(100svh - 160px)' }}>
          {/* Outer ink frame */}
          <div style={{
            position: 'absolute', inset: 0,
            border: '1.5px solid var(--ink)',
            background: '#fafafa',
          }}/>
          {/* Tangerine offset shadow plate */}
          <div aria-hidden style={{
            position: 'absolute', inset: '12px -12px -12px 12px',
            background: 'var(--tangerine)', zIndex: -1,
          }}/>

          {/* Illustration: Florida home + fence + palm + sun */}
          <div style={{
            position: 'absolute', top: 24, left: 24, right: 24,
            height: '52%',
            overflow: 'hidden',
            border: '1px solid rgba(26,37,72,0.18)',
            background: '#fafafa',
          }}>
            <svg viewBox="0 0 400 280" preserveAspectRatio="xMidYMid meet"
                 style={{ width: '100%', height: '100%', display: 'block' }}>
              {/* Sky wash */}
              <rect width="400" height="220" fill="#fafafa"/>
              {/* Grass band */}
              <rect x="0" y="220" width="400" height="60" fill="#eef0e8"/>

              {/* Sun */}
              <circle cx="345" cy="55" r="20" fill="var(--tangerine)" opacity="0.95"/>
              <g stroke="var(--tangerine)" strokeWidth="1.8" strokeLinecap="round" opacity="0.85">
                <line x1="345" y1="22" x2="345" y2="14"/>
                <line x1="378" y1="55" x2="386" y2="55"/>
                <line x1="322" y1="32" x2="316" y2="26"/>
                <line x1="368" y1="32" x2="374" y2="26"/>
                <line x1="322" y1="78" x2="316" y2="84"/>
              </g>

              {/* Palm tree */}
              <g stroke="var(--ink)" strokeWidth="1.8" strokeLinecap="round" fill="none">
                {/* Trunk */}
                <path d="M62 222 Q60 180 64 140"/>
                {/* Fronds */}
                <path d="M64 138 Q42 122 22 130"/>
                <path d="M64 138 Q86 122 106 132"/>
                <path d="M64 138 Q50 116 38 100"/>
                <path d="M64 138 Q78 116 92 102"/>
                <path d="M64 138 Q64 116 60 100"/>
              </g>

              {/* House */}
              <g fill="none" stroke="var(--ink)" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round">
                {/* Roof */}
                <path d="M168 138 L246 86 L324 138" />
                {/* Body */}
                <rect x="178" y="138" width="136" height="86" fill="var(--white)"/>
                {/* Chimney */}
                <rect x="278" y="100" width="14" height="22" fill="var(--white)"/>
                {/* Windows */}
                <rect x="194" y="156" width="26" height="26" fill="#eef0e8"/>
                <line x1="207" y1="156" x2="207" y2="182" strokeWidth="1.2"/>
                <line x1="194" y1="169" x2="220" y2="169" strokeWidth="1.2"/>
                <rect x="272" y="156" width="26" height="26" fill="#eef0e8"/>
                <line x1="285" y1="156" x2="285" y2="182" strokeWidth="1.2"/>
                <line x1="272" y1="169" x2="298" y2="169" strokeWidth="1.2"/>
                {/* Door */}
                <rect x="233" y="178" width="26" height="46" fill="var(--tangerine)" stroke="var(--ink)"/>
                <circle cx="254" cy="202" r="1.4" fill="var(--ink)"/>
              </g>

              {/* Fence — vinyl pickets foreground */}
              <g stroke="var(--ink)" strokeWidth="1.6" strokeLinecap="round">
                {/* Top horizontal rail */}
                <line x1="14" y1="246" x2="386" y2="246"/>
                {/* Bottom horizontal rail */}
                <line x1="14" y1="272" x2="386" y2="272"/>
                {/* Vertical pickets */}
                {Array.from({ length: 24 }).map((_, i) => {
                  const x = 14 + i * 16;
                  return (
                    <g key={i}>
                      <line x1={x} y1="236" x2={x} y2="280" />
                      {/* Picket cap */}
                      <path d={`M${x - 3} 236 L${x} 232 L${x + 3} 236`} fill="none"/>
                    </g>
                  );
                })}
              </g>
            </svg>
          </div>

          {/* Bottom card — what you'll love */}
          <div style={{
            position: 'absolute', bottom: 24, left: 24, right: 24,
            border: '1px solid rgba(26,37,72,0.18)',
            background: 'var(--white)',
            padding: '20px 22px',
          }}>
            <div className="mono" style={{
              fontSize: 9.5, fontWeight: 700, letterSpacing: '0.22em',
              color: 'var(--tangerine)', textTransform: 'uppercase',
              marginBottom: 14,
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--tangerine)' }}/>
              Why homeowners pick WFS
            </div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 11 }}>
              {[
                ['Privacy around the backyard',
                  (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 L19 6 V12 Q19 17 12 21 Q5 17 5 12 V6 Z"/></svg>)],
                ['Curb appeal that lifts home value',
                  (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21 V11 L12 5 L20 11 V21 Z"/><path d="M10 21 V15 H14 V21"/></svg>)],
                ['Pool-code & HOA compliant',
                  (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 14 Q6 12 9 14 Q12 16 15 14 Q18 12 21 14"/><path d="M3 19 Q6 17 9 19 Q12 21 15 19 Q18 17 21 19"/><circle cx="16" cy="6" r="2.4"/></svg>)],
              ].map(([line, icon], i) => (
                <li key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                }}>
                  <span style={{
                    flexShrink: 0,
                    width: 28, height: 28,
                    border: '1.5px solid var(--ink)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--tangerine)',
                  }}>{icon}</span>
                  <span className="mono" style={{
                    fontSize: 12.5, fontWeight: 500, color: 'var(--ink)',
                    lineHeight: 1.3,
                  }}>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ───── Trust strip — 4 stats anchoring the hero ───── */

const HomeownerTrustStrip = () => (
  <section style={{
    background: 'var(--white)',
    borderTop: '1px solid rgba(26,37,72,0.1)',
    borderBottom: '1px solid rgba(26,37,72,0.1)',
    padding: '32px 0',
  }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
        {[
          ['22+',  'Years family-owned'],
          ['2',    'Yards · FM + PC'],
          ['480+', 'Active SKUs'],
          ['24h',  'Quote turnaround'],
        ].map(([n, l], i) => (
          <div key={l} style={{
            paddingLeft: i === 0 ? 0 : 24,
            borderLeft: i === 0 ? 'none' : '1px solid rgba(26,37,72,0.1)',
          }}>
            <div className="display" style={{
              fontSize: 'clamp(32px, 3.6vw, 48px)', lineHeight: 1,
              color: 'var(--ink)', letterSpacing: '-0.02em',
            }}>{n}</div>
            <div className="mono" style={{
              marginTop: 10, fontSize: 11, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: 'var(--charcoal)',
              fontWeight: 700,
            }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ───── How it works — 6 steps with circle icons ───── */

const HomeownerSteps = () => {
  const StepIcon = ({ n, children }) => (
    <div style={{
      position: 'relative',
      width: 96, height: 96,
      margin: '0 auto 28px',
    }}>
      {/* Outer tangerine ring */}
      <div style={{
        position: 'absolute', inset: 0, borderRadius: '50%',
        border: '1.5px dashed rgba(255,113,51,0.45)',
      }}/>
      {/* Inner solid circle */}
      <div style={{
        position: 'absolute', inset: 6, borderRadius: '50%',
        background: '#f5f5f5',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: 'var(--ink)',
      }}>{children}</div>
      {/* Number badge */}
      <span className="mono" style={{
        position: 'absolute', bottom: -2, right: -2,
        width: 30, height: 30, borderRadius: '50%',
        background: 'var(--ink)', color: 'var(--white)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 12, fontWeight: 700, letterSpacing: '0',
        border: '3px solid var(--white)',
      }}>{n}</span>
    </div>
  );
  const steps = [
    { n: '1', t: 'Draw Your Fence', body: 'Sketch your layout to visualize the project.',
      svg: (<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19 L7 21 L9 16 L18 7 L21 10 Z"/><path d="M16 9 L19 12"/></svg>) },
    { n: '2', t: 'Get an Estimate', body: 'Use our tools to get a rough idea of the cost.',
      svg: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="5" y="3" width="14" height="18" rx="1"/><rect x="7.5" y="5.5" width="9" height="4"/><circle cx="9" cy="13" r="0.6" fill="currentColor"/><circle cx="12" cy="13" r="0.6" fill="currentColor"/><circle cx="15" cy="13" r="0.6" fill="currentColor"/><circle cx="9" cy="16" r="0.6" fill="currentColor"/><circle cx="12" cy="16" r="0.6" fill="currentColor"/><circle cx="15" cy="16" r="0.6" fill="currentColor"/></svg>) },
    { n: '3', t: 'Book a Visit', body: 'Schedule a time for us to verify measurements.',
      svg: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="5" width="16" height="15" rx="1"/><path d="M4 9 H20"/><line x1="8" y1="3" x2="8" y2="6"/><line x1="16" y1="3" x2="16" y2="6"/></svg>) },
    { n: '4', t: 'Get a Quote', body: 'Receive a final, detailed quote for your project.',
      svg: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 3 H15 L19 7 V21 H7 Z"/><path d="M15 3 V7 H19"/><line x1="9" y1="12" x2="17" y2="12"/><line x1="9" y1="15" x2="17" y2="15"/><line x1="9" y1="18" x2="13" y2="18"/></svg>) },
    { n: '5', t: 'Fabrication', body: 'We manufacture your fence locally to your exact specifications.',
      svg: (<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 21 V11 L9 14 V11 L15 14 V11 L21 14 V21 Z"/><line x1="3" y1="21" x2="21" y2="21"/></svg>) },
    { n: '6', t: 'Certified Installation', body: 'Choose from our WFS-certified installer alliance for professional installation.',
      svg: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3 L19 6 V12 Q19 17 12 21 Q5 17 5 12 V6 Z"/><path d="M9 12 L11 14 L15 10" strokeLinecap="round" strokeLinejoin="round"/></svg>) },
  ];
  return (
    <section style={{ background: '#fafafa', padding: '96px 0 112px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="mono" style={{
            display: 'inline-block',
            marginBottom: 16,
            fontSize: 11, fontWeight: 700, letterSpacing: '0.24em',
            color: 'var(--tangerine)', textTransform: 'uppercase',
          }}>01 — Process</span>
          <h2 className="display" style={{
            margin: 0,
            fontSize: 'clamp(28px, 3.4vw, 44px)',
            lineHeight: 1, letterSpacing: '-0.015em',
            color: 'var(--ink)',
          }}>How it works for homeowners</h2>
        </div>
        <div style={{
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          rowGap: 80, columnGap: 56,
          maxWidth: 1100, margin: '0 auto',
        }}>
          {/* Subtle horizontal connector lines behind row 1 and row 2 */}
          <div aria-hidden style={{
            position: 'absolute', top: 48, left: '12%', right: '12%', height: 1,
            borderTop: '1px dashed rgba(26,37,72,0.18)',
            zIndex: 0, pointerEvents: 'none',
          }}/>
          <div aria-hidden style={{
            position: 'absolute', top: 'calc(50% + 24px)', left: '12%', right: '12%', height: 1,
            borderTop: '1px dashed rgba(26,37,72,0.18)',
            zIndex: 0, pointerEvents: 'none',
          }}/>
          {steps.map(s => (
            <div key={s.n} style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
              <StepIcon n={s.n}>{s.svg}</StepIcon>
              <h3 className="display" style={{
                margin: '0 0 12px',
                fontSize: 17, fontWeight: 700,
                letterSpacing: '-0.005em', color: 'var(--ink)',
                textTransform: 'uppercase',
              }}>{s.t}</h3>
              <p className="mono" style={{
                margin: '0 auto', maxWidth: 280,
                fontSize: 12.5, lineHeight: 1.6,
                color: 'var(--charcoal)',
              }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ───── Popular fence styles for homes ───── */

const HomeownerStylePicker = () => {
  const styles = [
    {
      key: 'vinyl', title: 'Vinyl',
      sub: 'Privacy · Low maintenance',
      copy: 'Best-seller for backyards. UV-stable color, no painting, withstands FL humidity.',
      href: 'vinyl.html',
      Pattern: VinylSVG,
      tag: 'Most popular',
    },
    {
      key: 'aluminum', title: 'Aluminum',
      sub: 'Pool-code · Decorative',
      copy: 'Powder-coated, pool-code compliant, won\'t rust. Clean line of sight for waterfront homes.',
      href: 'aluminum.html',
      Pattern: AluminumSVG,
    },
    {
      key: 'chainlink', title: 'Chain-link',
      sub: 'Pets · Property line',
      copy: 'Budget-friendly perimeter. Galvanized or black vinyl-coated for residential lots.',
      href: 'chain-link.html',
      Pattern: ChainLinkSVG,
    },
    {
      key: 'ecfence', title: 'EC-Fence',
      sub: 'Modern · Horizontal slat',
      copy: 'Architectural board-fence look in aluminum. Spans wide gaps with no posts visible.',
      href: 'ecfence.html',
      Pattern: MetalSVG,
    },
  ];
  return (
    <section style={{ background: 'var(--white)', padding: '96px 0 88px' }}>
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 48, alignItems: 'end', marginBottom: 48,
        }}>
          <div>
            <span className="mono" style={{
              display: 'inline-block', marginBottom: 16,
              fontSize: 11, fontWeight: 700, letterSpacing: '0.24em',
              color: 'var(--tangerine)', textTransform: 'uppercase',
            }}>02 — Styles</span>
            <h2 className="display" style={{
              margin: 0, fontSize: 'clamp(28px, 3.4vw, 44px)',
              lineHeight: 1, letterSpacing: '-0.015em', color: 'var(--ink)',
            }}>Find the style<br/>that fits your home</h2>
          </div>
          <p className="mono" style={{
            margin: 0, maxWidth: 460, justifySelf: 'end', textAlign: 'right',
            fontSize: 13, lineHeight: 1.7, color: 'var(--charcoal)',
          }}>
            Four residential systems we manufacture in-house — pick the one that matches your priorities for privacy, code, or curb appeal.
          </p>
        </div>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 18,
        }}>
          {styles.map(s => (
            <a key={s.key} href={s.href} style={{
              display: 'flex', flexDirection: 'column',
              border: '1.5px solid var(--ink)',
              background: 'var(--white)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '8px 8px 0 var(--tangerine)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
              {/* Pattern preview */}
              <div style={{
                position: 'relative',
                aspectRatio: '5 / 4',
                background: '#f5f5f5',
                borderBottom: '1.5px solid var(--ink)',
                overflow: 'hidden',
              }}>
                <s.Pattern color="#1a2548" opacity={0.55}/>
                {s.tag && (
                  <span className="mono" style={{
                    position: 'absolute', top: 12, left: 12,
                    padding: '5px 10px',
                    background: 'var(--tangerine)', color: 'var(--white)',
                    fontSize: 9, fontWeight: 700, letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                  }}>{s.tag}</span>
                )}
              </div>
              {/* Body */}
              <div style={{ padding: '22px 22px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 className="display" style={{
                  margin: '0 0 6px', fontSize: 20,
                  letterSpacing: '-0.01em', color: 'var(--ink)',
                }}>{s.title}</h3>
                <div className="mono" style={{
                  fontSize: 10.5, fontWeight: 700, letterSpacing: '0.18em',
                  textTransform: 'uppercase', color: 'var(--tangerine)',
                  marginBottom: 12,
                }}>{s.sub}</div>
                <p className="mono" style={{
                  margin: '0 0 18px', fontSize: 12.5, lineHeight: 1.6,
                  color: 'var(--charcoal)', flex: 1,
                }}>{s.copy}</p>
                <span className="mono" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.18em',
                  textTransform: 'uppercase', color: 'var(--ink)',
                }}>
                  Explore <ArrowRight size={12}/>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ───── Two cards: Certified Installer Alliance + What You Get ───── */

const HomeownerInstallerSplit = () => {
  const HoverCard = ({ children, theme, ...rest }) => {
    const dark = theme === 'dark';
    return (
      <article
        {...rest}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = dark ? '0 18px 36px rgba(0,0,0,0.35)' : '12px 12px 0 var(--tangerine)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = dark ? '0 8px 18px rgba(0,0,0,0.2)' : '8px 8px 0 rgba(255,113,51,0.85)'; }}
        style={{
          background: dark ? 'var(--ink)' : 'var(--white)',
          color: dark ? 'var(--white)' : 'var(--ink)',
          border: dark ? 'none' : '1.5px solid var(--ink)',
          padding: '40px 44px 36px',
          display: 'flex', flexDirection: 'column',
          boxShadow: dark ? '0 8px 18px rgba(0,0,0,0.2)' : '8px 8px 0 rgba(255,113,51,0.85)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        }}
      >{children}</article>
    );
  };

  return (
    <section style={{ background: '#fafafa', padding: '96px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="mono" style={{
            display: 'inline-block', marginBottom: 16,
            fontSize: 11, fontWeight: 700, letterSpacing: '0.24em',
            color: 'var(--tangerine)', textTransform: 'uppercase',
          }}>03 — Installation</span>
          <h2 className="display" style={{
            margin: 0, fontSize: 'clamp(28px, 3.4vw, 44px)',
            lineHeight: 1, letterSpacing: '-0.015em', color: 'var(--ink)',
          }}>WFS supplies. Certified installers build.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, maxWidth: 1200, margin: '0 auto', alignItems: 'stretch' }}>
          {/* Left — Certified Installer Alliance (white) */}
          <HoverCard theme="light">
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              marginBottom: 28,
            }}>
              <span className="mono" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '6px 12px',
                background: 'var(--ink)', color: 'var(--white)',
                fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase',
              }}>Alliance</span>
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 3 L19 6 V12 Q19 17 12 21 Q5 17 5 12 V6 Z"/>
                <path d="M9 12 L11 14 L15 10" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="display" style={{
              margin: '0 0 18px',
              fontSize: 'clamp(22px, 2.2vw, 30px)',
              lineHeight: 1.05, letterSpacing: '-0.01em',
            }}>Certified Installer Alliance</h3>
            <p className="mono" style={{
              margin: '0 0 26px',
              fontSize: 13, lineHeight: 1.7, color: 'var(--charcoal)',
            }}>
              WFS does not offer DIY installation. We connect homeowners with certified installation partners who know our products, hardware, and finish standards.
            </p>
            <ul style={{ listStyle: 'none', margin: '0 0 32px', padding: 0, display: 'grid', gap: 12 }}>
              {[
                'WFS-aligned independent installers',
                'Product-aware installation practices',
                'Clean handoff from quote to installation',
              ].map(line => (
                <li key={line} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 3 }}>
                    <path d="M3 8 L7 12 L13 4" stroke="var(--tangerine)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="mono" style={{ fontSize: 12.5, lineHeight: 1.55, color: 'var(--ink)' }}>{line}</span>
                </li>
              ))}
            </ul>
            <a href="estimate.html" style={{
              display: 'block', textAlign: 'center', marginTop: 'auto',
              padding: '16px 28px',
              background: 'var(--ink)', color: 'var(--white)',
              fontFamily: 'var(--sans)', fontSize: 12.5, fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase',
            }}>Find an Installer</a>
          </HoverCard>

          {/* Right — What You Get (black) */}
          <HoverCard theme="dark">
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              marginBottom: 28,
            }}>
              <span className="mono" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '6px 12px',
                background: 'var(--tangerine)', color: 'var(--ink)',
                fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase',
              }}>What you get</span>
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="9" strokeDasharray="2 1.5"/>
                <path d="M9 12 L11 14 L15 10" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="0"/>
              </svg>
            </div>
            <h3 className="display" style={{
              margin: '0 0 18px',
              fontSize: 'clamp(22px, 2.2vw, 30px)',
              lineHeight: 1.05, letterSpacing: '-0.01em',
            }}>Spec-aligned outcomes</h3>
            <p className="mono" style={{
              margin: '0 0 26px',
              fontSize: 13, lineHeight: 1.7,
              color: 'rgba(255,255,255,0.7)',
            }}>
              Your installer stays independent, but the project stays aligned with WFS material specs, fabrication details, and finish expectations.
            </p>
            <ul style={{ listStyle: 'none', margin: '0 0 32px', padding: 0, display: 'grid', gap: 12 }}>
              {[
                ['Local crews familiar with WFS systems',
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="9" cy="9" r="3"/><circle cx="17" cy="10" r="2.5"/><path d="M3 19 Q9 14 15 19"/><path d="M14 18 Q17.5 15 21 18"/></svg>],
                ['Installation practices that support warranty-friendly outcomes',
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3 L19 6 V12 Q19 17 12 21 Q5 17 5 12 V6 Z"/><path d="M9 12 L11 14 L15 10" strokeLinecap="round" strokeLinejoin="round"/></svg>],
                ['Certified partners for residential and gate projects',
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="6" width="16" height="14" rx="1"/><line x1="4" y1="10" x2="20" y2="10"/><path d="M8 14 L11 17 L17 12" strokeLinecap="round" strokeLinejoin="round"/></svg>],
              ].map(([line, icon], i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <span style={{ flexShrink: 0, marginTop: 1, color: 'var(--tangerine)' }}>{icon}</span>
                  <span className="mono" style={{ fontSize: 12.5, lineHeight: 1.55, color: 'var(--white)' }}>{line}</span>
                </li>
              ))}
            </ul>
            <a href="estimate.html" style={{
              display: 'block', textAlign: 'center', marginTop: 'auto',
              padding: '16px 28px',
              background: 'var(--white)', color: 'var(--ink)',
              fontFamily: 'var(--sans)', fontSize: 12.5, fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase',
            }}>Request Your Quote</a>
          </HoverCard>
        </div>
      </div>
    </section>
  );
};

/* ───── Homeowner testimonial / quote block ───── */

const HomeownerTestimonial = () => (
  <section style={{ background: 'var(--white)', padding: '96px 0' }}>
    <div className="container" style={{ maxWidth: 1200 }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1.4fr',
        gap: 56, alignItems: 'center',
      }}>
        {/* Left — meta column */}
        <div>
          <span className="mono" style={{
            display: 'inline-block', marginBottom: 18,
            fontSize: 11, fontWeight: 700, letterSpacing: '0.24em',
            color: 'var(--tangerine)', textTransform: 'uppercase',
          }}>04 — Real homeowners</span>
          <h2 className="display" style={{
            margin: '0 0 24px',
            fontSize: 'clamp(26px, 3vw, 36px)',
            lineHeight: 1.05, letterSpacing: '-0.015em', color: 'var(--ink)',
          }}>From sketch to<br/>finished fence.</h2>
          <p className="mono" style={{
            margin: 0, fontSize: 13, lineHeight: 1.7,
            color: 'var(--charcoal)', maxWidth: 320,
          }}>
            One project, three stages. The same WFS rep stayed on the order from first quote to final pickup.
          </p>
        </div>

        {/* Right — quote card */}
        <article style={{
          position: 'relative',
          border: '1.5px solid var(--ink)',
          background: 'var(--white)',
          padding: '44px 48px',
          boxShadow: '10px 10px 0 var(--tangerine)',
        }}>
          {/* Big open quote */}
          <span className="display" style={{
            position: 'absolute', top: -18, left: 28,
            background: 'var(--white)', padding: '0 10px',
            fontSize: 64, lineHeight: 1, color: 'var(--tangerine)',
          }}>“</span>
          <p className="mono" style={{
            margin: '0 0 28px',
            fontSize: 17, lineHeight: 1.55, color: 'var(--ink)',
            fontWeight: 500,
          }}>
            We sent a phone-photo sketch on a Monday, had a stamped quote Tuesday, and the panels were on the trailer by Friday. The installer they paired us with knew the exact post-spacing for our windload zone.
          </p>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 16,
            paddingTop: 24, borderTop: '1px dashed rgba(26,37,72,0.2)',
          }}>
            <div style={{
              width: 48, height: 48, borderRadius: '50%',
              background: 'var(--ink)', color: 'var(--white)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--display)', fontWeight: 700, fontSize: 16,
              letterSpacing: '0.02em',
            }}>MR</div>
            <div>
              <div className="display" style={{
                fontSize: 14, color: 'var(--ink)', letterSpacing: '-0.005em',
              }}>Marisol R.</div>
              <div className="mono" style={{
                marginTop: 4, fontSize: 10.5, fontWeight: 700,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'var(--charcoal)',
              }}>Cape Coral · 186 LF vinyl + 2 gates</div>
            </div>
            {/* Star rating */}
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 3 }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 16 16" fill="var(--tangerine)">
                  <path d="M8 1.5 L9.8 5.7 L14.5 6.1 L11 9.3 L12 14 L8 11.5 L4 14 L5 9.3 L1.5 6.1 L6.2 5.7 Z"/>
                </svg>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
);

/* ───── Homeowner-specific FAQ ───── */

const HomeownerFAQ = () => {
  const items = [
    ['Do I need a permit for my fence?',
      'Most Florida counties require a permit for fences over 4 ft, and pool barriers always require code-compliant permits. Your installer typically handles the filing — we provide the manufacturer specs and stamped wind-load data for AHJ submission.'],
    ['Does WFS handle HOA approvals?',
      'We don\'t submit on your behalf, but we provide every document your HOA needs: profile drawings, color samples, finish specs and a written quote in the format most boards expect. Your installer or a community manager submits.'],
    ['What is the lead time for orders?',
      'Stocked items ship in 1–2 days. Custom welded gates run 3–7 days. Color-matched or non-stock heights take 2–4 weeks. We confirm the exact lead time before you approve the quote.'],
    ['How do I connect with a certified installer?',
      'When you request a quote we route your project to the closest WFS-aligned installer in our certified alliance. They quote the labor side; the material side stays on your WFS line item.'],
  ];
  const [open, setOpen] = React.useState(1);
  return (
    <section style={{ background: '#fafafa', padding: '96px 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 64, alignItems: 'start' }}>
          {/* Left — title + contact sidebar */}
          <div style={{ position: 'sticky', top: 100 }}>
            <span className="mono" style={{
              display: 'inline-block', marginBottom: 18,
              fontSize: 11, fontWeight: 700, letterSpacing: '0.24em',
              color: 'var(--tangerine)', textTransform: 'uppercase',
            }}>05 — FAQ</span>
            <h2 className="display" style={{
              margin: '0 0 24px',
              fontSize: 'clamp(28px, 3vw, 40px)',
              lineHeight: 1, letterSpacing: '-0.015em', color: 'var(--ink)',
            }}>Common homeowner<br/>questions</h2>
            <p className="mono" style={{
              margin: '0 0 32px',
              fontSize: 13, lineHeight: 1.7, color: 'var(--charcoal)',
              maxWidth: 320,
            }}>
              The four we hear most often. If yours isn't here, call the yard or send a sketch.
            </p>
            <div style={{
              border: '1.5px solid var(--ink)',
              background: 'var(--white)',
              padding: '24px 26px',
              maxWidth: 320,
            }}>
              <div className="mono" style={{
                fontSize: 10, fontWeight: 700, letterSpacing: '0.22em',
                color: 'var(--tangerine)', textTransform: 'uppercase',
                marginBottom: 14,
                display: 'flex', alignItems: 'center', gap: 8,
              }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 0 3px rgba(34,197,94,0.25)' }}/>
                Still got questions?
              </div>
              <a href="tel:2396895496" className="display" style={{
                display: 'block', marginBottom: 8,
                fontSize: 22, color: 'var(--ink)', lineHeight: 1.1,
              }}>(239) 689-5496</a>
              <a href="mailto:sales@westernfencesupply.com" className="mono" style={{
                display: 'block', wordBreak: 'break-all',
                fontSize: 12, color: 'var(--charcoal)',
              }}>sales@westernfencesupply.com</a>
              <div className="mono" style={{
                marginTop: 14, paddingTop: 14,
                borderTop: '1px solid rgba(26,37,72,0.1)',
                fontSize: 10.5, letterSpacing: '0.18em',
                textTransform: 'uppercase', color: 'var(--charcoal)', fontWeight: 700,
              }}>Mon–Fri · 7am–4pm EST</div>
            </div>
          </div>

          {/* Right — accordion */}
          <div style={{ display: 'grid', gap: 14 }}>
            {items.map(([q, a], i) => {
              const isOpen = open === i;
              return (
                <div key={i} style={{
                  border: '1.5px solid var(--ink)',
                  background: isOpen ? '#f5f8fc' : 'var(--white)',
                  transition: 'background 0.2s ease',
                }}>
                  <button onClick={() => setOpen(isOpen ? -1 : i)} style={{
                    width: '100%', display: 'flex',
                    alignItems: 'center', justifyContent: 'space-between',
                    padding: '22px 26px', textAlign: 'left', gap: 24,
                    background: 'transparent', border: 'none', cursor: 'pointer',
                  }}>
                    <span style={{ display: 'flex', alignItems: 'baseline', gap: 18 }}>
                      <span className="mono" style={{
                        fontSize: 10.5, fontWeight: 700, letterSpacing: '0.22em',
                        color: isOpen ? 'var(--tangerine)' : 'var(--charcoal)',
                      }}>{String(i + 1).padStart(2, '0')}</span>
                      <span className="mono" style={{
                        fontSize: 13.5, fontWeight: 700, color: 'var(--ink)',
                      }}>{q}</span>
                    </span>
                    <span style={{
                      flexShrink: 0,
                      fontSize: 22, fontWeight: 300,
                      color: isOpen ? 'var(--tangerine)' : 'var(--ink)',
                      transform: isOpen ? 'rotate(45deg)' : 'none',
                      transition: 'transform 0.2s ease, color 0.2s ease',
                    }}>+</span>
                  </button>
                  <div style={{
                    maxHeight: isOpen ? 280 : 0, overflow: 'hidden',
                    transition: 'max-height 0.3s ease',
                  }}>
                    <p className="mono" style={{
                      margin: 0, padding: '0 26px 22px 64px',
                      fontSize: 12.5, lineHeight: 1.7, color: 'var(--charcoal)',
                    }}>{a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ───── Closing CTA band ───── */

const HomeownerClosingCTA = () => (
  <section style={{
    background: 'var(--ink)', color: 'var(--white)',
    padding: '88px 0',
    position: 'relative', overflow: 'hidden',
  }}>
    {/* Background pattern */}
    <div aria-hidden style={{
      position: 'absolute', inset: 0, opacity: 0.08,
      backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)',
      backgroundSize: '24px 24px',
      pointerEvents: 'none',
    }}/>
    <div className="container" style={{
      position: 'relative',
      display: 'grid', gridTemplateColumns: '1.4fr 1fr',
      gap: 48, alignItems: 'center',
    }}>
      <div>
        <span className="mono" style={{
          display: 'inline-block', marginBottom: 18,
          fontSize: 11, fontWeight: 700, letterSpacing: '0.24em',
          color: 'var(--tangerine)', textTransform: 'uppercase',
        }}>Ready to start?</span>
        <h2 className="display" style={{
          margin: 0, fontSize: 'clamp(32px, 4vw, 56px)',
          lineHeight: 1, letterSpacing: '-0.02em', color: 'var(--white)',
        }}>
          Send a sketch.<br/>
          <span style={{ color: 'var(--tangerine)' }}>Quote in 24 hours.</span>
        </h2>
        <p className="mono" style={{
          margin: '22px 0 0', maxWidth: 520,
          fontSize: 13, lineHeight: 1.7,
          color: 'rgba(255,255,255,0.7)',
        }}>
          Linear feet, height, gate count and ZIP. One rep follows the order from quote to pickup or delivery — and routes the labor side to a certified installer near you.
        </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'stretch' }}>
        <a href="estimate.html" style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          padding: '18px 28px',
          background: 'var(--tangerine)', color: 'var(--white)',
          fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 700,
          letterSpacing: '0.18em', textTransform: 'uppercase',
        }}>Get a Quote</a>
        <a href="tel:2396895496" style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          padding: '18px 28px',
          background: 'transparent', color: 'var(--white)',
          border: '1.5px solid rgba(255,255,255,0.5)',
          fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 700,
          letterSpacing: '0.18em', textTransform: 'uppercase',
        }}>Call (239) 689-5496</a>
      </div>
    </div>
  </section>
);

const HomeownerPage = () => (
  <>
    <SiteHeader />
    <HomeownerHero />
    <HomeownerTrustStrip />
    <HomeownerSteps />
    <HomeownerStylePicker />
    <HomeownerInstallerSplit />
    <HomeownerTestimonial />
    <HomeownerFAQ />
    <HomeownerClosingCTA />
    <Footer />
  </>
);

/* ───────────────────────────── CONTRACTOR ───────────────────────────── */

const ContractorHero = () => (
  <section style={{
    background: 'var(--ink)', color: 'var(--white)',
    minHeight: 'calc(100svh - 80px)',
    padding: '40px 0',
    display: 'flex', alignItems: 'center',
    position: 'relative', overflow: 'hidden',
  }}>
    {/* Background dotted grid */}
    <div aria-hidden style={{
      position: 'absolute', inset: 0, opacity: 0.10,
      backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)',
      backgroundSize: '24px 24px',
      pointerEvents: 'none',
    }}/>
    {/* Tangerine accent line */}
    <div aria-hidden style={{
      position: 'absolute', top: 0, left: 0, right: 0, height: 4,
      background: 'var(--tangerine)',
    }}/>
    <div className="container" style={{ position: 'relative', width: '100%' }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '1.2fr 1fr',
        gap: 56, alignItems: 'center',
      }}>
        {/* Left — copy block */}
        <div>
          <span className="mono" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '7px 14px',
            border: '1px solid rgba(255,255,255,0.4)',
            fontSize: 10, fontWeight: 700, letterSpacing: '0.22em',
            textTransform: 'uppercase', color: 'var(--white)',
            marginBottom: 24,
          }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--tangerine)' }}/>
            Wholesale Partner Program · Florida
          </span>
          <h1 className="display" style={{
            margin: '0 0 22px',
            fontSize: 'clamp(38px, 4.8vw, 72px)',
            lineHeight: 0.96, letterSpacing: '-0.025em',
            color: 'var(--white)',
          }}>
            Build with the<br/>
            <span style={{ color: 'var(--tangerine)' }}>manufacturer.</span>
          </h1>
          <p className="mono" style={{
            margin: '0 0 26px',
            maxWidth: 520,
            fontSize: 14, lineHeight: 1.65,
            color: 'rgba(255,255,255,0.72)',
          }}>
            Partner with Southwest Florida's leading fence manufacturer. Wholesale pricing tiers, priority fabrication, and job-site delivery — without an out-of-state distributor in the middle.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 26 }}>
            <a href="estimate.html" style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              padding: '14px 28px',
              background: 'var(--tangerine)', color: 'var(--white)',
              fontFamily: 'var(--sans)', fontSize: 12, fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              boxShadow: '6px 6px 0 rgba(255,255,255,0.18)',
              transition: 'transform 0.18s ease, box-shadow 0.18s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-2px, -2px)'; e.currentTarget.style.boxShadow = '8px 8px 0 rgba(255,255,255,0.22)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '6px 6px 0 rgba(255,255,255,0.18)'; }}>
              Contact Wholesale Team
            </a>
            <a href="resources.html" style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              padding: '14px 28px',
              background: 'transparent', color: 'var(--white)',
              border: '1.5px solid rgba(255,255,255,0.5)',
              fontFamily: 'var(--sans)', fontSize: 12, fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase',
            }}>Request Price List</a>
          </div>
          {/* Trust micro-bullets */}
          <div className="mono" style={{
            display: 'flex', gap: 22, flexWrap: 'wrap',
            fontSize: 10.5, fontWeight: 700, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)',
          }}>
            {['No application fee', 'Volume tiers', 'Net terms available'].map((t) => (
              <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8 L7 12 L13 4" stroke="var(--tangerine)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right — partner spec card */}
        <div style={{ position: 'relative' }}>
          {/* Tangerine offset plate */}
          <div aria-hidden style={{
            position: 'absolute', inset: '14px -14px -14px 14px',
            background: 'var(--tangerine)', zIndex: 0,
          }}/>
          <div style={{
            position: 'relative', zIndex: 1,
            background: 'var(--white)', color: 'var(--ink)',
            border: '1.5px solid var(--white)',
            padding: '32px 32px 28px',
          }}>
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              marginBottom: 22,
              paddingBottom: 18,
              borderBottom: '1px dashed rgba(26,37,72,0.18)',
            }}>
              <span className="mono" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '6px 12px',
                background: 'var(--ink)', color: 'var(--white)',
                fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase',
              }}>Partner ID · 0042</span>
              <span className="mono" style={{
                fontSize: 10, fontWeight: 700, letterSpacing: '0.22em',
                color: 'var(--charcoal)', textTransform: 'uppercase',
              }}>FY '26 · Active</span>
            </div>

            <div className="mono" style={{
              fontSize: 10, fontWeight: 700, letterSpacing: '0.22em',
              color: 'var(--tangerine)', textTransform: 'uppercase',
              marginBottom: 8,
            }}>Volume tier — example</div>
            <div className="display" style={{
              fontSize: 28, lineHeight: 1, color: 'var(--ink)',
              letterSpacing: '-0.015em', marginBottom: 18,
            }}>Pro · 18 – 22%</div>

            {/* Stat grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, marginBottom: 22 }}>
              {[
                ['MTD LF', '4,820'],
                ['Open POs', '7'],
                ['On-time', '98%'],
              ].map(([k, v]) => (
                <div key={k} style={{
                  borderLeft: '2px solid var(--tangerine)',
                  paddingLeft: 10,
                }}>
                  <div className="display" style={{
                    fontSize: 18, lineHeight: 1, color: 'var(--ink)',
                    letterSpacing: '-0.01em',
                  }}>{v}</div>
                  <div className="mono" style={{
                    marginTop: 4, fontSize: 9.5, fontWeight: 700, letterSpacing: '0.18em',
                    textTransform: 'uppercase', color: 'var(--charcoal)',
                  }}>{k}</div>
                </div>
              ))}
            </div>

            {/* Bars */}
            <div className="mono" style={{
              fontSize: 9.5, fontWeight: 700, letterSpacing: '0.2em',
              color: 'var(--charcoal)', textTransform: 'uppercase',
              marginBottom: 10,
            }}>Next tier — Elite at 8,000 LF</div>
            <div style={{
              height: 8, background: '#eef0f4',
              border: '1px solid rgba(26,37,72,0.1)',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', inset: 0, width: '60%',
                background: 'var(--tangerine)',
              }}/>
            </div>
            <div className="mono" style={{
              marginTop: 18, paddingTop: 14,
              borderTop: '1px dashed rgba(26,37,72,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              fontSize: 10.5, fontWeight: 700, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: 'var(--ink)',
            }}>
              <span>Next drop · Wed</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e' }}/>
                Scheduled
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ContractorStatsStrip = () => (
  <section style={{
    background: 'var(--white)',
    borderBottom: '1px solid rgba(26,37,72,0.1)',
    padding: '36px 0',
  }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
        {[
          ['18–28%', 'Wholesale margin tiers'],
          ['72h',    'Avg priority fabrication'],
          ['Free',   'Job-site drops · in-county'],
          ['$0',     'Application fee'],
        ].map(([n, l], i) => (
          <div key={l} style={{
            paddingLeft: i === 0 ? 0 : 24,
            borderLeft: i === 0 ? 'none' : '1px solid rgba(26,37,72,0.1)',
          }}>
            <div className="display" style={{
              fontSize: 'clamp(28px, 3.2vw, 42px)', lineHeight: 1,
              color: 'var(--ink)', letterSpacing: '-0.02em',
            }}>{n}</div>
            <div className="mono" style={{
              marginTop: 10, fontSize: 11, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: 'var(--charcoal)',
              fontWeight: 700,
            }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ContractorBenefits = () => {
  const benefits = [
    {
      title: 'Factory Direct Pricing',
      body: 'Maximize your margins with true wholesale pricing tiered to your volume — no out-of-state distributor markup.',
      svg: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21 V11 L9 14 V11 L15 14 V11 L21 14 V21 Z"/><line x1="3" y1="21" x2="21" y2="21"/></svg>),
      highlighted: true,
    },
    {
      title: 'Priority Fabrication',
      body: 'Skip the line. Wholesale partners get priority manufacturing slots and 72-hour standard turnaround on gates.',
      svg: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="9" width="13" height="9" rx="1"/><path d="M15 12 H19 L22 15 V18 H15 Z"/><circle cx="7" cy="20" r="1.6"/><circle cx="18" cy="20" r="1.6"/></svg>),
    },
    {
      title: 'Job Site Delivery',
      body: 'Unbranded or branded drops directly to your job site. Curbside, will-call, or LTL — your choice per PO.',
      svg: (<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21 Q4 14 4 9 A8 8 0 0 1 20 9 Q20 14 12 21 Z"/><circle cx="12" cy="9.5" r="2.6"/></svg>),
    },
    {
      title: 'Lead Routing',
      body: 'We refer homeowner projects directly to certified installer partners in the alliance, with the WFS material line locked in.',
      svg: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="9" r="3"/><circle cx="17" cy="10" r="2.4"/><path d="M3 19 Q9 14 15 19"/><path d="M14 18 Q17.5 15 21 18"/></svg>),
    },
    {
      title: 'Net 30 Terms',
      body: 'Flexible payment terms available for qualified high-volume partners after a short trade-reference review.',
      svg: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="6" width="18" height="13" rx="1.5"/><line x1="3" y1="10" x2="21" y2="10"/><rect x="6" y="14" width="4" height="2" rx="0.4" fill="currentColor"/></svg>),
      highlighted: true,
    },
    {
      title: 'Dedicated Rep',
      body: 'One named contractor account rep. Order by phone, email, or in-yard — same person from RFQ through PO close-out.',
      svg: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="3.5"/><path d="M5 20 Q5 14 12 14 Q19 14 19 20"/></svg>),
    },
  ];
  return (
    <section style={{ background: 'var(--white)', padding: '96px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="mono" style={{
            display: 'inline-block', marginBottom: 16,
            fontSize: 11, fontWeight: 700, letterSpacing: '0.24em',
            color: 'var(--tangerine)', textTransform: 'uppercase',
          }}>01 — Partner Benefits</span>
          <h2 className="display" style={{
            margin: 0, fontSize: 'clamp(28px, 3.4vw, 44px)',
            lineHeight: 1, letterSpacing: '-0.015em', color: 'var(--ink)',
          }}>Why partner with WFS</h2>
        </div>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 18, maxWidth: 1200, margin: '0 auto',
        }}>
          {benefits.map(b => (
            <article key={b.title} style={{
              position: 'relative',
              border: '1.5px solid var(--ink)',
              background: b.highlighted ? 'var(--ink)' : 'var(--white)',
              color: b.highlighted ? 'var(--white)' : 'var(--ink)',
              padding: '36px 32px',
              minHeight: 280,
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = b.highlighted ? '8px 8px 0 var(--tangerine)' : '8px 8px 0 var(--tangerine)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
              {b.highlighted && (
                <span className="mono" style={{
                  position: 'absolute', top: 16, right: 16,
                  padding: '4px 10px',
                  background: 'var(--tangerine)', color: 'var(--white)',
                  fontSize: 9, fontWeight: 700, letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                }}>Top ask</span>
              )}
              <div style={{ marginBottom: 30, color: b.highlighted ? 'var(--tangerine)' : 'var(--ink)' }}>{b.svg}</div>
              <h3 style={{
                margin: '0 0 14px',
                fontSize: 16, fontWeight: 700,
                letterSpacing: '-0.005em',
                color: b.highlighted ? 'var(--white)' : 'var(--ink)',
                textTransform: 'uppercase',
              }}>{b.title}</h3>
              <p className="mono" style={{
                margin: 0, fontSize: 12.5, lineHeight: 1.65,
                color: b.highlighted ? 'rgba(255,255,255,0.72)' : 'var(--charcoal)',
              }}>{b.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ───── How partnership works — 4 steps ───── */

const ContractorHowItWorks = () => {
  const steps = [
    {
      n: '01', t: 'Apply',
      body: 'Send your business info, trade refs, and an idea of monthly LF. No fee, no commitment.',
      svg: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M7 3 H15 L19 7 V21 H7 Z"/><path d="M15 3 V7 H19"/><line x1="9" y1="12" x2="17" y2="12"/><line x1="9" y1="15" x2="17" y2="15"/></svg>),
    },
    {
      n: '02', t: 'Get Approved',
      body: 'We review and confirm your starter tier within 5 business days. Tax-exempt setup included.',
      svg: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 L19 6 V12 Q19 17 12 21 Q5 17 5 12 V6 Z"/><path d="M9 12 L11 14 L15 10"/></svg>),
    },
    {
      n: '03', t: 'Order & Build',
      body: 'Phone, email, or in-yard. Same rep on every PO. Job-site delivery or will-call from FM or PC.',
      svg: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="9" width="13" height="9" rx="1"/><path d="M15 12 H19 L22 15 V18 H15 Z"/><circle cx="7" cy="20" r="1.6"/><circle cx="18" cy="20" r="1.6"/></svg>),
    },
    {
      n: '04', t: 'Tier Up',
      body: 'As your monthly LF grows, your margin tier and turnaround priority both step up automatically.',
      svg: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20 L10 14 L14 18 L20 6"/><path d="M14 6 L20 6 L20 12"/></svg>),
    },
  ];
  return (
    <section style={{ background: '#fafafa', padding: '96px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="mono" style={{
            display: 'inline-block', marginBottom: 16,
            fontSize: 11, fontWeight: 700, letterSpacing: '0.24em',
            color: 'var(--tangerine)', textTransform: 'uppercase',
          }}>02 — Process</span>
          <h2 className="display" style={{
            margin: 0, fontSize: 'clamp(28px, 3.4vw, 44px)',
            lineHeight: 1, letterSpacing: '-0.015em', color: 'var(--ink)',
          }}>How partnership works</h2>
        </div>
        <div style={{
          position: 'relative',
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 24, maxWidth: 1200, margin: '0 auto',
        }}>
          {/* Connector */}
          <div aria-hidden style={{
            position: 'absolute', top: 36, left: '10%', right: '10%', height: 1,
            borderTop: '1px dashed rgba(26,37,72,0.2)',
            zIndex: 0, pointerEvents: 'none',
          }}/>
          {steps.map((s, i) => (
            <div key={s.n} style={{
              position: 'relative', zIndex: 1,
              background: 'var(--white)',
              border: '1.5px solid var(--ink)',
              padding: '24px 24px 28px',
            }}>
              {/* Top row — number + icon */}
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                marginBottom: 24,
              }}>
                <span className="mono" style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: 36, height: 36,
                  background: i === 0 ? 'var(--tangerine)' : 'var(--ink)',
                  color: 'var(--white)',
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.05em',
                }}>{s.n}</span>
                <span style={{ color: 'var(--ink)' }}>{s.svg}</span>
              </div>
              <h3 className="display" style={{
                margin: '0 0 10px', fontSize: 18,
                letterSpacing: '-0.005em', color: 'var(--ink)',
              }}>{s.t}</h3>
              <p className="mono" style={{
                margin: 0, fontSize: 12.5, lineHeight: 1.6,
                color: 'var(--charcoal)',
              }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ───── What's in the wholesale kit — resources ───── */

const ContractorWholesaleKit = () => {
  const items = [
    {
      title: 'Tiered Price List',
      body: 'Bronze · Pro · Elite tier pricing for every active SKU, updated quarterly with FY rolls.',
      svg: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M7 3 H15 L19 7 V21 H7 Z"/><path d="M15 3 V7 H19"/><line x1="9" y1="12" x2="17" y2="12"/><line x1="9" y1="15" x2="17" y2="15"/><line x1="9" y1="18" x2="14" y2="18"/></svg>),
    },
    {
      title: 'Spec Library',
      body: 'PDF profile drawings, wind-load data, color samples — formatted for AHJ and HOA submission.',
      svg: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="16" height="18" rx="1"/><line x1="8" y1="8" x2="16" y2="8"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="8" y1="16" x2="13" y2="16"/></svg>),
    },
    {
      title: 'Co-branded Marketing',
      body: 'White-label estimate templates and yard-sign artwork with your logo set against WFS material specs.',
      svg: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="6" width="14" height="12" rx="1"/><path d="M17 10 L21 7 V17 L17 14 Z"/></svg>),
    },
    {
      title: 'Job-Site Drops',
      body: 'Branded or unbranded delivery. Real-time slot booking through your dedicated rep.',
      svg: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="9" width="13" height="9" rx="1"/><path d="M15 12 H19 L22 15 V18 H15 Z"/><circle cx="7" cy="20" r="1.6"/><circle cx="18" cy="20" r="1.6"/></svg>),
    },
    {
      title: 'Lead Pipeline',
      body: 'Homeowner inquiries in your county routed straight to your inbox with the spec sheet attached.',
      svg: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4 H21 V20 H3 Z"/><path d="M3 4 L12 13 L21 4"/></svg>),
    },
    {
      title: 'Training & Tech',
      body: 'In-yard walkthroughs on new product lines, plus install-tech support for your crews when a job throws a curveball.',
      svg: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4 L21 9 L12 14 L3 9 Z"/><path d="M6 11 V16 Q12 19 18 16 V11"/></svg>),
    },
  ];
  return (
    <section style={{ background: 'var(--white)', padding: '96px 0' }}>
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 48, alignItems: 'end', marginBottom: 48,
        }}>
          <div>
            <span className="mono" style={{
              display: 'inline-block', marginBottom: 16,
              fontSize: 11, fontWeight: 700, letterSpacing: '0.24em',
              color: 'var(--tangerine)', textTransform: 'uppercase',
            }}>03 — What you get</span>
            <h2 className="display" style={{
              margin: 0, fontSize: 'clamp(28px, 3.4vw, 44px)',
              lineHeight: 1, letterSpacing: '-0.015em', color: 'var(--ink)',
            }}>The wholesale kit</h2>
          </div>
          <p className="mono" style={{
            margin: 0, maxWidth: 460, justifySelf: 'end', textAlign: 'right',
            fontSize: 13, lineHeight: 1.7, color: 'var(--charcoal)',
          }}>
            Six things every active partner walks away with — not someday, on day one.
          </p>
        </div>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 0,
          border: '1.5px solid var(--ink)',
        }}>
          {items.map((it, i) => (
            <div key={it.title} style={{
              padding: '32px 30px 34px',
              borderRight: (i % 3 !== 2) ? '1.5px solid var(--ink)' : 'none',
              borderBottom: (i < 3) ? '1.5px solid var(--ink)' : 'none',
              background: 'var(--white)',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#fafafa'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--white)'; }}>
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                marginBottom: 22,
              }}>
                <span className="mono" style={{
                  fontSize: 10, fontWeight: 700, letterSpacing: '0.22em',
                  color: 'var(--tangerine)', textTransform: 'uppercase',
                }}>{String(i + 1).padStart(2, '0')}</span>
                <span style={{ color: 'var(--ink)' }}>{it.svg}</span>
              </div>
              <h3 className="display" style={{
                margin: '0 0 12px', fontSize: 17,
                letterSpacing: '-0.005em', color: 'var(--ink)',
              }}>{it.title}</h3>
              <p className="mono" style={{
                margin: 0, fontSize: 12.5, lineHeight: 1.65,
                color: 'var(--charcoal)',
              }}>{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ───── Contractor testimonial ───── */

const ContractorTestimonial = () => (
  <section style={{ background: '#fafafa', padding: '96px 0' }}>
    <div className="container" style={{ maxWidth: 1200 }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1.4fr',
        gap: 56, alignItems: 'center',
      }}>
        {/* Left — meta */}
        <div>
          <span className="mono" style={{
            display: 'inline-block', marginBottom: 18,
            fontSize: 11, fontWeight: 700, letterSpacing: '0.24em',
            color: 'var(--tangerine)', textTransform: 'uppercase',
          }}>04 — Partner voice</span>
          <h2 className="display" style={{
            margin: '0 0 24px',
            fontSize: 'clamp(26px, 3vw, 36px)',
            lineHeight: 1.05, letterSpacing: '-0.015em', color: 'var(--ink)',
          }}>What contractors<br/>tell us.</h2>
          <p className="mono" style={{
            margin: 0, fontSize: 13, lineHeight: 1.7,
            color: 'var(--charcoal)', maxWidth: 320,
          }}>
            Two yards, one rep per account, and material that ships on the date the rep promised.
          </p>
        </div>

        {/* Right — quote card on dark */}
        <article style={{
          position: 'relative',
          background: 'var(--ink)', color: 'var(--white)',
          padding: '44px 48px',
          boxShadow: '10px 10px 0 var(--tangerine)',
        }}>
          <span className="display" style={{
            position: 'absolute', top: -22, left: 28,
            background: 'var(--ink)', padding: '0 10px',
            fontSize: 64, lineHeight: 1, color: 'var(--tangerine)',
          }}>“</span>
          <p className="mono" style={{
            margin: '0 0 28px',
            fontSize: 17, lineHeight: 1.55, color: 'var(--white)',
            fontWeight: 500,
          }}>
            We were buying out of Tampa and eating two-week lead times. Switched to WFS direct and we're picking up gates on Wednesday that we quoted Monday. The margin step-up paid for the truck I bought last spring.
          </p>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 16,
            paddingTop: 24, borderTop: '1px dashed rgba(255,255,255,0.2)',
          }}>
            <div style={{
              width: 48, height: 48, borderRadius: '50%',
              background: 'var(--tangerine)', color: 'var(--white)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--display)', fontWeight: 700, fontSize: 16,
              letterSpacing: '0.02em',
            }}>JT</div>
            <div>
              <div className="display" style={{
                fontSize: 14, color: 'var(--white)', letterSpacing: '-0.005em',
              }}>Jorge T., Lead Fence LLC</div>
              <div className="mono" style={{
                marginTop: 4, fontSize: 10.5, fontWeight: 700,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.6)',
              }}>Fort Myers · Pro tier · since '23</div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
);

/* ───── Contractor closing CTA — dark band with form preview ───── */

const ContractorClosingCTA = () => (
  <section style={{
    background: 'var(--ink)', color: 'var(--white)',
    padding: '96px 0',
    position: 'relative', overflow: 'hidden',
  }}>
    {/* Background pattern */}
    <div aria-hidden style={{
      position: 'absolute', inset: 0, opacity: 0.08,
      backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)',
      backgroundSize: '24px 24px',
      pointerEvents: 'none',
    }}/>
    {/* Tangerine accent */}
    <div aria-hidden style={{
      position: 'absolute', bottom: 0, left: 0, right: 0, height: 4,
      background: 'var(--tangerine)',
    }}/>
    <div className="container" style={{
      position: 'relative',
      display: 'grid', gridTemplateColumns: '1.4fr 1fr',
      gap: 56, alignItems: 'center',
    }}>
      <div>
        <span className="mono" style={{
          display: 'inline-block', marginBottom: 18,
          fontSize: 11, fontWeight: 700, letterSpacing: '0.24em',
          color: 'var(--tangerine)', textTransform: 'uppercase',
        }}>Ready to partner?</span>
        <h2 className="display" style={{
          margin: 0, fontSize: 'clamp(32px, 4.2vw, 60px)',
          lineHeight: 0.98, letterSpacing: '-0.02em', color: 'var(--white)',
        }}>
          Apply once.<br/>
          <span style={{ color: 'var(--tangerine)' }}>Quote forever.</span>
        </h2>
        <p className="mono" style={{
          margin: '24px 0 32px', maxWidth: 520,
          fontSize: 13, lineHeight: 1.7,
          color: 'rgba(255,255,255,0.7)',
        }}>
          Submit the partner application once. We approve, lock in your starter tier, and route every future RFQ through your dedicated rep. No annual fee, no minimums on individual orders.
        </p>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <a href="estimate.html" style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            padding: '18px 32px',
            background: 'var(--tangerine)', color: 'var(--white)',
            fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 700,
            letterSpacing: '0.18em', textTransform: 'uppercase',
          }}>Start Application</a>
          <a href="tel:2396895496" style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            padding: '18px 32px',
            background: 'transparent', color: 'var(--white)',
            border: '1.5px solid rgba(255,255,255,0.5)',
            fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 700,
            letterSpacing: '0.18em', textTransform: 'uppercase',
          }}>(239) 689-5496</a>
        </div>
      </div>

      {/* Right — application checklist */}
      <div style={{
        border: '1.5px solid rgba(255,255,255,0.25)',
        background: 'rgba(255,255,255,0.04)',
        padding: '32px 32px 28px',
      }}>
        <div className="mono" style={{
          fontSize: 10, fontWeight: 700, letterSpacing: '0.22em',
          color: 'var(--tangerine)', textTransform: 'uppercase',
          marginBottom: 18,
          display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--tangerine)' }}/>
          Application checklist
        </div>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 14 }}>
          {[
            'Business license + EIN',
            'Florida resale certificate',
            '2 trade references',
            'Est. monthly linear-feet',
          ].map((line, i) => (
            <li key={line} style={{
              display: 'flex', alignItems: 'center', gap: 14,
              paddingBottom: i < 3 ? 14 : 0,
              borderBottom: i < 3 ? '1px dashed rgba(255,255,255,0.18)' : 'none',
            }}>
              <span style={{
                width: 24, height: 24, flexShrink: 0,
                border: '1.5px solid var(--tangerine)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8 L7 12 L13 4" stroke="var(--tangerine)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="mono" style={{
                fontSize: 12.5, fontWeight: 500,
                color: 'var(--white)',
              }}>{line}</span>
            </li>
          ))}
        </ul>
        <div className="mono" style={{
          marginTop: 22, paddingTop: 16,
          borderTop: '1px solid rgba(255,255,255,0.18)',
          fontSize: 10.5, fontWeight: 700, letterSpacing: '0.18em',
          textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <span>Approval window</span>
          <span style={{ color: 'var(--white)' }}>≤ 5 business days</span>
        </div>
      </div>
    </div>
  </section>
);

const ContractorPage = () => (
  <>
    <SiteHeader />
    <ContractorHero />
    <ContractorStatsStrip />
    <ContractorBenefits />
    <ContractorHowItWorks />
    <ContractorWholesaleKit />
    <ContractorTestimonial />
    <ContractorClosingCTA />
    <Footer />
  </>
);

Object.assign(window, {
  HomeownerHero, HomeownerTrustStrip, HomeownerSteps, HomeownerStylePicker,
  HomeownerInstallerSplit, HomeownerTestimonial, HomeownerFAQ, HomeownerClosingCTA, HomeownerPage,
  ContractorHero, ContractorStatsStrip, ContractorBenefits, ContractorHowItWorks,
  ContractorWholesaleKit, ContractorTestimonial, ContractorClosingCTA, ContractorPage,
});
