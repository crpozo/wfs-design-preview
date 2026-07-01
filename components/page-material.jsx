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
      { name: 'Privacy', tag: 'Full board', notes: 'Full privacy vinyl fence panels for backyards and property lines.' },
      { name: 'Semi-Privacy', tag: 'Airflow', notes: 'Decorative vinyl fence option with partial visibility and airflow.' },
      { name: 'Picket', tag: 'Classic', notes: 'Classic vinyl picket fence for front yards and decorative projects.' },
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
    useCases: [
      ['Backyard Privacy', 'Low-maintenance vinyl fence materials for residential backyards and property lines.'],
      ['Pool Enclosures', 'Clean vinyl fence options for pool areas and residential projects.'],
      ['HOA & Residential Communities', 'Consistent vinyl fence styles for communities, subdivisions, and shared spaces.'],
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
      { name: 'Cape Coral Residential', loc: 'Cape Coral, FL', size: '320 LF', material: 'Vinyl', type: 'Vinyl privacy fence, 6 ft, white', contractor: 'Naples Outdoor', year: '2024' },
      { name: 'Fort Myers Estate', loc: 'Fort Myers, FL', size: '410 LF', material: 'Vinyl', type: 'Vinyl privacy fence, 6 ft, tan', contractor: 'Estate Fence Pros', year: '2024' },
      { name: 'Naples Pool Enclosure', loc: 'Naples, FL', size: '180 LF', material: 'Vinyl', type: 'Vinyl privacy fence, 6 ft, pool-code compliant', contractor: 'Naples Outdoor', year: '2025' },
      { name: 'Estero Community', loc: 'Estero, FL', size: '44 lots', material: 'Vinyl', type: 'Vinyl privacy fence, 6 ft, community standard', contractor: 'Gulf Perimeter LLC', year: '2025' },
      { name: 'HOA Boundary', loc: 'Lehigh Acres, FL', size: '60 lots', material: 'Vinyl', type: 'Vinyl privacy fence, 6 ft, white', contractor: 'Gulf Perimeter LLC', year: '2025' },
    ],
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
      ['Options', 'Standard board, tall board, slatted privacy, and custom gates'],
      ['Lead Time', 'Stock and lead time vary by style, height, color, and quantity'],
    ],
    profiles: [
      { name: 'Standard Board', tag: 'Popular', notes: 'Clean metal privacy style for residential and commercial projects.' },
      { name: 'Tall Board', tag: 'Extra coverage', notes: 'Taller metal privacy option for projects that need extra coverage.' },
      { name: 'Slatted Privacy', tag: 'Airflow', notes: 'Modern metal fence style with partial visibility and airflow.' },
      { name: 'Modern Gate', tag: 'Matching', notes: 'Matching single and double gates with hardware options.' },
    ],
    specs: [
      ['Heights', "6', 7', 8', and other options available by request"],
      ['Colors', 'Black, bronze, white, woodgrain, and selected color options'],
      ['Material', 'Metal panels, posts, rails, gates, and hardware'],
      ['Styles', 'Standard board, tall board, slatted privacy, and modern gate options'],
      ['Post Options', 'Line posts, end posts, blank posts, and gate posts available'],
      ['Lead Time', 'Stock and lead time vary by style, height, color, and quantity'],
    ],
    useCases: [
      ['Modern Privacy', 'Metal privacy fence materials for clean residential and commercial designs.'],
      ['Commercial Screens', 'Durable metal fence options for enclosures, screens, and utility areas.'],
      ['Security Projects', 'Strong metal fence materials for projects that need privacy and durability.'],
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
      { name: 'Cape Coral Residential', loc: 'Cape Coral, FL', size: '320 LF', material: 'Metal', type: 'Metal board privacy, 6 ft, black', contractor: 'Gulf Perimeter LLC', year: '2024' },
      { name: 'Commercial Facility', loc: 'Fort Myers, FL', size: '480 LF', material: 'Metal', type: 'Metal privacy screen, 8 ft, bronze', contractor: 'Gulf Perimeter LLC', year: '2024' },
      { name: 'Modern Residential Privacy', loc: 'Naples, FL', size: '260 LF', material: 'Metal', type: 'Slatted metal privacy, 6 ft, black', contractor: 'Estate Fence Pros', year: '2025' },
      { name: 'Utility Screen Enclosure', loc: 'Cape Coral, FL', size: '140 LF', material: 'Metal', type: 'Metal screen enclosure, 7 ft, bronze', contractor: 'Industrial Fence FL', year: '2025' },
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
    useCases: [
      ['Coastal Privacy', 'Galvanized steel privacy panels for coastal and Florida properties.'],
      ['Commercial Properties', 'Clean privacy fence option for commercial sites, enclosures, and shared spaces.'],
      ['Modern Residential', 'Modern privacy fence material for homes, yards, and property lines.'],
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
      { name: 'Cape Coral Residential', loc: 'Cape Coral, FL', size: '320 LF', material: 'EC Fence', type: 'EC Fence panels, 6 ft, bronze', contractor: 'Harbor Iron Works', year: '2024' },
      { name: 'Coastal Privacy Project', loc: 'Sanibel, FL', size: '240 LF', material: 'EC Fence', type: 'EC Fence panels, 6 ft, white', contractor: 'Harbor Iron Works', year: '2024' },
      { name: 'Commercial Property Screen', loc: 'Fort Myers, FL', size: '460 LF', material: 'EC Fence', type: 'EC Fence panels, 6 ft, bronze', contractor: 'Gulf Perimeter LLC', year: '2025' },
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
      <ProjectGallery featuredMaterial={{ vinyl: 'Vinyl', aluminum: 'Aluminum', chainlink: 'Chain Link', metal: 'Metal', ecfence: 'EC Fence' }[slug]} items={base.projects}/>
      <MaterialOtherMaterials currentSlug={slug === 'chainlink' ? 'chain-link' : slug}/>
      <MaterialCTA data={data}/>
      <Footer />
    </>
  );
};

Object.assign(window, { MATERIAL_DATA, MaterialPage });
