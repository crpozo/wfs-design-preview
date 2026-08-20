#!/usr/bin/env python3
"""Regenera components/flow-data.js rastreando el wizard real de
app.westernfencesupply.com. Uso: python3 tools/generate-flow-data.py

Detalles no obvios del app:
- Los pasos requieren cookie de sesión (Laravel); el opener la mantiene.
- Las tarjetas de paso usan comillas SIMPLES; la home usa dobles.
- Tres formatos de tarjeta: texto (card-step-alt), color (style inline
  background-color) e imagen (card-img-step con card-title aparte).
- Una ruta que responde la página de dibujo (p5.js) es terminal: se omite
  del árbol y el wizard deep-linkea a ella.
"""
import re, json, urllib.request, http.cookiejar, html as htmllib, time, os

BASE = "https://app.westernfencesupply.com"
cj = http.cookiejar.CookieJar()
op = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(cj))
op.addheaders = [("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)")]

def clean(s):
    s = htmllib.unescape(re.sub(r"<[^>]+>", " ", s))
    return re.sub(r"\s+", " ", s).strip()

CARD_TXT = re.compile(
    r"<div class='card[^']*card-step-alt'\s*(?:style='([^']*)')?><a href='([^']+)'\s*>(.*?)</a></div>"
    r"(?:<div class='text-center special_order_btn'>(.*?)</div>)?", re.S)
CARD_IMG = re.compile(
    r"<div class='card[^']*card-img-step'><a href='([^']+)'><img src='([^']+)'[^>]*/></a>"
    r"<div class='card-title[^']*'>(.*?)</div>"
    r"(?:<div class='text-center note'>(.*?)</div>)?"
    r"(?:<div class='text-center special_order'>(.*?)</div>)?", re.S)
CARD_HOME = re.compile(
    r'<a href="(/step/[^"]+)">(.*?)</a>\s*(?:<div class="card-title[^"]*">(.*?)</div>)?', re.S)

def img_url(p):
    if not p: return None
    if p.startswith("http"): return p
    return BASE + (p if p.startswith("/") else "/" + p)

def parse(page):
    heads = [clean(m) for m in re.findall(r'class=.headline[^>]*>(.*?)</p>', page, re.S)]
    opts = []
    for m in CARD_TXT.finditer(page):
        style, href, inner, special = m.group(1) or "", m.group(2), m.group(3), clean(m.group(4) or "")
        e = {"t": clean(inner)[:140], "to": href}
        cm = re.search(r"background-color:\s*(#[0-9a-fA-F]{3,6})", style)
        if cm: e["c"] = cm.group(1)
        if special: e["sp"] = special
        opts.append(e)
    for m in CARD_IMG.finditer(page):
        e = {"t": clean(m.group(3))[:140], "to": m.group(1), "img": img_url(m.group(2))}
        if clean(m.group(4) or ""): e["n"] = clean(m.group(4))
        if clean(m.group(5) or ""): e["sp"] = clean(m.group(5))
        opts.append(e)
    if not opts:
        for m in CARD_HOME.finditer(page):
            label = clean(m.group(3) or "") or clean(m.group(2))
            if label == "Previous Step": continue
            img = re.search(r'src="([^"]+)"', m.group(2))
            e = {"t": label[:140], "to": m.group(1)}
            if img: e["img"] = img_url(img.group(1))
            opts.append(e)
    return {"h": heads[0] if heads else "", "o": opts}

def fetch(path, tries=4):
    for i in range(tries):
        try:
            return op.open(BASE + path, timeout=40).read().decode("utf-8", "replace")
        except Exception:
            if i == tries - 1: raise
            time.sleep(2 + i)

flow, pending = {}, ["/"]
while pending:
    path = pending.pop()
    if path in flow: continue
    page = fetch(path)
    if "p5.js" in page and path != "/":
        continue  # página de dibujo: terminal, no entra al árbol
    node = parse(page)
    flow[path] = node
    for o in node["o"]:
        if o["to"] not in flow: pending.append(o["to"])
    if len(flow) % 50 == 0: print("…", len(flow), "pantallas")
    time.sleep(0.1)

# poda: opciones cuyo destino no está en flow son terminales (draw) — se quedan
flow = {k: v for k, v in flow.items() if v["o"]}
out = os.path.join(os.path.dirname(__file__), "..", "components", "flow-data.js")
js = ("/* Árbol REAL del wizard de app.westernfencesupply.com — generado por\n"
      "   tools/generate-flow-data.py, no editar a mano. Nodos: ruta -> {h, o}.\n"
      "   Una ruta ausente = página de dibujo (terminal). */\n"
      "window.WFS_FLOW = " + json.dumps(flow, ensure_ascii=False, separators=(",", ":")) + ";\n"
      f'window.WFS_APP_BASE = "{BASE}";\n')
open(out, "w").write(js)
print("OK:", len(flow), "pantallas →", os.path.normpath(out))
