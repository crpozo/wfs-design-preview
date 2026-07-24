const FEATURED = [
  { sku: "CL-115G-72", name: { EN: "11-1/2 Gauge Galvanized Mesh", ES: "Malla galvanizada 11-1/2 Ga." }, cat: { EN: "Chain Link", ES: "Malla cicl\xF3nica" }, height: "6 ft", imgUrl: "https://crpozo.github.io/wfs-design-preview/assets/projects/cl-swing-gate-galv-4.jpg" },
  { sku: "AL-WLD-S", name: { EN: "Aluminum Fence Section", ES: "Secci\xF3n de cerca de aluminio" }, cat: { EN: "Aluminum", ES: "Aluminio" }, height: "6 ft", imgUrl: "https://crpozo.github.io/wfs-design-preview/assets/projects/alum-2-rail-smooth-bottom-white.jpg" },
  { sku: "PV-PRV-W", name: { EN: "Catalyst Privacy Vinyl, White", ES: "Vinilo de privacidad Catalyst, blanco" }, cat: { EN: "Vinyl", ES: "Vinilo" }, height: "6 ft", imgUrl: "https://crpozo.github.io/wfs-design-preview/assets/projects/pvc-privacy-gate-white.jpg" },
  { sku: "MT-PRV-72", name: { EN: "Metal Board Privacy", ES: "Privacidad de tablero de metal" }, cat: { EN: "Metal", ES: "Metal" }, height: "6 ft", imgUrl: "https://crpozo.github.io/wfs-design-preview/assets/projects/met-fence-horizontal-black.jpg" },
  { sku: "GT-DBL-12", name: { EN: "12 ft Double Gate", ES: "Port\xF3n doble de 12 ft" }, cat: { EN: "Gates", ES: "Portones" }, height: "12 ft", imgUrl: "https://crpozo.github.io/wfs-design-preview/assets/projects/pvc-gate-sand.jpg" },
  { sku: "CL-VC-BK", name: { EN: "Vinyl-Coated Black Mesh", ES: "Malla negra revestida de vinilo" }, cat: { EN: "Chain Link", ES: "Malla cicl\xF3nica" }, height: "6 ft", imgUrl: "https://crpozo.github.io/wfs-design-preview/assets/projects/cl-fence-black.jpg" }
];
const INSTALLERS = [
  { name: "J2W Custom Fence", src: "https://crpozo.github.io/wfs-design-preview/assets/installers/j2w-custom-fence.png" },
  { name: "True Fence", src: "https://crpozo.github.io/wfs-design-preview/assets/installers/true-fence.png" },
  { name: "Good Hands Fencing", src: "https://crpozo.github.io/wfs-design-preview/assets/installers/good-hands-fencing.png" },
  { name: "All American Fence & Gate", src: "https://crpozo.github.io/wfs-design-preview/assets/installers/all-american-fence-and-gate.png" },
  { name: "SWFL Fence", src: "https://crpozo.github.io/wfs-design-preview/assets/installers/swfl-fence.png" },
  { name: "Supreme Fence of SWFL", src: "https://crpozo.github.io/wfs-design-preview/assets/installers/supreme-fence.png" },
  { name: "Southern Hoss Fences", src: "https://crpozo.github.io/wfs-design-preview/assets/installers/southern-hoss-fences.png" },
  { name: "M.R. Fence", src: "https://crpozo.github.io/wfs-design-preview/assets/installers/mr-fence.png" },
  { name: "Level Up Fencing", src: "https://crpozo.github.io/wfs-design-preview/assets/installers/level-up-fencing.png" },
  { name: "Baker Fence & Gate", src: "https://crpozo.github.io/wfs-design-preview/assets/installers/baker-fence-and-gate.png" },
  { name: "Grace Fence", src: "https://crpozo.github.io/wfs-design-preview/assets/installers/grace-fence.png" },
  { name: "Fence Ace", src: "https://crpozo.github.io/wfs-design-preview/assets/installers/fence-ace.png" },
  { name: "Zavala Fences", src: "https://crpozo.github.io/wfs-design-preview/assets/installers/zavala-fences.png" },
  { name: "Fence Direct", src: "https://crpozo.github.io/wfs-design-preview/assets/installers/fence-direct.png" },
  { name: "All American Fencing", src: "https://crpozo.github.io/wfs-design-preview/assets/installers/all-american-fencing.png" }
];
const InstallerMarquee = () => {
  const t = useT();
  const base = [...INSTALLERS, ...INSTALLERS];
  const row = [...base, ...base];
  return /* @__PURE__ */ React.createElement("section", { style: { background: "var(--white)", padding: "64px 0", borderTop: "1px solid rgba(0,16,17,0.06)", borderBottom: "1px solid rgba(0,16,17,0.06)", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("p", { className: "mono", style: {
    margin: "0 0 32px",
    fontSize: 14,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "rgba(0,16,17,0.4)",
    fontWeight: 600
  } }, t("The #1 Choice of Florida\u2019s Top Fence Installers", "La opci\xF3n #1 de los mejores instaladores de cercas de Florida"))), /* @__PURE__ */ React.createElement("div", { className: "wfs-marquee", "aria-hidden": true }, /* @__PURE__ */ React.createElement("div", { className: "wfs-marquee__track" }, row.map((l, i) => /* @__PURE__ */ React.createElement("span", { key: i, className: "wfs-logo-cell" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: l.src,
      alt: l.name,
      className: "wfs-logo-img",
      onError: (e) => {
        e.currentTarget.style.display = "none";
        const fb = e.currentTarget.nextSibling;
        if (fb) fb.style.display = "inline";
      }
    }
  ), /* @__PURE__ */ React.createElement("span", { className: "display wfs-logo-fallback" }, l.name))))));
};
const MARQUEE_PRODUCTS = [
  { src: "https://crpozo.github.io/wfs-design-preview/assets/products/chain-link-post.jpg", name: { EN: "Chain Link Post", ES: "Poste de malla" }, spec: { EN: "Galvanized steel", ES: "Acero galvanizado" } },
  { src: "https://crpozo.github.io/wfs-design-preview/assets/products/gothic-post-cap.jpg", name: { EN: "Gothic Post Cap", ES: "Tapa de poste g\xF3tica" }, spec: { EN: "White \xB7 PVC", ES: "Blanca \xB7 PVC" } },
  { src: "https://crpozo.github.io/wfs-design-preview/assets/products/chain-link-fabric.jpg", name: { EN: "Chain Link Fabric", ES: "Malla cicl\xF3nica" }, spec: { EN: "11-1/2 Ga. \xB7 Galvanized", ES: "11-1/2 Ga. \xB7 Galvanizada" } },
  { src: "https://crpozo.github.io/wfs-design-preview/assets/products/self-closing-hinge.jpg", name: { EN: "Self-Closing Hinge", ES: "Bisagra con resorte" }, spec: { EN: "Black \xB7 Spring-loaded", ES: "Negra \xB7 Autocierre" } },
  { src: "https://crpozo.github.io/wfs-design-preview/assets/products/pvc-double-gate.jpg", name: { EN: "PVC Double Gate", ES: "Port\xF3n doble de PVC" }, spec: { EN: "White \xB7 Privacy", ES: "Blanco \xB7 Privacidad" } },
  { src: "https://crpozo.github.io/wfs-design-preview/assets/products/barbed-wire.jpg", name: { EN: "Barbed Wire", ES: "Alambre de p\xFAas" }, spec: { EN: "Galvanized", ES: "Galvanizado" } },
  { src: "https://crpozo.github.io/wfs-design-preview/assets/products/aluminum-2-rail.jpg", name: { EN: "Aluminum 2-Rail", ES: "Aluminio 2 rieles" }, spec: { EN: "Black \xB7 Smooth bottom", ES: "Negro \xB7 Base lisa" } },
  { src: "https://crpozo.github.io/wfs-design-preview/assets/products/gravity-latch.jpg", name: { EN: "Gravity Latch", ES: "Pestillo de gravedad" }, spec: { EN: "Black", ES: "Negro" } },
  { src: "https://crpozo.github.io/wfs-design-preview/assets/products/metal-privacy-white.jpg", name: { EN: "Metal Privacy Panel", ES: "Panel met\xE1lico privacidad" }, spec: { EN: "White \xB7 Vertical", ES: "Blanco \xB7 Vertical" } },
  { src: "https://crpozo.github.io/wfs-design-preview/assets/products/drop-rod.jpg", name: { EN: "Drop Rod", ES: "Pasador vertical" }, spec: { EN: "Black \xB7 Powder-coated", ES: "Negro \xB7 Pintura en polvo" } },
  { src: "https://crpozo.github.io/wfs-design-preview/assets/products/pvc-semi-privacy.jpg", name: { EN: "Semi-Privacy PVC", ES: "PVC semiprivacidad" }, spec: { EN: "Tan \xB7 Horizontal", ES: "Arena \xB7 Horizontal" } },
  { src: "https://crpozo.github.io/wfs-design-preview/assets/products/gate-post-hinge.jpg", name: { EN: "Gate Post Hinge", ES: "Bisagra de poste" }, spec: { EN: "Black \xB7 Heavy duty", ES: "Negra \xB7 Uso rudo" } },
  { src: "https://crpozo.github.io/wfs-design-preview/assets/products/aluminum-3-rail.jpg", name: { EN: "Aluminum 3-Rail", ES: "Aluminio 3 rieles" }, spec: { EN: "Black \xB7 Rake bottom", ES: "Negro \xB7 Base inclinada" } },
  { src: "https://crpozo.github.io/wfs-design-preview/assets/products/pvc-u-channel.jpg", name: { EN: "PVC U-Channel", ES: "Canal U de PVC" }, spec: { EN: "White", ES: "Blanco" } },
  { src: "https://crpozo.github.io/wfs-design-preview/assets/products/chain-link-gate.jpg", name: { EN: "Chain Link Gate", ES: "Port\xF3n de malla" }, spec: { EN: "Black \xB7 Single swing", ES: "Negro \xB7 Una hoja" } },
  { src: "https://crpozo.github.io/wfs-design-preview/assets/products/post-mount-latch.jpg", name: { EN: "Post-Mount Latch", ES: "Pestillo de poste" }, spec: { EN: "Black \xB7 Self-locking", ES: "Negro \xB7 Autobloqueante" } },
  { src: "https://crpozo.github.io/wfs-design-preview/assets/products/metal-horizontal-black.jpg", name: { EN: "Horizontal Metal Panel", ES: "Panel met\xE1lico horizontal" }, spec: { EN: "Black \xB7 Louvered", ES: "Negro \xB7 Persiana" } },
  { src: "https://crpozo.github.io/wfs-design-preview/assets/products/pvc-picket-panel.jpg", name: { EN: "PVC Picket Panel", ES: "Panel de estacas PVC" }, spec: { EN: "White \xB7 Spaced picket", ES: "Blanco \xB7 Estaca espaciada" } },
  { src: "https://crpozo.github.io/wfs-design-preview/assets/products/metal-post.jpg", name: { EN: "Metal Post", ES: "Poste met\xE1lico" }, spec: { EN: "Black \xB7 Square", ES: "Negro \xB7 Cuadrado" } },
  { src: "https://crpozo.github.io/wfs-design-preview/assets/products/privacy-windscreen.jpg", name: { EN: "Privacy Windscreen", ES: "Malla sombra" }, spec: { EN: "Black \xB7 Grommeted", ES: "Negra \xB7 Con ojales" } },
  { src: "https://crpozo.github.io/wfs-design-preview/assets/products/aluminum-puppy-picket.jpg", name: { EN: "Puppy Picket Section", ES: "Secci\xF3n puppy picket" }, spec: { EN: "Black \xB7 Aluminum", ES: "Negra \xB7 Aluminio" } },
  { src: "https://crpozo.github.io/wfs-design-preview/assets/products/aluminum-section.jpg", name: { EN: "Aluminum Section", ES: "Secci\xF3n de aluminio" }, spec: { EN: "Black \xB7 Flat top", ES: "Negra \xB7 Remate plano" } }
];
const ProductMarquee = () => {
  const t = useT();
  const scrollerRef = React.useRef(null);
  const motorRef = React.useRef({ raf: 0, last: 0, pos: null, tween: null });
  React.useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const m = motorRef.current;
    const SPEED = 38;
    const frame = (now) => {
      const dt = m.last ? Math.min(0.1, (now - m.last) / 1e3) : 0;
      m.last = now;
      const half = el.scrollWidth / 2;
      let pos = m.pos == null ? el.scrollLeft : m.pos;
      if (m.tween) {
        const k = Math.min(1, Math.max(0, (now - m.tween.t0) / m.tween.dur));
        pos = m.tween.from + (m.tween.to - m.tween.from) * (1 - Math.pow(1 - k, 3));
        if (k >= 1) m.tween = null;
      } else {
        pos += SPEED * dt;
      }
      if (half > 0) {
        while (pos >= half) {
          pos -= half;
          if (m.tween) {
            m.tween.from -= half;
            m.tween.to -= half;
          }
        }
        while (pos < 0) {
          pos += half;
          if (m.tween) {
            m.tween.from += half;
            m.tween.to += half;
          }
        }
      }
      m.pos = pos;
      el.scrollLeft = pos;
      m.raf = requestAnimationFrame(frame);
    };
    m.raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(m.raf);
  }, []);
  const nudge = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const m = motorRef.current;
    const step = el.firstChild ? (el.firstChild.offsetWidth + 18) * 3 : 900;
    const from = m.pos == null ? el.scrollLeft : m.pos;
    const base = m.tween ? m.tween.to : from;
    m.tween = { from, to: base + dir * step, t0: performance.now(), dur: 550 };
  };
  const ArrowBtn = ({ dir }) => /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => nudge(dir === "prev" ? -1 : 1),
      "aria-label": dir === "prev" ? t("Previous products", "Productos anteriores") : t("More products", "M\xE1s productos"),
      style: {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        [dir === "prev" ? "left" : "right"]: "clamp(10px, 1.6vw, 28px)",
        zIndex: 2,
        width: 46,
        height: 46,
        borderRadius: "50%",
        border: "1px solid var(--ink)",
        background: "var(--white)",
        color: "var(--ink)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        boxShadow: "0 10px 24px -14px rgba(0,16,17,0.4)"
      }
    },
    /* @__PURE__ */ React.createElement("svg", { width: "15", height: "15", viewBox: "0 0 16 16", fill: "none", style: { transform: dir === "prev" ? "rotate(180deg)" : "none" } }, /* @__PURE__ */ React.createElement("path", { d: "M3 8h10m0 0L9 4m4 4l-4 4", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "square" }))
  );
  const row = [...MARQUEE_PRODUCTS, ...MARQUEE_PRODUCTS];
  return /* @__PURE__ */ React.createElement("section", { id: "products-marquee", style: { background: "var(--white)", padding: "64px 0 116px", borderTop: "1px solid rgba(0,16,17,0.06)", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { className: "container", style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    gap: 24,
    flexWrap: "wrap",
    marginBottom: 36
  } }, /* @__PURE__ */ React.createElement("span", { className: "eyebrow", style: { color: "var(--ink)", display: "inline-flex", alignItems: "center", gap: 10 } }, /* @__PURE__ */ React.createElement("span", { style: { width: 8, height: 8, background: "var(--tangerine)" } }), t("In the yard today", "En stock hoy")), /* @__PURE__ */ React.createElement("a", { href: "products.html", className: "mono", style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    fontSize: 13.5,
    fontWeight: 700,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "var(--ink)",
    borderBottom: "1px solid var(--ink)",
    paddingBottom: 3
  } }, t("Full catalog", "Cat\xE1logo completo"), /* @__PURE__ */ React.createElement("svg", { width: "11", height: "11", viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M3 8h10m0 0L9 4m4 4l-4 4", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "square" })))), /* @__PURE__ */ React.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ React.createElement("div", { ref: scrollerRef, className: "wfs-pcar", "aria-hidden": true, style: {
    display: "flex",
    gap: 18,
    overflowX: "hidden",
    padding: "4px max(var(--pad), calc((100% - var(--max)) / 2 + var(--pad)))"
  } }, row.map((p, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
    flexShrink: 0,
    width: "clamp(215px, 24vw, 270px)",
    padding: "18px 18px 20px",
    background: "var(--white)"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    height: "clamp(140px, 15vw, 175px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  } }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: p.src,
      alt: t(p.name),
      loading: "lazy",
      style: { maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }
    }
  )), /* @__PURE__ */ React.createElement("h3", { className: "display", style: {
    margin: "14px 0 0",
    fontSize: 17.5,
    lineHeight: 1.2,
    letterSpacing: "-0.01em",
    color: "var(--ink)",
    textAlign: "center"
  } }, t(p.name)), /* @__PURE__ */ React.createElement("p", { className: "mono", style: {
    margin: "5px 0 0",
    fontSize: 13.5,
    lineHeight: 1.4,
    color: "rgba(0,16,17,0.55)",
    textAlign: "center"
  } }, t(p.spec))))), /* @__PURE__ */ React.createElement(ArrowBtn, { dir: "prev" }), /* @__PURE__ */ React.createElement(ArrowBtn, { dir: "next" })));
};
const MAT_IMG = { "Chain Link": "chainlink", "Aluminum": "aluminum", "Vinyl": "vinyl", "Metal": "metal", "EC Fence": "ecfence" };
const MAT_LABELS = {
  "All": { EN: "All", ES: "Todos" },
  "Chain Link": { EN: "Chain Link", ES: "Malla cicl\xF3nica" },
  "Aluminum": { EN: "Aluminum", ES: "Aluminio" },
  "Vinyl": { EN: "Vinyl", ES: "Vinilo" },
  "Metal": { EN: "Metal", ES: "Metal" },
  "EC Fence": { EN: "EC Fence", ES: "EC Fence" }
};
const FeaturedGrid = () => {
  const t = useT();
  const PER = 3;
  const pages = Math.ceil(FEATURED.length / PER);
  const [page, setPage] = React.useState(0);
  const start = page * PER;
  const ArrowBtn = ({ dir, disabled, onClick }) => /* @__PURE__ */ React.createElement("button", { onClick, disabled, "aria-label": dir === "prev" ? t("Previous", "Anterior") : t("Next", "Siguiente"), style: {
    width: 46,
    height: 46,
    borderRadius: "50%",
    border: `1px solid ${disabled ? "rgba(0,16,17,0.12)" : "var(--ink)"}`,
    background: "var(--white)",
    color: disabled ? "rgba(0,16,17,0.25)" : "var(--ink)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: disabled ? "default" : "pointer",
    transition: "border-color 0.2s ease, color 0.2s ease"
  } }, /* @__PURE__ */ React.createElement("svg", { width: "15", height: "15", viewBox: "0 0 16 16", fill: "none", style: { transform: dir === "prev" ? "rotate(180deg)" : "none" } }, /* @__PURE__ */ React.createElement("path", { d: "M3 8h10m0 0L9 4m4 4l-4 4", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "square" })));
  return /* @__PURE__ */ React.createElement("section", { style: { background: "var(--linen)", padding: "120px 0" } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: 32,
    marginBottom: 44,
    flexWrap: "wrap"
  } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", { className: "display", style: {
    fontSize: "clamp(26px, 2.8vw, 38px)",
    margin: 0,
    textTransform: "uppercase",
    fontWeight: 800,
    letterSpacing: "-0.01em"
  } }, t("In stock,", "En existencia,"), " ", /* @__PURE__ */ React.createElement("span", { style: { color: "var(--tangerine)" } }, t("ready to ship.", "listos para enviar.")))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10 } }, /* @__PURE__ */ React.createElement(ArrowBtn, { dir: "prev", disabled: page === 0, onClick: () => setPage((p) => Math.max(0, p - 1)) }), /* @__PURE__ */ React.createElement(ArrowBtn, { dir: "next", disabled: page === pages - 1, onClick: () => setPage((p) => Math.min(pages - 1, p + 1)) }))), /* @__PURE__ */ React.createElement("div", { style: { overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    transform: `translateX(-${page * 100}%)`,
    transition: "transform 0.6s cubic-bezier(0.35, 0, 0.15, 1)"
  } }, Array.from({ length: pages }).map((_, pg) => /* @__PURE__ */ React.createElement("div", { key: pg, "aria-hidden": pg !== page, style: {
    flex: "0 0 100%",
    minWidth: 0,
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 34
  } }, FEATURED.slice(pg * PER, pg * PER + PER).map((p, idx) => /* @__PURE__ */ React.createElement("article", { key: p.sku, style: {
    opacity: pg === page ? 1 : 0,
    transform: pg === page ? "none" : "translateY(16px)",
    transition: "opacity 0.45s ease, transform 0.6s cubic-bezier(0.3, 0, 0.2, 1)",
    transitionDelay: pg === page ? `${140 + idx * 90}ms` : "0ms"
  } }, /* @__PURE__ */ React.createElement("div", { style: { position: "relative", aspectRatio: "4 / 3", background: "#263166", overflow: "hidden" } }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: p.imgUrl || FENCE_IMG[p.img],
      alt: t(p.name),
      style: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "mono", style: {
    marginTop: 16,
    fontSize: 13.5,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "var(--charcoal)"
  } }, t(p.cat), " \xB7 ", p.height), /* @__PURE__ */ React.createElement("h3", { className: "display", style: {
    margin: "8px 0 0",
    fontSize: 22.5,
    lineHeight: 1.15,
    fontWeight: 700,
    color: "var(--ink)"
  } }, t(p.name)), /* @__PURE__ */ React.createElement("a", { href: "estimate.html", className: "mono", style: {
    marginTop: 14,
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    fontSize: 14,
    fontWeight: 700,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "var(--tangerine)"
  } }, t("Request quote", "Solicitar cotizaci\xF3n"), /* @__PURE__ */ React.createElement("svg", { width: "12", height: "12", viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M3 8h10m0 0L9 4m4 4l-4 4", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "square" }))))))))), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 40,
    display: "flex",
    alignItems: "center",
    gap: 24,
    flexWrap: "wrap"
  } }, /* @__PURE__ */ React.createElement("span", { style: { flex: 1, minWidth: 160, height: 2, background: "rgba(0,16,17,0.12)", position: "relative" } }, /* @__PURE__ */ React.createElement("span", { style: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: `${(page + 1) / pages * 100}%`,
    background: "var(--tangerine)",
    transition: "width 0.3s ease"
  } })), /* @__PURE__ */ React.createElement("span", { className: "mono", style: {
    fontSize: 14.5,
    letterSpacing: "0.14em",
    color: "var(--charcoal)",
    whiteSpace: "nowrap"
  } }, start + 1, "\u2013", Math.min(start + PER, FEATURED.length), " / ", FEATURED.length))));
};
const ProjectCard = ({ p, i, layout }) => {
  const t = useT();
  const [hover, setHover] = React.useState(false);
  return /* @__PURE__ */ React.createElement(
    "a",
    {
      href: "estimate.html",
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        gridColumn: layout.col,
        gridRow: layout.row,
        position: "relative",
        overflow: "hidden",
        background: "#263166",
        textDecoration: "none",
        display: "block"
      }
    },
    /* @__PURE__ */ React.createElement(
      "img",
      {
        src: p.imgUrl || FENCE_IMG[MAT_IMG[p.material]] || FENCE_IMG[p.img],
        alt: t(p.name),
        style: {
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: hover ? "scale(1.05)" : "scale(1)",
          transition: "transform 0.7s ease"
        }
      }
    ),
    /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(0,16,17,0) 35%, rgba(0,16,17,0.92) 100%)"
    } }),
    /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      top: 18,
      left: 18,
      right: 18,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    } }, /* @__PURE__ */ React.createElement("div", { className: "mono", style: {
      fontSize: 13.5,
      letterSpacing: "0.18em",
      color: "var(--ink)",
      background: "var(--white)",
      padding: "5px 9px",
      fontWeight: 600
    } }, String(i + 1).padStart(2, "0"), " / ", p.year), /* @__PURE__ */ React.createElement("div", { className: "mono", style: {
      fontSize: 13.5,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--white)",
      background: "rgba(0,16,17,0.55)",
      padding: "5px 9px",
      backdropFilter: "blur(6px)"
    } }, t(MAT_LABELS[p.material] || p.material))),
    /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px", color: "var(--white)" } }, /* @__PURE__ */ React.createElement("h3", { className: "display", style: {
      margin: 0,
      fontSize: "clamp(18px, 1.5vw, 22px)",
      lineHeight: 1.05,
      letterSpacing: "-0.01em",
      color: "var(--white)"
    } }, t(p.name)), /* @__PURE__ */ React.createElement("div", { style: {
      maxHeight: hover ? 80 : 0,
      opacity: hover ? 1 : 0,
      overflow: "hidden",
      transition: "all 0.35s ease",
      marginTop: hover ? 14 : 0
    } }, /* @__PURE__ */ React.createElement("p", { style: {
      margin: 0,
      fontSize: 14.5,
      lineHeight: 1.55,
      color: "var(--alice-blue)"
    } }, t(p.type)), /* @__PURE__ */ React.createElement("p", { style: {
      margin: "6px 0 0",
      fontSize: 14,
      fontFamily: "var(--mono)",
      letterSpacing: "0.06em",
      color: "rgba(255,255,255,0.65)"
    } }, t("Installed by", "Instalado por"), " ", p.contractor))),
    /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      bottom: 18,
      right: 18,
      width: 36,
      height: 36,
      background: "var(--white)",
      color: "var(--ink)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      opacity: hover ? 1 : 0,
      transform: hover ? "translate(0,0)" : "translate(8px,-8px)",
      transition: "all 0.3s ease"
    } }, /* @__PURE__ */ React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M3 8h10m0 0L9 4m4 4l-4 4", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "square" })))
  );
};
const FeaturedProject = ({ p, num, total }) => {
  const t = useT();
  const [hover, setHover] = React.useState(false);
  if (!p) return null;
  return /* @__PURE__ */ React.createElement(
    "a",
    {
      href: "estimate.html",
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        position: "relative",
        overflow: "hidden",
        background: "#263166",
        textDecoration: "none",
        display: "block",
        minHeight: "min(52vh, 500px)",
        maxHeight: 620,
        animation: "wfsSlideFade 0.5s cubic-bezier(0.3, 0, 0.2, 1)"
      }
    },
    /* @__PURE__ */ React.createElement(
      "img",
      {
        src: p.imgUrl || FENCE_IMG[MAT_IMG[p.material]] || FENCE_IMG[p.img],
        alt: t(p.name),
        style: {
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: hover ? "scale(1.04)" : "scale(1)",
          transition: "transform 0.7s ease"
        }
      }
    ),
    /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(38, 49, 102,0) 16%, rgba(38, 49, 102,0.6) 52%, rgba(38, 49, 102,0.95) 100%)"
    } }),
    /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "var(--tangerine)" } }),
    /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", left: 0, right: 0, bottom: 0, padding: 28, color: "var(--white)" } }, /* @__PURE__ */ React.createElement("h3", { className: "display", style: {
      margin: 0,
      fontSize: "clamp(26px, 3vw, 38px)",
      lineHeight: 1,
      letterSpacing: "-0.02em",
      color: "var(--white)"
    } }, t(p.name)), /* @__PURE__ */ React.createElement("p", { style: {
      margin: "12px 0 0",
      maxWidth: 460,
      fontSize: 15.5,
      lineHeight: 1.55,
      color: "var(--alice-blue)"
    } }, t(p.type)), /* @__PURE__ */ React.createElement("div", { style: {
      display: "flex",
      marginTop: 18,
      paddingTop: 16,
      borderTop: "1px solid rgba(255,255,255,0.18)"
    } }, [
      [{ EN: "Scope", ES: "Alcance" }, t(p.size)],
      [{ EN: "System", ES: "Sistema" }, t(MAT_LABELS[p.material] || p.material)],
      [{ EN: "Completed", ES: "Completado" }, p.year]
    ].map(([k, v], i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
      flex: 1,
      paddingLeft: i ? 18 : 0,
      borderLeft: i ? "1px solid rgba(255,255,255,0.18)" : "none"
    } }, /* @__PURE__ */ React.createElement("div", { className: "mono", style: {
      fontSize: 13,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.55)",
      marginBottom: 5
    } }, t(k)), /* @__PURE__ */ React.createElement("div", { className: "display", style: { fontSize: 17.5, color: "var(--white)", letterSpacing: "-0.01em" } }, v)))), /* @__PURE__ */ React.createElement("div", { style: {
      marginTop: 18,
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      gap: 16,
      flexWrap: "wrap"
    } }, /* @__PURE__ */ React.createElement("span", { className: "mono", style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      fontSize: 14,
      fontWeight: 700,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--white)"
    } }, t("View project", "Ver proyecto"), /* @__PURE__ */ React.createElement("span", { style: {
      width: 34,
      height: 34,
      background: "var(--tangerine)",
      color: "var(--ink)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transform: hover ? "translateX(3px)" : "none",
      transition: "transform 0.25s ease"
    } }, /* @__PURE__ */ React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M3 8h10m0 0L9 4m4 4l-4 4", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "square" }))))))
  );
};
const ProjectListRow = ({ p, active, onSelect }) => {
  const t = useT();
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: onSelect,
      onMouseEnter: onSelect,
      style: {
        display: "grid",
        gridTemplateColumns: "72px 1fr auto",
        gap: 14,
        alignItems: "center",
        padding: 8,
        width: "100%",
        textAlign: "left",
        cursor: "pointer",
        background: active ? "#ffffff" : "transparent",
        border: "1px solid",
        borderColor: active ? "rgba(38, 49, 102,0.22)" : "rgba(0,16,17,0.10)",
        borderLeftWidth: 3,
        borderLeftColor: active ? "var(--tangerine)" : "transparent",
        transition: "background 0.2s ease, border-color 0.2s ease"
      }
    },
    /* @__PURE__ */ React.createElement("span", { style: { display: "block", width: 72, height: 50, overflow: "hidden", background: "#263166" } }, /* @__PURE__ */ React.createElement(
      "img",
      {
        src: p.imgUrl || FENCE_IMG[MAT_IMG[p.material]] || FENCE_IMG[p.img],
        alt: t(p.name),
        style: { width: "100%", height: "100%", objectFit: "cover", display: "block" }
      }
    )),
    /* @__PURE__ */ React.createElement("span", { style: { display: "block", minWidth: 0 } }, /* @__PURE__ */ React.createElement("span", { className: "display", style: {
      display: "block",
      fontSize: 17,
      lineHeight: 1.1,
      letterSpacing: "-0.01em",
      color: "var(--ink)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    } }, t(p.name))),
    /* @__PURE__ */ React.createElement("span", { className: "mono", style: {
      fontSize: 13,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      fontWeight: 700,
      color: active ? "var(--ink)" : "var(--charcoal)",
      flexShrink: 0
    } }, t(MAT_LABELS[p.material] || p.material))
  );
};
const PageBtn = ({ active, disabled, onClick, label, arrow }) => {
  const t = useT();
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick,
      disabled,
      "aria-label": arrow === "prev" ? t("Previous page", "P\xE1gina anterior") : arrow === "next" ? t("Next page", "P\xE1gina siguiente") : `${t("Page", "P\xE1gina")} ${label}`,
      className: "mono",
      style: {
        width: 32,
        height: 32,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 14,
        fontWeight: 700,
        letterSpacing: "0.04em",
        border: "1px solid",
        borderColor: active ? "var(--ink)" : "rgba(0,16,17,0.18)",
        background: active ? "var(--ink)" : "transparent",
        color: active ? "var(--white)" : "var(--ink)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.32 : 1,
        transition: "background 0.2s ease, border-color 0.2s ease"
      }
    },
    arrow ? /* @__PURE__ */ React.createElement(
      "svg",
      {
        width: "13",
        height: "13",
        viewBox: "0 0 16 16",
        fill: "none",
        style: { transform: arrow === "prev" ? "scaleX(-1)" : "none" }
      },
      /* @__PURE__ */ React.createElement("path", { d: "M3 8h10m0 0L9 4m4 4l-4 4", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "square" })
    ) : label
  );
};
const ProjectGallery = ({ featuredMaterial, items }) => {
  const t = useT();
  const curated = Array.isArray(items) && items.length > 0;
  const projects = curated ? items : [
    { name: { EN: "Cape Coral Residential", ES: "Residencial Cape Coral" }, loc: "Cape Coral, FL", size: "320 LF", material: "Chain Link", type: { EN: "Chainlink fence, black", ES: "Cerca de malla cicl\xF3nica, negra" }, contractor: "Coastline Fence Co.", year: "2024", imgUrl: "https://crpozo.github.io/wfs-design-preview/assets/projects/cl-privacy-slats-black.jpg" },
    { name: { EN: "Estero Community", ES: "Comunidad Estero" }, loc: "Estero, FL", size: { EN: "38 lots", ES: "38 lotes" }, material: "Metal", type: { EN: "Metal fence, horizontal, black", ES: "Cerca de metal, horizontal, negra" }, contractor: "Gulf Perimeter LLC", year: "2024", imgUrl: "https://crpozo.github.io/wfs-design-preview/assets/projects/met-fence-horizontal-black.jpg" },
    { name: { EN: "Fort Myers Estate", ES: "Residencia Fort Myers" }, loc: "Fort Myers, FL", size: "420 LF", material: "Aluminum", type: { EN: "2-rail aluminum, smooth bottom, white", ES: "Aluminio de 2 rieles, base lisa, blanco" }, contractor: "Estate Fence Pros", year: "2025", imgUrl: "https://crpozo.github.io/wfs-design-preview/assets/projects/alum-2-rail-smooth-bottom-white.jpg" },
    { name: { EN: "Naples Pool Enclosure", ES: "Cerramiento de piscina Naples" }, loc: "Naples, FL", size: "180 LF", material: "Vinyl", type: { EN: "Vinyl closed top, white", ES: "Vinilo tope cerrado, blanco" }, contractor: "Naples Outdoor", year: "2025", imgUrl: "https://crpozo.github.io/wfs-design-preview/assets/projects/pvc-closed-top-white.jpg" },
    { name: { EN: "Bonita Springs Self-Storage", ES: "Autoalmacenamiento Bonita Springs" }, loc: "Bonita Springs, FL", size: "0.9 mi", material: "Chain Link", type: { EN: "Galvanized mesh with galvanized swing gate", ES: "Malla galvanizada con port\xF3n abatible galvanizado" }, contractor: "Industrial Fence FL", year: "2024", imgUrl: "https://crpozo.github.io/wfs-design-preview/assets/projects/cl-swing-gate-galv-4.jpg" },
    { name: { EN: "Punta Gorda Marina", ES: "Marina Punta Gorda" }, loc: "Punta Gorda, FL", size: "240 LF", material: "EC Fence", type: { EN: "EC Fence panels, 6 ft, white finish", ES: "Paneles EC Fence, 6 ft, acabado blanco" }, contractor: "Harbor Iron Works", year: "2025", imgUrl: "https://crpozo.github.io/wfs-design-preview/assets/projects/ecfence-white.jpg" },
    { name: { EN: "Lehigh Acres Warehouse", ES: "Bodega Lehigh Acres" }, loc: "Lehigh Acres, FL", size: "0.6 mi", material: "Chain Link", type: { EN: "Chainlink fence, black", ES: "Cerca de malla cicl\xF3nica, negra" }, contractor: "Industrial Fence FL", year: "2025", imgUrl: "https://crpozo.github.io/wfs-design-preview/assets/projects/cl-gate-black.jpg" },
    { name: { EN: "Marco Island Villa", ES: "Villa Marco Island" }, loc: "Marco Island, FL", size: "260 LF", material: "Aluminum", type: { EN: "Aluminum puppy picket, bronze estate finish", ES: "Aluminio puppy picket, acabado bronce de alta gama" }, contractor: "Estate Fence Pros", year: "2025", imgUrl: "https://crpozo.github.io/wfs-design-preview/assets/projects/alum-puppy-picket-bronze.jpg" },
    { name: { EN: "Sanibel Beachfront", ES: "Frente de playa Sanibel" }, loc: "Sanibel, FL", size: "150 LF", material: "Vinyl", type: { EN: "Vinyl privacy, two-tone white and gray", ES: "Privacidad de vinilo, bicolor blanco y gris" }, contractor: "Naples Outdoor", year: "2024", imgUrl: "https://crpozo.github.io/wfs-design-preview/assets/projects/pvc-privacy-two-tone-white-and-gray.png" },
    { name: { EN: "Immokalee Ag Facility", ES: "Instalaci\xF3n agr\xEDcola Immokalee" }, loc: "Immokalee, FL", size: "1.4 mi", material: "Chain Link", type: { EN: "Chainlink fence, black", ES: "Cerca de malla cicl\xF3nica, negra" }, contractor: "Gulf Perimeter LLC", year: "2024", imgUrl: "https://crpozo.github.io/wfs-design-preview/assets/projects/cl-fence-black-2.jpg" },
    { name: { EN: "Port Charlotte HOA", ES: "HOA Port Charlotte" }, loc: "Port Charlotte, FL", size: { EN: "52 lots", ES: "52 lotes" }, material: "EC Fence", type: { EN: "EC Fence panels, 6 ft, bronze finish", ES: "Paneles EC Fence, 6 ft, acabado bronce" }, contractor: "Harbor Iron Works", year: "2025", imgUrl: "https://crpozo.github.io/wfs-design-preview/assets/projects/ecfence-bronze.jpg" },
    { name: { EN: "Golden Gate Estates", ES: "Golden Gate Estates" }, loc: "Golden Gate, FL", size: "300 LF", material: "Metal", type: { EN: "Metal fence, 3-rail, brown finish", ES: "Cerca met\xE1lica, 3 rieles, acabado marr\xF3n" }, contractor: "Gulf Perimeter LLC", year: "2025", imgUrl: "https://crpozo.github.io/wfs-design-preview/assets/projects/met-fence-3-rail-brown.jpg" }
  ];
  const PER = 5;
  const pages = Math.ceil(projects.length / PER);
  const [page, setPage] = React.useState(0);
  const start = page * PER;
  const ArrowBtn = ({ dir, disabled, onClick }) => /* @__PURE__ */ React.createElement("button", { onClick, disabled, "aria-label": dir === "prev" ? t("Previous", "Anterior") : t("Next", "Siguiente"), style: {
    width: 46,
    height: 46,
    borderRadius: "50%",
    border: `1px solid ${disabled ? "rgba(0,16,17,0.12)" : "var(--ink)"}`,
    background: "var(--white)",
    color: disabled ? "rgba(0,16,17,0.25)" : "var(--ink)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: disabled ? "default" : "pointer",
    transition: "border-color 0.2s ease, color 0.2s ease"
  } }, /* @__PURE__ */ React.createElement("svg", { width: "15", height: "15", viewBox: "0 0 16 16", fill: "none", style: { transform: dir === "prev" ? "rotate(180deg)" : "none" } }, /* @__PURE__ */ React.createElement("path", { d: "M3 8h10m0 0L9 4m4 4l-4 4", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "square" })));
  return /* @__PURE__ */ React.createElement("section", { id: "projects", style: { background: "var(--white)", padding: "clamp(64px, 9vh, 110px) 0" } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: 32,
    marginBottom: 44,
    flexWrap: "wrap"
  } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", { className: "display", style: {
    margin: 0,
    fontSize: "clamp(30px, 3.4vw, 46px)",
    textTransform: "uppercase",
    fontWeight: 800,
    letterSpacing: "-0.01em"
  } }, t("Product", "Ejemplos de"), " ", /* @__PURE__ */ React.createElement("span", { style: { color: "var(--tangerine)" } }, t("examples.", "producto."))), /* @__PURE__ */ React.createElement("p", { className: "mono", style: {
    margin: "12px 0 0",
    fontSize: 14,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "var(--charcoal)"
  } }, t("Representative product photos, not customer projects.", "Fotos representativas de producto, no proyectos de clientes."))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10 } }, /* @__PURE__ */ React.createElement(ArrowBtn, { dir: "prev", disabled: page === 0, onClick: () => setPage((p) => Math.max(0, p - 1)) }), /* @__PURE__ */ React.createElement(ArrowBtn, { dir: "next", disabled: page === pages - 1, onClick: () => setPage((p) => Math.min(pages - 1, p + 1)) }))), /* @__PURE__ */ React.createElement("div", { style: { overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    transform: `translateX(-${page * 100}%)`,
    transition: "transform 0.6s cubic-bezier(0.35, 0, 0.15, 1)"
  } }, Array.from({ length: pages }).map((_, pg) => /* @__PURE__ */ React.createElement("div", { key: pg, "aria-hidden": pg !== page, style: {
    flex: "0 0 100%",
    minWidth: 0,
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: 20
  } }, projects.slice(pg * PER, pg * PER + PER).map((p, idx) => /* @__PURE__ */ React.createElement("article", { key: p.name.EN || p.name, style: {
    opacity: pg === page ? 1 : 0,
    transform: pg === page ? "none" : "translateY(16px)",
    transition: "opacity 0.45s ease, transform 0.6s cubic-bezier(0.3, 0, 0.2, 1)",
    transitionDelay: pg === page ? `${140 + idx * 90}ms` : "0ms"
  } }, /* @__PURE__ */ React.createElement("div", { style: { position: "relative", aspectRatio: "4 / 3", background: "#263166", overflow: "hidden" } }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: p.imgUrl || FENCE_IMG[MAT_IMG[p.material]] || FENCE_IMG[p.img],
      alt: t(p.name),
      style: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "mono", style: {
    marginTop: 16,
    fontSize: 13.5,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "var(--charcoal)"
  } }, t(MAT_LABELS[p.material] || p.material)), /* @__PURE__ */ React.createElement("h3", { className: "display", style: {
    margin: "8px 0 0",
    fontSize: 20.5,
    lineHeight: 1.25,
    fontWeight: 700,
    color: "var(--ink)"
  } }, t(p.type)), /* @__PURE__ */ React.createElement("a", { href: "estimate.html#contact", className: "mono", style: {
    marginTop: 14,
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    fontSize: 14,
    fontWeight: 700,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "var(--tangerine)"
  } }, t("Request quote", "Solicitar cotizaci\xF3n"), /* @__PURE__ */ React.createElement("svg", { width: "12", height: "12", viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M3 8h10m0 0L9 4m4 4l-4 4", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "square" }))))))))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 40, display: "flex", alignItems: "center", gap: 24 } }, /* @__PURE__ */ React.createElement("span", { style: { flex: 1, height: 2, background: "rgba(0,16,17,0.12)", position: "relative" } }, /* @__PURE__ */ React.createElement("span", { style: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: `${(page + 1) / pages * 100}%`,
    background: "var(--tangerine)",
    transition: "width 0.3s ease"
  } })), /* @__PURE__ */ React.createElement("span", { className: "mono", style: {
    fontSize: 14.5,
    letterSpacing: "0.14em",
    color: "var(--charcoal)",
    whiteSpace: "nowrap"
  } }, start + 1, "\u2013", Math.min(start + PER, projects.length), " / ", projects.length))));
};
const Calculator = () => {
  const t = useT();
  const [length, setLength] = React.useState(150);
  const [height, setHeight] = React.useState(6);
  const [type, setType] = React.useState("chain-link");
  const [gates, setGates] = React.useState(1);
  const ratePerFt = { "chain-link": 8.4, "aluminum": 24.5, "vinyl": 28, "metal": 22 }[type];
  const heightFactor = height / 6;
  const matCost = Math.round(length * ratePerFt * heightFactor);
  const gateCost = gates * (type === "chain-link" ? 320 : 680);
  const total = matCost + gateCost;
  return /* @__PURE__ */ React.createElement("section", { id: "calculator", style: { background: "var(--indigo-blue)", color: "var(--parchment)", padding: "120px 0", position: "relative", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, opacity: 0.18, pointerEvents: "none" } }, /* @__PURE__ */ React.createElement(ChainLinkSVG, { color: "#97baff", opacity: 0.6 })), /* @__PURE__ */ React.createElement("div", { className: "container", style: { position: "relative" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 60, alignItems: "start" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", { className: "display", style: { fontSize: "clamp(40px, 5.5vw, 60px)", margin: "0 0 24px" } }, t("5-minute", "Calculadora de cercas"), /* @__PURE__ */ React.createElement("br", null), t("fence calculator.", "en 5 minutos.")), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 18.5, lineHeight: 1.5, color: "var(--alice-blue)", maxWidth: 420, marginBottom: 32 } }, t("Get a real-time materials estimate. We follow up with a binding quote within 24 hours, including delivery and any local code adjustments.", "Obt\xE9n un estimado de materiales en tiempo real. Damos seguimiento con una cotizaci\xF3n en firme dentro de 24 horas, incluyendo entrega y cualquier ajuste por normativa local.")), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gap: 16, maxWidth: 380 } }, [
    [t("MATERIALS-ONLY", "SOLO MATERIALES"), t("No labor markup. We sell what installers buy.", "Sin recargo por mano de obra. Vendemos lo que compran los instaladores.")],
    [t("LIVE INVENTORY", "INVENTARIO EN VIVO"), t("Estimates pull from current stock at your nearest yard.", "Los estimados usan el stock actual de tu sucursal m\xE1s cercana.")],
    [t("NO COMMITMENT", "SIN COMPROMISO"), t("Save the estimate, share with your contractor.", "Guarda el estimado y comp\xE1rtelo con tu contratista.")]
  ].map(([k, v], i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { borderTop: "1px solid rgba(255,255,255,0.18)", paddingTop: 14 } }, /* @__PURE__ */ React.createElement("div", { className: "mono", style: { fontSize: 14, letterSpacing: "0.14em", color: "var(--tangerine)", marginBottom: 6 } }, k), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 15.5, color: "var(--alice-blue)", lineHeight: 1.4 } }, v))))), /* @__PURE__ */ React.createElement("div", { style: {
    background: "var(--parchment)",
    color: "var(--ink)",
    borderRadius: "var(--radius-lg)",
    padding: 36
  } }, /* @__PURE__ */ React.createElement("div", { className: "mono", style: { fontSize: 14, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--charcoal)", marginBottom: 24, display: "flex", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("span", null, t("Quick estimate", "Estimado r\xE1pido")), /* @__PURE__ */ React.createElement("span", null, "WFS-CALC v2.4")), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gap: 24 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: { fontSize: 14.5, fontFamily: "var(--mono)", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--charcoal)", marginBottom: 10, display: "block" } }, t("Fence type", "Tipo de cerca")), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6 } }, [["chain-link", "Chain Link", "Malla cicl\xF3nica"], ["aluminum", "Aluminum", "Aluminio"], ["vinyl", "Vinyl", "Vinilo"], ["metal", "Metal", "Metal"]].map(([id, label, labelEs]) => /* @__PURE__ */ React.createElement("button", { key: id, onClick: () => setType(id), style: {
    padding: "14px 10px",
    fontSize: 14.5,
    background: type === id ? "var(--ink)" : "var(--white)",
    color: type === id ? "var(--parchment)" : "var(--ink)",
    border: "1px solid rgba(0,16,17,0.12)",
    borderRadius: 8,
    fontWeight: 500
  } }, t(label, labelEs))))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: 10 } }, /* @__PURE__ */ React.createElement("label", { style: { fontSize: 14.5, fontFamily: "var(--mono)", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--charcoal)" } }, t("Linear feet", "Pies lineales")), /* @__PURE__ */ React.createElement("span", { className: "mono", style: { fontSize: 14.5, fontWeight: 500 } }, length, " ft")), /* @__PURE__ */ React.createElement("input", { type: "range", min: "20", max: "2000", step: "10", value: length, onChange: (e) => setLength(+e.target.value), style: { width: "100%", accentColor: "var(--tangerine)" } })), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: { fontSize: 14.5, fontFamily: "var(--mono)", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--charcoal)", marginBottom: 10, display: "block" } }, t("Height (ft)", "Altura (ft)")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 4 } }, [4, 6, 8, 10].map((h) => /* @__PURE__ */ React.createElement("button", { key: h, onClick: () => setHeight(h), style: {
    flex: 1,
    padding: "12px 0",
    fontSize: 14.5,
    background: height === h ? "var(--ink)" : "var(--white)",
    color: height === h ? "var(--parchment)" : "var(--ink)",
    border: "1px solid rgba(0,16,17,0.12)",
    borderRadius: 8,
    fontWeight: 500
  } }, h, "'")))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: { fontSize: 14.5, fontFamily: "var(--mono)", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--charcoal)", marginBottom: 10, display: "block" } }, t("Gates", "Portones")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 4 } }, [0, 1, 2, 3].map((g) => /* @__PURE__ */ React.createElement("button", { key: g, onClick: () => setGates(g), style: {
    flex: 1,
    padding: "12px 0",
    fontSize: 14.5,
    background: gates === g ? "var(--ink)" : "var(--white)",
    color: gates === g ? "var(--parchment)" : "var(--ink)",
    border: "1px solid rgba(0,16,17,0.12)",
    borderRadius: 8,
    fontWeight: 500
  } }, g))))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 8, padding: "24px 0 0", borderTop: "1px solid rgba(0,16,17,0.12)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 14.5, color: "var(--charcoal)", marginBottom: 8 } }, /* @__PURE__ */ React.createElement("span", null, t("Materials", "Materiales"), " (", length, " ft \xD7 ", height, "' ", type, ")"), /* @__PURE__ */ React.createElement("span", { className: "mono" }, "$", matCost.toLocaleString())), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 14.5, color: "var(--charcoal)", marginBottom: 16 } }, /* @__PURE__ */ React.createElement("span", null, t("Gates", "Portones"), " (", gates, ")"), /* @__PURE__ */ React.createElement("span", { className: "mono" }, "$", gateCost.toLocaleString())), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "baseline" } }, /* @__PURE__ */ React.createElement("span", { className: "mono", style: { fontSize: 14, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--charcoal)" } }, t("Estimated total", "Total estimado")), /* @__PURE__ */ React.createElement("span", { className: "display", style: { fontSize: 45.5, color: "var(--ink)" } }, "$", total.toLocaleString()))), /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary", style: { width: "100%", justifyContent: "center", padding: "18px 22px" } }, t("Lock this estimate, get binding quote", "Fija este estimado y obt\xE9n tu cotizaci\xF3n en firme"), " ", /* @__PURE__ */ React.createElement(ArrowRight, null)))))));
};
const MapTruck = ({ flip }) => /* @__PURE__ */ React.createElement(
  "svg",
  {
    viewBox: "0 0 72 40",
    width: "100%",
    height: "100%",
    style: { display: "block", overflow: "visible", transform: flip ? "scaleX(-1)" : "none" }
  },
  /* @__PURE__ */ React.createElement("g", { stroke: "var(--white)", strokeWidth: "2.4", strokeLinecap: "round", opacity: "0.85" }, /* @__PURE__ */ React.createElement("line", { x1: "0.5", y1: "17", x2: "7", y2: "17" }), /* @__PURE__ */ React.createElement("line", { x1: "1.5", y1: "24", x2: "9", y2: "24" })),
  /* @__PURE__ */ React.createElement("rect", { x: "10", y: "6.5", width: "32", height: "21", rx: "2.5", fill: "var(--ink)" }),
  /* @__PURE__ */ React.createElement("path", { d: "M42 12 h9.6 c1.2 0 2.3 .5 3.1 1.5 l4.6 5.6 c.9 1.1 1.4 2.5 1.4 3.9 v4.5 H42 Z", fill: "var(--ink)" }),
  /* @__PURE__ */ React.createElement("path", { d: "M51.9 14.6 h-6.1 v5.3 h10.4 z", fill: "var(--white)" }),
  /* @__PURE__ */ React.createElement("rect", { x: "10", y: "27.4", width: "49", height: "2.6", rx: "1.3", fill: "var(--ink)" }),
  /* @__PURE__ */ React.createElement("g", { fill: "var(--ink)" }, /* @__PURE__ */ React.createElement("circle", { cx: "22", cy: "31.4", r: "5.6" }), /* @__PURE__ */ React.createElement("circle", { cx: "51", cy: "31.4", r: "5.6" })),
  /* @__PURE__ */ React.createElement("g", { fill: "var(--white)" }, /* @__PURE__ */ React.createElement("circle", { cx: "22", cy: "31.4", r: "2" }), /* @__PURE__ */ React.createElement("circle", { cx: "51", cy: "31.4", r: "2" }))
);
const ServiceAreas = () => {
  const t = useT();
  const cities = [
    { name: "Fort Myers", x: 22, y: 32, hq: true },
    { name: "Cape Coral", x: 18, y: 38 },
    { name: "Port Charlotte", x: 28, y: 22 },
    { name: "Bonita Springs", x: 30, y: 50 },
    { name: "Naples", x: 36, y: 60 },
    { name: "Estero", x: 26, y: 44 },
    { name: "Punta Gorda", x: 32, y: 18 },
    { name: "Marco Island", x: 42, y: 72 }
  ];
  return /* @__PURE__ */ React.createElement("section", { style: { background: "var(--white)", padding: "120px 0" } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 48,
    alignItems: "end",
    paddingBottom: 24,
    marginBottom: 28,
    borderBottom: "1px solid rgba(0,16,17,0.12)"
  } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", { className: "display", style: {
    margin: 0,
    fontSize: "clamp(28px, 3vw, 40px)",
    lineHeight: 1,
    letterSpacing: "-0.02em",
    fontWeight: 800
  } }, t("Serving all of", "Atendemos toda"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--tangerine)" } }, t("Florida.", "Florida.")))), /* @__PURE__ */ React.createElement("p", { style: {
    margin: 0,
    maxWidth: 360,
    justifySelf: "end",
    fontSize: 15.5,
    lineHeight: 1.55,
    color: "var(--charcoal)",
    textAlign: "right"
  } }, t(
    "Two yards in Fort Myers and Port Charlotte, same-day pickup, with delivery available across the state of Florida.",
    "Dos sucursales en Fort Myers y Port Charlotte, recogida el mismo d\xEDa, con entrega disponible en todo el estado de Florida."
  ))), /* @__PURE__ */ React.createElement("div", { style: {
    display: "grid",
    gridTemplateColumns: "1.4fr 1fr",
    gap: 24,
    alignItems: "stretch"
  } }, /* @__PURE__ */ React.createElement("div", { className: "wfs-map", style: {
    position: "relative",
    background: "var(--ink)",
    border: "1px solid var(--ink)",
    overflow: "hidden",
    aspectRatio: "192 / 152"
  } }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: "https://crpozo.github.io/wfs-design-preview/assets/us-map.svg",
      alt: t("Florida map showing WFS service area", "Mapa de Florida que muestra la zona de servicio de WFS"),
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    }
  ), [
    { name: t("Fort Myers \xB7 HQ", "Fort Myers \xB7 Sede"), xPct: 69.3, yPct: 67.1, cls: "wfs-map-pin--fm" },
    { name: "Port Charlotte", xPct: 68.2, yPct: 63.2, labelLeft: true, cls: "wfs-map-pin--pc" }
  ].map((p) => /* @__PURE__ */ React.createElement(React.Fragment, { key: p.name }, /* @__PURE__ */ React.createElement("span", { style: {
    position: "absolute",
    left: `${p.xPct}%`,
    top: `${p.yPct}%`,
    transform: "translate(-50%, -50%)",
    width: 14,
    height: 14,
    borderRadius: "50%",
    background: "var(--white)",
    border: "3px solid var(--ink)",
    boxShadow: "0 0 0 4px rgba(38, 49, 102,0.35)",
    pointerEvents: "none",
    zIndex: 2
  } }), /* @__PURE__ */ React.createElement("span", { className: `mono wfs-map-pin ${p.cls || ""}`, style: {
    position: "absolute",
    left: p.labelLeft ? `calc(${p.xPct}% - 16px)` : `calc(${p.xPct}% + 16px)`,
    top: `${p.yPct}%`,
    transform: p.labelLeft ? "translate(-100%, -50%)" : "translate(0, -50%)",
    fontSize: 13.5,
    fontWeight: 700,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--ink)",
    background: "var(--white)",
    padding: "5px 9px",
    whiteSpace: "nowrap",
    border: "1px solid var(--ink)",
    boxShadow: "0 6px 16px rgba(0,0,0,0.30)",
    pointerEvents: "none",
    zIndex: 3
  } }, p.name))), [
    { key: "panhandle", xPct: 30, yPct: 18, flip: false },
    { key: "north-fl", xPct: 64, yPct: 26, flip: true },
    { key: "north", xPct: 70, yPct: 41, flip: true },
    { key: "central", xPct: 78, yPct: 57, flip: false },
    { key: "se", xPct: 85, yPct: 66.5, flip: false }
  ].map((tk) => /* @__PURE__ */ React.createElement("span", { key: tk.key, "aria-hidden": true, style: {
    position: "absolute",
    left: `${tk.xPct}%`,
    top: `${tk.yPct}%`,
    transform: "translate(-50%, -50%)",
    width: 38,
    height: 21,
    filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.38))",
    pointerEvents: "none",
    zIndex: 1
  } }, /* @__PURE__ */ React.createElement(MapTruck, { flip: tk.flip }))), /* @__PURE__ */ React.createElement("div", { className: "mono", style: {
    position: "absolute",
    top: 18,
    left: 18,
    display: "flex",
    alignItems: "center",
    gap: 10,
    fontSize: 13.5,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--alice-blue)",
    fontWeight: 700
  } }, /* @__PURE__ */ React.createElement("span", null, t("State of Florida", "Estado de Florida")), /* @__PURE__ */ React.createElement("span", { style: { width: 24, height: 1, background: "var(--tangerine)" } })), /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    bottom: 16,
    left: 16,
    background: "rgba(38, 49, 102,0.85)",
    backdropFilter: "blur(6px)",
    border: "1px solid rgba(255,113,51,0.4)",
    padding: "10px 14px",
    display: "flex",
    alignItems: "center",
    gap: 10,
    boxShadow: "0 8px 20px rgba(0,0,0,0.32)"
  } }, /* @__PURE__ */ React.createElement("span", { style: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: "var(--white)",
    border: "2px solid var(--ink)"
  } }), /* @__PURE__ */ React.createElement("span", { className: "mono", style: {
    fontSize: 13.5,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--alice-blue)",
    fontWeight: 700
  } }, t("WFS yard locations", "Sucursales de WFS")))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateRows: "repeat(3, 1fr)", gap: 12 } }, [
    { city: t("Fort Myers \xB7 HQ", "Fort Myers \xB7 Sede"), addr: "2621 Fowler St, FL 33901", phone: "+1 239-689-5496" },
    { city: "Port Charlotte", addr: "1145 Enterprise Dr, FL 33953", phone: "+1 941-623-6890" },
    { city: t("Service area", "\xC1rea de servicio"), addr: t("Serving customers throughout Florida", "Atendemos clientes en toda Florida"), phone: t("Mon-Fri 7:30am-3:30pm \xB7 Sat mornings", "Lun-Vie 7:30am-3:30pm \xB7 S\xE1b por la ma\xF1ana") }
  ].map((y, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "wfs-yard-card", style: {
    border: "1px solid rgba(0,16,17,0.18)",
    padding: "16px 18px",
    background: "var(--white)",
    boxShadow: "0 6px 18px rgba(38,49,102,0.12)",
    display: "flex",
    alignItems: "center",
    gap: 16
  } }, /* @__PURE__ */ React.createElement("div", { className: "mono", style: {
    fontSize: 13.5,
    letterSpacing: "0.22em",
    color: "var(--tangerine)",
    textTransform: "uppercase",
    fontWeight: 700,
    minWidth: 22
  } }, "0", i + 1), /* @__PURE__ */ React.createElement("div", { className: "wfs-yard-body", style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { className: "display", style: {
    fontSize: 18.5,
    lineHeight: 1.1,
    marginBottom: 4
  } }, y.city), /* @__PURE__ */ React.createElement("div", { style: {
    fontSize: 14.5,
    color: "var(--charcoal)",
    lineHeight: 1.4
  } }, y.addr)), /* @__PURE__ */ React.createElement("div", { className: "mono wfs-yard-meta", style: {
    fontSize: 14,
    color: "var(--ink)",
    letterSpacing: "0.06em",
    textAlign: "right",
    fontWeight: 600,
    whiteSpace: "nowrap"
  } }, y.phone)))))));
};
const FinalCTA = () => {
  const t = useT();
  const [submitted, setSubmitted] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [error, setError] = React.useState("");
  const [fileName, setFileName] = React.useState("");
  const busy = React.useRef(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (busy.current) return;
    busy.current = true;
    setSending(true);
    setError("");
    try {
      await submitLead(e.target, { form: "quote", subject: "Material Quote Request" });
      setSubmitted(true);
    } catch (err) {
      setError(err && err.message || t(
        "We couldn't send your request. Please call us at +1 239-689-5496 or email sales@westernfencesupply.com.",
        "No pudimos enviar tu solicitud. Ll\xE1manos al +1 239-689-5496 o escribe a sales@westernfencesupply.com."
      ));
    } finally {
      busy.current = false;
      setSending(false);
    }
  };
  const inputStyle = {
    width: "100%",
    padding: "15px 16px",
    border: "1px solid rgba(0,16,17,0.16)",
    background: "var(--white)",
    fontFamily: "var(--sans)",
    fontSize: 16.5,
    color: "var(--ink)",
    outline: "none",
    borderRadius: 12
  };
  const labelStyle = {
    fontFamily: "var(--mono)",
    fontSize: 14,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "var(--charcoal)",
    fontWeight: 600,
    marginBottom: 8,
    display: "block"
  };
  const formLabelStyle = { ...labelStyle, color: "rgba(255,255,255,0.72)" };
  return /* @__PURE__ */ React.createElement("section", { id: "contact", style: { background: "var(--white)", padding: "120px 0", position: "relative", overflow: "hidden", scrollMarginTop: 110 } }, /* @__PURE__ */ React.createElement("div", { "aria-hidden": true, style: {
    position: "absolute",
    inset: 0,
    backgroundImage: "linear-gradient(rgba(38, 49, 102,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(38, 49, 102,0.04) 1px, transparent 1px)",
    backgroundSize: "56px 56px",
    maskImage: "radial-gradient(circle at 70% 0%, #000 0%, transparent 70%)",
    WebkitMaskImage: "radial-gradient(circle at 70% 0%, #000 0%, transparent 70%)",
    pointerEvents: "none"
  } }), /* @__PURE__ */ React.createElement("div", { className: "container", style: { position: "relative" } }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 48,
    alignItems: "end",
    paddingBottom: 24,
    marginBottom: 40,
    borderBottom: "1px solid rgba(0,16,17,0.12)"
  } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", { className: "display", style: {
    margin: 0,
    fontSize: "clamp(28px, 3vw, 40px)",
    lineHeight: 1,
    letterSpacing: "-0.02em",
    fontWeight: 800
  } }, t("Ready to spec your", "\xBFListo para tu pr\xF3ximo"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--tangerine)" } }, t("next perimeter?", "per\xEDmetro?")))), /* @__PURE__ */ React.createElement("p", { style: {
    margin: 0,
    maxWidth: 360,
    justifySelf: "end",
    fontSize: 15.5,
    lineHeight: 1.55,
    color: "var(--charcoal)",
    textAlign: "right"
  } }, t(
    "Tell us about your project, we'll come back within 24 hours with stock, pricing and lead time.",
    "Cu\xE9ntanos sobre tu proyecto, respondemos en 24 horas con stock, precios y plazo de entrega."
  ))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 48, alignItems: "start" } }, /* @__PURE__ */ React.createElement("div", { style: { paddingTop: 8 } }, [
    {
      name: "Fort Myers",
      chip: t("Yard 1 \xB7 HQ", "Sucursal 1 \xB7 Sede"),
      phone: "+1 239-689-5496",
      tel: "tel:2396895496",
      email: "sales@westernfencesupply.com",
      addr: ["2621 Fowler St", "Fort Myers, FL 33901"],
      hours: t("Mon\u2013Fri 7:30am\u20133:30pm \xB7 Sat 7am\u201312pm", "Lun\u2013Vie 7:30am\u20133:30pm \xB7 S\xE1b 7am\u201312pm")
    },
    {
      name: "Port Charlotte",
      chip: t("Yard 2", "Sucursal 2"),
      phone: "+1 941-623-6890",
      tel: "tel:9416236890",
      email: "salespc@westernfencesupply.com",
      addr: ["1145 Enterprise Dr", "Port Charlotte, FL 33953"],
      hours: t("Mon\u2013Fri 7:30am\u20133:30pm \xB7 Sat 7\u201311:30am", "Lun\u2013Vie 7:30am\u20133:30pm \xB7 S\xE1b 7\u201311:30am")
    }
  ].map((y, i) => /* @__PURE__ */ React.createElement("div", { key: y.name, style: {
    marginBottom: 24,
    paddingBottom: 24,
    borderBottom: i === 0 ? "1px solid rgba(0,16,17,0.12)" : "none"
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 14 } }, /* @__PURE__ */ React.createElement("span", { style: { width: 9, height: 9, borderRadius: "50%", background: "var(--tangerine)", flexShrink: 0 } }), /* @__PURE__ */ React.createElement("span", { className: "display", style: { fontSize: 21, color: "var(--ink)", lineHeight: 1 } }, y.name), /* @__PURE__ */ React.createElement("span", { style: { ...labelStyle, margin: 0, fontSize: 11.5, color: "var(--charcoal)" } }, y.chip)), /* @__PURE__ */ React.createElement("a", { href: y.tel, className: "display", style: { fontSize: 27, color: "var(--ink)", textDecoration: "none", display: "block", lineHeight: 1.15 } }, y.phone), /* @__PURE__ */ React.createElement("a", { href: `mailto:${y.email}`, style: { fontSize: 16.5, color: "var(--ink)", display: "block", marginTop: 4, borderBottom: "1px solid var(--tangerine)", width: "fit-content" } }, y.email), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 15, color: "var(--charcoal)", lineHeight: 1.5, marginTop: 12 } }, y.addr[0], /* @__PURE__ */ React.createElement("br", null), y.addr[1]), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14.5, color: "var(--charcoal)", marginTop: 8 } }, y.hours))), /* @__PURE__ */ React.createElement("div", { style: { paddingTop: 24, borderTop: "1px solid rgba(0,16,17,0.15)" } }, /* @__PURE__ */ React.createElement("div", { className: "mono", style: { fontSize: 14, letterSpacing: "0.16em", color: "var(--ink)", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 10 } }, /* @__PURE__ */ React.createElement("span", { style: { width: 8, height: 8, background: "#ff7133", borderRadius: "50%" } }), t("Get a detailed quote", "Pide tu cotizaci\xF3n")))), /* @__PURE__ */ React.createElement("form", { onSubmit: handleSubmit, style: {
    background: "var(--ink)",
    padding: "clamp(28px, 3vw, 40px)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 22,
    boxShadow: "0 34px 70px -34px rgba(38,49,102,0.55)"
  } }, submitted ? /* @__PURE__ */ React.createElement("div", { style: { padding: "64px 0", textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { className: "mono", style: { fontSize: 14, letterSpacing: "0.18em", color: "var(--tangerine)", marginBottom: 16, textTransform: "uppercase", fontWeight: 700 } }, t("Submitted", "Enviado")), /* @__PURE__ */ React.createElement("h3", { className: "display", style: { fontSize: 33.5, margin: "0 0 12px", lineHeight: 1.1, color: "var(--white)" } }, t("Thanks, we'll be in touch.", "Gracias, pronto te contactamos.")), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 15.5, color: "rgba(255,255,255,0.72)", maxWidth: 360, margin: "0 auto" } }, t("One of our reps will reach out within 24 hours with stock, pricing and lead time for your project.", "Uno de nuestros representantes se comunicar\xE1 en 24 horas con stock, precios y plazo de entrega para tu proyecto."))) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 18 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: formLabelStyle }, t("Full name", "Nombre completo")), /* @__PURE__ */ React.createElement("input", { type: "text", name: "name", required: true, style: inputStyle, placeholder: "Jane Smith" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: formLabelStyle }, t("Company (optional)", "Empresa (opcional)")), /* @__PURE__ */ React.createElement("input", { type: "text", name: "company", style: inputStyle, placeholder: "Acme Fence Co." }))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 18 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: formLabelStyle }, t("Email", "Correo")), /* @__PURE__ */ React.createElement("input", { type: "email", name: "email", required: true, style: inputStyle, placeholder: "jane@email.com" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: formLabelStyle }, t("Phone", "Tel\xE9fono")), /* @__PURE__ */ React.createElement("input", { type: "tel", name: "phone", required: true, style: inputStyle, placeholder: "(239) 555-0142" }))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 18 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: formLabelStyle }, t("I am a", "Soy")), /* @__PURE__ */ React.createElement("select", { name: "audience", style: inputStyle }, /* @__PURE__ */ React.createElement("option", { value: "Homeowner" }, t("Homeowner", "Propietario")), /* @__PURE__ */ React.createElement("option", { value: "DIY / Self-installer" }, t("DIY / Self-installer", "DIY / Auto-instalador")), /* @__PURE__ */ React.createElement("option", { value: "Contractor" }, t("Contractor", "Contratista")), /* @__PURE__ */ React.createElement("option", { value: "Commercial / Builder" }, t("Commercial / Builder", "Comercial / Constructor")))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: formLabelStyle }, t("Project type", "Tipo de proyecto")), /* @__PURE__ */ React.createElement("select", { name: "project_type", style: inputStyle }, /* @__PURE__ */ React.createElement("option", { value: "Vinyl / PVC" }, t("Vinyl / PVC", "Vinilo / PVC")), /* @__PURE__ */ React.createElement("option", { value: "Aluminum" }, t("Aluminum", "Aluminio")), /* @__PURE__ */ React.createElement("option", { value: "Chain Link" }, t("Chain Link", "Malla cicl\xF3nica")), /* @__PURE__ */ React.createElement("option", { value: "Metal / DuraFence" }, "Metal / DuraFence"), /* @__PURE__ */ React.createElement("option", { value: "EC Fence" }, "EC Fence"), /* @__PURE__ */ React.createElement("option", { value: "Gate System" }, t("Gate System", "Sistema de port\xF3n")), /* @__PURE__ */ React.createElement("option", { value: "Other" }, t("Other", "Otro"))))), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 18 } }, /* @__PURE__ */ React.createElement("label", { style: formLabelStyle }, t("How did you hear about us?", "\xBFC\xF3mo te enteraste de nosotros?")), /* @__PURE__ */ React.createElement("select", { name: "source", style: inputStyle }, /* @__PURE__ */ React.createElement("option", { value: "" }, t("Select an option", "Selecciona una opci\xF3n")), /* @__PURE__ */ React.createElement("option", { value: "Google Search" }, t("Google Search", "B\xFAsqueda en Google")), /* @__PURE__ */ React.createElement("option", { value: "AI Assistant" }, t("AI Assistant (ChatGPT, Claude, Gemini, Grok, etc.)", "Asistente de IA (ChatGPT, Claude, Gemini, Grok, etc.)")), /* @__PURE__ */ React.createElement("option", { value: "Facebook" }, "Facebook"), /* @__PURE__ */ React.createElement("option", { value: "Instagram" }, "Instagram"), /* @__PURE__ */ React.createElement("option", { value: "TikTok" }, "TikTok"), /* @__PURE__ */ React.createElement("option", { value: "Yard Signs / Job Site Signs" }, t("Yard Signs / Job Site Signs", "Letreros en obra / en el jard\xEDn")), /* @__PURE__ */ React.createElement("option", { value: "Referral / Word of Mouth" }, t("Referral / Word of Mouth", "Referencia / recomendaci\xF3n")), /* @__PURE__ */ React.createElement("option", { value: "Contractor / Installer Recommendation" }, t("Contractor / Installer Recommendation", "Recomendaci\xF3n de contratista / instalador")), /* @__PURE__ */ React.createElement("option", { value: "Recurring Customer" }, t("Recurring Customer", "Cliente recurrente")), /* @__PURE__ */ React.createElement("option", { value: "Driving By / Walk-In / Store Visit" }, t("Driving By / Walk-In / Store Visit", "Pas\xE9 por ah\xED / visita a la tienda")), /* @__PURE__ */ React.createElement("option", { value: "TV Commercial" }, t("TV Commercial", "Comercial de TV")), /* @__PURE__ */ React.createElement("option", { value: "Other" }, t("Other", "Otro")))), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 18 } }, /* @__PURE__ */ React.createElement("label", { style: formLabelStyle }, t("Project details", "Detalles del proyecto")), /* @__PURE__ */ React.createElement("textarea", { name: "details", rows: 4, style: { ...inputStyle, resize: "vertical", minHeight: 100 }, placeholder: t("Approx. linear feet, height, location/zip, timeline, anything else relevant\u2026", "Aprox. pies lineales, altura, ubicaci\xF3n/c\xF3digo postal, plazo, cualquier otro detalle relevante\u2026") })), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 24 } }, /* @__PURE__ */ React.createElement("label", { style: formLabelStyle }, t("Drawing or layout (optional)", "Plano o dise\xF1o (opcional)")), /* @__PURE__ */ React.createElement("label", { htmlFor: "wfs-upload", style: {
    display: "flex",
    alignItems: "center",
    gap: 14,
    padding: "16px 18px",
    borderRadius: 12,
    border: "1.5px dashed " + (fileName ? "var(--tangerine)" : "rgba(255,255,255,0.3)"),
    background: fileName ? "rgba(255,113,51,0.12)" : "rgba(255,255,255,0.06)",
    cursor: "pointer",
    transition: "border-color 0.15s, background 0.15s"
  } }, /* @__PURE__ */ React.createElement("span", { "aria-hidden": true, style: {
    width: 42,
    height: 42,
    borderRadius: 11,
    flexShrink: 0,
    background: fileName ? "var(--tangerine)" : "rgba(255,255,255,0.16)",
    color: "var(--white)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center"
  } }, /* @__PURE__ */ React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M12 16V4" }), /* @__PURE__ */ React.createElement("path", { d: "M8 8l4-4 4 4" }), /* @__PURE__ */ React.createElement("path", { d: "M4 16v2.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V16" }))), /* @__PURE__ */ React.createElement("span", { style: { minWidth: 0 } }, /* @__PURE__ */ React.createElement("span", { style: { display: "block", fontSize: 16, fontWeight: 600, color: "var(--white)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, fileName || t("Upload your drawing or layout", "Sube tu plano o dise\xF1o")), /* @__PURE__ */ React.createElement("span", { style: { display: "block", fontSize: 14.5, color: "rgba(255,255,255,0.65)", marginTop: 2 } }, fileName ? t("Tap to choose a different file", "Toca para elegir otro archivo") : t("PDF, JPG or PNG \xB7 up to 10 MB", "PDF, JPG o PNG \xB7 hasta 10 MB")))), /* @__PURE__ */ React.createElement(
    "input",
    {
      id: "wfs-upload",
      name: "drawing",
      type: "file",
      accept: ".pdf,.jpg,.jpeg,.png,.heic,.webp",
      onChange: (e) => setFileName(e.target.files && e.target.files[0] ? e.target.files[0].name : ""),
      style: { display: "none" }
    }
  )), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("p", { className: "mono", style: { margin: 0, fontSize: 14, letterSpacing: "0.04em", color: "rgba(255,255,255,0.65)", maxWidth: 280 } }, t("By submitting, you agree to be contacted by Western Fence Supply.", "Al enviar, aceptas ser contactado por Western Fence Supply.")), /* @__PURE__ */ React.createElement("button", { type: "submit", disabled: sending, style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    padding: "16px 28px",
    borderRadius: 999,
    background: "var(--tangerine)",
    color: "var(--white)",
    fontFamily: "var(--sans)",
    fontSize: 16.5,
    fontWeight: 600,
    boxShadow: "0 12px 30px -10px rgba(255,113,51,0.55)",
    opacity: sending ? 0.6 : 1,
    cursor: sending ? "wait" : "pointer"
  } }, sending ? t("Sending\u2026", "Enviando\u2026") : t("Request quote", "Solicitar cotizaci\xF3n"), /* @__PURE__ */ React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M3 8h10m0 0L9 4m4 4l-4 4", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" })))), error && /* @__PURE__ */ React.createElement("p", { role: "alert", style: {
    margin: "18px 0 0",
    padding: "14px 16px",
    borderRadius: 12,
    background: "rgba(255,113,51,0.16)",
    border: "1px solid rgba(255,113,51,0.5)",
    fontSize: 15.5,
    lineHeight: 1.5,
    color: "var(--white)"
  } }, error))))));
};
const Footer = () => {
  const t = useT();
  const cols = [
    { title: { EN: "Products", ES: "Productos" }, items: [
      { label: { EN: "Vinyl / PVC", ES: "Vinilo / PVC" }, href: "vinyl.html" },
      { label: { EN: "Aluminum", ES: "Aluminio" }, href: "aluminum.html" },
      { label: { EN: "Chain Link", ES: "Malla cicl\xF3nica" }, href: "chain-link.html" },
      { label: { EN: "Metal / DuraFence", ES: "Metal / DuraFence" }, href: "metal.html" },
      { label: { EN: "EC Fence", ES: "EC Fence" }, href: "ecfence.html" },
      { label: { EN: "Full catalog", ES: "Cat\xE1logo completo" }, href: "products.html" }
    ] },
    { title: { EN: "Solutions", ES: "Soluciones" }, items: [
      { label: { EN: "For Contractors", ES: "Para contratistas" }, href: "contractors.html" },
      { label: { EN: "For Homeowners", ES: "Para propietarios" }, href: "homeowners.html" },
      { label: { EN: "For HOA", ES: "Para HOA" }, href: "solutions.html" },
      { label: { EN: "Commercial", ES: "Comercial" }, href: "solutions.html" }
    ] },
    { title: { EN: "Resources", ES: "Recursos" }, items: [
      { label: { EN: "FAQ", ES: "Preguntas frecuentes" }, href: "faq.html" },
      { label: { EN: "Materials Comparison", ES: "Comparativa de materiales" }, href: "materials-comparison.html" },
      { label: { EN: "Florida Pool Code", ES: "C\xF3digo de piscinas FL" }, href: "pool-code.html" },
      { label: { EN: "Yard Locations", ES: "Sucursales" }, href: "locations.html" }
    ] },
    { title: { EN: "Company", ES: "Empresa" }, items: [
      { label: { EN: "About WFS", ES: "Sobre WFS" }, href: "about.html" },
      { label: { EN: "Contact", ES: "Contacto" }, href: "contact.html" },
      { label: "sales@westernfencesupply.com", href: "mailto:sales@westernfencesupply.com" }
    ] }
  ];
  return /* @__PURE__ */ React.createElement("footer", { style: { background: "var(--ink)", color: "var(--parchment)", padding: "104px 0 32px" } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", gap: 40, marginBottom: 60 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Logo, { light: true }), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 15.5, color: "var(--alice-blue)", lineHeight: 1.5, marginTop: 20, maxWidth: 320 } }, t(
    "Fencing material supplier for contractors, homeowners and DIY projects. Family-owned, factory-direct, we supply, we don't install.",
    "Proveedor de material de cercado para contratistas, propietarios y proyectos DIY. Empresa familiar, directo de f\xE1brica, suministramos, no instalamos."
  ))), cols.map((col, ci) => /* @__PURE__ */ React.createElement("div", { key: ci }, /* @__PURE__ */ React.createElement("div", { className: "mono", style: { fontSize: 14, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--tangerine)", marginBottom: 16 } }, t(col.title)), /* @__PURE__ */ React.createElement("ul", { style: { listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 } }, col.items.map((it, i) => /* @__PURE__ */ React.createElement("li", { key: i }, /* @__PURE__ */ React.createElement("a", { href: it.href, style: { fontSize: 15.5, color: "var(--alice-blue)" } }, typeof it.label === "string" ? it.label : t(it.label)))))))), /* @__PURE__ */ React.createElement("div", { style: { borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16 } }, /* @__PURE__ */ React.createElement("div", { className: "mono", style: { fontSize: 14, letterSpacing: "0.14em", color: "var(--silver)" } }, "\xA9 2026 Western Fence Supply \xB7 Fort Myers, FL \xB7 Port Charlotte, FL"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 24 } }, [
    { label: { EN: "Privacy", ES: "Privacidad" } },
    { label: { EN: "Terms", ES: "T\xE9rminos" } },
    { label: { EN: "Accessibility", ES: "Accesibilidad" } },
    { label: "sales@westernfencesupply.com" }
  ].map((item, i) => /* @__PURE__ */ React.createElement("a", { key: i, href: "#", style: { fontSize: 14.5, fontFamily: "var(--mono)", letterSpacing: "0.1em", color: "var(--silver)" } }, typeof item.label === "string" ? item.label : t(item.label)))))));
};
Object.assign(window, { FeaturedGrid, InstallerMarquee, ProductMarquee, ProjectGallery, Calculator, ServiceAreas, FinalCTA, Footer });
