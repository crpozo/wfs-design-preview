/* Areas We Serve: los condados y ciudades a los que llega WFS. Sigue la pagina
   de referencia (mapa del estado + lista en columnas) en dos bloques: el
   suroeste de Florida, donde estan las dos sucursales, y el resto del estado,
   con entrega en camion. El mapa sale de components/areas-map-data.js
   (condados reales del Census, window.WFS_FL_MAP). Las ciudades vienen de las
   paginas /fl/ del sitio viejo y de los proyectos del sitio: ninguna inventada.
   Los ids de condado (lee-county, ...) son los destinos de las redirecciones
   301 de /fl/<condado>/ en el tema. */

const AREAS_YARD_NAMES = { fm: 'Fort Myers', pc: 'Port Charlotte' };

/* Suroeste: cada condado con su sucursal mas cercana. Solo se enlazan los
   pueblos con pagina propia; el resto va como texto (nada de enlaces vacios). */
const AREAS_SWFL = [
  { key: 'lee', county: 'Lee', yard: 'fm', towns: [['Fort Myers', 'locations.html#fort-myers'], 'Cape Coral', 'Bonita Springs', 'Estero', 'Lehigh Acres', 'North Fort Myers', 'Sanibel'] },
  { key: 'collier', county: 'Collier', yard: 'fm', towns: ['Naples', 'Marco Island', 'Golden Gate', 'Immokalee'] },
  { key: 'charlotte', county: 'Charlotte', yard: 'pc', towns: [['Port Charlotte', 'locations.html#port-charlotte'], 'Punta Gorda', 'Englewood'] },
  { key: 'sarasota', county: 'Sarasota', yard: 'pc', towns: ['Sarasota', 'North Port', 'Venice'] },
  { key: 'hendry', county: 'Hendry', yard: 'fm', towns: ['LaBelle', 'Clewiston'] },
  { key: 'desoto', county: 'DeSoto', yard: 'pc', towns: ['Arcadia'] },
];

const AREAS_STATE = [
  { key: 'manatee', county: 'Manatee', towns: ['Bradenton', 'Lakewood Ranch'] },
  { key: 'hillsborough', county: 'Hillsborough', towns: ['Tampa', 'Plant City'] },
  { key: 'pinellas', county: 'Pinellas', towns: ['Clearwater', 'St. Petersburg'] },
  { key: 'pasco', county: 'Pasco', towns: ["Land O' Lakes", 'Wesley Chapel'] },
  { key: 'polk', county: 'Polk', towns: ['Lakeland', 'Winter Haven'] },
  { key: 'hardee', county: 'Hardee', towns: ['Wauchula'] },
  { key: 'highlands', county: 'Highlands', towns: ['Sebring'] },
  { key: 'orange', county: 'Orange', towns: ['Orlando', 'Apopka', 'Ocoee'] },
  { key: 'osceola', county: 'Osceola', towns: ['Kissimmee'] },
  { key: 'broward', county: 'Broward', towns: ['Fort Lauderdale', 'Coral Springs', 'Coconut Creek', 'Dania Beach', 'Davie', 'Deerfield Beach', 'Hallandale Beach', 'Hollywood', 'Parkland'] },
  { key: 'miami-dade', county: 'Miami-Dade', towns: ['Miami', 'Aventura', 'Coral Gables', 'Doral', 'Hialeah', 'Homestead'] },
  { key: 'monroe', county: 'Monroe', towns: ['Key West', 'Big Pine Key', 'Islamorada', 'Marathon', 'Tavernier'] },
];

const AREAS_PRIMARY = new Set(AREAS_SWFL.map((g) => g.key));

/* Etiquetas de condado del mapa del suroeste, en unidades del viewBox. Donde
   el centroide choca con un pin o cae en un borde se corre a mano. */
const AREAS_LABEL_AT = { lee: [532, 470], charlotte: [529.8, 414], sarasota: [489, 392], hendry: [595, 472] };

