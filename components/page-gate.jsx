/* Gate detail pages — dedicated template (different from Fences/page-material).
   Focus is on helping the customer quote a gate correctly: gate type, opening
   size, material, hardware and posts. */

const GATE_MATERIALS = 'Vinyl, aluminum, chain link, metal, and EC Fence options';
const GATE_HARDWARE = 'Hinges, latches, drop rods, cane bolts, and accessories';
const GATE_LEADTIME = 'Stock and lead time vary by size, material, color, and hardware';

const GATE_SPECS = [
  ['Gate Types', 'Single swing, double swing, sliding, cantilever, rolling, and custom gates'],
  ['Widths', 'Standard and custom sizes available depending on material'],
  ['Heights', 'Available heights vary by gate material and style'],
  ['Materials', GATE_MATERIALS],
  ['Hardware', GATE_HARDWARE],
  ['Lead Time', GATE_LEADTIME],
];

const GATE_HARDWARE_CARDS = [
  { name: 'Hinges', tag: 'All gate types', notes: 'Gate hinges available based on gate type, material, and post setup.' },
  { name: 'Latches', tag: 'Access', notes: 'Latch options for walk gates, pool gates, and general access.' },
  { name: 'Drop Rods / Cane Bolts', tag: 'Double gates', notes: 'For double gates and added stability when closed.' },
  { name: 'Posts & Caps', tag: 'Framework', notes: 'Gate posts, blank posts, terminal posts, and post caps available.' },
];

const GATE_CHECKLIST = [
  'Opening size, preferably post-to-post',
  'Gate height',
  'Material type',
  'Color',
  'Single or double gate',
  'Existing posts or new posts needed',
  'Hardware needed',
  'Pickup or delivery location',
  'Photo or drawing of the opening',
];

