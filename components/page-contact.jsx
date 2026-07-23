/* Contact page: contact info visible from the first moment + a general
   contact form. Kept separate from the Material Quote flow (estimate). */

const CONTACT_YARDS = [
  {
    key: 'fm', name: 'Fort Myers', chip: { EN: 'HQ · FORT MYERS', ES: 'SEDE · FORT MYERS' }, address: '2621 Fowler St, Fort Myers, FL 33901', phone: '(239) 689-5496', tel: 'tel:+12396895496', email: 'sales@westernfencesupply.com', mapQ: '2621 Fowler St, Fort Myers, FL 33901', }, {
    key: 'pc', name: 'Port Charlotte', chip: { EN: 'PORT CHARLOTTE', ES: 'PORT CHARLOTTE' }, address: '1145 Enterprise Dr, Port Charlotte, FL 33953', phone: '(941) 623-6890', tel: 'tel:+19416236890', email: 'salespc@westernfencesupply.com', mapQ: '1145 Enterprise Dr, Port Charlotte, FL 33953', },
];

const ContactHero = () => {
  const t = useT();
  return (
  <PageHero
    crumbs={[[t('Home', 'Inicio'), 'Homepage.html'], [t('Contact', 'Contacto'), null]]}
    eyebrow={t('Contact · Western Fence Supply', 'Contacto · Western Fence Supply')}
    title={t('Contact.', 'Contacto.')}
    subtitle={t('Phones, emails, addresses and hours for both yards, right here. Looking for material pricing? Use the quote form so it reaches the right rep.', 'Teléfonos, correos, direcciones y horarios de ambas sucursales, aquí mismo. ¿Buscas precios de material? Usa el formulario de cotización para que llegue al asesor correcto.')}
    image="assets/hero-warehouse.webp"
  />
  );
};

