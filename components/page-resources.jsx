/* Resources page, articles, materials comparison, pool code, downloads */

const ResourcesHero = () => {
  const t = useT();
  return (
    <PageHero
      crumbs={[[t('Home', 'Inicio'), 'Homepage.html'], [t('Resources', 'Recursos'), null]]}
      eyebrow={t('Fence Education Hub', 'Centro educativo sobre cercas')}
      title={t('Pick the right fence', 'Elija la cerca correcta')}
      accent={t('the first time.', 'a la primera.')}
      subtitle={t('Guides, materials comparisons, Florida code references and downloadable spec sheets. Written by the people who fabricate this stuff every day.', 'Guías, comparativas de materiales, referencias del código de Florida y fichas técnicas descargables. Escrito por las personas que fabrican esto todos los días.')}
      image="assets/gate-rolling.jpg"
    />
  );
};

const ResourceArticles = () => {
  const t = useT();
  const posts = [
    { tag: { EN: 'Materials', ES: 'Materiales' },  title: { EN: 'Top 4 Durable Fence Materials for SW Florida', ES: 'Los 4 materiales de cerca más duraderos para el suroeste de Florida' },     read: { EN: '6 min', ES: '6 min' }, img: 'aluminum' },
    { tag: { EN: 'How-to', ES: 'Cómo hacerlo' },     title: { EN: 'How to Measure for Fence Material in Florida', ES: 'Cómo medir el material de cerca en Florida' },     read: { EN: '4 min', ES: '4 min' }, img: 'chainlink' },
    { tag: { EN: 'Pricing', ES: 'Precios' },    title: { EN: 'How Much Does a Fence Cost in Florida in 2026?', ES: '¿Cuánto cuesta una cerca en Florida en 2026?' },   read: { EN: '8 min', ES: '8 min' }, img: 'vinyl' },
    { tag: { EN: 'Code', ES: 'Código' },       title: { EN: 'Florida Pool Code: Enclosure Requirements Explained', ES: 'Código de piscinas de Florida: requisitos de cerramiento explicados' }, read: { EN: '7 min', ES: '7 min' }, img: 'metal' },
    { tag: { EN: 'Comparison', ES: 'Comparativa' }, title: { EN: 'Aluminum vs Vinyl vs Chain Link, Picking a System', ES: 'Aluminio vs vinilo vs malla ciclónica: cómo elegir un sistema' }, read: { EN: '9 min', ES: '9 min' }, img: 'aluminum' },
    { tag: { EN: 'HVHZ', ES: 'HVHZ' },       title: { EN: 'Hurricane Zone Fencing: EC Fence vs DuraFence', ES: 'Cercas para zona de huracanes: EC Fence vs DuraFence' },     read: { EN: '5 min', ES: '5 min' }, img: 'ecfence' },
  ];
  return (
    <section style={{ background: 'var(--white)', padding: '120px 0' }}>
      <div className="container">
        <PageSectionHeader
          number="01" label={t('Articles & guides', 'Artículos y guías')}
          title={t('Read before you buy.', 'Lea antes de comprar.')}
          accent={t('Or call us, both work.', 'O llámenos, ambas opciones funcionan.')}
          sub={t('Plain-English writeups on the questions we hear in the yard every week.', 'Explicaciones claras sobre las preguntas que escuchamos en la sucursal cada semana.')}
          link={[t('All articles', 'Todos los artículos'), 'resources.html#articles']}
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {posts.map((p, i) => (
            <article key={i} style={{
              background: 'var(--white)',
              border: '1px solid rgba(0,16,17,0.1)',
              display: 'flex', flexDirection: 'column',
              cursor: 'pointer',
            }}>
              <div style={{ position: 'relative', aspectRatio: '4 / 3', overflow: 'hidden', background: '#263166' }}>
                <img src={FENCE_IMG[p.img]} alt=""
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}/>
                <span className="mono" style={{
                  position: 'absolute', top: 14, left: 14,
                  background: 'var(--tangerine)', color: 'var(--ink)',
                  padding: '5px 10px', fontSize: 12, letterSpacing: '0.18em',
                  fontWeight: 700, textTransform: 'uppercase',
                }}>{t(p.tag)}</span>
              </div>
              <div style={{ padding: 24, flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 className="display" style={{
                  margin: '0 0 14px', fontSize: 20, lineHeight: 1.15,
                }}>{t(p.title)}</h3>
                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="mono" style={{
                    fontSize: 12, letterSpacing: '0.18em', color: 'var(--charcoal)', textTransform: 'uppercase',
                  }}>{t(p.read)} {t('read', 'de lectura')}</span>
                  <span style={{
                    fontSize: 13, color: 'var(--laser-blue)', fontWeight: 500,
                    display: 'flex', alignItems: 'center', gap: 6,
                  }}>{t('Read', 'Leer')} <ArrowRight size={12}/></span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const MaterialsComparison = () => {
  const t = useT();
  return (
  <section style={{ background: 'var(--parchment)', padding: '120px 0' }}>
    <div className="container">
      <PageSectionHeader
        number="02" label={t('Materials comparison', 'Comparativa de materiales')}
        title={t('Side by side,', 'Lado a lado,')}
        accent={t('no marketing fluff.', 'sin adornos publicitarios.')}
        sub={t('Pick the one that matches your job. Click through to the material page for full specs.', 'Elija el que se ajuste a su proyecto. Haga clic para ver la página del material con las especificaciones completas.')}
      />
      <div style={{
        border: '1px solid var(--ink)', overflow: 'hidden',
      }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1.2fr repeat(4, 1fr)',
          background: 'var(--ink)', color: 'var(--white)',
        }}>
          {['', t('Vinyl / PVC', 'Vinilo / PVC'), t('Aluminum', 'Aluminio'), t('Chain Link', 'Malla ciclónica'), t('Metal / DuraFence', 'Metal / DuraFence')].map((h, i) => (
            <div key={i} className="mono" style={{
              padding: '16px 18px',
              fontSize: 12.5, fontWeight: 700, letterSpacing: '0.22em',
              textTransform: 'uppercase',
              borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.15)',
            }}>{h}</div>
          ))}
        </div>
        {[
          [t('Best for', 'Ideal para'),       t('Privacy', 'Privacidad'), t('Pool + ornamental', 'Piscina + ornamental'), t('Security + perimeter', 'Seguridad + perímetro'), t('Hurricane-zone privacy', 'Privacidad en zona de huracanes')],
          [t('Heights', 'Alturas'),        t('4-8 ft', '4-8 ft'), t('4-6 ft', '4-6 ft'), t('4-12 ft', '4-12 ft'), t('6-8 ft', '6-8 ft')],
          [t('Maintenance', 'Mantenimiento'),    t('Wash with hose', 'Lavar con manguera'), t('None', 'Ninguno'), t('None (galv) / wash (PVC-coated)', 'Ninguno (galvanizado) / lavar (recubierto de PVC)'), t('None', 'Ninguno')],
          [t('Wind rating', 'Clasificación de viento'),    t('Up to 130 mph', 'Hasta 130 mph'), t('Up to 150 mph (HVHZ)', 'Hasta 150 mph (HVHZ)'), t('Up to 150 mph', 'Hasta 150 mph'), t('150 mph HVHZ', '150 mph HVHZ')],
          [t('Warranty', 'Garantía'),       t('Lifetime', 'De por vida'), t('20 yr finish', 'Acabado de 20 años'), t('Galvanized rust-thru', 'Galvanizado contra perforación por óxido'), t('10 yr finish', 'Acabado de 10 años')],
          [t('Lead time', 'Tiempo de entrega'),      t('1-2 days stocked', '1-2 días en existencia'), t('1-2 days stocked', '1-2 días en existencia'), t('Same day', 'El mismo día'), t('1-2 weeks', '1-2 semanas')],
          [t('Starts at', 'Desde'),      t('Quote-based', 'Según cotización'), t('Quote-based', 'Según cotización'), t('Quote-based', 'Según cotización'), t('Quote-based', 'Según cotización')],
        ].map((row, ri) => (
          <div key={ri} style={{
            display: 'grid', gridTemplateColumns: '1.2fr repeat(4, 1fr)',
            background: ri % 2 === 0 ? 'var(--white)' : '#ffffff',
            borderTop: '1px solid rgba(0,16,17,0.08)',
          }}>
            {row.map((cell, ci) => (
              <div key={ci} style={{
                padding: '16px 18px',
                fontSize: 13.5, lineHeight: 1.5,
                color: ci === 0 ? 'var(--charcoal)' : 'var(--ink)',
                fontWeight: ci === 0 ? 700 : 400,
                fontFamily: ci === 0 ? 'var(--mono)' : 'var(--sans)',
                letterSpacing: ci === 0 ? '0.06em' : 'normal',
                textTransform: ci === 0 ? 'uppercase' : 'none',
                borderLeft: ci === 0 ? 'none' : '1px solid rgba(0,16,17,0.08)',
              }}>{cell}</div>
            ))}
          </div>
        ))}
      </div>
      <div style={{ marginTop: 22, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
        {[
          [t('Vinyl / PVC', 'Vinilo / PVC'), 'vinyl.html'],
          [t('Aluminum', 'Aluminio'), 'aluminum.html'],
          [t('Chain Link', 'Malla ciclónica'), 'chain-link.html'],
          [t('Metal / DuraFence', 'Metal / DuraFence'), 'metal.html'],
          [t('EC Fence', 'EC Fence'), 'ecfence.html'],
        ].map(([t, h]) => (
          <a key={t} href={h} className="mono" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '8px 14px',
            border: '1px solid var(--ink)',
            fontSize: 12.5, fontWeight: 700, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: 'var(--ink)',
          }}>
            {t}
            <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square"/>
            </svg>
          </a>
        ))}
      </div>
    </div>
  </section>
  );
};

const PoolCodeSection = () => {
  const t = useT();
  return (
    <SplitBlock
      kicker={t('03, Florida Pool Code', '03, Código de piscinas de Florida')}
      title={t('Code-compliant', 'Perfiles de cerramiento')}
      accent={t('enclosure profiles.', 'que cumplen el código.')}
      body={t('Florida Building Code requires a 4 ft minimum barrier around residential pools, with specific opening, latch and self-closing requirements. We stock multiple aluminum and vinyl profiles that meet the spec, and we\'ll annotate the cut sheet for your AHJ.', 'El Código de Construcción de Florida exige una barrera mínima de 4 pies alrededor de las piscinas residenciales, con requisitos específicos de aberturas, pestillos y cierre automático. Tenemos en existencia múltiples perfiles de aluminio y vinilo que cumplen la especificación, y anotaremos la hoja de corte para su AHJ.')}
      bullets={[
        t('4 ft minimum height with no horizontal handhold below 45"', 'Altura mínima de 4 pies sin apoyo horizontal para manos por debajo de 45"'),
        t('Pickets spaced ≤ 3" apart for pool code', 'Barrotes separados ≤ 3" para cumplir el código de piscinas'),
        t('Self-closing, self-latching gates ≥ 54" from grade', 'Portones de cierre y pestillo automáticos a ≥ 54" del nivel del suelo'),
        t('Stamped manufacturer specs available on request', 'Especificaciones selladas del fabricante disponibles a solicitud'),
      ]}
      image={FENCE_IMG.aluminum}
      imageRight={false}
    />
  );
};

const DownloadsSection = () => {
  const t = useT();
  return (
  <section style={{ background: 'var(--white)', padding: '120px 0' }}>
    <div className="container">
      <PageSectionHeader
        number="04" label={t('Spec sheets & downloads', 'Fichas técnicas y descargas')}
        title={t('Send to your', 'Envíelas a su')}
        accent={t('installer or AHJ.', 'instalador o AHJ.')}
        sub={t('PDF spec sheets for every system. Stamped versions available on request for commercial submissions.', 'Fichas técnicas en PDF para cada sistema. Versiones selladas disponibles a solicitud para presentaciones comerciales.')}
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
        {[
          [t('EC Fence, Exposure C Wind', 'EC Fence, viento de exposición C'), 'PDF · 1.2 MB'],
          [t('Aluminum 3/4/5 Rail Profiles', 'Perfiles de aluminio de 3/4/5 rieles'), 'PDF · 980 KB'],
          [t('DuraFence Aluminum Board', 'Tablero de aluminio DuraFence'), 'PDF · 1.4 MB'],
          [t('Veka Vinyl, Privacy + Picket', 'Vinilo Veka, privacidad + barrotes'), 'PDF · 1.1 MB'],
          [t('Chain Link Gauges & Mesh', 'Calibres y malla de malla ciclónica'), 'PDF · 620 KB'],
          [t('Florida Pool Code Profiles', 'Perfiles del código de piscinas de Florida'), 'PDF · 1.6 MB'],
        ].map(([t, meta], i) => (
          <a key={i} href="#" style={{
            display: 'flex', alignItems: 'center', gap: 16,
            padding: '18px 20px',
            border: '1px solid rgba(0,16,17,0.15)',
            background: 'var(--white)', color: 'var(--ink)',
          }}>
            <span style={{
              width: 40, height: 40, flexShrink: 0,
              background: 'var(--tangerine)', color: 'var(--ink)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 2v10m0 0l-4-4m4 4l4-4M3 14h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square"/>
              </svg>
            </span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 14.5, fontWeight: 500, color: 'var(--ink)' }}>{t}</div>
              <div className="mono" style={{ fontSize: 12, letterSpacing: '0.18em', color: 'var(--charcoal)', textTransform: 'uppercase', marginTop: 4 }}>{meta}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
  );
};

const ResourcesCTA = () => {
  const t = useT();
  return (
    <CTABand
      kicker={t('Still got questions?', '¿Todavía tiene preguntas?')}
      title={t('Call the yard,', 'Llame a la sucursal,')}
      accent={t('or send the project.', 'o envíenos el proyecto.')}
      body={t('Our sales representatives split calls Monday through Friday during business hours. Or send a sketch + ZIP and we\'ll come back inside a day.', 'Nuestros representantes de ventas atienden llamadas de lunes a viernes en horario laboral. O envíe un boceto + código postal y le responderemos en menos de un día.')}
      primary={[t('Request a quote', 'Solicitar una cotización'), 'estimate.html']}
      secondary={[t('Call (239) 689-5496', 'Llamar al (239) 689-5496'), 'tel:2396895496']}
    />
  );
};

Object.assign(window, { ResourcesHero, ResourceArticles, MaterialsComparison, PoolCodeSection, DownloadsSection, ResourcesCTA });
