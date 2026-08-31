/* Projects page, extended gallery + case study */

const FULL_PROJECTS = [
  { name: { EN: 'Cape Coral Residential', ES: 'Residencial Cape Coral' }, loc: 'Cape Coral, FL', size: '320 LF', material: 'Chain Link', type: { EN: 'Vinyl-coated black, 6 ft, with double drive gate', ES: 'Recubierto de vinilo negro, 6 ft, con portón doble vehicular' }, contractor: 'Coastline Fence Co.', year: '2024', imgUrl: 'assets/projects/cl-fence-black.jpg' }, { name: { EN: 'Estero Community', ES: 'Comunidad Estero' }, loc: 'Estero, FL', size: { EN: '38 lots', ES: '38 lotes' }, material: 'Metal', type: { EN: 'Metal board privacy, 6 ft, black finish', ES: 'Privacidad de tablero metálico, 6 ft, acabado negro' }, contractor: 'Gulf Perimeter LLC', year: '2024', imgUrl: 'assets/projects/met-fence-horizontal-black.jpg' }, { name: { EN: 'Fort Myers Estate', ES: 'Residencia Fort Myers' }, loc: 'Fort Myers, FL', size: '420 LF', material: 'Aluminum', type: { EN: '2-rail aluminum, smooth bottom, white', ES: 'Aluminio de 2 rieles, base lisa, blanco' }, contractor: 'Estate Fence Pros', year: '2025', imgUrl: 'assets/projects/alum-2-rail-smooth-bottom-white.jpg' }, { name: { EN: 'Naples Pool Enclosure', ES: 'Cerramiento de piscina Naples' }, loc: 'Naples, FL', size: '180 LF', material: 'Vinyl', type: { EN: 'Vinyl privacy, 6 ft, pool-code compliant', ES: 'Privacidad de vinilo, 6 ft, cumple código de piscinas' }, contractor: 'Naples Outdoor', year: '2025', imgUrl: 'assets/projects/pvc-closed-top-white.jpg' }, { name: { EN: 'Bonita Springs Self-Storage', ES: 'Autoalmacenamiento Bonita Springs' }, loc: 'Bonita Springs, FL', size: '0.9 mi', material: 'Chain Link', type: { EN: 'Galvanized mesh with galvanized swing gate', ES: 'Malla galvanizada con portón abatible galvanizado' }, contractor: 'Industrial Fence FL', year: '2024', imgUrl: 'assets/projects/cl-swing-gate-galv-4.jpg' }, { name: { EN: 'Punta Gorda Marina', ES: 'Marina Punta Gorda' }, loc: 'Punta Gorda, FL', size: '240 LF', material: 'EC Fence', type: { EN: 'EC Fence panels, 6 ft, white finish', ES: 'Paneles EC Fence, 6 ft, acabado blanco' }, contractor: 'Harbor Iron Works', year: '2025', imgUrl: 'assets/projects/ecfence-white.jpg' }, { name: { EN: 'Sanibel Beachfront', ES: 'Frente de playa Sanibel' }, loc: 'Sanibel, FL', size: '180 LF', material: 'Aluminum', type: { EN: 'Pool code aluminum, 2-rail smooth bottom, white', ES: 'Aluminio código de piscinas, 2 rieles base lisa, blanco' }, contractor: 'Island Outdoor LLC', year: '2025', imgUrl: 'assets/projects/alum-2-rail-smooth-bottom-pool-code-white.jpg' }, { name: { EN: 'Fort Myers Industrial Park', ES: 'Parque Industrial Fort Myers' }, loc: 'Fort Myers, FL', size: '1.4 mi', material: 'Chain Link', type: { EN: 'Vinyl-coated black, 8 ft, with cantilever gates', ES: 'Recubierto de vinilo negro, 8 ft, con portones cantilever' }, contractor: 'Industrial Fence FL', year: '2025', imgUrl: 'assets/projects/cl-gate-black.jpg' }, { name: { EN: 'Lehigh Acres Subdivision', ES: 'Fraccionamiento Lehigh Acres' }, loc: 'Lehigh Acres, FL', size: { EN: '52 lots', ES: '52 lotes' }, material: 'Vinyl', type: { EN: 'Vinyl privacy white, 6 ft, walk + double gates', ES: 'Privacidad de vinilo blanco, 6 ft, portón peatonal + portones dobles' }, contractor: 'Lehigh Outdoor Co.', year: '2024', imgUrl: 'assets/projects/pvc-privacy-gate-white.jpg' }, { name: { EN: 'Marco Island Resort', ES: 'Resort Marco Island' }, loc: 'Marco Island, FL', size: '780 LF', material: 'Metal', type: { EN: 'Metal fence, 3-rail, brown, HVHZ', ES: 'Cerca metálica, 3 rieles, marrón, HVHZ' }, contractor: 'Coastline Fence Co.', year: '2025', imgUrl: 'assets/projects/met-fence-3-rail-brown.jpg' }, { name: { EN: 'North Port HOA', ES: 'HOA North Port' }, loc: 'North Port, FL', size: '0.7 mi', material: 'Aluminum', type: { EN: 'Aluminum puppy picket, bronze, ornamental sections', ES: 'Aluminio puppy picket, bronce, secciones ornamentales' }, contractor: 'Sun Coast Fence', year: '2024', imgUrl: 'assets/projects/alum-puppy-picket-bronze.jpg' }, { name: { EN: 'Englewood Tennis Courts', ES: 'Canchas de tenis Englewood' }, loc: 'Englewood, FL', size: { EN: '4 courts', ES: '4 canchas' }, material: 'Chain Link', type: { EN: 'Vinyl-coated black, 10 ft mesh, court perimeters', ES: 'Recubierto de vinilo negro, malla de 10 ft, perímetros de cancha' }, contractor: 'Industrial Fence FL', year: '2025', imgUrl: 'assets/projects/cl-fence-black-2.jpg' },
];

