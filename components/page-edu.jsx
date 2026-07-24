/* Fence Education Hub pages: Articles, FAQ, Materials Comparison, Pool Code */

/* ───── Articles & Guides ───── */

const ArticlesHero = () => {
  const t = useT();
  return (
  <PageHero
    eyebrow={t('Articles & Guides', 'Artículos y guías')}
    title={t('Plain-English writeups', 'Explicaciones en lenguaje claro')}
    accent={t('on picking the right fence.', 'para elegir la cerca correcta.')}
    subtitle={t('Written by the people who fabricate this stuff every day, sized to read in under 10 minutes.', 'Escritas por las personas que fabrican esto todos los días, pensadas para leerse en menos de 10 minutos.')}
    image={FENCE_IMG.aluminum}
  />
  );
};

const ALL_ARTICLES = [
  { tag: 'Materials', title: { EN: 'Top 4 Durable Fence Materials for SW Florida', ES: 'Los 4 mejores materiales de cerca duraderos para el suroeste de Florida' }, read: '6 min', img: 'aluminum' }, { tag: 'How-to', title: { EN: 'How to Measure for Fence Material in Florida', ES: 'Cómo medir el material de cerca en Florida' }, read: '4 min', img: 'gate-sliding' }, { tag: 'Pricing', title: { EN: 'How Much Does a Fence Cost in Florida in 2026?', ES: '¿Cuánto cuesta una cerca en Florida en 2026?' }, read: '8 min', img: 'vinyl' }, { tag: 'Code', title: { EN: 'Florida Pool Code: Enclosure Requirements Explained', ES: 'Código de piscinas de Florida: requisitos de cerramiento explicados' }, read: '7 min', img: 'gate-single' }, { tag: 'Comparison', title: { EN: 'Aluminum vs Vinyl vs Chain Link, Picking a System', ES: 'Aluminio vs vinilo vs malla ciclónica: cómo elegir un sistema' }, read: '9 min', img: 'metal' }, { tag: 'HVHZ', title: { EN: 'Hurricane Zone Fencing: EC Fence vs DuraFence', ES: 'Cercas para zona de huracanes: EC Fence vs DuraFence' }, read: '5 min', img: 'ecfence' }, { tag: 'Install', title: { EN: 'When to Hire an Installer vs DIY Your Fence Project', ES: 'Cuándo contratar a un instalador o hacer tu proyecto de cerca por tu cuenta' }, read: '6 min', img: 'shop' }, { tag: 'Maintenance', title: { EN: 'Aluminum Fence Care in Salt Air: 4 Tips for Coastal FL', ES: 'Cuidado de cercas de aluminio en aire salino: 4 consejos para la costa de Florida' }, read: '4 min', img: 'gate-cantilever' }, { tag: 'Gates', title: { EN: 'Ready-to-assemble Gates vs Field-Built: What to Order', ES: 'Portones listos para ensamblar vs fabricados en obra: qué pedir' }, read: '5 min', img: 'gate-double' },
];

/* Display translations for article tags (tag string kept as-is for filter logic) */
const ARTICLE_TAG_ES = {
  'All': 'Todos', 'Materials': 'Materiales', 'How-to': 'Cómo hacerlo', 'Pricing': 'Precios', 'Code': 'Código', 'Comparison': 'Comparativa', 'HVHZ': 'HVHZ', 'Install': 'Instalación', 'Maintenance': 'Mantenimiento', 'Gates': 'Portones',
};

