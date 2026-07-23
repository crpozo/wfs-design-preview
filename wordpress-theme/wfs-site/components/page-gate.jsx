/* Gate detail pages, dedicated template (different from Fences/page-material).
   Focus is on helping the customer quote a gate correctly: gate type, opening
   size, material, hardware and posts. */

const GATE_MATERIALS = 'Vinyl, aluminum, chain link, metal, and EC Fence options';
const GATE_HARDWARE = 'Hinges, latches, drop rods, cane bolts, and accessories';
const GATE_LEADTIME = 'Stock and lead time vary by size, material, color, and hardware';

const GATE_SPECS = [
  ['Gate Types', 'Single swing, double swing, sliding, cantilever, rolling, and custom gates'], ['Widths', 'Standard and custom sizes available depending on material'], ['Heights', 'Available heights vary by gate material and style'], ['Materials', GATE_MATERIALS], ['Hardware', GATE_HARDWARE], ['Lead Time', GATE_LEADTIME],
];

const GATE_HARDWARE_CARDS = [
  { name: 'Hinges', tag: 'All gate types', notes: 'Gate hinges available based on gate type, material, and post setup.', img: 'https://crpozo.github.io/wfs-design-preview/assets/products/self-closing-hinge.jpg' }, { name: 'Latches', tag: 'Access', notes: 'Latch options for walk gates, pool gates, and general access.', img: 'https://crpozo.github.io/wfs-design-preview/assets/products/gravity-latch.jpg' }, { name: 'Drop Rods / Cane Bolts', tag: 'Double gates', notes: 'For double gates and added stability when closed.', img: 'https://crpozo.github.io/wfs-design-preview/assets/products/drop-rod.jpg' }, { name: 'Posts & Caps', tag: 'Framework', notes: 'Gate posts, blank posts, terminal posts, and post caps available.', img: 'https://crpozo.github.io/wfs-design-preview/assets/products/gothic-post-cap.jpg' },
];

const GATE_CHECKLIST = [
  'Opening size, preferably post-to-post', 'Gate height', 'Material type', 'Color', 'Single or double gate', 'Existing posts or new posts needed', 'Hardware needed', 'Pickup or delivery location', 'Photo or drawing of the opening',
];