const AREAS_MATERIALS = [
  { name: { EN: 'Vinyl / PVC', ES: 'Vinilo / PVC' }, href: 'vinyl.html', note: { EN: 'Privacy, picket and ranch rail styles, with matching gates.', ES: 'Estilos de privacidad, picket y ranch rail, con portones a juego.' } },
  { name: { EN: 'Aluminum', ES: 'Aluminio' }, href: 'aluminum.html', note: { EN: 'Powder-coated panels, posts and gates, including pool code options.', ES: 'Paneles, postes y portones con pintura en polvo, incluidas opciones que cumplen el código de piscinas.' } },
  { name: { EN: 'Chain Link', ES: 'Malla ciclónica' }, href: 'chain-link.html', note: { EN: 'Galvanized and vinyl-coated mesh, posts, fittings and gates.', ES: 'Malla galvanizada y recubierta de vinilo, postes, accesorios y portones.' } },
  { name: { EN: 'Metal / DuraFence', ES: 'Metal / DuraFence' }, href: 'metal.html', note: { EN: 'Metal privacy panels in Modern, Original and P1 styles.', ES: 'Paneles de privacidad de metal en estilos Modern, Original y P1.' } },
  { name: { EN: 'EC Fence', ES: 'EC Fence' }, href: 'ecfence.html', note: { EN: 'Galvanized steel privacy panels in bronze and white, built for salt air.', ES: 'Paneles de privacidad de acero galvanizado en bronce y blanco, hechos para el aire salino.' } },
  { name: { EN: 'Gates', ES: 'Portones' }, href: 'products.html', note: { EN: 'Single, double, sliding, cantilever and rolling gates, fabricated in our Fort Myers shop.', ES: 'Portones batientes sencillos y dobles, corredizos, cantilever y rodantes, fabricados en nuestro taller de Fort Myers.' } },
];

const AreasHero = () => {
  const t = useT();
  return (
  <PageHero
    crumbs={[[t('Home', 'Inicio'), 'Homepage.html'], [t('Areas We Serve', 'Zonas que atendemos'), null]]}
    eyebrow={t('Areas We Serve', 'Zonas que atendemos')}
    title={t('Proudly supplying our', 'Orgullosos de abastecer a')}
    accent={t('Florida communities.', 'nuestras comunidades de Florida.')}
    subtitle={t(
      'Two yards in Fort Myers and Port Charlotte, same-day pickup on standard qualifying orders, and job-site delivery on our own trucks across the state. Find your county below.',
      'Dos sucursales en Fort Myers y Port Charlotte, retiro el mismo día en pedidos estándar que califiquen y entrega en obra con nuestros propios camiones en todo el estado. Busca tu condado abajo.'
    )}
    image="assets/hero-warehouse.webp"
    actions={[
      { label: t('Request a Quote', 'Solicitar cotización'), href: 'contact.html#contact', primary: true },
      { label: t('Find your county', 'Busca tu condado'), href: '#southwest-florida' },
    ]}
  />
  );
};

