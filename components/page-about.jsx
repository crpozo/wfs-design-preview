/* About page sections */

const AboutHero = () => (
  <PageHero
    crumbs={[['Home', 'Homepage.html'], ['About', null]]}
    eyebrow="About · Western Fence Supply"
    title="Family-owned."
    accent="Fabricated in Fort Myers."
    subtitle="A material supplier for contractors, homeowners and DIY projects across Southwest Florida. We don't install, we stock, fabricate and ship the components your fence is built from."
    image="assets/wfs-shop.webp"
  />
);

const AboutStory = () => (
  <section style={{ background: 'var(--white)', padding: '120px 0' }}>
    <div className="container">
      {/* Editorial header, single line, clean wrap */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 56, alignItems: 'end',
        paddingBottom: 32, marginBottom: 64,
        borderBottom: '1px solid rgba(0,16,17,0.12)',
      }}>
        <div>
          <h2 className="display" style={{
            margin: 0,
            fontSize: 'clamp(28px, 3vw, 44px)',
            lineHeight: 1, letterSpacing: '-0.02em',
            fontWeight: 800,
            maxWidth: 640,
          }}>
            From contractor's yard <br/>
            <span style={{ color: 'var(--tangerine)' }}>to SW Florida's supply hub.</span>
          </h2>
        </div>
        <p style={{
          margin: 0, maxWidth: 420, justifySelf: 'end', textAlign: 'right',
          fontSize: 14, lineHeight: 1.6, color: 'var(--charcoal)',
        }}>
          A family-run Southwest Florida fence supplier, led by management with two decades of fencing installation and fabrication experience. Two yards in Fort Myers and Port Charlotte, serving customers throughout Florida.
        </p>
      </div>

      {/* Image (sticky) + timeline with vertical spine */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 64, alignItems: 'start' }}>
        {/* Sticky left rail: photo + stats */}
        <div style={{ position: 'sticky', top: 120 }}>
          <div style={{
            position: 'relative', aspectRatio: '4 / 5', overflow: 'hidden',
            background: '#263166',
          }}>
            <img src="assets/hero-warehouse.webp" alt="WFS Fort Myers warehouse"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}/>
            <div aria-hidden style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(180deg, rgba(38, 49, 102,0) 50%, rgba(38, 49, 102,0.55) 100%)',
            }}/>
            {/* HQ chip */}
            <div className="mono" style={{
              position: 'absolute', top: 18, left: 18,
              background: 'var(--tangerine)', color: 'var(--ink)',
              padding: '5px 10px',
              fontSize: 12, letterSpacing: '0.22em', fontWeight: 700,
            }}>HQ · FORT MYERS</div>
            <div style={{
              position: 'absolute', bottom: 18, left: 18, right: 18,
              color: 'var(--white)',
            }}>
              <div className="display" style={{ fontSize: 18, lineHeight: 1.1 }}>2621 Fowler St</div>
              <div className="mono" style={{ marginTop: 6, fontSize: 12, letterSpacing: '0.18em', color: 'rgba(255,255,255,0.85)' }}>FORT MYERS, FL 33901</div>
            </div>
          </div>
        </div>

        {/* Right: editorial timeline with vertical spine */}
        <div style={{ position: 'relative', paddingLeft: 56 }}>
          {/* Spine line */}
          <div aria-hidden style={{
            position: 'absolute', left: 17, top: 14, bottom: 14,
            width: 1, background: 'rgba(255,113,51,0.35)',
          }}/>
          {[
            ['01', 'Supply only',          'We are a supply company, not an installer. We sell the material your fence is built from and can recommend trusted local installers for the build.'],
            ['02', 'In-house fabrication', 'Gates and custom work are fabricated in-house at our Fort Myers yard.'],
            ['03', 'Four fence systems',   'Premium vinyl, aluminum, chain link and metal fencing, sold to fence companies and homeowners alike.'],
            ['04', 'Two yards',            'Two convenient yard locations in Fort Myers and Port Charlotte, serving customers throughout Florida, including Lee, Collier, Charlotte, Hendry, and surrounding counties.'],
            ['05', 'Delivery or pickup',   'Job-site delivery on our own trucks, or same-day pickup on standard qualifying orders.'],
          ].map(([y, t, body], i, arr) => (
            <div key={y} style={{
              position: 'relative',
              paddingBottom: i === arr.length - 1 ? 0 : 44,
            }}>
              {/* Dot on the spine */}
              <span aria-hidden style={{
                position: 'absolute', left: -45, top: 10,
                width: 14, height: 14, borderRadius: '50%',
                background: 'var(--tangerine)',
                border: '3px solid var(--white)',
                boxShadow: '0 0 0 1px rgba(255,113,51,0.5)',
              }}/>
              <div style={{
                display: 'grid', gridTemplateColumns: '88px 1fr',
                gap: 28, alignItems: 'baseline',
              }}>
                <div className="display" style={{
                  fontSize: 30, lineHeight: 1,
                  color: 'var(--ink)', letterSpacing: '-0.01em',
                }}>{y}</div>
                <div>
                  <div className="mono" style={{
                    fontSize: 12, letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: 'var(--tangerine)', fontWeight: 700,
                    marginBottom: 10,
                  }}>{t}</div>
                  <p style={{
                    margin: 0, fontSize: 15, lineHeight: 1.6,
                    color: 'var(--ink)', maxWidth: 520,
                  }}>{body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const AboutValues = () => (
  <section style={{ background: 'var(--white)', padding: '120px 0' }}>
    <div className="container">
      <PageSectionHeader
        number="02" label="How we work"
        title="Three rules"
        accent="we don't break."
        sub="Same standard we held when we were the contractors using this material every day."
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        {[
          ['01', 'No low-grade material', 'If we wouldn\'t put it on our own job, we don\'t stock it. We turn down lower price points every quarter to protect the catalog.'],
          ['02', 'Real lead-time honesty', 'Stocked items ship in 1-2 days. Custom takes 6-8 weeks. We tell you the truth on the first call, no soft dates.'],
          ['03', 'Pricing without games', 'Same supplier-direct floor for contractors, homeowners and DIY. No minimums, no contractor-only tiers.'],
        ].map(([n, t, body]) => (
          <div key={n} style={{
            background: 'var(--white)', padding: '32px 28px',
            border: '1px solid rgba(0,16,17,0.1)',
          }}>
            <div className="display" style={{ fontSize: 36, color: 'var(--tangerine)', lineHeight: 1, marginBottom: 18 }}>{n}</div>
            <h3 className="display" style={{ fontSize: 22, lineHeight: 1.1, margin: '0 0 12px' }}>{t}</h3>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'var(--charcoal)' }}>{body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AboutShop = () => (
  <SplitBlock
    kicker="03, In-house fabrication"
    title="Welded, cut and"
    accent="packed in Fort Myers."
    body="Most of our gates ship ready-to-assemble from our fabrication shop. Aluminum, chain link, metal, vinyl and EC Fence, cut and welded to spec in-house, so what arrives on your jobsite is ready to install the same day."
    bullets={[
      'Custom gate fabrication, up to 50 ft cantilever',
      'Hardware kits packed and labeled to the order',
      'Powder-coat color-match on aluminum runs',
      'Same-day pickup on stocked panels and components',
    ]}
    image="assets/wfs-shop.webp"
    imageRight={true}
    dark={true}
  />
);

const AboutStats = () => {
  const stats = [
    ['20+',  'Years experience',  'Fencing install + fabrication'],
    ['4',    'Fence materials',   'Vinyl · Aluminum · Chain link · Metal'],
    ['2',    'Yards',             'Fort Myers + Port Charlotte'],
    ['4',    'Counties served',   'Lee · Collier · Charlotte · Hendry'],
    ['Lifetime', 'Warranty',      'On most materials we sell'],
  ];
  return (
    <section style={{ background: 'var(--white)', padding: '120px 0' }}>
      <div className="container">
        {/* Single editorial header row, no stacked headline */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          gap: 32, flexWrap: 'wrap',
          paddingBottom: 28, marginBottom: 56,
          borderBottom: '1px solid rgba(0,16,17,0.12)',
        }}>
          <div style={{
            display: 'flex', alignItems: 'baseline', gap: 14,
          }}>
            <span className="display" style={{
              fontSize: 22, lineHeight: 1, color: 'var(--ink)',
            }}>Family-owned and run.</span>
            <span style={{ fontSize: 13.5, color: 'var(--charcoal)' }}>
              Two yards, zero plans to franchise.
            </span>
          </div>
        </div>

        {/* Stat grid, big numerals, vertical dividers, no double rule */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${stats.length}, 1fr)`,
          gap: 0,
        }}>
          {stats.map(([n, label, sub], i) => (
            <div key={label} style={{
              padding: i === 0 ? '0 28px 0 0' : `0 28px`,
              borderLeft: i === 0 ? 'none' : '1px solid rgba(0,16,17,0.12)',
            }}>
              <div className="display" style={{
                fontSize: 'clamp(48px, 5.4vw, 80px)',
                lineHeight: 1,
                color: 'var(--ink)',
                letterSpacing: '-0.02em',
              }}>{n}</div>
              <div style={{
                marginTop: 22,
                fontSize: 14, fontWeight: 600, color: 'var(--ink)',
                letterSpacing: '-0.005em',
              }}>{label}</div>
              <div className="mono" style={{
                marginTop: 6,
                fontSize: 12.5, letterSpacing: '0.08em',
                color: 'var(--charcoal)', lineHeight: 1.5,
              }}>{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutCTA = () => (
  <CTABand
    kicker="Visit the yard"
    title="Walk the shop,"
    accent="meet the team."
    body="Both yards are open Monday-Friday 7am-4pm and Saturday 7am-12pm. Call ahead and we'll have your materials staged when you pull in."
    primary={['Get a quote', 'estimate.html']}
    secondary={['Yard locations', 'solutions.html#yards']}
  />
);

Object.assign(window, { AboutHero, AboutStory, AboutValues, AboutShop, AboutStats, AboutCTA });
