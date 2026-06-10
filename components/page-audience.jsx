/* Homeowner + Contractor landing pages, entered from the homepage hero buttons */

/* ───────────────────────────── HOMEOWNER ───────────────────────────── */

const HomeownerHero = () => {
  const t = useT();
  return (
  <section style={{
    background: 'var(--white)',
    minHeight: 'calc(100svh - 80px)',
    padding: '64px 0',
    display: 'flex', alignItems: 'center',
    position: 'relative', overflow: 'hidden',
  }}>
    {/* Faint dotted grid texture behind */}
    <div aria-hidden style={{
      position: 'absolute', inset: 0,
      backgroundImage: 'radial-gradient(rgba(38, 49, 102,0.06) 1px, transparent 1px)',
      backgroundSize: '24px 24px',
      maskImage: 'radial-gradient(ellipse at center, #000 0%, transparent 70%)',
      WebkitMaskImage: 'radial-gradient(ellipse at center, #000 0%, transparent 70%)',
      pointerEvents: 'none',
    }}/>
    <div className="container" style={{ position: 'relative', maxWidth: 1280, width: '100%' }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '1.2fr 1fr',
        gap: 64, alignItems: 'center',
      }}>
        {/* Left, copy */}
        <div>
          <span className="mono" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '7px 14px', marginBottom: 22,
            border: '1px solid var(--ink)',
            background: 'var(--white)',
            fontSize: 10, fontWeight: 700, letterSpacing: '0.22em',
            textTransform: 'uppercase', color: 'var(--ink)',
          }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--tangerine)' }}/>
            {t('Homeowner · Built for residential', 'Propietario · Diseñado para residencial')}
          </span>
          <h1 style={{
            margin: '0 0 22px',
            fontFamily: 'var(--display)',
            fontVariationSettings: "'wdth' 100",
            fontWeight: 700,
            fontSize: 'clamp(32px, 3.6vw, 52px)',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            textTransform: 'none',
            color: 'var(--ink)',
          }}>
            {t('Fence solutions', 'Soluciones de cercas')}{' '}
            <span style={{ color: 'var(--tangerine)' }}>{t('for your home.', 'para tu hogar.')}</span>
          </h1>
          <p className="mono" style={{
            margin: '0 0 26px',
            maxWidth: 520,
            fontSize: 14, lineHeight: 1.65,
            color: 'var(--charcoal)',
          }}>
            {t(
              "Enhance your property's value, privacy, and security with premium manufacturing-direct fencing. We help you plan the project and connect you with certified installers for the build.",
              'Aumenta el valor, privacidad y seguridad de tu propiedad con cercas premium directas de fábrica. Te ayudamos a planificar el proyecto y te conectamos con instaladores certificados para la obra.'
            )}
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 26 }}>
            <a href="estimate.html" style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              padding: '15px 30px',
              background: 'var(--ink)', color: 'var(--white)',
              fontFamily: 'var(--sans)', fontSize: 12, fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              boxShadow: '6px 6px 0 var(--tangerine)',
              transition: 'transform 0.18s ease, box-shadow 0.18s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-2px, -2px)'; e.currentTarget.style.boxShadow = '8px 8px 0 var(--tangerine)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '6px 6px 0 var(--tangerine)'; }}>
              {t('Get Started', 'Comenzar')}
            </a>
            <a href="projects.html" style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              padding: '15px 30px',
              background: 'var(--white)', color: 'var(--ink)',
              border: '1.5px solid var(--ink)',
              fontFamily: 'var(--sans)', fontSize: 12, fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase',
            }}>
              {t('View Gallery', 'Ver galería')}
            </a>
          </div>
          {/* Trust micro-bullets */}
          <div className="mono" style={{
            display: 'flex', gap: 22, flexWrap: 'wrap',
            fontSize: 10.5, fontWeight: 700, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: 'var(--charcoal)',
          }}>
            {[
              { EN: 'No minimums', ES: 'Sin mínimos' },
              { EN: 'Free takeoff', ES: 'Toma de medidas gratis' },
              { EN: 'Supplier-direct floor', ES: 'Precio directo del proveedor' },
            ].map((b, i) => (
              <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8 L7 12 L13 4" stroke="var(--tangerine)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {t(b)}
              </span>
            ))}
          </div>
        </div>

        {/* Right, homeowner visual: illustrated home scene + benefits */}
        <div style={{ position: 'relative', aspectRatio: '5 / 6', maxHeight: 'calc(100svh - 160px)' }}>
          {/* Outer ink frame */}
          <div style={{
            position: 'absolute', inset: 0,
            border: '1.5px solid var(--ink)',
            background: '#ffffff',
          }}/>
          {/* Tangerine offset shadow plate */}
          <div aria-hidden style={{
            position: 'absolute', inset: '12px -12px -12px 12px',
            background: 'var(--tangerine)', zIndex: -1,
          }}/>

          {/* Photo: real residential vinyl gate */}
          <div style={{
            position: 'absolute', top: 24, left: 24, right: 24,
            height: '52%',
            overflow: 'hidden',
            border: '1px solid rgba(38, 49, 102,0.18)',
            background: '#ffffff',
          }}>
            <img
              src="assets/gate-double.jpg"
              alt={t('Residential white vinyl double-swing gate', 'Portón residencial doble batiente de vinilo blanco')}
              style={{
                width: '100%', height: '100%',
                objectFit: 'cover', display: 'block',
              }}
            />
            {/* Top-left chip */}
            <span className="mono" style={{
              position: 'absolute', top: 14, left: 14,
              padding: '6px 12px',
              background: 'var(--ink)', color: 'var(--white)',
              fontSize: 9.5, fontWeight: 700, letterSpacing: '0.22em',
              textTransform: 'uppercase',
            }}>{t('Recent install', 'Instalación reciente')}</span>
            {/* Bottom-right location chip */}
            <span className="mono" style={{
              position: 'absolute', bottom: 14, right: 14,
              padding: '6px 12px',
              background: 'rgba(255,255,255,0.95)', color: 'var(--ink)',
              fontSize: 9.5, fontWeight: 700, letterSpacing: '0.18em',
              textTransform: 'uppercase',
              display: 'inline-flex', alignItems: 'center', gap: 8,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--tangerine)' }}/>
              {t('Cape Coral · Vinyl 6′', 'Cape Coral · Vinilo 6′')}
            </span>
          </div>

          {/* Bottom card, what you'll love */}
          <div style={{
            position: 'absolute', bottom: 24, left: 24, right: 24,
            border: '1px solid rgba(38, 49, 102,0.18)',
            background: 'var(--white)',
            padding: '20px 22px',
          }}>
            <div className="mono" style={{
              fontSize: 9.5, fontWeight: 700, letterSpacing: '0.22em',
              color: 'var(--tangerine)', textTransform: 'uppercase',
              marginBottom: 14,
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--tangerine)' }}/>
              {t('Why homeowners pick WFS', 'Por qué los propietarios eligen WFS')}
            </div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 11 }}>
              {[
                { line: { EN: 'Privacy around the backyard', ES: 'Privacidad alrededor del patio' },
                  icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 L19 6 V12 Q19 17 12 21 Q5 17 5 12 V6 Z"/></svg>) },
                { line: { EN: 'Curb appeal that lifts home value', ES: 'Atractivo exterior que sube el valor de tu hogar' },
                  icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21 V11 L12 5 L20 11 V21 Z"/><path d="M10 21 V15 H14 V21"/></svg>) },
                { line: { EN: 'Pool-code & HOA compliant', ES: 'Cumple código de piscinas y HOA' },
                  icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 14 Q6 12 9 14 Q12 16 15 14 Q18 12 21 14"/><path d="M3 19 Q6 17 9 19 Q12 21 15 19 Q18 17 21 19"/><circle cx="16" cy="6" r="2.4"/></svg>) },
              ].map((b, i) => (
                <li key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                }}>
                  <span style={{
                    flexShrink: 0,
                    width: 28, height: 28,
                    border: '1.5px solid var(--ink)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--tangerine)',
                  }}>{b.icon}</span>
                  <span className="mono" style={{
                    fontSize: 12.5, fontWeight: 500, color: 'var(--ink)',
                    lineHeight: 1.3,
                  }}>{t(b.line)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

/* ───── Trust strip, 4 stats anchoring the hero ───── */

const HomeownerTrustStrip = () => {
  const t = useT();
  return (
  <section style={{
    background: 'var(--white)',
    borderTop: '1px solid rgba(38, 49, 102,0.1)',
    borderBottom: '1px solid rgba(38, 49, 102,0.1)',
    padding: '32px 0',
  }}>
    <div className="container">
      <div className="wfs-stat-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
        {[
          ['22+',  { EN: 'Years family-owned', ES: 'Años familia propietaria' }],
          ['2',    { EN: 'Yards · FM + PC',    ES: 'Sucursales · FM + PC' }],
          ['2', { EN: 'Yards · FM + PC',       ES: 'Sucursales · FM + PC' }],
          ['24h',  { EN: 'Quote turnaround',    ES: 'Cotización en 24h' }],
        ].map(([n, l], i) => (
          <div key={n} className="wfs-stat-cell" style={{
            paddingLeft: i === 0 ? 0 : 24,
            borderLeft: i === 0 ? 'none' : '1px solid rgba(38, 49, 102,0.1)',
          }}>
            <div className="display" style={{
              fontSize: 'clamp(32px, 3.6vw, 48px)', lineHeight: 1,
              color: 'var(--ink)', letterSpacing: '-0.02em',
            }}>{n}</div>
            <div className="mono" style={{
              marginTop: 10, fontSize: 11, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: 'var(--charcoal)',
              fontWeight: 700,
            }}>{t(l)}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

/* ───── How it works, 6 steps with circle icons ───── */

const HomeownerSteps = () => {
  const t = useT();
  const StepIcon = ({ n, children }) => (
    <div style={{
      position: 'relative',
      width: 96, height: 96,
      margin: '0 auto 28px',
    }}>
      {/* Outer tangerine ring */}
      <div style={{
        position: 'absolute', inset: 0, borderRadius: '50%',
        border: '1.5px dashed rgba(255,113,51,0.45)',
      }}/>
      {/* Inner solid circle */}
      <div style={{
        position: 'absolute', inset: 6, borderRadius: '50%',
        background: '#ffffff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: 'var(--ink)',
      }}>{children}</div>
      {/* Number badge */}
      <span className="mono" style={{
        position: 'absolute', bottom: -2, right: -2,
        width: 30, height: 30, borderRadius: '50%',
        background: 'var(--ink)', color: 'var(--white)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 12, fontWeight: 700, letterSpacing: '0',
        border: '3px solid var(--white)',
      }}>{n}</span>
    </div>
  );
  const steps = [
    { n: '1', title: { EN: 'Draw Your Fence',      ES: 'Dibuja tu cerca' },
      body:  { EN: 'Sketch your layout to visualize the project.',
                ES: 'Esboza la distribución para visualizar el proyecto.' },
      svg: (<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19 L7 21 L9 16 L18 7 L21 10 Z"/><path d="M16 9 L19 12"/></svg>) },
    { n: '2', title: { EN: 'Get an Estimate',      ES: 'Obtén un estimado' },
      body:  { EN: 'Use our tools to get a rough idea of the cost.',
                ES: 'Usa nuestras herramientas para una idea aproximada del costo.' },
      svg: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="5" y="3" width="14" height="18" rx="1"/><rect x="7.5" y="5.5" width="9" height="4"/><circle cx="9" cy="13" r="0.6" fill="currentColor"/><circle cx="12" cy="13" r="0.6" fill="currentColor"/><circle cx="15" cy="13" r="0.6" fill="currentColor"/><circle cx="9" cy="16" r="0.6" fill="currentColor"/><circle cx="12" cy="16" r="0.6" fill="currentColor"/><circle cx="15" cy="16" r="0.6" fill="currentColor"/></svg>) },
    { n: '3', title: { EN: 'Book a Visit',         ES: 'Agenda una visita' },
      body:  { EN: 'Schedule a time for us to verify measurements.',
                ES: 'Programa una hora para que verifiquemos las medidas.' },
      svg: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="5" width="16" height="15" rx="1"/><path d="M4 9 H20"/><line x1="8" y1="3" x2="8" y2="6"/><line x1="16" y1="3" x2="16" y2="6"/></svg>) },
    { n: '4', title: { EN: 'Get a Quote',          ES: 'Recibe la cotización' },
      body:  { EN: 'Receive a final, detailed quote for your project.',
                ES: 'Recibe una cotización final y detallada para tu proyecto.' },
      svg: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 3 H15 L19 7 V21 H7 Z"/><path d="M15 3 V7 H19"/><line x1="9" y1="12" x2="17" y2="12"/><line x1="9" y1="15" x2="17" y2="15"/><line x1="9" y1="18" x2="13" y2="18"/></svg>) },
    { n: '5', title: { EN: 'Fabrication',          ES: 'Fabricación' },
      body:  { EN: 'We manufacture your fence locally to your exact specifications.',
                ES: 'Fabricamos tu cerca localmente con tus especificaciones exactas.' },
      svg: (<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 21 V11 L9 14 V11 L15 14 V11 L21 14 V21 Z"/><line x1="3" y1="21" x2="21" y2="21"/></svg>) },
    { n: '6', title: { EN: 'Certified Installation', ES: 'Instalación certificada' },
      body:  { EN: 'Choose from our WFS-certified installer alliance for professional installation.',
                ES: 'Elige entre nuestra red de instaladores certificados WFS para una instalación profesional.' },
      svg: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3 L19 6 V12 Q19 17 12 21 Q5 17 5 12 V6 Z"/><path d="M9 12 L11 14 L15 10" strokeLinecap="round" strokeLinejoin="round"/></svg>) },
  ];
  return (
    <section style={{ background: '#ffffff', padding: '120px 0 136px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <h2 className="display" style={{
            margin: 0,
            fontSize: 'clamp(28px, 3.4vw, 44px)',
            lineHeight: 1, letterSpacing: '-0.015em',
            color: 'var(--ink)',
          }}>{t('How it works for homeowners', 'Cómo funciona para propietarios')}</h2>
        </div>
        <div style={{
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          rowGap: 80, columnGap: 56,
          maxWidth: 1100, margin: '0 auto',
        }}>
          {/* Subtle horizontal connector lines behind row 1 and row 2 */}
          <div aria-hidden style={{
            position: 'absolute', top: 48, left: '12%', right: '12%', height: 1,
            borderTop: '1px dashed rgba(38, 49, 102,0.18)',
            zIndex: 0, pointerEvents: 'none',
          }}/>
          <div aria-hidden style={{
            position: 'absolute', top: 'calc(50% + 24px)', left: '12%', right: '12%', height: 1,
            borderTop: '1px dashed rgba(38, 49, 102,0.18)',
            zIndex: 0, pointerEvents: 'none',
          }}/>
          {steps.map(s => (
            <div key={s.n} style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
              <StepIcon n={s.n}>{s.svg}</StepIcon>
              <h3 className="display" style={{
                margin: '0 0 12px',
                fontSize: 17, fontWeight: 700,
                letterSpacing: '-0.005em', color: 'var(--ink)',
                textTransform: 'uppercase',
              }}>{t(s.title)}</h3>
              <p className="mono" style={{
                margin: '0 auto', maxWidth: 280,
                fontSize: 12.5, lineHeight: 1.6,
                color: 'var(--charcoal)',
              }}>{t(s.body)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ───── Popular fence styles for homes (uses same 5 photo cards as homepage) ───── */

const HomeownerStylePicker = () => {
  const t = useT();
  return (
  <section style={{ background: 'var(--white)', padding: '112px 0' }}>
    <div className="container">
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: 48, alignItems: 'end', marginBottom: 40,
        paddingBottom: 24,
        borderBottom: '1px solid rgba(38, 49, 102,0.12)',
      }}>
        <div>
          <div className="mono" style={{
            display: 'inline-flex', alignItems: 'center', gap: 12,
            fontSize: 11, fontWeight: 700,
            letterSpacing: '0.22em',
            color: 'var(--tangerine)',
            textTransform: 'uppercase',
            marginBottom: 18,
          }}>
            <span>{t('02, Styles', '02, Estilos')}</span>
            <span style={{ width: 32, height: 1, background: 'var(--tangerine)' }}/>
          </div>
          <h2 className="display" style={{
            margin: 0, fontSize: 'clamp(28px, 3vw, 40px)',
            lineHeight: 1, letterSpacing: '-0.02em', fontWeight: 800,
          }}>
            {t('Find the style', 'Encuentra el estilo')}<br/>
            <span style={{ color: 'var(--tangerine)' }}>{t('that fits your home.', 'que va con tu hogar.')}</span>
          </h2>
        </div>
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 18,
        }}>
          <p style={{
            margin: 0, maxWidth: 380,
            fontSize: 14, lineHeight: 1.55,
            color: 'var(--charcoal)',
            textAlign: 'right',
          }}>
            {t(
              'Five residential systems we manufacture in-house, pick the one that matches your priorities for privacy, pool-code, curb appeal or pet containment.',
              'Cinco sistemas residenciales que fabricamos en planta, elige el que mejor encaja con tus prioridades: privacidad, código de piscinas, estética o contener mascotas.'
            )}
          </p>
          <a href="products.html" className="mono" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            fontSize: 11, fontWeight: 700,
            letterSpacing: '0.22em', textTransform: 'uppercase',
            color: 'var(--ink)',
            borderBottom: '1px solid var(--ink)',
            paddingBottom: 4,
          }}>
            {t('Full catalog', 'Catálogo completo')}
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Equal 5-column grid, same image-led cards as homepage */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: 14,
      }}>
        {FENCE_CATEGORIES.map((c, i) => (
          <FenceStyleCard key={c.id} item={c} index={i}/>
        ))}
      </div>
    </div>
  </section>
  );
};

/* ───── Two cards: Certified Installer Alliance + What You Get ───── */

const HomeownerInstallerSplit = () => {
  const t = useT();
  const HoverCard = ({ children, theme, ...rest }) => {
    const dark = theme === 'dark';
    return (
      <article
        {...rest}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = dark ? '0 18px 36px rgba(0,0,0,0.35)' : '12px 12px 0 var(--tangerine)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = dark ? '0 8px 18px rgba(0,0,0,0.2)' : '8px 8px 0 rgba(255,113,51,0.85)'; }}
        style={{
          background: dark ? 'var(--ink)' : 'var(--white)',
          color: dark ? 'var(--white)' : 'var(--ink)',
          border: dark ? 'none' : '1.5px solid var(--ink)',
          padding: '40px 44px 36px',
          display: 'flex', flexDirection: 'column',
          boxShadow: dark ? '0 8px 18px rgba(0,0,0,0.2)' : '8px 8px 0 rgba(255,113,51,0.85)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        }}
      >{children}</article>
    );
  };

  return (
    <section style={{ background: '#ffffff', padding: '120px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <h2 className="display" style={{
            margin: 0, fontSize: 'clamp(28px, 3.4vw, 44px)',
            lineHeight: 1, letterSpacing: '-0.015em', color: 'var(--ink)',
          }}>{t('WFS supplies. Certified installers build.', 'WFS suministra. Instaladores certificados construyen.')}</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, maxWidth: 1200, margin: '0 auto', alignItems: 'stretch' }}>
          {/* Left, Certified Installer Alliance (white) */}
          <HoverCard theme="light">
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              marginBottom: 28,
            }}>
              <span className="mono" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '6px 12px',
                background: 'var(--ink)', color: 'var(--white)',
                fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase',
              }}>{t('Alliance', 'Alianza')}</span>
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 3 L19 6 V12 Q19 17 12 21 Q5 17 5 12 V6 Z"/>
                <path d="M9 12 L11 14 L15 10" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="display" style={{
              margin: '0 0 18px',
              fontSize: 'clamp(22px, 2.2vw, 30px)',
              lineHeight: 1.05, letterSpacing: '-0.01em',
            }}>{t('Certified Installer Alliance', 'Alianza de Instaladores Certificados')}</h3>
            <p className="mono" style={{
              margin: '0 0 26px',
              fontSize: 13, lineHeight: 1.7, color: 'var(--charcoal)',
            }}>
              {t(
                'WFS does not offer DIY installation. We connect homeowners with certified installation partners who know our products, hardware, and finish standards.',
                'WFS no ofrece instalación DIY. Conectamos a propietarios con socios instaladores certificados que conocen nuestros productos, hardware y estándares de acabado.'
              )}
            </p>
            <ul style={{ listStyle: 'none', margin: '0 0 32px', padding: 0, display: 'grid', gap: 12 }}>
              {[
                { EN: 'WFS-aligned independent installers',     ES: 'Instaladores independientes alineados con WFS' },
                { EN: 'Product-aware installation practices',   ES: 'Prácticas de instalación conscientes del producto' },
                { EN: 'Clean handoff from quote to installation', ES: 'Transición limpia de cotización a instalación' },
              ].map((line, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 3 }}>
                    <path d="M3 8 L7 12 L13 4" stroke="var(--tangerine)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="mono" style={{ fontSize: 12.5, lineHeight: 1.55, color: 'var(--ink)' }}>{t(line)}</span>
                </li>
              ))}
            </ul>
            <a href="estimate.html" style={{
              display: 'block', textAlign: 'center', marginTop: 'auto',
              padding: '16px 28px',
              background: 'var(--ink)', color: 'var(--white)',
              fontFamily: 'var(--sans)', fontSize: 12.5, fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase',
            }}>{t('Find an Installer', 'Encontrar instalador')}</a>
          </HoverCard>

          {/* Right, What You Get (black) */}
          <HoverCard theme="dark">
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              marginBottom: 28,
            }}>
              <span className="mono" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '6px 12px',
                background: 'var(--tangerine)', color: 'var(--ink)',
                fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase',
              }}>{t('What you get', 'Qué obtienes')}</span>
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="9" strokeDasharray="2 1.5"/>
                <path d="M9 12 L11 14 L15 10" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="0"/>
              </svg>
            </div>
            <h3 className="display" style={{
              margin: '0 0 18px',
              fontSize: 'clamp(22px, 2.2vw, 30px)',
              lineHeight: 1.05, letterSpacing: '-0.01em',
            }}>{t('Spec-aligned outcomes', 'Resultados alineados a especificaciones')}</h3>
            <p className="mono" style={{
              margin: '0 0 26px',
              fontSize: 13, lineHeight: 1.7,
              color: 'rgba(255,255,255,0.7)',
            }}>
              {t(
                'Your installer stays independent, but the project stays aligned with WFS material specs, fabrication details, and finish expectations.',
                'Tu instalador es independiente, pero el proyecto se mantiene alineado con las especificaciones de material, detalles de fabricación y acabados de WFS.'
              )}
            </p>
            <ul style={{ listStyle: 'none', margin: '0 0 32px', padding: 0, display: 'grid', gap: 12 }}>
              {[
                { line: { EN: 'Local crews familiar with WFS systems', ES: 'Cuadrillas locales familiarizadas con los sistemas WFS' },
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="9" cy="9" r="3"/><circle cx="17" cy="10" r="2.5"/><path d="M3 19 Q9 14 15 19"/><path d="M14 18 Q17.5 15 21 18"/></svg> },
                { line: { EN: 'Installation practices that support warranty-friendly outcomes', ES: 'Prácticas de instalación que respaldan la cobertura de garantía' },
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3 L19 6 V12 Q19 17 12 21 Q5 17 5 12 V6 Z"/><path d="M9 12 L11 14 L15 10" strokeLinecap="round" strokeLinejoin="round"/></svg> },
                { line: { EN: 'Certified partners for residential and gate projects', ES: 'Socios certificados para proyectos residenciales y de portones' },
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="6" width="16" height="14" rx="1"/><line x1="4" y1="10" x2="20" y2="10"/><path d="M8 14 L11 17 L17 12" strokeLinecap="round" strokeLinejoin="round"/></svg> },
              ].map((b, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <span style={{ flexShrink: 0, marginTop: 1, color: 'var(--tangerine)' }}>{b.icon}</span>
                  <span className="mono" style={{ fontSize: 12.5, lineHeight: 1.55, color: 'var(--white)' }}>{t(b.line)}</span>
                </li>
              ))}
            </ul>
            <a href="estimate.html" style={{
              display: 'block', textAlign: 'center', marginTop: 'auto',
              padding: '16px 28px',
              background: 'var(--white)', color: 'var(--ink)',
              fontFamily: 'var(--sans)', fontSize: 12.5, fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase',
            }}>{t('Request Your Quote', 'Solicita tu cotización')}</a>
          </HoverCard>
        </div>
      </div>
    </section>
  );
};

/* ───── Homeowner testimonial / quote block ───── */

const HomeownerTestimonial = () => {
  const t = useT();
  return (
  <section style={{ background: 'var(--white)', padding: '120px 0' }}>
    <div className="container" style={{ maxWidth: 1200 }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1.4fr',
        gap: 56, alignItems: 'center',
      }}>
        {/* Left, meta column */}
        <div>
          <h2 className="display" style={{
            margin: '0 0 24px',
            fontSize: 'clamp(26px, 3vw, 36px)',
            lineHeight: 1.05, letterSpacing: '-0.015em', color: 'var(--ink)',
          }}>{t('From sketch to', 'Del boceto')}<br/>{t('finished fence.', 'a la cerca terminada.')}</h2>
          <p className="mono" style={{
            margin: 0, fontSize: 13, lineHeight: 1.7,
            color: 'var(--charcoal)', maxWidth: 320,
          }}>
            {t(
              'One project, three stages. The same WFS rep stayed on the order from first quote to final pickup.',
              'Un proyecto, tres etapas. El mismo representante WFS acompañó el pedido desde la primera cotización hasta la entrega final.'
            )}
          </p>
        </div>

        {/* Right, quote card */}
        <article style={{
          position: 'relative',
          border: '1.5px solid var(--ink)',
          background: 'var(--white)',
          padding: '44px 48px',
          boxShadow: '10px 10px 0 var(--tangerine)',
        }}>
          {/* Big open quote */}
          <span className="display" style={{
            position: 'absolute', top: -18, left: 28,
            background: 'var(--white)', padding: '0 10px',
            fontSize: 64, lineHeight: 1, color: 'var(--tangerine)',
          }}>“</span>
          <p className="mono" style={{
            margin: '0 0 28px',
            fontSize: 17, lineHeight: 1.55, color: 'var(--ink)',
            fontWeight: 500,
          }}>
            {t(
              'We sent a phone-photo sketch on a Monday, had a stamped quote Tuesday, and the panels were on the trailer by Friday. The installer they paired us with knew the exact post-spacing for our windload zone.',
              'Enviamos un boceto desde el celular el lunes, tuvimos cotización sellada el martes y los paneles estaban en el camión el viernes. El instalador que nos asignaron sabía el espaciado exacto de postes para nuestra zona de carga eólica.'
            )}
          </p>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 16,
            paddingTop: 24, borderTop: '1px dashed rgba(38, 49, 102,0.2)',
          }}>
            <div style={{
              width: 48, height: 48, borderRadius: '50%',
              background: 'var(--ink)', color: 'var(--white)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--display)', fontWeight: 700, fontSize: 16,
              letterSpacing: '0.02em',
            }}>MR</div>
            <div>
              <div className="display" style={{
                fontSize: 14, color: 'var(--ink)', letterSpacing: '-0.005em',
              }}>Marisol R.</div>
              <div className="mono" style={{
                marginTop: 4, fontSize: 10.5, fontWeight: 700,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'var(--charcoal)',
              }}>{t('Cape Coral · 186 LF vinyl + 2 gates', 'Cape Coral · 186 PL vinilo + 2 portones')}</div>
            </div>
            {/* Star rating */}
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 3 }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 16 16" fill="var(--tangerine)">
                  <path d="M8 1.5 L9.8 5.7 L14.5 6.1 L11 9.3 L12 14 L8 11.5 L4 14 L5 9.3 L1.5 6.1 L6.2 5.7 Z"/>
                </svg>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
  );
};

