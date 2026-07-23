const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ React.createElement("header", { style: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
    backdropFilter: scrolled ? "blur(10px)" : "none",
    borderBottom: scrolled ? "1px solid rgba(0,16,17,0.08)" : "1px solid transparent",
    transition: "all 0.2s ease"
  } }, /* @__PURE__ */ React.createElement("div", { className: "container", style: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 18,
    paddingBottom: 18,
    gap: 24
  } }, /* @__PURE__ */ React.createElement(Logo, null), /* @__PURE__ */ React.createElement("nav", { style: { display: "flex", gap: 28, alignItems: "center" } }, [["Products", "products.html"], ["Solutions", "solutions.html"], ["Projects", "projects.html"], ["Resources", "resources.html"], ["About", "about.html"]].map(([l, href]) => /* @__PURE__ */ React.createElement("a", { key: l, href, style: {
    fontSize: 15.5,
    letterSpacing: "0.01em",
    fontWeight: 500,
    color: "var(--ink)"
  } }, l))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10, alignItems: "center" } }, /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost", style: { padding: "10px 16px", fontSize: 14.5 } }, /* @__PURE__ */ React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ React.createElement("circle", { cx: "7", cy: "7", r: "5", stroke: "currentColor", strokeWidth: "1.5" }), /* @__PURE__ */ React.createElement("path", { d: "M11 11 L14 14", stroke: "currentColor", strokeWidth: "1.5" })), "Search"), /* @__PURE__ */ React.createElement("button", { className: "btn btn-dark", style: { padding: "12px 18px", fontSize: 14.5 } }, "Request Quote ", /* @__PURE__ */ React.createElement(ArrowRight, null)))));
};
const Hero = () => {
  const t = useT();
  const [mode, setMode] = useMode();
  const videoRef = React.useRef(null);
  React.useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const tryPlay = () => {
      const p = v.play();
      if (p) p.catch(() => {
      });
    };
    tryPlay();
    v.addEventListener("loadeddata", tryPlay);
    v.addEventListener("pause", tryPlay);
    return () => {
      v.removeEventListener("loadeddata", tryPlay);
      v.removeEventListener("pause", tryPlay);
    };
  }, []);
  return /* @__PURE__ */ React.createElement("section", { className: "wfs-hero", style: {
    position: "relative",
    color: "var(--white)",
    overflow: "hidden",
    minHeight: "78vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end"
  } }, /* @__PURE__ */ React.createElement(
    "video",
    {
      ref: videoRef,
      src: "https://crpozo.github.io/wfs-design-preview/assets/second-video.mp4?v=279",
      poster: "https://crpozo.github.io/wfs-design-preview/assets/second-video-poster.jpg?v=245",
      autoPlay: true,
      muted: true,
      loop: true,
      playsInline: true,
      preload: "auto",
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
        zIndex: 0
      }
    }
  ), /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    inset: 0,
    zIndex: 1,
    background: "linear-gradient(95deg, rgba(38, 49, 103,0.82) 0%, rgba(38, 49, 103,0.66) 38%, rgba(38, 49, 103,0.38) 68%, rgba(38, 49, 103,0.22) 100%)"
  } }), /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "50%",
    zIndex: 1,
    background: "linear-gradient(180deg, rgba(38, 49, 103,0) 0%, rgba(38, 49, 103,0.35) 60%, rgba(38, 49, 103,0.7) 100%)"
  } }), /* @__PURE__ */ React.createElement("div", { "aria-hidden": true, className: "wfs-hero-fade", style: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "clamp(30px, 3.6vh, 52px)",
    zIndex: 1,
    pointerEvents: "none"
  } }), /* @__PURE__ */ React.createElement("div", { style: {
    position: "relative",
    zIndex: 2,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: 72,
    paddingBottom: 40
  } }, /* @__PURE__ */ React.createElement("div", { className: "container", style: { width: "100%" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 720, width: "100%" } }, /* @__PURE__ */ React.createElement("div", { className: "mono", style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 14,
    marginBottom: 24,
    fontSize: "clamp(12px, 1.1vw, 13px)",
    fontWeight: 700,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.85)"
  } }, /* @__PURE__ */ React.createElement("span", { "aria-hidden": true, style: { width: 34, height: 3, background: "var(--tangerine)", borderRadius: 2 } }), t("Factory direct fence supply \xB7 Fort Myers + Port Charlotte, FL", "Suministro de cercas directo de f\xE1brica \xB7 Fort Myers + Port Charlotte, FL")), /* @__PURE__ */ React.createElement("h1", { style: {
    margin: "0 0 22px",
    fontFamily: "var(--display)",
    fontVariationSettings: "'wdth' 100",
    fontWeight: 800,
    fontSize: "clamp(34px, 4.2vw, 56px)",
    lineHeight: 1.02,
    letterSpacing: "-0.02em",
    textTransform: "uppercase",
    color: "var(--white)",
    textShadow: "0 2px 28px rgba(0,0,0,0.28)"
  } }, t("The Best Place to Buy Fence in", "El mejor lugar para comprar cercas en el"), " ", /* @__PURE__ */ React.createElement("span", { style: { color: "var(--blue-ice)" } }, t("Southwest Florida", "suroeste de Florida"))), /* @__PURE__ */ React.createElement("p", { style: {
    fontSize: 17.5,
    lineHeight: 1.55,
    maxWidth: 480,
    margin: "0 0 34px",
    color: "rgba(255,255,255,0.85)"
  } }, t(
    "We're a one stop fence supply shop selling superior fences and gates at wholesale prices.",
    "Somos una tienda integral de suministro de cercas que vende cercas y portones superiores a precios mayoristas."
  )), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" } }, /* @__PURE__ */ React.createElement(
    "a",
    {
      href: "homeowners.html",
      onClick: () => setMode("HOMEOWNER"),
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
    /* @__PURE__ */ React.createElement("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M3 11 L12 4 L21 11" }), /* @__PURE__ */ React.createElement("path", { d: "M5 10 V20 H19 V10" })),
    t("I'm a Homeowner", "Soy propietario"),
    /* @__PURE__ */ React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M3 8h10m0 0L9 4m4 4l-4 4", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" }))
  ), /* @__PURE__ */ React.createElement(
    "a",
    {
      href: "contractors.html",
      onClick: () => setMode("CONTRACTOR"),
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
    /* @__PURE__ */ React.createElement("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M5 14 Q5 7 12 7 Q19 7 19 14" }), /* @__PURE__ */ React.createElement("path", { d: "M3 14 H21 V17 H3 Z" })),
    t("I'm a Contractor", "Soy contratista"),
    /* @__PURE__ */ React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M3 8h10m0 0L9 4m4 4l-4 4", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" }))
  ))))));
};
Object.assign(window, { Nav, Hero });
