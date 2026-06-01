/* Homepage product sections — Fences (5 types incl. EC Fence) + Gates (5 systems) */

const FENCE_CATEGORIES = [
  {
    id: 'vinyl', name: { EN: 'Vinyl / PVC', ES: 'Vinilo / PVC' }, tag: { EN: 'Privacy, Picket & Ranch', ES: 'Privacidad, picket y rancho' },
    img: 'vinyl', href: 'vinyl.html',
    desc: { EN: "Low-maintenance vinyl in privacy, picket and ranch profiles. Won't rot, rust, peel or fade — engineered for Florida sun and salt air with a transferable lifetime warranty.",
            ES: 'Vinilo de bajo mantenimiento en perfiles de privacidad, picket y rancho. No se pudre, no se oxida, no se pela ni decolora — diseñado para el sol y aire salino de Florida con garantía de por vida transferible.' },
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
    desc: { EN: 'Aluminum board privacy fencing — the strength of metal with the look of solid board. Hurricane-rated, no warping, no painting, no replacement boards.',
            ES: 'Cerca de privacidad de tabla aluminio — la fuerza del metal con el aspecto de tabla sólida. Resistente a huracanes, no se deforma, no se pinta, no se reemplazan tablas.' },
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
    id: 'single-swing', name: { EN: 'Single Swing', ES: 'Batiente sencillo' }, tag: { EN: 'Walk gates & entry points', ES: 'Peatonal y puntos de entrada' },
    img: 'gate-single', href: 'gate-single.html',
    desc: { EN: 'Standard pedestrian and entry gates from 3 to 6 ft wide. Mechanically assembled or welded, with hardware to match every fence material we stock.',
            ES: 'Portones peatonales y de entrada estándar de 3 a 6 pies de ancho. Ensamblados mecánicamente o soldados, con hardware para cada material de cerca en stock.' },
  },
  {
    id: 'double-swing', name: { EN: 'Double Swing', ES: 'Batiente doble' }, tag: { EN: 'Driveway access gates', ES: 'Portones de acceso vehicular' },
    img: 'gate-double', href: 'gate-double.html',
    desc: { EN: 'Driveway-width gates from 8 to 16 ft total opening. Pre-hung options for single-day install with drop rod and gate latch hardware included.',
            ES: 'Portones de ancho vehicular de 8 a 16 pies de abertura total. Opciones preinstaladas para montaje en un día, con barra de caída y herrajes incluidos.' },
  },
  {
    id: 'sliding', name: { EN: 'Sliding Gates', ES: 'Portones corredizos' }, tag: { EN: 'Space-saving operation', ES: 'Operación que ahorra espacio' },
    img: 'gate-sliding', href: 'gate-sliding.html',
    desc: { EN: 'Track-mounted sliding gates for tight or graded openings. Manual or automated with operator and safety package available.',
            ES: 'Portones corredizos sobre riel para aberturas estrechas o en pendiente. Manuales o automáticos con operador y paquete de seguridad disponibles.' },
  },
  {
    id: 'cantilever', name: { EN: 'Cantilever', ES: 'Cantilever' }, tag: { EN: 'No ground track needed', ES: 'Sin riel en el suelo' },
    img: 'gate-cantilever', href: 'gate-cantilever.html',
    desc: { EN: 'Counter-balanced rolling gates with no ground track — ideal for sites with sand, debris or grade change. Up to 50 ft single openings.',
            ES: 'Portones rodantes contrabalanceados sin riel en el suelo — ideales para sitios con arena, escombros o cambios de nivel. Aberturas únicas hasta 50 pies.' },
  },
  {
    id: 'rolling', name: { EN: 'Rolling Gate', ES: 'Portón rodante' }, tag: { EN: 'Industrial rolling gates', ES: 'Portones rodantes industriales' },
    img: 'gate-rolling', href: 'gate-rolling.html',
    desc: { EN: 'Industrial rolling gates with V-track and rollers. Built for high-cycle commercial use, secured perimeters, yards and operations.',
            ES: 'Portones rodantes industriales con V-track y rodillos. Construidos para uso comercial de alto ciclo, perímetros seguros, patios y operaciones.' },
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
        background: '#1a2548',
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
        }}>{t('NEW', 'NUEVO')}</span>
      )}

      {/* Caption — name + tag */}
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

/* Rarity-style accent per fence — drives card frame, glow & background wash.
   Keeps tangerine as the brand hero on metal/EC while giving each system its
   own "tier" color for the game-UI feel. */
