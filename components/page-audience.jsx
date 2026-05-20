/* Homeowner + Contractor landing pages — entered from the homepage hero buttons */

/* ───────────────────────────── HOMEOWNER ───────────────────────────── */

const HomeownerHero = () => (
  <section style={{
    background: 'var(--white)', padding: '96px 0 56px',
    position: 'relative', overflow: 'hidden',
  }}>
    {/* Faint dotted grid texture behind */}
    <div aria-hidden style={{
      position: 'absolute', inset: 0,
      backgroundImage: 'radial-gradient(rgba(0,16,17,0.06) 1px, transparent 1px)',
      backgroundSize: '24px 24px',
      maskImage: 'radial-gradient(ellipse at center, #000 0%, transparent 70%)',
      WebkitMaskImage: 'radial-gradient(ellipse at center, #000 0%, transparent 70%)',
      pointerEvents: 'none',
    }}/>
    <div className="container" style={{ position: 'relative', maxWidth: 1120, textAlign: 'center' }}>
      <span className="mono" style={{
        display: 'inline-flex', alignItems: 'center', gap: 10,
        padding: '8px 16px', marginBottom: 30,
        border: '1px solid var(--ink)',
        background: 'var(--white)',
        fontSize: 10.5, fontWeight: 700, letterSpacing: '0.22em',
        textTransform: 'uppercase', color: 'var(--ink)',
      }}>
        <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--tangerine)' }}/>
        Homeowner · Built for residential
      </span>
      <h1 className="display" style={{
        margin: '0 auto 30px',
        fontSize: 'clamp(48px, 7.2vw, 104px)',
        lineHeight: 0.98, letterSpacing: '-0.025em',
        color: 'var(--ink)',
        maxWidth: 1000,
      }}>
        Fence Solutions<br/>for Homeowners
      </h1>
      <p className="mono" style={{
        margin: '0 auto 36px',
        maxWidth: 720,
        fontSize: 15, lineHeight: 1.7,
        color: 'var(--charcoal)',
      }}>
        Enhance your property's value, privacy, and security with our premium manufacturing-direct fencing. We help you plan the project and connect you with certified installers for the finished build.
      </p>
      <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 36 }}>
        <a href="estimate.html" style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          padding: '18px 38px',
          background: 'var(--ink)', color: 'var(--white)',
          fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 700,
          letterSpacing: '0.18em', textTransform: 'uppercase',
          boxShadow: '6px 6px 0 var(--tangerine)',
          transition: 'transform 0.18s ease, box-shadow 0.18s ease',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-2px, -2px)'; e.currentTarget.style.boxShadow = '8px 8px 0 var(--tangerine)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '6px 6px 0 var(--tangerine)'; }}>
          Get Started
        </a>
        <a href="projects.html" style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          padding: '18px 38px',
          background: 'var(--white)', color: 'var(--ink)',
          border: '1.5px solid var(--ink)',
          fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 700,
          letterSpacing: '0.18em', textTransform: 'uppercase',
        }}>
          View Gallery
        </a>
      </div>
      {/* Trust micro-bullets */}
      <div className="mono" style={{
        display: 'inline-flex', gap: 28, flexWrap: 'wrap', justifyContent: 'center',
        fontSize: 11, fontWeight: 700, letterSpacing: '0.16em',
        textTransform: 'uppercase', color: 'var(--charcoal)',
      }}>
        {['No minimums', 'Free takeoff', 'Same supplier-direct floor'].map((t, i) => (
          <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M3 8 L7 12 L13 4" stroke="var(--tangerine)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {t}
          </span>
        ))}
      </div>
    </div>
  </section>
);

/* ───── Trust strip — 4 stats anchoring the hero ───── */