const GATE_DATA = {
  single: {
    slug: 'single',
    name: 'Single Swing',
    tag: 'Single swing gate materials & hardware',
    heroTitle: 'Single Swing Gates Built',
    heroAccent: 'for the Right Opening.',
    heroBody: 'Single swing gates for pedestrian access, pool enclosures, side yards, and residential or commercial openings. Available in multiple materials, sizes, colors, and hardware options. Send us your opening size and project details for an accurate quote.',
    heroImg: 'assets/SINGLE_SWING_GATE.png',
    quickFacts: [
      ['Best For', 'Walk gates, side yards, pool enclosures, pedestrian access'],
      ['Materials', GATE_MATERIALS],
      ['Hardware', GATE_HARDWARE],
      ['Lead Time', GATE_LEADTIME],
    ],
    gateTypes: [
      { name: 'Standard Walk Gate', tag: 'Pedestrian', notes: 'Common single gate sizes for pedestrian access.' },
      { name: 'Pool-Code Gate', tag: 'Pool safety', notes: 'Gate options for pool enclosures and safety requirements.' },
      { name: 'Custom Opening Gate', tag: 'Made to size', notes: 'Built to match your exact opening size.' },
      { name: 'Matching Material Gate', tag: 'All materials', notes: 'Available in aluminum, vinyl, chain link, metal, and EC Fence styles.' },
    ],
    specs: GATE_SPECS,
    applications: [
      ['Pedestrian Access', 'Single gates for walkways, side yards, and everyday access points.'],
      ['Pool Enclosures', 'Gate options for pool areas and code-related requirements.'],
      ['Service Openings', 'Single or double gates for maintenance access, equipment, and utility areas.'],
    ],
    projects: [
      { name: 'Cape Coral Residential', loc: 'Cape Coral, FL', size: 'Custom Opening', material: 'Single Swing Gate', type: 'Single swing walk gate, custom opening', contractor: 'Coastline Fence Co.', year: '2024', imgUrl: 'assets/SINGLE_SWING_GATE.png' },
      { name: 'Residential Walk Gate', loc: 'Fort Myers, FL', size: '4 ft', material: 'Aluminum Gate', type: 'Aluminum walk gate, self-closing hardware', contractor: 'Estate Fence Pros', year: '2024', imgUrl: 'assets/SINGLE_SWING_GATE.png' },
      { name: 'Pool Enclosure Gate', loc: 'Naples, FL', size: '4 ft', material: 'Aluminum Gate', type: 'Pool-code aluminum gate, magnetic latch', contractor: 'Naples Outdoor', year: '2025', imgUrl: 'assets/SINGLE_SWING_GATE.png' },
      { name: 'Double Swing Gate', loc: 'Cape Coral, FL', size: '12 ft', material: 'Vinyl / PVC Gate', type: 'Vinyl double drive gate, drop rod', contractor: 'Naples Outdoor', year: '2025', imgUrl: 'assets/DOUBLE_GATE.png' },
      { name: 'Chain Link Service Gate', loc: 'Lehigh Acres, FL', size: '6 ft', material: 'Chain Link Gate', type: 'Galvanized service gate, cane bolt', contractor: 'Industrial Fence FL', year: '2024', imgUrl: 'assets/ROLLING_GATE.png' },
      { name: 'Metal Privacy Gate', loc: 'Estero, FL', size: '6 ft', material: 'Metal / DuraFence Gate', type: 'Metal privacy gate, matching panels', contractor: 'Gulf Perimeter LLC', year: '2025', imgUrl: 'assets/SLIDING_GATE.png' },
    ],
    cta: {
      kicker: 'Single swing gate quote',
      title: 'Ready to Quote Your',
      accent: 'Gate?',
      body: 'Send us your opening size, gate height, material, color, swing type, hardware needs, and project location. Photos or drawings help us quote the gate more accurately.',
      primary: ['Request a Gate Quote', 'estimate.html'],
      secondary: ['Call (239) 689-5496', 'tel:2396895496'],
    },
  },
  double: {
    slug: 'double',
    name: 'Double Swing',
    tag: 'Double swing gate materials & hardware',
    heroTitle: 'Double Swing Gates Built',
    heroAccent: 'for Wider Openings.',
    heroBody: 'Double swing gates for driveways, equipment access, and wider residential or commercial openings. Available in multiple materials, sizes, colors, and hardware options. Send us your opening size and project details for an accurate quote.',
    heroImg: 'assets/DOUBLE_GATE.png',
    quickFacts: [
      ['Best For', 'Driveways, equipment access, service entrances, wide openings'],
      ['Materials', GATE_MATERIALS],
      ['Hardware', GATE_HARDWARE],
      ['Lead Time', GATE_LEADTIME],
    ],
    gateTypes: [
      { name: 'Standard Driveway Gate', tag: 'Vehicle access', notes: 'Common double gate sizes for driveway and vehicle access.' },
      { name: 'Privacy Drive Gate', tag: 'Solid panels', notes: 'Full privacy panels matched to vinyl or metal runs.' },
      { name: 'Custom Opening Gate', tag: 'Made to size', notes: 'Built to match your exact driveway opening.' },
      { name: 'Matching Material Gate', tag: 'All materials', notes: 'Available in aluminum, vinyl, chain link, metal, and EC Fence styles.' },
    ],
    specs: GATE_SPECS,
    applications: [
      ['Driveway Access', 'Double gates that open wide for vehicles and equipment.'],
      ['Service Openings', 'Wide access for maintenance, utility, and delivery areas.'],
      ['Estate Entries', 'Symmetrical double gates for a formal main entrance.'],
    ],
    projects: [
      { name: 'Cape Coral Residential', loc: 'Cape Coral, FL', size: '12 ft Opening', material: 'Double Swing Gate', type: 'Vinyl double drive gate, drop rod + center latch', contractor: 'Coastline Fence Co.', year: '2024', imgUrl: 'assets/DOUBLE_GATE.png' },
      { name: 'Driveway Gate', loc: 'Fort Myers, FL', size: '14 ft', material: 'Aluminum Gate', type: 'Aluminum double drive gate, residential grade', contractor: 'Estate Fence Pros', year: '2024', imgUrl: 'assets/DOUBLE_GATE.png' },
      { name: 'Estate Entry', loc: 'Naples, FL', size: '16 ft', material: 'Vinyl / PVC Gate', type: 'Vinyl privacy double gate, matching panels', contractor: 'Naples Outdoor', year: '2025', imgUrl: 'assets/DOUBLE_GATE.png' },
      { name: 'Service Entrance', loc: 'Lehigh Acres, FL', size: '12 ft', material: 'Chain Link Gate', type: 'Galvanized double service gate, cane bolt', contractor: 'Industrial Fence FL', year: '2025', imgUrl: 'assets/ROLLING_GATE.png' },
      { name: 'Privacy Drive', loc: 'Estero, FL', size: '8 ft', material: 'Metal / DuraFence Gate', type: 'Metal privacy double gate, matching run', contractor: 'Gulf Perimeter LLC', year: '2024', imgUrl: 'assets/SLIDING_GATE.png' },
    ],
    cta: {
      kicker: 'Double swing gate quote',
      title: 'Ready to Quote Your',
      accent: 'Gate?',
      body: 'Send us your opening size, gate height, material, color, swing type, hardware needs, and project location. Photos or drawings help us quote the gate more accurately.',
      primary: ['Request a Gate Quote', 'estimate.html'],
      secondary: ['Call (239) 689-5496', 'tel:2396895496'],
    },
  },
  sliding: {
    slug: 'sliding',
    name: 'Sliding Gates',
    tag: 'Sliding gate materials & hardware',
    heroTitle: 'Sliding Gates Built',
    heroAccent: 'for Tight Openings.',
    heroBody: 'Track-mounted sliding gates for tight or sloped driveways where a swing gate won’t fit. Available in multiple materials, sizes, colors, and hardware options. Send us your opening size and project details for an accurate quote.',
    heroImg: 'assets/SLIDING_GATE.png',
    quickFacts: [
      ['Best For', 'Tight driveways, sloped sites, limited swing clearance'],
      ['Materials', GATE_MATERIALS],
      ['Hardware', GATE_HARDWARE],
      ['Lead Time', GATE_LEADTIME],
    ],
    gateTypes: [
      { name: 'Track-Mounted Slide', tag: 'Space-saving', notes: 'Slides parallel to the fence on a ground track.' },
      { name: 'Privacy Slide Gate', tag: 'Solid panels', notes: 'Full privacy panels for vinyl or metal runs.' },
      { name: 'Custom Opening Gate', tag: 'Made to size', notes: 'Built to match your exact opening and layout.' },
      { name: 'Matching Material Gate', tag: 'All materials', notes: 'Available in chain link, vinyl, metal, and EC Fence styles.' },
    ],
    specs: GATE_SPECS,
    applications: [
      ['Limited Swing Clearance', 'Slides parallel to the fence with no swing arc.'],
      ['Sloped Driveways', 'Track options for grade changes and uneven ground.'],
      ['Daily-Use Access', 'Smooth operation for openings used many times a day.'],
    ],
    projects: [
      { name: 'Cape Coral Residential', loc: 'Cape Coral, FL', size: '12 ft Opening', material: 'Sliding Gate', type: 'Track-mounted slide gate, manual operation', contractor: 'Coastline Fence Co.', year: '2024', imgUrl: 'assets/SLIDING_GATE.png' },
      { name: 'Tight Driveway', loc: 'Fort Myers, FL', size: '14 ft', material: 'Chain Link Gate', type: 'Galvanized slide gate, twin rollers', contractor: 'Industrial Fence FL', year: '2024', imgUrl: 'assets/SLIDING_GATE.png' },
      { name: 'Sloped Lot Slide', loc: 'Naples, FL', size: '12 ft', material: 'Vinyl-Coated Gate', type: 'Vinyl-coated slide gate, ground track', contractor: 'Naples Outdoor', year: '2025', imgUrl: 'assets/SLIDING_GATE.png' },
      { name: 'Privacy Slide', loc: 'Estero, FL', size: '6 ft', material: 'Metal / DuraFence Gate', type: 'Metal privacy slide gate, matching run', contractor: 'Gulf Perimeter LLC', year: '2025', imgUrl: 'assets/DOUBLE_GATE.png' },
      { name: 'Commercial Slide', loc: 'Punta Gorda, FL', size: '16 ft', material: 'EC Fence Gate', type: 'EC Fence slide gate, commercial spec', contractor: 'Harbor Iron Works', year: '2024', imgUrl: 'assets/CANTILEVER.png' },
    ],
    cta: {
      kicker: 'Sliding gate quote',
      title: 'Ready to Quote Your',
      accent: 'Gate?',
      body: 'Send us your opening size, gate height, material, color, swing type, hardware needs, and project location. Photos or drawings help us quote the gate more accurately.',
      primary: ['Request a Gate Quote', 'estimate.html'],
      secondary: ['Call (239) 689-5496', 'tel:2396895496'],
    },
  },
  cantilever: {
    slug: 'cantilever',
    name: 'Cantilever',
    tag: 'Cantilever gate materials & hardware',
    heroTitle: 'Cantilever Gates Built',
    heroAccent: 'for Long Openings.',
    heroBody: 'Counter-balanced cantilever gates with no ground track, for sandy, coastal, or long commercial openings. Available in multiple materials, sizes, colors, and hardware options. Send us your opening size and project details for an accurate quote.',
    heroImg: 'assets/CANTILEVER.png',
    quickFacts: [
      ['Best For', 'Industrial yards, coastal sites, long openings, debris-prone areas'],
      ['Materials', GATE_MATERIALS],
      ['Hardware', GATE_HARDWARE],
      ['Lead Time', GATE_LEADTIME],
    ],
    gateTypes: [
      { name: 'No-Ground-Track Frame', tag: 'Counter-balanced', notes: 'Counter-balanced frame floats clear of the driveway.' },
      { name: 'Coastal / Debris Sites', tag: 'No track', notes: 'No ground track to jam with sand or debris.' },
      { name: 'Long-Span Custom', tag: 'Wide openings', notes: 'Built for wider single openings and telescoping runs.' },
      { name: 'Matching Material Gate', tag: 'All materials', notes: 'Available in chain link, vinyl-coated, metal, and EC Fence styles.' },
    ],
    specs: GATE_SPECS,
    applications: [
      ['Industrial Perimeters', 'Long openings for yards, storage, and commercial sites.'],
      ['Coastal & Sandy Sites', 'No ground track to clear in sand or debris.'],
      ['Wide Openings', 'Single openings sized for larger entrances.'],
    ],
    projects: [
      { name: 'Industrial Yard', loc: 'Fort Myers, FL', size: '30 ft Opening', material: 'Cantilever Gate', type: 'Galvanized cantilever gate, V-rollers', contractor: 'Industrial Fence FL', year: '2024', imgUrl: 'assets/CANTILEVER.png' },
      { name: 'Coastal Perimeter', loc: 'Sanibel, FL', size: '24 ft', material: 'Chain Link Gate', type: 'Vinyl-coated cantilever, salt-rated rollers', contractor: 'Harbor Iron Works', year: '2024', imgUrl: 'assets/CANTILEVER.png' },
      { name: 'Storage Facility', loc: 'Bonita Springs, FL', size: '40 ft', material: 'Vinyl-Coated Gate', type: 'Cantilever gate, long single span', contractor: 'Industrial Fence FL', year: '2025', imgUrl: 'assets/CANTILEVER.png' },
      { name: 'Commercial Entrance', loc: 'Estero, FL', size: '20 ft', material: 'Metal Gate', type: 'DuraFence cantilever gate, privacy face', contractor: 'Gulf Perimeter LLC', year: '2025', imgUrl: 'assets/ROLLING_GATE.png' },
      { name: 'Long-Span Custom', loc: 'Immokalee, FL', size: '50 ft', material: 'EC Fence Gate', type: 'Custom cantilever, telescoping span', contractor: 'Harbor Iron Works', year: '2024', imgUrl: 'assets/SLIDING_GATE.png' },
    ],
    cta: {
      kicker: 'Cantilever gate quote',
      title: 'Ready to Quote Your',
      accent: 'Gate?',
      body: 'Send us your opening size, gate height, material, color, swing type, hardware needs, and project location. Photos or drawings help us quote the gate more accurately.',
      primary: ['Request a Gate Quote', 'estimate.html'],
      secondary: ['Call (239) 689-5496', 'tel:2396895496'],
    },
  },
  rolling: {
    slug: 'rolling',
    name: 'Rolling Gate',
    tag: 'Rolling gate materials & hardware',
    heroTitle: 'Rolling Gates Built',
    heroAccent: 'for High-Cycle Use.',
    heroBody: 'Industrial rolling gates on ground rollers for high-cycle commercial perimeters, yards, and storage sites. Available in multiple materials, sizes, colors, and hardware options. Send us your opening size and project details for an accurate quote.',
    heroImg: 'assets/ROLLING_GATE.png',
    quickFacts: [
      ['Best For', 'Commercial perimeters, industrial yards, self-storage, high-cycle use'],
      ['Materials', GATE_MATERIALS],
      ['Hardware', GATE_HARDWARE],
      ['Lead Time', GATE_LEADTIME],
    ],
    gateTypes: [
      { name: 'Ground-Roller Frame', tag: 'Industrial', notes: 'Heavy frame on ground rollers for daily commercial use.' },
      { name: 'High-Cycle Heavy', tag: 'Continuous duty', notes: 'Built for sites that open and close many times a day.' },
      { name: 'Automated-Ready', tag: 'Powered', notes: 'Set up for slide operators and access controls.' },
      { name: 'Matching Material Gate', tag: 'All materials', notes: 'Available in chain link, vinyl-coated, metal, and EC Fence styles.' },
    ],
    specs: GATE_SPECS,
    applications: [
      ['Commercial Perimeters', 'Wide gates for yards, storage, and industrial sites.'],
      ['High-Cycle Access', 'Built for hundreds of open-and-close cycles a day.'],
      ['Heavy Vehicle Access', 'Wide spans for trucks and equipment.'],
    ],
    projects: [
      { name: 'Self-Storage Facility', loc: 'Bonita Springs, FL', size: '24 ft Opening', material: 'Rolling Gate', type: 'Galvanized rolling gate, ground rollers', contractor: 'Industrial Fence FL', year: '2024', imgUrl: 'assets/ROLLING_GATE.png' },
      { name: 'Industrial Yard', loc: 'Fort Myers, FL', size: '30 ft', material: 'Chain Link Gate', type: 'Heavy rolling gate, high-cycle frame', contractor: 'Industrial Fence FL', year: '2024', imgUrl: 'assets/ROLLING_GATE.png' },
      { name: 'Commercial Perimeter', loc: 'Lehigh Acres, FL', size: '20 ft', material: 'Vinyl-Coated Gate', type: 'Vinyl-coated rolling gate, visual perimeter', contractor: 'Gulf Perimeter LLC', year: '2025', imgUrl: 'assets/ROLLING_GATE.png' },
      { name: 'Transit Hub', loc: 'North Fort Myers, FL', size: '24 ft', material: 'Metal Gate', type: 'Rolling gate, continuous-duty hardware', contractor: 'Industrial Fence FL', year: '2025', imgUrl: 'assets/CANTILEVER.png' },
      { name: 'Warehouse Entrance', loc: 'Immokalee, FL', size: '30 ft', material: 'EC Fence Gate', type: 'Rolling gate, wide vehicle access', contractor: 'Harbor Iron Works', year: '2024', imgUrl: 'assets/SLIDING_GATE.png' },
    ],
    cta: {
      kicker: 'Rolling gate quote',
      title: 'Ready to Quote Your',
      accent: 'Gate?',
      body: 'Send us your opening size, gate height, material, color, swing type, hardware needs, and project location. Photos or drawings help us quote the gate more accurately.',
      primary: ['Request a Gate Quote', 'estimate.html'],
      secondary: ['Call (239) 689-5496', 'tel:2396895496'],
    },
  },
};

