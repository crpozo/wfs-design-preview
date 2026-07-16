/* Shared material detail page: hero + profiles + specs + use cases + projects + CTA */

const MATERIAL_DATA = {
  vinyl: {
    slug: 'vinyl',
    name: 'Vinyl / PVC',
    tag: 'Vinyl / PVC fence materials',
    heroTitle: 'Vinyl / PVC Fence Materials',
    heroAccent: 'Built for Florida.',
    heroBody: 'Low-maintenance vinyl fence materials for privacy, semi-privacy, pool enclosures, backyards, and HOA projects. Panels, posts, rails, gates, hardware, and accessories available for full material quotes.',
    heroImg: FENCE_IMG.vinyl,
    viewLabel: { EN: 'View Vinyl / PVC Options', ES: 'Ver opciones de Vinyl / PVC' },
    bestFor: 'Backyard privacy, pool enclosures, residential subdivisions',
    quickFacts: [
      ['Best For', 'Backyard privacy, pool enclosures, residential subdivisions'],
      ['Material', 'Low-maintenance vinyl / PVC'],
      ['Options', 'Privacy, semi-privacy, picket, and ranch rail styles'],
      ['Lead Time', 'Stock and lead time vary by style, height, color, and quantity'],
    ],
    profiles: [
      { name: 'Privacy', tag: 'Classic', notes: 'Full privacy vinyl fence panels for backyards and property lines.' },
      { name: 'Semi-Privacy', tag: 'Airflow', notes: 'Decorative vinyl fence option with partial visibility and airflow.' },
      { name: 'Picket', tag: 'Decorative', notes: 'Classic vinyl picket fence for front yards and decorative projects.' },
      { name: 'Ranch Rail', tag: 'Open rail', notes: 'Open vinyl rail system for large properties and boundaries.' },
    ],
    specs: [
      ['Heights', "4', 5', 6', and other options available by request"],
      ['Colors', 'White, tan, gray, and selected color options'],
      ['Material', 'Vinyl panels, posts, rails, gates, and hardware'],
      ['Styles', 'Privacy, semi-privacy, picket, and ranch rail'],
      ['Post Options', 'Line posts, end posts, corner posts, blank posts, and gate posts available'],
      ['Lead Time', 'Stock and lead time vary by style, height, color, and quantity'],
    ],
    useCasesBlurb: 'Vinyl earns its keep where privacy, low upkeep, and clean looks meet.',
    useCases: [
      ['Backyard Privacy', 'Low-maintenance vinyl fence materials for residential backyards and property lines.', 'Full privacy, zero painting'],
      ['Pool Enclosures', 'Clean vinyl fence options for pool areas and residential projects.', 'Clean look for pool areas'],
      ['HOA & Residential Communities', 'Consistent vinyl fence styles for communities, subdivisions, and shared spaces.', 'Consistent community styles'],
    ],
    cta: {
      kicker: 'Vinyl fence materials',
      title: 'Ready to Quote Your',
      accent: 'Vinyl Fence Materials?',
      body: 'Send us your linear footage, height, color, style, gate sizes, and project location. Our team will help prepare a material quote for pickup or delivery.',
      primary: ['Request a Quote', 'estimate.html'],
      secondary: ['Call (239) 689-5496', 'tel:2396895496'],
    },
    projects: [
      { name: 'Cape Coral Residential', loc: 'Cape Coral, FL', size: '320 LF', material: 'Vinyl', type: 'Vinyl privacy fence, 6 ft, white', contractor: 'Naples Outdoor', year: '2024', imgUrl: 'assets/projects/pvc-closed-top-white.jpg' },
      { name: 'Fort Myers Estate', loc: 'Fort Myers, FL', size: '410 LF', material: 'Vinyl', type: 'Vinyl semi-privacy, alternating pickets, sand', contractor: 'Estate Fence Pros', year: '2024', imgUrl: 'assets/projects/pvc-semi-privacy-alternative-pickets-sand.jpg' },
      { name: 'Naples Pool Enclosure', loc: 'Naples, FL', size: '180 LF', material: 'Vinyl', type: 'Vinyl privacy with gate, white', contractor: 'Naples Outdoor', year: '2025', imgUrl: 'assets/projects/pvc-privacy-gate-white.jpg' },
      { name: 'Estero Community', loc: 'Estero, FL', size: '44 lots', material: 'Vinyl', type: 'Vinyl semi-privacy, community standard', contractor: 'Gulf Perimeter LLC', year: '2025', imgUrl: 'assets/projects/pvc-alternate-semi-privacy.jpg' },
      { name: 'HOA Boundary', loc: 'Lehigh Acres, FL', size: '60 lots', material: 'Vinyl', type: 'Vinyl privacy, two-tone white and gray', contractor: 'Gulf Perimeter LLC', year: '2025', imgUrl: 'assets/projects/pvc-privacy-two-tone-white-and-gray.png' },
    ],
  },
  aluminum: {
    slug: 'aluminum',
    name: 'Aluminum',
    tag: 'Powder-coat aluminum',
    heroTitle: 'Powder-Coated Aluminum',
    heroAccent: 'Fence Materials.',
    heroBody: 'Aluminum fence materials for residential, commercial, and community projects, with pool-code compliant options available where required. Choose from multiple heights and styles, with gates, posts, rails, and hardware included as part of your complete material package.',
    heroImg: FENCE_IMG.aluminum,
    bestFor: 'Pool enclosures, residential yards, HOA communities',
    quickFacts: [
      ['Best For', 'Pool enclosures, residential yards, HOA communities'],
      ['Material', 'Powder-coated aluminum'],
      ['Styles', '2-rail, 3-rail, spear-top, flat-top options'],
      ['Lead Time', 'Stock and lead time vary by style, color, and quantity'],
    ],
    profiles: [
      { name: '2-Rail', tag: 'Standard', notes: 'Simple, open-profile aluminum fence option.' },
      { name: '3-Rail', tag: 'Popular', notes: 'Popular residential and pool-code configuration.' },
      { name: '3-Rail Spear Top', tag: 'Decorative', notes: 'Decorative picket-top style for residential projects.' },
      { name: '4-Rail', tag: 'Custom', notes: 'Available for taller or custom aluminum configurations.' },
      { name: 'Smooth Bottom', tag: 'Clean line', notes: 'Flat bottom rail with no picket points below the rail.' },
      { name: 'Rake Bottom', tag: 'Slopes', notes: 'Follows grade changes and sloped runs without gaps.' },
      { name: 'Puppy Picket', tag: 'Pet-friendly', notes: 'Tighter picket spacing at the bottom to keep small pets in.' },
      { name: 'Pool Code', tag: 'Compliant', notes: 'Meets Florida pool barrier requirements for spacing and height.' },
    ],
    specs: [
      ['Heights', "4', 5', 6', custom options available"],
      ['Colors', 'Black, bronze, white, and selected powder-coated finishes'],
      ['Material', 'Aluminum fence panels, posts, gates, and hardware'],
      ['Wind rating', 'Varies by product style and installation conditions'],
      ['Warranty', 'Ask our team for available manufacturer warranty details'],
      ['Lead time', 'Stock and lead time vary by material, color, and quantity'],
    ],
    useCasesBlurb: 'Aluminum earns its keep where code, curb appeal, and long runs meet.',
    useCases: [
      ['Pool Enclosures', 'Pool-code aluminum fencing for residential and community pools.', 'Meets pool barrier code'],
      ['Residential Front Yards', 'Clean, decorative aluminum fence for front yards and property lines.', 'Curb appeal, low upkeep'],
      ['HOA & Community Perimeters', 'Durable aluminum fence options for communities and shared spaces.', 'Built for shared spaces'],
    ],
    cta: {
      kicker: 'Aluminum fence materials',
      title: 'Ready to Quote Your',
      accent: 'Aluminum Fence Materials?',
      body: 'Send us your material needs, linear footage, height, color, gate sizes, and project location. Our team will help prepare a material quote for pickup or delivery.',
      primary: ['Request a Quote', 'estimate.html'],
      secondary: ['Call (239) 689-5496', 'tel:2396895496'],
    },
  },
  chainlink: {
    slug: 'chain-link',
    name: 'Chain Link',
    tag: 'Galvanized + Vinyl Coated',
    heroTitle: 'Chain Link Fence Materials',
    heroAccent: 'for Any Perimeter.',
    heroBody: 'Galvanized and vinyl-coated chain link fence materials for residential, commercial, industrial, and recreational projects. Mesh, posts, rails, fittings, gates, and hardware available for full material quotes.',
    heroImg: FENCE_IMG.chainlink,
    viewLabel: { EN: 'View Chain Link Options', ES: 'Ver opciones de chain link' },
    bestFor: 'Security perimeters, sports fields, industrial and residential sites',
    quickFacts: [
      ['Best For', 'Security, commercial, industrial, and recreational perimeters'],
      ['Material', 'Galvanized and vinyl-coated mesh, posts, rails, and fittings'],
      ['Options', 'Galvanized, black, and green vinyl-coated finishes'],
      ['Lead Time', 'Stock and lead time vary by gauge, finish, and quantity'],
    ],
    profiles: [
      { name: 'Galvanized', tag: 'Standard', notes: 'Classic zinc-coated mesh for security and perimeter fencing.' },
      { name: 'Black Vinyl-Coated', tag: 'Popular', notes: 'Vinyl-coated mesh with a clean, low-profile residential look.' },
      { name: 'Green Vinyl-Coated', tag: 'By request', notes: 'Vinyl-coated mesh for parks, courts, and recreational sites.' },
      { name: 'Heavy-Gauge Industrial', tag: 'Commercial', notes: 'Heavier mesh and framework for high-security commercial perimeters.' },
    ],
    specs: [
      ['Heights', "3', 4', 5', 6', and taller options available"],
      ['Mesh', 'Galvanized and vinyl-coated mesh in multiple gauges'],
      ['Finishes', 'Galvanized, black, and green vinyl-coated'],
      ['Material', 'Mesh, posts, rails, fittings, gates, and hardware'],
      ['Framework', 'Line posts, terminal posts, top rail, and tension wire'],
      ['Lead time', 'Stock and lead time vary by gauge, finish, and quantity'],
    ],
    useCasesBlurb: 'Chain link earns its keep where security, scale, and budget meet.',
    useCases: [
      ['Security Perimeters', 'Durable chain link fencing for commercial and industrial security.', 'Proven perimeter security'],
      ['Sports & Recreation', 'Vinyl-coated mesh for ball fields, courts, and park enclosures.', 'Courts, fields and parks'],
      ['Self-Storage & Industrial', 'Long perimeter runs for storage yards and industrial sites.', 'Long runs, low cost'],
    ],
    cta: {
      kicker: 'Chain link fence materials',
      title: 'Ready to Quote Your',
      accent: 'Chain Link Fence Materials?',
      body: 'Send us your material needs, linear footage, height, finish, gate sizes, and project location. Our team will help prepare a material quote for pickup or delivery.',
      primary: ['Request a Quote', 'estimate.html'],
      secondary: ['Call (239) 689-5496', 'tel:2396895496'],
    },
  },
  metal: {
    slug: 'metal',
    name: 'Metal / DuraFence',
    tag: 'Metal / DuraFence privacy materials',
    heroTitle: 'Metal / DuraFence Privacy',
    heroAccent: 'Fence Materials.',
    heroBody: 'Durable metal privacy fence materials for residential, commercial, and high-security projects. Panels, posts, rails, gates, hardware, and accessories available for full material quotes.',
    heroImg: FENCE_IMG.metal,
    viewLabel: { EN: 'View Metal / DuraFence Options', ES: 'Ver opciones de Metal / DuraFence' },
    bestFor: 'Privacy fences, modern yards, commercial screens, security projects',
    quickFacts: [
      ['Best For', 'Privacy fences, modern yards, commercial screens, security projects'],
      ['Material', 'Metal privacy panels, rails, and posts'],
      ['Options', 'Modern, Original, and P1 styles, with matching gates'],
      ['Lead Time', 'Stock and lead time vary by style, height, color, and quantity'],
    ],
    profilesSub: 'Available in Modern, Original, and P1 styles. Custom fabrication is available for gates only.',
    profiles: [
      { name: 'Modern', tag: 'Contemporary', notes: 'Clean-lined DuraFence profile for contemporary projects.' },
      { name: 'Original', tag: 'Classic', notes: 'The original DuraFence full-privacy board profile.' },
      { name: 'P1', tag: 'Panel', notes: 'DuraFence P1 privacy panel profile for residential and commercial runs.' },
    ],
    specs: [
      ['Heights', "6' and 8'"],
      ['Colors', 'White, black, bronze, and woodgrain'],
      ['Material', 'Metal panels, posts, rails, gates, and hardware'],
      ['Styles', 'Modern, Original, and P1'],
      ['Post Options', 'One 2-1/2" post type for all positions'],
      ['Lead Time', 'Stock and lead time vary by style, height, color, and quantity'],
    ],
    useCasesBlurb: 'Metal earns its keep where privacy, strength, and modern looks meet.',
    useCases: [
      ['Modern Privacy', 'Metal privacy fence materials for clean residential and commercial designs.', 'Solid-board look in metal'],
      ['Commercial Screens', 'Durable metal fence options for enclosures, screens, and utility areas.', 'Screens and enclosures'],
      ['Security Projects', 'Strong metal fence materials for projects that need privacy and durability.', 'Privacy plus durability'],
    ],
    cta: {
      kicker: 'Metal fence materials',
      title: 'Ready to Quote Your',
      accent: 'Metal Fence Materials?',
      body: 'Send us your linear footage, height, color, style, gate sizes, and project location. Our team will help prepare a material quote for pickup or delivery.',
      primary: ['Request a Quote', 'estimate.html'],
      secondary: ['Call (239) 689-5496', 'tel:2396895496'],
    },
    projects: [
      { name: 'Cape Coral Residential', loc: 'Cape Coral, FL', size: '320 LF', material: 'Metal', type: 'Horizontal metal board privacy, black', contractor: 'Gulf Perimeter LLC', year: '2024', imgUrl: 'assets/projects/met-fence-horizontal-black.jpg' },
      { name: 'Commercial Facility', loc: 'Fort Myers, FL', size: '480 LF', material: 'Metal', type: 'Metal fence, 3-rail, brown', contractor: 'Gulf Perimeter LLC', year: '2024', imgUrl: 'assets/projects/met-fence-3-rail-brown.jpg' },
      { name: 'Modern Residential Privacy', loc: 'Naples, FL', size: '260 LF', material: 'Metal', type: 'Metal fence, 3-rail, black', contractor: 'Estate Fence Pros', year: '2025', imgUrl: 'assets/projects/met-fence-3-rail-black.jpg' },
      { name: 'Utility Screen Enclosure', loc: 'Cape Coral, FL', size: '140 LF', material: 'Metal', type: 'Metal fence, 2-rail, white', contractor: 'Industrial Fence FL', year: '2025', imgUrl: 'assets/projects/met-fence-2-rail-white.jpg' },
      { name: 'HOA Privacy Project', loc: 'Estero, FL', size: '38 lots', material: 'Metal', type: 'Metal board privacy, 6 ft, community standard', contractor: 'Gulf Perimeter LLC', year: '2025' },
    ],
  },
  ecfence: {
    slug: 'ecfence',
    name: 'EC Fence',
    tag: 'EC Fence galvanized steel privacy panels',
    heroTitle: 'EC Fence Galvanized Steel',
    heroAccent: 'Privacy Panels.',
    heroBody: 'Self-mating galvanized steel fence panels for privacy, coastal properties, commercial sites, and modern residential projects. Panels, posts, gates, hardware, and accessories available for full material quotes.',
    heroImg: 'assets/ec-fence.jpg',
    viewLabel: { EN: 'View EC Fence Options', ES: 'Ver opciones de EC Fence' },
    bestFor: 'Coastal properties, commercial sites, modern residential projects',
    quickFacts: [
      ['Best For', 'Coastal properties, commercial sites, modern residential projects'],
      ['Material', 'Self-mating galvanized steel panels'],
      ['Options', 'Bronze, white, 6 ft panels, gates, and sloped runs'],
      ['Lead Time', 'Stock and lead time vary by color, quantity, and gate requirements'],
    ],
    profiles: [
      { name: 'Bronze 6 Ft', tag: 'Standard', notes: 'Bronze galvanized steel privacy panels for modern projects.' },
      { name: 'White 6 Ft', tag: 'Standard', notes: 'White galvanized steel privacy panels for clean residential and commercial designs.' },
      { name: 'Matching Gate', tag: 'Single / double', notes: 'Single and double gates available with hardware options.' },
      { name: 'Posts & Hardware', tag: 'Full package', notes: 'Posts, covers, hardware, and accessories for full material packages.' },
    ],
    specs: [
      ['Height', '6 ft'],
      ['Colors', 'Bronze and white'],
      ['Material', 'Self-mating galvanized steel panels'],
      ['Post Spacing', 'Based on EC Fence system requirements'],
      ['Gates', 'Single and double gates available by request'],
      ['Lead Time', 'Stock and lead time vary by color, quantity, and gate requirements'],
    ],
    useCasesBlurb: 'EC Fence earns its keep where coastal wind, privacy, and speed meet.',
    useCases: [
      ['Coastal Privacy', 'Galvanized steel privacy panels for coastal and Florida properties.', 'Built for salt air'],
      ['Commercial Properties', 'Clean privacy fence option for commercial sites, enclosures, and shared spaces.', 'Clean commercial screening'],
      ['Modern Residential', 'Modern privacy fence material for homes, yards, and property lines.', 'Modern panel look'],
    ],
    cta: {
      kicker: 'EC Fence materials',
      title: 'Ready to Quote Your',
      accent: 'EC Fence Materials?',
      body: 'Send us your linear footage, color, gate sizes, and project location. Our team will help prepare a material quote for pickup or delivery.',
      primary: ['Request a Quote', 'estimate.html'],
      secondary: ['Call (239) 689-5496', 'tel:2396895496'],
    },
    projects: [
      { name: 'Cape Coral Residential', loc: 'Cape Coral, FL', size: '320 LF', material: 'EC Fence', type: 'EC Fence panels, 6 ft, bronze', contractor: 'Harbor Iron Works', year: '2024', imgUrl: 'assets/projects/ecfence-bronze.jpg' },
      { name: 'Coastal Privacy Project', loc: 'Sanibel, FL', size: '240 LF', material: 'EC Fence', type: 'EC Fence panels, 6 ft, white', contractor: 'Harbor Iron Works', year: '2024', imgUrl: 'assets/projects/ecfence-white.jpg' },
      { name: 'Commercial Property Screen', loc: 'Fort Myers, FL', size: '460 LF', material: 'EC Fence', type: 'EC Fence panels, 6 ft, bronze', contractor: 'Gulf Perimeter LLC', year: '2025', imgUrl: 'assets/ec-fence.jpg' },
      { name: 'Modern Residential Privacy', loc: 'Naples, FL', size: '210 LF', material: 'EC Fence', type: 'EC Fence panels, 6 ft, white', contractor: 'Estate Fence Pros', year: '2025' },
      { name: 'HOA Privacy Project', loc: 'Port Charlotte, FL', size: '52 lots', material: 'EC Fence', type: 'EC Fence panels, 6 ft, community standard', contractor: 'Harbor Iron Works', year: '2025' },
    ],
  },
};

