#!/usr/bin/env python3
"""
Generates the Western Fence Supply Elementor template kit.

Emits Elementor "saved template" JSON (schema version 0.4) built from flex
containers + core widgets only, so it imports into the FREE Elementor plugin.
Images/videos are referenced by absolute URL against the live preview, so
there is nothing to upload to the media library.

    python3 build.py           # writes templates/*.json
"""
import json, os, itertools

BASE = "https://crpozo.github.io/wfs-design-preview"
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "templates")

# ── Brand tokens ──────────────────────────────────────────────────────────
INK       = "#263167"   # navy
TANGERINE = "#ff7133"
CHARCOAL  = "#565656"
WHITE     = "#ffffff"
CANVAS    = "#f5f5f7"
LINE      = "rgba(38,49,102,0.08)"
DISPLAY   = "Archivo"   # headings
BODY      = "Inter"     # copy
CARD_SHADOW = {
    "box_shadow_box_shadow_type": "yes",
    "box_shadow_box_shadow": {"horizontal": 0, "vertical": 18, "blur": 40,
                              "spread": -22, "color": "rgba(38,49,102,0.34)"},
}

_ids = itertools.count(1)
def _id():
    return "w%06x" % next(_ids)

def px(n):  return {"unit": "px", "size": n}
def box(t, r, b, l, unit="px"):
    return {"unit": unit, "top": str(t), "right": str(r),
            "bottom": str(b), "left": str(l), "isLinked": False}

def typo(size, weight="400", spacing=None, transform=None, family=BODY,
         lh=None, prefix="typography"):
    s = {f"{prefix}_typography": "custom",
         f"{prefix}_font_family": family,
         f"{prefix}_font_size": px(size),
         f"{prefix}_font_weight": weight}
    if spacing  is not None: s[f"{prefix}_letter_spacing"] = {"unit": "em", "size": spacing}
    if transform:           s[f"{prefix}_text_transform"] = transform
    if lh is not None:      s[f"{prefix}_line_height"] = {"unit": "em", "size": lh}
    return s

# ── Element builders ──────────────────────────────────────────────────────
def container(children, **s):
    base = {"content_width": "boxed", "flex_direction": "column"}
    base.update(s)
    return {"id": _id(), "elType": "container", "settings": base,
            "elements": children, "isInner": False}

def row(children, gap=24, align="stretch", justify="flex-start", wrap="wrap", **s):
    return container(children, flex_direction="row", flex_align_items=align,
                     flex_justify_content=justify, flex_wrap=wrap,
                     flex_gap={"unit": "px", "size": gap, "column": str(gap),
                               "row": str(gap), "isLinked": True}, **s)

def col(children, width=None, **s):
    st = {}
    if width: st["width"] = {"unit": "%", "size": width}
    st.update(s)
    return container(children, **st)

def widget(kind, settings):
    return {"id": _id(), "elType": "widget", "settings": settings,
            "elements": [], "widgetType": kind}

def heading(text, size=40, color=INK, tag="h2", align="left", family=DISPLAY,
            weight="700", lh=1.05, spacing=-0.02, **extra):
    s = {"title": text, "header_size": tag, "align": align, "title_color": color}
    s.update(typo(size, weight, spacing, None, family, lh))
    s.update(extra)
    return widget("heading", s)

def eyebrow(text, color=TANGERINE, align="left"):
    s = {"title": text, "header_size": "div", "align": align, "title_color": color}
    s.update(typo(13.5, "700", 0.18, "uppercase", BODY))
    return widget("heading", s)

def text(html, size=17, color=CHARCOAL, align="left", lh=1.6, maxw=None):
    s = {"editor": f"<p>{html}</p>", "align": align, "text_color": color}
    s.update(typo(size, "400", None, None, BODY, lh))
    if maxw: s["_element_custom_width"] = px(maxw)
    return widget("text-editor", s)

