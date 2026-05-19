/* Gate detail pages — shared GatePage<slug/>, modeled after fence-supply-pro replit reference */

const GATE_DATA = {
  single: {
    slug: 'single',
    name: 'Single Swing Gates',
    tag: 'Swing Gate System',
    audienceTag: 'Homeowner View',
    heroBody: 'Classic single-swing entry gates customized to fit any opening width. Tailored for homeowners who want security, ease of use, and the right look for their property.',
    heroImg: 'assets/gate-single-swing.jpg',
    useCases: [
      ['Pedestrian Access',  'Walk gates 3 to 6 ft wide for residential side-yard and gardens.'],
      ['Property Security',  'Adds safety and controlled entry to your home or community.'],
      ['Tight Spaces',       'Single panel works where double-swing clearance is not available.'],
    ],
    styles: [
      { name: 'Standard Picket', tag: 'Classic',    img: 'assets/gate-single-swing.jpg' },
      { name: 'Privacy Panel',   tag: 'Solid',      img: 'assets/gate-double.jpg' },
      { name: 'Industrial Mesh', tag: 'Security',   img: 'assets/gate-rolling.jpg' },
      { name: 'Arched Top',      tag: 'Decorative', img: 'assets/gate-cantilever.jpg' },
      { name: 'Estate Style',    tag: 'Luxury',     img: 'assets/gate-double.jpg' },
      { name: 'Custom Frame',    tag: 'Bespoke',    img: 'assets/ec-fence.jpg' },
    ],
    gallery: { hero: 'assets/gate-single-swing.jpg', detail1: 'assets/gate-sliding.jpg', detail2: 'assets/gate-cantilever.jpg' },
    faq: [
      ['Can I automate this gate later?',     'Yes — every pre-hung single-swing gate is sized to accept a LiftMaster actuator add-on. Hinges and posts are spec\'d for the future load.'],
      ['What is the required clearance space?','Plan for the gate width plus a ~6" swing margin. A 4 ft gate needs about 4.5 ft of unobstructed arc; planters in the swing path will block it.'],
      ['Does it come with a lock?',           'Each kit ships with a self-latching gravity latch and padlockable hasp. Magnetic latches and code-keyed options available on request.'],
      ['Can you match my existing fence?',    'Yes — matching profiles for chain link, aluminum, vinyl and EC Fence. Send a photo and color; we\'ll spec the gate to blend with the run.'],
    ],
  },
  double: {
    slug: 'double',
    name: 'Double Swing Gates',
    tag: 'Driveway Swing System',
    audienceTag: 'Homeowner View',
    heroBody: 'Symmetrical double-swing driveway gates from 8 to 16 ft total opening. Pre-hung with drop rod, gate latch and hardware kit packed per opening — single-day install for most layouts.',
    heroImg: 'assets/gate-double.jpg',
    useCases: [
      ['Wide Driveways',     'Two leaves meeting in the middle clear 8–16 ft openings cleanly.'],
      ['Estate Entries',     'Symmetrical look reads as a formal main entry — more presence than single.'],
      ['Vehicle + Pedestrian','Open one leaf for walk-in, both for vehicle access.'],
    ],
    styles: [
      { name: 'Standard Picket', tag: 'Classic',    img: 'assets/gate-double.jpg' },
      { name: 'Privacy Panel',   tag: 'Solid',      img: 'assets/ec-fence.jpg' },
      { name: 'Ornamental Iron', tag: 'Wrought',    img: 'assets/gate-cantilever.jpg' },
      { name: 'Arched Top',      tag: 'Decorative', img: 'assets/gate-single-swing.jpg' },
      { name: 'Estate Style',    tag: 'Luxury',     img: 'assets/gate-double.jpg' },
      { name: 'Custom Frame',    tag: 'Bespoke',    img: 'assets/gate-rolling.jpg' },
    ],
    gallery: { hero: 'assets/gate-double.jpg', detail1: 'assets/gate-single-swing.jpg', detail2: 'assets/gate-cantilever.jpg' },
    faq: [
      ['What hardware comes in the kit?',     'Two heavy-duty hinge sets, a drop rod, a center gate latch and stainless-steel fasteners — all sized to your opening.'],
      ['Can the gates swing inward?',         'Yes. Specify swing direction on the quote; hinges flip to accommodate either side.'],
      ['Do you offer automation kits?',       'Yes — dual-leaf LiftMaster actuator kits with photo-eye safety and keypad available as add-ons.'],
      ['Can I add a center stop?',            'Recommended on driveways longer than 12 ft for wind stability. We include a black powder-coat ground stop on request.'],
    ],
  },
  sliding: {
    slug: 'sliding',
    name: 'Sliding Gates',
    tag: 'Track-Mounted Sliding System',
    audienceTag: 'Contractor View',
    heroBody: 'Track-mounted sliding gates for tight or graded openings where a swing arc won\'t work. Manual or automated with operator and safety package available — common in tight residential driveways.',
    heroImg: 'assets/gate-sliding.jpg',
    useCases: [
      ['Limited Swing Clearance', 'Slides parallel to the fence — no arc to block walkways or planters.'],
      ['Sloped Driveways',         'Ground track handles up to 3% grade without high-low binding.'],
      ['Repeat Daily Use',         'Manual operation is two-finger easy; automation kits available.'],
    ],
    styles: [
      { name: 'Standard Mesh',     tag: 'Galvanized', img: 'assets/gate-sliding.jpg' },
      { name: 'Vinyl-Coated Black',tag: 'Residential',img: 'assets/gate-cantilever.jpg' },
      { name: 'Privacy Panel',     tag: 'Solid',      img: 'assets/gate-double.jpg' },
      { name: 'V-Track Heavy',     tag: 'Commercial', img: 'assets/gate-rolling.jpg' },
      { name: 'Ornamental Frame',  tag: 'Decorative', img: 'assets/gate-single-swing.jpg' },
      { name: 'Automated Kit',     tag: 'Powered',    img: 'assets/ec-fence.jpg' },
    ],
    gallery: { hero: 'assets/gate-sliding.jpg', detail1: 'assets/gate-rolling.jpg', detail2: 'assets/gate-double.jpg' },
    faq: [
      ['Do you supply the ground track?',     'Yes — galvanized V-track or pipe-track in cuts to match the run, plus rollers and end stops.'],
      ['What about hurricane wind loads?',    'Track-mount sliders rated to 130 mph closed. For 150 mph HVHZ, spec the heavy commercial V-track frame.'],
      ['Can it be automated?',                'LiftMaster slide operator + photo-eye + keypad. Kit ships with the gate; install runs $1,800–$2,400 from a local pro.'],
      ['Lead time on custom widths?',         '2–3 weeks for non-stock spans. Stock widths up to 18 ft ship in 1–2 days from the FM fabrication shop.'],
    ],
  },
  cantilever: {
    slug: 'cantilever',
    name: 'Cantilever Gates',
    tag: 'No-Ground-Track System',
    audienceTag: 'Contractor View',
    heroBody: 'Counter-balanced rolling gates with no ground track — ideal for sites with sand, debris, or grade change. Single openings up to 50 ft, with internal V-rollers and an overhang section that floats clear of the driveway.',
    heroImg: 'assets/gate-cantilever.jpg',
    useCases: [
      ['No Ground Track',     'Nothing in the driveway path — no debris jam, no track to clear.'],
      ['Sandy / Coastal Sites','Salt-spray-rated rollers replace exposed ground track.'],
      ['Long Openings',       'Up to 50 ft single openings — typical for industrial yards.'],
    ],
    styles: [
      { name: 'Galvanized Frame', tag: 'Industrial', img: 'assets/gate-cantilever.jpg' },
      { name: 'Vinyl-Coated Black',tag: 'Coastal',   img: 'assets/gate-rolling.jpg' },
      { name: 'Solid Privacy',    tag: 'Commercial', img: 'assets/ec-fence.jpg' },
      { name: 'Sport-Field',      tag: 'High-Cycle', img: 'assets/gate-cantilever.jpg' },
      { name: 'Welded Heavy',     tag: 'Industrial', img: 'assets/gate-rolling.jpg' },
      { name: 'Custom Span',      tag: 'Bespoke',    img: 'assets/gate-sliding.jpg' },
    ],
    gallery: { hero: 'assets/gate-cantilever.jpg', detail1: 'assets/gate-rolling.jpg', detail2: 'assets/gate-sliding.jpg' },
    faq: [
      ['Maximum opening size?',               'Single-piece cantilevers ship up to 50 ft. Wider runs use a follower gate or telescoping section.'],
      ['Do you fabricate in-house?',          'Yes — all cantilever frames are welded at the Fort Myers shop. Cut, primed, powder-coated and packed per opening.'],
      ['What is the overhang allowance?',     '50% of opening width on the receiving side. 30 ft opening = 15 ft overhang behind the catch post.'],
      ['Wind ratings?',                       'Rated to 150 mph HVHZ in mesh or vinyl-coated configurations. Solid-panel cantilevers spec\'d case-by-case.'],
    ],
  },
  rolling: {
    slug: 'rolling',
    name: 'Rolling Gates',
    tag: 'Industrial Rolling System',
    audienceTag: 'Commercial / Industrial',
    heroBody: 'Industrial rolling gates with V-track and rollers, built for high-cycle commercial use, secured perimeters, yards and operations. Heavy galvanized frame with stainless-steel hardware.',
    heroImg: 'assets/gate-rolling.jpg',
    useCases: [
      ['Commercial Perimeters', 'Industrial yards, self-storage, transit hubs.'],
      ['High-Cycle Use',        'Rated for hundreds of cycles per day — bearings and frame spec\'d for it.'],
      ['Heavy Vehicle Access',  'Wide spans for tractor-trailer and box-truck access without slowing operations.'],
    ],
    styles: [
      { name: 'V-Track Standard',  tag: 'Industrial', img: 'assets/gate-rolling.jpg' },
      { name: 'Heavy Galvanized',  tag: 'High-Cycle', img: 'assets/gate-cantilever.jpg' },
      { name: 'Vinyl-Coated Black',tag: 'Visual',     img: 'assets/gate-sliding.jpg' },
      { name: 'Privacy Panel',     tag: 'Screened',   img: 'assets/ec-fence.jpg' },
      { name: 'Automated Kit',     tag: 'Powered',    img: 'assets/gate-rolling.jpg' },
      { name: 'Custom Span',       tag: 'Bespoke',    img: 'assets/gate-cantilever.jpg' },
    ],
    gallery: { hero: 'assets/gate-rolling.jpg', detail1: 'assets/gate-cantilever.jpg', detail2: 'assets/gate-sliding.jpg' },
    faq: [
      ['Cycle rating?',                       'Standard frame rated to 400 cycles/day. Heavy commercial frame rated continuous-duty.'],
      ['What operator do you spec?',          'LiftMaster Elite slide operators for high-cycle. Magnetic interlock and loop-detect safety as standard add-ons.'],
      ['Lead time on commercial widths?',     '3–4 weeks for custom-fab. Stock 20 ft and 24 ft openings ship in 1–2 weeks.'],
      ['Can you supply the V-track?',         'Yes — full V-track kit including rail, end stops, follower wheels and tensioner ships with the gate.'],
    ],
  },
};

