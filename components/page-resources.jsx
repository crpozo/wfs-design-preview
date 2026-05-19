/* Resources page — articles, materials comparison, pool code, downloads */

const ResourcesHero = () => (
  <PageHero
    crumbs={[['Home', 'Homepage.html'], ['Resources', null]]}
    eyebrow="Fence Education Hub"
    title="Pick the right fence —"
    accent="the first time."
    subtitle="Guides, materials comparisons, Florida code references and downloadable spec sheets. Written by the people who fabricate this stuff every day."
    image="https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=1600&q=80"
  />
);

const ResourceArticles = () => {
  const posts = [
    { tag: 'Materials',  title: 'Top 4 Durable Fence Materials for SW Florida',     read: '6 min', img: 'aluminum' },
    { tag: 'How-to',     title: 'How to Measure for Fence Material in Florida',     read: '4 min', img: 'chainlink' },
    { tag: 'Pricing',    title: 'How Much Does a Fence Cost in Florida in 2026?',   read: '8 min', img: 'vinyl' },
    { tag: 'Code',       title: 'Florida Pool Code: Enclosure Requirements Explained', read: '7 min', img: 'metal' },
    { tag: 'Comparison', title: 'Aluminum vs Vinyl vs Chain Link — Picking a System', read: '9 min', img: 'aluminum' },
    { tag: 'HVHZ',       title: 'Hurricane Zone Fencing: EC Fence vs DuraFence',     read: '5 min', img: 'ecfence' },
  ];
  return (
    <section style={{ background: 'var(--white)', padding: '64px 0' }}>
      <div className="container">
        <PageSectionHeader
          number="01" label="Articles & guides"
          title="Read before you buy."
          accent="Or call us — both work."
          sub="Plain-English writeups on the questions we hear in the yard every week."
          link={['All articles', 'resources.html#articles']}
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {posts.map((p, i) => (
            <article key={i} style={{
              background: 'var(--white)',
              border: '1px solid rgba(0,16,17,0.1)',
              display: 'flex', flexDirection: 'column',
              cursor: 'pointer',
            }}>
              <div style={{ position: 'relative', aspectRatio: '4 / 3', overflow: 'hidden', background: '#1a2548' }}>
                <img src={FENCE_IMG[p.img]} alt=""
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}/>
                <span className="mono" style={{
                  position: 'absolute', top: 14, left: 14,
                  background: 'var(--tangerine)', color: 'var(--ink)',
                  padding: '5px 10px', fontSize: 10, letterSpacing: '0.18em',
                  fontWeight: 700, textTransform: 'uppercase',
                }}>{p.tag}</span>
              </div>
              <div style={{ padding: 24, flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 className="display" style={{
                  margin: '0 0 14px', fontSize: 20, lineHeight: 1.15,
                }}>{p.title}</h3>
                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="mono" style={{
                    fontSize: 10, letterSpacing: '0.18em', color: 'var(--charcoal)', textTransform: 'uppercase',
                  }}>{p.read} read</span>
                  <span style={{
                    fontSize: 12, color: 'var(--laser-blue)', fontWeight: 500,
                    display: 'flex', alignItems: 'center', gap: 6,
                  }}>Read <ArrowRight size={12}/></span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const MaterialsComparison = () => (
  <section style={{ background: 'var(--parchment)', padding: '64px 0' }}>
    <div className="container">
      <PageSectionHeader
        number="02" label="Materials comparison"
        title="Side by side,"
        accent="no marketing fluff."
        sub="Pick the one that matches your job. Click through to the material page for full specs."
      />
      <div style={{
        border: '1px solid var(--ink)', overflow: 'hidden',
      }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1.2fr repeat(4, 1fr)',
          background: 'var(--ink)', color: 'var(--white)',
        }}>
          {['', 'Vinyl / PVC', 'Aluminum', 'Chain Link', 'Metal / DuraFence'].map((h, i) => (
            <div key={i} className="mono" style={{
              padding: '16px 18px',
              fontSize: 11, fontWeight: 700, letterSpacing: '0.22em',
              textTransform: 'uppercase',
              borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.15)',
            }}>{h}</div>
          ))}
        </div>
        {[
          ['Best for',       'Privacy', 'Pool + ornamental', 'Security + perimeter', 'Hurricane-zone privacy'],
          ['Heights',        '4–8 ft', '4–6 ft', '4–12 ft', '6–8 ft'],
          ['Maintenance',    'Wash with hose', 'None', 'None (galv) / wash (PVC-coated)', 'None'],
          ['Wind rating',    'Up to 130 mph', 'Up to 150 mph (HVHZ)', 'Up to 150 mph', '150 mph HVHZ'],
          ['Warranty',       'Lifetime', '20 yr finish', 'Galvanized rust-thru', '10 yr finish'],
          ['Lead time',      '1–2 days stocked', '1–2 days stocked', 'Same day', '1–2 weeks'],
          ['Starts at',      '$28 / ft', '$24.50 / ft', '$8.40 / ft', '$22 / ft'],
        ].map((row, ri) => (
          <div key={ri} style={{
            display: 'grid', gridTemplateColumns: '1.2fr repeat(4, 1fr)',
            background: ri % 2 === 0 ? 'var(--white)' : '#faf9f7',
            borderTop: '1px solid rgba(0,16,17,0.08)',
          }}>
            {row.map((cell, ci) => (
              <div key={ci} style={{
                padding: '16px 18px',
                fontSize: 13.5, lineHeight: 1.5,
                color: ci === 0 ? 'var(--charcoal)' : 'var(--ink)',
                fontWeight: ci === 0 ? 700 : 400,
                fontFamily: ci === 0 ? 'var(--mono)' : 'var(--sans)',
                letterSpacing: ci === 0 ? '0.06em' : 'normal',
                textTransform: ci === 0 ? 'uppercase' : 'none',
                borderLeft: ci === 0 ? 'none' : '1px solid rgba(0,16,17,0.08)',
              }}>{cell}</div>
            ))}
          </div>
        ))}
      </div>
      <div style={{ marginTop: 22, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
        {[
          ['Vinyl / PVC', 'vinyl.html'],
          ['Aluminum', 'aluminum.html'],
          ['Chain Link', 'chain-link.html'],
          ['Metal / DuraFence', 'metal.html'],
          ['EC Fence', 'ecfence.html'],
        ].map(([t, h]) => (
          <a key={t} href={h} className="mono" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '8px 14px',
            border: '1px solid var(--ink)',
            fontSize: 11, fontWeight: 700, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: 'var(--ink)',
          }}>
            {t}
            <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square"/>
            </svg>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const PoolCodeSection = () => (
  <SplitBlock
    kicker="03 — Florida Pool Code"
    title="Code-compliant"
    accent="enclosure profiles."
    body="Florida Building Code requires a 4 ft minimum barrier around residential pools, with specific opening, latch and self-closing requirements. We stock multiple aluminum and vinyl profiles that meet the spec — and we'll annotate the cut sheet for your AHJ."
    bullets={[
      '4 ft minimum height with no horizontal handhold below 45"',
      'Pickets spaced ≤ 1.75" apart for residential code',
      'Self-closing, self-latching gates ≥ 54" from grade',
      'Stamped manufacturer specs available on request',
    ]}
    image="https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=1600&q=80"
    imageRight={false}
  />
);

const DownloadsSection = () => (
  <section style={{ background: 'var(--white)', padding: '64px 0' }}>
    <div className="container">
      <PageSectionHeader
        number="04" label="Spec sheets & downloads"
        title="Send to your"
        accent="installer or AHJ."
        sub="PDF spec sheets for every system. Stamped versions available on request for commercial submissions."
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
        {[
          ['EC Fence — Exposure C Wind', 'PDF · 1.2 MB'],
          ['Aluminum 3/4/5 Rail Profiles', 'PDF · 980 KB'],
          ['DuraFence Aluminum Board', 'PDF · 1.4 MB'],
          ['Veka Vinyl — Privacy + Picket', 'PDF · 1.1 MB'],
          ['Chain Link Gauges & Mesh', 'PDF · 620 KB'],
          ['Florida Pool Code Profiles', 'PDF · 1.6 MB'],
        ].map(([t, meta], i) => (
          <a key={i} href="#" style={{
            display: 'flex', alignItems: 'center', gap: 16,
            padding: '18px 20px',
            border: '1px solid rgba(0,16,17,0.15)',
            background: 'var(--white)', color: 'var(--ink)',
          }}>
            <span style={{
              width: 40, height: 40, flexShrink: 0,
              background: 'var(--tangerine)', color: 'var(--ink)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 2v10m0 0l-4-4m4 4l4-4M3 14h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square"/>
              </svg>
            </span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 14.5, fontWeight: 500, color: 'var(--ink)' }}>{t}</div>
              <div className="mono" style={{ fontSize: 10, letterSpacing: '0.18em', color: 'var(--charcoal)', textTransform: 'uppercase', marginTop: 4 }}>{meta}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const ResourcesCTA = () => (
  <CTABand
    kicker="Still got questions?"
    title="Call the yard,"
    accent="or send the project."
    body="Two reps splitting calls, Mon–Fri 7am–4pm. Or send a sketch + ZIP and we'll come back inside a day."
    primary={['Request a quote', 'estimate.html']}
    secondary={['Call (239) 689-5496', 'tel:2396895496']}
  />
);

Object.assign(window, { ResourcesHero, ResourceArticles, MaterialsComparison, PoolCodeSection, DownloadsSection, ResourcesCTA });
