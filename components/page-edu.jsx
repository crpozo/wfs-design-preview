/* Fence Education Hub pages: Articles, FAQ, Materials Comparison, Pool Code */

/* ───── Articles & Guides ───── */

const ArticlesHero = () => (
  <PageHero
    eyebrow="Articles & Guides"
    title="Plain-English writeups"
    accent="on picking the right fence."
    subtitle="Written by the people who fabricate this stuff every day — sized to read in under 10 minutes."
    image={FENCE_IMG.aluminum}
  />
);

const ALL_ARTICLES = [
  { tag: 'Materials',   title: 'Top 4 Durable Fence Materials for SW Florida',           read: '6 min', img: 'aluminum' },
  { tag: 'How-to',      title: 'How to Measure for Fence Material in Florida',           read: '4 min', img: 'chainlink' },
  { tag: 'Pricing',     title: 'How Much Does a Fence Cost in Florida in 2026?',         read: '8 min', img: 'vinyl' },
  { tag: 'Code',        title: 'Florida Pool Code: Enclosure Requirements Explained',    read: '7 min', img: 'metal' },
  { tag: 'Comparison',  title: 'Aluminum vs Vinyl vs Chain Link — Picking a System',     read: '9 min', img: 'aluminum' },
  { tag: 'HVHZ',        title: 'Hurricane Zone Fencing: EC Fence vs DuraFence',          read: '5 min', img: 'ecfence' },
  { tag: 'Install',     title: 'When to Hire an Installer vs DIY Your Fence Project',   read: '6 min', img: 'vinyl' },
  { tag: 'Maintenance', title: 'Aluminum Fence Care in Salt Air: 4 Tips for Coastal FL',read: '4 min', img: 'aluminum' },
  { tag: 'Gates',       title: 'Pre-Hung Gates vs Field-Built: What to Order',          read: '5 min', img: 'chainlink' },
];