const GATE_DATA = {
  single: {
    slug: 'single', name: 'Single Swing', tag: 'Single swing gate materials & hardware', heroTitle: 'Single Swing Gates Built', heroAccent: 'for the Right Opening.', heroBody: 'Single swing gates for pedestrian access, pool enclosures, side yards, and residential or commercial openings. Available in multiple materials, sizes, colors, and hardware options. Send us your opening size and project details for an accurate quote.', heroImg: 'https://crpozo.github.io/wfs-design-preview/assets/SINGLE_SWING_GATE.png', quickFacts: [
      ['Best For', 'Walk gates, side yards, pool enclosures, pedestrian access'], ['Materials', GATE_MATERIALS], ['Hardware', GATE_HARDWARE], ['Lead Time', GATE_LEADTIME], ], gateTypes: [
      { name: 'Standard Walk Gate', tag: 'Pedestrian', notes: 'Common single gate sizes for pedestrian access.', img: 'https://crpozo.github.io/wfs-design-preview/assets/projects/gate-single-walk.png' }, { name: 'Custom Opening Gate', tag: 'Made to size', notes: 'Built to match your exact opening size.', img: 'https://crpozo.github.io/wfs-design-preview/assets/projects/gate-single-custom-pvc.png' }, { name: 'Matching Material Gate', tag: 'All materials', notes: 'Available in aluminum, vinyl, chain link, metal, and EC Fence styles.', img: 'https://crpozo.github.io/wfs-design-preview/assets/projects/gate-single-matching-ecfence.png' }, ], specs: GATE_SPECS, applications: [
      ['Pedestrian Access', 'Single gates for walkways, side yards, and everyday access points.', 'Everyday walk-through'], ['Pool Enclosures', 'Gate options for pool areas and code-related requirements.', 'Meets pool barrier code'], ['Service Openings', 'Single or double gates for maintenance access, equipment, and utility areas.', 'Maintenance & utility'], ], projects: [
      { name: 'Cape Coral Residential', loc: 'Cape Coral, FL', size: 'Custom Opening', material: { EN: 'PVC Gate', ES: 'Portón PVC' }, type: { EN: 'White PVC Double Gate', ES: 'Portón doble PVC blanco' }, contractor: 'Coastline Fence Co.', year: '2024', imgUrl: 'https://crpozo.github.io/wfs-design-preview/assets/projects/pvc-privacy-gate-white.jpg' }, { name: 'Residential Walk Gate', loc: 'Fort Myers, FL', size: '4 ft', material: { EN: 'Chain Link Gate', ES: 'Portón malla ciclónica' }, type: { EN: 'Black Chain Link Single Gate', ES: 'Portón sencillo de malla ciclónica negro' }, contractor: 'Estate Fence Pros', year: '2024', imgUrl: 'https://crpozo.github.io/wfs-design-preview/assets/SINGLE_SWING_GATE.png' }, { name: 'Pool Enclosure Gate', loc: 'Naples, FL', size: '4 ft', material: { EN: 'Aluminum Custom Gate', ES: 'Portón de aluminio a medida' }, type: { EN: 'Alum 4 Rail Smooth Bottom Custom Gate, Black', ES: 'Portón a medida de aluminio 4 rieles fondo liso, negro' }, contractor: 'Naples Outdoor', year: '2025', imgUrl: 'https://crpozo.github.io/wfs-design-preview/assets/projects/alum-4-rail-smooth-bottom-custom-gate-black.jpg' }, { name: 'Double Swing Gate', loc: 'Cape Coral, FL', size: '12 ft', material: { EN: 'PVC Gate', ES: 'Portón PVC' }, type: { EN: 'White PVC Double Gate', ES: 'Portón doble PVC blanco' }, contractor: 'Naples Outdoor', year: '2025', imgUrl: 'https://crpozo.github.io/wfs-design-preview/assets/projects/pvc-double-gate-white.jpg' }, { name: 'Chain Link Service Gate', loc: 'Lehigh Acres, FL', size: '6 ft', material: { EN: 'Chain Link Gate', ES: 'Portón malla ciclónica' }, type: { EN: 'Black Chain Link Single Gate', ES: 'Portón sencillo de malla ciclónica negro' }, contractor: 'Industrial Fence FL', year: '2024', imgUrl: 'https://crpozo.github.io/wfs-design-preview/assets/projects/cl-gate-black.jpg' }, { name: 'Metal Privacy Gate', loc: 'Estero, FL', size: '6 ft', material: { EN: 'Chain Link Gate', ES: 'Portón malla ciclónica' }, type: { EN: 'Galvanized Chain Link Sliding Gate', ES: 'Portón corredizo de malla ciclónica galvanizada' }, contractor: 'Gulf Perimeter LLC', year: '2025', imgUrl: 'https://crpozo.github.io/wfs-design-preview/assets/SLIDING_GATE.png' }, ], cta: {
      kicker: 'Single swing gate quote', title: 'Ready to Quote Your', accent: 'Gate?', body: 'Send us your opening size, gate height, material, color, swing type, hardware needs, and project location. Photos or drawings help us quote the gate more accurately.', primary: ['Request a Gate Quote', 'estimate.html#contact'], secondary: ['Call (239) 689-5496', 'tel:2396895496'], }, }, double: {
    slug: 'double', name: 'Double Swing', tag: 'Double swing gate materials & hardware', heroTitle: 'Double Swing Gates Built', heroAccent: 'for Wider Openings.', heroBody: 'Double swing gates for driveways, equipment access, and wider residential or commercial openings. Available in multiple materials, sizes, colors, and hardware options. Send us your opening size and project details for an accurate quote.', heroImg: 'https://crpozo.github.io/wfs-design-preview/assets/DOUBLE_GATE.png', quickFacts: [
      ['Best For', 'Driveways, equipment access, service entrances, wide openings'], ['Materials', GATE_MATERIALS], ['Hardware', GATE_HARDWARE], ['Lead Time', GATE_LEADTIME], ], gateTypes: [
      { name: 'Standard Driveway Gate', tag: 'Vehicle access', notes: 'Common double gate sizes for driveway and vehicle access.', img: 'https://crpozo.github.io/wfs-design-preview/assets/DOUBLE_GATE.png' }, { name: 'Privacy Drive Gate', tag: 'Solid panels', notes: 'Full privacy panels matched to vinyl or metal runs.', img: 'https://crpozo.github.io/wfs-design-preview/assets/projects/pvc-privacy-cantilever-gate-white.jpg' }, { name: 'Custom Opening Gate', tag: 'Made to size', notes: 'Built to match your exact driveway opening.', img: 'https://crpozo.github.io/wfs-design-preview/assets/projects/pvc-gate-sand.jpg' }, { name: 'Matching Material Gate', tag: 'All materials', notes: 'Available in aluminum, vinyl, chain link, metal, and EC Fence styles.', img: 'https://crpozo.github.io/wfs-design-preview/assets/projects/cl-swing-gate-galv-4.jpg' }, ], specs: GATE_SPECS, applications: [
      ['Driveway Access', 'Double gates that open wide for vehicles and equipment.', 'Opens wide for vehicles'], ['Service Openings', 'Wide access for maintenance, utility, and delivery areas.', 'Maintenance & utility'], ['Estate Entries', 'Symmetrical double gates for a formal main entrance.', 'Formal main entrance'], ], projects: [
      { name: 'Cape Coral Residential', loc: 'Cape Coral, FL', size: '12 ft Opening', material: 'Double Swing Gate', type: 'Vinyl gate, sand, drop rod + center latch', contractor: 'Coastline Fence Co.', year: '2024', imgUrl: 'https://crpozo.github.io/wfs-design-preview/assets/projects/pvc-gate-sand.jpg' }, { name: 'Driveway Gate', loc: 'Fort Myers, FL', size: '14 ft', material: 'Aluminum Gate', type: 'Aluminum double drive gate, residential grade', contractor: 'Estate Fence Pros', year: '2024', imgUrl: 'https://crpozo.github.io/wfs-design-preview/assets/DOUBLE_GATE.png' }, { name: 'Estate Entry', loc: 'Naples, FL', size: '16 ft', material: 'Vinyl / PVC Gate', type: 'Vinyl privacy gate, white, matching panels', contractor: 'Naples Outdoor', year: '2025', imgUrl: 'https://crpozo.github.io/wfs-design-preview/assets/projects/pvc-privacy-gate-white.jpg' }, { name: 'Service Entrance', loc: 'Lehigh Acres, FL', size: '12 ft', material: 'Chain Link Gate', type: 'Galvanized swing gate, cane bolt', contractor: 'Industrial Fence FL', year: '2025', imgUrl: 'https://crpozo.github.io/wfs-design-preview/assets/projects/cl-swing-gate-galv-4.jpg' }, { name: 'Privacy Drive', loc: 'Estero, FL', size: '8 ft', material: 'Metal / DuraFence Gate', type: 'Metal privacy double gate, matching run', contractor: 'Gulf Perimeter LLC', year: '2024', imgUrl: 'https://crpozo.github.io/wfs-design-preview/assets/SLIDING_GATE.png' }, ], cta: {
      kicker: 'Double swing gate quote', title: 'Ready to Quote Your', accent: 'Gate?', body: 'Send us your opening size, gate height, material, color, swing type, hardware needs, and project location. Photos or drawings help us quote the gate more accurately.', primary: ['Request a Gate Quote', 'estimate.html#contact'], secondary: ['Call (239) 689-5496', 'tel:2396895496'], }, }, sliding: {
    slug: 'sliding', name: 'Sliding Gates', tag: 'Sliding gate materials & hardware', heroTitle: 'Sliding Gates Built', heroAccent: 'for Tight Openings.', heroBody: 'Track-mounted sliding gates for tight or sloped driveways where a swing gate won’t fit. Available in multiple materials, sizes, colors, and hardware options. Send us your opening size and project details for an accurate quote.', heroImg: 'https://crpozo.github.io/wfs-design-preview/assets/SLIDING_GATE.png', quickFacts: [
      ['Best For', 'Tight driveways, sloped sites, limited swing clearance'], ['Materials', GATE_MATERIALS], ['Hardware', GATE_HARDWARE], ['Lead Time', GATE_LEADTIME], ], gateTypes: [
      { name: 'Track-Mounted Slide', tag: 'Space-saving', notes: 'Slides parallel to the fence on a ground track.', img: 'https://crpozo.github.io/wfs-design-preview/assets/SLIDING_GATE.png' }, { name: 'Privacy Slide Gate', tag: 'Solid panels', notes: 'Full privacy panels for vinyl or metal runs.', img: 'https://crpozo.github.io/wfs-design-preview/assets/projects/pvc-privacy-cantilever-gate-white.jpg' }, { name: 'Custom Opening Gate', tag: 'Made to size', notes: 'Built to match your exact opening and layout.', img: 'https://crpozo.github.io/wfs-design-preview/assets/projects/pvc-gate-sand.jpg' }, { name: 'Matching Material Gate', tag: 'All materials', notes: 'Available in chain link, vinyl, metal, and EC Fence styles.', img: 'https://crpozo.github.io/wfs-design-preview/assets/projects/cl-gate-black.jpg' }, ], specs: GATE_SPECS, applications: [
      ['Limited Swing Clearance', 'Slides parallel to the fence with no swing arc.', 'No swing arc needed'], ['Sloped Driveways', 'Track options for grade changes and uneven ground.', 'Handles grade changes'], ['Daily-Use Access', 'Smooth operation for openings used many times a day.', 'Smooth daily operation'], ], projects: [
      { name: 'Cape Coral Residential', loc: 'Cape Coral, FL', size: '12 ft Opening', material: 'Sliding Gate', type: 'Track-mounted slide gate, manual operation', contractor: 'Coastline Fence Co.', year: '2024', imgUrl: 'https://crpozo.github.io/wfs-design-preview/assets/SLIDING_GATE.png' }, { name: 'Tight Driveway', loc: 'Fort Myers, FL', size: '14 ft', material: 'Chain Link Gate', type: 'Galvanized slide gate, twin rollers', contractor: 'Industrial Fence FL', year: '2024', imgUrl: 'https://crpozo.github.io/wfs-design-preview/assets/SLIDING_GATE.png' }, { name: 'Sloped Lot Slide', loc: 'Naples, FL', size: '12 ft', material: 'Vinyl-Coated Gate', type: 'Vinyl-coated slide gate, ground track', contractor: 'Naples Outdoor', year: '2025', imgUrl: 'https://crpozo.github.io/wfs-design-preview/assets/SLIDING_GATE.png' }, { name: 'Privacy Slide', loc: 'Estero, FL', size: '6 ft', material: 'Metal / DuraFence Gate', type: 'Metal privacy slide gate, matching run', contractor: 'Gulf Perimeter LLC', year: '2025', imgUrl: 'https://crpozo.github.io/wfs-design-preview/assets/DOUBLE_GATE.png' }, { name: 'Commercial Slide', loc: 'Punta Gorda, FL', size: '16 ft', material: 'EC Fence Gate', type: 'EC Fence slide gate, commercial spec', contractor: 'Harbor Iron Works', year: '2024', imgUrl: 'https://crpozo.github.io/wfs-design-preview/assets/CANTILEVER.png' }, ], cta: {
      kicker: 'Sliding gate quote', title: 'Ready to Quote Your', accent: 'Gate?', body: 'Send us your opening size, gate height, material, color, swing type, hardware needs, and project location. Photos or drawings help us quote the gate more accurately.', primary: ['Request a Gate Quote', 'estimate.html#contact'], secondary: ['Call (239) 689-5496', 'tel:2396895496'], }, }, cantilever: {
    slug: 'cantilever', name: 'Cantilever', tag: 'Cantilever gate materials & hardware', heroTitle: 'Cantilever Gates Built', heroAccent: 'for Any Surface.', heroBody: 'Cantilever gates are suspended in the air on internal rollers, the frame never touches the ground, which is their biggest strength. Designed to work over any surface, with openings up to 30 feet wide including the counterweight section. Send us your opening size and project details for an accurate quote.', heroImg: 'https://crpozo.github.io/wfs-design-preview/assets/CANTILEVER.png', quickFacts: [
      ['Best For', 'Driveways and openings over any surface, industrial yards, daily-use access'], ['Max Width', "30' including the counterweight section"], ['Materials', GATE_MATERIALS], ['Hardware', 'Cantilever rollers, latches, and receiver posts, no hinges'], ], typesTitle: 'Cantilever', typesAccent: 'Specifications.', typesSub: 'Cantilever is the gate type, every cantilever gate is suspended in the air. These are the specifications that define your build.', gateTypes: [
      { name: 'Suspended Frame', tag: 'No ground contact', notes: 'The gate hangs from internal rollers and floats over the opening, nothing touches the ground.', img: 'https://crpozo.github.io/wfs-design-preview/assets/CANTILEVER.png' }, { name: 'Works Over Any Surface', tag: 'All driveways', notes: 'Concrete, gravel, pavers, grass or uneven ground, the surface below does not matter.', img: 'https://crpozo.github.io/wfs-design-preview/assets/projects/cl-swing-gate-galv-4.jpg' }, { name: "Max Width 30'", tag: 'With counterweight', notes: 'Openings up to 30 feet wide, counting the counterbalance section.', img: 'https://crpozo.github.io/wfs-design-preview/assets/projects/pvc-privacy-cantilever-gate-white.jpg' }, { name: 'Material Options', tag: 'All materials', notes: 'Available in chain link, vinyl-coated, metal, and EC Fence styles.', img: 'https://crpozo.github.io/wfs-design-preview/assets/projects/cl-fence-black.jpg' }, ], hardware: [
      { name: 'Cantilever Rollers', tag: 'Load-bearing', notes: 'Internal roller trucks carry the gate, the frame rides on them, suspended in the air.', img: 'https://crpozo.github.io/wfs-design-preview/assets/CANTILEVER.png' }, { name: 'Latches & Receivers', tag: 'Closure', notes: 'Cantilever latch and receiver post catch the nose of the gate when closed.', img: 'https://crpozo.github.io/wfs-design-preview/assets/projects/cl-swing-gate-galv-4.jpg' }, { name: 'Counterbalance Section', tag: 'Structure', notes: 'The tail section counterweights the gate across the opening.', img: 'https://crpozo.github.io/wfs-design-preview/assets/projects/pvc-privacy-cantilever-gate-white.jpg' }, { name: 'Guide & Support Posts', tag: 'Framework', notes: 'Heavy posts carry the rollers, a cantilever gate uses no hinges.', img: 'https://crpozo.github.io/wfs-design-preview/assets/projects/cl-fence-black.jpg' }, ], specs: [
      ['Gate Type', 'Cantilever, suspended in the air on rollers, no ground track'], ['Max Width', "30' including the counterweight section"], ['Heights', 'Available heights vary by gate material and style'], ['Materials', GATE_MATERIALS], ['Hardware', 'Cantilever rollers, latch, and receiver / guide posts, no hinges'], ['Lead Time', GATE_LEADTIME], ], applications: [
      ['Industrial Perimeters', 'Long openings for yards, storage, and commercial sites.', 'Built for long openings'], ['Any Surface', 'Designed for various surfaces, the suspended frame clears them all.', 'No ground contact'], ['Wide Openings', "Single openings up to 30' including the counterweight.", "Up to 30' spans"], ], projects: [
      { name: 'Industrial Yard', loc: 'Fort Myers, FL', size: '30 ft Opening', material: 'Cantilever Gate', type: 'Galvanized cantilever gate, V-rollers', contractor: 'Industrial Fence FL', year: '2024', imgUrl: 'https://crpozo.github.io/wfs-design-preview/assets/CANTILEVER.png' }, { name: 'Coastal Perimeter', loc: 'Sanibel, FL', size: '24 ft', material: 'Chain Link Gate', type: 'Vinyl-coated cantilever, salt-rated rollers', contractor: 'Harbor Iron Works', year: '2024', imgUrl: 'https://crpozo.github.io/wfs-design-preview/assets/CANTILEVER.png' }, { name: 'Storage Facility', loc: 'Bonita Springs, FL', size: '26 ft', material: 'Vinyl / PVC Gate', type: 'PVC privacy cantilever gate, white', contractor: 'Industrial Fence FL', year: '2025', imgUrl: 'https://crpozo.github.io/wfs-design-preview/assets/projects/pvc-privacy-cantilever-gate-white.jpg' }, { name: 'Commercial Entrance', loc: 'Estero, FL', size: '20 ft', material: 'Metal Gate', type: 'DuraFence cantilever gate, privacy face', contractor: 'Gulf Perimeter LLC', year: '2025', imgUrl: 'https://crpozo.github.io/wfs-design-preview/assets/ROLLING_GATE.png' }, { name: 'Distribution Yard', loc: 'Immokalee, FL', size: '30 ft', material: 'EC Fence Gate', type: 'Custom cantilever, 30 ft with counterweight', contractor: 'Harbor Iron Works', year: '2024', imgUrl: 'https://crpozo.github.io/wfs-design-preview/assets/SLIDING_GATE.png' }, ], cta: {
      kicker: 'Cantilever gate quote', title: 'Ready to Quote Your', accent: 'Gate?', body: 'Send us your opening size, gate height, material, color, swing type, hardware needs, and project location. Photos or drawings help us quote the gate more accurately.', primary: ['Request a Gate Quote', 'estimate.html#contact'], secondary: ['Call (239) 689-5496', 'tel:2396895496'], }, }, rolling: {
    slug: 'rolling', name: 'Rolling Gate', tag: 'Rolling gate materials & hardware', heroTitle: 'Rolling Gates Built', heroAccent: 'on Big Wheels.', heroBody: 'What defines a rolling gate is its big rubber wheels, they carry the gate across the opening and are designed for a variety of surfaces, including grass and uneven ground. Guide rollers mount on the posts. Send us your opening size and project details for an accurate quote.', heroImg: 'https://crpozo.github.io/wfs-design-preview/assets/ROLLING_GATE.png', quickFacts: [
      ['Best For', 'Commercial perimeters, industrial yards, grass and uneven surfaces'], ['Max Width', "30' total width, like all specialty gates"], ['Materials', 'Chain link (recommended); other materials require a double frame'], ['Hardware', "Rolling gate kit, LOCK N' LATCH rolling gate latch (PS)"], ], typesTitle: 'Rolling Gate', typesAccent: 'Specifications.', typesSub: 'Rolling is the gate type, the big wheels are what define it. These are the specifications that shape your build.', gateTypes: [
      { name: 'Big Rubber Wheels', tag: 'Signature feature', notes: 'Large wheels carry the gate across the opening, made to roll over grass and uneven surfaces.', img: 'https://crpozo.github.io/wfs-design-preview/assets/ROLLING_GATE.png' }, { name: 'Post-Mounted Rollers', tag: 'Guides', notes: 'Guide rollers mount on the posts, not the ground, keeping the gate aligned as it rolls.', img: 'https://crpozo.github.io/wfs-design-preview/assets/projects/cl-gate-black.jpg' }, { name: 'Posts for Automated Gates', tag: 'Prep only', notes: 'We install the posts and framework for powered gates, we do not build the mechanical operators themselves.', img: 'https://crpozo.github.io/wfs-design-preview/assets/SLIDING_GATE.png' }, { name: 'Material & Frame', tag: 'Chain link first', notes: 'Chain link is the recommended build; other materials require a double frame.', img: 'https://crpozo.github.io/wfs-design-preview/assets/projects/cl-swing-gate-galv-4.jpg' }, ], hardware: [
      { name: 'Rolling Gate Kit', tag: 'Core kit', notes: 'Complete rolling gate kit with the big wheels that define this gate type.', img: 'https://crpozo.github.io/wfs-design-preview/assets/ROLLING_GATE.png' }, { name: "Lock N' Latch", tag: 'Rolling gate latch · PS', notes: "LOCK N' LATCH rolling gate latch (PS), the closure made for rolling gates.", img: 'https://crpozo.github.io/wfs-design-preview/assets/projects/cl-gate-black.jpg' }, { name: 'Guide Rollers', tag: 'Post-mounted', notes: 'Rollers mount on the posts to keep the gate tracking straight as it rolls.', img: 'https://crpozo.github.io/wfs-design-preview/assets/SLIDING_GATE.png' }, { name: 'Posts & Framework', tag: 'Structure', notes: 'Gate posts and framework, no hinges and no drop rods on a rolling gate.', img: 'https://crpozo.github.io/wfs-design-preview/assets/projects/cl-swing-gate-galv-4.jpg' }, ], specs: [
      ['Gate Type', 'Rolling, big rubber wheels roll the gate across the opening'], ['Max Width', "30' total width, like all specialty gates"], ['Materials', 'Chain link recommended; vinyl, aluminum, metal, and EC Fence require a double frame'], ['Hardware', "Rolling gate kit, LOCK N' LATCH rolling gate latch (PS), no hinges, no drop rods"], ['Heights', 'Available heights vary by gate material and style'], ['Lead Time', GATE_LEADTIME], ], applications: [
      ['Commercial Perimeters', 'Wide gates for yards, storage, and industrial sites.', 'Yards, storage, industrial'], ['Grass & Uneven Surfaces', 'The big wheels roll over grass, gravel, and surfaces that are not perfectly smooth.', 'Rolls over grass'], ['Heavy Vehicle Access', 'Openings for trucks and equipment.', 'Trucks and equipment'], ], projects: [
      { name: 'Self-Storage Facility', loc: 'Bonita Springs, FL', size: "Up to 30' total", material: 'Rolling Gate', type: 'Galvanized rolling gate, ground rollers', contractor: 'Industrial Fence FL', year: '2024', imgUrl: 'https://crpozo.github.io/wfs-design-preview/assets/ROLLING_GATE.png' }, { name: 'Industrial Yard', loc: 'Fort Myers, FL', size: "Up to 30' total", material: 'Chain Link Gate', type: 'Heavy chain link rolling gate', contractor: 'Industrial Fence FL', year: '2024', imgUrl: 'https://crpozo.github.io/wfs-design-preview/assets/ROLLING_GATE.png' }, { name: 'Commercial Perimeter', loc: 'Lehigh Acres, FL', size: "Up to 30' total", material: 'Vinyl-Coated Gate', type: 'Vinyl-coated rolling gate, double frame', contractor: 'Gulf Perimeter LLC', year: '2025', imgUrl: 'https://crpozo.github.io/wfs-design-preview/assets/ROLLING_GATE.png' }, { name: 'Transit Hub', loc: 'North Fort Myers, FL', size: "Up to 30' total", material: 'Metal Gate', type: 'Metal rolling gate, double frame', contractor: 'Industrial Fence FL', year: '2025', imgUrl: 'https://crpozo.github.io/wfs-design-preview/assets/CANTILEVER.png' }, { name: 'Warehouse Entrance', loc: 'Immokalee, FL', size: "Up to 30' total", material: 'EC Fence Gate', type: 'EC Fence rolling gate, double frame', contractor: 'Harbor Iron Works', year: '2024', imgUrl: 'https://crpozo.github.io/wfs-design-preview/assets/SLIDING_GATE.png' }, ], cta: {
      kicker: 'Rolling gate quote', title: 'Ready to Quote Your', accent: 'Gate?', body: 'Send us your opening size, gate height, material, color, swing type, hardware needs, and project location. Photos or drawings help us quote the gate more accurately.', primary: ['Request a Gate Quote', 'estimate.html#contact'], secondary: ['Call (239) 689-5496', 'tel:2396895496'], }, },
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
        { label: t('Request a Gate Quote', 'Solicitar cotización de portón'), href: 'estimate.html', primary: true }, { label: t('View Gate Options', 'Ver opciones de portones'), href: '#gate-types' }, ]}
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
  <section style={{ background: 'var(--white)', padding: '64px 0 56px' }}>
    <div className="container">
      <div className="wfs-gate-facts" style={{
        position: 'relative', zIndex: 5, background: 'var(--white)', borderRadius: 16, boxShadow: '0 34px 70px -34px rgba(0,16,17,0.4)', border: '1px solid rgba(0,16,17,0.06)', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', overflow: 'hidden', }}>
        {data.quickFacts.map(([k, v], i) => (
          <div key={i} style={{
            padding: '30px 28px', borderLeft: i === 0 ? 'none' : '1px solid rgba(0,16,17,0.08)', }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              <span aria-hidden style={{ color: 'var(--laser-blue)', display: 'inline-flex' }}>{gateFactIcon(k)}</span>
              <span className="mono" style={{
                fontSize: 14, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink)', fontWeight: 700, }}>{k}</span>
            </div>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55, color: 'var(--charcoal)' }}>{v}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const GateCardGrid = ({ items }) => (
  <div className="wfs-profiles-grid" style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(items.length, 4)}, 1fr)`, gap: 14 }}>
    {items.map((p) => (
      <a key={p.name} href="estimate.html#contact" style={{
        display: 'flex', flexDirection: 'column', background: 'var(--white)', border: '1px solid rgba(0,16,17,0.12)', overflow: 'hidden', textDecoration: 'none', color: 'inherit', transition: 'transform 0.2s ease, box-shadow 0.2s ease', }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 18px 40px -20px rgba(0,16,17,0.25)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
        <div style={{ position: 'relative', aspectRatio: '4 / 3', background: '#263166', overflow: 'hidden' }}>
          {p.img && (
            <img src={p.img} alt={p.name}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}/>
          )}
        </div>
        <div style={{ padding: '18px 20px 20px' }}>
          <div className="mono" style={{
            fontSize: 13.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--tangerine)', fontWeight: 700, marginBottom: 10, }}>{p.tag}</div>
          <h3 className="display" style={{ margin: '0 0 10px', fontSize: 22.5, lineHeight: 1.1 }}>{p.name}</h3>
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: 'var(--charcoal)' }}>{p.notes}</p>
        </div>
      </a>
    ))}
  </div>
);

const GateTypes = ({ data }) => (
  <section id="gate-types" style={{ background: 'var(--white)', padding: '120px 0' }}>
    <div className="container">
      <PageSectionHeader
        number="01" label={useT()("Choose your gate", "Elige tu portón")}
        title={data.typesTitle || useT()("Choose Your", "Elige tu")}
        accent={data.typesAccent || useT()("Gate Type.", "tipo de portón.")}
        sub={data.typesSub || useT()("Pick the configuration that fits your opening. Every option is available across our fence materials.", "Elige la configuración que se ajuste a tu abertura. Todas las opciones están disponibles en nuestros materiales.")}
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
              display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 18, fontSize: 14, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--blue-ice)', }}>
              <span aria-hidden style={{ width: 30, height: 3, background: 'var(--tangerine)', borderRadius: 2 }}/>
              {t('Before you quote', 'Antes de cotizar')}
            </div>
            <h2 className="display" style={{ margin: 0, fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: 1.02, letterSpacing: '-0.02em', color: 'var(--white)' }}>
              {t('What We Need to', 'Lo que necesitamos para')}<br/>
              <span style={{ color: 'var(--tangerine)' }}>{t('Quote Your Gate.', 'cotizar tu portón.')}</span>
            </h2>
            <p style={{ marginTop: 20, fontSize: 16, lineHeight: 1.6, color: 'var(--alice-blue)', maxWidth: 360 }}>
              {t('To prepare an accurate gate quote, send us the opening size, material, height, color, gate type, and any hardware requirements. Photos or drawings are highly recommended.', 'Para preparar una cotización precisa, envíanos la medida de la abertura, material, altura, color, tipo de portón y los herrajes que necesites. Las fotos o dibujos son muy recomendables.')}
            </p>
            <a href="estimate.html#contact" className="mono" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10, marginTop: 24, paddingBottom: 4, fontSize: 14, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--white)', borderBottom: '1px solid rgba(255,255,255,0.45)', }}>
              {t('Request a gate quote', 'Solicitar cotización de portón')} →
            </a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {GATE_CHECKLIST.map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'flex-start', gap: 12, padding: '16px 18px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.14)', }}>
                <span aria-hidden style={{
                  flexShrink: 0, marginTop: 1, width: 22, height: 22, borderRadius: '50%', background: 'var(--tangerine)', color: 'var(--ink)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', }}>
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                    <path d="M3.5 8.5l3 3 6-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span style={{ fontSize: 15, lineHeight: 1.4, color: 'var(--white)' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const GateHardware = ({ data }) => (
  <section style={{ background: 'var(--white)', padding: '120px 0' }}>
    <div className="container">
      <PageSectionHeader
        number="02" label={useT()("Hardware & accessories", "Herrajes y accesorios")}
        title={useT()("Gate Hardware", "Herrajes para")}
        accent={useT()("& Accessories.", "portones.")}
        sub={useT()("We supply the hardware that makes a gate work, matched to your gate type, material and posts.", "Suministramos los herrajes que hacen funcionar un portón, según el tipo, el material y los postes.")}
      />
      <GateCardGrid items={(data && data.hardware) || GATE_HARDWARE_CARDS}/>
    </div>
  </section>
);

const GateSpecs = ({ data }) => (
  <section className="wfs-brand-texture" style={{ backgroundColor: 'var(--ink)', padding: '120px 0' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 56, alignItems: 'start' }}>
        <div>
          <div className="mono" style={{
            display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 18, fontSize: 14, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--blue-ice)', }}>
            <span aria-hidden style={{ width: 30, height: 3, background: 'var(--tangerine)', borderRadius: 2 }}/>
            {useT()('Gate specs', 'Especificaciones')}
          </div>
          <h2 className="display" style={{ margin: 0, fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: 1, letterSpacing: '-0.02em', color: 'var(--white)' }}>
            {useT()('Real numbers,', 'Números reales,')}<br/>
            <span style={{ color: 'var(--tangerine)' }}>{useT()('no guesswork.', 'sin conjeturas.')}</span>
          </h2>
          <p style={{ marginTop: 20, fontSize: 15.5, lineHeight: 1.6, color: 'var(--alice-blue)', maxWidth: 320 }}>
            {useT()('Gate dimensions, hardware, and compatibility depend on the material, opening size, post type, and swing direction. Contact our team to confirm the right gate package for your project.', 'Las dimensiones, herrajes y compatibilidad del portón dependen del material, la medida de la abertura, el tipo de poste y la dirección de apertura. Contacta a nuestro equipo para confirmar el paquete adecuado para tu proyecto.')}
          </p>
          <div style={{ marginTop: 26 }}>
            <PillCTA href="estimate.html" variant="light">
              {useT()('Talk to our team', 'Habla con nuestro equipo')}
            </PillCTA>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <div aria-hidden style={{ position: 'absolute', inset: '14px -14px -14px 14px', background: 'var(--laser-blue)' }}/>
          <div style={{ position: 'relative', background: 'var(--white)', borderTop: '4px solid var(--tangerine)' }}>
          {data.specs.map(([k, v], i) => (
            <div key={k} style={{
              display: 'grid', gridTemplateColumns: '220px 1fr', borderBottom: i === data.specs.length - 1 ? 'none' : '1px solid rgba(0,16,17,0.08)', }}>
              <div className="mono" style={{
                padding: '14px 18px', fontSize: 13.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--charcoal)', fontWeight: 700, background: '#ffffff', }}>{k}</div>
              <div style={{ padding: '14px 18px', fontSize: 15.5, color: 'var(--ink)' }}>{v}</div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const GateApplications = ({ data }) => {
  const t = useT();
  return (
  <section style={{ background: 'var(--white)', padding: '120px 0 0' }}>
    <div className="container">
      {/* Title over a heavy rule, same design as the material use cases */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'end', paddingBottom: 28, borderBottom: '2px solid var(--ink)', }}>
        <h2 className="display" style={{
          margin: 0, fontSize: 'clamp(30px, 3.4vw, 46px)', lineHeight: 1.02, letterSpacing: '-0.01em', fontWeight: 800, textTransform: 'uppercase', }}>
          {t('Common Gate', 'Aplicaciones comunes')}<br/>
          <span style={{ color: 'var(--tangerine)' }}>{t('Applications.', 'de portón.')}</span>
        </h2>
      </div>
      {data.applications.map(([title, body, badge], i) => (
        <UseCaseRow key={title} title={title} body={body} badge={badge} index={i}/>
      ))}
      <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: 26 }}>
        <a href="products.html#gates" className="mono" style={{
          display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 14, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--tangerine)', }}>
          {t('See all gate projects', 'Ver todos los proyectos de portones')}
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
  );
};

const GateOtherGates = ({ currentSlug }) => {
  const cur = currentSlug === 'single' ? 'single-swing'
    : currentSlug === 'double' ? 'double-swing' : currentSlug;
  const items = GATE_SYSTEMS.filter(g => g.id !== cur);
  return (
    <SystemTabs
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
  if (!base) return <p style={{ padding: 80, textAlign: 'center' }}>{useT()('Gate type not found.', 'Tipo de portón no encontrado.')}</p>;
  const data = useTrData(base);
  return (
    <>
      <SiteHeader active="Gates" />
      <GateHero data={data}/>
      <GateQuickFacts data={data}/>
      <GateTypes data={data}/>
      <GateQuoteChecklist />
      <GateHardware data={data} />
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
