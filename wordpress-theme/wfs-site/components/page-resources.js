const ResourcesHero = () => {
  const t = useT();
  return /* @__PURE__ */ React.createElement(
    PageHero,
    {
      crumbs: [[t("Home", "Inicio"), "Homepage.html"], [t("Resources", "Recursos"), null]],
      eyebrow: t("Fence Education Hub", "Centro educativo sobre cercas"),
      title: t("Pick the right fence", "Elija la cerca correcta"),
      accent: t("the first time.", "a la primera."),
      subtitle: t("Guides, materials comparisons, Florida code references and downloadable spec sheets. Written by the people who fabricate this stuff every day.", "Gu\xEDas, comparativas de materiales, referencias del c\xF3digo de Florida y fichas t\xE9cnicas descargables. Escrito por las personas que fabrican esto todos los d\xEDas."),
      image: "https://crpozo.github.io/wfs-design-preview/assets/gate-rolling.jpg"
    }
  );
};
const ResourceArticles = () => {
  const t = useT();
  const posts = [
    { tag: { EN: "Materials", ES: "Materiales" }, title: { EN: "Top 4 Durable Fence Materials for SW Florida", ES: "Los 4 materiales de cerca m\xE1s duraderos para el suroeste de Florida" }, read: { EN: "6 min", ES: "6 min" }, img: "aluminum" },
    { tag: { EN: "How-to", ES: "C\xF3mo hacerlo" }, title: { EN: "How to Measure for Fence Material in Florida", ES: "C\xF3mo medir el material de cerca en Florida" }, read: { EN: "4 min", ES: "4 min" }, img: "chainlink" },
    { tag: { EN: "Pricing", ES: "Precios" }, title: { EN: "How Much Does a Fence Cost in Florida in 2026?", ES: "\xBFCu\xE1nto cuesta una cerca en Florida en 2026?" }, read: { EN: "8 min", ES: "8 min" }, img: "vinyl" },
    { tag: { EN: "Code", ES: "C\xF3digo" }, title: { EN: "Florida Pool Code: Enclosure Requirements Explained", ES: "C\xF3digo de piscinas de Florida: requisitos de cerramiento explicados" }, read: { EN: "7 min", ES: "7 min" }, img: "metal" },
    { tag: { EN: "Comparison", ES: "Comparativa" }, title: { EN: "Aluminum vs Vinyl vs Chain Link, Picking a System", ES: "Aluminio vs vinilo vs malla cicl\xF3nica: c\xF3mo elegir un sistema" }, read: { EN: "9 min", ES: "9 min" }, img: "aluminum" },
    { tag: { EN: "HVHZ", ES: "HVHZ" }, title: { EN: "Hurricane Zone Fencing: EC Fence vs DuraFence", ES: "Cercas para zona de huracanes: EC Fence vs DuraFence" }, read: { EN: "5 min", ES: "5 min" }, img: "ecfence" }
  ];
  return /* @__PURE__ */ React.createElement("section", { style: { background: "var(--white)", padding: "120px 0" } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement(
    PageSectionHeader,
    {
      number: "01",
      label: t("Articles & guides", "Art\xEDculos y gu\xEDas"),
      title: t("Read before you buy.", "Lea antes de comprar."),
      accent: t("Or call us, both work.", "O ll\xE1menos, ambas opciones funcionan."),
      sub: t("Plain-English writeups on the questions we hear in the yard every week.", "Explicaciones claras sobre las preguntas que escuchamos en la sucursal cada semana."),
      link: [t("All articles", "Todos los art\xEDculos"), "resources.html#articles"]
    }
  ), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 } }, posts.map((p, i) => /* @__PURE__ */ React.createElement("article", { key: i, style: {
    background: "var(--white)",
    border: "1px solid rgba(0,16,17,0.1)",
    display: "flex",
    flexDirection: "column",
    cursor: "pointer"
  } }, /* @__PURE__ */ React.createElement("div", { style: { position: "relative", aspectRatio: "4 / 3", overflow: "hidden", background: "#263166" } }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: FENCE_IMG[p.img],
      alt: "",
      style: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }
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
    fontWeight: 700,
    textTransform: "uppercase"
  } }, t(p.tag))), /* @__PURE__ */ React.createElement("div", { style: { padding: 24, flex: 1, display: "flex", flexDirection: "column" } }, /* @__PURE__ */ React.createElement("h3", { className: "display", style: {
    margin: "0 0 14px",
    fontSize: 21.5,
    lineHeight: 1.15
  } }, t(p.title)), /* @__PURE__ */ React.createElement("div", { style: { marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "center" } }, /* @__PURE__ */ React.createElement("span", { className: "mono", style: {
    fontSize: 13.5,
    letterSpacing: "0.18em",
    color: "var(--charcoal)",
    textTransform: "uppercase"
  } }, t(p.read), " ", t("read", "de lectura")), /* @__PURE__ */ React.createElement("span", { style: {
    fontSize: 14.5,
    color: "var(--laser-blue)",
    fontWeight: 500,
    display: "flex",
    alignItems: "center",
    gap: 6
  } }, t("Read", "Leer"), " ", /* @__PURE__ */ React.createElement(ArrowRight, { size: 12 })))))))));
};
const MaterialsComparison = () => {
  const t = useT();
  return /* @__PURE__ */ React.createElement("section", { style: { background: "var(--parchment)", padding: "120px 0" } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement(
    PageSectionHeader,
    {
      number: "02",
      label: t("Materials comparison", "Comparativa de materiales"),
      title: t("Side by side,", "Lado a lado,"),
      accent: t("no marketing fluff.", "sin adornos publicitarios."),
      sub: t("Pick the one that matches your job. Click through to the material page for full specs.", "Elija el que se ajuste a su proyecto. Haga clic para ver la p\xE1gina del material con las especificaciones completas.")
    }
  ), /* @__PURE__ */ React.createElement("div", { style: {
    borderRadius: 18,
    overflow: "hidden",
    border: "1px solid rgba(0,16,17,0.08)",
    boxShadow: "0 34px 70px -36px rgba(0,16,17,0.28)",
    background: "var(--white)"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "grid",
    gridTemplateColumns: "1.2fr repeat(4, 1fr)",
    background: "var(--ink)",
    color: "var(--white)"
  } }, [
    { label: "", img: null, href: null },
    { label: t("Vinyl / PVC", "Vinilo / PVC"), img: FENCE_IMG.vinyl, href: "vinyl.html" },
    { label: t("Aluminum", "Aluminio"), img: FENCE_IMG.aluminum, href: "aluminum.html" },
    { label: t("Chain Link", "Malla cicl\xF3nica"), img: FENCE_IMG.chainlink, href: "chain-link.html" },
    { label: t("Metal / DuraFence", "Metal / DuraFence"), img: FENCE_IMG.metal, href: "metal.html" }
  ].map((h, i) => h.img ? /* @__PURE__ */ React.createElement(
    "a",
    {
      key: i,
      href: h.href,
      style: {
        position: "relative",
        display: "block",
        overflow: "hidden",
        minHeight: "clamp(170px, 15vw, 210px)",
        textDecoration: "none",
        color: "var(--white)",
        borderLeft: "1px solid rgba(255,255,255,0.1)"
      },
      onMouseEnter: (e) => {
        const im = e.currentTarget.querySelector("img");
        if (im) im.style.transform = "scale(1.05)";
      },
      onMouseLeave: (e) => {
        const im = e.currentTarget.querySelector("img");
        if (im) im.style.transform = "scale(1)";
      }
    },
    /* @__PURE__ */ React.createElement("img", { src: h.img, alt: h.label, loading: "lazy", style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      transition: "transform 0.4s ease"
    } }),
    /* @__PURE__ */ React.createElement("span", { "aria-hidden": true, style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(38,49,103,0.10) 35%, rgba(38,49,103,0.92) 100%)"
    } }),
    /* @__PURE__ */ React.createElement("span", { className: "mono", style: {
      position: "absolute",
      left: 16,
      right: 14,
      bottom: 14,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 8,
      fontSize: 13.5,
      fontWeight: 700,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      lineHeight: 1.25
    } }, /* @__PURE__ */ React.createElement("span", { style: { minWidth: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } }, h.label), /* @__PURE__ */ React.createElement("svg", { width: "12", height: "12", viewBox: "0 0 16 16", fill: "none", style: { flexShrink: 0, color: "var(--tangerine)" } }, /* @__PURE__ */ React.createElement("path", { d: "M3 8h10m0 0L9 4m4 4l-4 4", stroke: "currentColor", strokeWidth: "1.9", strokeLinecap: "square" })))
  ) : /* @__PURE__ */ React.createElement("div", { key: i, style: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "clamp(22px, 2vw, 30px)",
    minHeight: "clamp(170px, 15vw, 210px)"
  } }, /* @__PURE__ */ React.createElement("div", { className: "mono", style: {
    fontSize: 12.5,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "rgba(219,233,238,0.55)",
    marginBottom: 12
  } }, t("At a glance", "De un vistazo")), /* @__PURE__ */ React.createElement("div", { className: "display", style: { fontSize: "clamp(22px, 2vw, 28px)", lineHeight: 1.05, color: "var(--white)" } }, t("Pick your material", "Elige tu material")), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 10, fontSize: 14.5, lineHeight: 1.45, color: "rgba(219,233,238,0.65)" } }, t("Tap any column to explore.", "Toca una columna para explorar."))))), [
    [t("Best for", "Ideal para"), t("Privacy", "Privacidad"), t("Pool + ornamental", "Piscina + ornamental"), t("Security + perimeter", "Seguridad + per\xEDmetro"), t("Modern privacy + screens", "Privacidad moderna + pantallas")],
    [t("Heights", "Alturas"), t("4'-6' common", "4'-6' comunes"), t("4'-6' common", "4'-6' comunes"), t("4'-6' common, taller by request", "4'-6' comunes, m\xE1s altas bajo pedido"), t("6' and 8'", "6' y 8'")],
    [t("Maintenance", "Mantenimiento"), t("Occasional rinse", "Enjuague ocasional"), t("Low; varies by finish and exposure", "Bajo; var\xEDa seg\xFAn acabado y exposici\xF3n"), t("Low; varies by coating", "Bajo; var\xEDa seg\xFAn recubrimiento"), t("Low; varies by finish and exposure", "Bajo; var\xEDa seg\xFAn acabado y exposici\xF3n")],
    [t("Wind & code", "Viento y c\xF3digo"), t("Depends on product and installation", "Depende del producto y la instalaci\xF3n"), t("Pool-code compliant options", "Opciones que cumplen c\xF3digo de piscinas"), t("Depends on product and installation", "Depende del producto y la instalaci\xF3n"), t("Depends on product and installation", "Depende del producto y la instalaci\xF3n")],
    [t("Warranty", "Garant\xEDa"), t("Manufacturer warranty; varies by product", "Garant\xEDa del fabricante; var\xEDa por producto"), t("Manufacturer warranty; varies by product", "Garant\xEDa del fabricante; var\xEDa por producto"), t("Manufacturer warranty; varies by product", "Garant\xEDa del fabricante; var\xEDa por producto"), t("Manufacturer warranty; varies by product", "Garant\xEDa del fabricante; var\xEDa por producto")],
    [t("Lead time", "Tiempo de entrega"), t("Stocked: ready now \xB7 custom varies", "En stock: listo ya \xB7 a medida var\xEDa"), t("Stocked: ready now \xB7 custom varies", "En stock: listo ya \xB7 a medida var\xEDa"), t("Stocked: ready now \xB7 custom varies", "En stock: listo ya \xB7 a medida var\xEDa"), t("Stocked: ready now \xB7 custom varies", "En stock: listo ya \xB7 a medida var\xEDa")],
    [t("Starts at", "Desde"), t("Quote-based", "Seg\xFAn cotizaci\xF3n"), t("Quote-based", "Seg\xFAn cotizaci\xF3n"), t("Quote-based", "Seg\xFAn cotizaci\xF3n"), t("Quote-based", "Seg\xFAn cotizaci\xF3n")]
  ].map((row, ri) => /* @__PURE__ */ React.createElement(
    "div",
    {
      key: ri,
      onMouseEnter: (e) => {
        e.currentTarget.style.background = "#eef1f7";
      },
      onMouseLeave: (e) => {
        e.currentTarget.style.background = ri % 2 ? "#f7f8fa" : "var(--white)";
      },
      style: {
        display: "grid",
        gridTemplateColumns: "1.2fr repeat(4, 1fr)",
        background: ri % 2 ? "#f7f8fa" : "var(--white)",
        borderTop: "1px solid rgba(0,16,17,0.06)",
        transition: "background 0.15s ease"
      }
    },
    row.map((cell, ci) => /* @__PURE__ */ React.createElement("div", { key: ci, style: {
      padding: "18px 20px",
      fontSize: 15,
      lineHeight: 1.5,
      color: ci === 0 ? "var(--charcoal)" : "var(--ink)",
      fontWeight: ci === 0 ? 700 : 400,
      fontFamily: ci === 0 ? "var(--mono)" : "var(--sans)",
      letterSpacing: ci === 0 ? "0.08em" : "normal",
      textTransform: ci === 0 ? "uppercase" : "none",
      borderLeft: ci === 0 ? "none" : "1px solid rgba(0,16,17,0.06)"
    } }, cell))
  ))), /* @__PURE__ */ React.createElement("p", { style: { marginTop: 14, fontSize: 14, lineHeight: 1.6, color: "var(--charcoal)" } }, useT()("Specs shown are general guidance. Wind ratings, warranties, availability and performance depend on the specific product, configuration and project, we confirm exact numbers on your quote.", "Las especificaciones mostradas son una gu\xEDa general. Las clasificaciones de viento, garant\xEDas, disponibilidad y desempe\xF1o dependen del producto, la configuraci\xF3n y el proyecto espec\xEDficos; confirmamos los n\xFAmeros exactos en tu cotizaci\xF3n."))));
};
const PoolCodeSection = () => {
  const t = useT();
  return /* @__PURE__ */ React.createElement(
    SplitBlock,
    {
      kicker: t("Florida Pool Code", "C\xF3digo de piscinas de Florida"),
      title: t("Florida pool barriers,", "Barreras de piscina de Florida,"),
      accent: t("explained.", "explicadas."),
      body: t("The Florida Building Code sets requirements for residential pool barriers, height, openings, latches and self-closing gates. We stock aluminum and vinyl systems commonly configured to meet them, and your rep can include the manufacturer spec sheets with your quote. Requirements and final approval depend on your project and your local building authority.", "El C\xF3digo de Construcci\xF3n de Florida establece requisitos para las barreras de piscinas residenciales: altura, aberturas, pestillos y portones de cierre autom\xE1tico. Tenemos sistemas de aluminio y vinilo que com\xFAnmente se configuran para cumplirlos, y tu asesor puede incluir las fichas t\xE9cnicas del fabricante con tu cotizaci\xF3n. Los requisitos y la aprobaci\xF3n final dependen de tu proyecto y de tu autoridad local de construcci\xF3n."),
      bullets: [
        t('4 ft minimum height with no horizontal handhold below 45"', 'Altura m\xEDnima de 4 pies sin apoyo horizontal para manos por debajo de 45"'),
        t('Pickets spaced \u2264 3" apart for pool code', 'Barrotes separados \u2264 3" para cumplir el c\xF3digo de piscinas'),
        t('Self-closing, self-latching gates \u2265 54" from grade', 'Portones de cierre y pestillo autom\xE1ticos a \u2265 54" del nivel del suelo'),
        t("Manufacturer spec sheets available with your quote", "Fichas t\xE9cnicas del fabricante disponibles con tu cotizaci\xF3n")
      ],
      image: FENCE_IMG.aluminum,
      imageRight: false
    }
  );
};
const DownloadsSection = () => {
  const t = useT();
  return /* @__PURE__ */ React.createElement("section", { style: { background: "var(--white)", padding: "120px 0" } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement(
    PageSectionHeader,
    {
      number: "04",
      label: t("Spec sheets & downloads", "Fichas t\xE9cnicas y descargas"),
      title: t("Send to your", "Env\xEDelas a su"),
      accent: t("installer or AHJ.", "instalador o AHJ."),
      sub: t("PDF spec sheets for every system. Stamped versions available on request for commercial submissions.", "Fichas t\xE9cnicas en PDF para cada sistema. Versiones selladas disponibles a solicitud para presentaciones comerciales.")
    }
  ), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 } }, [
    [t("EC Fence, Exposure C Wind", "EC Fence, viento de exposici\xF3n C"), "PDF \xB7 1.2 MB"],
    [t("Aluminum 3/4/5 Rail Profiles", "Perfiles de aluminio de 3/4/5 rieles"), "PDF \xB7 980 KB"],
    [t("DuraFence Aluminum Board", "Tablero de aluminio DuraFence"), "PDF \xB7 1.4 MB"],
    [t("Catalyst Vinyl, Privacy + Picket", "Vinilo Catalyst, privacidad + barrotes"), "PDF \xB7 1.1 MB"],
    [t("Chain Link Gauges & Mesh", "Calibres y malla de malla cicl\xF3nica"), "PDF \xB7 620 KB"],
    [t("Florida Pool Code Profiles", "Perfiles del c\xF3digo de piscinas de Florida"), "PDF \xB7 1.6 MB"]
  ].map(([t2, meta], i) => /* @__PURE__ */ React.createElement("a", { key: i, href: "#", style: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    padding: "18px 20px",
    border: "1px solid rgba(0,16,17,0.15)",
    background: "var(--white)",
    color: "var(--ink)"
  } }, /* @__PURE__ */ React.createElement("span", { style: {
    width: 40,
    height: 40,
    flexShrink: 0,
    background: "var(--tangerine)",
    color: "var(--ink)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  } }, /* @__PURE__ */ React.createElement("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M9 2v10m0 0l-4-4m4 4l4-4M3 14h12", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "square" }))), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 16, fontWeight: 500, color: "var(--ink)" } }, t2), /* @__PURE__ */ React.createElement("div", { className: "mono", style: { fontSize: 13.5, letterSpacing: "0.18em", color: "var(--charcoal)", textTransform: "uppercase", marginTop: 4 } }, meta)))))));
};
const ResourcesCTA = () => {
  const t = useT();
  return /* @__PURE__ */ React.createElement(
    CTABand,
    {
      kicker: t("Still got questions?", "\xBFTodav\xEDa tiene preguntas?"),
      title: t("Call the yard,", "Llame a la sucursal,"),
      accent: t("or send the project.", "o env\xEDenos el proyecto."),
      body: t("Our sales representatives split calls Monday through Friday during business hours. Or send a sketch + ZIP and we'll come back inside a day.", "Nuestros representantes de ventas atienden llamadas de lunes a viernes en horario laboral. O env\xEDe un boceto + c\xF3digo postal y le responderemos en menos de un d\xEDa."),
      primary: [t("Request a quote", "Solicitar una cotizaci\xF3n"), "estimate.html"],
      secondary: [t("Call +1 239-689-5496", "Llamar al +1 239-689-5496"), "tel:2396895496"]
    }
  );
};
Object.assign(window, { ResourcesHero, ResourceArticles, MaterialsComparison, PoolCodeSection, DownloadsSection, ResourcesCTA });
