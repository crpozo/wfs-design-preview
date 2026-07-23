/* Featured products grid + Project gallery + Calculator + Service areas + Footer */

const FEATURED = [
  { sku: 'CL-115G-72', name: { EN: '11-1/2 Gauge Galvanized Mesh', ES: 'Malla galvanizada 11-1/2 Ga.' }, cat: { EN: 'Chain Link', ES: 'Malla ciclónica' }, height: '6 ft', imgUrl: 'assets/projects/cl-swing-gate-galv-4.jpg' }, { sku: 'AL-WLD-S', name: { EN: 'Aluminum Fence Section', ES: 'Sección de cerca de aluminio' }, cat: { EN: 'Aluminum', ES: 'Aluminio' }, height: '6 ft', imgUrl: 'assets/projects/alum-2-rail-smooth-bottom-white.jpg' }, { sku: 'PV-PRV-W', name: { EN: 'Catalyst Privacy Vinyl, White', ES: 'Vinilo de privacidad Catalyst, blanco' }, cat: { EN: 'Vinyl', ES: 'Vinilo' }, height: '6 ft', imgUrl: 'assets/projects/pvc-privacy-gate-white.jpg' }, { sku: 'MT-PRV-72', name: { EN: 'Metal Board Privacy', ES: 'Privacidad de tablero de metal' }, cat: { EN: 'Metal', ES: 'Metal' }, height: '6 ft', imgUrl: 'assets/projects/met-fence-horizontal-black.jpg' }, { sku: 'GT-DBL-12', name: { EN: '12 ft Double Gate', ES: 'Portón doble de 12 ft' }, cat: { EN: 'Gates', ES: 'Portones' }, height: '12 ft', imgUrl: 'assets/projects/pvc-gate-sand.jpg' }, { sku: 'CL-VC-BK', name: { EN: 'Vinyl-Coated Black Mesh', ES: 'Malla negra revestida de vinilo' }, cat: { EN: 'Chain Link', ES: 'Malla ciclónica' }, height: '6 ft', imgUrl: 'assets/projects/cl-fence-black.jpg' },
];


const INSTALLERS = [
  { name: 'J2W Custom Fence', src: 'assets/installers/j2w-custom-fence.png' }, { name: 'True Fence', src: 'assets/installers/true-fence.png' }, { name: 'Good Hands Fencing', src: 'assets/installers/good-hands-fencing.png' }, { name: 'All American Fence & Gate', src: 'assets/installers/all-american-fence-and-gate.png' }, { name: 'SWFL Fence', src: 'assets/installers/swfl-fence.png' }, { name: 'Supreme Fence of SWFL', src: 'assets/installers/supreme-fence.png' }, { name: 'Southern Hoss Fences', src: 'assets/installers/southern-hoss-fences.png' }, { name: 'M.R. Fence', src: 'assets/installers/mr-fence.png' }, { name: 'Level Up Fencing', src: 'assets/installers/level-up-fencing.png' }, { name: 'Baker Fence & Gate', src: 'assets/installers/baker-fence-and-gate.png' }, { name: 'Grace Fence', src: 'assets/installers/grace-fence.png' }, { name: 'Fence Ace', src: 'assets/installers/fence-ace.png' }, { name: 'Zavala Fences', src: 'assets/installers/zavala-fences.png' }, { name: 'Fence Direct', src: 'assets/installers/fence-direct.png' }, { name: 'All American Fencing', src: 'assets/installers/all-american-fencing.png' },
];

