/* Contact page: contact info visible from the first moment + a general
   contact form. Kept separate from the Material Quote flow (estimate). */

const CONTACT_YARDS = [
  {
    key: 'fm',
    name: 'Fort Myers',
    chip: { EN: 'HQ · FORT MYERS', ES: 'SEDE · FORT MYERS' },
    address: '2621 Fowler St, Fort Myers, FL 33901',
    phone: '(239) 689-5496',
    tel: 'tel:+12396895496',
    email: 'westernfencesupply@gmail.com',
    mapQ: '2621 Fowler St, Fort Myers, FL 33901',
  },
  {
    key: 'pc',
    name: 'Port Charlotte',
    chip: { EN: 'PORT CHARLOTTE', ES: 'PORT CHARLOTTE' },
    address: '1145 Enterprise Dr, Port Charlotte, FL 33953',
    phone: '(941) 391-6613',
    tel: 'tel:+19413916613',
    email: 'westernfencesupplypc@gmail.com',
    mapQ: '1145 Enterprise Dr, Port Charlotte, FL 33953',
  },
];

const ContactHero = () => {
  const t = useT();
  return (
  <section style={{ background: 'var(--ink)', color: 'var(--white)', padding: 'clamp(56px, 9vh, 96px) 0' }}>
    <div className="container">
      <h1 className="display" style={{
        margin: 0, fontSize: 'clamp(32px, 3.8vw, 54px)', lineHeight: 1.02,
        letterSpacing: '-0.01em', fontWeight: 800, textTransform: 'uppercase',
      }}>
        {t('Contact', 'Contacto')}
      </h1>
      <p style={{ margin: '16px 0 0', maxWidth: 560, fontSize: 15.5, lineHeight: 1.6, color: 'var(--alice-blue)' }}>
        {t('Phones, emails, addresses and hours for both yards — right here. Looking for material pricing instead?',
           'Teléfonos, correos, direcciones y horarios de ambas sucursales, aquí mismo. ¿Buscas precios de material?')}
        {' '}<a href="estimate.html#contact" style={{ color: 'var(--white)', borderBottom: '1px solid var(--tangerine)' }}>
          {t('Request a material quote', 'Solicita una cotización de material')}
        </a>.
      </p>
    </div>
  </section>
  );
};

