/* Reusable building blocks for non-homepage pages */

const Breadcrumb = ({ items, light = true }) => (
  <nav className="mono" style={{
    fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
    color: light ? 'rgba(255,255,255,0.6)' : 'var(--charcoal)',
    marginBottom: 24, display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center',
  }}>
    {items.map(([label, href], i) => (
      <React.Fragment key={i}>
        {i > 0 && <span aria-hidden>›</span>}
        {href
          ? <a href={href} style={{ color: 'inherit' }}>{label}</a>
          : <span style={{ color: light ? 'var(--white)' : 'var(--ink)' }}>{label}</span>}
      </React.Fragment>
    ))}
  </nav>
);

const PageHero = ({ eyebrow, title, accent, subtitle, image, crumbs, actions, height = 'clamp(420px, 58vh, 560px)' }) => (
  <section style={{
    position: 'relative', color: 'var(--white)', overflow: 'hidden',
    minHeight: height,
    display: 'flex', flexDirection: 'column', justifyContent: 'center',
    background: '#263166',
  }}>
    {image && (
      <img src={image} alt="" aria-hidden="true" style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        objectFit: 'cover', objectPosition: 'center 45%', zIndex: 0,
      }}/>
    )}
    {/* Scrim, strong left to light right, same recipe as the home banner */}
    <div aria-hidden style={{
      position: 'absolute', inset: 0, zIndex: 1,
      background: 'linear-gradient(95deg, rgba(38, 49, 103,0.86) 0%, rgba(38, 49, 103,0.68) 38%, rgba(38, 49, 103,0.42) 68%, rgba(38, 49, 103,0.26) 100%)',
    }}/>
    <div className="container" style={{
      position: 'relative', zIndex: 2,
      width: '100%',
      paddingTop: 72, paddingBottom: 56,
    }}>
      {eyebrow && (
        <div className="mono" style={{
          display: 'inline-flex', alignItems: 'center', gap: 14,
          marginBottom: 22,
          fontSize: 'clamp(10px, 1vw, 12px)', fontWeight: 700,
          letterSpacing: '0.22em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.85)',
        }}>
          <span aria-hidden style={{ width: 34, height: 3, background: 'var(--tangerine)', borderRadius: 2 }}/>
          {eyebrow}
        </div>
      )}
      <h1 style={{
        margin: '0 0 18px',
        fontFamily: 'var(--display)',
        fontVariationSettings: "'wdth' 100",
        fontWeight: 800,
        fontSize: 'clamp(30px, 3.6vw, 50px)',
        lineHeight: 1.02, letterSpacing: '-0.015em',
        textTransform: 'uppercase',
        color: 'var(--white)',
        textShadow: '0 2px 28px rgba(0,0,0,0.28)',
        maxWidth: 880,
      }}>
        {title}{accent && <>{' '}<span style={{ color: 'var(--blue-ice)' }}>{accent}</span></>}
      </h1>
      {subtitle && (
        <p style={{
          fontSize: 16, lineHeight: 1.55, maxWidth: 600, margin: 0,
          color: 'rgba(255,255,255,0.85)',
        }}>{subtitle}</p>
      )}
      {actions && actions.length > 0 && (
        <div style={{ marginTop: 30, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          {actions.map((a, i) => (
            a.primary ? (
              <a key={i} href={a.href} style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                padding: '15px 28px', borderRadius: 999,
                background: 'var(--tangerine)', color: 'var(--white)',
                fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 700,
                letterSpacing: '0.06em', textTransform: 'uppercase',
                boxShadow: '0 8px 24px rgba(255, 113, 51,0.35)',
                transition: 'transform 0.18s, box-shadow 0.18s, background 0.18s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(255, 113, 51,0.45)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 113, 51,0.35)'; }}>
                {a.label}
              </a>
            ) : (
              <a key={i} href={a.href} style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                padding: '15px 28px', borderRadius: 999,
                background: 'rgba(255,255,255,0.08)', color: 'var(--white)',
                border: '1.5px solid rgba(255,255,255,0.55)', backdropFilter: 'blur(6px)',
                fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 700,
                letterSpacing: '0.06em', textTransform: 'uppercase',
                transition: 'background 0.18s, border-color 0.18s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.18)'; e.currentTarget.style.borderColor = 'var(--white)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.55)'; }}>
                {a.label}
              </a>
            )
          ))}
        </div>
      )}
    </div>
  </section>
);

