/* Shared UI bits for WFS homepage */

const Logo = ({ light = false }) => (
  <a href="Homepage.html" style={{ display: 'inline-flex', alignItems: 'center', height: 36 }}>
    <img
      src="assets/wfs-logo.svg"
      alt="Western Fence Supply"
      style={{
        height: 36,
        width: 'auto',
        filter: light ? 'brightness(0) invert(1)' : 'none',
      }}
    />
  </a>
);

const FENCE_IMG = {
  // Real product photos uploaded to assets/
  aluminum:  'assets/ALUM.png',
  chainlink: 'assets/CHAINLINK.png',
  metal:     'assets/MET.png',
  vinyl:     'assets/PVC.png',
  ecfence:   'assets/ECFENCE.png',
  shop:      'assets/wfs-shop.webp',
  // Gate systems
  'gate-single':     'assets/SINGLE_SWING_GATE.png',
  'gate-double':     'assets/DOUBLE_GATE.png',
  'gate-sliding':    'assets/SLIDING_GATE.png',
  'gate-cantilever': 'assets/CANTILEVER.png',
  'gate-rolling':    'assets/ROLLING_GATE.png',
};

const FENCE_ICON = {
  aluminum: 'https://westernfencesupply.com/wp-content/themes/westernfencesupply/img/global/aluminum-fence-icon.svg',
  chainlink: 'https://westernfencesupply.com/wp-content/themes/westernfencesupply/img/global/chainlink-fence-icon.svg',
  metal: 'https://westernfencesupply.com/wp-content/themes/westernfencesupply/img/global/metal-fence-icon.svg',
  vinyl: 'https://westernfencesupply.com/wp-content/themes/westernfencesupply/img/global/vinyl-fence-icon.svg',
};

const ArrowRight = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M2 8 H13 M9 4 L13 8 L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" strokeLinejoin="miter"/>
  </svg>
);

const ArrowDown = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M8 2 V13 M4 9 L8 13 L12 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square"/>
  </svg>
);

const ImgSlot = ({ label, dark = false, height = 280, style = {}, children }) => (
  <div
    className={`img-placeholder ${dark ? 'dark' : ''}`}
    style={{ height, ...style }}
  >
    {children}
    <span className="label">{label}</span>
  </div>
);

/* SVG patterns for product cards */
const ChainLinkSVG = ({ color = '#2e59c1', opacity = 0.45 }) => (
  <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%' }}>
    <defs>
      <pattern id="chainP" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M0 20 L10 10 L20 20 L10 30 Z M20 20 L30 10 L40 20 L30 30 Z M0 0 L10 10 M20 0 L30 10 M40 0 L30 10 M0 40 L10 30 M20 40 L30 30 M40 40 L30 30"
          stroke={color} strokeWidth="1.6" fill="none" opacity={opacity}/>
      </pattern>
    </defs>
    <rect width="200" height="200" fill="url(#chainP)"/>
  </svg>
);

const AluminumSVG = ({ color = '#263166', opacity = 0.7 }) => (
  <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%' }}>
    {Array.from({ length: 12 }).map((_, i) => (
      <rect key={i} x={i * 17 + 4} y="20" width="6" height="160" rx="2" fill={color} opacity={opacity}/>
    ))}
    <rect x="0" y="40" width="200" height="3" fill={color} opacity={opacity}/>
    <rect x="0" y="160" width="200" height="3" fill={color} opacity={opacity}/>
  </svg>
);

const VinylSVG = ({ color = '#263166', opacity = 0.6 }) => (
  <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%' }}>
    {Array.from({ length: 8 }).map((_, i) => (
      <rect key={i} x={i * 25 + 6} y="20" width="14" height="160" rx="2" fill={color} opacity={opacity}/>
    ))}
    <rect x="0" y="48" width="200" height="4" fill={color} opacity={opacity}/>
    <rect x="0" y="148" width="200" height="4" fill={color} opacity={opacity}/>
  </svg>
);

const MetalSVG = ({ color = '#263166', opacity = 0.7 }) => (
  <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%' }}>
    {Array.from({ length: 9 }).map((_, i) => (
      <g key={i}>
        <rect x={i * 22 + 6} y="40" width="4" height="140" fill={color} opacity={opacity}/>
        <path d={`M${i * 22 + 8} 30 L${i * 22 + 4} 40 L${i * 22 + 12} 40 Z`} fill={color} opacity={opacity}/>
      </g>
    ))}
    <rect x="0" y="60" width="200" height="3" fill={color} opacity={opacity}/>
    <rect x="0" y="170" width="200" height="3" fill={color} opacity={opacity}/>
  </svg>
);

const DiamondGrid = ({ color = '#ff7133', opacity = 0.4 }) => (
  <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%' }}>
    <defs>
      <pattern id="dP" width="28" height="28" patternUnits="userSpaceOnUse">
        <path d="M14 0 L28 14 L14 28 L0 14 Z" stroke={color} strokeWidth="1" fill="none" opacity={opacity}/>
      </pattern>
    </defs>
    <rect width="200" height="200" fill="url(#dP)"/>
  </svg>
);

Object.assign(window, {
  Logo, ArrowRight, ArrowDown, ImgSlot,
  ChainLinkSVG, AluminumSVG, VinylSVG, MetalSVG, DiamondGrid,
  FENCE_IMG, FENCE_ICON,
});

/* ───── Global Mode (Homeowner / Contractor) ───── */
const __WFS_MODE_KEY = 'wfs:mode';
const __WFS_MODE_EVENT = 'wfs:mode-change';

const useMode = () => {
  const [mode, setModeState] = React.useState(() => {
    try { return localStorage.getItem(__WFS_MODE_KEY) || 'HOMEOWNER'; }
    catch (e) { return 'HOMEOWNER'; }
  });
  React.useEffect(() => {
    const onChange = (e) => setModeState(e.detail);
    window.addEventListener(__WFS_MODE_EVENT, onChange);
    return () => window.removeEventListener(__WFS_MODE_EVENT, onChange);
  }, []);
  const set = (m) => {
    try { localStorage.setItem(__WFS_MODE_KEY, m); } catch (e) {}
    window.dispatchEvent(new CustomEvent(__WFS_MODE_EVENT, { detail: m }));
  };
  return [mode, set];
};

