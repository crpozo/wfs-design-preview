/* Homepage product sections, Fences (5 types incl. EC Fence) + Gates (5 systems) */

const FENCE_CATEGORIES = [
  {
    id: 'vinyl', name: { EN: 'Vinyl / PVC', ES: 'Vinilo / PVC' }, tag: { EN: 'Privacy, Picket & Ranch', ES: 'Privacidad, picket y rancho' },
    img: 'vinyl', href: 'vinyl.html',
    desc: { EN: "Low-maintenance vinyl in privacy, picket and ranch profiles. Won't rot, rust, peel or fade, engineered for Florida sun and salt air with a transferable lifetime warranty.",
            ES: 'Vinilo de bajo mantenimiento en perfiles de privacidad, picket y rancho. No se pudre, no se oxida, no se pela ni decolora, diseñado para el sol y aire salino de Florida con garantía de por vida transferible.' },
  },
  {
    id: 'aluminum', name: { EN: 'Aluminum', ES: 'Aluminio' }, tag: { EN: 'Residential & Commercial', ES: 'Residencial y comercial' },
    img: 'aluminum', href: 'aluminum.html',
    desc: { EN: 'Powder-coated aluminum panels in 3, 4 and 5-rail configurations. Pool-code compliant, rackable on grade and available in residential, commercial and industrial grades.',
            ES: 'Paneles de aluminio con pintura en polvo en configuraciones de 3, 4 y 5 rieles. Cumple código de piscinas, adaptable a pendientes y disponible en grados residencial, comercial e industrial.' },
  },
  {
    id: 'chainlink', name: { EN: 'Chain Link', ES: 'Malla ciclónica' }, tag: { EN: 'Galvanized & Vinyl Coated', ES: 'Galvanizada y recubierta de vinilo' },
    img: 'chainlink', href: 'chain-link.html',
    desc: { EN: 'Galvanized and vinyl-coated mesh from 6 to 12 gauge. The workhorse fence for security, sports, agricultural and commercial perimeters across SW Florida.',
            ES: 'Malla galvanizada y recubierta de vinilo de calibre 6 a 12. La cerca de trabajo para seguridad, deporte, agricultura y perímetros comerciales en el suroeste de Florida.' },
  },
  {
    id: 'metal', name: { EN: 'Metal / DuraFence', ES: 'Metal / DuraFence' }, tag: { EN: 'Aluminum Board Privacy', ES: 'Privacidad de tabla aluminio' },
    img: 'metal', href: 'metal.html',
    desc: { EN: 'Aluminum board privacy fencing, the strength of metal with the look of solid board. Hurricane-rated, no warping, no painting, no replacement boards.',
            ES: 'Cerca de privacidad de tabla aluminio, la fuerza del metal con el aspecto de tabla sólida. Resistente a huracanes, no se deforma, no se pinta, no se reemplazan tablas.' },
  },
  {
    id: 'ecfence', name: { EN: 'EC Fence', ES: 'EC Fence' }, tag: { EN: 'Self-Mating Galvanized Steel', ES: 'Acero galv. autoensamblable' },
    img: 'ecfence', href: 'ecfence.html', isNew: true,
    desc: { EN: 'Our newest system: self-mating galvanized steel panels installed every 12 ft. 6 ft tall, available in bronze and white. Engineered for Exposure C wind loads.',
            ES: 'Nuestro sistema más nuevo: paneles de acero galvanizado autoensamblables instalados cada 12 pies. 6 pies de alto, disponibles en bronce y blanco. Diseñados para cargas eólicas Exposición C.' },
  },
];