const ArticlesGrid = () => {
  const [filter, setFilter] = React.useState('All');
  const tags = ['All', ...Array.from(new Set(ALL_ARTICLES.map(a => a.tag)))];
  const visible = filter === 'All' ? ALL_ARTICLES : ALL_ARTICLES.filter(a => a.tag === filter);

  return (
    <section style={{ background: 'var(--white)', padding: '72px 0' }}>
      <div className="container">
        <PageSectionHeader
          number="01" label="Browse the archive"
          title="By category."
          accent="Filter and dig in."
          sub="All articles ship with a downloadable PDF for sharing with your contractor or AHJ."
        />

        {/* Filter chips */}
        <div style={{
          display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32,
          paddingBottom: 18, borderBottom: '1px solid rgba(0,16,17,0.12)',
        }}>
          {tags.map(t => {
            const active = t === filter;
            return (
              <button key={t} onClick={() => setFilter(t)} className="mono"
                style={{
                  padding: '6px 12px', fontSize: 10, letterSpacing: '0.18em',
                  textTransform: 'uppercase', fontWeight: 700,
                  border: '1px solid var(--ink)',
                  background: active ? 'var(--ink)' : 'transparent',
                  color: active ? 'var(--white)' : 'var(--ink)',
                  cursor: 'pointer',
                }}>{t}</button>
            );
          })}
          <span className="mono" style={{
            marginLeft: 'auto', alignSelf: 'center',
            fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase',
            color: 'var(--charcoal)',
          }}>{visible.length} article{visible.length === 1 ? '' : 's'}</span>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {visible.map((p, i) => (
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
                <h3 className="display" style={{ margin: '0 0 14px', fontSize: 20, lineHeight: 1.15 }}>{p.title}</h3>
                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="mono" style={{ fontSize: 10, letterSpacing: '0.18em', color: 'var(--charcoal)', textTransform: 'uppercase' }}>{p.read} read</span>
                  <span style={{ fontSize: 12, color: 'var(--laser-blue)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 6 }}>Read <ArrowRight size={12}/></span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const ArticlesCTA = () => (
  <CTABand
    kicker="Stay updated"
    title="New article every"
    accent="other Friday."
    body="No newsletter, no sign-up. Bookmark this page or check back when you're staring at a quote and need a sanity check."
    primary={['Talk to a rep', 'estimate.html']}
    secondary={['See FAQ', 'faq.html']}
  />
);

/* ───── FAQ ───── */

const FaqHero = () => (
  <PageHero
    eyebrow="Frequently asked"
    title="The questions we"
    accent="get every week."
    subtitle="Lead times, pricing, install policy, delivery, pickup — answered here, with phone numbers if you'd rather just call."
    image={FENCE_IMG.metal}
  />
);

const FaqCTA = () => (
  <CTABand
    kicker="Didn't find your question?"
    title="Call (239) 689-5496"
    accent="or send the project."
    body="Two reps splitting calls Mon–Fri 7am–4pm. Avg pickup under 18 seconds during business hours."
    primary={['Request a quote', 'estimate.html']}
    secondary={['Call the yard', 'tel:2396895496']}
  />
);

/* ───── Materials Comparison ───── */

const MaterialsCompHero = () => (
  <PageHero
    eyebrow="Materials Comparison"
    title="Side by side,"
    accent="no marketing fluff."
    subtitle="Aluminum vs vinyl vs chain link vs metal vs EC Fence — picked apart by spec, lead time and starting price."
    image={FENCE_IMG.vinyl}
  />
);

const MaterialsCompDeepDive = () => {
  const profiles = [
    {
      slug: 'vinyl', name: 'Vinyl / PVC', href: 'vinyl.html',
      tag: 'Veka-extruded · Lifetime warranty',
      bestFor: 'Backyard privacy, residential subdivisions',
      strength: 'No maintenance, no painting, no fading — the SW Florida default',
      caveat: 'Less impact resistance than aluminum or metal in hurricane wind',
    },
    {
      slug: 'aluminum', name: 'Aluminum', href: 'aluminum.html',
      tag: 'Powder-coat · 6063-T6',
      bestFor: 'Pool enclosures, ornamental perimeters, HVHZ',
      strength: 'Code-compliant out of the box, 150 mph wind rated, 20-yr finish',
      caveat: 'Open picket — limited privacy by design',
    },
    {
      slug: 'chain-link', name: 'Chain Link', href: 'chain-link.html',
      tag: 'Galvanized + Vinyl-coated',
      bestFor: 'Security, sports fields, industrial perimeters',
      strength: 'Lowest cost per LF, fastest install, ships same day',
      caveat: 'Industrial look — not for ornamental front yards',
    },
    {
      slug: 'metal', name: 'Metal / DuraFence', href: 'metal.html',
      tag: 'Aluminum board privacy',
      bestFor: 'Hurricane-zone privacy, modern residential',
      strength: 'Full 6–8 ft privacy with HVHZ wind rating — sleek board look',
      caveat: 'Longer lead time (1–2 weeks for color-matched runs)',
    },
    {
      slug: 'ecfence', name: 'EC Fence', href: 'ecfence.html',
      tag: 'Self-mating galvanized steel',
      bestFor: 'Coastal HVHZ, commercial perimeters, modern residential',
      strength: 'Engineered for Exposure C wind, 15-yr finish, salt-air tough',
      caveat: 'Quote-based pricing — call for run-specific cost',
    },
  ];

  return (
    <section style={{ background: 'var(--white)', padding: '72px 0' }}>
      <div className="container">
        <PageSectionHeader
          number="02" label="Profile by profile"
          title="One paragraph"
          accent="per material."
          sub="If you've got 30 seconds, this is the page."
        />
        <div style={{ display: 'grid', gap: 16 }}>
          {profiles.map((p, i) => (
            <a key={p.slug} href={p.href} style={{
              display: 'grid', gridTemplateColumns: '160px 1fr 1.4fr 1.4fr auto',
              gap: 28, alignItems: 'center',
              padding: '24px 28px',
              background: i % 2 === 0 ? 'var(--white)' : '#faf9f7',
              border: '1px solid rgba(0,16,17,0.12)',
              color: 'var(--ink)',
            }}>
              <div>
                <div className="display" style={{ fontSize: 22, lineHeight: 1.05 }}>{p.name}</div>
                <div className="mono" style={{
                  marginTop: 8, fontSize: 10, letterSpacing: '0.18em',
                  textTransform: 'uppercase', color: 'var(--tangerine)', fontWeight: 700,
                }}>{p.tag}</div>
              </div>
              <div>
                <div className="mono" style={{ fontSize: 10, letterSpacing: '0.18em', color: 'var(--charcoal)', textTransform: 'uppercase', marginBottom: 6 }}>Best for</div>
                <div style={{ fontSize: 13.5, lineHeight: 1.5 }}>{p.bestFor}</div>
              </div>
              <div>
                <div className="mono" style={{ fontSize: 10, letterSpacing: '0.18em', color: 'var(--charcoal)', textTransform: 'uppercase', marginBottom: 6 }}>Strength</div>
                <div style={{ fontSize: 13.5, lineHeight: 1.5 }}>{p.strength}</div>
              </div>
              <div>
                <div className="mono" style={{ fontSize: 10, letterSpacing: '0.18em', color: 'var(--charcoal)', textTransform: 'uppercase', marginBottom: 6 }}>Caveat</div>
                <div style={{ fontSize: 13.5, lineHeight: 1.5 }}>{p.caveat}</div>
              </div>
              <span style={{
                width: 38, height: 38, flexShrink: 0,
                border: '1px solid var(--ink)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square"/>
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const MaterialsCompCTA = () => (
  <CTABand
    kicker="Pick one. Get a quote."
    title="Send your dimensions —"
    accent="we'll come back in 24h."
    body="Don't have a material picked? Tell us the use case and your rep will recommend one based on stock and lead time."
    primary={['Request a quote', 'estimate.html']}
    secondary={['Call (239) 689-5496', 'tel:2396895496']}
  />
);

/* ───── Florida Pool Code ───── */

const PoolCodeHero = () => (
  <PageHero
    eyebrow="Florida Pool Code"
    title="Code-compliant"
    accent="enclosure profiles."
    subtitle="What the Florida Building Code says about residential pool barriers — and which of our stocked profiles meet it."
    image={FENCE_IMG.aluminum}
  />
);

const PoolCodeRequirements = () => {
  const reqs = [
    { code: 'FBC R 4501.17.1.1', title: 'Minimum height',           body: '4 ft (48") minimum measured on the side facing away from the pool. No horizontal handhold below 45" on the outside face.' },
    { code: 'FBC R 4501.17.1.2', title: 'Picket spacing',           body: 'Vertical pickets ≤ 1.75" apart (2.25" cluster allowed at decorative element). No openings between rails ≥ 4".' },
    { code: 'FBC R 4501.17.1.4', title: 'Gates — self-closing',     body: 'Every gate opening into the pool barrier must be self-closing and self-latching, with the latch handle ≥ 54" from grade.' },
    { code: 'FBC R 4501.17.1.5', title: 'Gate swing direction',     body: 'Pedestrian access gates must swing OUTWARD, away from the pool area.' },
    { code: 'FBC R 4501.17.1.6', title: 'Latch release location',   body: 'If the latch release is < 54" from grade, it must be on the pool side, no openings > 0.5" within 18" of the release.' },
    { code: 'FBC R 4501.17.1.9', title: 'Wall as barrier',          body: 'If a wall of the dwelling serves as part of the barrier, doors leading to the pool need an audible alarm OR a self-closing/self-latching mechanism.' },
  ];

  return (
    <section style={{ background: 'var(--white)', padding: '72px 0' }}>
      <div className="container">
        <PageSectionHeader
          number="01" label="The actual rules"
          title="What FBC R 4501.17"
          accent="actually says."
          sub="Excerpts paraphrased — pull the sealed spec from your AHJ for permit submissions."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
          {reqs.map((r, i) => (
            <article key={i} style={{
              background: 'var(--white)', padding: 28,
              border: '1px solid rgba(0,16,17,0.12)',
            }}>
              <div className="mono" style={{
                fontSize: 10, letterSpacing: '0.22em',
                color: 'var(--tangerine)', fontWeight: 700,
                textTransform: 'uppercase', marginBottom: 12,
              }}>{r.code}</div>
              <h3 className="display" style={{ fontSize: 22, lineHeight: 1.1, margin: '0 0 12px' }}>{r.title}</h3>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'var(--charcoal)' }}>{r.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const PoolCodeProfiles = () => {
  const profiles = [
    { slug: 'aluminum', name: 'Aluminum 4-Rail', tag: 'Pool code · Pickets ≤ 1.75"', href: 'aluminum.html', img: 'aluminum' },
    { slug: 'vinyl',    name: 'Vinyl Picket',     tag: 'Pool code · Self-closing gates', href: 'vinyl.html',  img: 'vinyl' },
    { slug: 'ecfence',  name: 'EC Fence',         tag: 'Pool code · HVHZ Exposure C',  href: 'ecfence.html',img: 'ecfence' },
  ];

  return (
    <section style={{ background: 'var(--parchment)', padding: '72px 0' }}>
      <div className="container">
        <PageSectionHeader
          number="02" label="Profiles we stock"
          title="Three systems"
          accent="that meet the code."
          sub="All three ship with self-closing gate hardware kits packed by opening."
          link={['Materials comparison', 'materials-comparison.html']}
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {profiles.map((p, i) => (
            <a key={p.slug} href={p.href} style={{
              display: 'block', textDecoration: 'none', color: 'var(--ink)',
              background: 'var(--white)', border: '1px solid rgba(0,16,17,0.12)',
            }}>
              <div style={{ position: 'relative', aspectRatio: '4 / 3', overflow: 'hidden', background: '#1a2548' }}>
                <img src={FENCE_IMG[p.img]} alt=""
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}/>
                <span className="mono" style={{
                  position: 'absolute', top: 14, left: 14,
                  background: 'var(--tangerine)', color: 'var(--ink)',
                  padding: '5px 10px', fontSize: 10, letterSpacing: '0.18em',
                  fontWeight: 700, textTransform: 'uppercase',
                }}>0{i+1} · Code</span>
              </div>
              <div style={{ padding: 24 }}>
                <h3 className="display" style={{ margin: '0 0 8px', fontSize: 22, lineHeight: 1.1 }}>{p.name}</h3>
                <div className="mono" style={{ fontSize: 10, letterSpacing: '0.18em', color: 'var(--charcoal)', textTransform: 'uppercase' }}>{p.tag}</div>
                <div style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 600, fontFamily: 'var(--mono)', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink)' }}>
                  Explore
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square"/></svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const PoolCodeChecklist = () => (
  <section style={{ background: 'var(--ink)', color: 'var(--parchment)', padding: '72px 0' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 56, alignItems: 'start' }}>
        <div>
          <h2 className="display" style={{
            margin: 0, fontSize: 'clamp(28px, 3vw, 40px)',
            lineHeight: 1, letterSpacing: '-0.02em',
          }}>
            Before you<br/>
            <span style={{ color: 'var(--tangerine)' }}>file the permit.</span>
          </h2>
          <p style={{ marginTop: 18, fontSize: 14.5, lineHeight: 1.6, color: 'var(--alice-blue)', maxWidth: 360 }}>
            Run this list against your drawing. If anything's a question, your rep can pull a sealed manufacturer spec before you submit.
          </p>
        </div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 14 }}>
          {[
            'Height measured from the OUTSIDE face of the barrier ≥ 48"',
            'Picket spacing ≤ 1.75" with no horizontal climbing surface < 45"',
            'All gates self-closing with self-latching mechanism',
            'Latch handle on outside ≥ 54" from grade (or on pool side)',
            'Gates swing outward, away from the pool',
            'No openings ≥ 4" between rails or between picket and rail',
            'Door from house to pool area has alarm OR self-closing latch',
            'Pull sealed manufacturer spec PDF for AHJ submittal',
          ].map((line, i) => (
            <li key={i} style={{
              display: 'flex', alignItems: 'flex-start', gap: 14,
              fontSize: 14.5, lineHeight: 1.55,
            }}>
              <span style={{
                flexShrink: 0, marginTop: 5,
                width: 16, height: 16,
                border: '1.5px solid var(--tangerine)',
                background: 'transparent',
              }}/>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

const PoolCodeCTA = () => (
  <CTABand
    kicker="Annotated cut sheet"
    title="Send us your"
    accent="permit drawing."
    body="We'll annotate your cut sheet with the matching picket / latch / gate-swing specs from the manufacturer so your AHJ has everything in one document."
    primary={['Request a quote', 'estimate.html']}
    secondary={['Call the yard', 'tel:2396895496']}
  />
);

Object.assign(window, {
  ArticlesHero, ArticlesGrid, ArticlesCTA,
  FaqHero, FaqCTA,
  MaterialsCompHero, MaterialsCompDeepDive, MaterialsCompCTA,
  PoolCodeHero, PoolCodeRequirements, PoolCodeProfiles, PoolCodeChecklist, PoolCodeCTA,
});
