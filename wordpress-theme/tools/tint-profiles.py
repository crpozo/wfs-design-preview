#!/usr/bin/env python3
"""Genera las variantes de color de los dibujos de perfil.

Salida: assets/profiles/tinted/{perfil}-{color}.jpg

Se parte SIEMPRE del dibujo original y solo se le cambia el color, para que al
elegir un acabado en el configurador se vea la misma valla pintada de otro
color y no una escena distinta.

Dos metodos, segun como sea el original:
  - silueta:  panel oscuro sobre fondo claro (aluminio, DuraFence). La opacidad
              sale de lo oscuro que es el pixel, asi se conservan los bordes
              suavizados y no queda dentado.
  - repintar: panel ya coloreado sobre fondo neutro (vinilo). Solo toca los
              pixeles con saturacion, asi que el fondo gris (S=0) se queda igual
              y no hay que recortar nada.

Los acabados claros van sobre fondo gris: blanco sobre blanco no se veria.

    python3 wordpress-theme/tools/tint-profiles.py
"""
from PIL import Image
import colorsys, os, sys

RAIZ = os.path.join(os.path.dirname(__file__), "..", "..")
OUT  = os.path.join(RAIZ, "assets/profiles/tinted")
CLARO, GRIS = (235, 235, 235), (120, 126, 138)

def silueta(src, rgb, fondo):
    im = Image.open(src).convert("L"); w, h = im.size; px = im.load()
    out = Image.new("RGB", (w, h), fondo); op = out.load()
    BG, FG = 232.0, 20.0
    for y in range(h):
        for x in range(w):
            a = (BG - px[x, y]) / (BG - FG)
            if a <= 0: continue
            if a > 1: a = 1.0
            op[x, y] = tuple(int(fondo[i] + (rgb[i] - fondo[i]) * a) for i in range(3))
    return out

def repintar(src, tono, sat, luz):
    im = Image.open(src).convert("RGB"); w, h = im.size; px = im.load()
    out = Image.new("RGB", (w, h)); op = out.load()
    for y in range(h):
        for x in range(w):
            r, g, b = [v / 255 for v in px[x, y]]
            hh, l, s = colorsys.rgb_to_hls(r, g, b)
            if s > 0.04:
                hh = tono if tono is not None else hh
                s = max(0.0, min(1.0, s * sat))
                l = max(0.0, min(1.0, l + luz))
            r2, g2, b2 = colorsys.hls_to_rgb(hh, l, s)
            op[x, y] = (int(r2 * 255), int(g2 * 255), int(b2 * 255))
    return out

TRABAJO = []
for p in ["aluminum-2-rail-smooth", "aluminum-3-rail-rake", "aluminum-puppy-picket",
          "aluminum-pool-code", "aluminum-spear-top", "aluminum-custom"]:
    TRABAJO += [(p, "black", silueta, ((26,26,26), CLARO)),
                (p, "bronze", silueta, ((74,55,40), CLARO)),
                (p, "white", silueta, ((250,250,250), GRIS))]
for p in ["metal-modern", "metal-original", "metal-p1"]:
    TRABAJO += [(p, "black", silueta, ((26,26,26), CLARO)),
                (p, "bronze", silueta, ((74,55,40), CLARO)),
                (p, "woodgrain", silueta, ((122,92,62), CLARO)),
                (p, "white", silueta, ((250,250,250), GRIS))]
for p in ["vinyl-privacy", "vinyl-semi-privacy", "vinyl-picket", "vinyl-ranch-rail"]:
    TRABAJO += [(p, "white", repintar, (None, 0.12, 0.10)),
                (p, "gray", repintar, (0.60, 0.10, -0.06))]

def main():
    os.makedirs(OUT, exist_ok=True)
    n = 0
    for perfil, color, fn, args in TRABAJO:
        src = os.path.join(RAIZ, "assets/profiles", perfil + ".jpg")
        if not os.path.exists(src):
            print("  FALTA", src, file=sys.stderr); continue
        fn(src, *args).save(os.path.join(OUT, f"{perfil}-{color}.jpg"), quality=86, optimize=True)
        n += 1
    print(f"  {n} variantes en assets/profiles/tinted")

if __name__ == "__main__":
    main()