const HomeownerTrustStrip = () => (
  <section style={{
    background: 'var(--white)',
    borderTop: '1px solid rgba(0,16,17,0.1)',
    borderBottom: '1px solid rgba(0,16,17,0.1)',
    padding: '32px 0',
  }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
        {[
          ['22+',  'Years family-owned'],
          ['2',    'Yards · FM + PC'],
          ['480+', 'Active SKUs'],
          ['24h',  'Quote turnaround'],
        ].map(([n, l], i) => (
          <div key={l} style={{
            paddingLeft: i === 0 ? 0 : 24,
            borderLeft: i === 0 ? 'none' : '1px solid rgba(0,16,17,0.1)',
          }}>
            <div className="display" style={{
              fontSize: 'clamp(32px, 3.6vw, 48px)', lineHeight: 1,
              color: 'var(--ink)', letterSpacing: '-0.02em',
            }}>{n}</div>
            <div className="mono" style={{
              marginTop: 10, fontSize: 11, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: 'var(--charcoal)',
              fontWeight: 700,
            }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ───── How it works — 6 steps with circle icons ───── */

const HomeownerSteps = () => {
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
        background: '#f5f5f5',
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
    { n: '1', t: 'Draw Your Fence', body: 'Sketch your layout to visualize the project.',
      svg: (<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19 L7 21 L9 16 L18 7 L21 10 Z"/><path d="M16 9 L19 12"/></svg>) },
    { n: '2', t: 'Get an Estimate', body: 'Use our tools to get a rough idea of the cost.',
      svg: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="5" y="3" width="14" height="18" rx="1"/><rect x="7.5" y="5.5" width="9" height="4"/><circle cx="9" cy="13" r="0.6" fill="currentColor"/><circle cx="12" cy="13" r="0.6" fill="currentColor"/><circle cx="15" cy="13" r="0.6" fill="currentColor"/><circle cx="9" cy="16" r="0.6" fill="currentColor"/><circle cx="12" cy="16" r="0.6" fill="currentColor"/><circle cx="15" cy="16" r="0.6" fill="currentColor"/></svg>) },
    { n: '3', t: 'Book a Visit', body: 'Schedule a time for us to verify measurements.',
      svg: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="5" width="16" height="15" rx="1"/><path d="M4 9 H20"/><line x1="8" y1="3" x2="8" y2="6"/><line x1="16" y1="3" x2="16" y2="6"/></svg>) },
    { n: '4', t: 'Get a Quote', body: 'Receive a final, detailed quote for your project.',
      svg: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 3 H15 L19 7 V21 H7 Z"/><path d="M15 3 V7 H19"/><line x1="9" y1="12" x2="17" y2="12"/><line x1="9" y1="15" x2="17" y2="15"/><line x1="9" y1="18" x2="13" y2="18"/></svg>) },
    { n: '5', t: 'Fabrication', body: 'We manufacture your fence locally to your exact specifications.',
      svg: (<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 21 V11 L9 14 V11 L15 14 V11 L21 14 V21 Z"/><line x1="3" y1="21" x2="21" y2="21"/></svg>) },
    { n: '6', t: 'Certified Installation', body: 'Choose from our WFS-certified installer alliance for professional installation.',
      svg: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3 L19 6 V12 Q19 17 12 21 Q5 17 5 12 V6 Z"/><path d="M9 12 L11 14 L15 10" strokeLinecap="round" strokeLinejoin="round"/></svg>) },
  ];
  return (
    <section style={{ background: '#fafafa', padding: '96px 0 112px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="mono" style={{
            display: 'inline-block',
            marginBottom: 16,
            fontSize: 11, fontWeight: 700, letterSpacing: '0.24em',
            color: 'var(--tangerine)', textTransform: 'uppercase',
          }}>01 — Process</span>
          <h2 className="display" style={{
            margin: 0,
            fontSize: 'clamp(28px, 3.4vw, 44px)',
            lineHeight: 1, letterSpacing: '-0.015em',
            color: 'var(--ink)',
          }}>How it works for homeowners</h2>
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
            borderTop: '1px dashed rgba(0,16,17,0.18)',
            zIndex: 0, pointerEvents: 'none',
          }}/>
          <div aria-hidden style={{
            position: 'absolute', top: 'calc(50% + 24px)', left: '12%', right: '12%', height: 1,
            borderTop: '1px dashed rgba(0,16,17,0.18)',
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
              }}>{s.t}</h3>
              <p className="mono" style={{
                margin: '0 auto', maxWidth: 280,
                fontSize: 12.5, lineHeight: 1.6,
                color: 'var(--charcoal)',
              }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ───── Two cards: Certified Installer Alliance + What You Get ───── */

const HomeownerInstallerSplit = () => {
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
    <section style={{ background: 'var(--white)', padding: '96px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="mono" style={{
            display: 'inline-block', marginBottom: 16,
            fontSize: 11, fontWeight: 700, letterSpacing: '0.24em',
            color: 'var(--tangerine)', textTransform: 'uppercase',
          }}>02 — Installation</span>
          <h2 className="display" style={{
            margin: 0, fontSize: 'clamp(28px, 3.4vw, 44px)',
            lineHeight: 1, letterSpacing: '-0.015em', color: 'var(--ink)',
          }}>WFS supplies. Certified installers build.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, maxWidth: 1200, margin: '0 auto', alignItems: 'stretch' }}>
          {/* Left — Certified Installer Alliance (white) */}
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
              }}>Alliance</span>
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 3 L19 6 V12 Q19 17 12 21 Q5 17 5 12 V6 Z"/>
                <path d="M9 12 L11 14 L15 10" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="display" style={{
              margin: '0 0 18px',
              fontSize: 'clamp(22px, 2.2vw, 30px)',
              lineHeight: 1.05, letterSpacing: '-0.01em',
            }}>Certified Installer Alliance</h3>
            <p className="mono" style={{
              margin: '0 0 26px',
              fontSize: 13, lineHeight: 1.7, color: 'var(--charcoal)',
            }}>
              WFS does not offer DIY installation. We connect homeowners with certified installation partners who know our products, hardware, and finish standards.
            </p>
            <ul style={{ listStyle: 'none', margin: '0 0 32px', padding: 0, display: 'grid', gap: 12 }}>
              {[
                'WFS-aligned independent installers',
                'Product-aware installation practices',
                'Clean handoff from quote to installation',
              ].map(line => (
                <li key={line} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 3 }}>
                    <path d="M3 8 L7 12 L13 4" stroke="var(--tangerine)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="mono" style={{ fontSize: 12.5, lineHeight: 1.55, color: 'var(--ink)' }}>{line}</span>
                </li>
              ))}
            </ul>
            <a href="estimate.html" style={{
              display: 'block', textAlign: 'center', marginTop: 'auto',
              padding: '16px 28px',
              background: 'var(--ink)', color: 'var(--white)',
              fontFamily: 'var(--sans)', fontSize: 12.5, fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase',
            }}>Find an Installer</a>
          </HoverCard>

          {/* Right — What You Get (black) */}
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
              }}>What you get</span>
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="9" strokeDasharray="2 1.5"/>
                <path d="M9 12 L11 14 L15 10" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="0"/>
              </svg>
            </div>
            <h3 className="display" style={{
              margin: '0 0 18px',
              fontSize: 'clamp(22px, 2.2vw, 30px)',
              lineHeight: 1.05, letterSpacing: '-0.01em',
            }}>Spec-aligned outcomes</h3>
            <p className="mono" style={{
              margin: '0 0 26px',
              fontSize: 13, lineHeight: 1.7,
              color: 'rgba(255,255,255,0.7)',
            }}>
              Your installer stays independent, but the project stays aligned with WFS material specs, fabrication details, and finish expectations.
            </p>
            <ul style={{ listStyle: 'none', margin: '0 0 32px', padding: 0, display: 'grid', gap: 12 }}>
              {[
                ['Local crews familiar with WFS systems',
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="9" cy="9" r="3"/><circle cx="17" cy="10" r="2.5"/><path d="M3 19 Q9 14 15 19"/><path d="M14 18 Q17.5 15 21 18"/></svg>],
                ['Installation practices that support warranty-friendly outcomes',
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3 L19 6 V12 Q19 17 12 21 Q5 17 5 12 V6 Z"/><path d="M9 12 L11 14 L15 10" strokeLinecap="round" strokeLinejoin="round"/></svg>],
                ['Certified partners for residential and gate projects',
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="6" width="16" height="14" rx="1"/><line x1="4" y1="10" x2="20" y2="10"/><path d="M8 14 L11 17 L17 12" strokeLinecap="round" strokeLinejoin="round"/></svg>],
              ].map(([line, icon], i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <span style={{ flexShrink: 0, marginTop: 1, color: 'var(--tangerine)' }}>{icon}</span>
                  <span className="mono" style={{ fontSize: 12.5, lineHeight: 1.55, color: 'var(--white)' }}>{line}</span>
                </li>
              ))}
            </ul>
            <a href="estimate.html" style={{
              display: 'block', textAlign: 'center', marginTop: 'auto',
              padding: '16px 28px',
              background: 'var(--white)', color: 'var(--ink)',
              fontFamily: 'var(--sans)', fontSize: 12.5, fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase',
            }}>Request Your Quote</a>
          </HoverCard>
        </div>
      </div>
    </section>
  );
};

/* ───── Homeowner-specific FAQ ───── */

const HomeownerFAQ = () => {
  const items = [
    ['Do I need a permit for my fence?',
      'Most Florida counties require a permit for fences over 4 ft, and pool barriers always require code-compliant permits. Your installer typically handles the filing — we provide the manufacturer specs and stamped wind-load data for AHJ submission.'],
    ['Does WFS handle HOA approvals?',
      'We don\'t submit on your behalf, but we provide every document your HOA needs: profile drawings, color samples, finish specs and a written quote in the format most boards expect. Your installer or a community manager submits.'],
    ['What is the lead time for orders?',
      'Stocked items ship in 1–2 days. Custom welded gates run 3–7 days. Color-matched or non-stock heights take 2–4 weeks. We confirm the exact lead time before you approve the quote.'],
    ['How do I connect with a certified installer?',
      'When you request a quote we route your project to the closest WFS-aligned installer in our certified alliance. They quote the labor side; the material side stays on your WFS line item.'],
  ];
  const [open, setOpen] = React.useState(1);
  return (
    <section style={{ background: '#fafafa', padding: '96px 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 64, alignItems: 'start' }}>
          {/* Left — title + contact sidebar */}
          <div style={{ position: 'sticky', top: 100 }}>
            <span className="mono" style={{
              display: 'inline-block', marginBottom: 18,
              fontSize: 11, fontWeight: 700, letterSpacing: '0.24em',
              color: 'var(--tangerine)', textTransform: 'uppercase',
            }}>03 — FAQ</span>
            <h2 className="display" style={{
              margin: '0 0 24px',
              fontSize: 'clamp(28px, 3vw, 40px)',
              lineHeight: 1, letterSpacing: '-0.015em', color: 'var(--ink)',
            }}>Common homeowner<br/>questions</h2>
            <p className="mono" style={{
              margin: '0 0 32px',
              fontSize: 13, lineHeight: 1.7, color: 'var(--charcoal)',
              maxWidth: 320,
            }}>
              The four we hear most often. If yours isn't here, call the yard or send a sketch.
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
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 0 3px rgba(34,197,94,0.25)' }}/>
                Still got questions?
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
                borderTop: '1px solid rgba(0,16,17,0.1)',
                fontSize: 10.5, letterSpacing: '0.18em',
                textTransform: 'uppercase', color: 'var(--charcoal)', fontWeight: 700,
              }}>Mon–Fri · 7am–4pm EST</div>
            </div>
          </div>

          {/* Right — accordion */}
          <div style={{ display: 'grid', gap: 14 }}>
            {items.map(([q, a], i) => {
              const isOpen = open === i;
              return (
                <div key={i} style={{
                  border: '1.5px solid var(--ink)',
                  background: isOpen ? '#f5f8fc' : 'var(--white)',
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
                      }}>{q}</span>
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
                    }}>{a}</p>
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

const HomeownerClosingCTA = () => (
  <section style={{
    background: 'var(--ink)', color: 'var(--white)',
    padding: '88px 0',
  }}>
    <div className="container" style={{
      display: 'grid', gridTemplateColumns: '1.4fr 1fr',
      gap: 48, alignItems: 'center',
    }}>
      <div>
        <span className="mono" style={{
          display: 'inline-block', marginBottom: 18,
          fontSize: 11, fontWeight: 700, letterSpacing: '0.24em',
          color: 'var(--tangerine)', textTransform: 'uppercase',
        }}>Ready to start?</span>
        <h2 className="display" style={{
          margin: 0, fontSize: 'clamp(32px, 4vw, 56px)',
          lineHeight: 1, letterSpacing: '-0.02em', color: 'var(--white)',
        }}>
          Send a sketch.<br/>
          <span style={{ color: 'var(--tangerine)' }}>Quote in 24 hours.</span>
        </h2>
        <p className="mono" style={{
          margin: '22px 0 0', maxWidth: 520,
          fontSize: 13, lineHeight: 1.7,
          color: 'rgba(255,255,255,0.7)',
        }}>
          Linear feet, height, gate count and ZIP. One rep follows the order from quote to pickup or delivery — and routes the labor side to a certified installer near you.
        </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'stretch' }}>
        <a href="estimate.html" style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          padding: '18px 28px',
          background: 'var(--tangerine)', color: 'var(--white)',
          fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 700,
          letterSpacing: '0.18em', textTransform: 'uppercase',
        }}>Get a Quote</a>
        <a href="tel:2396895496" style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          padding: '18px 28px',
          background: 'transparent', color: 'var(--white)',
          border: '1.5px solid rgba(255,255,255,0.5)',
          fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 700,
          letterSpacing: '0.18em', textTransform: 'uppercase',
        }}>Call (239) 689-5496</a>
      </div>
    </div>
  </section>
);

