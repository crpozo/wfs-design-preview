const Logo = ({ light = false }) => /* @__PURE__ */ React.createElement("a", { href: "Homepage.html", style: { display: "inline-flex", alignItems: "center", height: 36 } }, /* @__PURE__ */ React.createElement(
  "img",
  {
    src: "https://crpozo.github.io/wfs-design-preview/assets/wfs-logo.svg",
    alt: "Western Fence Supply",
    style: {
      height: 36,
      width: "auto",
      filter: light ? "brightness(0) invert(1)" : "none"
    }
  }
));
const FENCE_IMG = {
  // Real product photos uploaded to assets/
  aluminum: "https://crpozo.github.io/wfs-design-preview/assets/ALUM.png",
  chainlink: "https://crpozo.github.io/wfs-design-preview/assets/CHAINLINK.png?v=204",
  metal: "https://crpozo.github.io/wfs-design-preview/assets/MET.png",
  vinyl: "https://crpozo.github.io/wfs-design-preview/assets/PVC.png",
  ecfence: "https://crpozo.github.io/wfs-design-preview/assets/ECFENCE.png",
  shop: "https://crpozo.github.io/wfs-design-preview/assets/wfs-shop.webp",
  // Gate systems
  "gate-single": "https://crpozo.github.io/wfs-design-preview/assets/SINGLE_SWING_GATE.png",
  "gate-double": "https://crpozo.github.io/wfs-design-preview/assets/DOUBLE_GATE.png",
  "gate-sliding": "https://crpozo.github.io/wfs-design-preview/assets/SLIDING_GATE.png?v=204",
  "gate-cantilever": "https://crpozo.github.io/wfs-design-preview/assets/CANTILEVER.png?v=204",
  "gate-rolling": "https://crpozo.github.io/wfs-design-preview/assets/ROLLING_GATE.png?v=204"
};
const FENCE_ICON = {
  aluminum: "https://westernfencesupply.com/wp-content/themes/westernfencesupply/img/global/aluminum-fence-icon.svg",
  chainlink: "https://westernfencesupply.com/wp-content/themes/westernfencesupply/img/global/chainlink-fence-icon.svg",
  metal: "https://westernfencesupply.com/wp-content/themes/westernfencesupply/img/global/metal-fence-icon.svg",
  vinyl: "https://westernfencesupply.com/wp-content/themes/westernfencesupply/img/global/vinyl-fence-icon.svg"
};
const ArrowRight = ({ size = 14 }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("path", { d: "M2 8 H13 M9 4 L13 8 L9 12", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "square", strokeLinejoin: "miter" }));
const ArrowDown = ({ size = 14 }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("path", { d: "M8 2 V13 M4 9 L8 13 L12 9", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "square" }));
const ImgSlot = ({ label, dark = false, height = 280, style = {}, children }) => /* @__PURE__ */ React.createElement(
  "div",
  {
    className: `img-placeholder ${dark ? "dark" : ""}`,
    style: { height, ...style }
  },
  children,
  /* @__PURE__ */ React.createElement("span", { className: "label" }, label)
);
const ChainLinkSVG = ({ color = "#2e59c1", opacity = 0.45 }) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 200 200", preserveAspectRatio: "xMidYMid slice", style: { width: "100%", height: "100%" } }, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("pattern", { id: "chainP", width: "40", height: "40", patternUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement(
  "path",
  {
    d: "M0 20 L10 10 L20 20 L10 30 Z M20 20 L30 10 L40 20 L30 30 Z M0 0 L10 10 M20 0 L30 10 M40 0 L30 10 M0 40 L10 30 M20 40 L30 30 M40 40 L30 30",
    stroke: color,
    strokeWidth: "1.6",
    fill: "none",
    opacity
  }
))), /* @__PURE__ */ React.createElement("rect", { width: "200", height: "200", fill: "url(#chainP)" }));
const AluminumSVG = ({ color = "#263166", opacity = 0.7 }) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 200 200", preserveAspectRatio: "xMidYMid slice", style: { width: "100%", height: "100%" } }, Array.from({ length: 12 }).map((_, i) => /* @__PURE__ */ React.createElement("rect", { key: i, x: i * 17 + 4, y: "20", width: "6", height: "160", rx: "2", fill: color, opacity })), /* @__PURE__ */ React.createElement("rect", { x: "0", y: "40", width: "200", height: "3", fill: color, opacity }), /* @__PURE__ */ React.createElement("rect", { x: "0", y: "160", width: "200", height: "3", fill: color, opacity }));
const VinylSVG = ({ color = "#263166", opacity = 0.6 }) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 200 200", preserveAspectRatio: "xMidYMid slice", style: { width: "100%", height: "100%" } }, Array.from({ length: 8 }).map((_, i) => /* @__PURE__ */ React.createElement("rect", { key: i, x: i * 25 + 6, y: "20", width: "14", height: "160", rx: "2", fill: color, opacity })), /* @__PURE__ */ React.createElement("rect", { x: "0", y: "48", width: "200", height: "4", fill: color, opacity }), /* @__PURE__ */ React.createElement("rect", { x: "0", y: "148", width: "200", height: "4", fill: color, opacity }));
const MetalSVG = ({ color = "#263166", opacity = 0.7 }) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 200 200", preserveAspectRatio: "xMidYMid slice", style: { width: "100%", height: "100%" } }, Array.from({ length: 9 }).map((_, i) => /* @__PURE__ */ React.createElement("g", { key: i }, /* @__PURE__ */ React.createElement("rect", { x: i * 22 + 6, y: "40", width: "4", height: "140", fill: color, opacity }), /* @__PURE__ */ React.createElement("path", { d: `M${i * 22 + 8} 30 L${i * 22 + 4} 40 L${i * 22 + 12} 40 Z`, fill: color, opacity }))), /* @__PURE__ */ React.createElement("rect", { x: "0", y: "60", width: "200", height: "3", fill: color, opacity }), /* @__PURE__ */ React.createElement("rect", { x: "0", y: "170", width: "200", height: "3", fill: color, opacity }));
const DiamondGrid = ({ color = "#ff7133", opacity = 0.4 }) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 200 200", preserveAspectRatio: "xMidYMid slice", style: { width: "100%", height: "100%" } }, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("pattern", { id: "dP", width: "28", height: "28", patternUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("path", { d: "M14 0 L28 14 L14 28 L0 14 Z", stroke: color, strokeWidth: "1", fill: "none", opacity }))), /* @__PURE__ */ React.createElement("rect", { width: "200", height: "200", fill: "url(#dP)" }));
const PillCTA = ({ href, children, variant = "ink", target, rel }) => {
  const [hover, setHover] = React.useState(false);
  const light = variant === "light";
  const baseBg = light ? "var(--white)" : "var(--ink)";
  const baseFg = light ? "var(--ink)" : "var(--white)";
  const dotBg = light ? "var(--ink)" : "var(--white)";
  const dotFg = light ? "var(--white)" : "var(--ink)";
  return /* @__PURE__ */ React.createElement(
    "a",
    {
      href,
      target,
      rel,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 16,
        padding: "14px 14px 14px 26px",
        borderRadius: 999,
        background: hover ? "var(--tangerine)" : baseBg,
        color: hover ? "var(--white)" : baseFg,
        textDecoration: "none",
        whiteSpace: "nowrap",
        fontFamily: "var(--sans)",
        fontSize: 14.5,
        fontWeight: 700,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        transition: "background 0.2s, color 0.2s, transform 0.2s, box-shadow 0.2s",
        transform: hover ? "translateY(-2px)" : "none",
        boxShadow: hover ? "0 22px 44px -18px rgba(255, 113, 51, 0.55)" : "0 18px 36px -18px rgba(38, 49, 102, 0.5)"
      }
    },
    children,
    /* @__PURE__ */ React.createElement("span", { style: {
      width: 30,
      height: 30,
      borderRadius: "50%",
      flexShrink: 0,
      background: hover ? "var(--white)" : dotBg,
      color: hover ? "var(--tangerine)" : dotFg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background 0.2s, color 0.2s"
    } }, /* @__PURE__ */ React.createElement("svg", { width: "13", height: "13", viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M5 11L11 5M11 5H6M11 5V10", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" })))
  );
};
Object.assign(window, {
  Logo,
  ArrowRight,
  ArrowDown,
  ImgSlot,
  PillCTA,
  ChainLinkSVG,
  AluminumSVG,
  VinylSVG,
  MetalSVG,
  DiamondGrid,
  FENCE_IMG,
  FENCE_ICON
});
const __WFS_MODE_KEY = "wfs:mode";
const __WFS_MODE_EVENT = "wfs:mode-change";
const useMode = () => {
  const [mode, setModeState] = React.useState(() => {
    try {
      return localStorage.getItem(__WFS_MODE_KEY) || "HOMEOWNER";
    } catch (e) {
      return "HOMEOWNER";
    }
  });
  React.useEffect(() => {
    const onChange = (e) => setModeState(e.detail);
    window.addEventListener(__WFS_MODE_EVENT, onChange);
    return () => window.removeEventListener(__WFS_MODE_EVENT, onChange);
  }, []);
  const set = (m) => {
    try {
      localStorage.setItem(__WFS_MODE_KEY, m);
    } catch (e) {
    }
    window.dispatchEvent(new CustomEvent(__WFS_MODE_EVENT, { detail: m }));
  };
  return [mode, set];
};
window.useMode = useMode;
const __WFS_LANG_KEY = "wfs:lang";
const __WFS_LANG_EVENT = "wfs:lang-change";
const useLang = () => {
  const [lang, setLangState] = React.useState(() => {
    try {
      return localStorage.getItem(__WFS_LANG_KEY) || "EN";
    } catch (e) {
      return "EN";
    }
  });
  React.useEffect(() => {
    const onChange = (e) => setLangState(e.detail);
    window.addEventListener(__WFS_LANG_EVENT, onChange);
    return () => window.removeEventListener(__WFS_LANG_EVENT, onChange);
  }, []);
  const set = (l) => {
    try {
      localStorage.setItem(__WFS_LANG_KEY, l);
    } catch (e) {
    }
    window.dispatchEvent(new CustomEvent(__WFS_LANG_EVENT, { detail: l }));
  };
  return [lang, set];
};
const useT = () => {
  const [lang] = useLang();
  return (en, es) => {
    if (en && typeof en === "object" && !Array.isArray(en)) {
      return en[lang] ?? en.EN ?? "";
    }
    if (lang === "ES") return es ?? en;
    return en;
  };
};
window.useLang = useLang;
window.useT = useT;
const ES_TR = {
  "Best for": "Ideal para",
  "Starts at": "Desde",
  "Lead time": "Plazo de entrega",
  "Heights": "Alturas",
  "Colors": "Colores",
  "Wind rating": "Resistencia al viento",
  "Warranty": "Garant\xEDa",
  "Mesh gauges": "Calibres de malla",
  "Finishes": "Acabados",
  "Post spacing": "Separaci\xF3n de postes",
  "Widths": "Anchos",
  "Overhang": "Voladizo",
  "Track": "Riel",
  "Cycle rating": "Ciclos",
  "Automation": "Automatizaci\xF3n",
  "Hardware": "Herrajes",
  "Quote-based": "Seg\xFAn cotizaci\xF3n",
  "Vinyl / PVC": "Vinilo / PVC",
  "Aluminum": "Aluminio",
  "Chain Link": "Malla cicl\xF3nica",
  "Catalyst-extruded \xB7 Lifetime warranty": "Extruido Catalyst \xB7 Garant\xEDa de por vida",
  "Catalyst-extruded vinyl.": "Vinilo extruido Catalyst.",
  "Built for the Florida sun.": "Hecho para el sol de Florida.",
  "Privacy, semi-private, picket and ranch rail in white, tan and khaki. Won't rot, rust, peel or fade, engineered for Florida UV with a transferable lifetime warranty.": "Privacidad, semiprivada, picket y ranch rail en blanco, beige y caqui. No se pudre, no se oxida, no se pela ni se decolora; dise\xF1ado para el UV de Florida con garant\xEDa de por vida transferible.",
  "Backyard privacy, pool enclosures, residential subdivisions": "Privacidad de patio, cerramientos de piscina, urbanizaciones residenciales",
  "Privacy": "Privacidad",
  "Full board": "Tabla completa",
  "6 ft tongue-and-groove board, no gaps": "Tabla machihembrada de 6 pies, sin espacios",
  "Semi-Privacy": "Semiprivada",
  "With lattice": "Con celos\xEDa",
  '6 ft solid + 18" decorative lattice topper': '6 pies s\xF3lida + remate de celos\xEDa decorativa de 18"',
  "Picket": "Picket",
  "Classic": "Cl\xE1sico",
  '4 ft pointed picket, 3" spacing': 'Picket puntiagudo de 4 pies, separaci\xF3n de 3"',
  "Ranch Rail": "Ranch Rail",
  "3-rail": "3 rieles",
  "Crossbuck or 3-rail post-and-rail": "Crossbuck o poste y riel de 3 rieles",
  "White, Tan, Khaki": "Blanco, beige, caqui",
  "Catalyst-extruded virgin vinyl": "Vinilo virgen extruido Catalyst",
  "Up to 130 mph (system + posts)": "Hasta 130 mph (sistema + postes)",
  "Transferable lifetime": "De por vida transferible",
  "1-3 days stocked \xB7 3-4 weeks custom": "1-3 d\xEDas en stock \xB7 3-4 semanas a medida",
  "Backyard privacy": "Privacidad de patio",
  "The default for SW Florida homeowners, full 6 ft privacy without maintenance.": "La opci\xF3n est\xE1ndar en el suroeste de Florida: privacidad total de 6 pies sin mantenimiento.",
  "Pool enclosures": "Cerramientos de piscina",
  'Code-compliant profiles meet the 4 ft minimum with pickets \u2264 3" spaced.': 'Perfiles seg\xFAn c\xF3digo: m\xEDnimo de 4 pies con pickets separados \u2264 3".',
  "HOA boundaries": "L\xEDmites de HOA",
  "Uniform white/tan finish across subdivisions, stocked in volume.": "Acabado uniforme blanco/beige en urbanizaciones, en stock por volumen.",
  "Catalyst-extruded \xB7 Trade pickup": "Extruido Catalyst \xB7 Retiro comercial",
  "Catalyst-extruded vinyl in white, tan and khaki across privacy, semi-private, picket and ranch rail. All profiles stocked for same-day will-call. Trade accounts available after the second order.": "Vinilo extruido Catalyst en blanco, beige y caqui en privacidad, semiprivada, picket y ranch rail. Todos los perfiles en stock para retiro el mismo d\xEDa. Cuentas comerciales disponibles tras la segunda orden.",
  "HOA + subdivision rollouts, repeat residential privacy": "Despliegues de HOA y urbanizaciones, privacidad residencial recurrente",
  "HOA rollouts": "Despliegues HOA",
  "Uniform 6 ft privacy across 50+ lots, stocked in volume, packed by run.": "Privacidad uniforme de 6 pies en 50+ lotes, en stock por volumen, empacada por corrida.",
  "Repeat residential": "Residencial recurrente",
  "Pull, pick, install. Same-day pickup on most stock widths.": "Llega, retira, instala. Retiro el mismo d\xEDa en la mayor\xEDa de anchos en stock.",
  "Custom color runs": "Corridas de color a medida",
  "Khaki + tan run-outs from Catalyst for community-specific specs.": "Corridas caqui y beige de Catalyst para especificaciones de comunidades.",
  "Powder-coat \xB7 Pool code": "Pintura en polvo \xB7 C\xF3digo de piscinas",
  "Powder-coated aluminum.": "Aluminio con pintura en polvo.",
  "Pool-code by default.": "C\xF3digo de piscinas de forma predeterminada.",
  "Welded and mechanically assembled aluminum in 3-rail, 4-rail and 5-rail configurations. Pool-code compliant, rackable on grade, available in residential, commercial and industrial grades.": "Aluminio soldado y ensamblado mec\xE1nicamente en configuraciones de 3, 4 y 5 rieles. Cumple c\xF3digo de piscinas, adaptable a pendientes, disponible en grados residencial, comercial e industrial.",
  "Pool enclosures, ornamental perimeters, HOAs": "Cerramientos de piscina, per\xEDmetros ornamentales, HOAs",
  "3-Rail": "3 rieles",
  "4-Rail": "4 rieles",
  "5-Rail": "5 rieles",
  "Open picket, residential grade": "Picket abierto, grado residencial",
  "Pool code": "C\xF3digo de piscina",
  '\u2264 3" picket spacing, code-compliant': 'Separaci\xF3n de pickets \u2264 3", seg\xFAn c\xF3digo',
  "Privacy-leaning": "Tendiente a privacidad",
  "Tight picket pattern, more visual mass": "Patr\xF3n de pickets cerrado, mayor masa visual",
  "Commercial": "Comercial",
  "Heavy gauge": "Calibre pesado",
  "6063-T6 alloy, thicker pickets + rails": "Aleaci\xF3n 6063-T6, pickets y rieles m\xE1s gruesos",
  "4 ft, 5 ft, 6 ft (custom to 8 ft)": "4, 5 y 6 pies (a medida hasta 8 pies)",
  "Black, Bronze, White (powder-coat)": "Negro, bronce, blanco (pintura en polvo)",
  "6063-T6 alloy, fully welded or mechanical": "Aleaci\xF3n 6063-T6, totalmente soldado o mec\xE1nico",
  "Up to 150 mph HVHZ": "Hasta 150 mph HVHZ",
  "20-year finish": "Acabado de 20 a\xF1os",
  "1-3 days stocked \xB7 2-3 weeks custom color": "1-3 d\xEDas en stock \xB7 2-3 semanas color a medida",
  "4 ft profiles meet Florida pool code, picket spacing, latch height, self-closing gates.": "Perfiles de 4 pies cumplen el c\xF3digo de piscinas de Florida: separaci\xF3n de pickets, altura de cerrojo, portones de cierre autom\xE1tico.",
  "Ornamental front yards": "Frentes ornamentales",
  "Decorative spear-top and finial caps for residential front perimeters.": "Remates decorativos tipo lanza para per\xEDmetros frontales residenciales.",
  "HVHZ perimeters": "Per\xEDmetros HVHZ",
  "Welded commercial grade rated for 150 mph in HVHZ counties.": "Grado comercial soldado, clasificado para 150 mph en condados HVHZ.",
  "Powder-coat \xB7 Pool-code + HVHZ": "Pintura en polvo \xB7 C\xF3digo de piscinas + HVHZ",
  "Powder-coated aluminum in 3, 4 and 5-rail. Pool-code compliant by default, rackable on grade. Residential, commercial and industrial grades stocked, sealed wind-load specs available for HVHZ submissions.": "Aluminio con pintura en polvo en 3, 4 y 5 rieles. Cumple c\xF3digo de piscinas de forma predeterminada, adaptable a pendientes. Grados residencial, comercial e industrial en stock; especificaciones selladas de viento disponibles para tr\xE1mites HVHZ.",
  "Pool enclosures, code-required perimeters, HVHZ residential": "Cerramientos de piscina, per\xEDmetros requeridos por c\xF3digo, residencial HVHZ",
  "Pool code at volume": "C\xF3digo de piscinas por volumen",
  "FBC R 4501.17 profiles, paperwork-ready, no field surprises on AHJ check.": "Perfiles FBC R 4501.17, papeleo listo, sin sorpresas en la inspecci\xF3n AHJ.",
  "HVHZ residential": "Residencial HVHZ",
  "150 mph welded commercial spec, sealed wind load on request.": "Especificaci\xF3n comercial soldada de 150 mph, carga de viento sellada bajo pedido.",
  "HOA ornamental": "Ornamental HOA",
  "Black powder-coat repeat sections, pickup-ready for repeat jobs.": "Secciones repetidas en negro, listas para retirar en trabajos recurrentes.",
  "Galvanized + Vinyl Coated": "Galvanizada + recubierta de vinilo",
  "Chain link mesh.": "Malla cicl\xF3nica.",
  "The workhorse perimeter.": "El caballo de batalla.",
  "Galvanized and PVC-coated mesh from 6 to 12 gauge. The default for security, sports, agricultural and commercial perimeters. Same-day pickup on stocked rolls + posts.": "Malla galvanizada y recubierta de PVC de calibre 6 a 12. La opci\xF3n est\xE1ndar para per\xEDmetros de seguridad, deportivos, agr\xEDcolas y comerciales. Retiro el mismo d\xEDa en rollos y postes en stock.",
  "Security perimeters, sports fields, industrial sites": "Per\xEDmetros de seguridad, canchas deportivas, sitios industriales",
  "Galvanized": "Galvanizada",
  "Industrial": "Industrial",
  "Hot-dip galvanized, weather-spec": "Galvanizada en caliente, especificaci\xF3n de intemperie",
  "Vinyl-Coated Black": "Recubierta de vinilo negro",
  "Residential": "Residencial",
  "PVC-coated mesh disappears into landscaping": "La malla recubierta de PVC se pierde en el paisajismo",
  "Vinyl-Coated Green": "Recubierta de vinilo verde",
  "Parks/sports": "Parques/deportes",
  "Court-side and athletic perimeters": "Per\xEDmetros de canchas y deportivos",
  "Heavy-gauge industrial": "Industrial de calibre pesado",
  "Security": "Seguridad",
  "9 ga + 11.5 ga for high-cycle perimeters": "Calibre 9 y 11.5 para per\xEDmetros de alto ciclo",
  "4 ft to 12 ft": "De 4 a 12 pies",
  "Galvanized, PVC-coated (Black, Green, Brown)": "Galvanizada, recubierta de PVC (negro, verde, caf\xE9)",
  "ASTM A392 mesh, schedule 40 posts": "Malla ASTM A392, postes c\xE9dula 40",
  "Up to 150 mph (open mesh)": "Hasta 150 mph (malla abierta)",
  "Same day stocked rolls + posts": "Mismo d\xEDa en rollos y postes en stock",
  "Security perimeter": "Per\xEDmetro de seguridad",
  "9 ga galvanized, 8 ft + barbed extension, with cantilever gates.": "Galvanizada calibre 9, 8 pies + extensi\xF3n de p\xFAas, con portones cantilever.",
  "Sports & rec": "Deportes y recreaci\xF3n",
  "10 ft and 12 ft mesh for tennis, baseball, soccer fields.": "Malla de 10 y 12 pies para tenis, b\xE9isbol y f\xFAtbol.",
  "Self-storage / industrial": "Self-storage / industrial",
  "Phased deliveries against release schedules.": "Entregas por fases seg\xFAn calendario de liberaci\xF3n.",
  "Galv + PVC-coated \xB7 Same-day will-call": "Galv + PVC \xB7 Retiro el mismo d\xEDa",
  "Galvanized and PVC-coated mesh from 6 to 12 gauge, same-day pickup on stocked rolls and posts. Phased commercial dispatch for industrial perimeters, trade accounts available.": "Malla galvanizada y recubierta de PVC de calibre 6 a 12, retiro el mismo d\xEDa en rollos y postes en stock. Despacho comercial por fases para per\xEDmetros industriales, cuentas comerciales disponibles.",
  "Industrial perimeters, security fencing, sports fields": "Per\xEDmetros industriales, cercas de seguridad, canchas deportivas",
  "Industrial perimeters": "Per\xEDmetros industriales",
  "Mile+ runs of 9-ga galv with phased delivery against release schedule.": "Corridas de m\xE1s de una milla en galv calibre 9 con entrega por fases.",
  "Sports + recreation": "Deportes y recreaci\xF3n",
  "10 ft and 12 ft mesh stocked for tennis, baseball, soccer fields.": "Malla de 10 y 12 pies en stock para tenis, b\xE9isbol y f\xFAtbol.",
  "Same-day will-call": "Retiro el mismo d\xEDa",
  "Order before 2pm, pickup ready by 4pm at FM or PC yard.": "Ordena antes de las 2pm y retira a las 4pm en FM o PC.",
  "Aluminum board privacy": "Privacidad de tabla de aluminio",
  "DuraFence aluminum board.": "Tabla de aluminio DuraFence.",
  "The look of board, the strength of metal.": "La apariencia de la tabla, la fuerza del metal.",
  "Horizontal aluminum board privacy, solid 6-8 ft privacy with the strength of aluminum and the silhouette of solid board. Hurricane-rated, no warping, no painting, no replacement boards.": "Privacidad horizontal de tabla de aluminio: privacidad s\xF3lida de 6-8 pies con la fuerza del aluminio y la silueta de tabla s\xF3lida. Resistente a huracanes, sin deformarse, sin pintar, sin reemplazar tablas.",
  "Modern privacy in HVHZ counties": "Privacidad moderna en condados HVHZ",
  "Standard board": "Tabla est\xE1ndar",
  "6 ft": "6 pies",
  "Horizontal aluminum board, flush mount": "Tabla horizontal de aluminio, montaje a ras",
  "Tall board": "Tabla alta",
  "8 ft": "8 pies",
  "For commercial / luxury residential": "Para comercial / residencial de lujo",
  "Slatted privacy": "Privacidad con listones",
  "Slight gap between boards for airflow": "Peque\xF1o espacio entre tablas para ventilaci\xF3n",
  "Modern gate": "Port\xF3n moderno",
  "Matching": "A juego",
  "Welded matching ready-to-assemble gates": "Portones a juego soldados, listos para ensamblar",
  "6 ft, 8 ft": "6 y 8 pies",
  "Black, Bronze, White": "Negro, bronce, blanco",
  "Extruded aluminum board + posts": "Tabla y postes de aluminio extruido",
  "150 mph HVHZ-rated": "Clasificado HVHZ 150 mph",
  "10-year finish": "Acabado de 10 a\xF1os",
  "1-2 weeks (color-matched)": "1-2 semanas (color a juego)",
  "Hurricane-zone privacy": "Privacidad en zona de huracanes",
  "HVHZ-rated to 150 mph, keeps full privacy through a Cat 4.": "Clasificada HVHZ a 150 mph, mantiene privacidad total durante un Cat 4.",
  "Modern residential": "Residencial moderno",
  "Horizontal board lines + matte powder-coat for contemporary designs.": "L\xEDneas horizontales y pintura en polvo mate para dise\xF1os contempor\xE1neos.",
  "Commercial screens": "Pantallas comerciales",
  "Dumpster enclosures, AC screens, utility-yard perimeters.": "Cerramientos de contenedores, pantallas de A/C, per\xEDmetros de patios de servicio.",
  "Aluminum board \xB7 HVHZ + custom color": "Tabla de aluminio \xB7 HVHZ + color a medida",
  "Aluminum board privacy in 6 and 8 ft, HVHZ-rated to 150 mph. Commercial and residential builds, phased delivery against release schedules, custom powder-coat color match on volume orders.": "Privacidad de tabla de aluminio en 6 y 8 pies, clasificada HVHZ a 150 mph. Obras comerciales y residenciales, entrega por fases seg\xFAn calendario, igualaci\xF3n de color a medida en \xF3rdenes por volumen.",
  "HVHZ residential, commercial screens, modern privacy builds": "Residencial HVHZ, pantallas comerciales, privacidad moderna",
  "150 mph rated, full privacy through a Cat 4 hurricane.": "Clasificada a 150 mph, privacidad total durante un hurac\xE1n Cat 4.",
  "AC enclosures, dumpster screens, utility-yard perimeters.": "Cerramientos de A/C, pantallas de contenedores, per\xEDmetros de servicio.",
  "Color-match runs": "Corridas con color a juego",
  "Powder-coat custom color on commercial volume orders.": "Color a medida en pintura en polvo para \xF3rdenes comerciales por volumen.",
  "Self-mating galvanized steel": "Acero galvanizado autoensamblable",
  "EC Fence.": "EC Fence.",
  "Self-mating galvanized steel panels.": "Paneles de acero galvanizado autoensamblables.",
  "Our newest system, self-mating galvanized steel panels installed every 12 ft. 6 ft tall, available in bronze and white, engineered for Exposure C wind loads. Engineered for the Florida coast.": "Nuestro sistema m\xE1s nuevo: paneles de acero galvanizado autoensamblables instalados cada 12 pies. De 6 pies de alto, en bronce y blanco, con ingenier\xEDa para cargas de viento Exposici\xF3n C. Dise\xF1ado para la costa de Florida.",
  "Coastal HVHZ perimeters, commercial sites, modern residential": "Per\xEDmetros costeros HVHZ, sitios comerciales, residencial moderno",
  "Bronze 6 ft": "Bronce 6 pies",
  "Standard": "Est\xE1ndar",
  "Bronze powder over hot-dip galv": "Polvo bronce sobre galvanizado en caliente",
  "White 6 ft": "Blanco 6 pies",
  "White finish, same panel system": "Acabado blanco, mismo sistema de panel",
  "Matching gate": "Port\xF3n a juego",
  "Single / double swing": "Batiente sencillo / doble",
  "Same panel face, ready-to-assemble": "Misma cara de panel, listo para ensamblar",
  "Sloped runs": "Tramos en pendiente",
  "Grade follow": "Sigue la pendiente",
  "Stair-stepped or racked panels": "Paneles escalonados o inclinados",
  "6 ft (custom 5-8 ft available)": "6 pies (a medida de 5-8 pies)",
  "Every 12 ft": "Cada 12 pies",
  "Bronze, White": "Bronce, blanco",
  "Exposure C (HVHZ engineered)": "Exposici\xF3n C (ingenier\xEDa HVHZ)",
  "15-year finish": "Acabado de 15 a\xF1os",
  "2-3 weeks": "2-3 semanas",
  "Coastal perimeter": "Per\xEDmetro costero",
  "Hot-dip galv core stands up to salt air in beachfront sites.": "N\xFAcleo galvanizado en caliente que resiste el aire salino frente al mar.",
  "Commercial property": "Propiedad comercial",
  "Clean modern face for office parks, marinas, gated communities.": "Cara moderna y limpia para parques de oficinas, marinas y comunidades cerradas.",
  "Architectural alternative to vinyl or board privacy.": "Alternativa arquitect\xF3nica a la privacidad de vinilo o tabla.",
  "Self-mating steel \xB7 Sealed Exposure C": "Acero autoensamblable \xB7 Exposici\xF3n C sellada",
  "Self-mating galvanized steel panels engineered for Exposure C wind loads. Modern panel face for coastal commercial and HVHZ residential builds. Sealed manufacturer specs available for AHJ submission.": "Paneles de acero galvanizado autoensamblables con ingenier\xEDa para cargas Exposici\xF3n C. Cara de panel moderna para obras comerciales costeras y residenciales HVHZ. Especificaciones selladas del fabricante disponibles para tr\xE1mite AHJ.",
  "Coastal commercial, modern residential, HVHZ contracts": "Comercial costero, residencial moderno, contratos HVHZ",
  "Coastal commercial": "Comercial costero",
  "Hot-dip galv core stands up to salt air, marina + coastal yards.": "N\xFAcleo galvanizado que resiste el aire salino, marinas y patios costeros.",
  "HVHZ contracts": "Contratos HVHZ",
  "Engineered Exposure C, sealed AHJ-ready specs on request.": "Ingenier\xEDa Exposici\xF3n C, especificaciones selladas listas para AHJ bajo pedido.",
  "Modern panel face": "Cara de panel moderna",
  "Clean architectural alternative to vinyl board for modern builds.": "Alternativa arquitect\xF3nica limpia a la tabla de vinilo para obras modernas.",
  "Single Swing": "Batiente sencillo",
  "Double Swing": "Batiente doble",
  "Sliding Gates": "Portones corredizos",
  "Cantilever": "Cantilever",
  "Rolling Gate": "Port\xF3n rodante",
  "Walk gates \xB7 Pedestrian access": "Portones peatonales \xB7 Acceso peatonal",
  "Single-swing gates.": "Portones batientes sencillos.",
  "Walk-through and pedestrian openings.": "Aberturas peatonales y de paso.",
  "Standard pedestrian and entry gates from 3 to 6 ft wide. Mechanically assembled or welded, with hardware to match every fence material we stock, every kit ships with a self-latching gravity latch and padlockable hasp.": "Portones peatonales y de entrada est\xE1ndar de 3 a 6 pies de ancho. Ensamblados mec\xE1nicamente o soldados, con herrajes a juego con cada material que tenemos; cada kit incluye cerrojo de gravedad de cierre autom\xE1tico y portacandado.",
  "Walk gates, residential side-yards, pool enclosures": "Portones peatonales, patios laterales residenciales, cerramientos de piscina",
  "Standard Walk": "Peatonal est\xE1ndar",
  "3-4 ft wide mechanical kit, gravity latch + padlock hasp included.": "Kit mec\xE1nico de 3-4 pies de ancho, cerrojo de gravedad y portacandado incluidos.",
  "Estate Pedestrian": "Peatonal estate",
  "Ornamental": "Ornamental",
  "4-6 ft welded heavy frame with decorative top option.": "Marco pesado soldado de 4-6 pies con opci\xF3n de remate decorativo.",
  "Pool-Code Gate": "Port\xF3n c\xF3digo de piscinas",
  "Code Compliant": "Seg\xFAn c\xF3digo",
  'Self-closing, self-latching, picket spacing \u2264 3".': 'Cierre y cerrojo autom\xE1ticos, separaci\xF3n de pickets \u2264 3".',
  "Industrial Walk": "Peatonal industrial",
  "Galv steel frame, heavy hinges, key-coded lockable handle.": "Marco de acero galvanizado, bisagras pesadas, manija con cerradura.",
  "3 ft, 4 ft, 5 ft, 6 ft (custom on request)": "3, 4, 5 y 6 pies (a medida bajo pedido)",
  "4 ft, 5 ft, 6 ft (matches fence height)": "4, 5 y 6 pies (seg\xFAn altura de la cerca)",
  "Chain link, aluminum, vinyl, EC Fence, to match run": "Malla, aluminio, vinilo, EC Fence, a juego con la corrida",
  "Self-latching gravity latch + padlock hasp included": "Cerrojo de gravedad de cierre autom\xE1tico + portacandado incluido",
  "Pre-engineered for LiftMaster actuator add-on": "Preparado para actuador LiftMaster opcional",
  "24h or less on stocked kits \xB7 3-5 days fabricated": "24h o menos en kits en stock \xB7 3-5 d\xEDas fabricado",
  "Pedestrian access": "Acceso peatonal",
  "Side-yard, gardens and walk-through openings where a driveway gate is too much.": "Patios laterales, jardines y pasos donde un port\xF3n vehicular es demasiado.",
  "Pool code enclosure": "Cerramiento seg\xFAn c\xF3digo de piscinas",
  "Self-closing, self-latching profiles meet Florida pool code requirements.": "Perfiles con cierre y cerrojo autom\xE1ticos que cumplen el c\xF3digo de piscinas de Florida.",
  "Tight spaces": "Espacios reducidos",
  "Single panel works where double-swing arc clearance is unavailable.": "Un solo panel funciona donde no hay espacio para el arco de un batiente doble.",
  "Walk gates \xB7 Trade-account pickup": "Peatonales \xB7 Retiro con cuenta comercial",
  "Ready-to-assemble kits or in-house welded custom from 3 to 6 ft. Hardware kits packed and labeled per opening. Trade accounts after the second order, pull up to the bay, walk out fast.": "Kits listos para ensamblar o soldados a medida en planta de 3 a 6 pies. Kits de herrajes empacados y etiquetados por abertura. Cuentas comerciales tras la segunda orden; llega a la bah\xEDa y sal r\xE1pido.",
  "Volume residential, code-compliant pool runs, will-call pickup": "Residencial por volumen, corridas de piscina seg\xFAn c\xF3digo, retiro will-call",
  "Trade volume": "Volumen comercial",
  "Stocked widths for repeat residential jobs. Ready-to-assemble kits cut field install time.": "Anchos en stock para trabajos residenciales recurrentes. Los kits listos para ensamblar reducen el tiempo de instalaci\xF3n.",
  "Code-compliant builds": "Obras seg\xFAn c\xF3digo",
  "Pool-code profiles meet FBC R 4501.17, paperwork ready for AHJ.": "Perfiles de c\xF3digo de piscinas seg\xFAn FBC R 4501.17, papeleo listo para AHJ.",
  "Will-call staging": "Preparaci\xF3n will-call",
  "Order before 2pm, pickup ready by 4pm. Hardware packed per opening.": "Ordena antes de las 2pm, listo a las 4pm. Herrajes empacados por abertura.",
  "Driveway access \xB7 Symmetrical": "Acceso vehicular \xB7 Sim\xE9trico",
  "Double-swing gates.": "Portones batientes dobles.",
  "Driveway openings, single-day install.": "Aberturas vehiculares, instalaci\xF3n en un d\xEDa.",
  "Symmetrical driveway-width gates from 8 to 16 ft total opening. Ready-to-assemble with drop rod, gate latch and stainless hardware kit packed per opening, single-day install for most layouts.": "Portones sim\xE9tricos de 8 a 16 pies de abertura total. Listos para ensamblar con varilla de fijaci\xF3n, cerrojo y kit de herrajes inoxidables empacado por abertura; instalaci\xF3n en un d\xEDa en la mayor\xEDa de los casos.",
  "Residential driveways, estate entries, vehicle access": "Entradas vehiculares residenciales, entradas estate, acceso de veh\xEDculos",
  "Standard Drive": "Vehicular est\xE1ndar",
  "8-12 ft total, mechanically assembled, drop rod + center latch.": "8-12 pies en total, ensamblado mec\xE1nico, varilla y cerrojo central.",
  "Estate Pair": "Par estate",
  "Luxury": "Lujo",
  "10-16 ft welded heavy, decorative scrollwork or arched top.": "10-16 pies soldado pesado, volutas decorativas o remate arqueado.",
  "Privacy Drive": "Vehicular de privacidad",
  "Solid": "S\xF3lido",
  "Full vinyl or DuraFence panels, matched to privacy run.": "Paneles completos de vinilo o DuraFence, a juego con la corrida de privacidad.",
  "Commercial Drive": "Vehicular comercial",
  "Heavy-Duty": "Uso pesado",
  "Up to 16 ft welded steel, sized for higher cycle counts.": "Hasta 16 pies en acero soldado, dimensionado para m\xE1s ciclos.",
  "8 ft, 10 ft, 12 ft, 14 ft, 16 ft total opening": "8, 10, 12, 14 y 16 pies de abertura total",
  "4 ft, 5 ft, 6 ft, 8 ft (matches fence height)": "4, 5, 6 y 8 pies (seg\xFAn altura de la cerca)",
  "Chain link, aluminum, vinyl, EC Fence, DuraFence": "Malla, aluminio, vinilo, EC Fence, DuraFence",
  "Hinge sets, drop rod, center latch, stainless fasteners": "Juegos de bisagras, varilla, cerrojo central, torniller\xEDa inoxidable",
  "Dual-leaf LiftMaster kit with photo-eye + keypad add-on": "Kit LiftMaster de doble hoja con fotocelda + teclado opcional",
  "Wide driveways": "Entradas anchas",
  "Two leaves meeting in the middle clear 8-16 ft openings cleanly.": "Dos hojas que se encuentran al centro cubren aberturas de 8-16 pies.",
  "Estate entries": "Entradas estate",
  "Symmetrical look reads as a formal main entry, more presence than single.": "El aspecto sim\xE9trico se lee como entrada principal formal, m\xE1s presencia que el sencillo.",
  "Vehicle + pedestrian": "Vehicular + peatonal",
  "Open one leaf for walk-in, both for vehicle access.": "Abre una hoja para paso peatonal, ambas para veh\xEDculos.",
  "Driveway gates \xB7 Ready-to-assemble kits": "Vehiculares \xB7 Kits listos para ensamblar",
  "Ready-to-assemble driveway gates from 8 to 16 ft, welded in Fort Myers, drop rod + hardware kit packed per opening. Trade accounts get a dedicated rep + job-site dispatch.": "Portones vehiculares listos para ensamblar de 8 a 16 pies, soldados en Fort Myers, varilla y kit de herrajes empacados por abertura. Las cuentas comerciales tienen representante dedicado y despacho a obra.",
  "Volume residential drives, custom welded estate runs, trade kits": "Vehicular residencial por volumen, corridas estate soldadas a medida, kits comerciales",
  "Volume residential": "Residencial por volumen",
  "Same-day pickup on stocked 10/12/14 ft openings, cuts site time.": "Retiro el mismo d\xEDa en aberturas de 10/12/14 pies en stock, menos tiempo en obra.",
  "Custom welded fab": "Fabricaci\xF3n soldada a medida",
  "Estate runs and non-stock widths welded in-house in 5-7 days.": "Corridas estate y anchos fuera de stock soldados en planta.",
  "Trade dispatch": "Despacho comercial",
  "Job-site delivery across Lee, Collier, Charlotte and Hendry.": "Entrega a obra en Lee, Collier, Charlotte y Hendry.",
  "Track-mounted \xB7 Space-saving": "Sobre riel \xB7 Ahorra espacio",
  "Sliding gates.": "Portones corredizos.",
  "For tight or graded openings.": "Para aberturas estrechas o con pendiente.",
  "Track-mounted sliding gates for tight or graded driveways where a swing arc won't work. Manual or automated with operator and safety package, slides parallel to the fence.": "Portones corredizos sobre riel para entradas estrechas o con pendiente donde un arco batiente no funciona. Manual o automatizado con operador y paquete de seguridad; se desliza paralelo a la cerca.",
  "Tight residential driveways, sloped sites, repeat daily use": "Entradas residenciales estrechas, sitios con pendiente, uso diario recurrente",
  "Galvanized Mesh": "Malla galvanizada",
  "V-track mounted chain-link mesh with twin rollers.": "Malla cicl\xF3nica sobre riel en V con rodillos dobles.",
  "PVC-coated mesh disappears against landscaping.": "La malla recubierta de PVC se pierde contra el paisajismo.",
  "Privacy Slide": "Corredizo de privacidad",
  "Full vinyl or DuraFence panel on V-track.": "Panel completo de vinilo o DuraFence sobre riel en V.",
  "Automated Kit": "Kit automatizado",
  "Powered": "Motorizado",
  "LiftMaster slide operator + photo-eye + keypad bundle.": "Operador corredizo LiftMaster + fotocelda + teclado.",
  "8 ft, 10 ft, 12 ft, 14 ft, 16 ft, 18 ft openings": "Aberturas de 8, 10, 12, 14, 16 y 18 pies",
  "Galv chain link, vinyl-coated, EC Fence, DuraFence": "Malla galvanizada, recubierta de vinilo, EC Fence, DuraFence",
  "Galvanized V-track or pipe-track + end stops included": "Riel en V galvanizado o de tubo + topes incluidos",
  "130 mph closed \xB7 150 mph HVHZ on heavy commercial spec": "130 mph cerrado \xB7 150 mph HVHZ en especificaci\xF3n comercial pesada",
  "24h or less on stocked kits \xB7 2-3 weeks custom": "24h o menos en kits en stock \xB7 2-3 semanas a medida",
  "Limited swing clearance": "Sin espacio para abatir",
  "Slides parallel to the fence, no arc to block walkways or planters.": "Se desliza paralelo a la cerca, sin arco que bloquee andadores o jardineras.",
  "Sloped driveways": "Entradas con pendiente",
  "Ground track handles up to 3% grade without binding.": "El riel de piso maneja hasta 3% de pendiente sin atascarse.",
  "Repeat daily use": "Uso diario recurrente",
  "Manual operation is two-finger easy; automation kits available.": "Operaci\xF3n manual con dos dedos; kits de automatizaci\xF3n disponibles.",
  "Track-mounted \xB7 Trade-account fab": "Sobre riel \xB7 Fabricaci\xF3n con cuenta comercial",
  "V-track and pipe-track slide gates fabricated for tight residential drives and sloped lots. Trade accounts, dedicated rep, will-call staging, kit ships with track, rollers and end stops.": "Portones corredizos de riel en V y de tubo fabricados para entradas residenciales estrechas y lotes con pendiente. Cuentas comerciales, representante dedicado, preparaci\xF3n will-call; el kit incluye riel, rodillos y topes.",
  "Tight residential lots, sloped driveway jobs, repeat HOA work": "Lotes residenciales estrechos, trabajos con pendiente, HOA recurrente",
  "HOA + subdivision": "HOA + urbanizaci\xF3n",
  "Repeat 12-14 ft openings with uniform finish across the run.": "Aberturas recurrentes de 12-14 pies con acabado uniforme.",
  "Grade-change sites": "Sitios con cambio de pendiente",
  "V-track handles up to 3% grade without high-low binding.": "El riel en V maneja hasta 3% de pendiente sin atascos.",
  "Pull to bay, walk out with the gate + track + rollers staged.": "Llega a la bah\xEDa y sal con port\xF3n, riel y rodillos preparados.",
  "No ground track \xB7 Up to 50 ft": "Sin riel en piso \xB7 Hasta 50 pies",
  "Cantilever gates.": "Portones cantilever.",
  "Counter-balanced, no ground track.": "Contrapesados, sin riel en piso.",
  "Counter-balanced rolling gates with no ground track, ideal for sites with sand, debris or grade change. Internal V-rollers and an overhang section that floats clear of the driveway. Single openings up to 50 ft.": "Portones rodantes contrapesados sin riel en piso, ideales para sitios con arena, escombros o cambios de pendiente. Rodillos en V internos y una secci\xF3n en voladizo que flota sobre la entrada. Aberturas sencillas de hasta 50 pies.",
  "Industrial yards, coastal sites, long openings": "Patios industriales, sitios costeros, aberturas largas",
  "Galvanized Frame": "Marco galvanizado",
  "Hot-dip galv welded frame with V-rollers, mesh or vinyl-coated.": "Marco soldado galvanizado en caliente con rodillos en V, malla o recubierta de vinilo.",
  "Coastal": "Costero",
  "Salt-spray-rated rollers, black PVC-coated mesh face.": "Rodillos aptos para salinidad, cara de malla negra recubierta de PVC.",
  "Solid Privacy": "Privacidad s\xF3lida",
  "DuraFence aluminum board face on welded cantilever frame.": "Cara de tabla de aluminio DuraFence sobre marco cantilever soldado.",
  "Long-Span Custom": "Claro largo a medida",
  "Bespoke": "A medida",
  "Up to 50 ft single opening or telescoping for wider runs.": "Hasta 50 pies de abertura sencilla o telesc\xF3pico para tramos m\xE1s anchos.",
  "14 ft to 50 ft single openings (wider on telescoping)": "Aberturas sencillas de 14 a 50 pies (m\xE1s anchas en telesc\xF3pico)",
  "6 ft, 8 ft, 10 ft, 12 ft (industrial)": "6, 8, 10 y 12 pies (industrial)",
  "Galv chain link, vinyl-coated, DuraFence, EC Fence": "Malla galvanizada, recubierta de vinilo, DuraFence, EC Fence",
  "50% of opening on receiving side (30 ft \u2192 15 ft)": "50% de la abertura del lado receptor (30 pies \u2192 15 pies)",
  "Up to 150 mph HVHZ on mesh or vinyl-coated specs": "Hasta 150 mph HVHZ en malla o recubierta de vinilo",
  "3-4 weeks fabricated in Fort Myers": "3-4 semanas, fabricado en Fort Myers",
  "No ground track": "Sin riel en el piso",
  "Nothing in the driveway path, no debris jam, no track to clear.": "Nada en el paso vehicular: sin atascos por escombros ni riel que limpiar.",
  "Sandy / coastal sites": "Sitios arenosos / costeros",
  "Salt-spray-rated rollers replace exposed ground track.": "Rodillos aptos para salinidad reemplazan el riel expuesto.",
  "Long openings": "Aberturas largas",
  "Up to 50 ft single openings, typical for industrial yards.": "Aberturas sencillas de hasta 50 pies, t\xEDpicas de patios industriales.",
  "Industrial \xB7 Phased delivery": "Industrial \xB7 Entrega por fases",
  "Counter-balanced cantilever frames welded in Fort Myers, up to 50 ft single openings. Phased deliveries against your release schedule, sealed manufacturer specs available for AHJ submission.": "Marcos cantilever contrapesados soldados en Fort Myers, aberturas sencillas de hasta 50 pies. Entregas por fases seg\xFAn tu calendario, especificaciones selladas del fabricante para tr\xE1mite AHJ.",
  "Industrial perimeters, commercial yards, HVHZ contracts": "Per\xEDmetros industriales, patios comerciales, contratos HVHZ",
  "1.4+ mile runs phased against tight release windows.": "Corridas de 1.4+ millas por fases con ventanas de liberaci\xF3n ajustadas.",
  "Sealed wind-load specs for 150 mph zones, AHJ-ready.": "Especificaciones selladas de viento para zonas de 150 mph, listas para AHJ.",
  "Custom span fab": "Fabricaci\xF3n de claros a medida",
  "Telescoping or follower-gate config for spans wider than 50 ft.": "Configuraci\xF3n telesc\xF3pica o con port\xF3n seguidor para claros mayores a 50 pies.",
  "Industrial V-track \xB7 High-cycle": "Riel en V industrial \xB7 Alto ciclo",
  "Rolling gates.": "Portones rodantes.",
  "Industrial V-track and rollers.": "Riel en V y rodillos industriales.",
  "Industrial rolling gates with V-track and ground rollers, built for high-cycle commercial use, secured perimeters and yards. Heavy galvanized frame with stainless-steel hardware, rated for hundreds of cycles a day.": "Portones rodantes industriales con riel en V y rodillos de piso, hechos para uso comercial de alto ciclo, per\xEDmetros asegurados y patios. Marco galvanizado pesado con herrajes inoxidables, clasificado para cientos de ciclos al d\xEDa.",
  "Commercial perimeters, industrial yards, self-storage": "Per\xEDmetros comerciales, patios industriales, self-storage",
  "V-Track Standard": "Riel en V est\xE1ndar",
  "Heavy galvanized frame on V-track with stainless rollers.": "Marco galvanizado pesado sobre riel en V con rodillos inoxidables.",
  "High-Cycle Heavy": "Alto ciclo pesado",
  "Continuous-Duty": "Uso continuo",
  "Bearings and frame spec'd for continuous-duty cycles.": "Rodamientos y marco especificados para ciclos de uso continuo.",
  "Vinyl-Coated Visual": "Malla recubierta de vinilo",
  "Visual": "Visual",
  "PVC-coated black mesh, softer look for visual perimeters.": "Malla negra recubierta de PVC, aspecto m\xE1s suave para per\xEDmetros visibles.",
  "LiftMaster Elite slide operator with loop-detect + safety edges.": "Operador LiftMaster Elite con detecci\xF3n de lazo + bordes de seguridad.",
  "16 ft, 20 ft, 24 ft, 30 ft openings (custom on request)": "Aberturas de 16, 20, 24 y 30 pies (a medida bajo pedido)",
  "Galv chain link mesh on welded heavy steel frame": "Malla galvanizada sobre marco pesado de acero soldado",
  "V-track kit + end stops + follower rollers + tensioner": "Kit de riel en V + topes + rodillos seguidores + tensor",
  "400 cycles/day standard \xB7 continuous-duty heavy frame": "400 ciclos/d\xEDa est\xE1ndar \xB7 marco pesado de uso continuo",
  "3-4 weeks fabricated \xB7 stocked widths 1-2 weeks": "3-4 semanas fabricado \xB7 anchos en stock 1-2 semanas",
  "Commercial perimeters": "Per\xEDmetros comerciales",
  "Industrial yards, self-storage, transit hubs.": "Patios industriales, self-storage, centros de tr\xE1nsito.",
  "High-cycle use": "Uso de alto ciclo",
  "Hundreds of cycles per day, bearings and frame spec'd for it.": "Cientos de ciclos al d\xEDa; rodamientos y marco especificados para ello.",
  "Heavy vehicle access": "Acceso de veh\xEDculos pesados",
  "Wide spans for tractor-trailer and box-truck access.": "Claros anchos para tr\xE1ileres y camiones.",
  "Continuous-duty \xB7 RFQ welcome": "Uso continuo \xB7 RFQ bienvenidos",
  "Heavy industrial rolling gates welded to spec, continuous-duty bearings, V-track and stainless hardware. Phased delivery, RFQ process, dedicated commercial rep.": "Portones rodantes industriales pesados soldados a especificaci\xF3n, rodamientos de uso continuo, riel en V y herrajes inoxidables. Entrega por fases, proceso RFQ, representante comercial dedicado.",
  "Self-storage, transit hubs, industrial yards, commercial perimeters": "Self-storage, centros de tr\xE1nsito, patios industriales, per\xEDmetros comerciales",
  "Self-storage rollouts": "Despliegues self-storage",
  "Multi-opening releases with phased delivery and consistent finish.": "Liberaciones multi-abertura con entrega por fases y acabado consistente.",
  "Continuous-duty fab": "Fabricaci\xF3n de uso continuo",
  "Bearings and frame spec'd for high-cycle commercial operations.": "Rodamientos y marco para operaciones comerciales de alto ciclo.",
  "Sealed wind ratings": "Clasificaciones de viento selladas",
  "HVHZ-rated configurations with stamped specs for AHJ submission.": "Configuraciones HVHZ con especificaciones selladas para tr\xE1mite AHJ."
};
const trDeep = (v, lang) => {
  if (lang !== "ES") return v;
  if (typeof v === "string") return ES_TR[v] ?? v;
  if (Array.isArray(v)) return v.map((x) => trDeep(x, lang));
  if (v && typeof v === "object") {
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
Object.assign(ES_TR, {
  "Powder-Coated Aluminum": "Aluminio con pintura en polvo",
  "Fence Materials.": "Materiales de cerca.",
  "Pool-code compliant aluminum fence materials for residential, commercial, and community projects. Available in multiple heights and styles, with gates, posts, rails, and hardware quoted as part of your material package.": "Materiales de cerca de aluminio que cumplen el c\xF3digo de piscinas, para proyectos residenciales, comerciales y comunitarios. Disponibles en m\xFAltiples alturas y estilos, con portones, postes, rieles y herrajes cotizados como parte de tu paquete de material."
});
Object.assign(ES_TR, {
  // ── Shared labels (spec / quick-fact columns) ──
  "Best For": "Ideal para",
  "Material": "Material",
  "Materials": "Materiales",
  "Options": "Opciones",
  "Lead Time": "Tiempo de entrega",
  "Styles": "Estilos",
  "Post Options": "Opciones de postes",
  "Mesh": "Malla",
  "Framework": "Estructura",
  "Height": "Altura",
  "Post Spacing": "Separaci\xF3n de postes",
  "Gates": "Portones",
  "Gate Types": "Tipos de port\xF3n",
  // ── Shared buttons / CTA fragments ──
  "Request a Quote": "Solicitar cotizaci\xF3n",
  "Request a Gate Quote": "Solicitar cotizaci\xF3n de port\xF3n",
  "Call (239) 689-5496": "Llamar (239) 689-5496",
  "Ready to Quote Your": "\xBFListo para cotizar tu",
  // ── Vinyl / PVC ──
  "Vinyl / PVC fence materials": "Materiales de cerca de vinilo / PVC",
  "Vinyl / PVC Fence Materials": "Materiales de cerca de vinilo / PVC",
  "Built for Florida.": "Hechos para Florida.",
  "Low-maintenance vinyl fence materials for privacy, semi-privacy, pool enclosures, backyards, and HOA projects. Panels, posts, rails, gates, hardware, and accessories available for full material quotes.": "Materiales de cerca de vinilo de bajo mantenimiento para privacidad, semiprivacidad, cerramientos de piscina, patios y proyectos de HOA. Paneles, postes, rieles, portones, herrajes y accesorios disponibles para cotizaciones completas de material.",
  "Low-maintenance vinyl / PVC": "Vinilo / PVC de bajo mantenimiento",
  "Privacy, semi-privacy, picket, and ranch rail styles": "Estilos de privacidad, semiprivacidad, picket y ranch rail",
  "Stock and lead time vary by style, height, color, and quantity": "El stock y el tiempo de entrega var\xEDan seg\xFAn estilo, altura, color y cantidad",
  "Full privacy vinyl fence panels for backyards and property lines.": "Paneles de cerca de vinilo de privacidad total para patios y l\xEDmites de propiedad.",
  "Airflow": "Ventilaci\xF3n",
  "Decorative vinyl fence option with partial visibility and airflow.": "Opci\xF3n de cerca de vinilo decorativa con visibilidad parcial y ventilaci\xF3n.",
  "Classic vinyl picket fence for front yards and decorative projects.": "Cerca de vinilo tipo picket cl\xE1sica para jardines delanteros y proyectos decorativos.",
  "Open rail": "Riel abierto",
  "Open vinyl rail system for large properties and boundaries.": "Sistema de rieles de vinilo abiertos para propiedades grandes y linderos.",
  "4', 5', 6', and other options available by request": "4', 5', 6', y otras opciones disponibles bajo pedido",
  "White, tan, gray, and selected color options": "Blanco, beige, gris y opciones de color seleccionadas",
  "Vinyl panels, posts, rails, gates, and hardware": "Paneles de vinilo, postes, rieles, portones y herrajes",
  "Privacy, semi-privacy, picket, and ranch rail": "Privacidad, semiprivacidad, picket y ranch rail",
  "Line posts, end posts, corner posts, blank posts, and gate posts available": "Postes de l\xEDnea, postes de extremo, postes de esquina, postes ciegos y postes para port\xF3n disponibles",
  "Backyard Privacy": "Privacidad de patio",
  "Low-maintenance vinyl fence materials for residential backyards and property lines.": "Materiales de cerca de vinilo de bajo mantenimiento para patios residenciales y l\xEDmites de propiedad.",
  "Pool Enclosures": "Cerramientos de piscina",
  "Clean vinyl fence options for pool areas and residential projects.": "Opciones de cerca de vinilo limpias para \xE1reas de piscina y proyectos residenciales.",
  "HOA & Residential Communities": "HOA y comunidades residenciales",
  "Consistent vinyl fence styles for communities, subdivisions, and shared spaces.": "Estilos de cerca de vinilo consistentes para comunidades, urbanizaciones y espacios compartidos.",
  "Vinyl fence materials": "Materiales de cerca de vinilo",
  "Vinyl Fence Materials?": "material de cerca de vinilo?",
  "Send us your linear footage, height, color, style, gate sizes, and project location. Our team will help prepare a material quote for pickup or delivery.": "Env\xEDanos tus pies lineales, altura, color, estilo, medidas de port\xF3n y ubicaci\xF3n del proyecto. Nuestro equipo te ayudar\xE1 a preparar una cotizaci\xF3n de material para retiro o entrega.",
  // ── Aluminum ──
  "Powder-coat aluminum": "Aluminio con pintura en polvo",
  "Pool enclosures, residential yards, HOA communities": "Cerramientos de piscina, patios residenciales, comunidades de HOA",
  "Powder-coated aluminum": "Aluminio con pintura en polvo",
  "2-rail, 3-rail, spear-top, flat-top options": "Opciones de 2 rieles, 3 rieles, remate tipo lanza y remate plano",
  "Stock and lead time vary by style, color, and quantity": "El stock y el tiempo de entrega var\xEDan seg\xFAn estilo, color y cantidad",
  "2-Rail": "2 rieles",
  "Simple, open-profile aluminum fence option.": "Opci\xF3n de cerca de aluminio sencilla y de perfil abierto.",
  "Popular": "Popular",
  "Popular residential and pool-code configuration.": "Configuraci\xF3n popular residencial y de c\xF3digo de piscinas.",
  "3-Rail Spear Top": "3 rieles con remate tipo lanza",
  "Decorative": "Decorativo",
  "Decorative picket-top style for residential projects.": "Estilo decorativo con remate tipo picket para proyectos residenciales.",
  "4-Rail": "4 rieles",
  "Custom": "A medida",
  "Available for taller or custom aluminum configurations.": "Disponible para configuraciones de aluminio m\xE1s altas o a medida.",
  "4', 5', 6', custom options available": "4', 5', 6', opciones a medida disponibles",
  "Black, bronze, white, and selected powder-coated finishes": "Negro, bronce, blanco y acabados con pintura en polvo seleccionados",
  "Aluminum fence panels, posts, gates, and hardware": "Paneles de cerca de aluminio, postes, portones y herrajes",
  "Varies by product style and installation conditions": "Var\xEDa seg\xFAn el estilo del producto y las condiciones de instalaci\xF3n",
  "Ask our team for available manufacturer warranty details": "Consulta a nuestro equipo los detalles de garant\xEDa del fabricante disponibles",
  "Stock and lead time vary by material, color, and quantity": "El stock y el tiempo de entrega var\xEDan seg\xFAn material, color y cantidad",
  "Pool-code aluminum fencing for residential and community pools.": "Cerca de aluminio seg\xFAn c\xF3digo de piscinas para piscinas residenciales y comunitarias.",
  "Residential Front Yards": "Jardines delanteros residenciales",
  "Clean, decorative aluminum fence for front yards and property lines.": "Cerca de aluminio decorativa y limpia para jardines delanteros y l\xEDmites de propiedad.",
  "HOA & Community Perimeters": "Per\xEDmetros de HOA y comunidades",
  "Durable aluminum fence options for communities and shared spaces.": "Opciones de cerca de aluminio duraderas para comunidades y espacios compartidos.",
  "Aluminum fence materials": "Materiales de cerca de aluminio",
  "Aluminum Fence Materials?": "material de cerca de aluminio?",
  "Send us your material needs, linear footage, height, color, gate sizes, and project location. Our team will help prepare a material quote for pickup or delivery.": "Env\xEDanos tus necesidades de material, pies lineales, altura, color, medidas de port\xF3n y ubicaci\xF3n del proyecto. Nuestro equipo te ayudar\xE1 a preparar una cotizaci\xF3n de material para retiro o entrega.",
  // ── Chain Link ──
  "Chain Link Fence Materials": "Materiales de cerca de malla cicl\xF3nica",
  "for Any Perimeter.": "para cualquier per\xEDmetro.",
  "Galvanized and vinyl-coated chain link fence materials for residential, commercial, industrial, and recreational projects. Mesh, posts, rails, fittings, gates, and hardware available for full material quotes.": "Materiales de cerca de malla cicl\xF3nica galvanizada y recubierta de vinilo para proyectos residenciales, comerciales, industriales y recreativos. Malla, postes, rieles, accesorios, portones y herrajes disponibles para cotizaciones completas de material.",
  "Security, commercial, industrial, and recreational perimeters": "Per\xEDmetros de seguridad, comerciales, industriales y recreativos",
  "Galvanized and vinyl-coated mesh, posts, rails, and fittings": "Malla galvanizada y recubierta de vinilo, postes, rieles y accesorios",
  "Galvanized, black, and green vinyl-coated finishes": "Acabados galvanizado, negro y verde recubiertos de vinilo",
  "Stock and lead time vary by gauge, finish, and quantity": "El stock y el tiempo de entrega var\xEDan seg\xFAn calibre, acabado y cantidad",
  "Classic zinc-coated mesh for security and perimeter fencing.": "Malla recubierta de zinc cl\xE1sica para cercas de seguridad y per\xEDmetro.",
  "Black Vinyl-Coated": "Recubierta de vinilo negro",
  "Vinyl-coated mesh with a clean, low-profile residential look.": "Malla recubierta de vinilo con una apariencia residencial limpia y de bajo perfil.",
  "Green Vinyl-Coated": "Recubierta de vinilo verde",
  "By request": "Bajo pedido",
  "Vinyl-coated mesh for parks, courts, and recreational sites.": "Malla recubierta de vinilo para parques, canchas y sitios recreativos.",
  "Heavy-Gauge Industrial": "Industrial de calibre pesado",
  "Heavier mesh and framework for high-security commercial perimeters.": "Malla y estructura m\xE1s pesadas para per\xEDmetros comerciales de alta seguridad.",
  "4', 5', 6', and taller options available": "4', 5', 6', y opciones m\xE1s altas disponibles",
  "Galvanized and vinyl-coated mesh in multiple gauges": "Malla galvanizada y recubierta de vinilo en m\xFAltiples calibres",
  "Galvanized, black, and green vinyl-coated": "Galvanizada, negra y verde recubierta de vinilo",
  "Mesh, posts, rails, fittings, gates, and hardware": "Malla, postes, rieles, accesorios, portones y herrajes",
  "Line posts, terminal posts, top rail, and tension wire": "Postes de l\xEDnea, postes terminales, riel superior y alambre de tensi\xF3n",
  "Security Perimeters": "Per\xEDmetros de seguridad",
  "Durable chain link fencing for commercial and industrial security.": "Cerca de malla cicl\xF3nica duradera para seguridad comercial e industrial.",
  "Sports & Recreation": "Deportes y recreaci\xF3n",
  "Vinyl-coated mesh for ball fields, courts, and park enclosures.": "Malla recubierta de vinilo para campos deportivos, canchas y cerramientos de parques.",
  "Self-Storage & Industrial": "Self-storage e industrial",
  "Long perimeter runs for storage yards and industrial sites.": "Corridas de per\xEDmetro largas para patios de almacenamiento y sitios industriales.",
  "Chain link fence materials": "Materiales de cerca de malla cicl\xF3nica",
  "Chain Link Fence Materials?": "material de cerca de malla cicl\xF3nica?",
  "Send us your material needs, linear footage, height, finish, gate sizes, and project location. Our team will help prepare a material quote for pickup or delivery.": "Env\xEDanos tus necesidades de material, pies lineales, altura, acabado, medidas de port\xF3n y ubicaci\xF3n del proyecto. Nuestro equipo te ayudar\xE1 a preparar una cotizaci\xF3n de material para retiro o entrega.",
  // ── Metal / DuraFence ──
  "Metal / DuraFence privacy materials": "Materiales de privacidad Metal / DuraFence",
  "Metal / DuraFence Privacy": "Privacidad Metal / DuraFence",
  "Durable metal privacy fence materials for residential, commercial, and high-security projects. Panels, posts, rails, gates, hardware, and accessories available for full material quotes.": "Materiales de cerca de privacidad de metal duraderos para proyectos residenciales, comerciales y de alta seguridad. Paneles, postes, rieles, portones, herrajes y accesorios disponibles para cotizaciones completas de material.",
  "Privacy fences, modern yards, commercial screens, security projects": "Cercas de privacidad, patios modernos, pantallas comerciales, proyectos de seguridad",
  "Metal privacy panels, rails, and posts": "Paneles de privacidad de metal, rieles y postes",
  "Standard board, tall board, slatted privacy, and custom gates": "Tabla est\xE1ndar, tabla alta, privacidad con listones y portones a medida",
  "Standard Board": "Tabla est\xE1ndar",
  "Clean metal privacy style for residential and commercial projects.": "Estilo de privacidad de metal limpio para proyectos residenciales y comerciales.",
  "Tall Board": "Tabla alta",
  "Extra coverage": "Cobertura adicional",
  "Taller metal privacy option for projects that need extra coverage.": "Opci\xF3n de privacidad de metal m\xE1s alta para proyectos que necesitan cobertura adicional.",
  "Slatted Privacy": "Privacidad con listones",
  "Modern metal fence style with partial visibility and airflow.": "Estilo de cerca de metal moderno con visibilidad parcial y ventilaci\xF3n.",
  "Modern Gate": "Port\xF3n moderno",
  "Matching single and double gates with hardware options.": "Portones sencillos y dobles a juego con opciones de herrajes.",
  "6', 7', 8', and other options available by request": "6', 7', 8', y otras opciones disponibles bajo pedido",
  "White, black, bronze, and woodgrain": "Blanco, negro, bronce y s\xEDmil madera",
  "Metal panels, posts, rails, gates, and hardware": "Paneles de metal, postes, rieles, portones y herrajes",
  "Standard board, tall board, slatted privacy, and modern gate options": "Tabla est\xE1ndar, tabla alta, privacidad con listones y opciones de port\xF3n moderno",
  'One 2-1/2" post type for all positions': 'Un solo tipo de poste de 2-1/2" para todas las posiciones',
  "Modern Privacy": "Privacidad moderna",
  "Metal privacy fence materials for clean residential and commercial designs.": "Materiales de cerca de privacidad de metal para dise\xF1os residenciales y comerciales limpios.",
  "Commercial Screens": "Pantallas comerciales",
  "Durable metal fence options for enclosures, screens, and utility areas.": "Opciones de cerca de metal duraderas para cerramientos, pantallas y \xE1reas de servicio.",
  "Security Projects": "Proyectos de seguridad",
  "Strong metal fence materials for projects that need privacy and durability.": "Materiales de cerca de metal resistentes para proyectos que necesitan privacidad y durabilidad.",
  "Metal fence materials": "Materiales de cerca de metal",
  "Metal Fence Materials?": "material de cerca met\xE1lica?",
  // ── EC Fence ──
  "EC Fence galvanized steel privacy panels": "Paneles de privacidad de acero galvanizado EC Fence",
  "EC Fence Galvanized Steel": "Acero galvanizado EC Fence",
  "Privacy Panels.": "Paneles de privacidad.",
  "Self-mating galvanized steel fence panels for privacy, coastal properties, commercial sites, and modern residential projects. Panels, posts, gates, hardware, and accessories available for full material quotes.": "Paneles de cerca de acero galvanizado autoensamblables para privacidad, propiedades costeras, sitios comerciales y proyectos residenciales modernos. Paneles, postes, portones, herrajes y accesorios disponibles para cotizaciones completas de material.",
  "Coastal properties, commercial sites, modern residential projects": "Propiedades costeras, sitios comerciales, proyectos residenciales modernos",
  "Self-mating galvanized steel panels": "Paneles de acero galvanizado autoensamblables",
  "Bronze, white, 6 ft panels, gates, and sloped runs": "Bronce, blanco, paneles de 6 pies, portones y tramos en pendiente",
  "Stock and lead time vary by color, quantity, and gate requirements": "El stock y el tiempo de entrega var\xEDan seg\xFAn color, cantidad y requisitos de port\xF3n",
  "Bronze 6 Ft": "Bronce 6 pies",
  "Bronze steel privacy panels for modern projects.": "Paneles de privacidad de acero en bronce para proyectos modernos.",
  "White 6 Ft": "Blanco 6 pies",
  "White steel privacy panels for clean residential and commercial designs.": "Paneles de privacidad de acero en blanco para dise\xF1os residenciales y comerciales limpios.",
  "Matching Gate": "Port\xF3n a juego",
  "Single / double": "Sencillo / doble",
  "Single and double gates available with hardware options.": "Portones sencillos y dobles disponibles con opciones de herrajes.",
  "Posts & Hardware": "Postes y herrajes",
  "Full package": "Paquete completo",
  "Posts, covers, hardware, and accessories for full material packages.": "Postes, cubiertas, herrajes y accesorios para paquetes completos de material.",
  "Based on EC Fence system requirements": "Seg\xFAn los requisitos del sistema EC Fence",
  "Single and double gates available by request": "Portones sencillos y dobles disponibles bajo pedido",
  "Bronze and white": "Bronce y blanco",
  "Coastal Privacy": "Privacidad costera",
  "Galvanized steel privacy panels for coastal and Florida properties.": "Paneles de privacidad de acero galvanizado para propiedades costeras y de Florida.",
  "Commercial Properties": "Propiedades comerciales",
  "Clean privacy fence option for commercial sites, enclosures, and shared spaces.": "Opci\xF3n de cerca de privacidad limpia para sitios comerciales, cerramientos y espacios compartidos.",
  "Modern Residential": "Residencial moderno",
  "Modern privacy fence material for homes, yards, and property lines.": "Material de cerca de privacidad moderno para hogares, patios y l\xEDmites de propiedad.",
  "EC Fence materials": "Materiales EC Fence",
  "EC Fence Materials?": "material EC Fence?",
  "Send us your linear footage, color, gate sizes, and project location. Our team will help prepare a material quote for pickup or delivery.": "Env\xEDanos tus pies lineales, color, medidas de port\xF3n y ubicaci\xF3n del proyecto. Nuestro equipo te ayudar\xE1 a preparar una cotizaci\xF3n de material para retiro o entrega.",
  // ── Gate shared (materials / hardware / lead time / specs / hardware cards / checklist) ──
  "Vinyl, aluminum, chain link, metal, and EC Fence options": "Opciones de vinilo, aluminio, malla cicl\xF3nica, metal y EC Fence",
  "Hinges, latches, drop rods, cane bolts, and accessories": "Bisagras, cerrojos, varillas de fijaci\xF3n, pasadores tipo bast\xF3n y accesorios",
  "Stock and lead time vary by size, material, color, and hardware": "El stock y el tiempo de entrega var\xEDan seg\xFAn tama\xF1o, material, color y herrajes",
  "Single swing, double swing, sliding, cantilever, rolling, and custom gates": "Portones batientes sencillos, dobles, corredizos, cantilever, rodantes y a medida",
  "Standard and custom sizes available depending on material": "Tama\xF1os est\xE1ndar y a medida disponibles seg\xFAn el material",
  "Available heights vary by gate material and style": "Las alturas disponibles var\xEDan seg\xFAn el material y el estilo del port\xF3n",
  "Hinges": "Bisagras",
  "All gate types": "Todos los tipos de port\xF3n",
  "Gate hinges available based on gate type, material, and post setup.": "Bisagras para port\xF3n disponibles seg\xFAn el tipo de port\xF3n, el material y la configuraci\xF3n de postes.",
  "Latches": "Cerrojos",
  "Access": "Acceso",
  "Latch options for walk gates, pool gates, and general access.": "Opciones de cerrojo para portones peatonales, portones de piscina y acceso general.",
  "Drop Rods / Cane Bolts": "Varillas de fijaci\xF3n / pasadores tipo bast\xF3n",
  "Double gates": "Portones dobles",
  "For double gates and added stability when closed.": "Para portones dobles y mayor estabilidad al cerrar.",
  "Posts & Caps": "Postes y tapas",
  "Gate posts, blank posts, terminal posts, and post caps available.": "Postes para port\xF3n, postes ciegos, postes terminales y tapas de poste disponibles.",
  "Opening size, preferably post-to-post": "Medida de la abertura, preferiblemente de poste a poste",
  "Gate height": "Altura del port\xF3n",
  "Material type": "Tipo de material",
  "Color": "Color",
  "Single or double gate": "Port\xF3n sencillo o doble",
  "Existing posts or new posts needed": "Postes existentes o postes nuevos necesarios",
  "Hardware needed": "Herrajes necesarios",
  "Pickup or delivery location": "Lugar de retiro o entrega",
  "Photo or drawing of the opening": "Foto o dibujo de la abertura",
  // ── Gate: Single Swing ──
  "Single swing gate materials & hardware": "Materiales y herrajes para port\xF3n batiente sencillo",
  "Single Swing Gates Built": "Portones batientes sencillos hechos",
  "for the Right Opening.": "para la abertura correcta.",
  "Single swing gates for pedestrian access, pool enclosures, side yards, and residential or commercial openings. Available in multiple materials, sizes, colors, and hardware options. Send us your opening size and project details for an accurate quote.": "Portones batientes sencillos para acceso peatonal, cerramientos de piscina, patios laterales y aberturas residenciales o comerciales. Disponibles en m\xFAltiples materiales, tama\xF1os, colores y opciones de herrajes. Env\xEDanos la medida de tu abertura y los detalles del proyecto para una cotizaci\xF3n precisa.",
  "Walk gates, side yards, pool enclosures, pedestrian access": "Portones peatonales, patios laterales, cerramientos de piscina, acceso peatonal",
  "Standard Walk Gate": "Port\xF3n peatonal est\xE1ndar",
  "Pedestrian": "Peatonal",
  "Common single gate sizes for pedestrian access.": "Tama\xF1os comunes de port\xF3n sencillo para acceso peatonal.",
  "Pool safety": "Seguridad de piscina",
  "Gate options for pool enclosures and safety requirements.": "Opciones de port\xF3n para cerramientos de piscina y requisitos de seguridad.",
  "Custom Opening Gate": "Port\xF3n de abertura a medida",
  "Made to size": "Hecho a medida",
  "Built to match your exact opening size.": "Fabricado para ajustarse a la medida exacta de tu abertura.",
  "Matching Material Gate": "Port\xF3n de material a juego",
  "All materials": "Todos los materiales",
  "Available in aluminum, vinyl, chain link, metal, and EC Fence styles.": "Disponible en estilos de aluminio, vinilo, malla cicl\xF3nica, metal y EC Fence.",
  "Pedestrian Access": "Acceso peatonal",
  "Single gates for walkways, side yards, and everyday access points.": "Portones sencillos para andadores, patios laterales y puntos de acceso diarios.",
  "Gate options for pool areas and code-related requirements.": "Opciones de port\xF3n para \xE1reas de piscina y requisitos relacionados con el c\xF3digo.",
  "Service Openings": "Aberturas de servicio",
  "Single or double gates for maintenance access, equipment, and utility areas.": "Portones sencillos o dobles para acceso de mantenimiento, equipos y \xE1reas de servicio.",
  "Single swing gate quote": "Cotizaci\xF3n de port\xF3n batiente sencillo",
  "Gate?": "port\xF3n?",
  "Send us your opening size, gate height, material, color, swing type, hardware needs, and project location. Photos or drawings help us quote the gate more accurately.": "Env\xEDanos la medida de la abertura, la altura del port\xF3n, el material, el color, el tipo de apertura, los herrajes que necesitas y la ubicaci\xF3n del proyecto. Las fotos o dibujos nos ayudan a cotizar el port\xF3n con mayor precisi\xF3n.",
  // ── Gate: Double Swing ──
  "Double swing gate materials & hardware": "Materiales y herrajes para port\xF3n batiente doble",
  "Double Swing Gates Built": "Portones batientes dobles hechos",
  "for Wider Openings.": "para aberturas m\xE1s anchas.",
  "Double swing gates for driveways, equipment access, and wider residential or commercial openings. Available in multiple materials, sizes, colors, and hardware options. Send us your opening size and project details for an accurate quote.": "Portones batientes dobles para entradas vehiculares, acceso de equipos y aberturas residenciales o comerciales m\xE1s anchas. Disponibles en m\xFAltiples materiales, tama\xF1os, colores y opciones de herrajes. Env\xEDanos la medida de tu abertura y los detalles del proyecto para una cotizaci\xF3n precisa.",
  "Driveways, equipment access, service entrances, wide openings": "Entradas vehiculares, acceso de equipos, entradas de servicio, aberturas anchas",
  "Standard Driveway Gate": "Port\xF3n vehicular est\xE1ndar",
  "Vehicle access": "Acceso vehicular",
  "Common double gate sizes for driveway and vehicle access.": "Tama\xF1os comunes de port\xF3n doble para entrada vehicular y acceso de veh\xEDculos.",
  "Privacy Drive Gate": "Port\xF3n vehicular de privacidad",
  "Solid panels": "Paneles s\xF3lidos",
  "Full privacy panels matched to vinyl or metal runs.": "Paneles de privacidad total a juego con corridas de vinilo o metal.",
  "Built to match your exact driveway opening.": "Fabricado para ajustarse a la medida exacta de tu entrada vehicular.",
  "Driveway Access": "Acceso vehicular",
  "Double gates that open wide for vehicles and equipment.": "Portones dobles que abren completamente para veh\xEDculos y equipos.",
  "Wide access for maintenance, utility, and delivery areas.": "Acceso amplio para \xE1reas de mantenimiento, servicios y entregas.",
  "Estate Entries": "Entradas principales",
  "Symmetrical double gates for a formal main entrance.": "Portones dobles sim\xE9tricos para una entrada principal formal.",
  "Double swing gate quote": "Cotizaci\xF3n de port\xF3n batiente doble",
  // ── Gate: Sliding ──
  "Sliding gate materials & hardware": "Materiales y herrajes para port\xF3n corredizo",
  "Sliding Gates Built": "Portones corredizos hechos",
  "for Tight Openings.": "para aberturas estrechas.",
  "Track-mounted sliding gates for tight or sloped driveways where a swing gate won\u2019t fit. Available in multiple materials, sizes, colors, and hardware options. Send us your opening size and project details for an accurate quote.": "Portones corredizos sobre riel para entradas estrechas o con pendiente donde un port\xF3n batiente no cabe. Disponibles en m\xFAltiples materiales, tama\xF1os, colores y opciones de herrajes. Env\xEDanos la medida de tu abertura y los detalles del proyecto para una cotizaci\xF3n precisa.",
  "Tight driveways, sloped sites, limited swing clearance": "Entradas estrechas, sitios con pendiente, espacio limitado para abatir",
  "Track-Mounted Slide": "Corredizo sobre riel",
  "Space-saving": "Ahorra espacio",
  "Slides parallel to the fence on a ground track.": "Se desliza paralelo a la cerca sobre un riel de piso.",
  "Privacy Slide Gate": "Port\xF3n corredizo de privacidad",
  "Full privacy panels for vinyl or metal runs.": "Paneles de privacidad total para corridas de vinilo o metal.",
  "Built to match your exact opening and layout.": "Fabricado para ajustarse a la medida y disposici\xF3n exactas de tu abertura.",
  "Available in chain link, vinyl, metal, and EC Fence styles.": "Disponible en estilos de malla cicl\xF3nica, vinilo, metal y EC Fence.",
  "Limited Swing Clearance": "Espacio limitado para abatir",
  "Slides parallel to the fence with no swing arc.": "Se desliza paralelo a la cerca sin arco de apertura.",
  "Sloped Driveways": "Entradas con pendiente",
  "Track options for grade changes and uneven ground.": "Opciones de riel para cambios de pendiente y terreno irregular.",
  "Daily-Use Access": "Acceso de uso diario",
  "Smooth operation for openings used many times a day.": "Operaci\xF3n suave para aberturas que se usan muchas veces al d\xEDa.",
  "Sliding gate quote": "Cotizaci\xF3n de port\xF3n corredizo",
  // ── Gate: Cantilever ──
  "Cantilever gate materials & hardware": "Materiales y herrajes para port\xF3n cantilever",
  "Cantilever Gates Built": "Portones cantilever hechos",
  "for Long Openings.": "para aberturas largas.",
  "Counter-balanced cantilever gates with no ground track, for sandy, coastal, or long commercial openings. Available in multiple materials, sizes, colors, and hardware options. Send us your opening size and project details for an accurate quote.": "Portones cantilever contrapesados sin riel en piso, para aberturas arenosas, costeras o comerciales largas. Disponibles en m\xFAltiples materiales, tama\xF1os, colores y opciones de herrajes. Env\xEDanos la medida de tu abertura y los detalles del proyecto para una cotizaci\xF3n precisa.",
  "Industrial yards, coastal sites, long openings, debris-prone areas": "Patios industriales, sitios costeros, aberturas largas, \xE1reas propensas a escombros",
  "No-Ground-Track Frame": "Marco sin riel en piso",
  "Counter-balanced": "Contrapesado",
  "Counter-balanced frame floats clear of the driveway.": "El marco contrapesado flota sin tocar la entrada vehicular.",
  "Coastal / Debris Sites": "Sitios costeros / con escombros",
  "No track": "Sin riel",
  "No ground track to jam with sand or debris.": "Sin riel en piso que se atasque con arena o escombros.",
  "Wide openings": "Aberturas anchas",
  "Built for wider single openings and telescoping runs.": "Fabricado para aberturas sencillas m\xE1s anchas y corridas telesc\xF3picas.",
  "Available in chain link, vinyl-coated, metal, and EC Fence styles.": "Disponible en estilos de malla cicl\xF3nica, recubierta de vinilo, metal y EC Fence.",
  "Industrial Perimeters": "Per\xEDmetros industriales",
  "Long openings for yards, storage, and commercial sites.": "Aberturas largas para patios, almacenamiento y sitios comerciales.",
  "Coastal & Sandy Sites": "Sitios costeros y arenosos",
  "No ground track to clear in sand or debris.": "Sin riel en piso que limpiar en arena o escombros.",
  "Wide Openings": "Aberturas anchas",
  "Single openings sized for larger entrances.": "Aberturas sencillas dimensionadas para entradas m\xE1s grandes.",
  "Cantilever gate quote": "Cotizaci\xF3n de port\xF3n cantilever",
  // ── Gate: Rolling ──
  "Rolling gate materials & hardware": "Materiales y herrajes para port\xF3n rodante",
  "Rolling Gates Built": "Portones rodantes hechos",
  "for High-Cycle Use.": "para uso de alto ciclo.",
  "Industrial rolling gates on ground rollers for high-cycle commercial perimeters, yards, and storage sites. Available in multiple materials, sizes, colors, and hardware options. Send us your opening size and project details for an accurate quote.": "Portones rodantes industriales sobre rodillos de piso para per\xEDmetros comerciales de alto ciclo, patios y sitios de almacenamiento. Disponibles en m\xFAltiples materiales, tama\xF1os, colores y opciones de herrajes. Env\xEDanos la medida de tu abertura y los detalles del proyecto para una cotizaci\xF3n precisa.",
  "Commercial perimeters, industrial yards, self-storage, high-cycle use": "Per\xEDmetros comerciales, patios industriales, self-storage, uso de alto ciclo",
  "Ground-Roller Frame": "Marco sobre rodillos de piso",
  "Heavy frame on ground rollers for daily commercial use.": "Marco pesado sobre rodillos de piso para uso comercial diario.",
  "Continuous duty": "Uso continuo",
  "Built for sites that open and close many times a day.": "Fabricado para sitios que abren y cierran muchas veces al d\xEDa.",
  "Automated-Ready": "Preparado para automatizaci\xF3n",
  "Set up for slide operators and access controls.": "Preparado para operadores corredizos y controles de acceso.",
  "Wide gates for yards, storage, and industrial sites.": "Portones anchos para patios, almacenamiento y sitios industriales.",
  "High-Cycle Access": "Acceso de alto ciclo",
  "Built for hundreds of open-and-close cycles a day.": "Fabricado para cientos de ciclos de apertura y cierre al d\xEDa.",
  "Heavy Vehicle Access": "Acceso de veh\xEDculos pesados",
  "Wide spans for trucks and equipment.": "Claros anchos para camiones y equipos.",
  "Rolling gate quote": "Cotizaci\xF3n de port\xF3n rodante"
});
Object.assign(ES_TR, {
  "Aluminum fence materials for residential, commercial, and community projects, with pool-code compliant options available where required. Choose from multiple heights and styles, with gates, posts, rails, and hardware included as part of your complete material package.": "Materiales de cerca de aluminio para proyectos residenciales, comerciales y comunitarios, con opciones que cumplen el c\xF3digo de piscinas donde se requiera. Elige entre m\xFAltiples alturas y estilos, con portones, postes, rieles y herrajes incluidos como parte de tu paquete completo de material.",
  "Smooth Bottom": "Base lisa",
  "Rake Bottom": "Base inclinada",
  "Puppy Picket": "Puppy picket",
  "Pool Code": "C\xF3digo de piscinas",
  "Clean line": "L\xEDnea limpia",
  "Slopes": "Pendientes",
  "Pet-friendly": "Ideal para mascotas",
  "Compliant": "Cumple c\xF3digo",
  "Flat bottom rail with no picket points below the rail.": "Riel inferior plano, sin puntas de picket debajo del riel.",
  "Follows grade changes and sloped runs without gaps.": "Sigue los cambios de nivel y los tramos inclinados sin dejar huecos.",
  "Tighter picket spacing at the bottom to keep small pets in.": "Separaci\xF3n de pickets m\xE1s cerrada abajo para contener mascotas peque\xF1as.",
  "Meets Florida pool barrier requirements for spacing and height.": "Cumple los requisitos de barrera de piscina de Florida en separaci\xF3n y altura.",
  "Vinyl earns its keep where privacy, low upkeep, and clean looks meet.": "El vinilo se gana su lugar donde se cruzan la privacidad, el bajo mantenimiento y un aspecto limpio.",
  "Aluminum earns its keep where code, curb appeal, and long runs meet.": "El aluminio se gana su lugar donde se cruzan el c\xF3digo, la buena presencia y los tramos largos.",
  "Chain link earns its keep where security, scale, and budget meet.": "La malla cicl\xF3nica se gana su lugar donde se cruzan la seguridad, la escala y el presupuesto.",
  "Metal earns its keep where privacy, strength, and modern looks meet.": "El metal se gana su lugar donde se cruzan la privacidad, la resistencia y el dise\xF1o moderno.",
  "EC Fence earns its keep where coastal wind, privacy, and speed meet.": "EC Fence se gana su lugar donde se cruzan el viento costero, la privacidad y la rapidez.",
  "Full privacy, zero painting": "Privacidad total, sin pintura",
  "Clean look for pool areas": "Aspecto limpio para \xE1reas de piscina",
  "Consistent community styles": "Estilos uniformes para comunidades",
  "Meets pool barrier code": "Cumple el c\xF3digo de barreras de piscina",
  "Curb appeal, low upkeep": "Buena presencia, poco mantenimiento",
  "Built for shared spaces": "Hecho para espacios compartidos",
  "Proven perimeter security": "Seguridad perimetral comprobada",
  "Courts, fields and parks": "Canchas, campos y parques",
  "Long runs, low cost": "Tramos largos, bajo costo",
  "Solid-board look in metal": "Aspecto de tabla s\xF3lida en metal",
  "Screens and enclosures": "Pantallas y cerramientos",
  "Privacy plus durability": "Privacidad y durabilidad",
  "Built for salt air": "Hecho para el aire salino",
  "Clean commercial screening": "Cerramiento comercial limpio",
  "Modern panel look": "Aspecto de panel moderno"
});
Object.assign(ES_TR, {
  "Everyday walk-through": "Paso peatonal de todos los d\xEDas",
  "Maintenance & utility": "Mantenimiento y servicios",
  "Opens wide for vehicles": "Abre amplio para veh\xEDculos",
  "Formal main entrance": "Entrada principal formal",
  "No swing arc needed": "Sin arco de apertura",
  "Handles grade changes": "Maneja cambios de nivel",
  "Smooth daily operation": "Operaci\xF3n diaria suave",
  "Built for long openings": "Hecho para aberturas largas",
  "No ground track": "Sin riel en el piso",
  "Wide single spans": "Tramos anchos de una sola pieza",
  "Yards, storage, industrial": "Patios, almacenes e industria",
  "Hundreds of cycles a day": "Cientos de ciclos al d\xEDa",
  "Trucks and equipment": "Camiones y equipo"
});
Object.assign(ES_TR, {
  "Modern, Original, and P1 styles, with matching gates": "Estilos Modern, Original y P1, con portones a juego",
  "6' and 8'": "6' y 8'",
  "Modern, Original, and P1": "Modern, Original y P1",
  "Available in Modern, Original, and P1 styles. Custom fabrication is available for gates only.": "Disponible en estilos Modern, Original y P1. La fabricaci\xF3n a medida est\xE1 disponible solo para portones.",
  "Panel": "Panel",
  "Contemporary": "Contempor\xE1neo",
  "DuraFence P1 privacy panel profile for residential and commercial runs.": "Perfil de panel de privacidad DuraFence P1 para tramos residenciales y comerciales.",
  "The original DuraFence full-privacy board profile.": "El perfil de tabla de privacidad total original de DuraFence.",
  "Clean-lined DuraFence profile for contemporary projects.": "Perfil DuraFence de l\xEDneas limpias para proyectos contempor\xE1neos."
});
Object.assign(ES_TR, {
  "12 ft Opening": "Abertura de 12 ft",
  "24 ft Opening": "Abertura de 24 ft",
  "30 ft Opening": "Abertura de 30 ft",
  "Custom Opening": "Abertura a medida",
  "Single Swing Gate": "Port\xF3n batiente sencillo",
  "Double Swing Gate": "Port\xF3n batiente doble",
  "Sliding Gate": "Port\xF3n corredizo",
  "Cantilever Gate": "Port\xF3n cantilever",
  "Vinyl-Coated Gate": "Port\xF3n recubierto de vinilo",
  "Chain Link Gate": "Port\xF3n de malla cicl\xF3nica",
  "Aluminum Gate": "Port\xF3n de aluminio",
  "Metal Gate": "Port\xF3n de metal",
  "Metal / DuraFence Gate": "Port\xF3n de Metal / DuraFence",
  "EC Fence Gate": "Port\xF3n EC Fence",
  "Cape Coral Residential": "Residencial Cape Coral",
  "Residential Walk Gate": "Port\xF3n peatonal residencial",
  "Pool Enclosure Gate": "Port\xF3n de cerramiento de piscina",
  "Chain Link Service Gate": "Port\xF3n de servicio de malla cicl\xF3nica",
  "Metal Privacy Gate": "Port\xF3n de privacidad de metal",
  "Driveway Gate": "Port\xF3n vehicular",
  "Estate Entry": "Entrada de residencia",
  "Service Entrance": "Entrada de servicio",
  "Tight Driveway": "Entrada angosta",
  "Sloped Lot Slide": "Corredizo en lote inclinado",
  "Commercial Slide": "Corredizo comercial",
  "Industrial Yard": "Patio industrial",
  "Coastal Perimeter": "Per\xEDmetro costero",
  "Storage Facility": "Instalaci\xF3n de almacenamiento",
  "Commercial Entrance": "Entrada comercial",
  "Self-Storage Facility": "Autoalmacenamiento",
  "Transit Hub": "Centro de tr\xE1nsito",
  "Warehouse Entrance": "Entrada de bodega",
  "Commercial Perimeter": "Per\xEDmetro comercial",
  "PVC privacy walk gate, white": "Port\xF3n peatonal de privacidad de PVC, blanco",
  "Aluminum walk gate, self-closing hardware": "Port\xF3n peatonal de aluminio, herrajes de cierre autom\xE1tico",
  "Pool-code aluminum gate, magnetic latch": "Port\xF3n de aluminio c\xF3digo de piscinas, cerrojo magn\xE9tico",
  "Vinyl gate, sand, matching run": "Port\xF3n de vinilo, arena, a juego con el tramo",
  "Vinyl-coated black service gate": "Port\xF3n de servicio negro recubierto de vinilo",
  "Metal privacy gate, matching panels": "Port\xF3n de privacidad de metal, paneles a juego",
  "Vinyl gate, sand, drop rod + center latch": "Port\xF3n de vinilo, arena, varilla y cerrojo central",
  "Aluminum double drive gate, residential grade": "Port\xF3n doble vehicular de aluminio, grado residencial",
  "Vinyl privacy gate, white, matching panels": "Port\xF3n de privacidad de vinilo, blanco, paneles a juego",
  "Galvanized swing gate, cane bolt": "Port\xF3n abatible galvanizado, pasador de piso",
  "Metal privacy double gate, matching run": "Port\xF3n doble de privacidad de metal, a juego con el tramo",
  "Track-mounted slide gate, manual operation": "Port\xF3n corredizo sobre riel, operaci\xF3n manual",
  "Galvanized slide gate, twin rollers": "Port\xF3n corredizo galvanizado, rodillos dobles",
  "Vinyl-coated slide gate, ground track": "Port\xF3n corredizo recubierto de vinilo, riel en el piso",
  "Metal privacy slide gate, matching run": "Port\xF3n corredizo de privacidad de metal, a juego con el tramo",
  "EC Fence slide gate, commercial spec": "Port\xF3n corredizo EC Fence, especificaci\xF3n comercial",
  "Galvanized cantilever gate, V-rollers": "Port\xF3n cantilever galvanizado, rodillos en V",
  "Vinyl-coated cantilever, salt-rated rollers": "Cantilever recubierto de vinilo, rodillos aptos para salitre",
  "PVC privacy cantilever gate, white": "Port\xF3n cantilever de privacidad de PVC, blanco",
  "DuraFence cantilever gate, privacy face": "Port\xF3n cantilever DuraFence, cara de privacidad",
  "Custom cantilever, telescoping span": "Cantilever a medida, tramo telesc\xF3pico",
  "Galvanized rolling gate, ground rollers": "Port\xF3n rodante galvanizado, rodillos de piso",
  "Heavy rolling gate, high-cycle frame": "Port\xF3n rodante pesado, marco de alto ciclo",
  "Rolling gate, continuous-duty hardware": "Port\xF3n rodante, herrajes de uso continuo",
  "Vinyl-coated rolling gate, visual perimeter": "Port\xF3n rodante recubierto de vinilo, per\xEDmetro visual",
  "Rolling gate, wide vehicle access": "Port\xF3n rodante, acceso vehicular amplio"
});
Object.assign(ES_TR, {
  "for Any Surface.": "para cualquier superficie.",
  "Cantilever gates are suspended in the air on internal rollers, the frame never touches the ground, which is their biggest strength. Designed to work over any surface, with openings up to 30 feet wide including the counterweight section. Send us your opening size and project details for an accurate quote.": "Los portones cantilever se sostienen en el aire sobre rodillos internos: el marco nunca toca el suelo, y esa es su mayor fortaleza. Dise\xF1ados para funcionar sobre cualquier superficie, con aberturas de hasta 30 pies de ancho incluyendo la secci\xF3n de contrapeso. Env\xEDanos la medida de tu abertura y los detalles del proyecto para una cotizaci\xF3n precisa.",
  "Driveways and openings over any surface, industrial yards, daily-use access": "Entradas y aberturas sobre cualquier superficie, patios industriales, acceso de uso diario",
  "Max Width": "Ancho m\xE1ximo",
  "30' including the counterweight section": "30' incluyendo la secci\xF3n de contrapeso",
  "Cantilever rollers, latches, and receiver posts, no hinges": "Rodillos cantilever, cerrojos y postes receptores, sin bisagras",
  "Cantilever": "Cantilever",
  "Specifications.": "Especificaciones.",
  "Cantilever is the gate type, every cantilever gate is suspended in the air. These are the specifications that define your build.": "Cantilever es el tipo de port\xF3n: todo port\xF3n cantilever se sostiene en el aire. Estas son las especificaciones que definen tu proyecto.",
  "Suspended Frame": "Marco suspendido",
  "No ground contact": "Sin contacto con el suelo",
  "The gate hangs from internal rollers and floats over the opening, nothing touches the ground.": "El port\xF3n cuelga de rodillos internos y flota sobre la abertura: nada toca el suelo.",
  "Works Over Any Surface": "Funciona sobre cualquier superficie",
  "All driveways": "Todas las entradas",
  "Concrete, gravel, pavers, grass or uneven ground, the surface below does not matter.": "Concreto, grava, adoquines, pasto o terreno irregular: la superficie de abajo no importa.",
  "Max Width 30'": "Ancho m\xE1ximo 30'",
  "With counterweight": "Con contrapeso",
  "Openings up to 30 feet wide, counting the counterbalance section.": "Aberturas de hasta 30 pies de ancho, contando la secci\xF3n de contrapeso.",
  "Material Options": "Opciones de material",
  "Cantilever Rollers": "Rodillos cantilever",
  "Load-bearing": "Soporte de carga",
  "Internal roller trucks carry the gate, the frame rides on them, suspended in the air.": "Los carros de rodillos internos cargan el port\xF3n: el marco viaja sobre ellos, suspendido en el aire.",
  "Latches & Receivers": "Cerrojos y receptores",
  "Closure": "Cierre",
  "Cantilever latch and receiver post catch the nose of the gate when closed.": "El cerrojo cantilever y el poste receptor sujetan la nariz del port\xF3n al cerrar.",
  "Counterbalance Section": "Secci\xF3n de contrapeso",
  "Structure": "Estructura",
  "The tail section counterweights the gate across the opening.": "La secci\xF3n de cola contrapesa el port\xF3n a lo largo de la abertura.",
  "Guide & Support Posts": "Postes gu\xEDa y de soporte",
  "Heavy posts carry the rollers, a cantilever gate uses no hinges.": "Postes pesados cargan los rodillos: un port\xF3n cantilever no usa bisagras.",
  "Any Surface": "Cualquier superficie",
  "Designed for various surfaces, the suspended frame clears them all.": "Dise\xF1ado para varias superficies: el marco suspendido las libra todas.",
  "Single openings up to 30' including the counterweight.": "Aberturas sencillas de hasta 30' incluyendo el contrapeso.",
  "Up to 30' spans": "Claros de hasta 30'",
  "Gate Type": "Tipo de port\xF3n",
  "Cantilever, suspended in the air on rollers, no ground track": "Cantilever: suspendido en el aire sobre rodillos, sin riel en el piso",
  "Cantilever rollers, latch, and receiver / guide posts, no hinges": "Rodillos cantilever, cerrojo y postes receptores/gu\xEDa, sin bisagras",
  "Distribution Yard": "Patio de distribuci\xF3n",
  "Custom cantilever, 30 ft with counterweight": "Cantilever a medida, 30 ft con contrapeso"
});
Object.assign(ES_TR, {
  "on Big Wheels.": "sobre llantas grandes.",
  "What defines a rolling gate is its big rubber wheels, they carry the gate across the opening and are designed for a variety of surfaces, including grass and uneven ground. Guide rollers mount on the posts. Send us your opening size and project details for an accurate quote.": "Lo que define a un port\xF3n rodante son sus llantas grandes de goma: cargan el port\xF3n a lo largo de la abertura y est\xE1n dise\xF1adas para una variedad de superficies, incluyendo c\xE9sped y terreno irregular. Los rodillos gu\xEDa van montados en los postes. Env\xEDanos la medida de tu abertura y los detalles del proyecto para una cotizaci\xF3n precisa.",
  "Commercial perimeters, industrial yards, grass and uneven surfaces": "Per\xEDmetros comerciales, patios industriales, c\xE9sped y superficies irregulares",
  "30' total width, like all specialty gates": "30' de ancho total, como todas las puertas especiales",
  "Chain link (recommended); other materials require a double frame": "Malla cicl\xF3nica (recomendada); otros materiales requieren doble marco",
  "Rolling gate kit, LOCK N' LATCH rolling gate latch (PS)": "Kit de port\xF3n rodante, cerrojo LOCK N' LATCH para port\xF3n rodante (PS)",
  "Rolling Gate": "Port\xF3n rodante",
  "Rolling is the gate type, the big wheels are what define it. These are the specifications that shape your build.": "Rodante es el tipo de port\xF3n: las llantas grandes son lo que lo define. Estas son las especificaciones de tu proyecto.",
  "Big Rubber Wheels": "Llantas grandes de goma",
  "Signature feature": "Rasgo distintivo",
  "Large wheels carry the gate across the opening, made to roll over grass and uneven surfaces.": "Las llantas grandes cargan el port\xF3n a lo largo de la abertura, hechas para rodar sobre c\xE9sped y superficies irregulares.",
  "Post-Mounted Rollers": "Rodillos montados en postes",
  "Guides": "Gu\xEDas",
  "Guide rollers mount on the posts, not the ground, keeping the gate aligned as it rolls.": "Los rodillos gu\xEDa van en los postes, no en el suelo, y mantienen el port\xF3n alineado mientras rueda.",
  "Posts for Automated Gates": "Postes para portones mec\xE1nicos",
  "Prep only": "Solo preparaci\xF3n",
  "We install the posts and framework for powered gates, we do not build the mechanical operators themselves.": "Instalamos los postes y la estructura para portones mec\xE1nicos; no fabricamos los operadores mec\xE1nicos como tal.",
  "Material & Frame": "Material y marco",
  "Chain link first": "Malla cicl\xF3nica primero",
  "Chain link is the recommended build; other materials require a double frame.": "La malla cicl\xF3nica es la opci\xF3n recomendada; otros materiales requieren doble marco.",
  "Rolling Gate Kit": "Kit de port\xF3n rodante",
  "Core kit": "Kit principal",
  "Complete rolling gate kit with the big wheels that define this gate type.": "Kit completo de port\xF3n rodante con las llantas grandes que definen este tipo de port\xF3n.",
  "Lock N' Latch": "Lock N' Latch",
  "Rolling gate latch \xB7 PS": "Cerrojo para port\xF3n rodante \xB7 PS",
  "LOCK N' LATCH rolling gate latch (PS), the closure made for rolling gates.": "Cerrojo LOCK N' LATCH para port\xF3n rodante (PS): el cierre hecho para portones rodantes.",
  "Guide Rollers": "Rodillos gu\xEDa",
  "Post-mounted": "Montados en postes",
  "Rollers mount on the posts to keep the gate tracking straight as it rolls.": "Los rodillos van en los postes para que el port\xF3n ruede derecho.",
  "Posts & Framework": "Postes y estructura",
  "Gate posts and framework, no hinges and no drop rods on a rolling gate.": "Postes y estructura del port\xF3n: un port\xF3n rodante no lleva bisagras ni varillas.",
  "Grass & Uneven Surfaces": "C\xE9sped y superficies irregulares",
  "The big wheels roll over grass, gravel, and surfaces that are not perfectly smooth.": "Las llantas grandes ruedan sobre c\xE9sped, grava y superficies que no son perfectamente lisas.",
  "Rolls over grass": "Rueda sobre c\xE9sped",
  "Openings for trucks and equipment.": "Aberturas para camiones y equipo.",
  "Up to 30' total": "Hasta 30' en total",
  "Rolling, big rubber wheels roll the gate across the opening": "Rodante: llantas grandes de goma ruedan el port\xF3n a lo largo de la abertura",
  "Chain link recommended; vinyl, aluminum, metal, and EC Fence require a double frame": "Malla cicl\xF3nica recomendada; vinilo, aluminio, metal y EC Fence requieren doble marco",
  "Rolling gate kit, LOCK N' LATCH rolling gate latch (PS), no hinges, no drop rods": "Kit de port\xF3n rodante, cerrojo LOCK N' LATCH (PS), sin bisagras ni varillas",
  "Heavy chain link rolling gate": "Port\xF3n rodante pesado de malla cicl\xF3nica",
  "Vinyl-coated rolling gate, double frame": "Port\xF3n rodante recubierto de vinilo, doble marco",
  "Metal rolling gate, double frame": "Port\xF3n rodante de metal, doble marco",
  "EC Fence rolling gate, double frame": "Port\xF3n rodante EC Fence, doble marco"
});
(() => {
  const hash = window.location.hash;
  if (!hash || hash.length < 2) return;
  let tries = 0;
  const id = setInterval(() => {
    const el = document.getElementById(hash.slice(1));
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      clearInterval(id);
    } else if (++tries > 40) clearInterval(id);
  }, 150);
})();
Object.assign(ES_TR, {
  "Vinyl privacy fence, 6 ft, white": "Cerca de privacidad de vinilo, 6 ft, blanca",
  "Vinyl semi-privacy, alternating pickets, sand": "Vinilo semi-privacidad, pickets alternados, arena",
  "Vinyl privacy with gate, white": "Privacidad de vinilo con port\xF3n, blanco",
  "Vinyl semi-privacy, community standard": "Vinilo semi-privacidad, est\xE1ndar comunitario",
  "Vinyl privacy, two-tone white and gray": "Privacidad de vinilo, bicolor blanco y gris",
  "Horizontal metal board privacy, black": "Privacidad de tablero met\xE1lico horizontal, negro",
  "Metal fence, 3-rail, brown": "Cerca met\xE1lica, 3 rieles, marr\xF3n",
  "Metal fence, 3-rail, black": "Cerca met\xE1lica, 3 rieles, negra",
  "Metal fence, 2-rail, white": "Cerca met\xE1lica, 2 rieles, blanca",
  "Metal board privacy, 6 ft, community standard": "Privacidad de tablero met\xE1lico, 6 ft, est\xE1ndar comunitario",
  "EC Fence panels, 6 ft, bronze": "Paneles EC Fence, 6 ft, bronce",
  "EC Fence panels, 6 ft, white": "Paneles EC Fence, 6 ft, blanco",
  "EC Fence panels, 6 ft, community standard": "Paneles EC Fence, 6 ft, est\xE1ndar comunitario"
});
(function honorHashAnchor() {
  var hash = window.location.hash;
  if (!hash || hash.length < 2) return;
  try {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  } catch (e) {
  }
  var id = decodeURIComponent(hash.slice(1));
  var cancelled = false, attempts = 0, findTimer = null, pinTimer = null;
  function stop() {
    cancelled = true;
    if (findTimer) {
      clearInterval(findTimer);
      findTimer = null;
    }
    if (pinTimer) {
      clearInterval(pinTimer);
      pinTimer = null;
    }
  }
  ["wheel", "touchstart", "keydown", "pointerdown"].forEach(function(ev) {
    window.addEventListener(ev, stop, { passive: true, once: true });
  });
  function pin() {
    var el = document.getElementById(id);
    if (!el) return false;
    var offset = parseFloat(window.getComputedStyle(el).scrollMarginTop) || 0;
    var top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo(0, Math.max(0, Math.round(top)));
    return true;
  }
  function settle() {
    if (cancelled) return true;
    if (!pin()) return false;
    if (findTimer) {
      clearInterval(findTimer);
      findTimer = null;
    }
    pinTimer = setInterval(function() {
      if (cancelled) {
        clearInterval(pinTimer);
        pinTimer = null;
        return;
      }
      pin();
    }, 120);
    setTimeout(stop, 2500);
    return true;
  }
  if (!settle()) {
    findTimer = setInterval(function() {
      if (cancelled) {
        clearInterval(findTimer);
        findTimer = null;
        return;
      }
      if (settle()) return;
      if (++attempts > 100) {
        clearInterval(findTimer);
        findTimer = null;
      }
    }, 50);
  }
})();
const WFS_LEAD_TO = [
  "antonello@westernfencesupply.com",
  "crm+A1AN6482169aaf302a7fe4.ls.32@bcc.marketing360.com"
];
async function submitLead(formEl, meta) {
  const fd = new FormData(formEl);
  fd.append("_form", meta.form || "lead");
  fd.append("_subject", meta.subject || "Website lead");
  fd.append("_page", location.pathname.split("/").filter(Boolean).pop() || "homepage");
  fd.append("_url", location.href);
  const endpoint = window.WFS_FORM_ENDPOINT;
  if (endpoint) {
    const res = await fetch(endpoint, {
      method: "POST",
      body: fd,
      headers: window.WFS_NONCE ? { "X-WP-Nonce": window.WFS_NONCE } : {}
    });
    let data = {};
    try {
      data = await res.json();
    } catch (err) {
    }
    if (!res.ok || !data.ok) {
      throw new Error(data.message || "No pudimos enviar el formulario.");
    }
    return data;
  }
  const lines = [];
  fd.forEach((value, key) => {
    if (key.charAt(0) === "_") return;
    if (typeof value === "string" && value.trim()) lines.push(key + ": " + value.trim());
    else if (value && value.name) lines.push(key + ": " + value.name + " (adjuntar manualmente)");
  });
  lines.push("", "Enviado desde: " + location.href);
  window.location.href = "mailto:" + WFS_LEAD_TO.join(",") + "?subject=" + encodeURIComponent(meta.subject || "Website lead") + "&body=" + encodeURIComponent(lines.join("\n"));
  return { ok: true, fallback: true };
}
function openLiveChat(e) {
  var api = window.Tawk_API;
  if (!api) {
    return false;
  }
  if (e && e.preventDefault) {
    e.preventDefault();
  }
  function open() {
    window.__wfsChatOpened = true;
    try {
      document.documentElement.classList.add("wfs-chat-open");
    } catch (err) {
    }
    try {
      if (typeof window.Tawk_API.showWidget === "function") window.Tawk_API.showWidget();
    } catch (err) {
    }
    try {
      window.Tawk_API.maximize();
    } catch (err) {
    }
  }
  if (typeof api.maximize === "function") {
    open();
  } else {
    api.onLoad = open;
  }
  return true;
}
Object.assign(window, { WFS_LEAD_TO, submitLead, openLiveChat });
