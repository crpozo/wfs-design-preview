/* Additional sections: IconStrip, Gates, Testimonials, FAQ, Articles, ShopTour */

const IconStrip = () => {
  const t = useT();
  const items = [
    { key: 'aluminum', label: { EN: 'Aluminum', ES: 'Aluminio' }, href: '#products' },
    { key: 'chainlink', label: { EN: 'Chain Link', ES: 'Malla ciclónica' }, href: '#products' },
    { key: 'metal', label: { EN: 'Metal / DuraFence', ES: 'Metal / DuraFence' }, href: '#products' },
    { key: 'vinyl', label: { EN: 'Vinyl / PVC', ES: 'Vinilo / PVC' }, href: '#products' },
  ];
  return (
    <section style={{ background: 'var(--white)', padding: '64px 0', borderBottom: '1px solid rgba(0,16,17,0.06)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
          {items.map((it, i) => (
            <a key={it.key} href={it.href} style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14,
              padding: '24px 16px',
              borderLeft: i === 0 ? 'none' : '1px solid rgba(0,16,17,0.08)',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--parchment)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
              <img src={FENCE_ICON[it.key]} alt="" style={{ height: 56, width: 56 }} />
              <span className="display" style={{ fontSize: 19.5, color: 'var(--ink)' }}>{t(it.label)}</span>
              <span className="mono" style={{ fontSize: 14, color: 'var(--laser-blue)', letterSpacing: '0.14em', display: 'flex', alignItems: 'center', gap: 6 }}>
                {t('EXPLORE STYLES', 'EXPLORAR ESTILOS')} <ArrowRight size={11} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gates = () => {
  const t = useT();
  const gates = [
    { name: { EN: 'Single Walk Gates', ES: 'Portones peatonales sencillos' }, desc: { EN: 'Mechanically assembled or welded. Standard widths 3-4 ft.', ES: 'Fabricado a medida. Anchos estándar de 3-4 ft.' }, img: 'aluminum' },
    { name: { EN: 'Double Drive Gates', ES: 'Portones dobles vehiculares' }, desc: { EN: 'Welded heavy-duty up to 16 ft total. Stainless steel hardware.', ES: 'De alta resistencia, hasta 16 ft en total. Herrajes de acero inoxidable.' }, img: 'metal' },
    { name: { EN: 'Custom Estate Gates', ES: 'Portones a medida de alta gama' }, desc: { EN: 'Welded estate-grade aluminum, fully fabricated in-house.', ES: 'Aluminio de alta gama, fabricado por completo en planta.' }, img: 'vinyl' },
    { name: { EN: 'Chain Link Gates', ES: 'Portones de malla ciclónica' }, desc: { EN: 'Welded chain link gates plus full hardware kit.', ES: 'Portones de malla ciclónica con kit completo de herrajes.' }, img: 'chainlink' },
  ];
  return (
    <section style={{ background: 'var(--linen)', padding: '120px 0' }}>
      <div className="container">
        <div style={{ marginBottom: 48, maxWidth: 720 }}>
          <h2 className="display" style={{ fontSize: 'clamp(40px, 5.5vw, 60px)', margin: '0' }}>
            {t('Welded in-house.', 'Fabricado en planta.')}<br/>
            <span style={{ color: 'var(--charcoal)' }}>{t('Sized to fit.', 'Hecho a tu medida.')}</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
          {gates.map((g, i) => (
            <article key={i} style={{
              background: 'var(--white)',
              borderRadius: 'var(--radius)',
              overflow: 'hidden',
              border: '1px solid rgba(0,16,17,0.06)',
            }}>
              <div style={{ position: 'relative', height: 200, background: '#263166' }}>
                <img src={FENCE_IMG[g.img]} alt={t(g.name)}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,16,17,0) 50%, rgba(0,16,17,0.5) 100%)' }}/>
                <div className="mono" style={{
                  position: 'absolute', top: 14, left: 14, fontSize: 13.5, letterSpacing: '0.14em',
                  background: 'rgba(0,16,17,0.6)', color: 'var(--alice-blue)',
                  padding: '5px 8px', borderRadius: 3,
                }}>
                  GATE-0{i + 1}
                </div>
              </div>
              <div style={{ padding: 22 }}>
                <h3 className="display" style={{ fontSize: 23.5, margin: '0 0 10px' }}>{t(g.name)}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.5, color: 'var(--charcoal)', margin: 0 }}>{t(g.desc)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const t = useT();
  const reviews = [
    { name: 'Lauren Johnson',
      text: { EN: "Customer service is the best I've seen anywhere. They made sure we had every part for our aluminum fence and delivered with no issues.",
              ES: 'El servicio al cliente es el mejor que he visto. Se aseguraron de que tuviéramos cada pieza para nuestra cerca de aluminio y entregaron sin problemas.' },
      tag: { EN: 'Aluminum · Fort Myers', ES: 'Aluminio · Fort Myers' } },
    { name: 'Sally Barney',
      text: { EN: 'Their prices are the best in Lee County. I checked several competitors and they were not even close.',
              ES: 'Sus precios son los mejores del condado de Lee. Comparé con varios competidores y ni se acercaron.' },
      tag: { EN: 'Chain Link · Estero', ES: 'Malla ciclónica · Estero' } },
    { name: 'Yanier Ortiz',
      text: { EN: "Best company in town, best materials at a great price. You don't have to drive to Miami anymore, everything you need is right here.",
              ES: 'La mejor empresa de la ciudad, los mejores materiales a buen precio. Ya no tienes que manejar hasta Miami, todo lo que necesitas está aquí.' },
      tag: { EN: 'Vinyl · Fort Myers', ES: 'Vinilo · Fort Myers' } },
    { name: 'Reinier Carmenates',
      text: { EN: "I've installed fences in Lee County for 5 years. I've never paid such a low price for such good material.",
              ES: 'He instalado cercas en el condado de Lee por 5 años. Nunca había pagado un precio tan bajo por material tan bueno.' },
      tag: { EN: 'Contractor · Naples', ES: 'Contratista · Naples' } },
    { name: 'Marcus Reed',
      text: { EN: 'Ordered Friday, picked up Monday. The crew loaded 300 ft of chain link in fifteen minutes flat.',
              ES: 'Pedí el viernes y recogí el lunes. El equipo cargó 300 pies de malla ciclónica en quince minutos exactos.' },
      tag: { EN: 'Chain Link · Punta Gorda', ES: 'Malla ciclónica · Punta Gorda' } },
    { name: 'Dana Whitfield',
      text: { EN: 'The gate hardware arrived complete and the crew saved us two site visits. Everything fit the first time.',
              ES: 'Los herrajes del portón llegaron completos y nos ahorraron dos visitas a obra. Todo encajó a la primera.' },
      tag: { EN: 'Contractor · Bonita Springs', ES: 'Contratista · Bonita Springs' } },
    { name: 'Carlos Mendez',
      text: { EN: 'They quoted our whole community in a day and delivered in phases exactly as promised.',
              ES: 'Cotizaron toda nuestra comunidad en un día y entregaron por fases exactamente como lo prometieron.' },
      tag: { EN: 'HOA · Cape Coral', ES: 'HOA · Cape Coral' } },
  ];
  const n = reviews.length;
  const [active, setActive] = React.useState(2);
  const [locked, setLocked] = React.useState(false);

  // Gentle auto-advance until the visitor takes over
  React.useEffect(() => {
    if (locked) return;
    const id = setInterval(() => setActive(a => (a + 1) % n), 5200);
    return () => clearInterval(id);
  }, [locked, n]);
  const go = (i) => { setActive(((i % n) + n) % n); setLocked(true); };

  const initials = (name) => name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

  return (
    <section style={{ background: 'var(--white)', padding: 'clamp(64px, 9vh, 104px) 0', overflow: 'hidden' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        {/* Title */}
        <h2 className="display" style={{
          margin: 0, fontSize: 'clamp(24px, 2.5vw, 36px)', lineHeight: 1.02,
          letterSpacing: '-0.01em', fontWeight: 800, textTransform: 'uppercase',
        }}>
          {t('What our', 'Lo que dicen')}{' '}
          <span style={{ color: 'var(--tangerine)' }}>{t('clients say.', 'nuestros clientes.')}</span>
        </h2>
      </div>

      {/* Fanned deck */}
      <div style={{ position: 'relative', height: 'clamp(330px, 42vh, 385px)', marginTop: 'clamp(84px, 13vh, 150px)' }}>
        {reviews.map((r, i) => {
          let off = i - active;
          if (off > n / 2) off -= n;
          if (off < -n / 2) off += n;
          const abs = Math.abs(off);
          const isCenter = off === 0;
          return (
            <div key={r.name}
              onClick={() => !isCenter && go(i)}
              style={{
                position: 'absolute', left: '50%', top: 0,
                width: 'min(345px, 84vw)',
                transform: `translateX(-50%) translateX(${off * 107}%) translateY(${abs * 16}px) rotate(${off * 4}deg) scale(${isCenter ? 1 : 0.96})`,
                transformOrigin: '50% 120%',
                transition: 'transform 0.7s cubic-bezier(0.3, 1.15, 0.35, 1), opacity 0.45s ease',
                opacity: abs > 2 ? 0 : 1,
                pointerEvents: abs > 2 ? 'none' : 'auto',
                zIndex: 10 - abs,
                cursor: isCenter ? 'default' : 'pointer',
              }}>
              <div style={{
                background: 'var(--white)',
                borderRadius: 18,
                border: '1px solid rgba(0,16,17,0.08)',
                boxShadow: isCenter
                  ? '0 30px 60px -28px rgba(38,49,102,0.38)'
                  : '0 22px 44px -30px rgba(38,49,102,0.28)',
                padding: '24px 26px',
                minHeight: 280,
                display: 'flex', flexDirection: 'column', gap: 16,
                textAlign: 'left',
              }}>
                <div style={{ color: 'var(--tangerine)', fontSize: 17.5, letterSpacing: 3 }}>★★★★★</div>
                <p style={{ margin: 0, flex: 1, fontSize: 16.5, lineHeight: 1.6, color: 'var(--ink)' }}>
                  “{t(r.text)}”
                </p>
                <div style={{
                  borderTop: '1px solid rgba(0,16,17,0.1)', paddingTop: 14,
                  display: 'flex', alignItems: 'center', gap: 12,
                }}>
                  <span aria-hidden style={{
                    width: 40, height: 40, borderRadius: '50%', flexShrink: 0,
                    background: isCenter ? 'var(--tangerine)' : 'var(--ink)',
                    color: 'var(--white)',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 14.5, fontWeight: 700, letterSpacing: '0.05em',
                    transition: 'background 0.4s ease',
                  }}>{initials(r.name)}</span>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--ink)' }}>{r.name}</div>
                    <div className="mono" style={{
                      marginTop: 3, fontSize: 13, letterSpacing: '0.16em',
                      textTransform: 'uppercase', color: 'var(--charcoal)',
                    }}>{t(r.tag)}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Controls: arrows + progress dashes */}
      <div style={{
        marginTop: 'clamp(36px, 5.5vh, 56px)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 22,
      }}>
        <button onClick={() => go(active - 1)} aria-label={t('Previous review', 'Reseña anterior')} style={{
          width: 46, height: 46, borderRadius: '50%',
          border: '1px solid rgba(0,16,17,0.15)', background: 'var(--white)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--ink)', cursor: 'pointer',
        }}>
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
            <path d="M13 8H3m0 0l4-4M3 8l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square"/>
          </svg>
        </button>
        <div style={{ display: 'flex', gap: 8 }}>
          {reviews.map((_, i) => (
            <button key={i} onClick={() => go(i)} aria-label={`${i + 1}`} style={{
              width: 26, height: 4, borderRadius: 2, padding: 0, border: 'none', cursor: 'pointer',
              background: i <= active ? 'var(--tangerine)' : 'rgba(0,16,17,0.15)',
              transition: 'background 0.3s ease',
            }}/>
          ))}
        </div>
        <button onClick={() => go(active + 1)} aria-label={t('Next review', 'Siguiente reseña')} style={{
          width: 46, height: 46, borderRadius: '50%',
          border: '1px solid rgba(0,16,17,0.15)', background: 'var(--white)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--ink)', cursor: 'pointer',
        }}>
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square"/>
          </svg>
        </button>
      </div>

    </section>
  );
};

const FAQ = () => {
  const t = useT();
  const items = [
    [{ EN: 'Do you sell to the general public?', ES: '¿Le venden al público en general?' },
     { EN: 'Yes. We sell to homeowners, DIY customers and contractors alike, same supplier-direct prices, no minimums.',
       ES: 'Sí. Vendemos a propietarios, clientes DIY y contratistas por igual, los mismos precios directos del proveedor, sin mínimos.' }],
    [{ EN: 'What are the lead times on fencing material?', ES: '¿Cuáles son los plazos de entrega del material?' },
     { EN: "Anything in stock is ready right away, buy it and take it the same day. A lot of suppliers make you wait 1-2 days even for stocked material; we don't. Custom or non-stock orders run anywhere from 1-2 days to 6-8 weeks depending on the item.",
       ES: 'Lo que está en stock está listo de inmediato, lo compras y te lo llevas el mismo día. Muchos proveedores te hacen esperar 1-2 días incluso para material en stock; nosotros no. Las órdenes a medida o fuera de stock van de 1-2 días hasta 6-8 semanas según el artículo.' }],
    [{ EN: 'Do you install fences?', ES: '¿Instalan cercas?' },
     { EN: 'No, we are solely a supply company. We can recommend trusted local installers who use our materials.',
       ES: 'No, somos solamente una empresa de suministro. Podemos recomendar instaladores locales de confianza que usan nuestros materiales.' }],
    [{ EN: 'What is the price per foot for fence material?', ES: '¿Cuál es el precio por pie del material?' },
     { EN: "Pricing fluctuates frequently. Send us your project and we'll come back with a detailed estimate.",
       ES: 'Los precios fluctúan con frecuencia. Envíanos tu proyecto y respondemos con un estimado detallado.' }],
    [{ EN: 'Does your fence material have a warranty?', ES: '¿El material tiene garantía?' },
     { EN: 'Most materials we sell carry a limited lifetime warranty from the manufacturer.',
       ES: 'La mayoría de los materiales que vendemos tienen una garantía limitada de por vida del fabricante.' }],
    [{ EN: 'Do you offer delivery?', ES: '¿Ofrecen entrega?' },
     { EN: "Yes, we deliver throughout Florida from our Fort Myers warehouse. Delivery fees vary by location and order size; we'll confirm both when you place your order.",
       ES: 'Sí, entregamos en toda Florida desde nuestro almacén de Fort Myers. Los costos varían por ubicación y tamaño de la orden; confirmamos ambos al hacer el pedido.' }],
    [{ EN: 'Can I pick up my order?', ES: '¿Puedo recoger mi pedido?' },
     { EN: 'Yes. Pickup is available from our Fort Myers or Port Charlotte yards depending on material stock. Please contact us first to confirm availability and pickup location before coming in.',
       ES: 'Sí. Puedes recoger en nuestras sucursales de Fort Myers o Port Charlotte según el stock del material. Contáctanos primero para confirmar disponibilidad y ubicación antes de venir.' }],
  ];
  const [open, setOpen] = React.useState(0);
  const [ctaHover, setCtaHover] = React.useState(false);
  return (
    <section style={{ background: 'var(--white)', padding: '120px 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 64, alignItems: 'start' }}>
          {/* Left: editorial header + CTA */}
          <div className="wfs-faq-sidebar" style={{ position: 'sticky', top: 100 }}>
            <h2 className="display" style={{
              margin: 0,
              fontSize: 'clamp(28px, 3vw, 40px)',
              lineHeight: 1, letterSpacing: '-0.02em',
              fontWeight: 800,
            }}>
              {t('Common fence', 'Preguntas comunes')}<br/>
              <span style={{ color: 'var(--tangerine)' }}>{t('questions.', 'sobre cercas.')}</span>
            </h2>
            <p style={{
              marginTop: 24,
              fontSize: 15.5, lineHeight: 1.6, color: 'var(--charcoal)',
              maxWidth: 340, marginBottom: 28,
            }}>
              {t("Can't find what you're looking for? Call the yard or email", '¿No encuentras lo que buscas? Llama a la sucursal o escribe a')}
              {' '}<a href="mailto:sales@westernfencesupply.com" style={{
                color: 'var(--ink)', borderBottom: '1px solid var(--tangerine)',
              }}>sales@westernfencesupply.com</a>.
            </p>

            <a href="estimate.html"
              onMouseEnter={() => setCtaHover(true)}
              onMouseLeave={() => setCtaHover(false)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 14,
                padding: '14px 14px 14px 26px',
                borderRadius: 999,
                background: ctaHover ? 'var(--laser-blue)' : 'var(--ink)',
                color: 'var(--white)',
                textDecoration: 'none',
                fontFamily: 'var(--sans)',
                fontSize: 14.5, fontWeight: 700,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                transition: 'background 0.2s ease, transform 0.2s ease',
                transform: ctaHover ? 'translateY(-1px)' : 'none',
                boxShadow: '0 18px 36px -18px rgba(38, 49, 102,0.5)',
              }}>
              {t('Talk to a sales rep', 'Habla con un representante')}
              <span style={{
                width: 30, height: 30, borderRadius: '50%',
                background: 'var(--tangerine)', color: 'var(--ink)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="square"/>
                </svg>
              </span>
            </a>
          </div>

          {/* Right: accordion list */}
          <div>
            {items.map(([q, a], i) => {
              const isOpen = open === i;
              return (
                <div key={i} style={{
                  borderBottom: '1px solid rgba(0,16,17,0.12)',
                  borderLeft: `2px solid ${isOpen ? 'var(--tangerine)' : 'transparent'}`,
                  paddingLeft: isOpen ? 20 : 0,
                  background: 'transparent',
                  transition: 'all 0.25s ease',
                }}>
                  <button onClick={() => setOpen(isOpen ? -1 : i)} style={{
                    width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '22px 0', textAlign: 'left', gap: 24,
                  }}>
                    <span style={{ display: 'flex', gap: 20, alignItems: 'baseline' }}>
                      <span className="mono" style={{
                        fontSize: 14, fontWeight: 700,
                        letterSpacing: '0.22em',
                        color: isOpen ? 'var(--tangerine)' : 'var(--charcoal)',
                        transition: 'color 0.25s ease',
                      }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span style={{
                        fontSize: 18.5, fontWeight: 500,
                        color: 'var(--ink)',
                        letterSpacing: '-0.005em',
                      }}>{t(q)}</span>
                    </span>
                    <span className="wfs-faq-toggle" style={{
                      width: 28, height: 28,
                      background: isOpen ? 'var(--tangerine)' : 'transparent',
                      border: `1px solid ${isOpen ? 'var(--tangerine)' : 'rgba(0,16,17,0.2)'}`,
                      color: isOpen ? 'var(--ink)' : 'var(--ink)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.2s ease',
                    }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square"/>
                        {!isOpen && <path d="M6 2v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square"/>}
                      </svg>
                    </span>
                  </button>
                  <div style={{
                    maxHeight: isOpen ? 200 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease',
                  }}>
                    <p style={{
                      fontSize: 16.5, lineHeight: 1.6,
                      color: 'var(--ink)', opacity: 0.78,
                      margin: '0 0 22px', paddingLeft: 40, maxWidth: 640,
                    }}>
                      {t(a)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const Articles = () => {
  const t = useT();
  const posts = [
    { tag: { EN: 'Materials', ES: 'Materiales' }, title: { EN: 'Top 4 Durable Fence Materials For Your Home', ES: 'Los 4 mejores materiales duraderos de cerca para tu hogar' }, read: '6 min', img: 'aluminum' },
    { tag: { EN: 'How-to', ES: 'Tutorial' }, title: { EN: 'How to Measure for Fence Material in Florida', ES: 'Cómo medir para el material de cerca en Florida' }, read: '4 min', img: 'chainlink' },
    { tag: { EN: 'Pricing', ES: 'Precios' }, title: { EN: 'How Much Does a Fence Cost in Florida?', ES: '¿Cuánto cuesta una cerca en Florida?' }, read: '8 min', img: 'vinyl' },
  ];
  return (
    <section style={{ background: 'var(--parchment)', padding: '120px 0', borderTop: '1px solid rgba(0,16,17,0.08)' }}>
      <div className="container">
        <div style={{ marginBottom: 48, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
          <div>
            <h2 className="display" style={{ fontSize: 'clamp(40px, 5.5vw, 60px)', margin: '0' }}>
              {t('Fence guides', 'Guías de cercas')}<br/>{t('& how-tos.', 'y tutoriales.')}
            </h2>
          </div>
          <a href="#" className="mono" style={{ fontSize: 14.5, letterSpacing: '0.14em', color: 'var(--ink)', display: 'flex', alignItems: 'center', gap: 8 }}>
            {t('ALL ARTICLES', 'TODOS LOS ARTÍCULOS')} <ArrowRight size={13} />
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {posts.map((p, i) => (
            <article key={i} style={{
              background: 'var(--white)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseLeave={e => e.currentTarget.style.transform = ''}>
              <div style={{ position: 'relative', height: 240, background: '#263166' }}>
                <img src={FENCE_IMG[p.img]} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                <span className="mono" style={{
                  position: 'absolute', top: 16, left: 16,
                  fontSize: 13.5, letterSpacing: '0.14em',
                  background: 'var(--tangerine)', color: 'var(--ink)',
                  padding: '5px 10px', borderRadius: 3, fontWeight: 600,
                }}>{t(p.tag).toUpperCase()}</span>
              </div>
              <div style={{ padding: 28 }}>
                <h3 style={{ fontSize: 23.5, fontWeight: 500, margin: '0 0 16px', color: 'var(--ink)', lineHeight: 1.25 }}>
                  {t(p.title)}
                </h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="mono" style={{ fontSize: 14, letterSpacing: '0.14em', color: 'var(--charcoal)' }}>{p.read.toUpperCase()} {t('READ', 'DE LECTURA')}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14.5, color: 'var(--laser-blue)', fontWeight: 500 }}>
                    {t('Read', 'Leer')} <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const ShopTour = () => {
  const t = useT();
  return (
  <section style={{ background: 'var(--ink)', color: 'var(--parchment)', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
    <div className="pat-diamond" style={{ position: 'absolute', inset: 0, opacity: 0.2 }}/>
    <div className="container" style={{ position: 'relative' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 60, alignItems: 'center' }}>
        <div>
          <span className="eyebrow" style={{ color: 'var(--tangerine)' }}>{t('About WFS', 'Sobre WFS')}</span>
          <h2 className="display" style={{ fontSize: 'clamp(36px, 5vw, 60px)', margin: '12px 0 24px' }}>
            {t('Family-owned.', 'De propiedad familiar.')}<br/>{t('Fabricated in-house.', 'Fabricado en planta.')}
          </h2>
          <p style={{ fontSize: 18.5, lineHeight: 1.55, color: 'var(--alice-blue)', maxWidth: 460, marginBottom: 24 }}>
            {t(
              'Western Fence Supply is led by management with two decades of fence installation and fabrication experience. We refuse to sell low-quality components, same standard we held when we were the contractors.',
              'Western Fence Supply está dirigida por un equipo con dos décadas de experiencia en instalación y fabricación de cercas. Nos negamos a vender componentes de baja calidad, el mismo estándar que manteníamos cuando éramos los contratistas.'
            )}
          </p>
          <p style={{ fontSize: 16.5, lineHeight: 1.55, color: 'var(--silver)', maxWidth: 460, marginBottom: 32 }}>
            {t(
              'From our Fort Myers fabrication shop, we transform raw fencing components into the highest-quality fence panels available on the market today.',
              'Desde nuestra planta de fabricación en Fort Myers, transformamos componentes de cerca en bruto en los paneles de cerca de la más alta calidad disponibles hoy en el mercado.'
            )}
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button className="btn btn-primary">{t('Tour the shop', 'Recorre la planta')} <ArrowRight /></button>
            <button className="btn btn-ghost on-dark" style={{ color: 'var(--parchment)' }}>{t('About us', 'Sobre nosotros')}</button>
          </div>
        </div>
        <div style={{
          position: 'relative',
          background: 'var(--parchment)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          aspectRatio: '4 / 3',
        }}>
          <img src={FENCE_IMG.shop} alt={t('Western Fence Supply Fort Myers shop', 'Planta de Western Fence Supply en Fort Myers')}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <span className="mono" style={{
            position: 'absolute', bottom: 18, left: 18,
            fontSize: 13.5, letterSpacing: '0.14em',
            background: 'var(--ink)', color: 'var(--alice-blue)',
            padding: '5px 10px', borderRadius: 3,
          }}>FORT MYERS · FL</span>
        </div>
      </div>
    </div>
  </section>
  );
};

/* ---------- About Intro (homepage, just below hero) ---------- */
const AboutIntro = () => {
  const t = useT();
  const [ctaHover, setCtaHover] = React.useState(false);
  const videoRef = React.useRef(null);

  // Keep the looping video playing even if `canplay` fired before React
  // attached (cached video) — play() on mount, resume on any stray pause.
  React.useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const tryPlay = () => { const p = v.play(); if (p) p.catch(() => {}); };
    tryPlay();
    v.addEventListener('loadeddata', tryPlay);
    v.addEventListener('pause', tryPlay);
    return () => {
      v.removeEventListener('loadeddata', tryPlay);
      v.removeEventListener('pause', tryPlay);
    };
  }, []);
  return (
    <section style={{ background: 'var(--white)', padding: '120px 0' }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 56,
        alignItems: 'center',
      }}>
        {/* Image with notched corners */}
        <div style={{ position: 'relative', aspectRatio: '16 / 9' }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: '#ffffff',
            WebkitMask:
              'radial-gradient(circle 42px at 100% 0, transparent 42px, #000 43px) top right / 50% 50% no-repeat, ' +
              'radial-gradient(circle 42px at 0 100%, transparent 42px, #000 43px) bottom left / 50% 50% no-repeat, ' +
              'linear-gradient(#000,#000) top left / 50% 50% no-repeat, ' +
              'linear-gradient(#000,#000) bottom right / 50% 50% no-repeat',
            mask:
              'radial-gradient(circle 42px at 100% 0, transparent 42px, #000 43px) top right / 50% 50% no-repeat, ' +
              'radial-gradient(circle 42px at 0 100%, transparent 42px, #000 43px) bottom left / 50% 50% no-repeat, ' +
              'linear-gradient(#000,#000) top left / 50% 50% no-repeat, ' +
              'linear-gradient(#000,#000) bottom right / 50% 50% no-repeat',
            borderRadius: 24,
            overflow: 'hidden',
          }}>
            <video
              ref={videoRef}
              src="assets/second-video.mp4?v=234"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="Western Fence Supply, fencing material supplier in Southwest Florida"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>

        {/* Copy */}
        <div style={{ maxWidth: 560 }}>
          <h2 className="display" style={{
            margin: 0,
            fontSize: 'clamp(26px, 2.6vw, 36px)',
            lineHeight: 1.02,
            letterSpacing: '-0.02em',
            fontWeight: 800,
          }}>
            {t('#1 Southwest Florida', '#1 del suroeste de Florida')}<br/>
            <span style={{ color: 'var(--tangerine)' }}>{t('Fence Supply.', 'en cercas.')}</span>
          </h2>

          <p style={{
            marginTop: 24,
            fontSize: 16, lineHeight: 1.55,
            color: 'var(--charcoal)',
            maxWidth: 540,
          }}>
            {t(
              "Western Fence Supply is Southwest Florida's best source for high-quality vinyl fence, aluminum fence, chain-link fence, and metal fence materials. We proudly serve fence contractors and homeowners throughout Florida, providing premium materials, competitive pricing, and reliable service for a wide range of projects.",
              'Western Fence Supply es la mejor fuente del suroeste de Florida para materiales de cerca de vinilo, aluminio, malla ciclónica y metal de alta calidad. Atendemos con orgullo a contratistas de cercas y propietarios en toda Florida, ofreciendo materiales premium, precios competitivos y un servicio confiable para todo tipo de proyectos.'
            )}
          </p>
          <p style={{
            marginTop: 14,
            fontSize: 16, lineHeight: 1.55,
            color: 'var(--charcoal)',
            maxWidth: 540,
          }}>
            {t(
              'Our goal is to sell superior quality fence products at wholesale prices and to deliver our fencing products to you with the highest attention to detail and with the best customer service in our industry. Take a tour of our shop, read our reviews, then contact us to get started on your dream fence project today.',
              'Nuestra meta es vender productos de cerca de calidad superior a precios mayoristas y entregarlos con la mayor atención al detalle y el mejor servicio al cliente de nuestra industria. Recorre nuestra tienda, lee nuestras reseñas y contáctanos para comenzar hoy el proyecto de la cerca de tus sueños.'
            )}
          </p>

          {/* Stat strip */}
          <div style={{
            marginTop: 36,
            display: 'grid', gridTemplateColumns: 'repeat(2, auto)',
            gap: 32,
            paddingTop: 28,
            borderTop: '1px solid rgba(0,16,17,0.12)',
          }}>
            {[
              ['20+', { EN: 'Years fabricating', ES: 'Años fabricando' }],
              ['2',   { EN: 'Yards · FM + PC',    ES: 'Sucursales · FM + PC' }],
            ].map(([n, l], i) => (
              <div key={i}>
                <div className="display" style={{ fontSize: 25.5, lineHeight: 1, color: 'var(--ink)' }}>{n}</div>
                <div className="mono" style={{
                  marginTop: 6, fontSize: 13.5, letterSpacing: '0.18em',
                  textTransform: 'uppercase', color: 'var(--charcoal)',
                }}>{t(l)}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 36, display: 'flex', gap: 28, flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="estimate.html"
              onMouseEnter={() => setCtaHover(true)}
              onMouseLeave={() => setCtaHover(false)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 16,
                padding: '14px 14px 14px 26px',
                borderRadius: 999,
                background: ctaHover ? 'var(--laser-blue)' : 'var(--ink)',
                color: 'var(--white)',
                textDecoration: 'none',
                fontFamily: 'var(--sans)',
                fontSize: 14.5, fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                transition: 'background 0.2s ease, transform 0.2s ease',
                transform: ctaHover ? 'translateY(-1px)' : 'none',
                boxShadow: '0 18px 36px -18px rgba(38, 49, 102,0.5)',
              }}>
              {t('Start Your Fence Project', 'Inicia tu proyecto de cerca')}
              <span style={{
                width: 30, height: 30, borderRadius: '50%',
                background: 'var(--white)', color: 'var(--ink)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                  <path d="M5 11L11 5M11 5H6M11 5V10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
            <a href="about.html" className="mono" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '14px 0',
              fontSize: 14, fontWeight: 700, letterSpacing: '0.22em',
              textTransform: 'uppercase', color: 'var(--ink)',
              borderBottom: '1px solid var(--ink)',
            }}>
              {t('Tour the shop', 'Recorre la planta')}
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { IconStrip, Gates, Testimonials, FAQ, Articles, ShopTour, AboutIntro });
