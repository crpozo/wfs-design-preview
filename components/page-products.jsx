/* Products catalog page sections */

const ProductsHero = () => (
  <PageHero
    crumbs={[['Home', 'Homepage.html'], ['Products', null]]}
    eyebrow="Full catalog · 480+ SKUs"
    title="Five fence systems."
    accent="One Fort Myers yard."
    subtitle="Factory-direct material, vinyl, aluminum, chain link, metal and EC Fence, plus gates, hardware and accessories. Same supplier-direct pricing for contractors, homeowners and DIY projects."
    image="assets/hero-warehouse.webp"
  />
);

const PRODUCT_INTRO_STATS = [
  ['5', 'Fence systems'],
  ['5', 'Gate systems'],
  ['480+', 'Active SKUs'],
  ['24h', 'Quote turnaround'],
];

const ProductsIntro = () => (
  <section style={{ background: 'var(--white)', padding: '88px 0 64px' }}>
    <div className="container">
      <div style={{
        display: 'grid', gridTemplateColumns: '1.4fr 1fr', columnGap: 64, rowGap: 28, alignItems: 'end',
      }}>
        <div>
          <h2 className="display" style={{ margin: 0, fontSize: 'clamp(26px, 2.6vw, 36px)', lineHeight: 1.12, letterSpacing: '-0.02em' }}>
            Everything you need to build the perimeter,<br/>
            <span style={{ color: 'var(--tangerine)' }}>and nothing we wouldn't put on our own job.</span>
          </h2>
        </div>
        <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.7, color: 'var(--charcoal)', maxWidth: 420 }}>
          We curate every SKU we carry. If a manufacturer can't meet our spec, it doesn't make it onto the floor. Browse by material below, or jump straight to gates and hardware.
        </p>
      </div>
      <div style={{ marginTop: 64 }}>
        <StatStrip items={PRODUCT_INTRO_STATS}/>
      </div>
    </div>
  </section>
);

const ProductHardware = () => (
  <section style={{ background: 'var(--white)', padding: '64px 0' }}>
    <div className="container">
      <PageSectionHeader
        number="03" label="Hardware & accessories"
        title="Posts, hinges, latches,"
        accent="and the little stuff that breaks first."
        sub="If we sell the panel, we stock the matching hardware. Stainless-steel kits on every gate, drop rods on every double-swing."
        link={['Request hardware list', 'estimate.html']}
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
        {[
          ['Posts & rails', 'Galv steel + aluminum line posts, terminal posts and rails sized for every system.'],
          ['Hinges & latches', 'Stainless hinges, drop rods, magnetic latches, padlockable kits.'],
          ['Mesh + caps', '6-12 gauge mesh by the roll, post caps, tension bands, brace bands.'],
          ['Operators', 'LiftMaster gate openers, photo-eye safety, keypads and loop detectors.'],
        ].map(([t, body]) => (
          <article key={t} style={{
            background: 'var(--white)', padding: '24px 22px',
            border: '1px solid rgba(0,16,17,0.1)',
          }}>
            <div className="mono" style={{
              fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase',
              color: 'var(--tangerine)', fontWeight: 700, marginBottom: 10,
            }}>Hardware</div>
            <h3 className="display" style={{ margin: '0 0 10px', fontSize: 20, lineHeight: 1.1 }}>{t}</h3>
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.55, color: 'var(--charcoal)' }}>{body}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const ProductsCTA = () => (
  <CTABand
    kicker="Spec your run"
    title="Send your dimensions"
    accent="we'll come back with stock + price."
    body="Linear feet, height, color, gate count. We'll quote it in 24 hours with delivery and pickup options for both yards."
    primary={['Request a quote', 'estimate.html']}
    secondary={['Talk to a rep', 'tel:2396895496']}
  />
);

Object.assign(window, { ProductsHero, ProductsIntro, ProductHardware, ProductsCTA });