const MaterialHero = ({ data }) => {
  const t = useT();
  return (
  <PageHero
    crumbs={[['Home', 'Homepage.html'], ['Products', 'products.html'], [data.name, null]]}
    eyebrow={data.tag}
    title={data.heroTitle}
    accent={data.heroAccent}
    subtitle={data.heroBody}
    image={data.heroImg}
    actions={[
      { label: t('Request a Material Quote', 'Solicitar cotización de material'), href: 'estimate.html', primary: true },
      { label: data.viewLabel ? t(data.viewLabel.EN, data.viewLabel.ES) : t(`View ${data.name} Styles`, `Ver estilos de ${data.name}`), href: '#styles' },
    ]}
  />
  );
};

const MaterialQuickFacts = ({ data }) => (
  <section style={{ background: 'var(--white)', padding: '64px 0', borderBottom: '1px solid rgba(0,16,17,0.08)' }}>
    <div className="container">
      <FeatureRow items={data.quickFacts || [
        [useT()('Best for', 'Ideal para'), data.bestFor],
        [useT()('Material', 'Material'), data.specs.find(s => s[0] === 'Material')?.[1] || '—'],
        [useT()('Starts at', 'Desde'), data.specs.find(s => s[0] === 'Starts at')?.[1] || '—'],
        [useT()('Lead time', 'Plazo de entrega'), data.specs.find(s => s[0] === 'Lead time')?.[1] || '—'],
      ]}/>
    </div>
  </section>
);

