/* Western Fence Supply — landing page (dedicated homepage template).
   Follows the contractor/homeowner material-supply spec. Reuses Logo,
   FENCE_IMG, useT/useLang and ProjectGallery from the shared bundle. */

const HOME_PHONE_FM = { label: '(239) 689-5466', tel: 'tel:2396895466' };
const HOME_PHONE_PC = { label: '(941) 391-8613', tel: 'tel:9413918613' };

const hIcon = (path, size = 18) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{path}</svg>
);
const IconPin = (s) => hIcon(<><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/></>, s);
const IconTag = (s) => hIcon(<><path d="M20.6 13.4 11 3.8a2 2 0 0 0-1.4-.6H4v5.6a2 2 0 0 0 .6 1.4l9.6 9.6a2 2 0 0 0 2.8 0l3.6-3.6a2 2 0 0 0 0-2.8Z"/><circle cx="7.7" cy="7.7" r="1.1"/></>, s);
const IconPhone = (s) => hIcon(<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z"/>, s);
const IconHammer = (s) => hIcon(<><path d="m15 12-8.5 8.5a2.1 2.1 0 0 1-3-3L12 9"/><path d="M17.6 6.4 14 10l-2-2 3.6-3.6a2.5 2.5 0 0 1 3.5 0l.5.5a2.5 2.5 0 0 1 0 3.5L22 9"/></>, s);
const IconTruck = (s) => hIcon(<><path d="M3 16V6a1 1 0 0 1 1-1h10v11"/><path d="M14 9h4l3 3v4h-7"/><circle cx="7.5" cy="17.5" r="1.8"/><circle cx="17.5" cy="17.5" r="1.8"/></>, s);
const IconBadge = (s) => hIcon(<><path d="M12 3 19 6v6q0 5-7 9-7-4-7-9V6Z"/><path d="M9 12l2 2 4-4"/></>, s);
const IconArrow = (s = 14) => <svg width={s} height={s} viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>;
const IconStar = (s = 16) => <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="m12 2 2.9 6.3 6.8.7-5.1 4.6 1.5 6.7L12 17.8 5.9 20.3l1.5-6.7L2.3 9l6.8-.7Z"/></svg>;

/* ─────────────── 1+2. Header (top bar + main nav) ─────────────── */

const HomeHeader = () => {
  const t = useT();
  const [lang, setLang] = useLang();
  const [open, setOpen] = React.useState(false);
  const nav = [
    ['Products', 'products.html'],
    ['Contractors', 'contractors.html'],
    ['Projects', 'projects.html'],
    ['FAQ', 'faq.html'],
    ['Contact', 'estimate.html'],
  ];
  const quoteBtn = (extra = {}) => (
    <a href="estimate.html" style={{
      display: 'inline-flex', alignItems: 'center', gap: 10,
      padding: '13px 22px', borderRadius: 999,
      background: 'var(--tangerine)', color: 'var(--white)',
      fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 700,
      letterSpacing: '0.04em', textTransform: 'uppercase',
      boxShadow: '0 8px 22px rgba(255,113,51,0.32)', whiteSpace: 'nowrap', ...extra,
    }}>{t('Request a Material Quote', 'Solicitar cotización de material')} {IconArrow(13)}</a>
  );
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 60, background: 'var(--white)' }}>
      {/* Top bar */}
      <div style={{ background: 'var(--ink)', color: 'var(--alice-blue)' }}>
        <div className="container wfs-home-topbar" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 24, paddingTop: 9, paddingBottom: 9,
          fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.06em',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 26, flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <span style={{ color: 'var(--tangerine)' }}>{IconPin(14)}</span>
              {t('Proudly Serving All of Florida', 'Con orgullo en todo Florida')}
            </span>
            <span className="wfs-topbar-disc" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <span style={{ color: 'var(--tangerine)' }}>{IconTag(14)}</span>
              {t('Contractor Pricing & Volume Discounts', 'Precios de contratista y descuentos por volumen')}
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 22, flexWrap: 'wrap' }}>
            <a href={HOME_PHONE_FM.tel} className="wfs-topbar-phone" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, color: 'var(--white)' }}>
              <span style={{ color: 'var(--tangerine)' }}>{IconPhone(13)}</span>
              {t('Fort Myers', 'Fort Myers')}: {HOME_PHONE_FM.label}
            </a>
            <a href={HOME_PHONE_PC.tel} className="wfs-topbar-phone" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, color: 'var(--white)' }}>
              <span style={{ color: 'var(--tangerine)' }}>{IconPhone(13)}</span>
              {t('Port Charlotte', 'Port Charlotte')}: {HOME_PHONE_PC.label}
            </a>
            <button onClick={() => setLang(lang === 'EN' ? 'ES' : 'EN')} style={{
              background: 'transparent', color: 'rgba(255,255,255,0.7)', cursor: 'pointer',
              fontFamily: 'inherit', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
            }}>{lang === 'EN' ? 'ES' : 'EN'}</button>
          </div>
        </div>
      </div>
      {/* Main nav */}
      <div style={{ borderBottom: '1px solid rgba(0,16,17,0.08)' }}>
        <div className="container" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 24, paddingTop: 16, paddingBottom: 16,
        }}>
          <Logo />
          <nav className="wfs-home-nav" style={{ display: 'flex', gap: 30, alignItems: 'center' }}>
            {nav.map(([l, href]) => (
              <a key={l} href={href} style={{ fontSize: 14.5, fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.01em' }}>{l}</a>
            ))}
          </nav>
          <div className="wfs-home-nav" style={{ alignItems: 'center', gap: 14 }}>{quoteBtn()}</div>
          <button className="wfs-home-burger" onClick={() => setOpen(o => !o)} aria-label="Menu" style={{
            display: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--ink)', padding: 6,
          }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <><path d="M6 6l12 12"/><path d="M18 6 6 18"/></> : <><path d="M3 6h18M3 12h18M3 18h18"/></>}
            </svg>
          </button>
        </div>
        {open && (
          <div className="container" style={{ paddingBottom: 18, display: 'flex', flexDirection: 'column', gap: 4 }}>
            {nav.map(([l, href]) => (
              <a key={l} href={href} style={{ padding: '12px 4px', fontSize: 16, fontWeight: 600, color: 'var(--ink)', borderBottom: '1px solid rgba(0,16,17,0.06)' }}>{l}</a>
            ))}
            <div style={{ marginTop: 12 }}>{quoteBtn({ width: '100%', justifyContent: 'center' })}</div>
            <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
              <a href={HOME_PHONE_FM.tel} className="btn btn-ghost" style={{ flex: 1, justifyContent: 'center', fontSize: 13 }}>{IconPhone(15)} FM</a>
              <a href={HOME_PHONE_PC.tel} className="btn btn-ghost" style={{ flex: 1, justifyContent: 'center', fontSize: 13 }}>{IconPhone(15)} PC</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

/* ─────────────── 3. Hero ─────────────── */

const HomeHero = () => {
  const t = useT();
  return (
    <section style={{ position: 'relative', color: 'var(--white)', overflow: 'hidden', background: '#263166' }}>
      <img src="assets/Showroom.png" alt="" aria-hidden="true"
        onError={e => { if (!e.currentTarget.dataset.fb) { e.currentTarget.dataset.fb = '1'; e.currentTarget.src = 'assets/wfs-shop.webp'; } }}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 60%', zIndex: 0 }}/>
      <div aria-hidden style={{ position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(95deg, rgba(38,49,103,0.92) 0%, rgba(38,49,103,0.78) 40%, rgba(38,49,103,0.5) 72%, rgba(38,49,103,0.3) 100%)' }}/>
      <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: 'clamp(72px, 11vw, 130px)', paddingBottom: 'clamp(72px, 11vw, 130px)' }}>
        <div style={{ maxWidth: 760 }}>
          <div className="mono" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 22,
            fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)' }}>
            <span aria-hidden style={{ width: 32, height: 3, background: 'var(--tangerine)', borderRadius: 2 }}/>
            {t('Fence material supply · Fort Myers + Port Charlotte', 'Suministro de materiales · Fort Myers + Port Charlotte')}
          </div>
          <h1 style={{ margin: '0 0 22px', fontFamily: 'var(--display)', fontWeight: 800,
            fontSize: 'clamp(34px, 5vw, 60px)', lineHeight: 1.04, letterSpacing: '-0.02em', textTransform: 'uppercase', textShadow: '0 2px 28px rgba(0,0,0,0.3)' }}>
            {t('Fence Materials for Contractors & Homeowners in', 'Materiales de cerca para contratistas y propietarios en el')}{' '}
            <span style={{ color: 'var(--tangerine)' }}>{t('Southwest Florida', 'suroeste de Florida')}</span>
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.6, maxWidth: 620, margin: '0 0 34px', color: 'rgba(255,255,255,0.88)' }}>
            {t('Vinyl, aluminum, chain link, metal fence, gates, hardware, posts, rails & accessories. Pickup in Fort Myers or Port Charlotte. Delivery options available depending on order size and location.',
               'Vinilo, aluminio, malla ciclónica, cerca de metal, portones, herrajes, postes, rieles y accesorios. Recogida en Fort Myers o Port Charlotte. Opciones de entrega según el tamaño del pedido y la ubicación.')}
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href="estimate.html" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '16px 28px', borderRadius: 999,
              background: 'var(--tangerine)', color: 'var(--white)', fontSize: 15, fontWeight: 700, letterSpacing: '0.02em',
              boxShadow: '0 10px 28px rgba(255,113,51,0.4)' }}>{t('Request a Material Quote', 'Solicitar cotización')} {IconArrow(15)}</a>
            <a href={HOME_PHONE_FM.tel} style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '16px 28px', borderRadius: 999,
              background: 'rgba(255,255,255,0.08)', color: 'var(--white)', border: '1.5px solid rgba(255,255,255,0.55)',
              fontSize: 15, fontWeight: 700, letterSpacing: '0.02em' }}>{IconPhone(17)} {t('Call Sales Team', 'Llamar a ventas')}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─────────────── 4. Benefits strip ─────────────── */

