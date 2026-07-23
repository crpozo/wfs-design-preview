const FENCE_CATEGORIES = [
  {
    id: "vinyl",
    name: { EN: "Vinyl / PVC", ES: "Vinilo / PVC" },
    tag: { EN: "Privacy, Picket & Ranch", ES: "Privacidad, picket y rancho" },
    img: "vinyl",
    href: "vinyl.html",
    desc: { EN: "Low-maintenance vinyl in privacy, picket and ranch profiles. Won't rot, rust, peel or fade, engineered for Florida sun and salt air with a transferable lifetime warranty.", ES: "Vinilo de bajo mantenimiento en perfiles de privacidad, picket y rancho. No se pudre, no se oxida, no se pela ni decolora, dise\xF1ado para el sol y aire salino de Florida con garant\xEDa de por vida transferible." }
  },
  {
    id: "aluminum",
    name: { EN: "Aluminum", ES: "Aluminio" },
    tag: { EN: "Residential & Commercial", ES: "Residencial y comercial" },
    img: "aluminum",
    href: "aluminum.html",
    desc: { EN: "Powder-coated aluminum panels in 2 and 3-rail standard configurations (4-rail custom). Pool-code compliant, rackable on grade and available in residential and commercial grades.", ES: "Paneles de aluminio con pintura en polvo en configuraciones est\xE1ndar de 2 y 3 rieles (4 rieles a medida). Cumple c\xF3digo de piscinas, adaptable a pendientes y disponible en grados residencial y comercial." }
  },
  {
    id: "chainlink",
    name: { EN: "Chain Link", ES: "Malla cicl\xF3nica" },
    tag: { EN: "Galvanized & Vinyl Coated", ES: "Galvanizada y recubierta de vinilo" },
    img: "chainlink",
    href: "chain-link.html",
    desc: { EN: "Galvanized and vinyl-coated mesh from 6 to 12 gauge. The workhorse fence for security, sports, agricultural and commercial perimeters across SW Florida.", ES: "Malla galvanizada y recubierta de vinilo de calibre 6 a 12. La cerca de trabajo para seguridad, deporte, agricultura y per\xEDmetros comerciales en el suroeste de Florida." }
  },
  {
    id: "metal",
    name: { EN: "Metal / DuraFence", ES: "Metal / DuraFence" },
    tag: { EN: "Metal Privacy", ES: "Privacidad de metal" },
    img: "metal",
    href: "metal.html",
    desc: { EN: "Metal privacy fencing (DuraFence), the strength of metal with the look of solid board. Standard board is vertical; horizontal also available. Hurricane-rated, no warping, no painting, no replacement boards.", ES: "Cerca de privacidad de metal (DuraFence), la fuerza del metal con el aspecto de tabla s\xF3lida. La tabla est\xE1ndar es vertical; tambi\xE9n hacemos horizontal. Resistente a huracanes, no se deforma, no se pinta, no se reemplazan tablas." }
  },
  {
    id: "ecfence",
    name: { EN: "EC Fence", ES: "EC Fence" },
    tag: { EN: "Self-Mating Galvanized Steel", ES: "Acero galv. autoensamblable" },
    img: "ecfence",
    href: "ecfence.html",
    isNew: true,
    desc: { EN: "Our newest system: self-mating galvanized steel panels installed every 12 ft. 6 ft tall, available in bronze and white. Engineered for Exposure C wind loads.", ES: "Nuestro sistema m\xE1s nuevo: paneles de acero galvanizado autoensamblables instalados cada 12 pies. 6 pies de alto, disponibles en bronce y blanco. Dise\xF1ados para cargas e\xF3licas Exposici\xF3n C." }
  }
];
const GATE_SYSTEMS = [
  {
    id: "single-swing",
    name: { EN: "Single Gate", ES: "Port\xF3n sencillo" },
    tag: { EN: "Walk & entry gates", ES: "Peatonales y de entrada" },
    img: "gate-single",
    href: "gate-single.html",
    desc: { EN: "Single walk gates for entry points, fabricated in-house and available in vinyl, chain link, metal and aluminum to match your fence. Standard and custom sizes.", ES: "Portones peatonales para puntos de entrada, fabricados en planta y disponibles en vinilo, malla, metal y aluminio para combinar con tu cerca. Tama\xF1os est\xE1ndar y a medida." }
  },
  {
    id: "double-swing",
    name: { EN: "Double Gate", ES: "Port\xF3n doble" },
    tag: { EN: "Driveway drive gates", ES: "Portones de acceso vehicular" },
    img: "gate-double",
    href: "gate-double.html",
    desc: { EN: "Double drive gates for driveway access, fabricated in-house in vinyl, chain link, metal and aluminum, standard or custom sized, with matching hardware.", ES: "Portones dobles para acceso vehicular, fabricados en planta en vinilo, malla, metal y aluminio, est\xE1ndar o a medida, con herrajes a juego." }
  },
  {
    id: "sliding",
    name: { EN: "Sliding Gate", ES: "Port\xF3n corredizo" },
    tag: { EN: "Space-saving access", ES: "Acceso que ahorra espacio" },
    img: "gate-sliding",
    href: "gate-sliding.html",
    desc: { EN: "Sliding gates for openings with no room to swing. Fabricated in-house and available in standard and custom sizes.", ES: "Portones corredizos para aberturas sin espacio para abatir. Fabricados en planta, en tama\xF1os est\xE1ndar y a medida." }
  },
  {
    id: "cantilever",
    name: { EN: "Cantilever Gate", ES: "Port\xF3n cantilever" },
    tag: { EN: "Commercial & industrial", ES: "Comercial e industrial" },
    img: "gate-cantilever",
    href: "gate-cantilever.html",
    desc: { EN: "Cantilever gates built for easy operation and long-lasting use, quick, secure entry to and from your property.", ES: "Portones cantilever construidos para operaci\xF3n f\xE1cil y uso duradero, entrada y salida r\xE1pida y segura de tu propiedad." }
  },
  {
    id: "rolling",
    name: { EN: "Rolling Gate", ES: "Port\xF3n rodante" },
    tag: { EN: "Industrial rolling gates", ES: "Portones rodantes industriales" },
    img: "gate-rolling",
    href: "gate-rolling.html",
    desc: { EN: "Rolling gates built for easy operation and long-lasting use, for quick and secure entry to and from your property.", ES: "Portones rodantes construidos para operaci\xF3n f\xE1cil y uso duradero, para entrada y salida r\xE1pida y segura de tu propiedad." }
  }
];
const SectionHeader = ({ kicker, title, sub }) => /* @__PURE__ */ React.createElement("div", { style: {
  borderBottom: "1px solid var(--ink)",
  paddingBottom: 24,
  marginBottom: 56
} }, kicker && /* @__PURE__ */ React.createElement("div", { className: "mono", style: {
  fontSize: 14,
  letterSpacing: "0.18em",
  color: "var(--charcoal)",
  textTransform: "uppercase",
  marginBottom: 14
} }, kicker), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 32, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("h2", { className: "display", style: {
  fontSize: "clamp(36px, 4.6vw, 60px)",
  margin: 0,
  lineHeight: 1,
  letterSpacing: "-0.015em",
  maxWidth: 620
} }, title), sub && /* @__PURE__ */ React.createElement("p", { style: {
  fontSize: 16.5,
  color: "var(--charcoal)",
  margin: 0,
  maxWidth: 380,
  lineHeight: 1.55
} }, sub)));
const FenceIcon = ({ id }) => {
  const props = { width: 26, height: 26, viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "square" };
  switch (id) {
    case "vinyl":
      return /* @__PURE__ */ React.createElement("svg", { ...props }, /* @__PURE__ */ React.createElement("path", { d: "M3 10h26M3 22h26M8 6v22M14 6v22M20 6v22M26 6v22" }));
    case "aluminum":
      return /* @__PURE__ */ React.createElement("svg", { ...props }, /* @__PURE__ */ React.createElement("path", { d: "M3 10h26M3 22h26" }), /* @__PURE__ */ React.createElement("path", { d: "M7 6v22M12 6v22M17 6v22M22 6v22M27 6v22", strokeWidth: "1.2" }));
    case "chainlink":
      return /* @__PURE__ */ React.createElement("svg", { ...props }, /* @__PURE__ */ React.createElement("path", { d: "M5 6l6 6-6 6 6 6M11 6l6 6-6 6 6 6M17 6l6 6-6 6 6 6M23 6l6 6-6 6 6 6" }));
    case "metal":
      return /* @__PURE__ */ React.createElement("svg", { ...props }, /* @__PURE__ */ React.createElement("path", { d: "M5 6h22v22H5z" }), /* @__PURE__ */ React.createElement("path", { d: "M5 13h22M5 20h22M12 6v22M19 6v22" }));
    case "ecfence":
      return /* @__PURE__ */ React.createElement("svg", { ...props }, /* @__PURE__ */ React.createElement("rect", { x: "4", y: "6", width: "9", height: "22" }), /* @__PURE__ */ React.createElement("rect", { x: "19", y: "6", width: "9", height: "22" }), /* @__PURE__ */ React.createElement("path", { d: "M13 13h6M13 20h6" }));
    /* gate icons */
    case "single-swing":
      return /* @__PURE__ */ React.createElement("svg", { ...props }, /* @__PURE__ */ React.createElement("path", { d: "M6 6v22M6 6l16 4v14L6 28" }));
    case "double-swing":
      return /* @__PURE__ */ React.createElement("svg", { ...props }, /* @__PURE__ */ React.createElement("path", { d: "M16 6v22M16 6L4 10v14l12 4M16 6l12 4v14L16 28" }));
    case "sliding":
      return /* @__PURE__ */ React.createElement("svg", { ...props }, /* @__PURE__ */ React.createElement("path", { d: "M4 12h24M4 22h24" }), /* @__PURE__ */ React.createElement("path", { d: "M8 8l-4 4 4 4M24 18l4 4-4 4" }));
    case "cantilever":
      return /* @__PURE__ */ React.createElement("svg", { ...props }, /* @__PURE__ */ React.createElement("path", { d: "M4 22h24M8 12v10M14 12v10M20 12v10M26 12v10" }), /* @__PURE__ */ React.createElement("path", { d: "M4 12h22" }));
    case "rolling":
      return /* @__PURE__ */ React.createElement("svg", { ...props }, /* @__PURE__ */ React.createElement("circle", { cx: "9", cy: "24", r: "3" }), /* @__PURE__ */ React.createElement("circle", { cx: "23", cy: "24", r: "3" }), /* @__PURE__ */ React.createElement("path", { d: "M4 16h24v4H4z" }), /* @__PURE__ */ React.createElement("path", { d: "M8 8h16v8H8z" }));
    default:
      return /* @__PURE__ */ React.createElement("svg", { ...props }, /* @__PURE__ */ React.createElement("circle", { cx: "16", cy: "16", r: "10" }));
  }
};
const ProductSelector = ({ items, ctaLabel = "Learn More" }) => {
  const [active, setActive] = React.useState(0);
  const item = items[active];
  return /* @__PURE__ */ React.createElement("div", { style: {
    display: "grid",
    gridTemplateColumns: "1.1fr 1.2fr 1fr",
    gap: 56,
    alignItems: "start"
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column" } }, items.map((it, i) => {
    const isActive = i === active;
    const isLast = i === items.length - 1;
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        key: it.id,
        onClick: () => setActive(i),
        style: {
          display: "flex",
          alignItems: "center",
          gap: 18,
          padding: "20px 18px",
          background: isActive ? "#ffffff" : "transparent",
          border: "none",
          borderBottom: isLast ? "none" : "1px solid rgba(0,16,17,0.12)",
          color: "var(--ink)",
          cursor: "pointer",
          textAlign: "left",
          fontFamily: "var(--sans)",
          fontWeight: isActive ? 700 : 500,
          fontSize: 18.5,
          letterSpacing: "-0.005em",
          transition: "background 0.18s ease",
          position: "relative"
        }
      },
      /* @__PURE__ */ React.createElement("span", { style: {
        width: 28,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--ink)"
      } }, /* @__PURE__ */ React.createElement(FenceIcon, { id: it.id })),
      /* @__PURE__ */ React.createElement("span", { style: { flex: 1 } }, it.name),
      it.isNew && /* @__PURE__ */ React.createElement("span", { style: {
        background: "var(--tangerine)",
        color: "var(--ink)",
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: "0.18em",
        padding: "4px 7px"
      } }, "NEW")
    );
  })), /* @__PURE__ */ React.createElement("div", { style: {
    position: "relative",
    aspectRatio: "1 / 1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    inset: "6%",
    border: "1px solid rgba(0,16,17,0.18)",
    borderRadius: "50%",
    background: "#ffffff"
  } }), /* @__PURE__ */ React.createElement(
    "img",
    {
      key: item.id,
      src: FENCE_IMG[item.img],
      alt: item.name,
      style: {
        position: "relative",
        width: "88%",
        height: "88%",
        objectFit: "cover",
        display: "block",
        animation: "fadeUp 0.4s ease"
      }
    }
  ), /* @__PURE__ */ React.createElement("style", null, `
          @keyframes fadeUp { from { opacity:0; transform: translateY(8px); } to { opacity:1; transform: none; } }
        `)), /* @__PURE__ */ React.createElement("div", { style: { paddingTop: 12 } }, /* @__PURE__ */ React.createElement("div", { className: "mono", style: {
    fontSize: 14,
    letterSpacing: "0.18em",
    color: "var(--charcoal)",
    textTransform: "uppercase",
    marginBottom: 14
  } }, item.tag), /* @__PURE__ */ React.createElement("h3", { className: "display", style: {
    fontSize: "clamp(24px, 2vw, 32px)",
    margin: "0 0 18px",
    lineHeight: 1.1,
    letterSpacing: "-0.01em"
  } }, item.name), /* @__PURE__ */ React.createElement("p", { key: item.id + "-desc", style: {
    fontSize: 16.5,
    lineHeight: 1.65,
    color: "var(--charcoal)",
    margin: "0 0 28px",
    animation: "fadeUp 0.4s ease"
  } }, item.desc), /* @__PURE__ */ React.createElement("a", { href: item.href || "#", className: "btn btn-dark", style: { fontSize: 14.5 } }, ctaLabel, /* @__PURE__ */ React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M3 8h10m0 0L9 4m4 4l-4 4", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "square" })))));
};
const FenceCard = ({ item, index, featured }) => {
  const [hover, setHover] = React.useState(false);
  const num = String(index + 1).padStart(2, "0");
  return /* @__PURE__ */ React.createElement(
    "a",
    {
      href: item.href || "#",
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        gridColumn: featured ? "span 2" : "span 1",
        gridRow: featured ? "span 2" : "span 1",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        background: "var(--white)",
        border: "1px solid rgba(0,16,17,0.12)",
        textDecoration: "none",
        color: "var(--ink)",
        overflow: "hidden",
        transition: "border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease",
        borderColor: hover ? "var(--ink)" : "rgba(0,16,17,0.12)",
        boxShadow: hover ? "0 24px 48px -28px rgba(0,16,17,0.35)" : "none"
      }
    },
    /* @__PURE__ */ React.createElement("div", { style: {
      position: "relative",
      aspectRatio: featured ? "4 / 3.2" : "4 / 3.2",
      overflow: "hidden",
      background: "#ffffff"
    } }, /* @__PURE__ */ React.createElement(
      "img",
      {
        src: FENCE_IMG[item.img],
        alt: item.name,
        style: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          transform: hover ? "scale(1.04)" : "scale(1)",
          transition: "transform 0.6s ease"
        }
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "mono", style: {
      position: "absolute",
      top: 14,
      left: 14,
      fontSize: 13.5,
      fontWeight: 600,
      letterSpacing: "0.18em",
      color: "var(--ink)",
      background: "var(--white)",
      padding: "5px 9px"
    } }, num), item.isNew && /* @__PURE__ */ React.createElement("div", { className: "mono", style: {
      position: "absolute",
      top: 14,
      right: 14,
      fontSize: 13.5,
      fontWeight: 700,
      letterSpacing: "0.18em",
      color: "var(--ink)",
      background: "var(--tangerine)",
      padding: "5px 9px"
    } }, "NEW")),
    /* @__PURE__ */ React.createElement("div", { style: {
      padding: featured ? "32px 32px 28px" : "24px 24px 22px",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      flex: 1
    } }, /* @__PURE__ */ React.createElement("div", { className: "mono", style: {
      fontSize: 14,
      letterSpacing: "0.16em",
      color: "var(--charcoal)",
      textTransform: "uppercase"
    } }, item.tag), /* @__PURE__ */ React.createElement("h3", { className: "display", style: {
      margin: 0,
      fontSize: featured ? "clamp(28px, 2.6vw, 38px)" : "clamp(20px, 1.8vw, 24px)",
      lineHeight: 1.05,
      letterSpacing: "-0.01em"
    } }, item.name), featured && /* @__PURE__ */ React.createElement("p", { style: {
      fontSize: 15.5,
      lineHeight: 1.6,
      color: "var(--charcoal)",
      margin: "6px 0 0",
      maxWidth: 480
    } }, item.desc), /* @__PURE__ */ React.createElement("div", { style: {
      marginTop: featured ? 18 : "auto",
      paddingTop: featured ? 0 : 14,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderTop: featured ? "none" : "1px solid rgba(0,16,17,0.1)"
    } }, /* @__PURE__ */ React.createElement("span", { className: "mono", style: {
      fontSize: 14,
      fontWeight: 700,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: hover ? "var(--laser-blue)" : "var(--ink)",
      transition: "color 0.2s ease"
    } }, "Explore \u2192"), /* @__PURE__ */ React.createElement("span", { style: {
      width: 32,
      height: 32,
      border: "1px solid var(--ink)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: hover ? "var(--ink)" : "transparent",
      color: hover ? "var(--white)" : "var(--ink)",
      transition: "all 0.2s ease"
    } }, /* @__PURE__ */ React.createElement("svg", { width: "13", height: "13", viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M3 8h10m0 0L9 4m4 4l-4 4", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "square" })))))
  );
};
const FenceStyleCard = ({ item, index }) => {
  const t = useT();
  const [hover, setHover] = React.useState(false);
  const num = String(index + 1).padStart(2, "0");
  const nameStr = typeof item.name === "string" ? item.name : t(item.name);
  const tagStr = typeof item.tag === "string" ? item.tag : t(item.tag);
  return /* @__PURE__ */ React.createElement(
    "a",
    {
      href: item.href || "#",
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        position: "relative",
        display: "block",
        textDecoration: "none",
        color: "var(--white)",
        aspectRatio: "4 / 5",
        overflow: "hidden",
        background: "#263166",
        transition: "transform 0.35s ease",
        transform: hover ? "translateY(-4px)" : "none"
      }
    },
    /* @__PURE__ */ React.createElement(
      "img",
      {
        src: FENCE_IMG[item.img],
        alt: nameStr,
        style: {
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: hover ? "scale(1.06)" : "scale(1)",
          transition: "transform 0.7s ease"
        }
      }
    ),
    /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(38, 49, 102,0) 35%, rgba(38, 49, 102,0.55) 65%, rgba(38, 49, 102,0.92) 100%)"
    } }),
    item.isNew && /* @__PURE__ */ React.createElement("span", { className: "mono", style: {
      position: "absolute",
      top: 12,
      right: 12,
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: "0.22em",
      color: "var(--ink)",
      background: "var(--tangerine)",
      padding: "5px 8px"
    } }, t("NEW", "NUEVO")),
    /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      left: 16,
      right: 16,
      bottom: 16
    } }, /* @__PURE__ */ React.createElement("h3", { className: "display", style: {
      margin: "0 0 6px",
      fontSize: "clamp(17px, 1.5vw, 22px)",
      lineHeight: 1,
      letterSpacing: "-0.01em"
    } }, nameStr), /* @__PURE__ */ React.createElement("div", { className: "mono", style: {
      fontSize: 13.5,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.85)"
    } }, tagStr)),
    /* @__PURE__ */ React.createElement("span", { style: {
      position: "absolute",
      bottom: 16,
      right: 16,
      width: 32,
      height: 32,
      background: "var(--tangerine)",
      color: "var(--ink)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      opacity: hover ? 1 : 0,
      transform: hover ? "translate(0,0)" : "translate(6px, 6px)",
      transition: "opacity 0.25s ease, transform 0.25s ease"
    } }, /* @__PURE__ */ React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M5 11L11 5M11 5H6M11 5V10", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "square" })))
  );
};
const FENCE_RARITY = {
  vinyl: { c1: "#2e59c1", c2: "#263166" },
  // laser-blue → indigo
  aluminum: { c1: "#6381d6", c2: "#263166" },
  // glaucous → indigo
  chainlink: { c1: "#97baff", c2: "#2e59c1" },
  // blue-ice → laser-blue
  metal: { c1: "#c1c1c1", c2: "#565656" },
  // silver → charcoal
  ecfence: { c1: "#ff7133", c2: "#263166" }
  // tangerine accent → ink
};
const GATE_RARITY = {
  "single-swing": { c1: "#97baff", c2: "#6381d6" },
  // steel blue
  "double-swing": { c1: "#6381d6", c2: "#263166" },
  // teal
  "sliding": { c1: "#e5d8ca", c2: "#565656" },
  // brass
  "cantilever": { c1: "#c1c1c1", c2: "#565656" },
  // graphite
  "rolling": { c1: "#ffa180", c2: "#ff7133" }
  // industrial orange
};
const SystemCard = ({ item, index, active, onSelect, rarity, variant }) => {
  const t = useT();
  const nameStr = t(item.name);
  const r = rarity[item.id] || { c1: "var(--glaucous)", c2: "var(--indigo-blue)" };
  const right = variant === "gate";
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      className: `fence-card${right ? " gate-card" : ""}${active ? " is-active" : ""}`,
      style: { "--r1": r.c1, "--r2": r.c2, maxHeight: "clamp(180px, 28vh, 360px)" },
      onMouseEnter: () => onSelect(index),
      onFocus: () => onSelect(index),
      onClick: () => onSelect(index),
      "aria-pressed": active,
      "aria-label": nameStr
    },
    /* @__PURE__ */ React.createElement("div", { className: "fence-card__inner" }, /* @__PURE__ */ React.createElement("img", { className: "fence-card__img", src: FENCE_IMG[item.img], alt: nameStr }), /* @__PURE__ */ React.createElement("div", { className: "fence-card__scrim" }), /* @__PURE__ */ React.createElement("span", { className: "fence-card__sheen" }), item.isNew && /* @__PURE__ */ React.createElement("span", { className: "mono", style: {
      position: "absolute",
      top: 10,
      [right ? "left" : "right"]: 10,
      fontSize: 9.5,
      fontWeight: 700,
      letterSpacing: "0.2em",
      color: "var(--ink)",
      background: r.c1,
      padding: "4px 6px"
    } }, t("NEW", "NUEVO")), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", left: 14, right: 14, bottom: 14, textAlign: right ? "right" : "left" } }, /* @__PURE__ */ React.createElement("h3", { className: "display", style: {
      margin: 0,
      color: "var(--white)",
      fontSize: "clamp(13px, 0.95vw, 16px)",
      lineHeight: 1.05,
      letterSpacing: "-0.01em"
    } }, nameStr)))
  );
};
const SystemDetail = ({ item, active, rarity, align, ctaLabel }) => {
  const t = useT();
  const r = rarity[item.id] || { c1: "var(--glaucous)", c2: "var(--indigo-blue)" };
  const nameStr = t(item.name);
  const right = align === "right";
  return /* @__PURE__ */ React.createElement("div", { style: {
    gridArea: "1 / 1",
    maxWidth: 560,
    justifySelf: right ? "end" : "start",
    textAlign: right ? "right" : "left",
    opacity: active ? 1 : 0,
    visibility: active ? "visible" : "hidden",
    transform: active ? "translateY(0)" : "translateY(8px)",
    transition: "opacity 0.45s ease, transform 0.45s ease",
    pointerEvents: active ? "auto" : "none"
  } }, /* @__PURE__ */ React.createElement("h2", { className: "display", style: {
    margin: "0 0 clamp(8px, 1.4vh, 14px)",
    color: "var(--white)",
    fontSize: "clamp(32px, 3vw + 1.6vh, 72px)",
    lineHeight: 0.92,
    letterSpacing: "-0.02em",
    fontWeight: 800,
    textShadow: "0 4px 30px rgba(0,0,0,0.4)"
  } }, nameStr), /* @__PURE__ */ React.createElement("p", { style: {
    margin: "0 0 clamp(14px, 2.4vh, 26px)",
    maxWidth: 480,
    marginLeft: right ? "auto" : 0,
    fontSize: "clamp(13px, 1.4vh, 15px)",
    lineHeight: 1.55,
    color: "rgba(255,255,255,0.86)"
  } }, t(item.desc)), /* @__PURE__ */ React.createElement("a", { href: item.href || "#", className: "mono", style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 12,
    fontSize: 14.5,
    fontWeight: 700,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "var(--ink)",
    background: "var(--tangerine)",
    padding: "clamp(11px, 1.6vh, 14px) 22px"
  } }, t(ctaLabel), " ", nameStr, /* @__PURE__ */ React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M3 8h10m0 0L9 4m4 4l-4 4", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "square" }))));
};
const SystemArena = ({ sectionId, items, rarity, label, chapter, align, variant, topLink, ctaLabel }) => {
  const t = useT();
  const [active, setActive] = React.useState(0);
  const [locked, setLocked] = React.useState(false);
  React.useEffect(() => {
    if (locked) return;
    const id = setInterval(() => setActive((a) => (a + 1) % items.length), 4200);
    return () => clearInterval(id);
  }, [locked, items.length]);
  const select = React.useCallback((i) => {
    setActive(i);
    setLocked(true);
  }, []);
  const item = items[active];
  const r = rarity[item.id] || { c1: "var(--glaucous)", c2: "var(--indigo-blue)" };
  const right = align === "right";
  return /* @__PURE__ */ React.createElement("section", { id: sectionId, className: "fence-arena", style: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "clamp(124px, 14vh, 152px) 0 clamp(24px, 4vh, 48px)"
  } }, items.map((c, i) => /* @__PURE__ */ React.createElement(
    "div",
    {
      key: c.id,
      className: `fence-arena__bg${i === active ? " is-active" : ""}`,
      style: { backgroundImage: `url(${FENCE_IMG[c.img]})` }
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "fence-arena__wash", style: {
    background: `radial-gradient(90% 70% at ${right ? "82%" : "18%"} 30%, ${r.c1}88, transparent 60%), linear-gradient(180deg, ${r.c2}55, transparent 55%)`
  } }), /* @__PURE__ */ React.createElement("div", { className: "fence-arena__scrim" }), /* @__PURE__ */ React.createElement("div", { className: "fence-arena__grid" }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: 0, left: 0, right: 0, height: 3, background: r.c1, zIndex: 3, transition: "background 0.6s ease" } }), /* @__PURE__ */ React.createElement("div", { className: "container fence-arena__inner", style: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    minHeight: 0,
    width: "100%"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: right ? "row-reverse" : "row",
    gap: 24,
    flexWrap: "wrap",
    borderBottom: "1px solid rgba(255,255,255,0.20)",
    paddingBottom: "clamp(12px, 1.8vh, 20px)",
    marginBottom: "clamp(14px, 2.6vh, 34px)"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 14,
    flexDirection: right ? "row-reverse" : "row"
  } }, /* @__PURE__ */ React.createElement("span", { className: "mono", style: {
    fontSize: 14,
    fontWeight: 700,
    letterSpacing: "0.18em",
    color: "var(--ink)",
    background: r.c1,
    padding: "4px 8px"
  } }, chapter), /* @__PURE__ */ React.createElement("span", { className: "display", style: {
    fontSize: "clamp(18px, 1.4vw + 0.8vh, 30px)",
    fontWeight: 800,
    letterSpacing: "0.02em",
    color: "var(--white)",
    lineHeight: 1
  } }, t(label)), /* @__PURE__ */ React.createElement("span", { style: { width: "clamp(28px, 5vw, 88px)", height: 2, background: r.c1, transition: "background 0.5s ease" } })), /* @__PURE__ */ React.createElement("a", { href: topLink.href, className: "mono", style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    fontSize: 14,
    fontWeight: 700,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--white)",
    borderBottom: "1px solid rgba(255,255,255,0.6)",
    paddingBottom: 4
  } }, t(topLink.label), /* @__PURE__ */ React.createElement("svg", { width: "12", height: "12", viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M3 8h10m0 0L9 4m4 4l-4 4", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "square" })))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", marginBottom: "clamp(16px, 3vh, 40px)", justifyItems: right ? "end" : "start" } }, items.map((c, i) => /* @__PURE__ */ React.createElement(
    SystemDetail,
    {
      key: c.id,
      item: c,
      active: i === active,
      rarity,
      align,
      ctaLabel
    }
  ))), /* @__PURE__ */ React.createElement("div", { className: "fence-rail", style: { marginTop: "auto" } }, items.map((c, i) => /* @__PURE__ */ React.createElement(
    SystemCard,
    {
      key: c.id,
      item: c,
      index: i,
      active: i === active,
      onSelect: select,
      rarity,
      variant
    }
  )))));
};
const SlatArena = ({ id, chapter, label, items, topLink, ctaLabel }) => {
  const t = useT();
  const [active, setActive] = React.useState(0);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("section", { id, className: "wfs-slat-section", style: {
    background: "var(--indigo-blue)",
    height: "clamp(540px, calc(100svh - 118px), 880px)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden"
  } }, /* @__PURE__ */ React.createElement("div", { className: "container", style: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 24,
    flexWrap: "wrap",
    padding: "clamp(18px, 3vh, 30px) var(--pad)"
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 18 } }, /* @__PURE__ */ React.createElement("span", { className: "mono", style: {
    background: "var(--laser-blue)",
    color: "var(--white)",
    padding: "3px 7px",
    fontSize: 14.5,
    fontWeight: 700,
    lineHeight: 1
  } }, chapter), /* @__PURE__ */ React.createElement("h2", { className: "display", style: {
    margin: 0,
    fontSize: "clamp(28px, 2.6vw, 40px)",
    fontWeight: 800,
    letterSpacing: "-0.01em",
    textTransform: "capitalize",
    color: "var(--white)",
    lineHeight: 1
  } }, t(label)), /* @__PURE__ */ React.createElement("span", { "aria-hidden": true, style: { width: 90, height: 2, background: "var(--laser-blue)" } })), /* @__PURE__ */ React.createElement("a", { href: topLink.href, className: "mono", style: {
    fontSize: "clamp(12px, 1vw, 15px)",
    fontWeight: 700,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--white)"
  } }, t(topLink.label), " \u2192")), /* @__PURE__ */ React.createElement("div", { className: "wfs-slats" }, items.map((c, i) => {
    const exp = i === active;
    return /* @__PURE__ */ React.createElement(
      "a",
      {
        key: c.id,
        href: c.href,
        className: "wfs-slat",
        onMouseEnter: () => setActive(i),
        onFocus: () => setActive(i),
        style: { flexGrow: exp ? 3.2 : 1, flexBasis: 0 }
      },
      /* @__PURE__ */ React.createElement("img", { src: FENCE_IMG[c.img], alt: t(c.name), style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover"
      } }),
      /* @__PURE__ */ React.createElement("div", { "aria-hidden": true, className: "wfs-slat__overlay", style: {
        position: "absolute",
        inset: 0,
        background: exp ? "linear-gradient(180deg, rgba(38, 49, 103, 0.04) 28%, rgba(38, 49, 103, 0.85) 100%)" : "rgba(38, 49, 102, 0.66)",
        transition: "background 0.5s ease"
      } }),
      /* @__PURE__ */ React.createElement("span", { className: "mono", style: {
        position: "absolute",
        top: 24,
        left: 24,
        fontSize: 16.5,
        fontWeight: 700,
        lineHeight: 1,
        color: exp ? "var(--tangerine)" : "var(--blue-ice)",
        transition: "color 0.35s ease"
      } }, "0", i + 1),
      c.isNew && /* @__PURE__ */ React.createElement("span", { className: "mono", style: {
        position: "absolute",
        top: 22,
        right: 22,
        background: "var(--tangerine)",
        color: "var(--white)",
        padding: "4px 8px",
        fontSize: 13.5,
        fontWeight: 700,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        lineHeight: 1
      } }, t("New", "Nuevo")),
      /* @__PURE__ */ React.createElement("span", { className: "mono wfs-slat__vlabel", style: {
        position: "absolute",
        bottom: 26,
        left: 22,
        fontSize: "clamp(13px, 1.1vw, 19px)",
        fontWeight: 600,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "var(--white)",
        whiteSpace: "nowrap",
        opacity: exp ? 0 : 1,
        transition: "opacity 0.3s ease"
      } }, t(c.name)),
      /* @__PURE__ */ React.createElement("div", { className: "wfs-slat__expanded", style: {
        position: "absolute",
        left: "clamp(24px, 3vw, 44px)",
        right: "clamp(20px, 2.5vw, 40px)",
        bottom: "clamp(26px, 4.5vh, 44px)",
        opacity: exp ? 1 : 0,
        transform: exp ? "translateY(0)" : "translateY(12px)",
        transition: exp ? "opacity 0.4s ease 0.18s, transform 0.4s ease 0.18s" : "opacity 0.2s ease, transform 0.2s ease",
        pointerEvents: exp ? "auto" : "none"
      } }, /* @__PURE__ */ React.createElement("h3", { className: "display", style: {
        margin: "0 0 12px",
        fontSize: "clamp(26px, 2.9vw, 56px)",
        fontWeight: 800,
        lineHeight: 0.98,
        letterSpacing: "-0.01em",
        textTransform: "capitalize",
        color: "var(--white)",
        textShadow: "0 2px 20px rgba(0,16,17,0.6)"
      } }, t(c.name)), /* @__PURE__ */ React.createElement("p", { style: {
        margin: "0 0 18px",
        maxWidth: 520,
        fontSize: "clamp(13px, 1.05vw, 16px)",
        lineHeight: 1.5,
        color: "var(--white)",
        textShadow: "0 1px 12px rgba(0,16,17,0.6)"
      } }, t(c.desc)), /* @__PURE__ */ React.createElement("span", { className: "mono", style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        fontSize: "clamp(12px, 1vw, 15px)",
        fontWeight: 700,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        color: "var(--tangerine)"
      } }, t(ctaLabel), " ", t(c.name), " ", /* @__PURE__ */ React.createElement("span", { style: { fontSize: "1.25em" } }, "\u2192")))
    );
  }))), /* @__PURE__ */ React.createElement(SystemCarousel, { id, chapter, label, items, topLink, ctaLabel }));
};
const SystemCarousel = ({ id, chapter, label, items, topLink, ctaLabel }) => {
  const t = useT();
  const scrollerRef = React.useRef(null);
  const [active, setActive] = React.useState(0);
  const onScroll = React.useCallback(() => {
    const el = scrollerRef.current;
    if (!el || !el.firstChild) return;
    const step = el.firstChild.offsetWidth + 16;
    const idx = Math.round(el.scrollLeft / step);
    setActive(Math.max(0, Math.min(items.length - 1, idx)));
  }, [items.length]);
  React.useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const reset = () => {
      el.scrollLeft = 0;
      setActive(0);
    };
    reset();
    window.addEventListener("pageshow", reset);
    return () => window.removeEventListener("pageshow", reset);
  }, []);
  return /* @__PURE__ */ React.createElement("section", { id: `${id}-mobile`, className: "wfs-msys", style: { background: "var(--indigo-blue)" } }, /* @__PURE__ */ React.createElement("div", { className: "container", style: { paddingTop: "clamp(48px, 8vh, 72px)", paddingBottom: 24 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 14 } }, /* @__PURE__ */ React.createElement("span", { className: "mono", style: {
    background: "var(--laser-blue)",
    color: "var(--white)",
    padding: "4px 8px",
    fontSize: 14.5,
    fontWeight: 700,
    lineHeight: 1
  } }, chapter), /* @__PURE__ */ React.createElement("h2", { className: "display", style: {
    margin: 0,
    fontSize: "clamp(30px, 9vw, 40px)",
    fontWeight: 800,
    letterSpacing: "-0.01em",
    color: "var(--white)",
    lineHeight: 1
  } }, t(label)), /* @__PURE__ */ React.createElement("span", { "aria-hidden": true, style: { flex: 1, height: 2, background: "rgba(151,186,255,0.5)" } })), /* @__PURE__ */ React.createElement("a", { href: topLink.href, className: "mono", style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    marginTop: 16,
    fontSize: 14.5,
    fontWeight: 700,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--tangerine)"
  } }, t(topLink.label), /* @__PURE__ */ React.createElement("svg", { width: "13", height: "13", viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M3 8h10m0 0L9 4m4 4l-4 4", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "square" })))), /* @__PURE__ */ React.createElement("div", { ref: scrollerRef, onScroll, className: "wfs-msys__scroller" }, items.map((c, i) => /* @__PURE__ */ React.createElement("a", { key: c.id, href: c.href, className: "wfs-msys__card" }, /* @__PURE__ */ React.createElement("div", { className: "wfs-msys__imgwrap" }, /* @__PURE__ */ React.createElement("img", { src: FENCE_IMG[c.img], alt: t(c.name), className: "wfs-msys__img" }), /* @__PURE__ */ React.createElement("div", { "aria-hidden": true, className: "wfs-msys__overlay" }), /* @__PURE__ */ React.createElement("span", { className: "mono", style: {
    position: "absolute",
    top: 16,
    left: 16,
    background: "var(--ink)",
    color: "var(--white)",
    padding: "5px 9px",
    fontSize: 14.5,
    fontWeight: 700,
    lineHeight: 1
  } }, "0", i + 1), c.isNew && /* @__PURE__ */ React.createElement("span", { className: "mono", style: {
    position: "absolute",
    top: 16,
    right: 16,
    background: "var(--tangerine)",
    color: "var(--white)",
    padding: "4px 8px",
    fontSize: 13.5,
    fontWeight: 700,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    lineHeight: 1
  } }, t("New", "Nuevo"))), /* @__PURE__ */ React.createElement("div", { style: { padding: "22px 2px 4px" } }, /* @__PURE__ */ React.createElement("h3", { className: "display", style: {
    margin: "0 0 12px",
    fontSize: 27.5,
    fontWeight: 800,
    letterSpacing: "-0.01em",
    color: "var(--white)",
    lineHeight: 1,
    textTransform: "capitalize"
  } }, t(c.name)), /* @__PURE__ */ React.createElement("p", { style: {
    margin: "0 0 18px",
    fontSize: 16.5,
    lineHeight: 1.5,
    color: "rgba(219,233,238,0.82)"
  } }, t(c.desc)), /* @__PURE__ */ React.createElement("span", { className: "mono", style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    fontSize: 14.5,
    fontWeight: 700,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "var(--tangerine)"
  } }, t(ctaLabel), " ", /* @__PURE__ */ React.createElement("span", { style: { fontSize: "1.2em" } }, "\u2192")))))), /* @__PURE__ */ React.createElement("div", { className: "container", style: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    paddingTop: 22,
    paddingBottom: "clamp(40px, 7vh, 64px)"
  } }, /* @__PURE__ */ React.createElement("span", { className: "mono", style: {
    fontSize: 15.5,
    fontWeight: 700,
    letterSpacing: "0.14em",
    color: "var(--white)",
    whiteSpace: "nowrap"
  } }, String(active + 1).padStart(2, "0"), " / ", String(items.length).padStart(2, "0")), /* @__PURE__ */ React.createElement("span", { style: { flex: 1, height: 3, background: "rgba(255,255,255,0.2)", position: "relative" } }, /* @__PURE__ */ React.createElement("span", { style: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: `${(active + 1) / items.length * 100}%`,
    background: "var(--tangerine)",
    transition: "width 0.3s ease"
  } }))));
};
const SystemTabs = ({ id, chapter, label, items, topLink, ctaLabel }) => {
  const t = useT();
  const [active, setActive] = React.useState(0);
  const cur = items[Math.min(active, items.length - 1)];
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("section", { id, className: "wfs-systemtabs", style: {
    background: "var(--indigo-blue)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden"
  } }, /* @__PURE__ */ React.createElement("div", { className: "container", style: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 24,
    flexWrap: "wrap",
    padding: "clamp(18px, 3vh, 30px) var(--pad)"
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 18 } }, /* @__PURE__ */ React.createElement("span", { className: "mono", style: {
    background: "var(--laser-blue)",
    color: "var(--white)",
    padding: "3px 7px",
    fontSize: 14.5,
    fontWeight: 700,
    lineHeight: 1
  } }, chapter), /* @__PURE__ */ React.createElement("h2", { className: "display", style: {
    margin: 0,
    fontSize: "clamp(28px, 2.6vw, 40px)",
    fontWeight: 800,
    letterSpacing: "-0.01em",
    textTransform: "capitalize",
    color: "var(--white)",
    lineHeight: 1
  } }, t(label)), /* @__PURE__ */ React.createElement("span", { "aria-hidden": true, style: { width: 90, height: 2, background: "var(--laser-blue)" } })), /* @__PURE__ */ React.createElement("a", { href: topLink.href, className: "mono", style: {
    fontSize: "clamp(12px, 1vw, 15px)",
    fontWeight: 700,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--white)"
  } }, t(topLink.label), " \u2192")), /* @__PURE__ */ React.createElement("div", { className: "wfs-systemtabs__bar", role: "tablist", style: {
    display: "grid",
    gridTemplateColumns: `repeat(${items.length}, 1fr)`,
    borderTop: "1px solid rgba(255,255,255,0.14)",
    borderBottom: "1px solid rgba(255,255,255,0.14)"
  } }, items.map((it, i) => {
    const on = i === active;
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        key: it.id,
        role: "tab",
        "aria-selected": on,
        onMouseEnter: () => setActive(i),
        onFocus: () => setActive(i),
        onClick: () => setActive(i),
        style: {
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "clamp(13px, 2vh, 19px) clamp(14px, 1.6vw, 26px)",
          background: on ? "rgba(255,255,255,0.05)" : "transparent",
          border: "none",
          borderRight: i < items.length - 1 ? "1px solid rgba(255,255,255,0.14)" : "none",
          borderBottom: on ? "2px solid var(--tangerine)" : "2px solid transparent",
          cursor: "pointer",
          textAlign: "left",
          minWidth: 0,
          transition: "background 0.2s ease"
        }
      },
      /* @__PURE__ */ React.createElement("span", { className: "mono", style: {
        fontSize: 14.5,
        fontWeight: 700,
        flexShrink: 0,
        color: on ? "var(--tangerine)" : "rgba(219,233,238,0.5)"
      } }, "0", i + 1),
      /* @__PURE__ */ React.createElement("span", { className: "mono", style: {
        fontSize: "clamp(10.5px, 0.9vw, 13px)",
        fontWeight: 700,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: on ? "var(--white)" : "rgba(219,233,238,0.55)",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      } }, t(it.name)),
      it.isNew && /* @__PURE__ */ React.createElement("span", { className: "mono", style: {
        marginLeft: "auto",
        flexShrink: 0,
        background: "var(--tangerine)",
        color: "var(--white)",
        padding: "3px 6px",
        fontSize: 11.5,
        fontWeight: 700,
        letterSpacing: "0.14em"
      } }, t("New", "Nuevo"))
    );
  })), /* @__PURE__ */ React.createElement("a", { key: cur.id, href: cur.href, className: "wfs-systemtabs__panel", style: {
    position: "relative",
    display: "flex",
    alignItems: "flex-end",
    minHeight: "clamp(420px, 56vh, 600px)",
    overflow: "hidden",
    textDecoration: "none"
  } }, /* @__PURE__ */ React.createElement("img", { src: FENCE_IMG[cur.img], alt: t(cur.name), style: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    animation: "fadeUp 0.45s ease"
  } }), /* @__PURE__ */ React.createElement("div", { "aria-hidden": true, style: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(90deg, rgba(38,49,103,0.68) 0%, rgba(38,49,103,0.36) 26%, rgba(38,49,103,0.08) 54%, rgba(38,49,103,0) 78%)"
  } }), /* @__PURE__ */ React.createElement("div", { "aria-hidden": true, style: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(180deg, rgba(38,49,103,0) 62%, rgba(38,49,103,0.40) 100%)"
  } }), /* @__PURE__ */ React.createElement("div", { style: {
    position: "relative",
    padding: "clamp(28px, 5vh, 52px) var(--pad)",
    maxWidth: 660
  } }, /* @__PURE__ */ React.createElement("div", { className: "mono", style: { fontSize: 15.5, fontWeight: 700, color: "var(--tangerine)", marginBottom: 14 } }, "0", active + 1), /* @__PURE__ */ React.createElement("h3", { className: "display", style: {
    margin: "0 0 16px",
    fontSize: "clamp(34px, 4.4vw, 68px)",
    fontWeight: 800,
    lineHeight: 0.96,
    letterSpacing: "-0.015em",
    textTransform: "capitalize",
    color: "var(--white)",
    textShadow: "0 2px 16px rgba(0,16,17,0.7), 0 1px 3px rgba(0,16,17,0.6)"
  } }, t(cur.name)), /* @__PURE__ */ React.createElement("p", { style: {
    margin: "0 0 22px",
    maxWidth: 540,
    fontSize: "clamp(14px, 1.1vw, 17px)",
    lineHeight: 1.5,
    color: "rgba(255,255,255,0.92)",
    textShadow: "0 1px 10px rgba(0,16,17,0.7), 0 1px 2px rgba(0,16,17,0.55)"
  } }, t(cur.desc)), /* @__PURE__ */ React.createElement("span", { className: "mono", style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 12,
    fontSize: "clamp(12px, 1vw, 15px)",
    fontWeight: 700,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "var(--tangerine)"
  } }, t(ctaLabel), " ", t(cur.name), " ", /* @__PURE__ */ React.createElement("span", { style: { fontSize: "1.25em" } }, "\u2192"))), /* @__PURE__ */ React.createElement("span", { className: "mono wfs-systemtabs__vlabel", style: {
    position: "absolute",
    right: "clamp(16px, 2vw, 30px)",
    bottom: "clamp(28px, 5vh, 52px)",
    writingMode: "vertical-rl",
    transform: "rotate(180deg)",
    fontSize: "clamp(11px, 0.9vw, 13px)",
    fontWeight: 700,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.9)",
    whiteSpace: "nowrap",
    textShadow: "0 1px 8px rgba(0,16,17,0.6)"
  } }, t(cur.name)))), /* @__PURE__ */ React.createElement(SystemCarousel, { id, chapter, label, items, topLink, ctaLabel }));
};
const FenceCategories = () => /* @__PURE__ */ React.createElement(
  SlatArena,
  {
    id: "fences",
    chapter: "01",
    label: { EN: "Fences", ES: "Cercas" },
    items: FENCE_CATEGORIES,
    topLink: { href: "products.html", label: { EN: "Full catalog", ES: "Cat\xE1logo completo" } },
    ctaLabel: { EN: "Explore", ES: "Explora" }
  }
);
const GateSystems = () => /* @__PURE__ */ React.createElement(
  SlatArena,
  {
    id: "gates",
    chapter: "02",
    label: { EN: "Gates", ES: "Portones" },
    items: GATE_SYSTEMS,
    topLink: { href: "estimate.html", label: { EN: "Custom quote", ES: "Cotizaci\xF3n a medida" } },
    ctaLabel: { EN: "Explore", ES: "Explora" }
  }
);
const WHY_WFS = [
  {
    title: { EN: "Manufacturing-direct", ES: "Directo de f\xE1brica" },
    desc: { EN: "Supplier-direct floor pricing, no middleman markup between the plant and your project.", ES: "Precio directo de f\xE1brica, sin intermediarios entre la planta y tu proyecto." },
    icon: /* @__PURE__ */ React.createElement("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M3 21V10l6 3V10l6 3V10l6 3v8Z" }), /* @__PURE__ */ React.createElement("path", { d: "M3 10 4 4h2l.5 4" }))
  },
  {
    title: { EN: "No minimums", ES: "Sin m\xEDnimos" },
    desc: { EN: "Order a single panel or a full subdivision, the same supplier-direct floor either way.", ES: "Pide un solo panel o una urbanizaci\xF3n completa, el mismo precio directo en ambos casos." },
    icon: /* @__PURE__ */ React.createElement("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M12 3 21 8 12 13 3 8Z" }), /* @__PURE__ */ React.createElement("path", { d: "M3 13l9 5 9-5" }))
  },
  {
    title: { EN: "Free takeoff \xB7 24h quotes", ES: "Toma de medidas gratis \xB7 24h" },
    desc: { EN: "Send measurements and get itemized pricing back within 24 hours.", ES: "Env\xEDa medidas y recibe precios detallados en menos de 24 horas." },
    icon: /* @__PURE__ */ React.createElement("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M5 3h9l5 5v13H5Z" }), /* @__PURE__ */ React.createElement("path", { d: "M14 3v5h5" }), /* @__PURE__ */ React.createElement("path", { d: "M8 13h7M8 17h5" }))
  },
  {
    title: { EN: "In-house fabrication", ES: "Fabricaci\xF3n propia" },
    desc: { EN: "Gates and custom work built in our Fort Myers shop.", ES: "Portones y trabajos a medida hechos en nuestro taller de Fort Myers." },
    icon: /* @__PURE__ */ React.createElement("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" }))
  }
];
const WhyWFS = () => {
  const t = useT();
  return /* @__PURE__ */ React.createElement("section", { style: { background: "var(--white)", padding: "clamp(64px, 9vh, 100px) 0" } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: 32,
    marginBottom: "clamp(36px, 5vh, 56px)",
    flexWrap: "wrap"
  } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 620 } }, /* @__PURE__ */ React.createElement("span", { className: "eyebrow", style: { color: "var(--ink)", display: "inline-flex", alignItems: "center", gap: 10 } }, /* @__PURE__ */ React.createElement("span", { style: { width: 8, height: 8, background: "var(--tangerine)" } }), t("Why Western Fence Supply", "Por qu\xE9 Western Fence Supply")), /* @__PURE__ */ React.createElement("h2", { className: "display", style: {
    margin: "14px 0 0",
    fontSize: "clamp(34px, 5vw, 56px)",
    lineHeight: 1,
    letterSpacing: "-0.02em"
  } }, t("Built by fencers.", "Hecho por cerqueros."), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--tangerine)" } }, t("Priced like a supplier.", "Preciado como proveedor."))), /* @__PURE__ */ React.createElement("p", { style: { margin: "18px 0 0", fontSize: 16, lineHeight: 1.6, color: "var(--charcoal)" } }, t(
    "We were the contractors before we were the supplier, so the yard runs on installer logic, not catalog markup.",
    "Fuimos los contratistas antes de ser el proveedor, por eso la sucursal funciona con l\xF3gica de instalador, no con margen de cat\xE1logo."
  ))), /* @__PURE__ */ React.createElement(PillCTA, { href: "estimate.html" }, t("Get started", "Comenzar"))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 } }, WHY_WFS.map((v, i) => /* @__PURE__ */ React.createElement(
    "div",
    {
      key: i,
      style: {
        border: "1px solid rgba(38, 49, 102,0.14)",
        background: "var(--white)",
        padding: "24px 22px 26px",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease"
      },
      onMouseEnter: (e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 18px 40px -22px rgba(0,16,17,0.3)";
        e.currentTarget.style.borderColor = "var(--ink)";
      },
      onMouseLeave: (e) => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = "";
        e.currentTarget.style.borderColor = "rgba(38, 49, 102,0.14)";
      }
    },
    /* @__PURE__ */ React.createElement("span", { style: {
      width: 46,
      height: 46,
      marginBottom: 18,
      border: "1.5px solid var(--ink)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--tangerine)"
    } }, v.icon),
    /* @__PURE__ */ React.createElement("h3", { className: "display", style: {
      margin: "0 0 8px",
      fontSize: 19.5,
      lineHeight: 1.15,
      letterSpacing: "-0.01em",
      color: "var(--ink)"
    } }, t(v.title)),
    /* @__PURE__ */ React.createElement("p", { className: "mono", style: {
      margin: 0,
      fontSize: 14.5,
      lineHeight: 1.55,
      color: "var(--charcoal)"
    } }, t(v.desc))
  )))));
};
Object.assign(window, {
  FenceCategories,
  GateSystems,
  SystemArena,
  WhyWFS,
  FENCE_CATEGORIES,
  GATE_SYSTEMS,
  FenceStyleCard
});
