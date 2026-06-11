/* Shared material detail page: hero + profiles + specs + use cases + projects + CTA */

const MATERIAL_DATA = {
  vinyl: {
    slug: 'vinyl',
    name: 'Vinyl / PVC',
    tag: 'Veka-extruded · Lifetime warranty',
    heroTitle: 'Veka-extruded vinyl.',
    heroAccent: 'Built for the Florida sun.',
    heroBody: 'Privacy, semi-private, picket and ranch rail in white, tan and khaki. Won\'t rot, rust, peel or fade, engineered for Florida UV with a transferable lifetime warranty.',
    heroImg: FENCE_IMG.vinyl,
    bestFor: 'Backyard privacy, pool enclosures, residential subdivisions',
    profiles: [
      { name: 'Privacy', tag: 'Full board', notes: '6 ft tongue-and-groove board, no gaps' },
      { name: 'Semi-Privacy', tag: 'With lattice', notes: '6 ft solid + 18" decorative lattice topper' },
      { name: 'Picket', tag: 'Classic', notes: '4 ft pointed picket, 3" spacing' },
      { name: 'Ranch Rail', tag: '3-rail', notes: 'Crossbuck or 3-rail post-and-rail' },
    ],
    specs: [
      ['Heights', '4 ft, 5 ft, 6 ft, 8 ft'],
      ['Colors', 'White, Tan, Khaki'],
      ['Material', 'Veka-extruded virgin vinyl'],
      ['Wind rating', 'Up to 130 mph (system + posts)'],
      ['Warranty', 'Transferable lifetime'],
      ['Lead time', '1-2 days stocked · 3-4 weeks custom'],
      ['Starts at', 'Quote-based'],
    ],
    useCases: [
      ['Backyard privacy', 'The default for SW Florida homeowners, full 6 ft privacy without maintenance.'],
      ['Pool enclosures', 'Code-compliant profiles meet the 4 ft minimum with pickets ≤ 1.75" spaced.'],
      ['HOA boundaries', 'Uniform white/tan finish across subdivisions, stocked in volume.'],
    ],
    contractor: {
      tag: 'Veka-extruded · Trade pickup',
      heroBody: 'Veka-extruded vinyl in white, tan and khaki across privacy, semi-private, picket and ranch rail. All profiles stocked for same-day will-call. Trade accounts available after the second order.',
      bestFor: 'HOA + subdivision rollouts, repeat residential privacy',
      useCases: [
        ['HOA rollouts',         'Uniform 6 ft privacy across 50+ lots, stocked in volume, packed by run.'],
        ['Repeat residential',   'Pull, pick, install. Same-day pickup on most stock widths.'],
        ['Custom color runs',    'Khaki + tan run-outs from Veka for community-specific specs.'],
      ],
    },
  },
  aluminum: {
    slug: 'aluminum',
    name: 'Aluminum',
    tag: 'Powder-coat · Pool code',
    heroTitle: 'Powder-coated aluminum.',
    heroAccent: 'Pool-code by default.',
    heroBody: 'Welded and mechanically assembled aluminum in 3-rail, 4-rail and 5-rail configurations. Pool-code compliant, rackable on grade, available in residential, commercial and industrial grades.',
    heroImg: FENCE_IMG.aluminum,
    bestFor: 'Pool enclosures, ornamental perimeters, HOAs',
    profiles: [
      { name: '3-Rail', tag: 'Classic', notes: 'Open picket, residential grade' },
      { name: '4-Rail', tag: 'Pool code', notes: '≤ 1.75" picket spacing, code-compliant' },
      { name: '5-Rail', tag: 'Privacy-leaning', notes: 'Tight picket pattern, more visual mass' },
      { name: 'Commercial', tag: 'Heavy gauge', notes: '6063-T6 alloy, thicker pickets + rails' },
    ],
    specs: [
      ['Heights', '4 ft, 5 ft, 6 ft (custom to 8 ft)'],
      ['Colors', 'Black, Bronze, White (powder-coat)'],
      ['Material', '6063-T6 alloy, fully welded or mechanical'],
      ['Wind rating', 'Up to 150 mph HVHZ'],
      ['Warranty', '20-year finish'],
      ['Lead time', '1-2 days stocked · 2-3 weeks custom color'],
      ['Starts at', 'Quote-based'],
    ],
    useCases: [
      ['Pool enclosures', '4 ft profiles meet Florida pool code, picket spacing, latch height, self-closing gates.'],
      ['Ornamental front yards', 'Decorative spear-top and finial caps for residential front perimeters.'],
      ['HVHZ perimeters', 'Welded commercial grade rated for 150 mph in HVHZ counties.'],
    ],
    contractor: {
      tag: 'Powder-coat · Pool-code + HVHZ',
      heroBody: 'Powder-coated aluminum in 3, 4 and 5-rail. Pool-code compliant by default, rackable on grade. Residential, commercial and industrial grades stocked, sealed wind-load specs available for HVHZ submissions.',
      bestFor: 'Pool enclosures, code-required perimeters, HVHZ residential',
      useCases: [
        ['Pool code at volume', 'FBC R 4501.17 profiles, paperwork-ready, no field surprises on AHJ check.'],
        ['HVHZ residential',   '150 mph welded commercial spec, sealed wind load on request.'],
        ['HOA ornamental',     'Black powder-coat repeat sections, pickup-ready for repeat jobs.'],
      ],
    },
  },
  chainlink: {
    slug: 'chain-link',
    name: 'Chain Link',
    tag: 'Galvanized + Vinyl Coated',
    heroTitle: 'Chain link mesh.',
    heroAccent: 'The workhorse perimeter.',
    heroBody: 'Galvanized and PVC-coated mesh from 6 to 12 gauge. The default for security, sports, agricultural and commercial perimeters. Same-day pickup on stocked rolls + posts.',
    heroImg: FENCE_IMG.chainlink,
    bestFor: 'Security perimeters, sports fields, industrial sites',
    profiles: [
      { name: 'Galvanized', tag: 'Industrial', notes: 'Hot-dip galvanized, weather-spec' },
      { name: 'Vinyl-Coated Black', tag: 'Residential', notes: 'PVC-coated mesh disappears into landscaping' },
      { name: 'Vinyl-Coated Green', tag: 'Parks/sports', notes: 'Court-side and athletic perimeters' },
      { name: 'Heavy-gauge industrial', tag: 'Security', notes: '9 ga + 11.5 ga for high-cycle perimeters' },
    ],
    specs: [
      ['Heights', '4 ft to 12 ft'],
      ['Mesh gauges', '6 ga, 9 ga, 11.5 ga, 12 ga'],
      ['Finishes', 'Galvanized, PVC-coated (Black, Green, Brown)'],
      ['Material', 'ASTM A392 mesh, schedule 40 posts'],
      ['Wind rating', 'Up to 150 mph (open mesh)'],
      ['Lead time', 'Same day stocked rolls + posts'],
      ['Starts at', 'Quote-based'],
    ],
    useCases: [
      ['Security perimeter', '9 ga galvanized, 8 ft + barbed extension, with cantilever gates.'],
      ['Sports & rec', '10 ft and 12 ft mesh for tennis, baseball, soccer fields.'],
      ['Self-storage / industrial', 'Phased deliveries against release schedules.'],
    ],
    contractor: {
      tag: 'Galv + PVC-coated · Same-day will-call',
      heroBody: 'Galvanized and PVC-coated mesh from 6 to 12 gauge, same-day pickup on stocked rolls and posts. Phased commercial dispatch for industrial perimeters, trade accounts available.',
      bestFor: 'Industrial perimeters, security fencing, sports fields',
      useCases: [
        ['Industrial perimeters','Mile+ runs of 9-ga galv with phased delivery against release schedule.'],
        ['Sports + recreation', '10 ft and 12 ft mesh stocked for tennis, baseball, soccer fields.'],
        ['Same-day will-call',  'Order before 2pm, pickup ready by 4pm at FM or PC yard.'],
      ],
    },
  },
  metal: {
    slug: 'metal',
    name: 'Metal / DuraFence',
    tag: 'Aluminum board privacy',
    heroTitle: 'DuraFence aluminum board.',
    heroAccent: 'The look of board, the strength of metal.',
    heroBody: 'Horizontal aluminum board privacy, solid 6-8 ft privacy with the strength of aluminum and the silhouette of solid board. Hurricane-rated, no warping, no painting, no replacement boards.',
    heroImg: FENCE_IMG.metal,
    bestFor: 'Modern privacy in HVHZ counties',
    profiles: [
      { name: 'Standard board', tag: '6 ft', notes: 'Horizontal aluminum board, flush mount' },
      { name: 'Tall board', tag: '8 ft', notes: 'For commercial / luxury residential' },
      { name: 'Slatted privacy', tag: '6 ft', notes: 'Slight gap between boards for airflow' },
      { name: 'Modern gate', tag: 'Matching', notes: 'Welded matching ready-to-assemble gates' },
    ],
    specs: [
      ['Heights', '6 ft, 8 ft'],
      ['Colors', 'Black, Bronze, White'],
      ['Material', 'Extruded aluminum board + posts'],
      ['Wind rating', '150 mph HVHZ-rated'],
      ['Warranty', '10-year finish'],
      ['Lead time', '1-2 weeks (color-matched)'],
      ['Starts at', 'Quote-based'],
    ],
    useCases: [
      ['Hurricane-zone privacy', 'HVHZ-rated to 150 mph, keeps full privacy through a Cat 4.'],
      ['Modern residential', 'Horizontal board lines + matte powder-coat for contemporary designs.'],
      ['Commercial screens', 'Dumpster enclosures, AC screens, utility-yard perimeters.'],
    ],
    contractor: {
      tag: 'Aluminum board · HVHZ + custom color',
      heroBody: 'Aluminum board privacy in 6 and 8 ft, HVHZ-rated to 150 mph. Commercial and residential builds, phased delivery against release schedules, custom powder-coat color match on volume orders.',
      bestFor: 'HVHZ residential, commercial screens, modern privacy builds',
      useCases: [
        ['HVHZ residential',  '150 mph rated, full privacy through a Cat 4 hurricane.'],
        ['Commercial screens','AC enclosures, dumpster screens, utility-yard perimeters.'],
        ['Color-match runs',  'Powder-coat custom color on commercial volume orders.'],
      ],
    },
  },
  ecfence: {
    slug: 'ecfence',
    name: 'EC Fence',
    tag: 'Self-mating galvanized steel',
    heroTitle: 'EC Fence.',
    heroAccent: 'Self-mating galvanized steel panels.',
    heroBody: 'Our newest system, self-mating galvanized steel panels installed every 12 ft. 6 ft tall, available in bronze and white, engineered for Exposure C wind loads. Engineered for the Florida coast.',
    heroImg: 'assets/ec-fence.jpg',
    bestFor: 'Coastal HVHZ perimeters, commercial sites, modern residential',
    profiles: [
      { name: 'Bronze 6 ft', tag: 'Standard', notes: 'Bronze powder over hot-dip galv' },
      { name: 'White 6 ft', tag: 'Standard', notes: 'White finish, same panel system' },
      { name: 'Matching gate', tag: 'Single / double swing', notes: 'Same panel face, ready-to-assemble' },
      { name: 'Sloped runs', tag: 'Grade follow', notes: 'Stair-stepped or racked panels' },
    ],
    specs: [
      ['Heights', '6 ft (custom 5-8 ft available)'],
      ['Post spacing', 'Every 12 ft'],
      ['Colors', 'Bronze, White'],
      ['Material', 'Self-mating galvanized steel'],
      ['Wind rating', 'Exposure C (HVHZ engineered)'],
      ['Warranty', '15-year finish'],
      ['Lead time', '2-3 weeks'],
      ['Starts at', 'Quote-based'],
    ],
    useCases: [
      ['Coastal perimeter', 'Hot-dip galv core stands up to salt air in beachfront sites.'],
      ['Commercial property', 'Clean modern face for office parks, marinas, gated communities.'],
      ['Modern residential', 'Architectural alternative to vinyl or board privacy.'],
    ],
    contractor: {
      tag: 'Self-mating steel · Sealed Exposure C',
      heroBody: 'Self-mating galvanized steel panels engineered for Exposure C wind loads. Modern panel face for coastal commercial and HVHZ residential builds. Sealed manufacturer specs available for AHJ submission.',
      bestFor: 'Coastal commercial, modern residential, HVHZ contracts',
      useCases: [
        ['Coastal commercial','Hot-dip galv core stands up to salt air, marina + coastal yards.'],
        ['HVHZ contracts',   'Engineered Exposure C, sealed AHJ-ready specs on request.'],
        ['Modern panel face','Clean architectural alternative to vinyl board for modern builds.'],
      ],
    },
  },
};

