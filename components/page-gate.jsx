/* Gate detail pages, same component pattern as page-material.jsx */

const GATE_DATA = {
  single: {
    slug: 'single',
    name: 'Single Swing',
    tag: 'Walk gates · Pedestrian access',
    heroTitle: 'Single-swing gates.',
    heroAccent: 'Walk-through and pedestrian openings.',
    heroBody: 'Standard pedestrian and entry gates from 3 to 6 ft wide. Mechanically assembled or welded, with hardware to match every fence material we stock, every kit ships with a self-latching gravity latch and padlockable hasp.',
    heroImg: 'assets/SINGLE_SWING_GATE.png',
    bestFor: 'Walk gates, residential side-yards, pool enclosures',
    profiles: [
      { name: 'Standard Walk',       tag: 'Residential',    notes: '3-4 ft wide mechanical kit, gravity latch + padlock hasp included.' },
      { name: 'Estate Pedestrian',   tag: 'Ornamental',     notes: '4-6 ft welded heavy frame with decorative top option.' },
      { name: 'Pool-Code Gate',      tag: 'Code Compliant', notes: 'Self-closing, self-latching, picket spacing ≤ 1.75".' },
      { name: 'Industrial Walk',     tag: 'Commercial',     notes: 'Galv steel frame, heavy hinges, key-coded lockable handle.' },
    ],
    specs: [
      ['Widths',     '3 ft, 4 ft, 5 ft, 6 ft (custom on request)'],
      ['Heights',    '4 ft, 5 ft, 6 ft (matches fence height)'],
      ['Material',   'Chain link, aluminum, vinyl, EC Fence, to match run'],
      ['Hardware',   'Self-latching gravity latch + padlock hasp included'],
      ['Automation', 'Pre-engineered for LiftMaster actuator add-on'],
      ['Lead time',  '24h or less on stocked kits · 3-5 days fabricated'],
      ['Starts at',  'Quote-based'],
    ],
    useCases: [
      ['Pedestrian access',   'Side-yard, gardens and walk-through openings where a driveway gate is too much.'],
      ['Pool code enclosure', 'Self-closing, self-latching profiles meet Florida pool code requirements.'],
      ['Tight spaces',        'Single panel works where double-swing arc clearance is unavailable.'],
    ],
    contractor: {
      tag: 'Walk gates · Trade-account pickup',
      heroBody: 'Ready-to-assemble kits or in-house welded custom from 3 to 6 ft. Hardware kits packed and labeled per opening. Trade accounts after the second order, pull up to the bay, walk out fast.',
      bestFor: 'Volume residential, code-compliant pool runs, will-call pickup',
      useCases: [
        ['Trade volume',         'Stocked widths for repeat residential jobs. Ready-to-assemble kits cut field install time.'],
        ['Code-compliant builds','Pool-code profiles meet FBC R 4501.17, paperwork ready for AHJ.'],
        ['Will-call staging',    'Order before 2pm, pickup ready by 4pm. Hardware packed per opening.'],
      ],
    },
  },
  double: {
    slug: 'double',
    name: 'Double Swing',
    tag: 'Driveway access · Symmetrical',
    heroTitle: 'Double-swing gates.',
    heroAccent: 'Driveway openings, single-day install.',
    heroBody: 'Symmetrical driveway-width gates from 8 to 16 ft total opening. Ready-to-assemble with drop rod, gate latch and stainless hardware kit packed per opening, single-day install for most layouts.',
    heroImg: 'assets/DOUBLE_GATE.png',
    bestFor: 'Residential driveways, estate entries, vehicle access',
    profiles: [
      { name: 'Standard Drive',      tag: 'Residential',    notes: '8-12 ft total, mechanically assembled, drop rod + center latch.' },
      { name: 'Estate Pair',         tag: 'Luxury',         notes: '10-16 ft welded heavy, decorative scrollwork or arched top.' },
      { name: 'Privacy Drive',       tag: 'Solid',          notes: 'Full vinyl or DuraFence panels, matched to privacy run.' },
      { name: 'Commercial Drive',    tag: 'Heavy-Duty',     notes: 'Up to 16 ft welded steel, sized for higher cycle counts.' },
    ],
    specs: [
      ['Widths',     '8 ft, 10 ft, 12 ft, 14 ft, 16 ft total opening'],
      ['Heights',    '4 ft, 5 ft, 6 ft, 8 ft (matches fence height)'],
      ['Material',   'Chain link, aluminum, vinyl, EC Fence, DuraFence'],
      ['Hardware',   'Hinge sets, drop rod, center latch, stainless fasteners'],
      ['Automation', 'Dual-leaf LiftMaster kit with photo-eye + keypad add-on'],
      ['Lead time',  '24h or less on stocked kits · 3-5 days fabricated'],
      ['Starts at',  'Quote-based'],
    ],
    useCases: [
      ['Wide driveways',       'Two leaves meeting in the middle clear 8-16 ft openings cleanly.'],
      ['Estate entries',       'Symmetrical look reads as a formal main entry, more presence than single.'],
      ['Vehicle + pedestrian', 'Open one leaf for walk-in, both for vehicle access.'],
    ],
    contractor: {
      tag: 'Driveway gates · Ready-to-assemble kits',
      heroBody: 'Ready-to-assemble driveway gates from 8 to 16 ft, welded in Fort Myers, drop rod + hardware kit packed per opening. Trade accounts get a dedicated rep + job-site dispatch.',
      bestFor: 'Volume residential drives, custom welded estate runs, trade kits',
      useCases: [
        ['Volume residential', 'Same-day pickup on stocked 10/12/14 ft openings, cuts site time.'],
        ['Custom welded fab',  'Estate runs and non-stock widths welded in-house in 5-7 days.'],
        ['Trade dispatch',     'Job-site delivery across Lee, Collier, Charlotte and Hendry.'],
      ],
    },
  },
  sliding: {
    slug: 'sliding',
    name: 'Sliding Gates',
    tag: 'Track-mounted · Space-saving',
    heroTitle: 'Sliding gates.',
    heroAccent: 'For tight or graded openings.',
    heroBody: 'Track-mounted sliding gates for tight or graded driveways where a swing arc won\'t work. Manual or automated with operator and safety package, slides parallel to the fence.',
    heroImg: 'assets/SLIDING_GATE.png',
    bestFor: 'Tight residential driveways, sloped sites, repeat daily use',
    profiles: [
      { name: 'Galvanized Mesh',     tag: 'Standard',    notes: 'V-track mounted chain-link mesh with twin rollers.' },
      { name: 'Vinyl-Coated Black',  tag: 'Residential', notes: 'PVC-coated mesh disappears against landscaping.' },
      { name: 'Privacy Slide',       tag: 'Solid',       notes: 'Full vinyl or DuraFence panel on V-track.' },
      { name: 'Automated Kit',       tag: 'Powered',     notes: 'LiftMaster slide operator + photo-eye + keypad bundle.' },
    ],
    specs: [
      ['Widths',     '8 ft, 10 ft, 12 ft, 14 ft, 16 ft, 18 ft openings'],
      ['Heights',    '4 ft, 5 ft, 6 ft, 8 ft'],
      ['Material',   'Galv chain link, vinyl-coated, EC Fence, DuraFence'],
      ['Track',      'Galvanized V-track or pipe-track + end stops included'],
      ['Wind rating','130 mph closed · 150 mph HVHZ on heavy commercial spec'],
      ['Lead time',  '24h or less on stocked kits · 2-3 weeks custom'],
      ['Starts at',  'Quote-based'],
    ],
    useCases: [
      ['Limited swing clearance', 'Slides parallel to the fence, no arc to block walkways or planters.'],
      ['Sloped driveways',        'Ground track handles up to 3% grade without binding.'],
      ['Repeat daily use',        'Manual operation is two-finger easy; automation kits available.'],
    ],
    contractor: {
      tag: 'Track-mounted · Trade-account fab',
      heroBody: 'V-track and pipe-track slide gates fabricated for tight residential drives and sloped lots. Trade accounts, dedicated rep, will-call staging, kit ships with track, rollers and end stops.',
      bestFor: 'Tight residential lots, sloped driveway jobs, repeat HOA work',
      useCases: [
        ['HOA + subdivision', 'Repeat 12-14 ft openings with uniform finish across the run.'],
        ['Grade-change sites','V-track handles up to 3% grade without high-low binding.'],
        ['Will-call staging', 'Pull to bay, walk out with the gate + track + rollers staged.'],
      ],
    },
  },
  cantilever: {
    slug: 'cantilever',
    name: 'Cantilever',
    tag: 'No ground track · Up to 50 ft',
    heroTitle: 'Cantilever gates.',
    heroAccent: 'Counter-balanced, no ground track.',
    heroBody: 'Counter-balanced rolling gates with no ground track, ideal for sites with sand, debris or grade change. Internal V-rollers and an overhang section that floats clear of the driveway. Single openings up to 50 ft.',
    heroImg: 'assets/CANTILEVER.png',
    bestFor: 'Industrial yards, coastal sites, long openings',
    profiles: [
      { name: 'Galvanized Frame',    tag: 'Industrial',   notes: 'Hot-dip galv welded frame with V-rollers, mesh or vinyl-coated.' },
      { name: 'Vinyl-Coated Black',  tag: 'Coastal',      notes: 'Salt-spray-rated rollers, black PVC-coated mesh face.' },
      { name: 'Solid Privacy',       tag: 'Commercial',   notes: 'DuraFence aluminum board face on welded cantilever frame.' },
      { name: 'Long-Span Custom',    tag: 'Bespoke',      notes: 'Up to 50 ft single opening or telescoping for wider runs.' },
    ],
    specs: [
      ['Widths',     '14 ft to 50 ft single openings (wider on telescoping)'],
      ['Heights',    '6 ft, 8 ft, 10 ft, 12 ft (industrial)'],
      ['Material',   'Galv chain link, vinyl-coated, DuraFence, EC Fence'],
      ['Overhang',   '50% of opening on receiving side (30 ft → 15 ft)'],
      ['Wind rating','Up to 150 mph HVHZ on mesh or vinyl-coated specs'],
      ['Lead time',  '3-4 weeks fabricated in Fort Myers'],
      ['Starts at',  'Quote-based'],
    ],
    useCases: [
      ['No ground track',      'Nothing in the driveway path, no debris jam, no track to clear.'],
      ['Sandy / coastal sites','Salt-spray-rated rollers replace exposed ground track.'],
      ['Long openings',        'Up to 50 ft single openings, typical for industrial yards.'],
    ],
    contractor: {
      tag: 'Industrial · Phased delivery',
      heroBody: 'Counter-balanced cantilever frames welded in Fort Myers, up to 50 ft single openings. Phased deliveries against your release schedule, sealed manufacturer specs available for AHJ submission.',
      bestFor: 'Industrial perimeters, commercial yards, HVHZ contracts',
      useCases: [
        ['Industrial perimeters', '1.4+ mile runs phased against tight release windows.'],
        ['HVHZ contracts',        'Sealed wind-load specs for 150 mph zones, AHJ-ready.'],
        ['Custom span fab',       'Telescoping or follower-gate config for spans wider than 50 ft.'],
      ],
    },
  },
  rolling: {
    slug: 'rolling',
    name: 'Rolling Gate',
    tag: 'Industrial V-track · High-cycle',
    heroTitle: 'Rolling gates.',
    heroAccent: 'Industrial V-track and rollers.',
    heroBody: 'Industrial rolling gates with V-track and ground rollers, built for high-cycle commercial use, secured perimeters and yards. Heavy galvanized frame with stainless-steel hardware, rated for hundreds of cycles a day.',
    heroImg: 'assets/ROLLING_GATE.png',
    bestFor: 'Commercial perimeters, industrial yards, self-storage',
    profiles: [
      { name: 'V-Track Standard',    tag: 'Industrial',  notes: 'Heavy galvanized frame on V-track with stainless rollers.' },
      { name: 'High-Cycle Heavy',    tag: 'Continuous-Duty', notes: 'Bearings and frame spec\'d for continuous-duty cycles.' },
      { name: 'Vinyl-Coated Visual', tag: 'Visual',      notes: 'PVC-coated black mesh, softer look for visual perimeters.' },
      { name: 'Automated Kit',       tag: 'Powered',     notes: 'LiftMaster Elite slide operator with loop-detect + safety edges.' },
    ],
    specs: [
      ['Widths',     '16 ft, 20 ft, 24 ft, 30 ft openings (custom on request)'],
      ['Heights',    '6 ft, 8 ft, 10 ft, 12 ft'],
      ['Material',   'Galv chain link mesh on welded heavy steel frame'],
      ['Track',      'V-track kit + end stops + follower rollers + tensioner'],
      ['Cycle rating','400 cycles/day standard · continuous-duty heavy frame'],
      ['Lead time',  '3-4 weeks fabricated · stocked widths 1-2 weeks'],
      ['Starts at',  'Quote-based'],
    ],
    useCases: [
      ['Commercial perimeters', 'Industrial yards, self-storage, transit hubs.'],
      ['High-cycle use',        'Hundreds of cycles per day, bearings and frame spec\'d for it.'],
      ['Heavy vehicle access',  'Wide spans for tractor-trailer and box-truck access.'],
    ],
    contractor: {
      tag: 'Continuous-duty · RFQ welcome',
      heroBody: 'Heavy industrial rolling gates welded to spec, continuous-duty bearings, V-track and stainless hardware. Phased delivery, RFQ process, dedicated commercial rep.',
      bestFor: 'Self-storage, transit hubs, industrial yards, commercial perimeters',
      useCases: [
        ['Self-storage rollouts','Multi-opening releases with phased delivery and consistent finish.'],
        ['Continuous-duty fab', 'Bearings and frame spec\'d for high-cycle commercial operations.'],
        ['Sealed wind ratings', 'HVHZ-rated configurations with stamped specs for AHJ submission.'],
      ],
    },
  },
};

