/* Yard Locations page: where to pick up orders, where material ships from, hours, and Google Maps for both yards. */

const YARDS = [
  {
    key: 'fm', chip: { EN: 'HQ · FORT MYERS', ES: 'SEDE · FORT MYERS' }, name: 'Fort Myers', address: '2621 Fowler St, Fort Myers, FL 33901', phone: '(239) 689-5496', tel: 'tel:2396895496', email: 'westernfencesupply@gmail.com', photo: 'assets/hero-warehouse.webp', mapQ: '2621 Fowler St, Fort Myers, FL 33901', notes: [
      { EN: 'Main warehouse, most material ships from here', ES: 'Almacén principal: la mayoría del material sale de aquí' }, { EN: 'In-house gate fabrication shop', ES: 'Taller de fabricación de portones en planta' }, { EN: 'Same-day pickup on standard qualifying orders', ES: 'Retiro el mismo día en pedidos estándar que califiquen' }, ], }, {
    key: 'pc', chip: { EN: 'PORT CHARLOTTE', ES: 'PORT CHARLOTTE' }, name: 'Port Charlotte', address: '1145 Enterprise Dr, Port Charlotte, FL 33953', phone: '(941) 391-6613', tel: 'tel:9413916613', email: 'westernfencesupplypc@gmail.com', photo: 'assets/wfs-shop.webp', mapQ: '1145 Enterprise Dr, Port Charlotte, FL 33953', notes: [
      { EN: 'Pickup point for Charlotte County and north', ES: 'Punto de retiro para el condado de Charlotte y el norte' }, { EN: 'Stock varies by yard, call ahead to confirm', ES: 'El stock varía por sucursal: llama antes para confirmar' }, { EN: 'Same supplier-direct pricing as Fort Myers', ES: 'El mismo precio directo de proveedor que Fort Myers' }, ], },
];

const LocationsHero = () => {
  const t = useT();
  return (
  <PageHero
    crumbs={[[t('Home', 'Inicio'), 'Homepage.html'], [t('Yard Locations', 'Sucursales'), null]]}
    eyebrow={t('Yard Locations', 'Sucursales')}
    title={t('Two yards.', 'Dos sucursales.')}
    accent={t('One supplier.', 'Un solo proveedor.')}
    subtitle={t('Pick up your order, see material in person, or have it delivered, everything ships from our Fort Myers and Port Charlotte yards. Hours, addresses and directions below.', 'Recoge tu pedido, ve el material en persona o recíbelo a domicilio: todo sale de nuestras sucursales de Fort Myers y Port Charlotte. Horarios, direcciones y cómo llegar, abajo.')}
    image="assets/hero-warehouse.webp"
  />
  );
};

