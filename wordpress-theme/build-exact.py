#!/usr/bin/env python3
"""Genera el tema de WordPress 'wfs-exact' a partir del sitio real.

No reinterpreta el diseño: copia los componentes y el CSS tal cual, y hace que
WordPress los sirva. Por construccion el resultado es identico al preview.
"""
import re, shutil, pathlib, json, html

SRC   = pathlib.Path(__file__).resolve().parent.parent
OUT   = SRC / "wordpress-theme" / "wfs-exact"
ASSET_BASE = "https://crpozo.github.io/wfs-design-preview/assets"

SKIP = {"index.html"}

# ---------------------------------------------------------------- limpiar
if OUT.exists():
    shutil.rmtree(OUT)
(OUT / "apps").mkdir(parents=True)
(OUT / "components").mkdir()
(OUT / "css").mkdir()

# ---------------------------------------------------------------- componentes
for jsx in sorted((SRC / "components").glob("*.jsx")):
    txt = jsx.read_text()
    # 'assets/foo.png'  ->  'https://.../assets/foo.png'
    txt = re.sub(r"(['\"])assets/", r"\1" + ASSET_BASE + "/", txt)
    (OUT / "components" / jsx.name).write_text(txt)

# ---------------------------------------------------------------- css
css = (SRC / "styles.css").read_text()
css = re.sub(r"url\((['\"]?)assets/", r"url(\1" + ASSET_BASE + "/", css)
(OUT / "css" / "styles.css").write_text(css)

# ---------------------------------------------------------------- paginas
RE_TITLE = re.compile(r"<title>(.*?)</title>", re.S)
RE_COMP  = re.compile(r'<script type="text/babel" src="components/([^"?]+)')
RE_APP   = re.compile(r'<script type="text/babel">(.*?)</script>', re.S)

pages = {}
for f in sorted(SRC.glob("*.html")):
    if f.name in SKIP:
        continue
    raw   = f.read_text()
    slug  = "homepage" if f.name == "Homepage.html" else f.stem.lower()
    title = RE_TITLE.search(raw).group(1).split(" · ")[0].strip()
    comps = RE_COMP.findall(raw)
    app   = RE_APP.search(raw)
    if not app:
        print(f"  ! sin App inline: {f.name}");  continue
    (OUT / "apps" / f"{slug}.js").write_text(app.group(1).strip() + "\n")
    pages[slug] = {"title": title, "file": f.name, "components": comps}

(OUT / "apps" / "manifest.json").write_text(json.dumps(pages, indent=2))
print(f"  paginas: {len(pages)}   componentes: {len(list((OUT/'components').glob('*.jsx')))}")
