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
# El blog no es una pagina React: lo sirven home.php y single.php desde el tema.
# blog.html y blog-*.html son solo el preview estatico, generado por
# wordpress-theme/tools/build.php. Si entraran aqui, el tema crearia paginas de
# WordPress para ellas y chocarian con el blog de verdad.
SKIP_PREFIX = ("blog", "fence-builder")

# ---------------------------------------------------------------- limpiar
if OUT.exists():
    shutil.rmtree(OUT)
(OUT / "apps").mkdir(parents=True)
(OUT / "components").mkdir()
(OUT / "css").mkdir()

# ---------------------------------------------------------------- archivos PHP del tema
for item in sorted((SRC / "wordpress-theme" / "theme-src").iterdir()):
    dst = OUT / item.name
    # dirs_exist_ok: theme-src ya trae carpetas que el build crea antes
    # (apps/, con el arranque del blog), y sin esto copytree revienta.
    shutil.copytree(item, dst, dirs_exist_ok=True) if item.is_dir() else shutil.copy2(item, dst)

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

# ------------------------------------------------------- configurador
# fence-builder.js no es JSX ni una pagina: es el modulo window.WFSBuilder que
# las paginas de material y de porton montan dentro de si mismas. Va a apps/ y
# se le reescriben las rutas de assets igual que a los componentes.
bld = (SRC / "fence-builder.js").read_text()
bld = re.sub(r"(['\"])assets/", r"\1" + ASSET_BASE + "/", bld)
(OUT / "apps" / "fence-builder.js").write_text(bld)

# ------------------------------------------------------- visualizador 3D
# fence-3d.js va tal cual: es un paquete cerrado que no referencia ningun
# asset (casa, jardin y texturas se generan en el navegador), asi que no hay
# rutas que reescribir. Solo se descarga cuando alguien pulsa el boton.
b3d = SRC / "fence-3d.js"
if b3d.exists():
    shutil.copy2(b3d, OUT / "apps" / "fence-3d.js")

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
    if f.name.lower().startswith(SKIP_PREFIX): continue
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
TOPDECL = re.compile(r"^(?:const|let|var|function|class|async function)\s+([A-Za-z_$][\w$]*)", re.M)

def transpile(path):
    out = path.with_suffix(".js")
    # Nombres declarados a nivel superior en el FUENTE: dentro del envoltorio
    # se reexportan todos a window, replicando el ambito global que estos
    # scripts siempre asumieron entre si (SystemTabs, MAT_LABELS y compania
    # se consumen entre archivos sin export explicito).
    names = sorted(set(TOPDECL.findall(path.read_text())))
    subprocess.run(
        ["npx", "--yes", "esbuild@0.24.0", str(path),
         "--loader:" + path.suffix + "=jsx", "--outfile=" + str(out),
         "--minify-whitespace", "--minify-syntax", "--target=es2017",
         "--allow-overwrite", "--log-level=error"],
        check=True)
    # Cada archivo va envuelto en una funcion, replicando el aislamiento que
    # Babel les daba en el preview (cada script en su propio ambito). Sin esto,
    # dos componentes que declaran la misma const de nivel superior (MAT_LABELS
    # en sections y page-projects) chocan como scripts planos: el segundo muere
    # con SyntaxError al parsearse. Los exports cruzados ya van por
    # Object.assign(window, ...), asi que el envoltorio no cambia nada mas.
    exports = ""
    if names:
        pairs = ",".join(f"{n}:typeof {n}!==\"undefined\"?{n}:window.{n}" for n in names)
        exports = ";Object.assign(window,{" + pairs + "});"
    wrapped = "(function(){" + out.read_text() + "\n" + exports + "\n})();"
    out.write_text(wrapped)
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