const HomeownerPage = () => (
  <>
    <SiteHeader />
    <HomeownerHero />
    <HomeownerTrustStrip />
    <HomeownerSteps />
    <HomeownerInstallerSplit />
    <HomeownerFAQ />
    <HomeownerClosingCTA />
    <Footer />
  </>
);

/* ───────────────────────────── CONTRACTOR ───────────────────────────── */

const ContractorHero = () => (
  <section style={{
    background: 'var(--ink)', color: 'var(--white)',
    padding: '96px 0 88px',
  }}>
    <div className="container">
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: 64, alignItems: 'center',
      }}>
        {/* Left — copy block */}
        <div>
          <span className="mono" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '8px 14px',
            border: '1px solid rgba(255,255,255,0.4)',
            fontSize: 10, fontWeight: 700, letterSpacing: '0.22em',
            textTransform: 'uppercase', color: 'var(--white)',
            marginBottom: 36,
          }}>
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
              <path d="M3 6 H13 V13 H3 Z M6 6 V4 H10 V6" stroke="currentColor" strokeWidth="1.4"/>
            </svg>
            Wholesale Partner Program
          </span>
          <h1 className="display" style={{
            margin: '0 0 36px',
            fontSize: 'clamp(44px, 6vw, 80px)',
            lineHeight: 1, letterSpacing: '-0.025em',
            color: 'var(--white)',
          }}>
            Grow your<br/>business<br/>with WFS
          </h1>
          <p className="mono" style={{
            margin: '0 0 44px',
            maxWidth: 520,
            fontSize: 14, lineHeight: 1.7,
            color: 'rgba(255,255,255,0.7)',
          }}>
            Partner with Southwest Florida's leading manufacturer. Get wholesale pricing, priority manufacturing, and job-site delivery.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="estimate.html" style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              padding: '16px 28px',
              background: 'var(--white)', color: 'var(--ink)',
              fontFamily: 'var(--sans)', fontSize: 12, fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase',
            }}>Contact Wholesale Team</a>
            <a href="resources.html" style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              padding: '16px 28px',
              background: 'var(--white)', color: 'var(--ink)',
              fontFamily: 'var(--sans)', fontSize: 12, fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase',
            }}>Request Price List</a>
          </div>
        </div>

        {/* Right — decorative wireframe block */}
        <div style={{
          position: 'relative',
          aspectRatio: '5 / 4',
          border: '1.5px solid rgba(255,255,255,0.4)',
          padding: 28,
          background: 'rgba(255,255,255,0.02)',
        }}>
          <div style={{
            position: 'absolute', inset: 18,
            border: '1px dashed rgba(255,255,255,0.18)',
          }}/>
          {/* Two stacked panes on top */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18,
            position: 'absolute', top: 36, left: 36, right: 36, bottom: '40%',
          }}>
            {[1, 2].map(i => (
              <div key={i} style={{
                border: '1px dashed rgba(255,255,255,0.22)',
                background: 'rgba(255,255,255,0.025)',
              }}/>
            ))}
          </div>
          {/* Wide bottom pane */}
          <div style={{
            position: 'absolute', bottom: 36, left: 36, right: 36,
            height: '32%',
            border: '1px dashed rgba(255,255,255,0.22)',
            background: 'rgba(255,255,255,0.025)',
          }}/>
          {/* Partner Program pill */}
          <span className="mono" style={{
            position: 'absolute', bottom: 26, right: 26,
            padding: '7px 14px',
            background: 'var(--white)', color: 'var(--ink)',
            fontSize: 10, fontWeight: 700, letterSpacing: '0.22em',
            textTransform: 'uppercase',
          }}>Partner Program</span>
        </div>
      </div>
    </div>
  </section>
);