const GATE_SYSTEMS = [
  {
    id: 'single-swing', name: { EN: 'Single Gate', ES: 'Portón sencillo' }, tag: { EN: 'Walk & entry gates', ES: 'Peatonales y de entrada' },
    img: 'gate-single', href: 'gate-single.html',
    desc: { EN: 'Single walk gates for entry points, fabricated in-house and available in vinyl, chain link, metal and aluminum to match your fence. Standard and custom sizes.',
            ES: 'Portones peatonales para puntos de entrada, fabricados en planta y disponibles en vinilo, malla, metal y aluminio para combinar con tu cerca. Tamaños estándar y a medida.' },
  },
  {
    id: 'double-swing', name: { EN: 'Double Gate', ES: 'Portón doble' }, tag: { EN: 'Driveway drive gates', ES: 'Portones de acceso vehicular' },
    img: 'gate-double', href: 'gate-double.html',
    desc: { EN: 'Double drive gates for driveway access, fabricated in-house in vinyl, chain link, metal and aluminum, standard or custom sized, with matching hardware.',
            ES: 'Portones dobles para acceso vehicular, fabricados en planta en vinilo, malla, metal y aluminio, estándar o a medida, con herrajes a juego.' },
  },
  {
    id: 'sliding', name: { EN: 'Sliding Gate', ES: 'Portón corredizo' }, tag: { EN: 'Space-saving access', ES: 'Acceso que ahorra espacio' },
    img: 'gate-sliding', href: 'gate-sliding.html',
    desc: { EN: 'Sliding gates for openings with no room to swing. Fabricated in-house and available in standard and custom sizes.',
            ES: 'Portones corredizos para aberturas sin espacio para abatir. Fabricados en planta, en tamaños estándar y a medida.' },
  },
  {
    id: 'cantilever', name: { EN: 'Cantilever Gate', ES: 'Portón cantilever' }, tag: { EN: 'Commercial & industrial', ES: 'Comercial e industrial' },
    img: 'gate-cantilever', href: 'gate-cantilever.html',
    desc: { EN: 'Cantilever gates built for easy operation and long-lasting use, quick, secure entry to and from your property.',
            ES: 'Portones cantilever construidos para operación fácil y uso duradero, entrada y salida rápida y segura de tu propiedad.' },
  },
  {
    id: 'rolling', name: { EN: 'Rolling Gate', ES: 'Portón rodante' }, tag: { EN: 'Industrial rolling gates', ES: 'Portones rodantes industriales' },
    img: 'gate-rolling', href: 'gate-rolling.html',
    desc: { EN: 'Rolling gates built for easy operation and long-lasting use, for quick and secure entry to and from your property.',
            ES: 'Portones rodantes construidos para operación fácil y uso duradero, para entrada y salida rápida y segura de tu propiedad.' },
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
                background: isActive ? '#ffffff' : 'transparent',
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
          background: '#ffffff',
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
        background: '#ffffff',
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
  const t = useT();
  const [hover, setHover] = React.useState(false);
  const num = String(index + 1).padStart(2, '0');
  const nameStr = typeof item.name === 'string' ? item.name : t(item.name);
  const tagStr  = typeof item.tag  === 'string' ? item.tag  : t(item.tag);
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
        background: '#263166',
        transition: 'transform 0.35s ease',
        transform: hover ? 'translateY(-4px)' : 'none',
      }}>
      <img src={FENCE_IMG[item.img]} alt={nameStr}
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%', objectFit: 'cover',
          transform: hover ? 'scale(1.06)' : 'scale(1)',
          transition: 'transform 0.7s ease',
        }}/>
      {/* Bottom scrim for legibility */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(38, 49, 102,0) 35%, rgba(38, 49, 102,0.55) 65%, rgba(38, 49, 102,0.92) 100%)',
      }}/>

      {/* New badge, top-right */}
      {item.isNew && (
        <span className="mono" style={{
          position: 'absolute', top: 12, right: 12,
          fontSize: 9, fontWeight: 700, letterSpacing: '0.22em',
          color: 'var(--ink)', background: 'var(--tangerine)',
          padding: '5px 8px',
        }}>{t('NEW', 'NUEVO')}</span>
      )}

      {/* Caption, name + tag */}
      <div style={{
        position: 'absolute', left: 16, right: 16, bottom: 16,
      }}>
        <h3 className="display" style={{
          margin: '0 0 6px',
          fontSize: 'clamp(17px, 1.5vw, 22px)',
          lineHeight: 1, letterSpacing: '-0.01em',
        }}>{nameStr}</h3>
        <div className="mono" style={{
          fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.85)',
        }}>{tagStr}</div>
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