/* ───── Sections (gate-specific template) ───── */

const GateHero = ({ data }) => {
  const t = useT();
  return (
    <PageHero
      crumbs={[['Home', 'Homepage.html'], ['Gates', 'products.html#gates'], [data.name, null]]}
      eyebrow={data.tag}
      title={data.heroTitle}
      accent={data.heroAccent}
      subtitle={data.heroBody}
      image={data.heroImg}
      actions={[
        { label: t('Request a Gate Quote', 'Solicitar cotización de portón'), href: 'estimate.html', primary: true },
        { label: t('View Gate Options', 'Ver opciones de portones'), href: '#gate-types' },
      ]}
    />
  );
};

const gateFactIcon = (label = '') => {
  const l = String(label).toLowerCase();
  const p = { width: 26, height: 26, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' };
  if (l.includes('best')) return <svg {...p}><circle cx="9" cy="8" r="3"/><path d="M3.5 20a5.5 5.5 0 0 1 11 0"/><path d="M16 5.2a3 3 0 0 1 0 5.6"/><path d="M21 20a5.5 5.5 0 0 0-4-5.3"/></svg>;
  if (l.includes('material')) return <svg {...p}><path d="M12 3 21 8 12 13 3 8Z"/><path d="M3 12 12 17 21 12"/><path d="M3 16 12 21 21 16"/></svg>;
  if (l.includes('hardware')) return <svg {...p}><path d="M14.7 6.3a3.8 3.8 0 0 0-5 5l-5 5 2 2 5-5a3.8 3.8 0 0 0 5-5l-2.4 2.4-2-.5-.5-2Z"/></svg>;
  return <svg {...p}><rect x="3" y="4.5" width="18" height="16.5" rx="2"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4"/></svg>;
};

const GateQuickFacts = ({ data }) => (
  <section style={{ background: 'var(--white)', padding: '0 0 48px' }}>
    <div className="container">
      <div className="wfs-gate-facts" style={{
        position: 'relative', zIndex: 5, marginTop: -28,
        background: 'var(--white)', borderRadius: 16,
        boxShadow: '0 34px 70px -34px rgba(0,16,17,0.4)',
        border: '1px solid rgba(0,16,17,0.06)',
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
        overflow: 'hidden',
      }}>
        {data.quickFacts.map(([k, v], i) => (
          <div key={i} style={{
            padding: '30px 28px',
            borderLeft: i === 0 ? 'none' : '1px solid rgba(0,16,17,0.08)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              <span aria-hidden style={{ color: 'var(--laser-blue)', display: 'inline-flex' }}>{gateFactIcon(k)}</span>
              <span className="mono" style={{
                fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase',
                color: 'var(--ink)', fontWeight: 700,
              }}>{k}</span>
            </div>
            <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.55, color: 'var(--charcoal)' }}>{v}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const GateCardGrid = ({ items }) => (
  <div style={{ display: 'grid', gridTemplateColumns: `repeat(${items.length}, 1fr)`, gap: 14 }}>
    {items.map((p, i) => (
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
);

const GateTypes = ({ data }) => (
  <section id="gate-types" style={{ background: 'var(--white)', padding: '120px 0' }}>
    <div className="container">
      <PageSectionHeader
        number="01" label={useT()("Choose your gate", "Elige tu portón")}
        title={useT()("Choose Your", "Elige tu")}
        accent={useT()("Gate Type.", "tipo de portón.")}
        sub={useT()("Pick the configuration that fits your opening. Every option is available across our fence materials.", "Elige la configuración que se ajuste a tu abertura. Todas las opciones están disponibles en nuestros materiales.")}
      />
      <GateCardGrid items={data.gateTypes}/>
    </div>
  </section>
);

const GateQuoteChecklist = () => {
  const t = useT();
  return (
    <section className="wfs-brand-texture" style={{ backgroundColor: 'var(--ink)', padding: '120px 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr', gap: 56, alignItems: 'start' }}>
          <div>
            <div className="mono" style={{
              display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 18,
              fontSize: 11, fontWeight: 700, letterSpacing: '0.22em',
              textTransform: 'uppercase', color: 'var(--blue-ice)',
            }}>
              <span aria-hidden style={{ width: 30, height: 3, background: 'var(--tangerine)', borderRadius: 2 }}/>
              {t('Before you quote', 'Antes de cotizar')}
            </div>
            <h2 className="display" style={{ margin: 0, fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: 1.02, letterSpacing: '-0.02em', color: 'var(--white)' }}>
              {t('What We Need to', 'Lo que necesitamos para')}<br/>
              <span style={{ color: 'var(--tangerine)' }}>{t('Quote Your Gate.', 'cotizar tu portón.')}</span>
            </h2>
            <p style={{ marginTop: 20, fontSize: 14.5, lineHeight: 1.6, color: 'var(--alice-blue)', maxWidth: 360 }}>
              {t('To prepare an accurate gate quote, send us the opening size, material, height, color, gate type, and any hardware requirements. Photos or drawings are highly recommended.',
                 'Para preparar una cotización precisa, envíanos la medida de la abertura, material, altura, color, tipo de portón y los herrajes que necesites. Las fotos o dibujos son muy recomendables.')}
            </p>
            <a href="estimate.html" className="mono" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10, marginTop: 24, paddingBottom: 4,
              fontSize: 11, fontWeight: 700, letterSpacing: '0.2em',
              textTransform: 'uppercase', color: 'var(--white)',
              borderBottom: '1px solid rgba(255,255,255,0.45)',
            }}>
              {t('Request a gate quote', 'Solicitar cotización de portón')} →
            </a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {GATE_CHECKLIST.map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'flex-start', gap: 12,
                padding: '16px 18px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.14)',
              }}>
                <span aria-hidden style={{
                  flexShrink: 0, marginTop: 1,
                  width: 22, height: 22, borderRadius: '50%',
                  background: 'var(--tangerine)', color: 'var(--ink)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                    <path d="M3.5 8.5l3 3 6-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span style={{ fontSize: 13.5, lineHeight: 1.4, color: 'var(--white)' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const GateHardware = () => (
  <section style={{ background: 'var(--white)', padding: '120px 0' }}>
    <div className="container">
      <PageSectionHeader
        number="02" label={useT()("Hardware & accessories", "Herrajes y accesorios")}
        title={useT()("Gate Hardware", "Herrajes para")}
        accent={useT()("& Accessories.", "portones.")}
        sub={useT()("We supply the hardware that makes a gate work, matched to your gate type, material and posts.", "Suministramos los herrajes que hacen funcionar un portón, según el tipo, el material y los postes.")}
      />
      <GateCardGrid items={GATE_HARDWARE_CARDS}/>
    </div>
  </section>
);

const GateSpecs = ({ data }) => (
  <section className="wfs-brand-texture" style={{ backgroundColor: 'var(--ink)', padding: '120px 0' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 56, alignItems: 'start' }}>
        <div>
          <div className="mono" style={{
            display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 18,
            fontSize: 11, fontWeight: 700, letterSpacing: '0.22em',
            textTransform: 'uppercase', color: 'var(--blue-ice)',
          }}>
            <span aria-hidden style={{ width: 30, height: 3, background: 'var(--tangerine)', borderRadius: 2 }}/>
            {useT()('Gate specs', 'Especificaciones')}
          </div>
          <h2 className="display" style={{ margin: 0, fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: 1, letterSpacing: '-0.02em', color: 'var(--white)' }}>
            {useT()('Real numbers,', 'Números reales,')}<br/>
            <span style={{ color: 'var(--tangerine)' }}>{useT()('no guesswork.', 'sin conjeturas.')}</span>
          </h2>
          <p style={{ marginTop: 20, fontSize: 14, lineHeight: 1.6, color: 'var(--alice-blue)', maxWidth: 320 }}>
            {useT()('Gate dimensions, hardware, and compatibility depend on the material, opening size, post type, and swing direction. Contact our team to confirm the right gate package for your project.', 'Las dimensiones, herrajes y compatibilidad del portón dependen del material, la medida de la abertura, el tipo de poste y la dirección de apertura. Contacta a nuestro equipo para confirmar el paquete adecuado para tu proyecto.')}
          </p>
          <a href="estimate.html" className="mono" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10, marginTop: 24, paddingBottom: 4,
            fontSize: 11, fontWeight: 700, letterSpacing: '0.2em',
            textTransform: 'uppercase', color: 'var(--white)',
            borderBottom: '1px solid rgba(255,255,255,0.45)',
          }}>
            {useT()('Talk to our team', 'Habla con nuestro equipo')} →
          </a>
        </div>
        <div style={{ position: 'relative' }}>
          <div aria-hidden style={{ position: 'absolute', inset: '14px -14px -14px 14px', background: 'var(--laser-blue)' }}/>
          <div style={{ position: 'relative', background: 'var(--white)', borderTop: '4px solid var(--tangerine)' }}>
          {data.specs.map(([k, v], i) => (
            <div key={k} style={{
              display: 'grid', gridTemplateColumns: '220px 1fr',
              borderBottom: i === data.specs.length - 1 ? 'none' : '1px solid rgba(0,16,17,0.08)',
            }}>
              <div className="mono" style={{
                padding: '14px 18px',
                fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'var(--charcoal)', fontWeight: 700, background: '#ffffff',
              }}>{k}</div>
              <div style={{ padding: '14px 18px', fontSize: 14, color: 'var(--ink)' }}>{v}</div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const GateApplications = ({ data }) => (
  <section style={{ background: 'var(--white)', padding: '120px 0 0' }}>
    <div className="container">
      <PageSectionHeader
        number="03" label={useT()("Where gates go", "Dónde van los portones")}
        title={useT()("Common Gate", "Aplicaciones")}
        accent={useT()("Applications.", "comunes de portón.")}
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        {data.applications.map(([t, body], i) => (
          <div key={t} style={{
            background: 'var(--white)', color: 'var(--ink)',
            padding: '32px 28px', border: '1px solid rgba(0,16,17,0.1)',
          }}>
            <div className="display" style={{ fontSize: 36, color: 'var(--tangerine)', lineHeight: 1, marginBottom: 18 }}>0{i+1}</div>
            <h3 className="display" style={{ fontSize: 22, lineHeight: 1.1, margin: '0 0 12px' }}>{t}</h3>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'var(--charcoal)' }}>{body}</p>
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
      id="other-gates" chapter="05"
      label={{ EN: 'More Gate Options', ES: 'Más opciones de portones' }}
      items={items}
      topLink={{ href: 'products.html#gates', label: { EN: 'All gates', ES: 'Todos los portones' } }}
      ctaLabel={{ EN: 'Explore', ES: 'Explora' }}
    />
  );
};

const GateCTA = ({ data }) => {
  const c = data.cta;
  return (
    <CTABand
      kicker={c.kicker}
      title={c.title}
      accent={c.accent}
      body={c.body}
      primary={c.primary}
      secondary={c.secondary}
    />
  );
};

const GatePage = ({ slug }) => {
  const base = GATE_DATA[slug];
  if (!base) return <p style={{ padding: 80, textAlign: 'center' }}>Gate type not found.</p>;
  const data = useTrData(base);
  return (
    <>
      <SiteHeader active="Gates" />
      <GateHero data={data}/>
      <GateQuickFacts data={data}/>
      <GateTypes data={data}/>
      <GateQuoteChecklist />
      <GateHardware />
      <GateSpecs data={data}/>
      <GateApplications data={data}/>
      <ProjectGallery items={base.projects}/>
      <GateOtherGates currentSlug={slug}/>
      <GateCTA data={data}/>
      <Footer />
    </>
  );
};

Object.assign(window, { GATE_DATA, GatePage });