def pill(label, link, dark=False):
    """The site's pill CTA: ink pill / white on dark sections."""
    s = {
        "text": label, "link": {"url": link, "is_external": "", "nofollow": ""},
        "align": "left", "size": "md",
        "background_color": WHITE if dark else INK,
        "button_text_color": INK if dark else WHITE,
        "border_radius": {"unit": "px", "top": "999", "right": "999",
                          "bottom": "999", "left": "999", "isLinked": True},
        "text_padding": box(16, 28, 16, 28),
        "hover_color": WHITE, "button_background_hover_color": TANGERINE,
    }
    s.update(typo(14.5, "700", 0.18, "uppercase", BODY, prefix="typography"))
    return widget("button", s)

def image(url, alt="", radius=18, width=None, ratio=None, **extra):
    s = {"image": {"url": url, "id": "", "size": "", "alt": alt, "source": "url"},
         "image_size": "full", "object-fit": "cover",
         "image_border_radius": {"unit": "px", "top": str(radius), "right": str(radius),
                                 "bottom": str(radius), "left": str(radius), "isLinked": True}}
    if width: s["width"] = {"unit": "%", "size": width}
    s.update(extra)
    return widget("image", s)

def video(url, poster=None):
    s = {"video_type": "hosted", "hosted_url": {"url": url, "source": "url"},
         "autoplay": "yes", "loop": "yes", "mute": "yes", "controls": "",
         "play_on_mobile": "yes",
         "css_filters_css_filter": "custom"}
    if poster:
        s["image_overlay"] = {"url": poster, "id": "", "source": "url"}
    return widget("video", s)

def spacer(h=40):
    return widget("spacer", {"space": px(h)})

def divider(color=LINE):
    return widget("divider", {"color": color, "weight": px(1), "gap": px(18)})

def html_block(markup):
    return widget("html", {"html": markup})

def shortcode(code):
    return widget("shortcode", {"shortcode": code})

# ── Section helpers ───────────────────────────────────────────────────────
def section(children, bg=WHITE, pad_y=110, **s):
    st = {"background_background": "classic", "background_color": bg,
          "padding": box(pad_y, 24, pad_y, 24),
          "padding_mobile": box(56, 20, 56, 20)}
    st.update(s)
    return container([container(children, content_width="boxed",
                                boxed_width=px(1360))], **st)

def card(children, bg=WHITE, pad=30, radius=18, shadow=True):
    s = {"background_background": "classic", "background_color": bg,
         "padding": box(pad, pad, pad, pad),
         "border_radius": {"unit": "px", "top": str(radius), "right": str(radius),
                           "bottom": str(radius), "left": str(radius), "isLinked": True},
         "border_border": "solid", "border_width": box(1, 1, 1, 1), "border_color": LINE}
    if shadow: s.update(CARD_SHADOW)
    return container(children, **s)

def feature_card(title, body, width=25):
    return col([heading(title, 21, INK, "h3", lh=1.15, spacing=-0.01),
                text(body, 16)], width=width,
               background_background="classic", background_color=WHITE,
               padding=box(28, 26, 30, 26),
               border_radius={"unit": "px", "top": "18", "right": "18",
                              "bottom": "18", "left": "18", "isLinked": True},
               border_border="solid", border_width=box(1, 1, 1, 1),
               border_color=LINE, **CARD_SHADOW)

def photo_card(img, title, sub, href, width=20):
    return col([image(img, title, radius=18),
                heading(title, 20, INK, "h3", lh=1.15),
                text(sub, 15),
                widget("button", {"text": "Explore", "link": {"url": href},
                                  "button_type": "", "size": "sm",
                                  "background_color": "transparent",
                                  "button_text_color": TANGERINE,
                                  **typo(13.5, "700", 0.18, "uppercase", BODY)})],
               width=width, flex_gap={"unit": "px", "size": 10, "isLinked": True})

def tpl(title, content, kind="page"):
    return {"content": content, "page_settings": {}, "version": "0.4",
            "title": title, "type": kind}

def write(name, data):
    os.makedirs(OUT, exist_ok=True)
    with open(os.path.join(OUT, name), "w") as f:
        json.dump(data, f, ensure_ascii=False)
    kb = os.path.getsize(os.path.join(OUT, name)) // 1024
    print(f"  {name:<34} {kb:>5} KB")