window.useMode = useMode;

/* ───── Global Language (EN / ES) ───── */
const __WFS_LANG_KEY = 'wfs:lang';
const __WFS_LANG_EVENT = 'wfs:lang-change';

const useLang = () => {
  const [lang, setLangState] = React.useState(() => {
    try { return localStorage.getItem(__WFS_LANG_KEY) || 'EN'; }
    catch (e) { return 'EN'; }
  });
  React.useEffect(() => {
    const onChange = (e) => setLangState(e.detail);
    window.addEventListener(__WFS_LANG_EVENT, onChange);
    return () => window.removeEventListener(__WFS_LANG_EVENT, onChange);
  }, []);
  const set = (l) => {
    try { localStorage.setItem(__WFS_LANG_KEY, l); } catch (e) {}
    window.dispatchEvent(new CustomEvent(__WFS_LANG_EVENT, { detail: l }));
  };
  return [lang, set];
};

/* useT, returns a t(en, es) helper for inline translations
   Also accepts an object: t({ EN: 'hello', ES: 'hola' })
   If only `en` is supplied and lang === 'ES', falls back to `en`. */
const useT = () => {
  const [lang] = useLang();
  return (en, es) => {
    if (en && typeof en === 'object' && !Array.isArray(en)) {
      return en[lang] ?? en.EN ?? '';
    }
    if (lang === 'ES') return es ?? en;
    return en;
  };
};

window.useLang = useLang;
window.useT = useT;

/* Spanish dictionary for detail-page data (material + gate). Keys are the
   exact English strings; useTrData deep-translates when lang === ES. */
