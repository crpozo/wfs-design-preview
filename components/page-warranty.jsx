/* Warranty + Warranty Claims + Manufacturer Specs pages */

/* ═══════════════════════════════════════════════════════════
   1. WARRANTY, Lifetime warranty coverage details
   ═══════════════════════════════════════════════════════════ */

const WarrantyHero = () => {
  const t = useT();
  return (
  <PageHero
    crumbs={[[t('Home', 'Inicio'), 'Homepage.html'], [t('Warranty', 'Garantía'), null]]}
    eyebrow={t('Warranty · Coverage', 'Garantía · Cobertura')}
    title={t('Warranty coverage', 'Cobertura de garantía')}
    accent={t('that varies by system.', 'que varía según el sistema.')}
    subtitle={t(
      'Material-specific terms below, written in plain English. Manufacturer-backed, transferable to the next owner, and claimable from either yard.',
      'Términos específicos por material abajo, en lenguaje claro. Respaldada por el fabricante, transferible al siguiente dueño, y reclamable desde cualquier sucursal.'
    )}
    image="assets/ec-fence.jpg"
  />
  );
};

const WarrantyHighlights = () => {
  const t = useT();
  const cards = [
    {
      title: { EN: 'Manufacturer-backed', ES: 'Respaldada por el fabricante' },
      body:  { EN: 'Every system we sell is covered by the original manufacturer warranty plus our in-house workmanship guarantee on welded and fabricated assemblies.',
                ES: 'Cada sistema que vendemos está cubierto por la garantía original del fabricante más nuestra garantía interna de mano de obra en ensambles soldados y fabricados.' },
      svg: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 L19 6 V12 Q19 17 12 21 Q5 17 5 12 V6 Z"/><path d="M9 12 L11 14 L15 10"/></svg>),
    },
    {
      title: { EN: 'Transferable', ES: 'Transferible' },
      body:  { EN: 'Sell the house, the warranty goes with it. New owners can register with original PO + closing date and keep full coverage.',
                ES: 'Vendes la casa, la garantía va con ella. Los nuevos dueños se registran con la PO original + fecha de cierre y mantienen cobertura completa.' },
      svg: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12 H20"/><path d="M14 6 L20 12 L14 18"/><path d="M10 18 L4 12 L10 6"/></svg>),
    },
    {
      title: { EN: 'Honored at both yards', ES: 'Honrada en ambas sucursales' },
      body:  { EN: 'Claim from Fort Myers or Port Charlotte. Same rep network, same SKUs in stock, same turnaround on warranty replacements.',
                ES: 'Reclama desde Fort Myers o Port Charlotte. La misma red de representantes, mismos SKUs en stock, mismos plazos en reemplazos de garantía.' },
      svg: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21 Q4 14 4 9 A8 8 0 0 1 20 9 Q20 14 12 21 Z"/><circle cx="12" cy="9.5" r="2.6"/></svg>),
    },
  ];
  return (
    <section style={{ background: 'var(--white)', padding: '120px 0' }}>
      <div className="container">
        <PageSectionHeader
          number="01" label={t('At a glance', 'De un vistazo')}
          title={t('What you get', 'Qué obtienes')}
          accent={t('on day one.', 'desde el día uno.')}
          sub={t(
            'Coverage starts the day material leaves the yard. Register your PO online or by phone, both work.',
            'La cobertura empieza el día que el material sale de la sucursal. Registra tu orden en línea o por teléfono, ambas funcionan.'
          )}
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
          {cards.map((c, i) => (
            <article key={i} style={{
              background: 'var(--white)',
              border: '1.5px solid var(--ink)',
              padding: '32px 30px',
              minHeight: 240,
            }}>
              <div style={{ marginBottom: 24, color: 'var(--tangerine)' }}>{c.svg}</div>
              <h3 className="display" style={{
                margin: '0 0 12px', fontSize: 19,
                letterSpacing: '-0.005em', color: 'var(--ink)',
              }}>{t(c.title)}</h3>
              <p className="mono" style={{
                margin: 0, fontSize: 13, lineHeight: 1.65,
                color: 'var(--charcoal)',
              }}>{t(c.body)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const WarrantyMaterialTable = () => {
  const t = useT();
  return (
  <section style={{ background: '#ffffff', padding: '120px 0' }}>
    <div className="container">
      <PageSectionHeader
        number="02" label={t('Coverage by material', 'Cobertura por material')}
        title={t('Terms vary by system,', 'Los términos varían por sistema,')}
        accent={t('not by yard.', 'no por sucursal.')}
        sub={t(
          'The full legal warranty doc is on the spec sheet for each system. The table below is the short version.',
          'El documento legal completo de la garantía está en la hoja de specs de cada sistema. La tabla abajo es la versión corta.'
        )}
        link={[t('Download specs', 'Descargar specs'), 'specs.html']}
      />
      <div style={{ border: '1.5px solid var(--ink)', overflow: 'hidden' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 1.2fr',
          background: 'var(--ink)', color: 'var(--white)',
        }}>
          {[
            { EN: 'System',     ES: 'Sistema' },
            { EN: 'Structural', ES: 'Estructural' },
            { EN: 'Finish',     ES: 'Acabado' },
            { EN: 'Notes',      ES: 'Notas' },
          ].map((h, i) => (
            <div key={i} className="mono" style={{
              padding: '16px 18px',
              fontSize: 11, fontWeight: 700, letterSpacing: '0.22em',
              textTransform: 'uppercase',
              borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.15)',
            }}>{t(h)}</div>
          ))}
        </div>
        {[
          ['Vinyl / PVC',          { EN: 'Lifetime',  ES: 'De por vida' },     { EN: 'Lifetime UV',     ES: 'UV de por vida' },     { EN: 'Catalyst-extruded. No fading, peeling or rotting.',  ES: 'Extruido Catalyst. No se decolora, no se pela, no se pudre.' }],
          ['Aluminum',             { EN: 'Lifetime',  ES: 'De por vida' },     { EN: '20-year finish',  ES: 'Acabado 20 años' },    { EN: 'Powder-coat over marine-grade extrusion.',        ES: 'Pintura en polvo sobre extrusión grado marino.' }],
          [{ EN: 'Chain Link · Galv', ES: 'Malla · Galv' }, { EN: 'Rust-thru', ES: 'Hasta oxidación' }, '—',                          { EN: 'ASTM A392 zinc-coat. Salt-air rated.',              ES: 'Galvanizado ASTM A392. Resistente al aire salino.' }],
          [{ EN: 'Chain Link · PVC',  ES: 'Malla · PVC' },  { EN: 'Rust-thru', ES: 'Hasta oxidación' }, { EN: '15-year color', ES: 'Color 15 años' }, { EN: 'Black, green PVC-coated.',               ES: 'Recubrimiento PVC negro o verde.' }],
          ['Metal / DuraFence',    { EN: '20 years',  ES: '20 años' },          { EN: '10-year finish',  ES: 'Acabado 10 años' },    { EN: 'HVHZ-rated aluminum board.',                      ES: 'Tabla de aluminio con clasificación HVHZ.' }],
          ['EC Fence',             { EN: 'Lifetime',  ES: 'De por vida' },     { EN: '20-year finish',  ES: 'Acabado 20 años' },    { EN: 'Self-mating galv steel, Exp. C wind-load.',       ES: 'Acero galv. autoensamblable, carga eólica Exp. C.' }],
          [{ EN: 'Gates · welded', ES: 'Portones · soldados' }, { EN: '10 years', ES: '10 años' }, { EN: 'Per system', ES: 'Por sistema' }, { EN: 'WFS in-house weld + hardware coverage.', ES: 'Cobertura de soldadura interna WFS + hardware.' }],
        ].map((row, ri) => (
          <div key={ri} style={{
            display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 1.2fr',
            background: ri % 2 === 0 ? 'var(--white)' : '#ffffff',
            borderTop: '1px solid rgba(0,16,17,0.08)',
          }}>
            {row.map((cell, ci) => (
              <div key={ci} style={{
                padding: '16px 18px',
                fontSize: 13.5, lineHeight: 1.5,
                color: ci === 0 ? 'var(--ink)' : 'var(--ink)',
                fontWeight: ci === 0 ? 700 : 400,
                fontFamily: ci === 0 ? 'var(--mono)' : 'var(--sans)',
                letterSpacing: ci === 0 ? '0.06em' : 'normal',
                textTransform: ci === 0 ? 'uppercase' : 'none',
                borderLeft: ci === 0 ? 'none' : '1px solid rgba(0,16,17,0.08)',
              }}>{typeof cell === 'string' ? cell : t(cell)}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

const WarrantyExclusions = () => {
  const t = useT();
  const items = [
    [{ EN: 'Impact damage',             ES: 'Daño por impacto' },
     { EN: 'Vehicles, fallen trees, lawn equipment, intentional impact.',
        ES: 'Vehículos, árboles caídos, equipo de jardín, impacto intencional.' }],
    [{ EN: 'Acts of God beyond rated wind load', ES: 'Eventos de fuerza mayor sobre la carga eólica nominal' },
     { EN: "Hurricane damage above the system's rated wind speed (HVHZ rating per system).",
        ES: 'Daño por huracán arriba de la velocidad de viento nominal del sistema (clasificación HVHZ por sistema).' }],
    [{ EN: 'Improper installation',     ES: 'Instalación inadecuada' },
     { EN: 'Coverage assumes WFS spec install. Use a certified installer to keep terms intact.',
        ES: 'La cobertura asume instalación según specs WFS. Usa un instalador certificado para mantener los términos vigentes.' }],
    [{ EN: 'Normal cosmetic wear',      ES: 'Desgaste cosmético normal' },
     { EN: 'Scratches, dings, scuffs and minor surface abrasion from normal use.',
        ES: 'Rayones, golpes menores, marcas y abrasión superficial menor por uso normal.' }],
    [{ EN: 'Vandalism + theft',         ES: 'Vandalismo + robo' },
     { EN: 'Pickets cut, mesh sliced, hardware removed.',
        ES: 'Estacas cortadas, malla rasgada, hardware removido.' }],
    [{ EN: 'Modified material',         ES: 'Material modificado' },
     { EN: 'Posts cut down on-site, panels repainted with non-spec finish, etc.',
        ES: 'Postes recortados en obra, paneles repintados con acabados no autorizados, etc.' }],
  ];
  return (
    <section style={{ background: 'var(--white)', padding: '120px 0' }}>
      <div className="container">
        <PageSectionHeader
          number="03" label={t('Exclusions', 'Exclusiones')}
          title={t("What's not covered.", 'Qué no está cubierto.')}
          accent={t('No surprises.', 'Sin sorpresas.')}
          sub={t(
            "Manufacturer warranty doesn't cover damage you'd file with insurance. If you're unsure whether something qualifies, call us before opening a claim.",
            'La garantía del fabricante no cubre daños que normalmente reclamarías al seguro. Si no estás seguro si algo aplica, llámanos antes de abrir un reclamo.'
          )}
        />
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 0,
          border: '1.5px solid var(--ink)',
        }}>
          {items.map(([title, body], i) => (
            <div key={i} style={{
              padding: '24px 26px',
              borderRight: (i % 2 === 0) ? '1.5px solid var(--ink)' : 'none',
              borderBottom: (i < items.length - 2) ? '1.5px solid var(--ink)' : 'none',
              background: 'var(--white)',
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                <span style={{
                  width: 28, height: 28, flexShrink: 0,
                  border: '1.5px solid var(--ink)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--tangerine)',
                }}>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M4 4 L12 12 M12 4 L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
                <div>
                  <h3 className="display" style={{
                    margin: '0 0 6px', fontSize: 15,
                    letterSpacing: '-0.005em', color: 'var(--ink)',
                  }}>{t(title)}</h3>
                  <p className="mono" style={{
                    margin: 0, fontSize: 12.5, lineHeight: 1.6,
                    color: 'var(--charcoal)',
                  }}>{t(body)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WarrantyProcess = () => {
  const t = useT();
  const steps = [
    { n: '01', title: { EN: 'Document', ES: 'Documenta' },
      body: { EN: 'Take dated photos of the issue, find your original PO, and note install date if known.',
               ES: 'Toma fotos fechadas del problema, ubica tu orden original y anota la fecha de instalación si la sabes.' } },
    { n: '02', title: { EN: 'Submit',   ES: 'Envía' },
      body: { EN: 'Open a claim online or call the yard. Average response in 24 hours, often same-day.',
               ES: 'Abre un reclamo en línea o llama a la sucursal. Respuesta promedio en 24 horas, a menudo el mismo día.' } },
    { n: '03', title: { EN: 'Review',   ES: 'Revisión' },
      body: { EN: 'We review your photos and order details to confirm the claim, no site visit required.',
               ES: 'Revisamos tus fotos y los datos de la orden para confirmar el reclamo, sin visita al sitio.' } },
    { n: '04', title: { EN: 'Replace',  ES: 'Reemplazo' },
      body: { EN: 'Approved claims ship replacement material from stock, most within 1-2 business days.',
               ES: 'Los reclamos aprobados envían material de reemplazo desde stock, la mayoría en 1-2 días hábiles.' } },
  ];
  return (
    <section style={{ background: '#ffffff', padding: '120px 0' }}>
      <div className="container">
        <PageSectionHeader
          number="04" label={t('Process', 'Proceso')}
          title={t('From claim to', 'Del reclamo al')}
          accent={t('replacement.', 'reemplazo.')}
          sub={t(
            'The full lifecycle, end to end. Most homeowner claims close inside two weeks.',
            'El ciclo completo, de principio a fin. La mayoría de reclamos de propietarios se cierran en menos de dos semanas.'
          )}
          link={[t('Start a claim', 'Iniciar reclamo'), 'warranty-claims.html']}
        />
        <div style={{
          position: 'relative',
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 24,
        }}>
          {/* Connector */}
          <div aria-hidden style={{
            position: 'absolute', top: 36, left: '10%', right: '10%', height: 1,
            borderTop: '1px dashed rgba(38, 49, 102,0.2)',
            zIndex: 0, pointerEvents: 'none',
          }}/>
          {steps.map((s, i) => (
            <div key={s.n} style={{
              position: 'relative', zIndex: 1,
              background: 'var(--white)',
              border: '1.5px solid var(--ink)',
              padding: '24px 24px 28px',
            }}>
              <span className="mono" style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: 36, height: 36,
                background: 'var(--ink)',
                color: 'var(--white)',
                fontSize: 11, fontWeight: 700, letterSpacing: '0.05em',
                marginBottom: 22,
              }}>{s.n}</span>
              <h3 className="display" style={{
                margin: '0 0 10px', fontSize: 18,
                letterSpacing: '-0.005em', color: 'var(--ink)',
              }}>{t(s.title)}</h3>
              <p className="mono" style={{
                margin: 0, fontSize: 12.5, lineHeight: 1.6,
                color: 'var(--charcoal)',
              }}>{t(s.body)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WarrantyCTA = () => {
  const t = useT();
  return (
  <CTABand
    kicker={t('Need to start a claim?', '¿Necesitas iniciar un reclamo?')}
    title={t('Open a warranty claim,', 'Abre un reclamo de garantía,')}
    accent={t('we respond in 24 hours.', 'respondemos en 24 horas.')}
    body={t(
      'Have your PO number, install date and a few dated photos ready. Or call the yard and a rep will walk you through it.',
      'Ten a la mano tu número de orden, fecha de instalación y unas fotos fechadas. O llama a la sucursal y un representante te guía paso a paso.'
    )}
    primary={[t('Start a claim', 'Iniciar reclamo'), 'warranty-claims.html']}
    secondary={[t('Call (239) 689-5496', 'Llamar (239) 689-5496'), 'tel:2396895496']}
    theme="ink"
  />
  );
};

const WarrantyPage = () => (
  <>
    <SiteHeader active="Company" />
    <WarrantyHero />
    <WarrantyHighlights />
    <WarrantyMaterialTable />
    <WarrantyExclusions />
    <WarrantyProcess />
    <WarrantyCTA />
    <Footer />
  </>
);

/* ═══════════════════════════════════════════════════════════
   2. WARRANTY CLAIMS, Submit a claim
   ═══════════════════════════════════════════════════════════ */

const ClaimsHero = () => {
  const t = useT();
  return (
  <PageHero
    crumbs={[
      [t('Home', 'Inicio'), 'Homepage.html'],
      [t('Warranty', 'Garantía'), 'warranty.html'],
      [t('Submit a claim', 'Enviar reclamo'), null],
    ]}
    eyebrow={t('Warranty · Claims', 'Garantía · Reclamos')}
    title={t('Submit a warranty claim.', 'Envía un reclamo de garantía.')}
    accent={t('24-hour response.', 'Respuesta en 24 horas.')}
    subtitle={t(
      'One short form, four required fields. A rep follows up by phone the next business morning to schedule inspection or ship replacement material.',
      'Un formulario corto, cuatro campos obligatorios. Un representante hace seguimiento por teléfono la mañana hábil siguiente para agendar inspección o enviar material de reemplazo.'
    )}
    image="assets/gate-cantilever.jpg"
  />
  );
};

const ClaimsProcess = () => {
  const t = useT();
  const steps = [
    { n: '01', title: { EN: 'Find your PO', ES: 'Localiza tu orden' },
      body: { EN: "PO number is on your invoice or pickup slip. Don't have it? Call the yard, we look it up by phone, address or last name.",
               ES: 'El número de orden está en tu factura o ticket de recogida. ¿No lo tienes? Llama a la sucursal, lo buscamos por teléfono, dirección o apellido.' } },
    { n: '02', title: { EN: 'Photograph the issue', ES: 'Fotografía el problema' },
      body: { EN: 'Three dated photos minimum: wide shot, close-up, and one showing scale. Phone camera is fine.',
               ES: 'Mínimo tres fotos fechadas: toma abierta, primer plano y una que muestre escala. La cámara del celular funciona perfecto.' } },
    { n: '03', title: { EN: 'Submit the form', ES: 'Envía el formulario' },
      body: { EN: 'PO + install date + photos + a short description. Submit triggers an email confirmation with your claim number.',
               ES: 'Orden + fecha de instalación + fotos + descripción breve. Al enviar recibes confirmación por email con tu número de reclamo.' } },
    { n: '04', title: { EN: 'We come look', ES: 'Vamos a inspeccionar' },
      body: { EN: 'For in-county claims a WFS rep schedules inspection within 5 business days. Out-of-county we coordinate with your installer.',
               ES: 'En el condado, un representante WFS agenda inspección en 5 días hábiles. Fuera del condado coordinamos con tu instalador.' } },
  ];
  return (
    <section style={{ background: 'var(--white)', padding: '120px 0' }}>
      <div className="container">
        <PageSectionHeader
          number="01" label={t('Process', 'Proceso')}
          title={t('How a claim works.', 'Cómo funciona un reclamo.')}
          accent={t('Four steps.', 'Cuatro pasos.')}
          sub={t(
            'Most claims are resolved inside two weeks from first photo to replacement material in your hands.',
            'La mayoría de los reclamos se resuelven en menos de dos semanas, desde la primera foto hasta el material de reemplazo en tus manos.'
          )}
        />
        <div style={{
          position: 'relative',
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 24,
        }}>
          <div aria-hidden style={{
            position: 'absolute', top: 36, left: '10%', right: '10%', height: 1,
            borderTop: '1px dashed rgba(38, 49, 102,0.2)',
            zIndex: 0, pointerEvents: 'none',
          }}/>
          {steps.map((s, i) => (
            <div key={s.n} style={{
              position: 'relative', zIndex: 1,
              background: 'var(--white)',
              border: '1.5px solid var(--ink)',
              padding: '24px 24px 28px',
            }}>
              <span className="mono" style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: 36, height: 36,
                background: 'var(--ink)',
                color: 'var(--white)',
                fontSize: 11, fontWeight: 700, letterSpacing: '0.05em',
                marginBottom: 22,
              }}>{s.n}</span>
              <h3 className="display" style={{
                margin: '0 0 10px', fontSize: 18,
                letterSpacing: '-0.005em', color: 'var(--ink)',
              }}>{t(s.title)}</h3>
              <p className="mono" style={{
                margin: 0, fontSize: 12.5, lineHeight: 1.6,
                color: 'var(--charcoal)',
              }}>{t(s.body)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ClaimsForm = () => {
  const t = useT();
  const Field = ({ label, name, type = 'text', placeholder, required, children, span = 1 }) => (
    <div style={{ gridColumn: `span ${span}` }}>
      <label htmlFor={name} className="mono" style={{
        display: 'block', marginBottom: 8,
        fontSize: 10.5, fontWeight: 700, letterSpacing: '0.18em',
        textTransform: 'uppercase', color: 'var(--ink)',
      }}>
        {label} {required && <span style={{ color: 'var(--tangerine)' }}>*</span>}
      </label>
      {children || (
        <input
          id={name} name={name} type={type} placeholder={placeholder}
          style={{
            width: '100%', padding: '14px 16px',
            border: '1.5px solid var(--ink)', background: 'var(--white)',
            fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--ink)',
            outline: 'none',
          }}
        />
      )}
    </div>
  );

  return (
    <section style={{ background: '#ffffff', padding: '120px 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.7fr 1fr', gap: 56, alignItems: 'start' }}>
          {/* Left, form card */}
          <article style={{
            background: 'var(--white)',
            border: '1.5px solid var(--ink)',
            padding: '40px 44px',
            boxShadow: '8px 8px 0 var(--tangerine)',
          }}>
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              paddingBottom: 22, marginBottom: 28,
              borderBottom: '1px dashed rgba(38, 49, 102,0.18)',
            }}>
              <h3 className="display" style={{
                margin: 0, fontSize: 22, letterSpacing: '-0.01em', color: 'var(--ink)',
              }}>{t('Claim form', 'Formulario de reclamo')}</h3>
              <span className="mono" style={{
                fontSize: 10, fontWeight: 700, letterSpacing: '0.22em',
                color: 'var(--charcoal)', textTransform: 'uppercase',
              }}>{t('≈ 4 minutes', '≈ 4 minutos')}</span>
            </div>

            <form onSubmit={e => { e.preventDefault(); alert(t('Demo form, would submit to claims@westernfencesupply.com', 'Formulario demo, se enviaría a claims@westernfencesupply.com')); }}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>

              <Field label={t('Full name', 'Nombre completo')} name="name" required placeholder="Marisol R."/>
              <Field label={t('Phone', 'Teléfono')} name="phone" type="tel" required placeholder="(239) 555-0142"/>

              <Field label={t('Email', 'Correo')} name="email" type="email" required placeholder="you@email.com" span={2}/>

              <Field label={t('PO / Invoice #', 'Orden / # Factura')} name="po" required placeholder="e.g. WFS-2025-04812"/>
              <Field label={t('Install date', 'Fecha de instalación')} name="install" type="date" required/>

              <Field label={t('Material / system', 'Material / sistema')} name="material" span={2}>
                <select id="material" name="material" defaultValue=""
                  style={{
                    width: '100%', padding: '14px 16px',
                    border: '1.5px solid var(--ink)', background: 'var(--white)',
                    fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--ink)',
                    outline: 'none',
                  }}>
                  <option value="" disabled>{t('Select the system on your claim…', 'Selecciona el sistema de tu reclamo…')}</option>
                  <option>Vinyl / PVC</option>
                  <option>Aluminum</option>
                  <option>Chain Link · Galvanized</option>
                  <option>Chain Link · Vinyl-coated</option>
                  <option>Metal / DuraFence</option>
                  <option>EC Fence</option>
                  <option>{t('Welded gate', 'Portón soldado')}</option>
                  <option>Hardware</option>
                </select>
              </Field>

              <Field label={t("What's happening?", '¿Qué está pasando?')} name="description" required span={2}>
                <textarea id="description" name="description" rows={5}
                  placeholder={t(
                    'Briefly describe the issue, when you noticed it, and approx. linear feet affected.',
                    'Describe brevemente el problema, cuándo lo notaste y los pies lineales aproximados afectados.'
                  )}
                  style={{
                    width: '100%', padding: '14px 16px',
                    border: '1.5px solid var(--ink)', background: 'var(--white)',
                    fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--ink)',
                    outline: 'none', resize: 'vertical', minHeight: 120,
                  }}/>
              </Field>

              <Field label={t('Photos (min. 3)', 'Fotos (mín. 3)')} name="photos" span={2}>
                <div style={{
                  border: '1.5px dashed var(--ink)', background: '#ffffff',
                  padding: '28px 22px', textAlign: 'center',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
                }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="6" width="18" height="14" rx="1"/>
                    <circle cx="12" cy="13" r="3.5"/>
                    <path d="M8 6 L9.5 4 H14.5 L16 6"/>
                  </svg>
                  <div className="mono" style={{
                    fontSize: 12, fontWeight: 700, letterSpacing: '0.14em',
                    textTransform: 'uppercase', color: 'var(--ink)',
                  }}>{t('Drag photos here, or click to browse', 'Arrastra fotos aquí, o haz clic para buscar')}</div>
                  <div className="mono" style={{ fontSize: 10.5, color: 'var(--charcoal)', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                    JPG / PNG / HEIC · 20 MB {t('max', 'máx')}
                  </div>
                  <input type="file" id="photos" name="photos" accept="image/*" multiple style={{ display: 'none' }}/>
                </div>
              </Field>

              <div style={{ gridColumn: 'span 2', display: 'flex', gap: 16, alignItems: 'center', marginTop: 8, flexWrap: 'wrap' }}>
                <button type="submit" style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  padding: '16px 36px',
                  background: 'var(--ink)', color: 'var(--white)',
                  fontFamily: 'var(--sans)', fontSize: 12.5, fontWeight: 700,
                  letterSpacing: '0.18em', textTransform: 'uppercase',
                  border: 'none', cursor: 'pointer',
                  boxShadow: '6px 6px 0 var(--tangerine)',
                  transition: 'transform 0.18s ease, box-shadow 0.18s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-2px,-2px)'; e.currentTarget.style.boxShadow = '8px 8px 0 var(--tangerine)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '6px 6px 0 var(--tangerine)'; }}>
                  {t('Submit claim', 'Enviar reclamo')}
                </button>
                <span className="mono" style={{
                  fontSize: 10.5, fontWeight: 700, letterSpacing: '0.16em',
                  textTransform: 'uppercase', color: 'var(--charcoal)',
                }}>
                  {t("You'll get a claim number by email", 'Recibirás un número de reclamo por email')}
                </span>
              </div>
            </form>
          </article>

          {/* Right, help sidebar */}
          <aside style={{ position: 'sticky', top: 100, display: 'grid', gap: 16 }}>
            <div style={{
              background: 'var(--ink)', color: 'var(--white)',
              padding: '28px 28px 26px',
            }}>
              <div className="mono" style={{
                fontSize: 10, fontWeight: 700, letterSpacing: '0.22em',
                color: 'var(--tangerine)', textTransform: 'uppercase',
                marginBottom: 14,
                display: 'flex', alignItems: 'center', gap: 10,
              }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff7133', boxShadow: '0 0 0 3px rgba(255, 113, 51,0.25)' }}/>
                {t('Live · 7am - 4pm EST', 'En vivo · 7am - 4pm EST')}
              </div>
              <h3 className="display" style={{
                margin: '0 0 16px', fontSize: 22, lineHeight: 1.1, color: 'var(--white)',
              }}>{t("Can't find your PO?", '¿No encuentras tu orden?')}</h3>
              <p className="mono" style={{
                margin: '0 0 22px', fontSize: 13, lineHeight: 1.65,
                color: 'rgba(255,255,255,0.78)',
              }}>
                {t(
                  'Call the yard. We pull the order by phone, address, or last name in under two minutes.',
                  'Llama a la sucursal. Localizamos la orden por teléfono, dirección o apellido en menos de dos minutos.'
                )}
              </p>
              <a href="tel:2396895496" className="display" style={{
                display: 'block', marginBottom: 6,
                fontSize: 22, color: 'var(--white)', lineHeight: 1.1,
                letterSpacing: '-0.005em',
              }}>(239) 689-5496</a>
              <a href="mailto:claims@westernfencesupply.com" className="mono" style={{
                display: 'block', wordBreak: 'break-all',
                fontSize: 12, color: 'rgba(255,255,255,0.7)',
              }}>claims@westernfencesupply.com</a>
            </div>

            <div style={{
              background: 'var(--white)',
              border: '1.5px solid var(--ink)',
              padding: '24px 26px',
            }}>
              <div className="mono" style={{
                fontSize: 10, fontWeight: 700, letterSpacing: '0.22em',
                color: 'var(--tangerine)', textTransform: 'uppercase',
                marginBottom: 14,
              }}>{t('What to expect', 'Qué esperar')}</div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 12 }}>
                {[
                  [{ EN: 'Response window',    ES: 'Ventana de respuesta' },     { EN: '≤ 24 business hrs',  ES: '≤ 24 hrs hábiles' }],
                  [{ EN: 'In-county inspect',  ES: 'Inspección en el condado' }, { EN: '≤ 5 business days',  ES: '≤ 5 días hábiles' }],
                  [{ EN: 'Stock-item replace', ES: 'Reemplazo en stock' },        { EN: '1-2 business days',  ES: '1-2 días hábiles' }],
                  [{ EN: 'Welded re-fab',      ES: 'Re-fabricación soldada' },    { EN: '5-10 business days', ES: '5-10 días hábiles' }],
                ].map(([k, v], i) => (
                  <li key={i} style={{
                    display: 'flex', justifyContent: 'space-between',
                    paddingBottom: 10, borderBottom: '1px dashed rgba(38, 49, 102,0.18)',
                  }}>
                    <span className="mono" style={{ fontSize: 12, color: 'var(--charcoal)' }}>{t(k)}</span>
                    <span className="mono" style={{
                      fontSize: 12, fontWeight: 700, color: 'var(--ink)',
                    }}>{t(v)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

const ClaimsCTA = () => {
  const t = useT();
  return (
  <CTABand
    kicker={t("Not sure if it's covered?", '¿No estás seguro si está cubierto?')}
    title={t('Read the warranty doc', 'Lee el documento de garantía')}
    accent={t('before you file.', 'antes de presentar tu reclamo.')}
    body={t(
      'Coverage, exclusions and material-specific terms in one page. Two minutes to scan.',
      'Cobertura, exclusiones y términos por material en una sola página. Dos minutos de lectura.'
    )}
    primary={[t('Read the warranty', 'Leer la garantía'), 'warranty.html']}
    secondary={[t('Call the yard', 'Llamar a la sucursal'), 'tel:2396895496']}
  />
  );
};

const WarrantyClaimsPage = () => (
  <>
    <SiteHeader active="Company" />
    <ClaimsHero />
    <ClaimsProcess />
    <ClaimsForm />
    <ClaimsCTA />
    <Footer />
  </>
);

/* ═══════════════════════════════════════════════════════════
   3. SPECS, Manufacturer Specs library
   ═══════════════════════════════════════════════════════════ */

const SpecsHero = () => {
  const t = useT();
  return (
  <PageHero
    crumbs={[
      [t('Home', 'Inicio'), 'Homepage.html'],
      [t('Warranty', 'Garantía'), 'warranty.html'],
      [t('Manufacturer Specs', 'Specs del fabricante'), null],
    ]}
    eyebrow={t('Warranty · Specs', 'Garantía · Specs')}
    title={t('Manufacturer specs,', 'Specs del fabricante,')}
    accent={t('ready to send.', 'listas para enviar.')}
    subtitle={t(
      'PDF spec sheets, profile drawings and wind-load data for every system we stock. Formatted for AHJ submission and HOA review. Stamped copies on request.',
      'Hojas técnicas PDF, dibujos de perfil y datos de carga eólica para cada sistema que manejamos. Formateadas para presentación AHJ y revisión HOA. Copias selladas a solicitud.'
    )}
    image="assets/ECFENCE.png"
  />
  );
};

const SpecsLibrary = () => {
  const t = useT();
  const [filter, setFilter] = React.useState('All');
  const docs = [
    // Fences
    { cat: 'Fences', title: 'Vinyl Privacy + Picket Profiles',     meta: 'PDF · 1.1 MB · 24 pages',  rev: 'Rev. 2026.02' },
    { cat: 'Fences', title: 'Aluminum 3 / 4 / 5 Rail Systems',     meta: 'PDF · 980 KB · 18 pages',  rev: 'Rev. 2026.01' },
    { cat: 'Fences', title: 'Chain Link, Gauges + Mesh Chart',    meta: 'PDF · 620 KB · 8 pages',   rev: 'Rev. 2025.11' },
    { cat: 'Fences', title: 'DuraFence, Metal Board Privacy',  meta: 'PDF · 1.4 MB · 22 pages',  rev: 'Rev. 2025.12' },
    { cat: 'Fences', title: 'EC Fence, Exposure C Wind Load',     meta: 'PDF · 1.2 MB · 16 pages',  rev: 'Rev. 2026.01', isNew: true },
    // Gates
    { cat: 'Gates',  title: 'Single + Double Swing Gates',         meta: 'PDF · 740 KB · 12 pages',  rev: 'Rev. 2025.10' },
    { cat: 'Gates',  title: 'Sliding + Cantilever Gates',          meta: 'PDF · 980 KB · 18 pages',  rev: 'Rev. 2025.12' },
    { cat: 'Gates',  title: 'Industrial Rolling Gates',            meta: 'PDF · 820 KB · 14 pages',  rev: 'Rev. 2025.10' },
    { cat: 'Gates',  title: 'Gate Hardware + Latch Catalog',       meta: 'PDF · 540 KB · 10 pages',  rev: 'Rev. 2025.09' },
    // Code
    { cat: 'Code',   title: 'Florida Pool Code, Profile Sheet',   meta: 'PDF · 1.6 MB · 20 pages',  rev: 'Rev. 2026.01' },
    { cat: 'Code',   title: 'HVHZ Wind-Load Letter (Miami-Dade)',  meta: 'PDF · 320 KB · 4 pages',   rev: 'Rev. 2026.01' },
    { cat: 'Code',   title: 'NEC Bonding for Metallic Fences',     meta: 'PDF · 280 KB · 4 pages',   rev: 'Rev. 2025.08' },
    // Finishes
    { cat: 'Finishes', title: 'Powder-coat Color Library',         meta: 'PDF · 1.8 MB · 32 pages',  rev: 'Rev. 2026.01' },
    { cat: 'Finishes', title: 'PVC Color Chart, Vinyl-coated',    meta: 'PDF · 460 KB · 4 pages',   rev: 'Rev. 2025.11' },
  ];
  const cats = ['All', 'Fences', 'Gates', 'Code', 'Finishes'];
  const visible = filter === 'All' ? docs : docs.filter(d => d.cat === filter);

  return (
    <section style={{ background: 'var(--white)', padding: '120px 0' }}>
      <div className="container">
        <PageSectionHeader
          number="01" label={t('Library', 'Biblioteca')}
          title={t('The full library,', 'La biblioteca completa,')}
          accent={t('filtered or browsed.', 'filtrada o explorada.')}
          sub={t(
            'Pick a category or scan the whole list. Every doc carries a revision date, older revs available on request.',
            'Elige una categoría o explora la lista completa. Cada documento tiene fecha de revisión, versiones anteriores disponibles a solicitud.'
          )}
        />
        {/* Filter chips */}
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 28 }}>
          {cats.map(c => {
            const active = filter === c;
            const catLabels = {
              All: { EN: 'All', ES: 'Todos' },
              Fences: { EN: 'Fences', ES: 'Cercas' },
              Gates: { EN: 'Gates', ES: 'Portones' },
              Code: { EN: 'Code', ES: 'Código' },
              Finishes: { EN: 'Finishes', ES: 'Acabados' },
            };
            return (
              <button key={c} onClick={() => setFilter(c)} className="mono" style={{
                padding: '10px 18px',
                background: active ? 'var(--ink)' : 'var(--white)',
                color: active ? 'var(--white)' : 'var(--ink)',
                border: '1.5px solid var(--ink)',
                fontSize: 11, fontWeight: 700, letterSpacing: '0.18em',
                textTransform: 'uppercase', cursor: 'pointer',
                transition: 'all 0.18s ease',
              }}>{t(catLabels[c])}</button>
            );
          })}
          <span className="mono" style={{
            marginLeft: 'auto', alignSelf: 'center',
            fontSize: 10.5, fontWeight: 700, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: 'var(--charcoal)',
          }}>{visible.length} {t(visible.length === 1 ? 'document' : 'documents', visible.length === 1 ? 'documento' : 'documentos')}</span>
        </div>
        {/* Downloads grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
          {visible.map((d, i) => (
            <a key={d.title} href="#"
              onClick={e => e.preventDefault()}
              style={{
                display: 'flex', alignItems: 'center', gap: 18,
                padding: '22px 24px',
                border: '1.5px solid var(--ink)',
                background: 'var(--white)', color: 'var(--ink)',
                position: 'relative',
                transition: 'transform 0.18s ease, box-shadow 0.18s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '6px 6px 0 var(--tangerine)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
              {/* PDF tile */}
              <span style={{
                width: 56, height: 56, flexShrink: 0,
                background: 'var(--ink)', color: 'var(--white)',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--sans)', fontSize: 10, fontWeight: 700,
                letterSpacing: '0.12em',
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 3 H15 L19 7 V21 H7 Z"/>
                  <path d="M15 3 V7 H19"/>
                </svg>
                <span style={{ marginTop: 2 }}>PDF</span>
              </span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                  <span className="mono" style={{
                    fontSize: 9.5, fontWeight: 700, letterSpacing: '0.22em',
                    color: 'var(--tangerine)', textTransform: 'uppercase',
                  }}>{d.cat}</span>
                  {d.isNew && (
                    <span className="mono" style={{
                      padding: '2px 8px',
                      background: 'var(--tangerine)', color: 'var(--white)',
                      fontSize: 8.5, fontWeight: 700, letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                    }}>{t('New', 'Nuevo')}</span>
                  )}
                </div>
                <div style={{
                  fontSize: 14.5, fontWeight: 600, color: 'var(--ink)',
                  lineHeight: 1.35, marginBottom: 6,
                }}>{d.title}</div>
                <div style={{
                  display: 'flex', gap: 12, flexWrap: 'wrap',
                  fontFamily: 'var(--mono)', fontSize: 10.5,
                  letterSpacing: '0.14em', textTransform: 'uppercase',
                  color: 'var(--charcoal)', fontWeight: 700,
                }}>
                  <span>{d.meta}</span>
                  <span>·</span>
                  <span>{d.rev}</span>
                </div>
              </div>
              <span style={{
                flexShrink: 0,
                width: 36, height: 36,
                background: 'var(--tangerine)', color: 'var(--white)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2v10m0 0l-4-4m4 4l4-4M3 14h12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="square"/>
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const SpecsStamped = () => {
  const t = useT();
  return (
  <section style={{ background: '#ffffff', padding: '120px 0' }}>
    <div className="container">
      <div style={{
        display: 'grid', gridTemplateColumns: '1.2fr 1fr',
        gap: 48, alignItems: 'center',
        background: 'var(--ink)', color: 'var(--white)',
        padding: '56px 56px',
        boxShadow: '12px 12px 0 var(--tangerine)',
      }}>
        <div>
          <h2 className="display" style={{
            margin: '0 0 18px', fontSize: 'clamp(26px, 3vw, 38px)',
            lineHeight: 1.05, letterSpacing: '-0.015em', color: 'var(--white)',
          }}>
            {t('Need a stamped', '¿Necesitas una copia')}<br/>{t('copy for AHJ?', 'sellada para el AHJ?')}
          </h2>
          <p className="mono" style={{
            margin: 0, fontSize: 14, lineHeight: 1.7,
            color: 'rgba(255,255,255,0.78)', maxWidth: 480,
          }}>
            {t(
              'We have a licensed FL Professional Engineer on retainer for stamped wind-load letters, structural calcs and HVHZ submission packages. Stamped requests are available on most products.',
              'Tenemos un Ingeniero Profesional licenciado de FL en retainer para cartas selladas de carga eólica, cálculos estructurales y paquetes de presentación HVHZ. La mayoría de solicitudes selladas se cierran en 5-7 días hábiles.'
            )}
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <a href="mailto:engineering@westernfencesupply.com" style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            padding: '16px 28px',
            background: 'var(--tangerine)', color: 'var(--white)',
            fontFamily: 'var(--sans)', fontSize: 12, fontWeight: 700,
            letterSpacing: '0.18em', textTransform: 'uppercase',
          }}>{t('Request stamped doc', 'Solicitar doc sellado')}</a>
          <a href="tel:2396895496" style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            padding: '16px 28px',
            background: 'transparent', color: 'var(--white)',
            border: '1.5px solid rgba(255,255,255,0.5)',
            fontFamily: 'var(--sans)', fontSize: 12, fontWeight: 700,
            letterSpacing: '0.18em', textTransform: 'uppercase',
          }}>(239) 689-5496</a>
        </div>
      </div>
    </div>
  </section>
  );
};

const SpecsCTA = () => {
  const t = useT();
  return (
  <CTABand
    kicker={t("Don't see what you need?", '¿No ves lo que necesitas?')}
    title={t('Email engineering,', 'Escribe a ingeniería,')}
    accent={t("we'll cut it for you.", 'lo preparamos para ti.')}
    body={t(
      'Custom specs, color drops, project-specific cut sheets, we generate one-off PDFs for HOAs, AHJs and commercial submittals.',
      'Specs a medida, paletas de color, hojas de corte por proyecto, generamos PDFs únicos para HOAs, AHJs y presentaciones comerciales.'
    )}
    primary={[t('Request custom spec', 'Solicitar spec a medida'), 'mailto:engineering@westernfencesupply.com']}
    secondary={[t('Browse warranty', 'Ver garantía'), 'warranty.html']}
  />
  );
};

const SpecsPage = () => (
  <>
    <SiteHeader active="Company" />
    <SpecsHero />
    <SpecsLibrary />
    <SpecsStamped />
    <SpecsCTA />
    <Footer />
  </>
);

Object.assign(window, {
  WarrantyHero, WarrantyHighlights, WarrantyMaterialTable, WarrantyExclusions,
  WarrantyProcess, WarrantyCTA, WarrantyPage,
  ClaimsHero, ClaimsProcess, ClaimsForm, ClaimsCTA, WarrantyClaimsPage,
  SpecsHero, SpecsLibrary, SpecsStamped, SpecsCTA, SpecsPage,
});