const FENCE_RARITY = {
  vinyl:     { tier: { EN: 'Privacy Class',   ES: 'Clase Privacidad' }, c1: '#36c5ff', c2: '#2e59c1' },
  aluminum:  { tier: { EN: 'Versatile Class', ES: 'Clase Versátil' },   c1: '#b98bff', c2: '#6342c9' },
  chainlink: { tier: { EN: 'Workhorse Class', ES: 'Clase Resistente' }, c1: '#46e3a0', c2: '#1f9d6b' },
  metal:     { tier: { EN: 'Premium Class',   ES: 'Clase Premium' },    c1: '#ffb24d', c2: '#ff7133' },
  ecfence:   { tier: { EN: 'Legendary',       ES: 'Legendaria' },       c1: '#ff7bd5', c2: '#ff3d8b' },
};

/* Single selectable card in the rail — Fortnite locker style */
const FenceArenaCard = ({ item, index, active, onSelect }) => {
  const t = useT();
  const num = String(index + 1).padStart(2, '0');
  const nameStr = t(item.name);
  const r = FENCE_RARITY[item.id] || { c1: 'var(--glaucous)', c2: 'var(--indigo-blue)' };
  return (
    <a
      href={item.href || '#'}
      className={`fence-card${active ? ' is-active' : ''}`}
      style={{ '--r1': r.c1, '--r2': r.c2 }}
      onMouseEnter={() => onSelect(index)}
      onFocus={() => onSelect(index)}
      onClick={(e) => { if (!active) { e.preventDefault(); onSelect(index); } }}
      aria-label={nameStr}
    >
      <div className="fence-card__inner">
        <img className="fence-card__img" src={FENCE_IMG[item.img]} alt={nameStr} />
        <div className="fence-card__scrim" />
        <span className="fence-card__sheen" />

        {/* index + rule, top-left */}
        <div className="mono" style={{
          position: 'absolute', top: 11, left: 11,
          display: 'flex', alignItems: 'center', gap: 8,
          fontSize: 10, letterSpacing: '0.22em', fontWeight: 700, color: 'var(--white)',
        }}>
          <span>{num}</span>
          <span style={{ width: 16, height: 2, background: r.c1, display: 'block' }} />
        </div>

        {item.isNew && (
          <span className="mono" style={{
            position: 'absolute', top: 10, right: 10,
            fontSize: 8, fontWeight: 700, letterSpacing: '0.2em',
            color: 'var(--ink)', background: r.c1, padding: '4px 6px',
          }}>{t('NEW', 'NUEVO')}</span>
        )}

        {/* name pinned bottom */}
        <div style={{ position: 'absolute', left: 12, right: 12, bottom: 12 }}>
          <h3 className="display" style={{
            margin: 0, color: 'var(--white)',
            fontSize: 'clamp(13px, 1.05vw, 17px)', lineHeight: 1, letterSpacing: '-0.01em',
          }}>{nameStr}</h3>
        </div>
      </div>
    </a>
  );
};

/* One detail panel (badge + title + tag + copy + CTA). All five are stacked
   in the same grid cell so the container always reserves the tallest panel's
   height — switching systems never reflows the layout (no vertical jump). */
const FenceArenaDetail = ({ item, index, active }) => {
  const t = useT();
  const r = FENCE_RARITY[item.id] || { c1: 'var(--glaucous)', c2: 'var(--indigo-blue)', tier: { EN: 'System', ES: 'Sistema' } };
  const nameStr = t(item.name);
  return (
    <div style={{
      gridArea: '1 / 1',
      maxWidth: 560,
      opacity: active ? 1 : 0,
      visibility: active ? 'visible' : 'hidden',
      transform: active ? 'translateY(0)' : 'translateY(8px)',
      transition: 'opacity 0.45s ease, transform 0.45s ease',
      pointerEvents: active ? 'auto' : 'none',
    }}>
      <div className="mono" style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        fontSize: 10, letterSpacing: '0.22em', fontWeight: 700, textTransform: 'uppercase',
        color: 'var(--ink)', background: r.c1, padding: '5px 9px', marginBottom: 16,
      }}>
        <span>{String(index + 1).padStart(2, '0')}</span>
        <span style={{ opacity: 0.55 }}>/</span>
        <span>{t(r.tier)}</span>
      </div>
      <h2 className="display" style={{
        margin: '0 0 14px', color: 'var(--white)',
        fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: 0.92, letterSpacing: '-0.02em', fontWeight: 800,
        textShadow: '0 4px 30px rgba(0,0,0,0.4)',
      }}>{nameStr}</h2>
      <div className="mono" style={{
        fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase',
        color: r.c1, marginBottom: 16, fontWeight: 700,
      }}>{t(item.tag)}</div>
      <p style={{
        margin: '0 0 26px', maxWidth: 480,
        fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,0.86)',
      }}>{t(item.desc)}</p>
      <a href={item.href || '#'} className="mono" style={{
        display: 'inline-flex', alignItems: 'center', gap: 12,
        fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase',
        color: 'var(--ink)', background: 'var(--tangerine)', padding: '14px 22px',
      }}>
        {t('Explore', 'Explorar')} {nameStr}
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square"/>
        </svg>
      </a>
    </div>
  );
};

