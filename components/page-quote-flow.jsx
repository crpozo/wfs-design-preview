/* Get a Quote: réplica 1:1 del wizard de app.westernfencesupply.com.
   Mismos pasos, mismas opciones, mismo orden — cero campos inventados.
   El árbol vive en components/flow-data.js (generado con un crawler sobre el
   app real). Un nodo ausente en WFS_FLOW es una página de dibujo: el paso
   final enlaza a esa URL del app real para dibujar con la config elegida. */

const FLOW_APP = window.WFS_APP_BASE || 'https://app.westernfencesupply.com';

/* Banner del app real: mismas tres líneas, mismo blueprint de fondo */
const FlowHero = () => (
  <section style={{
    position: 'relative', color: 'var(--white)', background: 'var(--ink)', overflow: 'hidden', }}>
    <img src={`${FLOW_APP}/images/banner.png`} alt="" aria-hidden style={{
      position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, }}/>
    <div aria-hidden style={{
      position: 'absolute', inset: 0, zIndex: 1, background: 'rgba(38, 49, 103, 0.62)', }}/>
    <div className="container" style={{
      position: 'relative', zIndex: 2, padding: '64px 0 60px', textAlign: 'center', }}>
      <p className="mono" style={{
        margin: '0 0 14px', fontSize: 13.5, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)', }}>
        Draw your custom fence to get an instant list of all the project material you need
      </p>
      <h1 style={{
        margin: 0, fontFamily: 'var(--display)', fontVariationSettings: "'wdth' 125", fontWeight: 800, fontSize: 'clamp(34px, 4.2vw, 56px)', lineHeight: 0.9, letterSpacing: '-0.02em', textTransform: 'uppercase', }}>
        Easy Draw Your Fence
      </h1>
      <p className="mono" style={{
        margin: '16px 0 0', fontSize: 13.5, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--tangerine)', }}>
        Start your fence project
      </p>
    </div>
  </section>
);

/* ¿El texto sobre este color se lee mejor en blanco o en tinta? */
const flowTextOn = (hex) => {
  if (!hex) return 'var(--white)';
  const h = hex.replace('#', '');
  const v = h.length === 3 ? h.split('').map(c => c + c).join('') : h;
  const [r, g, b] = [0, 2, 4].map(i => parseInt(v.slice(i, i + 2), 16));
  return (0.299 * r + 0.587 * g + 0.114 * b) > 150 ? 'var(--ink)' : 'var(--white)';
};

const FlowOptionCard = ({ opt, onPick }) => {
  const [hover, setHover] = React.useState(false);
  const lift = {
    transform: hover ? 'translateY(-3px)' : 'none', boxShadow: hover ? '6px 6px 0 var(--tangerine)' : 'none', transition: 'transform 0.18s ease, box-shadow 0.18s ease', cursor: 'pointer', };

  /* Tarjeta con foto (materiales, estilos, diseños) */
  if (opt.img) return (
    <button onClick={onPick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
      display: 'flex', flexDirection: 'column', textAlign: 'center', background: 'var(--white)', border: '1.5px solid var(--ink)', padding: '16px 14px 18px', ...lift, }}>
      <div style={{ height: 190, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <img src={opt.img} alt={opt.t} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}/>
      </div>
      <span style={{
        marginTop: 14, fontFamily: 'var(--display)', fontVariationSettings: "'wdth' 125", fontWeight: 700, fontSize: 18.5, lineHeight: 1.15, color: 'var(--ink)', }}>{opt.t}</span>
      {opt.n && <span style={{ marginTop: 6, fontSize: 14.5, color: 'var(--charcoal)' }}>{opt.n}</span>}
      {opt.sp && <span style={{ marginTop: 6, fontSize: 14, fontWeight: 700, color: '#c22' }}>{opt.sp}</span>}
    </button>
  );

  /* Tarjeta de color (swatch real del app).
     OJO: sin border inline en el swatch — los overrides [style*="border: 1px…"]
     de styles.css le meterían background blanco !important. */
  if (opt.c) return (
    <button onClick={onPick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
      display: 'flex', flexDirection: 'column', textAlign: 'center', background: 'var(--white)', border: '1.5px solid var(--ink)', padding: 10, ...lift, }}>
      <span aria-hidden style={{
        height: 108, background: opt.c, borderRadius: 8, boxShadow: 'inset 0 0 0 1px rgba(0,16,17,0.18)', }}/>
      <span style={{
        padding: '12px 6px 6px', fontFamily: 'var(--display)', fontVariationSettings: "'wdth' 125", fontWeight: 700, fontSize: 17.5, color: 'var(--ink)', }}>{opt.t}</span>
      {opt.sp && <span style={{ paddingBottom: 6, fontSize: 14, fontWeight: 700, color: '#c22' }}>{opt.sp}</span>}
    </button>
  );

  /* Tarjeta de texto (tipos, alturas, sí/no…) */
  return (
    <button onClick={onPick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
      minHeight: 116, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px 18px', background: 'var(--ink)', border: '1.5px solid var(--ink)', ...lift, }}>
      <span style={{
        fontFamily: 'var(--display)', fontVariationSettings: "'wdth' 125", fontWeight: 800, fontSize: 19, lineHeight: 1.2, letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--white)', }}>{opt.t}</span>
    </button>
  );
};

const QuoteFlow = () => {
  const t = useT();
  const [trail, setTrail] = React.useState([]);
  const topRef = React.useRef(null);

  const current = trail.length ? trail[trail.length - 1].to : '/';
  const node = window.WFS_FLOW[current];
  const done = !node; /* ruta ausente = página de dibujo del app real */

  const go = (next) => {
    setTrail(next);
    if (topRef.current) topRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const gridCols = node && node.o.some(o => o.img)
    ? 'repeat(auto-fit, minmax(230px, 1fr))'
    : 'repeat(auto-fit, minmax(200px, 1fr))';
  const narrow = node && node.o.length <= 3;

  return (
    <section ref={topRef} style={{ background: 'var(--white)', padding: '72px 0 120px', scrollMarginTop: 90 }}>
      <div className="container">

        {/* Migas + controles, como el app: home + Previous Step */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 18, flexWrap: 'wrap', paddingBottom: 20, marginBottom: 44, borderBottom: '1px solid rgba(0,16,17,0.12)', minHeight: 54, }}>
          <div className="mono" style={{
            fontSize: 13, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--charcoal)', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 8, }}>
            {trail.length === 0
              ? t('Step 1 of your fence project', 'Paso 1 de tu proyecto de cerca')
              : trail.map((s, i) => (
                  <React.Fragment key={s.to}>
                    {i > 0 && <span style={{ color: 'var(--silver)' }}>/</span>}
                    <span style={{ color: i === trail.length - 1 ? 'var(--ink)' : 'var(--charcoal)' }}>{s.t}</span>
                  </React.Fragment>
                ))}
          </div>
          {trail.length > 0 && (
            <div style={{ display: 'flex', gap: 10 }}>
              <button className="btn btn-ghost" onClick={() => go([])} style={{ fontSize: 14.5 }}>
                {t('Start over', 'Empezar de nuevo')}
              </button>
              <button className="btn btn-dark" onClick={() => go(trail.slice(0, -1))} style={{ fontSize: 14.5 }}>
                ← {t('Previous step', 'Paso anterior')}
              </button>
            </div>
          )}
        </div>

        {done ? (
          /* Config completa: el dibujo se hace en el app real, con esta ruta */
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <p className="mono" style={{
              margin: '0 0 14px', fontSize: 13.5, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--tangerine)', }}>
              {t('Configuration complete', 'Configuración completa')}
            </p>
            <h2 className="display" style={{
              margin: '0 0 28px', fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: 1, letterSpacing: '-0.02em', fontWeight: 800, }}>
              {t('Ready To Draw', 'Listo Para Dibujar')}<br/>
              <span style={{ color: 'var(--tangerine)' }}>{t('Your Fence', 'Tu Cerca')}</span>
            </h2>
            <div style={{
              border: '1.5px solid var(--ink)', padding: '26px 30px', marginBottom: 30, textAlign: 'left', }}>
              {trail.map((s, i) => (
                <div key={s.to} style={{
                  display: 'flex', justifyContent: 'space-between', gap: 16, padding: '10px 0', borderBottom: i < trail.length - 1 ? '1px solid rgba(0,16,17,0.1)' : 'none', }}>
                  <span className="mono" style={{
                    fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--charcoal)', }}>
                    {(window.WFS_FLOW[i === 0 ? '/' : trail[i - 1].to] || {}).h || ''}
                  </span>
                  <span style={{ fontWeight: 600, fontSize: 15.5, color: 'var(--ink)', textAlign: 'right' }}>{s.t}</span>
                </div>
              ))}
            </div>
            <p style={{ margin: '0 0 26px', fontSize: 15.5, lineHeight: 1.55, color: 'var(--charcoal)' }}>
              {t('The drawing tool opens with this exact configuration. Sketch your layout and get the instant material list.', 'La herramienta de dibujo se abre con esta configuración exacta. Dibuja tu diseño y obtén la lista de materiales al instante.')}
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a className="btn btn-primary" href={`${FLOW_APP}${current}`} target="_blank" rel="noopener" style={{ fontWeight: 600 }}>
                {t('Open the drawing tool', 'Abrir la herramienta de dibujo')} →
              </a>
              <button className="btn btn-ghost" onClick={() => go([])}>
                {t('Start over', 'Empezar de nuevo')}
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Titular del paso: texto EXACTO del app */}
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <h2 className="display" style={{
                margin: '0 0 10px', fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: 1, letterSpacing: '-0.02em', fontWeight: 800, }}>{node.h}</h2>
              <p className="mono" style={{
                margin: 0, fontSize: 13, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--tangerine)', }}>
                {t('Click to select', 'Haz clic para elegir')}
              </p>
            </div>
            <div style={{
              display: 'grid', gridTemplateColumns: gridCols, gap: 18, maxWidth: narrow ? 780 : 'none', margin: '0 auto', }}>
              {node.o.map(opt => (
                <FlowOptionCard key={opt.to} opt={opt} onPick={() => go([...trail, { to: opt.to, t: opt.t }])}/>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

Object.assign(window, { FlowHero, QuoteFlow });