const ContactInfo = () => {
  const t = useT();
  return (
  <section style={{ background: 'var(--white)', padding: 'clamp(56px, 8vh, 90px) 0' }}>
    <div className="container">
      {/* Header row over a heavy rule */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap', paddingBottom: 24, marginBottom: 36, borderBottom: '2px solid var(--ink)', }}>
        <h2 className="display" style={{
          margin: 0, fontSize: 'clamp(26px, 2.8vw, 40px)', lineHeight: 1.02, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.01em', }}>
          {t('Visit or call', 'Visita o llama a')}{' '}
          <span style={{ color: 'var(--tangerine)' }}>{t('a yard.', 'una sucursal.')}</span>
        </h2>
        <div className="mono" style={{
          display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 14, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--charcoal)', }}>
          <span aria-hidden style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--tangerine)' }}/>
          {t('Mon–Fri 7am–4pm · Sat 7am–12pm', 'Lun–Vie 7am–4pm · Sáb 7am–12pm')}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        {CONTACT_YARDS.map((y) => (
          <article key={y.key} style={{
            border: '1px solid rgba(0,16,17,0.12)', borderTop: '3px solid var(--tangerine)', padding: '28px 30px 30px', display: 'flex', flexDirection: 'column', gap: 20, }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
              <div>
                <h3 className="display" style={{ margin: '0 0 6px', fontSize: 28.5, lineHeight: 1 }}>{y.name}</h3>
                <p style={{ margin: 0, fontSize: 16, color: 'var(--charcoal)' }}>{y.address}</p>
              </div>
              <span className="mono" style={{
                flexShrink: 0, background: 'var(--ink)', color: 'var(--white)', padding: '5px 10px', fontSize: 13, letterSpacing: '0.18em', fontWeight: 700, textTransform: 'uppercase', }}>{t(y.chip)}</span>
            </div>

            {/* Contact rows with icons */}
            <div style={{ display: 'grid', gap: 12, paddingTop: 4 }}>
              <a href={y.tel} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span aria-hidden style={{
                  width: 34, height: 34, flexShrink: 0, border: '1.5px solid var(--ink)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--tangerine)', }}>
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <path d="M3 3h3l1.5 4-2 1c1 2 2.5 3.5 4.5 4.5l1-2 4 1.5v3c0 0.5-0.5 1-1 1C8 16 0 8 0 4c0-0.5 0.5-1 1-1z" transform="translate(0.5,0)"/>
                  </svg>
                </span>
                <span className="display" style={{ fontSize: 22.5, fontWeight: 800, letterSpacing: '0.01em', color: 'var(--ink)' }}>{y.phone}</span>
              </a>
              <a href={`mailto:${y.email}`} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span aria-hidden style={{
                  width: 34, height: 34, flexShrink: 0, border: '1.5px solid var(--ink)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--tangerine)', }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="M3 7 L12 13 L21 7"/>
                  </svg>
                </span>
                <span style={{ fontSize: 15.5, color: 'var(--laser-blue)', wordBreak: 'break-all' }}>{y.email}</span>
              </a>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 'auto', paddingTop: 8 }}>
              <a href={y.tel} className="mono" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 20px', background: 'var(--ink)', color: 'var(--white)', fontSize: 13.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', }}>{t('Call this location', 'Llamar a esta sucursal')}</a>
              <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(y.mapQ)}`}
                target="_blank" rel="noopener" className="mono" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 20px', border: '1px solid var(--ink)', color: 'var(--ink)', fontSize: 13.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', }}>
                {t('Get directions', 'Cómo llegar')}
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square"/></svg>
              </a>
            </div>
          </article>
        ))}
      </div>

      <p style={{ margin: '18px 0 0', fontSize: 14.5, color: 'var(--charcoal)' }}>
        {t('General inquiries:', 'Consultas generales:')}{' '}
        <a href="mailto:sales@westernfencesupply.com" style={{ color: 'var(--ink)', borderBottom: '1px solid var(--tangerine)' }}>sales@westernfencesupply.com</a>
        {' · '}
        <a href="locations.html" style={{ color: 'var(--ink)', borderBottom: '1px solid var(--tangerine)' }}>{t('Pickup info & maps', 'Info de retiro y mapas')}</a>
      </p>
    </div>
  </section>
  );
};

const ContactForm = () => {
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
      await submitLead(e.target, { form: 'contact', subject: 'Website Contact Message' });
      setSubmitted(true);
    } catch (err) {
      setError((err && err.message) || t(
        "We couldn't send your message. Please call (239) 689-5496 or email sales@westernfencesupply.com.", 'No pudimos enviar tu mensaje. Llama al (239) 689-5496 o escribe a sales@westernfencesupply.com.'
      ));
    } finally {
      busy.current = false;
      setSending(false);
    }
  };
  const inputStyle = {
    width: '100%', padding: '14px 16px', border: '1px solid rgba(0,16,17,0.25)', background: 'var(--white)', fontFamily: 'var(--sans)', fontSize: 15.5, color: 'var(--ink)', };
  const labelStyle = {
    display: 'block', marginBottom: 8, fontFamily: 'var(--mono)', fontSize: 13.5, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink)', };
  const expectations = [
    { EN: 'Replies during business hours, usually the same day', ES: 'Respondemos en horario laboral, normalmente el mismo día' }, { EN: 'A real person from the yard, no chatbot', ES: 'Una persona real de la sucursal, sin chatbot' }, { EN: 'English and Spanish', ES: 'Inglés y español' }, ];
  return (
  <section id="message" style={{ background: 'var(--white)', padding: '0 0 clamp(64px, 9vh, 110px)', scrollMarginTop: 120 }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 0, alignItems: 'stretch' }}>
        {/* Ink intro panel */}
        <div className="wfs-brand-texture" style={{
          backgroundColor: 'var(--ink)', color: 'var(--white)', padding: 'clamp(32px, 4vw, 52px)', display: 'flex', flexDirection: 'column', gap: 22, }}>
          <h2 className="display" style={{
            margin: 0, fontSize: 'clamp(26px, 2.6vw, 38px)', lineHeight: 1.05, textTransform: 'uppercase', fontWeight: 800, color: 'var(--white)', }}>
            {t('Send us a', 'Envíanos un')}{' '}
            <span style={{ color: 'var(--tangerine)' }}>{t('message.', 'mensaje.')}</span>
          </h2>
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: 'var(--alice-blue)', maxWidth: 340 }}>
            {t('Questions, feedback, or anything that is not a material quote. For pricing, use the quote form so it reaches the right rep with the right details.', 'Preguntas, comentarios o cualquier tema que no sea una cotización de material. Para precios, usa el formulario de cotización para que llegue al asesor correcto con los datos correctos.')}
          </p>
          <ul style={{ listStyle: 'none', margin: 'auto 0 0', padding: 0, display: 'grid', gap: 12 }}>
            {expectations.map((x, i) => (
              <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 15, lineHeight: 1.5, color: 'var(--alice-blue)' }}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 3 }}>
                  <path d="M3 8 L7 12 L13 4" stroke="var(--tangerine)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {t(x)}
              </li>
            ))}
          </ul>
        </div>

        {/* Form card */}
        <div style={{
          background: 'var(--white)', border: '1px solid rgba(0,16,17,0.15)', padding: 'clamp(28px, 3.5vw, 48px)', }}>
          {submitted ? (
            <div style={{ padding: '48px 0', textAlign: 'center' }}>
              <span aria-hidden style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 60, height: 60, borderRadius: '50%', background: 'var(--tangerine)', color: 'var(--white)', marginBottom: 18, }}>
                <svg width="26" height="26" viewBox="0 0 16 16" fill="none"><path d="M3 8.5 L6.5 12 L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <div className="display" style={{ fontSize: 27.5, marginBottom: 10 }}>{t('Message sent.', 'Mensaje enviado.')}</div>
              <p style={{ margin: 0, fontSize: 16, color: 'var(--charcoal)' }}>
                {t('Thanks, we reply during business hours, usually the same day.', 'Gracias: respondemos en horario laboral, normalmente el mismo día.')}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 18 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
                <div>
                  <label style={labelStyle}>{t('Full name', 'Nombre completo')}</label>
                  <input name="name" required style={inputStyle} placeholder="Jane Smith"/>
                </div>
                <div>
                  <label style={labelStyle}>{t('Email', 'Correo')}</label>
                  <input name="email" required type="email" style={inputStyle} placeholder="jane@email.com"/>
                </div>
              </div>
              <div>
                <label style={labelStyle}>{t('Phone (optional)', 'Teléfono (opcional)')}</label>
                <input name="phone" style={inputStyle} placeholder="(239) 555-0142"/>
              </div>
              <div>
                <label style={labelStyle}>{t('Message', 'Mensaje')}</label>
                <textarea name="message" required rows={5} style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                  placeholder={t('How can we help?', '¿Cómo podemos ayudarte?')}/>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                <span style={{ fontSize: 14, color: 'var(--charcoal)', maxWidth: 300 }}>
                  {t('By submitting, you agree to be contacted by Western Fence Supply.', 'Al enviar, aceptas que Western Fence Supply te contacte.')}
                </span>
                <button type="submit" disabled={sending} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10, opacity: sending ? 0.6 : 1, padding: '15px 28px', background: 'var(--tangerine)', color: 'var(--white)', fontFamily: 'var(--sans)', fontSize: 14.5, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', cursor: 'pointer', boxShadow: '0 10px 26px rgba(255, 113, 51,0.35)', transition: 'transform 0.18s', }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; }}>
                  {sending ? t('Sending…', 'Enviando…') : t('Send message', 'Enviar mensaje')}
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
                </button>
              </div>
              {error && (
                <p role="alert" style={{
                  margin: 0, padding: '14px 16px', borderRadius: 12, background: 'rgba(255,113,51,0.08)', border: '1px solid rgba(255,113,51,0.35)', fontSize: 15.5, lineHeight: 1.5, color: 'var(--ink)', }}>{error}</p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  </section>
  );
};

Object.assign(window, { ContactHero, ContactInfo, ContactForm });