/* Accent color per system, drives the card frame, glow and background wash.
   Fences use a vivid set; gates use a metallic/industrial set so the two
   sections read as the same family but clearly distinct. */
const FENCE_RARITY = {
  vinyl:     { c1: '#2e59c1', c2: '#263166' },  // laser-blue → indigo
  aluminum:  { c1: '#6381d6', c2: '#263166' },  // glaucous → indigo
  chainlink: { c1: '#97baff', c2: '#2e59c1' },  // blue-ice → laser-blue
  metal:     { c1: '#c1c1c1', c2: '#565656' },  // silver → charcoal
  ecfence:   { c1: '#ff7133', c2: '#263166' },  // tangerine accent → ink
};
const GATE_RARITY = {
  'single-swing': { c1: '#97baff', c2: '#6381d6' },  // steel blue
  'double-swing': { c1: '#6381d6', c2: '#263166' },  // teal
  'sliding':      { c1: '#e5d8ca', c2: '#565656' },  // brass
  'cantilever':   { c1: '#c1c1c1', c2: '#565656' },  // graphite
  'rolling':      { c1: '#ffa180', c2: '#ff7133' },  // industrial orange
};

/* Single selectable card in the rail, game-locker style.
   variant 'gate' mirrors the bevel and flips the accents to the right so the
   gates rail reads as a deliberate mirror of the fences rail. */
const SystemCard = ({ item, index, active, onSelect, rarity, variant }) => {
  const t = useT();
  const nameStr = t(item.name);
  const r = rarity[item.id] || { c1: 'var(--glaucous)', c2: 'var(--indigo-blue)' };
  const right = variant === 'gate';
  return (
    <button
      type="button"
      className={`fence-card${right ? ' gate-card' : ''}${active ? ' is-active' : ''}`}
      style={{ '--r1': r.c1, '--r2': r.c2, maxHeight: 'clamp(180px, 28vh, 360px)' }}
      onMouseEnter={() => onSelect(index)}
      onFocus={() => onSelect(index)}
      onClick={() => onSelect(index)}
      aria-pressed={active}
      aria-label={nameStr}
    >
      <div className="fence-card__inner">
        <img className="fence-card__img" src={FENCE_IMG[item.img]} alt={nameStr} />
        <div className="fence-card__scrim" />
        <span className="fence-card__sheen" />

        {item.isNew && (
          <span className="mono" style={{
            position: 'absolute', top: 10, [right ? 'left' : 'right']: 10,
            fontSize: 8, fontWeight: 700, letterSpacing: '0.2em',
            color: 'var(--ink)', background: r.c1, padding: '4px 6px',
          }}>{t('NEW', 'NUEVO')}</span>
        )}

        {/* name pinned bottom */}
        <div style={{ position: 'absolute', left: 14, right: 14, bottom: 14, textAlign: right ? 'right' : 'left' }}>
          <h3 className="display" style={{
            margin: 0, color: 'var(--white)',
            fontSize: 'clamp(13px, 0.95vw, 16px)', lineHeight: 1.05, letterSpacing: '-0.01em',
          }}>{nameStr}</h3>
        </div>
      </div>
    </button>
  );
};

/* One detail panel (badge + title + tag + copy + CTA). All panels are stacked
   in the same grid cell so the container always reserves the tallest panel's
   height, switching systems never reflows the layout (no vertical jump). */