/* Magazine-style featured row: one large story + two stacked side cards */
const ArticlesFeatured = () => {
  const t = useT();
  const [feat, side1, side2] = [ALL_ARTICLES[0], ALL_ARTICLES[3], ALL_ARTICLES[5]];
  const Card = ({ a, big = false }) => {
    const [hover, setHover] = React.useState(false);
    return (
    <a href="#featured"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative', display: 'flex', alignItems: 'flex-end', borderRadius: 24, overflow: 'hidden', background: '#263166', textDecoration: 'none', minHeight: big ? 'clamp(380px, 56vh, 560px)' : 'clamp(180px, 26vh, 268px)', flex: 1, }}>
      <img src={FENCE_IMG[a.img]} alt="" style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transform: hover ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.6s ease', }}/>
      <div aria-hidden style={{
        position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(38, 49, 103,0.05) 30%, rgba(38, 49, 103,0.88) 100%)', }}/>
      {/* Category chip, top-left */}
      <span className="mono" style={{
        position: 'absolute', top: big ? 24 : 18, left: big ? 24 : 18, background: 'var(--tangerine)', color: 'var(--white)', padding: '5px 12px', fontSize: 13.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', }}>{t(a.tag, ARTICLE_TAG_ES[a.tag])}</span>
      <div style={{ position: 'relative', padding: big ? 'clamp(24px, 3vw, 44px)' : 22, width: '100%' }}>
        <h2 className="display" style={{
          margin: 0, color: 'var(--white)', fontSize: big ? 'clamp(20px, 2.1vw, 32px)' : 'clamp(15px, 1.2vw, 18px)', lineHeight: 1.18, letterSpacing: '-0.01em', fontWeight: 700, textTransform: 'capitalize', }}>{t(a.title)}</h2>
        <div style={{
          marginTop: 14, display: 'flex', alignItems: 'center', gap: 10, color: 'var(--alice-blue)', }}>
          <span className="mono" style={{ fontSize: 14, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
            {a.read} {t('read', 'de lectura')}
          </span>
          <span aria-hidden style={{
            display: 'inline-flex', alignItems: 'center', color: 'var(--tangerine)', transform: hover ? 'translateX(4px)' : 'translateX(0)', transition: 'transform 0.2s ease', }}><ArrowRight size={big ? 16 : 13}/></span>
        </div>
      </div>
    </a>
    );
  };
  return (
    <section style={{ background: 'var(--white)', padding: '120px 0 0' }}>
      <div className="container">
        {/* White editorial break between the navy banner and the dark cards */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 24, flexWrap: 'wrap', marginBottom: 36, }}>
          <h2 className="display" style={{
            margin: 0, fontSize: 'clamp(26px, 2.8vw, 38px)', fontWeight: 800, letterSpacing: '-0.015em', color: 'var(--ink)', }}>
            {t('Start with', 'Empieza con')}{' '}
            <span style={{ color: 'var(--tangerine)' }}>{t('these guides.', 'estas guías.')}</span>
          </h2>
          <p style={{
            margin: 0, maxWidth: 380, fontSize: 15.5, lineHeight: 1.55, color: 'var(--charcoal)', }}>
            {t('The three reads that answer most first-time fence questions.', 'Las tres lecturas que responden la mayoría de las dudas de primera vez.')}
          </p>
        </div>
        <div className="wfs-articles-hero" style={{
          display: 'grid', gridTemplateColumns: '1.7fr 1fr', gap: 18, alignItems: 'stretch', }}>
          <Card a={feat} big />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <Card a={side1} />
            <Card a={side2} />
          </div>
        </div>
      </div>
    </section>
  );
};

/* Grid card: image + title + light meta, animated arrow on hover */
const ArticleCard = ({ p }) => {
  const t = useT();
  const [hover, setHover] = React.useState(false);
  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', flexDirection: 'column', cursor: 'pointer', borderRadius: 20, overflow: 'hidden', background: 'var(--white)', border: '1px solid rgba(0,16,17,0.08)', transform: hover ? 'translateY(-5px)' : 'none', boxShadow: hover ? '0 24px 46px -22px rgba(38, 49, 103,0.4)' : 'none', transition: 'transform 0.2s ease, box-shadow 0.2s ease', }}>
      <div style={{ position: 'relative', aspectRatio: '16 / 10', overflow: 'hidden', background: '#263166' }}>
        <img src={FENCE_IMG[p.img]} alt=""
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transform: hover ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.5s ease', }}/>
        {/* Category chip on the image */}
        <span className="mono" style={{
          position: 'absolute', top: 14, left: 14, background: 'rgba(255,255,255,0.92)', color: 'var(--ink)', padding: '5px 11px', fontSize: 13.5, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', backdropFilter: 'blur(4px)', }}>{t(p.tag, ARTICLE_TAG_ES[p.tag])}</span>
      </div>
      <div style={{ padding: '18px 20px 20px', flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <h3 style={{
          margin: 0, fontSize: 17.5, fontWeight: 700, lineHeight: 1.35, color: 'var(--ink)', letterSpacing: '-0.005em', textTransform: 'capitalize', }}>{t(p.title)}</h3>
        <div style={{
          marginTop: 'auto', paddingTop: 14, borderTop: '1px solid rgba(0,16,17,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}>
          <span className="mono" style={{
            fontSize: 13.5, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--charcoal)', }}>{p.read} {t('read', 'de lectura')}</span>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14.5, fontWeight: 600, color: 'var(--laser-blue)', }}>
            {t('Read', 'Leer')}
            <span aria-hidden style={{ display: 'inline-flex', transform: hover ? 'translateX(4px)' : 'translateX(0)', transition: 'transform 0.2s ease' }}>
              <ArrowRight size={12}/>
            </span>
          </span>
        </div>
      </div>
    </article>
  );
};

/* Featured posts: filter chips + rounded magazine cards */
const ArticlesGrid = () => {
  const t = useT();
  const [filter, setFilter] = React.useState('All');
  const tags = ['All', ...Array.from(new Set(ALL_ARTICLES.map(a => a.tag)))];
  const visible = filter === 'All' ? ALL_ARTICLES : ALL_ARTICLES.filter(a => a.tag === filter);

  return (
    <section id="featured" style={{ background: 'var(--white)', padding: '120px 0' }}>
      <div className="container">
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 24, flexWrap: 'wrap', marginBottom: 28, }}>
          <h2 className="display" style={{
            margin: 0, fontSize: 'clamp(26px, 2.8vw, 38px)', fontWeight: 800, letterSpacing: '-0.015em', color: 'var(--ink)', }}>{t('Featured Posts', 'Artículos destacados')}</h2>
          <span className="mono" style={{
            fontSize: 13.5, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--charcoal)', }}>{visible.length} {t('articles', 'artículos')}</span>
        </div>

        {/* Filter chips */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 36 }}>
          {tags.map(tag => {
            const active = tag === filter;
            return (
              <button key={tag} onClick={() => setFilter(tag)}
                style={{
                  padding: '8px 16px', borderRadius: 999, fontSize: 14.5, fontWeight: 600, fontFamily: 'var(--sans)', border: '1px solid ' + (active ? 'var(--ink)' : 'rgba(0,16,17,0.18)'), background: active ? 'var(--ink)' : 'var(--white)', color: active ? 'var(--white)' : 'var(--ink)', cursor: 'pointer', transition: 'all 0.15s ease', }}>{t(tag, ARTICLE_TAG_ES[tag])}</button>
            );
          })}
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
          {visible.map((p, i) => <ArticleCard key={p.title.EN} p={p} />)}
        </div>
      </div>
    </section>
  );
};



/* ───── FAQ ───── */

const FaqHero = () => {
  const t = useT();
  return (
  <PageHero
    eyebrow={t('Frequently asked', 'Preguntas frecuentes')}
    title={t('The questions we', 'Las preguntas que')}
    accent={t('get every week.', 'recibimos cada semana.')}
    subtitle={t("Lead times, pricing, install policy, delivery, pickup, answered here, with phone numbers if you'd rather just call.", 'Tiempos de entrega, precios, política de instalación, envío, recogida, respondidos aquí, con números de teléfono si prefieres simplemente llamar.')}
    image={FENCE_IMG.metal}
  />
  );
};

const FaqCTA = () => {
  const t = useT();
  return (
  <CTABand
    kicker={t("Didn't find your question?", '¿No encontraste tu pregunta?')}
    title={t('Call (239) 689-5496', 'Llama al (239) 689-5496')}
    accent={t('or send the project.', 'o envía el proyecto.')}
    body={t('Our sales representatives split calls Monday through Friday during business hours.', 'Nuestros representantes de ventas atienden las llamadas de lunes a viernes en horario de oficina.')}
    primary={[t('Request a quote', 'Solicitar una cotización'), 'estimate.html']}
    secondary={[t('Call the yard', 'Llama al almacén'), 'tel:2396895496']}
  />
  );
};

/* ───── Materials Comparison ───── */

const MaterialsCompHero = () => {
  const t = useT();
  return (
  <PageHero
    eyebrow={t('Materials Comparison', 'Comparativa de materiales')}
    title={t('Side by side,', 'Lado a lado,')}
    accent={t('no marketing fluff.', 'sin palabrería de marketing.')}
    subtitle={t('Aluminum vs vinyl vs chain link vs metal vs EC Fence, picked apart by spec, lead time and starting price.', 'Aluminio vs vinilo vs malla ciclónica vs metal vs EC Fence, analizados por especificación, tiempo de entrega y precio inicial.')}
    image={FENCE_IMG.vinyl}
  />
  );
};

const MaterialsCompDeepDive = () => {
  const t = useT();
  const profiles = [
    {
      slug: 'vinyl', name: t('Vinyl / PVC', 'Vinilo / PVC'), href: 'vinyl.html', tag: t('Catalyst-extruded PVC', 'PVC extruido por Catalyst'), bestFor: t('Backyard privacy, residential subdivisions', 'Privacidad de patio, urbanizaciones residenciales'), strength: t('Low-upkeep privacy, no painting, made for Florida sun', 'Privacidad de bajo mantenimiento: sin pintura, hecha para el sol de Florida'), caveat: t('Wind performance varies by profile, ask for specs for your area', 'El desempeño ante viento varía según el perfil: pide especificaciones para tu zona'), }, {
      slug: 'aluminum', name: t('Aluminum', 'Aluminio'), href: 'aluminum.html', tag: t('Powder-coat · 6063-T6', 'Recubrimiento en polvo · 6063-T6'), bestFor: t('Pool enclosures, ornamental perimeters', 'Cerramientos de piscina, perímetros ornamentales'), strength: t('Pool-code compliant options, clean ornamental look', 'Opciones que cumplen código de piscinas, aspecto ornamental limpio'), caveat: t('Open picket, limited privacy by design', 'Picket abierto, privacidad limitada por diseño'), }, {
      slug: 'chain-link', name: t('Chain Link', 'Malla ciclónica'), href: 'chain-link.html', tag: t('Galvanized + Vinyl-coated', 'Galvanizada + recubierta de vinilo'), bestFor: t('Security, sports fields, industrial perimeters', 'Seguridad, campos deportivos, perímetros industriales'), strength: t('Budget-friendly, parts sold individually, strong stock availability', 'Económica, piezas vendidas por separado, buena disponibilidad en stock'), caveat: t('Industrial look, not for ornamental front yards', 'Aspecto industrial, no apto para jardines delanteros ornamentales'), }, {
      slug: 'metal', name: 'Metal / DuraFence', href: 'metal.html', tag: t('Aluminum board privacy', 'Privacidad de tablas de aluminio'), bestFor: t('Modern privacy, residential and commercial', 'Privacidad moderna, residencial y comercial'), strength: t("Full privacy board look in Modern, Original, and P1 styles, 6' and 8'", "Aspecto de tablas de privacidad total en estilos Modern, Original y P1, 6' y 8'"), caveat: t('Lead time varies by color and quantity', 'El tiempo de entrega varía según color y cantidad'), }, {
      slug: 'ecfence', name: 'EC Fence', href: 'ecfence.html', tag: t('Self-mating galvanized steel', 'Acero galvanizado autoensamblable'), bestFor: t('Coastal properties, commercial perimeters, modern residential', 'Propiedades costeras, perímetros comerciales, residencial moderno'), strength: t('Galvanized steel privacy panels built for salt air', 'Paneles de privacidad de acero galvanizado hechos para el aire salino'), caveat: t('Quote-based pricing, call for run-specific cost', 'Precio basado en cotización, llama para el costo específico del tramo'), }, ];

  return (
    <section style={{ background: 'var(--white)', padding: '120px 0' }}>
      <div className="container">
        <PageSectionHeader
          number="02" label={t('Profile by profile', 'Perfil por perfil')}
          title={t('One paragraph', 'Un párrafo')}
          accent={t('per material.', 'por material.')}
          sub={t("If you've got 30 seconds, this is the page.", 'Si tienes 30 segundos, esta es la página.')}
        />
        <div style={{ display: 'grid', gap: 16 }}>
          {profiles.map((p, i) => (
            <a key={p.slug} className="wfs-matrow" href={p.href} style={{
              display: 'grid', gridTemplateColumns: '96px 150px 1fr 1.4fr 1.4fr auto', gap: 24, alignItems: 'center', padding: '20px 26px', background: i % 2 === 0 ? 'var(--white)' : '#ffffff', border: '1px solid rgba(0,16,17,0.12)', color: 'var(--ink)', }}>
              <div className="wfs-matrow__thumb" style={{ width: 96, height: 78, overflow: 'hidden', background: '#eef2f7' }}>
                <img src={FENCE_IMG[p.slug === 'chain-link' ? 'chainlink' : p.slug]} alt={p.name} loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div>
                <div className="display" style={{ fontSize: 23.5, lineHeight: 1.05 }}>{p.name}</div>
                <div className="mono" style={{
                  marginTop: 8, fontSize: 13.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--tangerine)', fontWeight: 700, }}>{p.tag}</div>
              </div>
              <div>
                <div className="mono" style={{ fontSize: 13.5, letterSpacing: '0.18em', color: 'var(--charcoal)', textTransform: 'uppercase', marginBottom: 6 }}>{t('Best for', 'Ideal para')}</div>
                <div style={{ fontSize: 15, lineHeight: 1.5 }}>{p.bestFor}</div>
              </div>
              <div>
                <div className="mono" style={{ fontSize: 13.5, letterSpacing: '0.18em', color: 'var(--charcoal)', textTransform: 'uppercase', marginBottom: 6 }}>{t('Strength', 'Punto fuerte')}</div>
                <div style={{ fontSize: 15, lineHeight: 1.5 }}>{p.strength}</div>
              </div>
              <div>
                <div className="mono" style={{ fontSize: 13.5, letterSpacing: '0.18em', color: 'var(--charcoal)', textTransform: 'uppercase', marginBottom: 6 }}>{t('Caveat', 'Salvedad')}</div>
                <div style={{ fontSize: 15, lineHeight: 1.5 }}>{p.caveat}</div>
              </div>
              <span style={{
                width: 38, height: 38, flexShrink: 0, border: '1px solid var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square"/>
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const MaterialsCompCTA = () => {
  const t = useT();
  return (
  <CTABand
    kicker={t('Pick one. Get a quote.', 'Elige uno. Pide una cotización.')}
    title={t('Send your dimensions', 'Envía tus dimensiones')}
    accent={t("we'll come back in 24h.", 'te respondemos en 24h.')}
    body={t("Don't have a material picked? Tell us the use case and your rep will recommend one based on stock and lead time.", '¿No has elegido un material? Cuéntanos el caso de uso y tu representante te recomendará uno según el inventario y el tiempo de entrega.')}
    primary={[t('Request a quote', 'Solicitar una cotización'), 'estimate.html']}
    secondary={[t('Call (239) 689-5496', 'Llama al (239) 689-5496'), 'tel:2396895496']}
  />
  );
};

/* ───── Florida Pool Code ───── */

const PoolCodeHero = () => {
  const t = useT();
  return (
  <PageHero
    eyebrow={t('Florida Pool Code', 'Código de piscinas de Florida')}
    title={t('Florida pool barriers,', 'Barreras de piscina de Florida,')}
    accent={t('explained.', 'explicadas.')}
    subtitle={t('A general overview of common Florida residential pool barrier requirements. Western Fence Supply provides fencing materials only.', 'Un resumen general de los requisitos comunes de barreras de piscina residenciales en Florida. Western Fence Supply provee únicamente materiales de cercado.')}
    image={FENCE_IMG.aluminum}
  />
  );
};

const PoolCodeRequirements = () => {
  const t = useT();
  const reqs = [
    { code: t('Requirement 01', 'Requisito 01'), title: t('Minimum height', 'Altura mínima'), img: 'assets/poolcode/01-min-height.png?v=238', body: t('The barrier must be at least 48" high, measured on the side facing away from the pool. Additional requirements may apply depending on the project and installation.', 'La barrera debe tener al menos 48" de altura, medida en el lado opuesto a la piscina. Pueden aplicar requisitos adicionales según el proyecto y la instalación.') }, { code: t('Requirement 02', 'Requisito 02'), title: t('Openings & picket spacing', 'Aberturas y separación entre pickets'), img: 'assets/poolcode/02-openings.png?v=238', body: t('Openings generally must not allow a 4" sphere to pass through. Additional spacing restrictions may apply depending on the barrier design.', 'En general, las aberturas no deben permitir el paso de una esfera de 4". Pueden aplicar restricciones de separación adicionales según el diseño de la barrera.') }, { code: t('Requirement 03', 'Requisito 03'), title: t('Self-closing & self-latching gates', 'Portones con cierre y cerrojo automáticos'), img: 'assets/poolcode/03-self-closing.png?v=238', body: t('Pool access gates must be self-closing and self-latching. Gate hardware and latch placement must meet applicable requirements.', 'Los portones de acceso a la piscina deben tener cierre automático y cerrojo automático. Los herrajes del portón y la ubicación del pestillo deben cumplir los requisitos aplicables.') }, { code: t('Requirement 04', 'Requisito 04'), title: t('Gate swing direction', 'Dirección de apertura del portón'), img: 'assets/poolcode/04-swing.png?v=238', body: t('Pedestrian access gates must open outward, away from the pool.', 'Los portones de acceso peatonal deben abrir hacia afuera, alejándose de la piscina.') }, { code: t('Requirement 05', 'Requisito 05'), title: t('Latch release location', 'Ubicación de la liberación del pestillo'), img: 'assets/poolcode/05-latch.png?v=238', body: t('Latch placement depends on the gate configuration and must meet applicable requirements.', 'La ubicación del pestillo depende de la configuración del portón y debe cumplir los requisitos aplicables.') }, { code: t('Requirement 06', 'Requisito 06'), title: t('Dwelling wall as part of the barrier', 'Muro de la vivienda como parte de la barrera'), img: 'assets/poolcode/06-dwelling.png?v=238', body: t('Doors and windows providing direct access to the pool area may require approved safety features under applicable local requirements.', 'Las puertas y ventanas con acceso directo al área de la piscina pueden requerir dispositivos de seguridad aprobados según los requisitos locales aplicables.') }, ];

  return (
    <section style={{ background: 'var(--white)', padding: '120px 0' }}>
      <div className="container">
        <PageSectionHeader
          number="01" label={t('The actual rules', 'Las reglas reales')}
          title={t('What the pool code', 'Lo que el código de piscinas')}
          accent={t('generally covers.', 'cubre en general.')}
          sub={t('General information only. Requirements may vary by project and jurisdiction. Western Fence Supply does not verify code compliance, plans, permits, installation, inspections, or final approval.', 'Información general únicamente. Los requisitos pueden variar según el proyecto y la jurisdicción. Western Fence Supply no verifica cumplimiento de código, planos, permisos, instalación, inspecciones ni aprobación final.')}
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {reqs.map((r, i) => (
            <article key={i} style={{
              background: 'var(--white)', padding: 30, border: '1px solid rgba(0,16,17,0.1)', borderRadius: 16, display: 'flex', flexDirection: 'column', }}>
              <div className="mono" style={{
                fontSize: 13, letterSpacing: '0.22em', color: 'var(--tangerine)', fontWeight: 700, textTransform: 'uppercase', marginBottom: 10, }}>{r.code}</div>
              <h3 className="display" style={{ fontSize: 23, lineHeight: 1.12, margin: '0 0 20px', color: 'var(--ink)' }}>{r.title}</h3>
              {/* Diagram (annotations baked in), contained on white */}
              <div style={{
                aspectRatio: '3 / 2', width: '100%', marginBottom: 20, background: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                <img src={r.img} alt={r.title} loading="lazy"
                  style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block' }}/>
              </div>
              <p style={{ margin: '0', fontSize: 15, lineHeight: 1.6, color: 'var(--charcoal)' }}>{r.body}</p>
            </article>
          ))}
        </div>
        <p style={{ marginTop: 16, fontSize: 14, lineHeight: 1.6, color: 'var(--charcoal)' }}>
          {t('Based on general Florida residential pool barrier requirements. Code editions, local amendments, interpretations, and project requirements may change.', 'Basado en requisitos generales de barreras de piscina residenciales de Florida. Las ediciones del código, las enmiendas locales, las interpretaciones y los requisitos del proyecto pueden cambiar.')}
        </p>
      </div>
    </section>
  );
};

const PoolCodeProfiles = () => {
  const t = useT();
  const profiles = [
    { slug: 'aluminum', name: t('Aluminum', 'Aluminio'), tag: t('Pool-barrier configurations available', 'Configuraciones para barrera de piscina disponibles'), href: 'aluminum.html', img: 'aluminum' }, { slug: 'vinyl', name: t('Vinyl', 'Vinilo'), tag: t('Pool-barrier configurations available', 'Configuraciones para barrera de piscina disponibles'), href: 'vinyl.html', img: 'vinyl' }, { slug: 'ecfence', name: 'EC Fence', tag: t('Suitability depends on the selected configuration', 'La idoneidad depende de la configuración seleccionada'), href: 'ecfence.html',img: 'ecfence' }, ];

  return (
    <section style={{ background: 'var(--parchment)', padding: '120px 0' }}>
      <div className="container">
        <PageSectionHeader
          number="02" label={t('Profiles we stock', 'Perfiles que tenemos en inventario')}
          title={t('Three systems', 'Tres sistemas')}
          accent={t('commonly used for pool barriers.', 'de uso común en barreras de piscina.')}
          sub={t('These materials are commonly used for pool barrier projects. Suitability depends on the specific product configuration, installation, and local requirements.', 'Estos materiales se usan comúnmente en proyectos de barreras de piscina. La idoneidad depende de la configuración específica del producto, la instalación y los requisitos locales.')}
          link={[t('Materials comparison', 'Comparativa de materiales'), 'materials-comparison.html']}
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {profiles.map((p, i) => (
            <a key={p.slug} href={p.href} style={{
              display: 'block', textDecoration: 'none', color: 'var(--ink)', background: 'var(--white)', border: '1px solid rgba(0,16,17,0.12)', }}>
              <div style={{ position: 'relative', aspectRatio: '4 / 3', overflow: 'hidden', background: '#263166' }}>
                <img src={FENCE_IMG[p.img]} alt=""
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}/>
                <span className="mono" style={{
                  position: 'absolute', top: 14, left: 14, background: 'var(--tangerine)', color: 'var(--ink)', padding: '5px 10px', fontSize: 13.5, letterSpacing: '0.18em', fontWeight: 700, textTransform: 'uppercase', }}>0{i+1} · {t('Pool', 'Piscina')}</span>
              </div>
              <div style={{ padding: 24 }}>
                <h3 className="display" style={{ margin: '0 0 8px', fontSize: 23.5, lineHeight: 1.1 }}>{p.name}</h3>
                <div className="mono" style={{ fontSize: 13.5, letterSpacing: '0.18em', color: 'var(--charcoal)', textTransform: 'uppercase' }}>{p.tag}</div>
                <div style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 8, fontSize: 14.5, fontWeight: 600, fontFamily: 'var(--mono)', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink)' }}>
                  {t('Explore', 'Explorar')}
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square"/></svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const PoolCodeChecklist = () => {
  const t = useT();
  return (
  <section className="wfs-brand-texture" style={{ backgroundColor: 'var(--ink)', color: 'var(--parchment)', padding: '120px 0' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 56, alignItems: 'start' }}>
        <div>
          <h2 className="display" style={{
            margin: 0, fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: 1, letterSpacing: '-0.02em', }}>
            {t('Before you', 'Antes de')}<br/>
            <span style={{ color: 'var(--tangerine)' }}>{t('file the permit.', 'presentar el permiso.')}</span>
          </h2>
          <p style={{ marginTop: 18, fontSize: 16, lineHeight: 1.6, color: 'var(--alice-blue)', maxWidth: 360 }}>
            {t('Use this checklist as general planning guidance. Western Fence Supply provides materials only and does not review plans, determine code compliance, prepare permits, perform installation, or manage inspections.', 'Usa esta lista como guía general de planeación. Western Fence Supply provee únicamente materiales y no revisa planos, determina cumplimiento de código, prepara permisos, realiza instalación ni gestiona inspecciones.')}
          </p>
        </div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 14 }}>
          {[
            t('Barrier height is at least 48" on the outside', 'La altura de la barrera es de al menos 48" en el lado exterior'), t('Bottom clearance meets applicable requirements', 'El espacio libre inferior cumple los requisitos aplicables'), t('Openings and spacing suit the selected design', 'Las aberturas y la separación corresponden al diseño seleccionado'), t('Horizontal members are positioned to limit climbability', 'Los elementos horizontales están posicionados para limitar la posibilidad de trepar'), t('Gates open outward, away from the pool', 'Los portones abren hacia afuera, alejándose de la piscina'), t('Gates are self-closing and self-latching', 'Los portones tienen cierre automático y cerrojo automático'), t('Latch placement meets applicable requirements', 'La ubicación del pestillo cumple los requisitos aplicables'), t('Nearby objects do not create climbing access', 'Los objetos cercanos no crean acceso para trepar'), t('Direct access from the home uses an approved safety method', 'El acceso directo desde la casa usa un método de seguridad aprobado'), t('Project requirements are confirmed before installation', 'Los requisitos del proyecto se confirman antes de la instalación'), ].map((line, i) => (
            <li key={i} style={{
              display: 'flex', alignItems: 'flex-start', gap: 14, fontSize: 16, lineHeight: 1.55, }}>
              <span aria-hidden style={{
                flexShrink: 0, marginTop: 3, width: 22, height: 22, borderRadius: 4, background: 'var(--tangerine)', color: 'var(--ink)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', }}>
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                  <path d="M3.5 8.5l3 3 6-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
  );
};

const PoolCodeCTA = () => {
  const t = useT();
  return (
  <>
  <CTABand
    kicker={t('Planning a pool fence?', '¿Planeas una cerca de piscina?')}
    title={t('Quote your', 'Cotiza tu')}
    accent={t('pool enclosure.', 'cerramiento de piscina.')}
    body={t('Send us your layout, measurements, and project details, and we will prepare a material quote based on the information provided. Western Fence Supply supplies materials only. Installation, code compliance, permitting, inspections, and final approval are not included.', 'Envíanos tu distribución, medidas y detalles del proyecto, y prepararemos una cotización de materiales con base en la información proporcionada. Western Fence Supply provee únicamente materiales. La instalación, el cumplimiento de código, los permisos, las inspecciones y la aprobación final no están incluidos.')}
    primary={[t('Request a quote', 'Solicitar una cotización'), 'estimate.html#contact']}
    secondary={[t('Call the yard', 'Llama al almacén'), 'tel:2396895496']}
  />
  <section style={{ background: '#ffffff', borderTop: '1px solid rgba(0,16,17,0.08)', padding: '26px 0' }}>
    <div className="container">
      <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.65, color: 'var(--charcoal)', maxWidth: 860 }}>
        {t('Western Fence Supply is a material supplier only. WFS does not provide installation, engineering, code review, permit services, inspections, or compliance certification.', 'Western Fence Supply es únicamente un proveedor de materiales. WFS no ofrece instalación, ingeniería, revisión de código, servicios de permisos, inspecciones ni certificación de cumplimiento.')}
      </p>
    </div>
  </section>
  </>
  );
};

Object.assign(window, {
  ArticlesHero, ArticlesFeatured, ArticlesGrid, FaqHero, FaqCTA, MaterialsCompHero, MaterialsCompDeepDive, MaterialsCompCTA, PoolCodeHero, PoolCodeRequirements, PoolCodeProfiles, PoolCodeChecklist, PoolCodeCTA,
});


/* ───── FAQ page: topic-organized, first-quote experience ─────
   Different from the homepage FAQ strip: grouped by topic with a sticky
   topic nav, and focused on the questions people actually ask the first
   time they quote fence material. */

const FAQ_TOPICS = [
  {
    id: 'quoting', title: { EN: 'Quoting & Pricing', ES: 'Cotización y precios' }, items: [
      [{ EN: 'What exactly do I need to send to get a quote?', ES: '¿Qué necesito enviar exactamente para cotizar?' }, { EN: "Linear feet per side, fence height, color, style, gate count and sizes, and the project ZIP. A survey or hand-drawn sketch speeds everything up, and photos of the site help. You don't need to count posts or rails, we do the material takeoff for you.", ES: 'Pies lineales por lado, altura de la cerca, color, estilo, cantidad y medidas de portones, y el código postal del proyecto. Un plano o boceto a mano acelera todo, y las fotos del sitio ayudan. No necesitas contar postes ni rieles: nosotros hacemos el despiece del material por ti.' }], [{ EN: 'How fast do I actually get the quote?', ES: '¿Qué tan rápido recibo la cotización realmente?' }, { EN: 'Within 24 hours on business days, one email with stock, pricing, and lead time, from the rep who will follow your order to pickup or delivery.', ES: 'Dentro de 24 horas en días hábiles: un solo correo con existencias, precios y tiempos de entrega, del asesor que dará seguimiento a tu pedido hasta el retiro o la entrega.' }], [{ EN: "Why aren't prices listed on the website?", ES: '¿Por qué no hay precios publicados en el sitio?' }, { EN: "Material pricing fluctuates frequently. We quote current numbers on every request so you're never working from a stale price.", ES: 'Los precios del material fluctúan con frecuencia. Cotizamos números actuales en cada solicitud para que nunca trabajes con un precio desactualizado.' }], [{ EN: "I've never bought fence material before, will someone walk me through it?", ES: 'Nunca he comprado material de cerca, ¿alguien me guía en el proceso?' }, { EN: 'Yes. A real sales rep, no chatbot, takes your project from the first call, helps you pick material and style, and follows the order through pickup or delivery.', ES: 'Sí. Un asesor de ventas real, sin chatbot, toma tu proyecto desde la primera llamada, te ayuda a elegir material y estilo, y da seguimiento al pedido hasta el retiro o la entrega.' }], [{ EN: 'How long is my quote good for?', ES: '¿Por cuánto tiempo es válida mi cotización?' }, { EN: 'Because pricing moves with the market, your rep confirms the validity window on the quote itself. If it expires, one call refreshes it with current numbers.', ES: 'Como los precios se mueven con el mercado, tu asesor confirma la vigencia en la propia cotización. Si vence, una llamada la actualiza con números actuales.' }], ], }, {
    id: 'stock', title: { EN: 'Materials & Stock', ES: 'Materiales y existencias' }, items: [
      [{ EN: "What's actually in stock?", ES: '¿Qué hay realmente en existencia?' }, { EN: 'Stocked items are ready right away, buy it and take it the same day. Custom or non-stock orders run anywhere from 1-2 days to 6-8 weeks depending on the item; we tell you which is which on the quote.', ES: 'Lo que está en stock está listo de inmediato: lo compras y te lo llevas el mismo día. Los pedidos a medida o fuera de stock tardan de 1-2 días a 6-8 semanas según el artículo; te decimos cuál es cuál en la cotización.' }], [{ EN: 'Can I buy individual parts instead of whole kits?', ES: '¿Puedo comprar piezas sueltas en vez de kits completos?' }, { EN: 'Yes, every material can be bought by the part, not just as a kit. Chain link goes piece by piece (mesh, top rail, posts, bands, caps, screws). Vinyl / PVC by pickets, rails and U-channels. Aluminum comes in panels, but you can still buy posts or caps on their own. It makes repairs and add-ons much easier for homeowners and contractors.', ES: 'Sí: todos los materiales se pueden comprar por partes, no solo como kit. La malla ciclónica va pieza por pieza (malla, riel superior, postes, bandas, tapas, tornillos). El vinilo / PVC por pickets, rieles y canales en U. El aluminio viene en paneles, pero igual puedes comprar postes o tapas por separado. Facilita mucho las reparaciones y ampliaciones a propietarios y contratistas.' }], [{ EN: 'Which material should I choose for my project?', ES: '¿Qué material debería elegir para mi proyecto?' }, { EN: "Depends on what the fence needs to do: privacy, pool code, security, wind exposure, budget. Check the materials comparison in the Education Hub, or tell your rep the job and they'll point you to the right system.", ES: 'Depende de lo que la cerca deba hacer: privacidad, código de piscinas, seguridad, viento, presupuesto. Revisa la comparativa de materiales del Centro Educativo, o cuéntale el proyecto a tu asesor y te orientará al sistema correcto.' }], [{ EN: 'What colors can I get?', ES: '¿Qué colores puedo conseguir?' }, { EN: 'Chain link comes in black, green, and galvanized. Metal / DuraFence in bronze, white, black, and woodgrain. Vinyl / PVC in white, sand, and gray. Aluminum in bronze, white, and black.', ES: 'La malla ciclónica viene en negro, verde y galvanizado. El Metal / DuraFence en bronce, blanco, negro e imitación madera (woodgrain). El vinilo / PVC en blanco, arena (sand) y gris. El aluminio en bronce, blanco y negro.' }], ], }, {
    id: 'pickup', title: { EN: 'Pickup & Delivery', ES: 'Retiro y entrega' }, items: [
      [{ EN: 'Where do I pick up my order?', ES: '¿Dónde recojo mi pedido?' }, { EN: "Whichever yard is more convenient for you, Fort Myers (2621 Fowler St) or Port Charlotte (1145 Enterprise Dr). About 90% of the time both yards carry the same stock, so it's your call. Contact us first and we'll confirm before you head out.", ES: 'En la sucursal que te quede más cómoda: Fort Myers (2621 Fowler St) o Port Charlotte (1145 Enterprise Dr). El 90% del tiempo ambas sucursales tienen el mismo stock, así que tú decides. Contáctanos primero y te confirmamos antes de que salgas.' }], [{ EN: 'Can my order be ready when I arrive?', ES: '¿Puede estar listo mi pedido cuando llegue?' }, { EN: 'Yes, call ahead and standard qualifying orders are pulled and staged the same day, waiting at the bay. Hours: Mon-Fri 7:30am-3:30pm. Saturday: Fort Myers 7am-12pm, Port Charlotte 7-11:30am.', ES: 'Sí: avisa con anticipación y los pedidos estándar que califiquen se preparan el mismo día y te esperan en la bahía. Horario: lun-vie 7:30am-3:30pm. Sábado: Fort Myers 7am-12pm, Port Charlotte 7-11:30am.' }], [{ EN: 'Do you deliver, and what does it cost?', ES: '¿Hacen entregas y cuánto cuestan?' }, { EN: "We deliver throughout Florida on our own trucks. Fees vary by location and order size, both get confirmed with your quote. We don't deliver outside Florida at this time.", ES: 'Entregamos en toda Florida con nuestros propios camiones. El costo varía según la ubicación y el tamaño del pedido: ambos se confirman con tu cotización. Por ahora no entregamos fuera de Florida.' }], ], }, {
    id: 'gates', title: { EN: 'Gates & Fabrication', ES: 'Portones y fabricación' }, items: [
      [{ EN: 'Can you build a gate to my exact opening?', ES: '¿Pueden fabricar un portón a la medida exacta de mi abertura?' }, { EN: 'Yes, gates are fabricated in-house at the Fort Myers yard, from standard swing gates to specialty gates (sliding, cantilever, and rolling). Metal gates can be ready in as little as 3-4 business days.', ES: 'Sí: los portones se fabrican en planta en la sucursal de Fort Myers, desde batientes estándar hasta portones especiales (corredizos, cantilever y rodantes). Los de metal pueden estar en tan solo 3-4 días hábiles.' }], [{ EN: 'How wide can a specialty gate be?', ES: '¿Qué tan ancho puede ser una puerta especial?' }, { EN: "Specialty gates, sliding, cantilever, and rolling, top out at 30' total width, counting the counterweight section on cantilevers.", ES: "Las puertas especiales, corredizas, cantilever y rodantes, llegan máximo a 30' de ancho total, contando la sección de contrapeso en las cantilever." }], [{ EN: 'Do you do automatic / powered gates?', ES: '¿Hacen portones automáticos / mecánicos?' }, { EN: "We don't automate gates ourselves. The most we do is weld on a mounting plate so you or your automation company can install an operator, sourcing and setting up the automation is on you.", ES: 'Nosotros no automatizamos portones. Lo máximo que hacemos es soldar un plato de montaje para que tú o tu empresa de automatización instalen un operador; conseguir y configurar la automatización corre por tu cuenta.' }], [{ EN: 'What hardware comes with my gate?', ES: '¿Qué herrajes vienen con mi portón?' }, { EN: "Matched to the gate type: hinges and latches for swing gates; track hardware for sliding; cantilever rollers and receivers for cantilever; rolling gate kit with LOCK N' LATCH for rolling. Rolling and cantilever gates use no hinges.", ES: "Según el tipo de portón: bisagras y cerrojos para batientes; herrajes de riel para corredizos; rodillos y receptores para cantilever; kit de portón rodante con LOCK N' LATCH para rodantes. Los rodantes y cantilever no llevan bisagras." }], ], }, {
    id: 'install', title: { EN: 'Installation, Permits & Warranty', ES: 'Instalación, permisos y garantía' }, items: [
      [{ EN: 'Do you install fences?', ES: '¿Instalan cercas?' }, { EN: 'No, we are a supply company only. We can recommend trusted local installers who use our materials every week.', ES: 'No: somos solamente una empresa de suministro. Podemos recomendarte instaladores locales de confianza que usan nuestros materiales cada semana.' }], [{ EN: 'Do you come out to measure my property?', ES: '¿Vienen a medir mi propiedad?' }, { EN: 'No. Send a survey or a hand-drawn layout with measurements per side, plus height, color, and style. That is everything we need to quote accurately.', ES: 'No. Envía un plano o un boceto a mano con medidas por lado, más altura, color y estilo: eso es todo lo que necesitamos para cotizar con precisión.' }], [{ EN: 'Who handles the permit or HOA approval?', ES: '¿Quién gestiona el permiso o la aprobación de la HOA?' }, { EN: 'The owner or installer pulls the permit and handles HOA approval. We back you up with spec information and pool-code guidance (FBC R 4501.17) for whatever you need to submit.', ES: 'El propietario o el instalador tramita el permiso y la aprobación de la HOA. Nosotros te respaldamos con información de especificaciones y guía del código de piscinas (FBC R 4501.17) para lo que debas presentar.' }], [{ EN: 'Does the material have a warranty?', ES: '¿El material tiene garantía?' }, { EN: 'Most materials we sell carry a limited lifetime warranty from the manufacturer. Ask your rep for the exact coverage on each product in your quote.', ES: 'La mayoría de los materiales que vendemos tienen garantía limitada de por vida del fabricante. Pregunta a tu asesor la cobertura exacta de cada producto de tu cotización.' }], ], },
];

const FaqTopicGroup = ({ topic, index }) => {
  const t = useT();
  const [open, setOpen] = React.useState(index === 0 ? 0 : -1);
  return (
    <div id={`faq-${topic.id}`} style={{ scrollMarginTop: 130 }}>
      <div style={{
        display: 'flex', alignItems: 'baseline', gap: 16, paddingBottom: 14, marginBottom: 6, borderBottom: '2px solid var(--ink)', }}>
        <span className="display" aria-hidden style={{
          fontSize: 35.5, lineHeight: 1, fontWeight: 800, color: 'transparent', WebkitTextStroke: '1.3px rgba(38,49,102,0.32)', }}>0{index + 1}</span>
        <h2 className="display" style={{ margin: 0, fontSize: 'clamp(20px, 1.8vw, 26px)', lineHeight: 1.05, textTransform: 'uppercase' }}>
          {t(topic.title)}
        </h2>
      </div>
      {topic.items.map(([q, a], i) => {
        const isOpen = open === i;
        return (
          <div key={i} style={{ borderBottom: '1px solid rgba(0,16,17,0.1)' }}>
            <button onClick={() => setOpen(isOpen ? -1 : i)} style={{
              width: '100%', textAlign: 'left', padding: '20px 4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 18, cursor: 'pointer', }}>
              <span style={{ fontSize: 17.5, fontWeight: 600, color: 'var(--ink)', lineHeight: 1.35 }}>{t(q)}</span>
              <span aria-hidden style={{
                flexShrink: 0, width: 30, height: 30, borderRadius: '50%', border: `1px solid ${isOpen ? 'var(--tangerine)' : 'rgba(0,16,17,0.2)'}`, background: isOpen ? 'var(--tangerine)' : 'transparent', color: isOpen ? 'var(--white)' : 'var(--ink)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s ease, border-color 0.2s ease, color 0.2s ease', }}>
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" style={{ transform: isOpen ? 'rotate(45deg)' : 'none', transition: 'transform 0.25s ease' }}>
                  <path d="M8 2 V14 M2 8 H14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square"/>
                </svg>
              </span>
            </button>
            <div style={{
              maxHeight: isOpen ? 400 : 0, overflow: 'hidden', transition: 'max-height 0.35s ease', }}>
              <p style={{ margin: 0, padding: '0 44px 22px 4px', fontSize: 16, lineHeight: 1.65, color: 'var(--charcoal)' }}>{t(a)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const FaqTopics = () => {
  const t = useT();
  return (
    <section style={{ background: 'var(--white)', padding: '120px 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 64, alignItems: 'start' }}>
          {/* Sticky topic nav */}
          <nav className="wfs-faq-sidebar" style={{ position: 'sticky', top: 120, display: 'grid', gap: 4 }}>
            <div className="mono" style={{
              fontSize: 14, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--charcoal)', marginBottom: 12, }}>{t('Browse by topic', 'Explora por tema')}</div>
            {FAQ_TOPICS.map((tp, i) => (
              <a key={tp.id} href={`#faq-${tp.id}`} className="mono" style={{
                display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', fontSize: 14, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink)', border: '1px solid rgba(0,16,17,0.12)', }}>
                <span style={{ color: 'var(--tangerine)' }}>0{i + 1}</span>
                {t(tp.title)}
              </a>
            ))}
            <p style={{ margin: '18px 0 0', fontSize: 15, lineHeight: 1.6, color: 'var(--charcoal)' }}>
              {t("These are the questions we hear most on first-time quotes. Can't find yours?", 'Estas son las preguntas que más escuchamos en primeras cotizaciones. ¿No encuentras la tuya?')}
              {' '}<a href="estimate.html#contact" style={{ color: 'var(--ink)', borderBottom: '1px solid var(--tangerine)' }}>{t('Ask a rep', 'Pregunta a un asesor')}</a>.
            </p>
          </nav>

          {/* Topic groups */}
          <div style={{ display: 'grid', gap: 56 }}>
            {FAQ_TOPICS.map((tp, i) => (
              <FaqTopicGroup key={tp.id} topic={tp} index={i}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { FaqTopics });