# ── Shared content ────────────────────────────────────────────────────────
MATERIALS = [
    ("Vinyl / PVC",       "Catalyst-extruded PVC",   f"{BASE}/assets/PVC.png",       "/vinyl"),
    ("Aluminum",          "Powder-coated 6063-T6",   f"{BASE}/assets/ALUM.png",      "/aluminum"),
    ("Chain Link",        "Galvanized + vinyl-coated",f"{BASE}/assets/CHAINLINK.png","/chain-link"),
    ("Metal / DuraFence", "Aluminum board privacy",  f"{BASE}/assets/MET.png",       "/metal"),
    ("EC Fence",          "Self-mating galv. steel", f"{BASE}/assets/ECFENCE.png",   "/ec-fence"),
]

NAV = [("Fences", "/products"), ("Gates", "/products#gates"),
       ("Get a Quote", "/estimate"), ("Company", "/about"),
       ("Fence Education Hub", "/resources")]

# ══ 00 · HEADER ═══════════════════════════════════════════════════════════
def header():
    utility = container([row([
        text("HOMEOWNER  ·  CONTRACTOR", 13, "rgba(219,233,238,0.75)"),
        row([text("TALK TO A LIVE AGENT", 13, WHITE),
             text("(239) 689-5496", 13, WHITE)], gap=22, align="center"),
    ], gap=16, align="center", justify="space-between")],
        background_background="classic", background_color=INK,
        padding=box(10, 48, 10, 48))

    bar = container([row([
        image(f"{BASE}/assets/wfs-logo.svg", "Western Fence Supply", radius=0, width=14),
        row([text(f'<a href="{h}">{n}</a>', 16, INK) for n, h in NAV],
            gap=26, align="center"),
        pill("Request Material Quote", "/estimate"),
    ], gap=20, align="center", justify="space-between")],
        background_background="classic", background_color=WHITE,
        padding=box(16, 48, 16, 48),
        border_border="solid", border_width=box(0, 0, 1, 0), border_color=LINE)

    return tpl("WFS — Header", [utility, bar], "section")

# ══ 01 · FOOTER ═══════════════════════════════════════════════════════════
def footer():
    def fcol(title, items):
        return col([heading(title, 14, WHITE, "h4", family=BODY, weight="700",
                            spacing=0.18, lh=1.4)] +
                   [text(f'<a href="{h}" style="color:rgba(219,233,238,0.8)">{n}</a>', 15,
                         "rgba(219,233,238,0.8)") for n, h in items], width=22)

    cols = row([
        fcol("Products", [("Vinyl / PVC", "/vinyl"), ("Aluminum", "/aluminum"),
                          ("Chain Link", "/chain-link"), ("Metal / DuraFence", "/metal"),
                          ("EC Fence", "/ec-fence")]),
        fcol("Solutions", [("For Contractors", "/contractors"), ("For Homeowners", "/homeowners"),
                           ("HOA & Commercial", "/solutions")]),
        fcol("Resources", [("FAQ", "/faq"), ("Materials Comparison", "/materials-comparison"),
                           ("Florida Pool Code", "/pool-code"), ("Yard Locations", "/locations")]),
        fcol("Company", [("About", "/about"), ("Contact", "/contact"),
                         ("Get a Quote", "/estimate")]),
    ], gap=32, justify="space-between")

    contact = row([
        text("Fort Myers · 2621 Fowler St · (239) 689-5496", 15, "rgba(219,233,238,0.8)"),
        text("Port Charlotte · 1145 Enterprise Dr · (941) 391-6613", 15, "rgba(219,233,238,0.8)"),
        text("sales@westernfencesupply.com", 15, "rgba(219,233,238,0.8)"),
    ], gap=28, justify="space-between")

    return tpl("WFS — Footer", [section(
        [heading("Western Fence Supply", 30, WHITE, "h3"),
         spacer(14), cols, spacer(24), divider("rgba(255,255,255,0.15)"),
         contact,
         text("© Western Fence Supply · Fort Myers + Port Charlotte, FL", 14,
              "rgba(219,233,238,0.55)")],
        bg=INK, pad_y=76)], "section")

