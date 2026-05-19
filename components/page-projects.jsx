/* Projects page — extended gallery + case study */

const FULL_PROJECTS = [
  { name: 'Cape Coral Residential',      loc: 'Cape Coral, FL',     size: '320 LF',  material: 'Chain Link', type: 'Vinyl-coated black, 6 ft, with double drive gate', contractor: 'Coastline Fence Co.',   year: '2024', imgUrl: 'https://images.unsplash.com/photo-1519478224231-4f91b359198b?auto=format&fit=crop&w=900&q=80' },
  { name: 'Estero Community',            loc: 'Estero, FL',         size: '38 lots', material: 'Metal',      type: 'Aluminum board privacy, 6 ft, bronze finish',      contractor: 'Gulf Perimeter LLC',    year: '2024', imgUrl: 'https://images.unsplash.com/photo-1530328881134-8c525cc57036?auto=format&fit=crop&w=900&q=80' },
  { name: 'Fort Myers Estate',           loc: 'Fort Myers, FL',     size: '420 LF',  material: 'Aluminum',   type: 'Welded 3-rail aluminum, 5 ft, residential grade',   contractor: 'Estate Fence Pros',     year: '2025', imgUrl: 'https://images.unsplash.com/photo-1718909704612-29e9707612b7?auto=format&fit=crop&w=900&q=80' },
  { name: 'Naples Pool Enclosure',       loc: 'Naples, FL',         size: '180 LF',  material: 'Vinyl',      type: 'Vinyl privacy by Veka, 6 ft, pool-code compliant', contractor: 'Naples Outdoor',        year: '2025', imgUrl: 'https://images.unsplash.com/photo-1623042538574-7df756b9945b?auto=format&fit=crop&w=900&q=80' },
  { name: 'Bonita Springs Self-Storage', loc: 'Bonita Springs, FL', size: '0.9 mi',  material: 'Chain Link', type: 'Galvanized 9-gauge, 8 ft + barbed extension',      contractor: 'Industrial Fence FL',   year: '2024', imgUrl: 'https://images.unsplash.com/photo-1615129628457-17ff3d9386c9?auto=format&fit=crop&w=900&q=80' },
  { name: 'Punta Gorda Marina',          loc: 'Punta Gorda, FL',    size: '240 LF',  material: 'EC Fence',   type: 'EC Fence panels, 6 ft, white finish',              contractor: 'Harbor Iron Works',     year: '2025', imgUrl: 'assets/ec-fence.jpg' },
  { name: 'Sanibel Beachfront',          loc: 'Sanibel, FL',        size: '180 LF',  material: 'Aluminum',   type: 'Pool code aluminum, 4 ft, hurricane anchors',      contractor: 'Island Outdoor LLC',    year: '2025', imgUrl: 'https://images.unsplash.com/photo-1718909704612-29e9707612b7?auto=format&fit=crop&w=900&q=80' },
  { name: 'Fort Myers Industrial Park',  loc: 'Fort Myers, FL',     size: '1.4 mi',  material: 'Chain Link', type: '11.5 ga galvanized, 8 ft, 6 cantilever gates',     contractor: 'Industrial Fence FL',   year: '2025', imgUrl: 'https://images.unsplash.com/photo-1517490232338-06b912a786b5?auto=format&fit=crop&w=900&q=80' },
  { name: 'Lehigh Acres Subdivision',    loc: 'Lehigh Acres, FL',   size: '52 lots', material: 'Vinyl',      type: 'Veka privacy white, 6 ft, walk + double gates',   contractor: 'Lehigh Outdoor Co.',    year: '2024', imgUrl: 'https://images.unsplash.com/photo-1572020636961-3a5dab02d8e3?auto=format&fit=crop&w=900&q=80' },
  { name: 'Marco Island Resort',         loc: 'Marco Island, FL',   size: '780 LF',  material: 'Metal',      type: 'DuraFence board privacy, 8 ft, bronze, HVHZ',     contractor: 'Coastline Fence Co.',   year: '2025', imgUrl: 'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?auto=format&fit=crop&w=900&q=80' },
  { name: 'North Port HOA',              loc: 'North Port, FL',     size: '0.7 mi',  material: 'Aluminum',   type: 'Powder-coat black, 5 ft, 14 ornamental sections', contractor: 'Sun Coast Fence',       year: '2024', imgUrl: 'https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=900&q=80' },
  { name: 'Englewood Tennis Courts',     loc: 'Englewood, FL',      size: '4 courts',material: 'Chain Link', type: 'Vinyl-coated black, 10 ft mesh, 12 ft windscreens', contractor: 'Industrial Fence FL',   year: '2025', imgUrl: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=900&q=80' },
];

const ProjectsHero = () => (
  <PageHero
    crumbs={[['Home', 'Homepage.html'], ['Projects', null]]}
    eyebrow="Project archive · 2024–2025"
    title="Real projects."
    accent="Real perimeters."
    subtitle="Forty-plus completed jobs across Lee, Collier, Charlotte and Sarasota. Filter by material below."
    image="https://images.unsplash.com/photo-1718909704612-29e9707612b7?auto=format&fit=crop&w=1600&q=80"
  />
);

const ProjectsBigGallery = () => {
  const [filter, setFilter] = React.useState('All');
  const filters = ['All', 'Chain Link', 'Aluminum', 'Vinyl', 'Metal', 'EC Fence'];
  const visible = filter === 'All' ? FULL_PROJECTS : FULL_PROJECTS.filter(p => p.material === filter);
  return (
    <section style={{ background: 'var(--white)', padding: '64px 0' }}>
      <div className="container">
        <PageSectionHeader
          number="01" label="Filter the archive"
          title="By material,"
          accent="across SW Florida."
          sub="Twelve highlighted jobs shown — full archive available on request."
        />
        <div style={{
          display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28,
          paddingBottom: 16, borderBottom: '1px solid rgba(0,16,17,0.12)',
        }}>
          {filters.map(f => {
            const active = f === filter;
            return (
              <button key={f} onClick={() => setFilter(f)} className="mono"
                style={{
                  padding: '6px 12px', fontSize: 10, letterSpacing: '0.18em',
                  textTransform: 'uppercase', fontWeight: 700,
                  border: '1px solid var(--ink)',
                  background: active ? 'var(--ink)' : 'transparent',
                  color: active ? 'var(--white)' : 'var(--ink)',
                  cursor: 'pointer',
                }}>{f}</button>
            );
          })}
          <span className="mono" style={{
            marginLeft: 'auto', alignSelf: 'center',
            fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase',
            color: 'var(--charcoal)',
          }}>{visible.length} project{visible.length === 1 ? '' : 's'}</span>
        </div>
        <div className="wfs-projects-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gridAutoRows: '260px', gap: 14,
        }}>
          {visible.map((p, i) => (
            <ProjectCard key={p.name} p={p} i={i}
              layout={{ col: 'span 1', row: 'span 1', featured: false }}/>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectsCaseStudy = () => (
  <section style={{ background: 'var(--ink)', color: 'var(--parchment)', padding: '72px 0' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 56, alignItems: 'center' }}>
        <div style={{ position: 'relative', aspectRatio: '4 / 5', overflow: 'hidden' }}>
          <img src="https://images.unsplash.com/photo-1517490232338-06b912a786b5?auto=format&fit=crop&w=900&q=80"
            alt="Fort Myers Industrial Park perimeter"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}/>
          <div className="mono" style={{
            position: 'absolute', top: 16, left: 16,
            background: 'var(--tangerine)', color: 'var(--ink)',
            padding: '5px 10px', fontSize: 10, letterSpacing: '0.22em', fontWeight: 700,
          }}>CASE STUDY · 01</div>
        </div>
        <div>
          <div className="mono" style={{
            fontSize: 11, fontWeight: 700, letterSpacing: '0.22em',
            color: 'var(--tangerine)', textTransform: 'uppercase', marginBottom: 18,
          }}>02 — Featured</div>
          <h2 className="display" style={{
            margin: 0, fontSize: 'clamp(32px, 3.6vw, 48px)', lineHeight: 1, letterSpacing: '-0.02em',
          }}>
            1.4 miles of perimeter.<br/>
            <span style={{ color: 'var(--tangerine)' }}>Six cantilever gates.</span><br/>
            Eleven weeks.
          </h2>
          <p style={{ marginTop: 18, fontSize: 15.5, lineHeight: 1.6, color: 'var(--alice-blue)', maxWidth: 520 }}>
            Fort Myers Industrial Park — 11.5 ga galvanized chain link, 8 ft tall, with six WFS-fabricated cantilever gates ranging from 24 ft to 42 ft openings. Phased deliveries against a tight release schedule.
          </p>
          <div style={{ marginTop: 24 }}>
            <StatStrip dark items={[
              ['1.4 mi', 'Perimeter'],
              ['6', 'Gates'],
              ['8 ft', 'Mesh height'],
              ['11 wk', 'Project span'],
            ]}/>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ProjectsCTA = () => (
  <CTABand
    kicker="Your project, next"
    title="Have a project?"
    accent="Let's spec the material."
    body="We work with contractors, GCs, HOAs and homeowners across SW Florida. Send the scope and we'll come back with stock, pricing and lead time within 24 hours."
    primary={['Start a quote', 'estimate.html']}
    secondary={['Talk to a rep', 'tel:2396895496']}
  />
);

Object.assign(window, { ProjectsHero, ProjectsBigGallery, ProjectsCaseStudy, ProjectsCTA });
