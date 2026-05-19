/* Homepage product sections — Fences (5 types incl. EC Fence) + Gates (5 systems) */

const FENCE_CATEGORIES = [
  {
    id: 'vinyl', name: 'Vinyl / PVC', tag: 'Privacy, Picket & Ranch',
    img: 'vinyl', href: 'vinyl.html',
    desc: 'Low-maintenance vinyl in privacy, picket and ranch profiles. Won\'t rot, rust, peel or fade — engineered for Florida sun and salt air with a transferable lifetime warranty.',
  },
  {
    id: 'aluminum', name: 'Aluminum', tag: 'Residential & Commercial',
    img: 'aluminum', href: 'aluminum.html',
    desc: 'Powder-coated aluminum panels in 3, 4 and 5-rail configurations. Pool-code compliant, rackable on grade and available in residential, commercial and industrial grades.',
  },
  {
    id: 'chainlink', name: 'Chain Link', tag: 'Galvanized & Vinyl Coated',
    img: 'chainlink', href: 'chain-link.html',
    desc: 'Galvanized and vinyl-coated mesh from 6 to 12 gauge. The workhorse fence for security, sports, agricultural and commercial perimeters across SW Florida.',
  },
  {
    id: 'metal', name: 'Metal / DuraFence', tag: 'Aluminum Board Privacy',
    img: 'metal', href: 'metal.html',
    desc: 'Aluminum board privacy fencing — the strength of metal with the look of solid board. Hurricane-rated, no warping, no painting, no replacement boards.',
  },
  {
    id: 'ecfence', name: 'EC Fence', tag: 'Self-Mating Galvanized Steel',
    img: 'ecfence', href: 'ecfence.html', isNew: true,
    desc: 'Our newest system: self-mating galvanized steel panels installed every 12 ft. 6 ft tall, available in bronze and white. Engineered for Exposure C wind loads.',
  },
];

const GATE_SYSTEMS = [
  {
    id: 'single-swing', name: 'Single Swing', tag: 'Walk gates & entry points',
    img: 'gate-single', href: 'gate-single.html',
    desc: 'Standard pedestrian and entry gates from 3 to 6 ft wide. Mechanically assembled or welded, with hardware to match every fence material we stock.',
  },
  {
    id: 'double-swing', name: 'Double Swing', tag: 'Driveway access gates',
    img: 'gate-double', href: 'gate-double.html',
    desc: 'Driveway-width gates from 8 to 16 ft total opening. Pre-hung options for single-day install with drop rod and gate latch hardware included.',
  },
  {
    id: 'sliding', name: 'Sliding Gates', tag: 'Space-saving operation',
    img: 'gate-sliding', href: 'gate-sliding.html',
    desc: 'Track-mounted sliding gates for tight or graded openings. Manual or automated with operator and safety package available.',
  },
  {
    id: 'cantilever', name: 'Cantilever', tag: 'No ground track needed',
    img: 'gate-cantilever', href: 'gate-cantilever.html',
    desc: 'Counter-balanced rolling gates with no ground track — ideal for sites with sand, debris or grade change. Up to 50 ft single openings.',
  },
  {
    id: 'rolling', name: 'Rolling Gate', tag: 'Industrial rolling gates',
    img: 'gate-rolling', href: 'gate-rolling.html',
    desc: 'Industrial rolling gates with V-track and rollers. Built for high-cycle commercial use, secured perimeters, yards and operations.',
  },
];

const SectionHeader = ({ kicker, title, sub }) => (
  <div style={{
    borderBottom: '1px solid var(--ink)',
    paddingBottom: 24, marginBottom: 56,
  }}>
    {kicker && (
      <div className="mono" style={{
        fontSize: 11, letterSpacing: '0.18em',
        color: 'var(--charcoal)', textTransform: 'uppercase',
        marginBottom: 14,
      }}>{kicker}</div>
    )}
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 32, flexWrap: 'wrap' }}>
      <h2 className="display" style={{
        fontSize: 'clamp(36px, 4.6vw, 60px)',
        margin: 0, lineHeight: 1, letterSpacing: '-0.015em',
        maxWidth: 620,
      }}>{title}</h2>
      {sub && (
        <p style={{
          fontSize: 15, color: 'var(--charcoal)',
          margin: 0, maxWidth: 380, lineHeight: 1.55,
        }}>{sub}</p>
      )}
    </div>
  </div>
);

