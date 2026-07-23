const SiteHeader = ({ active }) => {
  const t = useT();
  const [curLang, setCurLang] = useLang();
  const [curMode, setCurMode] = useMode();
  const [openMenu, setOpenMenu] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mobileExpanded, setMobileExpanded] = React.useState(null);
  const [modeToast, setModeToast] = React.useState(null);
  const firstModeRender = React.useRef(true);
  React.useEffect(() => {
    if (firstModeRender.current) {
      firstModeRender.current = false;
      return;
    }
    setModeToast(curMode);
    const id = setTimeout(() => setModeToast(null), 2600);
    return () => clearTimeout(id);
  }, [curMode]);
  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);
  const NAV = [
    { id: "Fences", label: { EN: "Fences", ES: "Cercas" }, def: { kind: "mega-fences" } },
    { id: "Gates", label: { EN: "Gates", ES: "Portones" }, def: { kind: "mega-gates" } },
    { id: "Get a Quote", label: { EN: "Get a Quote", ES: "Cotizar" }, def: { kind: "list", items: [
      { label: { EN: "Draw Your Fence", ES: "Dibuja tu cerca" }, href: "https://app.westernfencesupply.com/", sub: { EN: "Sketch or send measurements, pricing in 24h", ES: "Dibuja o env\xEDa medidas, precios en 24h" } },
      { label: { EN: "Talk to a Live Agent", ES: "Hablar con un agente" }, href: "estimate.html#quote", sub: { EN: "Mon-Fri \xB7 Fort Myers + Port Charlotte", ES: "Lun-Vie \xB7 Fort Myers + Port Charlotte" } },
      { label: { EN: "Email Sales", ES: "Escribir a ventas" }, href: "mailto:sales@westernfencesupply.com", sub: { EN: "sales@westernfencesupply.com", ES: "sales@westernfencesupply.com" } }
    ] } },
    { id: "Company", label: { EN: "Company", ES: "Empresa" }, def: { kind: "list", items: [
      { label: { EN: "About WFS", ES: "Sobre WFS" }, href: "about.html", sub: { EN: "Family-owned \xB7 fabricated in-house", ES: "Familiar \xB7 fabricado en planta" } },
      { label: { EN: "Yard Locations", ES: "Sucursales" }, href: "locations.html", sub: { EN: "Pickup, hours & directions \xB7 FM + PC", ES: "Retiro, horarios y c\xF3mo llegar \xB7 FM + PC" } },
      { label: { EN: "Contact", ES: "Contacto" }, href: "contact.html", sub: { EN: "Phone, email, hours by yard", ES: "Tel\xE9fono, email, horarios por sucursal" } }
    ] } },
    { id: "Fence Education Hub", label: { EN: "Fence Education Hub", ES: "Centro Educativo" }, def: { kind: "list", items: [
      { label: { EN: "FAQ", ES: "Preguntas frecuentes" }, href: "faq.html", sub: { EN: "The questions we get every week", ES: "Las preguntas que recibimos cada semana" } },
      { label: { EN: "Materials Comparison", ES: "Comparativa de materiales" }, href: "materials-comparison.html", sub: { EN: "Aluminum vs Vinyl vs Chain Link vs Metal", ES: "Aluminio vs Vinilo vs Malla vs Metal" } },
      { label: { EN: "Florida Pool Code", ES: "C\xF3digo de piscinas FL" }, href: "pool-code.html", sub: { EN: "Code-compliant enclosure profiles", ES: "Perfiles de cerramiento seg\xFAn c\xF3digo" } }
    ] } }
  ];
  const FENCE_TILES = [
    { key: "aluminum", name: { EN: "Aluminum", ES: "Aluminio" }, tag: { EN: "Residential & Commercial", ES: "Residencial y comercial" }, href: "aluminum.html" },
    { key: "chainlink", name: { EN: "Chain Link", ES: "Malla cicl\xF3nica" }, tag: { EN: "Galv \xB7 Vinyl-Coated", ES: "Galv \xB7 Recubierto de vinilo" }, href: "chain-link.html" },
    { key: "metal", name: { EN: "Metal / DuraFence", ES: "Metal / DuraFence" }, tag: { EN: "Metal Privacy", ES: "Privacidad de metal" }, href: "metal.html" },
    { key: "vinyl", name: { EN: "Vinyl / PVC", ES: "Vinilo / PVC" }, tag: { EN: "Catalyst-Extruded PVC", ES: "PVC extruido Catalyst" }, href: "vinyl.html" },
    { key: "ecfence", name: { EN: "ecFence", ES: "ecFence" }, tag: { EN: "Galv Steel \xB7 HVHZ", ES: "Acero galv \xB7 HVHZ" }, href: "ecfence.html" }
  ];
  const GATE_TILES = [
    { key: "gate-single", name: { EN: "Single Swing", ES: "Batiente sencillo" }, tag: { EN: "Walk + entry gates", ES: "Peatonal + entrada" }, href: "gate-single.html" },
    { key: "gate-double", name: { EN: "Double Swing", ES: "Batiente doble" }, tag: { EN: "Driveway access", ES: "Acceso vehicular" }, href: "gate-double.html" },
    { key: "gate-sliding", name: { EN: "Sliding", ES: "Corredizo" }, tag: { EN: "Track-mounted", ES: "Sobre riel" }, href: "gate-sliding.html" },
    { key: "gate-cantilever", name: { EN: "Cantilever", ES: "Cantilever" }, tag: { EN: "No-ground-track", ES: "Sin riel en piso" }, href: "gate-cantilever.html" },
    { key: "gate-rolling", name: { EN: "Rolling", ES: "Rodante industrial" }, tag: { EN: "Industrial rolling", ES: "Rodante industrial" }, href: "gate-rolling.html" }
  ];
  const Caret = () => /* @__PURE__ */ React.createElement("svg", { width: "10", height: "10", viewBox: "0 0 12 12", fill: "none", style: { marginLeft: 4 } }, /* @__PURE__ */ React.createElement("path", { d: "M3 4.5 L6 7.5 L9 4.5", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "square" }));
  return /* @__PURE__ */ React.createElement("header", { style: { position: "sticky", top: 0, zIndex: 60, background: "var(--white)" } }, /* @__PURE__ */ React.createElement("style", null, `
        @keyframes wfsFadeDown { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: translateY(0); } }
      `), modeToast && /* @__PURE__ */ React.createElement("div", { role: "status", style: {
    position: "fixed",
    left: "50%",
    bottom: 28,
    transform: "translateX(-50%)",
    zIndex: 200,
    background: "var(--ink)",
    color: "var(--white)",
    padding: "13px 24px",
    borderRadius: 999,
    boxShadow: "0 14px 34px rgba(0,16,17,0.32)",
    fontFamily: "var(--sans)",
    fontSize: 14.5,
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    gap: 12,
    whiteSpace: "nowrap",
    animation: "wfsFadeDown 0.25s ease"
  } }, /* @__PURE__ */ React.createElement("span", { style: { width: 8, height: 8, borderRadius: "50%", background: "var(--tangerine)" } }), t(modeToast === "CONTRACTOR" ? "Now viewing contractor content" : "Now viewing homeowner content", modeToast === "CONTRACTOR" ? "Viendo contenido de contratista" : "Viendo contenido de propietario")), /* @__PURE__ */ React.createElement("div", { className: "wfs-utility-bar", style: { background: "var(--ink)", borderBottom: "1px solid rgba(255,255,255,0.08)", color: "var(--alice-blue)" } }, /* @__PURE__ */ React.createElement("div", { className: "container", style: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 32,
    paddingTop: 10,
    paddingBottom: 10,
    fontFamily: "var(--mono)",
    fontSize: 14,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    fontWeight: 700
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 24 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "inline-flex", alignItems: "center", gap: 16 } }, [
    { key: "HOMEOWNER", href: "homeowners.html", label: { EN: "HOMEOWNER", ES: "PROPIETARIO" } },
    { key: "CONTRACTOR", href: "contractors.html", label: { EN: "CONTRACTOR", ES: "CONTRATISTA" } }
  ].map((m, i) => /* @__PURE__ */ React.createElement(React.Fragment, { key: m.key }, i > 0 && /* @__PURE__ */ React.createElement("span", { "aria-hidden": true, style: { width: 1, height: 12, background: "rgba(255,255,255,0.18)" } }), /* @__PURE__ */ React.createElement(
    "a",
    {
      href: m.href,
      onClick: () => setCurMode(m.key),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        fontFamily: "inherit",
        fontSize: 12.5,
        fontWeight: 700,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "rgba(219,233,238,0.7)",
        textDecoration: "none",
        transition: "color 0.15s ease"
      },
      onMouseEnter: (e) => {
        e.currentTarget.style.color = "var(--white)";
      },
      onMouseLeave: (e) => {
        e.currentTarget.style.color = "rgba(219,233,238,0.7)";
      }
    },
    t(m.label),
    /* @__PURE__ */ React.createElement("svg", { width: "9", height: "9", viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M3 8h10m0 0L9 4m4 4l-4 4", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "square" }))
  ))))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 24 } }, /* @__PURE__ */ React.createElement(
    "a",
    {
      href: "estimate.html#quote",
      onClick: openLiveChat,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 9,
        padding: "6px 15px",
        borderRadius: 999,
        background: "rgba(255,255,255,0.1)",
        border: "1px solid rgba(255,255,255,0.3)",
        color: "var(--white)",
        textDecoration: "none",
        fontFamily: "inherit",
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
        transition: "background 0.15s ease, border-color 0.15s ease"
      },
      onMouseEnter: (e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.2)";
        e.currentTarget.style.borderColor = "var(--white)";
      },
      onMouseLeave: (e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.1)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
      }
    },
    /* @__PURE__ */ React.createElement("span", { "aria-hidden": true, style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      flexShrink: 0,
      background: "#3ddc84",
      boxShadow: "0 0 0 3px rgba(61,220,132,0.25)"
    } }),
    t({ EN: "Talk to a live agent", ES: "Habla con un asesor" })
  ), /* @__PURE__ */ React.createElement("span", { style: { width: 1, height: 14, background: "rgba(255,255,255,0.15)" } }), /* @__PURE__ */ React.createElement("a", { href: "tel:2396895496", style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    color: "var(--alice-blue)",
    textDecoration: "none"
  } }, /* @__PURE__ */ React.createElement("svg", { width: "11", height: "11", viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: "1.4" }, /* @__PURE__ */ React.createElement("path", { d: "M3 3h3l1.5 4-2 1c1 2 2.5 3.5 4.5 4.5l1-2 4 1.5v3c0 0.5-0.5 1-1 1C8 16 0 8 0 4c0-0.5 0.5-1 1-1z", transform: "translate(0.5,0)" })), "(239) 689-5496"), /* @__PURE__ */ React.createElement("span", { style: { width: 1, height: 14, background: "rgba(255,255,255,0.15)" } }), /* @__PURE__ */ React.createElement("div", { style: { display: "inline-flex", alignItems: "center", gap: 14 } }, ["EN", "ES"].map((l) => {
    const isActive = curLang === l;
    return /* @__PURE__ */ React.createElement("button", { key: l, onClick: () => setCurLang(l), style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: 0,
      background: "transparent",
      fontFamily: "inherit",
      fontSize: 14,
      fontWeight: 700,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: isActive ? "var(--white)" : "rgba(219,233,238,0.55)",
      cursor: "pointer"
    } }, /* @__PURE__ */ React.createElement("span", { "aria-hidden": true, style: {
      fontSize: 15.5,
      lineHeight: 1,
      filter: isActive ? "none" : "grayscale(0.55)",
      opacity: isActive ? 1 : 0.75
    } }, l === "EN" ? "\u{1F1FA}\u{1F1F8}" : "\u{1F1F2}\u{1F1FD}"), l);
  }))))), /* @__PURE__ */ React.createElement(
    "div",
    {
      onMouseLeave: () => setOpenMenu(null),
      style: { borderBottom: "1px solid var(--ink)", background: "var(--white)" }
    },
    /* @__PURE__ */ React.createElement("div", { className: "container", style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24,
      paddingTop: 14,
      paddingBottom: 14
    } }, /* @__PURE__ */ React.createElement("a", { href: "Homepage.html", style: {
      display: "inline-flex",
      alignItems: "center",
      padding: "6px 4px"
    } }, /* @__PURE__ */ React.createElement("img", { src: "https://crpozo.github.io/wfs-design-preview/assets/wfs-logo.svg", alt: "Western Fence Supply", style: { height: 40, width: "auto", display: "block" } })), /* @__PURE__ */ React.createElement("nav", { className: "wfs-desktop-nav", style: { display: "flex", gap: 26, alignItems: "center", flexWrap: "nowrap" } }, NAV.map(({ id, label, def }) => def.kind === "link" ? /* @__PURE__ */ React.createElement(
      "a",
      {
        key: id,
        href: def.href,
        target: def.external ? "_blank" : void 0,
        rel: def.external ? "noopener" : void 0,
        onMouseEnter: () => setOpenMenu(null),
        style: {
          display: "inline-flex",
          alignItems: "center",
          fontSize: 16.5,
          fontWeight: 500,
          color: active === id ? "var(--laser-blue)" : "var(--ink)",
          textDecoration: "none",
          padding: "8px 0",
          whiteSpace: "nowrap",
          borderBottom: active === id ? "2px solid var(--tangerine)" : "2px solid transparent",
          transition: "color 0.15s, border-color 0.15s"
        }
      },
      t(label)
    ) : /* @__PURE__ */ React.createElement(
      "div",
      {
        key: id,
        style: { position: "static" },
        onMouseEnter: () => setOpenMenu(id)
      },
      /* @__PURE__ */ React.createElement("button", { style: {
        display: "inline-flex",
        alignItems: "center",
        fontSize: 16.5,
        fontWeight: 500,
        color: openMenu === id ? "var(--laser-blue)" : "var(--ink)",
        background: "transparent",
        cursor: "pointer",
        padding: "8px 0",
        whiteSpace: "nowrap",
        borderBottom: active === id || openMenu === id ? "2px solid var(--tangerine)" : "2px solid transparent",
        transition: "color 0.15s, border-color 0.15s"
      } }, t(label), " ", /* @__PURE__ */ React.createElement(Caret, null))
    ))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 14, alignItems: "center" } }, /* @__PURE__ */ React.createElement("a", { href: "https://app.westernfencesupply.com/", target: "_blank", rel: "noopener", className: "mono wfs-hide-tablet", style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      padding: "7px 0",
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: "0.11em",
      textTransform: "uppercase",
      color: "var(--ink)",
      whiteSpace: "nowrap",
      borderBottom: "1px solid var(--ink)"
    } }, /* @__PURE__ */ React.createElement("svg", { width: "13", height: "13", viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M3 3 H13 V13 H3 Z M3 6 H13 M6 3 V13", stroke: "currentColor", strokeWidth: "1.4" })), t("Draw Your Fence", "Dibuja tu cerca")), /* @__PURE__ */ React.createElement(
      "a",
      {
        href: "estimate.html#contact",
        className: "wfs-quote-pill",
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "6px 6px 6px 15px",
          borderRadius: 999,
          background: "var(--ink)",
          color: "var(--white)",
          fontFamily: "var(--mono)",
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: "0.11em",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          transition: "background 0.2s ease, transform 0.2s ease"
        },
        "aria-label": t("Request Material Quote", "Solicitar cotizaci\xF3n de material"),
        onMouseEnter: (e) => {
          e.currentTarget.style.background = "var(--laser-blue)";
          e.currentTarget.style.transform = "translateY(-1px)";
        },
        onMouseLeave: (e) => {
          e.currentTarget.style.background = "var(--ink)";
          e.currentTarget.style.transform = "none";
        }
      },
      /* @__PURE__ */ React.createElement("span", { className: "wfs-quote-pill__dot", style: {
        width: 6,
        height: 6,
        borderRadius: "50%",
        background: "#ff7133",
        boxShadow: "0 0 0 3px rgba(255, 113, 51,0.25)"
      } }),
      /* @__PURE__ */ React.createElement("span", { className: "wfs-quote-pill__label" }, t("Request Material Quote", "Solicitar cotizaci\xF3n de material")),
      /* @__PURE__ */ React.createElement("span", { style: {
        width: 23,
        height: 23,
        borderRadius: "50%",
        background: "var(--tangerine)",
        color: "var(--ink)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      } }, /* @__PURE__ */ React.createElement("svg", { className: "wfs-quote-pill__arrow", width: "11", height: "11", viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M3 8h10m0 0L9 4m4 4l-4 4", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "square" })), /* @__PURE__ */ React.createElement("svg", { className: "wfs-quote-pill__contact", width: "12", height: "12", viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: "1.4" }, /* @__PURE__ */ React.createElement("path", { d: "M3 3h3l1.5 4-2 1c1 2 2.5 3.5 4.5 4.5l1-2 4 1.5v3c0 0.5-0.5 1-1 1C8 16 0 8 0 4c0-0.5 0.5-1 1-1z", transform: "translate(0.5,0)" })))
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "wfs-mobile-trigger",
        onClick: () => setMobileOpen(true),
        "aria-label": t("Open menu", "Abrir men\xFA"),
        style: {
          display: "none",
          width: 42,
          height: 42,
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
          border: "1px solid var(--ink)",
          cursor: "pointer"
        }
      },
      /* @__PURE__ */ React.createElement("svg", { width: "18", height: "14", viewBox: "0 0 18 14", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M0 1h18M0 7h18M0 13h18", stroke: "var(--ink)", strokeWidth: "1.6" }))
    ))),
    /* @__PURE__ */ React.createElement("div", { className: "wfs-mobile-menu", style: {
      position: "fixed",
      inset: 0,
      background: "var(--white)",
      zIndex: 100,
      display: "none",
      flexDirection: "column",
      transform: mobileOpen ? "translateY(0)" : "translateY(-100%)",
      transition: "transform 0.3s ease",
      overflowY: "auto"
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "14px 20px",
      borderBottom: "1px solid rgba(0,16,17,0.12)"
    } }, /* @__PURE__ */ React.createElement("img", { src: "https://crpozo.github.io/wfs-design-preview/assets/wfs-logo.svg", alt: "Western Fence Supply", style: { height: 32, width: "auto" } }), /* @__PURE__ */ React.createElement("button", { onClick: () => setMobileOpen(false), "aria-label": t("Close menu", "Cerrar men\xFA"), style: {
      flexShrink: 0,
      width: 44,
      height: 44,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 0,
      background: "#263166",
      border: "none",
      cursor: "pointer",
      padding: 0
    } }, /* @__PURE__ */ React.createElement("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M3 3 L15 15 M15 3 L3 15", stroke: "#ff7133", strokeWidth: "2", strokeLinecap: "square" })))), /* @__PURE__ */ React.createElement("div", { style: {
      padding: "20px",
      borderBottom: "1px solid rgba(0,16,17,0.08)",
      display: "flex",
      gap: 12
    } }, [
      { key: "HOMEOWNER", href: "homeowners.html", label: { EN: "I'm a homeowner", ES: "Soy propietario" } },
      { key: "CONTRACTOR", href: "contractors.html", label: { EN: "I'm a contractor", ES: "Soy contratista" } }
    ].map((m) => {
      return /* @__PURE__ */ React.createElement(
        "a",
        {
          key: m.key,
          href: m.href,
          onClick: () => setCurMode(m.key),
          className: "mono",
          style: {
            flex: 1,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            padding: "14px 12px",
            background: "var(--white)",
            color: "var(--ink)",
            border: "1px solid rgba(0,16,17,0.25)",
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            lineHeight: 1.3,
            textDecoration: "none"
          }
        },
        t(m.label),
        /* @__PURE__ */ React.createElement("svg", { width: "10", height: "10", viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M3 8h10m0 0L9 4m4 4l-4 4", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "square" }))
      );
    })), /* @__PURE__ */ React.createElement("nav", { style: { flex: 1, padding: "8px 0" } }, NAV.map(({ id, label, def }) => {
      if (def.kind === "link") {
        return /* @__PURE__ */ React.createElement("div", { key: id, style: { borderBottom: "1px solid rgba(0,16,17,0.08)" } }, /* @__PURE__ */ React.createElement("a", { href: def.href, target: def.external ? "_blank" : void 0, rel: def.external ? "noopener" : void 0, style: {
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 20px",
          fontFamily: "var(--sans)",
          fontSize: 19.5,
          fontWeight: 500,
          color: "var(--ink)",
          textDecoration: "none"
        } }, t(label), /* @__PURE__ */ React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M3 8h10m0 0L9 4m4 4l-4 4", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "square" }))));
      }
      const isExpanded = mobileExpanded === id;
      const fallbackHref = def.kind === "mega-fences" ? "products.html" : def.kind === "mega-gates" ? "estimate.html" : def.items && def.items[0] ? def.items[0].href : "#";
      return /* @__PURE__ */ React.createElement("div", { key: id, style: {
        borderBottom: "1px solid rgba(0,16,17,0.08)"
      } }, /* @__PURE__ */ React.createElement("button", { onClick: () => setMobileExpanded(isExpanded ? null : id), style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "18px 20px",
        background: "transparent",
        fontFamily: "var(--sans)",
        fontSize: 19.5,
        fontWeight: 500,
        color: "var(--ink)",
        textAlign: "left",
        cursor: "pointer"
      } }, t(label), def.items || def.kind === "mega-fences" || def.kind === "mega-gates" ? /* @__PURE__ */ React.createElement("span", { style: {
        width: 28,
        height: 28,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: isExpanded ? "var(--tangerine)" : "transparent",
        border: `1px solid ${isExpanded ? "var(--tangerine)" : "rgba(0,16,17,0.2)"}`,
        color: "var(--ink)"
      } }, /* @__PURE__ */ React.createElement("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M2 6h8", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "square" }), !isExpanded && /* @__PURE__ */ React.createElement("path", { d: "M6 2v8", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "square" }))) : /* @__PURE__ */ React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M3 8h10m0 0L9 4m4 4l-4 4", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "square" }))), def.items && /* @__PURE__ */ React.createElement("div", { style: {
        maxHeight: isExpanded ? 500 : 0,
        overflow: "hidden",
        transition: "max-height 0.3s ease",
        background: "#ffffff"
      } }, def.items.map((it, i) => /* @__PURE__ */ React.createElement("a", { key: i, href: it.href, target: it.href.startsWith("http") ? "_blank" : void 0, rel: it.href.startsWith("http") ? "noopener" : void 0, style: {
        display: "block",
        padding: "14px 20px 14px 36px",
        borderTop: "1px solid rgba(0,16,17,0.06)",
        fontSize: 15.5,
        color: "var(--ink)"
      } }, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 500 } }, t(it.label)), it.sub && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14.5, color: "var(--charcoal)", marginTop: 2 } }, t(it.sub))))), (def.kind === "mega-fences" || def.kind === "mega-gates") && /* @__PURE__ */ React.createElement("div", { style: {
        maxHeight: isExpanded ? 640 : 0,
        overflow: "hidden",
        transition: "max-height 0.3s ease",
        background: "#ffffff"
      } }, (def.kind === "mega-fences" ? FENCE_TILES : GATE_TILES).map((tile, i) => /* @__PURE__ */ React.createElement("a", { key: i, href: tile.href, style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        padding: "14px 20px 14px 36px",
        borderTop: "1px solid rgba(0,16,17,0.06)",
        fontSize: 15.5,
        color: "var(--ink)"
      } }, /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("span", { style: { fontWeight: 600, display: "block" } }, t(tile.name)), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 14.5, color: "var(--charcoal)" } }, t(tile.tag))), /* @__PURE__ */ React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 16 16", fill: "none", style: { flexShrink: 0, color: "var(--charcoal)" } }, /* @__PURE__ */ React.createElement("path", { d: "M3 8h10m0 0L9 4m4 4l-4 4", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "square" })))), /* @__PURE__ */ React.createElement("a", { href: fallbackHref, style: {
        display: "block",
        padding: "15px 20px 15px 36px",
        borderTop: "1px solid rgba(0,16,17,0.1)",
        fontSize: 14.5,
        color: "var(--laser-blue)",
        fontWeight: 700,
        letterSpacing: "0.04em"
      } }, def.kind === "mega-fences" ? t("View full catalog \u2192", "Ver cat\xE1logo completo \u2192") : t("Custom gate quote \u2192", "Cotizar port\xF3n a medida \u2192"))));
    })), /* @__PURE__ */ React.createElement("div", { style: {
      padding: "20px",
      borderTop: "1px solid rgba(0,16,17,0.12)",
      display: "flex",
      flexDirection: "column",
      gap: 16
    } }, /* @__PURE__ */ React.createElement("a", { href: "tel:2396895496", style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 14,
      padding: "14px 16px",
      background: "var(--ink)",
      color: "var(--white)",
      fontFamily: "var(--mono)",
      fontSize: 14.5,
      fontWeight: 700,
      letterSpacing: "0.18em",
      textTransform: "uppercase"
    } }, /* @__PURE__ */ React.createElement("span", { style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: "#ff7133",
      boxShadow: "0 0 0 3px rgba(255, 113, 51,0.25)"
    } }), t("Call (239) 689-5496", "Llamar (239) 689-5496")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 } }, /* @__PURE__ */ React.createElement("span", { className: "mono", style: {
      fontSize: 13.5,
      fontWeight: 700,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--charcoal)"
    } }, t("Language", "Idioma")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 12 } }, [
      { code: "EN", label: "English" },
      { code: "ES", label: "Espa\xF1ol" }
    ].map((l) => {
      const isActive = curLang === l.code;
      return /* @__PURE__ */ React.createElement("button", { key: l.code, onClick: () => setCurLang(l.code), className: "mono", style: {
        flex: 1,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        padding: "13px 12px",
        background: isActive ? "var(--ink)" : "var(--white)",
        color: isActive ? "var(--white)" : "var(--ink)",
        border: `1px solid ${isActive ? "var(--ink)" : "rgba(0,16,17,0.25)"}`,
        fontSize: 14.5,
        fontWeight: 700,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        cursor: "pointer"
      } }, /* @__PURE__ */ React.createElement("span", { "aria-hidden": true, style: { flexShrink: 0, fontSize: 16.5, lineHeight: 1 } }, l.code === "EN" ? "\u{1F1FA}\u{1F1F8}" : "\u{1F1F2}\u{1F1FD}"), l.code, /* @__PURE__ */ React.createElement("span", { style: { fontWeight: 500, letterSpacing: "0.03em", textTransform: "none", opacity: 0.75 } }, "\xB7 ", l.label));
    }))))),
    openMenu && (() => {
      const navItem = NAV.find((n) => n.id === openMenu);
      const def = navItem.def;
      const navIdx = NAV.findIndex((n) => n.id === openMenu);
      return /* @__PURE__ */ React.createElement("div", { onMouseEnter: () => setOpenMenu(openMenu), onMouseLeave: () => setOpenMenu(null), style: {
        position: "absolute",
        left: 0,
        right: 0,
        top: "100%",
        background: "var(--white)",
        borderTop: "1px solid rgba(0,16,17,0.06)",
        borderBottom: "1px solid var(--ink)",
        boxShadow: "0 24px 40px -16px rgba(0,16,17,0.18)",
        animation: "wfsFadeDown 0.18s ease"
      } }, /* @__PURE__ */ React.createElement("div", { className: "container", style: { paddingTop: 40, paddingBottom: 48 } }, def.kind === "mega-fences" || def.kind === "mega-gates" ? /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 4fr", gap: 56 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { className: "eyebrow", style: { color: "var(--laser-blue)" } }, "0", navIdx + 1, ", ", def.kind === "mega-fences" ? t("By material", "Por material") : t("By gate type", "Por tipo de port\xF3n")), /* @__PURE__ */ React.createElement("h3", { className: "display", style: { fontSize: 37.5, lineHeight: 0.98, margin: "14px 0 16px", maxWidth: 240 } }, def.kind === "mega-fences" ? t("Four systems,\none yard.", "Cuatro sistemas,\nuna sucursal.") : t("Welded\nin-house.", "Soldados\nen planta.")), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 15.5, lineHeight: 1.5, color: "var(--charcoal)", maxWidth: 240, margin: "0 0 20px" } }, def.kind === "mega-fences" ? t("Supplier-direct pricing for contractors, homeowners and DIY projects across SW Florida.", "Precios directos de f\xE1brica para contratistas, propietarios y proyectos DIY en el suroeste de Florida.") : t("Sized to fit your run. Quoted in 24h, delivered or shop-pickup.", "A la medida de tu proyecto. Cotizado en 24h, entrega o recoge en planta.")), /* @__PURE__ */ React.createElement(
        "a",
        {
          href: def.kind === "mega-fences" ? "products.html" : "estimate.html",
          style: { display: "inline-flex", alignItems: "center", gap: 9, fontWeight: 700, fontSize: 18, color: "var(--ink)" }
        },
        def.kind === "mega-fences" ? t("Full catalog", "Cat\xE1logo completo") : t("Custom quote", "Cotizaci\xF3n a medida"),
        " ",
        /* @__PURE__ */ React.createElement(ArrowRight, { size: 14 })
      )), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12 } }, (def.kind === "mega-fences" ? FENCE_TILES : GATE_TILES).map((tile, i) => /* @__PURE__ */ React.createElement(
        "a",
        {
          key: i,
          href: tile.href,
          style: {
            position: "relative",
            aspectRatio: "4/5",
            borderRadius: "var(--radius)",
            overflow: "hidden",
            display: "block",
            border: "1px solid rgba(0,16,17,0.06)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease"
          },
          onMouseEnter: (e) => {
            e.currentTarget.style.transform = "translateY(-3px)";
            e.currentTarget.style.boxShadow = "0 18px 40px -20px rgba(0,16,17,0.25)";
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.transform = "";
            e.currentTarget.style.boxShadow = "";
          }
        },
        /* @__PURE__ */ React.createElement(
          "img",
          {
            src: FENCE_IMG[tile.key],
            alt: t(tile.name),
            style: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }
          }
        ),
        /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,16,17,0) 35%, rgba(0,16,17,0.85) 100%)" } }),
        /* @__PURE__ */ React.createElement("div", { style: {
          position: "absolute",
          top: 12,
          left: 12,
          fontFamily: "var(--sans)",
          fontSize: 13.5,
          fontWeight: 700,
          letterSpacing: "0.14em",
          color: "var(--ink)",
          background: "var(--tangerine)",
          padding: "4px 8px",
          borderRadius: 3
        } }, "0", i + 1),
        /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", bottom: 14, left: 14, right: 14, color: "var(--white)" } }, /* @__PURE__ */ React.createElement("div", { className: "display", style: { fontSize: 18.5, lineHeight: 1.1, marginBottom: 6 } }, t(tile.name)), /* @__PURE__ */ React.createElement("div", { className: "eyebrow", style: { fontSize: 13.5, color: "var(--alice-blue)" } }, t(tile.tag)))
      )))) : /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 3fr", gap: 56 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { className: "eyebrow", style: { color: "var(--laser-blue)" } }, "0", navIdx + 1, ", ", t(navItem.label)), /* @__PURE__ */ React.createElement("h3", { className: "display", style: { fontSize: 37.5, margin: "14px 0 0", lineHeight: 0.98, maxWidth: 240 } }, openMenu === "Get a Quote" && t("Three ways\nto start.", "Tres maneras\nde empezar."), openMenu === "Company" && t("About\nthe yard.", "Sobre\nla empresa."), openMenu === "Fence Education Hub" && t("Pick the\nright fence.", "Elige la\ncerca correcta."))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 0, borderTop: "1px solid rgba(0,16,17,0.08)" } }, def.items.map((it, i) => /* @__PURE__ */ React.createElement(
        "a",
        {
          key: i,
          href: it.href,
          target: it.href.startsWith("http") ? "_blank" : void 0,
          rel: it.href.startsWith("http") ? "noopener" : void 0,
          style: {
            display: "block",
            padding: "20px 22px",
            borderBottom: "1px solid rgba(0,16,17,0.08)",
            borderRight: i % 2 === 0 ? "1px solid rgba(0,16,17,0.08)" : "none",
            transition: "background 0.15s"
          },
          onMouseEnter: (e) => {
            e.currentTarget.style.background = "#ffffff";
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.background = "transparent";
          }
        },
        /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 6 } }, /* @__PURE__ */ React.createElement("span", { className: "eyebrow", style: { color: "var(--tangerine)", fontSize: 13.5 } }, "0", i + 1), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 18.5, fontWeight: 500, color: "var(--ink)" } }, t(it.label))),
        /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14.5, color: "var(--charcoal)", paddingLeft: 28, lineHeight: 1.45 } }, t(it.sub))
      ))))));
    })()
  ));
};
Object.assign(window, { SiteHeader });
