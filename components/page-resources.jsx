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
                  padding: '5px 10px', fontSize: 13.5, letterSpacing: '0.18em',
                  fontWeight: 700, textTransform: 'uppercase',
                }}>{t(p.tag)}</span>
              </div>
              <div style={{ padding: 24, flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 className="display" style={{
                  margin: '0 0 14px', fontSize: 21.5, lineHeight: 1.15,
                }}>{t(p.title)}</h3>
                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="mono" style={{
                    fontSize: 13.5, letterSpacing: '0.18em', color: 'var(--charcoal)', textTransform: 'uppercase',
                  }}>{t(p.read)} {t('read', 'de lectura')}</span>
                  <span style={{
                    fontSize: 14.5, color: 'var(--laser-blue)', fontWeight: 500,
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
        borderRadius: 18, overflow: 'hidden',
        border: '1px solid rgba(0,16,17,0.08)',
        boxShadow: '0 34px 70px -36px rgba(0,16,17,0.28)',
        background: 'var(--white)',
      }}>
        {/* Header: edge-to-edge photo per material, label on a dark scrim.
            The photo fills its whole cell (cover) — no floating cutouts. */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1.2fr repeat(4, 1fr)',
          background: 'var(--ink)', color: 'var(--white)',
        }}>
          {[
            { label: '', img: null, href: null },
            { label: t('Vinyl / PVC', 'Vinilo / PVC'), img: FENCE_IMG.vinyl, href: 'vinyl.html' },
            { label: t('Aluminum', 'Aluminio'), img: FENCE_IMG.aluminum, href: 'aluminum.html' },
            { label: t('Chain Link', 'Malla ciclónica'), img: FENCE_IMG.chainlink, href: 'chain-link.html' },
            { label: t('Metal / DuraFence', 'Metal / DuraFence'), img: FENCE_IMG.metal, href: 'metal.html' },
          ].map((h, i) => (
            h.img ? (
              <a key={i} href={h.href} style={{
                position: 'relative', display: 'block', overflow: 'hidden',
                minHeight: 'clamp(170px, 15vw, 210px)',
                textDecoration: 'none', color: 'var(--white)',
                borderLeft: '1px solid rgba(255,255,255,0.1)',
              }}
              onMouseEnter={e => { const im = e.currentTarget.querySelector('img'); if (im) im.style.transform = 'scale(1.05)'; }}
              onMouseLeave={e => { const im = e.currentTarget.querySelector('img'); if (im) im.style.transform = 'scale(1)'; }}>
                <img src={h.img} alt={h.label} loading="lazy" style={{
                  position: 'absolute', inset: 0, width: '100%', height: '100%',
                  objectFit: 'cover', display: 'block',
                  transition: 'transform 0.4s ease',
                }}/>
                {/* Scrim so the label stays legible over any photo */}
                <span aria-hidden style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(180deg, rgba(38,49,103,0.10) 35%, rgba(38,49,103,0.92) 100%)',
                }}/>
                <span className="mono" style={{
                  position: 'absolute', left: 16, right: 14, bottom: 14,
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8,
                  fontSize: 13.5, fontWeight: 700, letterSpacing: '0.1em',
                  textTransform: 'uppercase', lineHeight: 1.25,
                }}>
                  <span style={{ minWidth: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{h.label}</span>
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, color: 'var(--tangerine)' }}>
                    <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="square"/>
                  </svg>
                </span>
              </a>
            ) : (
              <div key={i} style={{
                display: 'flex', flexDirection: 'column', justifyContent: 'center',
                padding: 'clamp(22px, 2vw, 30px)',
                minHeight: 'clamp(170px, 15vw, 210px)',
              }}>
                <div className="mono" style={{
                  fontSize: 12.5, letterSpacing: '0.22em', textTransform: 'uppercase',
                  color: 'rgba(219,233,238,0.55)', marginBottom: 12,
                }}>{t('At a glance', 'De un vistazo')}</div>
                <div className="display" style={{ fontSize: 'clamp(22px, 2vw, 28px)', lineHeight: 1.05, color: 'var(--white)' }}>
                  {t('Pick your material', 'Elige tu material')}
                </div>
                <div style={{ marginTop: 10, fontSize: 14.5, lineHeight: 1.45, color: 'rgba(219,233,238,0.65)' }}>
                  {t('Tap any column to explore.', 'Toca una columna para explorar.')}
                </div>
              </div>
            )
          ))}
        </div>
        {[
          [t('Best for', 'Ideal para'),       t('Privacy', 'Privacidad'), t('Pool + ornamental', 'Piscina + ornamental'), t('Security + perimeter', 'Seguridad + perímetro'), t('Modern privacy + screens', 'Privacidad moderna + pantallas')],
          [t('Heights', 'Alturas'),        t("4'-6' common", "4'-6' comunes"), t("4'-6' common", "4'-6' comunes"), t("4'-6' common, taller by request", "4'-6' comunes, más altas bajo pedido"), t("6' and 8'", "6' y 8'")],
          [t('Maintenance', 'Mantenimiento'),    t('Occasional rinse', 'Enjuague ocasional'), t('Low; varies by finish and exposure', 'Bajo; varía según acabado y exposición'), t('Low; varies by coating', 'Bajo; varía según recubrimiento'), t('Low; varies by finish and exposure', 'Bajo; varía según acabado y exposición')],
          [t('Wind & code', 'Viento y código'),    t('Depends on product and installation', 'Depende del producto y la instalación'), t('Pool-code compliant options', 'Opciones que cumplen código de piscinas'), t('Depends on product and installation', 'Depende del producto y la instalación'), t('Depends on product and installation', 'Depende del producto y la instalación')],
          [t('Warranty', 'Garantía'),       t('Manufacturer warranty; varies by product', 'Garantía del fabricante; varía por producto'), t('Manufacturer warranty; varies by product', 'Garantía del fabricante; varía por producto'), t('Manufacturer warranty; varies by product', 'Garantía del fabricante; varía por producto'), t('Manufacturer warranty; varies by product', 'Garantía del fabricante; varía por producto')],
          [t('Lead time', 'Tiempo de entrega'),      t('Stocked: ready now · custom varies', 'En stock: listo ya · a medida varía'), t('Stocked: ready now · custom varies', 'En stock: listo ya · a medida varía'), t('Stocked: ready now · custom varies', 'En stock: listo ya · a medida varía'), t('Stocked: ready now · custom varies', 'En stock: listo ya · a medida varía')],
          [t('Starts at', 'Desde'),      t('Quote-based', 'Según cotización'), t('Quote-based', 'Según cotización'), t('Quote-based', 'Según cotización'), t('Quote-based', 'Según cotización')],
        ].map((row, ri) => (
          <div key={ri}
            onMouseEnter={e => { e.currentTarget.style.background = '#eef1f7'; }}
            onMouseLeave={e => { e.currentTarget.style.background = ri % 2 ? '#f7f8fa' : 'var(--white)'; }}
            style={{
              display: 'grid', gridTemplateColumns: '1.2fr repeat(4, 1fr)',
              background: ri % 2 ? '#f7f8fa' : 'var(--white)',
              borderTop: '1px solid rgba(0,16,17,0.06)',
              transition: 'background 0.15s ease',
            }}>
            {row.map((cell, ci) => (
              <div key={ci} style={{
                padding: '18px 20px',
                fontSize: 15, lineHeight: 1.5,
                color: ci === 0 ? 'var(--charcoal)' : 'var(--ink)',
                fontWeight: ci === 0 ? 700 : 400,
                fontFamily: ci === 0 ? 'var(--mono)' : 'var(--sans)',
                letterSpacing: ci === 0 ? '0.08em' : 'normal',
                textTransform: ci === 0 ? 'uppercase' : 'none',
                borderLeft: ci === 0 ? 'none' : '1px solid rgba(0,16,17,0.06)',
              }}>{cell}</div>
            ))}
          </div>
        ))}
      </div>
      <p style={{ marginTop: 14, fontSize: 14, lineHeight: 1.6, color: 'var(--charcoal)' }}>
        {useT()('Specs shown are general guidance. Wind ratings, warranties, availability and performance depend on the specific product, configuration and project — we confirm exact numbers on your quote.',
                'Las especificaciones mostradas son una guía general. Las clasificaciones de viento, garantías, disponibilidad y desempeño dependen del producto, la configuración y el proyecto específicos; confirmamos los números exactos en tu cotización.')}
      </p>
    </div>
  </section>
  );
};