const InstallerMarquee = () => {
  const t = useT();
  const base = [...INSTALLERS, ...INSTALLERS];
  const row = [...base, ...base];
  return (
    <section style={{ background: 'var(--white)', padding: '64px 0', borderTop: '1px solid rgba(0,16,17,0.06)', borderBottom: '1px solid rgba(0,16,17,0.06)', overflow: 'hidden' }}>
      <div className="container">
        <p className="mono" style={{
          margin: '0 0 32px', fontSize: 14, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(0,16,17,0.4)', fontWeight: 600, }}>
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

/* Product marquee, same auto-scroll pattern as the installer logos but with
   product cards. Sits between WhyWFS and the Gates arena on the homepage. */
const MARQUEE_PRODUCTS = [
  { src: 'assets/products/chain-link-post.jpg', name: { EN: 'Chain Link Post', ES: 'Poste de malla' }, spec: { EN: 'Galvanized steel', ES: 'Acero galvanizado' } }, { src: 'assets/products/gothic-post-cap.jpg', name: { EN: 'Gothic Post Cap', ES: 'Tapa de poste gótica' }, spec: { EN: 'White · PVC', ES: 'Blanca · PVC' } }, { src: 'assets/products/chain-link-fabric.jpg', name: { EN: 'Chain Link Fabric', ES: 'Malla ciclónica' }, spec: { EN: '11-1/2 Ga. · Galvanized', ES: '11-1/2 Ga. · Galvanizada' } }, { src: 'assets/products/self-closing-hinge.jpg', name: { EN: 'Self-Closing Hinge', ES: 'Bisagra con resorte' }, spec: { EN: 'Black · Spring-loaded', ES: 'Negra · Autocierre' } }, { src: 'assets/products/pvc-double-gate.jpg', name: { EN: 'PVC Double Gate', ES: 'Portón doble de PVC' }, spec: { EN: 'White · Privacy', ES: 'Blanco · Privacidad' } }, { src: 'assets/products/barbed-wire.jpg', name: { EN: 'Barbed Wire', ES: 'Alambre de púas' }, spec: { EN: 'Galvanized', ES: 'Galvanizado' } }, { src: 'assets/products/aluminum-2-rail.jpg', name: { EN: 'Aluminum 2-Rail', ES: 'Aluminio 2 rieles' }, spec: { EN: 'Black · Smooth bottom', ES: 'Negro · Base lisa' } }, { src: 'assets/products/gravity-latch.jpg', name: { EN: 'Gravity Latch', ES: 'Pestillo de gravedad' }, spec: { EN: 'Black', ES: 'Negro' } }, { src: 'assets/products/metal-privacy-white.jpg', name: { EN: 'Metal Privacy Panel', ES: 'Panel metálico privacidad' }, spec: { EN: 'White · Vertical', ES: 'Blanco · Vertical' } }, { src: 'assets/products/drop-rod.jpg', name: { EN: 'Drop Rod', ES: 'Pasador vertical' }, spec: { EN: 'Black · Powder-coated', ES: 'Negro · Pintura en polvo' } }, { src: 'assets/products/pvc-semi-privacy.jpg', name: { EN: 'Semi-Privacy PVC', ES: 'PVC semiprivacidad' }, spec: { EN: 'Tan · Horizontal', ES: 'Arena · Horizontal' } }, { src: 'assets/products/gate-post-hinge.jpg', name: { EN: 'Gate Post Hinge', ES: 'Bisagra de poste' }, spec: { EN: 'Black · Heavy duty', ES: 'Negra · Uso rudo' } }, { src: 'assets/products/aluminum-3-rail.jpg', name: { EN: 'Aluminum 3-Rail', ES: 'Aluminio 3 rieles' }, spec: { EN: 'Black · Rake bottom', ES: 'Negro · Base inclinada' } }, { src: 'assets/products/pvc-u-channel.jpg', name: { EN: 'PVC U-Channel', ES: 'Canal U de PVC' }, spec: { EN: 'White', ES: 'Blanco' } }, { src: 'assets/products/chain-link-gate.jpg', name: { EN: 'Chain Link Gate', ES: 'Portón de malla' }, spec: { EN: 'Black · Single swing', ES: 'Negro · Una hoja' } }, { src: 'assets/products/post-mount-latch.jpg', name: { EN: 'Post-Mount Latch', ES: 'Pestillo de poste' }, spec: { EN: 'Black · Self-locking', ES: 'Negro · Autobloqueante' } }, { src: 'assets/products/metal-horizontal-black.jpg', name: { EN: 'Horizontal Metal Panel', ES: 'Panel metálico horizontal' }, spec: { EN: 'Black · Louvered', ES: 'Negro · Persiana' } }, { src: 'assets/products/pvc-picket-panel.jpg', name: { EN: 'PVC Picket Panel', ES: 'Panel de estacas PVC' }, spec: { EN: 'White · Spaced picket', ES: 'Blanco · Estaca espaciada' } }, { src: 'assets/products/metal-post.jpg', name: { EN: 'Metal Post', ES: 'Poste metálico' }, spec: { EN: 'Black · Square', ES: 'Negro · Cuadrado' } }, { src: 'assets/products/privacy-windscreen.jpg', name: { EN: 'Privacy Windscreen', ES: 'Malla sombra' }, spec: { EN: 'Black · Grommeted', ES: 'Negra · Con ojales' } }, { src: 'assets/products/aluminum-puppy-picket.jpg', name: { EN: 'Puppy Picket Section', ES: 'Sección puppy picket' }, spec: { EN: 'Black · Aluminum', ES: 'Negra · Aluminio' } }, { src: 'assets/products/aluminum-section.jpg', name: { EN: 'Aluminum Section', ES: 'Sección de aluminio' }, spec: { EN: 'Black · Flat top', ES: 'Negra · Remate plano' } },
];

const ProductMarquee = () => {
  const t = useT();
  const scrollerRef = React.useRef(null);
  /* rAF motor: constant drift + eased jumps from the arrows, wrapping on the
     duplicated track so it loops forever. Deliberately no pause on hover. */
  const motorRef = React.useRef({ raf: 0, last: 0, pos: null, tween: null });
  React.useEffect(() => {
    const el = scrollerRef.current; if (!el) return;
    const m = motorRef.current;
    const SPEED = 38; // px/s drift
    const frame = now => {
      const dt = m.last ? Math.min(0.1, (now - m.last) / 1000) : 0;
      m.last = now;
      const half = el.scrollWidth / 2;
      let pos = m.pos == null ? el.scrollLeft : m.pos;
      if (m.tween) {
        const k = Math.min(1, Math.max(0, (now - m.tween.t0) / m.tween.dur));
        pos = m.tween.from + (m.tween.to - m.tween.from) * (1 - Math.pow(1 - k, 3));
        if (k >= 1) m.tween = null;
      } else {
        pos += SPEED * dt;
      }
      if (half > 0) {
        while (pos >= half) { pos -= half; if (m.tween) { m.tween.from -= half; m.tween.to -= half; } }
        while (pos < 0) { pos += half; if (m.tween) { m.tween.from += half; m.tween.to += half; } }
      }
      m.pos = pos;
      el.scrollLeft = pos;
      m.raf = requestAnimationFrame(frame);
    };
    m.raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(m.raf);
  }, []);
  const nudge = dir => {
    const el = scrollerRef.current; if (!el) return;
    const m = motorRef.current;
    const step = el.firstChild ? (el.firstChild.offsetWidth + 18) * 3 : 900;
    const from = m.pos == null ? el.scrollLeft : m.pos;
    const base = m.tween ? m.tween.to : from;
    m.tween = { from, to: base + dir * step, t0: performance.now(), dur: 550 };
  };
  const ArrowBtn = ({ dir }) => (
    <button onClick={() => nudge(dir === 'prev' ? -1 : 1)}
      aria-label={dir === 'prev' ? t('Previous products', 'Productos anteriores') : t('More products', 'Más productos')}
      style={{
        position: 'absolute', top: '50%', transform: 'translateY(-50%)', [dir === 'prev' ? 'left' : 'right']: 'clamp(10px, 1.6vw, 28px)', zIndex: 2, width: 46, height: 46, borderRadius: '50%', border: '1px solid var(--ink)', background: 'var(--white)', color: 'var(--ink)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 10px 24px -14px rgba(0,16,17,0.4)', }}>
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none" style={{ transform: dir === 'prev' ? 'rotate(180deg)' : 'none' }}>
        <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square"/>
      </svg>
    </button>
  );
  const row = [...MARQUEE_PRODUCTS, ...MARQUEE_PRODUCTS];
  return (
    <section id="products-marquee" style={{ background: 'var(--white)', padding: '64px 0 116px', borderTop: '1px solid rgba(0,16,17,0.06)', overflow: 'hidden' }}>
      <div className="container" style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 24, flexWrap: 'wrap', marginBottom: 36, }}>
        <span className="eyebrow" style={{ color: 'var(--ink)', display: 'inline-flex', alignItems: 'center', gap: 10 }}>
          <span style={{ width: 8, height: 8, background: 'var(--tangerine)' }}/>
          {t('In the yard today', 'En stock hoy')}
        </span>
        <a href="products.html" className="mono" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13.5, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink)', borderBottom: '1px solid var(--ink)', paddingBottom: 3, }}>
          {t('Full catalog', 'Catálogo completo')}
          <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square"/>
          </svg>
        </a>
      </div>
      {/* Edge padding lines the first card up with the .container edge on
          wide screens */}
      <div style={{ position: 'relative' }}>
        <div ref={scrollerRef} className="wfs-pcar" aria-hidden style={{
          display: 'flex', gap: 18, overflowX: 'hidden', padding: '4px max(var(--pad), calc((100% - var(--max)) / 2 + var(--pad)))', }}>
          {row.map((p, i) => (
            <div key={i} style={{
              flexShrink: 0, width: 'clamp(215px, 24vw, 270px)', padding: '18px 18px 20px', background: 'var(--white)', }}>
              <div style={{
                height: 'clamp(140px, 15vw, 175px)', display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                <img src={p.src} alt={t(p.name)} loading="lazy"
                  style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
              </div>
              <h3 className="display" style={{
                margin: '14px 0 0', fontSize: 17.5, lineHeight: 1.2, letterSpacing: '-0.01em', color: 'var(--ink)', textAlign: 'center', }}>{t(p.name)}</h3>
              <p className="mono" style={{
                margin: '5px 0 0', fontSize: 13.5, lineHeight: 1.4, color: 'rgba(0,16,17,0.55)', textAlign: 'center', }}>{t(p.spec)}</p>
            </div>
          ))}
        </div>
        <ArrowBtn dir="prev"/>
        <ArrowBtn dir="next"/>
      </div>
    </section>
  );
};

const MAT_IMG = { 'Chain Link': 'chainlink', 'Aluminum': 'aluminum', 'Vinyl': 'vinyl', 'Metal': 'metal', 'EC Fence': 'ecfence' };

/* Material display labels; raw English stays the filter/data key. */
const MAT_LABELS = {
  'All': { EN: 'All', ES: 'Todos' }, 'Chain Link': { EN: 'Chain Link', ES: 'Malla ciclónica' }, 'Aluminum': { EN: 'Aluminum', ES: 'Aluminio' }, 'Vinyl': { EN: 'Vinyl', ES: 'Vinilo' }, 'Metal': { EN: 'Metal', ES: 'Metal' }, 'EC Fence': { EN: 'EC Fence', ES: 'EC Fence' },
};

const FeaturedGrid = () => {
  const t = useT();
  const PER = 3;
  const pages = Math.ceil(FEATURED.length / PER);
  const [page, setPage] = React.useState(0);
  const start = page * PER;
  const ArrowBtn = ({ dir, disabled, onClick }) => (
    <button onClick={onClick} disabled={disabled} aria-label={dir === 'prev' ? t('Previous', 'Anterior') : t('Next', 'Siguiente')} style={{
      width: 46, height: 46, borderRadius: '50%', border: `1px solid ${disabled ? 'rgba(0,16,17,0.12)' : 'var(--ink)'}`, background: 'var(--white)', color: disabled ? 'rgba(0,16,17,0.25)' : 'var(--ink)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', cursor: disabled ? 'default' : 'pointer', transition: 'border-color 0.2s ease, color 0.2s ease', }}>
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
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 32, marginBottom: 44, flexWrap: 'wrap', }}>
          <div>
            <h2 className="display" style={{
              fontSize: 'clamp(26px, 2.8vw, 38px)', margin: 0, textTransform: 'uppercase', fontWeight: 800, letterSpacing: '-0.01em', }}>
              {t('In stock,', 'En existencia,')}{' '}
              <span style={{ color: 'var(--tangerine)' }}>{t('ready to ship.', 'listos para enviar.')}</span>
            </h2>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <ArrowBtn dir="prev" disabled={page === 0} onClick={() => setPage(p => Math.max(0, p - 1))}/>
            <ArrowBtn dir="next" disabled={page === pages - 1} onClick={() => setPage(p => Math.min(pages - 1, p + 1))}/>
          </div>
        </div>

        {/* Flat product cards, sliding track (one flex page per slide) */}
        <div style={{ overflow: 'hidden' }}>
          <div style={{
            display: 'flex', transform: `translateX(-${page * 100}%)`, transition: 'transform 0.6s cubic-bezier(0.35, 0, 0.15, 1)', }}>
            {Array.from({ length: pages }).map((_, pg) => (
              <div key={pg} aria-hidden={pg !== page} style={{
                flex: '0 0 100%', minWidth: 0, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 34, }}>
                {FEATURED.slice(pg * PER, pg * PER + PER).map((p, idx) => (
            <article key={p.sku} style={{
              opacity: pg === page ? 1 : 0, transform: pg === page ? 'none' : 'translateY(16px)', transition: 'opacity 0.45s ease, transform 0.6s cubic-bezier(0.3, 0, 0.2, 1)', transitionDelay: pg === page ? `${140 + idx * 90}ms` : '0ms', }}>
              <div style={{ position: 'relative', aspectRatio: '4 / 3', background: '#263166', overflow: 'hidden' }}>
                <img src={p.imgUrl || FENCE_IMG[p.img]} alt={t(p.name)}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="mono" style={{
                marginTop: 16, fontSize: 13.5, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--charcoal)', }}>{t(p.cat)} · {p.height}</div>
              <h3 className="display" style={{
                margin: '8px 0 0', fontSize: 22.5, lineHeight: 1.15, fontWeight: 700, color: 'var(--ink)', }}>{t(p.name)}</h3>
              <a href="estimate.html" className="mono" style={{
                marginTop: 14, display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--tangerine)', }}>
                {t('Request quote', 'Solicitar cotización')}
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square"/>
                </svg>
              </a>
            </article>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Footer: progress + counter + catalog download */}
        <div style={{
          marginTop: 40, display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap', }}>
          <span style={{ flex: 1, minWidth: 160, height: 2, background: 'rgba(0,16,17,0.12)', position: 'relative' }}>
            <span style={{
              position: 'absolute', left: 0, top: 0, bottom: 0, width: `${((page + 1) / pages) * 100}%`, background: 'var(--tangerine)', transition: 'width 0.3s ease', }}/>
          </span>
          <span className="mono" style={{
            fontSize: 14.5, letterSpacing: '0.14em', color: 'var(--charcoal)', whiteSpace: 'nowrap', }}>{start + 1}–{Math.min(start + PER, FEATURED.length)} / {FEATURED.length}</span>
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
        gridColumn: layout.col, gridRow: layout.row, position: 'relative', overflow: 'hidden', background: '#263166', textDecoration: 'none', display: 'block', }}>
      <img src={p.imgUrl || FENCE_IMG[MAT_IMG[p.material]] || FENCE_IMG[p.img]} alt={t(p.name)}
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transform: hover ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.7s ease', }} />
      <div style={{
        position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,16,17,0) 35%, rgba(0,16,17,0.92) 100%)', }}/>

      {/* Top meta row */}
      <div style={{
        position: 'absolute', top: 18, left: 18, right: 18, display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}>
        <div className="mono" style={{
          fontSize: 13.5, letterSpacing: '0.18em', color: 'var(--ink)', background: 'var(--white)', padding: '5px 9px', fontWeight: 600, }}>
          {String(i + 1).padStart(2, '0')} / {p.year}
        </div>
        <div className="mono" style={{
          fontSize: 13.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--white)', background: 'rgba(0,16,17,0.55)', padding: '5px 9px', backdropFilter: 'blur(6px)', }}>
          {t(MAT_LABELS[p.material] || p.material)}
        </div>
      </div>

      {/* Bottom content */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px', color: 'var(--white)' }}>
        <h3 className="display" style={{
          margin: 0, fontSize: 'clamp(18px, 1.5vw, 22px)', lineHeight: 1.05, letterSpacing: '-0.01em', color: 'var(--white)', }}>{t(p.name)}</h3>

        {/* Reveal on hover: scope + contractor */}
        <div style={{
          maxHeight: hover ? 80 : 0, opacity: hover ? 1 : 0, overflow: 'hidden', transition: 'all 0.35s ease', marginTop: hover ? 14 : 0, }}>
          <p style={{
            margin: 0, fontSize: 14.5, lineHeight: 1.55, color: 'var(--alice-blue)', }}>{t(p.type)}</p>
          <p style={{
            margin: '6px 0 0', fontSize: 14, fontFamily: 'var(--mono)', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.65)', }}>{t('Installed by', 'Instalado por')} {p.contractor}</p>
        </div>
      </div>

      {/* Arrow corner */}
      <div style={{
        position: 'absolute', bottom: 18, right: 18, width: 36, height: 36, background: 'var(--white)', color: 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: hover ? 1 : 0, transform: hover ? 'translate(0,0)' : 'translate(8px,-8px)', transition: 'all 0.3s ease', }}>
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
        position: 'relative', overflow: 'hidden', background: '#263166', textDecoration: 'none', display: 'block', minHeight: 'min(52vh, 500px)', maxHeight: 620, animation: 'wfsSlideFade 0.5s cubic-bezier(0.3, 0, 0.2, 1)', }}>
      <img src={p.imgUrl || FENCE_IMG[MAT_IMG[p.material]] || FENCE_IMG[p.img]} alt={t(p.name)}
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transform: hover ? 'scale(1.04)' : 'scale(1)', transition: 'transform 0.7s ease', }} />
      <div style={{
        position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(38, 49, 102,0) 16%, rgba(38, 49, 102,0.6) 52%, rgba(38, 49, 102,0.95) 100%)', }}/>
      {/* Tangerine top accent */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'var(--tangerine)' }}/>

      {/* Bottom content */}
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: 28, color: 'var(--white)' }}>
        <h3 className="display" style={{
          margin: 0, fontSize: 'clamp(26px, 3vw, 38px)', lineHeight: 1.0, letterSpacing: '-0.02em', color: 'var(--white)', }}>{t(p.name)}</h3>
        <p style={{
          margin: '12px 0 0', maxWidth: 460, fontSize: 15.5, lineHeight: 1.55, color: 'var(--alice-blue)', }}>{t(p.type)}</p>

        {/* Spec strip */}
        <div style={{
          display: 'flex', marginTop: 18, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.18)', }}>
          {[
            [{ EN: 'Scope', ES: 'Alcance' }, t(p.size)], [{ EN: 'System', ES: 'Sistema' }, t(MAT_LABELS[p.material] || p.material)], [{ EN: 'Completed', ES: 'Completado' }, p.year], ].map(([k, v], i) => (
            <div key={i} style={{
              flex: 1, paddingLeft: i ? 18 : 0, borderLeft: i ? '1px solid rgba(255,255,255,0.18)' : 'none', }}>
              <div className="mono" style={{
                fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: 5, }}>{t(k)}</div>
              <div className="display" style={{ fontSize: 17.5, color: 'var(--white)', letterSpacing: '-0.01em' }}>{v}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          marginTop: 18, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 16, flexWrap: 'wrap', }}>
          <span className="mono" style={{
            display: 'inline-flex', alignItems: 'center', gap: 12, fontSize: 14, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--white)', }}>
            {t('View project', 'Ver proyecto')}
            <span style={{
              width: 34, height: 34, background: 'var(--tangerine)', color: 'var(--ink)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', transform: hover ? 'translateX(3px)' : 'none', transition: 'transform 0.25s ease', }}>
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
        display: 'grid', gridTemplateColumns: '72px 1fr auto', gap: 14, alignItems: 'center', padding: 8, width: '100%', textAlign: 'left', cursor: 'pointer', background: active ? '#ffffff' : 'transparent', border: '1px solid', borderColor: active ? 'rgba(38, 49, 102,0.22)' : 'rgba(0,16,17,0.10)', borderLeftWidth: 3, borderLeftColor: active ? 'var(--tangerine)' : 'transparent', transition: 'background 0.2s ease, border-color 0.2s ease', }}>
      <span style={{ display: 'block', width: 72, height: 50, overflow: 'hidden', background: '#263166' }}>
        <img src={p.imgUrl || FENCE_IMG[MAT_IMG[p.material]] || FENCE_IMG[p.img]} alt={t(p.name)}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </span>
      <span style={{ display: 'block', minWidth: 0 }}>
        <span className="display" style={{
          display: 'block', fontSize: 17, lineHeight: 1.1, letterSpacing: '-0.01em', color: 'var(--ink)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', }}>{t(p.name)}</span>
      </span>
      <span className="mono" style={{
        fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, color: active ? 'var(--ink)' : 'var(--charcoal)', flexShrink: 0, }}>{t(MAT_LABELS[p.material] || p.material)}</span>
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
      width: 32, height: 32, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, letterSpacing: '0.04em', border: '1px solid', borderColor: active ? 'var(--ink)' : 'rgba(0,16,17,0.18)', background: active ? 'var(--ink)' : 'transparent', color: active ? 'var(--white)' : 'var(--ink)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.32 : 1, transition: 'background 0.2s ease, border-color 0.2s ease', }}>
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
  const curated = Array.isArray(items) && items.length > 0;
  const projects = curated ? items : [
    { name: { EN: 'Cape Coral Residential', ES: 'Residencial Cape Coral' }, loc: 'Cape Coral, FL', size: '320 LF', material: 'Chain Link', type: { EN: 'Chainlink fence, black', ES: 'Cerca de malla ciclónica, negra' }, contractor: 'Coastline Fence Co.', year: '2024', imgUrl: 'assets/projects/cl-privacy-slats-black.jpg' }, { name: { EN: 'Estero Community', ES: 'Comunidad Estero' }, loc: 'Estero, FL', size: { EN: '38 lots', ES: '38 lotes' }, material: 'Metal', type: { EN: 'Metal fence, horizontal, black', ES: 'Cerca de metal, horizontal, negra' }, contractor: 'Gulf Perimeter LLC', year: '2024', imgUrl: 'assets/projects/met-fence-horizontal-black.jpg' }, { name: { EN: 'Fort Myers Estate', ES: 'Residencia Fort Myers' }, loc: 'Fort Myers, FL', size: '420 LF', material: 'Aluminum', type: { EN: '2-rail aluminum, smooth bottom, white', ES: 'Aluminio de 2 rieles, base lisa, blanco' }, contractor: 'Estate Fence Pros', year: '2025', imgUrl: 'assets/projects/alum-2-rail-smooth-bottom-white.jpg' }, { name: { EN: 'Naples Pool Enclosure', ES: 'Cerramiento de piscina Naples' }, loc: 'Naples, FL', size: '180 LF', material: 'Vinyl', type: { EN: 'Vinyl closed top, white', ES: 'Vinilo tope cerrado, blanco' }, contractor: 'Naples Outdoor', year: '2025', imgUrl: 'assets/projects/pvc-closed-top-white.jpg' }, { name: { EN: 'Bonita Springs Self-Storage', ES: 'Autoalmacenamiento Bonita Springs' }, loc: 'Bonita Springs, FL', size: '0.9 mi', material: 'Chain Link', type: { EN: 'Galvanized mesh with galvanized swing gate', ES: 'Malla galvanizada con portón abatible galvanizado' }, contractor: 'Industrial Fence FL', year: '2024', imgUrl: 'assets/projects/cl-swing-gate-galv-4.jpg' }, { name: { EN: 'Punta Gorda Marina', ES: 'Marina Punta Gorda' }, loc: 'Punta Gorda, FL', size: '240 LF', material: 'EC Fence', type: { EN: 'EC Fence panels, 6 ft, white finish', ES: 'Paneles EC Fence, 6 ft, acabado blanco' }, contractor: 'Harbor Iron Works', year: '2025', imgUrl: 'assets/projects/ecfence-white.jpg' }, { name: { EN: 'Lehigh Acres Warehouse', ES: 'Bodega Lehigh Acres' }, loc: 'Lehigh Acres, FL', size: '0.6 mi', material: 'Chain Link', type: { EN: 'Chainlink fence, black', ES: 'Cerca de malla ciclónica, negra' }, contractor: 'Industrial Fence FL', year: '2025', imgUrl: 'assets/projects/cl-gate-black.jpg' }, { name: { EN: 'Marco Island Villa', ES: 'Villa Marco Island' }, loc: 'Marco Island, FL', size: '260 LF', material: 'Aluminum', type: { EN: 'Aluminum puppy picket, bronze estate finish', ES: 'Aluminio puppy picket, acabado bronce de alta gama' }, contractor: 'Estate Fence Pros', year: '2025', imgUrl: 'assets/projects/alum-puppy-picket-bronze.jpg' }, { name: { EN: 'Sanibel Beachfront', ES: 'Frente de playa Sanibel' }, loc: 'Sanibel, FL', size: '150 LF', material: 'Vinyl', type: { EN: 'Vinyl privacy, two-tone white and gray', ES: 'Privacidad de vinilo, bicolor blanco y gris' }, contractor: 'Naples Outdoor', year: '2024', imgUrl: 'assets/projects/pvc-privacy-two-tone-white-and-gray.png' }, { name: { EN: 'Immokalee Ag Facility', ES: 'Instalación agrícola Immokalee' }, loc: 'Immokalee, FL', size: '1.4 mi', material: 'Chain Link', type: { EN: 'Chainlink fence, black', ES: 'Cerca de malla ciclónica, negra' }, contractor: 'Gulf Perimeter LLC', year: '2024', imgUrl: 'assets/projects/cl-fence-black-2.jpg' }, { name: { EN: 'Port Charlotte HOA', ES: 'HOA Port Charlotte' }, loc: 'Port Charlotte, FL', size: { EN: '52 lots', ES: '52 lotes' }, material: 'EC Fence', type: { EN: 'EC Fence panels, 6 ft, bronze finish', ES: 'Paneles EC Fence, 6 ft, acabado bronce' }, contractor: 'Harbor Iron Works', year: '2025', imgUrl: 'assets/projects/ecfence-bronze.jpg' }, { name: { EN: 'Golden Gate Estates', ES: 'Golden Gate Estates' }, loc: 'Golden Gate, FL', size: '300 LF', material: 'Metal', type: { EN: 'Metal fence, 3-rail, brown finish', ES: 'Cerca metálica, 3 rieles, acabado marrón' }, contractor: 'Gulf Perimeter LLC', year: '2025', imgUrl: 'assets/projects/met-fence-3-rail-brown.jpg' }, ];

  const PER = 5;
  const pages = Math.ceil(projects.length / PER);
  const [page, setPage] = React.useState(0);
  const start = page * PER;
  const ArrowBtn = ({ dir, disabled, onClick }) => (
    <button onClick={onClick} disabled={disabled} aria-label={dir === 'prev' ? t('Previous', 'Anterior') : t('Next', 'Siguiente')} style={{
      width: 46, height: 46, borderRadius: '50%', border: `1px solid ${disabled ? 'rgba(0,16,17,0.12)' : 'var(--ink)'}`, background: 'var(--white)', color: disabled ? 'rgba(0,16,17,0.25)' : 'var(--ink)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', cursor: disabled ? 'default' : 'pointer', transition: 'border-color 0.2s ease, color 0.2s ease', }}>
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none" style={{ transform: dir === 'prev' ? 'rotate(180deg)' : 'none' }}>
        <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square"/>
      </svg>
    </button>
  );
  return (
    <section id="projects" style={{ background: 'var(--white)', padding: 'clamp(64px, 9vh, 110px) 0' }}>
      <div className="container">
        {/* Header: two-tone title + pager arrows, same design as bestsellers */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 32, marginBottom: 44, flexWrap: 'wrap', }}>
          <div>
            <h2 className="display" style={{
              margin: 0, fontSize: 'clamp(30px, 3.4vw, 46px)', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '-0.01em', }}>
              {t('Product', 'Ejemplos de')}{' '}
              <span style={{ color: 'var(--tangerine)' }}>{t('examples.', 'producto.')}</span>
            </h2>
            <p className="mono" style={{
              margin: '12px 0 0', fontSize: 14, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--charcoal)', }}>
              {t('Representative product photos, not customer projects.', 'Fotos representativas de producto, no proyectos de clientes.')}
            </p>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <ArrowBtn dir="prev" disabled={page === 0} onClick={() => setPage(p => Math.max(0, p - 1))}/>
            <ArrowBtn dir="next" disabled={page === pages - 1} onClick={() => setPage(p => Math.min(pages - 1, p + 1))}/>
          </div>
        </div>

        {/* Sliding track of flat project cards */}
        <div style={{ overflow: 'hidden' }}>
          <div style={{
            display: 'flex', transform: `translateX(-${page * 100}%)`, transition: 'transform 0.6s cubic-bezier(0.35, 0, 0.15, 1)', }}>
            {Array.from({ length: pages }).map((_, pg) => (
              <div key={pg} aria-hidden={pg !== page} style={{
                flex: '0 0 100%', minWidth: 0, display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 20, }}>
                {projects.slice(pg * PER, pg * PER + PER).map((p, idx) => (
                  <article key={p.name.EN || p.name} style={{
                    opacity: pg === page ? 1 : 0, transform: pg === page ? 'none' : 'translateY(16px)', transition: 'opacity 0.45s ease, transform 0.6s cubic-bezier(0.3, 0, 0.2, 1)', transitionDelay: pg === page ? `${140 + idx * 90}ms` : '0ms', }}>
                    <div style={{ position: 'relative', aspectRatio: '4 / 3', background: '#263166', overflow: 'hidden' }}>
                      <img src={p.imgUrl || FENCE_IMG[MAT_IMG[p.material]] || FENCE_IMG[p.img]} alt={t(p.name)}
                        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div className="mono" style={{
                      marginTop: 16, fontSize: 13.5, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--charcoal)', }}>{t(MAT_LABELS[p.material] || p.material)}</div>
                    <h3 className="display" style={{
                      margin: '8px 0 0', fontSize: 20.5, lineHeight: 1.25, fontWeight: 700, color: 'var(--ink)', }}>{t(p.type)}</h3>
                    <a href="estimate.html#contact" className="mono" style={{
                      marginTop: 14, display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--tangerine)', }}>
                      {t('Request quote', 'Solicitar cotización')}
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square"/>
                      </svg>
                    </a>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Footer: progress + counter */}
        <div style={{ marginTop: 40, display: 'flex', alignItems: 'center', gap: 24 }}>
          <span style={{ flex: 1, height: 2, background: 'rgba(0,16,17,0.12)', position: 'relative' }}>
            <span style={{
              position: 'absolute', left: 0, top: 0, bottom: 0, width: `${((page + 1) / pages) * 100}%`, background: 'var(--tangerine)', transition: 'width 0.3s ease', }}/>
          </span>
          <span className="mono" style={{
            fontSize: 14.5, letterSpacing: '0.14em', color: 'var(--charcoal)', whiteSpace: 'nowrap', }}>{start + 1}–{Math.min(start + PER, projects.length)} / {projects.length}</span>
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
            <p style={{ fontSize: 18.5, lineHeight: 1.5, color: 'var(--alice-blue)', maxWidth: 420, marginBottom: 32 }}>
              {t('Get a real-time materials estimate. We follow up with a binding quote within 24 hours, including delivery and any local code adjustments.', 'Obtén un estimado de materiales en tiempo real. Damos seguimiento con una cotización en firme dentro de 24 horas, incluyendo entrega y cualquier ajuste por normativa local.')}
            </p>
            <div style={{ display: 'grid', gap: 16, maxWidth: 380 }}>
              {[
                [t('MATERIALS-ONLY', 'SOLO MATERIALES'), t('No labor markup. We sell what installers buy.', 'Sin recargo por mano de obra. Vendemos lo que compran los instaladores.')], [t('LIVE INVENTORY', 'INVENTARIO EN VIVO'), t('Estimates pull from current stock at your nearest yard.', 'Los estimados usan el stock actual de tu sucursal más cercana.')], [t('NO COMMITMENT', 'SIN COMPROMISO'), t('Save the estimate, share with your contractor.', 'Guarda el estimado y compártelo con tu contratista.')], ].map(([k, v], i) => (
                <div key={i} style={{ borderTop: '1px solid rgba(255,255,255,0.18)', paddingTop: 14 }}>
                  <div className="mono" style={{ fontSize: 14, letterSpacing: '0.14em', color: 'var(--tangerine)', marginBottom: 6 }}>{k}</div>
                  <div style={{ fontSize: 15.5, color: 'var(--alice-blue)', lineHeight: 1.4 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Calculator panel */}
          <div style={{
            background: 'var(--parchment)', color: 'var(--ink)', borderRadius: 'var(--radius-lg)', padding: 36, }}>
            <div className="mono" style={{ fontSize: 14, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--charcoal)', marginBottom: 24, display: 'flex', justifyContent: 'space-between' }}>
              <span>{t('Quick estimate', 'Estimado rápido')}</span>
              <span>WFS-CALC v2.4</span>
            </div>

            <div style={{ display: 'grid', gap: 24 }}>
              {/* Type */}
              <div>
                <label style={{ fontSize: 14.5, fontFamily: 'var(--mono)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--charcoal)', marginBottom: 10, display: 'block' }}>
                  {t('Fence type', 'Tipo de cerca')}
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6 }}>
                  {[['chain-link', 'Chain Link', 'Malla ciclónica'], ['aluminum', 'Aluminum', 'Aluminio'], ['vinyl', 'Vinyl', 'Vinilo'], ['metal', 'Metal', 'Metal']].map(([id, label, labelEs]) => (
                    <button key={id} onClick={() => setType(id)} style={{
                      padding: '14px 10px', fontSize: 14.5, background: type === id ? 'var(--ink)' : 'var(--white)', color: type === id ? 'var(--parchment)' : 'var(--ink)', border: '1px solid rgba(0,16,17,0.12)', borderRadius: 8, fontWeight: 500, }}>{t(label, labelEs)}</button>
                  ))}
                </div>
              </div>

              {/* Length slider */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                  <label style={{ fontSize: 14.5, fontFamily: 'var(--mono)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--charcoal)' }}>
                    {t('Linear feet', 'Pies lineales')}
                  </label>
                  <span className="mono" style={{ fontSize: 14.5, fontWeight: 500 }}>{length} ft</span>
                </div>
                <input type="range" min="20" max="2000" step="10" value={length} onChange={e => setLength(+e.target.value)} style={{ width: '100%', accentColor: 'var(--tangerine)' }}/>
              </div>

              {/* Height + gates row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div>
                  <label style={{ fontSize: 14.5, fontFamily: 'var(--mono)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--charcoal)', marginBottom: 10, display: 'block' }}>
                    {t('Height (ft)', 'Altura (ft)')}
                  </label>
                  <div style={{ display: 'flex', gap: 4 }}>
                    {[4, 6, 8, 10].map(h => (
                      <button key={h} onClick={() => setHeight(h)} style={{
                        flex: 1, padding: '12px 0', fontSize: 14.5, background: height === h ? 'var(--ink)' : 'var(--white)', color: height === h ? 'var(--parchment)' : 'var(--ink)', border: '1px solid rgba(0,16,17,0.12)', borderRadius: 8, fontWeight: 500, }}>{h}'</button>
                    ))}
                  </div>
                </div>
                <div>
                  <label style={{ fontSize: 14.5, fontFamily: 'var(--mono)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--charcoal)', marginBottom: 10, display: 'block' }}>
                    {t('Gates', 'Portones')}
                  </label>
                  <div style={{ display: 'flex', gap: 4 }}>
                    {[0, 1, 2, 3].map(g => (
                      <button key={g} onClick={() => setGates(g)} style={{
                        flex: 1, padding: '12px 0', fontSize: 14.5, background: gates === g ? 'var(--ink)' : 'var(--white)', color: gates === g ? 'var(--parchment)' : 'var(--ink)', border: '1px solid rgba(0,16,17,0.12)', borderRadius: 8, fontWeight: 500, }}>{g}</button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Result */}
              <div style={{ marginTop: 8, padding: '24px 0 0', borderTop: '1px solid rgba(0,16,17,0.12)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14.5, color: 'var(--charcoal)', marginBottom: 8 }}>
                  <span>{t('Materials', 'Materiales')} ({length} ft × {height}' {type})</span>
                  <span className="mono">${matCost.toLocaleString()}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14.5, color: 'var(--charcoal)', marginBottom: 16 }}>
                  <span>{t('Gates', 'Portones')} ({gates})</span>
                  <span className="mono">${gateCost.toLocaleString()}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span className="mono" style={{ fontSize: 14, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--charcoal)' }}>{t('Estimated total', 'Total estimado')}</span>
                  <span className="display" style={{ fontSize: 45.5, color: 'var(--ink)' }}>
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

/* Small box-truck marker for the Florida map, echoes the WFS delivery-truck
   logo (cargo box + cab-over cab + chunky wheels + motion lines). Navy on the
   tangerine land reads cleanly; base faces left, flip to face right. */
const MapTruck = ({ flip }) => (
  <svg viewBox="0 0 72 40" width="100%" height="100%"
    style={{ display: 'block', overflow: 'visible', transform: flip ? 'scaleX(-1)' : 'none' }}>
    {/* motion lines (speed) */}
    <g stroke="var(--white)" strokeWidth="2.4" strokeLinecap="round" opacity="0.85">
      <line x1="0.5" y1="17" x2="7" y2="17" />
      <line x1="1.5" y1="24" x2="9" y2="24" />
    </g>
    {/* cargo box */}
    <rect x="10" y="6.5" width="32" height="21" rx="2.5" fill="var(--ink)" />
    {/* cab */}
    <path d="M42 12 h9.6 c1.2 0 2.3 .5 3.1 1.5 l4.6 5.6 c.9 1.1 1.4 2.5 1.4 3.9 v4.5 H42 Z" fill="var(--ink)" />
    {/* windshield */}
    <path d="M51.9 14.6 h-6.1 v5.3 h10.4 z" fill="var(--white)" />
    {/* chassis rail */}
    <rect x="10" y="27.4" width="49" height="2.6" rx="1.3" fill="var(--ink)" />
    {/* wheels + hubs */}
    <g fill="var(--ink)"><circle cx="22" cy="31.4" r="5.6" /><circle cx="51" cy="31.4" r="5.6" /></g>
    <g fill="var(--white)"><circle cx="22" cy="31.4" r="2" /><circle cx="51" cy="31.4" r="2" /></g>
  </svg>
);

const ServiceAreas = () => {
  const t = useT();
  const cities = [
    { name: 'Fort Myers', x: 22, y: 32, hq: true }, { name: 'Cape Coral', x: 18, y: 38 }, { name: 'Port Charlotte', x: 28, y: 22 }, { name: 'Bonita Springs', x: 30, y: 50 }, { name: 'Naples', x: 36, y: 60 }, { name: 'Estero', x: 26, y: 44 }, { name: 'Punta Gorda', x: 32, y: 18 }, { name: 'Marco Island', x: 42, y: 72 }, ];
  return (
    <section style={{ background: 'var(--white)', padding: '120px 0' }}>
      <div className="container">
        {/* Editorial header, matches FenceCategories / GateSystems / Projects */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'end', paddingBottom: 24, marginBottom: 28, borderBottom: '1px solid rgba(0,16,17,0.12)', }}>
          <div>
            <h2 className="display" style={{
              margin: 0, fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: 1, letterSpacing: '-0.02em', fontWeight: 800, }}>
              {t('Serving all of', 'Atendemos toda')}<br/>
              <span style={{ color: 'var(--tangerine)' }}>{t('Florida.', 'Florida.')}</span>
            </h2>
          </div>
          <p style={{
            margin: 0, maxWidth: 360, justifySelf: 'end', fontSize: 15.5, lineHeight: 1.55, color: 'var(--charcoal)', textAlign: 'right', }}>
            {t(
              'Two yards in Fort Myers and Port Charlotte, same-day pickup, with delivery available across the state of Florida.', 'Dos sucursales en Fort Myers y Port Charlotte, recogida el mismo día, con entrega disponible en todo el estado de Florida.'
            )}
          </p>
        </div>

        {/* Map + yard cards side-by-side */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 24, alignItems: 'stretch', }}>
          {/* Florida map with white pins over the tangerine state */}
          <div className="wfs-map" style={{
            position: 'relative', background: 'var(--ink)', border: '1px solid var(--ink)', overflow: 'hidden', aspectRatio: '192 / 152', }}>
            {/* Map, viewBox cropped to Florida (624 432 192 152) */}
            <img src="assets/us-map.svg" alt={t('Florida map showing WFS service area', 'Mapa de Florida que muestra la zona de servicio de WFS')}
              style={{
                position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', }}/>

            {/* Pins, anchored to exact SVG coords within viewBox 624 432 192 152.
                Computed by parsing FL path: FM west-coast inland (757, 534);
                PC west-coast inland (755, 528). */}
            {[
              { name: t('Fort Myers · HQ', 'Fort Myers · Sede'), xPct: 69.3, yPct: 67.1, cls: 'wfs-map-pin--fm' }, { name: 'Port Charlotte', xPct: 68.2, yPct: 63.2, labelLeft: true, cls: 'wfs-map-pin--pc' }, ].map((p) => (
              <React.Fragment key={p.name}>
                {/* Dot, sits exactly on the target SVG point */}
                <span style={{
                  position: 'absolute', left: `${p.xPct}%`, top: `${p.yPct}%`, transform: 'translate(-50%, -50%)', width: 14, height: 14, borderRadius: '50%', background: 'var(--white)', border: '3px solid var(--ink)', boxShadow: '0 0 0 4px rgba(38, 49, 102,0.35)', pointerEvents: 'none', zIndex: 2, }}/>
                {/* Label, offset 16px to the side of the dot */}
                <span className={`mono wfs-map-pin ${p.cls || ''}`} style={{
                  position: 'absolute', left: p.labelLeft ? `calc(${p.xPct}% - 16px)` : `calc(${p.xPct}% + 16px)`, top: `${p.yPct}%`, transform: p.labelLeft ? 'translate(-100%, -50%)' : 'translate(0, -50%)', fontSize: 13.5, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink)', background: 'var(--white)', padding: '5px 9px', whiteSpace: 'nowrap', border: '1px solid var(--ink)', boxShadow: '0 6px 16px rgba(0,0,0,0.30)', pointerEvents: 'none', zIndex: 3, }}>{p.name}</span>
              </React.Fragment>
            ))}

            {/* Delivery fleet, trucks fan out from the SW yards across the
                state. Coords are % of the viewBox; all sit on the FL landmass
                (point-in-polygon checked, ≥7.5 units of edge clearance so the
                truck body never overhangs water): panhandle → north → central
                → southeast. */}
            {[
              { key: 'panhandle', xPct: 30, yPct: 18, flip: false }, { key: 'north-fl', xPct: 64, yPct: 26, flip: true  }, { key: 'north', xPct: 70, yPct: 41, flip: true  }, { key: 'central', xPct: 78, yPct: 57, flip: false }, { key: 'se', xPct: 85, yPct: 66.5, flip: false }, ].map((tk) => (
              <span key={tk.key} aria-hidden style={{
                position: 'absolute', left: `${tk.xPct}%`, top: `${tk.yPct}%`, transform: 'translate(-50%, -50%)', width: 38, height: 21, filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.38))', pointerEvents: 'none', zIndex: 1, }}>
                <MapTruck flip={tk.flip} />
              </span>
            ))}

            {/* Eyebrow label, top-left */}
            <div className="mono" style={{
              position: 'absolute', top: 18, left: 18, display: 'flex', alignItems: 'center', gap: 10, fontSize: 13.5, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--alice-blue)', fontWeight: 700, }}>
              <span>{t('State of Florida', 'Estado de Florida')}</span>
              <span style={{ width: 24, height: 1, background: 'var(--tangerine)' }}/>
            </div>

            {/* Legend, bottom-left */}
            <div style={{
              position: 'absolute', bottom: 16, left: 16, background: 'rgba(38, 49, 102,0.85)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,113,51,0.4)', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10, boxShadow: '0 8px 20px rgba(0,0,0,0.32)', }}>
              <span style={{
                width: 8, height: 8, borderRadius: '50%', background: 'var(--white)', border: '2px solid var(--ink)', }}/>
              <span className="mono" style={{
                fontSize: 13.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--alice-blue)', fontWeight: 700, }}>{t('WFS yard locations', 'Sucursales de WFS')}</span>
            </div>
          </div>

          {/* Yard cards stacked */}
          <div style={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)', gap: 12 }}>
            {[
              { city: t('Fort Myers · HQ', 'Fort Myers · Sede'), addr: '2621 Fowler St, FL 33901', phone: '(239) 689-5496' }, { city: 'Port Charlotte', addr: '1145 Enterprise Dr, FL 33953', phone: '(941) 623-6890' }, { city: t('Service area', 'Área de servicio'), addr: t('Serving customers throughout Florida', 'Atendemos clientes en toda Florida'), phone: t('Mon-Fri 7am-4pm · Sat 7am-12pm', 'Lun-Vie 7am-4pm · Sáb 7am-12pm') }, ].map((y, i) => (
              <div key={i} className="wfs-yard-card" style={{
                border: '1px solid rgba(0,16,17,0.18)', padding: '16px 18px', background: 'var(--white)', boxShadow: '0 6px 18px rgba(38,49,102,0.12)', display: 'flex', alignItems: 'center', gap: 16, }}>
                <div className="mono" style={{
                  fontSize: 13.5, letterSpacing: '0.22em', color: 'var(--tangerine)', textTransform: 'uppercase', fontWeight: 700, minWidth: 22, }}>0{i+1}</div>
                <div className="wfs-yard-body" style={{ flex: 1, minWidth: 0 }}>
                  <div className="display" style={{
                    fontSize: 18.5, lineHeight: 1.1, marginBottom: 4, }}>{y.city}</div>
                  <div style={{
                    fontSize: 14.5, color: 'var(--charcoal)', lineHeight: 1.4, }}>{y.addr}</div>
                </div>
                <div className="mono wfs-yard-meta" style={{
                  fontSize: 14, color: 'var(--ink)', letterSpacing: '0.06em', textAlign: 'right', fontWeight: 600, whiteSpace: 'nowrap', }}>{y.phone}</div>
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
  const [sending, setSending] = React.useState(false);
  const [error, setError] = React.useState('');
  const [fileName, setFileName] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;
    setSending(true); setError('');
    try {
      await submitLead(e.target, { form: 'quote', subject: 'Material Quote Request' });
      setSubmitted(true);
    } catch (err) {
      setError((err && err.message) || t(
        "We couldn't send your request. Please call us at (239) 689-5496 or email sales@westernfencesupply.com.", 'No pudimos enviar tu solicitud. Llámanos al (239) 689-5496 o escribe a sales@westernfencesupply.com.'
      ));
    } finally {
      setSending(false);
    }
  };
  const inputStyle = {
    width: '100%', padding: '15px 16px', border: '1px solid rgba(0,16,17,0.16)', background: 'var(--white)', fontFamily: 'var(--sans)', fontSize: 16.5, color: 'var(--ink)', outline: 'none', borderRadius: 12, };
  const labelStyle = {
    fontFamily: 'var(--mono)', fontSize: 14, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--charcoal)', fontWeight: 600, marginBottom: 8, display: 'block', };
  return (
    <section id="contact" style={{ background: 'var(--white)', padding: '120px 0', position: 'relative', overflow: 'hidden', scrollMarginTop: 110 }}>
      {/* Decorative background pattern + accent shapes */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, backgroundImage:
          'linear-gradient(rgba(38, 49, 102,0.04) 1px, transparent 1px), ' +
          'linear-gradient(90deg, rgba(38, 49, 102,0.04) 1px, transparent 1px)', backgroundSize: '56px 56px', maskImage: 'radial-gradient(circle at 70% 0%, #000 0%, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle at 70% 0%, #000 0%, transparent 70%)', pointerEvents: 'none', }}/>
      <div className="container" style={{ position: 'relative' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'end', paddingBottom: 24, marginBottom: 40, borderBottom: '1px solid rgba(0,16,17,0.12)', }}>
          <div>
            <h2 className="display" style={{
              margin: 0, fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: 1, letterSpacing: '-0.02em', fontWeight: 800, }}>
              {t('Ready to spec your', '¿Listo para tu próximo')}<br/>
              <span style={{ color: 'var(--tangerine)' }}>{t('next perimeter?', 'perímetro?')}</span>
            </h2>
          </div>
          <p style={{
            margin: 0, maxWidth: 360, justifySelf: 'end', fontSize: 15.5, lineHeight: 1.55, color: 'var(--charcoal)', textAlign: 'right', }}>
            {t(
              "Tell us about your project, we'll come back within 24 hours with stock, pricing and lead time.", 'Cuéntanos sobre tu proyecto, respondemos en 24 horas con stock, precios y plazo de entrega.'
            )}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 48, alignItems: 'start' }}>
          {/* Left: contact info */}
          <div style={{ paddingTop: 8 }}>
            <div style={{ marginBottom: 32 }}>
              <div style={labelStyle}>{t('Call us', 'Llámanos')}</div>
              <a href="tel:2396895496" className="display" style={{ fontSize: 29.5, color: 'var(--ink)', textDecoration: 'none', display: 'block', lineHeight: 1.15 }}>(239) 689-5496</a>
              <div style={{ fontSize: 14.5, color: 'var(--charcoal)', marginBottom: 12 }}>{t('Fort Myers yard', 'Sucursal Fort Myers')}</div>
              <a href="tel:9416236890" className="display" style={{ fontSize: 29.5, color: 'var(--ink)', textDecoration: 'none', display: 'block', lineHeight: 1.15 }}>(941) 623-6890</a>
              <div style={{ fontSize: 14.5, color: 'var(--charcoal)' }}>{t('Port Charlotte yard', 'Sucursal Port Charlotte')}</div>
              <div style={{ fontSize: 14.5, color: 'var(--charcoal)', marginTop: 12 }}>{t('Mon-Fri 7am-4pm · Sat 7am-12pm', 'Lun-Vie 7am-4pm · Sáb 7am-12pm')}</div>
            </div>
            <div style={{ marginBottom: 32 }}>
              <div style={labelStyle}>{t('Email', 'Correo')}</div>
              <a href="mailto:sales@westernfencesupply.com" style={{ fontSize: 17.5, color: 'var(--ink)' }}>sales@westernfencesupply.com</a>
            </div>
            <div style={{ marginBottom: 32 }}>
              <div style={labelStyle}>{t('Visit', 'Visítanos')}</div>
              <div style={{ fontSize: 15.5, color: 'var(--ink)', lineHeight: 1.5, marginBottom: 14 }}>2621 Fowler St<br/>Fort Myers, FL 33901</div>
              <div style={{ fontSize: 15.5, color: 'var(--ink)', lineHeight: 1.5 }}>1145 Enterprise Dr<br/>Port Charlotte, FL 33953</div>
            </div>
            <div style={{ paddingTop: 24, borderTop: '1px solid rgba(0,16,17,0.15)' }}>
              <div className="mono" style={{ fontSize: 14, letterSpacing: '0.16em', color: 'var(--ink)', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ width: 8, height: 8, background: '#ff7133', borderRadius: '50%' }}/>
                {t('Get a detailed quote', 'Pide tu cotización')}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit} style={{
            background: 'var(--white)', padding: 'clamp(28px, 3vw, 40px)', border: '1px solid rgba(0,16,17,0.08)', borderRadius: 22, boxShadow: '0 34px 70px -34px rgba(38,49,102,0.4)', }}>
            {submitted ? (
              <div style={{ padding: '64px 0', textAlign: 'center' }}>
                <div className="mono" style={{ fontSize: 14, letterSpacing: '0.18em', color: 'var(--tangerine)', marginBottom: 16, textTransform: 'uppercase', fontWeight: 700 }}>{t('Submitted', 'Enviado')}</div>
                <h3 className="display" style={{ fontSize: 33.5, margin: '0 0 12px', lineHeight: 1.1 }}>{t("Thanks, we'll be in touch.", 'Gracias, pronto te contactamos.')}</h3>
                <p style={{ fontSize: 15.5, color: 'var(--charcoal)', maxWidth: 360, margin: '0 auto' }}>{t('One of our reps will reach out within 24 hours with stock, pricing and lead time for your project.', 'Uno de nuestros representantes se comunicará en 24 horas con stock, precios y plazo de entrega para tu proyecto.')}</p>
              </div>
            ) : (
              <>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginBottom: 18 }}>
                  <div><label style={labelStyle}>{t('Full name', 'Nombre completo')}</label><input type="text" name="name" required style={inputStyle} placeholder="Jane Smith"/></div>
                  <div><label style={labelStyle}>{t('Company (optional)', 'Empresa (opcional)')}</label><input type="text" name="company" style={inputStyle} placeholder="Acme Fence Co."/></div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginBottom: 18 }}>
                  <div><label style={labelStyle}>{t('Email', 'Correo')}</label><input type="email" name="email" required style={inputStyle} placeholder="jane@email.com"/></div>
                  <div><label style={labelStyle}>{t('Phone', 'Teléfono')}</label><input type="tel" name="phone" required style={inputStyle} placeholder="(239) 555-0142"/></div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginBottom: 18 }}>
                  <div><label style={labelStyle}>{t('I am a', 'Soy')}</label>
                    <select name="audience" style={inputStyle}>
                      <option value="Homeowner">{t('Homeowner', 'Propietario')}</option>
                      <option value="DIY / Self-installer">{t('DIY / Self-installer', 'DIY / Auto-instalador')}</option>
                      <option value="Contractor">{t('Contractor', 'Contratista')}</option>
                      <option value="Commercial / Builder">{t('Commercial / Builder', 'Comercial / Constructor')}</option>
                    </select>
                  </div>
                  <div><label style={labelStyle}>{t('Project type', 'Tipo de proyecto')}</label>
                    <select name="project_type" style={inputStyle}>
                      <option value="Vinyl / PVC">{t('Vinyl / PVC', 'Vinilo / PVC')}</option>
                      <option value="Aluminum">{t('Aluminum', 'Aluminio')}</option>
                      <option value="Chain Link">{t('Chain Link', 'Malla ciclónica')}</option>
                      <option value="Metal / DuraFence">Metal / DuraFence</option>
                      <option value="EC Fence">EC Fence</option>
                      <option value="Gate System">{t('Gate System', 'Sistema de portón')}</option>
                      <option value="Other">{t('Other', 'Otro')}</option>
                    </select>
                  </div>
                </div>
                <div style={{ marginBottom: 18 }}>
                  <label style={labelStyle}>{t('How did you hear about us?', '¿Cómo te enteraste de nosotros?')}</label>
                  <select name="source" style={inputStyle}>
                    <option value="Select an option">{t('Select an option', 'Selecciona una opción')}</option>
                    <option value="Google / web search">{t('Google / web search', 'Búsqueda en Google / web')}</option>
                    <option value="Referral / word of mouth">{t('Referral / word of mouth', 'Referencia / recomendación')}</option>
                    <option value="Social media">{t('Social media', 'Redes sociales')}</option>
                    <option value="Drove by / signage">{t('Drove by / signage', 'Pasé por ahí / letrero')}</option>
                    <option value="Repeat customer">{t('Repeat customer', 'Cliente recurrente')}</option>
                    <option value="Other">{t('Other', 'Otro')}</option>
                  </select>
                </div>
                <div style={{ marginBottom: 18 }}>
                  <label style={labelStyle}>{t('Project details', 'Detalles del proyecto')}</label>
                  <textarea name="details" rows={4} style={{ ...inputStyle, resize: 'vertical', minHeight: 100 }} placeholder={t('Approx. linear feet, height, location/zip, timeline, anything else relevant…', 'Aprox. pies lineales, altura, ubicación/código postal, plazo, cualquier otro detalle relevante…')}/>
                </div>

                {/* Drawing / layout upload, lets people send the sketch with the request */}
                <div style={{ marginBottom: 24 }}>
                  <label style={labelStyle}>{t('Drawing or layout (optional)', 'Plano o diseño (opcional)')}</label>
                  <label htmlFor="wfs-upload" style={{
                    display: 'flex', alignItems: 'center', gap: 14, padding: '16px 18px', borderRadius: 12, border: '1.5px dashed ' + (fileName ? 'var(--tangerine)' : 'rgba(0,16,17,0.2)'), background: fileName ? 'rgba(255,113,51,0.06)' : '#fbfbfc', cursor: 'pointer', transition: 'border-color 0.15s, background 0.15s', }}>
                    <span aria-hidden style={{
                      width: 42, height: 42, borderRadius: 11, flexShrink: 0, background: fileName ? 'var(--tangerine)' : 'var(--ink)', color: 'var(--white)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 16V4"/><path d="M8 8l4-4 4 4"/><path d="M4 16v2.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V16"/>
                      </svg>
                    </span>
                    <span style={{ minWidth: 0 }}>
                      <span style={{ display: 'block', fontSize: 16, fontWeight: 600, color: 'var(--ink)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {fileName || t('Upload your drawing or layout', 'Sube tu plano o diseño')}
                      </span>
                      <span style={{ display: 'block', fontSize: 14.5, color: 'var(--charcoal)', marginTop: 2 }}>
                        {fileName ? t('Tap to choose a different file', 'Toca para elegir otro archivo') : t('PDF, JPG or PNG · up to 10 MB', 'PDF, JPG o PNG · hasta 10 MB')}
                      </span>
                    </span>
                  </label>
                  <input id="wfs-upload" name="drawing" type="file" accept=".pdf,.jpg,.jpeg,.png,.heic,.webp"
                    onChange={(e) => setFileName(e.target.files && e.target.files[0] ? e.target.files[0].name : '')}
                    style={{ display: 'none' }}/>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
                  <p className="mono" style={{ margin: 0, fontSize: 14, letterSpacing: '0.04em', color: 'var(--charcoal)', maxWidth: 280 }}>
                    {t('By submitting, you agree to be contacted by Western Fence Supply.', 'Al enviar, aceptas ser contactado por Western Fence Supply.')}
                  </p>
                  <button type="submit" disabled={sending} style={{
                    display: 'inline-flex', alignItems: 'center', gap: 10, padding: '16px 28px', borderRadius: 999, background: 'var(--ink)', color: 'var(--white)', fontFamily: 'var(--sans)', fontSize: 16.5, fontWeight: 600, boxShadow: '0 12px 28px -12px rgba(38,49,102,0.6)', opacity: sending ? 0.6 : 1, cursor: sending ? 'wait' : 'pointer', }}>
                    {sending ? t('Sending…', 'Enviando…') : t('Request quote', 'Solicitar cotización')}
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
                  </button>
                </div>
                {error && (
                  <p role="alert" style={{
                    margin: '18px 0 0', padding: '14px 16px', borderRadius: 12, background: 'rgba(255,113,51,0.08)', border: '1px solid rgba(255,113,51,0.35)', fontSize: 15.5, lineHeight: 1.5, color: 'var(--ink)', }}>{error}</p>
                )}
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
      { label: { EN: 'Vinyl / PVC', ES: 'Vinilo / PVC' }, href: 'vinyl.html' }, { label: { EN: 'Aluminum', ES: 'Aluminio' }, href: 'aluminum.html' }, { label: { EN: 'Chain Link', ES: 'Malla ciclónica' }, href: 'chain-link.html' }, { label: { EN: 'Metal / DuraFence', ES: 'Metal / DuraFence' }, href: 'metal.html' }, { label: { EN: 'EC Fence', ES: 'EC Fence' }, href: 'ecfence.html' }, { label: { EN: 'Full catalog', ES: 'Catálogo completo' }, href: 'products.html' }, ]}, { title: { EN: 'Solutions', ES: 'Soluciones' }, items: [
      { label: { EN: 'For Contractors', ES: 'Para contratistas' }, href: 'contractors.html' }, { label: { EN: 'For Homeowners', ES: 'Para propietarios' }, href: 'homeowners.html' }, { label: { EN: 'For HOA', ES: 'Para HOA' }, href: 'solutions.html' }, { label: { EN: 'Commercial', ES: 'Comercial' }, href: 'solutions.html' }, ]}, { title: { EN: 'Resources', ES: 'Recursos' }, items: [
      { label: { EN: 'FAQ', ES: 'Preguntas frecuentes' }, href: 'faq.html' }, { label: { EN: 'Materials Comparison', ES: 'Comparativa de materiales' },href: 'materials-comparison.html' }, { label: { EN: 'Florida Pool Code', ES: 'Código de piscinas FL' }, href: 'pool-code.html' }, { label: { EN: 'Yard Locations', ES: 'Sucursales' }, href: 'locations.html' }, ]}, { title: { EN: 'Company', ES: 'Empresa' }, items: [
      { label: { EN: 'About WFS', ES: 'Sobre WFS' }, href: 'about.html' }, { label: { EN: 'Contact', ES: 'Contacto' }, href: 'contact.html' }, { label: 'sales@westernfencesupply.com', href: 'mailto:sales@westernfencesupply.com' }, ]}, ];
  return (
    <footer style={{ background: 'var(--ink)', color: 'var(--parchment)', padding: '104px 0 32px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: 40, marginBottom: 60 }}>
          <div>
            <Logo light />
            <p style={{ fontSize: 15.5, color: 'var(--alice-blue)', lineHeight: 1.5, marginTop: 20, maxWidth: 320 }}>
              {t(
                "Fencing material supplier for contractors, homeowners and DIY projects. Family-owned, factory-direct, we supply, we don't install.", 'Proveedor de material de cercado para contratistas, propietarios y proyectos DIY. Empresa familiar, directo de fábrica, suministramos, no instalamos.'
              )}
            </p>
          </div>
          {cols.map((col, ci) => (
            <div key={ci}>
              <div className="mono" style={{ fontSize: 14, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--tangerine)', marginBottom: 16 }}>
                {t(col.title)}
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10 }}>
                {col.items.map((it, i) => (
                  <li key={i}><a href={it.href} style={{ fontSize: 15.5, color: 'var(--alice-blue)' }}>
                    {typeof it.label === 'string' ? it.label : t(it.label)}
                  </a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <div className="mono" style={{ fontSize: 14, letterSpacing: '0.14em', color: 'var(--silver)' }}>
            © 2026 Western Fence Supply · Fort Myers, FL · Port Charlotte, FL
          </div>
          <div style={{ display: 'flex', gap: 24 }}>
            {[
              { label: { EN: 'Privacy', ES: 'Privacidad' } }, { label: { EN: 'Terms', ES: 'Términos' } }, { label: { EN: 'Accessibility', ES: 'Accesibilidad' } }, { label: 'sales@westernfencesupply.com' }, ].map((item, i) => (
              <a key={i} href="#" style={{ fontSize: 14.5, fontFamily: 'var(--mono)', letterSpacing: '0.1em', color: 'var(--silver)' }}>
                {typeof item.label === 'string' ? item.label : t(item.label)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

Object.assign(window, { FeaturedGrid, InstallerMarquee, ProductMarquee, ProjectGallery, Calculator, ServiceAreas, FinalCTA, Footer });
