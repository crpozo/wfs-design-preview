/* Homeowner + Contractor landing pages — entered from the homepage hero buttons */

/* ───────────────────────────── HOMEOWNER ───────────────────────────── */

const HomeownerHero = () => (
  <section style={{
    position: 'relative', color: 'var(--white)', overflow: 'hidden',
    minHeight: 'clamp(520px, 72vh, 640px)',
    display: 'flex', flexDirection: 'column',
    background: '#1a2548',
  }}>
    <img src={FENCE_IMG.vinyl} alt="" aria-hidden style={{
      position: 'absolute', inset: 0, width: '100%', height: '100%',
      objectFit: 'cover', objectPosition: 'center 45%', zIndex: 0,
      filter: 'saturate(0.9)',
    }}/>
    <div aria-hidden style={{
      position: 'absolute', inset: 0, zIndex: 1,
      background: 'linear-gradient(100deg, rgba(20,30,55,0.92) 0%, rgba(20,30,55,0.75) 45%, rgba(20,30,55,0.45) 100%)',
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
          <path d="M2 7 L8 2 L14 7 L14 14 L10 14 L10 10 L6 10 L6 14 L2 14 Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        </svg>
        Homeowner Landing
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: 860 }}>
        <h1 className="display" style={{
          margin: '0 0 22px',
          fontSize: 'clamp(36px, 5vw, 64px)',
          lineHeight: 0.98, letterSpacing: '-0.025em',
        }}>
          Buy supplier-direct.<br/>
          <span style={{ color: 'var(--tangerine)' }}>Same price contractors pay.</span>
        </h1>
        <p style={{ fontSize: 17, lineHeight: 1.55, maxWidth: 580, margin: 0, color: 'rgba(255,255,255,0.85)' }}>
          We sell to the public at the same supplier-direct floor we sell to contractors — no minimums, no membership. Free takeoff from your sketch or survey, and a trusted-installer list across SW Florida if you don't want to build it yourself.
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
            Send a homeowner quote
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
          ['No minimums',    'Buy 1 panel or 400 ft. No membership.'],
          ['Free takeoff',   'Send a sketch — we figure the parts list.'],
          ['Pickup or delivery','FM or PC yard · delivery across FL.'],
          ['Installer list', 'Trusted local installers if you need one.'],
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

const HomeownerWhyUs = () => (
  <section style={{ background: 'var(--white)', padding: '72px 0' }}>
    <div className="container">
      <PageSectionHeader
        number="01" label="Why buy from us"
        title="Same supplier floor —"
        accent="no markup for being a homeowner."
        sub="We don't run a contractor tier. The price you see is the price your fence contractor would pay if they walked in the same morning."
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        {[
          ['01', 'Public welcome',     'Same prices, same access, same Mon–Fri 7am–4pm yard hours. Walk in, call ahead, or send a sketch.'],
          ['02', 'Honest lead times',  'Stocked items ship in 1–2 days. Custom takes 6–8 weeks. We tell you the truth on the first call.'],
          ['03', 'Material we\'d use', 'If we wouldn\'t put it on our own job we don\'t stock it. We turn down cheaper SKUs every quarter to protect the floor.'],
        ].map(([n, t, body], i) => (
          <article key={n} style={{
            background: i === 1 ? 'var(--ink)' : 'var(--parchment)',
            color: i === 1 ? 'var(--parchment)' : 'var(--ink)',
            padding: '32px 28px',
            border: i === 1 ? 'none' : '1px solid rgba(0,16,17,0.1)',
          }}>
            <div className="display" style={{ fontSize: 36, color: 'var(--tangerine)', lineHeight: 1, marginBottom: 18 }}>{n}</div>
            <h3 className="display" style={{ fontSize: 22, lineHeight: 1.1, margin: '0 0 12px' }}>{t}</h3>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: i === 1 ? 'var(--alice-blue)' : 'var(--charcoal)' }}>{body}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const HomeownerProcess = () => (
  <section style={{ background: 'var(--parchment)', padding: '72px 0' }}>
    <div className="container">
      <PageSectionHeader
        number="02" label="How it works"
        title="Four steps,"
        accent="quote to pickup."
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, border: '1px solid var(--ink)', background: 'var(--white)' }}>
        {[
          ['01', 'Send your run', 'Linear feet, height, gate count, ZIP. Hand-drawn sketch or survey is fine.'],
          ['02', 'Free takeoff',  'A rep replies in 24 hours with parts list, stock, lead time and pricing.'],
          ['03', 'Approve + pay', 'Email confirmation, card or check, and we stage the order.'],
          ['04', 'Pickup or delivery', 'FM or PC yard, or scheduled delivery anywhere in Florida.'],
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

const HomeownerMaterials = () => {
  const materials = [
    { name: 'Vinyl / PVC',         tag: 'Backyard privacy',       href: 'vinyl.html',      img: 'vinyl' },
    { name: 'Aluminum',            tag: 'Pool code · ornamental', href: 'aluminum.html',   img: 'aluminum' },
    { name: 'Chain Link',          tag: 'Pet + perimeter',        href: 'chain-link.html', img: 'chainlink' },
    { name: 'Metal / DuraFence',   tag: 'HVHZ privacy',           href: 'metal.html',      img: 'metal' },
    { name: 'EC Fence',            tag: 'Modern coastal',         href: 'ecfence.html',    img: 'ecfence' },
  ];
  return (
    <section style={{ background: 'var(--white)', padding: '72px 0' }}>
      <div className="container">
        <PageSectionHeader
          number="03" label="Pick your material"
          title="Five systems"
          accent="for residential builds."
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

const HomeownerCTA = () => (
  <CTABand
    kicker="Ready to spec your fence?"
    title="Send a sketch."
    accent="Get a binding quote in 24 hours."
    body="No minimums, no membership, no contractor-only tiers. One rep follows your order from quote to pickup or delivery."
    primary={['Request a quote', 'estimate.html']}
    secondary={['Call (239) 689-5496', 'tel:2396895496']}
  />
);

const HomeownerPage = () => (
  <>
    <SiteHeader />
    <HomeownerHero />
    <HomeownerWhyUs />
    <HomeownerProcess />
    <HomeownerMaterials />
    <Testimonials />
    <FAQ />
    <HomeownerCTA />
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
  HomeownerHero, HomeownerWhyUs, HomeownerProcess, HomeownerMaterials, HomeownerCTA, HomeownerPage,
  ContractorHero, ContractorBenefits, ContractorProcess, ContractorMaterials, ContractorCTA, ContractorPage,
});