/* Material display labels. The raw English value stays the filter/comparison
   key; only the shown text is translated. */
const MAT_LABELS = {
  'All':        { EN: 'All', ES: 'Todas' }, 'Chain Link': { EN: 'Chain Link', ES: 'Malla ciclónica' }, 'Aluminum':   { EN: 'Aluminum', ES: 'Aluminio' }, 'Vinyl':      { EN: 'Vinyl', ES: 'Vinilo' }, 'Metal':      { EN: 'Metal', ES: 'Metal' }, 'EC Fence':   { EN: 'EC Fence', ES: 'EC Fence' },
};

const ProjectsHero = () => {
  const t = useT();
  return (
    <PageHero
      crumbs={[[t('Home', 'Inicio'), 'Homepage.html'], [t('Projects', 'Proyectos'), null]]}
      eyebrow={t('Project archive', 'Archivo de proyectos')}
      title={t('Real projects.', 'Proyectos reales.')}
      accent={t('Real perimeters.', 'Perímetros reales.')}
      subtitle={t('A selection of completed fence and gate projects across Southwest Florida and beyond. Filter by material below.', 'Una selección de proyectos de cercas y portones terminados en el suroeste de Florida y más allá. Filtra por material abajo.')}
      image="assets/MET.webp"
    />
  );
};

