/* La casa y el terreno.
 *
 * Es una vivienda del suroeste de Florida, que es donde vende Western Fence:
 * una planta, estuco, cubierta de teja a cuatro aguas, entrada de coche a un
 * lado y piscina al lateral. El objetivo no es lucir la casa sino dar escala
 * y contexto: una cerca de 4 pies y una de 6 solo se distinguen cuando hay al
 * lado algo de altura conocida, y de eso se encarga la persona de persona.js.
 *
 * Todas las medidas van en pies, igual que la cerca.
 */
import { Group, Mesh, BoxGeometry, PlaneGeometry, CylinderGeometry, BufferGeometry,
         MeshStandardMaterial, MeshBasicMaterial, BackSide, DoubleSide, Color,
         Float32BufferAttribute } from '../vendor/three/three.module.js';
import * as T from './texturas.js';
import * as Persona from './persona.js';

var PUL = 1 / 12;

/* Huella de la casa y limites del terreno. La cerca se coloca justo en el
   lindero, asi que estas cotas y las de escena.js tienen que casar. */
export var LOTE = {
  casa:   { x0: -26, x1: 22, z0: -46, z1: -12, alto: 10 },
  frente: 26,          // linea de cerca hacia la calle
  lados:  46,          // linderos laterales
  fondo:  -50,
  calzada:{ x0: 4, x1: 20 },
  acera:  { x0: -16, x1: -8 }
};