const ES_TR = {
"Best for": "Ideal para",
"Starts at": "Desde",
"Lead time": "Plazo de entrega",
"Heights": "Alturas",
"Colors": "Colores",
"Wind rating": "Resistencia al viento",
"Warranty": "Garantía",
"Mesh gauges": "Calibres de malla",
"Finishes": "Acabados",
"Post spacing": "Separación de postes",
"Widths": "Anchos",
"Overhang": "Voladizo",
"Track": "Riel",
"Cycle rating": "Ciclos",
"Automation": "Automatización",
"Hardware": "Herrajes",
"Quote-based": "Según cotización",
"Vinyl / PVC": "Vinilo / PVC",
"Aluminum": "Aluminio",
"Chain Link": "Malla ciclónica",
"Veka-extruded · Lifetime warranty": "Extruido Veka · Garantía de por vida",
"Veka-extruded vinyl.": "Vinilo extruido Veka.",
"Built for the Florida sun.": "Hecho para el sol de Florida.",
"Privacy, semi-private, picket and ranch rail in white, tan and khaki. Won't rot, rust, peel or fade, engineered for Florida UV with a transferable lifetime warranty.": "Privacidad, semiprivada, picket y ranch rail en blanco, beige y caqui. No se pudre, no se oxida, no se pela ni se decolora; diseñado para el UV de Florida con garantía de por vida transferible.",
"Backyard privacy, pool enclosures, residential subdivisions": "Privacidad de patio, cerramientos de piscina, urbanizaciones residenciales",
"Privacy": "Privacidad",
"Full board": "Tabla completa",
"6 ft tongue-and-groove board, no gaps": "Tabla machihembrada de 6 pies, sin espacios",
"Semi-Privacy": "Semiprivada",
"With lattice": "Con celosía",
"6 ft solid + 18\" decorative lattice topper": "6 pies sólida + remate de celosía decorativa de 18\"",
"Picket": "Picket",
"Classic": "Clásico",
"4 ft pointed picket, 3\" spacing": "Picket puntiagudo de 4 pies, separación de 3\"",
"Ranch Rail": "Ranch Rail",
"3-rail": "3 rieles",
"Crossbuck or 3-rail post-and-rail": "Crossbuck o poste y riel de 3 rieles",
"White, Tan, Khaki": "Blanco, beige, caqui",
"Veka-extruded virgin vinyl": "Vinilo virgen extruido Veka",
"Up to 130 mph (system + posts)": "Hasta 130 mph (sistema + postes)",
"Transferable lifetime": "De por vida transferible",
"1-2 days stocked · 3-4 weeks custom": "1-2 días en stock · 3-4 semanas a medida",
"Backyard privacy": "Privacidad de patio",
"The default for SW Florida homeowners, full 6 ft privacy without maintenance.": "La opción por defecto en el suroeste de Florida: privacidad total de 6 pies sin mantenimiento.",
"Pool enclosures": "Cerramientos de piscina",
"Code-compliant profiles meet the 4 ft minimum with pickets ≤ 1.75\" spaced.": "Perfiles según código: mínimo de 4 pies con pickets separados ≤ 1.75\".",
"HOA boundaries": "Límites de HOA",
"Uniform white/tan finish across subdivisions, stocked in volume.": "Acabado uniforme blanco/beige en urbanizaciones, en stock por volumen.",
"Veka-extruded · Trade pickup": "Extruido Veka · Recogida comercial",
"Veka-extruded vinyl in white, tan and khaki across privacy, semi-private, picket and ranch rail. All profiles stocked for same-day will-call. Trade accounts available after the second order.": "Vinilo extruido Veka en blanco, beige y caqui en privacidad, semiprivada, picket y ranch rail. Todos los perfiles en stock para recogida el mismo día. Cuentas comerciales disponibles tras la segunda orden.",
"HOA + subdivision rollouts, repeat residential privacy": "Despliegues de HOA y urbanizaciones, privacidad residencial recurrente",
"HOA rollouts": "Despliegues HOA",
"Uniform 6 ft privacy across 50+ lots, stocked in volume, packed by run.": "Privacidad uniforme de 6 pies en 50+ lotes, en stock por volumen, empacada por corrida.",
"Repeat residential": "Residencial recurrente",
"Pull, pick, install. Same-day pickup on most stock widths.": "Llega, recoge, instala. Recogida el mismo día en la mayoría de anchos en stock.",
"Custom color runs": "Corridas de color a medida",
"Khaki + tan run-outs from Veka for community-specific specs.": "Tirajes caqui y beige de Veka para especificaciones de comunidades.",
"Powder-coat · Pool code": "Pintura en polvo · Código de piscinas",
"Powder-coated aluminum.": "Aluminio con pintura en polvo.",
"Pool-code by default.": "Código de piscinas por defecto.",
"Welded and mechanically assembled aluminum in 3-rail, 4-rail and 5-rail configurations. Pool-code compliant, rackable on grade, available in residential, commercial and industrial grades.": "Aluminio soldado y ensamblado mecánicamente en configuraciones de 3, 4 y 5 rieles. Cumple código de piscinas, adaptable a pendientes, disponible en grados residencial, comercial e industrial.",
"Pool enclosures, ornamental perimeters, HOAs": "Cerramientos de piscina, perímetros ornamentales, HOAs",
"3-Rail": "3 rieles",
"4-Rail": "4 rieles",
"5-Rail": "5 rieles",
"Open picket, residential grade": "Picket abierto, grado residencial",
"Pool code": "Código de piscina",
"≤ 1.75\" picket spacing, code-compliant": "Separación de pickets ≤ 1.75\", según código",
"Privacy-leaning": "Tendiente a privacidad",
"Tight picket pattern, more visual mass": "Patrón de pickets cerrado, mayor masa visual",
"Commercial": "Comercial",
"Heavy gauge": "Calibre pesado",
"6063-T6 alloy, thicker pickets + rails": "Aleación 6063-T6, pickets y rieles más gruesos",
"4 ft, 5 ft, 6 ft (custom to 8 ft)": "4, 5 y 6 pies (a medida hasta 8 pies)",
"Black, Bronze, White (powder-coat)": "Negro, bronce, blanco (pintura en polvo)",
"6063-T6 alloy, fully welded or mechanical": "Aleación 6063-T6, totalmente soldado o mecánico",
"Up to 150 mph HVHZ": "Hasta 150 mph HVHZ",
"20-year finish": "Acabado de 20 años",
"1-2 days stocked · 2-3 weeks custom color": "1-2 días en stock · 2-3 semanas color a medida",
"4 ft profiles meet Florida pool code, picket spacing, latch height, self-closing gates.": "Perfiles de 4 pies cumplen el código de piscinas de Florida: separación de pickets, altura de cerrojo, portones de cierre automático.",
"Ornamental front yards": "Frentes ornamentales",
"Decorative spear-top and finial caps for residential front perimeters.": "Remates decorativos tipo lanza para perímetros frontales residenciales.",
"HVHZ perimeters": "Perímetros HVHZ",
"Welded commercial grade rated for 150 mph in HVHZ counties.": "Grado comercial soldado, clasificado para 150 mph en condados HVHZ.",
"Powder-coat · Pool-code + HVHZ": "Pintura en polvo · Código de piscinas + HVHZ",
"Powder-coated aluminum in 3, 4 and 5-rail. Pool-code compliant by default, rackable on grade. Residential, commercial and industrial grades stocked, sealed wind-load specs available for HVHZ submissions.": "Aluminio con pintura en polvo en 3, 4 y 5 rieles. Cumple código de piscinas por defecto, adaptable a pendientes. Grados residencial, comercial e industrial en stock; especificaciones selladas de viento disponibles para trámites HVHZ.",
"Pool enclosures, code-required perimeters, HVHZ residential": "Cerramientos de piscina, perímetros requeridos por código, residencial HVHZ",
"Pool code at volume": "Código de piscinas por volumen",
"FBC R 4501.17 profiles, paperwork-ready, no field surprises on AHJ check.": "Perfiles FBC R 4501.17, papeleo listo, sin sorpresas en la inspección AHJ.",
"HVHZ residential": "Residencial HVHZ",
"150 mph welded commercial spec, sealed wind load on request.": "Especificación comercial soldada de 150 mph, carga de viento sellada bajo pedido.",
"HOA ornamental": "Ornamental HOA",
"Black powder-coat repeat sections, pickup-ready for repeat jobs.": "Secciones repetidas en negro, listas para recoger en trabajos recurrentes.",
"Galvanized + Vinyl Coated": "Galvanizada + recubierta de vinilo",
"Chain link mesh.": "Malla ciclónica.",
"The workhorse perimeter.": "El perímetro de batalla.",
"Galvanized and PVC-coated mesh from 6 to 12 gauge. The default for security, sports, agricultural and commercial perimeters. Same-day pickup on stocked rolls + posts.": "Malla galvanizada y recubierta de PVC de calibre 6 a 12. La opción por defecto para perímetros de seguridad, deportivos, agrícolas y comerciales. Recogida el mismo día en rollos y postes en stock.",
"Security perimeters, sports fields, industrial sites": "Perímetros de seguridad, canchas deportivas, sitios industriales",
"Galvanized": "Galvanizada",
"Industrial": "Industrial",
"Hot-dip galvanized, weather-spec": "Galvanizada en caliente, especificación de intemperie",
"Vinyl-Coated Black": "Recubierta de vinilo negro",
"Residential": "Residencial",
"PVC-coated mesh disappears into landscaping": "La malla recubierta de PVC se pierde en el paisajismo",
"Vinyl-Coated Green": "Recubierta de vinilo verde",
"Parks/sports": "Parques/deportes",
"Court-side and athletic perimeters": "Perímetros de canchas y deportivos",
"Heavy-gauge industrial": "Industrial de calibre pesado",
"Security": "Seguridad",
"9 ga + 11.5 ga for high-cycle perimeters": "Calibre 9 y 11.5 para perímetros de alto ciclo",
"4 ft to 12 ft": "De 4 a 12 pies",
"Galvanized, PVC-coated (Black, Green, Brown)": "Galvanizada, recubierta de PVC (negro, verde, café)",
"ASTM A392 mesh, schedule 40 posts": "Malla ASTM A392, postes cédula 40",
"Up to 150 mph (open mesh)": "Hasta 150 mph (malla abierta)",
"Same day stocked rolls + posts": "Mismo día en rollos y postes en stock",
"Security perimeter": "Perímetro de seguridad",
"9 ga galvanized, 8 ft + barbed extension, with cantilever gates.": "Galvanizada calibre 9, 8 pies + extensión de púas, con portones cantilever.",
"Sports & rec": "Deportes y recreación",
"10 ft and 12 ft mesh for tennis, baseball, soccer fields.": "Malla de 10 y 12 pies para tenis, béisbol y fútbol.",
"Self-storage / industrial": "Self-storage / industrial",
"Phased deliveries against release schedules.": "Entregas por fases según calendario de liberación.",
"Galv + PVC-coated · Same-day will-call": "Galv + PVC · Recogida el mismo día",
"Galvanized and PVC-coated mesh from 6 to 12 gauge, same-day pickup on stocked rolls and posts. Phased commercial dispatch for industrial perimeters, trade accounts available.": "Malla galvanizada y recubierta de PVC de calibre 6 a 12, recogida el mismo día en rollos y postes en stock. Despacho comercial por fases para perímetros industriales, cuentas comerciales disponibles.",
"Industrial perimeters, security fencing, sports fields": "Perímetros industriales, cercas de seguridad, canchas deportivas",
"Industrial perimeters": "Perímetros industriales",
"Mile+ runs of 9-ga galv with phased delivery against release schedule.": "Corridas de más de una milla en galv calibre 9 con entrega por fases.",
"Sports + recreation": "Deportes y recreación",
"10 ft and 12 ft mesh stocked for tennis, baseball, soccer fields.": "Malla de 10 y 12 pies en stock para tenis, béisbol y fútbol.",
"Same-day will-call": "Recogida el mismo día",
"Order before 2pm, pickup ready by 4pm at FM or PC yard.": "Ordena antes de las 2pm y recoge a las 4pm en FM o PC.",
"Aluminum board privacy": "Privacidad de tabla de aluminio",
"DuraFence aluminum board.": "Tabla de aluminio DuraFence.",
"The look of board, the strength of metal.": "El look de tabla, la fuerza del metal.",
"Horizontal aluminum board privacy, solid 6-8 ft privacy with the strength of aluminum and the silhouette of solid board. Hurricane-rated, no warping, no painting, no replacement boards.": "Privacidad horizontal de tabla de aluminio: privacidad sólida de 6-8 pies con la fuerza del aluminio y la silueta de tabla sólida. Resistente a huracanes, sin deformarse, sin pintar, sin reemplazar tablas.",
"Modern privacy in HVHZ counties": "Privacidad moderna en condados HVHZ",
"Standard board": "Tabla estándar",
"6 ft": "6 pies",
"Horizontal aluminum board, flush mount": "Tabla horizontal de aluminio, montaje a ras",
"Tall board": "Tabla alta",
"8 ft": "8 pies",
"For commercial / luxury residential": "Para comercial / residencial de lujo",
"Slatted privacy": "Privacidad con listones",
"Slight gap between boards for airflow": "Pequeño espacio entre tablas para ventilación",
"Modern gate": "Portón moderno",
"Matching": "A juego",
"Welded matching ready-to-assemble gates": "Portones a juego soldados, listos para ensamblar",
"6 ft, 8 ft": "6 y 8 pies",
"Black, Bronze, White": "Negro, bronce, blanco",
"Extruded aluminum board + posts": "Tabla y postes de aluminio extruido",
"150 mph HVHZ-rated": "Clasificado HVHZ 150 mph",
"10-year finish": "Acabado de 10 años",
"1-2 weeks (color-matched)": "1-2 semanas (color a juego)",
"Hurricane-zone privacy": "Privacidad en zona de huracanes",
"HVHZ-rated to 150 mph, keeps full privacy through a Cat 4.": "Clasificada HVHZ a 150 mph, mantiene privacidad total tras un Cat 4.",
"Modern residential": "Residencial moderno",
"Horizontal board lines + matte powder-coat for contemporary designs.": "Líneas horizontales y pintura en polvo mate para diseños contemporáneos.",
"Commercial screens": "Pantallas comerciales",
"Dumpster enclosures, AC screens, utility-yard perimeters.": "Cerramientos de contenedores, pantallas de A/C, perímetros de patios de servicio.",
"Aluminum board · HVHZ + custom color": "Tabla de aluminio · HVHZ + color a medida",
"Aluminum board privacy in 6 and 8 ft, HVHZ-rated to 150 mph. Commercial and residential builds, phased delivery against release schedules, custom powder-coat color match on volume orders.": "Privacidad de tabla de aluminio en 6 y 8 pies, clasificada HVHZ a 150 mph. Obras comerciales y residenciales, entrega por fases según calendario, igualación de color a medida en órdenes por volumen.",
"HVHZ residential, commercial screens, modern privacy builds": "Residencial HVHZ, pantallas comerciales, privacidad moderna",
"150 mph rated, full privacy through a Cat 4 hurricane.": "Clasificada a 150 mph, privacidad total tras un huracán Cat 4.",
"AC enclosures, dumpster screens, utility-yard perimeters.": "Cerramientos de A/C, pantallas de contenedores, perímetros de servicio.",
"Color-match runs": "Corridas con color a juego",
"Powder-coat custom color on commercial volume orders.": "Color a medida en pintura en polvo para órdenes comerciales por volumen.",
"Self-mating galvanized steel": "Acero galvanizado autoensamblable",
"EC Fence.": "EC Fence.",
"Self-mating galvanized steel panels.": "Paneles de acero galvanizado autoensamblables.",
"Our newest system, self-mating galvanized steel panels installed every 12 ft. 6 ft tall, available in bronze and white, engineered for Exposure C wind loads. Engineered for the Florida coast.": "Nuestro sistema más nuevo: paneles de acero galvanizado autoensamblables instalados cada 12 pies. De 6 pies de alto, en bronce y blanco, con ingeniería para cargas de viento Exposición C. Diseñado para la costa de Florida.",
"Coastal HVHZ perimeters, commercial sites, modern residential": "Perímetros costeros HVHZ, sitios comerciales, residencial moderno",
"Bronze 6 ft": "Bronce 6 pies",
"Standard": "Estándar",
"Bronze powder over hot-dip galv": "Polvo bronce sobre galvanizado en caliente",
"White 6 ft": "Blanco 6 pies",
"White finish, same panel system": "Acabado blanco, mismo sistema de panel",
"Matching gate": "Portón a juego",
"Single / double swing": "Batiente sencillo / doble",
"Same panel face, ready-to-assemble": "Misma cara de panel, listo para ensamblar",
"Sloped runs": "Tramos en pendiente",
"Grade follow": "Sigue la pendiente",
"Stair-stepped or racked panels": "Paneles escalonados o inclinados",
"6 ft (custom 5-8 ft available)": "6 pies (a medida de 5-8 pies)",
"Every 12 ft": "Cada 12 pies",
"Bronze, White": "Bronce, blanco",
"Exposure C (HVHZ engineered)": "Exposición C (ingeniería HVHZ)",
"15-year finish": "Acabado de 15 años",
"2-3 weeks": "2-3 semanas",
"Coastal perimeter": "Perímetro costero",
"Hot-dip galv core stands up to salt air in beachfront sites.": "Núcleo galvanizado en caliente que resiste el aire salino frente al mar.",
"Commercial property": "Propiedad comercial",
"Clean modern face for office parks, marinas, gated communities.": "Cara moderna y limpia para parques de oficinas, marinas y comunidades cerradas.",
"Architectural alternative to vinyl or board privacy.": "Alternativa arquitectónica a la privacidad de vinilo o tabla.",
"Self-mating steel · Sealed Exposure C": "Acero autoensamblable · Exposición C sellada",
"Self-mating galvanized steel panels engineered for Exposure C wind loads. Modern panel face for coastal commercial and HVHZ residential builds. Sealed manufacturer specs available for AHJ submission.": "Paneles de acero galvanizado autoensamblables con ingeniería para cargas Exposición C. Cara de panel moderna para obras comerciales costeras y residenciales HVHZ. Especificaciones selladas del fabricante disponibles para trámite AHJ.",
"Coastal commercial, modern residential, HVHZ contracts": "Comercial costero, residencial moderno, contratos HVHZ",
"Coastal commercial": "Comercial costero",
"Hot-dip galv core stands up to salt air, marina + coastal yards.": "Núcleo galvanizado que resiste el aire salino, marinas y patios costeros.",
"HVHZ contracts": "Contratos HVHZ",
"Engineered Exposure C, sealed AHJ-ready specs on request.": "Ingeniería Exposición C, especificaciones selladas listas para AHJ bajo pedido.",
"Modern panel face": "Cara de panel moderna",
"Clean architectural alternative to vinyl board for modern builds.": "Alternativa arquitectónica limpia a la tabla de vinilo para obras modernas.",
"Single Swing": "Batiente sencillo",
"Double Swing": "Batiente doble",
"Sliding Gates": "Portones corredizos",
"Cantilever": "Cantilever",
"Rolling Gate": "Portón rodante",
"Walk gates · Pedestrian access": "Portones peatonales · Acceso de personas",
"Single-swing gates.": "Portones batientes sencillos.",
"Walk-through and pedestrian openings.": "Aberturas peatonales y de paso.",
"Standard pedestrian and entry gates from 3 to 6 ft wide. Mechanically assembled or welded, with hardware to match every fence material we stock, every kit ships with a self-latching gravity latch and padlockable hasp.": "Portones peatonales y de entrada estándar de 3 a 6 pies de ancho. Ensamblados mecánicamente o soldados, con herrajes a juego con cada material que tenemos; cada kit incluye cerrojo de gravedad de cierre automático y portacandado.",
"Walk gates, residential side-yards, pool enclosures": "Portones peatonales, patios laterales residenciales, cerramientos de piscina",
"Standard Walk": "Peatonal estándar",
"3-4 ft wide mechanical kit, gravity latch + padlock hasp included.": "Kit mecánico de 3-4 pies de ancho, cerrojo de gravedad y portacandado incluidos.",
"Estate Pedestrian": "Peatonal estate",
"Ornamental": "Ornamental",
"4-6 ft welded heavy frame with decorative top option.": "Marco pesado soldado de 4-6 pies con opción de remate decorativo.",
"Pool-Code Gate": "Portón código de piscina",
"Code Compliant": "Según código",
"Self-closing, self-latching, picket spacing ≤ 1.75\".": "Cierre y cerrojo automáticos, separación de pickets ≤ 1.75\".",
"Industrial Walk": "Peatonal industrial",
"Galv steel frame, heavy hinges, key-coded lockable handle.": "Marco de acero galvanizado, bisagras pesadas, manija con cerradura.",
"3 ft, 4 ft, 5 ft, 6 ft (custom on request)": "3, 4, 5 y 6 pies (a medida bajo pedido)",
"4 ft, 5 ft, 6 ft (matches fence height)": "4, 5 y 6 pies (según altura de la cerca)",
"Chain link, aluminum, vinyl, EC Fence, to match run": "Malla, aluminio, vinilo, EC Fence, a juego con la corrida",
"Self-latching gravity latch + padlock hasp included": "Cerrojo de gravedad de cierre automático + portacandado incluido",
"Pre-engineered for LiftMaster actuator add-on": "Preparado para actuador LiftMaster opcional",
"24h or less on stocked kits · 3-5 days fabricated": "24h o menos en kits en stock · 3-5 días fabricado",
"Pedestrian access": "Acceso peatonal",
"Side-yard, gardens and walk-through openings where a driveway gate is too much.": "Patios laterales, jardines y pasos donde un portón vehicular es demasiado.",
"Pool code enclosure": "Cerramiento según código de piscina",
"Self-closing, self-latching profiles meet Florida pool code requirements.": "Perfiles con cierre y cerrojo automáticos que cumplen el código de piscinas de Florida.",
"Tight spaces": "Espacios reducidos",
"Single panel works where double-swing arc clearance is unavailable.": "Un solo panel funciona donde no hay espacio para el arco de un batiente doble.",
"Walk gates · Trade-account pickup": "Peatonales · Recogida con cuenta comercial",
"Ready-to-assemble kits or in-house welded custom from 3 to 6 ft. Hardware kits packed and labeled per opening. Trade accounts after the second order, pull up to the bay, walk out fast.": "Kits listos para ensamblar o soldados a medida en planta de 3 a 6 pies. Kits de herrajes empacados y etiquetados por abertura. Cuentas comerciales tras la segunda orden; llega a la bahía y sal rápido.",
"Volume residential, code-compliant pool runs, will-call pickup": "Residencial por volumen, corridas de piscina según código, recogida will-call",
"Trade volume": "Volumen comercial",
"Stocked widths for repeat residential jobs. Ready-to-assemble kits cut field install time.": "Anchos en stock para trabajos residenciales recurrentes. Los kits listos para ensamblar reducen el tiempo de instalación.",
"Code-compliant builds": "Obras según código",
"Pool-code profiles meet FBC R 4501.17, paperwork ready for AHJ.": "Perfiles de código de piscina según FBC R 4501.17, papeleo listo para AHJ.",
"Will-call staging": "Preparación will-call",
"Order before 2pm, pickup ready by 4pm. Hardware packed per opening.": "Ordena antes de las 2pm, listo a las 4pm. Herrajes empacados por abertura.",
"Driveway access · Symmetrical": "Acceso vehicular · Simétrico",
"Double-swing gates.": "Portones batientes dobles.",
"Driveway openings, single-day install.": "Aberturas vehiculares, instalación en un día.",
"Symmetrical driveway-width gates from 8 to 16 ft total opening. Ready-to-assemble with drop rod, gate latch and stainless hardware kit packed per opening, single-day install for most layouts.": "Portones simétricos de 8 a 16 pies de abertura total. Listos para ensamblar con varilla de fijación, cerrojo y kit de herrajes inoxidables empacado por abertura; instalación en un día en la mayoría de los casos.",
"Residential driveways, estate entries, vehicle access": "Entradas vehiculares residenciales, entradas estate, acceso de vehículos",
"Standard Drive": "Vehicular estándar",
"8-12 ft total, mechanically assembled, drop rod + center latch.": "8-12 pies en total, ensamblado mecánico, varilla y cerrojo central.",
"Estate Pair": "Par estate",
"Luxury": "Lujo",
"10-16 ft welded heavy, decorative scrollwork or arched top.": "10-16 pies soldado pesado, volutas decorativas o remate arqueado.",
"Privacy Drive": "Vehicular de privacidad",
"Solid": "Sólido",
"Full vinyl or DuraFence panels, matched to privacy run.": "Paneles completos de vinilo o DuraFence, a juego con la corrida de privacidad.",
"Commercial Drive": "Vehicular comercial",
"Heavy-Duty": "Uso pesado",
"Up to 16 ft welded steel, sized for higher cycle counts.": "Hasta 16 pies en acero soldado, dimensionado para más ciclos.",
"8 ft, 10 ft, 12 ft, 14 ft, 16 ft total opening": "8, 10, 12, 14 y 16 pies de abertura total",
"4 ft, 5 ft, 6 ft, 8 ft (matches fence height)": "4, 5, 6 y 8 pies (según altura de la cerca)",
"Chain link, aluminum, vinyl, EC Fence, DuraFence": "Malla, aluminio, vinilo, EC Fence, DuraFence",
"Hinge sets, drop rod, center latch, stainless fasteners": "Juegos de bisagras, varilla, cerrojo central, tornillería inoxidable",
"Dual-leaf LiftMaster kit with photo-eye + keypad add-on": "Kit LiftMaster de doble hoja con fotocelda + teclado opcional",
"Wide driveways": "Entradas anchas",
"Two leaves meeting in the middle clear 8-16 ft openings cleanly.": "Dos hojas que se encuentran al centro cubren aberturas de 8-16 pies.",
"Estate entries": "Entradas estate",
"Symmetrical look reads as a formal main entry, more presence than single.": "El look simétrico se lee como entrada principal formal, más presencia que el sencillo.",
"Vehicle + pedestrian": "Vehicular + peatonal",
"Open one leaf for walk-in, both for vehicle access.": "Abre una hoja para paso peatonal, ambas para vehículos.",
"Driveway gates · Ready-to-assemble kits": "Vehiculares · Kits listos para ensamblar",
"Ready-to-assemble driveway gates from 8 to 16 ft, welded in Fort Myers, drop rod + hardware kit packed per opening. Trade accounts get a dedicated rep + job-site dispatch.": "Portones vehiculares listos para ensamblar de 8 a 16 pies, soldados en Fort Myers, varilla y kit de herrajes empacados por abertura. Las cuentas comerciales tienen representante dedicado y despacho a obra.",
"Volume residential drives, custom welded estate runs, trade kits": "Vehicular residencial por volumen, corridas estate soldadas a medida, kits comerciales",
"Volume residential": "Residencial por volumen",
"Same-day pickup on stocked 10/12/14 ft openings, cuts site time.": "Recogida el mismo día en aberturas de 10/12/14 pies en stock, menos tiempo en obra.",
"Custom welded fab": "Fabricación soldada a medida",
"Estate runs and non-stock widths welded in-house in 5-7 days.": "Corridas estate y anchos fuera de stock soldados en planta.",
"Trade dispatch": "Despacho comercial",
"Job-site delivery across Lee, Collier, Charlotte and Hendry.": "Entrega a obra en Lee, Collier, Charlotte y Hendry.",
"Track-mounted · Space-saving": "Sobre riel · Ahorra espacio",
"Sliding gates.": "Portones corredizos.",
"For tight or graded openings.": "Para aberturas estrechas o con pendiente.",
"Track-mounted sliding gates for tight or graded driveways where a swing arc won't work. Manual or automated with operator and safety package, slides parallel to the fence.": "Portones corredizos sobre riel para entradas estrechas o con pendiente donde un arco batiente no funciona. Manual o automatizado con operador y paquete de seguridad; se desliza paralelo a la cerca.",
"Tight residential driveways, sloped sites, repeat daily use": "Entradas residenciales estrechas, sitios con pendiente, uso diario recurrente",
"Galvanized Mesh": "Malla galvanizada",
"V-track mounted chain-link mesh with twin rollers.": "Malla ciclónica sobre riel en V con rodillos dobles.",
"PVC-coated mesh disappears against landscaping.": "La malla recubierta de PVC se pierde contra el paisajismo.",
"Privacy Slide": "Corredizo de privacidad",
"Full vinyl or DuraFence panel on V-track.": "Panel completo de vinilo o DuraFence sobre riel en V.",
"Automated Kit": "Kit automatizado",
"Powered": "Motorizado",
"LiftMaster slide operator + photo-eye + keypad bundle.": "Operador corredizo LiftMaster + fotocelda + teclado.",
"8 ft, 10 ft, 12 ft, 14 ft, 16 ft, 18 ft openings": "Aberturas de 8, 10, 12, 14, 16 y 18 pies",
"Galv chain link, vinyl-coated, EC Fence, DuraFence": "Malla galvanizada, recubierta de vinilo, EC Fence, DuraFence",
"Galvanized V-track or pipe-track + end stops included": "Riel en V galvanizado o de tubo + topes incluidos",
"130 mph closed · 150 mph HVHZ on heavy commercial spec": "130 mph cerrado · 150 mph HVHZ en especificación comercial pesada",
"24h or less on stocked kits · 2-3 weeks custom": "24h o menos en kits en stock · 2-3 semanas a medida",
"Limited swing clearance": "Sin espacio para abatir",
"Slides parallel to the fence, no arc to block walkways or planters.": "Se desliza paralelo a la cerca, sin arco que bloquee andadores o jardineras.",
"Sloped driveways": "Entradas con pendiente",
"Ground track handles up to 3% grade without binding.": "El riel de piso maneja hasta 3% de pendiente sin atascarse.",
"Repeat daily use": "Uso diario recurrente",
"Manual operation is two-finger easy; automation kits available.": "Operación manual con dos dedos; kits de automatización disponibles.",
"Track-mounted · Trade-account fab": "Sobre riel · Fabricación con cuenta comercial",
"V-track and pipe-track slide gates fabricated for tight residential drives and sloped lots. Trade accounts, dedicated rep, will-call staging, kit ships with track, rollers and end stops.": "Portones corredizos de riel en V y de tubo fabricados para entradas residenciales estrechas y lotes con pendiente. Cuentas comerciales, representante dedicado, preparación will-call; el kit incluye riel, rodillos y topes.",
"Tight residential lots, sloped driveway jobs, repeat HOA work": "Lotes residenciales estrechos, trabajos con pendiente, HOA recurrente",
"HOA + subdivision": "HOA + urbanización",
"Repeat 12-14 ft openings with uniform finish across the run.": "Aberturas recurrentes de 12-14 pies con acabado uniforme.",
"Grade-change sites": "Sitios con cambio de pendiente",
"V-track handles up to 3% grade without high-low binding.": "El riel en V maneja hasta 3% de pendiente sin atascos.",
"Pull to bay, walk out with the gate + track + rollers staged.": "Llega a la bahía y sal con portón, riel y rodillos preparados.",
"No ground track · Up to 50 ft": "Sin riel en piso · Hasta 50 pies",
"Cantilever gates.": "Portones cantilever.",
"Counter-balanced, no ground track.": "Contrapesados, sin riel en piso.",
"Counter-balanced rolling gates with no ground track, ideal for sites with sand, debris or grade change. Internal V-rollers and an overhang section that floats clear of the driveway. Single openings up to 50 ft.": "Portones rodantes contrapesados sin riel en piso, ideales para sitios con arena, escombros o cambios de pendiente. Rodillos en V internos y una sección en voladizo que flota sobre la entrada. Aberturas sencillas de hasta 50 pies.",
"Industrial yards, coastal sites, long openings": "Patios industriales, sitios costeros, aberturas largas",
"Galvanized Frame": "Marco galvanizado",
"Hot-dip galv welded frame with V-rollers, mesh or vinyl-coated.": "Marco soldado galvanizado en caliente con rodillos en V, malla o recubierta de vinilo.",
"Coastal": "Costero",
"Salt-spray-rated rollers, black PVC-coated mesh face.": "Rodillos aptos para salinidad, cara de malla negra recubierta de PVC.",
"Solid Privacy": "Privacidad sólida",
"DuraFence aluminum board face on welded cantilever frame.": "Cara de tabla de aluminio DuraFence sobre marco cantilever soldado.",
"Long-Span Custom": "Claro largo a medida",
"Bespoke": "A medida",
"Up to 50 ft single opening or telescoping for wider runs.": "Hasta 50 pies de abertura sencilla o telescópico para tramos más anchos.",
"14 ft to 50 ft single openings (wider on telescoping)": "Aberturas sencillas de 14 a 50 pies (más anchas en telescópico)",
"6 ft, 8 ft, 10 ft, 12 ft (industrial)": "6, 8, 10 y 12 pies (industrial)",
"Galv chain link, vinyl-coated, DuraFence, EC Fence": "Malla galvanizada, recubierta de vinilo, DuraFence, EC Fence",
"50% of opening on receiving side (30 ft → 15 ft)": "50% de la abertura del lado receptor (30 pies → 15 pies)",
"Up to 150 mph HVHZ on mesh or vinyl-coated specs": "Hasta 150 mph HVHZ en malla o recubierta de vinilo",
"3-4 weeks fabricated in Fort Myers": "3-4 semanas, fabricado en Fort Myers",
"No ground track": "Sin riel en piso",
"Nothing in the driveway path, no debris jam, no track to clear.": "Nada en el paso vehicular: sin atascos por escombros ni riel que limpiar.",
"Sandy / coastal sites": "Sitios arenosos / costeros",
"Salt-spray-rated rollers replace exposed ground track.": "Rodillos aptos para salinidad reemplazan el riel expuesto.",
"Long openings": "Aberturas largas",
"Up to 50 ft single openings, typical for industrial yards.": "Aberturas sencillas de hasta 50 pies, típicas de patios industriales.",
"Industrial · Phased delivery": "Industrial · Entrega por fases",
"Counter-balanced cantilever frames welded in Fort Myers, up to 50 ft single openings. Phased deliveries against your release schedule, sealed manufacturer specs available for AHJ submission.": "Marcos cantilever contrapesados soldados en Fort Myers, aberturas sencillas de hasta 50 pies. Entregas por fases según tu calendario, especificaciones selladas del fabricante para trámite AHJ.",
"Industrial perimeters, commercial yards, HVHZ contracts": "Perímetros industriales, patios comerciales, contratos HVHZ",
"1.4+ mile runs phased against tight release windows.": "Corridas de 1.4+ millas por fases con ventanas de liberación ajustadas.",
"Sealed wind-load specs for 150 mph zones, AHJ-ready.": "Especificaciones selladas de viento para zonas de 150 mph, listas para AHJ.",
"Custom span fab": "Fabricación de claros a medida",
"Telescoping or follower-gate config for spans wider than 50 ft.": "Configuración telescópica o con portón seguidor para claros mayores a 50 pies.",
"Industrial V-track · High-cycle": "Riel en V industrial · Alto ciclo",
"Rolling gates.": "Portones rodantes.",
"Industrial V-track and rollers.": "Riel en V y rodillos industriales.",
"Industrial rolling gates with V-track and ground rollers, built for high-cycle commercial use, secured perimeters and yards. Heavy galvanized frame with stainless-steel hardware, rated for hundreds of cycles a day.": "Portones rodantes industriales con riel en V y rodillos de piso, hechos para uso comercial de alto ciclo, perímetros asegurados y patios. Marco galvanizado pesado con herrajes inoxidables, clasificado para cientos de ciclos al día.",
"Commercial perimeters, industrial yards, self-storage": "Perímetros comerciales, patios industriales, self-storage",
"V-Track Standard": "Riel en V estándar",
"Heavy galvanized frame on V-track with stainless rollers.": "Marco galvanizado pesado sobre riel en V con rodillos inoxidables.",
"High-Cycle Heavy": "Alto ciclo pesado",
"Continuous-Duty": "Uso continuo",
"Bearings and frame spec'd for continuous-duty cycles.": "Rodamientos y marco especificados para ciclos de uso continuo.",
"Vinyl-Coated Visual": "Recubierto visual",
"Visual": "Visual",
"PVC-coated black mesh, softer look for visual perimeters.": "Malla negra recubierta de PVC, look más suave para perímetros visibles.",
"LiftMaster Elite slide operator with loop-detect + safety edges.": "Operador LiftMaster Elite con detección de lazo + bordes de seguridad.",
"16 ft, 20 ft, 24 ft, 30 ft openings (custom on request)": "Aberturas de 16, 20, 24 y 30 pies (a medida bajo pedido)",
"Galv chain link mesh on welded heavy steel frame": "Malla galvanizada sobre marco pesado de acero soldado",
"V-track kit + end stops + follower rollers + tensioner": "Kit de riel en V + topes + rodillos seguidores + tensor",
"400 cycles/day standard · continuous-duty heavy frame": "400 ciclos/día estándar · marco pesado de uso continuo",
"3-4 weeks fabricated · stocked widths 1-2 weeks": "3-4 semanas fabricado · anchos en stock 1-2 semanas",
"Commercial perimeters": "Perímetros comerciales",
"Industrial yards, self-storage, transit hubs.": "Patios industriales, self-storage, centros de tránsito.",
"High-cycle use": "Uso de alto ciclo",
"Hundreds of cycles per day, bearings and frame spec'd for it.": "Cientos de ciclos al día; rodamientos y marco especificados para ello.",
"Heavy vehicle access": "Acceso de vehículos pesados",
"Wide spans for tractor-trailer and box-truck access.": "Claros anchos para tráileres y camiones.",
"Continuous-duty · RFQ welcome": "Uso continuo · RFQ bienvenidos",
"Heavy industrial rolling gates welded to spec, continuous-duty bearings, V-track and stainless hardware. Phased delivery, RFQ process, dedicated commercial rep.": "Portones rodantes industriales pesados soldados a especificación, rodamientos de uso continuo, riel en V y herrajes inoxidables. Entrega por fases, proceso RFQ, representante comercial dedicado.",
"Self-storage, transit hubs, industrial yards, commercial perimeters": "Self-storage, centros de tránsito, patios industriales, perímetros comerciales",
"Self-storage rollouts": "Despliegues self-storage",
"Multi-opening releases with phased delivery and consistent finish.": "Liberaciones multi-abertura con entrega por fases y acabado consistente.",
"Continuous-duty fab": "Fabricación de uso continuo",
"Bearings and frame spec'd for high-cycle commercial operations.": "Rodamientos y marco para operaciones comerciales de alto ciclo.",
"Sealed wind ratings": "Clasificaciones de viento selladas",
"HVHZ-rated configurations with stamped specs for AHJ submission.": "Configuraciones HVHZ con especificaciones selladas para trámite AHJ."
};

const trDeep = (v, lang) => {
  if (lang !== 'ES') return v;
  if (typeof v === 'string') return ES_TR[v] ?? v;
  if (Array.isArray(v)) return v.map((x) => trDeep(x, lang));
  if (v && typeof v === 'object') {
    const o = {};
    for (const k in v) o[k] = trDeep(v[k], lang);
    return o;
  }
  return v;
};
const useTrData = (obj) => {
  const [lang] = useLang();
  return React.useMemo(() => trDeep(obj, lang), [obj, lang]);
};
window.ES_TR = ES_TR;
window.useTrData = useTrData;

/* Additional ES entries (aluminum hero rewrite) */
Object.assign(ES_TR, {
  'Powder-Coated Aluminum': 'Aluminio con pintura en polvo',
  'Fence Materials.': 'Materiales de cerca.',
  'Pool-code compliant aluminum fence materials for residential, commercial, and community projects. Available in multiple heights and styles, with gates, posts, rails, and hardware quoted as part of your material package.':
    'Materiales de cerca de aluminio que cumplen el código de piscinas, para proyectos residenciales, comerciales y comunitarios. Disponibles en múltiples alturas y estilos, con portones, postes, rieles y herrajes cotizados como parte de tu paquete de material.',
});