const ProjectsBigGallery = () => {
  const t = useT();
  const [filter, setFilter] = React.useState('All');
  const filters = ['All', 'Chain Link', 'Aluminum', 'Vinyl', 'Metal', 'EC Fence'];
  const visible = filter === 'All' ? FULL_PROJECTS : FULL_PROJECTS.filter(p => p.material === filter);
  return (
    <section style={{ background: 'var(--white)', padding: '120px 0' }}>
      <div className="container">
        <PageSectionHeader
          number="01" label={t('Filter the archive', 'Filtra el archivo')}
          title={t('By material,', 'Por material,')}
          accent={t('across SW Florida.', 'en todo el suroeste de Florida.')}
          sub={t('Twelve highlighted jobs shown, full archive available on request.', 'Doce trabajos destacados a la vista; el archivo completo está disponible bajo petición.')}
        />
        <div style={{
          display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28, paddingBottom: 16, borderBottom: '1px solid rgba(0,16,17,0.12)', }}>
          {filters.map(f => {
            const active = f === filter;
            return (
              <button key={f} onClick={() => setFilter(f)} className="mono"
                style={{
                  padding: '6px 12px', fontSize: 13.5, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700, border: '1px solid var(--ink)', background: active ? 'var(--ink)' : 'transparent', color: active ? 'var(--white)' : 'var(--ink)', cursor: 'pointer', }}>{t(MAT_LABELS[f])}</button>
            );
          })}
          <span className="mono" style={{
            marginLeft: 'auto', alignSelf: 'center', fontSize: 13.5, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--charcoal)', }}>{visible.length} {visible.length === 1 ? t('project', 'proyecto') : t('projects', 'proyectos')}</span>
        </div>
        <div className="wfs-projects-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridAutoRows: '260px', gap: 14, }}>
          {visible.map((p, i) => (
            <ProjectCard key={p.name.EN} p={{
              ...p, name: t(p.name), type: t(p.type), size: t(p.size), material: t(MAT_LABELS[p.material]), }} i={i}
              layout={{ col: 'span 1', row: 'span 1', featured: false }}/>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectsCaseStudy = () => {
  const t = useT();
  return (
    <section className="wfs-brand-texture" style={{ backgroundColor: 'var(--ink)', color: 'var(--parchment)', padding: 'clamp(40px, 7vh, 72px) 0', display: 'flex', alignItems: 'center', minHeight: 0, maxHeight: 'none' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 56, alignItems: 'center' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 10, width: 'min(100%, 620px)', justifySelf: 'center', position: 'relative' }}>
            <div style={{ position: 'relative', aspectRatio: '4 / 5', overflow: 'hidden' }}>
              <img loading="lazy" decoding="async" src="assets/projects/cl-swing-gate-galv-4.jpg"
                alt={t('Fort Myers Industrial Park perimeter', 'Perímetro del Fort Myers Industrial Park')}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}/>
            </div>
            <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: 10 }}>
              {[
                ['assets/projects/cl-fence-black-2.jpg', 'Black chain link fence run at the industrial park'],
                ['assets/projects/cl-gate-black.jpg', 'Black chain link gate at the industrial park'],
              ].map(([src, alt]) => (
                <div key={src} style={{ position: 'relative', overflow: 'hidden' }}>
                  <img src={src} alt={alt} loading="lazy" decoding="async" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}/>
                </div>
              ))}
            </div>
            <div className="mono" style={{
              position: 'absolute', top: 16, left: 16, background: 'var(--tangerine)', color: 'var(--ink)', padding: '5px 10px', fontSize: 13.5, letterSpacing: '0.22em', fontWeight: 700, }}>{t('CASE STUDY', 'CASO DE ESTUDIO')} · 01</div>
          </div>
          <div>
            <h2 className="display" style={{
              margin: 0, fontSize: 'clamp(32px, 3.6vw, 48px)', lineHeight: 1, letterSpacing: '-0.02em', }}>
              {t('1.4 miles of perimeter.', '1.4 millas de perímetro.')}<br/>
              <span style={{ color: 'var(--tangerine)' }}>{t('Six cantilever gates.', 'Seis portones cantilever.')}</span><br/>
              {t('Eleven weeks.', 'Once semanas.')}
            </h2>
            <p style={{ marginTop: 18, fontSize: 17, lineHeight: 1.6, color: 'var(--alice-blue)', maxWidth: 520 }}>
              {t('Fort Myers Industrial Park, 11.5 ga galvanized chain link, 8 ft tall, with six WFS-fabricated cantilever gates ranging from 24 ft to 42 ft openings. Phased deliveries against a tight release schedule.', 'Fort Myers Industrial Park, malla ciclónica galvanizada calibre 11.5, 8 ft de alto, con seis portones cantilever fabricados por WFS con aberturas de entre 24 ft y 42 ft. Entregas por fases contra un cronograma de liberación ajustado.')}
            </p>
            <div style={{ marginTop: 24 }}>
              <StatStrip dark items={[
                ['1.4 mi', t('Perimeter', 'Perímetro')], ['6', t('Gates', 'Portones')], ['8 ft', t('Mesh height', 'Altura de malla')], ['11 wk', t('Project span', 'Duración del proyecto')], ]}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectsCTA = () => {
  const t = useT();
  return (
    <CTABand
      kicker={t('Your project, next', 'Tu proyecto, el siguiente')}
      title={t('Have a project?', '¿Tienes un proyecto?')}
      accent={t("Let's spec the material.", 'Especifiquemos el material.')}
      body={t("We work with contractors, GCs, HOAs and homeowners across SW Florida. Send the scope and we'll come back with stock, pricing and lead time within 24 hours.", 'Trabajamos con contratistas, contratistas generales, HOAs y propietarios en todo el suroeste de Florida. Envíanos el alcance y te responderemos con existencias, precios y plazo de entrega en un plazo de 24 horas.')}
      primary={[t('Start a quote', 'Solicitar cotización'), 'estimate.html']}
      secondary={[t('Talk to a rep', 'Habla con un asesor'), 'tel:2394652482']}
    />
  );
};

Object.assign(window, { ProjectsHero, ProjectsBigGallery, ProjectsCaseStudy, ProjectsCTA });