const AreasIntro = () => {
  const t = useT();
  const facts = [
    ['2', { EN: 'Yards: Fort Myers + Port Charlotte', ES: 'Sucursales: Fort Myers + Port Charlotte' }],
    ['6', { EN: 'Southwest Florida counties at our doorstep', ES: 'Condados del suroeste de Florida a un paso' }],
    ['FL', { EN: 'Statewide delivery on our own trucks', ES: 'Entrega en todo el estado con nuestros propios camiones' }],
    [{ EN: 'Same day', ES: 'Mismo día' }, { EN: 'Pickup on standard qualifying orders', ES: 'Retiro en pedidos estándar que califiquen' }],
  ];
  return (
    <section className="wfs-brand-texture" style={{ backgroundColor: 'var(--ink)', color: 'var(--parchment)', padding: '104px 0' }}>
      <div className="container">
        <div className="wfs-areas-intro__head">
          <h2 className="display">
            {t('Your local', 'Tu proveedor local')}{' '}
            <span>{t('fence supply yard.', 'de material de cerca.')}</span>
          </h2>
          <p>
            {t(
              'Western Fence Supply is a family-owned, supply-only company: we stock the material and fabricate gates in Fort Myers, and contractors, homeowners and HOAs across Florida build with it. Pick up at either yard or have it delivered to the job site.',
              'Western Fence Supply es una empresa familiar que solo suministra: tenemos el material y fabricamos portones en Fort Myers, y contratistas, propietarios y HOAs de toda Florida construyen con él. Recógelo en cualquiera de las dos sucursales o recíbelo en la obra.'
            )}
          </p>
          <div className="wfs-areas-intro__ctas">
            <a href="contact.html#contact" className="btn btn-primary">{t('Request a Quote', 'Solicitar cotización')} <ArrowRight /></a>
            <a href="tel:2394652482" className="btn btn-ghost on-dark" style={{ color: 'var(--parchment)' }}>{t('Call (239) 465-2482', 'Llamar (239) 465-2482')}</a>
          </div>
        </div>
        <dl className="wfs-areas-facts">
          {facts.map(([n, l], i) => (
            <div key={i}>
              <dt>{typeof n === 'string' ? n : t(n)}</dt>
              <dd>{t(l)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

/* Mapa: SVG de condados + etiquetas y pines en HTML encima, posicionados en %
   del viewBox (el contenedor tiene el mismo aspect-ratio, asi que no se
   desplazan al escalar). */
const AreasMap = ({ view, listed, hot, setHot, onPick, labels, pins, cities, ariaLabel }) => {
  const t = useT();
  const M = window.WFS_FL_MAP;
  if (!M) return null;
  const vb = M.vb[view];
  const at = ([x, y]) => ({ left: `${((x - vb[0]) / vb[2]) * 100}%`, top: `${((y - vb[1]) / vb[3]) * 100}%` });
  return (
    <div className={`wfs-areas-map wfs-areas-map--${view}`} style={{ aspectRatio: `${vb[2]} / ${vb[3]}` }}>
      <svg viewBox={vb.join(' ')} role="img" aria-label={ariaLabel} preserveAspectRatio="xMidYMid meet">
        {Object.keys(M.c).map((k) => {
          const c = M.c[k];
          const on = listed.has(k);
          const tone = AREAS_PRIMARY.has(k) ? 'is-primary' : view === 'swfl' ? 'is-muted' : 'is-other';
          return (
            <path key={k} d={c.d}
              className={`wfs-areas-county ${tone}${hot === k ? ' is-hot' : ''}${on ? ' is-listed' : ''}`}
              onMouseEnter={on ? () => setHot(k) : undefined}
              onMouseLeave={on ? () => setHot(null) : undefined}
              onClick={on ? () => onPick(k) : undefined}>
              <title>{t(`${c.n} County`, `Condado de ${c.n}`)}</title>
            </path>
          );
        })}
        <path d={M.s} className="wfs-areas-outline" />
      </svg>
      {labels && AREAS_SWFL.map((g) => M.c[g.key] && (
        <span key={g.key} className="wfs-areas-clabel" style={at(AREAS_LABEL_AT[g.key] || M.c[g.key].l)} aria-hidden="true">{M.c[g.key].n}</span>
      ))}
      {cities && cities.map((c) => (
        <React.Fragment key={c.key}>
          <span className="wfs-areas-city" style={at(M.p[c.key])} aria-hidden="true" />
          <span className={`wfs-areas-citylabel wfs-areas-citylabel--${c.side}`} style={at(M.p[c.key])} aria-hidden="true">{c.label}</span>
        </React.Fragment>
      ))}
      {pins && pins.map((p) => (
        <React.Fragment key={p.key}>
          <span className="wfs-areas-pin" style={at(M.p[p.key])} aria-hidden="true" />
          {p.label && <span className={`wfs-areas-pinlabel wfs-areas-pinlabel--${p.side}`} style={at(M.p[p.key])} aria-hidden="true">{p.label}</span>}
        </React.Fragment>
      ))}
    </div>
  );
};

const AreasList = ({ groups, hot, setHot }) => {
  const t = useT();
  return (
    <div className="wfs-areas-list">
      {groups.map((g) => (
        <div key={g.key} id={`${g.key}-county`} className={`wfs-areas-group${hot === g.key ? ' is-hot' : ''}`}
          onMouseEnter={() => setHot(g.key)} onMouseLeave={() => setHot(null)}>
          <h3>{t(`${g.county} County`, `Condado de ${g.county}`)}</h3>
          {g.yard && (
            <div className="wfs-areas-yard">{t({ EN: <><span className="wfs-areas-nowrap">{AREAS_YARD_NAMES[g.yard]}</span> yard</>, ES: <>Sucursal <span className="wfs-areas-nowrap">{AREAS_YARD_NAMES[g.yard]}</span></> })}</div>
          )}
          <ul className="wfs-areas-towns">
            {g.towns.map((tw) => Array.isArray(tw)
              ? <li key={tw[0]}><a href={tw[1]}>{tw[0]}</a></li>
              : <li key={tw}>{tw}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
};

/* Un bloque de la referencia: mapa a un lado, titulo + lista al otro. Pasar el
   raton por un condado (en el mapa o en la lista) lo resalta en los dos. Si la
   URL trae #<condado>-county (redireccion desde /fl/), baja hasta el y lo marca. */
const AreasBlock = ({ id, view, groups, eyebrow, title, accent, intro, legend, labels, pins, cities, flip, tone = 'var(--white)', ariaLabel }) => {
  const [hot, setHotRaw] = React.useState(null);
  /* Un clic en el mapa fija el resaltado un rato: al hacer scroll el puntero
     sale del condado y el mouseleave lo borraba al instante. */
  const pinned = React.useRef(null);
  const setHot = (k) => setHotRaw(k === null ? pinned.current : k);
  const listed = React.useMemo(() => new Set(groups.map((g) => g.key)), [groups]);
  const pick = (k) => {
    pinned.current = k;
    setHotRaw(k);
    setTimeout(() => {
      if (pinned.current !== k) return;
      pinned.current = null;
      setHotRaw((h) => (h === k ? null : h));
    }, 2600);
    const el = document.getElementById(`${k}-county`);
    const stacked = window.matchMedia('(max-width: 1024px)').matches;
    if (el) el.scrollIntoView({ behavior: 'smooth', block: stacked ? 'start' : 'nearest' });
  };
  React.useEffect(() => {
    const h = decodeURIComponent((window.location.hash || '').slice(1));
    const g = groups.find((x) => `${x.key}-county` === h);
    if (!g && h !== id) return undefined;
    const go = setTimeout(() => {
      const el = document.getElementById(h);
      if (el) el.scrollIntoView({ block: 'start' });
      if (g) setHot(g.key);
    }, 300);
    const off = setTimeout(() => setHot((k) => (g && k === g.key ? null : k)), 3600);
    return () => { clearTimeout(go); clearTimeout(off); };
  }, []);
  return (
    <section id={id} className={`wfs-areas-block${flip ? ' wfs-areas-block--flip' : ''}`} style={{ background: tone, padding: '112px 0' }}>
      <div className="container">
        <div className="wfs-areas-grid">
          <div className="wfs-areas-mapcol">
            <AreasMap view={view} listed={listed} hot={hot} setHot={setHot} onPick={pick}
              labels={labels} pins={pins} cities={cities} ariaLabel={ariaLabel} />
            <ul className="wfs-areas-legend">
              {legend.map(([cls, label]) => (
                <li key={cls}><span className={`wfs-areas-swatch ${cls}`} aria-hidden="true" />{label}</li>
              ))}
            </ul>
          </div>
          <div className="wfs-areas-listcol">
            <div className="wfs-areas-eyebrow">{eyebrow}</div>
            <h2 className="display wfs-areas-title">{title} <span>{accent}</span></h2>
            <p className="wfs-areas-lead">{intro}</p>
            <AreasList groups={groups} hot={hot} setHot={setHot} />
          </div>
        </div>
      </div>
    </section>
  );
};

const AreasSouthwest = () => {
  const t = useT();
  return (
    <AreasBlock
      id="southwest-florida" view="swfl" groups={AREAS_SWFL} labels
      eyebrow={t('Home turf · both yards', 'Nuestra zona · las dos sucursales')}
      title={t('Southwest', 'Suroeste de')} accent={t('Florida.', 'Florida.')}
      intro={t(
        'Both yards sit here, so material is a short drive away: pick it up the same day on standard qualifying orders, or get it on our trucks at the job site.',
        'Nuestras dos sucursales están aquí, así que el material te queda cerca: recógelo el mismo día en pedidos estándar que califiquen o recíbelo en la obra con nuestros camiones.'
      )}
      pins={[
        { key: 'fm', label: t('Fort Myers · HQ', 'Fort Myers · Sede'), side: 'right' },
        { key: 'pc', label: 'Port Charlotte', side: 'left' },
      ]}
      legend={[
        ['is-primary', t('Our core counties', 'Nuestros condados principales')],
        ['is-yard', t('WFS yards', 'Sucursales de WFS')],
      ]}
      ariaLabel={t('Map of Southwest Florida: Lee, Collier, Charlotte, Sarasota, Hendry and DeSoto counties, with the Fort Myers and Port Charlotte yards', 'Mapa del suroeste de Florida: condados de Lee, Collier, Charlotte, Sarasota, Hendry y DeSoto, con las sucursales de Fort Myers y Port Charlotte')}
    />
  );
};

const AreasFlorida = () => {
  const t = useT();
  return (
    <AreasBlock
      id="across-florida" view="fl" groups={AREAS_STATE} flip tone="var(--parchment)"
      eyebrow={t('Statewide delivery', 'Entrega en todo el estado')}
      title={t('Across', 'En toda')} accent={t('Florida.', 'Florida.')}
      intro={t(
        'We deliver throughout Florida on our own trucks. These are some of the counties and cities we ship to; fees vary by location and order size, and we confirm both with your quote.',
        'Entregamos en toda Florida con nuestros propios camiones. Estos son algunos de los condados y ciudades a los que enviamos; el costo varía según la ubicación y el tamaño del pedido, y te confirmamos ambos con tu cotización.'
      )}
      pins={[{ key: 'fm' }, { key: 'pc' }]}
      cities={[
        { key: 'tampa', label: 'Tampa', side: 'right' },
        { key: 'orlando', label: 'Orlando', side: 'top' },
        { key: 'miami', label: 'Miami', side: 'left' },
      ]}
      legend={[
        ['is-primary', t('Southwest Florida: pickup or delivery', 'Suroeste de Florida: retiro o entrega')],
        ['is-other', t('Rest of Florida: delivery on our trucks', 'Resto de Florida: entrega en camión')],
        ['is-yard', t('WFS yards', 'Sucursales de WFS')],
      ]}
      ariaLabel={t('Map of Florida by county: Southwest Florida highlighted, delivery available across the rest of the state', 'Mapa de Florida por condado: el suroeste resaltado, con entrega disponible en el resto del estado')}
    />
  );
};

const AreasMaterials = () => {
  const t = useT();
  return (
    <section style={{ background: 'var(--white)', padding: '112px 0' }}>
      <div className="container">
        <PageSectionHeader
          title={t('Fence materials', 'Materiales de cerca')}
          accent={t('delivered to your county.', 'entregados en tu condado.')}
          sub={t(
            'Everything we stock ships from Fort Myers and Port Charlotte, from single repair parts to full perimeter packages.',
            'Todo lo que tenemos en existencia sale de Fort Myers y Port Charlotte, desde una pieza de reparación hasta paquetes completos de perímetro.'
          )}
          link={[t('Full catalog', 'Catálogo completo'), 'products.html']}
        />
        <div className="wfs-areas-mats">
          {AREAS_MATERIALS.map((m) => (
            <a key={m.href + m.name.EN} href={m.href} className="wfs-areas-mat">
              <span className="wfs-areas-mat__name">{t(m.name)}</span>
              <span className="wfs-areas-mat__note">{t(m.note)}</span>
              <span className="wfs-areas-mat__go" aria-hidden="true">
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                  <path d="M5 11L11 5M11 5H6M11 5V10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

/* Cierre de la referencia ("Don't see your town?"): tarjeta sobre una foto. */
const AreasCTA = () => {
  const t = useT();
  return (
    <section className="wfs-areas-cta">
      <img src="assets/CHAINLINK.webp" alt="" aria-hidden="true" loading="lazy" decoding="async" className="wfs-areas-cta__bg" />
      <div className="container">
        <div className="wfs-areas-cta__card">
          <div className="wfs-areas-eyebrow">{t('Anywhere in Florida', 'En cualquier parte de Florida')}</div>
          <h2 className="display">
            {t("Don't see your town?", '¿No ves tu ciudad?')}
            <span>{t('Call your nearest yard.', 'Llama a tu sucursal más cercana.')}</span>
          </h2>
          <p>
            {t(
              "We deliver throughout Florida. Send the job-site ZIP with your material list and we'll confirm the delivery fee with your quote.",
              'Entregamos en toda Florida. Envíanos el código postal de la obra con tu lista de material y te confirmamos el costo de entrega con tu cotización.'
            )}
          </p>
          <div className="wfs-areas-cta__btns">
            <a href="contact.html#contact" className="btn btn-primary">{t('Request a Quote', 'Solicitar cotización')} <ArrowRight /></a>
            <a href="tel:2394652482" className="btn btn-ghost">Fort Myers (239) 465-2482</a>
            <a href="tel:9414675821" className="btn btn-ghost">Port Charlotte (941) 467-5821</a>
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { AreasHero, AreasIntro, AreasSouthwest, AreasFlorida, AreasMaterials, AreasCTA });