# ══ 10 · HOME ═════════════════════════════════════════════════════════════
def home():
    hero = container([container([
        eyebrow("FACTORY DIRECT FENCE SUPPLY · FORT MYERS + PORT CHARLOTTE, FL", WHITE),
        heading("The Best Place to Buy Fence in Southwest Florida", 56, WHITE, "h1",
                lh=1.02, spacing=-0.02, title_color=WHITE),
        text("We're a one stop fence supply shop selling superior fences and gates at wholesale prices.",
             18, "rgba(255,255,255,0.88)", maxw=520),
        spacer(10),
        row([pill("I'm a Homeowner", "/homeowners"),
             pill("I'm a Contractor", "/contractors", dark=True)], gap=14),
    ], content_width="boxed", boxed_width=px(1360))],
        background_background="classic",
        background_image={"url": f"{BASE}/assets/second-video-poster.jpg", "source": "url"},
        background_position="center center", background_size="cover",
        background_overlay_background="classic",
        background_overlay_color="rgba(38,49,103,0.72)",
        padding=box(150, 24, 150, 24), padding_mobile=box(80, 20, 80, 20))

    about = section([row([
        col([video(f"{BASE}/assets/first-video.mp4", f"{BASE}/assets/first-video-poster.jpg")],
            width=52),
        col([heading("#1 Southwest Florida Fence Supply", 38, INK, "h2"),
             text("Western Fence Supply is Southwest Florida's best source for high-quality vinyl, "
                  "aluminum, chain-link and metal fence materials. We proudly serve fence contractors "
                  "and homeowners throughout Florida."),
             text("Our goal is to sell superior quality fence products at wholesale prices, with the "
                  "highest attention to detail and the best customer service in our industry."),
             spacer(8),
             row([col([heading("20+", 30, INK, "h3"), text("YEARS FABRICATING", 14)], width=45),
                  col([heading("2", 30, INK, "h3"), text("YARDS · FM + PC", 14)], width=45)], gap=20),
             spacer(8), pill("Start Your Fence Project", "/estimate")], width=44),
    ], gap=48, align="center")])

    why = section([
        eyebrow("WHY WESTERN FENCE SUPPLY"),
        heading("Built by fencers. Priced like a supplier.", 46, INK, "h2"),
        text("We were the contractors before we were the supplier, so the yard runs on installer "
             "logic, not catalog markup.", maxw=560),
        spacer(26),
        row([feature_card("Manufacturing-Direct",
                          "Supplier-direct floor pricing, no middleman markup between the plant and your project."),
             feature_card("No Minimums",
                          "Order a single panel or a full subdivision, the same supplier-direct floor either way."),
             feature_card("Free Takeoff · 24h Quotes",
                          "Send measurements and get itemized pricing back within 24 hours."),
             feature_card("In-House Fabrication",
                          "Gates and custom work built in our Fort Myers shop.")], gap=18),
        spacer(26), pill("Get Started", "/estimate"),
    ], bg=CANVAS)

    systems = section([
        eyebrow("BY MATERIAL"),
        heading("Four systems, one yard.", 44, INK, "h2"),
        text("Supplier-direct pricing for contractors, homeowners and DIY projects across SW Florida.",
             maxw=520),
        spacer(26),
        row([photo_card(img, name, tag, href) for name, tag, img, href in MATERIALS], gap=16),
    ])

    cta = section([
        heading("Ready to spec your next perimeter?", 40, WHITE, "h2"),
        text("Tell us about your project — we'll come back within 24 hours with stock, pricing and lead time.",
             18, "rgba(219,233,238,0.85)", maxw=620),
        spacer(16), pill("Request a Quote", "/estimate", dark=True),
    ], bg=INK, pad_y=96)

    return tpl("WFS — Home", [hero, about, why, systems, cta])

