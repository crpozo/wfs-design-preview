/* Fence Education Hub pages: Articles, FAQ, Materials Comparison, Pool Code */

/* ───── Articles & Guides ───── */

const ArticlesHero = () => (
  <PageHero
    eyebrow="Articles & Guides"
    title="Plain-English writeups"
    accent="on picking the right fence."
    subtitle="Written by the people who fabricate this stuff every day, sized to read in under 10 minutes."
    image={FENCE_IMG.aluminum}
  />
);

const ALL_ARTICLES = [
  { tag: 'Materials',   title: 'Top 4 Durable Fence Materials for SW Florida',           read: '6 min', img: 'aluminum' },
  { tag: 'How-to',      title: 'How to Measure for Fence Material in Florida',           read: '4 min', img: 'chainlink' },
  { tag: 'Pricing',     title: 'How Much Does a Fence Cost in Florida in 2026?',         read: '8 min', img: 'vinyl' },
  { tag: 'Code',        title: 'Florida Pool Code: Enclosure Requirements Explained',    read: '7 min', img: 'metal' },
  { tag: 'Comparison',  title: 'Aluminum vs Vinyl vs Chain Link, Picking a System',     read: '9 min', img: 'aluminum' },
  { tag: 'HVHZ',        title: 'Hurricane Zone Fencing: EC Fence vs DuraFence',          read: '5 min', img: 'ecfence' },
  { tag: 'Install',     title: 'When to Hire an Installer vs DIY Your Fence Project',   read: '6 min', img: 'vinyl' },
  { tag: 'Maintenance', title: 'Aluminum Fence Care in Salt Air: 4 Tips for Coastal FL',read: '4 min', img: 'aluminum' },
  { tag: 'Gates',       title: 'Ready-to-assemble Gates vs Field-Built: What to Order',          read: '5 min', img: 'chainlink' },
];

/* Magazine-style featured row: one large story + two stacked side cards */
const ArticlesFeatured = () => {
  const t = useT();
  const [feat, side1, side2] = [ALL_ARTICLES[0], ALL_ARTICLES[3], ALL_ARTICLES[5]];
  const Card = ({ a, big = false }) => (
    <a href="#featured" style={{
      position: 'relative', display: 'flex', alignItems: 'flex-end',
      borderRadius: 24, overflow: 'hidden',
      background: '#263166', textDecoration: 'none',
      minHeight: big ? 'clamp(380px, 56vh, 560px)' : 'clamp(180px, 26vh, 268px)',
      flex: 1,
    }}>
      <img src={FENCE_IMG[a.img]} alt="" style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
      }}/>
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(38, 49, 103,0.05) 30%, rgba(38, 49, 103,0.85) 100%)',
      }}/>
      <div style={{ position: 'relative', padding: big ? 'clamp(24px, 3vw, 44px)' : 22 }}>
        <h2 className="display" style={{
          margin: 0, color: 'var(--white)',
          fontSize: big ? 'clamp(20px, 2.1vw, 32px)' : 'clamp(15px, 1.2vw, 18px)',
          lineHeight: 1.18, letterSpacing: '-0.01em', fontWeight: 700,
          textTransform: 'capitalize',
        }}>{a.title}</h2>
      </div>
    </a>
  );
  return (
    <section style={{ background: 'var(--white)', padding: '120px 0 0' }}>
      <div className="container">
        {/* White editorial break between the navy banner and the dark cards */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          gap: 24, flexWrap: 'wrap', marginBottom: 36,
        }}>
          <h2 className="display" style={{
            margin: 0, fontSize: 'clamp(26px, 2.8vw, 38px)', fontWeight: 800,
            letterSpacing: '-0.015em', color: 'var(--ink)',
          }}>
            {t('Start with', 'Empieza con')}{' '}
            <span style={{ color: 'var(--tangerine)' }}>{t('these guides.', 'estas guías.')}</span>
          </h2>
          <p style={{
            margin: 0, maxWidth: 380, fontSize: 14, lineHeight: 1.55,
            color: 'var(--charcoal)',
          }}>
            {t('The three reads that answer most first-time fence questions.',
               'Las tres lecturas que responden la mayoría de las dudas de primera vez.')}
          </p>
        </div>
        <div className="wfs-articles-hero" style={{
          display: 'grid', gridTemplateColumns: '1.7fr 1fr', gap: 18, alignItems: 'stretch',
        }}>
          <Card a={feat} big />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <Card a={side1} />
            <Card a={side2} />
          </div>
        </div>
      </div>
    </section>
  );
};

