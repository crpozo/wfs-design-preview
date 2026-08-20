/* Get a Quote: el selector por pasos del design system (design-system/example.html)
   alimentado con las opciones REALES de app.westernfencesupply.com — mismos pasos,
   mismas opciones, cero campos inventados. El árbol vive en components/flow-data.js
   (generado por tools/generate-flow-data.py). Una ruta ausente en WFS_FLOW es la
   página de dibujo: el resumen deep-linkea ahí con la configuración elegida.

   OJO styles.css: los overrides [style*="border: 1px solid rgba(0, 16, 17, …"] y
   [style*="border: 1.5px solid var(--ink)"] meten radius/fondo !important. Aquí los
   bordes van con hex (#263167) y las hairlines con box-shadow inset para esquivarlos
   y conservar las esquinas rectas del selector. */

const FLOW_APP = window.WFS_APP_BASE || 'https://app.westernfencesupply.com';
const INK_BORDER = '1.5px solid #263167';

/* Nombre corto de cada pantalla real para el indicador de pasos */
const FLOW_STEP_NAME = {
  'Choose Your Fence Material': ['Material', 'Material'],
  'Choose Type of Fence':       ['Type', 'Tipo'],
  'Choose Height':              ['Height', 'Altura'],
  'Choose Color':               ['Color', 'Color'],
  'Choose Style':               ['Style', 'Estilo'],
  'Choose Your Style':          ['Style', 'Estilo'],
  'Choose Design':              ['Design', 'Diseño'],
  'Add bottom rail or bottom tension wire': ['Bottom Rail', 'Riel Inferior'],
  'Add barb wire':              ['Barb Wire', 'Alambre'],
  'Barb Arms':                  ['Barb Arms', 'Brazos'],
  'Choose Number of Rails':     ['Rails', 'Rieles'],
  'Choose Panels Width':        ['Panel Width', 'Ancho Panel'],
};

/* Titular a dos líneas (la segunda en naranja), estilo section-header */
const FLOW_TITLES = {
  'Choose Your Fence Material': { EN: ['Start With The', 'Material.'], ES: ['Empieza Por El', 'Material.'] },
  'Choose Type of Fence':       { EN: ['Choose Type', 'Of Fence.'], ES: ['Elige El Tipo', 'De Cerca.'] },
  'Choose Height':              { EN: ['Choose The', 'Height.'], ES: ['Elige La', 'Altura.'] },
  'Choose Color':               { EN: ['Choose The', 'Color.'], ES: ['Elige El', 'Color.'] },
  'Choose Style':               { EN: ['Choose Your', 'Style.'], ES: ['Elige Tu', 'Estilo.'] },
  'Choose Your Style':          { EN: ['Choose Your', 'Style.'], ES: ['Elige Tu', 'Estilo.'] },
  'Choose Design':              { EN: ['Choose The', 'Design.'], ES: ['Elige El', 'Diseño.'] },
  'Add bottom rail or bottom tension wire': { EN: ['Bottom Rail Or', 'Tension Wire.'], ES: ['¿Riel Inferior O', 'Tensor?'] },
  'Add barb wire':              { EN: ['Add', 'Barb Wire?'], ES: ['¿Agregar', 'Púas?'] },
  'Barb Arms':                  { EN: ['Barb', 'Arms.'], ES: ['Brazos De', 'Púas.'] },
  'Choose Number of Rails':     { EN: ['Number', 'Of Rails.'], ES: ['Número', 'De Rieles.'] },
  'Choose Panels Width':        { EN: ['Panel', 'Width.'], ES: ['Ancho De', 'Panel.'] },
};