const ContactInfo = () => {
  const t = useT();
  return (
  <section style={{ background: 'var(--white)', padding: 'clamp(56px, 8vh, 90px) 0' }}>
    <div className="container">
      {/* Hours banner */}
      <div className="mono" style={{
        display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28,
        fontSize: 13, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase',
        color: 'var(--charcoal)',
      }}>
        <span aria-hidden style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--tangerine)' }}/>
        {t('Hours: Mon–Fri 7am–4pm · Sat 7am–12pm', 'Horario: lun–vie 7am–4pm · sáb 7am–12pm')}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        {CONTACT_YARDS.map((y) => (
          <article key={y.key} style={{
            border: '1px solid rgba(0,16,17,0.12)', padding: '26px 28px',
            display: 'flex', flexDirection: 'column', gap: 14,
          }}>
            <span className="mono" style={{
              alignSelf: 'flex-start',
              background: 'var(--tangerine)', color: 'var(--ink)',
              padding: '5px 10px', fontSize: 12, letterSpacing: '0.18em', fontWeight: 700,
            }}>{t(y.chip)}</span>
            <div>
              <h2 className="display" style={{ margin: '0 0 6px', fontSize: 24, lineHeight: 1 }}>{y.name}</h2>
              <p style={{ margin: 0, fontSize: 14.5, color: 'var(--charcoal)' }}>{y.address}</p>
            </div>
            <div style={{ display: 'grid', gap: 8 }}>
              <a href={y.tel} className="mono" style={{ fontSize: 15, fontWeight: 700, letterSpacing: '0.04em', color: 'var(--ink)' }}>
                {y.phone}
              </a>
              <a href={`mailto:${y.email}`} style={{ fontSize: 13.5, color: 'var(--laser-blue)', wordBreak: 'break-all' }}>{y.email}</a>
            </div>
            <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap', marginTop: 'auto', paddingTop: 6 }}>
              <a href={y.tel} className="mono" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                fontSize: 12, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase',
                color: 'var(--ink)', borderBottom: '1px solid var(--ink)', paddingBottom: 3,
              }}>{t('Call this location', 'Llamar a esta sucursal')}</a>
              <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(y.mapQ)}`}
                target="_blank" rel="noopener" className="mono" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                fontSize: 12, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase',
                color: 'var(--tangerine)',
              }}>
                {t('Get directions', 'Cómo llegar')}
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square"/></svg>
              </a>
            </div>
          </article>
        ))}
      </div>

      <p style={{ margin: '18px 0 0', fontSize: 13, color: 'var(--charcoal)' }}>
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
  const inputStyle = {
    width: '100%', padding: '14px 16px',
    border: '1px solid rgba(0,16,17,0.25)', background: 'var(--white)',
    fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--ink)',
  };
  const labelStyle = {
    display: 'block', marginBottom: 8,
    fontFamily: 'var(--mono)', fontSize: 12, fontWeight: 700,
    letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink)',
  };
  return (
  <section id="message" style={{ background: 'var(--white)', padding: '0 0 clamp(64px, 9vh, 110px)', scrollMarginTop: 120 }}>
    <div className="container">
      <div style={{
        border: '1px solid rgba(0,16,17,0.12)', padding: 'clamp(28px, 4vw, 48px)',
        display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 48, alignItems: 'start',
      }}>
        <div>
          <h2 className="display" style={{
            margin: 0, fontSize: 'clamp(24px, 2.4vw, 34px)', lineHeight: 1.05,
            textTransform: 'uppercase', fontWeight: 800,
          }}>
            {t('Send us a', 'Envíanos un')}{' '}
            <span style={{ color: 'var(--tangerine)' }}>{t('message.', 'mensaje.')}</span>
          </h2>
          <p style={{ margin: '14px 0 0', fontSize: 14, lineHeight: 1.6, color: 'var(--charcoal)', maxWidth: 320 }}>
            {t('Questions, feedback, or anything that is not a material quote. For pricing, use the quote form so it reaches the right rep with the right details.',
               'Preguntas, comentarios o cualquier tema que no sea una cotización de material. Para precios, usa el formulario de cotización para que llegue al asesor correcto con los datos correctos.')}
          </p>
        </div>
        {submitted ? (
          <div style={{ padding: '40px 0' }}>
            <div className="display" style={{ fontSize: 26, marginBottom: 10 }}>{t('Message sent.', 'Mensaje enviado.')}</div>
            <p style={{ margin: 0, fontSize: 14.5, color: 'var(--charcoal)' }}>
              {t('Thanks — we reply during business hours, usually the same day.', 'Gracias: respondemos en horario laboral, normalmente el mismo día.')}
            </p>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'grid', gap: 18 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
              <div>
                <label style={labelStyle}>{t('Full name', 'Nombre completo')}</label>
                <input required style={inputStyle} placeholder="Jane Smith"/>
              </div>
              <div>
                <label style={labelStyle}>{t('Email', 'Correo')}</label>
                <input required type="email" style={inputStyle} placeholder="jane@email.com"/>
              </div>
            </div>
            <div>
              <label style={labelStyle}>{t('Phone (optional)', 'Teléfono (opcional)')}</label>
              <input style={inputStyle} placeholder="(239) 555-0142"/>
            </div>
            <div>
              <label style={labelStyle}>{t('Message', 'Mensaje')}</label>
              <textarea required rows={5} style={{ ...inputStyle, resize: 'vertical', minHeight: 110 }}
                placeholder={t('How can we help?', '¿Cómo podemos ayudarte?')}/>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 12.5, color: 'var(--charcoal)' }}>
                {t('By submitting, you agree to be contacted by Western Fence Supply.', 'Al enviar, aceptas que Western Fence Supply te contacte.')}
              </span>
              <button type="submit" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '15px 28px', background: 'var(--ink)', color: 'var(--white)',
                fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 700,
                letterSpacing: '0.14em', textTransform: 'uppercase', cursor: 'pointer',
              }}>
                {t('Send message', 'Enviar mensaje')}
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  </section>
  );
};

Object.assign(window, { ContactHero, ContactInfo, ContactForm });