/* Schematic drawn to match each profile. Decorative (aria-hidden): navy
   rails/boards + light verticals on a lavender panel; tangerine is reserved
   for the aluminum "custom" accent rail. Adapts by material so vinyl, chain
   link, metal and EC Fence get a fitting illustration too. */
const DIAG = { bg: '#e9edf9', navy: '#263166', light: '#aeb9de', accent: '#ff7133' };
const ProfileDiagram = ({ slug, name = '', index = 0 }) => {
  const { bg, navy, light, accent } = DIAG;
  const W = 220, H = 132, L = 18, R = 202;
  const nm = name.toLowerCase();
  const els = [];

  const pickets = (n, yTop, yBot, tips) => {
    for (let i = 0; i < n; i++) {
      const x = L + ((R - L) / (n - 1)) * i;
      els.push(<line key={`pk${i}`} x1={x} y1={tips ? yTop : yTop} x2={x} y2={yBot} stroke={light} strokeWidth="3" strokeLinecap="round"/>);
      if (tips) els.push(<path key={`sp${i}`} d={`M${x - 4} ${yTop} L${x} ${yTop - 9} L${x + 4} ${yTop} Z`} fill={light}/>);
    }
  };
  const rails = (rows) => rows.forEach((r, i) =>
    els.push(<line key={`rl${i}`} x1={L} y1={r.y} x2={R} y2={r.y} stroke={r.c || navy} strokeWidth="5" strokeLinecap="round" strokeDasharray={r.dash}/>)
  );
  const boards = (gap, c = navy, yTop = 28, yBot = 110) => {
    const bw = 8, step = bw + gap;
    let k = 0;
    for (let x = L; x <= R - bw + 0.5; x += step) { els.push(<rect key={`bd${k++}`} x={x} y={yTop} width={bw} height={yBot - yTop} fill={c}/>); }
  };

  if (slug === 'aluminum') {
    const spear = /spear/.test(nm);
    const custom = /4-rail|4 & 5|custom/.test(nm);
    let rows;
    if (/smooth/.test(nm)) {
      rows = [{ y: 40 }, { y: 108 }];
      pickets(9, 20, 108);
    } else if (/rake/.test(nm)) {
      els.push(<line key="rk1" x1={L} y1={58} x2={R} y2={34} stroke={navy} strokeWidth="5" strokeLinecap="round"/>);
      els.push(<line key="rk2" x1={L} y1={116} x2={R} y2={92} stroke={navy} strokeWidth="5" strokeLinecap="round"/>);
      for (let i = 0; i < 9; i++) {
        const x = L + ((R - L) / 8) * i, dy = -24 * (x - L) / (R - L);
        els.push(<line key={`rp${i}`} x1={x} y1={34 + dy + 24} x2={x} y2={122 + dy} stroke={light} strokeWidth="3" strokeLinecap="round"/>);
      }
      rows = [];
    } else if (/puppy/.test(nm)) {
      rows = [{ y: 38 }, { y: 74 }, { y: 106 }];
      pickets(9, 18, 106);
      for (let i = 0; i < 8; i++) {
        const x = L + ((R - L) / 8) * i + (R - L) / 16;
        els.push(<line key={`pp${i}`} x1={x} y1={74} x2={x} y2={106} stroke={light} strokeWidth="3" strokeLinecap="round"/>);
      }
    } else if (/pool/.test(nm)) {
      rows = [{ y: 34 }, { y: 104 }];
      pickets(11, 16, 112);
    } else if (custom) {
      rows = [{ y: 32 }, { y: 56 }, { y: 80, c: accent, dash: '7 5' }, { y: 106 }];
      pickets(11, 16, 118);
    } else if (spear || /^3/.test(name.trim())) {
      rows = [{ y: 40 }, { y: 68 }, { y: 96 }];
      pickets(9, spear ? 22 : 18, 116, spear);
    } else {
      rows = [{ y: 48 }, { y: 92 }];
      pickets(9, 18, 116);
    }
    rails(rows);
  } else if (slug === 'vinyl') {
    if (/semi/.test(nm)) { boards(9); }
    else if (/picket/.test(nm)) {
      const n = 7, bw = 9;
      for (let i = 0; i < n; i++) { const x = L + ((R - L - bw) / (n - 1)) * i; els.push(<path key={`pc${i}`} d={`M${x} 40 L${x} 110 M${x} 40 L${x + bw / 2} 30 L${x + bw} 40 L${x + bw} 110`} stroke={navy} strokeWidth="3" fill="none" strokeLinejoin="round"/>); }
      rails([{ y: 56 }, { y: 92 }]);
    }
    else if (/ranch/.test(nm)) { rails([{ y: 42 }, { y: 68 }, { y: 94 }]); els.push(<rect key="p1" x={L} y={24} width="6" height="92" fill={navy}/>); els.push(<rect key="p2" x={R - 6} y={24} width="6" height="92" fill={navy}/>); }
    else { boards(2); } // Privacy, full board
  } else if (slug === 'metal') {
    /* DuraFence is full privacy: draw a continuous wall of interlocked
       boards (no daylight between them), not spaced bars. */
    if (/modern/.test(nm)) {
      // Modern: flat top, wide flat panels, hairline seams
      els.push(<rect key="mw" x={L} y={30} width={R - L} height={82} fill={navy}/>);
      for (let x = L + 23; x < R - 4; x += 23) els.push(<line key={`ms${x}`} x1={x} y1={33} x2={x} y2={109} stroke={light} strokeWidth="1.5"/>);
    }
    else if (/p1/.test(nm)) {
      // P1: panel profile, wide pans with deep double-groove channels
      els.push(<rect key="pw" x={L} y={30} width={R - L} height={82} fill={navy}/>);
      for (let x = L + 30; x < R - 8; x += 31) {
        els.push(<line key={`pg1${x}`} x1={x} y1={30} x2={x} y2={112} stroke={light} strokeWidth="2"/>);
        els.push(<line key={`pg2${x}`} x1={x + 5} y1={30} x2={x + 5} y2={112} stroke={light} strokeWidth="2"/>);
      }
    }
    else if (/gate/.test(nm)) { boards(3, navy, 34, 110); els.push(<rect key="gf" x={L} y={30} width={R - L} height={84} fill="none" stroke={accent} strokeWidth="3"/>); }
    else {
      // Original: classic interlocked boards with the signature dome tops
      const n = 10, g = 2, bw = (R - L - (n - 1) * g) / n, r = bw / 2;
      for (let i = 0; i < n; i++) {
        const x = L + i * (bw + g);
        els.push(<path key={`ob${i}`} d={`M${x} 112 L${x} ${34 + r} A${r} ${r} 0 0 1 ${x + bw} ${34 + r} L${x + bw} 112 Z`} fill={navy}/>);
      }
    }
  } else if (slug === 'chainlink') {
    const c = /green/.test(nm) ? '#6f9e6b' : /galvani/.test(nm) ? '#9aa3c0' : navy;
    const w = /heavy|industrial/.test(nm) ? 2.4 : 1.6, s = 18;
    els.push(<clipPath key="cp" id={`ck${slug}${index}`}><rect x={L} y={26} width={R - L} height={84}/></clipPath>);
    const lines = [];
    for (let x = L - 84; x < R + 84; x += s) {
      lines.push(<line key={`d1${x}`} x1={x} y1={20} x2={x + 90} y2={116} stroke={c} strokeWidth={w}/>);
      lines.push(<line key={`d2${x}`} x1={x} y1={116} x2={x + 90} y2={20} stroke={c} strokeWidth={w}/>);
    }
    els.push(<g key="mesh" clipPath={`url(#ck${slug}${index})`}>{lines}</g>);
    rails([{ y: 26 }, { y: 110 }]);
  } else if (slug === 'ecfence') {
    if (/post|hardware/.test(nm)) {
      [L + 20, W / 2, R - 20].forEach((x, i) => { els.push(<rect key={`po${i}`} x={x - 4} y={24} width="8" height="92" fill={navy}/>); els.push(<rect key={`cp${i}`} x={x - 7} y={20} width="14" height="6" fill={navy}/>); });
    } else if (/gate/.test(nm)) {
      els.push(<rect key="ef" x={L + 6} y={28} width={R - L - 12} height={82} fill="none" stroke={navy} strokeWidth="3"/>);
      [46, 62, 78, 94].forEach((y, i) => els.push(<line key={`es${i}`} x1={L + 12} y1={y} x2={R - 12} y2={y} stroke={navy} strokeWidth="4" strokeLinecap="round"/>));
    } else {
      [34, 50, 66, 82, 98].forEach((y, i) => els.push(<line key={`ep${i}`} x1={L} y1={y} x2={R} y2={y} stroke={navy} strokeWidth="7" strokeLinecap="round"/>));
    }
  } else {
    pickets(9, 18, 116); rails([{ y: 40 }, { y: 96 }]);
  }

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" height="100%" preserveAspectRatio="xMidYMid meet" aria-hidden style={{ display: 'block' }}>
      <rect x="0" y="0" width={W} height={H} fill={bg}/>
      {els}
    </svg>
  );
};

