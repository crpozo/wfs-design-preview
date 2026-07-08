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
  { tag: 'Materials',   title: { EN: 'Top 4 Durable Fence Materials for SW Florida',           ES: 'Los 4 mejores materiales de cerca duraderos para el suroeste de Florida' }, read: '6 min', img: 'aluminum' },
  { tag: 'How-to',      title: { EN: 'How to Measure for Fence Material in Florida',           ES: 'Cómo medir el material de cerca en Florida' }, read: '4 min', img: 'gate-sliding' },
  { tag: 'Pricing',     title: { EN: 'How Much Does a Fence Cost in Florida in 2026?',         ES: '¿Cuánto cuesta una cerca en Florida en 2026?' }, read: '8 min', img: 'vinyl' },
  { tag: 'Code',        title: { EN: 'Florida Pool Code: Enclosure Requirements Explained',    ES: 'Código de piscinas de Florida: requisitos de cerramiento explicados' }, read: '7 min', img: 'gate-single' },
  { tag: 'Comparison',  title: { EN: 'Aluminum vs Vinyl vs Chain Link, Picking a System',     ES: 'Aluminio vs vinilo vs malla ciclónica: cómo elegir un sistema' }, read: '9 min', img: 'metal' },
  { tag: 'HVHZ',        title: { EN: 'Hurricane Zone Fencing: EC Fence vs DuraFence',          ES: 'Cercas para zona de huracanes: EC Fence vs DuraFence' }, read: '5 min', img: 'ecfence' },
  { tag: 'Install',     title: { EN: 'When to Hire an Installer vs DIY Your Fence Project',   ES: 'Cuándo contratar a un instalador o hacer tu proyecto de cerca por tu cuenta' }, read: '6 min', img: 'shop' },
  { tag: 'Maintenance', title: { EN: 'Aluminum Fence Care in Salt Air: 4 Tips for Coastal FL', ES: 'Cuidado de cercas de aluminio en aire salino: 4 consejos para la costa de Florida' }, read: '4 min', img: 'gate-cantilever' },
  { tag: 'Gates',       title: { EN: 'Ready-to-assemble Gates vs Field-Built: What to Order',          ES: 'Portones listos para ensamblar vs fabricados en obra: qué pedir' }, read: '5 min', img: 'gate-double' },
];