const ContractorBenefits = () => {
  const benefits = [
    {
      title: 'Factory Direct Pricing',
      body: 'Maximize your margins with true wholesale pricing levels based on volume.',
      svg: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21 V11 L9 14 V11 L15 14 V11 L21 14 V21 Z"/><line x1="3" y1="21" x2="21" y2="21"/></svg>),
    },
    {
      title: 'Priority Fabrication',
      body: 'Skip the line. Contractors get priority manufacturing slots for faster turnaround.',
      svg: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="9" width="13" height="9" rx="1"/><path d="M15 12 H19 L22 15 V18 H15 Z"/><circle cx="7" cy="20" r="1.6"/><circle cx="18" cy="20" r="1.6"/></svg>),
    },
    {
      title: 'Job Site Delivery',
      body: 'We deliver unbranded or branded drops directly to your job site.',
      svg: (<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21 Q4 14 4 9 A8 8 0 0 1 20 9 Q20 14 12 21 Z"/><circle cx="12" cy="9.5" r="2.6"/></svg>),
    },
    {
      title: 'Lead Generation',
      body: 'We refer homeowners directly to our trusted installer network.',
      svg: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="9" r="3"/><circle cx="17" cy="10" r="2.4"/><path d="M3 19 Q9 14 15 19"/><path d="M14 18 Q17.5 15 21 18"/></svg>),
      highlighted: false,
    },
    {
      title: 'Credit Terms',
      body: 'Flexible payment terms available for qualified high-volume partners.',
      svg: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="6" width="18" height="13" rx="1.5"/><line x1="3" y1="10" x2="21" y2="10"/><rect x="6" y="14" width="4" height="2" rx="0.4" fill="currentColor"/></svg>),
      highlighted: true,
    },
    {
      title: 'Easy Ordering',
      body: 'Order via phone, email, or in-person with our dedicated contractor support team.',
      svg: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="8" height="8" rx="0.5"/><rect x="13" y="3" width="8" height="8" rx="0.5"/><rect x="3" y="13" width="8" height="8" rx="0.5"/><rect x="13" y="13" width="8" height="8" rx="0.5"/></svg>),
    },
  ];
  return (
    <section style={{ background: 'var(--white)', padding: '96px 0' }}>
      <div className="container">
        <h2 className="display" style={{
          textAlign: 'center', margin: '0 auto 56px',
          fontSize: 'clamp(28px, 3.4vw, 44px)',
          lineHeight: 1, letterSpacing: '-0.015em', color: 'var(--ink)',
        }}>Why partner with us?</h2>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 18, maxWidth: 1200, margin: '0 auto',
        }}>
          {benefits.map(b => (
            <article key={b.title} style={{
              border: '1.5px solid var(--ink)',
              background: b.highlighted ? '#f5f8fc' : 'var(--white)',
              padding: '36px 32px',
              minHeight: 260,
            }}>
              <div style={{ marginBottom: 32, color: 'var(--ink)' }}>{b.svg}</div>
              <h3 style={{
                margin: '0 0 16px',
                fontSize: 16, fontWeight: 700,
                letterSpacing: '-0.005em', color: 'var(--ink)',
                textTransform: 'uppercase',
              }}>{b.title}</h3>
              <p className="mono" style={{
                margin: 0, fontSize: 12.5, lineHeight: 1.65,
                color: 'var(--charcoal)',
              }}>{b.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContractorCTA = () => (
  <section style={{ background: 'var(--white)', padding: '88px 0 112px' }}>
    <div className="container" style={{ textAlign: 'center', maxWidth: 720 }}>
      <h2 className="display" style={{
        margin: '0 0 28px',
        fontSize: 'clamp(28px, 3.4vw, 44px)',
        lineHeight: 1, letterSpacing: '-0.015em', color: 'var(--ink)',
      }}>Ready to Partner?</h2>
      <p className="mono" style={{
        margin: '0 auto 40px', maxWidth: 580,
        fontSize: 14, lineHeight: 1.7,
        color: 'var(--charcoal)',
      }}>
        Fill out our contractor inquiry form to get started. Our team will contact you within 24 hours.
      </p>
      <a href="estimate.html" style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        padding: '18px 44px',
        background: 'var(--ink)', color: 'var(--white)',
        fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 700,
        letterSpacing: '0.18em', textTransform: 'uppercase',
        boxShadow: '6px 6px 0 var(--tangerine)',
        transition: 'transform 0.18s ease, box-shadow 0.18s ease',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-2px, -2px)'; e.currentTarget.style.boxShadow = '8px 8px 0 var(--tangerine)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '6px 6px 0 var(--tangerine)'; }}>
        Inquire Now
      </a>
    </div>
  </section>
);

const ContractorPage = () => (
  <>
    <SiteHeader />
    <ContractorHero />
    <ContractorBenefits />
    <ContractorCTA />
    <Footer />
  </>
);

Object.assign(window, {
  HomeownerHero, HomeownerTrustStrip, HomeownerSteps, HomeownerInstallerSplit,
  HomeownerFAQ, HomeownerClosingCTA, HomeownerPage,
  ContractorHero, ContractorBenefits, ContractorCTA, ContractorPage,
});