/* Grid card: clean by default, hover reveals author + category detail */
const ArticleCard = ({ p }) => {
  const t = useT();
  const [hover, setHover] = React.useState(false);
  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', flexDirection: 'column',
        cursor: 'pointer', borderRadius: 20, overflow: 'hidden',
        background: 'var(--white)',
        border: '1px solid rgba(0,16,17,0.08)',
        transform: hover ? 'translateY(-4px)' : 'none',
        boxShadow: hover ? '0 22px 44px -22px rgba(38, 49, 103,0.35)' : 'none',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      }}>
      <div style={{ position: 'relative', aspectRatio: '16 / 10', overflow: 'hidden', background: '#263166' }}>
        <img src={FENCE_IMG[p.img]} alt=""
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
            transform: hover ? 'scale(1.04)' : 'scale(1)', transition: 'transform 0.5s ease',
          }}/>
      </div>
      <div style={{ padding: '18px 20px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{
          margin: 0, fontSize: 15.5, fontWeight: 700, lineHeight: 1.35,
          color: 'var(--ink)', letterSpacing: '-0.005em', textTransform: 'capitalize',
        }}>{p.title}</h3>
      </div>
    </article>
  );
};

/* Featured posts: filter chips + rounded magazine cards */
const ArticlesGrid = () => {
  const t = useT();
  const [filter, setFilter] = React.useState('All');
  const tags = ['All', ...Array.from(new Set(ALL_ARTICLES.map(a => a.tag)))];
  const visible = filter === 'All' ? ALL_ARTICLES : ALL_ARTICLES.filter(a => a.tag === filter);

  return (
    <section id="featured" style={{ background: 'var(--white)', padding: '120px 0' }}>
      <div className="container">
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          gap: 24, flexWrap: 'wrap', marginBottom: 28,
        }}>
          <h2 className="display" style={{
            margin: 0, fontSize: 'clamp(26px, 2.8vw, 38px)', fontWeight: 800,
            letterSpacing: '-0.015em', color: 'var(--ink)',
          }}>{t('Featured Posts', 'Artículos destacados')}</h2>
          <span className="mono" style={{
            fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase',
            color: 'var(--charcoal)',
          }}>{visible.length} {t('articles', 'artículos')}</span>
        </div>

        {/* Filter chips */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 36 }}>
          {tags.map(tag => {
            const active = tag === filter;
            return (
              <button key={tag} onClick={() => setFilter(tag)}
                style={{
                  padding: '8px 16px', borderRadius: 999,
                  fontSize: 12.5, fontWeight: 600, fontFamily: 'var(--sans)',
                  border: '1px solid ' + (active ? 'var(--ink)' : 'rgba(0,16,17,0.18)'),
                  background: active ? 'var(--ink)' : 'var(--white)',
                  color: active ? 'var(--white)' : 'var(--ink)',
                  cursor: 'pointer', transition: 'all 0.15s ease',
                }}>{tag}</button>
            );
          })}
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
          {visible.map((p, i) => <ArticleCard key={p.title} p={p} />)}
        </div>
      </div>
    </section>
  );
};



/* ───── FAQ ───── */

const FaqHero = () => (
  <PageHero
    eyebrow="Frequently asked"
    title="The questions we"
    accent="get every week."
    subtitle="Lead times, pricing, install policy, delivery, pickup, answered here, with phone numbers if you'd rather just call."
    image={FENCE_IMG.metal}
  />
);

const FaqCTA = () => (
  <CTABand
    kicker="Didn't find your question?"
    title="Call (239) 689-5496"
    accent="or send the project."
    body="Two reps splitting calls Mon-Sat 7am-4pm during business hours."
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
    subtitle="Aluminum vs vinyl vs chain link vs metal vs EC Fence, picked apart by spec, lead time and starting price."
    image={FENCE_IMG.vinyl}
  />
);