/* Display translations for article tags (tag string kept as-is for filter logic) */
const ARTICLE_TAG_ES = {
  'All': 'Todos',
  'Materials': 'Materiales',
  'How-to': 'Cómo hacerlo',
  'Pricing': 'Precios',
  'Code': 'Código',
  'Comparison': 'Comparativa',
  'HVHZ': 'HVHZ',
  'Install': 'Instalación',
  'Maintenance': 'Mantenimiento',
  'Gates': 'Portones',
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
        position: 'relative', display: 'flex', alignItems: 'flex-end',
      borderRadius: 24, overflow: 'hidden',
      background: '#263166', textDecoration: 'none',
      minHeight: big ? 'clamp(380px, 56vh, 560px)' : 'clamp(180px, 26vh, 268px)',
      flex: 1,
    }}>
      <img src={FENCE_IMG[a.img]} alt="" style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
        transform: hover ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.6s ease',
      }}/>
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(38, 49, 103,0.05) 30%, rgba(38, 49, 103,0.88) 100%)',
      }}/>
      {/* Category chip, top-left */}
      <span className="mono" style={{
        position: 'absolute', top: big ? 24 : 18, left: big ? 24 : 18,
        background: 'var(--tangerine)', color: 'var(--white)',
        padding: '5px 12px', fontSize: 12, fontWeight: 700,
        letterSpacing: '0.16em', textTransform: 'uppercase',
      }}>{t(a.tag, ARTICLE_TAG_ES[a.tag])}</span>
      <div style={{ position: 'relative', padding: big ? 'clamp(24px, 3vw, 44px)' : 22, width: '100%' }}>
        <h2 className="display" style={{
          margin: 0, color: 'var(--white)',
          fontSize: big ? 'clamp(20px, 2.1vw, 32px)' : 'clamp(15px, 1.2vw, 18px)',
          lineHeight: 1.18, letterSpacing: '-0.01em', fontWeight: 700,
          textTransform: 'capitalize',
        }}>{t(a.title)}</h2>
        <div style={{
          marginTop: 14, display: 'flex', alignItems: 'center', gap: 10,
          color: 'var(--alice-blue)',
        }}>
          <span className="mono" style={{ fontSize: 12.5, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
            {a.read} {t('read', 'de lectura')}
          </span>
          <span aria-hidden style={{
            display: 'inline-flex', alignItems: 'center',
            color: 'var(--tangerine)',
            transform: hover ? 'translateX(4px)' : 'translateX(0)',
            transition: 'transform 0.2s ease',
          }}><ArrowRight size={big ? 16 : 13}/></span>
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
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          gap: 24, flexWrap: 'wrap', marginBottom: 36,
        }}>
          <h2 className="display" style={{
            margin: 0, fontSize: 'clamp(26px, 2.8vw, 38px)', fontWeight: 800,
            letterSpacing: '-0.015em', color: 'var(--ink)',
          }}>
            {t('Start with', 'Empieza con')}{' '}
            <span style={{ color: 'var(--tangerine)' }}>{t('these guides.', 'estas guías.')}</span>
          </h2>
          <p style={{
            margin: 0, maxWidth: 380, fontSize: 14, lineHeight: 1.55,
            color: 'var(--charcoal)',
          }}>
            {t('The three reads that answer most first-time fence questions.',
               'Las tres lecturas que responden la mayoría de las dudas de primera vez.')}
          </p>
        </div>
        <div className="wfs-articles-hero" style={{
          display: 'grid', gridTemplateColumns: '1.7fr 1fr', gap: 18, alignItems: 'stretch',
        }}>
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
        display: 'flex', flexDirection: 'column',
        cursor: 'pointer', borderRadius: 20, overflow: 'hidden',
        background: 'var(--white)',
        border: '1px solid rgba(0,16,17,0.08)',
        transform: hover ? 'translateY(-5px)' : 'none',
        boxShadow: hover ? '0 24px 46px -22px rgba(38, 49, 103,0.4)' : 'none',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      }}>
      <div style={{ position: 'relative', aspectRatio: '16 / 10', overflow: 'hidden', background: '#263166' }}>
        <img src={FENCE_IMG[p.img]} alt=""
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
            transform: hover ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.5s ease',
          }}/>
        {/* Category chip on the image */}
        <span className="mono" style={{
          position: 'absolute', top: 14, left: 14,
          background: 'rgba(255,255,255,0.92)', color: 'var(--ink)',
          padding: '5px 11px', fontSize: 12, fontWeight: 700,
          letterSpacing: '0.14em', textTransform: 'uppercase',
          backdropFilter: 'blur(4px)',
        }}>{t(p.tag, ARTICLE_TAG_ES[p.tag])}</span>
      </div>
      <div style={{ padding: '18px 20px 20px', flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <h3 style={{
          margin: 0, fontSize: 16, fontWeight: 700, lineHeight: 1.35,
          color: 'var(--ink)', letterSpacing: '-0.005em', textTransform: 'capitalize',
        }}>{t(p.title)}</h3>
        <div style={{
          marginTop: 'auto', paddingTop: 14, borderTop: '1px solid rgba(0,16,17,0.08)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <span className="mono" style={{
            fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--charcoal)',
          }}>{p.read} {t('read', 'de lectura')}</span>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            fontSize: 13, fontWeight: 600, color: 'var(--laser-blue)',
          }}>
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
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          gap: 24, flexWrap: 'wrap', marginBottom: 28,
        }}>
          <h2 className="display" style={{
            margin: 0, fontSize: 'clamp(26px, 2.8vw, 38px)', fontWeight: 800,
            letterSpacing: '-0.015em', color: 'var(--ink)',
          }}>{t('Featured Posts', 'Artículos destacados')}</h2>
          <span className="mono" style={{
            fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase',
            color: 'var(--charcoal)',
          }}>{visible.length} {t('articles', 'artículos')}</span>
        </div>

        {/* Filter chips */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 36 }}>
          {tags.map(tag => {
            const active = tag === filter;
            return (
              <button key={tag} onClick={() => setFilter(tag)}
                style={{
                  padding: '8px 16px', borderRadius: 999,
                  fontSize: 13, fontWeight: 600, fontFamily: 'var(--sans)',
                  border: '1px solid ' + (active ? 'var(--ink)' : 'rgba(0,16,17,0.18)'),
                  background: active ? 'var(--ink)' : 'var(--white)',
                  color: active ? 'var(--white)' : 'var(--ink)',
                  cursor: 'pointer', transition: 'all 0.15s ease',
                }}>{t(tag, ARTICLE_TAG_ES[tag])}</button>
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
      slug: 'vinyl', name: t('Vinyl / PVC', 'Vinilo / PVC'), href: 'vinyl.html',
      tag: t('Veka-extruded · Lifetime warranty', 'Extruido por Veka · Garantía de por vida'),
      bestFor: t('Backyard privacy, residential subdivisions', 'Privacidad de patio, urbanizaciones residenciales'),
      strength: t('No maintenance, no painting, no fading, the SW Florida default', 'Sin mantenimiento, sin pintura, sin decoloración, la opción predeterminada del suroeste de Florida'),
      caveat: t('Less impact resistance than aluminum or metal in hurricane wind', 'Menor resistencia al impacto que el aluminio o el metal ante vientos huracanados'),
    },
    {
      slug: 'aluminum', name: t('Aluminum', 'Aluminio'), href: 'aluminum.html',
      tag: t('Powder-coat · 6063-T6', 'Recubrimiento en polvo · 6063-T6'),
      bestFor: t('Pool enclosures, ornamental perimeters, HVHZ', 'Cerramientos de piscina, perímetros ornamentales, HVHZ'),
      strength: t('Code-compliant out of the box, 150 mph wind rated, 20-yr finish', 'Cumple el código desde el inicio, resistencia al viento de 150 mph, acabado de 20 años'),
      caveat: t('Open picket, limited privacy by design', 'Picket abierto, privacidad limitada por diseño'),
    },
    {
      slug: 'chain-link', name: t('Chain Link', 'Malla ciclónica'), href: 'chain-link.html',
      tag: t('Galvanized + Vinyl-coated', 'Galvanizada + recubierta de vinilo'),
      bestFor: t('Security, sports fields, industrial perimeters', 'Seguridad, campos deportivos, perímetros industriales'),
      strength: t('Lowest cost per LF, fastest install, ships same day', 'Menor costo por LF, instalación más rápida, envío el mismo día'),
      caveat: t('Industrial look, not for ornamental front yards', 'Aspecto industrial, no apto para jardines delanteros ornamentales'),
    },
    {
      slug: 'metal', name: 'Metal / DuraFence', href: 'metal.html',
      tag: t('Aluminum board privacy', 'Privacidad de tablas de aluminio'),
      bestFor: t('Hurricane-zone privacy, modern residential', 'Privacidad en zona de huracanes, residencial moderno'),
      strength: t('Full 6-8 ft privacy with HVHZ wind rating, sleek board look', 'Privacidad total de 6-8 ft con clasificación de viento HVHZ, elegante aspecto de tablas'),
      caveat: t('Longer lead time (1-2 weeks for color-matched runs)', 'Mayor tiempo de entrega (1-2 semanas para tramos con color a juego)'),
    },
    {
      slug: 'ecfence', name: 'EC Fence', href: 'ecfence.html',
      tag: t('Self-mating galvanized steel', 'Acero galvanizado autoensamblable'),
      bestFor: t('Coastal HVHZ, commercial perimeters, modern residential', 'HVHZ costero, perímetros comerciales, residencial moderno'),
      strength: t('Engineered for Exposure C wind, 15-yr finish, salt-air tough', 'Diseñado para viento de Exposición C, acabado de 15 años, resistente al aire salino'),
      caveat: t('Quote-based pricing, call for run-specific cost', 'Precio basado en cotización, llama para el costo específico del tramo'),
    },
  ];

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
            <a key={p.slug} href={p.href} style={{
              display: 'grid', gridTemplateColumns: '160px 1fr 1.4fr 1.4fr auto',
              gap: 28, alignItems: 'center',
              padding: '24px 28px',
              background: i % 2 === 0 ? 'var(--white)' : '#ffffff',
              border: '1px solid rgba(0,16,17,0.12)',
              color: 'var(--ink)',
            }}>
              <div>
                <div className="display" style={{ fontSize: 22, lineHeight: 1.05 }}>{p.name}</div>
                <div className="mono" style={{
                  marginTop: 8, fontSize: 12, letterSpacing: '0.18em',
                  textTransform: 'uppercase', color: 'var(--tangerine)', fontWeight: 700,
                }}>{p.tag}</div>
              </div>
              <div>
                <div className="mono" style={{ fontSize: 12, letterSpacing: '0.18em', color: 'var(--charcoal)', textTransform: 'uppercase', marginBottom: 6 }}>{t('Best for', 'Ideal para')}</div>
                <div style={{ fontSize: 13.5, lineHeight: 1.5 }}>{p.bestFor}</div>
              </div>
              <div>
                <div className="mono" style={{ fontSize: 12, letterSpacing: '0.18em', color: 'var(--charcoal)', textTransform: 'uppercase', marginBottom: 6 }}>{t('Strength', 'Punto fuerte')}</div>
                <div style={{ fontSize: 13.5, lineHeight: 1.5 }}>{p.strength}</div>
              </div>
              <div>
                <div className="mono" style={{ fontSize: 12, letterSpacing: '0.18em', color: 'var(--charcoal)', textTransform: 'uppercase', marginBottom: 6 }}>{t('Caveat', 'Salvedad')}</div>
                <div style={{ fontSize: 13.5, lineHeight: 1.5 }}>{p.caveat}</div>
              </div>
              <span style={{
                width: 38, height: 38, flexShrink: 0,
                border: '1px solid var(--ink)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
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
    title={t('Code-compliant', 'Perfiles de cerramiento')}
    accent={t('enclosure profiles.', 'que cumplen el código.')}
    subtitle={t('What the Florida Building Code says about residential pool barriers, and which of our stocked profiles meet it.', 'Lo que el Código de Construcción de Florida dice sobre las barreras de piscinas residenciales, y cuáles de nuestros perfiles en inventario lo cumplen.')}
    image={FENCE_IMG.aluminum}
  />
  );
};

const PoolCodeRequirements = () => {
  const t = useT();
  const reqs = [
    { code: 'FBC R 4501.17.1.1', title: t('Minimum height', 'Altura mínima'),           body: t('4 ft (48") minimum measured on the side facing away from the pool. No horizontal handhold below 45" on the outside face.', 'Mínimo de 4 ft (48") medido en el lado opuesto a la piscina. Sin agarre horizontal por debajo de 45" en la cara exterior.') },
    { code: 'FBC R 4501.17.1.2', title: t('Picket spacing', 'Separación entre pickets'),           body: t('Vertical pickets with a maximum spacing of 3" between each picket. No openings between rails ≥ 4".', 'Pickets verticales con una separación máxima de 3" entre cada picket. Sin aberturas entre rieles ≥ 4".') },
    { code: 'FBC R 4501.17.1.4', title: t('Gates, self-closing', 'Portones, cierre automático'),     body: t('Every gate opening into the pool barrier must be self-closing and self-latching, with the latch handle ≥ 54" from grade.', 'Todo portón que abra hacia la barrera de la piscina debe tener cierre automático y autocerrojo, con la manija del pestillo ≥ 54" sobre el nivel del suelo.') },
    { code: 'FBC R 4501.17.1.5', title: t('Gate swing direction', 'Dirección de apertura del portón'),     body: t('Pedestrian access gates must swing OUTWARD, away from the pool area.', 'Los portones de acceso peatonal deben abrir HACIA AFUERA, alejándose del área de la piscina.') },
    { code: 'FBC R 4501.17.1.6', title: t('Latch release location', 'Ubicación de la liberación del pestillo'),   body: t('If the latch release is < 54" from grade, it must be on the pool side, no openings > 0.5" within 18" of the release.', 'Si la liberación del pestillo está a < 54" sobre el nivel del suelo, debe estar del lado de la piscina, sin aberturas > 0.5" dentro de 18" de la liberación.') },
    { code: 'FBC R 4501.17.1.9', title: t('Wall as barrier', 'Muro como barrera'),          body: t('If a wall of the dwelling serves as part of the barrier, doors leading to the pool need an audible alarm OR a self-closing/self-latching mechanism.', 'Si un muro de la vivienda sirve como parte de la barrera, las puertas que dan a la piscina necesitan una alarma audible O un mecanismo de cierre automático/autocerrojo.') },
  ];

  return (
    <section style={{ background: 'var(--white)', padding: '120px 0' }}>
      <div className="container">
        <PageSectionHeader
          number="01" label={t('The actual rules', 'Las reglas reales')}
          title={t('What FBC R 4501.17', 'Lo que el FBC R 4501.17')}
          accent={t('actually says.', 'realmente dice.')}
          sub={t('Excerpts paraphrased, pull the sealed spec from your AHJ for permit submissions.', 'Extractos parafraseados; obtén la especificación sellada de tu AHJ para las presentaciones de permisos.')}
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
          {reqs.map((r, i) => (
            <article key={i} style={{
              background: 'var(--white)', padding: 28,
              border: '1px solid rgba(0,16,17,0.12)',
            }}>
              <div className="mono" style={{
                fontSize: 12, letterSpacing: '0.22em',
                color: 'var(--tangerine)', fontWeight: 700,
                textTransform: 'uppercase', marginBottom: 12,
              }}>{r.code}</div>
              <h3 className="display" style={{ fontSize: 22, lineHeight: 1.1, margin: '0 0 12px' }}>{r.title}</h3>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'var(--charcoal)' }}>{r.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const PoolCodeProfiles = () => {
  const t = useT();
  const profiles = [
    { slug: 'aluminum', name: t('Aluminum 4-Rail', 'Aluminio de 4 rieles'), tag: t('Pool code · Pickets ≤ 3"', 'Código de piscinas · Pickets ≤ 3"'), href: 'aluminum.html', img: 'aluminum' },
    { slug: 'vinyl',    name: t('Vinyl Picket', 'Picket de vinilo'),     tag: t('Pool code · Self-closing gates', 'Código de piscinas · Portones de cierre automático'), href: 'vinyl.html',  img: 'vinyl' },
    { slug: 'ecfence',  name: 'EC Fence',         tag: t('Pool code · HVHZ Exposure C', 'Código de piscinas · HVHZ Exposición C'),  href: 'ecfence.html',img: 'ecfence' },
  ];

  return (
    <section style={{ background: 'var(--parchment)', padding: '120px 0' }}>
      <div className="container">
        <PageSectionHeader
          number="02" label={t('Profiles we stock', 'Perfiles que tenemos en inventario')}
          title={t('Three systems', 'Tres sistemas')}
          accent={t('that meet the code.', 'que cumplen el código.')}
          sub={t('All three ship with self-closing gate hardware kits packed by opening.', 'Los tres se envían con kits de herrajes de cierre automático para portones, empacados por abertura.')}
          link={[t('Materials comparison', 'Comparativa de materiales'), 'materials-comparison.html']}
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {profiles.map((p, i) => (
            <a key={p.slug} href={p.href} style={{
              display: 'block', textDecoration: 'none', color: 'var(--ink)',
              background: 'var(--white)', border: '1px solid rgba(0,16,17,0.12)',
            }}>
              <div style={{ position: 'relative', aspectRatio: '4 / 3', overflow: 'hidden', background: '#263166' }}>
                <img src={FENCE_IMG[p.img]} alt=""
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}/>
                <span className="mono" style={{
                  position: 'absolute', top: 14, left: 14,
                  background: 'var(--tangerine)', color: 'var(--ink)',
                  padding: '5px 10px', fontSize: 12, letterSpacing: '0.18em',
                  fontWeight: 700, textTransform: 'uppercase',
                }}>0{i+1} · {t('Code', 'Código')}</span>
              </div>
              <div style={{ padding: 24 }}>
                <h3 className="display" style={{ margin: '0 0 8px', fontSize: 22, lineHeight: 1.1 }}>{p.name}</h3>
                <div className="mono" style={{ fontSize: 12, letterSpacing: '0.18em', color: 'var(--charcoal)', textTransform: 'uppercase' }}>{p.tag}</div>
                <div style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 600, fontFamily: 'var(--mono)', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink)' }}>
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
            margin: 0, fontSize: 'clamp(28px, 3vw, 40px)',
            lineHeight: 1, letterSpacing: '-0.02em',
          }}>
            {t('Before you', 'Antes de')}<br/>
            <span style={{ color: 'var(--tangerine)' }}>{t('file the permit.', 'presentar el permiso.')}</span>
          </h2>
          <p style={{ marginTop: 18, fontSize: 14.5, lineHeight: 1.6, color: 'var(--alice-blue)', maxWidth: 360 }}>
            {t("Run this list against your drawing. If anything's a question, your rep can pull a sealed manufacturer spec before you submit.", 'Revisa esta lista con tu plano. Si algo genera dudas, tu representante puede obtener una especificación sellada del fabricante antes de que presentes.')}
          </p>
        </div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 14 }}>
          {[
            t('Height measured from the OUTSIDE face of the barrier ≥ 48"', 'Altura medida desde la cara EXTERIOR de la barrera ≥ 48"'),
            t('Picket spacing ≤ 3" with no horizontal climbing surface < 45"', 'Separación entre pickets ≤ 3" sin superficie horizontal para trepar < 45"'),
            t('All gates self-closing with self-latching mechanism', 'Todos los portones con cierre automático y mecanismo de autocerrojo'),
            t('Latch handle on outside ≥ 54" from grade (or on pool side)', 'Manija del pestillo en el exterior ≥ 54" sobre el nivel del suelo (o del lado de la piscina)'),
            t('Gates swing outward, away from the pool', 'Los portones abren hacia afuera, alejándose de la piscina'),
            t('No openings ≥ 4" between rails or between picket and rail', 'Sin aberturas ≥ 4" entre rieles o entre picket y riel'),
            t('Door from house to pool area has alarm OR self-closing latch', 'La puerta de la casa al área de la piscina tiene alarma O pestillo de cierre automático'),
            t('Pull sealed manufacturer spec PDF for AHJ submittal', 'Obtener el PDF de especificación sellada del fabricante para la presentación ante el AHJ'),
          ].map((line, i) => (
            <li key={i} style={{
              display: 'flex', alignItems: 'flex-start', gap: 14,
              fontSize: 14.5, lineHeight: 1.55,
            }}>
              <span aria-hidden style={{
                flexShrink: 0, marginTop: 3,
                width: 22, height: 22, borderRadius: 4,
                background: 'var(--tangerine)', color: 'var(--ink)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              }}>
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
  <CTABand
    kicker={t('Annotated cut sheet', 'Ficha técnica anotada')}
    title={t('Send us your', 'Envíanos tu')}
    accent={t('permit drawing.', 'plano del permiso.')}
    body={t("We'll annotate your cut sheet with the matching picket / latch / gate-swing specs from the manufacturer so your AHJ has everything in one document.", 'Anotaremos tu ficha técnica con las especificaciones correspondientes de picket / pestillo / apertura del portón del fabricante para que tu AHJ tenga todo en un solo documento.')}
    primary={[t('Request a quote', 'Solicitar una cotización'), 'estimate.html']}
    secondary={[t('Call the yard', 'Llama al almacén'), 'tel:2396895496']}
  />
  );
};

Object.assign(window, {
  ArticlesHero, ArticlesFeatured, ArticlesGrid,
  FaqHero, FaqCTA,
  MaterialsCompHero, MaterialsCompDeepDive, MaterialsCompCTA,
  PoolCodeHero, PoolCodeRequirements, PoolCodeProfiles, PoolCodeChecklist, PoolCodeCTA,
});