/* ───── Hero ───── */

const GateHero = ({ data }) => (
  <section style={{
    background: '#faf9f7', color: 'var(--ink)',
    padding: '88px 0',
  }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
        {/* Left */}
        <div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <span className="mono" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '8px 14px',
              border: '1px solid var(--ink)',
              fontSize: 10, fontWeight: 700, letterSpacing: '0.22em',
              textTransform: 'uppercase', color: 'var(--ink)',
              background: 'var(--white)',
            }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--tangerine)' }}/>
              {data.tag}
            </span>
            <span className="mono" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '8px 14px',
              border: '1px solid var(--ink)',
              fontSize: 10, fontWeight: 700, letterSpacing: '0.22em',
              textTransform: 'uppercase', color: 'var(--ink)',
              background: 'var(--white)',
            }}>
              <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
                <path d="M3 8 L8 3 L13 8 L13 14 L3 14 Z" stroke="currentColor" strokeWidth="1.4" fill="none"/>
              </svg>
              {data.audienceTag}
            </span>
          </div>

          <h1 className="display" style={{
            margin: '0 0 28px',
            fontSize: 'clamp(36px, 5vw, 64px)',
            lineHeight: 0.98, letterSpacing: '-0.02em',
          }}>{data.name}</h1>

          <div style={{
            paddingLeft: 22, borderLeft: '3px solid var(--tangerine)',
            marginBottom: 32, maxWidth: 540,
          }}>
            <p className="mono" style={{
              margin: 0,
              fontSize: 14, lineHeight: 1.65,
              color: 'var(--charcoal)',
            }}>{data.heroBody}</p>
          </div>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href="estimate.html" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '14px 24px',
              background: 'var(--ink)', color: 'var(--white)',
              fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 600,
              boxShadow: '6px 6px 0 var(--tangerine)',
              transition: 'transform 0.18s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-1px, -1px)'; e.currentTarget.style.boxShadow = '7px 7px 0 var(--tangerine)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '6px 6px 0 var(--tangerine)'; }}>
              Configure Gate
            </a>
            <a href="resources.html" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '14px 24px',
              border: '1.5px solid var(--ink)',
              background: 'var(--white)', color: 'var(--ink)',
              fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 600,
            }}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 2 H10 L13 5 V14 H3 Z M10 2 V5 H13 M5 8 H11 M5 11 H11" stroke="currentColor" strokeWidth="1.4"/>
              </svg>
              Gate Guide
            </a>
          </div>
        </div>

        {/* Right — gate visual */}
        <div style={{
          position: 'relative', aspectRatio: '4 / 3',
          background: '#1a2548',
          border: '1.5px solid var(--ink)',
          overflow: 'hidden',
        }}>
          <img src={data.heroImg} alt={data.name}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}/>
          <div className="mono" style={{
            position: 'absolute', bottom: 16, right: 16,
            background: 'var(--white)', color: 'var(--ink)',
            padding: '6px 12px',
            fontSize: 10, letterSpacing: '0.22em',
            fontWeight: 700, textTransform: 'uppercase',
          }}>Gate System Visual</div>
        </div>
      </div>
    </div>
  </section>
);