const PoolCodeSection = () => {
  const t = useT();
  return (
    <SplitBlock
      kicker={t('Florida Pool Code', 'Código de piscinas de Florida')}
      title={t('Florida pool barriers,', 'Barreras de piscina de Florida,')}
      accent={t('explained.', 'explicadas.')}
      body={t('The Florida Building Code sets requirements for residential pool barriers — height, openings, latches and self-closing gates. We stock aluminum and vinyl systems commonly configured to meet them, and your rep can include the manufacturer spec sheets with your quote. Requirements and final approval depend on your project and your local building authority.', 'El Código de Construcción de Florida establece requisitos para las barreras de piscinas residenciales: altura, aberturas, pestillos y portones de cierre automático. Tenemos sistemas de aluminio y vinilo que comúnmente se configuran para cumplirlos, y tu asesor puede incluir las fichas técnicas del fabricante con tu cotización. Los requisitos y la aprobación final dependen de tu proyecto y de tu autoridad local de construcción.')}
      bullets={[
        t('4 ft minimum height with no horizontal handhold below 45"', 'Altura mínima de 4 pies sin apoyo horizontal para manos por debajo de 45"'),
        t('Pickets spaced ≤ 3" apart for pool code', 'Barrotes separados ≤ 3" para cumplir el código de piscinas'),
        t('Self-closing, self-latching gates ≥ 54" from grade', 'Portones de cierre y pestillo automáticos a ≥ 54" del nivel del suelo'),
        t('Manufacturer spec sheets available with your quote', 'Fichas técnicas del fabricante disponibles con tu cotización'),
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
          [t('Catalyst Vinyl, Privacy + Picket', 'Vinilo Catalyst, privacidad + barrotes'), 'PDF · 1.1 MB'],
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
              <div style={{ fontSize: 16, fontWeight: 500, color: 'var(--ink)' }}>{t}</div>
              <div className="mono" style={{ fontSize: 13.5, letterSpacing: '0.18em', color: 'var(--charcoal)', textTransform: 'uppercase', marginTop: 4 }}>{meta}</div>
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