const PageSectionHeader = ({ number, label, title, accent, sub, link }) => (
  <div style={{
    display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'end',
    paddingBottom: 24, marginBottom: 28,
    borderBottom: '1px solid rgba(0,16,17,0.12)',
  }}>
    <div>
      <h2 className="display" style={{
        margin: 0, fontSize: 'clamp(28px, 3vw, 40px)',
        lineHeight: 1, letterSpacing: '-0.02em', fontWeight: 800,
      }}>
        {title}{accent && <><br/><span style={{ color: 'var(--tangerine)' }}>{accent}</span></>}
      </h2>
    </div>
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 18,
    }}>
      {sub && (
        <p style={{
          margin: 0, maxWidth: 380,
          fontSize: 14, lineHeight: 1.55, color: 'var(--charcoal)', textAlign: 'right',
        }}>{sub}</p>
      )}
      {link && (
        <a href={link[1]} className="mono" style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          fontSize: 11, fontWeight: 700, letterSpacing: '0.22em',
          textTransform: 'uppercase', color: 'var(--ink)',
          borderBottom: '1px solid var(--ink)', paddingBottom: 4,
        }}>
          {link[0]}
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square"/>
          </svg>
        </a>
      )}
    </div>
  </div>
);

const StatStrip = ({ items, dark = false }) => (
  <div style={{
    display: 'grid', gridTemplateColumns: `repeat(${items.length}, 1fr)`, gap: 28,
    paddingTop: 30, borderTop: `1px solid ${dark ? 'rgba(255,255,255,0.18)' : 'rgba(0,16,17,0.12)'}`,
  }}>
    {items.map(([n, l]) => (
      <div key={l}>
        <div className="display" style={{ fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: 1, color: dark ? 'var(--white)' : 'var(--ink)' }}>{n}</div>
        <div className="mono" style={{
          marginTop: 12, fontSize: 10, letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: dark ? 'var(--alice-blue)' : 'var(--charcoal)',
        }}>{l}</div>
      </div>
    ))}
  </div>
);

