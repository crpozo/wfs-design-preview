#!/usr/bin/env python3
"""Genera las variantes de color de las FOTOS de porton.

Salida: assets/gates/tinted/{foto}-{color}.jpg

Es la misma idea que tint-profiles.py, pero sobre fotografias en vez de dibujos
de producto: se parte SIEMPRE de la misma foto y solo se le cambia el color del
panel, para que al elegir un acabado se vea el mismo porton pintado de otro
color y no otra foto distinta.

Como se aisla el panel, sin recortes a mano:
  1. Se busca el color dominante de la zona clara central, que es el panel.
  2. Se marcan los pixeles que se le parecen en tono y no estan muy saturados.
     Eso deja fuera el marco negro, el cesped, el cielo y la casa del fondo.
  3. Cierre morfologico: un pixel rodeado de panel es panel. Sin este paso, los
     brillos especulares del vinilo se salian de la mascara y quedaban motas
     blancas repartidas por la hoja.
  4. Se repinta conservando la luminosidad de cada pixel, asi que las sombras,
     las juntas entre tablas y los herrajes siguen leyendose.

    python3 wordpress-theme/tools/tint-gates.py
"""
from PIL import Image
from collections import Counter
import colorsys, os, sys

RAIZ = os.path.join(os.path.dirname(__file__), "..", "..")
OUT = os.path.join(RAIZ, "assets/gates/tinted")

COLORES = {
    "white":     (246, 246, 243),
    "tan":       (214, 201, 174),
    "gray":      (139, 139, 136),
    "black":     (38, 38, 38),
    "bronze":    (74, 55, 40),
    "woodgrain": (122, 92, 62),
}