/* Meta del paso de materiales: el copy REAL de las tarjetas de la home del app */
const FLOW_MATERIAL_META = {
  'Aluminum Fence':   { kicker: '4 ft / 5 ft / 6 ft', desc: 'Lightweight, Lasting Protection' },
  'Chain Link Fence': { kicker: '4 ft / 5 ft / 6 ft', desc: 'A cost-effective solution' },
  'Metal Fence':      { kicker: '6 ft / 8 ft',        desc: 'Ultimate Privacy, Impeccable Design' },
  'Vinyl Fence':      { kicker: '4 ft / 5 ft / 6 ft', desc: 'Timeless Elegance, Zero Maintenance' },
};

const flowKicker = {
  fontFamily: 'var(--mono)', fontSize: 13, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--tangerine)', };

/* Tarjeta seleccionable (.pick del design system, con estado inline) */
const FlowPick = ({ opt, selected, onPick }) => {
  const [hover, setHover] = React.useState(false);
  const lifted = hover || selected;
  const meta = FLOW_MATERIAL_META[opt.t];
  return (
    <button onClick={onPick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      aria-pressed={selected} style={{
        textAlign: 'left', width: '100%', background: '#fff', border: INK_BORDER, padding: 0, cursor: 'pointer', display: 'flex', flexDirection: 'column', transform: lifted ? 'translateY(-3px)' : 'none', boxShadow: lifted ? '6px 6px 0 var(--tangerine)' : 'none', transition: 'transform 0.18s ease, box-shadow 0.18s ease', }}>
      {/* aspectRatio 1.333 y no "4 / 3": el override [style*="aspect-ratio: 4 / 3"]
          de styles.css redondearía la caja a 18px */}
      {opt.img && (
        <span style={{ display: 'block', position: 'relative', aspectRatio: '1.333 / 1', background: '#fff', overflow: 'hidden', boxShadow: 'inset 0 -1px 0 rgba(0,16,17,0.08)' }}>
          <img src={opt.img} alt={opt.t} decoding="async" style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', padding: 12, transform: lifted ? 'scale(1.04)' : 'none', transition: 'transform 0.6s ease', }}/>
        </span>
      )}
      {opt.c && (
        <span aria-hidden style={{ display: 'block', aspectRatio: '4 / 2', background: opt.c, boxShadow: 'inset 0 0 0 1px rgba(0,16,17,0.18)' }}/>
      )}
      <span style={{ display: 'block', padding: opt.img || opt.c ? '20px 22px 24px' : '30px 24px' }}>
        {meta && <span style={flowKicker}>{meta.kicker}</span>}
        <span style={{ display: 'block', fontSize: 19, fontWeight: 700, lineHeight: 1.2, color: 'var(--ink)', margin: meta ? '10px 0 8px' : 0 }}>{opt.t}</span>
        {meta && <span style={{ display: 'block', fontSize: 14.5, color: 'var(--charcoal)', lineHeight: 1.5 }}>{meta.desc}</span>}
        {opt.n && <span style={{ display: 'block', fontSize: 14.5, color: 'var(--charcoal)', lineHeight: 1.5, marginTop: 8 }}>{opt.n}</span>}
        {opt.sp && <span style={{ display: 'block', fontSize: 14, fontWeight: 700, color: '#c22', marginTop: 8 }}>{opt.sp}</span>}
      </span>
    </button>
  );
};

const QuoteFlow = () => {
  const t = useT();
  const lang = t('EN', 'ES');
  /* steps: pantallas confirmadas del árbol real; cur === steps.length ⇒ resumen */
  const [steps, setSteps] = React.useState([{ path: '/', pick: null }]);
  const [cur, setCur] = React.useState(0);
  const topRef = React.useRef(null);

  const onSummary = cur === steps.length;
  const node = onSummary ? null : window.WFS_FLOW[steps[cur].path];
  const lastPick = steps[steps.length - 1].pick;
  const lastIsTerminal = lastPick && !window.WFS_FLOW[lastPick.to];

  const scrollTop = () => { if (topRef.current) topRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' }); };

  const pickOpt = (opt) => {
    const s = steps.slice(0, cur + 1);
    if (!s[cur].pick || s[cur].pick.to !== opt.to) s[cur] = { ...s[cur], pick: opt };
    setSteps(s);
  };
  const advance = () => {
    const pick = steps[cur] && steps[cur].pick;
    if (cur < steps.length - 1) { setCur(cur + 1); }
    else if (pick && window.WFS_FLOW[pick.to]) { setSteps([...steps, { path: pick.to, pick: null }]); setCur(cur + 1); }
    else if (pick) { setCur(steps.length); } /* terminal ⇒ resumen */
    scrollTop();
  };
  const goBack = () => { if (cur > 0) { setCur(cur - 1); scrollTop(); } };
  const restart = () => { setSteps([{ path: '/', pick: null }]); setCur(0); scrollTop(); };

  /* Indicador de pasos: las pantallas recorridas + Resumen */
  const dots = steps.map((s, i) => {
    const h = window.WFS_FLOW[s.path].h;
    const nm = FLOW_STEP_NAME[h] || [h, h];
    return { label: `${i + 1}. ${lang === 'ES' ? nm[1] : nm[0]}`, idx: i, on: i <= cur, can: true };
  }).concat([{ label: `${steps.length + 1}. ${t('Summary', 'Resumen')}`, idx: steps.length, on: onSummary, can: lastIsTerminal || onSummary }]);

  const title = onSummary
    ? { EN: ['Ready To Draw', 'Your Fence.'], ES: ['Listo Para Dibujar', 'Tu Cerca.'] }
    : (FLOW_TITLES[node.h] || { EN: [node.h, ''], ES: [node.h, ''] });
  const sub = onSummary
    ? t('The drawing tool opens with this exact configuration. Sketch your layout and get the instant material list.', 'La herramienta de dibujo se abre con esta configuración exacta. Dibuja tu diseño y obtén la lista de materiales al instante.')
    : t('Click to select, then continue. Same options as the Easy Draw Your Fence tool.', 'Haz clic para elegir y continúa. Las mismas opciones de la herramienta Easy Draw Your Fence.');

  const canContinue = !onSummary && !!steps[cur].pick;
  const hasMedia = node && node.o.some(o => o.img || o.c);
  const cols = node ? Math.min(node.o.length, hasMedia ? 4 : 3) : 1;

  const summaryTitle = () => {
    const m = steps[0].pick ? steps[0].pick.t : '';
    const hStep = steps.find(s => window.WFS_FLOW[s.path].h === 'Choose Height');
    return m + (hStep && hStep.pick ? ' · ' + hStep.pick.t : '');
  };

  return (
    <section ref={topRef} style={{ background: 'var(--white)', padding: '52px 0 110px', scrollMarginTop: 90 }}>
      <div className="container">

        {/* Indicador de pasos */}
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 40, flexWrap: 'wrap' }}>
          {dots.map((d, i) => (
            <React.Fragment key={d.label}>
              {i > 0 && <span aria-hidden style={{ flex: 1, height: 2, background: d.on ? 'var(--tangerine)' : 'rgba(0,16,17,0.12)', maxWidth: 60 }}/>}
              <button onClick={() => { if (d.can) { setCur(d.idx); scrollTop(); } }} disabled={!d.can}
                aria-current={d.idx === cur} className="mono" style={{
                  background: 'none', border: 'none', padding: 0, fontSize: 13, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: d.on ? 'var(--ink)' : 'var(--silver)', cursor: d.can ? 'pointer' : 'not-allowed', }}>{d.label}</button>
            </React.Fragment>
          ))}
        </div>

        {/* Cabecera de sección: titular dos líneas + descripción a la derecha */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 40, alignItems: 'end', paddingBottom: 22, marginBottom: 32, boxShadow: 'inset 0 -1px 0 rgba(0,16,17,0.12)', }} className="wfs-flow-header">
          <h2 className="display" style={{ margin: 0, fontSize: 'clamp(26px, 2.9vw, 38px)', lineHeight: 1, letterSpacing: '-0.02em', fontWeight: 800 }}>
            {title[lang === 'ES' ? 'ES' : 'EN'][0]}<br/>
            <span style={{ color: 'var(--tangerine)' }}>{title[lang === 'ES' ? 'ES' : 'EN'][1]}</span>
          </h2>
          <p style={{ margin: 0, justifySelf: 'end', textAlign: 'right', maxWidth: 380, fontSize: 14.5, lineHeight: 1.55, color: 'var(--charcoal)' }}>{sub}</p>
        </div>

        {onSummary ? (
          /* Resumen: panel tinta con sombra dura, como el design system */
          <div style={{ background: 'var(--ink)', color: '#fff', padding: 32, boxShadow: '12px 12px 0 var(--tangerine)' }}>
            <span style={flowKicker}>{t('Your fence configuration', 'La configuración de tu cerca')}</span>
            <div className="display-extended" style={{ fontSize: 'clamp(22px, 2.4vw, 32px)', margin: '10px 0 18px', color: '#fff' }}>
              {summaryTitle()}
            </div>
            <dl style={{ margin: 0, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', columnGap: 48 }} className="wfs-flow-specs">
              {steps.map(s => (
                <div key={s.path} style={{
                  display: 'grid', gridTemplateColumns: '170px 1fr', gap: '4px 22px', padding: '15px 0', boxShadow: 'inset 0 -1px 0 rgba(255,255,255,0.18)', fontSize: 15, lineHeight: 1.45, }}>
                  <dt className="mono" style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--blue-ice)' }}>
                    {(FLOW_STEP_NAME[window.WFS_FLOW[s.path].h] || [window.WFS_FLOW[s.path].h])[lang === 'ES' ? 1 : 0]}
                  </dt>
                  <dd style={{ margin: 0 }}>{s.pick ? s.pick.t : '—'}</dd>
                </div>
              ))}
            </dl>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 22, maxWidth: cols <= 2 ? 720 : 'none', margin: '0 auto' }} className="wfs-flow-grid">
            {node.o.map(opt => (
              <FlowPick key={opt.to} opt={opt} selected={!!steps[cur].pick && steps[cur].pick.to === opt.to} onPick={() => pickOpt(opt)}/>
            ))}
          </div>
        )}

        {/* Navegación */}
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, marginTop: 32 }}>
          <div style={{ display: 'flex', gap: 10 }}>
            <button className="btn btn-ghost" onClick={goBack} style={{ borderRadius: 2, visibility: cur === 0 ? 'hidden' : 'visible' }}>
              ← {t('Back', 'Atrás')}
            </button>
            {cur > 0 && (
              <button className="btn btn-ghost" onClick={restart} style={{ borderRadius: 2 }}>
                {t('Start over', 'Empezar de nuevo')}
              </button>
            )}
          </div>
          {onSummary ? (
            <a className="btn btn-primary" href={`${FLOW_APP}${lastPick.to}`} target="_blank" rel="noopener" style={{ borderRadius: 2, fontWeight: 600 }}>
              {t('Open the drawing tool', 'Abrir la herramienta de dibujo')} →
            </a>
          ) : (
            <button className="btn btn-primary" onClick={advance} disabled={!canContinue} style={{
              borderRadius: 2, fontWeight: 600, opacity: canContinue ? 1 : 0.4, cursor: canContinue ? 'pointer' : 'not-allowed', }}>
              {t('Continue', 'Continuar')} →
            </button>
          )}
        </div>

      </div>
      {/* Responsive: la rejilla y la cabecera se apilan en pantallas cortas */}
      <style>{`
        @media (max-width: 1000px) {
          .wfs-flow-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .wfs-flow-header { grid-template-columns: 1fr !important; }
          .wfs-flow-header p { justify-self: start !important; text-align: left !important; }
          .wfs-flow-specs { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 620px) {
          .wfs-flow-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

Object.assign(window, { QuoteFlow });