const MaterialProfiles = ({ data }) => (
  <section id="styles" style={{ background: 'var(--white)', padding: '120px 0' }}>
    <div className="container">
      <PageSectionHeader
        number="01" label={useT()("Profiles & styles", "Perfiles y estilos")}
        title={`${data.name}`}
        accent={useT()(`${data.profiles.length} ways to spec it.`, `${data.profiles.length} formas de configurarlo.`)}
        sub={data.profilesSub || useT()("Standard and custom configurations available. Custom heights and colors on request.", "Configuraciones estándar y a medida. Alturas y colores personalizados bajo pedido.")}
      />
      <div className="wfs-profiles-grid" style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(data.profiles.length, 4)}, 1fr)`, gap: 14 }}>
        {data.profiles.map((p, i) => (
          <article key={p.name} style={{
            background: 'var(--white)',
            border: '1px solid rgba(0,16,17,0.12)',
            overflow: 'hidden',
            display: 'flex', flexDirection: 'column',
          }}>
            <div style={{ aspectRatio: '16 / 10', background: DIAG.bg, borderBottom: '1px solid rgba(0,16,17,0.08)' }}>
              <ProfileDiagram slug={data.slug} name={p.name} index={i}/>
            </div>
            <div style={{ padding: 24 }}>
              <div className="mono" style={{
                fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase',
                color: 'var(--tangerine)', fontWeight: 700, marginBottom: 14,
              }}>0{i+1} · {p.tag}</div>
              <h3 className="display" style={{ margin: '0 0 12px', fontSize: 22, lineHeight: 1.1 }}>{p.name}</h3>
              <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.55, color: 'var(--charcoal)' }}>{p.notes}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const MaterialSpecs = ({ data }) => (
  <section className="wfs-brand-texture" style={{ backgroundColor: 'var(--ink)', padding: '120px 0' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 56, alignItems: 'start' }}>
        <div>
          <div className="mono" style={{
            display: 'inline-flex', alignItems: 'center', gap: 12,
            marginBottom: 18,
            fontSize: 12.5, fontWeight: 700, letterSpacing: '0.22em',
            textTransform: 'uppercase', color: 'var(--blue-ice)',
          }}>
            <span aria-hidden style={{ width: 30, height: 3, background: 'var(--tangerine)', borderRadius: 2 }}/>
            {useT()('Tech specs', 'Especificaciones')}
          </div>
          <h2 className="display" style={{ margin: 0, fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: 1, letterSpacing: '-0.02em', color: 'var(--white)' }}>
            {useT()('Real numbers,', 'Números reales,')}<br/>
            <span style={{ color: 'var(--tangerine)' }}>{useT()('no marketing.', 'sin marketing.')}</span>
          </h2>
          <p style={{ marginTop: 20, fontSize: 14, lineHeight: 1.6, color: 'var(--alice-blue)', maxWidth: 320 }}>
            {useT()("Actual specs may vary by style, height, color and availability. Contact our team to confirm the right material package for your project.", 'Las especificaciones reales pueden variar según estilo, altura, color y disponibilidad. Contacta a nuestro equipo para confirmar el paquete de material adecuado para tu proyecto.')}
          </p>
          <a href="estimate.html" className="mono" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            marginTop: 24, paddingBottom: 4,
            fontSize: 12.5, fontWeight: 700, letterSpacing: '0.2em',
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
                fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'var(--charcoal)', fontWeight: 700,
                background: '#ffffff',
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

const MaterialUseCases = ({ data }) => {
  const t = useT();
  return (
  <section style={{ background: 'var(--white)', padding: '120px 0 0' }}>
    <div className="container">
      {/* Title + right blurb over a heavy rule */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'end',
        paddingBottom: 28, borderBottom: '2px solid var(--ink)',
      }}>
        <h2 className="display" style={{
          margin: 0, fontSize: 'clamp(30px, 3.4vw, 46px)', lineHeight: 1.02,
          letterSpacing: '-0.01em', fontWeight: 800, textTransform: 'uppercase',
        }}>
          {t('Three jobs', 'Tres trabajos')}<br/>
          <span style={{ color: 'var(--tangerine)' }}>{t('this material wins.', 'que este material gana.')}</span>
        </h2>
        {data.useCasesBlurb && (
          <p style={{
            margin: 0, maxWidth: 340, justifySelf: 'end', textAlign: 'right',
            fontSize: 14.5, lineHeight: 1.6, color: 'var(--charcoal)',
          }}>{data.useCasesBlurb}</p>
        )}
      </div>
      {/* Rows: outlined number · title + badge · description · arrow.
          Hover: cream wash, number fills tangerine, arrow chip fills. */}
      {data.useCases.map(([title, body, badge], i) => (
        <UseCaseRow key={title} title={title} body={body} badge={badge} index={i}/>
      ))}
      {/* Bottom-right link */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: 26 }}>
        <a href="products.html" className="mono" style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          fontSize: 12.5, fontWeight: 700, letterSpacing: '0.2em',
          textTransform: 'uppercase', color: 'var(--tangerine)',
        }}>
          {t(`See all ${data.name} applications`, `Ver todas las aplicaciones de ${data.name}`)}
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
  );
};

const MaterialOtherMaterials = ({ currentSlug }) => {
  const cur = currentSlug === 'chain-link' ? 'chainlink' : currentSlug;
  const items = FENCE_CATEGORIES.filter(c => c.id !== cur);
  return (
    <SlatArena
      id="other-systems" chapter="04"
      label={{ EN: 'More Systems', ES: 'Más sistemas' }}
      items={items}
      topLink={{ href: 'materials-comparison.html', label: { EN: 'Materials comparison', ES: 'Comparativa de materiales' } }}
      ctaLabel={{ EN: 'Explore', ES: 'Explora' }}
    />
  );
};

const MaterialCTA = ({ data }) => {
  const c = data.cta;
  return (
  <CTABand
    kicker={c ? c.kicker : useT()(`Quote your ${data.name.toLowerCase()} run`, `Cotiza tu corrida de ${data.name.toLowerCase()}`)}
    title={c ? c.title : useT()("Send us your", "Envíanos tus")}
    accent={c ? c.accent : useT()("dimensions.", "medidas.")}
    body={c ? c.body : useT()("We'll come back with stocked components, lead time and a delivery or pickup plan from Fort Myers or Port Charlotte.", 'Te respondemos con componentes en stock, plazo de entrega y un plan de entrega o recogida desde Fort Myers o Port Charlotte.')}
    primary={c ? c.primary : [useT()('Request a quote', 'Solicitar cotización'), 'estimate.html']}
    secondary={c ? c.secondary : ['Call (239) 689-5496', 'tel:2396895496']}
  />
  );
};

const MaterialPage = ({ slug }) => {
  const [mode] = useMode();
  const base = MATERIAL_DATA[slug];
  if (!base) return <p style={{ padding: 80, textAlign: 'center' }}>{useT()('Material not found.', 'Material no encontrado.')}</p>;
  // Mode-aware copy: HOMEOWNER (default) uses the base data, CONTRACTOR
  // merges in the trade-focused overrides. useMode() subscribes to the
  // wfs:mode-change event so flipping the toggle re-renders the page.
  const override = (mode === 'CONTRACTOR' && base.contractor) || {};
  const data = useTrData({ ...base, ...override });
  return (
    <>
      <SiteHeader active="Fences" />
      <MaterialHero data={data}/>
      <MaterialQuickFacts data={data}/>
      <MaterialProfiles data={data}/>
      <MaterialSpecs data={data}/>
      <MaterialUseCases data={data}/>
      <ProjectGallery featuredMaterial={{ vinyl: 'Vinyl', aluminum: 'Aluminum', chainlink: 'Chain Link', metal: 'Metal', ecfence: 'EC Fence' }[slug]} items={base.projects}/>
      <MaterialOtherMaterials currentSlug={slug === 'chainlink' ? 'chain-link' : slug}/>
      <MaterialCTA data={data}/>
      <Footer />
    </>
  );
};

Object.assign(window, { MATERIAL_DATA, MaterialPage });