/* ───── Sections (same shape as MaterialPage) ───── */

const GateHero = ({ data }) => (
  <PageHero
    eyebrow={data.tag}
    title={data.heroTitle}
    accent={data.heroAccent}
    subtitle={data.heroBody}
    image={data.heroImg}
  />
);

const GateQuickFacts = ({ data }) => (
  <section style={{ background: 'var(--white)', padding: '64px 0', borderBottom: '1px solid rgba(0,16,17,0.08)' }}>
    <div className="container">
      <FeatureRow items={[
        ['Best for',   data.bestFor],
        ['Material',   data.specs.find(s => s[0] === 'Material')?.[1] || '—'],
        ['Starts at',  data.specs.find(s => s[0] === 'Starts at')?.[1] || '—'],
        ['Lead time',  data.specs.find(s => s[0] === 'Lead time')?.[1] || '—'],
      ]}/>
    </div>
  </section>
);

const GateProfiles = ({ data }) => (
  <section style={{ background: 'var(--white)', padding: '88px 0' }}>
    <div className="container">
      <PageSectionHeader
        number="01" label="Profiles & configurations"
        title={`${data.name}`}
        accent="four ways to spec it."
        sub="We stock all four configurations. Custom widths, heights and finishes available on request."
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
        {data.profiles.map((p, i) => (
          <article key={p.name} style={{
            background: 'var(--white)', padding: 24,
            border: '1px solid rgba(0,16,17,0.12)',
          }}>
            <div className="mono" style={{
              fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase',
              color: 'var(--tangerine)', fontWeight: 700, marginBottom: 14,
            }}>0{i+1} · {p.tag}</div>
            <h3 className="display" style={{ margin: '0 0 12px', fontSize: 22, lineHeight: 1.1 }}>{p.name}</h3>
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.55, color: 'var(--charcoal)' }}>{p.notes}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const GateSpecs = ({ data }) => (
  <section style={{ background: 'var(--parchment)', padding: '88px 0' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 56, alignItems: 'start' }}>
        <div>
          <h2 className="display" style={{ margin: 0, fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: 1, letterSpacing: '-0.02em' }}>
            Real numbers,<br/>
            <span style={{ color: 'var(--tangerine)' }}>no marketing.</span>
          </h2>
          <p style={{ marginTop: 20, fontSize: 14, lineHeight: 1.6, color: 'var(--charcoal)', maxWidth: 320 }}>
            Need a sealed manufacturer spec? Ask your rep, we'll send the PDF before quote.
          </p>
        </div>
        <div style={{ background: 'var(--white)', border: '1px solid var(--ink)' }}>
          {data.specs.map(([k, v], i) => (
            <div key={k} style={{
              display: 'grid', gridTemplateColumns: '220px 1fr',
              borderBottom: i === data.specs.length - 1 ? 'none' : '1px solid rgba(0,16,17,0.08)',
            }}>
              <div className="mono" style={{
                padding: '14px 18px',
                fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'var(--charcoal)', fontWeight: 700,
                background: '#ffffff',
              }}>{k}</div>
              <div style={{ padding: '14px 18px', fontSize: 14, color: 'var(--ink)' }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const GateUseCases = ({ data }) => (
  <section style={{ background: 'var(--white)', padding: '88px 0' }}>
    <div className="container">
      <PageSectionHeader
        number="03" label="Where it shines"
        title="Three jobs"
        accent="this gate wins."
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        {data.useCases.map(([t, body], i) => (
          <div key={t} style={{
            background: i === 1 ? 'var(--ink)' : 'var(--parchment)',
            color: i === 1 ? 'var(--parchment)' : 'var(--ink)',
            padding: '32px 28px',
            border: i === 1 ? 'none' : '1px solid rgba(0,16,17,0.1)',
          }}>
            <div className="display" style={{ fontSize: 36, color: 'var(--tangerine)', lineHeight: 1, marginBottom: 18 }}>0{i+1}</div>
            <h3 className="display" style={{ fontSize: 22, lineHeight: 1.1, margin: '0 0 12px' }}>{t}</h3>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: i === 1 ? 'var(--alice-blue)' : 'var(--charcoal)' }}>{body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const GateOtherGates = ({ currentSlug }) => {
  const cur = currentSlug === 'single' ? 'single-swing'
    : currentSlug === 'double' ? 'double-swing' : currentSlug;
  const items = GATE_SYSTEMS.filter(g => g.id !== cur);
  return (
    <SlatArena
      id="other-gates" chapter="04"
      label={{ EN: 'More Gates', ES: 'Más portones' }}
      items={items}
      topLink={{ href: 'products.html#gates', label: { EN: 'All gates', ES: 'Todos los portones' } }}
      ctaLabel={{ EN: 'Explore', ES: 'Explora' }}
    />
  );
};

const GateCTA = ({ data }) => (
  <CTABand
    kicker={`Quote a ${data.name.toLowerCase()} run`}
    title="Send us your"
    accent="opening size + spec."
    body="We'll come back in 24 hours with stocked components, lead time and a delivery or pickup plan from Fort Myers or Port Charlotte. Hardware kits packed per opening."
    primary={['Request a quote', 'estimate.html']}
    secondary={['Call (239) 689-5496', 'tel:2396895496']}
  />
);

const GatePage = ({ slug }) => {
  const [mode] = useMode();
  const base = GATE_DATA[slug];
  if (!base) return <p style={{ padding: 80, textAlign: 'center' }}>Gate type not found.</p>;
  // Merge contractor overrides on top of the base data when the mode toggle
  // in the utility bar is set to CONTRACTOR. useMode() subscribes to the
  // wfs:mode-change event, so flipping the toggle re-renders this tree.
  const override = (mode === 'CONTRACTOR' && base.contractor) || {};
  const data = { ...base, ...override };
  return (
    <>
      <SiteHeader active="Gates" />
      <GateHero data={data}/>
      <GateQuickFacts data={data}/>
      <GateProfiles data={data}/>
      <GateSpecs data={data}/>
      <GateUseCases data={data}/>
      <ProjectGallery />
      <GateOtherGates currentSlug={slug}/>
      <GateCTA data={data}/>
      <Footer />
    </>
  );
};

Object.assign(window, { GATE_DATA, GatePage });
