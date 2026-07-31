#!/usr/bin/env python3
"""Genera el tema de WordPress 'wfs-site' a partir del sitio real.

No reinterpreta el diseño: copia los componentes y el CSS tal cual, y hace que
WordPress los sirva. Por construccion el resultado es identico al preview.
"""
import re, shutil, pathlib, json, subprocess, html

SRC   = pathlib.Path(__file__).resolve().parent.parent
OUT   = SRC / "wordpress-theme" / "wfs-site"
ASSET_BASE = "https://crpozo.github.io/wfs-design-preview/assets"

SKIP = {"index.html"}

# ---------------------------------------------------------------- limpiar
if OUT.exists():
    shutil.rmtree(OUT)
(OUT / "apps").mkdir(parents=True)
(OUT / "components").mkdir()
(OUT / "css").mkdir()

# ---------------------------------------------------------------- archivos PHP del tema
for item in sorted((SRC / "wordpress-theme" / "theme-src").iterdir()):
    dst = OUT / item.name
    shutil.copytree(item, dst) if item.is_dir() else shutil.copy2(item, dst)

# --------------------------------------------------- assets propios del tema
LOCAL = sorted(
    str(f.relative_to(OUT / "assets")).replace("\\", "/")
    for f in (OUT / "assets").rglob("*") if f.is_file()
) if (OUT / "assets").exists() else []
(OUT / "apps").mkdir(exist_ok=True)
(OUT / "assets-local.json").write_text(json.dumps(LOCAL, indent=2))

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
try:
    subprocess.run(["npx", "--yes", "esbuild@0.24.0", str(OUT / "css" / "styles.css"),
                    "--minify", "--allow-overwrite",
                    "--outfile=" + str(OUT / "css" / "styles.css"),
                    "--log-level=error"], check=True)
    print("  CSS minificado")
except Exception as err:
    print(f"  ! CSS sin minificar: {err}")

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

# ------------------------------------------------- precompilar el JSX
# Sin esto el navegador tiene que descargar Babel (3 MB) y compilar 740 KB
# de JSX en cada carga, bloqueando el pintado. Precompilar deja el mismo
# resultado (React.createElement) hecho de antemano.
def transpile(path):
    out = path.with_suffix(".js")
    subprocess.run(
        ["npx", "--yes", "esbuild@0.24.0", str(path),
         "--loader:" + path.suffix + "=jsx", "--outfile=" + str(out),
         "--minify", "--target=es2017",
         "--allow-overwrite", "--log-level=error"],
        check=True)
    if out != path:
        path.unlink()
    return out

try:
    for f in sorted((OUT / "components").glob("*.jsx")):
        transpile(f)
    for slug in pages:
        transpile(OUT / "apps" / f"{slug}.js")
    for page in pages.values():
        page["components"] = [c.replace(".jsx", ".js") for c in page["components"]]
    (OUT / "apps" / "manifest.json").write_text(json.dumps(pages, indent=2))
    (OUT / "precompiled").write_text("1")
    print("  JSX precompilado: se elimina Babel del navegador")
except (subprocess.CalledProcessError, FileNotFoundError) as err:
    print(f"  ! sin esbuild ({err}), el tema cargara Babel en el navegador")
print(f"  paginas: {len(pages)}   componentes: {len(list((OUT/'components').glob('*.jsx')))}")