const SystemDetail = ({ item, active, rarity, align, ctaLabel }) => {
  const t = useT();
  const r = rarity[item.id] || { c1: 'var(--glaucous)', c2: 'var(--indigo-blue)' };
  const nameStr = t(item.name);
  const right = align === 'right';
  return (
    <div style={{
      gridArea: '1 / 1',
      maxWidth: 560,
      justifySelf: right ? 'end' : 'start',
      textAlign: right ? 'right' : 'left',
      opacity: active ? 1 : 0,
      visibility: active ? 'visible' : 'hidden',
      transform: active ? 'translateY(0)' : 'translateY(8px)',
      transition: 'opacity 0.45s ease, transform 0.45s ease',
      pointerEvents: active ? 'auto' : 'none',
    }}>
      <h2 className="display" style={{
        margin: '0 0 clamp(8px, 1.4vh, 14px)', color: 'var(--white)',
        fontSize: 'clamp(32px, 3vw + 1.6vh, 72px)', lineHeight: 0.92, letterSpacing: '-0.02em', fontWeight: 800,
        textShadow: '0 4px 30px rgba(0,0,0,0.4)',
      }}>{nameStr}</h2>
      <p style={{
        margin: '0 0 clamp(14px, 2.4vh, 26px)', maxWidth: 480,
        marginLeft: right ? 'auto' : 0,
        fontSize: 'clamp(13px, 1.4vh, 15px)', lineHeight: 1.55, color: 'rgba(255,255,255,0.86)',
      }}>{t(item.desc)}</p>
      <a href={item.href || '#'} className="mono" style={{
        display: 'inline-flex', alignItems: 'center', gap: 12,
        fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase',
        color: 'var(--ink)', background: 'var(--tangerine)', padding: 'clamp(11px, 1.6vh, 14px) 22px',
      }}>
        {t(ctaLabel)} {nameStr}
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square"/>
        </svg>
      </a>
    </div>
  );
};

/* Reusable full-viewport "arena": crossfading environment behind a selectable
   rail of systems. Fences and Gates share this; props differentiate them
   (palette, badge, side the copy sits on, mirrored card bevel). */