const FenceCategories = () => {
  const t = useT();
  const items = FENCE_CATEGORIES;
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
  const r = FENCE_RARITY[item.id] || { c1: 'var(--glaucous)', c2: 'var(--indigo-blue)', tier: { EN: 'System', ES: 'Sistema' } };

  return (
    <section id="fences" className="fence-arena" style={{ padding: 'clamp(56px, 7vw, 96px) 0' }}>
      {/* Crossfading environment photos */}
      {items.map((c, i) => (
        <div
          key={c.id}
          className={`fence-arena__bg${i === active ? ' is-active' : ''}`}
          style={{ backgroundImage: `url(${FENCE_IMG[c.img]})` }}
        />
      ))}
      <div className="fence-arena__wash" style={{
        background: `radial-gradient(90% 70% at 18% 30%, ${r.c1}88, transparent 60%), linear-gradient(180deg, ${r.c2}55, transparent 55%)`,
      }} />
      <div className="fence-arena__scrim" />
      <div className="fence-arena__grid" />

      <div className="container fence-arena__inner">
        {/* Top eyebrow row */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          gap: 24, flexWrap: 'wrap', marginBottom: 'clamp(20px, 4vw, 44px)',
        }}>
          <div className="mono" style={{
            fontSize: 11, letterSpacing: '0.28em', fontWeight: 700, textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.72)',
          }}>
            {t('Five systems.', 'Cinco sistemas.')}{' '}
            <span style={{ color: 'var(--tangerine)' }}>{t('One yard.', 'Una sucursal.')}</span>
          </div>
          <a href="products.html" className="mono" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase',
            color: 'var(--white)', borderBottom: '1px solid rgba(255,255,255,0.6)', paddingBottom: 4,
          }}>
            {t('Full catalog', 'Catálogo completo')}
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square"/>
            </svg>
          </a>
        </div>

        {/* Active-system detail — all panels stacked in one grid cell so the
            block height stays fixed (tallest panel) and never reflows. */}
        <div style={{ display: 'grid', marginBottom: 'clamp(28px, 5vw, 56px)' }}>
          {items.map((c, i) => (
            <FenceArenaDetail key={c.id} item={c} index={i} active={i === active} />
          ))}
        </div>

        {/* The locker — selectable rail of all five systems */}
        <div className="fence-rail">
          {items.map((c, i) => (
            <FenceArenaCard
              key={c.id}
              item={c}
              index={i}
              active={i === active}
              onSelect={select}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const GateSystems = () => {
  const t = useT();
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
            <h2 className="display" style={{
              margin: 0,
              fontSize: 'clamp(28px, 3vw, 40px)',
              lineHeight: 1, letterSpacing: '-0.02em',
              fontWeight: 800,
            }}>
              {t('Welded in-house.', 'Soldados en planta.')}<br/>
              <span style={{ color: 'var(--tangerine)' }}>{t('Sized to fit.', 'A la medida.')}</span>
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
              {t(
                'From walk gates to industrial cantilever. Pre-hung options ship complete with hardware — quoted in 24 hours.',
                'Desde portones peatonales hasta cantilever industriales. Opciones preinstaladas se envían completas con herrajes — cotizadas en 24 horas.'
              )}
            </p>
            <a href="estimate.html" className="mono" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              fontSize: 11, fontWeight: 700,
              letterSpacing: '0.22em', textTransform: 'uppercase',
              color: 'var(--ink)',
              borderBottom: '1px solid var(--ink)',
              paddingBottom: 4,
            }}>
              {t('Custom quote', 'Cotización a medida')}
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

Object.assign(window, {
  FenceCategories, GateSystems,
  FENCE_CATEGORIES, GATE_SYSTEMS, FenceStyleCard,
});
