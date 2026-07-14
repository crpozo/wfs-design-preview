/* Products catalog page sections */

const ProductsHero = () => {
  const t = useT();
  return (
  <PageHero
    crumbs={[[t('Home', 'Inicio'), 'Homepage.html'], [t('Products', 'Productos'), null]]}
    eyebrow={t('Full catalog', 'Catálogo completo')}
    title={t('Five fence systems.', 'Cinco sistemas de cerca.')}
    accent={t('Two convenient locations.', 'Dos ubicaciones convenientes.')}
    accentBreak
    subtitle={t('Factory-direct material, vinyl, aluminum, chain link, metal and EC Fence, plus gates, hardware and accessories. Same supplier-direct pricing for contractors, homeowners and DIY projects.', 'Material directo de fábrica, vinilo, aluminio, malla ciclónica, metal y EC Fence, más portones, herrajes y accesorios. El mismo precio directo de proveedor para contratistas, propietarios y proyectos de bricolaje.')}
    image="assets/PVC.png"
    actions={[{
      primary: true,
      href: 'assets/wfs-catalog.pdf',
      download: 'WFS-Fence-Catalog.pdf',
      label: (
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
          {t('Download Catalog (PDF)', 'Descargar catálogo (PDF)')}
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M8 2 V13 M4 9 L8 13 L12 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square"/>
          </svg>
        </span>
      ),
    }]}
  />
  );
};

const PRODUCT_INTRO_STATS = [
  ['5', { EN: 'Fence systems', ES: 'Sistemas de cerca' }],
  ['5', { EN: 'Gate systems', ES: 'Sistemas de portón' }],
  ['2', { EN: 'Yards · FM + PC', ES: 'Sucursales · FM + PC' }],
  [{ EN: 'Lifetime', ES: 'De por vida' }, { EN: 'Warranty', ES: 'Garantía' }],
];

const ProductsIntro = () => {
  const t = useT();
  return (
  <section style={{ background: 'var(--white)', padding: '120px 0' }}>
    <div className="container">
      <div style={{
        display: 'grid', gridTemplateColumns: '1.4fr 1fr', columnGap: 64, rowGap: 28, alignItems: 'end',
      }}>
        <div>
          <h2 className="display" style={{ margin: 0, fontSize: 'clamp(26px, 2.6vw, 36px)', lineHeight: 1.12, letterSpacing: '-0.02em' }}>
            {t('Everything you need to build the perimeter,', 'Todo lo que necesitas para construir el perímetro,')}<br/>
            <span style={{ color: 'var(--tangerine)' }}>{t("and nothing we wouldn't put on our own job.", 'y nada que no pondríamos en nuestro propio trabajo.')}</span>
          </h2>
        </div>
        <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.7, color: 'var(--charcoal)', maxWidth: 420 }}>
          {t("We curate every SKU we carry. If a manufacturer can't meet our spec, it doesn't make it onto the floor. Browse by material below, or jump straight to gates and hardware.", 'Seleccionamos cada SKU que manejamos. Si un fabricante no cumple con nuestra especificación, no llega al piso de venta. Explora por material abajo, o ve directo a portones y herrajes.')}
        </p>
      </div>
      <div style={{ marginTop: 64 }}>
        <StatStrip items={PRODUCT_INTRO_STATS.map(([n, l]) => [t(n), t(l)])}/>
      </div>
    </div>
  </section>
  );
};

const ProductHardware = () => {
  const t = useT();
  return (
  <section style={{ background: 'var(--white)', padding: '120px 0' }}>
    <div className="container">
      <PageSectionHeader
        number="03" label={t('Hardware & accessories', 'Herrajes y accesorios')}
        title={t('Posts, hinges, latches,', 'Postes, bisagras, pestillos,')}
        accent={t('and the little stuff that breaks first.', 'y las piezas pequeñas que fallan primero.')}
        sub={t('If we sell the panel, we stock the matching hardware. Stainless-steel kits on every gate, drop rods on every double-swing.', 'Si vendemos el panel, tenemos en existencia los herrajes que combinan. Kits de acero inoxidable en cada portón, varillas de anclaje en cada portón doble.')}
        link={[t('Request hardware list', 'Solicitar lista de herrajes'), 'estimate.html']}
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
        {[
          [t('Posts & rails', 'Postes y rieles'), t('Galv steel + aluminum line posts, terminal posts and rails sized for every system.', 'Postes de línea de acero galvanizado y aluminio, postes terminales y rieles dimensionados para cada sistema.')],
          [t('Hinges & latches', 'Bisagras y pestillos'), t('Stainless hinges, drop rods, magnetic latches, padlockable kits.', 'Bisagras de acero inoxidable, varillas de anclaje, pestillos magnéticos, kits con candado.')],
          [t('Mesh + caps', 'Malla y tapas'), t('6-12 gauge mesh by the roll, post caps, tension bands, brace bands.', 'Malla de calibre 6-12 por rollo, tapas de poste, bandas de tensión, bandas de refuerzo.')],
          [t('Operators', 'Operadores'), t('LiftMaster gate openers, photo-eye safety, keypads and loop detectors.', 'Operadores de portón LiftMaster, fotoceldas de seguridad, teclados y detectores de lazo.')],
        ].map(([title, body]) => (
          <article key={title} style={{
            background: 'var(--white)', padding: '24px 22px',
            border: '1px solid rgba(0,16,17,0.1)',
          }}>
            <div className="mono" style={{
              fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase',
              color: 'var(--tangerine)', fontWeight: 700, marginBottom: 10,
            }}>{t('Hardware', 'Herrajes')}</div>
            <h3 className="display" style={{ margin: '0 0 10px', fontSize: 20, lineHeight: 1.1 }}>{title}</h3>
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.55, color: 'var(--charcoal)' }}>{body}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
  );
};

const ProductsCTA = () => {
  const t = useT();
  return (
  <CTABand
    kicker={t('Spec your run', 'Especifica tu tramo')}
    title={t('Send your dimensions', 'Envía tus dimensiones')}
    accent={t("we'll come back with stock + price.", 'te respondemos con existencias y precio.')}
    body={t("Linear feet, height, color, gate count. We'll quote it in 24 hours with delivery and pickup options for both yards.", 'Pies lineales, altura, color, número de portones. Lo cotizamos en 24 horas con opciones de entrega y retiro para ambas sucursales.')}
    primary={[t('Request a quote', 'Solicitar cotización'), 'estimate.html']}
    secondary={[t('Talk to a rep', 'Habla con un representante'), 'tel:2396895496']}
  />
  );
};

Object.assign(window, { ProductsHero, ProductsIntro, ProductHardware, ProductsCTA });