/* ───── Best Use Cases ───── */

const GateUseCases = ({ data }) => (
  <section style={{ background: 'var(--ink)', color: 'var(--parchment)', padding: '56px 0' }}>
    <div className="container">
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12,
        paddingBottom: 18, marginBottom: 24,
        borderBottom: '1px solid rgba(255,255,255,0.2)',
      }}>
        <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
          <path d="M1 8 L4 8 L6 3 L10 13 L12 8 L15 8" stroke="var(--tangerine)" strokeWidth="1.6" strokeLinecap="square" fill="none"/>
        </svg>
        <span className="mono" style={{
          fontSize: 11, fontWeight: 700, letterSpacing: '0.22em',
          textTransform: 'uppercase',
        }}>Best Use Cases</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
        {data.useCases.map(([title, body], i) => (
          <div key={i} style={{
            paddingLeft: 16,
            borderLeft: '2px solid var(--tangerine)',
          }}>
            <div className="mono" style={{
              fontSize: 13.5, fontWeight: 700, letterSpacing: '0.04em',
              color: 'var(--white)', marginBottom: 8,
            }}>{title}</div>
            <p className="mono" style={{
              margin: 0, fontSize: 12, lineHeight: 1.6,
              color: 'var(--alice-blue)',
            }}>{body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ───── Styles & Configuration ───── */

const GateStyles = ({ data }) => (
  <section style={{ background: '#faf9f7', padding: '96px 0' }}>
    <div className="container">
      <h2 className="display" style={{
        textAlign: 'center', margin: '0 0 56px',
        fontSize: 'clamp(28px, 3vw, 40px)',
        lineHeight: 1, letterSpacing: '-0.02em',
      }}>Styles & Configuration</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
        {data.styles.map((s, i) => (
          <article key={i} style={{
            background: 'var(--white)',
            border: '1.5px solid var(--ink)',
            padding: 14,
          }}>
            <div style={{ position: 'relative', aspectRatio: '4 / 3', overflow: 'hidden', background: '#1a2548', marginBottom: 16 }}>
              <img src={s.img} alt={s.name}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}/>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 4px 8px' }}>
              <h3 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: 'var(--ink)' }}>{s.name}</h3>
            </div>
            <div style={{ padding: '0 4px' }}>
              <span className="mono" style={{
                display: 'inline-block',
                padding: '4px 8px',
                background: 'var(--ink)', color: 'var(--white)',
                fontSize: 9, letterSpacing: '0.18em',
                fontWeight: 700, textTransform: 'uppercase',
              }}>{s.tag}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

/* ───── Installation Gallery ───── */

const GateGallery = ({ data }) => (
  <section style={{ background: 'var(--white)', padding: '72px 0' }}>
    <div className="container">
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        paddingBottom: 18, marginBottom: 24,
        borderBottom: '1px solid rgba(0,16,17,0.18)',
      }}>
        <h2 className="display" style={{
          margin: 0, fontSize: 'clamp(20px, 2.2vw, 28px)',
          lineHeight: 1, letterSpacing: '-0.01em',
        }}>Installation Gallery</h2>
        <a href="projects.html" className="mono" style={{
          fontSize: 11, fontWeight: 700, letterSpacing: '0.18em',
          textTransform: 'uppercase', color: 'var(--ink)',
          paddingBottom: 2, borderBottom: '1px solid var(--ink)',
        }}>View Full Portfolio</a>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 14 }}>
        <div style={{ position: 'relative', aspectRatio: '16 / 11', overflow: 'hidden', background: '#1a2548' }}>
          <img src={data.gallery.hero} alt=""
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}/>
        </div>
        <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: 14 }}>
          <div style={{ position: 'relative', overflow: 'hidden', background: '#1a2548' }}>
            <img src={data.gallery.detail1} alt=""
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}/>
          </div>
          <div style={{ position: 'relative', overflow: 'hidden', background: '#1a2548' }}>
            <img src={data.gallery.detail2} alt=""
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}/>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ───── FAQ ───── */

