/* Homeowner + Contractor landing pages — entered from the homepage hero buttons */

/* ───────────────────────────── HOMEOWNER ───────────────────────────── */

const HomeownerHero = () => (
  <section style={{ background: 'var(--white)', padding: '96px 0 64px' }}>
    <div className="container" style={{ maxWidth: 1100, textAlign: 'center' }}>
      <h1 className="display" style={{
        margin: '0 auto 36px',
        fontSize: 'clamp(48px, 7.2vw, 104px)',
        lineHeight: 0.98, letterSpacing: '-0.025em',
        color: 'var(--ink)',
        maxWidth: 1000,
      }}>
        Fence Solutions<br/>for Homeowners
      </h1>
      <p className="mono" style={{
        margin: '0 auto 44px',
        maxWidth: 780,
        fontSize: 15.5, lineHeight: 1.65,
        color: 'var(--charcoal)',
      }}>
        Enhance your property's value, privacy, and security with our premium manufacturing-direct fencing. We help you plan the project and connect you with certified installers for the finished build.
      </p>
      <div style={{ display: 'flex', gap: 18, justifyContent: 'center', flexWrap: 'wrap' }}>
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
    </div>
  </section>
);

/* ───── How it works — 6 steps with circle icons ───── */

const HomeownerSteps = () => {
  const Icon = ({ children }) => (
    <div style={{
      width: 84, height: 84, borderRadius: '50%',
      background: '#f5f5f5',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      margin: '0 auto 26px',
      color: 'var(--ink)',
    }}>
      {children}
    </div>
  );
  const steps = [
    { n: '1', t: 'Draw Your Fence', body: 'Sketch your layout to visualize the project.',
      svg: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19 L7 21 L9 16 L18 7 L21 10 Z"/><path d="M16 9 L19 12"/></svg>) },
    { n: '2', t: 'Get an Estimate', body: 'Use our tools to get a rough idea of the cost.',
      svg: (<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="5" y="3" width="14" height="18" rx="1"/><rect x="7.5" y="5.5" width="9" height="4"/><circle cx="9" cy="13" r="0.6" fill="currentColor"/><circle cx="12" cy="13" r="0.6" fill="currentColor"/><circle cx="15" cy="13" r="0.6" fill="currentColor"/><circle cx="9" cy="16" r="0.6" fill="currentColor"/><circle cx="12" cy="16" r="0.6" fill="currentColor"/><circle cx="15" cy="16" r="0.6" fill="currentColor"/></svg>) },
    { n: '3', t: 'Book a Visit', body: 'Schedule a time for us to verify measurements.',
      svg: (<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="5" width="16" height="15" rx="1"/><path d="M4 9 H20"/><line x1="8" y1="3" x2="8" y2="6"/><line x1="16" y1="3" x2="16" y2="6"/></svg>) },
    { n: '4', t: 'Get a Quote', body: 'Receive a final, detailed quote for your project.',
      svg: (<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 3 H15 L19 7 V21 H7 Z"/><path d="M15 3 V7 H19"/><line x1="9" y1="12" x2="17" y2="12"/><line x1="9" y1="15" x2="17" y2="15"/><line x1="9" y1="18" x2="13" y2="18"/></svg>) },
    { n: '5', t: 'Fabrication', body: 'We manufacture your fence locally to your exact specifications.',
      svg: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 21 V11 L9 14 V11 L15 14 V11 L21 14 V21 Z"/><line x1="3" y1="21" x2="21" y2="21"/></svg>) },
    { n: '6', t: 'Certified Installation', body: 'Choose from our WFS-certified installer alliance for professional installation.',
      svg: (<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3 L19 6 V12 Q19 17 12 21 Q5 17 5 12 V6 Z"/><path d="M9 12 L11 14 L15 10" strokeLinecap="round" strokeLinejoin="round"/></svg>) },
  ];
  return (
    <section style={{ background: 'var(--white)', padding: '64px 0 96px' }}>
      <div className="container">
        <h2 className="display" style={{
          textAlign: 'center', margin: '0 auto 64px',
          fontSize: 'clamp(28px, 3.4vw, 44px)',
          lineHeight: 1, letterSpacing: '-0.015em',
          color: 'var(--ink)',
        }}>How it works for homeowners</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          rowGap: 72, columnGap: 48,
          maxWidth: 1100, margin: '0 auto',
        }}>
          {steps.map(s => (
            <div key={s.n} style={{ textAlign: 'center' }}>
              <Icon>{s.svg}</Icon>
              <h3 style={{
                margin: '0 0 14px',
                fontSize: 16, fontWeight: 700,
                letterSpacing: '-0.005em', color: 'var(--ink)',
              }}>{s.n}. {s.t}</h3>
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

const HomeownerInstallerSplit = () => (
  <section style={{ background: '#fafafa', padding: '96px 0' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, maxWidth: 1200, margin: '0 auto' }}>
        {/* Left — Certified Installer Alliance (white) */}
        <article style={{
          background: 'var(--white)', color: 'var(--ink)',
          border: '1.5px solid var(--ink)',
          padding: '44px 44px 36px',
          display: 'flex', flexDirection: 'column',
        }}>
          <h3 className="display" style={{
            margin: '0 0 22px',
            fontSize: 'clamp(22px, 2.2vw, 30px)',
            lineHeight: 1.05, letterSpacing: '-0.01em',
          }}>Certified Installer Alliance</h3>
          <p className="mono" style={{
            margin: '0 0 28px',
            fontSize: 13, lineHeight: 1.7, color: 'var(--charcoal)',
          }}>
            WFS does not offer DIY installation. We connect homeowners with certified installation partners who know our products, hardware, and finish standards.
          </p>
          <ul style={{ listStyle: 'none', margin: '0 0 36px', padding: 0, display: 'grid', gap: 14 }}>
            {[
              'WFS-aligned independent installers',
              'Product-aware installation practices',
              'Clean handoff from quote to installation',
            ].map(line => (
              <li key={line} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 3 }}>
                  <path d="M3 8 L7 12 L13 4" stroke="var(--ink)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
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
        </article>

        {/* Right — What You Get (black) */}
        <article style={{
          background: 'var(--ink)', color: 'var(--white)',
          padding: '44px 44px 36px',
          display: 'flex', flexDirection: 'column',
        }}>
          <h3 className="display" style={{
            margin: '0 0 22px',
            fontSize: 'clamp(22px, 2.2vw, 30px)',
            lineHeight: 1.05, letterSpacing: '-0.01em',
          }}>What You Get</h3>
          <p className="mono" style={{
            margin: '0 0 28px',
            fontSize: 13, lineHeight: 1.7,
            color: 'rgba(255,255,255,0.7)',
          }}>
            Your installer stays independent, but the project stays aligned with WFS material specs, fabrication details, and finish expectations.
          </p>
          <ul style={{ listStyle: 'none', margin: '0 0 36px', padding: 0, display: 'grid', gap: 14 }}>
            {[
              ['Local crews familiar with WFS systems',
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="9" cy="9" r="3"/><circle cx="17" cy="10" r="2.5"/><path d="M3 19 Q9 14 15 19"/><path d="M14 18 Q17.5 15 21 18"/></svg>],
              ['Installation practices that support warranty-friendly outcomes',
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3 L19 6 V12 Q19 17 12 21 Q5 17 5 12 V6 Z"/><path d="M9 12 L11 14 L15 10" strokeLinecap="round" strokeLinejoin="round"/></svg>],
              ['Certified partners for residential and gate projects',
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9" strokeDasharray="2 1.5"/><path d="M9 12 L11 14 L15 10" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="0"/></svg>],
            ].map(([line, icon], i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                <span style={{ flexShrink: 0, marginTop: 1, color: 'var(--white)' }}>{icon}</span>
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
        </article>
      </div>
    </div>
  </section>
);

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
    <section style={{ background: 'var(--white)', padding: '96px 0' }}>
      <div className="container" style={{ maxWidth: 920 }}>
        <h2 className="display" style={{
          textAlign: 'center', margin: '0 auto 56px',
          fontSize: 'clamp(28px, 3.4vw, 44px)',
          lineHeight: 1, letterSpacing: '-0.015em',
        }}>Frequently Asked Questions</h2>
        <div style={{ display: 'grid', gap: 18 }}>
          {items.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{
                border: '1.5px solid var(--ink)',
                background: isOpen ? '#f5f8fc' : 'var(--white)',
              }}>
                <button onClick={() => setOpen(isOpen ? -1 : i)} style={{
                  width: '100%', display: 'flex',
                  alignItems: 'center', justifyContent: 'space-between',
                  padding: '24px 28px', textAlign: 'left', gap: 24,
                  background: 'transparent', border: 'none', cursor: 'pointer',
                }}>
                  <span className="mono" style={{
                    fontSize: 13.5, fontWeight: 700, color: 'var(--ink)',
                  }}>{q}</span>
                  <span style={{
                    flexShrink: 0,
                    fontSize: 20, fontWeight: 300, color: 'var(--ink)',
                    transform: isOpen ? 'rotate(45deg)' : 'none',
                    transition: 'transform 0.2s ease',
                  }}>+</span>
                </button>
                <div style={{
                  maxHeight: isOpen ? 280 : 0, overflow: 'hidden',
                  transition: 'max-height 0.3s ease',
                }}>
                  <p className="mono" style={{
                    margin: 0, padding: '0 28px 24px',
                    fontSize: 12.5, lineHeight: 1.7, color: 'var(--charcoal)',
                  }}>{a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const HomeownerPage = () => (
  <>
    <SiteHeader />
    <HomeownerHero />
    <HomeownerSteps />
    <HomeownerInstallerSplit />
    <HomeownerFAQ />
    <Footer />
  </>
);

/* ───────────────────────────── CONTRACTOR ───────────────────────────── */

const ContractorHero = () => (
  <section style={{
    position: 'relative', color: 'var(--white)', overflow: 'hidden',
    minHeight: 'clamp(520px, 72vh, 640px)',
    display: 'flex', flexDirection: 'column',
    background: '#0f1832',
  }}>
    <img src="assets/hero-warehouse.webp" alt="" aria-hidden style={{
      position: 'absolute', inset: 0, width: '100%', height: '100%',
      objectFit: 'cover', objectPosition: 'center 55%', zIndex: 0,
      filter: 'saturate(0.85) contrast(1.05)',
    }}/>
    <div aria-hidden style={{
      position: 'absolute', inset: 0, zIndex: 1,
      background: 'linear-gradient(100deg, rgba(15,24,50,0.94) 0%, rgba(15,24,50,0.78) 45%, rgba(15,24,50,0.45) 100%)',
    }}/>
    <div className="container" style={{
      position: 'relative', zIndex: 2, width: '100%',
      flex: 1, display: 'flex', flexDirection: 'column',
      paddingTop: 96, paddingBottom: 56,
    }}>
      <div className="mono" style={{
        display: 'inline-flex', alignItems: 'center', gap: 12,
        fontSize: 11, fontWeight: 700, letterSpacing: '0.22em',
        color: 'var(--tangerine)', textTransform: 'uppercase',
        marginBottom: 26,
      }}>
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path d="M2 9 Q8 3 14 9 L14 12 L2 12 Z M5 9 V6 Q8 4 11 6 V9" stroke="currentColor" strokeWidth="1.4" fill="none"/>
        </svg>
        Contractor Landing
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: 920 }}>
        <h1 className="display" style={{
          margin: '0 0 22px',
          fontSize: 'clamp(36px, 5vw, 64px)',
          lineHeight: 0.98, letterSpacing: '-0.025em',
        }}>
          Trade accounts. Will-call.<br/>
          <span style={{ color: 'var(--tangerine)' }}>Phased delivery.</span>
        </h1>
        <p style={{ fontSize: 17, lineHeight: 1.55, maxWidth: 620, margin: 0, color: 'rgba(255,255,255,0.85)' }}>
          Net-30 trade accounts after the second order. Dedicated sales rep, in-house fabrication shop, and dispatched delivery across Lee, Collier, Charlotte and Sarasota. Pre-hung gates ship welded with hardware kits packed per opening.
        </p>
        <div style={{ marginTop: 32, display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
          <a href="estimate.html" style={{
            display: 'inline-flex', alignItems: 'center', gap: 12,
            padding: '16px 26px', borderRadius: 999,
            background: 'var(--tangerine)', color: 'var(--white)',
            fontFamily: 'var(--sans)', fontSize: 14, fontWeight: 600,
            letterSpacing: '0.06em', textTransform: 'uppercase',
            boxShadow: '0 10px 28px rgba(231,114,53,0.4)',
            transition: 'transform 0.18s, box-shadow 0.18s',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 14px 36px rgba(231,114,53,0.5)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 10px 28px rgba(231,114,53,0.4)'; }}>
            Open a trade account
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
          </a>
          <a href="tel:2396895496" className="mono" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            paddingBottom: 4,
            fontSize: 12, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase',
            color: 'var(--white)', borderBottom: '1px solid rgba(255,255,255,0.5)',
          }}>
            Or call (239) 689-5496
          </a>
        </div>
      </div>
      <div style={{
        marginTop: 56, paddingTop: 28,
        borderTop: '1px solid rgba(255,255,255,0.18)',
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24,
      }}>
        {[
          ['Net-30',          'After second order — no application fee.'],
          ['Will-call',       'Pull to bay, walk out in 15 min.'],
          ['In-house fab',    'Custom gates welded in Fort Myers in 5–7 days.'],
          ['Job-site dispatch','Delivery across Lee · Collier · Charlotte · Sarasota.'],
        ].map(([t, sub], i, arr) => (
          <div key={t} style={{
            paddingLeft: i === 0 ? 0 : 24,
            borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.18)',
          }}>
            <div className="mono" style={{
              fontSize: 12, fontWeight: 700, color: 'var(--tangerine)',
              letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 10,
            }}>0{i+1} · {t}</div>
            <div className="mono" style={{ fontSize: 11, lineHeight: 1.55, color: 'rgba(255,255,255,0.7)' }}>{sub}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ContractorBenefits = () => (
  <section style={{ background: 'var(--white)', padding: '72px 0' }}>
    <div className="container">
      <PageSectionHeader
        number="01" label="Trade benefits"
        title="Built around"
        accent="how contractors actually buy."
        sub="No tiered pricing tricks, no dispatch dance. One rep follows your account, and the yard staff knows your job number."
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
        {[
          ['Net-30 trade accounts',     'Approved after the second order. Statement billing, single AP contact.'],
          ['Volume pricing',             'Tiered floor for repeat residential. No annual renewal, no minimum spend.'],
          ['Dedicated sales rep',        'One name, one direct line. Knows your job board and your usual specs.'],
          ['In-house fabrication',       'Custom gates and panels welded in Fort Myers. 5–7 day turnaround on most custom runs.'],
          ['Will-call staging',          'Order Friday, pickup Monday. Hardware packed per opening and labeled to the run.'],
          ['Job-site dispatch',          'Delivery across Lee, Collier, Charlotte and Sarasota. Phased deliveries against your release.'],
        ].map(([t, body], i) => (
          <div key={t} style={{
            display: 'flex', gap: 20,
            padding: 28,
            border: '1px solid rgba(0,16,17,0.12)',
            background: 'var(--white)',
          }}>
            <div style={{
              flexShrink: 0,
              width: 44, height: 44,
              background: 'var(--ink)', color: 'var(--white)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--mono)', fontWeight: 700, fontSize: 14,
            }}>0{i+1}</div>
            <div>
              <h3 className="display" style={{ margin: '0 0 8px', fontSize: 18, lineHeight: 1.15 }}>{t}</h3>
              <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.55, color: 'var(--charcoal)' }}>{body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ContractorProcess = () => (
  <section style={{ background: 'var(--parchment)', padding: '72px 0' }}>
    <div className="container">
      <PageSectionHeader
        number="02" label="Open an account"
        title="Three steps —"
        accent="from first order to Net-30."
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, border: '1px solid var(--ink)', background: 'var(--white)' }}>
        {[
          ['01', 'First order on COD',  'Card or check at pickup. Same supplier-direct pricing as account holders.'],
          ['02', 'Apply for Net-30',     'One-page application + two trade references. Approval typically same week.'],
          ['03', 'Trade rep assigned',   'Direct line, takeoff service, job-site dispatch and statement billing.'],
        ].map(([n, t, body], i, arr) => (
          <div key={n} style={{
            padding: '32px 28px',
            borderLeft: i === 0 ? 'none' : '1px solid rgba(0,16,17,0.12)',
          }}>
            <div className="display" style={{ fontSize: 30, color: 'var(--tangerine)', lineHeight: 1, marginBottom: 16 }}>{n}</div>
            <h3 style={{ fontSize: 16, fontWeight: 700, margin: '0 0 10px', color: 'var(--ink)' }}>{t}</h3>
            <p className="mono" style={{ margin: 0, fontSize: 11.5, lineHeight: 1.55, color: 'var(--charcoal)' }}>{body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ContractorMaterials = () => {
  const materials = [
    { name: 'Vinyl / PVC',         tag: 'HOA + subdivision volume', href: 'vinyl.html',      img: 'vinyl' },
    { name: 'Aluminum',            tag: 'Pool code + HVHZ',         href: 'aluminum.html',   img: 'aluminum' },
    { name: 'Chain Link',          tag: 'Industrial + security',    href: 'chain-link.html', img: 'chainlink' },
    { name: 'Metal / DuraFence',   tag: 'Commercial privacy',       href: 'metal.html',      img: 'metal' },
    { name: 'EC Fence',            tag: 'Coastal commercial',       href: 'ecfence.html',    img: 'ecfence' },
  ];
  return (
    <section style={{ background: 'var(--white)', padding: '72px 0' }}>
      <div className="container">
        <PageSectionHeader
          number="03" label="Stocked for trade"
          title="Five systems,"
          accent="full hardware kits per opening."
          link={['Full catalog', 'products.html']}
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 14 }}>
          {materials.map(m => (
            <a key={m.name} href={m.href} style={{
              position: 'relative', display: 'block',
              aspectRatio: '4 / 5', overflow: 'hidden',
              background: '#1a2548', textDecoration: 'none', color: 'var(--white)',
            }}>
              <img src={FENCE_IMG[m.img]} alt={m.name}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}/>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(20,30,55,0) 35%, rgba(20,30,55,0.88) 100%)' }}/>
              <div style={{ position: 'absolute', bottom: 16, left: 16, right: 16 }}>
                <div className="display" style={{ fontSize: 18, lineHeight: 1.1 }}>{m.name}</div>
                <div className="mono" style={{ marginTop: 6, fontSize: 10, letterSpacing: '0.18em', color: 'var(--alice-blue)' }}>{m.tag}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContractorCTA = () => (
  <CTABand
    kicker="Open a trade account"
    title="One page application."
    accent="Approval typically the same week."
    body="Send your business info + two trade references. Net-30 statement billing and job-site dispatch kick in on the second order."
    primary={['Apply now', 'estimate.html']}
    secondary={['Call (239) 689-5496', 'tel:2396895496']}
  />
);

const ContractorPage = () => (
  <>
    <SiteHeader />
    <ContractorHero />
    <ContractorBenefits />
    <ContractorProcess />
    <ContractorMaterials />
    <Testimonials />
    <FAQ />
    <ContractorCTA />
    <Footer />
  </>
);

Object.assign(window, {
  HomeownerHero, HomeownerSteps, HomeownerInstallerSplit, HomeownerFAQ, HomeownerPage,
  ContractorHero, ContractorBenefits, ContractorProcess, ContractorMaterials, ContractorCTA, ContractorPage,
});
