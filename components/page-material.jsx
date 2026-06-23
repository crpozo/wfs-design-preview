/* Shared material detail page: hero + profiles + specs + use cases + projects + CTA */

const MATERIAL_DATA = {
  vinyl: {
    slug: 'vinyl',
    name: 'Vinyl / PVC',
    tag: 'Catalyst-extruded · Lifetime warranty',
    heroTitle: 'Catalyst-extruded vinyl.',
    heroAccent: 'Built for the Florida sun.',
    heroBody: 'Privacy, semi-private, picket, ranch rail and many more styles in white, sand and gray. Won\'t rot, rust, peel or fade, engineered for Florida UV with a transferable lifetime warranty.',
    heroImg: FENCE_IMG.vinyl,
    bestFor: 'Backyard privacy, pool enclosures, residential subdivisions',
    quickFacts: [
      ['Best For', 'Backyard privacy, pool enclosures, residential subdivisions'],
      ['Material', 'Catalyst-extruded virgin vinyl panels, posts, and caps'],
      ['Options', 'Privacy, semi-privacy, picket, and ranch rail styles'],
      ['Lead Time', 'Stocked profiles ready fast; custom runs vary by spec'],
    ],
    profiles: [
      { name: 'Privacy', tag: 'Full board', notes: '6 ft tongue-and-groove board, no gaps' },
      { name: 'Semi-Privacy', tag: 'With lattice', notes: '6 ft solid + 18" decorative lattice topper' },
      { name: 'Picket', tag: 'Classic', notes: '4 ft pointed picket, 3" spacing' },
      { name: 'Ranch Rail', tag: '3-rail', notes: 'Crossbuck or 3-rail post-and-rail' },
    ],
    specs: [
      ['Heights', '4 ft, 5 ft, 6 ft, 8 ft'],
      ['Colors', 'White, Sand, Gray'],
      ['Material', 'Catalyst-extruded virgin vinyl'],
      ['Wind rating', 'Up to 130 mph (system + posts)'],
      ['Warranty', 'Transferable lifetime'],
      ['Lead time', '1-2 days stocked · 3-4 weeks custom'],
      ['Starts at', 'Quote-based'],
    ],
    useCases: [
      ['Backyard privacy', 'The default for SW Florida homeowners, full 6 ft privacy without maintenance.'],
      ['Pool enclosures', 'Code-compliant profiles meet the 4 ft minimum with pickets ≤ 1.75" spaced.'],
      ['HOA boundaries', 'Uniform white/sand/gray finish across subdivisions, stocked in volume.'],
    ],
    contractor: {
      tag: 'Catalyst-extruded · Trade pickup',
      heroBody: 'Catalyst-extruded vinyl in white, sand and gray across privacy, semi-private, picket, ranch rail and more. All profiles stocked for same-day will-call. Trade accounts available after the second order.',
      bestFor: 'HOA + subdivision rollouts, repeat residential privacy',
      useCases: [
        ['HOA rollouts',         'Uniform 6 ft privacy across 50+ lots, stocked in volume, packed by run.'],
        ['Repeat residential',   'Pull, pick, install. Same-day pickup on most stock widths.'],
        ['Custom color runs',    'Sand + gray run-outs from Catalyst for community-specific specs.'],
      ],
    },
  },
  aluminum: {
    slug: 'aluminum',
    name: 'Aluminum',
    tag: 'Powder-coat aluminum',
    heroTitle: 'Powder-Coated Aluminum',
    heroAccent: 'Fence Materials.',
    heroBody: 'Pool-code compliant aluminum fence materials for residential, commercial, and community projects. Available in multiple heights and styles, with gates, posts, rails, and hardware quoted as part of your material package.',
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
      { name: '4 & 5-Rail', tag: 'Custom', notes: 'Available for taller or custom aluminum configurations.' },
    ],
    specs: [
      ['Heights', "4', 5', 6', custom options available"],
      ['Colors', 'Black, bronze, white, and selected powder-coated finishes'],
      ['Material', 'Aluminum fence panels, posts, gates, and hardware'],
      ['Wind rating', 'Varies by product style and installation conditions'],
      ['Warranty', 'Ask our team for available manufacturer warranty details'],
      ['Lead time', 'Stock and lead time vary by material, color, and quantity'],
    ],
    useCases: [
      ['Pool Enclosures', 'Pool-code aluminum fencing for residential and community pools.'],
      ['Residential Front Yards', 'Clean, decorative aluminum fence for front yards and property lines.'],
      ['HOA & Community Perimeters', 'Durable aluminum fence options for communities and shared spaces.'],
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
    useCases: [
      ['Security Perimeters', 'Durable chain link fencing for commercial and industrial security.'],
      ['Sports & Recreation', 'Vinyl-coated mesh for ball fields, courts, and park enclosures.'],
      ['Self-Storage & Industrial', 'Long perimeter runs for storage yards and industrial sites.'],
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
    tag: 'Metal privacy · DuraFence',
    heroTitle: 'Metal / DuraFence.',
    heroAccent: 'The look of board, the strength of metal.',
    heroBody: 'Solid metal privacy fence (DuraFence) in 6-8 ft, the strength of metal with the silhouette of solid board. Our standard board is vertical; horizontal layouts also available. Hurricane-rated, no warping, no painting, no replacement boards.',
    heroImg: FENCE_IMG.metal,
    bestFor: 'Modern privacy in HVHZ counties',
    quickFacts: [
      ['Best For', 'Modern privacy, HVHZ residential, and commercial screens'],
      ['Material', 'Extruded metal privacy board, posts, and hardware'],
      ['Options', 'Standard and tall board, slatted privacy, and matching gates'],
      ['Lead Time', 'Stock and lead time vary by height, color, and quantity'],
    ],
    profiles: [
      { name: 'Standard Board', tag: '6 ft', notes: 'Vertical metal board, flush mount' },
      { name: 'Tall board', tag: '8 ft', notes: 'For commercial / luxury residential' },
      { name: 'Slatted privacy', tag: '6 ft', notes: 'Slight gap between boards for airflow' },
      { name: 'Modern gate', tag: 'Matching', notes: 'Welded matching ready-to-assemble gates' },
    ],
    specs: [
      ['Heights', '6 ft, 8 ft'],
      ['Colors', 'Black, Bronze, White, Woodgrain'],
      ['Material', 'Extruded metal board + posts'],
      ['Wind rating', '150 mph HVHZ-rated'],
      ['Warranty', '10-year finish'],
      ['Lead time', '1-2 weeks (color-matched)'],
      ['Starts at', 'Quote-based'],
    ],
    useCases: [
      ['Hurricane-zone privacy', 'HVHZ-rated to 150 mph, keeps full privacy through a Cat 4.'],
      ['Modern residential', 'Clean board lines + matte powder-coat for contemporary designs.'],
      ['Commercial screens', 'Dumpster enclosures, AC screens, utility-yard perimeters.'],
    ],
    contractor: {
      tag: 'Metal privacy · HVHZ + custom color',
      heroBody: 'Metal privacy (DuraFence) in 6 and 8 ft, HVHZ-rated to 150 mph. Commercial and residential builds, phased delivery against release schedules, custom powder-coat color match on volume orders.',
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
    quickFacts: [
      ['Best For', 'Coastal HVHZ perimeters, commercial sites, modern residential'],
      ['Material', 'Self-mating galvanized steel panels, posts, and hardware'],
      ['Options', 'Bronze and white finishes, matching gates, sloped runs'],
      ['Lead Time', 'Stock and lead time vary by finish and quantity'],
    ],
    profiles: [
      { name: 'Bronze 6 ft', tag: 'Standard', notes: 'Bronze powder over hot-dip galv' },
      { name: 'White 6 ft', tag: 'Standard', notes: 'White finish, same panel system' },
      { name: 'Matching gate', tag: 'Single / double swing', notes: 'Same panel face, ready-to-assemble' },
      { name: 'Sloped runs', tag: 'Grade follow', notes: 'Stair-stepped or racked panels' },
    ],
    specs: [
      ['Heights', '6 ft'],
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

const MaterialProfiles = ({ data }) => (
  <section id="styles" style={{ background: 'var(--white)', padding: '120px 0' }}>
    <div className="container">
      <PageSectionHeader
        number="01" label={useT()("Profiles & styles", "Perfiles y estilos")}
        title={`${data.name}`}
        accent={useT()(`${data.profiles.length} ways to spec it.`, `${data.profiles.length} formas de configurarlo.`)}
        sub={useT()("Standard and custom configurations available. Custom heights and colors on request.", "Configuraciones estándar y a medida. Alturas y colores personalizados bajo pedido.")}
      />
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${data.profiles.length}, 1fr)`, gap: 14 }}>
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
  <section className="wfs-brand-texture" style={{ backgroundColor: 'var(--ink)', padding: '120px 0' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 56, alignItems: 'start' }}>
        <div>
          <div className="mono" style={{
            display: 'inline-flex', alignItems: 'center', gap: 12,
            marginBottom: 18,
            fontSize: 11, fontWeight: 700, letterSpacing: '0.22em',
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

const MaterialUseCases = ({ data }) => (
  <section style={{ background: 'var(--white)', padding: '120px 0 0' }}>
    <div className="container">
      <PageSectionHeader
        number="03" label={useT()("Where it shines", "Donde brilla")}
        title={useT()("Three jobs", "Tres trabajos")}
        accent={useT()("this material wins.", "que este material gana.")}
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        {data.useCases.map(([t, body], i) => (
          <div key={t} style={{
            background: 'var(--white)',
            color: 'var(--ink)',
            padding: '32px 28px',
            border: '1px solid rgba(0,16,17,0.1)',
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
      <ProjectGallery featuredMaterial={{ vinyl: 'Vinyl', aluminum: 'Aluminum', chainlink: 'Chain Link', metal: 'Metal', ecfence: 'EC Fence' }[slug]}/>
      <MaterialOtherMaterials currentSlug={slug === 'chainlink' ? 'chain-link' : slug}/>
      <MaterialCTA data={data}/>
      <Footer />
    </>
  );
};

Object.assign(window, { MATERIAL_DATA, MaterialPage });