const CTABand = ({ kicker, title, accent, body, primary, secondary, theme = 'cream' }) => {
  const bg = theme === 'ink' ? 'var(--ink)' : theme === 'parchment' ? 'var(--parchment)' : '#ffffff';
  const fg = theme === 'ink' ? 'var(--parchment)' : 'var(--ink)';
  const sub = theme === 'ink' ? 'var(--alice-blue)' : 'var(--charcoal)';
  return (
    <section style={{
      background: bg, color: fg, padding: '120px 0',
      borderTop: theme === 'ink' ? 'none' : '1px solid rgba(0,16,17,0.08)',
    }}>
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 48,
          alignItems: 'center',
        }}>
          <div>
            <h2 className="display" style={{
              fontSize: 'clamp(30px, 3.5vw, 48px)', lineHeight: 1,
              letterSpacing: '-0.02em', margin: 0,
            }}>
              {title}{accent && <> <span style={{ color: 'var(--tangerine)' }}>{accent}</span></>}
            </h2>
            {body && (
              <p style={{
                marginTop: 18, fontSize: 15, lineHeight: 1.55,
                color: sub, maxWidth: 540,
              }}>{body}</p>
            )}
          </div>
          <div style={{
            display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'flex-end',
          }}>
            {primary && (
              <a href={primary[1]} className="btn btn-primary">{primary[0]} <ArrowRight /></a>
            )}
            {secondary && (
              <a href={secondary[1]}
                className={theme === 'ink' ? 'btn btn-ghost on-dark' : 'btn btn-ghost'}
                style={{ color: theme === 'ink' ? 'var(--parchment)' : 'var(--ink)' }}>
                {secondary[0]}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const featureIcon = (label = '') => {
  const l = String(label).toLowerCase();
  const p = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' };
  if (l.includes('best') || l.includes('ideal')) return <svg {...p}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4.2"/><circle cx="12" cy="12" r="0.6" fill="currentColor"/></svg>;
  if (l.includes('style') || l.includes('estilo')) return <svg {...p}><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>;
  if (l.includes('material')) return <svg {...p}><path d="M12 3 21 8 12 13 3 8Z"/><path d="M3 12 12 17 21 12"/><path d="M3 16 12 21 21 16"/></svg>;
  if (l.includes('lead') || l.includes('time') || l.includes('plazo') || l.includes('tiempo')) return <svg {...p}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>;
  if (l.includes('start') || l.includes('desde')) return <svg {...p}><path d="M20.6 13.4 11 3.8a2 2 0 0 0-1.4-.6H4v5.6a2 2 0 0 0 .6 1.4l9.6 9.6a2 2 0 0 0 2.8 0l3.6-3.6a2 2 0 0 0 0-2.8Z"/><circle cx="7.7" cy="7.7" r="1.2"/></svg>;
  if (l.includes('width') || l.includes('ancho')) return <svg {...p}><path d="M3 12h18M6 9l-3 3 3 3M18 9l3 3-3 3"/></svg>;
  if (l.includes('height') || l.includes('altura')) return <svg {...p}><path d="M12 3v18M9 6l3-3 3 3M9 18l3 3 3-3"/></svg>;
  if (l.includes('gauge') || l.includes('mesh') || l.includes('calibre')) return <svg {...p}><path d="M5 5l6 6-6 6M11 5l6 6-6 6"/></svg>;
  if (l.includes('finish') || l.includes('color') || l.includes('acabado')) return <svg {...p}><circle cx="9" cy="9" r="5"/><circle cx="15" cy="15" r="5"/></svg>;
  if (l.includes('wind') || l.includes('viento')) return <svg {...p}><path d="M3 8h12a3 3 0 1 0-3-3M3 12h16a3 3 0 1 1-3 3M3 16h9a2.5 2.5 0 1 1-2.5 2.5"/></svg>;
  if (l.includes('warrant') || l.includes('garant')) return <svg {...p}><path d="M12 3 19 6v6q0 5-7 9-7-4-7-9V6Z"/><path d="M9 12l2 2 4-4"/></svg>;
  if (l.includes('post') || l.includes('spacing') || l.includes('separac')) return <svg {...p}><path d="M5 4v16M12 4v16M19 4v16"/></svg>;
  return <svg {...p}><circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11.5 12h.5v4h1"/></svg>;
};

const FeatureRow = ({ items }) => (
  <div style={{
    display: 'grid', gridTemplateColumns: `repeat(${items.length}, 1fr)`,
    gap: 0,
    border: '1px solid rgba(0,16,17,0.12)',
  }}>
    {items.map(([k, v], i) => (
      <div key={i} style={{
        padding: '24px 22px',
        borderLeft: i === 0 ? 'none' : '1px solid rgba(0,16,17,0.12)',
      }}>
        <div aria-hidden style={{ color: 'var(--tangerine)', marginBottom: 14 }}>{featureIcon(k)}</div>
        <div className="mono" style={{
          fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
          color: 'var(--tangerine)', fontWeight: 700, marginBottom: 10,
        }}>{k}</div>
        <div style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--ink)' }}>{v}</div>
      </div>
    ))}
  </div>
);

const SplitBlock = ({ kicker, title, accent, body, bullets, image, imageRight = true, dark = false }) => {
  const bg = dark ? 'var(--ink)' : 'var(--white)';
  const fg = dark ? 'var(--parchment)' : 'var(--ink)';
  const sub = dark ? 'var(--alice-blue)' : 'var(--charcoal)';
  return (
    <section className={dark ? 'wfs-brand-texture' : undefined} style={{ backgroundColor: bg, color: fg, padding: '120px 0' }}>
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56,
          alignItems: 'center',
        }}>
          <div style={{ order: imageRight ? 1 : 2 }}>
            <h2 className="display" style={{
              margin: 0, fontSize: 'clamp(28px, 3vw, 42px)',
              lineHeight: 1, letterSpacing: '-0.02em', fontWeight: 800,
            }}>
              {title}{accent && <><br/><span style={{ color: 'var(--tangerine)' }}>{accent}</span></>}
            </h2>
            {body && (
              <p style={{
                marginTop: 18, fontSize: 15, lineHeight: 1.6,
                color: sub, maxWidth: 520,
              }}>{body}</p>
            )}
            {bullets && (
              <ul style={{
                margin: '22px 0 0', padding: 0, listStyle: 'none',
                display: 'grid', gap: 12, maxWidth: 520,
              }}>
                {bullets.map((b, i) => (
                  <li key={i} style={{
                    display: 'flex', alignItems: 'flex-start', gap: 12,
                    fontSize: 14, lineHeight: 1.5, color: fg,
                  }}>
                    <span style={{
                      flexShrink: 0, marginTop: 6,
                      width: 6, height: 6, background: 'var(--tangerine)',
                    }}/>
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div style={{
            order: imageRight ? 2 : 1,
            position: 'relative', aspectRatio: '4 / 3', overflow: 'hidden',
            background: '#263166',
          }}>
            {image && (
              <img src={image} alt=""
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}/>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, {
  Breadcrumb, PageHero, PageSectionHeader, StatStrip, CTABand, FeatureRow, SplitBlock,
});
