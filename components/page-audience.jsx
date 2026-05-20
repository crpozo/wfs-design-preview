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
  HomeownerHero, HomeownerSteps, HomeownerInstallerSplit, HomeownerFAQ, HomeownerPage,
  ContractorHero, ContractorBenefits, ContractorCTA, ContractorPage,
});
