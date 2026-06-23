/* Featured products grid + Project gallery + Calculator + Service areas + Footer */

const FEATURED = [
  { sku: 'CL-9G-72', name: '9-Gauge Galvanized Mesh', cat: 'Chain Link', height: '6 ft', img: 'chainlink', color: '#263166' },
  { sku: 'AL-WLD-S', name: 'Welded Aluminum Section', cat: 'Aluminum', height: '6 ft', img: 'aluminum', color: '#263166' },
  { sku: 'PV-PRV-W', name: 'Catalyst Privacy Vinyl, White', cat: 'Vinyl', height: '6 ft', img: 'vinyl', color: '#2e59c1' },
  { sku: 'MT-PRV-72', name: 'Metal Board Privacy', cat: 'Metal', height: '6 ft', img: 'metal', color: '#001011' },
  { sku: 'GT-DBL-12', name: '12 ft Welded Double Gate', cat: 'Gates', height: '12 ft', img: 'aluminum', color: '#263166' },
  { sku: 'CL-VC-BK', name: 'Vinyl-Coated Black Mesh', cat: 'Chain Link', height: '6 ft', img: 'chainlink', color: '#263166' },
];


const InstallerMarquee = () => {
  const t = useT();
  const names = ['Pro Fence Installers','SWFL Fencing','Naples Fence Co.','Fort Myers Pros',
    'Gateway Fencing','Gulf Coast Contractors','Coastline Fence','Estate Fence Pros',
    'Cape Coral Fencing','Lee County Fence'];
  const initials = (n) => n.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  const row = [...names, ...names];
  return (
    <section style={{ background: 'var(--white)', padding: '72px 0', borderTop: '1px solid rgba(0,16,17,0.06)', borderBottom: '1px solid rgba(0,16,17,0.06)', overflow: 'hidden' }}>
      <div className="container">
        <p className="mono" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16,
          textAlign: 'center', margin: '0 0 40px',
          fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase',
          color: 'var(--charcoal)', fontWeight: 700,
        }}>
          <span aria-hidden style={{ width: 28, height: 1, background: 'rgba(0,16,17,0.2)' }}/>
          {t('A trusted supplier for top fence installation companies', 'Proveedor de confianza para las mejores empresas de instalación de cercas')}
          <span aria-hidden style={{ width: 28, height: 1, background: 'rgba(0,16,17,0.2)' }}/>
        </p>
      </div>
      <div className="wfs-marquee" aria-hidden>
        <div className="wfs-marquee__track">
          {row.map((n, i) => (
            <span key={i} style={{
              display: 'inline-flex', alignItems: 'center', gap: 12,
              padding: '0 clamp(28px, 3.5vw, 52px)', flexShrink: 0,
            }}>
              <span aria-hidden style={{
                flexShrink: 0,
                width: 38, height: 38, borderRadius: 8,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                background: 'var(--white)', color: 'var(--tangerine)',
                border: '1px solid rgba(0,16,17,0.12)',
                fontFamily: 'var(--mono)', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.04em',
              }}>{initials(n)}</span>
              <span className="display" style={{
                fontSize: 'clamp(16px, 1.7vw, 22px)', color: 'var(--ink)',
                whiteSpace: 'nowrap', letterSpacing: '-0.01em', lineHeight: 1,
              }}>{n}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

const MAT_IMG = { 'Chain Link': 'chainlink', 'Aluminum': 'aluminum', 'Vinyl': 'vinyl', 'Metal': 'metal', 'EC Fence': 'ecfence' };

const FeaturedGrid = () => {
  return (
    <section style={{ background: 'var(--linen)', padding: '120px 0' }}>
      <div className="container">
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
          gap: 32, marginBottom: 48, flexWrap: 'wrap',
        }}>
          <div>
            <span className="eyebrow" style={{ color: 'var(--laser-blue)' }}>03, Bestsellers</span>
            <h2 className="display" style={{ fontSize: 'clamp(40px, 5.5vw, 60px)', margin: '12px 0 0' }}>
              In stock,<br/>ready to ship.
            </h2>
          </div>
          <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontWeight: 500, fontSize: 14 }}>
            View full catalog <ArrowRight />
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {FEATURED.map((p, i) => (
            <article key={p.sku} style={{
              background: 'var(--white)',
              borderRadius: 'var(--radius)',
              overflow: 'hidden',
              border: '1px solid rgba(0,16,17,0.06)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 18px 40px -20px rgba(0,16,17,0.25)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
              <div style={{ position: 'relative', height: 220, background: p.color, overflow: 'hidden' }}>
                <img src={FENCE_IMG[p.img]} alt={p.name}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(180deg, rgba(0,16,17,0) 50%, rgba(0,16,17,0.45) 100%)',
                }}/>
                <div style={{
                  position: 'absolute', top: 14, left: 14,
                  fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.14em',
                  color: 'var(--alice-blue)', background: 'rgba(0,16,17,0.55)',
                  padding: '5px 8px', borderRadius: 3,
                }}>
                  {p.sku}
                </div>
                <div style={{
                  position: 'absolute', top: 14, right: 14,
                  fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.14em',
                  background: 'var(--tangerine)',
                  padding: '5px 8px', borderRadius: 3, color: 'var(--ink)', fontWeight: 600,
                }}>
                  IN STOCK
                </div>
              </div>
              <div style={{ padding: 20 }}>
                <div className="mono" style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--charcoal)', marginBottom: 8 }}>
                  {p.cat} · {p.height}
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 500, margin: '0 0 14px', color: 'var(--ink)' }}>
                  {p.name}
                </h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="mono" style={{ fontSize: 11, color: 'var(--charcoal)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                    Supplier-direct pricing
                  </span>
                  <button style={{
                    fontSize: 12, fontFamily: 'var(--mono)', letterSpacing: '0.14em',
                    textTransform: 'uppercase', color: 'var(--ink)',
                    display: 'flex', alignItems: 'center', gap: 6,
                  }}>
                    Request quote <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

/* Uniform card, used by the full archive grid on projects.html */
const ProjectCard = ({ p, i, layout }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <a href="projects.html"
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
      <img src={FENCE_IMG[MAT_IMG[p.material]] || p.imgUrl || FENCE_IMG[p.img]} alt={p.name}
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
          fontSize: 10, letterSpacing: '0.18em',
          color: 'var(--ink)', background: 'var(--white)',
          padding: '5px 9px', fontWeight: 600,
        }}>
          {String(i + 1).padStart(2, '0')} / {p.year}
        </div>
        <div className="mono" style={{
          fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
          color: 'var(--white)', background: 'rgba(0,16,17,0.55)',
          padding: '5px 9px', backdropFilter: 'blur(6px)',
        }}>
          {p.material}
        </div>
      </div>

      {/* Bottom content */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px', color: 'var(--white)' }}>
        <h3 className="display" style={{
          margin: 0,
          fontSize: 'clamp(18px, 1.5vw, 22px)',
          lineHeight: 1.05, letterSpacing: '-0.01em',
          color: 'var(--white)',
        }}>{p.name}</h3>

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
          }}>{p.type}</p>
          <p style={{
            margin: '6px 0 0', fontSize: 11, fontFamily: 'var(--mono)',
            letterSpacing: '0.06em', color: 'rgba(255,255,255,0.65)',
          }}>Installed by {p.contractor}</p>
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
    <a href="projects.html"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative', overflow: 'hidden',
        background: '#263166', textDecoration: 'none',
        display: 'block', minHeight: 500,
      }}>
      <img src={FENCE_IMG[MAT_IMG[p.material]] || p.imgUrl || FENCE_IMG[p.img]} alt={p.name}
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
        }}>{p.name}</h3>
        <p style={{
          margin: '12px 0 0', maxWidth: 460,
          fontSize: 14, lineHeight: 1.55, color: 'var(--alice-blue)',
        }}>{p.type}</p>

        {/* Spec strip */}
        <div style={{
          display: 'flex', marginTop: 18, paddingTop: 16,
          borderTop: '1px solid rgba(255,255,255,0.18)',
        }}>
          {[
            [{ EN: 'Scope', ES: 'Alcance' }, p.size],
            [{ EN: 'System', ES: 'Sistema' }, p.material],
            [{ EN: 'Completed', ES: 'Completado' }, p.year],
          ].map(([k, v], i) => (
            <div key={i} style={{
              flex: 1,
              paddingLeft: i ? 18 : 0,
              borderLeft: i ? '1px solid rgba(255,255,255,0.18)' : 'none',
            }}>
              <div className="mono" style={{
                fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase',
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
            fontSize: 11, fontWeight: 700, letterSpacing: '0.18em',
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
  return (
    <button
      onClick={onSelect}
      onMouseEnter={onSelect}
      style={{
        display: 'grid', gridTemplateColumns: '78px 1fr auto', gap: 14, alignItems: 'center',
        padding: 10, width: '100%', textAlign: 'left', cursor: 'pointer',
        background: active ? '#ffffff' : 'transparent',
        border: '1px solid',
        borderColor: active ? 'rgba(38, 49, 102,0.22)' : 'rgba(0,16,17,0.10)',
        borderLeftWidth: 3,
        borderLeftColor: active ? 'var(--tangerine)' : 'transparent',
        transition: 'background 0.2s ease, border-color 0.2s ease',
      }}>
      <span style={{ display: 'block', width: 78, height: 56, overflow: 'hidden', background: '#263166' }}>
        <img src={FENCE_IMG[MAT_IMG[p.material]] || p.imgUrl || FENCE_IMG[p.img]} alt={p.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </span>
      <span style={{ display: 'block', minWidth: 0 }}>
        <span className="display" style={{
          display: 'block', fontSize: 15.5, lineHeight: 1.1, letterSpacing: '-0.01em',
          color: 'var(--ink)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        }}>{p.name}</span>
      </span>
      <span className="mono" style={{
        fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700,
        color: active ? 'var(--ink)' : 'var(--charcoal)', flexShrink: 0,
      }}>{p.material}</span>
    </button>
  );
};

const PageBtn = ({ active, disabled, onClick, label, arrow }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    aria-label={arrow === 'prev' ? 'Previous page' : arrow === 'next' ? 'Next page' : `Page ${label}`}
    className="mono"
    style={{
      width: 32, height: 32,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 11, fontWeight: 700, letterSpacing: '0.04em',
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

const ProjectGallery = ({ featuredMaterial, items }) => {
  const t = useT();
  const [filter, setFilter] = React.useState(featuredMaterial || 'All');
  const [selected, setSelected] = React.useState(0);
  const [page, setPage] = React.useState(0);
  const curated = Array.isArray(items) && items.length > 0;
  const projects = curated ? items : [
    { name: 'Cape Coral Residential', loc: 'Cape Coral, FL', size: '320 LF', material: 'Chain Link', type: 'Vinyl-coated black, 6 ft, with double drive gate', contractor: 'Coastline Fence Co.', year: '2024', imgUrl: 'assets/gate-sliding.jpg' },
    { name: 'Estero Community', loc: 'Estero, FL', size: '38 lots', material: 'Metal', type: 'Metal board privacy, 6 ft, bronze finish', contractor: 'Gulf Perimeter LLC', year: '2024', imgUrl: FENCE_IMG.metal },
    { name: 'Fort Myers Estate', loc: 'Fort Myers, FL', size: '420 LF', material: 'Aluminum', type: 'Welded 3-rail aluminum, 5 ft, residential grade', contractor: 'Estate Fence Pros', year: '2025', imgUrl: 'assets/gate-cantilever.jpg' },
    { name: 'Naples Pool Enclosure', loc: 'Naples, FL', size: '180 LF', material: 'Vinyl', type: 'Vinyl privacy, 6 ft, pool-code compliant', contractor: 'Naples Outdoor', year: '2025', imgUrl: FENCE_IMG.vinyl },
    { name: 'Bonita Springs Self-Storage', loc: 'Bonita Springs, FL', size: '0.9 mi', material: 'Chain Link', type: 'Galvanized 9-gauge, 8 ft + barbed extension', contractor: 'Industrial Fence FL', year: '2024', imgUrl: 'assets/gate-rolling.jpg' },
    { name: 'Punta Gorda Marina', loc: 'Punta Gorda, FL', size: '240 LF', material: 'EC Fence', type: 'EC Fence panels, 6 ft, white finish', contractor: 'Harbor Iron Works', year: '2025', imgUrl: 'assets/ec-fence.jpg' },
    { name: 'Lehigh Acres Warehouse', loc: 'Lehigh Acres, FL', size: '0.6 mi', material: 'Chain Link', type: 'Galvanized 9-gauge, 8 ft, with cantilever gate', contractor: 'Industrial Fence FL', year: '2025', imgUrl: 'assets/gate-cantilever.jpg' },
    { name: 'Marco Island Villa', loc: 'Marco Island, FL', size: '260 LF', material: 'Aluminum', type: 'Welded 3-rail aluminum, 5 ft, black estate finish', contractor: 'Estate Fence Pros', year: '2025', imgUrl: FENCE_IMG.metal },
    { name: 'Sanibel Beachfront', loc: 'Sanibel, FL', size: '150 LF', material: 'Vinyl', type: 'Vinyl privacy, 6 ft, hurricane-rated posts', contractor: 'Naples Outdoor', year: '2024', imgUrl: FENCE_IMG.vinyl },
    { name: 'Immokalee Ag Facility', loc: 'Immokalee, FL', size: '1.4 mi', material: 'Chain Link', type: 'Galvanized 11-gauge, 6 ft, agricultural perimeter', contractor: 'Gulf Perimeter LLC', year: '2024', imgUrl: 'assets/gate-sliding.jpg' },
    { name: 'Port Charlotte HOA', loc: 'Port Charlotte, FL', size: '52 lots', material: 'EC Fence', type: 'EC Fence panels, 6 ft, community standard', contractor: 'Harbor Iron Works', year: '2025', imgUrl: 'assets/ec-fence.jpg' },
    { name: 'Golden Gate Estates', loc: 'Golden Gate, FL', size: '300 LF', material: 'Metal', type: 'Metal board privacy, 6 ft, bronze finish', contractor: 'Gulf Perimeter LLC', year: '2025', imgUrl: FENCE_IMG.metal },
    { name: 'North Fort Myers Depot', loc: 'North Fort Myers, FL', size: '0.8 mi', material: 'Chain Link', type: 'Galvanized 9-gauge, 8 ft + barbed extension', contractor: 'Industrial Fence FL', year: '2025', imgUrl: 'assets/gate-rolling.jpg' },
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
    <section id="projects" style={{ background: 'var(--white)', padding: '120px 0' }}>
      <div className="container">
        {/* Editorial header */}
        <div style={{
          paddingBottom: 24, marginBottom: 28,
        }}>
          <h2 className="display" style={{
            margin: 0, fontSize: 'clamp(28px, 3vw, 40px)',
            lineHeight: 1, letterSpacing: '-0.02em',
            fontWeight: 800,
          }}>
            {t('Real projects.', 'Proyectos reales.')}<br/>
            <span style={{ color: 'var(--tangerine)' }}>{t('Real perimeters.', 'Perímetros reales.')}</span>
          </h2>
          <p className="mono" style={{
            margin: '14px 0 0', fontSize: 11, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: 'var(--charcoal)',
          }}>
            {t('Flagship perimeters across Southwest Florida, pick one to preview.',
               'Perímetros insignia en el suroeste de Florida, elige uno para verlo.')}
          </p>
        </div>

        {/* Filter chips */}
        <div style={{
          display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28,
          paddingBottom: 16, borderBottom: '1px solid rgba(0,16,17,0.12)',
        }}>
          {!curated && filters.map(f => {
            const active = f === filter;
            const labelMap = {
              'All': { EN: 'All', ES: 'Todos' },
              'Chain Link': { EN: 'Chain Link', ES: 'Malla ciclónica' },
              'Aluminum': { EN: 'Aluminum', ES: 'Aluminio' },
              'Vinyl': { EN: 'Vinyl', ES: 'Vinilo' },
              'Metal': { EN: 'Metal', ES: 'Metal' },
              'EC Fence': { EN: 'EC Fence', ES: 'EC Fence' },
            };
            return (
              <button key={f} onClick={() => { setFilter(f); setSelected(0); setPage(0); }} className="mono"
                style={{
                  padding: '6px 12px',
                  fontSize: 10, letterSpacing: '0.18em',
                  textTransform: 'uppercase', fontWeight: 700,
                  border: '1px solid var(--ink)',
                  background: active ? 'var(--ink)' : 'transparent',
                  color: active ? 'var(--white)' : 'var(--ink)',
                  cursor: 'pointer',
                }}>
                {t(labelMap[f])}
              </button>
            );
          })}
          <a href="projects.html" className="mono" style={{
            marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 0',
            fontSize: 10, letterSpacing: '0.22em',
            textTransform: 'uppercase', fontWeight: 700,
            color: 'var(--ink)',
            borderBottom: '1px solid var(--ink)',
          }}>
            {t('View all projects', 'Ver todos los proyectos')}
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square"/>
            </svg>
          </a>
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
                <ProjectListRow key={p.name} p={p} active={(start + i) === sel}
                  onSelect={() => setSelected(start + i)} />
              ))}
            </div>

            {pageCount > 1 && (
              <div style={{
                marginTop: 'auto', paddingTop: 18,
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
              }}>
                <span className="mono" style={{
                  fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--charcoal)',
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
              5-minute<br/>fence calculator.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.5, color: 'var(--alice-blue)', maxWidth: 420, marginBottom: 32 }}>
              Get a real-time materials estimate. We follow up with a binding quote within 24 hours, including delivery and any local code adjustments.
            </p>
            <div style={{ display: 'grid', gap: 16, maxWidth: 380 }}>
              {[
                ['MATERIALS-ONLY', 'No labor markup. We sell what installers buy.'],
                ['LIVE INVENTORY', 'Estimates pull from current stock at your nearest yard.'],
                ['NO COMMITMENT', 'Save the estimate, share with your contractor.'],
              ].map(([k, v], i) => (
                <div key={i} style={{ borderTop: '1px solid rgba(255,255,255,0.18)', paddingTop: 14 }}>
                  <div className="mono" style={{ fontSize: 11, letterSpacing: '0.14em', color: 'var(--tangerine)', marginBottom: 6 }}>{k}</div>
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
            <div className="mono" style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--charcoal)', marginBottom: 24, display: 'flex', justifyContent: 'space-between' }}>
              <span>Quick estimate</span>
              <span>WFS-CALC v2.4</span>
            </div>

            <div style={{ display: 'grid', gap: 24 }}>
              {/* Type */}
              <div>
                <label style={{ fontSize: 12, fontFamily: 'var(--mono)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--charcoal)', marginBottom: 10, display: 'block' }}>
                  Fence type
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6 }}>
                  {[['chain-link', 'Chain Link'], ['aluminum', 'Aluminum'], ['vinyl', 'Vinyl'], ['metal', 'Metal']].map(([id, label]) => (
                    <button key={id} onClick={() => setType(id)} style={{
                      padding: '14px 10px', fontSize: 13,
                      background: type === id ? 'var(--ink)' : 'var(--white)',
                      color: type === id ? 'var(--parchment)' : 'var(--ink)',
                      border: '1px solid rgba(0,16,17,0.12)',
                      borderRadius: 8, fontWeight: 500,
                    }}>{label}</button>
                  ))}
                </div>
              </div>

              {/* Length slider */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                  <label style={{ fontSize: 12, fontFamily: 'var(--mono)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--charcoal)' }}>
                    Linear feet
                  </label>
                  <span className="mono" style={{ fontSize: 13, fontWeight: 500 }}>{length} ft</span>
                </div>
                <input type="range" min="20" max="2000" step="10" value={length} onChange={e => setLength(+e.target.value)} style={{ width: '100%', accentColor: 'var(--tangerine)' }}/>
              </div>

              {/* Height + gates row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div>
                  <label style={{ fontSize: 12, fontFamily: 'var(--mono)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--charcoal)', marginBottom: 10, display: 'block' }}>
                    Height (ft)
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
                  <label style={{ fontSize: 12, fontFamily: 'var(--mono)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--charcoal)', marginBottom: 10, display: 'block' }}>
                    Gates
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
                  <span>Materials ({length} ft × {height}' {type})</span>
                  <span className="mono">${matCost.toLocaleString()}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: 'var(--charcoal)', marginBottom: 16 }}>
                  <span>Gates ({gates})</span>
                  <span className="mono">${gateCost.toLocaleString()}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span className="mono" style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--charcoal)' }}>Estimated total</span>
                  <span className="display" style={{ fontSize: 44, color: 'var(--ink)' }}>
                    ${total.toLocaleString()}
                  </span>
                </div>
              </div>

              <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '18px 22px' }}>
                Lock this estimate, get binding quote <ArrowRight />
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
            <img src="assets/us-map.svg" alt="Florida map showing WFS service area"
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%', objectFit: 'cover',
              }}/>

            {/* Pins, anchored to exact SVG coords within viewBox 624 432 192 152.
                Computed by parsing FL path: FM west-coast inland (757, 534);
                PC west-coast inland (755, 528). */}
            {[
              { name: 'Fort Myers · HQ', xPct: 69.3, yPct: 67.1 },
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
                  fontSize: 10, fontWeight: 700, letterSpacing: '0.18em',
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
              fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase',
              color: 'var(--alice-blue)', fontWeight: 700,
            }}>
              <span>State of Florida</span>
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
                fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'var(--alice-blue)', fontWeight: 700,
              }}>WFS yard locations</span>
            </div>
          </div>

          {/* Yard cards stacked */}
          <div style={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)', gap: 12 }}>
            {[
              { city: 'Fort Myers · HQ', addr: '2621 Fowler St, FL 33901', phone: '(239) 689-5496' },
              { city: 'Port Charlotte', addr: '1145 Enterprise Dr, FL 33953', phone: '(941) 391-6613' },
              { city: 'Counties served', addr: 'Lee · Collier · Charlotte · Hendry & beyond', phone: 'Mon-Fri 7am-4pm · Sat 7am-12pm' },
            ].map((y, i) => (
              <div key={i} style={{
                border: '1px solid rgba(0,16,17,0.18)',
                padding: '16px 18px',
                background: 'var(--white)',
                display: 'flex', alignItems: 'center', gap: 16,
              }}>
                <div className="mono" style={{
                  fontSize: 10, letterSpacing: '0.22em',
                  color: 'var(--tangerine)', textTransform: 'uppercase',
                  fontWeight: 700, minWidth: 22,
                }}>0{i+1}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="display" style={{
                    fontSize: 17, lineHeight: 1.1, marginBottom: 4,
                  }}>{y.city}</div>
                  <div style={{
                    fontSize: 12.5, color: 'var(--charcoal)', lineHeight: 1.4,
                  }}>{y.addr}</div>
                </div>
                <div className="mono" style={{
                  fontSize: 11, color: 'var(--ink)',
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
    fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em',
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
              <div style={{ fontSize: 12, color: 'var(--charcoal)', marginBottom: 12 }}>{t('Fort Myers yard', 'Sucursal Fort Myers')}</div>
              <a href="tel:9413916613" className="display" style={{ fontSize: 28, color: 'var(--ink)', textDecoration: 'none', display: 'block', lineHeight: 1.15 }}>(941) 391-6613</a>
              <div style={{ fontSize: 12, color: 'var(--charcoal)' }}>{t('Port Charlotte yard', 'Sucursal Port Charlotte')}</div>
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
              <div className="mono" style={{ fontSize: 11, letterSpacing: '0.16em', color: 'var(--ink)', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 10 }}>
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
                <div className="mono" style={{ fontSize: 11, letterSpacing: '0.18em', color: 'var(--tangerine)', marginBottom: 16, textTransform: 'uppercase', fontWeight: 700 }}>{t('Submitted', 'Enviado')}</div>
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
                      <option>Vinyl / PVC</option>
                      <option>Aluminum</option>
                      <option>Chain Link</option>
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
                  <p className="mono" style={{ margin: 0, fontSize: 11, letterSpacing: '0.04em', color: 'var(--charcoal)', maxWidth: 280 }}>
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
      { label: { EN: 'Articles & Guides',   ES: 'Artículos y guías' },        href: 'articles.html' },
      { label: { EN: 'FAQ',                  ES: 'Preguntas frecuentes' },     href: 'faq.html' },
      { label: { EN: 'Materials Comparison', ES: 'Comparativa de materiales' },href: 'materials-comparison.html' },
      { label: { EN: 'Florida Pool Code',    ES: 'Código de piscinas FL' },    href: 'pool-code.html' },
      { label: { EN: 'Yard Locations',       ES: 'Sucursales' },               href: 'solutions.html#yards' },
    ]},
    { title: { EN: 'Company', ES: 'Empresa' }, items: [
      { label: { EN: 'About WFS',           ES: 'Sobre WFS' },               href: 'about.html' },
      { label: { EN: 'Projects',            ES: 'Proyectos' },               href: 'projects.html' },
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
              <div className="mono" style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--tangerine)', marginBottom: 16 }}>
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
          <div className="mono" style={{ fontSize: 11, letterSpacing: '0.14em', color: 'var(--silver)' }}>
            © 2026 Western Fence Supply · Fort Myers, FL · Port Charlotte, FL
          </div>
          <div style={{ display: 'flex', gap: 24 }}>
            {[
              { label: { EN: 'Privacy', ES: 'Privacidad' } },
              { label: { EN: 'Terms', ES: 'Términos' } },
              { label: { EN: 'Accessibility', ES: 'Accesibilidad' } },
              { label: 'sales@westernfencesupply.com' },
            ].map((item, i) => (
              <a key={i} href="#" style={{ fontSize: 12, fontFamily: 'var(--mono)', letterSpacing: '0.1em', color: 'var(--silver)' }}>
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