# ══ 11 · CONTRACTORS ══════════════════════════════════════════════════════
def contractors():
    hero = container([container([
        eyebrow("WHOLESALE PARTNER PROGRAM · FLORIDA", TANGERINE),
        heading("Build with the manufacturer.", 54, WHITE, "h1", lh=1.02),
        text("Partner with Southwest Florida's leading fence manufacturer. Wholesale pricing tiers, "
             "priority fabrication and job-site delivery — without an out-of-state distributor in the middle.",
             18, "rgba(255,255,255,0.88)", maxw=560),
        spacer(10),
        row([pill("Get a Quick Quote", "/estimate"),
             pill("Become a WFS Partner",
                  "https://form.jotform.com/westernfencesupply/account-setup-form", dark=True)], gap=14),
    ], content_width="boxed", boxed_width=px(1360))],
        background_background="classic",
        background_image={"url": f"{BASE}/assets/hero-warehouse.webp", "source": "url"},
        background_position="center center", background_size="cover",
        background_overlay_background="classic",
        background_overlay_color="rgba(38,49,103,0.75)",
        padding=box(140, 24, 140, 24))

    perks = section([
        eyebrow("WHAT CONTRACTORS GET"),
        spacer(18),
        row([feature_card("Wholesale Pricing", "Manufacturer-direct tiers that scale with your volume.", 31),
             feature_card("Priority Fabrication", "Your gates jump the line, built in our shop, not shipped in.", 31),
             feature_card("Job-Site Delivery", "Delivery to your job site on our own trucks across Florida.", 31)], gap=18),
    ], bg=CANVAS)

    return tpl("WFS — Contractors", [hero, perks])

# ══ 12 · HOMEOWNERS ═══════════════════════════════════════════════════════
def homeowners():
    hero = container([container([
        eyebrow("HOMEOWNER · BUILT FOR RESIDENTIAL", TANGERINE),
        heading("Fence solutions for your home.", 54, WHITE, "h1", lh=1.02),
        text("Premium manufacturing-direct fencing. We help you plan the project and quote the material for the build.",
             18, "rgba(255,255,255,0.88)", maxw=520),
        spacer(10), pill("Get Started", "/estimate"),
    ], content_width="boxed", boxed_width=px(1360))],
        background_background="classic",
        background_image={"url": f"{BASE}/assets/PVC.png", "source": "url"},
        background_position="center center", background_size="cover",
        background_overlay_background="classic",
        background_overlay_color="rgba(38,49,103,0.72)",
        padding=box(140, 24, 140, 24))

    paths = section([
        eyebrow("TWO WAYS TO START", TANGERINE, "center"),
        heading("What brings you in today?", 42, INK, "h2", align="center"),
        text("Pick your path — a quick repair or a full new fence. Either way you buy direct, and since "
             "we don't install, there's no installer markup.", align="center", maxw=560),
        spacer(28),
        row([
            col([heading("I want to repair my fence", 26, INK, "h3"),
                 text("Buy exactly what you need, piece by piece — from a single picket to a full rail, "
                      "post, cap or bracket. No minimums, supplier-direct pricing."),
                 spacer(8), pill("Shop Repair Parts", "/products")],
                width=48, background_background="classic", background_color=WHITE,
                padding=box(36, 36, 36, 36),
                border_radius={"unit": "px", "top": "20", "right": "20", "bottom": "20",
                               "left": "20", "isLinked": True},
                border_border="solid", border_width=box(1, 1, 1, 1), border_color=LINE, **CARD_SHADOW),
            col([heading("New project · new fence installation", 26, INK, "h3"),
                 text("We give you everything you need to build it yourself — complete DIY fence kits cut "
                      "to your layout. And because we don't install fences, you get true wholesale, "
                      "supplier-direct pricing."),
                 spacer(8), pill("Start My Project", "/estimate")],
                width=48, background_background="classic", background_color=WHITE,
                padding=box(36, 36, 36, 36),
                border_radius={"unit": "px", "top": "20", "right": "20", "bottom": "20",
                               "left": "20", "isLinked": True},
                border_border="solid", border_width=box(1, 1, 1, 1),
                border_color="rgba(255,113,51,0.45)", **CARD_SHADOW),
        ], gap=24),
    ], bg=CANVAS)

    return tpl("WFS — Homeowners", [hero, paths])

