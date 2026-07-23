/* About page sections */

const AboutHero = () => {
  const t = useT();
  return (
  <PageHero
    crumbs={[[t('Home', 'Inicio'), 'Homepage.html'], [t('About', 'Nosotros'), null]]}
    eyebrow={t('About · Western Fence Supply', 'Nosotros · Western Fence Supply')}
    title={t('Family-owned.', 'Empresa familiar.')}
    accent={t('Fabricated in Fort Myers.', 'Fabricado en Fort Myers.')}
    subtitle={t("A material supplier for contractors, homeowners and DIY projects across Southwest Florida. We don't install, we stock, fabricate and ship the components your fence is built from.", 'Un proveedor de materiales para contratistas, propietarios y proyectos de bricolaje en todo el suroeste de Florida. No instalamos: tenemos en existencia, fabricamos en planta y enviamos los componentes con los que se construye tu cerca.')}
    image="https://crpozo.github.io/wfs-design-preview/assets/wfs-shop.webp"
  />
  );
};

const AboutStory = () => {
  const t = useT();
  return (
  <section style={{ background: 'var(--white)', padding: '120px 0' }}>
    <div className="container">
      {/* Editorial header, single line, clean wrap */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 56, alignItems: 'end', paddingBottom: 32, marginBottom: 64, borderBottom: '1px solid rgba(0,16,17,0.12)', }}>
        <div>
          <h2 className="display" style={{
            margin: 0, fontSize: 'clamp(28px, 3vw, 44px)', lineHeight: 1, letterSpacing: '-0.02em', fontWeight: 800, maxWidth: 640, }}>
            {t("From contractor's yard", 'De la sucursal de un contratista')} <br/>
            <span style={{ color: 'var(--tangerine)' }}>{t("to SW Florida's supply hub.", 'al centro de suministro del suroeste de Florida.')}</span>
          </h2>
        </div>
        <p style={{
          margin: 0, maxWidth: 420, justifySelf: 'end', textAlign: 'right', fontSize: 15.5, lineHeight: 1.6, color: 'var(--charcoal)', }}>
          {t('A family-run Southwest Florida fence supplier, led by management with two decades of fencing installation and fabrication experience. Two yards in Fort Myers and Port Charlotte, serving customers throughout Florida.', 'Un proveedor de cercas familiar del suroeste de Florida, dirigido por un equipo con dos décadas de experiencia en instalación y fabricación de cercas. Dos sucursales en Fort Myers y Port Charlotte, al servicio de clientes en toda Florida.')}
        </p>
      </div>

      {/* Image (sticky) + timeline with vertical spine */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 64, alignItems: 'start' }}>
        {/* Sticky left rail: photo + stats */}
        <div style={{ position: 'sticky', top: 120 }}>
          <div style={{
            position: 'relative', aspectRatio: '4 / 5', overflow: 'hidden', background: '#263166', }}>
            <img src="https://crpozo.github.io/wfs-design-preview/assets/hero-warehouse.webp" alt={t('WFS Fort Myers warehouse', 'Almacén de WFS en Fort Myers')}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}/>
            <div aria-hidden style={{
              position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(38, 49, 102,0) 50%, rgba(38, 49, 102,0.55) 100%)', }}/>
            {/* HQ chip */}
            <div className="mono" style={{
              position: 'absolute', top: 18, left: 18, background: 'var(--tangerine)', color: 'var(--ink)', padding: '5px 10px', fontSize: 13.5, letterSpacing: '0.22em', fontWeight: 700, }}>{t('HQ · FORT MYERS', 'SEDE · FORT MYERS')}</div>
            <div style={{
              position: 'absolute', bottom: 18, left: 18, right: 18, color: 'var(--white)', }}>
              <div className="display" style={{ fontSize: 19.5, lineHeight: 1.1 }}>2621 Fowler St</div>
              <div className="mono" style={{ marginTop: 6, fontSize: 13.5, letterSpacing: '0.18em', color: 'rgba(255,255,255,0.85)' }}>FORT MYERS, FL 33901</div>
            </div>
          </div>
        </div>

        {/* Right: editorial timeline with vertical spine */}
        <div style={{ position: 'relative', paddingLeft: 56 }}>
          {/* Spine line */}
          <div aria-hidden style={{
            position: 'absolute', left: 17, top: 14, bottom: 14, width: 1, background: 'rgba(255,113,51,0.35)', }}/>
          {[
            ['01', { EN: 'Supply only', ES: 'Solo suministro' }, { EN: 'We are a supply company, not an installer. We sell the material your fence is built from and can recommend trusted local installers for the build.', ES: 'Somos una empresa de suministro, no instaladores. Vendemos el material con el que se construye tu cerca y podemos recomendarte instaladores locales de confianza para la obra.' }], ['02', { EN: 'In-house fabrication', ES: 'Fabricación en planta' }, { EN: 'Gates and custom work are fabricated in-house at our Fort Myers yard.', ES: 'Los portones y los trabajos a medida se fabrican en planta, en nuestra sucursal de Fort Myers.' }], ['03', { EN: 'Four fence systems', ES: 'Cuatro sistemas de cercas' }, { EN: 'Premium vinyl, aluminum, chain link and metal fencing, sold to fence companies and homeowners alike.', ES: 'Cercas premium de vinilo, aluminio, malla ciclónica y metal, para empresas de cercas y propietarios por igual.' }], ['04', { EN: 'Two yards', ES: 'Dos sucursales' }, { EN: 'Two convenient yard locations in Fort Myers and Port Charlotte, serving customers throughout Florida, including Lee, Collier, Charlotte, Hendry, and surrounding counties.', ES: 'Dos sucursales convenientes en Fort Myers y Port Charlotte, al servicio de clientes en toda Florida, incluidos los condados de Lee, Collier, Charlotte, Hendry y los alrededores.' }], ['05', { EN: 'Delivery or pickup', ES: 'Entrega o retiro' }, { EN: 'Job-site delivery on our own trucks, or same-day pickup on standard qualifying orders.', ES: 'Entrega en obra con nuestros propios camiones, o retiro el mismo día en pedidos estándar que califiquen.' }], ].map(([y, label, body], i, arr) => (
            <div key={y} style={{
              position: 'relative', paddingBottom: i === arr.length - 1 ? 0 : 44, }}>
              {/* Dot on the spine */}
              <span aria-hidden style={{
                position: 'absolute', left: -45, top: 10, width: 14, height: 14, borderRadius: '50%', background: 'var(--tangerine)', border: '3px solid var(--white)', boxShadow: '0 0 0 1px rgba(255,113,51,0.5)', }}/>
              <div style={{
                display: 'grid', gridTemplateColumns: '88px 1fr', gap: 28, alignItems: 'baseline', }}>
                <div className="display" style={{
                  fontSize: 31.5, lineHeight: 1, color: 'var(--ink)', letterSpacing: '-0.01em', }}>{y}</div>
                <div>
                  <div className="mono" style={{
                    fontSize: 13.5, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--tangerine)', fontWeight: 700, marginBottom: 10, }}>{t(label)}</div>
                  <p style={{
                    margin: 0, fontSize: 16.5, lineHeight: 1.6, color: 'var(--ink)', maxWidth: 520, }}>{t(body)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};

const AboutValues = () => {
  const t = useT();
  const rules = [
    [{ EN: 'No low-grade material', ES: 'Nada de material de baja calidad' }, { EN: "If we wouldn't put it on our own job, we don't stock it. We turn down lower price points every quarter to protect the catalog.", ES: 'Si no lo pondríamos en nuestra propia obra, no lo tenemos en existencia. Cada trimestre rechazamos precios más bajos para proteger el catálogo.' }], [{ EN: 'Real lead-time honesty', ES: 'Honestidad real en los tiempos de entrega' }, { EN: 'Stocked items ship in 1–3 days. Custom orders can be completed in as little as 2 days, depending on the request. We tell you the truth on the first call, no soft dates.', ES: 'Los artículos en existencia se envían en 1 a 3 días. Los pedidos a medida pueden completarse en tan solo 2 días, según la solicitud. Te decimos la verdad en la primera llamada, sin fechas imprecisas.' }], [{ EN: 'Pricing without games', ES: 'Precios sin juegos' }, { EN: 'Same supplier-direct floor for contractors, homeowners and DIY. No minimums, no contractor-only tiers.', ES: 'El mismo precio directo de proveedor para contratistas, propietarios y bricolaje. Sin mínimos, sin niveles exclusivos para contratistas.' }], ];
  return (
  <section style={{ background: 'var(--white)', padding: '120px 0' }}>
    <div className="container">
      {/* Eyebrow */}
      <div className="mono" style={{
        display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 22, fontSize: 14, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--laser-blue)', }}>
        <span aria-hidden style={{ width: 30, height: 3, background: 'var(--tangerine)', borderRadius: 2 }}/>
        {t('How we operate', 'Cómo operamos')}
      </div>
      {/* Title + right blurb over a heavy rule */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'end', paddingBottom: 28, borderBottom: '2px solid var(--ink)', }}>
        <h2 className="display" style={{
          margin: 0, fontSize: 'clamp(30px, 3.4vw, 46px)', lineHeight: 1.02, letterSpacing: '-0.01em', fontWeight: 800, textTransform: 'uppercase', }}>
          {t('Three rules', 'Tres reglas')}<br/>
          <span style={{ color: 'var(--tangerine)' }}>{t("we don't break.", 'que no rompemos.')}</span>
        </h2>
        <p style={{
          margin: 0, maxWidth: 360, justifySelf: 'end', textAlign: 'right', fontSize: 16, lineHeight: 1.6, color: 'var(--charcoal)', }}>
          {t('Same standard we held when we were the contractors using this material every day.', 'El mismo estándar que manteníamos cuando éramos los contratistas que usaban este material todos los días.')}
        </p>
      </div>
      {/* Editorial rows: outlined number · title · description */}
      {rules.map(([label, body], i) => (
        <div key={i} className="wfs-usecase-row" style={{
          display: 'grid', gridTemplateColumns: '104px 1fr 1.2fr', gap: 28, alignItems: 'center', padding: '34px 0', borderBottom: '1px solid rgba(0,16,17,0.1)', }}>
          <span className="display wfs-usecase-num" aria-hidden style={{
            fontSize: 61.5, lineHeight: 1, fontWeight: 800, color: 'transparent', WebkitTextStroke: '1.5px rgba(38,49,102,0.32)', }}>0{i + 1}</span>
          <h3 className="display" style={{
            margin: 0, fontSize: 'clamp(18px, 1.6vw, 24px)', lineHeight: 1.1, textTransform: 'uppercase', letterSpacing: '0.01em', }}>{t(label)}</h3>
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: 'var(--charcoal)' }}>{t(body)}</p>
        </div>
      ))}
    </div>
  </section>
  );
};

const AboutShop = () => {
  const t = useT();
  return (
  <SplitBlock
    kicker={t('In-house fabrication', 'Fabricación en planta')}
    title={t('Welded, cut and', 'Soldado, cortado y')}
    accent={t('packed in Fort Myers.', 'empacado en Fort Myers.')}
    body={t('Most of our gates ship ready-to-assemble from our fabrication shop. Aluminum, chain link, metal, vinyl and EC Fence, cut and welded to spec in-house, so what arrives on your jobsite is ready to install the same day.', 'La mayoría de nuestros portones se envían listos para armar desde nuestro taller de fabricación. Aluminio, malla ciclónica, metal, vinilo y EC Fence, cortados y soldados a la medida en planta, para que lo que llega a tu obra esté listo para instalar el mismo día.')}
    bullets={[
      t('Custom gate fabrication, up to 30 ft cantilever', 'Fabricación de portones a medida, hasta 30 ft en cantilever'), t('Hardware kits packed and labeled to the order', 'Kits de herrajes empacados y etiquetados según el pedido'), t('Powder-coat color-match on aluminum runs', 'Igualación de color con pintura en polvo en producciones de aluminio'), t('Same-day pickup on stocked panels and components', 'Retiro el mismo día de paneles y componentes en existencia'), ]}
    image="https://crpozo.github.io/wfs-design-preview/assets/wfs-shop.webp"
    imageRight={true}
    dark={true}
  />
  );
};

const AboutStats = () => {
  const t = useT();
  const stats = [
    ['20+', { EN: 'Years experience', ES: 'Años de experiencia' }, { EN: 'Fencing install + fabrication', ES: 'Instalación y fabricación de cercas' }], ['4', { EN: 'Fence materials', ES: 'Materiales de cerca' }, { EN: 'Vinyl · Aluminum · Chain link · Metal', ES: 'Vinilo · Aluminio · Malla ciclónica · Metal' }], ['2', { EN: 'Yards', ES: 'Sucursales' }, { EN: 'Fort Myers + Port Charlotte', ES: 'Fort Myers + Port Charlotte' }], ['FL', { EN: 'Statewide service', ES: 'Servicio estatal' }, { EN: 'Serving customers throughout Florida', ES: 'Atendemos clientes en toda Florida' }], [{ EN: 'Lifetime', ES: 'De por vida' }, { EN: 'Warranty', ES: 'Garantía' }, { EN: 'On most materials we sell', ES: 'En la mayoría de los materiales que vendemos' }], ];
  return (
    <section style={{ background: 'var(--white)', padding: '120px 0' }}>
      <div className="container">
        {/* Single editorial header row, no stacked headline */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 32, flexWrap: 'wrap', paddingBottom: 28, marginBottom: 56, borderBottom: '1px solid rgba(0,16,17,0.12)', }}>
          <div style={{
            display: 'flex', alignItems: 'baseline', gap: 14, }}>
            <span className="display" style={{
              fontSize: 23.5, lineHeight: 1, color: 'var(--ink)', }}>{t('Family-owned and run.', 'De propiedad y gestión familiar.')}</span>
            <span style={{ fontSize: 15, color: 'var(--charcoal)' }}>
              {t('Two yards, zero plans to franchise.', 'Dos sucursales, cero planes de franquiciar.')}
            </span>
          </div>
        </div>

        {/* Stat grid, big numerals, vertical dividers, no double rule */}
        <div style={{
          display: 'grid', gridTemplateColumns: `repeat(${stats.length}, 1fr)`, gap: 0, }}>
          {stats.map(([n, label, sub], i) => (
            <div key={label.EN} style={{
              padding: i === 0 ? '0 28px 0 0' : `0 28px`, borderLeft: i === 0 ? 'none' : '1px solid rgba(0,16,17,0.12)', }}>
              <div className="display" style={{
                fontSize: 'clamp(48px, 5.4vw, 80px)', lineHeight: 1, color: 'var(--ink)', letterSpacing: '-0.02em', }}>{t(n)}</div>
              <div style={{
                marginTop: 22, fontSize: 15.5, fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.005em', }}>{t(label)}</div>
              <div className="mono" style={{
                marginTop: 6, fontSize: 14, letterSpacing: '0.08em', color: 'var(--charcoal)', lineHeight: 1.5, }}>{t(sub)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutCTA = () => {
  const t = useT();
  return (
  <CTABand
    kicker={t('Visit the yard', 'Visita la sucursal')}
    title={t('Walk the shop,', 'Recorre el taller,')}
    accent={t('meet the team.', 'conoce al equipo.')}
    body={t("Both yards are open Monday-Friday 7am-4pm and Saturday 7am-12pm. Call ahead and we'll have your materials staged when you pull in.", 'Ambas sucursales abren de lunes a viernes de 7am a 4pm y los sábados de 7am a 12pm. Llama con anticipación y tendremos tus materiales listos cuando llegues.')}
    primary={[t('Get a quote', 'Obtén una cotización'), 'estimate.html']}
    secondary={[t('Yard locations', 'Ubicaciones de sucursales'), 'solutions.html#yards']}
  />
  );
};

Object.assign(window, { AboutHero, AboutStory, AboutValues, AboutShop, AboutStats, AboutCTA });