const HomeBenefits = () => {
  const t = useT();
  const items = [
    [IconHammer, t('Built by Fencers', 'Hecho por cercadores'), t('We know fences because we build them.', 'Conocemos las cercas porque las construimos.')],
    [IconTag, t('Contractor Pricing', 'Precios de contratista'), t('Competitive pricing with volume discounts.', 'Precios competitivos con descuentos por volumen.')],
    [IconTruck, t('Pickup & Delivery', 'Recogida y entrega'), t('Local pickup or delivery based on order size & location.', 'Recogida local o entrega según el tamaño y la ubicación del pedido.')],
    [IconBadge, t('Real Material Experts', 'Expertos en materiales'), t('Get the right materials for the job, every time.', 'Los materiales correctos para cada trabajo, siempre.')],
  ];
  return (
    <section style={{ background: 'var(--white)', padding: '64px 0', borderBottom: '1px solid rgba(0,16,17,0.08)' }}>
      <div className="container">
        <div className="wfs-home-grid4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 28 }}>
          {items.map(([Icon, title, body], i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <span aria-hidden style={{ width: 46, height: 46, borderRadius: 10, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(38,49,103,0.06)', color: 'var(--laser-blue)' }}>{Icon(24)}</span>
              <h3 className="display" style={{ margin: 0, fontSize: 19, lineHeight: 1.15, color: 'var(--ink)' }}>{title}</h3>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: 'var(--charcoal)' }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────── 5. Products ─────────────── */

const HomeProducts = () => {
  const t = useT();
  const cards = [
    { name: t('Vinyl / PVC', 'Vinilo / PVC'), body: t('Low maintenance, long-lasting privacy and security.', 'Bajo mantenimiento, privacidad y seguridad duraderas.'), img: FENCE_IMG.vinyl, href: 'vinyl.html' },
    { name: t('Aluminum', 'Aluminio'), body: t('Durable, stylish, and maintenance-free.', 'Resistente, elegante y sin mantenimiento.'), img: FENCE_IMG.aluminum, href: 'aluminum.html' },
    { name: t('Chain Link', 'Malla ciclónica'), body: t('Cost-effective security for residential & commercial.', 'Seguridad rentable para residencial y comercial.'), img: FENCE_IMG.chainlink, href: 'chain-link.html' },
    { name: t('Metal / EC Fence', 'Metal / EC Fence'), body: t('Strong, versatile, and ideal for high-security needs.', 'Fuerte, versátil e ideal para alta seguridad.'), img: FENCE_IMG.metal, href: 'metal.html' },
    { name: t('Gates & Hardware', 'Portones y herrajes'), body: t('Single gates, double gates, hardware & accessories.', 'Portones sencillos, dobles, herrajes y accesorios.'), img: 'assets/SINGLE_SWING_GATE.png', href: 'products.html#gates' },
  ];
  return (
    <section style={{ background: 'var(--linen, #f6f4f0)', padding: '110px 0' }}>
      <div className="container">
        <div className="wfs-home-prodhead" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'end', marginBottom: 44 }}>
          <h2 className="display" style={{ margin: 0, fontSize: 'clamp(28px, 3.4vw, 44px)', lineHeight: 1.05, letterSpacing: '-0.02em', color: 'var(--ink)' }}>
            {t('Everything You Need.', 'Todo lo que necesitas.')}<br/><span style={{ color: 'var(--tangerine)' }}>{t('All in One Place.', 'En un solo lugar.')}</span>
          </h2>
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'var(--charcoal)', maxWidth: 460 }}>
            {t('High-quality fence materials, gates, hardware, posts, rails and accessories from top manufacturers—ready for your next project.',
               'Materiales de cerca de alta calidad, portones, herrajes, postes, rieles y accesorios de los mejores fabricantes, listos para tu próximo proyecto.')}
          </p>
        </div>
        <div className="wfs-home-prodgrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
          {cards.map((c, i) => (
            <article key={i} style={{ background: 'var(--white)', border: '1px solid rgba(0,16,17,0.1)', borderRadius: 14, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ aspectRatio: '16 / 10', background: '#263166', overflow: 'hidden' }}>
                <img src={c.img} alt={c.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
              </div>
              <div style={{ padding: '24px 24px 26px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 className="display" style={{ margin: '0 0 10px', fontSize: 22, lineHeight: 1.1, color: 'var(--ink)' }}>{c.name}</h3>
                <p style={{ margin: '0 0 20px', fontSize: 14, lineHeight: 1.55, color: 'var(--charcoal)' }}>{c.body}</p>
                <a href={c.href} className="mono" style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: 9,
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink)',
                  borderTop: '1px solid rgba(0,16,17,0.1)', paddingTop: 16 }}>
                  {t('Quote this material', 'Cotizar este material')} <span style={{ color: 'var(--tangerine)' }}>{IconArrow(13)}</span>
                </a>
              </div>
            </article>
          ))}
        </div>
        <div style={{ marginTop: 36, textAlign: 'center' }}>
          <a href="products.html" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '15px 28px', borderRadius: 999,
            background: 'var(--ink)', color: 'var(--white)', fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            {t('View All Products & Accessories', 'Ver todos los productos y accesorios')} {IconArrow(14)}
          </a>
        </div>
      </div>
    </section>
  );
};

/* ─────────────── 6. Supplier pitch (navy) ─────────────── */

const HomeSupplierPitch = () => {
  const t = useT();
  const bullets = [
    t('Accurate material takeoffs', 'Cálculos de material precisos'),
    t('Volume discounts that save you money', 'Descuentos por volumen que ahorran dinero'),
    t('Premium materials from trusted brands', 'Materiales premium de marcas confiables'),
    t('Support from people who know fences', 'Apoyo de gente que conoce las cercas'),
  ];
  return (
    <section className="wfs-brand-texture" style={{ backgroundColor: 'var(--ink)', color: 'var(--white)', padding: '110px 0' }}>
      <div className="container">
        <div className="wfs-home-split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
          <div>
            <h2 className="display" style={{ margin: 0, fontSize: 'clamp(30px, 3.6vw, 46px)', lineHeight: 1.04, letterSpacing: '-0.02em' }}>
              {t('Built by Fencers.', 'Hecho por cercadores.')}<br/><span style={{ color: 'var(--tangerine)' }}>{t('Priced Like a Supplier.', 'A precio de proveedor.')}</span>
            </h2>
            <p style={{ marginTop: 20, fontSize: 15.5, lineHeight: 1.65, color: 'var(--alice-blue)', maxWidth: 520 }}>
              {t('We supply the same high-quality materials used by professional fence installers—at contractor pricing. Whether you’re building one gate or fencing an entire community, we’ll help you quote the full material package with confidence.',
                 'Suministramos los mismos materiales de alta calidad que usan los instaladores profesionales, a precio de contratista. Ya sea un solo portón o toda una comunidad, te ayudamos a cotizar el paquete completo con confianza.')}
            </p>
          </div>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 14 }}>
            {bullets.map((b, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, fontSize: 15.5, lineHeight: 1.5 }}>
                <span aria-hidden style={{ flexShrink: 0, marginTop: 1, width: 24, height: 24, borderRadius: 6, background: 'var(--tangerine)', color: 'var(--ink)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5l3 3 6-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

/* ─────────────── 7. For contractors ─────────────── */

const HomeForContractors = () => {
  const t = useT();
  const bullets = [
    t('Contractor pricing & volume discounts', 'Precios de contratista y descuentos por volumen'),
    t('Fast material takeoffs & expert support', 'Cálculos rápidos y apoyo experto'),
    t('Pickup in Fort Myers & Port Charlotte', 'Recogida en Fort Myers y Port Charlotte'),
    t('Delivery available based on order size/location', 'Entrega disponible según tamaño/ubicación del pedido'),
    t('Custom gates built to your specs', 'Portones a medida según tus especificaciones'),
    t('Everything you need—materials, hardware, posts, rails & accessories', 'Todo lo que necesitas: materiales, herrajes, postes, rieles y accesorios'),
  ];
  return (
    <section style={{ background: 'var(--white)', padding: '110px 0' }}>
      <div className="container">
        <div className="wfs-home-split" style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 56, alignItems: 'center' }}>
          <div>
            <div className="mono" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 16,
              fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--laser-blue)' }}>
              <span aria-hidden style={{ width: 28, height: 3, background: 'var(--tangerine)', borderRadius: 2 }}/>
              {t('For Contractors', 'Para contratistas')}
            </div>
            <h2 className="display" style={{ margin: 0, fontSize: 'clamp(28px, 3.4vw, 44px)', lineHeight: 1.05, letterSpacing: '-0.02em', color: 'var(--ink)' }}>
              {t('Your Partner for', 'Tu socio para')}<br/><span style={{ color: 'var(--tangerine)' }}>{t('Every Project.', 'cada proyecto.')}</span>
            </h2>
            <ul style={{ listStyle: 'none', margin: '26px 0 0', padding: 0, display: 'grid', gap: 13, maxWidth: 540 }}>
              {bullets.map((b, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 13, fontSize: 15, lineHeight: 1.5, color: 'var(--ink)' }}>
                  <span aria-hidden style={{ flexShrink: 0, marginTop: 6, width: 7, height: 7, background: 'var(--tangerine)' }}/>
                  {b}
                </li>
              ))}
            </ul>
            <a href="contractors.html" style={{ marginTop: 30, display: 'inline-flex', alignItems: 'center', gap: 10, padding: '15px 26px', borderRadius: 999,
              background: 'var(--ink)', color: 'var(--white)', fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              {t('Learn More for Contractors', 'Más para contratistas')} {IconArrow(14)}
            </a>
          </div>
          <div style={{ position: 'relative', aspectRatio: '4 / 3', borderRadius: 14, overflow: 'hidden', background: '#263166' }}>
            <img src="assets/Showroom.png" alt={t('Western Fence Supply yard', 'Patio de Western Fence Supply')}
              onError={e => { if (!e.currentTarget.dataset.fb) { e.currentTarget.dataset.fb = '1'; e.currentTarget.src = 'assets/wfs-shop.webp'; } }}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}/>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─────────────── 9. Reviews ─────────────── */

const HomeReviews = () => {
  const t = useT();
  const reviews = [
    { name: 'Marcos R.', role: t('Fence Contractor', 'Contratista de cercas'), text: t('Fast takeoffs and the pricing actually works for my crews. I pull material in Fort Myers and I’m back on the job the same morning.', 'Cálculos rápidos y precios que funcionan para mis cuadrillas. Recojo material en Fort Myers y vuelvo al trabajo la misma mañana.') },
    { name: 'Jennifer P.', role: t('Homeowner', 'Propietaria'), text: t('They walked me through vinyl options for my backyard and quoted everything I needed. No pressure, just real help.', 'Me explicaron las opciones de vinilo para mi patio y cotizaron todo lo que necesitaba. Sin presión, solo ayuda real.') },
    { name: 'Dave & Sons', role: t('General Contractor', 'Contratista general'), text: t('Custom gates built to spec and the hardware was packed per opening. Saved us a ton of time on a community job.', 'Portones a medida y los herrajes empacados por abertura. Nos ahorró muchísimo tiempo en un proyecto comunitario.') },
  ];
  return (
    <section style={{ background: 'var(--linen, #f6f4f0)', padding: '110px 0' }}>
      <div className="container">
        <h2 className="display" style={{ margin: '0 0 44px', fontSize: 'clamp(28px, 3.4vw, 44px)', lineHeight: 1.05, letterSpacing: '-0.02em', color: 'var(--ink)', textAlign: 'center' }}>
          {t('What Contractors and', 'Lo que dicen contratistas y')}<br/><span style={{ color: 'var(--tangerine)' }}>{t('Homeowners Say.', 'propietarios.')}</span>
        </h2>
        <div className="wfs-home-grid3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
          {reviews.map((r, i) => (
            <div key={i} style={{ background: 'var(--white)', border: '1px solid rgba(0,16,17,0.1)', borderRadius: 14, padding: '30px 28px', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', gap: 3, color: 'var(--tangerine)' }}>{[0,1,2,3,4].map(s => <span key={s}>{IconStar(16)}</span>)}</div>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'var(--ink)' }}>“{r.text}”</p>
              <div style={{ marginTop: 'auto' }}>
                <div className="display" style={{ fontSize: 16, color: 'var(--ink)' }}>{r.name}</div>
                <div className="mono" style={{ fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--charcoal)', marginTop: 4 }}>{r.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────── 10. FAQ ─────────────── */

const HomeFAQ = () => {
  const t = useT();
  const [open, setOpen] = React.useState(0);
  const faqs = [
    [t('Do you sell to homeowners?', '¿Venden a propietarios?'), t('Yes. We supply materials to both contractors and homeowners. Anyone can request a material quote and pick up at our yards.', 'Sí. Suministramos materiales tanto a contratistas como a propietarios. Cualquiera puede solicitar una cotización y recoger en nuestras sucursales.')],
    [t('Do you install fences?', '¿Instalan cercas?'), t('No. We are a material supplier, not an installer. We provide the materials, hardware and support so you or your contractor can build the project.', 'No. Somos proveedores de materiales, no instaladores. Proveemos los materiales, herrajes y apoyo para que tú o tu contratista construyan el proyecto.')],
    [t('What information do I need for a quote?', '¿Qué información necesito para una cotización?'), t('Opening or linear footage, height, material, color, gate sizes, and pickup or delivery location. Photos or drawings help us quote accurately.', 'Metros lineales o medida de abertura, altura, material, color, tamaños de portón y lugar de recogida o entrega. Las fotos o dibujos ayudan a cotizar con precisión.')],
    [t('Do you offer contractor pricing?', '¿Ofrecen precios de contratista?'), t('Yes. We offer contractor pricing and volume discounts. Ask our team about setting up your account.', 'Sí. Ofrecemos precios de contratista y descuentos por volumen. Consulta a nuestro equipo para abrir tu cuenta.')],
    [t('Do you offer delivery?', '¿Ofrecen entrega?'), t('Delivery may be available depending on location, order size, and material type. Contact our team to confirm delivery for your project.', 'La entrega puede estar disponible según la ubicación, el tamaño del pedido y el tipo de material. Contacta a nuestro equipo para confirmar.')],
    [t('Can I pick up material today?', '¿Puedo recoger material hoy?'), t('Many items are stocked for same-day pickup. Call ahead and we’ll confirm availability and stage your order at the yard.', 'Muchos artículos están en stock para recogida el mismo día. Llama antes y confirmamos disponibilidad y preparamos tu pedido.')],
    [t('Do you make custom gates?', '¿Hacen portones a medida?'), t('Yes. We build custom gates to your opening size, material, color and hardware requirements.', 'Sí. Fabricamos portones a medida según el tamaño de la abertura, material, color y herrajes.')],
    [t('Do you sell replacement parts?', '¿Venden repuestos?'), t('Yes. We carry posts, caps, hardware, and accessories to repair or extend existing fences and gates.', 'Sí. Tenemos postes, tapas, herrajes y accesorios para reparar o ampliar cercas y portones existentes.')],
    [t('What areas do you serve?', '¿Qué áreas atienden?'), t('Pickup is available at our Fort Myers and Port Charlotte yards, and we serve customers across Florida with delivery options based on your project.', 'La recogida está disponible en Fort Myers y Port Charlotte, y atendemos a clientes en todo Florida con opciones de entrega según tu proyecto.')],
  ];
  return (
    <section style={{ background: 'var(--white)', padding: '110px 0' }}>
      <div className="container">
        <h2 className="display" style={{ margin: '0 0 40px', fontSize: 'clamp(28px, 3.4vw, 44px)', lineHeight: 1.05, letterSpacing: '-0.02em', color: 'var(--ink)' }}>
          {t('Frequently Asked', 'Preguntas')} <span style={{ color: 'var(--tangerine)' }}>{t('Questions.', 'frecuentes.')}</span>
        </h2>
        <div style={{ maxWidth: 860, borderTop: '1px solid rgba(0,16,17,0.12)' }}>
          {faqs.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{ borderBottom: '1px solid rgba(0,16,17,0.12)' }}>
                <button onClick={() => setOpen(isOpen ? -1 : i)} style={{
                  width: '100%', textAlign: 'left', background: 'transparent', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20,
                  padding: '22px 4px', fontFamily: 'var(--display)', fontSize: 18, color: 'var(--ink)' }}>
                  {q}
                  <span aria-hidden style={{ flexShrink: 0, color: 'var(--tangerine)', transition: 'transform 0.2s', transform: isOpen ? 'rotate(45deg)' : 'none' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>
                  </span>
                </button>
                {isOpen && <p style={{ margin: '0 4px 24px', fontSize: 15, lineHeight: 1.6, color: 'var(--charcoal)', maxWidth: 720 }}>{a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ─────────────── 11. Locations / service area ─────────────── */

const HomeLocations = () => {
  const t = useT();
  const hours = t('Mon-Fri 7am-4pm · Sat 7am-12pm', 'Lun-Vie 7am-4pm · Sáb 7am-12pm');
  const locs = [
    { name: t('Fort Myers (HQ)', 'Fort Myers (Sede)'), addr: '2621 Fowler St, Fort Myers, FL 33901', phone: HOME_PHONE_FM },
    { name: t('Port Charlotte', 'Port Charlotte'), addr: '1145 Enterprise Dr, Port Charlotte, FL 33953', phone: HOME_PHONE_PC },
  ];
  return (
    <section style={{ background: 'var(--linen, #f6f4f0)', padding: '110px 0' }}>
      <div className="container">
        <div style={{ maxWidth: 640, marginBottom: 44 }}>
          <h2 className="display" style={{ margin: '0 0 16px', fontSize: 'clamp(28px, 3.4vw, 44px)', lineHeight: 1.05, letterSpacing: '-0.02em', color: 'var(--ink)' }}>
            {t('Local Pickup.', 'Recogida local.')} <span style={{ color: 'var(--tangerine)' }}>{t('Florida Delivery Options.', 'Opciones de entrega en Florida.')}</span>
          </h2>
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'var(--charcoal)' }}>
            {t('Pickup is available at our Fort Myers and Port Charlotte locations. Delivery may be available depending on location, order size, and material type. Contact our team to confirm delivery options for your project.',
               'La recogida está disponible en nuestras ubicaciones de Fort Myers y Port Charlotte. La entrega puede estar disponible según la ubicación, el tamaño del pedido y el tipo de material. Contacta a nuestro equipo para confirmar.')}
          </p>
        </div>
        <div className="wfs-home-grid3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
          {locs.map((l, i) => (
            <div key={i} style={{ background: 'var(--white)', border: '1px solid rgba(0,16,17,0.1)', borderRadius: 14, padding: '30px 28px' }}>
              <span aria-hidden style={{ color: 'var(--laser-blue)' }}>{IconPin(26)}</span>
              <h3 className="display" style={{ margin: '14px 0 14px', fontSize: 22, color: 'var(--ink)' }}>{l.name}</h3>
              <p style={{ margin: '0 0 10px', fontSize: 14, lineHeight: 1.5, color: 'var(--charcoal)' }}>{l.addr}</p>
              <a href={l.phone.tel} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 15, fontWeight: 700, color: 'var(--ink)' }}>{IconPhone(15)} {l.phone.label}</a>
              <div style={{ marginTop: 12, fontSize: 13, color: 'var(--charcoal)' }}>{hours}</div>
              <div className="mono" style={{ marginTop: 16, display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 10.5, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink)' }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--tangerine)' }}/>{t('Pickup Available', 'Recogida disponible')}
              </div>
            </div>
          ))}
          <div style={{ background: 'var(--ink)', color: 'var(--white)', borderRadius: 14, padding: '30px 28px', display: 'flex', flexDirection: 'column' }}>
            <span aria-hidden style={{ color: 'var(--tangerine)' }}>{IconTruck(26)}</span>
            <h3 className="display" style={{ margin: '14px 0 12px', fontSize: 22 }}>{t('Delivery Available', 'Entrega disponible')}</h3>
            <p style={{ margin: '0 0 22px', fontSize: 14, lineHeight: 1.55, color: 'var(--alice-blue)' }}>
              {t('Delivery is available based on order size and location. Contact our team for a delivery quote.', 'La entrega está disponible según el tamaño del pedido y la ubicación. Contacta a nuestro equipo para una cotización de entrega.')}
            </p>
            <a href="estimate.html" style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, padding: '14px 22px', borderRadius: 999,
              background: 'var(--tangerine)', color: 'var(--white)', fontSize: 13, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              {t('Get a Delivery Quote', 'Cotizar entrega')} {IconArrow(13)}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─────────────── 12. Final quote form ─────────────── */

const HomeQuoteForm = () => {
  const t = useT();
  const field = { padding: '13px 15px', borderRadius: 8, border: '1px solid rgba(0,16,17,0.18)', fontSize: 14, fontFamily: 'var(--sans)', background: 'var(--white)', color: 'var(--ink)', width: '100%' };
  const label = { display: 'block', fontSize: 12, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--charcoal)', marginBottom: 7, fontFamily: 'var(--mono)' };
  return (
    <section className="wfs-brand-texture" style={{ backgroundColor: 'var(--ink)', color: 'var(--white)', padding: '110px 0' }}>
      <div className="container">
        <div className="wfs-home-split" style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: 56, alignItems: 'start' }}>
          <div>
            <h2 className="display" style={{ margin: 0, fontSize: 'clamp(30px, 3.6vw, 46px)', lineHeight: 1.05, letterSpacing: '-0.02em' }}>
              {t('Ready to Spec Your', 'Listo para definir tu')}<br/><span style={{ color: 'var(--tangerine)' }}>{t('Next Perimeter?', 'próximo perímetro?')}</span>
            </h2>
            <p style={{ marginTop: 20, fontSize: 16, lineHeight: 1.6, color: 'var(--alice-blue)', maxWidth: 420 }}>
              {t('Contact our team today for a fast, accurate material quote.', 'Contacta a nuestro equipo hoy para una cotización de materiales rápida y precisa.')}
            </p>
            <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href={HOME_PHONE_FM.tel} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: 'var(--white)', fontSize: 15, fontWeight: 700 }}>{IconPhone(16)} {t('Fort Myers', 'Fort Myers')}: {HOME_PHONE_FM.label}</a>
              <a href={HOME_PHONE_PC.tel} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: 'var(--white)', fontSize: 15, fontWeight: 700 }}>{IconPhone(16)} {t('Port Charlotte', 'Port Charlotte')}: {HOME_PHONE_PC.label}</a>
            </div>
          </div>
          <form onSubmit={e => e.preventDefault()} style={{ background: 'var(--white)', borderRadius: 16, padding: 'clamp(24px, 3vw, 36px)', display: 'grid', gap: 16 }}>
            <div className="wfs-home-form2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div><label style={label}>{t('Full Name', 'Nombre completo')}</label><input style={field} type="text" required/></div>
              <div><label style={label}>{t('Company (optional)', 'Empresa (opcional)')}</label><input style={field} type="text"/></div>
              <div><label style={label}>{t('Phone Number', 'Teléfono')}</label><input style={field} type="tel"/></div>
              <div><label style={label}>{t('Email Address', 'Correo electrónico')}</label><input style={field} type="email"/></div>
              <div><label style={label}>{t('Project Type', 'Tipo de proyecto')}</label>
                <select style={field}>
                  <option>{t('Residential', 'Residencial')}</option>
                  <option>{t('Commercial', 'Comercial')}</option>
                  <option>{t('Contractor / Trade', 'Contratista')}</option>
                </select>
              </div>
              <div><label style={label}>{t('Project Location', 'Ubicación del proyecto')}</label><input style={field} type="text" placeholder={t('City / ZIP', 'Ciudad / ZIP')}/></div>
            </div>
            <div>
              <label style={label}>{t('Message / Project Details', 'Mensaje / Detalles del proyecto')}</label>
              <textarea style={{ ...field, minHeight: 110, resize: 'vertical' }} placeholder={t('Tell us about your project: materials needed, linear footage, gate sizes, height, color, pickup or delivery, etc.', 'Cuéntanos sobre tu proyecto: materiales, metros lineales, tamaños de portón, altura, color, recogida o entrega, etc.')}/>
            </div>
            <button type="submit" style={{ justifySelf: 'start', display: 'inline-flex', alignItems: 'center', gap: 10, padding: '15px 30px', borderRadius: 999,
              background: 'var(--tangerine)', color: 'var(--white)', border: 'none', cursor: 'pointer', fontFamily: 'var(--sans)', fontSize: 14, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              {t('Request a Quote', 'Solicitar cotización')} {IconArrow(14)}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

/* ─────────────── 13. Footer ─────────────── */

const HomeFooter = () => {
  const t = useT();
  const cols = [
    [t('Products', 'Productos'), [
      [t('Vinyl / PVC', 'Vinilo / PVC'), 'vinyl.html'],
      [t('Aluminum', 'Aluminio'), 'aluminum.html'],
      [t('Chain Link', 'Malla ciclónica'), 'chain-link.html'],
      [t('Metal / EC Fence', 'Metal / EC Fence'), 'metal.html'],
      [t('Gates & Hardware', 'Portones y herrajes'), 'products.html#gates'],
      [t('Posts, Rails & Accessories', 'Postes, rieles y accesorios'), 'products.html'],
    ]],
    [t('Contractors', 'Contratistas'), [
      [t('Contractor Pricing', 'Precios de contratista'), 'contractors.html'],
      [t('Material Takeoffs', 'Cálculos de material'), 'contractors.html'],
      [t('Delivery Information', 'Información de entrega'), 'estimate.html'],
      [t('Custom Gates', 'Portones a medida'), 'products.html#gates'],
    ]],
    [t('Company', 'Empresa'), [
      [t('Projects', 'Proyectos'), 'projects.html'],
      [t('FAQ', 'Preguntas frecuentes'), 'faq.html'],
      [t('About Us', 'Nosotros'), 'about.html'],
      [t('Contact', 'Contacto'), 'estimate.html'],
    ]],
    [t('Locations', 'Ubicaciones'), [
      [t('Fort Myers, FL (HQ)', 'Fort Myers, FL (Sede)'), 'estimate.html'],
      [t('Port Charlotte, FL', 'Port Charlotte, FL'), 'estimate.html'],
      [t('Serving All of Florida', 'Atendemos todo Florida'), 'estimate.html'],
    ]],
  ];
  return (
    <footer style={{ background: '#1b2350', color: 'var(--alice-blue)', padding: '72px 0 40px' }}>
      <div className="container">
        <div className="wfs-home-footer" style={{ display: 'grid', gridTemplateColumns: '1.4fr repeat(4, 1fr)', gap: 36 }}>
          <div>
            <Logo light />
            <p style={{ marginTop: 18, fontSize: 13.5, lineHeight: 1.6, color: 'rgba(255,255,255,0.6)', maxWidth: 280 }}>
              {t('High-quality fence materials, gates, hardware & accessories for contractors and homeowners across Florida.',
                 'Materiales de cerca, portones, herrajes y accesorios de alta calidad para contratistas y propietarios en todo Florida.')}
            </p>
            <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <a href={HOME_PHONE_FM.tel} style={{ display: 'inline-flex', alignItems: 'center', gap: 9, fontSize: 14, fontWeight: 700, color: 'var(--white)' }}>{IconPhone(15)} {HOME_PHONE_FM.label}</a>
              <a href={HOME_PHONE_PC.tel} style={{ display: 'inline-flex', alignItems: 'center', gap: 9, fontSize: 14, fontWeight: 700, color: 'var(--white)' }}>{IconPhone(15)} {HOME_PHONE_PC.label}</a>
            </div>
          </div>
          {cols.map(([title, links], i) => (
            <div key={i}>
              <div className="mono" style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--tangerine)', marginBottom: 18 }}>{title}</div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 11 }}>
                {links.map(([l, href], j) => (
                  <li key={j}><a href={href} style={{ fontSize: 14, color: 'rgba(255,255,255,0.72)' }}>{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 48, paddingTop: 22, borderTop: '1px solid rgba(255,255,255,0.12)', display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap',
          fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>
          <span>© {t('Western Fence Supply. All rights reserved.', 'Western Fence Supply. Todos los derechos reservados.')}</span>
          <span className="mono" style={{ letterSpacing: '0.12em', textTransform: 'uppercase' }}>{t('Design preview', 'Vista previa de diseño')}</span>
        </div>
      </div>
    </footer>
  );
};

/* ─────────────── Page ─────────────── */

const HomePage = () => (
  <>
    <HomeHeader />
    <HomeHero />
    <HomeBenefits />
    <HomeProducts />
    <HomeSupplierPitch />
    <HomeForContractors />
    <ProjectGallery items={HOME_PROJECTS} />
    <HomeReviews />
    <HomeFAQ />
    <HomeLocations />
    <HomeQuoteForm />
    <HomeFooter />
  </>
);

const HOME_PROJECTS = [
  { name: 'Cape Coral Residential', loc: 'Cape Coral, FL', size: '320 LF', material: 'Vinyl', type: 'Vinyl privacy fence, 6 ft, white', contractor: 'Naples Outdoor', year: '2024' },
  { name: 'Bank Enclosure', loc: 'Fort Myers, FL', size: '460 LF', material: 'Aluminum', type: 'Aluminum fence, 5 ft, black', contractor: 'Estate Fence Pros', year: '2024' },
  { name: 'Gated Community', loc: 'Estero, FL', size: '14 ft Opening', material: 'Double Swing Gate', type: 'Double swing gate, vehicle access', contractor: 'Gulf Perimeter LLC', year: '2025', imgUrl: 'assets/DOUBLE_GATE.png' },
  { name: 'School Perimeter', loc: 'Lehigh Acres, FL', size: '0.6 mi', material: 'Chain Link', type: 'Galvanized chain link, 8 ft', contractor: 'Industrial Fence FL', year: '2025' },
  { name: 'Commercial Facility', loc: 'Punta Gorda, FL', size: '380 LF', material: 'EC Fence', type: 'EC Fence panels, 6 ft, bronze', contractor: 'Harbor Iron Works', year: '2024' },
];

Object.assign(window, { HomePage });
