/* Get a Quote: configurador de UNA pantalla con las opciones y la lógica REALES
   de app.westernfencesupply.com, en el formato "At A Glance" del design system:
   tarjetas de material arriba; al elegir, foto grande a la izquierda (cambia con
   la selección) y a la derecha los grupos de la rama real en cascada como chips.
   Sin stepper ni Continue: cada clic revela el siguiente grupo. Cambiar una
   elección anterior re-arma lo que viene después. Cero campos inventados.

   El árbol vive en components/flow-data.js (tools/generate-flow-data.py). Una
   ruta ausente en WFS_FLOW es la página de dibujo: el resumen deep-linkea ahí.

   OJO styles.css: los overrides [style*="border: …"] y [style*="aspect-ratio:
   4 / 3"] meten radius/fondo !important; por eso los bordes van con hex
   (#263167), las hairlines con box-shadow inset y el aspect ratio como 1.333. */

const FLOW_APP = window.WFS_APP_BASE || 'https://app.westernfencesupply.com';
const INK_BORDER = '1.5px solid #263167';

/* Etiqueta corta de cada pantalla real (kickers de grupo y resumen) */
const FLOW_STEP_NAME = {
  'Choose Your Fence Material': ['Material', 'Material'],
  'Choose Type of Fence':       ['Type of fence', 'Tipo de cerca'],
  'Choose Height':              ['Height', 'Altura'],
  'Choose Color':               ['Color', 'Color'],
  'Choose Style':               ['Style', 'Estilo'],
  'Choose Your Style':          ['Style', 'Estilo'],
  'Choose Design':              ['Design', 'Diseño'],
  'Add bottom rail or bottom tension wire': ['Bottom rail or tension wire', 'Riel inferior o tensor'],
  'Add barb wire':              ['Barb wire', 'Alambre de púas'],
  'Barb Arms':                  ['Barb arms', 'Brazos de púas'],
  'Choose Number of Rails':     ['Number of rails', 'Número de rieles'],
  'Choose Panels Width':        ['Panel width', 'Ancho de panel'],
};
const flowName = (h, lang) => (FLOW_STEP_NAME[h] || [h, h])[lang === 'ES' ? 1 : 0];

/* Meta del grupo de materiales: el copy REAL de las tarjetas de la home del app */
const FLOW_MATERIAL_META = {
  'Aluminum Fence':   { kicker: '4 ft / 5 ft / 6 ft', desc: 'Lightweight, Lasting Protection' },
  'Chain Link Fence': { kicker: '4 ft / 5 ft / 6 ft', desc: 'A cost-effective solution' },
  'Metal Fence':      { kicker: '6 ft / 8 ft',        desc: 'Ultimate Privacy, Impeccable Design' },
  'Vinyl Fence':      { kicker: '4 ft / 5 ft / 6 ft', desc: 'Timeless Elegance, Zero Maintenance' },
};

const flowKicker = {
  fontFamily: 'var(--mono)', fontSize: 13, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--tangerine)', };

