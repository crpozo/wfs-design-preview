/* Featured products grid + Project gallery + Calculator + Service areas + Footer */

const FEATURED = [
  { sku: 'CL-9G-72', name: { EN: '9-Gauge Galvanized Mesh', ES: 'Malla galvanizada 9-Gauge' }, cat: { EN: 'Chain Link', ES: 'Malla ciclónica' }, height: '6 ft', imgUrl: 'assets/projects/cl-swing-gate-galv-4.jpg' },
  { sku: 'AL-WLD-S', name: { EN: 'Aluminum Fence Section', ES: 'Sección de cerca de aluminio' }, cat: { EN: 'Aluminum', ES: 'Aluminio' }, height: '6 ft', imgUrl: 'assets/projects/alum-2-rail-smooth-bottom-white.jpg' },
  { sku: 'PV-PRV-W', name: { EN: 'Catalyst Privacy Vinyl, White', ES: 'Vinilo de privacidad Catalyst, blanco' }, cat: { EN: 'Vinyl', ES: 'Vinilo' }, height: '6 ft', imgUrl: 'assets/projects/pvc-privacy-gate-white.jpg' },
  { sku: 'MT-PRV-72', name: { EN: 'Metal Board Privacy', ES: 'Privacidad de tablero de metal' }, cat: { EN: 'Metal', ES: 'Metal' }, height: '6 ft', imgUrl: 'assets/projects/met-fence-horizontal-black.jpg' },
  { sku: 'GT-DBL-12', name: { EN: '12 ft Double Gate', ES: 'Portón doble de 12 ft' }, cat: { EN: 'Gates', ES: 'Portones' }, height: '12 ft', imgUrl: 'assets/projects/pvc-gate-sand.jpg' },
  { sku: 'CL-VC-BK', name: { EN: 'Vinyl-Coated Black Mesh', ES: 'Malla negra revestida de vinilo' }, cat: { EN: 'Chain Link', ES: 'Malla ciclónica' }, height: '6 ft', imgUrl: 'assets/projects/cl-fence-black.jpg' },
];


const INSTALLERS = [
  { name: 'J2W Custom Fence', src: 'assets/installers/j2w-custom-fence.png' },
  { name: 'True Fence', src: 'assets/installers/true-fence.png' },
  { name: 'Good Hands Fencing', src: 'assets/installers/good-hands-fencing.png' },
  { name: 'All American Fence & Gate', src: 'assets/installers/all-american-fence-and-gate.png' },
  { name: 'SWFL Fence', src: 'assets/installers/swfl-fence.png' },
  { name: 'Supreme Fence of SWFL', src: 'assets/installers/supreme-fence.png' },
  { name: 'Southern Hoss Fences', src: 'assets/installers/southern-hoss-fences.png' },
  { name: 'M.R. Fence', src: 'assets/installers/mr-fence.png' },
  { name: 'Level Up Fencing', src: 'assets/installers/level-up-fencing.png' },
  { name: 'Baker Fence & Gate', src: 'assets/installers/baker-fence-and-gate.png' },
  { name: 'Grace Fence', src: 'assets/installers/grace-fence.png' },
  { name: 'Fence Ace', src: 'assets/installers/fence-ace.png' },
  { name: 'Zavala Fences', src: 'assets/installers/zavala-fences.png' },
  { name: 'Fence Direct', src: 'assets/installers/fence-direct.png' },
  { name: 'All American Fencing', src: 'assets/installers/all-american-fencing.png' },
];

const InstallerMarquee = () => {
  const t = useT();
  const base = [...INSTALLERS, ...INSTALLERS];
  const row = [...base, ...base];
  return (
    <section style={{ background: 'var(--white)', padding: '64px 0', borderTop: '1px solid rgba(0,16,17,0.06)', borderBottom: '1px solid rgba(0,16,17,0.06)', overflow: 'hidden' }}>
      <div className="container">
        <p className="mono" style={{
          margin: '0 0 32px',
          fontSize: 12.5, letterSpacing: '0.18em', textTransform: 'uppercase',
          color: 'rgba(0,16,17,0.4)', fontWeight: 600,
        }}>
          {t('The #1 Choice of Florida’s Top Fence Installers', 'La opción #1 de los mejores instaladores de cercas de Florida')}
        </p>
      </div>
      <div className="wfs-marquee" aria-hidden>
        <div className="wfs-marquee__track">
          {row.map((l, i) => (
            <span key={i} className="wfs-logo-cell">
              <img src={l.src} alt={l.name} className="wfs-logo-img"
                onError={e => { e.currentTarget.style.display = 'none'; const fb = e.currentTarget.nextSibling; if (fb) fb.style.display = 'inline'; }} />
              <span className="display wfs-logo-fallback">{l.name}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

const MAT_IMG = { 'Chain Link': 'chainlink', 'Aluminum': 'aluminum', 'Vinyl': 'vinyl', 'Metal': 'metal', 'EC Fence': 'ecfence' };

/* Material display labels; raw English stays the filter/data key. */
const MAT_LABELS = {
  'All': { EN: 'All', ES: 'Todos' },
  'Chain Link': { EN: 'Chain Link', ES: 'Malla ciclónica' },
  'Aluminum': { EN: 'Aluminum', ES: 'Aluminio' },
  'Vinyl': { EN: 'Vinyl', ES: 'Vinilo' },
  'Metal': { EN: 'Metal', ES: 'Metal' },
  'EC Fence': { EN: 'EC Fence', ES: 'EC Fence' },
};

const FeaturedGrid = () => {
  const t = useT();
  const PER = 3;
  const pages = Math.ceil(FEATURED.length / PER);
  const [page, setPage] = React.useState(0);
  const start = page * PER;
  const visible = FEATURED.slice(start, start + PER);
  const ArrowBtn = ({ dir, disabled, onClick }) => (
    <button onClick={onClick} disabled={disabled} aria-label={dir === 'prev' ? t('Previous', 'Anterior') : t('Next', 'Siguiente')} style={{
      width: 46, height: 46, borderRadius: '50%',
      border: `1px solid ${disabled ? 'rgba(0,16,17,0.12)' : 'var(--ink)'}`,
      background: 'var(--white)',
      color: disabled ? 'rgba(0,16,17,0.25)' : 'var(--ink)',
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      cursor: disabled ? 'default' : 'pointer',
      transition: 'border-color 0.2s ease, color 0.2s ease',
    }}>
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none" style={{ transform: dir === 'prev' ? 'rotate(180deg)' : 'none' }}>
        <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square"/>
      </svg>
    </button>
  );
  return (
    <section style={{ background: 'var(--linen)', padding: '120px 0' }}>
      <div className="container">
        {/* Header: eyebrow + one-line title, pager arrows top right */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
          gap: 32, marginBottom: 44, flexWrap: 'wrap',
        }}>
          <div>
            <span className="eyebrow" style={{ color: 'var(--laser-blue)' }}>03, Bestsellers</span>
            <h2 className="display" style={{
              fontSize: 'clamp(30px, 3.4vw, 46px)', margin: '12px 0 0',
              textTransform: 'uppercase', fontWeight: 800, letterSpacing: '-0.01em',
            }}>
              {t('In stock,', 'En existencia,')}{' '}
              <span style={{ color: 'var(--tangerine)' }}>{t('ready to ship.', 'listos para enviar.')}</span>
            </h2>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <ArrowBtn dir="prev" disabled={page === 0} onClick={() => setPage(p => Math.max(0, p - 1))}/>
            <ArrowBtn dir="next" disabled={page === pages - 1} onClick={() => setPage(p => Math.min(pages - 1, p + 1))}/>
          </div>
        </div>

        {/* Flat product cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 34 }}>
          {visible.map((p) => (
            <article key={p.sku}>
              <div style={{ position: 'relative', aspectRatio: '4 / 3', background: '#263166', overflow: 'hidden' }}>
                <img src={p.imgUrl || FENCE_IMG[p.img]} alt={t(p.name)}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              {/* Meta row: category · height + stock pill */}
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                marginTop: 16, gap: 12,
              }}>
                <span className="mono" style={{
                  fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase',
                  color: 'var(--charcoal)',
                }}>{t(p.cat)} · {p.height}</span>
                <span className="mono" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 7,
                  fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase',
                  fontWeight: 700, color: 'var(--ink)',
                }}>
                  <span aria-hidden style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--tangerine)' }}/>
                  {t('In stock', 'En existencia')}
                </span>
              </div>
              <h3 className="display" style={{
                margin: '10px 0 0', fontSize: 21, lineHeight: 1.1, fontWeight: 800,
                textTransform: 'uppercase', letterSpacing: '0.01em', color: 'var(--ink)',
              }}>{t(p.name)}</h3>
              {/* Divider + SKU / quote link */}
              <div style={{
                marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(0,16,17,0.12)',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12,
              }}>
                <span className="mono" style={{
                  fontSize: 12, letterSpacing: '0.14em', color: 'var(--charcoal)',
                }}>{p.sku}</span>
                <a href="estimate.html" className="mono" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em',
                  textTransform: 'uppercase', color: 'var(--tangerine)',
                }}>
                  {t('Request quote', 'Solicitar cotización')}
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square"/>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Footer: progress + counter + catalog download */}
        <div style={{
          marginTop: 40, display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap',
        }}>
          <span style={{ flex: 1, minWidth: 160, height: 2, background: 'rgba(0,16,17,0.12)', position: 'relative' }}>
            <span style={{
              position: 'absolute', left: 0, top: 0, bottom: 0,
              width: `${((page + 1) / pages) * 100}%`,
              background: 'var(--tangerine)', transition: 'width 0.3s ease',
            }}/>
          </span>
          <span className="mono" style={{
            fontSize: 13, letterSpacing: '0.14em', color: 'var(--charcoal)', whiteSpace: 'nowrap',
          }}>{start + 1}–{Math.min(start + PER, FEATURED.length)} / {FEATURED.length}</span>
          <a href="assets/wfs-catalog.pdf" download="WFS-Fence-Catalog.pdf" className="mono" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontSize: 12.5, fontWeight: 700, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: 'var(--tangerine)', whiteSpace: 'nowrap',
          }}>
            {t('Download catalog (PDF)', 'Descargar catálogo (PDF)')}
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
              <path d="M8 2 V13 M4 9 L8 13 L12 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

