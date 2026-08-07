/* Estimate page, hero + live agent (form comes from FinalCTA in sections.jsx) */

const EstimateHero = () => {
  const t = useT();
  return (
  <section style={{
    position: 'relative', color: 'var(--white)', overflow: 'hidden', minHeight: 'clamp(520px, 78vh, 680px)', display: 'flex', flexDirection: 'column', background: '#263166', }}>
    {/* Industrial warehouse backdrop */}
    <img src="assets/projects/pvc-privacy-gate-white.jpg" alt="" aria-hidden style={{
      position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 55%', zIndex: 0, filter: 'saturate(0.85) contrast(1.05)', }}/>
    {/* Dark scrim, stronger on left, lighter on right for hierarchy */}
    <div aria-hidden style={{
      position: 'absolute', inset: 0, zIndex: 1, background:
        'linear-gradient(100deg, rgba(38, 49, 102,0.92) 0%, rgba(38, 49, 102,0.78) 38%, rgba(38, 49, 102,0.52) 70%, rgba(38, 49, 102,0.35) 100%)', }}/>
    {/* Bottom fade so the process strip stays anchored */}
    <div aria-hidden style={{
      position: 'absolute', left: 0, right: 0, bottom: 0, height: '40%', zIndex: 1, background: 'linear-gradient(180deg, rgba(38, 49, 102,0) 0%, rgba(38, 49, 102,0.55) 60%, rgba(38, 49, 102,0.85) 100%)', }}/>

    {/* Hero body */}
    <div className="container" style={{
      position: 'relative', zIndex: 2, width: '100%', flex: 1, display: 'flex', flexDirection: 'column', paddingTop: 96, paddingBottom: 40, }}>
      {/* Main heading */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: 720 }}>
        <h1 style={{
          margin: '0 0 20px', fontFamily: 'var(--display)', fontVariationSettings: "'wdth' 100", fontWeight: 800, fontSize: 'clamp(30px, 3.4vw, 48px)', lineHeight: 1.02, letterSpacing: '-0.015em', textTransform: 'uppercase', color: 'var(--white)', textShadow: '0 2px 28px rgba(0,0,0,0.28)', }}>
          {t('Draw your fence.', 'Dibuja tu cerca.')}{' '}
          <span style={{ color: 'var(--blue-ice)' }}>{t('Get a binding quote in 24 hours.', 'Obtén una cotización en firme en 24 horas.')}</span>
        </h1>
        <p style={{
          fontSize: 17.5, lineHeight: 1.5, maxWidth: 460, margin: 0, color: 'rgba(255,255,255,0.85)', }}>
          {t('Sketch your layout or send linear feet, height, gate count and ZIP. One rep follows the order from quote to pickup or delivery.', 'Dibuja tu diseño o envía los pies lineales, la altura, la cantidad de portones y el código postal. Un asesor da seguimiento al pedido desde la cotización hasta el retiro o la entrega.')}
        </p>
        <div style={{ marginTop: 32, display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
          <a href="https://app.westernfencesupply.com/" target="_blank" rel="noopener" style={{
            display: 'inline-flex', alignItems: 'center', gap: 12, padding: '16px 26px', borderRadius: 999, background: 'var(--tangerine)', color: 'var(--white)', fontFamily: 'var(--sans)', fontSize: 15.5, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', boxShadow: '0 10px 28px rgba(255, 113, 51,0.4)', transition: 'transform 0.18s, box-shadow 0.18s, background 0.18s', }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 14px 36px rgba(255, 113, 51,0.5)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 10px 28px rgba(255, 113, 51,0.4)'; }}>
            {t('Draw your fence', 'Dibuja tu cerca')}
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
          </a>
          <a href="#contact" className="mono" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10, paddingBottom: 4, fontSize: 14.5, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--white)', borderBottom: '1px solid rgba(255,255,255,0.5)', }}>
            {t('Or send the project below ↓', 'O envía el proyecto abajo ↓')}
          </a>
        </div>
      </div>

      {/* 3-step process strip at the bottom of the hero */}
      <div className="wfs-est-steps" style={{
        marginTop: 56, paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.18)', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, }}>
        {[
          ['01', t('Send your run', 'Envía tu tramo'), t('Linear feet · height · gate count · ZIP. Survey or sketch optional.', 'Pies lineales · altura · cantidad de portones · código postal. Levantamiento o dibujo opcional.')], ['02', t('We quote in 24h', 'Cotizamos en 24 h'), t('Stock, lead time, delivery or pickup window, all in one email.', 'Existencias, tiempo de entrega, ventana de entrega o retiro, todo en un solo correo.')], ['03', t('Pickup or delivery', 'Retiro o entrega'), t('FM or PC yard · Mon-Fri 7:30am-3:30pm, Sat mornings. Same-day staging if called ahead.', 'Sucursal de FM o PC · lun-vie 7:30am-3:30pm, sáb por la mañana. Preparación el mismo día si avisas con anticipación.')], ].map(([n, title, sub], i, arr) => (
          <div key={n} style={{
            paddingLeft: i === 0 ? 0 : 28, borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.18)', }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 12 }}>
              <span className="display" style={{
                fontSize: 31.5, lineHeight: 1, color: 'var(--tangerine)', letterSpacing: '-0.01em', }}>{n}</span>
              <span style={{
                fontSize: 16.5, fontWeight: 600, color: 'var(--white)', letterSpacing: '-0.005em', }}>{title}</span>
            </div>
            <p className="mono" style={{
              margin: 0, fontSize: 14, letterSpacing: '0.06em', lineHeight: 1.55, color: 'rgba(255,255,255,0.7)', }}>{sub}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

const LiveAgentBand = () => {
  const t = useT();
  return (
  <section id="quote" style={{
    background: 'var(--white)', padding: '120px 0', borderTop: '1px solid rgba(0,16,17,0.08)', scrollMarginTop: 120, }}>
    <div className="container">
      {/* Editorial header */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 56, alignItems: 'end', paddingBottom: 32, marginBottom: 40, borderBottom: '1px solid rgba(0,16,17,0.12)', }}>
        <div>
          <h2 className="display" style={{
            margin: 0, fontSize: 'clamp(28px, 3vw, 44px)', lineHeight: 1, letterSpacing: '-0.02em', maxWidth: 620, }}>
            {t('Talk to a', 'Habla con un')} <span style={{ color: 'var(--tangerine)' }}>{t('real sales rep', 'asesor de ventas real')}</span>
            <span style={{ color: 'var(--charcoal)', fontWeight: 700 }}>{t(', no chatbot.', ', sin chatbot.')}</span>
          </h2>
        </div>
        <p style={{
          margin: 0, maxWidth: 320, justifySelf: 'end', textAlign: 'right', fontSize: 15, lineHeight: 1.6, color: 'var(--charcoal)', }}>
          {t('Our sales representatives split calls Monday through Friday during business hours.', 'Nuestros asesores de ventas atienden las llamadas de lunes a viernes en horario laboral.')}
        </p>
      </div>

      {/* Two contact cards, ink + white for visual rhythm */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        {/* CALL card, ink */}
        <a href="tel:2396895496" style={{
          display: 'block', padding: '40px 36px', background: 'var(--ink)', color: 'var(--parchment)', textDecoration: 'none', border: '1px solid var(--ink)', transition: 'transform 0.18s ease, box-shadow 0.18s ease', }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 18px 36px -18px rgba(38, 49, 102,0.5)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32, }}>
            <div className="mono" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 13.5, fontWeight: 700, letterSpacing: '0.22em', color: 'var(--tangerine)', textTransform: 'uppercase', }}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 3h3l1.5 4-2 1c1 2 2.5 3.5 4.5 4.5l1-2 4 1.5v3c0 0.5-0.5 1-1 1C8 16 0 8 0 4c0-0.5 0.5-1 1-1z" stroke="currentColor" strokeWidth="1.4" fill="none"/>
              </svg>
              {t('01, Call', '01, Llamar')}
            </div>
            <span style={{
              width: 38, height: 38, borderRadius: '50%', background: 'var(--tangerine)', color: 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square"/>
              </svg>
            </span>
          </div>
          <div className="display" style={{
            fontSize: 'clamp(30px, 3.6vw, 46px)', lineHeight: 1, letterSpacing: '-0.02em', marginBottom: 18, }}>
            (239) 689-5496
          </div>
          <div className="mono" style={{
            fontSize: 14, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--alice-blue)', lineHeight: 1.5, }}>
            {t('Real sales reps, no bots', 'Asesores de ventas reales, sin bots')}<br/>
            {t('Fort Myers + Port Charlotte yards', 'Sucursales de Fort Myers + Port Charlotte')}
          </div>
        </a>

        {/* EMAIL card, white */}
        <a href="mailto:sales@westernfencesupply.com" style={{
          display: 'block', padding: '40px 36px', background: 'var(--white)', color: 'var(--ink)', textDecoration: 'none', border: '1px solid var(--ink)', transition: 'transform 0.18s ease, box-shadow 0.18s ease', }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 18px 36px -18px rgba(0,16,17,0.25)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32, }}>
            <div className="mono" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 13.5, fontWeight: 700, letterSpacing: '0.22em', color: 'var(--tangerine)', textTransform: 'uppercase', }}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <rect x="1.5" y="3" width="13" height="10" stroke="currentColor" strokeWidth="1.4"/>
                <path d="M1.5 4 L8 9 L14.5 4" stroke="currentColor" strokeWidth="1.4"/>
              </svg>
              {t('02, Email', '02, Correo')}
            </div>
            <span style={{
              width: 38, height: 38, borderRadius: '50%', background: 'var(--ink)', color: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square"/>
              </svg>
            </span>
          </div>
          <div className="display" style={{
            fontSize: 'clamp(20px, 2.2vw, 28px)', lineHeight: 1.1, letterSpacing: '-0.01em', marginBottom: 18, wordBreak: 'break-all', }}>
            sales@westernfencesupply.com
          </div>
          <div className="mono" style={{
            fontSize: 14, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--charcoal)', lineHeight: 1.5, }}>
            {t('We follow up with a detailed quote', 'Te damos seguimiento con una cotización detallada')}<br/>
            {t('Attach a sketch or survey if you have one', 'Adjunta un dibujo o levantamiento si tienes uno')}
          </div>
        </a>
      </div>
    </div>
  </section>
  );
};

Object.assign(window, { EstimateHero, LiveAgentBand });