/* --- Reusable selector layout: vertical list + center image + right description --- */
const FenceIcon = ({ id }) => {
  const props = { width: 26, height: 26, viewBox: '0 0 32 32', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'square' };
  switch (id) {
    case 'vinyl':
      return <svg {...props}><path d="M3 10h26M3 22h26M8 6v22M14 6v22M20 6v22M26 6v22"/></svg>;
    case 'aluminum':
      return <svg {...props}><path d="M3 10h26M3 22h26"/><path d="M7 6v22M12 6v22M17 6v22M22 6v22M27 6v22" strokeWidth="1.2"/></svg>;
    case 'chainlink':
      return <svg {...props}><path d="M5 6l6 6-6 6 6 6M11 6l6 6-6 6 6 6M17 6l6 6-6 6 6 6M23 6l6 6-6 6 6 6"/></svg>;
    case 'metal':
      return <svg {...props}><path d="M5 6h22v22H5z"/><path d="M5 13h22M5 20h22M12 6v22M19 6v22"/></svg>;
    case 'ecfence':
      return <svg {...props}><rect x="4" y="6" width="9" height="22"/><rect x="19" y="6" width="9" height="22"/><path d="M13 13h6M13 20h6"/></svg>;
    /* gate icons */
    case 'single-swing':
      return <svg {...props}><path d="M6 6v22M6 6l16 4v14L6 28"/></svg>;
    case 'double-swing':
      return <svg {...props}><path d="M16 6v22M16 6L4 10v14l12 4M16 6l12 4v14L16 28"/></svg>;
    case 'sliding':
      return <svg {...props}><path d="M4 12h24M4 22h24"/><path d="M8 8l-4 4 4 4M24 18l4 4-4 4"/></svg>;
    case 'cantilever':
      return <svg {...props}><path d="M4 22h24M8 12v10M14 12v10M20 12v10M26 12v10"/><path d="M4 12h22"/></svg>;
    case 'rolling':
      return <svg {...props}><circle cx="9" cy="24" r="3"/><circle cx="23" cy="24" r="3"/><path d="M4 16h24v4H4z"/><path d="M8 8h16v8H8z"/></svg>;
    default:
      return <svg {...props}><circle cx="16" cy="16" r="10"/></svg>;
  }
};