const MaterialHero = ({ data }) => (
  <PageHero
    crumbs={[['Home', 'Homepage.html'], ['Products', 'products.html'], [data.name, null]]}
    eyebrow={data.tag}
    title={data.heroTitle}
    accent={data.heroAccent}
    subtitle={data.heroBody}
    image={data.heroImg}
  />
);

const MaterialQuickFacts = ({ data }) => (
  <section style={{ background: 'var(--white)', padding: '64px 0', borderBottom: '1px solid rgba(0,16,17,0.08)' }}>
    <div className="container">
      <FeatureRow items={[
        [useT()('Best for', 'Ideal para'), data.bestFor],
        [useT()('Material', 'Material'), data.specs.find(s => s[0] === 'Material')?.[1] || '—'],
        [useT()('Starts at', 'Desde'), data.specs.find(s => s[0] === 'Starts at')?.[1] || '—'],
        [useT()('Lead time', 'Plazo de entrega'), data.specs.find(s => s[0] === 'Lead time')?.[1] || '—'],
      ]}/>
    </div>
  </section>
);

const MaterialProfiles = ({ data }) => (
  <section style={{ background: 'var(--white)', padding: '88px 0' }}>
    <div className="container">
      <PageSectionHeader
        number="01" label={useT()("Profiles & styles", "Perfiles y estilos")}
        title={`${data.name}`}
        accent={useT()("four ways to spec it.", "cuatro formas de configurarlo.")}
        sub={useT()("We stock all four configurations. Custom heights and colors available on request.", "Tenemos en stock las cuatro configuraciones. Alturas y colores a medida bajo pedido.")}
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

const MaterialSpecs = ({ data }) => (
  <section className="wfs-brand-texture" style={{ backgroundColor: 'var(--ink)', padding: '88px 0' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 56, alignItems: 'start' }}>
        <div>
          <h2 className="display" style={{ margin: 0, fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: 1, letterSpacing: '-0.02em', color: 'var(--white)' }}>
            {useT()('Real numbers,', 'Números reales,')}<br/>
            <span style={{ color: 'var(--tangerine)' }}>{useT()('no marketing.', 'sin marketing.')}</span>
          </h2>
          <p style={{ marginTop: 20, fontSize: 14, lineHeight: 1.6, color: 'var(--alice-blue)', maxWidth: 320 }}>
            {useT()("Need a sealed manufacturer spec? Ask your rep, we'll send the PDF before quote.", '¿Necesitas una especificación sellada del fabricante? Pídela a tu representante, te enviamos el PDF antes de cotizar.')}
          </p>
        </div>
        <div style={{ background: 'var(--white)' }}>
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

const MaterialUseCases = ({ data }) => (
  <section style={{ background: 'var(--white)', padding: '88px 0' }}>
    <div className="container">
      <PageSectionHeader
        number="03" label={useT()("Where it shines", "Donde brilla")}
        title={useT()("Three jobs", "Tres trabajos")}
        accent={useT()("this material wins.", "que este material gana.")}
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

const MaterialCTA = ({ data }) => (
  <CTABand
    kicker={useT()(`Quote your ${data.name.toLowerCase()} run`, `Cotiza tu corrida de ${data.name.toLowerCase()}`)}
    title={useT()("Send us your", "Envíanos tus")}
    accent={useT()("dimensions.", "medidas.")}
    body={useT()("We'll come back with stocked components, lead time and a delivery or pickup plan from Fort Myers or Port Charlotte.", 'Te respondemos con componentes en stock, plazo de entrega y un plan de entrega o recogida desde Fort Myers o Port Charlotte.')}
    primary={[useT()('Request a quote', 'Solicitar cotización'), 'estimate.html']}
    secondary={['Call (239) 689-5496', 'tel:2396895496']}
  />
);

const MaterialPage = ({ slug }) => {
  const [mode] = useMode();
  const base = MATERIAL_DATA[slug];
  if (!base) return <p style={{ padding: 80, textAlign: 'center' }}>Material not found.</p>;
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
      <ProjectGallery />
      <MaterialOtherMaterials currentSlug={slug === 'chainlink' ? 'chain-link' : slug}/>
      <MaterialCTA data={data}/>
      <Footer />
    </>
  );
};

Object.assign(window, { MATERIAL_DATA, MaterialPage });
