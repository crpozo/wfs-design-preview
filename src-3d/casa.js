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
import { Group, Mesh, InstancedMesh, Object3D, BoxGeometry, PlaneGeometry, CylinderGeometry, SphereGeometry, BufferGeometry,
         MeshStandardMaterial, MeshBasicMaterial, BackSide, DoubleSide, Color,
         Float32BufferAttribute, Vector3 } from '../vendor/three/three.module.js';
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

/** Barra entre dos puntos, para las limatesas de la cubierta: caja() solo
 *  gira en Y y una limatesa va inclinada. */
function barra(p, q, diam, mat) {
  var dx = q[0] - p[0], dy = q[1] - p[1], dz = q[2] - p[2];
  var L = Math.sqrt(dx * dx + dy * dy + dz * dz);
  var m = new Mesh(new CylinderGeometry(diam / 2, diam / 2, L, 6), mat);
  m.position.set((p[0] + q[0]) / 2, (p[1] + q[1]) / 2, (p[2] + q[2]) / 2);
  m.quaternion.setFromUnitVectors(new Vector3(0, 1, 0), new Vector3(dx, dy, dz).normalize());
  m.castShadow = true;
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
var FRONDA_GEO = {};
function frondaGeo(largo) {
  /* Plano de 7 tramos curvado: arquea hacia arriba en la base y cae en la
     punta, como una hoja de palma de verdad. Una geometria por largo. */
  var k = largo.toFixed(1);
  if (FRONDA_GEO[k]) { return FRONDA_GEO[k]; }
  /* La hoja sale del cogollo hacia FUERA (z), sube un poco al principio y
     cae hacia la punta. La primera version arqueaba hacia arriba y las copas
     parecian cepillos de botella. */
  var geo = new PlaneGeometry(largo * 0.6, largo, 1, 7);
  var pos = geo.attributes.position;
  for (var i = 0; i < pos.count; i++) {
    var y = pos.getY(i);                     // -largo/2 .. largo/2
    var u = (y + largo / 2) / largo;         // 0 base .. 1 punta
    pos.setY(i, u * largo * 0.42 - u * u * largo * 0.62);
    pos.setZ(i, u * largo * 0.92);
  }
  geo.computeVertexNormals();
  FRONDA_GEO[k] = geo;
  return geo;
}

var HOJA_MAT = null;
function palmera(x, z, altura) {
  var g = new Group();
  /* Leve inclinacion, distinta por palmera (sale de su posicion, no de un
     random, para que el resultado sea estable entre renders): rectas todas,
     parecian postes de luz. */
  var lean = Math.sin(x * 12.9898 + z * 78.233) * 0.06;
  var tronco = new Mesh(
    new CylinderGeometry(0.3, 0.52, altura, 8),
    new MeshStandardMaterial({ map: T.corteza(), roughness: 0.92 })
  );
  tronco.position.set(x, altura / 2, z);
  tronco.rotation.z = lean;
  tronco.castShadow = true;
  g.add(tronco);
  if (!HOJA_MAT) {
    HOJA_MAT = new MeshStandardMaterial({
      map: T.frondaHoja(), transparent: true, alphaTest: 0.4, side: DoubleSide, roughness: 0.85
    });
  }
  /* Copa: diez frondas curvadas alrededor del cogollo, cada una con su giro y
     su caida. Antes eran tres planos cruzados con toda la copa pintada, y de
     cerca se veian como cartones. */
  var cx = x - Math.sin(lean) * altura * 0.5, cy = altura - 0.2;
  var largo = altura * 0.62;
  var geo = frondaGeo(largo);
  var n = 10;
  /* Las diez hojas en UN InstancedMesh: una llamada de dibujo por palmera (y
     otra en la pasada de sombra) en vez de diez. Con ocho palmeras eran 160
     llamadas solo de frondas. */
  var copa = new InstancedMesh(geo, HOJA_MAT, n);
  var d = new Object3D();
  for (var i = 0; i < n; i++) {
    var fase = Math.sin(i * 7.3 + x) * 0.5;
    d.position.set(cx, cy, z);
    d.rotation.order = 'YXZ';
    d.rotation.y = (i / n) * Math.PI * 2 + fase * 0.4 + lean * 4;
    /* Ligera variacion de caida por hoja; la forma ya la da la geometria. */
    d.rotation.x = 0.12 - fase * 0.2;
    d.updateMatrix();
    copa.setMatrixAt(i, d.matrix);
  }
  copa.castShadow = true;
  g.add(copa);
  var cogollo = new Mesh(new SphereGeometry(0.55, 8, 6), new MeshStandardMaterial({ color: new Color('#6b5a3a'), roughness: 1 }));
  cogollo.position.set(cx, cy, z);
  g.add(cogollo);
  return g;
}

/** Arbustos: tres esferas solapadas en dos verdes. TODOS los arbustos van en
 *  dos InstancedMesh (uno por verde): 30 esferas por dos llamadas, no treinta. */
function arbustos(lista) {
  var geo = new SphereGeometry(1, 12, 9);
  var bolas = [[0, 0.72, 0, 0.78], [-0.45, 0.55, 0.3, 0.6], [0.45, 0.6, -0.25, 0.62]];
  var a = new InstancedMesh(geo, new MeshStandardMaterial({ color: new Color('#3f7a34'), roughness: 0.95 }), lista.length * 2);
  var b = new InstancedMesh(geo, new MeshStandardMaterial({ color: new Color('#4f8f3c'), roughness: 0.95 }), lista.length);
  var d = new Object3D(), ia = 0, ib = 0;
  for (var k = 0; k < lista.length; k++) {
    var x = lista[k][0], z = lista[k][1], r = lista[k][2];
    for (var i = 0; i < bolas.length; i++) {
      var q = bolas[i];
      d.position.set(x + q[0] * r, q[1] * r, z + q[2] * r);
      d.scale.setScalar(q[3] * r);
      d.updateMatrix();
      if (i === 1) { b.setMatrixAt(ib++, d.matrix); } else { a.setMatrixAt(ia++, d.matrix); }
    }
  }
  a.castShadow = b.castShadow = true;
  var g = new Group(); g.add(a); g.add(b);
  return g;
}

/** Ventana: hueco oscuro con marco blanco, en la cara indicada. */
function ventana(g, mats, x, y, z, w, h, rotY) {
  g.add(caja(w + 0.5, h + 0.5, 0.34, mats.trim, x, y, z, rotY));
  var v = caja(w, h, 0.42, mats.vidrio, x, y, z, rotY);
  g.add(v);
  /* Peinazo y montante: sin ellos el cristal se lee como un agujero negro. */
  g.add(caja(w, 0.16, 0.5, mats.trim, x, y, z, rotY));
  g.add(caja(0.16, h, 0.5, mats.trim, x, y, z, rotY));
  /* Alfeizar: un poco mas ancho que el marco y saliente. */
  g.add(caja(w + 0.9, 0.22, 0.7, mats.trim, x, y - h / 2 - 0.3, z, rotY));
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
    vidrio:  new MeshStandardMaterial({ color: new Color('#22323f'), roughness: 0.08, metalness: 0.75 }),
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
  /* Juntas de dilatacion: lineas oscuras cada 8 pies en la calzada y cada 5
     en la acera. Sin ellas el hormigon era una mancha continua. */
  var junta = new MeshStandardMaterial({ color: new Color('#8f8a80'), roughness: 1 });
  for (var jz = -8; jz <= 30; jz += 8) {
    g.add(losa(LOTE.calzada.x1 - LOTE.calzada.x0, 0.12, junta, (LOTE.calzada.x0 + LOTE.calzada.x1) / 2, 0.045, jz));
  }
  for (var jx = -60; jx <= 60; jx += 5) {
    g.add(losa(0.12, 4, junta, jx, 0.035, 32));
  }

  /* ── casa ─────────────────────────────────────────────────────────────── */
  g.add(caja(anchoCasa, C.alto, fondoCasa, mats.pared, cx, C.alto / 2, cz));
  g.add(caja(anchoCasa + 0.6, 1.4, fondoCasa + 0.6, mats.zocalo, cx, 0.7, cz));
  g.add(cubierta(C.x0, C.x1, C.z0, C.z1, C.alto, 8.2, 2.4, mats.teja));
  /* Cumbrera y limatesas con teja de remate, y canalon blanco en los aleros:
     son las lineas que hacen que una cubierta se lea como cubierta. La
     geometria replica la de cubierta(): mismo vuelo y misma altura. */
  var vA = C.x0 - 2.4, vB = C.x1 + 2.4, vC = C.z0 - 2.4, vD = C.z1 + 2.4;
  var sang = Math.min((vD - vC) / 2, (vB - vA) / 2 - 0.5), yr = C.alto + 8.2;
  var R0 = [vA + sang, yr, cz], R1 = [vB - sang, yr, cz];
  var remate = new MeshStandardMaterial({ color: new Color('#8d4a2c'), roughness: 0.8 });
  g.add(barra(R0, R1, 0.55, remate));
  g.add(barra([vA, C.alto, vC], R0, 0.5, remate));
  g.add(barra([vA, C.alto, vD], R0, 0.5, remate));
  g.add(barra([vB, C.alto, vC], R1, 0.5, remate));
  g.add(barra([vB, C.alto, vD], R1, 0.5, remate));
  g.add(caja(vB - vA, 0.4, 0.45, mats.trim, cx, C.alto - 0.1, vD));
  g.add(caja(vB - vA, 0.4, 0.45, mats.trim, cx, C.alto - 0.1, vC));
  g.add(caja(0.35, C.alto, 0.35, mats.trim, vA + 0.3, C.alto / 2, vD - 0.1));
  g.add(caja(0.35, C.alto, 0.35, mats.trim, vB - 0.3, C.alto / 2, vD - 0.1));

  /* Fachada a la calle: garaje a la derecha, entrada a la izquierda. */
  var zf = C.z1 + 0.01;
  g.add(caja(16, 7.6, 0.5, mats.garaje, 12, 3.9, zf));
  g.add(caja(16.7, 8.3, 0.3, mats.trim, 12, 4.2, zf - 0.06));
  for (var i = 0; i < 4; i++) {
    g.add(caja(15.6, 0.12, 0.62, mats.trim, 12, 1.1 + i * 1.85, zf));
  }
  g.add(caja(3.4, 7.4, 0.45, mats.puerta, -12, 3.7, zf));
  /* Pomo y plafones de la puerta. */
  g.add(caja(0.22, 0.22, 0.5, mats.trim, -10.9, 3.5, zf + 0.1));
  g.add(caja(2.4, 2.6, 0.5, mats.puerta, -12, 5.3, zf + 0.04));
  g.add(caja(2.4, 2.6, 0.5, mats.puerta, -12, 2.1, zf + 0.04));
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
  var listaArbustos = [[-24, -8, 1.5], [-18.5, -8, 1.2], [-3, -8.4, 1.4], [2, -8.4, 1.2],
                  [7, -8.4, 1.3], [21, -8.6, 1.6], [-30, 6, 1.8], [-30, 14, 1.5],
                  [30, 4, 1.7], [30, 13, 1.4]];
  g.add(arbustos(listaArbustos));
  /* Ninguna palmera pisa la piscina ni su terraza: el vaso va en x -44..-30 y
     z -40..-16, y la terraza en x -47..-27, z -45..-11. Las dos que caian ahi
     dentro se reparten por el jardin. */
  var palmas = [[-34, 12, 17], [-41, 2, 13], [41, 20, 15], [40, -6, 19],
                [-44, -48, 16], [26, -44, 18], [-32, 31, 12], [-31, 19, 14]];
  for (var q = 0; q < palmas.length; q++) {
    g.add(palmera(palmas[q][0], palmas[q][1], palmas[q][2]));
  }

  /* Una persona junto a la cerca del frente. Es la referencia que hace legible
     la altura: entre 5 y 6 pies hay doce pulgadas que sin nada al lado no se
     ven. Va FUERA de la cerca, en la acera junto al porton peatonal: dentro
     del jardin quedaba en sombra contra la valla y costaba encontrarla. Y en
     el naranja de la marca, que no se confunde con nada de la escena. */
  g.add(Persona.crear(-8.6, 29.2, Math.PI * 0.94, '#ff7133'));

  /* Buzon: pequeño, pero es una referencia de altura que todo el mundo tiene
     calibrada, y ayuda a leer si la cerca es de 4 o de 6 pies. */
  g.add(caja(0.32, 4, 0.32, mats.puerta, -22, 2, 30));
  g.add(caja(1.5, 0.9, 0.9, mats.trim, -22, 4.3, 30));

  return { grupo: g, mats: mats };
}
