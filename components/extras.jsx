/* Additional sections: IconStrip, Gates, Testimonials, FAQ, Articles, ShopTour */

const IconStrip = () => {
  const items = [
    { key: 'aluminum', label: 'Aluminum', href: '#products' },
    { key: 'chainlink', label: 'Chain Link', href: '#products' },
    { key: 'metal', label: 'Metal / DuraFence', href: '#products' },
    { key: 'vinyl', label: 'Vinyl / PVC', href: '#products' },
  ];
  return (
    <section style={{ background: 'var(--white)', padding: '40px 0', borderBottom: '1px solid rgba(0,16,17,0.06)' }}>
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
              <span className="display" style={{ fontSize: 18, color: 'var(--ink)' }}>{it.label}</span>
              <span className="mono" style={{ fontSize: 11, color: 'var(--laser-blue)', letterSpacing: '0.14em', display: 'flex', alignItems: 'center', gap: 6 }}>
                EXPLORE STYLES <ArrowRight size={11} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gates = () => {
  const gates = [
    { name: 'Single Walk Gates', desc: 'Mechanically assembled or welded. Standard widths 3-4 ft.', img: 'aluminum' },
    { name: 'Double Drive Gates', desc: 'Welded heavy-duty up to 16 ft total. Stainless steel hardware.', img: 'metal' },
    { name: 'Custom Estate Gates', desc: 'Welded estate-grade aluminum, fully fabricated in-house.', img: 'vinyl' },
    { name: 'Chain Link Gates', desc: 'Welded chain link gates plus full hardware kit.', img: 'chainlink' },
  ];
  return (
    <section style={{ background: 'var(--linen)', padding: '76px 0' }}>
      <div className="container">
        <div style={{ marginBottom: 48, maxWidth: 720 }}>
          <h2 className="display" style={{ fontSize: 'clamp(40px, 5.5vw, 60px)', margin: '0' }}>
            Welded in-house.<br/>
            <span style={{ color: 'var(--charcoal)' }}>Sized to fit.</span>
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
              <div style={{ position: 'relative', height: 200, background: '#1a2548' }}>
                <img src={FENCE_IMG[g.img]} alt={g.name}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,16,17,0) 50%, rgba(0,16,17,0.5) 100%)' }}/>
                <div className="mono" style={{
                  position: 'absolute', top: 14, left: 14, fontSize: 10, letterSpacing: '0.14em',
                  background: 'rgba(0,16,17,0.6)', color: 'var(--alice-blue)',
                  padding: '5px 8px', borderRadius: 3,
                }}>
                  GATE-0{i + 1}
                </div>
              </div>
              <div style={{ padding: 22 }}>
                <h3 className="display" style={{ fontSize: 22, margin: '0 0 10px' }}>{g.name}</h3>
                <p style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--charcoal)', margin: 0 }}>{g.desc}</p>
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
      tag: { EN: 'Aluminum', ES: 'Aluminio' } },
    { name: 'Sally Barney',
      text: { EN: 'Their prices are the best in Lee County. I checked several competitors and they were not even close.',
              ES: 'Sus precios son los mejores del condado de Lee. Comparé con varios competidores y ni se acercaron.' },
      tag: { EN: 'Chain Link', ES: 'Malla ciclónica' } },
    { name: 'Yanier Ortiz',
      text: { EN: "Best company in town, best materials at a great price. You don't have to drive to Miami anymore, everything you need is right here.",
              ES: 'La mejor empresa de la ciudad, los mejores materiales a buen precio. Ya no tienes que manejar hasta Miami, todo lo que necesitas está aquí.' },
      tag: { EN: 'Vinyl', ES: 'Vinilo' } },
    { name: 'Reinier Carmenates',
      text: { EN: "I've installed fences in Lee County for 5 years. I've never paid such a low price for such good material.",
              ES: 'He instalado cercas en el condado de Lee por 5 años. Nunca había pagado un precio tan bajo por material tan bueno.' },
      tag: { EN: 'Contractor', ES: 'Contratista' } },
  ];
  return (
    <section style={{ background: 'var(--white)', padding: '56px 0' }}>
      <div className="container">
        {/* Editorial header, matches the rest of the page */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: 48,
          alignItems: 'end',
          paddingBottom: 24, marginBottom: 28,
          borderBottom: '1px solid rgba(0,16,17,0.12)',
        }}>
          <div>
            <h2 className="display" style={{
              margin: 0,
              fontSize: 'clamp(28px, 3vw, 40px)',
              lineHeight: 1, letterSpacing: '-0.02em',
              fontWeight: 800,
            }}>
              {t('What contractors and', 'Lo que dicen los contratistas')}<br/>
              <span style={{ color: 'var(--tangerine)' }}>{t('homeowners say.', 'y propietarios.')}</span>
            </h2>
          </div>
          <a href="#" className="mono" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            fontSize: 11, fontWeight: 700,
            letterSpacing: '0.22em', textTransform: 'uppercase',
            color: 'var(--ink)',
            borderBottom: '1px solid var(--ink)',
            paddingBottom: 4,
          }}>
            {t('Read all reviews', 'Ver todas las reseñas')}
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square"/>
            </svg>
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
          {reviews.map((r, i) => (
            <div key={i} style={{
              background: 'var(--parchment)',
              borderRadius: 'var(--radius)',
              padding: 28,
              border: '1px solid rgba(0,16,17,0.06)',
              display: 'flex', flexDirection: 'column', gap: 18,
              minHeight: 280,
            }}>
              <div style={{ display: 'flex', gap: 2, color: 'var(--tangerine)', fontSize: 14 }}>
                {'★★★★★'}
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.5, color: 'var(--ink)', margin: 0, flex: 1 }}>
                "{t(r.text)}"
              </p>
              <div style={{ borderTop: '1px solid rgba(0,16,17,0.1)', paddingTop: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink)' }}>{r.name}</div>
                <span className="mono" style={{ fontSize: 10, letterSpacing: '0.14em', color: 'var(--charcoal)', textTransform: 'uppercase' }}>{t(r.tag)}</span>
              </div>
            </div>
          ))}
        </div>
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
     { EN: 'Stocked items typically ship in 1-2 days. Custom or non-stock items can take 6-8 weeks.',
       ES: 'Los artículos en stock normalmente se envían en 1-2 días. Los artículos a medida o fuera de stock pueden tardar 6-8 semanas.' }],
    [{ EN: 'Do you install fences?', ES: '¿Instalan cercas?' },
     { EN: 'No, we are solely a supply company. We can recommend trusted local installers who use our materials.',
       ES: 'No, somos solamente una empresa de suministro. Podemos recomendar instaladores locales de confianza que usan nuestros materiales.' }],
    [{ EN: 'Do you come out to measure?', ES: '¿Vienen a tomar medidas?' },
     { EN: 'No. We ask you to provide a survey or hand-drawn layout with measurements per side, plus height, color and style.',
       ES: 'No. Te pedimos un plano o boceto a mano con medidas por lado, además de altura, color y estilo.' }],
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
    [{ EN: 'Do you deliver outside Florida?', ES: '¿Entregan fuera de Florida?' },
     { EN: 'Not at this time, we currently deliver within Florida only.',
       ES: 'Por ahora no, actualmente entregamos solamente dentro de Florida.' }],
  ];
  const [open, setOpen] = React.useState(0);
  const [ctaHover, setCtaHover] = React.useState(false);
  return (
    <section style={{ background: 'var(--parchment)', padding: '64px 0' }}>
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
              fontSize: 14, lineHeight: 1.6, color: 'var(--charcoal)',
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
                background: ctaHover ? '#0f1832' : 'var(--ink)',
                color: 'var(--white)',
                textDecoration: 'none',
                fontFamily: 'var(--sans)',
                fontSize: 12, fontWeight: 700,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                transition: 'background 0.2s ease, transform 0.2s ease',
                transform: ctaHover ? 'translateY(-1px)' : 'none',
                boxShadow: '0 18px 36px -18px rgba(26,37,72,0.5)',
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
                  background: isOpen ? 'rgba(255,113,51,0.04)' : 'transparent',
                  transition: 'all 0.25s ease',
                }}>
                  <button onClick={() => setOpen(isOpen ? -1 : i)} style={{
                    width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '22px 0', textAlign: 'left', gap: 24,
                  }}>
                    <span style={{ display: 'flex', gap: 20, alignItems: 'baseline' }}>
                      <span className="mono" style={{
                        fontSize: 11, fontWeight: 700,
                        letterSpacing: '0.22em',
                        color: isOpen ? 'var(--tangerine)' : 'var(--charcoal)',
                        transition: 'color 0.25s ease',
                      }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span style={{
                        fontSize: 17, fontWeight: 500,
                        color: 'var(--ink)',
                        letterSpacing: '-0.005em',
                      }}>{t(q)}</span>
                    </span>
                    <span style={{
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
                      fontSize: 15, lineHeight: 1.6,
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
  const posts = [
    { tag: 'Materials', title: 'Top 4 Durable Fence Materials For Your Home', read: '6 min', img: 'aluminum' },
    { tag: 'How-to', title: 'How to Measure for Fence Material in Florida', read: '4 min', img: 'chainlink' },
    { tag: 'Pricing', title: 'How Much Does a Fence Cost in Florida?', read: '8 min', img: 'vinyl' },
  ];
  return (
    <section style={{ background: 'var(--parchment)', padding: '76px 0', borderTop: '1px solid rgba(0,16,17,0.08)' }}>
      <div className="container">
        <div style={{ marginBottom: 48, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
          <div>
            <h2 className="display" style={{ fontSize: 'clamp(40px, 5.5vw, 60px)', margin: '0' }}>
              Fence guides<br/>& how-tos.
            </h2>
          </div>
          <a href="#" className="mono" style={{ fontSize: 13, letterSpacing: '0.14em', color: 'var(--ink)', display: 'flex', alignItems: 'center', gap: 8 }}>
            ALL ARTICLES <ArrowRight size={13} />
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
              <div style={{ position: 'relative', height: 240, background: '#1a2548' }}>
                <img src={FENCE_IMG[p.img]} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                <span className="mono" style={{
                  position: 'absolute', top: 16, left: 16,
                  fontSize: 10, letterSpacing: '0.14em',
                  background: 'var(--tangerine)', color: 'var(--ink)',
                  padding: '5px 10px', borderRadius: 3, fontWeight: 600,
                }}>{p.tag.toUpperCase()}</span>
              </div>
              <div style={{ padding: 28 }}>
                <h3 style={{ fontSize: 22, fontWeight: 500, margin: '0 0 16px', color: 'var(--ink)', lineHeight: 1.25 }}>
                  {p.title}
                </h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="mono" style={{ fontSize: 11, letterSpacing: '0.14em', color: 'var(--charcoal)' }}>{p.read.toUpperCase()} READ</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--laser-blue)', fontWeight: 500 }}>
                    Read <ArrowRight size={12} />
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

const ShopTour = () => (
  <section style={{ background: 'var(--ink)', color: 'var(--parchment)', padding: '76px 0', position: 'relative', overflow: 'hidden' }}>
    <div className="pat-diamond" style={{ position: 'absolute', inset: 0, opacity: 0.2 }}/>
    <div className="container" style={{ position: 'relative' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 60, alignItems: 'center' }}>
        <div>
          <span className="eyebrow" style={{ color: 'var(--tangerine)' }}>About WFS</span>
          <h2 className="display" style={{ fontSize: 'clamp(36px, 5vw, 60px)', margin: '12px 0 24px' }}>
            Family-owned.<br/>Fabricated in-house.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.55, color: 'var(--alice-blue)', maxWidth: 460, marginBottom: 24 }}>
            Western Fence Supply is led by management with over a decade of fence installation
            and fabrication experience. We refuse to sell low-quality components, same standard
            we held when we were the contractors.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--silver)', maxWidth: 460, marginBottom: 32 }}>
            From our Fort Myers fabrication shop, we transform raw fencing components into the
            highest-quality fence panels available on the market today.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button className="btn btn-primary">Tour the shop <ArrowRight /></button>
            <button className="btn btn-ghost on-dark" style={{ color: 'var(--parchment)' }}>About us</button>
          </div>
        </div>
        <div style={{
          position: 'relative',
          background: 'var(--parchment)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          aspectRatio: '4 / 3',
        }}>
          <img src={FENCE_IMG.shop} alt="Western Fence Supply Fort Myers shop"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <span className="mono" style={{
            position: 'absolute', bottom: 18, left: 18,
            fontSize: 10, letterSpacing: '0.14em',
            background: 'var(--ink)', color: 'var(--alice-blue)',
            padding: '5px 10px', borderRadius: 3,
          }}>FORT MYERS · FL</span>
        </div>
      </div>
    </div>
  </section>
);

/* ---------- About Intro (homepage, just below hero) ---------- */
const AboutIntro = () => {
  const t = useT();
  const [ctaHover, setCtaHover] = React.useState(false);
  return (
    <section style={{ background: 'var(--white)', padding: '88px 0' }}>
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
            background: '#f3f1ee',
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
              src="assets/wfs_video1_final.mp4"
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
            fontSize: 14.5, lineHeight: 1.55,
            color: 'var(--charcoal)',
            maxWidth: 540,
          }}>
            {t(
              "Southwest Florida's best source for high-quality vinyl, aluminum and chain-link fence materials. Family-owned and led by management with over a decade of installation and fabrication experience, same standard we held when we were the contractors.",
              'La mejor fuente del suroeste de Florida para materiales de cerca de vinilo, aluminio y malla ciclónica de alta calidad. Empresa familiar dirigida por gerencia con más de una década de experiencia en instalación y fabricación, el mismo estándar que mantuvimos cuando éramos los contratistas.'
            )}
          </p>

          {/* Stat strip */}
          <div style={{
            marginTop: 36,
            display: 'grid', gridTemplateColumns: 'repeat(3, auto)',
            gap: 32,
            paddingTop: 28,
            borderTop: '1px solid rgba(0,16,17,0.12)',
          }}>
            {[
              ['10+', { EN: 'Years fabricating', ES: 'Años fabricando' }],
              ['4',   { EN: 'Counties served',    ES: 'Condados atendidos' }],
              ['2',   { EN: 'Yards · FM + PC',    ES: 'Sucursales · FM + PC' }],
            ].map(([n, l], i) => (
              <div key={i}>
                <div className="display" style={{ fontSize: 24, lineHeight: 1, color: 'var(--ink)' }}>{n}</div>
                <div className="mono" style={{
                  marginTop: 6, fontSize: 10, letterSpacing: '0.18em',
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
                background: ctaHover ? '#0f1832' : 'var(--ink)',
                color: 'var(--white)',
                textDecoration: 'none',
                fontFamily: 'var(--sans)',
                fontSize: 12, fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                transition: 'background 0.2s ease, transform 0.2s ease',
                transform: ctaHover ? 'translateY(-1px)' : 'none',
                boxShadow: '0 18px 36px -18px rgba(26,37,72,0.5)',
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
              fontSize: 11, fontWeight: 700, letterSpacing: '0.22em',
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