/* Uniform card, used by the full archive grid on projects.html */
const ProjectCard = ({ p, i, layout }) => {
  const t = useT();
  const [hover, setHover] = React.useState(false);
  return (
    <a href="estimate.html"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        gridColumn: layout.col,
        gridRow: layout.row,
        position: 'relative',
        overflow: 'hidden',
        background: '#263166',
        textDecoration: 'none',
        display: 'block',
      }}>
      <img src={p.imgUrl || FENCE_IMG[MAT_IMG[p.material]] || FENCE_IMG[p.img]} alt={t(p.name)}
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover',
          transform: hover ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 0.7s ease',
        }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(0,16,17,0) 35%, rgba(0,16,17,0.92) 100%)',
      }}/>

      {/* Top meta row */}
      <div style={{
        position: 'absolute', top: 18, left: 18, right: 18,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div className="mono" style={{
          fontSize: 12, letterSpacing: '0.18em',
          color: 'var(--ink)', background: 'var(--white)',
          padding: '5px 9px', fontWeight: 600,
        }}>
          {String(i + 1).padStart(2, '0')} / {p.year}
        </div>
        <div className="mono" style={{
          fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase',
          color: 'var(--white)', background: 'rgba(0,16,17,0.55)',
          padding: '5px 9px', backdropFilter: 'blur(6px)',
        }}>
          {t(MAT_LABELS[p.material] || p.material)}
        </div>
      </div>

      {/* Bottom content */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px', color: 'var(--white)' }}>
        <h3 className="display" style={{
          margin: 0,
          fontSize: 'clamp(18px, 1.5vw, 22px)',
          lineHeight: 1.05, letterSpacing: '-0.01em',
          color: 'var(--white)',
        }}>{t(p.name)}</h3>

        {/* Reveal on hover: scope + contractor */}
        <div style={{
          maxHeight: hover ? 80 : 0,
          opacity: hover ? 1 : 0,
          overflow: 'hidden',
          transition: 'all 0.35s ease',
          marginTop: hover ? 14 : 0,
        }}>
          <p style={{
            margin: 0, fontSize: 13, lineHeight: 1.55,
            color: 'var(--alice-blue)',
          }}>{t(p.type)}</p>
          <p style={{
            margin: '6px 0 0', fontSize: 12.5, fontFamily: 'var(--mono)',
            letterSpacing: '0.06em', color: 'rgba(255,255,255,0.65)',
          }}>{t('Installed by', 'Instalado por')} {p.contractor}</p>
        </div>
      </div>

      {/* Arrow corner */}
      <div style={{
        position: 'absolute', bottom: 18, right: 18,
        width: 36, height: 36, background: 'var(--white)', color: 'var(--ink)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        opacity: hover ? 1 : 0,
        transform: hover ? 'translate(0,0)' : 'translate(8px,-8px)',
        transition: 'all 0.3s ease',
      }}>
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square"/>
        </svg>
      </div>
    </a>
  );
};

const FeaturedProject = ({ p, num, total }) => {
  const t = useT();
  const [hover, setHover] = React.useState(false);
  if (!p) return null;
  return (
    <a href="estimate.html"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative', overflow: 'hidden',
        background: '#263166', textDecoration: 'none',
        display: 'block', minHeight: 'min(52vh, 500px)', maxHeight: 620,
      }}>
      <img src={p.imgUrl || FENCE_IMG[MAT_IMG[p.material]] || FENCE_IMG[p.img]} alt={t(p.name)}
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover',
          transform: hover ? 'scale(1.04)' : 'scale(1)',
          transition: 'transform 0.7s ease',
        }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(38, 49, 102,0) 16%, rgba(38, 49, 102,0.6) 52%, rgba(38, 49, 102,0.95) 100%)',
      }}/>
      {/* Tangerine top accent */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'var(--tangerine)' }}/>

      {/* Bottom content */}
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: 28, color: 'var(--white)' }}>
        <h3 className="display" style={{
          margin: 0, fontSize: 'clamp(26px, 3vw, 38px)',
          lineHeight: 1.0, letterSpacing: '-0.02em', color: 'var(--white)',
        }}>{t(p.name)}</h3>
        <p style={{
          margin: '12px 0 0', maxWidth: 460,
          fontSize: 14, lineHeight: 1.55, color: 'var(--alice-blue)',
        }}>{t(p.type)}</p>

        {/* Spec strip */}
        <div style={{
          display: 'flex', marginTop: 18, paddingTop: 16,
          borderTop: '1px solid rgba(255,255,255,0.18)',
        }}>
          {[
            [{ EN: 'Scope', ES: 'Alcance' }, t(p.size)],
            [{ EN: 'System', ES: 'Sistema' }, t(MAT_LABELS[p.material] || p.material)],
            [{ EN: 'Completed', ES: 'Completado' }, p.year],
          ].map(([k, v], i) => (
            <div key={i} style={{
              flex: 1,
              paddingLeft: i ? 18 : 0,
              borderLeft: i ? '1px solid rgba(255,255,255,0.18)' : 'none',
            }}>
              <div className="mono" style={{
                fontSize: 11.5, letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.55)', marginBottom: 5,
              }}>{t(k)}</div>
              <div className="display" style={{ fontSize: 16, color: 'var(--white)', letterSpacing: '-0.01em' }}>{v}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          marginTop: 18, display: 'flex', alignItems: 'center',
          justifyContent: 'flex-end', gap: 16, flexWrap: 'wrap',
        }}>
          <span className="mono" style={{
            display: 'inline-flex', alignItems: 'center', gap: 12,
            fontSize: 12.5, fontWeight: 700, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: 'var(--white)',
          }}>
            {t('View project', 'Ver proyecto')}
            <span style={{
              width: 34, height: 34, background: 'var(--tangerine)', color: 'var(--ink)',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              transform: hover ? 'translateX(3px)' : 'none', transition: 'transform 0.25s ease',
            }}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="square"/>
              </svg>
            </span>
          </span>
        </div>
      </div>
    </a>
  );
};

