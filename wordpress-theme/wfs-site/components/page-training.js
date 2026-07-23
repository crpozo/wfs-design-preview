const TRAINING_LOGIN_URL = "https://westernfencesupply.com/training/";
const TRAINING_MP4 = "https://crpozo.github.io/wfs-design-preview/assets/training/wfs-training-tutorial.mp4";
const TRAINING_DRIVE_EMBED = "https://drive.google.com/file/d/1JgoXBp87xjLGzI-_v1GMf9HHah75Vhie/preview";
const TrainingHeader = () => {
  const t = useT();
  const [curLang, setCurLang] = useLang();
  return /* @__PURE__ */ React.createElement("header", { style: {
    background: "var(--white)",
    borderBottom: "1px solid rgba(0,16,17,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 50
  } }, /* @__PURE__ */ React.createElement("div", { className: "container", style: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 14,
    paddingBottom: 14,
    gap: 20
  } }, /* @__PURE__ */ React.createElement("a", { href: "Homepage.html", style: { display: "inline-flex", alignItems: "center" } }, /* @__PURE__ */ React.createElement("img", { src: "https://crpozo.github.io/wfs-design-preview/assets/wfs-logo.svg", alt: "Western Fence Supply", style: { height: 36, width: "auto", display: "block" } })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 20 } }, /* @__PURE__ */ React.createElement("span", { className: "mono", style: {
    fontSize: 13.5,
    fontWeight: 700,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "var(--charcoal)"
  } }, t("Training Companion", "Training Companion")), /* @__PURE__ */ React.createElement("div", { className: "mono", style: { display: "inline-flex", alignItems: "center", gap: 14 } }, ["EN", "ES"].map((l) => {
    const isActive = curLang === l;
    return /* @__PURE__ */ React.createElement("button", { key: l, onClick: () => setCurLang(l), style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: 0,
      background: "transparent",
      cursor: "pointer",
      fontFamily: "inherit",
      fontSize: 13.5,
      fontWeight: 700,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: isActive ? "var(--ink)" : "rgba(0,16,17,0.35)"
    } }, /* @__PURE__ */ React.createElement("span", { "aria-hidden": true, style: {
      fontSize: 15.5,
      lineHeight: 1,
      filter: isActive ? "none" : "grayscale(0.55)",
      opacity: isActive ? 1 : 0.75
    } }, l === "EN" ? "\u{1F1FA}\u{1F1F8}" : "\u{1F1F2}\u{1F1FD}"), l);
  })))));
};
const TrainingHero = () => {
  const t = useT();
  return /* @__PURE__ */ React.createElement("section", { style: { background: "var(--ink)", color: "var(--white)", padding: "clamp(44px, 7vh, 72px) 0" } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "mono", style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 18,
    fontSize: 13.5,
    fontWeight: 700,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.75)"
  } }, /* @__PURE__ */ React.createElement("span", { "aria-hidden": true, style: { width: 30, height: 3, background: "var(--tangerine)", borderRadius: 2 } }), t("WFS \xB7 Internal training", "WFS \xB7 Capacitaci\xF3n interna")), /* @__PURE__ */ React.createElement("h1", { className: "display", style: {
    margin: 0,
    fontSize: "clamp(30px, 3.6vw, 50px)",
    lineHeight: 1.02,
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: "-0.01em"
  } }, t("Before you", "Antes de"), " ", /* @__PURE__ */ React.createElement("span", { style: { color: "var(--tangerine)" } }, t("begin.", "empezar."))), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 16,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: 24,
    flexWrap: "wrap"
  } }, /* @__PURE__ */ React.createElement("p", { style: { margin: 0, maxWidth: 420, fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,0.8)" } }, t("Two steps between you and your first module: watch the short platform tour, then log in.", "Dos pasos entre t\xFA y tu primer m\xF3dulo: mira el recorrido corto de la plataforma y luego inicia sesi\xF3n.")), /* @__PURE__ */ React.createElement("a", { href: TRAINING_LOGIN_URL, target: "_blank", rel: "noopener", className: "mono", style: {
    fontSize: 13.5,
    fontWeight: 700,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--tangerine)",
    borderBottom: "1px solid rgba(255,113,51,0.5)",
    paddingBottom: 3,
    whiteSpace: "nowrap"
  } }, t("Already trained? Skip to login \u2192", "\xBFYa te capacitaste? Ir al login \u2192")))));
};
const TrainingSteps = () => {
  const t = useT();
  const [mode, setMode] = React.useState("native");
  const Circle = ({ n, filled }) => /* @__PURE__ */ React.createElement("span", { className: "mono", "aria-hidden": true, style: {
    position: "relative",
    zIndex: 1,
    flexShrink: 0,
    width: 38,
    height: 38,
    borderRadius: "50%",
    background: filled ? "var(--tangerine)" : "var(--white)",
    border: filled ? "none" : "1.5px solid var(--ink)",
    color: filled ? "var(--white)" : "var(--ink)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 15.5,
    fontWeight: 700
  } }, n);
  const kickerStyle = {
    fontSize: 13.5,
    fontWeight: 700,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "var(--tangerine)",
    marginBottom: 8
  };
  const titleStyle = {
    margin: "0 0 10px",
    fontSize: "clamp(19px, 1.8vw, 24px)",
    lineHeight: 1.1,
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: "0.01em",
    color: "var(--ink)"
  };
  const bodyStyle = { margin: 0, maxWidth: 560, fontSize: 16, lineHeight: 1.65, color: "var(--charcoal)" };
  return /* @__PURE__ */ React.createElement("section", { style: { background: "var(--white)", padding: "clamp(56px, 8vh, 90px) 0 clamp(64px, 9vh, 110px)" } }, /* @__PURE__ */ React.createElement("div", { className: "container", style: { maxWidth: 900 } }, /* @__PURE__ */ React.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ React.createElement("div", { "aria-hidden": true, style: { position: "absolute", left: 19, top: 10, bottom: 10, width: 1, background: "rgba(38,49,102,0.2)" } }), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "64px 1fr", alignItems: "start", paddingBottom: "clamp(40px, 6vh, 64px)" } }, /* @__PURE__ */ React.createElement(Circle, { n: "1", filled: true }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "mono", style: kickerStyle }, t("Required \xB7 3:14", "Obligatorio \xB7 3:14")), /* @__PURE__ */ React.createElement("h2", { className: "display", style: titleStyle }, t("Watch the platform tour", "Mira el recorrido de la plataforma")), /* @__PURE__ */ React.createElement("p", { style: bodyStyle }, t("The modules, how to navigate, and how your progress is tracked, everything you need to get started with confidence.", "Los m\xF3dulos, c\xF3mo navegar y c\xF3mo se registra tu progreso, todo lo que necesitas para empezar con confianza.")), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 24, maxWidth: 680 } }, /* @__PURE__ */ React.createElement("div", { style: {
    position: "relative",
    aspectRatio: "16 / 9",
    background: "#1a2350",
    border: "1px solid rgba(0,16,17,0.15)",
    overflow: "hidden"
  } }, mode === "native" ? /* @__PURE__ */ React.createElement(
    "video",
    {
      controls: true,
      playsInline: true,
      preload: "metadata",
      poster: "https://crpozo.github.io/wfs-design-preview/assets/training/poster.svg",
      onError: () => setMode("drive"),
      style: { position: "absolute", inset: 0, width: "100%", height: "100%", background: "#1a2350" }
    },
    /* @__PURE__ */ React.createElement("source", { src: TRAINING_MP4, type: "video/mp4", onError: () => setMode("drive") })
  ) : /* @__PURE__ */ React.createElement(
    "iframe",
    {
      title: "WFS Training Companion tutorial",
      src: TRAINING_DRIVE_EMBED,
      allow: "fullscreen",
      allowFullScreen: true,
      loading: "lazy",
      style: { position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }
    }
  ), /* @__PURE__ */ React.createElement("span", { className: "mono", "aria-hidden": true, style: {
    position: "absolute",
    top: 12,
    right: 12,
    background: "var(--ink)",
    color: "var(--white)",
    padding: "4px 9px",
    fontSize: 13.5,
    fontWeight: 700,
    letterSpacing: "0.1em",
    pointerEvents: "none"
  } }, "3:14")), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 12,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    gap: 16,
    flexWrap: "wrap"
  } }, /* @__PURE__ */ React.createElement("span", { className: "mono", style: {
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "var(--charcoal)"
  } }, t("Welcome to the Training Companion", "Bienvenido al Training Companion")), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 14.5, color: "var(--charcoal)" } }, t("Not loading?", "\xBFNo carga?"), " ", /* @__PURE__ */ React.createElement("a", { href: TRAINING_LOGIN_URL, target: "_blank", rel: "noopener", style: { color: "var(--tangerine)" } }, t("Continue to login", "Contin\xFAa al login"))))))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "64px 1fr", alignItems: "start", paddingBottom: "clamp(40px, 6vh, 64px)" } }, /* @__PURE__ */ React.createElement(Circle, { n: "2" }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "mono", style: kickerStyle }, t("In the tour", "En el recorrido")), /* @__PURE__ */ React.createElement("h2", { className: "display", style: titleStyle }, t("Know your way around", "Ub\xEDcate en la plataforma")), /* @__PURE__ */ React.createElement("p", { style: bodyStyle }, t("You'll see how to find your assigned modules, work through lessons at your pace, mark them complete, and check how far you are from finishing.", "Ver\xE1s c\xF3mo encontrar tus m\xF3dulos asignados, avanzar las lecciones a tu ritmo, marcarlas como completadas y revisar cu\xE1nto te falta para terminar.")))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "64px 1fr", alignItems: "start" } }, /* @__PURE__ */ React.createElement(Circle, { n: "3" }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "mono", style: kickerStyle }, t("Then", "Despu\xE9s")), /* @__PURE__ */ React.createElement("h2", { className: "display", style: titleStyle }, t("Log in and start module one", "Inicia sesi\xF3n y empieza el m\xF3dulo uno")), /* @__PURE__ */ React.createElement("p", { style: bodyStyle }, t("Your progress is saved automatically, leave any time and pick up exactly where you left off.", "Tu progreso se guarda autom\xE1ticamente, sal cuando quieras y retoma exactamente donde te quedaste.")), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 22, display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement(
    "a",
    {
      href: TRAINING_LOGIN_URL,
      target: "_blank",
      rel: "noopener",
      onClick: () => {
        if (window.gtag) window.gtag("event", "training_login_click");
      },
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        padding: "15px 26px",
        background: "var(--tangerine)",
        color: "var(--white)",
        fontFamily: "var(--sans)",
        fontSize: 14.5,
        fontWeight: 700,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        boxShadow: "0 10px 26px rgba(255, 113, 51,0.35)",
        transition: "transform 0.18s"
      },
      onMouseEnter: (e) => {
        e.currentTarget.style.transform = "translateY(-1px)";
      },
      onMouseLeave: (e) => {
        e.currentTarget.style.transform = "";
      }
    },
    t("Login to Training Companion", "Iniciar sesi\xF3n en Training Companion"),
    /* @__PURE__ */ React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M3 8h10m0 0L9 4m4 4l-4 4", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" }))
  ), /* @__PURE__ */ React.createElement("span", { className: "mono", style: {
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "var(--charcoal)"
  } }, t("Uses your WFS staff credentials", "Usa tus credenciales de personal WFS"))))))));
};
const TrainingFooter = () => {
  const t = useT();
  return /* @__PURE__ */ React.createElement("footer", { style: { background: "var(--ink)", borderTop: "1px solid rgba(255,255,255,0.12)", padding: "22px 0" } }, /* @__PURE__ */ React.createElement("div", { className: "container", style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
    flexWrap: "wrap"
  } }, /* @__PURE__ */ React.createElement("span", { className: "mono", style: { fontSize: 13.5, letterSpacing: "0.14em", color: "rgba(255,255,255,0.55)", textTransform: "uppercase" } }, "\xA9 Western Fence Supply \xB7 ", t("Internal training resource", "Recurso interno de capacitaci\xF3n")), /* @__PURE__ */ React.createElement("a", { href: "Homepage.html", className: "mono", style: { fontSize: 13.5, letterSpacing: "0.14em", color: "rgba(255,255,255,0.7)", textTransform: "uppercase" } }, "westernfencesupply.com")));
};
Object.assign(window, { TrainingHeader, TrainingHero, TrainingSteps, TrainingFooter });
