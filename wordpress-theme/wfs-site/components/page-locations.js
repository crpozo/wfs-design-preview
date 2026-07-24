const YARDS = [
  {
    key: "fm",
    chip: { EN: "HQ \xB7 FORT MYERS", ES: "SEDE \xB7 FORT MYERS" },
    name: "Fort Myers",
    address: "2621 Fowler St, Fort Myers, FL 33901",
    phone: "+1 239-689-5496",
    tel: "tel:2396895496",
    email: "sales@westernfencesupply.com",
    hours: { EN: "Mon\u2013Fri 7:30am\u20133:30pm \xB7 Sat 7am\u201312pm \xB7 Sun closed", ES: "Lun\u2013Vie 7:30am\u20133:30pm \xB7 S\xE1b 7am\u201312pm \xB7 Dom cerrado" },
    photo: "https://crpozo.github.io/wfs-design-preview/assets/hero-warehouse.webp",
    mapQ: "2621 Fowler St, Fort Myers, FL 33901",
    notes: [
      { EN: "Main warehouse, most material ships from here", ES: "Almac\xE9n principal: la mayor\xEDa del material sale de aqu\xED" },
      { EN: "In-house gate fabrication shop", ES: "Taller de fabricaci\xF3n de portones en planta" },
      { EN: "Same-day pickup on standard qualifying orders", ES: "Retiro el mismo d\xEDa en pedidos est\xE1ndar que califiquen" }
    ]
  },
  {
    key: "pc",
    chip: { EN: "PORT CHARLOTTE", ES: "PORT CHARLOTTE" },
    name: "Port Charlotte",
    address: "1145 Enterprise Dr, Port Charlotte, FL 33953",
    phone: "+1 941-623-6890",
    tel: "tel:9416236890",
    email: "salespc@westernfencesupply.com",
    hours: { EN: "Mon\u2013Fri 7:30am\u20133:30pm \xB7 Sat 7\u201311:30am \xB7 Sun closed", ES: "Lun\u2013Vie 7:30am\u20133:30pm \xB7 S\xE1b 7\u201311:30am \xB7 Dom cerrado" },
    photo: "https://crpozo.github.io/wfs-design-preview/assets/wfs-shop.webp",
    mapQ: "1145 Enterprise Dr, Port Charlotte, FL 33953",
    notes: [
      { EN: "Pickup point for Charlotte County and north", ES: "Punto de retiro para el condado de Charlotte y el norte" },
      { EN: "Stock varies by yard, call ahead to confirm", ES: "El stock var\xEDa por sucursal: llama antes para confirmar" },
      { EN: "Same supplier-direct pricing as Fort Myers", ES: "El mismo precio directo de proveedor que Fort Myers" }
    ]
  }
];
const LocationsHero = () => {
  const t = useT();
  return /* @__PURE__ */ React.createElement(
    PageHero,
    {
      crumbs: [[t("Home", "Inicio"), "Homepage.html"], [t("Yard Locations", "Sucursales"), null]],
      eyebrow: t("Yard Locations", "Sucursales"),
      title: t("Two yards.", "Dos sucursales."),
      accent: t("One supplier.", "Un solo proveedor."),
      subtitle: t("Pick up your order, see material in person, or have it delivered, everything ships from our Fort Myers and Port Charlotte yards. Hours, addresses and directions below.", "Recoge tu pedido, ve el material en persona o rec\xEDbelo a domicilio: todo sale de nuestras sucursales de Fort Myers y Port Charlotte. Horarios, direcciones y c\xF3mo llegar, abajo."),
      image: "https://crpozo.github.io/wfs-design-preview/assets/hero-warehouse.webp"
    }
  );
};
const LocationsYards = () => {
  const t = useT();
  return /* @__PURE__ */ React.createElement("section", { style: { background: "var(--white)", padding: "120px 0" } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: 32,
    paddingBottom: 28,
    marginBottom: 44,
    borderBottom: "2px solid var(--ink)",
    flexWrap: "wrap"
  } }, /* @__PURE__ */ React.createElement("h2", { className: "display", style: {
    margin: 0,
    fontSize: "clamp(30px, 3.4vw, 46px)",
    lineHeight: 1.02,
    letterSpacing: "-0.01em",
    fontWeight: 800,
    textTransform: "uppercase"
  } }, t("Visit a", "Visita una"), " ", /* @__PURE__ */ React.createElement("span", { style: { color: "var(--tangerine)" } }, t("yard.", "sucursal."))), /* @__PURE__ */ React.createElement("div", { className: "mono", style: {
    fontSize: 14.5,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "var(--charcoal)",
    textAlign: "right"
  } }, t("Mon\u2013Fri 7:30am\u20133:30pm \xB7 Saturday varies by yard", "Lun\u2013Vie 7:30am\u20133:30pm \xB7 El s\xE1bado var\xEDa por sucursal"))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 } }, YARDS.map((y) => /* @__PURE__ */ React.createElement("article", { key: y.key, style: {
    border: "1px solid rgba(0,16,17,0.12)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden"
  } }, /* @__PURE__ */ React.createElement("div", { style: { position: "relative", aspectRatio: "16 / 9", background: "#263166" } }, /* @__PURE__ */ React.createElement(
    "iframe",
    {
      title: y.name,
      src: `https://maps.google.com/maps?q=${encodeURIComponent(y.mapQ)}&z=14&output=embed`,
      style: { position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 },
      loading: "lazy",
      referrerPolicy: "no-referrer-when-downgrade"
    }
  ), /* @__PURE__ */ React.createElement("span", { className: "mono", style: {
    position: "absolute",
    top: 14,
    left: 14,
    background: "var(--tangerine)",
    color: "var(--ink)",
    padding: "5px 10px",
    fontSize: 13.5,
    letterSpacing: "0.18em",
    fontWeight: 700
  } }, t(y.chip))), /* @__PURE__ */ React.createElement("div", { style: { padding: "26px 28px 28px", display: "flex", flexDirection: "column", gap: 18, flex: 1 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "display", style: { margin: "0 0 6px", fontSize: 27.5, lineHeight: 1 } }, y.name), /* @__PURE__ */ React.createElement("p", { style: { margin: 0, fontSize: 16, color: "var(--charcoal)" } }, y.address)), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gap: 8 } }, /* @__PURE__ */ React.createElement("a", { href: y.tel, className: "mono", style: {
    fontSize: 15.5,
    fontWeight: 700,
    letterSpacing: "0.06em",
    color: "var(--ink)"
  } }, y.phone), /* @__PURE__ */ React.createElement("a", { href: `mailto:${y.email}`, style: {
    fontSize: 15,
    color: "var(--laser-blue)",
    wordBreak: "break-all"
  } }, y.email), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 15, color: "var(--charcoal)", lineHeight: 1.5, marginTop: 2 } }, t(y.hours))), /* @__PURE__ */ React.createElement("ul", { style: { margin: 0, padding: 0, listStyle: "none", display: "grid", gap: 8 } }, y.notes.map((n, i) => /* @__PURE__ */ React.createElement("li", { key: i, style: { display: "flex", gap: 10, fontSize: 15, lineHeight: 1.5, color: "var(--charcoal)" } }, /* @__PURE__ */ React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 16 16", fill: "none", style: { flexShrink: 0, marginTop: 3 } }, /* @__PURE__ */ React.createElement("path", { d: "M3 8.5 L6.5 12 L13 4.5", stroke: "var(--tangerine)", strokeWidth: "2", strokeLinecap: "square" })), t(n)))), /* @__PURE__ */ React.createElement(
    "a",
    {
      href: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(y.mapQ)}`,
      target: "_blank",
      rel: "noopener",
      className: "mono",
      style: {
        marginTop: "auto",
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        fontSize: 14,
        fontWeight: 700,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "var(--tangerine)"
      }
    },
    t("Get directions", "C\xF3mo llegar"),
    /* @__PURE__ */ React.createElement("svg", { width: "13", height: "13", viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M3 8h10m0 0L9 4m4 4l-4 4", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "square" }))
  )))))));
};
const LocationsPickup = () => {
  const t = useT();
  const steps = [
    [{ EN: "Confirm before you drive", ES: "Confirma antes de manejar" }, { EN: "Stock varies by yard. Call or email first and we confirm availability and which yard your order is staged at.", ES: "El stock var\xEDa por sucursal. Llama o escribe primero y te confirmamos disponibilidad y en qu\xE9 sucursal est\xE1 tu pedido." }],
    [{ EN: "Same-day staging", ES: "Preparaci\xF3n el mismo d\xEDa" }, { EN: "Call ahead and standard qualifying orders are pulled and staged the same day, ready at the bay when you arrive.", ES: "Si avisas con anticipaci\xF3n, los pedidos est\xE1ndar que califiquen se preparan el mismo d\xEDa, listos en la bah\xEDa cuando llegues." }],
    [{ EN: "Or we deliver", ES: "O te lo llevamos" }, { EN: "Job-site delivery on our own trucks throughout Florida. Fees vary by location and order size. We confirm both with your quote.", ES: "Entrega en obra con nuestros propios camiones en toda Florida. El costo var\xEDa seg\xFAn ubicaci\xF3n y tama\xF1o del pedido: te confirmamos ambos con tu cotizaci\xF3n." }]
  ];
  return /* @__PURE__ */ React.createElement("section", { className: "wfs-brand-texture", style: { backgroundColor: "var(--ink)", color: "var(--parchment)", padding: "120px 0" } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("h2", { className: "display", style: {
    margin: "0 0 44px",
    fontSize: "clamp(28px, 3vw, 42px)",
    lineHeight: 1.02,
    letterSpacing: "-0.01em",
    fontWeight: 800,
    textTransform: "uppercase",
    color: "var(--white)"
  } }, t("How pickup", "C\xF3mo funciona"), " ", /* @__PURE__ */ React.createElement("span", { style: { color: "var(--tangerine)" } }, t("works.", "el retiro."))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 } }, steps.map(([title, body], i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
    padding: "28px 26px",
    border: "1px solid rgba(255,255,255,0.16)",
    background: "rgba(255,255,255,0.03)"
  } }, /* @__PURE__ */ React.createElement("div", { className: "display", style: { fontSize: 31.5, color: "var(--tangerine)", lineHeight: 1, marginBottom: 16 } }, "0", i + 1), /* @__PURE__ */ React.createElement("h3", { className: "display", style: { margin: "0 0 10px", fontSize: 21.5, lineHeight: 1.1, color: "var(--white)" } }, t(title)), /* @__PURE__ */ React.createElement("p", { style: { margin: 0, fontSize: 15.5, lineHeight: 1.6, color: "var(--alice-blue)" } }, t(body)))))));
};
const LocationsCTA = () => {
  const t = useT();
  return /* @__PURE__ */ React.createElement(
    CTABand,
    {
      kicker: t("Before you visit", "Antes de visitar"),
      title: t("Want it staged", "\xBFQuieres tu pedido listo"),
      accent: t("before you arrive?", "antes de llegar?"),
      body: t("Send your order or quote request first and we'll have it pulled, staged and ready at the bay, Fort Myers or Port Charlotte.", "Env\xEDa tu pedido o solicitud de cotizaci\xF3n primero y lo tendremos preparado y listo en la bah\xEDa, en Fort Myers o Port Charlotte."),
      primary: [t("Request a Quote", "Solicitar cotizaci\xF3n"), "estimate.html#contact"],
      secondary: [t("Call +1 239-689-5496", "Llamar +1 239-689-5496"), "tel:2396895496"]
    }
  );
};
Object.assign(window, { LocationsHero, LocationsYards, LocationsPickup, LocationsCTA });
