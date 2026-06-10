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

const PageHero = ({ eyebrow, title, accent, subtitle, image, crumbs, height = 'clamp(420px, 58vh, 560px)' }) => (
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
      background: bg, color: fg, padding: '112px 0',
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
    <section style={{ background: bg, color: fg, padding: '88px 0' }}>
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