const ProductSelector = ({ items, ctaLabel = 'Learn More' }) => {
  const [active, setActive] = React.useState(0);
  const item = items[active];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1.1fr 1.2fr 1fr',
      gap: 56,
      alignItems: 'start',
    }}>
      {/* Column 1: vertical selector list */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {items.map((it, i) => {
          const isActive = i === active;
          const isLast = i === items.length - 1;
          return (
            <button key={it.id} onClick={() => setActive(i)}
              style={{
                display: 'flex', alignItems: 'center', gap: 18,
                padding: '20px 18px',
                background: isActive ? '#f3f1ee' : 'transparent',
                border: 'none',
                borderBottom: isLast ? 'none' : '1px solid rgba(0,16,17,0.12)',
                color: 'var(--ink)',
                cursor: 'pointer',
                textAlign: 'left',
                fontFamily: 'var(--sans)',
                fontWeight: isActive ? 700 : 500,
                fontSize: 17,
                letterSpacing: '-0.005em',
                transition: 'background 0.18s ease',
                position: 'relative',
              }}>
              <span style={{
                width: 28, display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                color: 'var(--ink)',
              }}>
                <FenceIcon id={it.id}/>
              </span>
              <span style={{ flex: 1 }}>{it.name}</span>
              {it.isNew && (
                <span style={{
                  background: 'var(--tangerine)', color: 'var(--ink)',
                  fontSize: 9, fontWeight: 700, letterSpacing: '0.18em',
                  padding: '4px 7px',
                }}>NEW</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Column 2: large image with circular backdrop */}
      <div style={{
        position: 'relative',
        aspectRatio: '1 / 1',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {/* Circular backdrop */}
        <div style={{
          position: 'absolute', inset: '6%',
          border: '1px solid rgba(0,16,17,0.18)',
          borderRadius: '50%',
          background: '#faf9f7',
        }}/>
        {/* Active image */}
        <img
          key={item.id}
          src={FENCE_IMG[item.img]}
          alt={item.name}
          style={{
            position: 'relative',
            width: '88%', height: '88%',
            objectFit: 'cover',
            display: 'block',
            animation: 'fadeUp 0.4s ease',
          }}/>
        <style>{`
          @keyframes fadeUp { from { opacity:0; transform: translateY(8px); } to { opacity:1; transform: none; } }
        `}</style>
      </div>

      {/* Column 3: description + CTA */}
      <div style={{ paddingTop: 12 }}>
        <div className="mono" style={{
          fontSize: 11, letterSpacing: '0.18em', color: 'var(--charcoal)',
          textTransform: 'uppercase', marginBottom: 14,
        }}>{item.tag}</div>
        <h3 className="display" style={{
          fontSize: 'clamp(24px, 2vw, 32px)',
          margin: '0 0 18px', lineHeight: 1.1, letterSpacing: '-0.01em',
        }}>{item.name}</h3>
        <p key={item.id + '-desc'} style={{
          fontSize: 15, lineHeight: 1.65, color: 'var(--charcoal)',
          margin: '0 0 28px',
          animation: 'fadeUp 0.4s ease',
        }}>{item.desc}</p>
        <a href={item.href || '#'} className="btn btn-dark" style={{ fontSize: 13 }}>
          {ctaLabel}
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

const FenceCard = ({ item, index, featured }) => {
  const [hover, setHover] = React.useState(false);
  const num = String(index + 1).padStart(2, '0');
  return (
    <a href={item.href || '#'}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        gridColumn: featured ? 'span 2' : 'span 1',
        gridRow: featured ? 'span 2' : 'span 1',
        position: 'relative',
        display: 'flex', flexDirection: 'column',
        background: 'var(--white)',
        border: '1px solid rgba(0,16,17,0.12)',
        textDecoration: 'none', color: 'var(--ink)',
        overflow: 'hidden',
        transition: 'border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease',
        borderColor: hover ? 'var(--ink)' : 'rgba(0,16,17,0.12)',
        boxShadow: hover ? '0 24px 48px -28px rgba(0,16,17,0.35)' : 'none',
      }}>
      {/* Image */}
      <div style={{
        position: 'relative',
        aspectRatio: featured ? '4 / 3.2' : '4 / 3.2',
        overflow: 'hidden',
        background: '#f3f1ee',
      }}>
        <img src={FENCE_IMG[item.img]} alt={item.name}
          style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
            transform: hover ? 'scale(1.04)' : 'scale(1)',
            transition: 'transform 0.6s ease',
          }}/>
        {/* Number badge */}
        <div className="mono" style={{
          position: 'absolute', top: 14, left: 14,
          fontSize: 10, fontWeight: 600, letterSpacing: '0.18em',
          color: 'var(--ink)',
          background: 'var(--white)',
          padding: '5px 9px',
        }}>{num}</div>
        {item.isNew && (
          <div className="mono" style={{
            position: 'absolute', top: 14, right: 14,
            fontSize: 10, fontWeight: 700, letterSpacing: '0.18em',
            color: 'var(--ink)',
            background: 'var(--tangerine)',
            padding: '5px 9px',
          }}>NEW</div>
        )}
      </div>

      {/* Content */}
      <div style={{
        padding: featured ? '32px 32px 28px' : '24px 24px 22px',
        display: 'flex', flexDirection: 'column', gap: 12,
        flex: 1,
      }}>
        <div className="mono" style={{
          fontSize: 11, letterSpacing: '0.16em',
          color: 'var(--charcoal)', textTransform: 'uppercase',
        }}>{item.tag}</div>

        <h3 className="display" style={{
          margin: 0,
          fontSize: featured ? 'clamp(28px, 2.6vw, 38px)' : 'clamp(20px, 1.8vw, 24px)',
          lineHeight: 1.05, letterSpacing: '-0.01em',
        }}>{item.name}</h3>

        {featured && (
          <p style={{
            fontSize: 14, lineHeight: 1.6, color: 'var(--charcoal)',
            margin: '6px 0 0', maxWidth: 480,
          }}>{item.desc}</p>
        )}

        <div style={{
          marginTop: featured ? 18 : 'auto',
          paddingTop: featured ? 0 : 14,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          borderTop: featured ? 'none' : '1px solid rgba(0,16,17,0.1)',
        }}>
          <span className="mono" style={{
            fontSize: 11, fontWeight: 700, letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: hover ? 'var(--laser-blue)' : 'var(--ink)',
            transition: 'color 0.2s ease',
          }}>Explore →</span>
          <span style={{
            width: 32, height: 32,
            border: '1px solid var(--ink)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: hover ? 'var(--ink)' : 'transparent',
            color: hover ? 'var(--white)' : 'var(--ink)',
            transition: 'all 0.2s ease',
          }}>
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square"/>
            </svg>
          </span>
        </div>
      </div>
    </a>
  );
};

/* ---------- Editorial fence card: image-led with overlaid caption ---------- */
const FenceStyleCard = ({ item, index }) => {
  const [hover, setHover] = React.useState(false);
  const num = String(index + 1).padStart(2, '0');
  return (
    <a href={item.href || '#'}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative',
        display: 'block',
        textDecoration: 'none', color: 'var(--white)',
        aspectRatio: '4 / 5',
        overflow: 'hidden',
        background: '#1a2548',
        transition: 'transform 0.35s ease',
        transform: hover ? 'translateY(-4px)' : 'none',
      }}>
      <img src={FENCE_IMG[item.img]} alt={item.name}
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%', objectFit: 'cover',
          transform: hover ? 'scale(1.06)' : 'scale(1)',
          transition: 'transform 0.7s ease',
        }}/>
      {/* Bottom scrim for legibility */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(20,30,55,0) 35%, rgba(20,30,55,0.55) 65%, rgba(20,30,55,0.92) 100%)',
      }}/>

      {/* Number + rule, top-left */}
      <div className="mono" style={{
        position: 'absolute', top: 14, left: 14,
        display: 'flex', alignItems: 'center', gap: 10,
        fontSize: 10, letterSpacing: '0.22em', fontWeight: 700,
        color: 'var(--white)',
      }}>
        <span>{num}</span>
        <span style={{ width: 22, height: 1, background: 'var(--tangerine)' }}/>
      </div>

      {/* New badge, top-right */}
      {item.isNew && (
        <span className="mono" style={{
          position: 'absolute', top: 12, right: 12,
          fontSize: 9, fontWeight: 700, letterSpacing: '0.22em',
          color: 'var(--ink)', background: 'var(--tangerine)',
          padding: '5px 8px',
        }}>NEW</span>
      )}

      {/* Caption — name + tag */}
      <div style={{
        position: 'absolute', left: 16, right: 16, bottom: 16,
      }}>
        <h3 className="display" style={{
          margin: '0 0 6px',
          fontSize: 'clamp(17px, 1.5vw, 22px)',
          lineHeight: 1, letterSpacing: '-0.01em',
        }}>{item.name}</h3>
        <div className="mono" style={{
          fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.85)',
        }}>{item.tag}</div>
      </div>

      {/* Hover arrow, bottom-right */}
      <span style={{
        position: 'absolute', bottom: 16, right: 16,
        width: 32, height: 32,
        background: 'var(--tangerine)', color: 'var(--ink)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        opacity: hover ? 1 : 0,
        transform: hover ? 'translate(0,0)' : 'translate(6px, 6px)',
        transition: 'opacity 0.25s ease, transform 0.25s ease',
      }}>
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path d="M5 11L11 5M11 5H6M11 5V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square"/>
        </svg>
      </span>
    </a>
  );
};