const MaterialsCompDeepDive = () => {
  const profiles = [
    {
      slug: 'vinyl', name: 'Vinyl / PVC', href: 'vinyl.html',
      tag: 'Veka-extruded · Lifetime warranty',
      bestFor: 'Backyard privacy, residential subdivisions',
      strength: 'No maintenance, no painting, no fading, the SW Florida default',
      caveat: 'Less impact resistance than aluminum or metal in hurricane wind',
    },
    {
      slug: 'aluminum', name: 'Aluminum', href: 'aluminum.html',
      tag: 'Powder-coat · 6063-T6',
      bestFor: 'Pool enclosures, ornamental perimeters, HVHZ',
      strength: 'Code-compliant out of the box, 150 mph wind rated, 20-yr finish',
      caveat: 'Open picket, limited privacy by design',
    },
    {
      slug: 'chain-link', name: 'Chain Link', href: 'chain-link.html',
      tag: 'Galvanized + Vinyl-coated',
      bestFor: 'Security, sports fields, industrial perimeters',
      strength: 'Lowest cost per LF, fastest install, ships same day',
      caveat: 'Industrial look, not for ornamental front yards',
    },
    {
      slug: 'metal', name: 'Metal / DuraFence', href: 'metal.html',
      tag: 'Aluminum board privacy',
      bestFor: 'Hurricane-zone privacy, modern residential',
      strength: 'Full 6-8 ft privacy with HVHZ wind rating, sleek board look',
      caveat: 'Longer lead time (1-2 weeks for color-matched runs)',
    },
    {
      slug: 'ecfence', name: 'EC Fence', href: 'ecfence.html',
      tag: 'Self-mating galvanized steel',
      bestFor: 'Coastal HVHZ, commercial perimeters, modern residential',
      strength: 'Engineered for Exposure C wind, 15-yr finish, salt-air tough',
      caveat: 'Quote-based pricing, call for run-specific cost',
    },
  ];

  return (
    <section style={{ background: 'var(--white)', padding: '120px 0' }}>
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
              background: i % 2 === 0 ? 'var(--white)' : '#ffffff',
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
    title="Send your dimensions"
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
    subtitle="What the Florida Building Code says about residential pool barriers, and which of our stocked profiles meet it."
    image={FENCE_IMG.aluminum}
  />
);

const PoolCodeRequirements = () => {
  const reqs = [
    { code: 'FBC R 4501.17.1.1', title: 'Minimum height',           body: '4 ft (48") minimum measured on the side facing away from the pool. No horizontal handhold below 45" on the outside face.' },
    { code: 'FBC R 4501.17.1.2', title: 'Picket spacing',           body: 'Vertical pickets ≤ 1.75" apart (2.25" cluster allowed at decorative element). No openings between rails ≥ 4".' },
    { code: 'FBC R 4501.17.1.4', title: 'Gates, self-closing',     body: 'Every gate opening into the pool barrier must be self-closing and self-latching, with the latch handle ≥ 54" from grade.' },
    { code: 'FBC R 4501.17.1.5', title: 'Gate swing direction',     body: 'Pedestrian access gates must swing OUTWARD, away from the pool area.' },
    { code: 'FBC R 4501.17.1.6', title: 'Latch release location',   body: 'If the latch release is < 54" from grade, it must be on the pool side, no openings > 0.5" within 18" of the release.' },
    { code: 'FBC R 4501.17.1.9', title: 'Wall as barrier',          body: 'If a wall of the dwelling serves as part of the barrier, doors leading to the pool need an audible alarm OR a self-closing/self-latching mechanism.' },
  ];

  return (
    <section style={{ background: 'var(--white)', padding: '120px 0' }}>
      <div className="container">
        <PageSectionHeader
          number="01" label="The actual rules"
          title="What FBC R 4501.17"
          accent="actually says."
          sub="Excerpts paraphrased, pull the sealed spec from your AHJ for permit submissions."
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
    <section style={{ background: 'var(--parchment)', padding: '120px 0' }}>
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
              <div style={{ position: 'relative', aspectRatio: '4 / 3', overflow: 'hidden', background: '#263166' }}>
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
  <section style={{ background: 'var(--ink)', color: 'var(--parchment)', padding: '120px 0' }}>
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
  ArticlesHero, ArticlesFeatured, ArticlesGrid,
  FaqHero, FaqCTA,
  MaterialsCompHero, MaterialsCompDeepDive, MaterialsCompCTA,
  PoolCodeHero, PoolCodeRequirements, PoolCodeProfiles, PoolCodeChecklist, PoolCodeCTA,
});