# ══ 13 · PRODUCTS ═════════════════════════════════════════════════════════
def products():
    head = section([
        eyebrow("FULL CATALOG"),
        heading("Every system we stock.", 46, INK, "h2"),
        text("Vinyl, aluminum, chain link, metal and EC Fence — plus gates, posts, rails and hardware.",
             maxw=560),
        spacer(26),
        row([photo_card(img, name, tag, href) for name, tag, img, href in MATERIALS], gap=16),
    ])
    gates = section([
        eyebrow("GATES", TANGERINE),
        heading("Welded in-house.", 44, INK, "h2"),
        text("Sized to fit your run. Quoted in 24h, delivered or shop-pickup.", maxw=520),
        spacer(24),
        row([photo_card(f"{BASE}/assets/SINGLE_SWING_GATE.png", "Single Swing", "Walk gates", "/gate-single", 23),
             photo_card(f"{BASE}/assets/DOUBLE_GATE.png", "Double Swing", "Driveways", "/gate-double", 23),
             photo_card(f"{BASE}/assets/SLIDING_GATE.png", "Sliding", "Wide openings", "/gate-sliding", 23),
             photo_card(f"{BASE}/assets/CANTILEVER.png", "Cantilever", "No ground track", "/gate-cantilever", 23)],
            gap=16),
    ], bg=CANVAS)
    return tpl("WFS — Products", [head, gates], )

# ══ 14 · MATERIALS COMPARISON ═════════════════════════════════════════════
def comparison():
    """Rendered as an HTML widget: a real table stays editable as markup and
       keeps the column layout intact on every screen."""
    cols = ["Vinyl / PVC", "Aluminum", "Chain Link", "Metal / DuraFence"]
    imgs = [f"{BASE}/assets/PVC.png", f"{BASE}/assets/ALUM.png",
            f"{BASE}/assets/CHAINLINK.png", f"{BASE}/assets/MET.png"]
    rows = [
        ("Best for", ["Privacy", "Pool + ornamental", "Security + perimeter", "Modern privacy + screens"]),
        ("Heights", ["4'-6' common", "4'-6' common", "4'-6' common, taller by request", "6' and 8'"]),
        ("Maintenance", ["Occasional rinse", "Low; varies by finish and exposure",
                         "Low; varies by coating", "Low; varies by finish and exposure"]),
        ("Wind &amp; code", ["Depends on product and installation", "Pool-code compliant options",
                             "Depends on product and installation", "Depends on product and installation"]),
        ("Warranty", ["Manufacturer warranty; varies by product"] * 4),
        ("Lead time", ["Stocked: ready now · custom varies"] * 4),
        ("Starts at", ["Quote-based"] * 4),
    ]
    th = "".join(
        f'<th style="padding:0;vertical-align:bottom;border-left:1px solid rgba(255,255,255,.1)">'
        f'<div style="position:relative;height:180px;overflow:hidden">'
        f'<img src="{im}" alt="{c}" style="width:100%;height:100%;object-fit:cover;display:block">'
        f'<span style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(38,49,103,.1) 35%,rgba(38,49,103,.92) 100%)"></span>'
        f'<span style="position:absolute;left:16px;bottom:14px;color:#fff;font:700 13.5px/1.2 Inter,sans-serif;'
        f'letter-spacing:.1em;text-transform:uppercase">{c}</span></div></th>'
        for c, im in zip(cols, imgs))
    trs = "".join(
        '<tr style="border-top:1px solid rgba(0,16,17,.06);background:%s">' % ("#fff" if i % 2 == 0 else "#f7f8fa") +
        f'<td style="padding:18px 20px;font:700 15px/1.5 Inter,sans-serif;letter-spacing:.08em;'
        f'text-transform:uppercase;color:{CHARCOAL}">{label}</td>' +
        "".join(f'<td style="padding:18px 20px;font:400 15px/1.5 Inter,sans-serif;color:{INK};'
                f'border-left:1px solid rgba(0,16,17,.06)">{v}</td>' for v in vals) + "</tr>"
        for i, (label, vals) in enumerate(rows))

    table = (
        '<div style="border-radius:18px;overflow:hidden;border:1px solid rgba(0,16,17,.08);'
        'box-shadow:0 34px 70px -36px rgba(0,16,17,.28);background:#fff">'
        '<table style="width:100%;border-collapse:collapse;table-layout:fixed">'
        f'<thead><tr style="background:{INK};color:#fff">'
        f'<th style="padding:24px 22px;text-align:left;vertical-align:bottom">'
        f'<div style="font:700 12.5px/1.4 Inter,sans-serif;letter-spacing:.22em;text-transform:uppercase;'
        f'color:rgba(219,233,238,.55)">At a glance</div>'
        f'<div style="font:700 26px/1.05 Archivo,sans-serif;margin-top:10px">Pick your material</div></th>'
        f'{th}</tr></thead><tbody>{trs}</tbody></table></div>'
        '<style>@media(max-width:900px){table{display:block;overflow-x:auto;white-space:nowrap}}</style>')

    return tpl("WFS — Materials Comparison", [section([
        eyebrow("MATERIALS COMPARISON"),
        heading("Side by side, no marketing fluff.", 44, INK, "h2"),
        text("Pick the one that matches your job. Click through to the material page for full specs.",
             maxw=620),
        spacer(24), html_block(table),
        spacer(14),
        text("Specs shown are general guidance. Wind ratings, warranties, availability and performance "
             "depend on the specific product, configuration and project — we confirm exact numbers on your quote.",
             14),
    ])])