const FenceCategories = () => {
  const visible = FENCE_CATEGORIES;
  return (
    <section id="fences" style={{ background: 'var(--white)', padding: '64px 0' }}>
      <div className="container">
        {/* Editorial header — title left, intro + catalog link right */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 48,
          alignItems: 'end',
          paddingBottom: 24,
          marginBottom: 28,
          borderBottom: '1px solid rgba(0,16,17,0.12)',
        }}>
          <div>
            <div className="mono" style={{
              display: 'inline-flex', alignItems: 'center', gap: 12,
              fontSize: 11, fontWeight: 700,
              letterSpacing: '0.22em',
              color: 'var(--tangerine)',
              textTransform: 'uppercase',
              marginBottom: 18,
            }}>
              <span>01 — Catalog</span>
              <span style={{ width: 32, height: 1, background: 'var(--tangerine)' }}/>
            </div>
            <h2 className="display" style={{
              margin: 0,
              fontSize: 'clamp(28px, 3vw, 40px)',
              lineHeight: 1, letterSpacing: '-0.02em',
              fontWeight: 800,
            }}>
              Five systems.<br/>
              <span style={{ color: 'var(--tangerine)' }}>One yard.</span>
            </h2>
          </div>
          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 18,
          }}>
            <p style={{
              margin: 0, maxWidth: 360,
              fontSize: 14, lineHeight: 1.55,
              color: 'var(--charcoal)',
              textAlign: 'right',
            }}>
              Supplier-direct pricing for contractors, homeowners and DIY projects across
              SW Florida — factory-direct, stocked, and quoted in 24 hours. We supply
              the materials; we don't install.
            </p>
            <a href="products.html" className="mono" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              fontSize: 11, fontWeight: 700,
              letterSpacing: '0.22em', textTransform: 'uppercase',
              color: 'var(--ink)',
              borderBottom: '1px solid var(--ink)',
              paddingBottom: 4,
            }}>
              Full catalog
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Equal 5-column grid — every fence card same size, image-led */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 14,
        }}>
          {visible.map((c, i) => (
            <FenceStyleCard key={c.id} item={c} index={i}/>
          ))}
        </div>
      </div>
    </section>
  );
};

