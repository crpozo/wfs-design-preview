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
      'Material-specific terms below, written in plain English. Manufacturer-backed, transferable to the next owner, and claimable from either yard.', 'Términos específicos por material abajo, en lenguaje claro. Respaldada por el fabricante, transferible al siguiente dueño, y reclamable desde cualquier sucursal.'
    )}
    image="assets/ec-fence.jpg"
  />
  );
};

const WarrantyHighlights = () => {
  const t = useT();
  const cards = [
    {
      title: { EN: 'Manufacturer-backed', ES: 'Respaldada por el fabricante' }, body:  { EN: 'Every system we sell is covered by the original manufacturer warranty plus our in-house workmanship guarantee on welded and fabricated assemblies.', ES: 'Cada sistema que vendemos está cubierto por la garantía original del fabricante más nuestra garantía interna de mano de obra en ensambles soldados y fabricados.' }, svg: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 L19 6 V12 Q19 17 12 21 Q5 17 5 12 V6 Z"/><path d="M9 12 L11 14 L15 10"/></svg>), }, {
      title: { EN: 'Transferable', ES: 'Transferible' }, body:  { EN: 'Sell the house, the warranty goes with it. New owners can register with original PO + closing date and keep full coverage.', ES: 'Vendes la casa, la garantía va con ella. Los nuevos dueños se registran con la PO original + fecha de cierre y mantienen cobertura completa.' }, svg: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12 H20"/><path d="M14 6 L20 12 L14 18"/><path d="M10 18 L4 12 L10 6"/></svg>), }, {
      title: { EN: 'Honored at both yards', ES: 'Válida en ambas sucursales' }, body:  { EN: 'Claim from Fort Myers or Port Charlotte. Same rep network, same SKUs in stock, same turnaround on warranty replacements.', ES: 'Reclama desde Fort Myers o Port Charlotte. La misma red de representantes, mismos SKUs en stock, mismos plazos en reemplazos de garantía.' }, svg: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21 Q4 14 4 9 A8 8 0 0 1 20 9 Q20 14 12 21 Z"/><circle cx="12" cy="9.5" r="2.6"/></svg>), }, ];
  return (
    <section style={{ background: 'var(--white)', padding: '120px 0' }}>
      <div className="container">
        <PageSectionHeader
          number="01" label={t('At a glance', 'De un vistazo')}
          title={t('What you get', 'Qué obtienes')}
          accent={t('on day one.', 'desde el día uno.')}
          sub={t(
            'Coverage starts the day material leaves the yard. Register your PO online or by phone, both work.', 'La cobertura empieza el día que el material sale de la sucursal. Registra tu orden en línea o por teléfono, ambas funcionan.'
          )}
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
          {cards.map((c, i) => (
            <article key={i} style={{
              background: 'var(--white)', border: '1.5px solid var(--ink)', padding: '32px 30px', minHeight: 240, }}>
              <div style={{ marginBottom: 24, color: 'var(--tangerine)' }}>{c.svg}</div>
              <h3 className="display" style={{
                margin: '0 0 12px', fontSize: 20.5, letterSpacing: '-0.005em', color: 'var(--ink)', }}>{t(c.title)}</h3>
              <p className="mono" style={{
                margin: 0, fontSize: 14.5, lineHeight: 1.65, color: 'var(--charcoal)', }}>{t(c.body)}</p>
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
          'The full legal warranty doc is on the spec sheet for each system. The table below is the short version.', 'El documento legal completo de la garantía está en la hoja de specs de cada sistema. La tabla abajo es la versión corta.'
        )}
        link={[t('Download specs', 'Descargar specs'), 'specs.html']}
      />
      <div style={{ border: '1.5px solid var(--ink)', overflow: 'hidden' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 1.2fr', background: 'var(--ink)', color: 'var(--white)', }}>
          {[
            { EN: 'System', ES: 'Sistema' }, { EN: 'Structural', ES: 'Estructural' }, { EN: 'Finish', ES: 'Acabado' }, { EN: 'Notes', ES: 'Notas' }, ].map((h, i) => (
            <div key={i} className="mono" style={{
              padding: '16px 18px', fontSize: 14, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.15)', }}>{t(h)}</div>
          ))}
        </div>
        {[
          ['Vinyl / PVC', { EN: 'Lifetime', ES: 'De por vida' }, { EN: 'Lifetime UV', ES: 'UV de por vida' }, { EN: 'Catalyst-extruded. No fading, peeling or rotting.', ES: 'Extruido Catalyst. No se decolora, no se pela, no se pudre.' }], ['Aluminum', { EN: 'Lifetime', ES: 'De por vida' }, { EN: '20-year finish', ES: 'Acabado 20 años' }, { EN: 'Powder-coat over marine-grade extrusion.', ES: 'Pintura en polvo sobre extrusión grado marino.' }], [{ EN: 'Chain Link · Galv', ES: 'Malla · Galv' }, { EN: 'Rust-thru', ES: 'Contra perforación por óxido' }, '—', { EN: 'ASTM A392 zinc-coat. Salt-air rated.', ES: 'Galvanizado ASTM A392. Resistente al aire salino.' }], [{ EN: 'Chain Link · PVC', ES: 'Malla · PVC' }, { EN: 'Rust-thru', ES: 'Contra perforación por óxido' }, { EN: '15-year color', ES: 'Color 15 años' }, { EN: 'Black, green PVC-coated.', ES: 'Recubrimiento PVC negro o verde.' }], ['Metal / DuraFence', { EN: '20 years', ES: '20 años' }, { EN: '10-year finish', ES: 'Acabado 10 años' }, { EN: 'HVHZ-rated aluminum board.', ES: 'Tabla de aluminio con clasificación HVHZ.' }], ['EC Fence', { EN: 'Lifetime', ES: 'De por vida' }, { EN: '20-year finish', ES: 'Acabado 20 años' }, { EN: 'Self-mating galv steel, Exp. C wind-load.', ES: 'Acero galv. autoensamblable, carga eólica Exp. C.' }], [{ EN: 'Gates · welded', ES: 'Portones · soldados' }, { EN: '10 years', ES: '10 años' }, { EN: 'Per system', ES: 'Por sistema' }, { EN: 'WFS in-house weld + hardware coverage.', ES: 'Cobertura de soldadura en planta WFS + herrajes.' }], ].map((row, ri) => (
          <div key={ri} style={{
            display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 1.2fr', background: ri % 2 === 0 ? 'var(--white)' : '#ffffff', borderTop: '1px solid rgba(0,16,17,0.08)', }}>
            {row.map((cell, ci) => (
              <div key={ci} style={{
                padding: '16px 18px', fontSize: 15, lineHeight: 1.5, color: ci === 0 ? 'var(--ink)' : 'var(--ink)', fontWeight: ci === 0 ? 700 : 400, fontFamily: ci === 0 ? 'var(--mono)' : 'var(--sans)', letterSpacing: ci === 0 ? '0.06em' : 'normal', textTransform: ci === 0 ? 'uppercase' : 'none', borderLeft: ci === 0 ? 'none' : '1px solid rgba(0,16,17,0.08)', }}>{typeof cell === 'string' ? cell : t(cell)}</div>
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
    [{ EN: 'Impact damage', ES: 'Daño por impacto' }, { EN: 'Vehicles, fallen trees, lawn equipment, intentional impact.', ES: 'Vehículos, árboles caídos, equipo de jardín, impacto intencional.' }], [{ EN: 'Acts of God beyond rated wind load', ES: 'Eventos de fuerza mayor por encima de la carga eólica nominal' }, { EN: "Hurricane damage above the system's rated wind speed (HVHZ rating per system).", ES: 'Daño por huracán por encima de la velocidad de viento nominal del sistema (clasificación HVHZ por sistema).' }], [{ EN: 'Improper installation', ES: 'Instalación inadecuada' }, { EN: 'Coverage assumes WFS spec install. Use a certified installer to keep terms intact.', ES: 'La cobertura asume instalación según specs WFS. Usa un instalador certificado para mantener los términos vigentes.' }], [{ EN: 'Normal cosmetic wear', ES: 'Desgaste cosmético normal' }, { EN: 'Scratches, dings, scuffs and minor surface abrasion from normal use.', ES: 'Rayones, golpes menores, marcas y abrasión superficial menor por uso normal.' }], [{ EN: 'Vandalism + theft', ES: 'Vandalismo + robo' }, { EN: 'Pickets cut, mesh sliced, hardware removed.', ES: 'Pickets cortados, malla rasgada, herrajes retirados.' }], [{ EN: 'Modified material', ES: 'Material modificado' }, { EN: 'Posts cut down on-site, panels repainted with non-spec finish, etc.', ES: 'Postes recortados en obra, paneles repintados con acabados no autorizados, etc.' }], ];
  return (
    <section style={{ background: 'var(--white)', padding: '120px 0' }}>
      <div className="container">
        <PageSectionHeader
          number="03" label={t('Exclusions', 'Exclusiones')}
          title={t("What's not covered.", 'Qué no está cubierto.')}
          accent={t('No surprises.', 'Sin sorpresas.')}
          sub={t(
            "Manufacturer warranty doesn't cover damage you'd file with insurance. If you're unsure whether something qualifies, call us before opening a claim.", 'La garantía del fabricante no cubre daños que normalmente reclamarías al seguro. Si no estás seguro si algo aplica, llámanos antes de abrir un reclamo.'
          )}
        />
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0, border: '1.5px solid var(--ink)', }}>
          {items.map(([title, body], i) => (
            <div key={i} style={{
              padding: '24px 26px', borderRight: (i % 2 === 0) ? '1.5px solid var(--ink)' : 'none', borderBottom: (i < items.length - 2) ? '1.5px solid var(--ink)' : 'none', background: 'var(--white)', }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                <span style={{
                  width: 28, height: 28, flexShrink: 0, border: '1.5px solid var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--tangerine)', }}>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M4 4 L12 12 M12 4 L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
                <div>
                  <h3 className="display" style={{
                    margin: '0 0 6px', fontSize: 16.5, letterSpacing: '-0.005em', color: 'var(--ink)', }}>{t(title)}</h3>
                  <p className="mono" style={{
                    margin: 0, fontSize: 14.5, lineHeight: 1.6, color: 'var(--charcoal)', }}>{t(body)}</p>
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
    { n: '01', title: { EN: 'Document', ES: 'Documenta' }, body: { EN: 'Take dated photos of the issue, find your original PO, and note install date if known.', ES: 'Toma fotos fechadas del problema, ubica tu orden original y anota la fecha de instalación si la sabes.' } }, { n: '02', title: { EN: 'Submit', ES: 'Envía' }, body: { EN: 'Open a claim online or call the yard. Average response in 24 hours, often same-day.', ES: 'Abre un reclamo en línea o llama a la sucursal. Respuesta promedio en 24 horas, a menudo el mismo día.' } }, { n: '03', title: { EN: 'Review', ES: 'Revisión' }, body: { EN: 'We review your photos and order details to confirm the claim, no site visit required.', ES: 'Revisamos tus fotos y los datos de la orden para confirmar el reclamo, sin visita al sitio.' } }, { n: '04', title: { EN: 'Replace', ES: 'Reemplazo' }, body: { EN: 'Approved claims ship replacement material from stock, most within 1-2 business days.', ES: 'Los reclamos aprobados envían material de reemplazo desde stock, la mayoría en 1-2 días hábiles.' } }, ];
  return (
    <section style={{ background: '#ffffff', padding: '120px 0' }}>
      <div className="container">
        <PageSectionHeader
          number="04" label={t('Process', 'Proceso')}
          title={t('From claim to', 'Del reclamo al')}
          accent={t('replacement.', 'reemplazo.')}
          sub={t(
            'The full lifecycle, end to end. Most homeowner claims close inside two weeks.', 'El ciclo completo, de principio a fin. La mayoría de reclamos de propietarios se cierran en menos de dos semanas.'
          )}
          link={[t('Start a claim', 'Iniciar reclamo'), 'warranty-claims.html']}
        />
        <div style={{
          position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, }}>
          {/* Connector */}
          <div aria-hidden style={{
            position: 'absolute', top: 36, left: '10%', right: '10%', height: 1, borderTop: '1px dashed rgba(38, 49, 102,0.2)', zIndex: 0, pointerEvents: 'none', }}/>
          {steps.map((s, i) => (
            <div key={s.n} style={{
              position: 'relative', zIndex: 1, background: 'var(--white)', border: '1.5px solid var(--ink)', padding: '24px 24px 28px', }}>
              <span className="mono" style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, background: 'var(--ink)', color: 'var(--white)', fontSize: 14, fontWeight: 700, letterSpacing: '0.05em', marginBottom: 22, }}>{s.n}</span>
              <h3 className="display" style={{
                margin: '0 0 10px', fontSize: 19.5, letterSpacing: '-0.005em', color: 'var(--ink)', }}>{t(s.title)}</h3>
              <p className="mono" style={{
                margin: 0, fontSize: 14.5, lineHeight: 1.6, color: 'var(--charcoal)', }}>{t(s.body)}</p>
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
      'Have your PO number, install date and a few dated photos ready. Or call the yard and a rep will walk you through it.', 'Ten a la mano tu número de orden, fecha de instalación y unas fotos fechadas. O llama a la sucursal y un representante te guía paso a paso.'
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
      [t('Home', 'Inicio'), 'Homepage.html'], [t('Warranty', 'Garantía'), 'warranty.html'], [t('Submit a claim', 'Enviar reclamo'), null], ]}
    eyebrow={t('Warranty · Claims', 'Garantía · Reclamos')}
    title={t('Submit a warranty claim.', 'Envía un reclamo de garantía.')}
    accent={t('24-hour response.', 'Respuesta en 24 horas.')}
    subtitle={t(
      'One short form, four required fields. A rep follows up by phone the next business morning to schedule inspection or ship replacement material.', 'Un formulario corto, cuatro campos obligatorios. Un representante hace seguimiento por teléfono la mañana hábil siguiente para agendar inspección o enviar material de reemplazo.'
    )}
    image="assets/gate-cantilever.webp"
  />
  );
};

const ClaimsProcess = () => {
  const t = useT();
  const steps = [
    { n: '01', title: { EN: 'Find your PO', ES: 'Localiza tu orden' }, body: { EN: "PO number is on your invoice or pickup slip. Don't have it? Call the yard, we look it up by phone, address or last name.", ES: 'El número de orden está en tu factura o ticket de recogida. ¿No lo tienes? Llama a la sucursal, lo buscamos por teléfono, dirección o apellido.' } }, { n: '02', title: { EN: 'Photograph the issue', ES: 'Fotografía el problema' }, body: { EN: 'Three dated photos minimum: wide shot, close-up, and one showing scale. Phone camera is fine.', ES: 'Mínimo tres fotos fechadas: toma abierta, primer plano y una que muestre escala. La cámara del celular funciona perfecto.' } }, { n: '03', title: { EN: 'Submit the form', ES: 'Envía el formulario' }, body: { EN: 'PO + install date + photos + a short description. Submit triggers an email confirmation with your claim number.', ES: 'Orden + fecha de instalación + fotos + descripción breve. Al enviar recibes confirmación por email con tu número de reclamo.' } }, { n: '04', title: { EN: 'We come look', ES: 'Vamos a inspeccionar' }, body: { EN: 'For in-county claims a WFS rep schedules inspection within 5 business days. Out-of-county we coordinate with your installer.', ES: 'En el condado, un representante WFS agenda inspección en 5 días hábiles. Fuera del condado coordinamos con tu instalador.' } }, ];
  return (
    <section style={{ background: 'var(--white)', padding: '120px 0' }}>
      <div className="container">
        <PageSectionHeader
          number="01" label={t('Process', 'Proceso')}
          title={t('How a claim works.', 'Cómo funciona un reclamo.')}
          accent={t('Four steps.', 'Cuatro pasos.')}
          sub={t(
            'Most claims are resolved inside two weeks from first photo to replacement material in your hands.', 'La mayoría de los reclamos se resuelven en menos de dos semanas, desde la primera foto hasta el material de reemplazo en tus manos.'
          )}
        />
        <div style={{
          position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, }}>
          <div aria-hidden style={{
            position: 'absolute', top: 36, left: '10%', right: '10%', height: 1, borderTop: '1px dashed rgba(38, 49, 102,0.2)', zIndex: 0, pointerEvents: 'none', }}/>
          {steps.map((s, i) => (
            <div key={s.n} style={{
              position: 'relative', zIndex: 1, background: 'var(--white)', border: '1.5px solid var(--ink)', padding: '24px 24px 28px', }}>
              <span className="mono" style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, background: 'var(--ink)', color: 'var(--white)', fontSize: 14, fontWeight: 700, letterSpacing: '0.05em', marginBottom: 22, }}>{s.n}</span>
              <h3 className="display" style={{
                margin: '0 0 10px', fontSize: 19.5, letterSpacing: '-0.005em', color: 'var(--ink)', }}>{t(s.title)}</h3>
              <p className="mono" style={{
                margin: 0, fontSize: 14.5, lineHeight: 1.6, color: 'var(--charcoal)', }}>{t(s.body)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ClaimsForm = () => {
  const t = useT();
  const [submitted, setSubmitted] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [error, setError] = React.useState('');
  /* setSending no es sincrono: dos clics rapidos leerian sending=false los
     dos y se enviaria por duplicado. La referencia se actualiza al momento. */
  const busy = React.useRef(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (busy.current) return;
    busy.current = true;
    setSending(true); setError('');
    try {
      await submitLead(e.target, { form: 'warranty', subject: 'Warranty Claim' });
      setSubmitted(true);
    } catch (err) {
      setError((err && err.message) || t(
        "We couldn't send your claim. Please email claims@westernfencesupply.com or call (239) 689-5496.", 'No pudimos enviar tu reclamo. Escribe a claims@westernfencesupply.com o llama al (239) 689-5496.'
      ));
    } finally {
      busy.current = false;
      setSending(false);
    }
  };
  const Field = ({ label, name, type = 'text', placeholder, required, children, span = 1 }) => (
    <div style={{ gridColumn: `span ${span}` }}>
      <label htmlFor={name} className="mono" style={{
        display: 'block', marginBottom: 8, fontSize: 13.5, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink)', }}>
        {label} {required && <span style={{ color: 'var(--tangerine)' }}>*</span>}
      </label>
      {children || (
        <input
          id={name} name={name} type={type} placeholder={placeholder}
          style={{
            width: '100%', padding: '14px 16px', border: '1.5px solid var(--ink)', background: 'var(--white)', fontFamily: 'var(--sans)', fontSize: 15.5, color: 'var(--ink)', outline: 'none', }}
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
            background: 'var(--white)', border: '1.5px solid var(--ink)', padding: '40px 44px', boxShadow: '8px 8px 0 var(--tangerine)', }}>
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 22, marginBottom: 28, borderBottom: '1px dashed rgba(38, 49, 102,0.18)', }}>
              <h3 className="display" style={{
                margin: 0, fontSize: 23.5, letterSpacing: '-0.01em', color: 'var(--ink)', }}>{t('Claim form', 'Formulario de reclamo')}</h3>
              <span className="mono" style={{
                fontSize: 13.5, fontWeight: 700, letterSpacing: '0.22em', color: 'var(--charcoal)', textTransform: 'uppercase', }}>{t('≈ 4 minutes', '≈ 4 minutos')}</span>
            </div>

            {submitted ? (
              <div style={{ padding: '56px 0', textAlign: 'center' }}>
                <div className="mono" style={{ fontSize: 14, letterSpacing: '0.18em', color: 'var(--tangerine)', marginBottom: 16, textTransform: 'uppercase', fontWeight: 700 }}>{t('Claim received', 'Reclamo recibido')}</div>
                <h3 className="display" style={{ fontSize: 31.5, margin: '0 0 12px', lineHeight: 1.1 }}>{t('Thanks, your claim is in.', 'Gracias, tu reclamo fue recibido.')}</h3>
                <p style={{ fontSize: 15.5, color: 'var(--charcoal)', maxWidth: 380, margin: '0 auto' }}>{t('Our warranty team will email you a claim number and next steps.', 'Nuestro equipo de garantías te enviará por correo el número de reclamo y los siguientes pasos.')}</p>
              </div>
            ) : (
            <form onSubmit={handleSubmit}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>

              <Field label={t('Full name', 'Nombre completo')} name="name" required placeholder="Marisol R."/>
              <Field label={t('Phone', 'Teléfono')} name="phone" type="tel" required placeholder="(239) 555-0142"/>

              <Field label={t('Email', 'Correo')} name="email" type="email" required placeholder="you@email.com" span={2}/>

              <Field label={t('PO / Invoice #', 'Orden / # Factura')} name="po" required placeholder="e.g. WFS-2025-04812"/>
              <Field label={t('Install date', 'Fecha de instalación')} name="install" type="date" required/>

              <Field label={t('Material / system', 'Material / sistema')} name="material" span={2}>
                <select id="material" name="material" defaultValue=""
                  style={{
                    width: '100%', padding: '14px 16px', border: '1.5px solid var(--ink)', background: 'var(--white)', fontFamily: 'var(--sans)', fontSize: 15.5, color: 'var(--ink)', outline: 'none', }}>
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
                    'Briefly describe the issue, when you noticed it, and approx. linear feet affected.', 'Describe brevemente el problema, cuándo lo notaste y los pies lineales aproximados afectados.'
                  )}
                  style={{
                    width: '100%', padding: '14px 16px', border: '1.5px solid var(--ink)', background: 'var(--white)', fontFamily: 'var(--sans)', fontSize: 15.5, color: 'var(--ink)', outline: 'none', resize: 'vertical', minHeight: 120, }}/>
              </Field>

              <Field label={t('Photos (min. 3)', 'Fotos (mín. 3)')} name="photos" span={2}>
                <div style={{
                  border: '1.5px dashed var(--ink)', background: '#ffffff', padding: '28px 22px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="6" width="18" height="14" rx="1"/>
                    <circle cx="12" cy="13" r="3.5"/>
                    <path d="M8 6 L9.5 4 H14.5 L16 6"/>
                  </svg>
                  <div className="mono" style={{
                    fontSize: 14.5, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink)', }}>{t('Drag photos here, or click to browse', 'Arrastra fotos aquí, o haz clic para buscar')}</div>
                  <div className="mono" style={{ fontSize: 13.5, color: 'var(--charcoal)', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                    JPG / PNG / HEIC · 20 MB {t('max', 'máx')}
                  </div>
                  <input type="file" id="photos" name="photos" accept="image/*" multiple style={{ display: 'none' }}/>
                </div>
              </Field>

              <div style={{ gridColumn: 'span 2', display: 'flex', gap: 16, alignItems: 'center', marginTop: 8, flexWrap: 'wrap' }}>
                <button type="submit" disabled={sending} style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', opacity: sending ? 0.6 : 1, padding: '16px 36px', background: 'var(--ink)', color: 'var(--white)', fontFamily: 'var(--sans)', fontSize: 14.5, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', boxShadow: '6px 6px 0 var(--tangerine)', transition: 'transform 0.18s ease, box-shadow 0.18s ease', }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-2px,-2px)'; e.currentTarget.style.boxShadow = '8px 8px 0 var(--tangerine)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '6px 6px 0 var(--tangerine)'; }}>
                  {sending ? t('Sending…', 'Enviando…') : t('Submit claim', 'Enviar reclamo')}
                </button>
                <span className="mono" style={{
                  fontSize: 13.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--charcoal)', }}>
                  {t("You'll get a claim number by email", 'Recibirás un número de reclamo por email')}
                </span>
              </div>
              {error && (
                <p role="alert" style={{
                  gridColumn: 'span 2', margin: 0, padding: '14px 16px', background: 'rgba(255,113,51,0.08)', border: '1px solid rgba(255,113,51,0.35)', fontSize: 15.5, lineHeight: 1.5, color: 'var(--ink)', }}>{error}</p>
              )}
            </form>
            )}
          </article>

          {/* Right, help sidebar */}
          <aside style={{ position: 'sticky', top: 100, display: 'grid', gap: 16 }}>
            <div style={{
              background: 'var(--ink)', color: 'var(--white)', padding: '28px 28px 26px', }}>
              <div className="mono" style={{
                fontSize: 13.5, fontWeight: 700, letterSpacing: '0.22em', color: 'var(--tangerine)', textTransform: 'uppercase', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 10, }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff7133', boxShadow: '0 0 0 3px rgba(255, 113, 51,0.25)' }}/>
                {t('Live · 7:30am - 3:30pm EST', 'En vivo · 7:30am - 3:30pm EST')}
              </div>
              <h3 className="display" style={{
                margin: '0 0 16px', fontSize: 23.5, lineHeight: 1.1, color: 'var(--white)', }}>{t("Can't find your PO?", '¿No encuentras tu orden?')}</h3>
              <p className="mono" style={{
                margin: '0 0 22px', fontSize: 14.5, lineHeight: 1.65, color: 'rgba(255,255,255,0.78)', }}>
                {t(
                  'Call the yard. We pull the order by phone, address, or last name in under two minutes.', 'Llama a la sucursal. Localizamos la orden por teléfono, dirección o apellido en menos de dos minutos.'
                )}
              </p>
              <a href="tel:2396895496" className="display" style={{
                display: 'block', marginBottom: 6, fontSize: 23.5, color: 'var(--white)', lineHeight: 1.1, letterSpacing: '-0.005em', }}>(239) 689-5496</a>
              <a href="mailto:claims@westernfencesupply.com" className="mono" style={{
                display: 'block', wordBreak: 'break-all', fontSize: 14.5, color: 'rgba(255,255,255,0.7)', }}>claims@westernfencesupply.com</a>
            </div>

            <div style={{
              background: 'var(--white)', border: '1.5px solid var(--ink)', padding: '24px 26px', }}>
              <div className="mono" style={{
                fontSize: 13.5, fontWeight: 700, letterSpacing: '0.22em', color: 'var(--tangerine)', textTransform: 'uppercase', marginBottom: 14, }}>{t('What to expect', 'Qué esperar')}</div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 12 }}>
                {[
                  [{ EN: 'Response window', ES: 'Ventana de respuesta' }, { EN: '≤ 24 business hrs', ES: '≤ 24 hrs hábiles' }], [{ EN: 'In-county inspect', ES: 'Inspección en el condado' }, { EN: '≤ 5 business days', ES: '≤ 5 días hábiles' }], [{ EN: 'Stock-item replace', ES: 'Reemplazo en stock' }, { EN: '1-2 business days', ES: '1-2 días hábiles' }], [{ EN: 'Welded re-fab', ES: 'Re-fabricación soldada' }, { EN: '5-10 business days', ES: '5-10 días hábiles' }], ].map(([k, v], i) => (
                  <li key={i} style={{
                    display: 'flex', justifyContent: 'space-between', paddingBottom: 10, borderBottom: '1px dashed rgba(38, 49, 102,0.18)', }}>
                    <span className="mono" style={{ fontSize: 14.5, color: 'var(--charcoal)' }}>{t(k)}</span>
                    <span className="mono" style={{
                      fontSize: 14.5, fontWeight: 700, color: 'var(--ink)', }}>{t(v)}</span>
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
      'Coverage, exclusions and material-specific terms in one page. Two minutes to scan.', 'Cobertura, exclusiones y términos por material en una sola página. Dos minutos de lectura.'
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
      [t('Home', 'Inicio'), 'Homepage.html'], [t('Warranty', 'Garantía'), 'warranty.html'], [t('Manufacturer Specs', 'Specs del fabricante'), null], ]}
    eyebrow={t('Warranty · Specs', 'Garantía · Specs')}
    title={t('Manufacturer specs,', 'Specs del fabricante,')}
    accent={t('ready to send.', 'listas para enviar.')}
    subtitle={t(
      'PDF spec sheets, profile drawings and wind-load data for every system we stock. Formatted for AHJ submission and HOA review. Stamped copies on request.', 'Hojas técnicas PDF, dibujos de perfil y datos de carga eólica para cada sistema que manejamos. Formateadas para presentación AHJ y revisión HOA. Copias selladas a solicitud.'
    )}
    image="assets/ECFENCE.webp"
  />
  );
};

const SpecsLibrary = () => {
  const t = useT();
  const [mat, setMat] = React.useState('All');
  const [filter, setFilter] = React.useState('All');
  /* Fichas tecnicas reales, generadas desde los PDF de assets/specs.
     Titulo, medida, peso y paginas salen del archivo, no se escriben a mano. */
  const docs = [
      /* Aluminum · Panel */
      { mat: 'Aluminum', cat: 'Panel', title: 'Commercial 2-Rail Smooth Bottom, 3" Spacing', sub: "4' high", meta: 'PDF · 129 KB', file: 'alum-4ft-com-2rail-smooth-bottom-3in-panel.pdf' },
      { mat: 'Aluminum', cat: 'Panel', title: 'Commercial 3-Rail Rake Bottom', sub: "6' high", meta: 'PDF · 128 KB', file: 'alum-6ft-com-3rail-rake-bottom-panel.pdf' },
      { mat: 'Aluminum', cat: 'Panel', title: 'Residential 2-Rail Smooth Bottom', sub: "4' high", meta: 'PDF · 127 KB', file: 'alum-4ft-res-2rail-smooth-bottom-panel.pdf' },
      { mat: 'Aluminum', cat: 'Panel', title: 'Residential 2-Rail Smooth Bottom, 3" Spacing', sub: "4' high", meta: 'PDF · 128 KB', file: 'alum-4ft-res-2rail-smooth-bottom-3in-panel.pdf' },
      { mat: 'Aluminum', cat: 'Panel', title: 'Residential 3-Rail Puppy Picket', sub: "4' high", meta: 'PDF · 137 KB', file: 'alum-4ft-res-3rail-puppy-picket-panel.pdf' },
      { mat: 'Aluminum', cat: 'Panel', title: 'Residential 3-Rail Rake Bottom', sub: "4' high", meta: 'PDF · 130 KB', file: 'alum-4ft-res-3rail-rake-bottom-panel.pdf' },
      { mat: 'Aluminum', cat: 'Panel', title: 'Residential 3-Rail Rake Bottom', sub: "5' high", meta: 'PDF · 130 KB', file: 'alum-5ft-res-3rail-rake-bottom-panel.pdf' },
      /* Aluminum · Gate */
      { mat: 'Aluminum', cat: 'Gate', title: 'Commercial 2-Rail Smooth Bottom, 3" Spacing', sub: "4' high x 4' wide", meta: 'PDF · 132 KB', file: 'alum-4x4-com-2rail-smooth-bottom-3in-gate.pdf' },
      { mat: 'Aluminum', cat: 'Gate', title: 'Commercial 2-Rail Smooth Bottom, 3" Spacing', sub: "4' high x 5' wide", meta: 'PDF · 131 KB', file: 'alum-4x5-com-2rail-smooth-bottom-3in-gate.pdf' },
      { mat: 'Aluminum', cat: 'Gate', title: 'Commercial 3-Rail Rake Bottom', sub: "6' high x 4' wide", meta: 'PDF · 129 KB', file: 'alum-6x4-com-3rail-rake-bottom-gate.pdf' },
      { mat: 'Aluminum', cat: 'Gate', title: 'Commercial 3-Rail Rake Bottom', sub: "6' high x 5' wide", meta: 'PDF · 129 KB', file: 'alum-6x5-com-3rail-rake-bottom-gate.pdf' },
      { mat: 'Aluminum', cat: 'Gate', title: 'Residential 2-Rail Smooth Bottom', sub: "4' high x 4' wide", meta: 'PDF · 132 KB', file: 'alum-4x4-res-2rail-smooth-bottom-gate.pdf' },
      { mat: 'Aluminum', cat: 'Gate', title: 'Residential 2-Rail Smooth Bottom', sub: "4' high x 5' wide", meta: 'PDF · 130 KB', file: 'alum-4x5-res-2rail-smooth-bottom-gate.pdf' },
      { mat: 'Aluminum', cat: 'Gate', title: 'Residential 3-Rail Puppy Picket', sub: "4' high x 4' wide", meta: 'PDF · 136 KB', file: 'alum-4x4-res-3rail-puppy-picket-gate.pdf' },
      { mat: 'Aluminum', cat: 'Gate', title: 'Residential 3-Rail Puppy Picket', sub: "4' high x 5' wide", meta: 'PDF · 134 KB', file: 'alum-4x5-res-3rail-puppy-picket-gate.pdf' },
      { mat: 'Aluminum', cat: 'Gate', title: 'Residential 3-Rail Rake Bottom', sub: "4' high x 4' wide", meta: 'PDF · 134 KB', file: 'alum-4x4-res-3rail-rake-bottom-gate.pdf' },
      { mat: 'Aluminum', cat: 'Gate', title: 'Residential 3-Rail Rake Bottom', sub: "4' high x 5' wide", meta: 'PDF · 133 KB', file: 'alum-4x5-res-3rail-rake-bottom-gate.pdf' },
      { mat: 'Aluminum', cat: 'Gate', title: 'Residential 3-Rail Rake Bottom', sub: "5' high x 4' wide", meta: 'PDF · 133 KB', file: 'alum-5x4-res-3rail-rake-bottom-gate.pdf' },
      { mat: 'Aluminum', cat: 'Gate', title: 'Residential 3-Rail Rake Bottom', sub: "5' high x 5' wide", meta: 'PDF · 133 KB', file: 'alum-5x5-res-3rail-rake-bottom-gate.pdf' },
      /* Aluminum · Post */
      { mat: 'Aluminum', cat: 'Post', title: 'Commercial 2-Rail Smooth Bottom, 3" Spacing', sub: "4' high", meta: 'PDF · 140 KB', file: 'alum-4ft-com-2rail-smooth-bottom-3in-post.pdf' },
      { mat: 'Aluminum', cat: 'Post', title: 'Commercial 3-Rail Rake Bottom', sub: "6' high", meta: 'PDF · 137 KB', file: 'alum-6ft-com-3rail-rake-bottom-post.pdf' },
      { mat: 'Aluminum', cat: 'Post', title: 'Residential 2-Rail Smooth Bottom', sub: "4' high", meta: 'PDF · 138 KB', file: 'alum-4ft-res-2rail-smooth-bottom-post.pdf' },
      { mat: 'Aluminum', cat: 'Post', title: 'Residential 3-Rail Puppy Picket', sub: "4' high", meta: 'PDF · 140 KB', file: 'alum-4ft-res-3rail-puppy-picket-post.pdf' },
      { mat: 'Aluminum', cat: 'Post', title: 'Residential 3-Rail Rake Bottom', sub: "4' high", meta: 'PDF · 143 KB', file: 'alum-4ft-res-3rail-rake-bottom-post.pdf' },
      { mat: 'Aluminum', cat: 'Post', title: 'Residential 3-Rail Rake Bottom', sub: "5' high", meta: 'PDF · 138 KB', file: 'alum-5ft-res-3rail-rake-bottom-post.pdf' },
      /* Aluminum · Set */
      { mat: 'Aluminum', cat: 'Set', title: 'Aluminum Technical Drawings, Full Set', sub: 'Every panel profile, residential and commercial', meta: 'PDF · 1.6 MB, 6 pages', file: 'alum-technical-drawings-full-set.pdf' },
      /* Chain Link · Gate */
      { mat: 'Chain Link', cat: 'Gate', title: 'Cantilever Gate', sub: 'Roller, track and counterbalance', meta: 'PDF · 3.9 MB', file: 'chainlink-gate-cantilever.pdf' },
      { mat: 'Chain Link', cat: 'Gate', title: 'Cantilever Gate, Truss Detail', sub: 'Frame member and bracing dimensions', meta: 'PDF · 342 KB', file: 'chainlink-gate-cantilever-truss-detail.pdf' },
      { mat: 'Chain Link', cat: 'Gate', title: 'Double Swing Gate', sub: 'Drop rod and latch detail', meta: 'PDF · 109 KB', file: 'chainlink-gate-double.pdf' },
      { mat: 'Chain Link', cat: 'Gate', title: 'Single Swing Gate', sub: 'Frame, fabric and hardware layout', meta: 'PDF · 37 KB', file: 'chainlink-gate-single.pdf' },
      /* EC Fence · Engineering */
      { mat: 'EC Fence', cat: 'Engineering', title: 'Self-Mating Steel Panel, Signed & Sealed', sub: "FBC 2023 · HVHZ · 115 mph Exp C · up to 6' high", meta: 'PDF · 306 KB', file: 'ecfence-hvhz-sealed-engineering.pdf' },
      /* Hardware · Hinge */
      { mat: 'Hardware', cat: 'Hinge', title: '5" Heavy Duty Self-Closing Gate Hinge', sub: 'For aluminum gates', meta: 'PDF · 71 KB', file: 'hardware-hinge-alum-5in-heavy-duty-self-closing.pdf' },
      { mat: 'Hardware', cat: 'Hinge', title: 'Blind Hinge', sub: 'Concealed leaf, butt mount', meta: 'PDF · 45 KB', file: 'hardware-hinge-blind.pdf' },
      { mat: 'Hardware', cat: 'Hinge', title: 'Chain Link Hinge Set', sub: 'For chain link gates', meta: 'PDF · 83 KB', file: 'hardware-hinge-chain-link.pdf' },
      { mat: 'Hardware', cat: 'Hinge', title: 'D&D Hinge', sub: 'For PVC and vinyl gates', meta: 'PDF · 57 KB', file: 'hardware-hinge-dd-pvc.pdf' },
      { mat: 'Hardware', cat: 'Hinge', title: 'D&D Self-Closing Hinge', sub: 'For chain link gates', meta: 'PDF · 269 KB', file: 'hardware-hinge-dd-self-closing-chain-link.pdf' },
      { mat: 'Hardware', cat: 'Hinge', title: 'Heavy Duty Hinge', sub: 'Commercial gate weight', meta: 'PDF · 211 KB', file: 'hardware-hinge-heavy-duty.pdf' },
      { mat: 'Hardware', cat: 'Hinge', title: 'Self-Closing Hinge Set', sub: 'For chain link gates', meta: 'PDF · 95 KB', file: 'hardware-hinge-chain-link-self-closing-set.pdf' },
      { mat: 'Hardware', cat: 'Hinge', title: 'Self-Closing Stainless Steel Hinge', sub: 'For aluminum gates', meta: 'PDF · 172 KB', file: 'hardware-hinge-alum-self-closing-stainless.pdf' },
      { mat: 'Hardware', cat: 'Hinge', title: 'Spring Hinge', sub: 'For PVC and vinyl gates', meta: 'PDF · 485 KB, 2 pages', file: 'hardware-hinge-spring-pvc.pdf' },
      { mat: 'Hardware', cat: 'Hinge', title: 'Spring-Loaded Butterfly Hinge', sub: 'Self-closing, adjustable tension', meta: 'PDF · 171 KB', file: 'hardware-hinge-butterfly-spring-loaded.pdf' },
      { mat: 'Hardware', cat: 'Hinge', title: 'TruClose Heavy Duty Hinge', sub: 'Spring-loaded, self-closing', meta: 'PDF · 153 KB', file: 'hardware-hinge-truclose-heavy-duty.pdf' },
      /* Hardware · Latch */
      { mat: 'Hardware', cat: 'Latch', title: 'D&D LokkLatch Regular', sub: 'Key-lockable, both sides', meta: 'PDF · 171 KB', file: 'hardware-latch-dd-lokklatch-regular.pdf' },
      { mat: 'Hardware', cat: 'Latch', title: 'Gravity Latch', sub: 'For aluminum gates', meta: 'PDF · 135 KB', file: 'hardware-latch-alum-gravity.pdf' },
      { mat: 'Hardware', cat: 'Latch', title: 'LokkLatch Handle', sub: 'External pull handle', meta: 'PDF · 161 KB', file: 'hardware-latch-lokklatch-handle.pdf' },
      { mat: 'Hardware', cat: 'Latch', title: 'MagnaLatch Top Pull', sub: 'Magnetic, self-latching, pool gates', meta: 'PDF · 34 KB', file: 'hardware-latch-magnalatch-top-pull.pdf' },
      { mat: 'Hardware', cat: 'Latch', title: 'PVC Gate Latch', sub: 'For PVC and vinyl gates', meta: 'PDF · 188 KB', file: 'hardware-latch-pvc.pdf' },
      { mat: 'Hardware', cat: 'Latch', title: 'Pull Latch', sub: 'For aluminum gates', meta: 'PDF · 68 KB, 2 pages', file: 'hardware-latch-alum-pull.pdf' },
      { mat: 'Hardware', cat: 'Latch', title: 'Stainless Steel Mini Latch', sub: 'For drive gates', meta: 'PDF · 159 KB', file: 'hardware-latch-stainless-mini.pdf' },
      { mat: 'Hardware', cat: 'Latch', title: 'White Gate Latch with Extension', sub: 'Side and front-on views', meta: 'PDF · 549 KB', file: 'hardware-latch-white-gate-extension.pdf' },
      { mat: 'Hardware', cat: 'Latch', title: 'Zip Latch', sub: 'Self-latching, adjustable', meta: 'PDF · 834 KB', file: 'hardware-latch-zip.pdf' },
      /* Hardware · Mount */
      { mat: 'Hardware', cat: 'Mount', title: '2 x 2 Floor Flange / Mount', sub: 'Surface mount · 2" post socket · 4" base plate', meta: 'PDF · 42 KB', file: 'hardware-2x2-floor-flange-mount.pdf' },
      { mat: 'Hardware', cat: 'Mount', title: 'Male Wall Hanger', sub: 'Wall-mounted gate pivot', meta: 'PDF · 34 KB', file: 'hardware-male-wall-hanger.pdf' },
    ];
  /* Los chips se derivan de los documentos: al anadir un material nuevo
     aparece su filtro solo, sin tocar esta lista a mano. */
  const order = { Panel: 0, Gate: 1, Post: 2, Set: 3, Engineering: 4, Hinge: 5, Latch: 6, Mount: 7 };
  const mats = ['All'].concat(Array.from(new Set(docs.map(d => d.mat))));
  const byMat = mat === 'All' ? docs : docs.filter(d => d.mat === mat);
  const cats = ['All'].concat(
    Array.from(new Set(byMat.map(d => d.cat))).sort((a, b) => order[a] - order[b])
  );
  /* Si el tipo elegido no existe en el material elegido, se vuelve a Todos. */
  const cat = cats.indexOf(filter) === -1 ? 'All' : filter;
  const visible = cat === 'All' ? byMat : byMat.filter(d => d.cat === cat);

  return (
    <section style={{ background: 'var(--white)', padding: '120px 0' }}>
      <div className="container">
        <PageSectionHeader
          number="01" label={t('Library', 'Biblioteca')}
          title={t('The full library,', 'La biblioteca completa,')}
          accent={t('filtered or browsed.', 'filtrada o explorada.')}
          sub={t(
            'Panel, gate and post drawings plus gate hardware, with the dimensions and load data you need for permit and HOA review. More materials are being added.', 'Planos de paneles, portones y postes, más herrajes de portón, con las medidas y datos de carga que piden permisos y HOA. Estamos añadiendo más materiales.'
          )}
        />
        {/* Filtros: material arriba, tipo debajo. Dos ejes, porque con varios
            materiales una sola fila deja de distinguir "portones de aluminio"
            de "portones de otra cosa". */}
        {(() => {
          const LABELS = {
            All: { EN: 'All', ES: 'Todos' },
            Aluminum: { EN: 'Aluminum', ES: 'Aluminio' },
            'Chain Link': { EN: 'Chain link', ES: 'Malla eslabonada' },
            'EC Fence': { EN: 'EC Fence', ES: 'EC Fence' },
            Vinyl: { EN: 'Vinyl', ES: 'Vinilo' },
            Metal: { EN: 'Metal', ES: 'Metal' },
            Panel: { EN: 'Panels', ES: 'Paneles' },
            Gate: { EN: 'Gates', ES: 'Portones' },
            Post: { EN: 'Posts', ES: 'Postes' },
            Set: { EN: 'Full set', ES: 'Set completo' },
            Engineering: { EN: 'Engineering', ES: 'Ingeniería' },
            Hardware: { EN: 'Hardware', ES: 'Herrajes' },
            Hinge: { EN: 'Hinges', ES: 'Bisagras' },
            Latch: { EN: 'Latches', ES: 'Cerrojos' },
            Mount: { EN: 'Mounts', ES: 'Anclajes' },
          };
          const chip = (label, active, onClick, key) => (
            <button key={key} onClick={onClick} className="mono" style={{
              padding: '10px 18px', background: active ? 'var(--ink)' : 'var(--white)', color: active ? 'var(--white)' : 'var(--ink)', border: '1.5px solid var(--ink)', fontSize: 14, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.18s ease', }}>{label}</button>
          );
          const row = { display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' };
          return (
            <div style={{ marginBottom: 28, display: 'grid', gap: 12 }}>
              <div style={row}>
                {mats.map(m => chip(t(LABELS[m] || { EN: m, ES: m }), mat === m, () => setMat(m), m))}
                <span className="mono" style={{
                  marginLeft: 'auto', fontSize: 13.5, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--charcoal)', }}>{visible.length} {t(visible.length === 1 ? 'document' : 'documents', visible.length === 1 ? 'documento' : 'documentos')}</span>
              </div>
              {/* La fila de tipos solo aparece si hay mas de uno que elegir. */}
              {cats.length > 2 && (
                <div style={row}>
                  {cats.map(c => chip(t(LABELS[c] || { EN: c, ES: c }), cat === c, () => setFilter(c), c))}
                </div>
              )}
            </div>
          );
        })()}
        {/* Downloads grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
          {visible.map((d, i) => (
            <a key={d.file} href={'assets/specs/' + d.file} download target="_blank" rel="noopener"
              style={{
                display: 'flex', alignItems: 'center', gap: 18, padding: '22px 24px', border: '1.5px solid var(--ink)', background: 'var(--white)', color: 'var(--ink)', position: 'relative', transition: 'transform 0.18s ease, box-shadow 0.18s ease', }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '6px 6px 0 var(--tangerine)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
              {/* PDF tile */}
              <span style={{
                width: 56, height: 56, flexShrink: 0, background: 'var(--ink)', color: 'var(--white)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--sans)', fontSize: 13.5, fontWeight: 700, letterSpacing: '0.12em', }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 3 H15 L19 7 V21 H7 Z"/>
                  <path d="M15 3 V7 H19"/>
                </svg>
                <span style={{ marginTop: 2 }}>PDF</span>
              </span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                  <span className="mono" style={{
                    fontSize: 13, fontWeight: 700, letterSpacing: '0.22em', color: 'var(--tangerine)', textTransform: 'uppercase', }}>{d.cat}</span>
                  {d.isNew && (
                    <span className="mono" style={{
                      padding: '2px 8px', background: 'var(--tangerine)', color: 'var(--white)', fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', }}>{t('New', 'Nuevo')}</span>
                  )}
                </div>
                <div style={{
                  fontSize: 16, fontWeight: 600, color: 'var(--ink)', lineHeight: 1.35, marginBottom: 6, }}>{d.title}</div>
                <div style={{
                  display: 'flex', gap: 12, flexWrap: 'wrap', fontFamily: 'var(--mono)', fontSize: 13.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--charcoal)', fontWeight: 700, }}>
                  <span>{d.sub}</span>
                  <span>·</span>
                  <span>{d.meta}</span>
                </div>
              </div>
              <span style={{
                flexShrink: 0, width: 36, height: 36, background: 'var(--tangerine)', color: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
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
        display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 48, alignItems: 'center', background: 'var(--ink)', color: 'var(--white)', padding: '56px 56px', boxShadow: '12px 12px 0 var(--tangerine)', }}>
        <div>
          <h2 className="display" style={{
            margin: '0 0 18px', fontSize: 'clamp(26px, 3vw, 38px)', lineHeight: 1.05, letterSpacing: '-0.015em', color: 'var(--white)', }}>
            {t('Need a stamped', '¿Necesitas una copia')}<br/>{t('copy for AHJ?', 'sellada para el AHJ?')}
          </h2>
          <p className="mono" style={{
            margin: 0, fontSize: 15.5, lineHeight: 1.7, color: 'rgba(255,255,255,0.78)', maxWidth: 480, }}>
            {t(
              'We have a licensed FL Professional Engineer on retainer for stamped wind-load letters, structural calcs and HVHZ submission packages. Stamped requests are available on most products.', 'Tenemos un Ingeniero Profesional licenciado de FL en retainer para cartas selladas de carga eólica, cálculos estructurales y paquetes de presentación HVHZ. Hay solicitudes selladas disponibles para la mayoría de los productos.'
            )}
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <a href="mailto:engineering@westernfencesupply.com" style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '16px 28px', background: 'var(--tangerine)', color: 'var(--white)', fontFamily: 'var(--sans)', fontSize: 14.5, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', }}>{t('Request stamped doc', 'Solicitar doc sellado')}</a>
          <a href="tel:2396895496" style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '16px 28px', background: 'transparent', color: 'var(--white)', border: '1.5px solid rgba(255,255,255,0.5)', fontFamily: 'var(--sans)', fontSize: 14.5, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', }}>(239) 689-5496</a>
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
      'Custom specs, color drops, project-specific cut sheets, we generate one-off PDFs for HOAs, AHJs and commercial submittals.', 'Specs a medida, paletas de color, hojas de corte por proyecto, generamos PDFs únicos para HOAs, AHJs y presentaciones comerciales.'
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
  WarrantyHero, WarrantyHighlights, WarrantyMaterialTable, WarrantyExclusions, WarrantyProcess, WarrantyCTA, WarrantyPage, ClaimsHero, ClaimsProcess, ClaimsForm, ClaimsCTA, WarrantyClaimsPage, SpecsHero, SpecsLibrary, SpecsStamped, SpecsCTA, SpecsPage,
});