# ══ 15 · POOL CODE ════════════════════════════════════════════════════════
def poolcode():
    reqs = [
        ("Requirement 01", "Minimum height", "01-min-height",
         'The barrier must be at least 48" high, measured on the side facing away from the pool.'),
        ("Requirement 02", "Openings & picket spacing", "02-openings",
         'Openings generally must not allow a 4" sphere to pass through.'),
        ("Requirement 03", "Self-closing & self-latching gates", "03-self-closing",
         "Pool access gates must be self-closing and self-latching."),
        ("Requirement 04", "Gate swing direction", "04-swing",
         "Pedestrian access gates must open outward, away from the pool."),
        ("Requirement 05", "Latch release location", "05-latch",
         "Latch placement depends on the gate configuration and must meet applicable requirements."),
        ("Requirement 06", "Dwelling wall as part of the barrier", "06-dwelling",
         "Doors and windows providing direct access to the pool area may require approved safety features."),
    ]
    cards = [col([eyebrow(code.upper()),
                  heading(title, 23, INK, "h3", lh=1.12),
                  image(f"{BASE}/assets/poolcode/{slug}.png", title, radius=0,
                        **{"object-fit": "contain"}),
                  text(body, 15)],
                 width=31, background_background="classic", background_color=WHITE,
                 padding=box(30, 30, 30, 30),
                 border_radius={"unit": "px", "top": "18", "right": "18", "bottom": "18",
                                "left": "18", "isLinked": True},
                 border_border="solid", border_width=box(1, 1, 1, 1), border_color=LINE,
                 **CARD_SHADOW)
             for code, title, slug, body in reqs]

    return tpl("WFS — Florida Pool Code", [section([
        eyebrow("THE ACTUAL RULES"),
        heading("What the pool code generally covers.", 44, INK, "h2"),
        text("General information only. Requirements may vary by project and jurisdiction. Western Fence "
             "Supply does not verify code compliance, permits, installation or final approval.", maxw=700),
        spacer(26), row(cards, gap=20),
        spacer(14),
        text("Based on general Florida residential pool barrier requirements. Code editions, local "
             "amendments and project requirements may change.", 14),
    ])])

# ══ 16 · ESTIMATE / QUOTE ═════════════════════════════════════════════════
def estimate():
    info = col([
        eyebrow("CALL US"),
        heading("(239) 689-5496", 29, INK, "h3", family=DISPLAY),
        text("Fort Myers yard", 15),
        heading("(941) 391-6613", 29, INK, "h3", family=DISPLAY),
        text("Port Charlotte yard", 15),
        text("Mon-Fri 7am-4pm · Sat 7am-12pm", 15),
        spacer(10), eyebrow("EMAIL"),
        text('<a href="mailto:sales@westernfencesupply.com">sales@westernfencesupply.com</a>', 17, INK),
        spacer(10), eyebrow("VISIT"),
        text("2621 Fowler St<br>Fort Myers, FL 33901", 16, INK),
        text("1145 Enterprise Dr<br>Port Charlotte, FL 33953", 16, INK),
    ], width=36)

    form = col([card([
        heading("Request a quote", 26, INK, "h3"),
        text("Tell us about your project — stock, pricing and lead time back within 24 hours.", 16),
        spacer(8),
        shortcode('[contact-form-7 id="TODO" title="WFS Quote"]'),
    ], pad=36, radius=22)], width=60)

    return tpl("WFS — Get a Quote", [section([
        eyebrow("GET A QUOTE"),
        heading("Ready to spec your next perimeter?", 42, INK, "h2"),
        spacer(24), row([info, form], gap=48, align="flex-start"),
    ])])