const ProjectListRow = ({ p, active, onSelect }) => {
  const t = useT();
  return (
    <button
      onClick={onSelect}
      onMouseEnter={onSelect}
      style={{
        display: 'grid', gridTemplateColumns: '72px 1fr auto', gap: 14, alignItems: 'center',
        padding: 8, width: '100%', textAlign: 'left', cursor: 'pointer',
        background: active ? '#ffffff' : 'transparent',
        border: '1px solid',
        borderColor: active ? 'rgba(38, 49, 102,0.22)' : 'rgba(0,16,17,0.10)',
        borderLeftWidth: 3,
        borderLeftColor: active ? 'var(--tangerine)' : 'transparent',
        transition: 'background 0.2s ease, border-color 0.2s ease',
      }}>
      <span style={{ display: 'block', width: 72, height: 50, overflow: 'hidden', background: '#263166' }}>
        <img src={p.imgUrl || FENCE_IMG[MAT_IMG[p.material]] || FENCE_IMG[p.img]} alt={t(p.name)}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </span>
      <span style={{ display: 'block', minWidth: 0 }}>
        <span className="display" style={{
          display: 'block', fontSize: 15.5, lineHeight: 1.1, letterSpacing: '-0.01em',
          color: 'var(--ink)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        }}>{t(p.name)}</span>
      </span>
      <span className="mono" style={{
        fontSize: 11.5, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700,
        color: active ? 'var(--ink)' : 'var(--charcoal)', flexShrink: 0,
      }}>{t(MAT_LABELS[p.material] || p.material)}</span>
    </button>
  );
};

const PageBtn = ({ active, disabled, onClick, label, arrow }) => {
  const t = useT();
  return (
  <button
    onClick={onClick}
    disabled={disabled}
    aria-label={arrow === 'prev' ? t('Previous page', 'Página anterior') : arrow === 'next' ? t('Next page', 'Página siguiente') : `${t('Page', 'Página')} ${label}`}
    className="mono"
    style={{
      width: 32, height: 32,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 12.5, fontWeight: 700, letterSpacing: '0.04em',
      border: '1px solid',
      borderColor: active ? 'var(--ink)' : 'rgba(0,16,17,0.18)',
      background: active ? 'var(--ink)' : 'transparent',
      color: active ? 'var(--white)' : 'var(--ink)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.32 : 1,
      transition: 'background 0.2s ease, border-color 0.2s ease',
    }}>
    {arrow ? (
      <svg width="13" height="13" viewBox="0 0 16 16" fill="none"
        style={{ transform: arrow === 'prev' ? 'scaleX(-1)' : 'none' }}>
        <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square"/>
      </svg>
    ) : label}
  </button>
  );
};

const ProjectGallery = ({ featuredMaterial, items }) => {
  const t = useT();
  const [filter, setFilter] = React.useState(featuredMaterial || 'All');
  const [selected, setSelected] = React.useState(0);
  const [page, setPage] = React.useState(0);
  const curated = Array.isArray(items) && items.length > 0;
  const projects = curated ? items : [
    { name: { EN: 'Cape Coral Residential', ES: 'Residencial Cape Coral' }, loc: 'Cape Coral, FL', size: '320 LF', material: 'Chain Link', type: { EN: 'Vinyl-coated black, 6 ft, with double drive gate', ES: 'Recubierto de vinilo negro, 6 ft, con portón doble vehicular' }, contractor: 'Coastline Fence Co.', year: '2024', imgUrl: 'assets/projects/cl-fence-black.jpg' },
    { name: { EN: 'Estero Community', ES: 'Comunidad Estero' }, loc: 'Estero, FL', size: { EN: '38 lots', ES: '38 lotes' }, material: 'Metal', type: { EN: 'Metal board privacy, 6 ft, black finish', ES: 'Privacidad de tablero metálico, 6 ft, acabado negro' }, contractor: 'Gulf Perimeter LLC', year: '2024', imgUrl: 'assets/projects/met-fence-horizontal-black.jpg' },
    { name: { EN: 'Fort Myers Estate', ES: 'Residencia Fort Myers' }, loc: 'Fort Myers, FL', size: '420 LF', material: 'Aluminum', type: { EN: '2-rail aluminum, smooth bottom, white', ES: 'Aluminio de 2 rieles, base lisa, blanco' }, contractor: 'Estate Fence Pros', year: '2025', imgUrl: 'assets/projects/alum-2-rail-smooth-bottom-white.jpg' },
    { name: { EN: 'Naples Pool Enclosure', ES: 'Cerramiento de piscina Naples' }, loc: 'Naples, FL', size: '180 LF', material: 'Vinyl', type: { EN: 'Vinyl privacy, 6 ft, pool-code compliant', ES: 'Privacidad de vinilo, 6 ft, cumple código de piscinas' }, contractor: 'Naples Outdoor', year: '2025', imgUrl: 'assets/projects/pvc-closed-top-white.jpg' },
    { name: { EN: 'Bonita Springs Self-Storage', ES: 'Autoalmacenamiento Bonita Springs' }, loc: 'Bonita Springs, FL', size: '0.9 mi', material: 'Chain Link', type: { EN: 'Galvanized mesh with galvanized swing gate', ES: 'Malla galvanizada con portón abatible galvanizado' }, contractor: 'Industrial Fence FL', year: '2024', imgUrl: 'assets/projects/cl-swing-gate-galv-4.jpg' },
    { name: { EN: 'Punta Gorda Marina', ES: 'Marina Punta Gorda' }, loc: 'Punta Gorda, FL', size: '240 LF', material: 'EC Fence', type: { EN: 'EC Fence panels, 6 ft, white finish', ES: 'Paneles EC Fence, 6 ft, acabado blanco' }, contractor: 'Harbor Iron Works', year: '2025', imgUrl: 'assets/projects/ecfence-white.jpg' },
    { name: { EN: 'Lehigh Acres Warehouse', ES: 'Bodega Lehigh Acres' }, loc: 'Lehigh Acres, FL', size: '0.6 mi', material: 'Chain Link', type: { EN: 'Vinyl-coated black, 8 ft, with service gate', ES: 'Recubierto de vinilo negro, 8 ft, con portón de servicio' }, contractor: 'Industrial Fence FL', year: '2025', imgUrl: 'assets/projects/cl-gate-black.jpg' },
    { name: { EN: 'Marco Island Villa', ES: 'Villa Marco Island' }, loc: 'Marco Island, FL', size: '260 LF', material: 'Aluminum', type: { EN: 'Aluminum puppy picket, bronze estate finish', ES: 'Aluminio puppy picket, acabado bronce de alta gama' }, contractor: 'Estate Fence Pros', year: '2025', imgUrl: 'assets/projects/alum-puppy-picket-bronze.jpg' },
    { name: { EN: 'Sanibel Beachfront', ES: 'Frente de playa Sanibel' }, loc: 'Sanibel, FL', size: '150 LF', material: 'Vinyl', type: { EN: 'Vinyl privacy, two-tone white and gray', ES: 'Privacidad de vinilo, bicolor blanco y gris' }, contractor: 'Naples Outdoor', year: '2024', imgUrl: 'assets/projects/pvc-privacy-two-tone-white-and-gray.png' },
    { name: { EN: 'Immokalee Ag Facility', ES: 'Instalación agrícola Immokalee' }, loc: 'Immokalee, FL', size: '1.4 mi', material: 'Chain Link', type: { EN: 'Vinyl-coated black, 6 ft, agricultural perimeter', ES: 'Recubierto de vinilo negro, 6 ft, perímetro agrícola' }, contractor: 'Gulf Perimeter LLC', year: '2024', imgUrl: 'assets/projects/cl-fence-black-2.jpg' },
    { name: { EN: 'Port Charlotte HOA', ES: 'HOA Port Charlotte' }, loc: 'Port Charlotte, FL', size: { EN: '52 lots', ES: '52 lotes' }, material: 'EC Fence', type: { EN: 'EC Fence panels, 6 ft, bronze finish', ES: 'Paneles EC Fence, 6 ft, acabado bronce' }, contractor: 'Harbor Iron Works', year: '2025', imgUrl: 'assets/projects/ecfence-bronze.jpg' },
    { name: { EN: 'Golden Gate Estates', ES: 'Golden Gate Estates' }, loc: 'Golden Gate, FL', size: '300 LF', material: 'Metal', type: { EN: 'Metal fence, 3-rail, brown finish', ES: 'Cerca metálica, 3 rieles, acabado marrón' }, contractor: 'Gulf Perimeter LLC', year: '2025', imgUrl: 'assets/projects/met-fence-3-rail-brown.jpg' },
    { name: { EN: 'North Fort Myers Depot', ES: 'Depósito North Fort Myers' }, loc: 'North Fort Myers, FL', size: '0.8 mi', material: 'Chain Link', type: { EN: 'Vinyl-coated black, 8 ft perimeter', ES: 'Recubierto de vinilo negro, perímetro de 8 ft' }, contractor: 'Industrial Fence FL', year: '2025', imgUrl: 'assets/projects/cl-fence-black.jpg' },
  ];

  const filters = ['All', 'Chain Link', 'Aluminum', 'Vinyl', 'Metal', 'EC Fence'];
  const visible = filter === 'All' ? projects : projects.filter(p => p.material === filter);
  const sel = Math.min(selected, Math.max(0, visible.length - 1));
  const feat = visible[sel];

  const PER_PAGE = 5;
  const pageCount = Math.max(1, Math.ceil(visible.length / PER_PAGE));
  const pg = Math.min(page, pageCount - 1);
  const start = pg * PER_PAGE;
  const pageItems = visible.slice(start, start + PER_PAGE);
  const goPage = (n) => { const c = Math.max(0, Math.min(n, pageCount - 1)); setPage(c); setSelected(c * PER_PAGE); };

  return (
    <section id="projects" style={{ background: 'var(--white)', padding: 'clamp(48px, 7vh, 84px) 0' }}>
      <div className="container">
        {/* Editorial header */}
        <div style={{
          paddingBottom: 8, marginBottom: 18,
        }}>
          <h2 className="display" style={{
            margin: 0, fontSize: 'clamp(26px, 2.6vw, 36px)',
            lineHeight: 1, letterSpacing: '-0.02em',
            fontWeight: 800,
          }}>
            {t('Real projects.', 'Proyectos reales.')}<br/>
            <span style={{ color: 'var(--tangerine)' }}>{t('Real perimeters.', 'Perímetros reales.')}</span>
          </h2>
          <p className="mono" style={{
            margin: '10px 0 0', fontSize: 12.5, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: 'var(--charcoal)',
          }}>
            {t('Flagship perimeters across Southwest Florida, pick one to preview.',
               'Perímetros insignia en el suroeste de Florida, elige uno para verlo.')}
          </p>
        </div>

        {/* Filter chips */}
        <div style={{
          display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 18,
          paddingBottom: 12, borderBottom: '1px solid rgba(0,16,17,0.12)',
        }}>
          {!curated && filters.map(f => {
            const active = f === filter;
            return (
              <button key={f} onClick={() => { setFilter(f); setSelected(0); setPage(0); }} className="mono"
                style={{
                  padding: '6px 12px',
                  fontSize: 12, letterSpacing: '0.18em',
                  textTransform: 'uppercase', fontWeight: 700,
                  border: '1px solid var(--ink)',
                  background: active ? 'var(--ink)' : 'transparent',
                  color: active ? 'var(--white)' : 'var(--ink)',
                  cursor: 'pointer',
                }}>
                {t(MAT_LABELS[f] || f)}
              </button>
            );
          })}
        </div>

        {/* Featured project (left) + selectable list (right) */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1.4fr 1fr',
          gap: 18, alignItems: 'stretch',
        }}>
          <FeaturedProject p={feat} num={sel} total={visible.length} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {pageItems.map((p, i) => (
                <ProjectListRow key={p.name.EN || p.name} p={p} active={(start + i) === sel}
                  onSelect={() => setSelected(start + i)} />
              ))}
            </div>

            {pageCount > 1 && (
              <div style={{
                marginTop: 'auto', paddingTop: 18,
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
              }}>
                <span className="mono" style={{
                  fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--charcoal)',
                }}>
                  {start + 1}-{Math.min(start + PER_PAGE, visible.length)} {t('of', 'de')} {visible.length}
                </span>
                <div style={{ display: 'flex', gap: 6 }}>
                  <PageBtn disabled={pg === 0} onClick={() => goPage(pg - 1)} arrow="prev" />
                  {Array.from({ length: pageCount }).map((_, n) => (
                    <PageBtn key={n} active={n === pg} onClick={() => goPage(n)} label={n + 1} />
                  ))}
                  <PageBtn disabled={pg === pageCount - 1} onClick={() => goPage(pg + 1)} arrow="next" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Calculator = () => {
  const t = useT();
  const [length, setLength] = React.useState(150);
  const [height, setHeight] = React.useState(6);
  const [type, setType] = React.useState('chain-link');
  const [gates, setGates] = React.useState(1);

  const ratePerFt = { 'chain-link': 8.4, 'aluminum': 24.5, 'vinyl': 28, 'metal': 22 }[type];
  const heightFactor = height / 6;
  const matCost = Math.round(length * ratePerFt * heightFactor);
  const gateCost = gates * (type === 'chain-link' ? 320 : 680);
  const total = matCost + gateCost;

  return (
    <section id="calculator" style={{ background: 'var(--indigo-blue)', color: 'var(--parchment)', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.18, pointerEvents: 'none' }}>
        <ChainLinkSVG color="#97baff" opacity={0.6} />
      </div>

      <div className="container" style={{ position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 60, alignItems: 'start' }}>
          <div>
            <h2 className="display" style={{ fontSize: 'clamp(40px, 5.5vw, 60px)', margin: '0 0 24px' }}>
              {t('5-minute', 'Calculadora de cercas')}<br/>{t('fence calculator.', 'en 5 minutos.')}
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.5, color: 'var(--alice-blue)', maxWidth: 420, marginBottom: 32 }}>
              {t('Get a real-time materials estimate. We follow up with a binding quote within 24 hours, including delivery and any local code adjustments.', 'Obtén un estimado de materiales en tiempo real. Damos seguimiento con una cotización en firme dentro de 24 horas, incluyendo entrega y cualquier ajuste por normativa local.')}
            </p>
            <div style={{ display: 'grid', gap: 16, maxWidth: 380 }}>
              {[
                [t('MATERIALS-ONLY', 'SOLO MATERIALES'), t('No labor markup. We sell what installers buy.', 'Sin recargo por mano de obra. Vendemos lo que compran los instaladores.')],
                [t('LIVE INVENTORY', 'INVENTARIO EN VIVO'), t('Estimates pull from current stock at your nearest yard.', 'Los estimados usan el stock actual de tu sucursal más cercana.')],
                [t('NO COMMITMENT', 'SIN COMPROMISO'), t('Save the estimate, share with your contractor.', 'Guarda el estimado y compártelo con tu contratista.')],
              ].map(([k, v], i) => (
                <div key={i} style={{ borderTop: '1px solid rgba(255,255,255,0.18)', paddingTop: 14 }}>
                  <div className="mono" style={{ fontSize: 12.5, letterSpacing: '0.14em', color: 'var(--tangerine)', marginBottom: 6 }}>{k}</div>
                  <div style={{ fontSize: 14, color: 'var(--alice-blue)', lineHeight: 1.4 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Calculator panel */}
          <div style={{
            background: 'var(--parchment)',
            color: 'var(--ink)',
            borderRadius: 'var(--radius-lg)',
            padding: 36,
          }}>
            <div className="mono" style={{ fontSize: 12.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--charcoal)', marginBottom: 24, display: 'flex', justifyContent: 'space-between' }}>
              <span>{t('Quick estimate', 'Estimado rápido')}</span>
              <span>WFS-CALC v2.4</span>
            </div>

            <div style={{ display: 'grid', gap: 24 }}>
              {/* Type */}
              <div>
                <label style={{ fontSize: 13, fontFamily: 'var(--mono)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--charcoal)', marginBottom: 10, display: 'block' }}>
                  {t('Fence type', 'Tipo de cerca')}
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6 }}>
                  {[['chain-link', 'Chain Link', 'Malla ciclónica'], ['aluminum', 'Aluminum', 'Aluminio'], ['vinyl', 'Vinyl', 'Vinilo'], ['metal', 'Metal', 'Metal']].map(([id, label, labelEs]) => (
                    <button key={id} onClick={() => setType(id)} style={{
                      padding: '14px 10px', fontSize: 13,
                      background: type === id ? 'var(--ink)' : 'var(--white)',
                      color: type === id ? 'var(--parchment)' : 'var(--ink)',
                      border: '1px solid rgba(0,16,17,0.12)',
                      borderRadius: 8, fontWeight: 500,
                    }}>{t(label, labelEs)}</button>
                  ))}
                </div>
              </div>

              {/* Length slider */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                  <label style={{ fontSize: 13, fontFamily: 'var(--mono)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--charcoal)' }}>
                    {t('Linear feet', 'Pies lineales')}
                  </label>
                  <span className="mono" style={{ fontSize: 13, fontWeight: 500 }}>{length} ft</span>
                </div>
                <input type="range" min="20" max="2000" step="10" value={length} onChange={e => setLength(+e.target.value)} style={{ width: '100%', accentColor: 'var(--tangerine)' }}/>
              </div>

              {/* Height + gates row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div>
                  <label style={{ fontSize: 13, fontFamily: 'var(--mono)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--charcoal)', marginBottom: 10, display: 'block' }}>
                    {t('Height (ft)', 'Altura (ft)')}
                  </label>
                  <div style={{ display: 'flex', gap: 4 }}>
                    {[4, 6, 8, 10].map(h => (
                      <button key={h} onClick={() => setHeight(h)} style={{
                        flex: 1, padding: '12px 0', fontSize: 13,
                        background: height === h ? 'var(--ink)' : 'var(--white)',
                        color: height === h ? 'var(--parchment)' : 'var(--ink)',
                        border: '1px solid rgba(0,16,17,0.12)',
                        borderRadius: 8, fontWeight: 500,
                      }}>{h}'</button>
                    ))}
                  </div>
                </div>
                <div>
                  <label style={{ fontSize: 13, fontFamily: 'var(--mono)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--charcoal)', marginBottom: 10, display: 'block' }}>
                    {t('Gates', 'Portones')}
                  </label>
                  <div style={{ display: 'flex', gap: 4 }}>
                    {[0, 1, 2, 3].map(g => (
                      <button key={g} onClick={() => setGates(g)} style={{
                        flex: 1, padding: '12px 0', fontSize: 13,
                        background: gates === g ? 'var(--ink)' : 'var(--white)',
                        color: gates === g ? 'var(--parchment)' : 'var(--ink)',
                        border: '1px solid rgba(0,16,17,0.12)',
                        borderRadius: 8, fontWeight: 500,
                      }}>{g}</button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Result */}
              <div style={{ marginTop: 8, padding: '24px 0 0', borderTop: '1px solid rgba(0,16,17,0.12)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: 'var(--charcoal)', marginBottom: 8 }}>
                  <span>{t('Materials', 'Materiales')} ({length} ft × {height}' {type})</span>
                  <span className="mono">${matCost.toLocaleString()}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: 'var(--charcoal)', marginBottom: 16 }}>
                  <span>{t('Gates', 'Portones')} ({gates})</span>
                  <span className="mono">${gateCost.toLocaleString()}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span className="mono" style={{ fontSize: 12.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--charcoal)' }}>{t('Estimated total', 'Total estimado')}</span>
                  <span className="display" style={{ fontSize: 44, color: 'var(--ink)' }}>
                    ${total.toLocaleString()}
                  </span>
                </div>
              </div>

              <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '18px 22px' }}>
                {t('Lock this estimate, get binding quote', 'Fija este estimado y obtén tu cotización en firme')} <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceAreas = () => {
  const t = useT();
  const cities = [
    { name: 'Fort Myers', x: 22, y: 32, hq: true },
    { name: 'Cape Coral', x: 18, y: 38 },
    { name: 'Port Charlotte', x: 28, y: 22 },
    { name: 'Bonita Springs', x: 30, y: 50 },
    { name: 'Naples', x: 36, y: 60 },
    { name: 'Estero', x: 26, y: 44 },
    { name: 'Punta Gorda', x: 32, y: 18 },
    { name: 'Marco Island', x: 42, y: 72 },
  ];
  return (
    <section style={{ background: 'var(--white)', padding: '120px 0' }}>
      <div className="container">
        {/* Editorial header, matches FenceCategories / GateSystems / Projects */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 48,
          alignItems: 'end',
          paddingBottom: 24, marginBottom: 28,
          borderBottom: '1px solid rgba(0,16,17,0.12)',
        }}>
          <div>
            <h2 className="display" style={{
              margin: 0, fontSize: 'clamp(28px, 3vw, 40px)',
              lineHeight: 1, letterSpacing: '-0.02em',
              fontWeight: 800,
            }}>
              {t('Serving all of', 'Atendemos toda')}<br/>
              <span style={{ color: 'var(--tangerine)' }}>{t('Florida.', 'Florida.')}</span>
            </h2>
          </div>
          <p style={{
            margin: 0, maxWidth: 360, justifySelf: 'end',
            fontSize: 14, lineHeight: 1.55, color: 'var(--charcoal)', textAlign: 'right',
          }}>
            {t(
              'Two yards in Fort Myers and Port Charlotte, same-day pickup, with delivery available across the state of Florida.',
              'Dos sucursales en Fort Myers y Port Charlotte, recogida el mismo día, con entrega disponible en todo el estado de Florida.'
            )}
          </p>
        </div>

        {/* Map + yard cards side-by-side */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 24, alignItems: 'stretch',
        }}>
          {/* Florida map with white pins over the tangerine state */}
          <div className="wfs-map" style={{
            position: 'relative',
            background: 'var(--ink)',
            border: '1px solid var(--ink)',
            overflow: 'hidden',
            aspectRatio: '192 / 152',
          }}>
            {/* Map, viewBox cropped to Florida (624 432 192 152) */}
            <img src="assets/us-map.svg" alt={t('Florida map showing WFS service area', 'Mapa de Florida que muestra la zona de servicio de WFS')}
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%', objectFit: 'cover',
              }}/>

            {/* Pins, anchored to exact SVG coords within viewBox 624 432 192 152.
                Computed by parsing FL path: FM west-coast inland (757, 534);
                PC west-coast inland (755, 528). */}
            {[
              { name: t('Fort Myers · HQ', 'Fort Myers · Sede'), xPct: 69.3, yPct: 67.1 },
              { name: 'Port Charlotte', xPct: 68.2, yPct: 63.2, labelLeft: true },
            ].map((p) => (
              <React.Fragment key={p.name}>
                {/* Dot, sits exactly on the target SVG point */}
                <span style={{
                  position: 'absolute',
                  left: `${p.xPct}%`, top: `${p.yPct}%`,
                  transform: 'translate(-50%, -50%)',
                  width: 14, height: 14, borderRadius: '50%',
                  background: 'var(--white)',
                  border: '3px solid var(--ink)',
                  boxShadow: '0 0 0 4px rgba(38, 49, 102,0.35)',
                  pointerEvents: 'none',
                  zIndex: 2,
                }}/>
                {/* Label, offset 16px to the side of the dot */}
                <span className="mono" style={{
                  position: 'absolute',
                  left: p.labelLeft ? `calc(${p.xPct}% - 16px)` : `calc(${p.xPct}% + 16px)`,
                  top: `${p.yPct}%`,
                  transform: p.labelLeft ? 'translate(-100%, -50%)' : 'translate(0, -50%)',
                  fontSize: 12, fontWeight: 700, letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--ink)', background: 'var(--white)',
                  padding: '5px 9px', whiteSpace: 'nowrap',
                  border: '1px solid var(--ink)',
                  pointerEvents: 'none',
                }}>{p.name}</span>
              </React.Fragment>
            ))}

            {/* Eyebrow label, top-left */}
            <div className="mono" style={{
              position: 'absolute', top: 18, left: 18,
              display: 'flex', alignItems: 'center', gap: 10,
              fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase',
              color: 'var(--alice-blue)', fontWeight: 700,
            }}>
              <span>{t('State of Florida', 'Estado de Florida')}</span>
              <span style={{ width: 24, height: 1, background: 'var(--tangerine)' }}/>
            </div>

            {/* Legend, bottom-left */}
            <div style={{
              position: 'absolute', bottom: 16, left: 16,
              background: 'rgba(38, 49, 102,0.85)', backdropFilter: 'blur(6px)',
              border: '1px solid rgba(255,113,51,0.4)',
              padding: '10px 14px',
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <span style={{
                width: 8, height: 8, borderRadius: '50%',
                background: 'var(--white)',
                border: '2px solid var(--ink)',
              }}/>
              <span className="mono" style={{
                fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'var(--alice-blue)', fontWeight: 700,
              }}>{t('WFS yard locations', 'Sucursales de WFS')}</span>
            </div>
          </div>

          {/* Yard cards stacked */}
          <div style={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)', gap: 12 }}>
            {[
              { city: t('Fort Myers · HQ', 'Fort Myers · Sede'), addr: '2621 Fowler St, FL 33901', phone: '(239) 689-5496' },
              { city: 'Port Charlotte', addr: '1145 Enterprise Dr, FL 33953', phone: '(941) 391-6613' },
              { city: t('Counties served', 'Condados atendidos'), addr: t('Lee · Collier · Charlotte · Hendry & beyond', 'Lee · Collier · Charlotte · Hendry y más'), phone: t('Mon-Fri 7am-4pm · Sat 7am-12pm', 'Lun-Vie 7am-4pm · Sáb 7am-12pm') },
            ].map((y, i) => (
              <div key={i} style={{
                border: '1px solid rgba(0,16,17,0.18)',
                padding: '16px 18px',
                background: 'var(--white)',
                display: 'flex', alignItems: 'center', gap: 16,
              }}>
                <div className="mono" style={{
                  fontSize: 12, letterSpacing: '0.22em',
                  color: 'var(--tangerine)', textTransform: 'uppercase',
                  fontWeight: 700, minWidth: 22,
                }}>0{i+1}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="display" style={{
                    fontSize: 17, lineHeight: 1.1, marginBottom: 4,
                  }}>{y.city}</div>
                  <div style={{
                    fontSize: 13, color: 'var(--charcoal)', lineHeight: 1.4,
                  }}>{y.addr}</div>
                </div>
                <div className="mono" style={{
                  fontSize: 12.5, color: 'var(--ink)',
                  letterSpacing: '0.06em', textAlign: 'right', fontWeight: 600,
                  whiteSpace: 'nowrap',
                }}>{y.phone}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  const t = useT();
  const [submitted, setSubmitted] = React.useState(false);
  const inputStyle = {
    width: '100%', padding: '14px 16px',
    border: '1px solid rgba(0,16,17,0.25)', background: 'var(--white)',
    fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--ink)',
    outline: 'none', borderRadius: 0,
  };
  const labelStyle = {
    fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '0.18em',
    textTransform: 'uppercase', color: 'var(--charcoal)', fontWeight: 600,
    marginBottom: 6, display: 'block',
  };
  return (
    <section id="contact" style={{ background: 'var(--white)', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative background pattern + accent shapes */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        backgroundImage:
          'linear-gradient(rgba(38, 49, 102,0.04) 1px, transparent 1px), ' +
          'linear-gradient(90deg, rgba(38, 49, 102,0.04) 1px, transparent 1px)',
        backgroundSize: '56px 56px',
        maskImage: 'radial-gradient(circle at 70% 0%, #000 0%, transparent 70%)',
        WebkitMaskImage: 'radial-gradient(circle at 70% 0%, #000 0%, transparent 70%)',
        pointerEvents: 'none',
      }}/>
      <div className="container" style={{ position: 'relative' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48,
          alignItems: 'end',
          paddingBottom: 24, marginBottom: 40,
          borderBottom: '1px solid rgba(0,16,17,0.12)',
        }}>
          <div>
            <h2 className="display" style={{
              margin: 0,
              fontSize: 'clamp(28px, 3vw, 40px)',
              lineHeight: 1, letterSpacing: '-0.02em',
              fontWeight: 800,
            }}>
              {t('Ready to spec your', '¿Listo para tu próximo')}<br/>
              <span style={{ color: 'var(--tangerine)' }}>{t('next perimeter?', 'perímetro?')}</span>
            </h2>
          </div>
          <p style={{
            margin: 0, maxWidth: 360, justifySelf: 'end',
            fontSize: 14, lineHeight: 1.55, color: 'var(--charcoal)', textAlign: 'right',
          }}>
            {t(
              "Tell us about your project, we'll come back within 24 hours with stock, pricing and lead time.",
              'Cuéntanos sobre tu proyecto, respondemos en 24 horas con stock, precios y plazo de entrega.'
            )}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 48, alignItems: 'start' }}>
          {/* Left: contact info */}
          <div style={{ paddingTop: 8 }}>
            <div style={{ marginBottom: 32 }}>
              <div style={labelStyle}>{t('Call us', 'Llámanos')}</div>
              <a href="tel:2396895496" className="display" style={{ fontSize: 28, color: 'var(--ink)', textDecoration: 'none', display: 'block', lineHeight: 1.15 }}>(239) 689-5496</a>
              <div style={{ fontSize: 13, color: 'var(--charcoal)', marginBottom: 12 }}>{t('Fort Myers yard', 'Sucursal Fort Myers')}</div>
              <a href="tel:9413916613" className="display" style={{ fontSize: 28, color: 'var(--ink)', textDecoration: 'none', display: 'block', lineHeight: 1.15 }}>(941) 391-6613</a>
              <div style={{ fontSize: 13, color: 'var(--charcoal)' }}>{t('Port Charlotte yard', 'Sucursal Port Charlotte')}</div>
              <div style={{ fontSize: 13, color: 'var(--charcoal)', marginTop: 12 }}>{t('Mon-Fri 7am-4pm · Sat 7am-12pm', 'Lun-Vie 7am-4pm · Sáb 7am-12pm')}</div>
            </div>
            <div style={{ marginBottom: 32 }}>
              <div style={labelStyle}>{t('Email', 'Correo')}</div>
              <a href="mailto:sales@westernfencesupply.com" style={{ fontSize: 16, color: 'var(--ink)' }}>sales@westernfencesupply.com</a>
            </div>
            <div style={{ marginBottom: 32 }}>
              <div style={labelStyle}>{t('Visit', 'Visítanos')}</div>
              <div style={{ fontSize: 14, color: 'var(--ink)', lineHeight: 1.5, marginBottom: 14 }}>2621 Fowler St<br/>Fort Myers, FL 33901</div>
              <div style={{ fontSize: 14, color: 'var(--ink)', lineHeight: 1.5 }}>1145 Enterprise Dr<br/>Port Charlotte, FL 33953</div>
            </div>
            <div style={{ paddingTop: 24, borderTop: '1px solid rgba(0,16,17,0.15)' }}>
              <div className="mono" style={{ fontSize: 12.5, letterSpacing: '0.16em', color: 'var(--ink)', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ width: 8, height: 8, background: '#ff7133', borderRadius: '50%' }}/>
                {t('Get a detailed quote', 'Pide tu cotización')}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{
            background: 'var(--white)', padding: 36,
            border: '1.5px solid var(--ink)', boxShadow: '8px 8px 0 var(--ink)',
          }}>
            {submitted ? (
              <div style={{ padding: '64px 0', textAlign: 'center' }}>
                <div className="mono" style={{ fontSize: 12.5, letterSpacing: '0.18em', color: 'var(--tangerine)', marginBottom: 16, textTransform: 'uppercase', fontWeight: 700 }}>{t('Submitted', 'Enviado')}</div>
                <h3 className="display" style={{ fontSize: 32, margin: '0 0 12px', lineHeight: 1.1 }}>{t("Thanks, we'll be in touch.", 'Gracias, pronto te contactamos.')}</h3>
                <p style={{ fontSize: 14, color: 'var(--charcoal)', maxWidth: 360, margin: '0 auto' }}>{t('One of our reps will reach out within 24 hours with stock, pricing and lead time for your project.', 'Uno de nuestros representantes se comunicará en 24 horas con stock, precios y plazo de entrega para tu proyecto.')}</p>
              </div>
            ) : (
              <>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginBottom: 18 }}>
                  <div><label style={labelStyle}>{t('Full name', 'Nombre completo')}</label><input type="text" required style={inputStyle} placeholder="Jane Smith"/></div>
                  <div><label style={labelStyle}>{t('Company (optional)', 'Empresa (opcional)')}</label><input type="text" style={inputStyle} placeholder="Acme Fence Co."/></div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginBottom: 18 }}>
                  <div><label style={labelStyle}>{t('Email', 'Correo')}</label><input type="email" required style={inputStyle} placeholder="jane@email.com"/></div>
                  <div><label style={labelStyle}>{t('Phone', 'Teléfono')}</label><input type="tel" required style={inputStyle} placeholder="(239) 555-0142"/></div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginBottom: 18 }}>
                  <div><label style={labelStyle}>{t('I am a', 'Soy')}</label>
                    <select style={inputStyle}>
                      <option>{t('Homeowner', 'Propietario')}</option>
                      <option>{t('DIY / Self-installer', 'DIY / Auto-instalador')}</option>
                      <option>{t('Contractor', 'Contratista')}</option>
                      <option>{t('Commercial / Builder', 'Comercial / Constructor')}</option>
                    </select>
                  </div>
                  <div><label style={labelStyle}>{t('Project type', 'Tipo de proyecto')}</label>
                    <select style={inputStyle}>
                      <option>{t('Vinyl / PVC', 'Vinilo / PVC')}</option>
                      <option>{t('Aluminum', 'Aluminio')}</option>
                      <option>{t('Chain Link', 'Malla ciclónica')}</option>
                      <option>Metal / DuraFence</option>
                      <option>EC Fence</option>
                      <option>{t('Gate System', 'Sistema de portón')}</option>
                      <option>{t('Other', 'Otro')}</option>
                    </select>
                  </div>
                </div>
                <div style={{ marginBottom: 24 }}>
                  <label style={labelStyle}>{t('Project details', 'Detalles del proyecto')}</label>
                  <textarea rows={4} style={{ ...inputStyle, resize: 'vertical', minHeight: 100 }} placeholder={t('Approx. linear feet, height, location/zip, timeline, anything else relevant…', 'Aprox. pies lineales, altura, ubicación/código postal, plazo, cualquier otro detalle relevante…')}/>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
                  <p className="mono" style={{ margin: 0, fontSize: 12.5, letterSpacing: '0.04em', color: 'var(--charcoal)', maxWidth: 280 }}>
                    {t('By submitting, you agree to be contacted by Western Fence Supply.', 'Al enviar, aceptas ser contactado por Western Fence Supply.')}
                  </p>
                  <button type="submit" className="btn btn-dark" style={{ fontSize: 14, padding: '16px 24px' }}>
                    {t('Request quote', 'Solicitar cotización')}
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square"/></svg>
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const t = useT();
  const cols = [
    { title: { EN: 'Products', ES: 'Productos' }, items: [
      { label: { EN: 'Vinyl / PVC',         ES: 'Vinilo / PVC' },         href: 'vinyl.html' },
      { label: { EN: 'Aluminum',            ES: 'Aluminio' },             href: 'aluminum.html' },
      { label: { EN: 'Chain Link',          ES: 'Malla ciclónica' },      href: 'chain-link.html' },
      { label: { EN: 'Metal / DuraFence',   ES: 'Metal / DuraFence' },    href: 'metal.html' },
      { label: { EN: 'EC Fence',            ES: 'EC Fence' },             href: 'ecfence.html' },
      { label: { EN: 'Full catalog',        ES: 'Catálogo completo' },    href: 'products.html' },
    ]},
    { title: { EN: 'Solutions', ES: 'Soluciones' }, items: [
      { label: { EN: 'For Contractors',     ES: 'Para contratistas' },    href: 'contractors.html' },
      { label: { EN: 'For Homeowners',      ES: 'Para propietarios' },    href: 'homeowners.html' },
      { label: { EN: 'For HOA',             ES: 'Para HOA' },             href: 'solutions.html' },
      { label: { EN: 'Commercial',          ES: 'Comercial' },            href: 'solutions.html' },
    ]},
    { title: { EN: 'Resources', ES: 'Recursos' }, items: [
      { label: { EN: 'FAQ',                  ES: 'Preguntas frecuentes' },     href: 'faq.html' },
      { label: { EN: 'Materials Comparison', ES: 'Comparativa de materiales' },href: 'materials-comparison.html' },
      { label: { EN: 'Florida Pool Code',    ES: 'Código de piscinas FL' },    href: 'pool-code.html' },
      { label: { EN: 'Yard Locations',       ES: 'Sucursales' },               href: 'solutions.html#yards' },
    ]},
    { title: { EN: 'Company', ES: 'Empresa' }, items: [
      { label: { EN: 'About WFS',           ES: 'Sobre WFS' },               href: 'about.html' },
      { label: { EN: 'Contact',             ES: 'Contacto' },                href: 'estimate.html' },
      { label: 'sales@westernfencesupply.com', href: 'mailto:sales@westernfencesupply.com' },
    ]},
  ];
  return (
    <footer style={{ background: 'var(--ink)', color: 'var(--parchment)', padding: '104px 0 32px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: 40, marginBottom: 60 }}>
          <div>
            <Logo light />
            <p style={{ fontSize: 14, color: 'var(--alice-blue)', lineHeight: 1.5, marginTop: 20, maxWidth: 320 }}>
              {t(
                "Fencing material supplier for contractors, homeowners and DIY projects. Family-owned, factory-direct, we supply, we don't install.",
                'Proveedor de material de cercado para contratistas, propietarios y proyectos DIY. Empresa familiar, directo de fábrica, suministramos, no instalamos.'
              )}
            </p>
          </div>
          {cols.map((col, ci) => (
            <div key={ci}>
              <div className="mono" style={{ fontSize: 12.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--tangerine)', marginBottom: 16 }}>
                {t(col.title)}
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10 }}>
                {col.items.map((it, i) => (
                  <li key={i}><a href={it.href} style={{ fontSize: 14, color: 'var(--alice-blue)' }}>
                    {typeof it.label === 'string' ? it.label : t(it.label)}
                  </a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <div className="mono" style={{ fontSize: 12.5, letterSpacing: '0.14em', color: 'var(--silver)' }}>
            © 2026 Western Fence Supply · Fort Myers, FL · Port Charlotte, FL
          </div>
          <div style={{ display: 'flex', gap: 24 }}>
            {[
              { label: { EN: 'Privacy', ES: 'Privacidad' } },
              { label: { EN: 'Terms', ES: 'Términos' } },
              { label: { EN: 'Accessibility', ES: 'Accesibilidad' } },
              { label: 'sales@westernfencesupply.com' },
            ].map((item, i) => (
              <a key={i} href="#" style={{ fontSize: 13, fontFamily: 'var(--mono)', letterSpacing: '0.1em', color: 'var(--silver)' }}>
                {typeof item.label === 'string' ? item.label : t(item.label)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

Object.assign(window, { FeaturedGrid, InstallerMarquee, ProjectGallery, Calculator, ServiceAreas, FinalCTA, Footer });
