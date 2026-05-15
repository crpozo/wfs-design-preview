/* About page sections */

const AboutHero = () => (
  <PageHero
    crumbs={[['Home', 'Homepage.html'], ['About', null]]}
    eyebrow="About · Western Fence Supply"
    title="Family-owned."
    accent="Fabricated in Fort Myers."
    subtitle="A material supplier for contractors, homeowners and DIY projects across Southwest Florida. We don't install — we stock, fabricate and ship the components your fence is built from."
    image="assets/wfs-shop.webp"
  />
);

const AboutStory = () => (
  <section style={{ background: 'var(--white)', padding: '72px 0' }}>
    <div className="container">
      <PageSectionHeader
        number="01" label="Our story"
        title="From contractor's yard"
        accent="to Southwest Florida's supply hub."
        sub="Founded in 2003 by a fence contractor tired of driving to Miami for material — built into a two-yard supplier serving Lee, Collier, Charlotte and Sarasota."
      />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }}>
        <div>
          {[
            ['2003', 'Founded', 'Family launches WFS out of a single Fort Myers yard with one truck and four chain-link product lines.'],
            ['2008', 'Fabrication shop', 'Welding shop opens in-house — drives down lead times on custom gates from weeks to days.'],
            ['2016', 'Aluminum + Vinyl', 'Catalog expands to factory-direct aluminum and Veka-extruded vinyl. Residential business grows 4×.'],
            ['2021', 'Port Charlotte yard', 'Second location opens to serve Charlotte and Sarasota counties with same-day pickup.'],
            ['2024', 'EC Fence', 'WFS becomes a Southwest Florida distributor for EC Fence self-mating galvanized panels.'],
          ].map(([y, t, body]) => (
            <div key={y} style={{
              display: 'grid', gridTemplateColumns: '64px 1fr',
              gap: 22, paddingBottom: 24, marginBottom: 24,
              borderBottom: '1px solid rgba(0,16,17,0.1)',
            }}>
              <div className="display" style={{ fontSize: 22, color: 'var(--tangerine)' }}>{y}</div>
              <div>
                <div className="mono" style={{
                  fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase',
                  color: 'var(--ink)', marginBottom: 8, fontWeight: 700,
                }}>{t}</div>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: 'var(--charcoal)' }}>{body}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ position: 'relative', aspectRatio: '4 / 5', overflow: 'hidden', background: '#1a2548' }}>
          <img src="assets/hero-warehouse.webp" alt="WFS Fort Myers warehouse"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}/>
          <div style={{
            position: 'absolute', bottom: 18, left: 18, right: 18,
            background: 'rgba(26,37,72,0.92)', backdropFilter: 'blur(6px)',
            padding: '18px 22px',
            color: 'var(--white)',
          }}>
            <div className="mono" style={{ fontSize: 10, letterSpacing: '0.22em', color: 'var(--tangerine)', fontWeight: 700, marginBottom: 6 }}>HQ · FORT MYERS</div>
            <div className="display" style={{ fontSize: 18, lineHeight: 1.1 }}>2611 Fowler St, FL 33901</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const AboutValues = () => (
  <section style={{ background: 'var(--parchment)', padding: '72px 0' }}>
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
          ['02', 'Real lead-time honesty', 'Stocked items ship in 1–2 days. Custom takes 6–8 weeks. We tell you the truth on the first call — no soft dates.'],
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
    kicker="03 — In-house fabrication"
    title="Welded, cut and"
    accent="packed in Fort Myers."
    body="Most of our gates ship pre-hung from our fabrication shop. Aluminum, chain link, EC Fence — cut and welded to spec in-house, so what arrives on your jobsite is ready to install the same day."
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

const AboutStats = () => (
  <section style={{ background: 'var(--white)', padding: '64px 0' }}>
    <div className="container">
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 56, alignItems: 'end',
        paddingBottom: 24, marginBottom: 28, borderBottom: '1px solid rgba(0,16,17,0.12)',
      }}>
        <div>
          <div className="mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', color: 'var(--tangerine)', marginBottom: 14 }}>04 — By the numbers</div>
          <h2 className="display" style={{ margin: 0, fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: 1, letterSpacing: '-0.02em' }}>
            22 years.<br/>
            <span style={{ color: 'var(--tangerine)' }}>Still local.</span>
          </h2>
        </div>
        <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: 'var(--charcoal)', maxWidth: 460, justifySelf: 'end', textAlign: 'right' }}>
          Family-owned since day one. Two yards, four counties served, zero plans to franchise.
        </p>
      </div>
      <StatStrip items={[
        ['22+', 'Years in business'],
        ['480+', 'Active SKUs'],
        ['2', 'Yards · FM + PC'],
        ['4', 'Counties served'],
        ['24h', 'Quote turnaround'],
      ]}/>
    </div>
  </section>
);

const AboutCTA = () => (
  <CTABand
    kicker="Visit the yard"
    title="Walk the shop,"
    accent="meet the team."
    body="Both yards are open Mon–Fri 7am–4pm. Call ahead and we'll have your materials staged when you pull in."
    primary={['Get a quote', 'estimate.html']}
    secondary={['Yard locations', 'solutions.html#yards']}
  />
);

Object.assign(window, { AboutHero, AboutStory, AboutValues, AboutShop, AboutStats, AboutCTA });