# ══ 17 · ABOUT ════════════════════════════════════════════════════════════
def about():
    return tpl("WFS — About", [
        section([
            eyebrow("ABOUT WESTERN FENCE SUPPLY"),
            heading("From the yard to SW Florida's supply hub.", 46, INK, "h2"),
            text("A family-run Southwest Florida fence supplier, led by management with two decades of "
                 "fencing installation and fabrication experience. Two yards in Fort Myers and Port "
                 "Charlotte, serving customers throughout Florida.", maxw=680),
            spacer(20), image(f"{BASE}/assets/hero-warehouse.webp", "WFS yard"),
        ]),
        section([
            row([col([heading("20+", 40, INK, "h3"), text("YEARS FABRICATING", 14)], width=22),
                 col([heading("2", 40, INK, "h3"), text("YARDS · FM + PC", 14)], width=22),
                 col([heading("5", 40, INK, "h3"), text("MATERIAL SYSTEMS", 14)], width=22),
                 col([heading("FL", 40, INK, "h3"), text("STATEWIDE DELIVERY", 14)], width=22)],
                gap=20, justify="space-between"),
        ], bg=CANVAS, pad_y=70),
        section([
            heading("Real lead-time honesty", 34, INK, "h2"),
            text("Stocked items ship in 1–3 days. Custom orders can be completed in as little as 2 days, "
                 "depending on the request. We tell you the truth on the first call, no soft dates.",
                 maxw=680),
            spacer(16), pill("Talk to Our Team", "/estimate"),
        ]),
    ])

# ══ 18 · LOCATIONS ════════════════════════════════════════════════════════
def locations():
    def yard(name, addr, phone, mail, mapq):
        return col([
            html_block(f'<iframe title="{name}" loading="lazy" style="width:100%;height:260px;border:0;'
                       f'border-radius:18px" src="https://maps.google.com/maps?q={mapq}&z=14&output=embed"></iframe>'),
            heading(name, 26, INK, "h3"),
            text(addr, 16, INK),
            text(f'<a href="tel:{phone.replace("(","").replace(")","").replace(" ","").replace("-","")}">{phone}</a>', 16, INK),
            text(f'<a href="mailto:{mail}">{mail}</a>', 15),
        ], width=48, background_background="classic", background_color=WHITE,
           padding=box(24, 24, 28, 24),
           border_radius={"unit": "px", "top": "18", "right": "18", "bottom": "18",
                          "left": "18", "isLinked": True},
           border_border="solid", border_width=box(1, 1, 1, 1), border_color=LINE, **CARD_SHADOW)

    return tpl("WFS — Yard Locations", [section([
        eyebrow("YARD LOCATIONS"),
        heading("Two yards. One supplier.", 44, INK, "h2"),
        text("Pick up your order, see material in person, or have it delivered — everything ships from "
             "our Fort Myers and Port Charlotte yards. Mon-Fri 7am-4pm · Sat 7am-12pm.", maxw=640),
        spacer(26),
        row([yard("Fort Myers · HQ", "2621 Fowler St, Fort Myers, FL 33901", "(239) 689-5496",
                  "westernfencesupply@gmail.com", "2621+Fowler+St+Fort+Myers+FL+33901"),
             yard("Port Charlotte", "1145 Enterprise Dr, Port Charlotte, FL 33953", "(941) 391-6613",
                  "westernfencesupplypc@gmail.com", "1145+Enterprise+Dr+Port+Charlotte+FL+33953")],
            gap=24),
    ])])

# ── Run ───────────────────────────────────────────────────────────────────
if __name__ == "__main__":
    print("Generating Elementor templates →", OUT)
    for name, fn in [
        ("00-header.json", header), ("01-footer.json", footer),
        ("10-home.json", home), ("11-contractors.json", contractors),
        ("12-homeowners.json", homeowners), ("13-products.json", products),
        ("14-materials-comparison.json", comparison), ("15-pool-code.json", poolcode),
        ("16-estimate.json", estimate), ("17-about.json", about),
        ("18-locations.json", locations),
    ]:
        write(name, fn())
    print("done.")