/* ───── Homeowner-specific FAQ ───── */

const HomeownerFAQ = () => {
  const t = useT();
  const items = [
    [{ EN: 'Do I need a permit for my fence?',
        ES: '¿Necesito permiso para mi cerca?' },
     { EN: 'Most Florida counties require a permit for fences over 4 ft, and pool barriers always require code-compliant permits. Your installer typically handles the filing, we provide the manufacturer specs and stamped wind-load data for AHJ submission.',
       ES: 'La mayoría de condados de Florida exigen permiso para cercas de más de 4 pies, y los cerramientos de piscina siempre requieren permisos según código. Tu instalador suele encargarse del trámite, nosotros proveemos las specs del fabricante y datos sellados de carga eólica para la presentación AHJ.' }],
    [{ EN: 'Does WFS handle HOA approvals?',
        ES: '¿WFS gestiona aprobaciones del HOA?' },
     { EN: "We don't submit on your behalf, but we provide every document your HOA needs: profile drawings, color samples, finish specs and a written quote in the format most boards expect. Your installer or a community manager submits.",
       ES: 'No presentamos por ti, pero proveemos cada documento que tu HOA necesita: dibujos de perfil, muestras de color, specs de acabado y una cotización por escrito en el formato que la mayoría de juntas espera. Tu instalador o un community manager presenta.' }],
    [{ EN: 'What is the lead time for orders?',
        ES: '¿Cuál es el tiempo de entrega de los pedidos?' },
     { EN: 'Stocked items ship in 1-2 days. Custom welded gates run 3-7 days. Color-matched or non-stock heights take 2-4 weeks. We confirm the exact lead time before you approve the quote.',
       ES: 'Los artículos en stock se envían en 1-2 días. Los portones soldados a medida toman 3-7 días. Colores específicos o alturas fuera de stock toman 2-4 semanas. Confirmamos el plazo exacto antes de que apruebes la cotización.' }],
    [{ EN: 'How do I connect with a certified installer?',
        ES: '¿Cómo me conecto con un instalador certificado?' },
     { EN: 'When you request a quote we route your project to the closest WFS-aligned installer in our certified alliance. They quote the labor side; the material side stays on your WFS line item.',
       ES: 'Cuando solicitas cotización, enrutamos tu proyecto al instalador alineado con WFS más cercano dentro de nuestra alianza certificada. Ellos cotizan la mano de obra; el material queda en tu línea WFS.' }],
  ];
  const [open, setOpen] = React.useState(1);
  return (
    <section style={{ background: '#ffffff', padding: '120px 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 64, alignItems: 'start' }}>
          {/* Left, title + contact sidebar */}
          <div style={{ position: 'sticky', top: 100 }}>
            <h2 className="display" style={{
              margin: '0 0 24px',
              fontSize: 'clamp(28px, 3vw, 40px)',
              lineHeight: 1, letterSpacing: '-0.015em', color: 'var(--ink)',
            }}>{t('Common homeowner', 'Preguntas comunes de')}<br/>{t('questions', 'propietarios')}</h2>
            <p className="mono" style={{
              margin: '0 0 32px',
              fontSize: 13, lineHeight: 1.7, color: 'var(--charcoal)',
              maxWidth: 320,
            }}>
              {t(
                "The four we hear most often. If yours isn't here, call the yard or send a sketch.",
                'Las cuatro que más recibimos. Si la tuya no está aquí, llama a la sucursal o envíanos un boceto.'
              )}
            </p>
            <div style={{
              border: '1.5px solid var(--ink)',
              background: 'var(--white)',
              padding: '24px 26px',
              maxWidth: 320,
            }}>
              <div className="mono" style={{
                fontSize: 10, fontWeight: 700, letterSpacing: '0.22em',
                color: 'var(--tangerine)', textTransform: 'uppercase',
                marginBottom: 14,
                display: 'flex', alignItems: 'center', gap: 8,
              }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff7133', boxShadow: '0 0 0 3px rgba(255, 113, 51,0.25)' }}/>
                {t('Still got questions?', '¿Aún tienes preguntas?')}
              </div>
              <a href="tel:2396895496" className="display" style={{
                display: 'block', marginBottom: 8,
                fontSize: 22, color: 'var(--ink)', lineHeight: 1.1,
              }}>(239) 689-5496</a>
              <a href="mailto:sales@westernfencesupply.com" className="mono" style={{
                display: 'block', wordBreak: 'break-all',
                fontSize: 12, color: 'var(--charcoal)',
              }}>sales@westernfencesupply.com</a>
              <div className="mono" style={{
                marginTop: 14, paddingTop: 14,
                borderTop: '1px solid rgba(38, 49, 102,0.1)',
                fontSize: 10.5, letterSpacing: '0.18em',
                textTransform: 'uppercase', color: 'var(--charcoal)', fontWeight: 700,
              }}>{t('Mon-Sat · 7am-4pm EST', 'Lun-Sáb · 7am-4pm EST')}</div>
            </div>
          </div>

          {/* Right, accordion */}
          <div style={{ display: 'grid', gap: 14 }}>
            {items.map(([q, a], i) => {
              const isOpen = open === i;
              return (
                <div key={i} style={{
                  border: '1.5px solid var(--ink)',
                  background: isOpen ? '#ffffff' : 'var(--white)',
                  transition: 'background 0.2s ease',
                }}>
                  <button onClick={() => setOpen(isOpen ? -1 : i)} style={{
                    width: '100%', display: 'flex',
                    alignItems: 'center', justifyContent: 'space-between',
                    padding: '22px 26px', textAlign: 'left', gap: 24,
                    background: 'transparent', border: 'none', cursor: 'pointer',
                  }}>
                    <span style={{ display: 'flex', alignItems: 'baseline', gap: 18 }}>
                      <span className="mono" style={{
                        fontSize: 10.5, fontWeight: 700, letterSpacing: '0.22em',
                        color: isOpen ? 'var(--tangerine)' : 'var(--charcoal)',
                      }}>{String(i + 1).padStart(2, '0')}</span>
                      <span className="mono" style={{
                        fontSize: 13.5, fontWeight: 700, color: 'var(--ink)',
                      }}>{t(q)}</span>
                    </span>
                    <span style={{
                      flexShrink: 0,
                      fontSize: 22, fontWeight: 300,
                      color: isOpen ? 'var(--tangerine)' : 'var(--ink)',
                      transform: isOpen ? 'rotate(45deg)' : 'none',
                      transition: 'transform 0.2s ease, color 0.2s ease',
                    }}>+</span>
                  </button>
                  <div style={{
                    maxHeight: isOpen ? 280 : 0, overflow: 'hidden',
                    transition: 'max-height 0.3s ease',
                  }}>
                    <p className="mono" style={{
                      margin: 0, padding: '0 26px 22px 64px',
                      fontSize: 12.5, lineHeight: 1.7, color: 'var(--charcoal)',
                    }}>{t(a)}</p>
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

/* ───── Closing CTA band ───── */

const HomeownerClosingCTA = () => {
  const t = useT();
  return (
  <section style={{
    background: 'var(--ink)', color: 'var(--white)',
    padding: '112px 0',
    position: 'relative', overflow: 'hidden',
  }}>
    {/* Background pattern */}
    <div aria-hidden style={{
      position: 'absolute', inset: 0, opacity: 0.08,
      backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)',
      backgroundSize: '24px 24px',
      pointerEvents: 'none',
    }}/>
    <div className="container" style={{
      position: 'relative',
      display: 'grid', gridTemplateColumns: '1.4fr 1fr',
      gap: 48, alignItems: 'center',
    }}>
      <div>
        <h2 className="display" style={{
          margin: 0, fontSize: 'clamp(32px, 4vw, 56px)',
          lineHeight: 1, letterSpacing: '-0.02em', color: 'var(--white)',
        }}>
          {t('Send a sketch.', 'Envía un boceto.')}<br/>
          <span style={{ color: 'var(--tangerine)' }}>{t('Quote in 24 hours.', 'Cotización en 24 horas.')}</span>
        </h2>
        <p className="mono" style={{
          margin: '22px 0 0', maxWidth: 520,
          fontSize: 13, lineHeight: 1.7,
          color: 'rgba(255,255,255,0.7)',
        }}>
          {t(
            'Linear feet, height, gate count and ZIP. One rep follows the order from quote to pickup or delivery, and routes the labor side to a certified installer near you.',
            'Pies lineales, altura, número de portones y código postal. Un representante sigue el pedido desde cotización hasta recogida o entrega, y enruta la mano de obra a un instalador certificado cercano.'
          )}
        </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'stretch' }}>
        <a href="estimate.html" style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          padding: '18px 28px',
          background: 'var(--tangerine)', color: 'var(--white)',
          fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 700,
          letterSpacing: '0.18em', textTransform: 'uppercase',
        }}>{t('Get a Quote', 'Cotizar')}</a>
        <a href="tel:2396895496" style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          padding: '18px 28px',
          background: 'transparent', color: 'var(--white)',
          border: '1.5px solid rgba(255,255,255,0.5)',
          fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 700,
          letterSpacing: '0.18em', textTransform: 'uppercase',
        }}>{t('Call (239) 689-5496', 'Llamar (239) 689-5496')}</a>
      </div>
    </div>
  </section>
  );
};

const HomeownerPage = () => (
  <>
    <SiteHeader />
    <HomeownerHero />
    <HomeownerTrustStrip />
    <HomeownerSteps />
    <FenceCategories />
    <HomeownerInstallerSplit />
    <HomeownerTestimonial />
    <HomeownerFAQ />
    <HomeownerClosingCTA />
    <Footer />
  </>
);

/* ───────────────────────────── CONTRACTOR ───────────────────────────── */

const ContractorHero = () => {
  const t = useT();
  return (
  <section style={{
    background: 'var(--ink)', color: 'var(--white)',
    minHeight: 'calc(100svh - 80px)',
    padding: '64px 0',
    display: 'flex', alignItems: 'center',
    position: 'relative', overflow: 'hidden',
  }}>
    {/* Background dotted grid */}
    <div aria-hidden style={{
      position: 'absolute', inset: 0, opacity: 0.10,
      backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)',
      backgroundSize: '24px 24px',
      pointerEvents: 'none',
    }}/>
    {/* Tangerine accent line */}
    <div aria-hidden style={{
      position: 'absolute', top: 0, left: 0, right: 0, height: 4,
      background: 'var(--tangerine)',
    }}/>
    <div className="container" style={{ position: 'relative', width: '100%' }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '1.2fr 1fr',
        gap: 56, alignItems: 'center',
      }}>
        {/* Left, copy block */}
        <div>
          <span className="mono" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '7px 14px',
            border: '1px solid rgba(255,255,255,0.4)',
            fontSize: 10, fontWeight: 700, letterSpacing: '0.22em',
            textTransform: 'uppercase', color: 'var(--white)',
            marginBottom: 24,
          }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--tangerine)' }}/>
            {t('Wholesale Partner Program · Florida', 'Programa de Socio Mayorista · Florida')}
          </span>
          <h1 style={{
            margin: '0 0 22px',
            fontFamily: 'var(--display)',
            fontVariationSettings: "'wdth' 100",
            fontWeight: 700,
            fontSize: 'clamp(32px, 3.6vw, 52px)',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            textTransform: 'none',
            color: 'var(--white)',
          }}>
            {t('Build with the', 'Construye con el')}{' '}
            <span style={{ color: 'var(--tangerine)' }}>{t('manufacturer.', 'fabricante.')}</span>
          </h1>
          <p className="mono" style={{
            margin: '0 0 26px',
            maxWidth: 520,
            fontSize: 14, lineHeight: 1.65,
            color: 'rgba(255,255,255,0.72)',
          }}>
            {t(
              "Partner with Southwest Florida's leading fence manufacturer. Wholesale pricing tiers, priority fabrication, and job-site delivery, without an out-of-state distributor in the middle.",
              'Asóciate con el fabricante líder de cercas del suroeste de Florida. Niveles de precio mayorista, fabricación prioritaria y entrega a obra, sin distribuidor de otro estado en medio.'
            )}
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 26 }}>
            <a href="estimate.html" style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              padding: '14px 28px',
              background: 'var(--tangerine)', color: 'var(--white)',
              fontFamily: 'var(--sans)', fontSize: 12, fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              boxShadow: '6px 6px 0 rgba(255,255,255,0.18)',
              transition: 'transform 0.18s ease, box-shadow 0.18s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-2px, -2px)'; e.currentTarget.style.boxShadow = '8px 8px 0 rgba(255,255,255,0.22)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '6px 6px 0 rgba(255,255,255,0.18)'; }}>
              {t('Get a Quick Quote', 'Cotización rápida')}
            </a>
            <a href="estimate.html" style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              padding: '14px 28px',
              background: 'transparent', color: 'var(--white)',
              border: '1.5px solid rgba(255,255,255,0.5)',
              fontFamily: 'var(--sans)', fontSize: 12, fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase',
            }}>{t('Verify Stock', 'Verificar stock')}</a>
          </div>
          {/* Trust micro-bullets */}
          <div className="mono" style={{
            display: 'flex', gap: 22, flexWrap: 'wrap',
            fontSize: 10.5, fontWeight: 700, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)',
          }}>
            {[
              { EN: 'No application fee',   ES: 'Sin costo de aplicación' },
              { EN: 'Volume tiers',          ES: 'Niveles por volumen' },
              { EN: 'Flexible payment terms',   ES: 'Términos de pago flexibles' },
            ].map((b, i) => (
              <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8 L7 12 L13 4" stroke="var(--tangerine)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {t(b)}
              </span>
            ))}
          </div>
        </div>

        {/* Right, contractor visual: yard photo + "what you get" card */}
        <div style={{ position: 'relative', aspectRatio: '5 / 6', maxHeight: 'calc(100svh - 160px)' }}>
          {/* Outer white frame */}
          <div style={{
            position: 'absolute', inset: 0,
            border: '1.5px solid rgba(255,255,255,0.25)',
            background: 'rgba(255,255,255,0.03)',
          }}/>
          {/* Tangerine offset plate */}
          <div aria-hidden style={{
            position: 'absolute', inset: '12px -12px -12px 12px',
            background: 'var(--tangerine)', zIndex: -1,
          }}/>

          {/* Photo: real warehouse / yard for pickup */}
          <div style={{
            position: 'absolute', top: 24, left: 24, right: 24,
            height: '52%',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.18)',
            background: '#263166',
          }}>
            <img
              src="assets/hero-warehouse.webp"
              alt={t('WFS yard and warehouse', 'Sucursal y almacén WFS')}
              style={{
                width: '100%', height: '100%',
                objectFit: 'cover', display: 'block',
              }}
            />
            {/* Top-left chip */}
            <span className="mono" style={{
              position: 'absolute', top: 14, left: 14,
              padding: '6px 12px',
              background: 'var(--tangerine)', color: 'var(--white)',
              fontSize: 9.5, fontWeight: 700, letterSpacing: '0.22em',
              textTransform: 'uppercase',
            }}>{t('Will-call ready', 'Listo para recoger')}</span>
            {/* Bottom-right location chip */}
            <span className="mono" style={{
              position: 'absolute', bottom: 14, right: 14,
              padding: '6px 12px',
              background: 'rgba(38, 49, 102,0.92)', color: 'var(--white)',
              fontSize: 9.5, fontWeight: 700, letterSpacing: '0.18em',
              textTransform: 'uppercase',
              display: 'inline-flex', alignItems: 'center', gap: 8,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#ff7133' }}/>
              {t('2 yards · FM + PC', '2 sucursales · FM + PC')}
            </span>
          </div>

          {/* Bottom card, what contractors get (mirrors homeowner pattern) */}
          <div style={{
            position: 'absolute', bottom: 24, left: 24, right: 24,
            border: '1px solid rgba(255,255,255,0.18)',
            background: 'var(--white)',
            padding: '20px 22px',
          }}>
            <div className="mono" style={{
              fontSize: 9.5, fontWeight: 700, letterSpacing: '0.22em',
              color: 'var(--tangerine)', textTransform: 'uppercase',
              marginBottom: 14,
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--tangerine)' }}/>
              {t('What contractors get', 'Qué obtienen los contratistas')}
            </div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 11 }}>
              {[
                { line: { EN: 'Wholesale pricing, manufacturer-direct',  ES: 'Precios mayoristas, directo del fabricante' },
                  icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9 L12 4 L18 9 L18 19 H6 Z"/><path d="M9 19 V13 H15 V19"/></svg>) },
                { line: { EN: 'Priority manufacturing on gates', ES: 'Fabricación prioritaria en portones' },
                  icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7 V12 L15 14"/></svg>) },
                { line: { EN: 'Free delivery to your job site',     ES: 'Entrega gratis a tu obra' },
                  icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="9" width="13" height="9" rx="1"/><path d="M15 12 H19 L22 15 V18 H15 Z"/><circle cx="7" cy="20" r="1.6"/><circle cx="18" cy="20" r="1.6"/></svg>) },
              ].map((b, i) => (
                <li key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                }}>
                  <span style={{
                    flexShrink: 0,
                    width: 28, height: 28,
                    border: '1.5px solid var(--ink)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--tangerine)',
                  }}>{b.icon}</span>
                  <span className="mono" style={{
                    fontSize: 12.5, fontWeight: 500, color: 'var(--ink)',
                    lineHeight: 1.3,
                  }}>{t(b.line)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

const ContractorStatsStrip = () => {
  const t = useT();
  return (
  <section style={{
    background: 'var(--white)',
    borderBottom: '1px solid rgba(38, 49, 102,0.1)',
    padding: '36px 0',
  }}>
    <div className="container">
      <div className="wfs-stat-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
        {[
          ['Tiered', { EN: 'Wholesale margin tiers',     ES: 'Niveles de margen mayorista' }],
          ['In-house', { EN: 'Gate fabrication',          ES: 'Fabricación de portones' }],
          [{ EN: 'Free', ES: 'Gratis' }, { EN: 'Job-site drops · in-county', ES: 'Entregas a obra · mismo condado' }],
          ['Free',     { EN: 'Application fee',             ES: 'Costo de aplicación' }],
        ].map(([n, l], i) => (
          <div key={i} className="wfs-stat-cell" style={{
            paddingLeft: i === 0 ? 0 : 24,
            borderLeft: i === 0 ? 'none' : '1px solid rgba(38, 49, 102,0.1)',
          }}>
            <div className="display" style={{
              fontSize: 'clamp(28px, 3.2vw, 42px)', lineHeight: 1,
              color: 'var(--ink)', letterSpacing: '-0.02em',
            }}>{typeof n === 'string' ? n : t(n)}</div>
            <div className="mono" style={{
              marginTop: 10, fontSize: 11, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: 'var(--charcoal)',
              fontWeight: 700,
            }}>{t(l)}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

const ContractorBenefits = () => {
  const t = useT();
  const benefits = [
    {
      title: { EN: 'Factory Direct Pricing', ES: 'Precios directos de fábrica' },
      body:  { EN: 'Maximize your margins with true wholesale pricing tiered to your volume, no out-of-state distributor markup.',
                ES: 'Maximiza tus márgenes con precios mayoristas reales escalonados por volumen, sin recargo de distribuidor de otro estado.' },
      svg: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21 V11 L9 14 V11 L15 14 V11 L21 14 V21 Z"/><line x1="3" y1="21" x2="21" y2="21"/></svg>),
    },
    {
      title: { EN: 'Priority Fabrication', ES: 'Fabricación prioritaria' },
      body:  { EN: 'Skip the line. Wholesale partners get priority manufacturing slots and turnaround on gates.',
                ES: 'Sáltate la fila. Los socios mayoristas obtienen turnos prioritarios de fabricación y entrega en portones.' },
      svg: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="9" width="13" height="9" rx="1"/><path d="M15 12 H19 L22 15 V18 H15 Z"/><circle cx="7" cy="20" r="1.6"/><circle cx="18" cy="20" r="1.6"/></svg>),
    },
    {
      title: { EN: 'Job Site Delivery', ES: 'Entrega a obra' },
      body:  { EN: 'Unbranded or branded drops directly to your job site. Curbside, will-call, or LTL, your choice per PO.',
                ES: 'Entregas con o sin tu marca, directo a tu obra. Banqueta, recoge en planta o LTL, tú decides en cada orden.' },
      svg: (<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21 Q4 14 4 9 A8 8 0 0 1 20 9 Q20 14 12 21 Z"/><circle cx="12" cy="9.5" r="2.6"/></svg>),
    },
    {
      title: { EN: 'Lead Routing', ES: 'Enrutamiento de leads' },
      body:  { EN: 'We refer homeowner projects directly to certified installer partners in the alliance, with the WFS material line locked in.',
                ES: 'Referimos proyectos de propietarios directamente a socios instaladores certificados de la alianza, con la línea de material WFS asegurada.' },
      svg: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="9" r="3"/><circle cx="17" cy="10" r="2.4"/><path d="M3 19 Q9 14 15 19"/><path d="M14 18 Q17.5 15 21 18"/></svg>),
    },
    {
      title: { EN: 'Payment Terms', ES: 'Términos de pago' },
      body:  { EN: 'Flexible payment terms available for qualified high-volume partners after a short trade-reference review.',
                ES: 'Términos de pago flexibles disponibles para socios de alto volumen calificados, tras una breve revisión de referencias comerciales.' },
      svg: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="6" width="18" height="13" rx="1.5"/><line x1="3" y1="10" x2="21" y2="10"/><rect x="6" y="14" width="4" height="2" rx="0.4" fill="currentColor"/></svg>),
    },
    {
      title: { EN: 'Dedicated Rep', ES: 'Representante dedicado' },
      body:  { EN: 'One named contractor account rep. Order by phone, email, or in-yard, same person from RFQ through PO close-out.',
                ES: 'Un representante asignado a tu cuenta. Ordena por teléfono, email o en la sucursal, la misma persona desde la RFQ hasta el cierre de la orden.' },
      svg: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="3.5"/><path d="M5 20 Q5 14 12 14 Q19 14 19 20"/></svg>),
    },
  ];
  return (
    <section style={{ background: 'var(--white)', padding: '120px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <h2 className="display" style={{
            margin: 0, fontSize: 'clamp(28px, 3.4vw, 44px)',
            lineHeight: 1, letterSpacing: '-0.015em', color: 'var(--ink)',
          }}>{t('Why partner with WFS', 'Por qué asociarte con WFS')}</h2>
        </div>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 18, maxWidth: 1200, margin: '0 auto',
        }}>
          {benefits.map((b, i) => (
            <article key={i} style={{
              position: 'relative',
              border: '1.5px solid var(--ink)',
              background: b.highlighted ? 'var(--ink)' : 'var(--white)',
              color: b.highlighted ? 'var(--white)' : 'var(--ink)',
              padding: '36px 32px',
              minHeight: 280,
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = b.highlighted ? '8px 8px 0 var(--tangerine)' : '8px 8px 0 var(--tangerine)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
              {b.highlighted && (
                <span className="mono" style={{
                  position: 'absolute', top: 16, right: 16,
                  padding: '4px 10px',
                  background: 'var(--tangerine)', color: 'var(--white)',
                  fontSize: 9, fontWeight: 700, letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                }}>{t('Top ask', 'Más solicitado')}</span>
              )}
              <div style={{ marginBottom: 30, color: b.highlighted ? 'var(--tangerine)' : 'var(--ink)' }}>{b.svg}</div>
              <h3 style={{
                margin: '0 0 14px',
                fontSize: 16, fontWeight: 700,
                letterSpacing: '-0.005em',
                color: b.highlighted ? 'var(--white)' : 'var(--ink)',
                textTransform: 'uppercase',
              }}>{t(b.title)}</h3>
              <p className="mono" style={{
                margin: 0, fontSize: 12.5, lineHeight: 1.65,
                color: b.highlighted ? 'rgba(255,255,255,0.72)' : 'var(--charcoal)',
              }}>{t(b.body)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ───── How partnership works, 4 steps ───── */

const ContractorHowItWorks = () => {
  const t = useT();
  const steps = [
    {
      n: '01', title: { EN: 'Apply', ES: 'Aplica' },
      body: { EN: 'Send your business info, trade refs, and an idea of monthly LF. No fee, no commitment.',
               ES: 'Envía la info de tu empresa, referencias comerciales y una idea de tu volumen mensual. Sin costo, sin compromiso.' },
      svg: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M7 3 H15 L19 7 V21 H7 Z"/><path d="M15 3 V7 H19"/><line x1="9" y1="12" x2="17" y2="12"/><line x1="9" y1="15" x2="17" y2="15"/></svg>),
    },
    {
      n: '02', title: { EN: 'Get Approved', ES: 'Aprobación' },
      body: { EN: 'We review and confirm your starter tier within 5 business days. Tax-exempt setup included.',
               ES: 'Revisamos y confirmamos tu nivel inicial en 5 días hábiles. Configuración exenta de impuestos incluida.' },
      svg: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 L19 6 V12 Q19 17 12 21 Q5 17 5 12 V6 Z"/><path d="M9 12 L11 14 L15 10"/></svg>),
    },
    {
      n: '03', title: { EN: 'Order & Build', ES: 'Ordena y construye' },
      body: { EN: 'Phone, email, or in-yard. Same rep on every PO. Job-site delivery or will-call from FM or PC.',
               ES: 'Por teléfono, email o en la sucursal. El mismo representante en cada orden. Entrega a obra o recoge en FM o PC.' },
      svg: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="9" width="13" height="9" rx="1"/><path d="M15 12 H19 L22 15 V18 H15 Z"/><circle cx="7" cy="20" r="1.6"/><circle cx="18" cy="20" r="1.6"/></svg>),
    },
    {
      n: '04', title: { EN: 'Tier Up', ES: 'Sube de nivel' },
      body: { EN: 'As your monthly LF grows, your margin tier and turnaround priority both step up automatically.',
               ES: 'A medida que tu volumen mensual crece, tu nivel de margen y prioridad de entrega suben automáticamente.' },
      svg: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20 L10 14 L14 18 L20 6"/><path d="M14 6 L20 6 L20 12"/></svg>),
    },
  ];
  return (
    <section style={{ background: '#ffffff', padding: '120px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <h2 className="display" style={{
            margin: 0, fontSize: 'clamp(28px, 3.4vw, 44px)',
            lineHeight: 1, letterSpacing: '-0.015em', color: 'var(--ink)',
          }}>{t('How partnership works', 'Cómo funciona la asociación')}</h2>
        </div>
        <div style={{
          position: 'relative',
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 24, maxWidth: 1200, margin: '0 auto',
        }}>
          {/* Connector */}
          <div aria-hidden style={{
            position: 'absolute', top: 36, left: '10%', right: '10%', height: 1,
            borderTop: '1px dashed rgba(38, 49, 102,0.2)',
            zIndex: 0, pointerEvents: 'none',
          }}/>
          {steps.map((s, i) => (
            <div key={s.n} style={{
              position: 'relative', zIndex: 1,
              background: 'var(--white)',
              border: '1.5px solid var(--ink)',
              padding: '24px 24px 28px',
            }}>
              {/* Top row, number + icon */}
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                marginBottom: 24,
              }}>
                <span className="mono" style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: 36, height: 36,
                  background: 'var(--ink)',
                  color: 'var(--white)',
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.05em',
                }}>{s.n}</span>
                <span style={{ color: 'var(--ink)' }}>{s.svg}</span>
              </div>
              <h3 className="display" style={{
                margin: '0 0 10px', fontSize: 18,
                letterSpacing: '-0.005em', color: 'var(--ink)',
              }}>{t(s.title)}</h3>
              <p className="mono" style={{
                margin: 0, fontSize: 12.5, lineHeight: 1.6,
                color: 'var(--charcoal)',
              }}>{t(s.body)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ───── What's in the wholesale kit, resources ───── */

const ContractorWholesaleKit = () => {
  const t = useT();
  const items = [
    {
      title: { EN: 'Tiered Price List', ES: 'Lista de precios por niveles' },
      body:  { EN: 'Bronze · Pro · Elite tier pricing for every active SKU, updated quarterly with FY rolls.',
                ES: 'Precios Bronze · Pro · Elite para cada SKU activo, actualizados cada trimestre con cambio de año fiscal.' },
      svg: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M7 3 H15 L19 7 V21 H7 Z"/><path d="M15 3 V7 H19"/><line x1="9" y1="12" x2="17" y2="12"/><line x1="9" y1="15" x2="17" y2="15"/><line x1="9" y1="18" x2="14" y2="18"/></svg>),
    },
    {
      title: { EN: 'Spec Library', ES: 'Biblioteca de specs' },
      body:  { EN: 'PDF profile drawings, wind-load data, color samples, formatted for AHJ and HOA submission.',
                ES: 'Dibujos de perfil en PDF, datos de carga eólica, muestras de color, formateados para presentación AHJ y HOA.' },
      svg: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="16" height="18" rx="1"/><line x1="8" y1="8" x2="16" y2="8"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="8" y1="16" x2="13" y2="16"/></svg>),
    },
    {
      title: { EN: 'Co-branded Marketing', ES: 'Marketing co-marcado' },
      body:  { EN: 'White-label estimate templates and yard-sign artwork with your logo set against WFS material specs.',
                ES: 'Plantillas de cotización white-label y arte para letreros de obra con tu logo sobre las specs de material WFS.' },
      svg: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="6" width="14" height="12" rx="1"/><path d="M17 10 L21 7 V17 L17 14 Z"/></svg>),
    },
    {
      title: { EN: 'Job-Site Drops', ES: 'Entregas en obra' },
      body:  { EN: 'Branded or unbranded delivery. Real-time slot booking through your dedicated rep.',
                ES: 'Entrega con o sin marca. Reserva de turno en tiempo real a través de tu representante dedicado.' },
      svg: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="9" width="13" height="9" rx="1"/><path d="M15 12 H19 L22 15 V18 H15 Z"/><circle cx="7" cy="20" r="1.6"/><circle cx="18" cy="20" r="1.6"/></svg>),
    },
    {
      title: { EN: 'Lead Pipeline', ES: 'Pipeline de leads' },
      body:  { EN: 'Homeowner inquiries in your county routed straight to your inbox with the spec sheet attached.',
                ES: 'Consultas de propietarios en tu condado enviadas directamente a tu inbox con la hoja de specs adjunta.' },
      svg: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4 H21 V20 H3 Z"/><path d="M3 4 L12 13 L21 4"/></svg>),
    },
    {
      title: { EN: 'Training & Tech', ES: 'Capacitación y soporte técnico' },
      body:  { EN: 'In-yard walkthroughs on new product lines, plus install-tech support for your crews when a job throws a curveball.',
                ES: 'Recorridos en sucursal de nuevas líneas de producto, más soporte técnico de instalación para tu cuadrilla cuando un trabajo se complica.' },
      svg: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4 L21 9 L12 14 L3 9 Z"/><path d="M6 11 V16 Q12 19 18 16 V11"/></svg>),
    },
  ];
  return (
    <section style={{ background: 'var(--white)', padding: '120px 0' }}>
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 48, alignItems: 'end', marginBottom: 48,
        }}>
          <div>
            <h2 className="display" style={{
              margin: 0, fontSize: 'clamp(28px, 3.4vw, 44px)',
              lineHeight: 1, letterSpacing: '-0.015em', color: 'var(--ink)',
            }}>{t('The wholesale kit', 'El kit mayorista')}</h2>
          </div>
          <p className="mono" style={{
            margin: 0, maxWidth: 460, justifySelf: 'end', textAlign: 'right',
            fontSize: 13, lineHeight: 1.7, color: 'var(--charcoal)',
          }}>
            {t(
              'Six things every active partner walks away with, not someday, on day one.',
              'Seis cosas que todo socio activo se lleva, no algún día, el primer día.'
            )}
          </p>
        </div>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 0,
          border: '1.5px solid var(--ink)',
        }}>
          {items.map((it, i) => (
            <div key={i} style={{
              padding: '32px 30px 34px',
              borderRight: (i % 3 !== 2) ? '1.5px solid var(--ink)' : 'none',
              borderBottom: (i < 3) ? '1.5px solid var(--ink)' : 'none',
              background: 'var(--white)',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#ffffff'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--white)'; }}>
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                marginBottom: 22,
              }}>
                <span className="mono" style={{
                  fontSize: 10, fontWeight: 700, letterSpacing: '0.22em',
                  color: 'var(--tangerine)', textTransform: 'uppercase',
                }}>{String(i + 1).padStart(2, '0')}</span>
                <span style={{ color: 'var(--ink)' }}>{it.svg}</span>
              </div>
              <h3 className="display" style={{
                margin: '0 0 12px', fontSize: 17,
                letterSpacing: '-0.005em', color: 'var(--ink)',
              }}>{t(it.title)}</h3>
              <p className="mono" style={{
                margin: 0, fontSize: 12.5, lineHeight: 1.65,
                color: 'var(--charcoal)',
              }}>{t(it.body)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ───── Contractor testimonial ───── */

const ContractorTestimonial = () => {
  const t = useT();
  return (
  <section style={{ background: '#ffffff', padding: '120px 0' }}>
    <div className="container" style={{ maxWidth: 1200 }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1.4fr',
        gap: 56, alignItems: 'center',
      }}>
        {/* Left, meta */}
        <div>
          <h2 className="display" style={{
            margin: '0 0 24px',
            fontSize: 'clamp(26px, 3vw, 36px)',
            lineHeight: 1.05, letterSpacing: '-0.015em', color: 'var(--ink)',
          }}>{t('What contractors', 'Lo que los contratistas')}<br/>{t('tell us.', 'nos cuentan.')}</h2>
          <p className="mono" style={{
            margin: 0, fontSize: 13, lineHeight: 1.7,
            color: 'var(--charcoal)', maxWidth: 320,
          }}>
            {t(
              'Two yards, one rep per account, and material that ships on the date the rep promised.',
              'Dos sucursales, un representante por cuenta, y material que se envía en la fecha que el representante prometió.'
            )}
          </p>
        </div>

        {/* Right, quote card on dark */}
        <article style={{
          position: 'relative',
          background: 'var(--ink)', color: 'var(--white)',
          padding: '44px 48px',
          boxShadow: '10px 10px 0 var(--tangerine)',
        }}>
          <span className="display" style={{
            position: 'absolute', top: -22, left: 28,
            background: 'var(--ink)', padding: '0 10px',
            fontSize: 64, lineHeight: 1, color: 'var(--tangerine)',
          }}>“</span>
          <p className="mono" style={{
            margin: '0 0 28px',
            fontSize: 17, lineHeight: 1.55, color: 'var(--white)',
            fontWeight: 500,
          }}>
            {t(
              "We were buying out of Tampa and eating two-week lead times. Switched to WFS direct and we're picking up gates on Wednesday that we quoted Monday. The margin step-up paid for the truck I bought last spring.",
              'Estábamos comprando desde Tampa y aguantando plazos de dos semanas. Nos cambiamos a WFS directo y ahora recogemos portones el miércoles que cotizamos el lunes. El incremento de margen pagó la camioneta que compré la primavera pasada.'
            )}
          </p>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 16,
            paddingTop: 24, borderTop: '1px dashed rgba(255,255,255,0.2)',
          }}>
            <div style={{
              width: 48, height: 48, borderRadius: '50%',
              background: 'var(--tangerine)', color: 'var(--white)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--display)', fontWeight: 700, fontSize: 16,
              letterSpacing: '0.02em',
            }}>JT</div>
            <div>
              <div className="display" style={{
                fontSize: 14, color: 'var(--white)', letterSpacing: '-0.005em',
              }}>Jorge T., Lead Fence LLC</div>
              <div className="mono" style={{
                marginTop: 4, fontSize: 10.5, fontWeight: 700,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.6)',
              }}>{t("Fort Myers · Pro tier · since '23", "Fort Myers · Nivel Pro · desde '23")}</div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
  );
};

/* ───── Contractor closing CTA, dark band with form preview ───── */

const ContractorClosingCTA = () => {
  const t = useT();
  return (
  <section style={{
    background: 'var(--ink)', color: 'var(--white)',
    padding: '120px 0',
    position: 'relative', overflow: 'hidden',
  }}>
    {/* Background pattern */}
    <div aria-hidden style={{
      position: 'absolute', inset: 0, opacity: 0.08,
      backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)',
      backgroundSize: '24px 24px',
      pointerEvents: 'none',
    }}/>
    {/* Tangerine accent */}
    <div aria-hidden style={{
      position: 'absolute', bottom: 0, left: 0, right: 0, height: 4,
      background: 'var(--tangerine)',
    }}/>
    <div className="container" style={{
      position: 'relative',
      display: 'grid', gridTemplateColumns: '1.4fr 1fr',
      gap: 56, alignItems: 'center',
    }}>
      <div>
        <h2 className="display" style={{
          margin: 0, fontSize: 'clamp(32px, 4.2vw, 60px)',
          lineHeight: 0.98, letterSpacing: '-0.02em', color: 'var(--white)',
        }}>
          {t('Apply once.', 'Aplica una vez.')}<br/>
          <span style={{ color: 'var(--tangerine)' }}>{t('Quote forever.', 'Cotiza siempre.')}</span>
        </h2>
        <p className="mono" style={{
          margin: '24px 0 32px', maxWidth: 520,
          fontSize: 13, lineHeight: 1.7,
          color: 'rgba(255,255,255,0.7)',
        }}>
          {t(
            'Submit the partner application once. We approve, lock in your starter tier, and route every future RFQ through your dedicated rep. No annual fee, no minimums on individual orders.',
            'Envía la aplicación de socio una sola vez. Aprobamos, fijamos tu nivel inicial y enrutamos cada RFQ futura a través de tu representante dedicado. Sin cuota anual, sin mínimos por orden.'
          )}
        </p>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <a href="estimate.html" style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            padding: '18px 32px',
            background: 'var(--tangerine)', color: 'var(--white)',
            fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 700,
            letterSpacing: '0.18em', textTransform: 'uppercase',
          }}>{t('Start Application', 'Iniciar aplicación')}</a>
          <a href="tel:2396895496" style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            padding: '18px 32px',
            background: 'transparent', color: 'var(--white)',
            border: '1.5px solid rgba(255,255,255,0.5)',
            fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 700,
            letterSpacing: '0.18em', textTransform: 'uppercase',
          }}>(239) 689-5496</a>
        </div>
      </div>

      {/* Right, application checklist */}
      <div style={{
        border: '1.5px solid rgba(255,255,255,0.25)',
        background: 'rgba(255,255,255,0.04)',
        padding: '32px 32px 28px',
      }}>
        <div className="mono" style={{
          fontSize: 10, fontWeight: 700, letterSpacing: '0.22em',
          color: 'var(--tangerine)', textTransform: 'uppercase',
          marginBottom: 18,
          display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--tangerine)' }}/>
          {t('Application checklist', 'Checklist de aplicación')}
        </div>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 14 }}>
          {[
            { EN: 'Business license + EIN',         ES: 'Licencia de negocio + EIN' },
            { EN: 'Florida resale certificate',     ES: 'Certificado de reventa de Florida' },
            { EN: '2 trade references',              ES: '2 referencias comerciales' },
            { EN: 'Est. monthly linear-feet',        ES: 'Estimado mensual de pies lineales' },
          ].map((line, i) => (
            <li key={i} style={{
              display: 'flex', alignItems: 'center', gap: 14,
              paddingBottom: i < 3 ? 14 : 0,
              borderBottom: i < 3 ? '1px dashed rgba(255,255,255,0.18)' : 'none',
            }}>
              <span style={{
                width: 24, height: 24, flexShrink: 0,
                border: '1.5px solid var(--tangerine)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8 L7 12 L13 4" stroke="var(--tangerine)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="mono" style={{
                fontSize: 12.5, fontWeight: 500,
                color: 'var(--white)',
              }}>{t(line)}</span>
            </li>
          ))}
        </ul>
        <div className="mono" style={{
          marginTop: 22, paddingTop: 16,
          borderTop: '1px solid rgba(255,255,255,0.18)',
          fontSize: 10.5, fontWeight: 700, letterSpacing: '0.18em',
          textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <span>{t('Approval window', 'Tiempo de aprobación')}</span>
          <span style={{ color: 'var(--white)' }}>{t('≤ 5 business days', '≤ 5 días hábiles')}</span>
        </div>
      </div>
    </div>
  </section>
  );
};

const ContractorPage = () => (
  <>
    <SiteHeader />
    <ContractorHero />
    <ContractorStatsStrip />
    <ContractorBenefits />
    <ContractorHowItWorks />
    <ContractorWholesaleKit />
    <ContractorTestimonial />
    <ContractorClosingCTA />
    <Footer />
  </>
);

Object.assign(window, {
  HomeownerHero, HomeownerTrustStrip, HomeownerSteps, HomeownerStylePicker,
  HomeownerInstallerSplit, HomeownerTestimonial, HomeownerFAQ, HomeownerClosingCTA, HomeownerPage,
  ContractorHero, ContractorStatsStrip, ContractorBenefits, ContractorHowItWorks,
  ContractorWholesaleKit, ContractorTestimonial, ContractorClosingCTA, ContractorPage,
});