/* Tarjeta de material (foto + copy real de la home del app) */
const FlowMaterialCard = ({ opt, selected, onPick }) => {
  const [hover, setHover] = React.useState(false);
  const lifted = hover || selected;
  const meta = FLOW_MATERIAL_META[opt.t] || {};
  return (
    <button onClick={onPick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      aria-pressed={selected} style={{
        textAlign: 'left', width: '100%', background: '#fff', border: INK_BORDER, padding: 0, cursor: 'pointer', display: 'flex', flexDirection: 'column', transform: lifted ? 'translateY(-3px)' : 'none', boxShadow: lifted ? '6px 6px 0 var(--tangerine)' : 'none', transition: 'transform 0.18s ease, box-shadow 0.18s ease', }}>
      <span style={{ display: 'block', position: 'relative', aspectRatio: '1.6 / 1', background: '#fff', overflow: 'hidden', boxShadow: 'inset 0 -1px 0 rgba(0,16,17,0.08)' }}>
        <img src={opt.img} alt={opt.t} decoding="async" style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', padding: 10, transform: lifted ? 'scale(1.04)' : 'none', transition: 'transform 0.6s ease', }}/>
      </span>
      <span style={{ display: 'block', padding: '16px 18px 20px' }}>
        <span style={{ ...flowKicker, fontSize: 12 }}>{meta.kicker}</span>
        <span style={{ display: 'block', fontSize: 18, fontWeight: 700, lineHeight: 1.2, color: 'var(--ink)', margin: '8px 0 6px' }}>{opt.t}</span>
        <span style={{ display: 'block', fontSize: 14, color: 'var(--charcoal)', lineHeight: 1.5 }}>{meta.desc}</span>
      </span>
    </button>
  );
};

/* Chip de opción: texto, o con swatch de color; como .choice del design system */
const FlowChip = ({ opt, selected, onPick }) => (
  <button onClick={onPick} aria-pressed={selected} className="mono" style={{
    display: 'inline-flex', alignItems: 'center', gap: 10, border: INK_BORDER, background: selected ? 'var(--ink)' : '#fff', color: selected ? '#fff' : 'var(--ink)', padding: '12px 18px', fontSize: 13.5, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', cursor: 'pointer', transition: 'background 0.18s ease, color 0.18s ease', textAlign: 'left', }}>
    {opt.c && <span aria-hidden style={{
      width: 16, height: 16, background: opt.c, flexShrink: 0, boxShadow: selected ? 'inset 0 0 0 1px rgba(255,255,255,0.6)' : 'inset 0 0 0 1px rgba(0,16,17,0.25)', }}/>}
    <span>
      {opt.t}
      {opt.n && <span style={{ display: 'block', fontSize: 12, fontWeight: 600, letterSpacing: '0.02em', textTransform: 'none', color: selected ? 'rgba(255,255,255,0.75)' : 'var(--charcoal)' }}>{opt.n}</span>}
      {opt.sp && <span style={{ display: 'block', fontSize: 12, fontWeight: 700, letterSpacing: '0.02em', textTransform: 'none', color: '#e66' }}>{opt.sp}</span>}
    </span>
  </button>
);

const QuoteFlow = () => {
  const t = useT();
  const lang = t('EN', 'ES');
  /* trail: la opción elegida en cada grupo, en orden.
     view: 'material' (pantalla 1, solo tarjetas) o 'detail' (pantalla 2, cascada).
     Elegir material redirige a la pantalla de detalle para mantener limpia la 1ª. */
  const [trail, setTrail] = React.useState([]);
  const [view, setView] = React.useState('material');
  const topRef = React.useRef(null);
  const endRef = React.useRef(null);
  const prevCount = React.useRef(0);
  const scrollTop = () => { if (topRef.current) topRef.current.scrollIntoView({ block: 'start' }); };

  /* Cadena de grupos según el árbol real */
  const groups = [];
  let path = '/';
  for (let i = 0; ; i++) {
    const node = window.WFS_FLOW[path];
    if (!node) break;
    groups.push({ path, node, pick: trail[i] || null });
    if (!trail[i]) break;
    path = trail[i].to;
  }
  const terminal = trail.length && !window.WFS_FLOW[trail[trail.length - 1].to]
    ? trail[trail.length - 1].to : null;
  const material = trail[0] || null;

  /* Al aparecer un grupo nuevo (o el resumen), acercarlo a la vista */
  const visibleCount = groups.length + (terminal ? 1 : 0);
  React.useEffect(() => {
    if (visibleCount > prevCount.current && prevCount.current > 0 && endRef.current) {
      endRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    prevCount.current = visibleCount;
  }, [visibleCount]);

  const pickAt = (i, opt) => {
    if (trail[i] && trail[i].to === opt.to) return;
    setTrail([...trail.slice(0, i), opt]);
  };

  /* La foto grande: la última elección con imagen (estilo/diseño), o el material */
  const heroPick = [...trail].reverse().find(p => p.img) || material;
  const meta = material ? (FLOW_MATERIAL_META[material.t] || {}) : {};

  const summaryTitle = () => {
    const m = material ? material.t : '';
    const hIdx = groups.findIndex(g => g.node.h === 'Choose Height');
    return m + (hIdx >= 0 && trail[hIdx] ? ' · ' + trail[hIdx].t : '');
  };

  const onDetail = view === 'detail' && material;
  const header = onDetail
    ? { EN: [material.t.replace(/ Fence$/, ''), 'At A Glance.'], ES: [material.t.replace(/ Fence$/, ''), 'En Detalle.'] }
    : { EN: ['Start With The', 'Material.'], ES: ['Empieza Por El', 'Material.'] };

  return (
    <section ref={topRef} style={{ background: 'var(--white)', padding: '52px 0 110px', scrollMarginTop: 90 }}>
      <div className="container">

        {/* Cabecera: titular dos líneas + descripción a la derecha */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 40, alignItems: 'end', paddingBottom: 22, marginBottom: 34, boxShadow: 'inset 0 -1px 0 rgba(0,16,17,0.12)', }} className="wfs-flow-header">
          <h2 className="display" style={{ margin: 0, fontSize: 'clamp(26px, 2.9vw, 38px)', lineHeight: 1, letterSpacing: '-0.02em', fontWeight: 800 }}>
            {header[lang === 'ES' ? 'ES' : 'EN'][0]}<br/>
            <span style={{ color: 'var(--tangerine)' }}>{header[lang === 'ES' ? 'ES' : 'EN'][1]}</span>
          </h2>
          <p style={{ margin: 0, justifySelf: 'end', textAlign: 'right', maxWidth: 380, fontSize: 14.5, lineHeight: 1.55, color: 'var(--charcoal)' }}>
            {onDetail
              ? t('Pick each option and the next one appears. Same options as the Easy Draw Your Fence tool.', 'Elige cada opción y aparece la siguiente. Las mismas opciones de la herramienta Easy Draw Your Fence.')
              : t('Pick a material to configure your fence. Same options as the Easy Draw Your Fence tool.', 'Elige un material para configurar tu cerca. Las mismas opciones de la herramienta Easy Draw Your Fence.')}
          </p>
        </div>

        {/* Pantalla 1: solo la selección de material */}
        {!onDetail && (
          <div className="wfs-flow-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
            {groups[0].node.o.map(opt => (
              <FlowMaterialCard key={opt.to} opt={opt} selected={!!material && material.to === opt.to}
                onPick={() => { pickAt(0, opt); setView('detail'); scrollTop(); }}/>
            ))}
          </div>
        )}

        {/* Pantalla 2, "At A Glance": foto a un lado, grupos reales al otro */}
        {onDetail && (
          <div style={{ marginBottom: 22 }}>
            <button className="btn btn-ghost" onClick={() => { setView('material'); scrollTop(); }} style={{ borderRadius: 2, padding: '10px 16px', fontSize: 14 }}>
              ← {t('Change material', 'Cambiar material')}
            </button>
          </div>
        )}
        {onDetail && (
          <div className="wfs-flow-detail" style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 44, alignItems: 'start' }}>
            <div>
              <div style={{ position: 'relative', aspectRatio: '1.333 / 1', border: INK_BORDER, background: '#fff', overflow: 'hidden' }}>
                <img src={heroPick.img} alt={heroPick.t} decoding="async" style={{
                  position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', padding: 14, }}/>
              </div>
              <div style={{ marginTop: 12 }}>
                <span style={flowKicker}>{meta.desc}</span>
                <div className="display" style={{ fontSize: 'clamp(20px, 2vw, 26px)', marginTop: 4 }}>{heroPick.t}</div>
              </div>
            </div>

            <div>
              {groups.slice(1).map((g, gi) => {
                const i = gi + 1;
                return (
                  <div key={g.path} style={{ marginBottom: 24 }}>
                    <span className="mono" style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--charcoal)' }}>
                      {flowName(g.node.h, lang)}
                    </span>
                    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 12 }}>
                      {g.node.o.map(opt => (
                        <FlowChip key={opt.to} opt={opt} selected={!!g.pick && g.pick.to === opt.to} onPick={() => pickAt(i, opt)}/>
                      ))}
                    </div>
                  </div>
                );
              })}

              {/* Resumen: aparece al completar la rama */}
              {terminal && (
                <div style={{ background: 'var(--ink)', color: '#fff', padding: 28, boxShadow: '10px 10px 0 var(--tangerine)', marginTop: 30 }}>
                  <span style={flowKicker}>{t('Your fence configuration', 'La configuración de tu cerca')}</span>
                  <div className="display-extended" style={{ fontSize: 'clamp(20px, 2.1vw, 28px)', margin: '10px 0 16px', color: '#fff' }}>
                    {summaryTitle()}
                  </div>
                  <dl style={{ margin: '0 0 22px' }}>
                    {groups.map((g, i) => (
                      <div key={g.path} style={{
                        display: 'grid', gridTemplateColumns: '190px 1fr', gap: '4px 22px', padding: '11px 0', boxShadow: 'inset 0 -1px 0 rgba(255,255,255,0.18)', fontSize: 15, lineHeight: 1.45, }} className="wfs-flow-spec">
                        <dt className="mono" style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--blue-ice)' }}>
                          {flowName(g.node.h, lang)}
                        </dt>
                        <dd style={{ margin: 0 }}>{trail[i] ? trail[i].t : '—'}</dd>
                      </div>
                    ))}
                  </dl>
                  <a className="btn btn-primary" href={`${FLOW_APP}${terminal}`} target="_blank" rel="noopener" style={{ borderRadius: 2, fontWeight: 600 }}>
                    {t('Open the drawing tool', 'Abrir la herramienta de dibujo')} →
                  </a>
                  <div style={{ marginTop: 12, fontSize: 14, color: 'rgba(255,255,255,0.72)' }}>
                    {t('Opens with this exact configuration and builds your material list.', 'Se abre con esta configuración exacta y arma tu lista de materiales.')}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Empezar de nuevo */}
        {onDetail && (
          <div style={{ marginTop: 30 }}>
            <button className="btn btn-ghost" onClick={() => { setTrail([]); setView('material'); scrollTop(); }} style={{ borderRadius: 2 }}>
              {t('Start over', 'Empezar de nuevo')}
            </button>
          </div>
        )}

        <div ref={endRef}/>
      </div>

      <style>{`
        @media (max-width: 1000px) {
          .wfs-flow-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .wfs-flow-detail { grid-template-columns: 1fr !important; }
          .wfs-flow-header { grid-template-columns: 1fr !important; }
          .wfs-flow-header p { justify-self: start !important; text-align: left !important; }
          .wfs-flow-spec { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 620px) {
          .wfs-flow-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

Object.assign(window, { QuoteFlow });