const LocationsYards = () => {
  const t = useT();
  return (
  <section style={{ background: 'var(--white)', padding: '120px 0' }}>
    <div className="container">
      {/* Hours banner shared by both yards */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 32, paddingBottom: 28, marginBottom: 44, borderBottom: '2px solid var(--ink)', flexWrap: 'wrap', }}>
        <h2 className="display" style={{
          margin: 0, fontSize: 'clamp(30px, 3.4vw, 46px)', lineHeight: 1.02, letterSpacing: '-0.01em', fontWeight: 800, textTransform: 'uppercase', }}>
          {t('Visit a', 'Visita una')}{' '}
          <span style={{ color: 'var(--tangerine)' }}>{t('yard.', 'sucursal.')}</span>
        </h2>
        <div className="mono" style={{
          fontSize: 14.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--charcoal)', textAlign: 'right', }}>
          {t('Mon–Fri 7am–4pm · Sat 7am–12pm', 'Lun–Vie 7am–4pm · Sáb 7am–12pm')}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        {YARDS.map((y) => (
          <article key={y.key} style={{
            border: '1px solid rgba(0,16,17,0.12)', display: 'flex', flexDirection: 'column', overflow: 'hidden', }}>
            {/* Live map */}
            <div style={{ position: 'relative', aspectRatio: '16 / 9', background: '#263166' }}>
              <iframe
                title={y.name}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(y.mapQ)}&z=14&output=embed`}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
                loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
              <span className="mono" style={{
                position: 'absolute', top: 14, left: 14, background: 'var(--tangerine)', color: 'var(--ink)', padding: '5px 10px', fontSize: 13.5, letterSpacing: '0.18em', fontWeight: 700, }}>{t(y.chip)}</span>
            </div>

            <div style={{ padding: '26px 28px 28px', display: 'flex', flexDirection: 'column', gap: 18, flex: 1 }}>
              <div>
                <h3 className="display" style={{ margin: '0 0 6px', fontSize: 27.5, lineHeight: 1 }}>{y.name}</h3>
                <p style={{ margin: 0, fontSize: 16, color: 'var(--charcoal)' }}>{y.address}</p>
              </div>

              {/* Contact rows */}
              <div style={{ display: 'grid', gap: 8 }}>
                <a href={y.tel} className="mono" style={{
                  fontSize: 15.5, fontWeight: 700, letterSpacing: '0.06em', color: 'var(--ink)', }}>{y.phone}</a>
                <a href={`mailto:${y.email}`} style={{
                  fontSize: 15, color: 'var(--laser-blue)', wordBreak: 'break-all', }}>{y.email}</a>
              </div>

              {/* What this yard does */}
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 8 }}>
                {y.notes.map((n, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, fontSize: 15, lineHeight: 1.5, color: 'var(--charcoal)' }}>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 3 }}>
                      <path d="M3 8.5 L6.5 12 L13 4.5" stroke="var(--tangerine)" strokeWidth="2" strokeLinecap="square"/>
                    </svg>
                    {t(n)}
                  </li>
                ))}
              </ul>

              {/* Directions CTA pinned at the bottom */}
              <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(y.mapQ)}`}
                target="_blank" rel="noopener" className="mono" style={{
                marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 14, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--tangerine)', }}>
                {t('Get directions', 'Cómo llegar')}
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square"/>
                </svg>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
  );
};

const LocationsPickup = () => {
  const t = useT();
  const steps = [
    [{ EN: 'Confirm before you drive', ES: 'Confirma antes de manejar' }, { EN: 'Stock varies by yard. Call or email first and we confirm availability and which yard your order is staged at.', ES: 'El stock varía por sucursal. Llama o escribe primero y te confirmamos disponibilidad y en qué sucursal está tu pedido.' }], [{ EN: 'Same-day staging', ES: 'Preparación el mismo día' }, { EN: 'Call ahead and standard qualifying orders are pulled and staged the same day, ready at the bay when you arrive.', ES: 'Si avisas con anticipación, los pedidos estándar que califiquen se preparan el mismo día, listos en la bahía cuando llegues.' }], [{ EN: 'Or we deliver', ES: 'O te lo llevamos' }, { EN: 'Job-site delivery on our own trucks throughout Florida. Fees vary by location and order size. We confirm both with your quote.', ES: 'Entrega en obra con nuestros propios camiones en toda Florida. El costo varía según ubicación y tamaño del pedido: te confirmamos ambos con tu cotización.' }], ];
  return (
  <section className="wfs-brand-texture" style={{ backgroundColor: 'var(--ink)', color: 'var(--parchment)', padding: '120px 0' }}>
    <div className="container">
      <h2 className="display" style={{
        margin: '0 0 44px', fontSize: 'clamp(28px, 3vw, 42px)', lineHeight: 1.02, letterSpacing: '-0.01em', fontWeight: 800, textTransform: 'uppercase', color: 'var(--white)', }}>
        {t('How pickup', 'Cómo funciona')}{' '}
        <span style={{ color: 'var(--tangerine)' }}>{t('works.', 'el retiro.')}</span>
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {steps.map(([title, body], i) => (
          <div key={i} style={{
            padding: '28px 26px', border: '1px solid rgba(255,255,255,0.16)', background: 'rgba(255,255,255,0.03)', }}>
            <div className="display" style={{ fontSize: 31.5, color: 'var(--tangerine)', lineHeight: 1, marginBottom: 16 }}>0{i + 1}</div>
            <h3 className="display" style={{ margin: '0 0 10px', fontSize: 21.5, lineHeight: 1.1, color: 'var(--white)' }}>{t(title)}</h3>
            <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6, color: 'var(--alice-blue)' }}>{t(body)}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

const LocationsCTA = () => {
  const t = useT();
  return (
  <CTABand
    kicker={t('Before you visit', 'Antes de visitar')}
    title={t('Want it staged', '¿Quieres tu pedido listo')}
    accent={t('before you arrive?', 'antes de llegar?')}
    body={t("Send your order or quote request first and we'll have it pulled, staged and ready at the bay, Fort Myers or Port Charlotte.", 'Envía tu pedido o solicitud de cotización primero y lo tendremos preparado y listo en la bahía, en Fort Myers o Port Charlotte.')}
    primary={[t('Request a Quote', 'Solicitar cotización'), 'estimate.html#contact']}
    secondary={[t('Call (239) 689-5496', 'Llamar (239) 689-5496'), 'tel:2396895496']}
  />
  );
};

Object.assign(window, { LocationsHero, LocationsYards, LocationsPickup, LocationsCTA });
