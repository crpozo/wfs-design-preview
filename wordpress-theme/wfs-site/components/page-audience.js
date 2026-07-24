const HomeownerHero = () => {
  const t = useT();
  const checks = [
    { EN: "No minimums", ES: "Sin m\xEDnimos" },
    { EN: "Free takeoff", ES: "Despiece gratis" },
    { EN: "Supplier-direct floor", ES: "Precio directo de proveedor" }
  ];
  return /* @__PURE__ */ React.createElement("section", { style: {
    position: "relative",
    color: "var(--white)",
    overflow: "hidden",
    minHeight: "calc(100svh - 118px)",
    display: "flex",
    flexDirection: "column",
    background: "#263166"
  } }, /* @__PURE__ */ React.createElement("img", { src: "https://crpozo.github.io/wfs-design-preview/assets/projects/pvc-closed-top-white.jpg", alt: "", "aria-hidden": true, style: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center 60%",
    zIndex: 0
  } }), /* @__PURE__ */ React.createElement("div", { "aria-hidden": true, style: {
    position: "absolute",
    inset: 0,
    zIndex: 1,
    background: "linear-gradient(100deg, rgba(38, 49, 102,0.92) 0%, rgba(38, 49, 102,0.72) 40%, rgba(38, 49, 102,0.45) 75%, rgba(38, 49, 102,0.3) 100%)"
  } }), /* @__PURE__ */ React.createElement("div", { "aria-hidden": true, style: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "34%",
    zIndex: 1,
    background: "linear-gradient(180deg, rgba(38, 49, 102,0) 0%, rgba(38, 49, 102,0.6) 70%, rgba(38, 49, 102,0.8) 100%)"
  } }), /* @__PURE__ */ React.createElement("div", { className: "container", style: {
    position: "relative",
    zIndex: 2,
    width: "100%",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    paddingTop: 44,
    paddingBottom: 26
  } }, /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: 680 } }, /* @__PURE__ */ React.createElement("div", { className: "mono", style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 14,
    marginBottom: 24,
    fontSize: "clamp(12px, 1.1vw, 13px)",
    fontWeight: 700,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.85)"
  } }, /* @__PURE__ */ React.createElement("span", { "aria-hidden": true, style: { width: 34, height: 3, background: "var(--tangerine)", borderRadius: 2 } }), t("Homeowner \xB7 Built for residential", "Propietario \xB7 Dise\xF1ado para residencial")), /* @__PURE__ */ React.createElement("h1", { style: {
    margin: "0 0 22px",
    fontFamily: "var(--display)",
    fontVariationSettings: "'wdth' 100",
    fontWeight: 800,
    fontSize: "clamp(32px, 4vw, 54px)",
    lineHeight: 1.02,
    letterSpacing: "-0.02em",
    textTransform: "uppercase",
    color: "var(--white)",
    textShadow: "0 2px 28px rgba(0,0,0,0.28)"
  } }, t("Fence solutions", "Soluciones de cercas"), " ", /* @__PURE__ */ React.createElement("span", { style: { color: "var(--coral)" } }, t("for your home.", "para tu hogar."))), /* @__PURE__ */ React.createElement("p", { style: {
    fontSize: 17.5,
    lineHeight: 1.55,
    maxWidth: 440,
    margin: "0 0 26px",
    color: "rgba(255,255,255,0.85)"
  } }, t("Premium manufacturing-direct fencing. We help you plan the project and quote the material for the build.", "Cercas premium directas de f\xE1brica. Te ayudamos a planear el proyecto y a cotizar el material para la obra.")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" } }, /* @__PURE__ */ React.createElement(
    "a",
    {
      href: "estimate.html#contact",
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        padding: "16px 26px",
        borderRadius: 999,
        background: "var(--tangerine)",
        color: "var(--white)",
        fontFamily: "var(--sans)",
        fontSize: 16.5,
        fontWeight: 600,
        letterSpacing: "0.01em",
        boxShadow: "0 8px 24px rgba(255, 113, 51,0.35)",
        transition: "transform 0.18s, box-shadow 0.18s, background 0.18s"
      },
      onMouseEnter: (e) => {
        e.currentTarget.style.transform = "translateY(-1px)";
        e.currentTarget.style.boxShadow = "0 12px 32px rgba(255, 113, 51,0.45)";
      },
      onMouseLeave: (e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(255, 113, 51,0.35)";
      }
    },
    t("Get started", "Comenzar"),
    /* @__PURE__ */ React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M3 8h10m0 0L9 4m4 4l-4 4", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" }))
  ), /* @__PURE__ */ React.createElement(
    "a",
    {
      href: "#fences",
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        padding: "16px 26px",
        borderRadius: 999,
        background: "rgba(255,255,255,0.08)",
        color: "var(--white)",
        border: "1px solid rgba(255,255,255,0.55)",
        backdropFilter: "blur(6px)",
        fontFamily: "var(--sans)",
        fontSize: 16.5,
        fontWeight: 600,
        letterSpacing: "0.01em",
        transition: "background 0.18s, border-color 0.18s"
      },
      onMouseEnter: (e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.18)";
        e.currentTarget.style.borderColor = "var(--white)";
      },
      onMouseLeave: (e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.08)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.55)";
      }
    },
    t("See fence styles", "Ver estilos de cerca"),
    /* @__PURE__ */ React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M3 8h10m0 0L9 4m4 4l-4 4", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" }))
  ))), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 28,
    paddingTop: 20,
    borderTop: "1px solid rgba(255,255,255,0.18)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 24,
    flexWrap: "wrap"
  } }, /* @__PURE__ */ React.createElement("div", { className: "mono", style: {
    display: "flex",
    gap: 24,
    flexWrap: "wrap",
    fontSize: 13.5,
    fontWeight: 700,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "var(--white)"
  } }, checks.map((c, i) => /* @__PURE__ */ React.createElement("span", { key: i, style: { display: "inline-flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement("svg", { width: "12", height: "12", viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M3 8 L7 12 L13 4", stroke: "var(--tangerine)", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })), t(c)))))));
};
const HomeownerTrustStrip = () => {
  const t = useT();
  return /* @__PURE__ */ React.createElement("section", { style: {
    background: "var(--white)",
    borderTop: "1px solid rgba(38, 49, 102,0.1)",
    borderBottom: "1px solid rgba(38, 49, 102,0.1)",
    padding: "32px 0"
  } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "wfs-stat-grid", style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0 } }, [
    ["22+", { EN: "Years family-owned", ES: "A\xF1os familia propietaria" }],
    ["2", { EN: "Yards \xB7 FM + PC", ES: "Sucursales \xB7 FM + PC" }],
    ["2", { EN: "Yards \xB7 FM + PC", ES: "Sucursales \xB7 FM + PC" }],
    ["24h", { EN: "Quote turnaround", ES: "Cotizaci\xF3n en 24h" }]
  ].map(([n, l], i) => /* @__PURE__ */ React.createElement("div", { key: n, className: "wfs-stat-cell", style: {
    paddingLeft: i === 0 ? 0 : 24,
    borderLeft: i === 0 ? "none" : "1px solid rgba(38, 49, 102,0.1)"
  } }, /* @__PURE__ */ React.createElement("div", { className: "display", style: {
    fontSize: "clamp(32px, 3.6vw, 48px)",
    lineHeight: 1,
    color: "var(--ink)",
    letterSpacing: "-0.02em"
  } }, n), /* @__PURE__ */ React.createElement("div", { className: "mono", style: {
    marginTop: 10,
    fontSize: 14,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--charcoal)",
    fontWeight: 700
  } }, t(l)))))));
};
const HomeownerSteps = () => {
  const t = useT();
  const steps = [
    { title: { EN: "Draw your fence", ES: "Dibuja tu cerca" }, body: { EN: "Sketch your layout to visualize the project.", ES: "Esboza la distribuci\xF3n para visualizar el proyecto." }, icon: /* @__PURE__ */ React.createElement("svg", { width: "30", height: "30", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M12 19 L7 21 L9 16 L18 7 L21 10 Z" }), /* @__PURE__ */ React.createElement("path", { d: "M16 9 L19 12" })) },
    { title: { EN: "Get an estimate", ES: "Obt\xE9n un estimado" }, body: { EN: "A rough idea of the cost, online and instant.", ES: "Una idea aproximada del costo, en l\xEDnea y al instante." }, icon: /* @__PURE__ */ React.createElement("svg", { width: "28", height: "28", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5" }, /* @__PURE__ */ React.createElement("rect", { x: "5", y: "3", width: "14", height: "18", rx: "1" }), /* @__PURE__ */ React.createElement("rect", { x: "7.5", y: "5.5", width: "9", height: "4" }), /* @__PURE__ */ React.createElement("circle", { cx: "9", cy: "13", r: "0.6", fill: "currentColor" }), /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "13", r: "0.6", fill: "currentColor" }), /* @__PURE__ */ React.createElement("circle", { cx: "15", cy: "13", r: "0.6", fill: "currentColor" }), /* @__PURE__ */ React.createElement("circle", { cx: "9", cy: "16", r: "0.6", fill: "currentColor" }), /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "16", r: "0.6", fill: "currentColor" }), /* @__PURE__ */ React.createElement("circle", { cx: "15", cy: "16", r: "0.6", fill: "currentColor" })) },
    { title: { EN: "Talk to a rep", ES: "Habla con un asesor" }, body: { EN: "One rep follows your order, Mon\u2013Fri at both yards.", ES: "Un asesor sigue tu pedido, lun\u2013vie en ambas sucursales." }, icon: /* @__PURE__ */ React.createElement("svg", { width: "28", height: "28", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M21 12 a9 9 0 1 0 -3.5 7.1 L21 20 Z" }), /* @__PURE__ */ React.createElement("circle", { cx: "9", cy: "12", r: "0.8", fill: "currentColor" }), /* @__PURE__ */ React.createElement("circle", { cx: "12.5", cy: "12", r: "0.8", fill: "currentColor" }), /* @__PURE__ */ React.createElement("circle", { cx: "16", cy: "12", r: "0.8", fill: "currentColor" })) },
    { title: { EN: "Get a quote", ES: "Recibe tu cotizaci\xF3n" }, body: { EN: "A final, detailed quote in 24 hours.", ES: "Una cotizaci\xF3n final y detallada en 24 horas." }, icon: /* @__PURE__ */ React.createElement("svg", { width: "28", height: "28", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5" }, /* @__PURE__ */ React.createElement("path", { d: "M7 3 H15 L19 7 V21 H7 Z" }), /* @__PURE__ */ React.createElement("path", { d: "M15 3 V7 H19" }), /* @__PURE__ */ React.createElement("line", { x1: "9", y1: "12", x2: "17", y2: "12" }), /* @__PURE__ */ React.createElement("line", { x1: "9", y1: "15", x2: "17", y2: "15" }), /* @__PURE__ */ React.createElement("line", { x1: "9", y1: "18", x2: "13", y2: "18" })) },
    { title: { EN: "Fabrication", ES: "Fabricaci\xF3n" }, body: { EN: "Gates and custom work built in our Fort Myers shop.", ES: "Portones y trabajos a medida hechos en nuestro taller de Fort Myers." }, icon: /* @__PURE__ */ React.createElement("svg", { width: "30", height: "30", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5" }, /* @__PURE__ */ React.createElement("path", { d: "M3 21 V11 L9 14 V11 L15 14 V11 L21 14 V21 Z" }), /* @__PURE__ */ React.createElement("line", { x1: "3", y1: "21", x2: "21", y2: "21" })) },
    { title: { EN: "The build", ES: "La obra" }, body: { EN: "Supply-only: your installer or contractor handles the build with our materials.", ES: "Solo suministro: tu instalador o contratista se encarga de la obra con nuestros materiales." }, icon: /* @__PURE__ */ React.createElement("svg", { width: "28", height: "28", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5" }, /* @__PURE__ */ React.createElement("path", { d: "M12 3 L19 6 V12 Q19 17 12 21 Q5 17 5 12 V6 Z" }), /* @__PURE__ */ React.createElement("path", { d: "M9 12 L11 14 L15 10", strokeLinecap: "round", strokeLinejoin: "round" })) }
  ];
  const Step = ({ st, below }) => /* @__PURE__ */ React.createElement("div", { style: { position: "relative", paddingRight: 12 } }, below && /* @__PURE__ */ React.createElement("span", { "aria-hidden": true, style: { display: "block", width: 3, height: 26, background: "var(--tangerine)", marginBottom: 14 } }), /* @__PURE__ */ React.createElement("span", { style: { display: "inline-flex", color: "var(--ink)", marginBottom: 12 } }, st.icon), /* @__PURE__ */ React.createElement("h3", { className: "display", style: {
    margin: "0 0 8px",
    fontSize: 18.5,
    fontWeight: 800,
    letterSpacing: "0.01em",
    textTransform: "uppercase",
    color: "var(--ink)"
  } }, t(st.title)), /* @__PURE__ */ React.createElement("p", { style: { margin: 0, maxWidth: 250, fontSize: 15, lineHeight: 1.55, color: "var(--charcoal)" } }, t(st.body)), !below && /* @__PURE__ */ React.createElement("span", { "aria-hidden": true, style: { display: "block", width: 3, height: 26, background: "var(--tangerine)", marginTop: 14 } }));
  return /* @__PURE__ */ React.createElement("section", { style: { background: "var(--white)", padding: "120px 0", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 48,
    alignItems: "end",
    marginBottom: "clamp(48px, 8vh, 96px)"
  } }, /* @__PURE__ */ React.createElement("h2", { className: "display", style: {
    margin: 0,
    fontSize: "clamp(30px, 3.4vw, 46px)",
    lineHeight: 1.02,
    letterSpacing: "-0.01em",
    fontWeight: 800,
    textTransform: "uppercase"
  } }, t("Measure once,", "Mide una vez,"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--tangerine)" } }, t("build once.", "construye una vez."))), /* @__PURE__ */ React.createElement("p", { style: {
    margin: 0,
    maxWidth: 340,
    justifySelf: "end",
    textAlign: "right",
    fontSize: 16,
    lineHeight: 1.6,
    color: "var(--charcoal)"
  } }, t("Six marks on the tape, from the first sketch to the last post.", "Seis marcas en la cinta, del primer boceto al \xFAltimo poste."))), /* @__PURE__ */ React.createElement("div", { className: "wfs-tape-wrap" }, /* @__PURE__ */ React.createElement("div", { className: "wfs-tape-row", style: {
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    alignItems: "end"
  } }, /* @__PURE__ */ React.createElement("div", { style: { gridColumn: "1 / span 2" } }, /* @__PURE__ */ React.createElement(Step, { st: steps[0] })), /* @__PURE__ */ React.createElement("div", { style: { gridColumn: "3 / span 2" } }, /* @__PURE__ */ React.createElement(Step, { st: steps[2] })), /* @__PURE__ */ React.createElement("div", { style: { gridColumn: "5 / span 2" } }, /* @__PURE__ */ React.createElement(Step, { st: steps[4] }))), /* @__PURE__ */ React.createElement("div", { className: "wfs-tape", "aria-hidden": true, style: { position: "relative", height: 88 } }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "var(--ink)" } }), /* @__PURE__ */ React.createElement("span", { style: {
    position: "absolute",
    left: -3,
    top: -8,
    width: 18,
    height: 18,
    borderRadius: "50%",
    border: "3px solid var(--ink)",
    background: "var(--white)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  } }, /* @__PURE__ */ React.createElement("span", { style: { width: 6, height: 6, borderRadius: "50%", background: "var(--ink)" } })), /* @__PURE__ */ React.createElement("span", { style: { position: "absolute", right: 0, top: -14, width: 9, height: 74, background: "var(--tangerine)" } }), /* @__PURE__ */ React.createElement("span", { className: "mono", style: {
    position: "absolute",
    right: 0,
    top: 82,
    fontSize: 13.5,
    fontWeight: 700,
    letterSpacing: "0.2em",
    color: "var(--tangerine)",
    textTransform: "uppercase"
  } }, t("Done", "Listo")), /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    top: 3,
    left: 0,
    right: 0,
    height: 58,
    backgroundImage: "repeating-linear-gradient(90deg, rgba(38,49,102,0.16) 0, rgba(38,49,102,0.16) 1px, transparent 1px, transparent 3.333%)",
    borderBottom: "1px solid rgba(38,49,102,0.12)"
  } })), /* @__PURE__ */ React.createElement("div", { className: "wfs-tape-row", style: {
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    alignItems: "start"
  } }, /* @__PURE__ */ React.createElement("div", { style: { gridColumn: "2 / span 2" } }, /* @__PURE__ */ React.createElement(Step, { st: steps[1], below: true })), /* @__PURE__ */ React.createElement("div", { style: { gridColumn: "4 / span 2" } }, /* @__PURE__ */ React.createElement(Step, { st: steps[3], below: true })), /* @__PURE__ */ React.createElement("div", { style: { gridColumn: "6 / span 2" } }, /* @__PURE__ */ React.createElement(Step, { st: steps[5], below: true })))), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: "clamp(36px, 6vh, 64px)",
    paddingTop: 24,
    borderTop: "1px solid rgba(0,16,17,0.1)",
    display: "flex",
    justifyContent: "flex-end"
  } }, /* @__PURE__ */ React.createElement("a", { href: "https://app.westernfencesupply.com/", target: "_blank", rel: "noopener", className: "mono", style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    fontSize: 14,
    fontWeight: 700,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "var(--tangerine)"
  } }, t("Start drawing your fence", "Empieza a dibujar tu cerca"), /* @__PURE__ */ React.createElement("svg", { width: "13", height: "13", viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M3 8h10m0 0L9 4m4 4l-4 4", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "square" }))))));
};
const HomeownerStylePicker = () => {
  const t = useT();
  return /* @__PURE__ */ React.createElement("section", { style: { background: "var(--white)", padding: "120px 0" } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 48,
    alignItems: "end",
    marginBottom: 40,
    paddingBottom: 24,
    borderBottom: "1px solid rgba(38, 49, 102,0.12)"
  } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "mono", style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 12,
    fontSize: 14,
    fontWeight: 700,
    letterSpacing: "0.22em",
    color: "var(--tangerine)",
    textTransform: "uppercase",
    marginBottom: 18
  } }, /* @__PURE__ */ React.createElement("span", null, t("02, Styles", "02, Estilos")), /* @__PURE__ */ React.createElement("span", { style: { width: 32, height: 1, background: "var(--tangerine)" } })), /* @__PURE__ */ React.createElement("h2", { className: "display", style: {
    margin: 0,
    fontSize: "clamp(28px, 3vw, 40px)",
    lineHeight: 1,
    letterSpacing: "-0.02em",
    fontWeight: 800
  } }, t("Find the style", "Encuentra el estilo"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--tangerine)" } }, t("that fits your home.", "que va con tu hogar.")))), /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: 18
  } }, /* @__PURE__ */ React.createElement("p", { style: {
    margin: 0,
    maxWidth: 380,
    fontSize: 15.5,
    lineHeight: 1.55,
    color: "var(--charcoal)",
    textAlign: "right"
  } }, t(
    "Five residential systems we manufacture in-house, pick the one that matches your priorities for privacy, pool-code, curb appeal or pet containment.",
    "Cinco sistemas residenciales que fabricamos en planta, elige el que mejor encaja con tus prioridades: privacidad, c\xF3digo de piscinas, est\xE9tica o contener mascotas."
  )), /* @__PURE__ */ React.createElement("a", { href: "products.html", className: "mono", style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    fontSize: 14,
    fontWeight: 700,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--ink)",
    borderBottom: "1px solid var(--ink)",
    paddingBottom: 4
  } }, t("Full catalog", "Cat\xE1logo completo"), /* @__PURE__ */ React.createElement("svg", { width: "12", height: "12", viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M3 8h10m0 0L9 4m4 4l-4 4", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "square" }))))), /* @__PURE__ */ React.createElement("div", { style: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: 14
  } }, FENCE_CATEGORIES.map((c, i) => /* @__PURE__ */ React.createElement(FenceStyleCard, { key: c.id, item: c, index: i })))));
};
const HomeownerInstallerSplit = () => {
  const t = useT();
  const HoverCard = ({ children, theme, ...rest }) => {
    const dark = theme === "dark";
    return /* @__PURE__ */ React.createElement(
      "article",
      {
        ...rest,
        onMouseEnter: (e) => {
          e.currentTarget.style.transform = "translateY(-4px)";
          e.currentTarget.style.boxShadow = dark ? "0 18px 36px rgba(0,0,0,0.35)" : "12px 12px 0 var(--tangerine)";
        },
        onMouseLeave: (e) => {
          e.currentTarget.style.transform = "";
          e.currentTarget.style.boxShadow = dark ? "0 8px 18px rgba(0,0,0,0.2)" : "8px 8px 0 rgba(255,113,51,0.85)";
        },
        style: {
          background: dark ? "var(--ink)" : "var(--white)",
          color: dark ? "var(--white)" : "var(--ink)",
          border: dark ? "none" : "1.5px solid var(--ink)",
          padding: "40px 44px 36px",
          display: "flex",
          flexDirection: "column",
          boxShadow: dark ? "0 8px 18px rgba(0,0,0,0.2)" : "8px 8px 0 rgba(255,113,51,0.85)",
          transition: "transform 0.2s ease, box-shadow 0.2s ease"
        }
      },
      children
    );
  };
  return /* @__PURE__ */ React.createElement("section", { style: { background: "#ffffff", padding: "120px 0" } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", marginBottom: 56 } }, /* @__PURE__ */ React.createElement("h2", { className: "display", style: {
    margin: 0,
    fontSize: "clamp(28px, 3.4vw, 44px)",
    lineHeight: 1,
    letterSpacing: "-0.015em",
    color: "var(--ink)"
  } }, t("WFS supplies. Your installer builds.", "WFS suministra. Tu instalador construye."))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr", gap: 24, maxWidth: 640, margin: "0 auto", alignItems: "stretch" } }, /* @__PURE__ */ React.createElement(HoverCard, { theme: "dark" }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 28
  } }, /* @__PURE__ */ React.createElement("span", { className: "mono", style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "6px 12px",
    background: "var(--tangerine)",
    color: "var(--ink)",
    fontSize: 13.5,
    fontWeight: 700,
    letterSpacing: "0.22em",
    textTransform: "uppercase"
  } }, t("What you get", "Qu\xE9 obtienes")), /* @__PURE__ */ React.createElement("svg", { width: "34", height: "34", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5" }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "9", strokeDasharray: "2 1.5" }), /* @__PURE__ */ React.createElement("path", { d: "M9 12 L11 14 L15 10", strokeLinecap: "round", strokeLinejoin: "round", strokeDasharray: "0" }))), /* @__PURE__ */ React.createElement("h3", { className: "display", style: {
    margin: "0 0 18px",
    fontSize: "clamp(22px, 2.2vw, 30px)",
    lineHeight: 1.05,
    letterSpacing: "-0.01em"
  } }, t("Spec-aligned outcomes", "Resultados alineados con las especificaciones")), /* @__PURE__ */ React.createElement("p", { className: "mono", style: {
    margin: "0 0 26px",
    fontSize: 14.5,
    lineHeight: 1.7,
    color: "rgba(255,255,255,0.7)"
  } }, t(
    "Your installer stays independent, but the project stays aligned with WFS material specs, fabrication details, and finish expectations.",
    "Tu instalador es independiente, pero el proyecto se mantiene alineado con las especificaciones de material, detalles de fabricaci\xF3n y acabados de WFS."
  )), /* @__PURE__ */ React.createElement("ul", { style: { listStyle: "none", margin: "0 0 32px", padding: 0, display: "grid", gap: 12 } }, [
    { line: { EN: "Local crews familiar with WFS systems", ES: "Cuadrillas locales familiarizadas con los sistemas WFS" }, icon: /* @__PURE__ */ React.createElement("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5" }, /* @__PURE__ */ React.createElement("circle", { cx: "9", cy: "9", r: "3" }), /* @__PURE__ */ React.createElement("circle", { cx: "17", cy: "10", r: "2.5" }), /* @__PURE__ */ React.createElement("path", { d: "M3 19 Q9 14 15 19" }), /* @__PURE__ */ React.createElement("path", { d: "M14 18 Q17.5 15 21 18" })) },
    { line: { EN: "Installation practices that support warranty-friendly outcomes", ES: "Pr\xE1cticas de instalaci\xF3n que respaldan la cobertura de garant\xEDa" }, icon: /* @__PURE__ */ React.createElement("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5" }, /* @__PURE__ */ React.createElement("path", { d: "M12 3 L19 6 V12 Q19 17 12 21 Q5 17 5 12 V6 Z" }), /* @__PURE__ */ React.createElement("path", { d: "M9 12 L11 14 L15 10", strokeLinecap: "round", strokeLinejoin: "round" })) },
    { line: { EN: "Spec sheets and drawings ready for your submittals", ES: "Fichas t\xE9cnicas y planos listos para tus tr\xE1mites" }, icon: /* @__PURE__ */ React.createElement("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5" }, /* @__PURE__ */ React.createElement("rect", { x: "4", y: "6", width: "16", height: "14", rx: "1" }), /* @__PURE__ */ React.createElement("line", { x1: "4", y1: "10", x2: "20", y2: "10" }), /* @__PURE__ */ React.createElement("path", { d: "M8 14 L11 17 L17 12", strokeLinecap: "round", strokeLinejoin: "round" })) }
  ].map((b, i) => /* @__PURE__ */ React.createElement("li", { key: i, style: { display: "flex", alignItems: "flex-start", gap: 12 } }, /* @__PURE__ */ React.createElement("span", { style: { flexShrink: 0, marginTop: 1, color: "var(--tangerine)" } }, b.icon), /* @__PURE__ */ React.createElement("span", { className: "mono", style: { fontSize: 14.5, lineHeight: 1.55, color: "var(--white)" } }, t(b.line))))), /* @__PURE__ */ React.createElement("a", { href: "estimate.html", style: {
    display: "block",
    textAlign: "center",
    marginTop: "auto",
    padding: "16px 28px",
    background: "var(--white)",
    color: "var(--ink)",
    fontFamily: "var(--sans)",
    fontSize: 14.5,
    fontWeight: 700,
    letterSpacing: "0.18em",
    textTransform: "uppercase"
  } }, t("Request Your Quote", "Solicita tu cotizaci\xF3n"))))));
};
const HomeownerTestimonial = () => {
  const t = useT();
  return /* @__PURE__ */ React.createElement("section", { style: { background: "var(--white)", padding: "120px 0" } }, /* @__PURE__ */ React.createElement("div", { className: "container", style: { maxWidth: 1200 } }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "grid",
    gridTemplateColumns: "1fr 1.4fr",
    gap: 56,
    alignItems: "center"
  } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", { className: "display", style: {
    margin: "0 0 24px",
    fontSize: "clamp(26px, 3vw, 36px)",
    lineHeight: 1.05,
    letterSpacing: "-0.015em",
    color: "var(--ink)"
  } }, t("From sketch to", "Del boceto"), /* @__PURE__ */ React.createElement("br", null), t("finished fence.", "a la cerca terminada.")), /* @__PURE__ */ React.createElement("p", { className: "mono", style: {
    margin: 0,
    fontSize: 14.5,
    lineHeight: 1.7,
    color: "var(--charcoal)",
    maxWidth: 320
  } }, t(
    "One project, three stages. The same WFS rep stayed on the order from first quote to final pickup.",
    "Un proyecto, tres etapas. El mismo representante WFS acompa\xF1\xF3 el pedido desde la primera cotizaci\xF3n hasta la entrega final."
  ))), /* @__PURE__ */ React.createElement("article", { style: {
    position: "relative",
    border: "1.5px solid var(--ink)",
    background: "var(--white)",
    padding: "44px 48px",
    boxShadow: "10px 10px 0 var(--tangerine)"
  } }, /* @__PURE__ */ React.createElement("span", { className: "display", style: {
    position: "absolute",
    top: -18,
    left: 28,
    background: "var(--white)",
    padding: "0 10px",
    fontSize: 65.5,
    lineHeight: 1,
    color: "var(--tangerine)"
  } }, "\u201C"), /* @__PURE__ */ React.createElement("p", { className: "mono", style: {
    margin: "0 0 28px",
    fontSize: 18.5,
    lineHeight: 1.55,
    color: "var(--ink)",
    fontWeight: 500
  } }, t(
    "We sent a phone-photo sketch on a Monday, had a stamped quote Tuesday, and the panels were on the trailer by Friday. The installer they paired us with knew the exact post-spacing for our windload zone.",
    "Enviamos un boceto desde el celular el lunes, tuvimos cotizaci\xF3n sellada el martes y los paneles estaban en el cami\xF3n el viernes. El instalador que nos asignaron sab\xEDa el espaciado exacto de postes para nuestra zona de carga e\xF3lica."
  )), /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    paddingTop: 24,
    borderTop: "1px dashed rgba(38, 49, 102,0.2)"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: 48,
    height: 48,
    borderRadius: "50%",
    background: "var(--ink)",
    color: "var(--white)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--display)",
    fontWeight: 700,
    fontSize: 17.5,
    letterSpacing: "0.02em"
  } }, "MR"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "display", style: {
    fontSize: 15.5,
    color: "var(--ink)",
    letterSpacing: "-0.005em"
  } }, "Marisol R."), /* @__PURE__ */ React.createElement("div", { className: "mono", style: {
    marginTop: 4,
    fontSize: 13.5,
    fontWeight: 700,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--charcoal)"
  } }, t("Cape Coral \xB7 186 LF vinyl + 2 gates", "Cape Coral \xB7 186 PL vinilo + 2 portones"))), /* @__PURE__ */ React.createElement("div", { style: { marginLeft: "auto", display: "flex", gap: 3 } }, Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ React.createElement("svg", { key: i, width: "14", height: "14", viewBox: "0 0 16 16", fill: "var(--tangerine)" }, /* @__PURE__ */ React.createElement("path", { d: "M8 1.5 L9.8 5.7 L14.5 6.1 L11 9.3 L12 14 L8 11.5 L4 14 L5 9.3 L1.5 6.1 L6.2 5.7 Z" })))))))));
};
const HomeownerFAQ = () => {
  const t = useT();
  const items = [
    [{ EN: "Do I need a permit for my fence?", ES: "\xBFNecesito permiso para mi cerca?" }, { EN: "Most Florida jurisdictions require a permit for new fences, and pool barriers have their own code requirements. The owner or installer pulls the permit; we back you up with manufacturer spec sheets for whatever you need to submit.", ES: "La mayor\xEDa de las jurisdicciones de Florida exigen permiso para cercas nuevas, y las barreras de piscina tienen sus propios requisitos de c\xF3digo. El propietario o el instalador tramita el permiso; nosotros te respaldamos con las fichas t\xE9cnicas del fabricante para lo que debas presentar." }],
    [{ EN: "Does WFS handle HOA approvals?", ES: "\xBFWFS gestiona aprobaciones de la HOA?" }, { EN: "No. WFS does not file HOA applications or handle approvals with your county or municipality, we are a material supplier only. What we do provide is the product documentation: spec sheets, styles, colors and a written quote. You or your installer submit them and manage the approval process.", ES: "No. WFS no tramita aprobaciones de HOA ni gestiona permisos ante el condado o municipio: somos \xFAnicamente proveedores de material. Lo que s\xED te entregamos es la documentaci\xF3n del producto: hojas de especificaciones (spec sheets), estilos, colores y una cotizaci\xF3n por escrito. T\xFA o tu instalador las presentan y llevan el tr\xE1mite." }],
    [{ EN: "What is the lead time for orders?", ES: "\xBFCu\xE1l es el tiempo de entrega de los pedidos?" }, { EN: "Stocked items are ready right away. Custom gates and non-stock items vary by product; we confirm the exact lead time before you approve the quote.", ES: "Lo que est\xE1 en stock est\xE1 listo de inmediato. Los portones a medida y los art\xEDculos fuera de stock var\xEDan seg\xFAn el producto; confirmamos el plazo exacto antes de que apruebes la cotizaci\xF3n." }],
    [{ EN: "How do I connect with an installer?", ES: "\xBFC\xF3mo me conecto con un instalador?" }, { EN: "Ask your rep. We can recommend trusted local installers who use our materials every week; they quote the labor and the material stays on your WFS quote.", ES: "Pregunta a tu asesor. Podemos recomendarte instaladores locales de confianza que usan nuestros materiales cada semana; ellos cotizan la mano de obra y el material queda en tu cotizaci\xF3n WFS." }]
  ];
  const [open, setOpen] = React.useState(0);
  const [ctaHover, setCtaHover] = React.useState(false);
  return /* @__PURE__ */ React.createElement("section", { style: { background: "var(--white)", padding: "120px 0" } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 64, alignItems: "start" } }, /* @__PURE__ */ React.createElement("div", { className: "wfs-faq-sidebar", style: { position: "sticky", top: 100 } }, /* @__PURE__ */ React.createElement("h2", { className: "display", style: {
    margin: 0,
    fontSize: "clamp(28px, 3vw, 40px)",
    lineHeight: 1,
    letterSpacing: "-0.02em",
    fontWeight: 800
  } }, t("Common homeowner", "Preguntas comunes de"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--tangerine)" } }, t("questions.", "propietarios."))), /* @__PURE__ */ React.createElement("p", { style: {
    marginTop: 24,
    fontSize: 15.5,
    lineHeight: 1.6,
    color: "var(--charcoal)",
    maxWidth: 340,
    marginBottom: 28
  } }, t("The four we hear most often. If yours isn't here, call the yard or email", "Las cuatro que m\xE1s escuchamos. Si la tuya no est\xE1 aqu\xED, llama a la sucursal o escribe a"), " ", /* @__PURE__ */ React.createElement("a", { href: "mailto:sales@westernfencesupply.com", style: {
    color: "var(--ink)",
    borderBottom: "1px solid var(--tangerine)"
  } }, "sales@westernfencesupply.com"), "."), /* @__PURE__ */ React.createElement(
    "a",
    {
      href: "estimate.html#contact",
      onMouseEnter: () => setCtaHover(true),
      onMouseLeave: () => setCtaHover(false),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 14,
        padding: "14px 14px 14px 26px",
        borderRadius: 999,
        background: ctaHover ? "var(--laser-blue)" : "var(--ink)",
        color: "var(--white)",
        textDecoration: "none",
        fontFamily: "var(--sans)",
        fontSize: 14.5,
        fontWeight: 700,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        transition: "background 0.2s ease, transform 0.2s ease",
        transform: ctaHover ? "translateY(-1px)" : "none",
        boxShadow: "0 18px 36px -18px rgba(38, 49, 102,0.5)"
      }
    },
    t("Talk to a sales rep", "Habla con un representante"),
    /* @__PURE__ */ React.createElement("span", { style: {
      width: 30,
      height: 30,
      borderRadius: "50%",
      background: "var(--tangerine)",
      color: "var(--ink)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    } }, /* @__PURE__ */ React.createElement("svg", { width: "13", height: "13", viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M3 8h10m0 0L9 4m4 4l-4 4", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "square" })))
  )), /* @__PURE__ */ React.createElement("div", null, items.map(([q, a], i) => {
    const isOpen = open === i;
    return /* @__PURE__ */ React.createElement("div", { key: i, style: {
      borderBottom: "1px solid rgba(0,16,17,0.12)",
      borderLeft: `2px solid ${isOpen ? "var(--tangerine)" : "transparent"}`,
      paddingLeft: isOpen ? 20 : 0,
      background: "transparent",
      transition: "all 0.25s ease"
    } }, /* @__PURE__ */ React.createElement("button", { onClick: () => setOpen(isOpen ? -1 : i), style: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "22px 0",
      textAlign: "left",
      gap: 24
    } }, /* @__PURE__ */ React.createElement("span", { style: { display: "flex", gap: 20, alignItems: "baseline" } }, /* @__PURE__ */ React.createElement("span", { className: "mono", style: {
      fontSize: 14,
      fontWeight: 700,
      letterSpacing: "0.22em",
      color: isOpen ? "var(--tangerine)" : "var(--charcoal)",
      transition: "color 0.25s ease"
    } }, String(i + 1).padStart(2, "0")), /* @__PURE__ */ React.createElement("span", { style: {
      fontSize: 18.5,
      fontWeight: 500,
      color: "var(--ink)",
      letterSpacing: "-0.005em"
    } }, t(q))), /* @__PURE__ */ React.createElement("span", { className: "wfs-faq-toggle", style: {
      width: 28,
      height: 28,
      background: isOpen ? "var(--tangerine)" : "transparent",
      border: `1px solid ${isOpen ? "var(--tangerine)" : "rgba(0,16,17,0.2)"}`,
      color: "var(--ink)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      transition: "all 0.2s ease"
    } }, /* @__PURE__ */ React.createElement("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M2 6h8", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "square" }), !isOpen && /* @__PURE__ */ React.createElement("path", { d: "M6 2v8", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "square" })))), /* @__PURE__ */ React.createElement("div", { style: {
      maxHeight: isOpen ? 200 : 0,
      overflow: "hidden",
      transition: "max-height 0.3s ease"
    } }, /* @__PURE__ */ React.createElement("p", { style: {
      fontSize: 16.5,
      lineHeight: 1.6,
      color: "var(--ink)",
      opacity: 0.78,
      margin: "0 0 22px",
      paddingLeft: 40,
      maxWidth: 640
    } }, t(a))));
  })))));
};
const HomeownerClosingCTA = () => {
  const t = useT();
  return /* @__PURE__ */ React.createElement("section", { style: {
    background: "var(--ink)",
    color: "var(--white)",
    padding: "120px 0",
    position: "relative",
    overflow: "hidden"
  } }, /* @__PURE__ */ React.createElement("div", { "aria-hidden": true, style: {
    position: "absolute",
    inset: 0,
    opacity: 0.08,
    backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
    backgroundSize: "24px 24px",
    pointerEvents: "none"
  } }), /* @__PURE__ */ React.createElement("div", { className: "container", style: {
    position: "relative",
    display: "grid",
    gridTemplateColumns: "1.4fr 1fr",
    gap: 48,
    alignItems: "center"
  } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", { className: "display", style: {
    margin: 0,
    fontSize: "clamp(32px, 4vw, 56px)",
    lineHeight: 1,
    letterSpacing: "-0.02em",
    color: "var(--white)"
  } }, t("Send a sketch.", "Env\xEDa un boceto."), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--tangerine)" } }, t("Quote in 24 hours.", "Cotizaci\xF3n en 24 horas."))), /* @__PURE__ */ React.createElement("p", { className: "mono", style: {
    margin: "22px 0 0",
    maxWidth: 520,
    fontSize: 14.5,
    lineHeight: 1.7,
    color: "rgba(255,255,255,0.7)"
  } }, t(
    "Linear feet, height, gate count and ZIP. One rep follows the order from quote to pickup or delivery, and routes the labor side to a certified installer near you.",
    "Pies lineales, altura, n\xFAmero de portones y c\xF3digo postal. Un representante sigue el pedido desde cotizaci\xF3n hasta recogida o entrega, y enruta la mano de obra a un instalador certificado cercano."
  ))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14, alignItems: "stretch" } }, /* @__PURE__ */ React.createElement("a", { href: "estimate.html", style: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "18px 28px",
    background: "var(--tangerine)",
    color: "var(--white)",
    fontFamily: "var(--sans)",
    fontSize: 14.5,
    fontWeight: 700,
    letterSpacing: "0.18em",
    textTransform: "uppercase"
  } }, t("Get a Quote", "Cotizar")), /* @__PURE__ */ React.createElement("a", { href: "tel:2396895496", style: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "18px 28px",
    background: "transparent",
    color: "var(--white)",
    border: "1.5px solid rgba(255,255,255,0.5)",
    fontFamily: "var(--sans)",
    fontSize: 14.5,
    fontWeight: 700,
    letterSpacing: "0.18em",
    textTransform: "uppercase"
  } }, t("Call (239) 689-5496", "Llamar (239) 689-5496")))));
};
const HomeownerPaths = () => {
  const t = useT();
  const [hover, setHover] = React.useState(-1);
  const paths = [
    {
      pill: t("No minimums", "Sin m\xEDnimos"),
      title: t("I want to repair my fence", "Quiero reparar mi cerca"),
      body: t("Buy exactly what you need, piece by piece, from a single picket to a full rail, post, cap or bracket. No minimums, supplier-direct pricing. Fix what broke without paying for a whole new fence.", "Compra exactamente lo que necesitas, pieza por pieza: desde un solo picket hasta un riel completo, poste, tapa o soporte. Sin m\xEDnimos y con precio directo de proveedor. Arregla lo que se da\xF1\xF3 sin pagar por una cerca nueva completa."),
      cta: t("Shop repair parts", "Comprar repuestos"),
      href: "products.html",
      icon: /* @__PURE__ */ React.createElement("svg", { width: "26", height: "26", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M14.7 6.3a3.8 3.8 0 0 0-5 5l-5 5 2 2 5-5a3.8 3.8 0 0 0 5-5l-2.4 2.4-2-.5-.5-2Z" }))
    },
    {
      pill: t("Wholesale pricing", "Precio mayorista"),
      title: t("New project \xB7 new fence installation", "Proyecto nuevo \xB7 instalaci\xF3n de cerca"),
      body: t("We give you everything you need to build it yourself, complete DIY fence kits cut to your layout, with the hardware and step-by-step guidance to install it. And because we don't install fences, you get true wholesale, supplier-direct pricing.", "Te damos todo lo que necesitas para armarla t\xFA mismo: kits DIY completos, cortados a tu medida, con los herrajes y la gu\xEDa paso a paso para instalarla. Y como no instalamos cercas, obtienes precio mayorista real, directo de proveedor."),
      cta: t("Start my project", "Empezar mi proyecto"),
      href: "estimate.html#contact",
      accent: true,
      icon: /* @__PURE__ */ React.createElement("svg", { width: "26", height: "26", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M3 11 L12 4 L21 11" }), /* @__PURE__ */ React.createElement("path", { d: "M5 10 V20 H19 V10" }))
    }
  ];
  return /* @__PURE__ */ React.createElement("section", { style: { background: "#f5f5f7", padding: "clamp(80px, 10vh, 112px) 0" } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", maxWidth: 640, margin: "0 auto clamp(40px, 6vh, 60px)" } }, /* @__PURE__ */ React.createElement("div", { className: "mono", style: { fontSize: 13.5, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--tangerine)", fontWeight: 700, marginBottom: 14 } }, t("Two ways to start", "Dos maneras de empezar")), /* @__PURE__ */ React.createElement("h2", { className: "display", style: { margin: 0, fontSize: "clamp(28px, 3vw, 42px)", lineHeight: 1.05, letterSpacing: "-0.02em", fontWeight: 800, textTransform: "uppercase" } }, t("What brings you in", "\xBFQu\xE9 te trae"), " ", /* @__PURE__ */ React.createElement("span", { style: { color: "var(--tangerine)" } }, t("today?", "hoy?"))), /* @__PURE__ */ React.createElement("p", { style: { margin: "16px auto 0", fontSize: 16.5, lineHeight: 1.6, color: "var(--charcoal)", maxWidth: 520 } }, t("Pick your path, a quick repair or a full new fence. Either way you buy direct, and since we don't install, there's no installer markup.", "Elige tu camino: una reparaci\xF3n r\xE1pida o una cerca nueva completa. En ambos casos compras directo y, como no instalamos, no hay margen de instalador."))), /* @__PURE__ */ React.createElement("div", { className: "wfs-paths-grid", style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 } }, paths.map((p, i) => /* @__PURE__ */ React.createElement(
    "div",
    {
      key: i,
      onMouseEnter: () => setHover(i),
      onMouseLeave: () => setHover(-1),
      style: {
        background: "var(--white)",
        borderRadius: 20,
        border: p.accent ? "1px solid rgba(255,113,51,0.45)" : "1px solid rgba(0,16,17,0.1)",
        boxShadow: hover === i ? "0 30px 60px -28px rgba(38,49,102,0.35)" : "0 18px 44px -30px rgba(38,49,102,0.24)",
        transform: hover === i ? "translateY(-4px)" : "none",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        padding: "clamp(28px, 3vw, 40px)",
        display: "flex",
        flexDirection: "column"
      }
    },
    /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 22 } }, /* @__PURE__ */ React.createElement("span", { style: {
      width: 54,
      height: 54,
      borderRadius: 14,
      flexShrink: 0,
      background: p.accent ? "var(--tangerine)" : "var(--ink)",
      color: "var(--white)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    } }, p.icon), /* @__PURE__ */ React.createElement("span", { className: "mono", style: {
      padding: "7px 14px",
      borderRadius: 999,
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      background: p.accent ? "var(--tangerine)" : "rgba(0,16,17,0.06)",
      color: p.accent ? "var(--white)" : "var(--charcoal)"
    } }, p.pill)),
    /* @__PURE__ */ React.createElement("h3", { className: "display", style: { margin: "0 0 14px", fontSize: "clamp(22px, 2vw, 27px)", lineHeight: 1.12, letterSpacing: "-0.01em", color: "var(--ink)" } }, p.title),
    /* @__PURE__ */ React.createElement("p", { style: { margin: "0 0 28px", fontSize: 16, lineHeight: 1.6, color: "var(--charcoal)" } }, p.body),
    /* @__PURE__ */ React.createElement("a", { href: p.href, style: {
      marginTop: "auto",
      alignSelf: "flex-start",
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: "14px 24px",
      borderRadius: 999,
      background: p.accent ? "var(--tangerine)" : "var(--ink)",
      color: "var(--white)",
      fontSize: 15.5,
      fontWeight: 600,
      fontFamily: "var(--sans)",
      boxShadow: p.accent ? "0 10px 26px rgba(255,113,51,0.35)" : "none"
    } }, p.cta, /* @__PURE__ */ React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M3 8h10m0 0L9 4m4 4l-4 4", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" })))
  )))));
};
const HomeownerPage = () => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(SiteHeader, null), /* @__PURE__ */ React.createElement(HomeownerHero, null), /* @__PURE__ */ React.createElement(HomeownerPaths, null), /* @__PURE__ */ React.createElement(HomeownerSteps, null), /* @__PURE__ */ React.createElement(FenceCategories, null), /* @__PURE__ */ React.createElement(HomeownerInstallerSplit, null), /* @__PURE__ */ React.createElement(HomeownerFAQ, null), /* @__PURE__ */ React.createElement(HomeownerClosingCTA, null), /* @__PURE__ */ React.createElement(Footer, null));
const ContractorHero = () => {
  const t = useT();
  const gets = [
    [{ EN: "Wholesale pricing", ES: "Precios mayoristas" }, { EN: "Manufacturer-direct tiers that scale with your volume.", ES: "Niveles directos de f\xE1brica que escalan con tu volumen." }],
    [{ EN: "Priority fabrication", ES: "Fabricaci\xF3n prioritaria" }, { EN: "Your gates jump the line, built in our shop, not shipped in.", ES: "Tus portones pasan al frente, se fabrican en nuestro taller, no llegan de fuera." }],
    [{ EN: "Job-site delivery", ES: "Entrega en obra" }, { EN: "Delivery to your job site on our own trucks across Florida, confirmed with your quote.", ES: "Entrega en tu obra con nuestros propios camiones en toda Florida, confirmada con tu cotizaci\xF3n." }]
  ];
  return /* @__PURE__ */ React.createElement("section", { style: {
    position: "relative",
    color: "var(--white)",
    overflow: "hidden",
    minHeight: "calc(100svh - 118px)",
    display: "flex",
    flexDirection: "column",
    background: "#263166"
  } }, /* @__PURE__ */ React.createElement("img", { src: "https://crpozo.github.io/wfs-design-preview/assets/hero-warehouse.webp", alt: "", "aria-hidden": true, style: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center 40%",
    zIndex: 0
  } }), /* @__PURE__ */ React.createElement("div", { "aria-hidden": true, style: {
    position: "absolute",
    inset: 0,
    zIndex: 1,
    background: "linear-gradient(100deg, rgba(38, 49, 102,0.95) 0%, rgba(38, 49, 102,0.82) 42%, rgba(38, 49, 102,0.5) 75%, rgba(38, 49, 102,0.34) 100%)"
  } }), /* @__PURE__ */ React.createElement("div", { "aria-hidden": true, style: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "38%",
    zIndex: 1,
    background: "linear-gradient(180deg, rgba(38, 49, 102,0) 0%, rgba(38, 49, 102,0.72) 70%, rgba(38, 49, 102,0.9) 100%)"
  } }), /* @__PURE__ */ React.createElement("span", { className: "mono", style: {
    position: "absolute",
    top: 22,
    right: 24,
    zIndex: 2,
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    fontSize: 13.5,
    fontWeight: 700,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--white)"
  } }, /* @__PURE__ */ React.createElement("span", { "aria-hidden": true, style: { width: 8, height: 8, borderRadius: "50%", background: "var(--tangerine)" } }), t("Will-call ready", "Listo para retiro")), /* @__PURE__ */ React.createElement("div", { className: "container", style: {
    position: "relative",
    zIndex: 2,
    width: "100%",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    paddingTop: 44,
    paddingBottom: 26
  } }, /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: 700 } }, /* @__PURE__ */ React.createElement("div", { className: "mono", style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 14,
    marginBottom: 22,
    fontSize: "clamp(12px, 1.1vw, 13px)",
    fontWeight: 700,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.85)"
  } }, /* @__PURE__ */ React.createElement("span", { "aria-hidden": true, style: { width: 34, height: 3, background: "var(--tangerine)", borderRadius: 2 } }), t("Wholesale Partner Program \xB7 Florida", "Programa de socios mayoristas \xB7 Florida")), /* @__PURE__ */ React.createElement("h1", { style: {
    margin: "0 0 20px",
    fontFamily: "var(--display)",
    fontVariationSettings: "'wdth' 100",
    fontWeight: 800,
    fontSize: "clamp(32px, 4vw, 54px)",
    lineHeight: 1.02,
    letterSpacing: "-0.02em",
    textTransform: "uppercase",
    color: "var(--white)",
    textShadow: "0 2px 28px rgba(0,0,0,0.28)"
  } }, t("Build with the", "Construye con el"), " ", /* @__PURE__ */ React.createElement("span", { style: { color: "var(--tangerine)" } }, t("manufacturer.", "fabricante."))), /* @__PURE__ */ React.createElement("p", { style: {
    fontSize: 17,
    lineHeight: 1.6,
    maxWidth: 500,
    margin: "0 0 26px",
    color: "rgba(255,255,255,0.85)"
  } }, t("Partner with Southwest Florida's leading fence manufacturer. ", "As\xF3ciate con el fabricante de cercas l\xEDder del suroeste de Florida. "), /* @__PURE__ */ React.createElement("strong", { style: { color: "var(--white)" } }, t("Wholesale pricing tiers, priority fabrication, and job-site delivery", "Niveles de precio mayorista, fabricaci\xF3n prioritaria y entrega en obra")), t(", without an out-of-state distributor in the middle.", ", sin un distribuidor de fuera del estado de por medio.")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center", marginBottom: 22 } }, /* @__PURE__ */ React.createElement(
    "a",
    {
      href: "estimate.html#contact",
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        padding: "16px 26px",
        borderRadius: 999,
        background: "var(--tangerine)",
        color: "var(--white)",
        fontFamily: "var(--sans)",
        fontSize: 16.5,
        fontWeight: 600,
        letterSpacing: "0.01em",
        boxShadow: "0 8px 24px rgba(255, 113, 51,0.35)",
        transition: "transform 0.18s, box-shadow 0.18s, background 0.18s"
      },
      onMouseEnter: (e) => {
        e.currentTarget.style.transform = "translateY(-1px)";
        e.currentTarget.style.boxShadow = "0 12px 32px rgba(255, 113, 51,0.45)";
      },
      onMouseLeave: (e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(255, 113, 51,0.35)";
      }
    },
    t("Get a quick quote", "Cotiza r\xE1pido"),
    /* @__PURE__ */ React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M3 8h10m0 0L9 4m4 4l-4 4", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" }))
  ), /* @__PURE__ */ React.createElement(
    "a",
    {
      href: "https://form.jotform.com/westernfencesupply/account-setup-form",
      target: "_blank",
      rel: "noopener",
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        padding: "16px 26px",
        borderRadius: 999,
        background: "rgba(255,255,255,0.08)",
        color: "var(--white)",
        border: "1px solid rgba(255,255,255,0.55)",
        backdropFilter: "blur(6px)",
        fontFamily: "var(--sans)",
        fontSize: 16.5,
        fontWeight: 600,
        letterSpacing: "0.01em",
        transition: "background 0.18s, border-color 0.18s"
      },
      onMouseEnter: (e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.18)";
        e.currentTarget.style.borderColor = "var(--white)";
      },
      onMouseLeave: (e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.08)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.55)";
      }
    },
    t("Become a WFS partner", "Hazte socio de WFS"),
    /* @__PURE__ */ React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M3 8h10m0 0L9 4m4 4l-4 4", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" }))
  ))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 28 } }, /* @__PURE__ */ React.createElement("div", { className: "mono", style: {
    fontSize: 13.5,
    fontWeight: 700,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--tangerine)",
    marginBottom: 14
  } }, t("What contractors get", "Lo que reciben los contratistas")), /* @__PURE__ */ React.createElement("div", { style: {
    paddingTop: 18,
    borderTop: "1px solid rgba(255,255,255,0.18)",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 24
  } }, gets.map(([title, body], i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
    paddingLeft: i === 0 ? 0 : 24,
    borderLeft: i === 0 ? "none" : "1px solid rgba(255,255,255,0.18)"
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: 12, marginBottom: 8 } }, /* @__PURE__ */ React.createElement("span", { className: "mono", style: { fontSize: 13.5, fontWeight: 700, color: "var(--tangerine)", letterSpacing: "0.1em" } }, "0", i + 1), /* @__PURE__ */ React.createElement("span", { className: "display", style: { fontSize: 19.5, fontWeight: 800, letterSpacing: "0.01em", textTransform: "uppercase", color: "var(--white)" } }, t(title))), /* @__PURE__ */ React.createElement("p", { style: { margin: 0, fontSize: 15, lineHeight: 1.55, color: "rgba(255,255,255,0.75)" } }, t(body))))))));
};
const ContractorStatsStrip = () => {
  const t = useT();
  return /* @__PURE__ */ React.createElement("section", { style: {
    background: "var(--alice-blue)",
    borderBottom: "1px solid rgba(38, 49, 102,0.12)",
    padding: "36px 0"
  } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "wfs-stat-grid", style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0 } }, [
    ["Tiered", { EN: "Wholesale margin tiers", ES: "Niveles de margen mayorista" }],
    ["In-house", { EN: "Gate fabrication", ES: "Fabricaci\xF3n de portones" }],
    [{ EN: "Free", ES: "Gratis" }, { EN: "Job-site drops \xB7 in-county", ES: "Entregas a obra \xB7 mismo condado" }],
    ["Free", { EN: "Application fee", ES: "Costo de solicitud" }]
  ].map(([n, l], i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "wfs-stat-cell", style: {
    paddingLeft: i === 0 ? 0 : 24,
    borderLeft: i === 0 ? "none" : "1px solid rgba(38, 49, 102,0.18)"
  } }, /* @__PURE__ */ React.createElement("div", { className: "display", style: {
    fontSize: "clamp(28px, 3.2vw, 42px)",
    lineHeight: 1,
    color: "var(--ink)",
    letterSpacing: "-0.02em"
  } }, typeof n === "string" ? n : t(n)), /* @__PURE__ */ React.createElement("div", { className: "mono", style: {
    marginTop: 10,
    fontSize: 14,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--charcoal)",
    fontWeight: 700
  } }, t(l)))))));
};
const PERK_ICONS = [
  /* factory direct pricing */
  /* @__PURE__ */ React.createElement("svg", { width: "44", height: "44", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M20.6 13.4 11 3.8a2 2 0 0 0-1.4-.6H4v5.6a2 2 0 0 0 .6 1.4l9.6 9.6a2 2 0 0 0 2.8 0l3.6-3.6a2 2 0 0 0 0-2.8Z" }), /* @__PURE__ */ React.createElement("circle", { cx: "7.7", cy: "7.7", r: "1.2" })),
  /* priority fabrication */
  /* @__PURE__ */ React.createElement("svg", { width: "44", height: "44", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M3 21 V11 L9 14 V11 L15 14 V11 L21 14 V21 Z" }), /* @__PURE__ */ React.createElement("line", { x1: "3", y1: "21", x2: "21", y2: "21" })),
  /* job site delivery */
  /* @__PURE__ */ React.createElement("svg", { width: "44", height: "44", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("rect", { x: "2", y: "9", width: "13", height: "9", rx: "1" }), /* @__PURE__ */ React.createElement("path", { d: "M15 12 H19 L22 15 V18 H15 Z" }), /* @__PURE__ */ React.createElement("circle", { cx: "7", cy: "20", r: "1.6" }), /* @__PURE__ */ React.createElement("circle", { cx: "18", cy: "20", r: "1.6" })),
  /* lead routing */
  /* @__PURE__ */ React.createElement("svg", { width: "44", height: "44", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("circle", { cx: "9", cy: "9", r: "3" }), /* @__PURE__ */ React.createElement("circle", { cx: "17", cy: "10", r: "2.4" }), /* @__PURE__ */ React.createElement("path", { d: "M3 19 Q9 14 15 19" }), /* @__PURE__ */ React.createElement("path", { d: "M14 18 Q17.5 15 21 18" })),
  /* payment terms */
  /* @__PURE__ */ React.createElement("svg", { width: "44", height: "44", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("rect", { x: "3", y: "6", width: "18", height: "13", rx: "1.5" }), /* @__PURE__ */ React.createElement("line", { x1: "3", y1: "10", x2: "21", y2: "10" }), /* @__PURE__ */ React.createElement("rect", { x: "6", y: "14", width: "4", height: "2", rx: "0.4", fill: "currentColor" })),
  /* dedicated rep */
  /* @__PURE__ */ React.createElement("svg", { width: "44", height: "44", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "8", r: "3.5" }), /* @__PURE__ */ React.createElement("path", { d: "M5 20 Q5 14 12 14 Q19 14 19 20" }))
];
const ContractorBenefits = () => {
  const t = useT();
  const perks = [
    [{ EN: "Factory direct pricing", ES: "Precio directo de f\xE1brica" }, { EN: "True wholesale pricing tiered to your volume, no out-of-state distributor markup.", ES: "Precio mayorista real por niveles seg\xFAn tu volumen, sin margen de distribuidores de fuera del estado." }],
    [{ EN: "Priority fabrication", ES: "Fabricaci\xF3n prioritaria" }, { EN: "Skip the line. Partners get priority manufacturing slots and turnaround on gates.", ES: "S\xE1ltate la fila. Los socios tienen prioridad en los turnos de fabricaci\xF3n y en los tiempos de portones." }],
    [{ EN: "Job site delivery", ES: "Entrega en obra" }, { EN: "Unbranded or branded drops to your site. Curbside, will-call, or LTL, your choice per PO.", ES: "Entregas con o sin marca en tu obra. En banqueta, will-call o LTL, t\xFA eliges por orden de compra." }],
    [{ EN: "Lead routing", ES: "Referencia de clientes" }, { EN: "Homeowner projects referred directly to trusted installer partners, with the WFS material line locked in.", ES: "Proyectos de propietarios referidos directamente a instaladores socios de confianza, con la l\xEDnea de material WFS asegurada." }],
    [{ EN: "Payment terms", ES: "T\xE9rminos de pago" }, { EN: "Flexible terms for qualified high-volume partners after a short trade-reference review.", ES: "T\xE9rminos flexibles para socios calificados de alto volumen tras una breve revisi\xF3n de referencias comerciales." }],
    [{ EN: "Dedicated rep", ES: "Asesor dedicado" }, { EN: "One named account rep. Phone, email, or in-yard, from RFQ through PO close-out.", ES: "Un asesor de cuenta con nombre y apellido. Por tel\xE9fono, correo o en la sucursal, del RFQ al cierre de la orden." }]
  ];
  return /* @__PURE__ */ React.createElement("section", { className: "wfs-brand-texture", style: { backgroundColor: "var(--ink)", padding: "120px 0" } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "mono", style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 22,
    fontSize: 14,
    fontWeight: 700,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--blue-ice)"
  } }, /* @__PURE__ */ React.createElement("span", { "aria-hidden": true, style: { width: 30, height: 3, background: "var(--tangerine)", borderRadius: 2 } }), t("Wholesale Partner Program", "Programa de socios mayoristas")), /* @__PURE__ */ React.createElement("div", { style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 48,
    alignItems: "end",
    marginBottom: "clamp(36px, 6vh, 56px)"
  } }, /* @__PURE__ */ React.createElement("h2", { className: "display", style: {
    margin: 0,
    fontSize: "clamp(30px, 3.4vw, 46px)",
    lineHeight: 1.02,
    letterSpacing: "-0.01em",
    fontWeight: 800,
    textTransform: "uppercase",
    color: "var(--white)"
  } }, t("Why partner", "Por qu\xE9 asociarte"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--tangerine)" } }, t("with WFS.", "con WFS."))), /* @__PURE__ */ React.createElement("p", { style: {
    margin: 0,
    maxWidth: 320,
    justifySelf: "end",
    textAlign: "right",
    fontSize: 16,
    lineHeight: 1.6,
    color: "rgba(255,255,255,0.72)"
  } }, t("Six reasons contractors keep their POs local.", "Seis razones por las que los contratistas mantienen sus \xF3rdenes locales."))), /* @__PURE__ */ React.createElement("div", { className: "wfs-perks-grid", style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)" } }, perks.map(([title, body], i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "wfs-perk-cell", style: {
    padding: "clamp(28px, 4vh, 44px) clamp(22px, 2.5vw, 40px)",
    borderLeft: i % 3 === 0 ? "none" : "1px solid rgba(255,255,255,0.14)",
    borderTop: i < 3 ? "none" : "1px solid rgba(255,255,255,0.10)"
  } }, /* @__PURE__ */ React.createElement("span", { "aria-hidden": true, style: { display: "block", marginBottom: 22, color: "var(--tangerine)", height: 44 } }, PERK_ICONS[i]), /* @__PURE__ */ React.createElement("h3", { className: "display", style: {
    margin: "0 0 12px",
    fontSize: 20.5,
    lineHeight: 1.1,
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: "0.01em",
    color: "var(--white)"
  } }, t(title)), /* @__PURE__ */ React.createElement("p", { style: { margin: 0, maxWidth: 340, fontSize: 15.5, lineHeight: 1.65, color: "rgba(255,255,255,0.75)" } }, t(body)))))));
};
const ContractorHowItWorks = () => {
  const t = useT();
  const steps = [
    {
      n: "01",
      title: { EN: "Apply", ES: "Solicita" },
      body: { EN: "Send your business info, trade refs, and an idea of monthly LF. No fee, no commitment.", ES: "Env\xEDa la info de tu empresa, referencias comerciales y una idea de tu volumen mensual. Sin costo, sin compromiso." },
      svg: /* @__PURE__ */ React.createElement("svg", { width: "28", height: "28", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M7 3 H15 L19 7 V21 H7 Z" }), /* @__PURE__ */ React.createElement("path", { d: "M15 3 V7 H19" }), /* @__PURE__ */ React.createElement("line", { x1: "9", y1: "12", x2: "17", y2: "12" }), /* @__PURE__ */ React.createElement("line", { x1: "9", y1: "15", x2: "17", y2: "15" }))
    },
    {
      n: "02",
      title: { EN: "Get Approved", ES: "Aprobaci\xF3n" },
      body: { EN: "We review and confirm your starter tier within 5 business days. Tax-exempt setup included.", ES: "Revisamos y confirmamos tu nivel inicial en 5 d\xEDas h\xE1biles. Configuraci\xF3n exenta de impuestos incluida." },
      svg: /* @__PURE__ */ React.createElement("svg", { width: "28", height: "28", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M12 3 L19 6 V12 Q19 17 12 21 Q5 17 5 12 V6 Z" }), /* @__PURE__ */ React.createElement("path", { d: "M9 12 L11 14 L15 10" }))
    },
    {
      n: "03",
      title: { EN: "Order & Build", ES: "Ordena y construye" },
      body: { EN: "Phone, email, or in-yard. Same rep on every PO. Job-site delivery or will-call from FM or PC.", ES: "Por tel\xE9fono, email o en la sucursal. El mismo representante en cada orden. Entrega a obra o recoge en FM o PC." },
      svg: /* @__PURE__ */ React.createElement("svg", { width: "28", height: "28", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("rect", { x: "2", y: "9", width: "13", height: "9", rx: "1" }), /* @__PURE__ */ React.createElement("path", { d: "M15 12 H19 L22 15 V18 H15 Z" }), /* @__PURE__ */ React.createElement("circle", { cx: "7", cy: "20", r: "1.6" }), /* @__PURE__ */ React.createElement("circle", { cx: "18", cy: "20", r: "1.6" }))
    },
    {
      n: "04",
      title: { EN: "Tier Up", ES: "Sube de nivel" },
      body: { EN: "As your monthly LF grows, your margin tier and turnaround priority both step up automatically.", ES: "A medida que tu volumen mensual crece, tu nivel de margen y prioridad de entrega suben autom\xE1ticamente." },
      svg: /* @__PURE__ */ React.createElement("svg", { width: "28", height: "28", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M4 20 L10 14 L14 18 L20 6" }), /* @__PURE__ */ React.createElement("path", { d: "M14 6 L20 6 L20 12" }))
    }
  ];
  return /* @__PURE__ */ React.createElement("section", { style: { background: "#ffffff", padding: "120px 0" } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", marginBottom: 64 } }, /* @__PURE__ */ React.createElement("h2", { className: "display", style: {
    margin: 0,
    fontSize: "clamp(28px, 3.4vw, 44px)",
    lineHeight: 1,
    letterSpacing: "-0.015em",
    color: "var(--ink)"
  } }, t("How partnership works", "C\xF3mo funciona la asociaci\xF3n"))), /* @__PURE__ */ React.createElement("div", { style: {
    position: "relative",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 24,
    maxWidth: 1200,
    margin: "0 auto"
  } }, /* @__PURE__ */ React.createElement("div", { "aria-hidden": true, style: {
    position: "absolute",
    top: 47,
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
    border: "1px solid rgba(38, 49, 102, 0.14)",
    padding: "24px 22px 26px"
  } }, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 18 } }, /* @__PURE__ */ React.createElement("span", { className: "mono", style: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 46,
    height: 46,
    background: "var(--tangerine)",
    color: "var(--white)",
    fontSize: 14,
    fontWeight: 700,
    letterSpacing: "0.05em"
  } }, s.n)), /* @__PURE__ */ React.createElement("h3", { className: "display", style: {
    margin: "0 0 8px",
    fontSize: 19.5,
    lineHeight: 1.15,
    letterSpacing: "-0.01em",
    color: "var(--ink)"
  } }, t(s.title)), /* @__PURE__ */ React.createElement("p", { className: "mono", style: {
    margin: 0,
    fontSize: 14.5,
    lineHeight: 1.55,
    color: "var(--charcoal)"
  } }, t(s.body)))))));
};
const ContractorWholesaleKit = () => {
  const t = useT();
  const items = [
    {
      title: { EN: "Tiered Price List", ES: "Lista de precios por niveles" },
      body: { EN: "Bronze, Pro and Elite pricing tiers on every product, your rate improves as your volume grows, and we refresh the list every quarter.", ES: "Niveles de precio Bronze, Pro y Elite en cada producto: tu tarifa mejora a medida que crece tu volumen, y actualizamos la lista cada trimestre." },
      svg: /* @__PURE__ */ React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M7 3 H15 L19 7 V21 H7 Z" }), /* @__PURE__ */ React.createElement("path", { d: "M15 3 V7 H19" }), /* @__PURE__ */ React.createElement("line", { x1: "9", y1: "12", x2: "17", y2: "12" }), /* @__PURE__ */ React.createElement("line", { x1: "9", y1: "15", x2: "17", y2: "15" }), /* @__PURE__ */ React.createElement("line", { x1: "9", y1: "18", x2: "14", y2: "18" }))
    },
    {
      title: { EN: "Spec Library", ES: "Biblioteca de specs" },
      body: { EN: "PDF profile drawings, wind-load data, color samples, formatted for AHJ and HOA submission.", ES: "Dibujos de perfil en PDF, datos de carga e\xF3lica, muestras de color, formateados para presentaci\xF3n AHJ y HOA." },
      svg: /* @__PURE__ */ React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("rect", { x: "4", y: "3", width: "16", height: "18", rx: "1" }), /* @__PURE__ */ React.createElement("line", { x1: "8", y1: "8", x2: "16", y2: "8" }), /* @__PURE__ */ React.createElement("line", { x1: "8", y1: "12", x2: "16", y2: "12" }), /* @__PURE__ */ React.createElement("line", { x1: "8", y1: "16", x2: "13", y2: "16" }))
    },
    {
      title: { EN: "Co-branded Marketing", ES: "Marketing co-marcado" },
      body: { EN: "White-label estimate templates and yard-sign artwork with your logo set against WFS material specs.", ES: "Plantillas de cotizaci\xF3n white-label y arte para letreros de obra con tu logo sobre las specs de material WFS." },
      svg: /* @__PURE__ */ React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("rect", { x: "3", y: "6", width: "14", height: "12", rx: "1" }), /* @__PURE__ */ React.createElement("path", { d: "M17 10 L21 7 V17 L17 14 Z" }))
    },
    {
      title: { EN: "Lead Pipeline", ES: "Pipeline de leads" },
      body: { EN: "Homeowner inquiries in your county routed straight to your inbox with the spec sheet attached.", ES: "Consultas de propietarios en tu condado enviadas directamente a tu inbox con la hoja de specs adjunta." },
      svg: /* @__PURE__ */ React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M3 4 H21 V20 H3 Z" }), /* @__PURE__ */ React.createElement("path", { d: "M3 4 L12 13 L21 4" }))
    },
    {
      title: { EN: "Training & Tech", ES: "Capacitaci\xF3n y soporte t\xE9cnico" },
      body: { EN: "In-yard walkthroughs on new product lines, plus install-tech support for your crews when a job throws a curveball.", ES: "Recorridos en sucursal de nuevas l\xEDneas de producto, m\xE1s soporte t\xE9cnico de instalaci\xF3n para tu cuadrilla cuando un trabajo se complica." },
      svg: /* @__PURE__ */ React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M12 4 L21 9 L12 14 L3 9 Z" }), /* @__PURE__ */ React.createElement("path", { d: "M6 11 V16 Q12 19 18 16 V11" }))
    }
  ];
  return /* @__PURE__ */ React.createElement("section", { style: { background: "var(--white)", padding: "120px 0" } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 48,
    alignItems: "end",
    paddingBottom: 28,
    borderBottom: "2px solid var(--ink)"
  } }, /* @__PURE__ */ React.createElement("h2", { className: "display", style: {
    margin: 0,
    fontSize: "clamp(28px, 3.4vw, 44px)",
    lineHeight: 1,
    letterSpacing: "-0.015em",
    color: "var(--ink)"
  } }, t("The wholesale kit", "El kit mayorista")), /* @__PURE__ */ React.createElement("p", { style: {
    margin: 0,
    maxWidth: 400,
    justifySelf: "end",
    textAlign: "right",
    fontSize: 16,
    lineHeight: 1.6,
    color: "var(--charcoal)"
  } }, t(
    "Five things every active partner walks away with, not someday, on day one.",
    "Cinco cosas que todo socio activo se lleva, no alg\xFAn d\xEDa, el primer d\xEDa."
  ))), items.map((it, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "wfs-usecase-row", style: {
    display: "grid",
    gridTemplateColumns: "104px 1fr 1.2fr",
    gap: 28,
    alignItems: "center",
    padding: "34px 0",
    borderBottom: "1px solid rgba(0,16,17,0.1)"
  } }, /* @__PURE__ */ React.createElement("span", { className: "display wfs-usecase-num", "aria-hidden": true, style: {
    fontSize: 61.5,
    lineHeight: 1,
    fontWeight: 800,
    color: "var(--tangerine)"
  } }, "0", i + 1), /* @__PURE__ */ React.createElement("h3", { className: "display", style: {
    margin: 0,
    fontSize: "clamp(18px, 1.6vw, 24px)",
    lineHeight: 1.1,
    textTransform: "uppercase",
    letterSpacing: "0.01em",
    color: "var(--ink)",
    display: "flex",
    alignItems: "center",
    gap: 14
  } }, /* @__PURE__ */ React.createElement("span", { "aria-hidden": true, style: { display: "inline-flex", color: "var(--tangerine)", flexShrink: 0 } }, it.svg), t(it.title)), /* @__PURE__ */ React.createElement("p", { style: { margin: 0, fontSize: 16, lineHeight: 1.6, color: "var(--charcoal)" } }, t(it.body))))));
};
const ContractorTestimonial = () => {
  const t = useT();
  return /* @__PURE__ */ React.createElement("section", { style: { background: "#ffffff", padding: "120px 0" } }, /* @__PURE__ */ React.createElement("div", { className: "container", style: { maxWidth: 1200 } }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "grid",
    gridTemplateColumns: "1fr 1.4fr",
    gap: 56,
    alignItems: "center"
  } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", { className: "display", style: {
    margin: "0 0 24px",
    fontSize: "clamp(26px, 3vw, 36px)",
    lineHeight: 1.05,
    letterSpacing: "-0.015em",
    color: "var(--ink)"
  } }, t("What contractors", "Lo que los contratistas"), /* @__PURE__ */ React.createElement("br", null), t("tell us.", "nos cuentan.")), /* @__PURE__ */ React.createElement("p", { className: "mono", style: {
    margin: 0,
    fontSize: 14.5,
    lineHeight: 1.7,
    color: "var(--charcoal)",
    maxWidth: 320
  } }, t(
    "Two yards, one rep per account, and material that ships on the date the rep promised.",
    "Dos sucursales, un representante por cuenta, y material que se env\xEDa en la fecha que el representante prometi\xF3."
  ))), /* @__PURE__ */ React.createElement("article", { style: {
    position: "relative",
    background: "var(--ink)",
    color: "var(--white)",
    padding: "44px 48px",
    boxShadow: "10px 10px 0 var(--tangerine)"
  } }, /* @__PURE__ */ React.createElement("span", { className: "display", style: {
    position: "absolute",
    top: -22,
    left: 28,
    background: "var(--ink)",
    padding: "0 10px",
    fontSize: 65.5,
    lineHeight: 1,
    color: "var(--tangerine)"
  } }, "\u201C"), /* @__PURE__ */ React.createElement("p", { className: "mono", style: {
    margin: "0 0 28px",
    fontSize: 18.5,
    lineHeight: 1.55,
    color: "var(--white)",
    fontWeight: 500
  } }, t(
    "We were buying out of Tampa and eating two-week lead times. Switched to WFS direct and we're picking up gates on Wednesday that we quoted Monday. The margin step-up paid for the truck I bought last spring.",
    "Est\xE1bamos comprando desde Tampa y aguantando plazos de dos semanas. Nos cambiamos a WFS directo y ahora recogemos portones el mi\xE9rcoles que cotizamos el lunes. El incremento de margen pag\xF3 la camioneta que compr\xE9 la primavera pasada."
  )), /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    paddingTop: 24,
    borderTop: "1px dashed rgba(255,255,255,0.2)"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: 48,
    height: 48,
    borderRadius: "50%",
    background: "var(--tangerine)",
    color: "var(--white)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--display)",
    fontWeight: 700,
    fontSize: 17.5,
    letterSpacing: "0.02em"
  } }, "JT"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "display", style: {
    fontSize: 15.5,
    color: "var(--white)",
    letterSpacing: "-0.005em"
  } }, "Jorge T., Lead Fence LLC"), /* @__PURE__ */ React.createElement("div", { className: "mono", style: {
    marginTop: 4,
    fontSize: 13.5,
    fontWeight: 700,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.6)"
  } }, t("Fort Myers \xB7 Pro tier \xB7 since '23", "Fort Myers \xB7 Nivel Pro \xB7 desde '23"))))))));
};
const ContractorClosingCTA = () => {
  const t = useT();
  return /* @__PURE__ */ React.createElement("section", { style: {
    background: "var(--ink)",
    color: "var(--white)",
    padding: "120px 0",
    position: "relative",
    overflow: "hidden"
  } }, /* @__PURE__ */ React.createElement("div", { "aria-hidden": true, style: {
    position: "absolute",
    inset: 0,
    opacity: 0.08,
    backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
    backgroundSize: "24px 24px",
    pointerEvents: "none"
  } }), /* @__PURE__ */ React.createElement("div", { "aria-hidden": true, style: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 4,
    background: "var(--tangerine)"
  } }), /* @__PURE__ */ React.createElement("div", { className: "container", style: {
    position: "relative",
    display: "grid",
    gridTemplateColumns: "1.4fr 1fr",
    gap: 56,
    alignItems: "center"
  } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", { className: "display", style: {
    margin: 0,
    fontSize: "clamp(32px, 4.2vw, 60px)",
    lineHeight: 0.98,
    letterSpacing: "-0.02em",
    color: "var(--white)"
  } }, t("Apply once.", "Reg\xEDstrate una vez."), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--tangerine)" } }, t("Quote forever.", "Cotiza siempre."))), /* @__PURE__ */ React.createElement("p", { className: "mono", style: {
    margin: "24px 0 32px",
    maxWidth: 520,
    fontSize: 14.5,
    lineHeight: 1.7,
    color: "rgba(255,255,255,0.7)"
  } }, t(
    "Submit the partner application once. We approve, lock in your starter tier, and route every future RFQ through your dedicated rep. No annual fee, no minimums on individual orders.",
    "Env\xEDa la solicitud de socio una sola vez. Aprobamos, fijamos tu nivel inicial y canalizamos cada RFQ futura a trav\xE9s de tu representante dedicado. Sin cuota anual, sin m\xEDnimos por orden."
  )), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 14, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("a", { href: "https://form.jotform.com/westernfencesupply/account-setup-form", target: "_blank", rel: "noopener", style: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "18px 32px",
    background: "var(--tangerine)",
    color: "var(--white)",
    fontFamily: "var(--sans)",
    fontSize: 14.5,
    fontWeight: 700,
    letterSpacing: "0.18em",
    textTransform: "uppercase"
  } }, t("Open an Account", "Abrir una cuenta")), /* @__PURE__ */ React.createElement("a", { href: "tel:2396895496", style: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "18px 32px",
    background: "transparent",
    color: "var(--white)",
    border: "1.5px solid rgba(255,255,255,0.5)",
    fontFamily: "var(--sans)",
    fontSize: 14.5,
    fontWeight: 700,
    letterSpacing: "0.18em",
    textTransform: "uppercase"
  } }, "(239) 689-5496"))), /* @__PURE__ */ React.createElement("div", { style: {
    border: "1.5px solid rgba(255,255,255,0.25)",
    background: "rgba(255,255,255,0.04)",
    padding: "32px 32px 28px"
  } }, /* @__PURE__ */ React.createElement("div", { className: "mono", style: {
    fontSize: 13.5,
    fontWeight: 700,
    letterSpacing: "0.22em",
    color: "var(--tangerine)",
    textTransform: "uppercase",
    marginBottom: 18,
    display: "flex",
    alignItems: "center",
    gap: 10
  } }, /* @__PURE__ */ React.createElement("span", { style: { width: 8, height: 8, borderRadius: "50%", background: "var(--tangerine)" } }), t("Application checklist", "Lista de verificaci\xF3n de la solicitud")), /* @__PURE__ */ React.createElement("ul", { style: { listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 14 } }, [
    { EN: "Business license + EIN", ES: "Licencia de negocio + EIN" },
    { EN: "Florida resale certificate", ES: "Certificado de reventa de Florida" },
    { EN: "2 trade references", ES: "2 referencias comerciales" },
    { EN: "Est. monthly linear-feet", ES: "Estimado mensual de pies lineales" }
  ].map((line, i) => /* @__PURE__ */ React.createElement("li", { key: i, style: {
    display: "flex",
    alignItems: "center",
    gap: 14,
    paddingBottom: i < 3 ? 14 : 0,
    borderBottom: i < 3 ? "1px dashed rgba(255,255,255,0.18)" : "none"
  } }, /* @__PURE__ */ React.createElement("span", { style: {
    width: 24,
    height: 24,
    flexShrink: 0,
    border: "1.5px solid var(--tangerine)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  } }, /* @__PURE__ */ React.createElement("svg", { width: "13", height: "13", viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M3 8 L7 12 L13 4", stroke: "var(--tangerine)", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }))), /* @__PURE__ */ React.createElement("span", { className: "mono", style: {
    fontSize: 14.5,
    fontWeight: 500,
    color: "var(--white)"
  } }, t(line))))), /* @__PURE__ */ React.createElement("div", { className: "mono", style: {
    marginTop: 22,
    paddingTop: 16,
    borderTop: "1px solid rgba(255,255,255,0.18)",
    fontSize: 13.5,
    fontWeight: 700,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  } }, /* @__PURE__ */ React.createElement("span", null, t("Approval window", "Tiempo de aprobaci\xF3n")), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--white)" } }, t("\u2264 5 business days", "\u2264 5 d\xEDas h\xE1biles"))))));
};
const ContractorPage = () => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(SiteHeader, null), /* @__PURE__ */ React.createElement(ContractorHero, null), /* @__PURE__ */ React.createElement(ContractorStatsStrip, null), /* @__PURE__ */ React.createElement(ContractorBenefits, null), /* @__PURE__ */ React.createElement(ContractorHowItWorks, null), /* @__PURE__ */ React.createElement(ContractorWholesaleKit, null), /* @__PURE__ */ React.createElement(ContractorTestimonial, null), /* @__PURE__ */ React.createElement(ContractorClosingCTA, null), /* @__PURE__ */ React.createElement(Footer, null));
Object.assign(window, {
  HomeownerHero,
  HomeownerTrustStrip,
  HomeownerSteps,
  HomeownerStylePicker,
  HomeownerInstallerSplit,
  HomeownerTestimonial,
  HomeownerFAQ,
  HomeownerClosingCTA,
  HomeownerPage,
  ContractorHero,
  ContractorStatsStrip,
  ContractorBenefits,
  ContractorHowItWorks,
  ContractorWholesaleKit,
  ContractorTestimonial,
  ContractorClosingCTA,
  ContractorPage
});