const GateFAQ = ({ data }) => {
  const [open, setOpen] = React.useState(0);
  return (
    <section style={{ background: '#faf9f7', padding: '96px 0' }}>
      <div className="container" style={{ maxWidth: 880 }}>
        <h2 className="display" style={{
          textAlign: 'center', margin: '0 0 48px',
          fontSize: 'clamp(28px, 3vw, 40px)',
          lineHeight: 1, letterSpacing: '-0.02em',
        }}>Frequently Asked Questions</h2>
        <div>
          {data.faq.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{ borderBottom: '1px solid rgba(0,16,17,0.2)' }}>
                <button onClick={() => setOpen(isOpen ? -1 : i)} style={{
                  width: '100%', display: 'flex', justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '22px 8px', textAlign: 'left', gap: 24,
                  background: 'transparent', border: 'none', cursor: 'pointer',
                }}>
                  <span className="mono" style={{
                    fontSize: 13, fontWeight: 700, letterSpacing: '0.04em',
                    color: 'var(--ink)',
                  }}>{q}</span>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"
                    style={{ flexShrink: 0, transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }}>
                    <path d="M4 6 L8 10 L12 6" stroke="var(--ink)" strokeWidth="1.6" strokeLinecap="square"/>
                  </svg>
                </button>
                <div style={{
                  maxHeight: isOpen ? 240 : 0, overflow: 'hidden',
                  transition: 'max-height 0.3s ease',
                }}>
                  <p style={{
                    margin: 0, padding: '0 8px 22px',
                    fontSize: 14.5, lineHeight: 1.65, color: 'var(--charcoal)',
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

/* ───── Bottom CTA ───── */

const GateCTA = ({ data }) => (
  <CTABand
    kicker={`Quote a ${data.name.toLowerCase()} run`}
    title="Send us your"
    accent="opening size + spec."
    body={`We'll come back in 24 hours with stocked components, lead time and a delivery or pickup plan from Fort Myers or Port Charlotte. Hardware kits packed per opening.`}
    primary={['Request a quote', 'estimate.html']}
    secondary={['Call (239) 689-5496', 'tel:2396895496']}
  />
);

/* ───── Page composer ───── */

const GatePage = ({ slug }) => {
  const data = GATE_DATA[slug];
  if (!data) return <p style={{ padding: 80, textAlign: 'center' }}>Gate type not found.</p>;
  return (
    <>
      <SiteHeader active="Gates" />
      <GateHero data={data}/>
      <GateUseCases data={data}/>
      <GateStyles data={data}/>
      <GateGallery data={data}/>
      <GateFAQ data={data}/>
      <GateCTA data={data}/>
      <Footer />
    </>
  );
};

Object.assign(window, { GATE_DATA, GatePage });