const SystemArena = ({ sectionId, items, rarity, label, chapter, align, variant, topLink, ctaLabel }) => {
  const t = useT();
  const [active, setActive] = React.useState(0);
  const [locked, setLocked] = React.useState(false);

  // Auto-cycle the "ambiente" until the visitor takes over.
  React.useEffect(() => {
    if (locked) return;
    const id = setInterval(() => setActive((a) => (a + 1) % items.length), 4200);
    return () => clearInterval(id);
  }, [locked, items.length]);

  const select = React.useCallback((i) => { setActive(i); setLocked(true); }, []);

  const item = items[active];
  const r = rarity[item.id] || { c1: 'var(--glaucous)', c2: 'var(--indigo-blue)' };
  const right = align === 'right';

  return (
    <section id={sectionId} className="fence-arena" style={{
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: 'clamp(124px, 14vh, 152px) 0 clamp(24px, 4vh, 48px)',
    }}>
      {/* Crossfading environment photos */}
      {items.map((c, i) => (
        <div
          key={c.id}
          className={`fence-arena__bg${i === active ? ' is-active' : ''}`}
          style={{ backgroundImage: `url(${FENCE_IMG[c.img]})` }}
        />
      ))}
      <div className="fence-arena__wash" style={{
        background: `radial-gradient(90% 70% at ${right ? '82%' : '18%'} 30%, ${r.c1}88, transparent 60%), linear-gradient(180deg, ${r.c2}55, transparent 55%)`,
      }} />
      <div className="fence-arena__scrim" />
      <div className="fence-arena__grid" />

      {/* Accent bar marking the seam between sections */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: r.c1, zIndex: 3, transition: 'background 0.6s ease' }} />

      <div className="container fence-arena__inner" style={{
        flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0, width: '100%',
      }}>
        {/* Section masthead, chapter number + big section name + accent rule
            on one side, catalog/quote link on the other, with a divider rule.
            This clearly announces each section so Fences and Gates don't blur
            into one continuous block. */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexDirection: right ? 'row-reverse' : 'row',
          gap: 24, flexWrap: 'wrap',
          borderBottom: '1px solid rgba(255,255,255,0.20)',
          paddingBottom: 'clamp(12px, 1.8vh, 20px)',
          marginBottom: 'clamp(14px, 2.6vh, 34px)',
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 14,
            flexDirection: right ? 'row-reverse' : 'row',
          }}>
            <span className="mono" style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.18em',
              color: 'var(--ink)', background: r.c1, padding: '4px 8px',
            }}>{chapter}</span>
            <span className="display" style={{
              fontSize: 'clamp(18px, 1.4vw + 0.8vh, 30px)', fontWeight: 800,
              letterSpacing: '0.02em', color: 'var(--white)', lineHeight: 1,
            }}>{t(label)}</span>
            <span style={{ width: 'clamp(28px, 5vw, 88px)', height: 2, background: r.c1, transition: 'background 0.5s ease' }} />
          </div>
          <a href={topLink.href} className="mono" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase',
            color: 'var(--white)', borderBottom: '1px solid rgba(255,255,255,0.6)', paddingBottom: 4,
          }}>
            {t(topLink.label)}
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square"/>
            </svg>
          </a>
        </div>

        {/* Active-system detail, all panels stacked in one grid cell so the
            block height stays fixed (tallest panel) and never reflows. */}
        <div style={{ display: 'grid', marginBottom: 'clamp(16px, 3vh, 40px)', justifyItems: right ? 'end' : 'start' }}>
          {items.map((c, i) => (
            <SystemDetail key={c.id} item={c} active={i === active}
              rarity={rarity} align={align} ctaLabel={ctaLabel} />
          ))}
        </div>

        {/* The locker, selectable rail, pinned to the bottom so the section
            fills the viewport top-to-bottom */}
        <div className="fence-rail" style={{ marginTop: 'auto' }}>
          {items.map((c, i) => (
            <SystemCard
              key={c.id}
              item={c}
              index={i}
              active={i === active}
              onSelect={select}
              rarity={rarity}
              variant={variant}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/* Fences, full-bleed expanding slats: hover a slat and it grows while the
   others compress. Collapsed slats show a vertical label; the expanded one
   reveals title + copy + explore link. */
const FenceCategories = () => {
  const t = useT();
  const [active, setActive] = React.useState(0);
  return (
    <section id="fences" style={{
      background: 'var(--indigo-blue)',
      height: 'max(640px, calc(100svh - 80px))',
      display: 'flex', flexDirection: 'column',
      overflow: 'hidden',
    }}>
      {/* Header */}
      <div className="container" style={{
        width: '100%',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 24, flexWrap: 'wrap',
        padding: 'clamp(28px, 4.5vh, 44px) var(--pad)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <span className="mono" style={{
            background: 'var(--laser-blue)', color: 'var(--white)',
            padding: '3px 7px', fontSize: 13, fontWeight: 700, lineHeight: 1,
          }}>01</span>
          <h2 className="display" style={{
            margin: 0, fontSize: 'clamp(28px, 2.6vw, 40px)', fontWeight: 800,
            letterSpacing: '-0.01em', textTransform: 'uppercase', color: 'var(--white)',
            lineHeight: 1,
          }}>{t('Fences', 'Cercas')}</h2>
          <span aria-hidden style={{ width: 90, height: 2, background: 'var(--laser-blue)' }}/>
        </div>
        <a href="products.html" className="mono" style={{
          fontSize: 'clamp(12px, 1vw, 15px)', fontWeight: 700,
          letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--white)',
        }}>{t('Full catalog', 'Catálogo completo')} →</a>
      </div>

      {/* Slats */}
      <div className="wfs-slats">
        {FENCE_CATEGORIES.map((c, i) => {
          const exp = i === active;
          return (
            <a key={c.id} href={c.href}
              className="wfs-slat"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              style={{ flexGrow: exp ? 3.2 : 1, flexBasis: 0 }}>
              <img src={FENCE_IMG[c.img]} alt={t(c.name)} style={{
                position: 'absolute', inset: 0, width: '100%', height: '100%',
                objectFit: 'cover',
              }}/>
              {/* Navy overlay, lighter on the expanded slat */}
              <div aria-hidden style={{
                position: 'absolute', inset: 0,
                background: exp ? 'rgba(38, 49, 102, 0.14)' : 'rgba(38, 49, 102, 0.66)',
                transition: 'background 0.5s ease',
              }}/>
              {/* Number */}
              <span className="mono" style={{
                position: 'absolute', top: 24, left: 24,
                fontSize: 15, fontWeight: 700, lineHeight: 1,
                color: exp ? 'var(--tangerine)' : 'var(--blue-ice)',
                transition: 'color 0.35s ease',
              }}>0{i + 1}</span>
              {/* New chip */}
              {c.isNew && (
                <span className="mono" style={{
                  position: 'absolute', top: 22, right: 22,
                  background: 'var(--tangerine)', color: 'var(--white)',
                  padding: '4px 8px', fontSize: 10, fontWeight: 700,
                  letterSpacing: '0.22em', textTransform: 'uppercase', lineHeight: 1,
                }}>{t('New', 'Nuevo')}</span>
              )}
              {/* Collapsed, vertical label */}
              <span className="mono wfs-slat__vlabel" style={{
                position: 'absolute', bottom: 26, left: 22,
                fontSize: 'clamp(13px, 1.1vw, 19px)', fontWeight: 600,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'var(--white)', whiteSpace: 'nowrap',
                opacity: exp ? 0 : 1,
                transition: 'opacity 0.3s ease',
              }}>{t(c.name)}</span>
              {/* Expanded content */}
              <div style={{
                position: 'absolute', left: 'clamp(24px, 3vw, 44px)', right: 'clamp(20px, 2.5vw, 40px)', bottom: 'clamp(26px, 4.5vh, 44px)',
                opacity: exp ? 1 : 0,
                transform: exp ? 'translateY(0)' : 'translateY(12px)',
                transition: exp ? 'opacity 0.4s ease 0.18s, transform 0.4s ease 0.18s' : 'opacity 0.2s ease, transform 0.2s ease',
                pointerEvents: exp ? 'auto' : 'none',
              }}>
                <h3 className="display" style={{
                  margin: '0 0 12px', fontSize: 'clamp(26px, 2.9vw, 56px)',
                  fontWeight: 800, lineHeight: 0.98, letterSpacing: '-0.01em',
                  textTransform: 'uppercase', color: 'var(--white)',
                }}>{t(c.name)}</h3>
                <p style={{
                  margin: '0 0 18px', maxWidth: 520,
                  fontSize: 'clamp(13px, 1.05vw, 16px)', lineHeight: 1.5,
                  color: 'var(--alice-blue)',
                }}>{t(c.desc)}</p>
                <span className="mono" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 12,
                  fontSize: 'clamp(12px, 1vw, 15px)', fontWeight: 700,
                  letterSpacing: '0.16em', textTransform: 'uppercase',
                  color: 'var(--tangerine)',
                }}>{t('Explore', 'Explora')} {t(c.name)} <span style={{ fontSize: '1.25em' }}>→</span></span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

/* Gates, same arena, mirrored to the right with an industrial palette so it
   reads as gates, not a second fences section. */
const GateSystems = () => (
  <SystemArena
    sectionId="gates"
    items={GATE_SYSTEMS}
    rarity={GATE_RARITY}
    label={{ EN: 'Gates', ES: 'Portones' }}
    chapter="02"
    align="right"
    variant="gate"
    topLink={{ href: 'estimate.html', label: { EN: 'Custom quote', ES: 'Cotización a medida' } }}
    ctaLabel={{ EN: 'Explore', ES: 'Explorar' }}
  />
);

/* Why WFS, a light value-props "breather" between the two dark arenas.
   No chapter number so the 01 / 02 arena sequence stays intact. */
const WHY_WFS = [
  {
    title: { EN: 'Manufacturing-direct', ES: 'Directo de fábrica' },
    desc:  { EN: 'Supplier-direct floor pricing, no middleman markup between the plant and your project.',
             ES: 'Precio directo de fábrica, sin intermediarios entre la planta y tu proyecto.' },
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21V10l6 3V10l6 3V10l6 3v8Z"/><path d="M3 10 4 4h2l.5 4"/></svg>),
  },
  {
    title: { EN: 'No minimums', ES: 'Sin mínimos' },
    desc:  { EN: 'Order a single panel or a full subdivision, the same supplier-direct floor either way.',
             ES: 'Pide un solo panel o una urbanización completa, el mismo precio directo en ambos casos.' },
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 21 8 12 13 3 8Z"/><path d="M3 13l9 5 9-5"/></svg>),
  },
  {
    title: { EN: 'Free takeoff · 24h quotes', ES: 'Toma de medidas gratis · 24h' },
    desc:  { EN: 'Send measurements and get itemized pricing back within 24 hours.',
             ES: 'Envía medidas y recibe precios detallados en menos de 24 horas.' },
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 3h9l5 5v13H5Z"/><path d="M14 3v5h5"/><path d="M8 13h7M8 17h5"/></svg>),
  },
  {
    title: { EN: 'Certified installers', ES: 'Instaladores certificados' },
    desc:  { EN: 'We connect you with vetted local crews to handle the build.',
             ES: 'Te conectamos con cuadrillas locales verificadas para la instalación.' },
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 19 6v6q0 5-7 9-7-4-7-9V6Z"/><path d="M9 12l2 2 4-4"/></svg>),
  },
];

const WhyWFS = () => {
  const t = useT();
  return (
    <section style={{ background: 'var(--white)', padding: 'clamp(64px, 9vh, 100px) 0' }}>
      <div className="container">
        {/* Header */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
          gap: 32, marginBottom: 'clamp(36px, 5vh, 56px)', flexWrap: 'wrap',
        }}>
          <div style={{ maxWidth: 620 }}>
            <span className="eyebrow" style={{ color: 'var(--ink)', display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 8, height: 8, background: 'var(--tangerine)' }}/>
              {t('Why Western Fence Supply', 'Por qué Western Fence Supply')}
            </span>
            <h2 className="display" style={{
              margin: '14px 0 0', fontSize: 'clamp(34px, 5vw, 56px)',
              lineHeight: 1.0, letterSpacing: '-0.02em',
            }}>
              {t('Built by fencers.', 'Hecho por cerqueros.')}<br/>
              <span style={{ color: 'var(--tangerine)' }}>{t('Priced like a supplier.', 'Preciado como proveedor.')}</span>
            </h2>
            <p style={{ margin: '18px 0 0', fontSize: 14.5, lineHeight: 1.6, color: 'var(--charcoal)' }}>
              {t(
                'We were the contractors before we were the supplier, so the yard runs on installer logic, not catalog markup.',
                'Fuimos los contratistas antes de ser el proveedor, por eso la sucursal funciona con lógica de instalador, no con margen de catálogo.'
              )}
            </p>
          </div>
          <a href="estimate.html" className="mono" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '13px 0', fontSize: 11, fontWeight: 700,
            letterSpacing: '0.22em', textTransform: 'uppercase',
            color: 'var(--ink)', borderBottom: '1px solid var(--ink)',
          }}>
            {t('Get started', 'Comenzar')}
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square"/>
            </svg>
          </a>
        </div>

        {/* Value-prop cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {WHY_WFS.map((v, i) => (
            <div key={i} style={{
              border: '1px solid rgba(38, 49, 102,0.14)',
              background: 'var(--white)',
              padding: '24px 22px 26px',
              display: 'flex', flexDirection: 'column',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 18px 40px -22px rgba(0,16,17,0.3)'; e.currentTarget.style.borderColor = 'var(--ink)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; e.currentTarget.style.borderColor = 'rgba(38, 49, 102,0.14)'; }}>
              <span style={{
                width: 46, height: 46, marginBottom: 18,
                border: '1.5px solid var(--ink)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--tangerine)',
              }}>{v.icon}</span>
              <h3 className="display" style={{
                margin: '0 0 8px', fontSize: 18, lineHeight: 1.15,
                letterSpacing: '-0.01em', color: 'var(--ink)',
              }}>{t(v.title)}</h3>
              <p className="mono" style={{
                margin: 0, fontSize: 12.5, lineHeight: 1.55, color: 'var(--charcoal)',
              }}>{t(v.desc)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, {
  FenceCategories, GateSystems, SystemArena, WhyWFS,
  FENCE_CATEGORIES, GATE_SYSTEMS, FenceStyleCard,
});
