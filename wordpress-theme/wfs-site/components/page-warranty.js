const WarrantyHero = () => {
  const t = useT();
  return /* @__PURE__ */ React.createElement(
    PageHero,
    {
      crumbs: [[t("Home", "Inicio"), "Homepage.html"], [t("Warranty", "Garant\xEDa"), null]],
      eyebrow: t("Warranty \xB7 Coverage", "Garant\xEDa \xB7 Cobertura"),
      title: t("Warranty coverage", "Cobertura de garant\xEDa"),
      accent: t("that varies by system.", "que var\xEDa seg\xFAn el sistema."),
      subtitle: t(
        "Material-specific terms below, written in plain English. Manufacturer-backed, transferable to the next owner, and claimable from either yard.",
        "T\xE9rminos espec\xEDficos por material abajo, en lenguaje claro. Respaldada por el fabricante, transferible al siguiente due\xF1o, y reclamable desde cualquier sucursal."
      ),
      image: "https://crpozo.github.io/wfs-design-preview/assets/ec-fence.jpg"
    }
  );
};
const WarrantyHighlights = () => {
  const t = useT();
  const cards = [
    {
      title: { EN: "Manufacturer-backed", ES: "Respaldada por el fabricante" },
      body: { EN: "Every system we sell is covered by the original manufacturer warranty plus our in-house workmanship guarantee on welded and fabricated assemblies.", ES: "Cada sistema que vendemos est\xE1 cubierto por la garant\xEDa original del fabricante m\xE1s nuestra garant\xEDa interna de mano de obra en ensambles soldados y fabricados." },
      svg: /* @__PURE__ */ React.createElement("svg", { width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M12 3 L19 6 V12 Q19 17 12 21 Q5 17 5 12 V6 Z" }), /* @__PURE__ */ React.createElement("path", { d: "M9 12 L11 14 L15 10" }))
    },
    {
      title: { EN: "Transferable", ES: "Transferible" },
      body: { EN: "Sell the house, the warranty goes with it. New owners can register with original PO + closing date and keep full coverage.", ES: "Vendes la casa, la garant\xEDa va con ella. Los nuevos due\xF1os se registran con la PO original + fecha de cierre y mantienen cobertura completa." },
      svg: /* @__PURE__ */ React.createElement("svg", { width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M4 12 H20" }), /* @__PURE__ */ React.createElement("path", { d: "M14 6 L20 12 L14 18" }), /* @__PURE__ */ React.createElement("path", { d: "M10 18 L4 12 L10 6" }))
    },
    {
      title: { EN: "Honored at both yards", ES: "V\xE1lida en ambas sucursales" },
      body: { EN: "Claim from Fort Myers or Port Charlotte. Same rep network, same SKUs in stock, same turnaround on warranty replacements.", ES: "Reclama desde Fort Myers o Port Charlotte. La misma red de representantes, mismos SKUs en stock, mismos plazos en reemplazos de garant\xEDa." },
      svg: /* @__PURE__ */ React.createElement("svg", { width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M12 21 Q4 14 4 9 A8 8 0 0 1 20 9 Q20 14 12 21 Z" }), /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "9.5", r: "2.6" }))
    }
  ];
  return /* @__PURE__ */ React.createElement("section", { style: { background: "var(--white)", padding: "120px 0" } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement(
    PageSectionHeader,
    {
      number: "01",
      label: t("At a glance", "De un vistazo"),
      title: t("What you get", "Qu\xE9 obtienes"),
      accent: t("on day one.", "desde el d\xEDa uno."),
      sub: t(
        "Coverage starts the day material leaves the yard. Register your PO online or by phone, both work.",
        "La cobertura empieza el d\xEDa que el material sale de la sucursal. Registra tu orden en l\xEDnea o por tel\xE9fono, ambas funcionan."
      )
    }
  ), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 } }, cards.map((c, i) => /* @__PURE__ */ React.createElement("article", { key: i, style: {
    background: "var(--white)",
    border: "1.5px solid var(--ink)",
    padding: "32px 30px",
    minHeight: 240
  } }, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 24, color: "var(--tangerine)" } }, c.svg), /* @__PURE__ */ React.createElement("h3", { className: "display", style: {
    margin: "0 0 12px",
    fontSize: 20.5,
    letterSpacing: "-0.005em",
    color: "var(--ink)"
  } }, t(c.title)), /* @__PURE__ */ React.createElement("p", { className: "mono", style: {
    margin: 0,
    fontSize: 14.5,
    lineHeight: 1.65,
    color: "var(--charcoal)"
  } }, t(c.body)))))));
};
const WarrantyMaterialTable = () => {
  const t = useT();
  return /* @__PURE__ */ React.createElement("section", { style: { background: "#ffffff", padding: "120px 0" } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement(
    PageSectionHeader,
    {
      number: "02",
      label: t("Coverage by material", "Cobertura por material"),
      title: t("Terms vary by system,", "Los t\xE9rminos var\xEDan por sistema,"),
      accent: t("not by yard.", "no por sucursal."),
      sub: t(
        "The full legal warranty doc is on the spec sheet for each system. The table below is the short version.",
        "El documento legal completo de la garant\xEDa est\xE1 en la hoja de specs de cada sistema. La tabla abajo es la versi\xF3n corta."
      ),
      link: [t("Download specs", "Descargar specs"), "specs.html"]
    }
  ), /* @__PURE__ */ React.createElement("div", { style: { border: "1.5px solid var(--ink)", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "grid",
    gridTemplateColumns: "1.2fr 1fr 1fr 1.2fr",
    background: "var(--ink)",
    color: "var(--white)"
  } }, [
    { EN: "System", ES: "Sistema" },
    { EN: "Structural", ES: "Estructural" },
    { EN: "Finish", ES: "Acabado" },
    { EN: "Notes", ES: "Notas" }
  ].map((h, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "mono", style: {
    padding: "16px 18px",
    fontSize: 14,
    fontWeight: 700,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    borderLeft: i === 0 ? "none" : "1px solid rgba(255,255,255,0.15)"
  } }, t(h)))), [
    ["Vinyl / PVC", { EN: "Lifetime", ES: "De por vida" }, { EN: "Lifetime UV", ES: "UV de por vida" }, { EN: "Catalyst-extruded. No fading, peeling or rotting.", ES: "Extruido Catalyst. No se decolora, no se pela, no se pudre." }],
    ["Aluminum", { EN: "Lifetime", ES: "De por vida" }, { EN: "20-year finish", ES: "Acabado 20 a\xF1os" }, { EN: "Powder-coat over marine-grade extrusion.", ES: "Pintura en polvo sobre extrusi\xF3n grado marino." }],
    [{ EN: "Chain Link \xB7 Galv", ES: "Malla \xB7 Galv" }, { EN: "Rust-thru", ES: "Contra perforaci\xF3n por \xF3xido" }, "\u2014", { EN: "ASTM A392 zinc-coat. Salt-air rated.", ES: "Galvanizado ASTM A392. Resistente al aire salino." }],
    [{ EN: "Chain Link \xB7 PVC", ES: "Malla \xB7 PVC" }, { EN: "Rust-thru", ES: "Contra perforaci\xF3n por \xF3xido" }, { EN: "15-year color", ES: "Color 15 a\xF1os" }, { EN: "Black, green PVC-coated.", ES: "Recubrimiento PVC negro o verde." }],
    ["Metal / DuraFence", { EN: "20 years", ES: "20 a\xF1os" }, { EN: "10-year finish", ES: "Acabado 10 a\xF1os" }, { EN: "HVHZ-rated aluminum board.", ES: "Tabla de aluminio con clasificaci\xF3n HVHZ." }],
    ["EC Fence", { EN: "Lifetime", ES: "De por vida" }, { EN: "20-year finish", ES: "Acabado 20 a\xF1os" }, { EN: "Self-mating galv steel, Exp. C wind-load.", ES: "Acero galv. autoensamblable, carga e\xF3lica Exp. C." }],
    [{ EN: "Gates \xB7 welded", ES: "Portones \xB7 soldados" }, { EN: "10 years", ES: "10 a\xF1os" }, { EN: "Per system", ES: "Por sistema" }, { EN: "WFS in-house weld + hardware coverage.", ES: "Cobertura de soldadura en planta WFS + herrajes." }]
  ].map((row, ri) => /* @__PURE__ */ React.createElement("div", { key: ri, style: {
    display: "grid",
    gridTemplateColumns: "1.2fr 1fr 1fr 1.2fr",
    background: ri % 2 === 0 ? "var(--white)" : "#ffffff",
    borderTop: "1px solid rgba(0,16,17,0.08)"
  } }, row.map((cell, ci) => /* @__PURE__ */ React.createElement("div", { key: ci, style: {
    padding: "16px 18px",
    fontSize: 15,
    lineHeight: 1.5,
    color: ci === 0 ? "var(--ink)" : "var(--ink)",
    fontWeight: ci === 0 ? 700 : 400,
    fontFamily: ci === 0 ? "var(--mono)" : "var(--sans)",
    letterSpacing: ci === 0 ? "0.06em" : "normal",
    textTransform: ci === 0 ? "uppercase" : "none",
    borderLeft: ci === 0 ? "none" : "1px solid rgba(0,16,17,0.08)"
  } }, typeof cell === "string" ? cell : t(cell))))))));
};
const WarrantyExclusions = () => {
  const t = useT();
  const items = [
    [{ EN: "Impact damage", ES: "Da\xF1o por impacto" }, { EN: "Vehicles, fallen trees, lawn equipment, intentional impact.", ES: "Veh\xEDculos, \xE1rboles ca\xEDdos, equipo de jard\xEDn, impacto intencional." }],
    [{ EN: "Acts of God beyond rated wind load", ES: "Eventos de fuerza mayor por encima de la carga e\xF3lica nominal" }, { EN: "Hurricane damage above the system's rated wind speed (HVHZ rating per system).", ES: "Da\xF1o por hurac\xE1n por encima de la velocidad de viento nominal del sistema (clasificaci\xF3n HVHZ por sistema)." }],
    [{ EN: "Improper installation", ES: "Instalaci\xF3n inadecuada" }, { EN: "Coverage assumes WFS spec install. Use a certified installer to keep terms intact.", ES: "La cobertura asume instalaci\xF3n seg\xFAn specs WFS. Usa un instalador certificado para mantener los t\xE9rminos vigentes." }],
    [{ EN: "Normal cosmetic wear", ES: "Desgaste cosm\xE9tico normal" }, { EN: "Scratches, dings, scuffs and minor surface abrasion from normal use.", ES: "Rayones, golpes menores, marcas y abrasi\xF3n superficial menor por uso normal." }],
    [{ EN: "Vandalism + theft", ES: "Vandalismo + robo" }, { EN: "Pickets cut, mesh sliced, hardware removed.", ES: "Pickets cortados, malla rasgada, herrajes retirados." }],
    [{ EN: "Modified material", ES: "Material modificado" }, { EN: "Posts cut down on-site, panels repainted with non-spec finish, etc.", ES: "Postes recortados en obra, paneles repintados con acabados no autorizados, etc." }]
  ];
  return /* @__PURE__ */ React.createElement("section", { style: { background: "var(--white)", padding: "120px 0" } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement(
    PageSectionHeader,
    {
      number: "03",
      label: t("Exclusions", "Exclusiones"),
      title: t("What's not covered.", "Qu\xE9 no est\xE1 cubierto."),
      accent: t("No surprises.", "Sin sorpresas."),
      sub: t(
        "Manufacturer warranty doesn't cover damage you'd file with insurance. If you're unsure whether something qualifies, call us before opening a claim.",
        "La garant\xEDa del fabricante no cubre da\xF1os que normalmente reclamar\xEDas al seguro. Si no est\xE1s seguro si algo aplica, ll\xE1manos antes de abrir un reclamo."
      )
    }
  ), /* @__PURE__ */ React.createElement("div", { style: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 0,
    border: "1.5px solid var(--ink)"
  } }, items.map(([title, body], i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
    padding: "24px 26px",
    borderRight: i % 2 === 0 ? "1.5px solid var(--ink)" : "none",
    borderBottom: i < items.length - 2 ? "1.5px solid var(--ink)" : "none",
    background: "var(--white)"
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "flex-start", gap: 14 } }, /* @__PURE__ */ React.createElement("span", { style: {
    width: 28,
    height: 28,
    flexShrink: 0,
    border: "1.5px solid var(--ink)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--tangerine)"
  } }, /* @__PURE__ */ React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M4 4 L12 12 M12 4 L4 12", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "display", style: {
    margin: "0 0 6px",
    fontSize: 16.5,
    letterSpacing: "-0.005em",
    color: "var(--ink)"
  } }, t(title)), /* @__PURE__ */ React.createElement("p", { className: "mono", style: {
    margin: 0,
    fontSize: 14.5,
    lineHeight: 1.6,
    color: "var(--charcoal)"
  } }, t(body)))))))));
};
const WarrantyProcess = () => {
  const t = useT();
  const steps = [
    { n: "01", title: { EN: "Document", ES: "Documenta" }, body: { EN: "Take dated photos of the issue, find your original PO, and note install date if known.", ES: "Toma fotos fechadas del problema, ubica tu orden original y anota la fecha de instalaci\xF3n si la sabes." } },
    { n: "02", title: { EN: "Submit", ES: "Env\xEDa" }, body: { EN: "Open a claim online or call the yard. Average response in 24 hours, often same-day.", ES: "Abre un reclamo en l\xEDnea o llama a la sucursal. Respuesta promedio en 24 horas, a menudo el mismo d\xEDa." } },
    { n: "03", title: { EN: "Review", ES: "Revisi\xF3n" }, body: { EN: "We review your photos and order details to confirm the claim, no site visit required.", ES: "Revisamos tus fotos y los datos de la orden para confirmar el reclamo, sin visita al sitio." } },
    { n: "04", title: { EN: "Replace", ES: "Reemplazo" }, body: { EN: "Approved claims ship replacement material from stock, most within 1-2 business days.", ES: "Los reclamos aprobados env\xEDan material de reemplazo desde stock, la mayor\xEDa en 1-2 d\xEDas h\xE1biles." } }
  ];
  return /* @__PURE__ */ React.createElement("section", { style: { background: "#ffffff", padding: "120px 0" } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement(
    PageSectionHeader,
    {
      number: "04",
      label: t("Process", "Proceso"),
      title: t("From claim to", "Del reclamo al"),
      accent: t("replacement.", "reemplazo."),
      sub: t(
        "The full lifecycle, end to end. Most homeowner claims close inside two weeks.",
        "El ciclo completo, de principio a fin. La mayor\xEDa de reclamos de propietarios se cierran en menos de dos semanas."
      ),
      link: [t("Start a claim", "Iniciar reclamo"), "warranty-claims.html"]
    }
  ), /* @__PURE__ */ React.createElement("div", { style: {
    position: "relative",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 24
  } }, /* @__PURE__ */ React.createElement("div", { "aria-hidden": true, style: {
    position: "absolute",
    top: 36,
    left: "10%",
    right: "10%",
    height: 1,
    borderTop: "1px dashed rgba(38, 49, 102,0.2)",
    zIndex: 0,
    pointerEvents: "none"
  } }), steps.map((s, i) => /* @__PURE__ */ React.createElement("div", { key: s.n, style: {
    position: "relative",
    zIndex: 1,
    background: "var(--white)",
    border: "1.5px solid var(--ink)",
    padding: "24px 24px 28px"
  } }, /* @__PURE__ */ React.createElement("span", { className: "mono", style: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 36,
    height: 36,
    background: "var(--ink)",
    color: "var(--white)",
    fontSize: 14,
    fontWeight: 700,
    letterSpacing: "0.05em",
    marginBottom: 22
  } }, s.n), /* @__PURE__ */ React.createElement("h3", { className: "display", style: {
    margin: "0 0 10px",
    fontSize: 19.5,
    letterSpacing: "-0.005em",
    color: "var(--ink)"
  } }, t(s.title)), /* @__PURE__ */ React.createElement("p", { className: "mono", style: {
    margin: 0,
    fontSize: 14.5,
    lineHeight: 1.6,
    color: "var(--charcoal)"
  } }, t(s.body)))))));
};
const WarrantyCTA = () => {
  const t = useT();
  return /* @__PURE__ */ React.createElement(
    CTABand,
    {
      kicker: t("Need to start a claim?", "\xBFNecesitas iniciar un reclamo?"),
      title: t("Open a warranty claim,", "Abre un reclamo de garant\xEDa,"),
      accent: t("we respond in 24 hours.", "respondemos en 24 horas."),
      body: t(
        "Have your PO number, install date and a few dated photos ready. Or call the yard and a rep will walk you through it.",
        "Ten a la mano tu n\xFAmero de orden, fecha de instalaci\xF3n y unas fotos fechadas. O llama a la sucursal y un representante te gu\xEDa paso a paso."
      ),
      primary: [t("Start a claim", "Iniciar reclamo"), "warranty-claims.html"],
      secondary: [t("Call (239) 689-5496", "Llamar (239) 689-5496"), "tel:2396895496"],
      theme: "ink"
    }
  );
};
const WarrantyPage = () => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(SiteHeader, { active: "Company" }), /* @__PURE__ */ React.createElement(WarrantyHero, null), /* @__PURE__ */ React.createElement(WarrantyHighlights, null), /* @__PURE__ */ React.createElement(WarrantyMaterialTable, null), /* @__PURE__ */ React.createElement(WarrantyExclusions, null), /* @__PURE__ */ React.createElement(WarrantyProcess, null), /* @__PURE__ */ React.createElement(WarrantyCTA, null), /* @__PURE__ */ React.createElement(Footer, null));
const ClaimsHero = () => {
  const t = useT();
  return /* @__PURE__ */ React.createElement(
    PageHero,
    {
      crumbs: [
        [t("Home", "Inicio"), "Homepage.html"],
        [t("Warranty", "Garant\xEDa"), "warranty.html"],
        [t("Submit a claim", "Enviar reclamo"), null]
      ],
      eyebrow: t("Warranty \xB7 Claims", "Garant\xEDa \xB7 Reclamos"),
      title: t("Submit a warranty claim.", "Env\xEDa un reclamo de garant\xEDa."),
      accent: t("24-hour response.", "Respuesta en 24 horas."),
      subtitle: t(
        "One short form, four required fields. A rep follows up by phone the next business morning to schedule inspection or ship replacement material.",
        "Un formulario corto, cuatro campos obligatorios. Un representante hace seguimiento por tel\xE9fono la ma\xF1ana h\xE1bil siguiente para agendar inspecci\xF3n o enviar material de reemplazo."
      ),
      image: "https://crpozo.github.io/wfs-design-preview/assets/gate-cantilever.jpg"
    }
  );
};
const ClaimsProcess = () => {
  const t = useT();
  const steps = [
    { n: "01", title: { EN: "Find your PO", ES: "Localiza tu orden" }, body: { EN: "PO number is on your invoice or pickup slip. Don't have it? Call the yard, we look it up by phone, address or last name.", ES: "El n\xFAmero de orden est\xE1 en tu factura o ticket de recogida. \xBFNo lo tienes? Llama a la sucursal, lo buscamos por tel\xE9fono, direcci\xF3n o apellido." } },
    { n: "02", title: { EN: "Photograph the issue", ES: "Fotograf\xEDa el problema" }, body: { EN: "Three dated photos minimum: wide shot, close-up, and one showing scale. Phone camera is fine.", ES: "M\xEDnimo tres fotos fechadas: toma abierta, primer plano y una que muestre escala. La c\xE1mara del celular funciona perfecto." } },
    { n: "03", title: { EN: "Submit the form", ES: "Env\xEDa el formulario" }, body: { EN: "PO + install date + photos + a short description. Submit triggers an email confirmation with your claim number.", ES: "Orden + fecha de instalaci\xF3n + fotos + descripci\xF3n breve. Al enviar recibes confirmaci\xF3n por email con tu n\xFAmero de reclamo." } },
    { n: "04", title: { EN: "We come look", ES: "Vamos a inspeccionar" }, body: { EN: "For in-county claims a WFS rep schedules inspection within 5 business days. Out-of-county we coordinate with your installer.", ES: "En el condado, un representante WFS agenda inspecci\xF3n en 5 d\xEDas h\xE1biles. Fuera del condado coordinamos con tu instalador." } }
  ];
  return /* @__PURE__ */ React.createElement("section", { style: { background: "var(--white)", padding: "120px 0" } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement(
    PageSectionHeader,
    {
      number: "01",
      label: t("Process", "Proceso"),
      title: t("How a claim works.", "C\xF3mo funciona un reclamo."),
      accent: t("Four steps.", "Cuatro pasos."),
      sub: t(
        "Most claims are resolved inside two weeks from first photo to replacement material in your hands.",
        "La mayor\xEDa de los reclamos se resuelven en menos de dos semanas, desde la primera foto hasta el material de reemplazo en tus manos."
      )
    }
  ), /* @__PURE__ */ React.createElement("div", { style: {
    position: "relative",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 24
  } }, /* @__PURE__ */ React.createElement("div", { "aria-hidden": true, style: {
    position: "absolute",
    top: 36,
    left: "10%",
    right: "10%",
    height: 1,
    borderTop: "1px dashed rgba(38, 49, 102,0.2)",
    zIndex: 0,
    pointerEvents: "none"
  } }), steps.map((s, i) => /* @__PURE__ */ React.createElement("div", { key: s.n, style: {
    position: "relative",
    zIndex: 1,
    background: "var(--white)",
    border: "1.5px solid var(--ink)",
    padding: "24px 24px 28px"
  } }, /* @__PURE__ */ React.createElement("span", { className: "mono", style: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 36,
    height: 36,
    background: "var(--ink)",
    color: "var(--white)",
    fontSize: 14,
    fontWeight: 700,
    letterSpacing: "0.05em",
    marginBottom: 22
  } }, s.n), /* @__PURE__ */ React.createElement("h3", { className: "display", style: {
    margin: "0 0 10px",
    fontSize: 19.5,
    letterSpacing: "-0.005em",
    color: "var(--ink)"
  } }, t(s.title)), /* @__PURE__ */ React.createElement("p", { className: "mono", style: {
    margin: 0,
    fontSize: 14.5,
    lineHeight: 1.6,
    color: "var(--charcoal)"
  } }, t(s.body)))))));
};
const ClaimsForm = () => {
  const t = useT();
  const [submitted, setSubmitted] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [error, setError] = React.useState("");
  const busy = React.useRef(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (busy.current) return;
    busy.current = true;
    setSending(true);
    setError("");
    try {
      await submitLead(e.target, { form: "warranty", subject: "Warranty Claim" });
      setSubmitted(true);
    } catch (err) {
      setError(err && err.message || t(
        "We couldn't send your claim. Please email claims@westernfencesupply.com or call (239) 689-5496.",
        "No pudimos enviar tu reclamo. Escribe a claims@westernfencesupply.com o llama al (239) 689-5496."
      ));
    } finally {
      busy.current = false;
      setSending(false);
    }
  };
  const Field = ({ label, name, type = "text", placeholder, required, children, span = 1 }) => /* @__PURE__ */ React.createElement("div", { style: { gridColumn: `span ${span}` } }, /* @__PURE__ */ React.createElement("label", { htmlFor: name, className: "mono", style: {
    display: "block",
    marginBottom: 8,
    fontSize: 13.5,
    fontWeight: 700,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--ink)"
  } }, label, " ", required && /* @__PURE__ */ React.createElement("span", { style: { color: "var(--tangerine)" } }, "*")), children || /* @__PURE__ */ React.createElement(
    "input",
    {
      id: name,
      name,
      type,
      placeholder,
      style: {
        width: "100%",
        padding: "14px 16px",
        border: "1.5px solid var(--ink)",
        background: "var(--white)",
        fontFamily: "var(--sans)",
        fontSize: 15.5,
        color: "var(--ink)",
        outline: "none"
      }
    }
  ));
  return /* @__PURE__ */ React.createElement("section", { style: { background: "#ffffff", padding: "120px 0" } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1.7fr 1fr", gap: 56, alignItems: "start" } }, /* @__PURE__ */ React.createElement("article", { style: {
    background: "var(--white)",
    border: "1.5px solid var(--ink)",
    padding: "40px 44px",
    boxShadow: "8px 8px 0 var(--tangerine)"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 22,
    marginBottom: 28,
    borderBottom: "1px dashed rgba(38, 49, 102,0.18)"
  } }, /* @__PURE__ */ React.createElement("h3", { className: "display", style: {
    margin: 0,
    fontSize: 23.5,
    letterSpacing: "-0.01em",
    color: "var(--ink)"
  } }, t("Claim form", "Formulario de reclamo")), /* @__PURE__ */ React.createElement("span", { className: "mono", style: {
    fontSize: 13.5,
    fontWeight: 700,
    letterSpacing: "0.22em",
    color: "var(--charcoal)",
    textTransform: "uppercase"
  } }, t("\u2248 4 minutes", "\u2248 4 minutos"))), submitted ? /* @__PURE__ */ React.createElement("div", { style: { padding: "56px 0", textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { className: "mono", style: { fontSize: 14, letterSpacing: "0.18em", color: "var(--tangerine)", marginBottom: 16, textTransform: "uppercase", fontWeight: 700 } }, t("Claim received", "Reclamo recibido")), /* @__PURE__ */ React.createElement("h3", { className: "display", style: { fontSize: 31.5, margin: "0 0 12px", lineHeight: 1.1 } }, t("Thanks, your claim is in.", "Gracias, tu reclamo fue recibido.")), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 15.5, color: "var(--charcoal)", maxWidth: 380, margin: "0 auto" } }, t("Our warranty team will email you a claim number and next steps.", "Nuestro equipo de garant\xEDas te enviar\xE1 por correo el n\xFAmero de reclamo y los siguientes pasos."))) : /* @__PURE__ */ React.createElement(
    "form",
    {
      onSubmit: handleSubmit,
      style: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }
    },
    /* @__PURE__ */ React.createElement(Field, { label: t("Full name", "Nombre completo"), name: "name", required: true, placeholder: "Marisol R." }),
    /* @__PURE__ */ React.createElement(Field, { label: t("Phone", "Tel\xE9fono"), name: "phone", type: "tel", required: true, placeholder: "(239) 555-0142" }),
    /* @__PURE__ */ React.createElement(Field, { label: t("Email", "Correo"), name: "email", type: "email", required: true, placeholder: "you@email.com", span: 2 }),
    /* @__PURE__ */ React.createElement(Field, { label: t("PO / Invoice #", "Orden / # Factura"), name: "po", required: true, placeholder: "e.g. WFS-2025-04812" }),
    /* @__PURE__ */ React.createElement(Field, { label: t("Install date", "Fecha de instalaci\xF3n"), name: "install", type: "date", required: true }),
    /* @__PURE__ */ React.createElement(Field, { label: t("Material / system", "Material / sistema"), name: "material", span: 2 }, /* @__PURE__ */ React.createElement(
      "select",
      {
        id: "material",
        name: "material",
        defaultValue: "",
        style: {
          width: "100%",
          padding: "14px 16px",
          border: "1.5px solid var(--ink)",
          background: "var(--white)",
          fontFamily: "var(--sans)",
          fontSize: 15.5,
          color: "var(--ink)",
          outline: "none"
        }
      },
      /* @__PURE__ */ React.createElement("option", { value: "", disabled: true }, t("Select the system on your claim\u2026", "Selecciona el sistema de tu reclamo\u2026")),
      /* @__PURE__ */ React.createElement("option", null, "Vinyl / PVC"),
      /* @__PURE__ */ React.createElement("option", null, "Aluminum"),
      /* @__PURE__ */ React.createElement("option", null, "Chain Link \xB7 Galvanized"),
      /* @__PURE__ */ React.createElement("option", null, "Chain Link \xB7 Vinyl-coated"),
      /* @__PURE__ */ React.createElement("option", null, "Metal / DuraFence"),
      /* @__PURE__ */ React.createElement("option", null, "EC Fence"),
      /* @__PURE__ */ React.createElement("option", null, t("Welded gate", "Port\xF3n soldado")),
      /* @__PURE__ */ React.createElement("option", null, "Hardware")
    )),
    /* @__PURE__ */ React.createElement(Field, { label: t("What's happening?", "\xBFQu\xE9 est\xE1 pasando?"), name: "description", required: true, span: 2 }, /* @__PURE__ */ React.createElement(
      "textarea",
      {
        id: "description",
        name: "description",
        rows: 5,
        placeholder: t(
          "Briefly describe the issue, when you noticed it, and approx. linear feet affected.",
          "Describe brevemente el problema, cu\xE1ndo lo notaste y los pies lineales aproximados afectados."
        ),
        style: {
          width: "100%",
          padding: "14px 16px",
          border: "1.5px solid var(--ink)",
          background: "var(--white)",
          fontFamily: "var(--sans)",
          fontSize: 15.5,
          color: "var(--ink)",
          outline: "none",
          resize: "vertical",
          minHeight: 120
        }
      }
    )),
    /* @__PURE__ */ React.createElement(Field, { label: t("Photos (min. 3)", "Fotos (m\xEDn. 3)"), name: "photos", span: 2 }, /* @__PURE__ */ React.createElement("div", { style: {
      border: "1.5px dashed var(--ink)",
      background: "#ffffff",
      padding: "28px 22px",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 10
    } }, /* @__PURE__ */ React.createElement("svg", { width: "28", height: "28", viewBox: "0 0 24 24", fill: "none", stroke: "var(--ink)", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("rect", { x: "3", y: "6", width: "18", height: "14", rx: "1" }), /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "13", r: "3.5" }), /* @__PURE__ */ React.createElement("path", { d: "M8 6 L9.5 4 H14.5 L16 6" })), /* @__PURE__ */ React.createElement("div", { className: "mono", style: {
      fontSize: 14.5,
      fontWeight: 700,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--ink)"
    } }, t("Drag photos here, or click to browse", "Arrastra fotos aqu\xED, o haz clic para buscar")), /* @__PURE__ */ React.createElement("div", { className: "mono", style: { fontSize: 13.5, color: "var(--charcoal)", letterSpacing: "0.16em", textTransform: "uppercase" } }, "JPG / PNG / HEIC \xB7 20 MB ", t("max", "m\xE1x")), /* @__PURE__ */ React.createElement("input", { type: "file", id: "photos", name: "photos", accept: "image/*", multiple: true, style: { display: "none" } }))),
    /* @__PURE__ */ React.createElement("div", { style: { gridColumn: "span 2", display: "flex", gap: 16, alignItems: "center", marginTop: 8, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "submit",
        disabled: sending,
        style: {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: sending ? 0.6 : 1,
          padding: "16px 36px",
          background: "var(--ink)",
          color: "var(--white)",
          fontFamily: "var(--sans)",
          fontSize: 14.5,
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          border: "none",
          cursor: "pointer",
          boxShadow: "6px 6px 0 var(--tangerine)",
          transition: "transform 0.18s ease, box-shadow 0.18s ease"
        },
        onMouseEnter: (e) => {
          e.currentTarget.style.transform = "translate(-2px,-2px)";
          e.currentTarget.style.boxShadow = "8px 8px 0 var(--tangerine)";
        },
        onMouseLeave: (e) => {
          e.currentTarget.style.transform = "";
          e.currentTarget.style.boxShadow = "6px 6px 0 var(--tangerine)";
        }
      },
      sending ? t("Sending\u2026", "Enviando\u2026") : t("Submit claim", "Enviar reclamo")
    ), /* @__PURE__ */ React.createElement("span", { className: "mono", style: {
      fontSize: 13.5,
      fontWeight: 700,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--charcoal)"
    } }, t("You'll get a claim number by email", "Recibir\xE1s un n\xFAmero de reclamo por email"))),
    error && /* @__PURE__ */ React.createElement("p", { role: "alert", style: {
      gridColumn: "span 2",
      margin: 0,
      padding: "14px 16px",
      background: "rgba(255,113,51,0.08)",
      border: "1px solid rgba(255,113,51,0.35)",
      fontSize: 15.5,
      lineHeight: 1.5,
      color: "var(--ink)"
    } }, error)
  )), /* @__PURE__ */ React.createElement("aside", { style: { position: "sticky", top: 100, display: "grid", gap: 16 } }, /* @__PURE__ */ React.createElement("div", { style: {
    background: "var(--ink)",
    color: "var(--white)",
    padding: "28px 28px 26px"
  } }, /* @__PURE__ */ React.createElement("div", { className: "mono", style: {
    fontSize: 13.5,
    fontWeight: 700,
    letterSpacing: "0.22em",
    color: "var(--tangerine)",
    textTransform: "uppercase",
    marginBottom: 14,
    display: "flex",
    alignItems: "center",
    gap: 10
  } }, /* @__PURE__ */ React.createElement("span", { style: { width: 8, height: 8, borderRadius: "50%", background: "#ff7133", boxShadow: "0 0 0 3px rgba(255, 113, 51,0.25)" } }), t("Live \xB7 7am - 4pm EST", "En vivo \xB7 7am - 4pm EST")), /* @__PURE__ */ React.createElement("h3", { className: "display", style: {
    margin: "0 0 16px",
    fontSize: 23.5,
    lineHeight: 1.1,
    color: "var(--white)"
  } }, t("Can't find your PO?", "\xBFNo encuentras tu orden?")), /* @__PURE__ */ React.createElement("p", { className: "mono", style: {
    margin: "0 0 22px",
    fontSize: 14.5,
    lineHeight: 1.65,
    color: "rgba(255,255,255,0.78)"
  } }, t(
    "Call the yard. We pull the order by phone, address, or last name in under two minutes.",
    "Llama a la sucursal. Localizamos la orden por tel\xE9fono, direcci\xF3n o apellido en menos de dos minutos."
  )), /* @__PURE__ */ React.createElement("a", { href: "tel:2396895496", className: "display", style: {
    display: "block",
    marginBottom: 6,
    fontSize: 23.5,
    color: "var(--white)",
    lineHeight: 1.1,
    letterSpacing: "-0.005em"
  } }, "(239) 689-5496"), /* @__PURE__ */ React.createElement("a", { href: "mailto:claims@westernfencesupply.com", className: "mono", style: {
    display: "block",
    wordBreak: "break-all",
    fontSize: 14.5,
    color: "rgba(255,255,255,0.7)"
  } }, "claims@westernfencesupply.com")), /* @__PURE__ */ React.createElement("div", { style: {
    background: "var(--white)",
    border: "1.5px solid var(--ink)",
    padding: "24px 26px"
  } }, /* @__PURE__ */ React.createElement("div", { className: "mono", style: {
    fontSize: 13.5,
    fontWeight: 700,
    letterSpacing: "0.22em",
    color: "var(--tangerine)",
    textTransform: "uppercase",
    marginBottom: 14
  } }, t("What to expect", "Qu\xE9 esperar")), /* @__PURE__ */ React.createElement("ul", { style: { listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 12 } }, [
    [{ EN: "Response window", ES: "Ventana de respuesta" }, { EN: "\u2264 24 business hrs", ES: "\u2264 24 hrs h\xE1biles" }],
    [{ EN: "In-county inspect", ES: "Inspecci\xF3n en el condado" }, { EN: "\u2264 5 business days", ES: "\u2264 5 d\xEDas h\xE1biles" }],
    [{ EN: "Stock-item replace", ES: "Reemplazo en stock" }, { EN: "1-2 business days", ES: "1-2 d\xEDas h\xE1biles" }],
    [{ EN: "Welded re-fab", ES: "Re-fabricaci\xF3n soldada" }, { EN: "5-10 business days", ES: "5-10 d\xEDas h\xE1biles" }]
  ].map(([k, v], i) => /* @__PURE__ */ React.createElement("li", { key: i, style: {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: 10,
    borderBottom: "1px dashed rgba(38, 49, 102,0.18)"
  } }, /* @__PURE__ */ React.createElement("span", { className: "mono", style: { fontSize: 14.5, color: "var(--charcoal)" } }, t(k)), /* @__PURE__ */ React.createElement("span", { className: "mono", style: {
    fontSize: 14.5,
    fontWeight: 700,
    color: "var(--ink)"
  } }, t(v))))))))));
};
const ClaimsCTA = () => {
  const t = useT();
  return /* @__PURE__ */ React.createElement(
    CTABand,
    {
      kicker: t("Not sure if it's covered?", "\xBFNo est\xE1s seguro si est\xE1 cubierto?"),
      title: t("Read the warranty doc", "Lee el documento de garant\xEDa"),
      accent: t("before you file.", "antes de presentar tu reclamo."),
      body: t(
        "Coverage, exclusions and material-specific terms in one page. Two minutes to scan.",
        "Cobertura, exclusiones y t\xE9rminos por material en una sola p\xE1gina. Dos minutos de lectura."
      ),
      primary: [t("Read the warranty", "Leer la garant\xEDa"), "warranty.html"],
      secondary: [t("Call the yard", "Llamar a la sucursal"), "tel:2396895496"]
    }
  );
};
const WarrantyClaimsPage = () => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(SiteHeader, { active: "Company" }), /* @__PURE__ */ React.createElement(ClaimsHero, null), /* @__PURE__ */ React.createElement(ClaimsProcess, null), /* @__PURE__ */ React.createElement(ClaimsForm, null), /* @__PURE__ */ React.createElement(ClaimsCTA, null), /* @__PURE__ */ React.createElement(Footer, null));
const SpecsHero = () => {
  const t = useT();
  return /* @__PURE__ */ React.createElement(
    PageHero,
    {
      crumbs: [
        [t("Home", "Inicio"), "Homepage.html"],
        [t("Warranty", "Garant\xEDa"), "warranty.html"],
        [t("Manufacturer Specs", "Specs del fabricante"), null]
      ],
      eyebrow: t("Warranty \xB7 Specs", "Garant\xEDa \xB7 Specs"),
      title: t("Manufacturer specs,", "Specs del fabricante,"),
      accent: t("ready to send.", "listas para enviar."),
      subtitle: t(
        "PDF spec sheets, profile drawings and wind-load data for every system we stock. Formatted for AHJ submission and HOA review. Stamped copies on request.",
        "Hojas t\xE9cnicas PDF, dibujos de perfil y datos de carga e\xF3lica para cada sistema que manejamos. Formateadas para presentaci\xF3n AHJ y revisi\xF3n HOA. Copias selladas a solicitud."
      ),
      image: "https://crpozo.github.io/wfs-design-preview/assets/ECFENCE.png"
    }
  );
};
const SpecsLibrary = () => {
  const t = useT();
  const [filter, setFilter] = React.useState("All");
  const docs = [
    // Fences
    { cat: "Fences", title: "Vinyl Privacy + Picket Profiles", meta: "PDF \xB7 1.1 MB \xB7 24 pages", rev: "Rev. 2026.02" },
    { cat: "Fences", title: "Aluminum 3 / 4 / 5 Rail Systems", meta: "PDF \xB7 980 KB \xB7 18 pages", rev: "Rev. 2026.01" },
    { cat: "Fences", title: "Chain Link, Gauges + Mesh Chart", meta: "PDF \xB7 620 KB \xB7 8 pages", rev: "Rev. 2025.11" },
    { cat: "Fences", title: "DuraFence, Metal Board Privacy", meta: "PDF \xB7 1.4 MB \xB7 22 pages", rev: "Rev. 2025.12" },
    { cat: "Fences", title: "EC Fence, Exposure C Wind Load", meta: "PDF \xB7 1.2 MB \xB7 16 pages", rev: "Rev. 2026.01", isNew: true },
    // Gates
    { cat: "Gates", title: "Single + Double Swing Gates", meta: "PDF \xB7 740 KB \xB7 12 pages", rev: "Rev. 2025.10" },
    { cat: "Gates", title: "Sliding + Cantilever Gates", meta: "PDF \xB7 980 KB \xB7 18 pages", rev: "Rev. 2025.12" },
    { cat: "Gates", title: "Industrial Rolling Gates", meta: "PDF \xB7 820 KB \xB7 14 pages", rev: "Rev. 2025.10" },
    { cat: "Gates", title: "Gate Hardware + Latch Catalog", meta: "PDF \xB7 540 KB \xB7 10 pages", rev: "Rev. 2025.09" },
    // Code
    { cat: "Code", title: "Florida Pool Code, Profile Sheet", meta: "PDF \xB7 1.6 MB \xB7 20 pages", rev: "Rev. 2026.01" },
    { cat: "Code", title: "HVHZ Wind-Load Letter (Miami-Dade)", meta: "PDF \xB7 320 KB \xB7 4 pages", rev: "Rev. 2026.01" },
    { cat: "Code", title: "NEC Bonding for Metallic Fences", meta: "PDF \xB7 280 KB \xB7 4 pages", rev: "Rev. 2025.08" },
    // Finishes
    { cat: "Finishes", title: "Powder-coat Color Library", meta: "PDF \xB7 1.8 MB \xB7 32 pages", rev: "Rev. 2026.01" },
    { cat: "Finishes", title: "PVC Color Chart, Vinyl-coated", meta: "PDF \xB7 460 KB \xB7 4 pages", rev: "Rev. 2025.11" }
  ];
  const cats = ["All", "Fences", "Gates", "Code", "Finishes"];
  const visible = filter === "All" ? docs : docs.filter((d) => d.cat === filter);
  return /* @__PURE__ */ React.createElement("section", { style: { background: "var(--white)", padding: "120px 0" } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement(
    PageSectionHeader,
    {
      number: "01",
      label: t("Library", "Biblioteca"),
      title: t("The full library,", "La biblioteca completa,"),
      accent: t("filtered or browsed.", "filtrada o explorada."),
      sub: t(
        "Pick a category or scan the whole list. Every doc carries a revision date, older revs available on request.",
        "Elige una categor\xEDa o explora la lista completa. Cada documento tiene fecha de revisi\xF3n, versiones anteriores disponibles a solicitud."
      )
    }
  ), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 28 } }, cats.map((c) => {
    const active = filter === c;
    const catLabels = {
      All: { EN: "All", ES: "Todos" },
      Fences: { EN: "Fences", ES: "Cercas" },
      Gates: { EN: "Gates", ES: "Portones" },
      Code: { EN: "Code", ES: "C\xF3digo" },
      Finishes: { EN: "Finishes", ES: "Acabados" }
    };
    return /* @__PURE__ */ React.createElement("button", { key: c, onClick: () => setFilter(c), className: "mono", style: {
      padding: "10px 18px",
      background: active ? "var(--ink)" : "var(--white)",
      color: active ? "var(--white)" : "var(--ink)",
      border: "1.5px solid var(--ink)",
      fontSize: 14,
      fontWeight: 700,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      cursor: "pointer",
      transition: "all 0.18s ease"
    } }, t(catLabels[c]));
  }), /* @__PURE__ */ React.createElement("span", { className: "mono", style: {
    marginLeft: "auto",
    alignSelf: "center",
    fontSize: 13.5,
    fontWeight: 700,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--charcoal)"
  } }, visible.length, " ", t(visible.length === 1 ? "document" : "documents", visible.length === 1 ? "documento" : "documentos"))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 } }, visible.map((d, i) => /* @__PURE__ */ React.createElement(
    "a",
    {
      key: d.title,
      href: "#",
      onClick: (e) => e.preventDefault(),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 18,
        padding: "22px 24px",
        border: "1.5px solid var(--ink)",
        background: "var(--white)",
        color: "var(--ink)",
        position: "relative",
        transition: "transform 0.18s ease, box-shadow 0.18s ease"
      },
      onMouseEnter: (e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = "6px 6px 0 var(--tangerine)";
      },
      onMouseLeave: (e) => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = "";
      }
    },
    /* @__PURE__ */ React.createElement("span", { style: {
      width: 56,
      height: 56,
      flexShrink: 0,
      background: "var(--ink)",
      color: "var(--white)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--sans)",
      fontSize: 13.5,
      fontWeight: 700,
      letterSpacing: "0.12em"
    } }, /* @__PURE__ */ React.createElement("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M7 3 H15 L19 7 V21 H7 Z" }), /* @__PURE__ */ React.createElement("path", { d: "M15 3 V7 H19" })), /* @__PURE__ */ React.createElement("span", { style: { marginTop: 2 } }, "PDF")),
    /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 6 } }, /* @__PURE__ */ React.createElement("span", { className: "mono", style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: "0.22em",
      color: "var(--tangerine)",
      textTransform: "uppercase"
    } }, d.cat), d.isNew && /* @__PURE__ */ React.createElement("span", { className: "mono", style: {
      padding: "2px 8px",
      background: "var(--tangerine)",
      color: "var(--white)",
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "0.2em",
      textTransform: "uppercase"
    } }, t("New", "Nuevo"))), /* @__PURE__ */ React.createElement("div", { style: {
      fontSize: 16,
      fontWeight: 600,
      color: "var(--ink)",
      lineHeight: 1.35,
      marginBottom: 6
    } }, d.title), /* @__PURE__ */ React.createElement("div", { style: {
      display: "flex",
      gap: 12,
      flexWrap: "wrap",
      fontFamily: "var(--mono)",
      fontSize: 13.5,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--charcoal)",
      fontWeight: 700
    } }, /* @__PURE__ */ React.createElement("span", null, d.meta), /* @__PURE__ */ React.createElement("span", null, "\xB7"), /* @__PURE__ */ React.createElement("span", null, d.rev))),
    /* @__PURE__ */ React.createElement("span", { style: {
      flexShrink: 0,
      width: 36,
      height: 36,
      background: "var(--tangerine)",
      color: "var(--white)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    } }, /* @__PURE__ */ React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 18 18", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M9 2v10m0 0l-4-4m4 4l4-4M3 14h12", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "square" })))
  )))));
};
const SpecsStamped = () => {
  const t = useT();
  return /* @__PURE__ */ React.createElement("section", { style: { background: "#ffffff", padding: "120px 0" } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "grid",
    gridTemplateColumns: "1.2fr 1fr",
    gap: 48,
    alignItems: "center",
    background: "var(--ink)",
    color: "var(--white)",
    padding: "56px 56px",
    boxShadow: "12px 12px 0 var(--tangerine)"
  } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", { className: "display", style: {
    margin: "0 0 18px",
    fontSize: "clamp(26px, 3vw, 38px)",
    lineHeight: 1.05,
    letterSpacing: "-0.015em",
    color: "var(--white)"
  } }, t("Need a stamped", "\xBFNecesitas una copia"), /* @__PURE__ */ React.createElement("br", null), t("copy for AHJ?", "sellada para el AHJ?")), /* @__PURE__ */ React.createElement("p", { className: "mono", style: {
    margin: 0,
    fontSize: 15.5,
    lineHeight: 1.7,
    color: "rgba(255,255,255,0.78)",
    maxWidth: 480
  } }, t(
    "We have a licensed FL Professional Engineer on retainer for stamped wind-load letters, structural calcs and HVHZ submission packages. Stamped requests are available on most products.",
    "Tenemos un Ingeniero Profesional licenciado de FL en retainer para cartas selladas de carga e\xF3lica, c\xE1lculos estructurales y paquetes de presentaci\xF3n HVHZ. Hay solicitudes selladas disponibles para la mayor\xEDa de los productos."
  ))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 12 } }, /* @__PURE__ */ React.createElement("a", { href: "mailto:engineering@westernfencesupply.com", style: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "16px 28px",
    background: "var(--tangerine)",
    color: "var(--white)",
    fontFamily: "var(--sans)",
    fontSize: 14.5,
    fontWeight: 700,
    letterSpacing: "0.18em",
    textTransform: "uppercase"
  } }, t("Request stamped doc", "Solicitar doc sellado")), /* @__PURE__ */ React.createElement("a", { href: "tel:2396895496", style: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "16px 28px",
    background: "transparent",
    color: "var(--white)",
    border: "1.5px solid rgba(255,255,255,0.5)",
    fontFamily: "var(--sans)",
    fontSize: 14.5,
    fontWeight: 700,
    letterSpacing: "0.18em",
    textTransform: "uppercase"
  } }, "(239) 689-5496")))));
};
const SpecsCTA = () => {
  const t = useT();
  return /* @__PURE__ */ React.createElement(
    CTABand,
    {
      kicker: t("Don't see what you need?", "\xBFNo ves lo que necesitas?"),
      title: t("Email engineering,", "Escribe a ingenier\xEDa,"),
      accent: t("we'll cut it for you.", "lo preparamos para ti."),
      body: t(
        "Custom specs, color drops, project-specific cut sheets, we generate one-off PDFs for HOAs, AHJs and commercial submittals.",
        "Specs a medida, paletas de color, hojas de corte por proyecto, generamos PDFs \xFAnicos para HOAs, AHJs y presentaciones comerciales."
      ),
      primary: [t("Request custom spec", "Solicitar spec a medida"), "mailto:engineering@westernfencesupply.com"],
      secondary: [t("Browse warranty", "Ver garant\xEDa"), "warranty.html"]
    }
  );
};
const SpecsPage = () => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(SiteHeader, { active: "Company" }), /* @__PURE__ */ React.createElement(SpecsHero, null), /* @__PURE__ */ React.createElement(SpecsLibrary, null), /* @__PURE__ */ React.createElement(SpecsStamped, null), /* @__PURE__ */ React.createElement(SpecsCTA, null), /* @__PURE__ */ React.createElement(Footer, null));
Object.assign(window, {
  WarrantyHero,
  WarrantyHighlights,
  WarrantyMaterialTable,
  WarrantyExclusions,
  WarrantyProcess,
  WarrantyCTA,
  WarrantyPage,
  ClaimsHero,
  ClaimsProcess,
  ClaimsForm,
  ClaimsCTA,
  WarrantyClaimsPage,
  SpecsHero,
  SpecsLibrary,
  SpecsStamped,
  SpecsCTA,
  SpecsPage
});