def color_panel(px, w, h):
    """El color dominante de la zona clara central: eso es el panel."""
    c = Counter()
    for y in range(h // 4, h * 3 // 4, 2):
        for x in range(w // 5, w * 4 // 5, 2):
            r, g, b = px[x, y]
            if (r + g + b) / 765 > 0.45:
                c[(r // 12, g // 12, b // 12)] += 1
    if not c:
        return None
    (qr, qg, qb), _ = c.most_common(1)[0]
    return (qr * 12 + 6, qg * 12 + 6, qb * 12 + 6)

def mascara(px, w, h, ph, tol, sat_max=0.42, luz_min=0.32):
    m = bytearray(w * h)
    for y in range(h):
        fila = y * w
        for x in range(w):
            r, g, b = px[x, y]
            hh, ll, ss = colorsys.rgb_to_hls(r / 255, g / 255, b / 255)
            if ll <= luz_min or ss >= sat_max:
                continue
            dif = min(abs(hh - ph), 1 - abs(hh - ph))
            if dif < tol or ss < 0.10:
                m[fila + x] = 1
    return m

def cerrar(m, w, h, radio=4, minimo=0.45):
    """Un pixel rodeado de panel es panel: rellena los brillos que se escapan."""
    out = bytearray(m)
    area = (radio * 2 + 1) ** 2
    for y in range(radio, h - radio):
        for x in range(radio, w - radio):
            i = y * w + x
            if m[i]:
                continue
            n = 0
            for dy in range(-radio, radio + 1):
                base = (y + dy) * w + x
                for dx in range(-radio, radio + 1):
                    n += m[base + dx]
            if n / area >= minimo:
                out[i] = 1
    return out

# La vista previa mide 560px y como mucho se ve a 2x. Las fotos de origen
# llegan a 5120x3840: procesarlas enteras son 20 millones de pixeles por
# variante y el cierre morfologico se eterniza, para luego servir una imagen 4
# veces mas grande de lo que hace falta.
ANCHO_MAX = 1500

def _abrir(src):
    im = Image.open(src).convert("RGB")
    if im.size[0] > ANCHO_MAX:
        im = im.resize((ANCHO_MAX, round(im.size[1] * ANCHO_MAX / im.size[0])), Image.LANCZOS)
    return im

def tintar(src, destino_rgb, tol=0.13, sat_max=0.42, luz_min=0.32):
    im = _abrir(src)
    w, h = im.size
    px = im.load()
    panel = color_panel(px, w, h)
    if panel is None:
        return im
    ph, pl, _ = colorsys.rgb_to_hls(*[v / 255 for v in panel])
    dh, dl, ds = colorsys.rgb_to_hls(*[v / 255 for v in destino_rgb])
    m = cerrar(mascara(px, w, h, ph, tol, sat_max, luz_min), w, h)

    out = Image.new("RGB", (w, h))
    op = out.load()
    for y in range(h):
        fila = y * w
        for x in range(w):
            r, g, b = px[x, y]
            if not m[fila + x]:
                op[x, y] = (r, g, b)
                continue
            hh, ll, ss = colorsys.rgb_to_hls(r / 255, g / 255, b / 255)
            nl = max(0.0, min(1.0, ll + (dl - pl) * 0.55))
            r2, g2, b2 = colorsys.hls_to_rgb(dh, nl, ds)
            op[x, y] = (int(r2 * 255), int(g2 * 255), int(b2 * 255))
    return out


def tintar_oscuro(src, destino_rgb, fondo_rgb):
    """Producto OSCURO sobre fondo claro.

    Aqui el metodo de arriba no vale: busca el color dominante de la zona clara
    y en una foto de porton negro sobre blanco eso es el FONDO, asi que pintaba
    el fondo y dejaba la hoja negra. Se invierte: lo oscuro es el producto, y su
    luminosidad relativa se conserva para que las juntas entre tablas y el
    herraje sigan leyendose.

    El fondo se repinta aparte porque con un acabado blanco sobre fondo blanco
    no se veria el porton.
    """
    im = _abrir(src)
    w, h = im.size
    px = im.load()
    dh, dl, ds = colorsys.rgb_to_hls(*[v / 255 for v in destino_rgb])
    out = Image.new("RGB", (w, h))
    op = out.load()
    for y in range(h):
        for x in range(w):
            r, g, b = px[x, y]
            hh, ll, ss = colorsys.rgb_to_hls(r / 255, g / 255, b / 255)
            if ll > 0.86 and ss < 0.10:
                op[x, y] = fondo_rgb            # fondo del estudio
                continue
            # La hoja: su tono pasa a ser el elegido y su claridad se
            # re-centra en la del destino, conservando el contraste interno.
            nl = max(0.0, min(1.0, dl + (ll - 0.22) * 0.9))
            r2, g2, b2 = colorsys.hls_to_rgb(dh, nl, ds)
            op[x, y] = (int(r2 * 255), int(g2 * 255), int(b2 * 255))
    return out


# Que foto lleva que colores. Solo las opciones que tienen paso de color:
# vinilo (blanco / tan / gris) y metal DuraFence (blanco / negro / bronce /
# veta). En chain link y EC Fence el acabado ES el paso de estilo y ya tiene su
# propia foto, asi que no se tintan.
CLARO, GRIS = (238, 238, 236), (150, 152, 156)

TRABAJO = [
    # ("foto", [colores], oscuro?)
    ("projects/gate-single-custom-pvc.webp",            ["white", "tan", "gray"], False),
    # Porton negro sobre fondo blanco: metodo inverso.
    ("projects/gate-single-matching-ecfence.webp",      ["white", "black", "bronze", "woodgrain"], True),
    # Los reflejos del cielo en la hoja derecha tiran a azul y se salian del
    # margen de tono, quedando motas blancas sobre el panel tintado.
    ("DOUBLE_GATE.webp",                                ["white", "tan", "gray"], False,
     {"tol": 0.32}),
    # pvc-privacy-cantilever-gate-white.webp NO se tinta, a proposito.
    # En esa foto el cielo, las nubes, el vinilo y el hormigon de la entrada
    # comparten el mismo perfil (claro y poco saturado), asi que no hay umbral
    # que separe la valla: apretando se cae el panel al sol, aflojando se tiñen
    # las nubes. Haria falta una foto de estudio de ese porton.
    ("projects/pvc-gate-sand.jpg",                      ["white", "tan", "gray"], False),
]

def main():
    os.makedirs(OUT, exist_ok=True)
    n = 0
    for fila in TRABAJO:
        rel, colores, oscuro = fila[0], fila[1], fila[2]
        extra = fila[3] if len(fila) > 3 else {}
        src = os.path.join(RAIZ, "assets", rel)
        if not os.path.exists(src):
            print("  FALTA", rel, file=sys.stderr)
            continue
        base = os.path.splitext(os.path.basename(rel))[0]
        for c in colores:
            if oscuro:
                # Los acabados claros van sobre fondo gris: blanco sobre blanco
                # no se veria el porton.
                fondo = GRIS if c in ("white",) else CLARO
                im = tintar_oscuro(src, COLORES[c], fondo)
            else:
                im = tintar(src, COLORES[c], **extra)
            im.save(os.path.join(OUT, base + "-" + c + ".jpg"), quality=86, optimize=True)
            n += 1
            print("   ", base + "-" + c)
    print("  %d variantes en assets/gates/tinted" % n)

if __name__ == "__main__":
    main()