function caja(w, h, d, mat, x, y, z, rotY) {
  var m = new Mesh(new BoxGeometry(w, h, d), mat);
  m.position.set(x, y, z);
  if (rotY) { m.rotation.y = rotY; }
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

function losa(w, d, mat, x, y, z) {
  var m = new Mesh(new PlaneGeometry(w, d), mat);
  m.rotation.x = -Math.PI / 2;
  m.position.set(x, y, z);
  m.receiveShadow = true;
  return m;
}

/**
 * Cubierta a cuatro aguas sobre un rectangulo.
 *
 * Se construye a mano porque no hay primitiva: dos faldones trapeciales y dos
 * triangulos en los testeros. Una cubierta a dos aguas seria mas facil, pero
 * en Florida casi no se ve y la silueta es justo lo que hace reconocible a la
 * casa desde la calle.
 */
function cubierta(x0, x1, z0, z1, yBase, altura, vuelo, mat) {
  var a = x0 - vuelo, b = x1 + vuelo, c = z0 - vuelo, d = z1 + vuelo;
  var cz = (c + d) / 2;
  var sangrado = Math.min((d - c) / 2, (b - a) / 2 - 0.5);
  var r0 = a + sangrado, r1 = b - sangrado, yr = yBase + altura;

  var v = [], uv = [];
  function tri(p, q, r) {
    v.push(p[0], p[1], p[2], q[0], q[1], q[2], r[0], r[1], r[2]);
    /* UV planar: basta para que la teja repita a lo largo del faldon. */
    uv.push((p[0] - a) / (b - a), (p[2] - c) / (d - c),
            (q[0] - a) / (b - a), (q[2] - c) / (d - c),
            (r[0] - a) / (b - a), (r[2] - c) / (d - c));
  }
  var A = [a, yBase, c], B = [b, yBase, c], C = [b, yBase, d], D = [a, yBase, d];
  var R0 = [r0, yr, cz], R1 = [r1, yr, cz];
  /* El orden importa: computeVertexNormals saca la normal del giro de los
     vertices, y con el giro invertido la cubierta queda iluminada por debajo
     y se ve gris plomo en vez de teja. */
  tri(B, A, R1); tri(A, R0, R1);      // faldon del fondo
  tri(D, C, R0); tri(C, R1, R0);      // faldon de la calle
  tri(A, D, R0);                       // testero izquierdo
  tri(C, B, R1);                       // testero derecho

  var g = new BufferGeometry();
  g.setAttribute('position', new Float32BufferAttribute(v, 3));
  g.setAttribute('uv', new Float32BufferAttribute(uv, 2));
  g.computeVertexNormals();
  var m = new Mesh(g, mat);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

/** Palmera: tronco conico y dos cuadros cruzados con la fronda recortada. */
function palmera(x, z, altura) {
  var g = new Group();
  var tronco = new Mesh(
    new CylinderGeometry(0.3, 0.52, altura, 8),
    new MeshStandardMaterial({ color: new Color('#8a7355'), roughness: 0.9 })
  );
  tronco.position.set(x, altura / 2, z);
  tronco.castShadow = true;
  g.add(tronco);
  var hoja = new MeshStandardMaterial({
    map: T.fronda(), transparent: true, alphaTest: 0.42, side: DoubleSide, roughness: 0.85
  });
  for (var i = 0; i < 2; i++) {
    var q = new Mesh(new PlaneGeometry(altura * 0.95, altura * 0.95), hoja);
    q.position.set(x, altura + altura * 0.16, z);
    q.rotation.y = i * Math.PI / 2;
    q.castShadow = true;
    g.add(q);
  }
  return g;
}

/** Arbusto: mismo truco de cuadros cruzados, mas pequeño. */
function arbusto(x, z, r) {
  var g = new Group();
  var mat = new MeshStandardMaterial({
    map: T.follaje(), transparent: true, alphaTest: 0.4, side: DoubleSide, roughness: 0.9
  });
  for (var i = 0; i < 2; i++) {
    var q = new Mesh(new PlaneGeometry(r * 2, r * 2), mat);
    q.position.set(x, r * 0.85, z);
    q.rotation.y = i * Math.PI / 2 + 0.4;
    q.castShadow = true;
    g.add(q);
  }
  return g;
}

/** Ventana: hueco oscuro con marco blanco, en la cara indicada. */
function ventana(g, mats, x, y, z, w, h, rotY) {
  g.add(caja(w + 0.5, h + 0.5, 0.34, mats.trim, x, y, z, rotY));
  var v = caja(w, h, 0.42, mats.vidrio, x, y, z, rotY);
  g.add(v);
  /* Peinazo: sin el, el cristal se lee como un agujero negro. */
  g.add(caja(w, 0.16, 0.5, mats.trim, x, y, z, rotY));
}


export function construir() {
  var g = new Group();
  var C = LOTE.casa;
  var anchoCasa = C.x1 - C.x0, fondoCasa = C.z1 - C.z0, cx = (C.x0 + C.x1) / 2, cz = (C.z0 + C.z1) / 2;

  var mats = {
    pared:   new MeshStandardMaterial({ map: T.estuco('#e8e1d4'), roughness: 0.95 }),
    zocalo:  new MeshStandardMaterial({ color: new Color('#cfc6b6'), roughness: 0.95 }),
    teja:    new MeshStandardMaterial({ map: T.teja(), roughness: 0.85 }),
    trim:    new MeshStandardMaterial({ color: new Color('#ffffff'), roughness: 0.6 }),
    vidrio:  new MeshStandardMaterial({ color: new Color('#2b3b46'), roughness: 0.12, metalness: 0.5 }),
    puerta:  new MeshStandardMaterial({ color: new Color('#5d4436'), roughness: 0.55 }),
    garaje:  new MeshStandardMaterial({ color: new Color('#f0eee8'), roughness: 0.7 }),
    cesped:  new MeshStandardMaterial({ map: T.cesped(), roughness: 1 }),
    hormigon:new MeshStandardMaterial({ map: T.hormigon(), roughness: 0.92 }),
    asfalto: new MeshStandardMaterial({ color: new Color('#4a4a4d'), roughness: 0.95 }),
    mantillo:new MeshStandardMaterial({ color: new Color('#4b3527'), roughness: 1 }),
    agua:    new MeshStandardMaterial({ map: T.agua(), roughness: 0.08, metalness: 0.25 }),
    borde:   new MeshStandardMaterial({ color: new Color('#dcd7cc'), roughness: 0.8 })
  };

  /* ── suelo ─────────────────────────────────────────────────────────────── */
  g.add(losa(400, 400, mats.cesped, 0, 0, -40));
  /* Arboleda al fondo, sobre un cilindro que rodea la escena. Va sin luz ni
     niebla: es telon, y sombrearlo solo lo ensuciaria. */
  var telon = new Mesh(
    new CylinderGeometry(168, 168, 34, 48, 1, true),
    new MeshBasicMaterial({ map: T.arboleda(), side: BackSide, transparent: true, alphaTest: 0.35, fog: false })
  );
  /* Apoyada en el cesped, no mas alla de su borde: a 235 pies caia fuera del
     plano de hierba y los arboles se veian flotando sobre el vacio. */
  telon.position.set(0, 15, -40);
  g.add(telon);
  g.add(losa(400, 22, mats.asfalto, 0, 0.02, 45));                       // calle
  g.add(losa(400, 4, mats.hormigon, 0, 0.03, 32));                       // acera publica
  /* Entrada de coche: cruza la linea de cerca, por eso llega hasta la calle. */
  g.add(losa(LOTE.calzada.x1 - LOTE.calzada.x0, 46, mats.hormigon,
             (LOTE.calzada.x0 + LOTE.calzada.x1) / 2, 0.04, 11));
  /* Camino a la puerta. */
  g.add(losa(4, 40, mats.hormigon, -12, 0.04, 8));

  /* ── casa ─────────────────────────────────────────────────────────────── */
  g.add(caja(anchoCasa, C.alto, fondoCasa, mats.pared, cx, C.alto / 2, cz));
  g.add(caja(anchoCasa + 0.6, 1.4, fondoCasa + 0.6, mats.zocalo, cx, 0.7, cz));
  g.add(cubierta(C.x0, C.x1, C.z0, C.z1, C.alto, 8.2, 2.4, mats.teja));

  /* Fachada a la calle: garaje a la derecha, entrada a la izquierda. */
  var zf = C.z1 + 0.01;
  g.add(caja(16, 7.6, 0.5, mats.garaje, 12, 3.9, zf));
  g.add(caja(16.7, 8.3, 0.3, mats.trim, 12, 4.2, zf - 0.06));
  for (var i = 0; i < 4; i++) {
    g.add(caja(15.6, 0.12, 0.62, mats.trim, 12, 1.1 + i * 1.85, zf));
  }
  g.add(caja(3.4, 7.4, 0.45, mats.puerta, -12, 3.7, zf));
  g.add(caja(4.1, 8.1, 0.28, mats.trim, -12, 4.05, zf - 0.06));
  ventana(g, mats, -20.5, 5.4, zf, 5, 4.4);
  ventana(g, mats, -5.5, 5.4, zf, 4, 4.4);

  /* Porche: dos columnas y un alero bajo. */
  g.add(losa(11, 7, mats.hormigon, -12, 0.06, zf + 3.4));
  g.add(caja(11.6, 0.7, 7.6, mats.trim, -12, 9.4, zf + 3.4));
  g.add(caja(0.8, 9.1, 0.8, mats.trim, -16.6, 4.55, zf + 6.6));
  g.add(caja(0.8, 9.1, 0.8, mats.trim, -7.4, 4.55, zf + 6.6));

  /* Lateral visible desde la calle. */
  var xl = C.x0 - 0.01;
  ventana(g, mats, xl, 5.4, -20, 4.6, 4.4, Math.PI / 2);
  ventana(g, mats, xl, 5.4, -30, 4.6, 4.4, Math.PI / 2);

  /* ── piscina y terraza, en el lateral ─────────────────────────────────── */
  var px = -37, pz = -28;
  g.add(losa(20, 34, mats.hormigon, px, 0.05, pz));
  g.add(caja(15, 0.9, 26, mats.borde, px, 0.42, pz));
  g.add(caja(13.2, 1, 24.2, mats.agua, px, 0.5, pz));
  for (var s = 0; s < 3; s++) {
    g.add(caja(2.2, 0.32, 5.6, mats.trim, px + 8.6, 1.1, pz - 8 + s * 8));
  }

  /* ── plantacion ───────────────────────────────────────────────────────── */
  g.add(losa(anchoCasa + 6, 5, mats.mantillo, cx, 0.05, C.z1 + 2.6));
  var arbustos = [[-24, -8, 1.5], [-18.5, -8, 1.2], [-3, -8.4, 1.4], [2, -8.4, 1.2],
                  [7, -8.4, 1.3], [21, -8.6, 1.6], [-30, 6, 1.8], [-30, 14, 1.5],
                  [30, 4, 1.7], [30, 13, 1.4]];
  for (var k = 0; k < arbustos.length; k++) {
    g.add(arbusto(arbustos[k][0], arbustos[k][1], arbustos[k][2]));
  }
  var palmas = [[-34, 12, 17], [-41, 2, 13], [41, 20, 15], [40, -6, 19],
                [-42, -44, 16], [26, -44, 18], [-32, 31, 12], [-40, -18, 14]];
  for (var q = 0; q < palmas.length; q++) {
    g.add(palmera(palmas[q][0], palmas[q][1], palmas[q][2]));
  }

  /* Una persona junto a la cerca del frente. Es la referencia que hace legible
     la altura: entre 5 y 6 pies hay doce pulgadas que sin nada al lado no se
     ven. Va pegada a la valla y de cara a la calle, que es desde donde mira la
     camara por defecto. */
  g.add(Persona.crear(-6, 23.2, Math.PI * 0.86));

  /* Buzon: pequeño, pero es una referencia de altura que todo el mundo tiene
     calibrada, y ayuda a leer si la cerca es de 4 o de 6 pies. */
  g.add(caja(0.32, 4, 0.32, mats.puerta, -22, 2, 30));
  g.add(caja(1.5, 0.9, 0.9, mats.trim, -22, 4.3, 30));

  return { grupo: g, mats: mats };
}