const GateSystems = () => {
  const visible = GATE_SYSTEMS.map(g => ({ ...g, href: g.href || 'estimate.html' }));
  return (
    <section id="gates" style={{ background: '#faf9f7', padding: '64px 0' }}>
      <div className="container">
        {/* Editorial header — title left, intro + custom-quote link right */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 48,
          alignItems: 'end',
          paddingBottom: 24,
          marginBottom: 28,
          borderBottom: '1px solid rgba(0,16,17,0.12)',
        }}>
          <div>
            <div className="mono" style={{
              display: 'inline-flex', alignItems: 'center', gap: 12,
              fontSize: 11, fontWeight: 700,
              letterSpacing: '0.22em',
              color: 'var(--tangerine)',
              textTransform: 'uppercase',
              marginBottom: 18,
            }}>
              <span>02 — Gates</span>
              <span style={{ width: 32, height: 1, background: 'var(--tangerine)' }}/>
            </div>
            <h2 className="display" style={{
              margin: 0,
              fontSize: 'clamp(28px, 3vw, 40px)',
              lineHeight: 1, letterSpacing: '-0.02em',
              fontWeight: 800,
            }}>
              Welded in-house.<br/>
              <span style={{ color: 'var(--tangerine)' }}>Sized to fit.</span>
            </h2>
          </div>
          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 18,
          }}>
            <p style={{
              margin: 0, maxWidth: 360,
              fontSize: 14, lineHeight: 1.55,
              color: 'var(--charcoal)',
              textAlign: 'right',
            }}>
              From walk gates to industrial cantilever. Pre-hung options ship
              complete with hardware — quoted in 24 hours.
            </p>
            <a href="estimate.html" className="mono" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              fontSize: 11, fontWeight: 700,
              letterSpacing: '0.22em', textTransform: 'uppercase',
              color: 'var(--ink)',
              borderBottom: '1px solid var(--ink)',
              paddingBottom: 4,
            }}>
              Custom quote
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Equal 5-column grid — image-led cards, all same size */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 14,
        }}>
          {visible.map((g, i) => (
            <FenceStyleCard key={g.id} item={g} index={i}/>
          ))}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { FenceCategories, GateSystems });
