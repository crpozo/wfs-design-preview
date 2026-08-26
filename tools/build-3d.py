#!/usr/bin/env python3
"""Empaqueta el visualizador 3D en un solo archivo.

src-3d/ son modulos ES que importan three.js desde vendor/. esbuild los junta,
sacude el arbol y saca fence-3d.js como IIFE, que es lo que el sitio sabe
cargar. three entero son 1,2 MB; de lo que se usa aqui quedan unos 500 KB, y
ademas no se descarga hasta que alguien pulsa el boton.
"""
import pathlib, subprocess, sys, hashlib

RAIZ = pathlib.Path(__file__).resolve().parent.parent
ENTRADA = RAIZ / "src-3d" / "escena.js"
SALIDA = RAIZ / "fence-3d.js"

if not (RAIZ / "vendor" / "three" / "three.module.js").exists():
    sys.exit("falta vendor/three/three.module.js")

cmd = [
    "npx", "--yes", "esbuild@0.24.0", str(ENTRADA),
    "--bundle", "--format=iife", "--minify", "--target=es2019",
    "--legal-comments=inline",          # la licencia MIT de three viaja dentro
    "--outfile=" + str(SALIDA),
]
r = subprocess.run(cmd, capture_output=True, text=True)
if r.returncode != 0:
    sys.exit(r.stderr.strip() or "esbuild fallo")

kb = SALIDA.stat().st_size / 1024
h = hashlib.md5(SALIDA.read_bytes()).hexdigest()[:8]
print("  fence-3d.js  %.0f KB  hash %s" % (kb, h))
