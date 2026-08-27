/* Vista previa del porton, dentro del propio configurador.
 *
 * En las cercas la vista previa es una foto de producto recortada, y funciona
 * porque existe una foto por perfil y por color. En portones no: hay una
 * docena de fotos sueltas para 5 tipos x 5 materiales x 21 perfiles x sus
 * colores. Poner la foto mas parecida significa enseñar un porton blanco a
 * quien acaba de elegir bronce.
 *
 * Asi que el porton se dibuja. Es el mismo generador que usa la vista 3D de la
 * casa, con las mismas cotas reales, pero aislado y encuadrado como una foto
 * de catalogo: fondo neutro, sombra de apoyo y nada mas. Cualquier combinacion
 * existe, y el color y la altura se ven cambiar al instante.
 */
import { Scene, PerspectiveCamera, WebGLRenderer, Color, Mesh, Fog, Sphere,
         PlaneGeometry, MeshStandardMaterial, DirectionalLight, HemisphereLight,
         AmbientLight, SRGBColorSpace, PCFSoftShadowMap,
         ACESFilmicToneMapping, Box3, Vector3 } from '../vendor/three/three.module.js';
import * as Cerca from './cerca.js';
import * as Persona from './persona.js';
import { Group } from '../vendor/three/three.module.js';

/* Ancho de hueco por tipo. Son los anchos con los que se pide cada uno: un
   peatonal de 4 pies y una corredera de 14 no se encuadran igual. */
var HUECO = { single: 4, double: 12, sliding: 14, cantilever: 16, rolling: 14 };

/* Cuanto tramo de cerca se deja a cada lado. Sin el, el porton flota: son los
   postes y el arranque de la valla los que dicen que aquello es una entrada. */
var ALA = 2.5;

/* Fondo plano, no degradado: con niebla del mismo color el suelo se funde con
   el fondo y desaparece la linea del horizonte, que era lo que delataba que
   aquello era un plano y no un estudio. */
var FONDO = '#eef0f3';

export function montarVista(lienzo) {
  var esc = new Scene();
  esc.background = new Color(FONDO);
  esc.fog = new Fog(new Color(FONDO), 26, 92);

  var cam = new PerspectiveCamera(30, 4 / 3, 0.5, 400);

  var r = new WebGLRenderer({ canvas: lienzo, antialias: true, alpha: false });
  r.shadowMap.enabled = true;
  r.shadowMap.type = PCFSoftShadowMap;
  r.toneMapping = ACESFilmicToneMapping;
  r.toneMappingExposure = 1.06;
  r.outputColorSpace = SRGBColorSpace;

  /* Luz de estudio, no de exterior: el sol de la escena de la casa mete
     sombras largas que aqui cortarian el encuadre. Clave alta a un lado,
     relleno frio al otro para que el canto de los perfiles se lea. */
  var clave = new DirectionalLight(0xfff6ea, 3.1);
  clave.position.set(-16, 22, 20);
  clave.castShadow = true;
  clave.shadow.mapSize.set(1024, 1024);
  var sc = clave.shadow.camera;
  sc.left = -26; sc.right = 26; sc.top = 26; sc.bottom = -26; sc.near = 1; sc.far = 90;
  sc.updateProjectionMatrix();
  /* Sesgo generoso: los paneles de vinilo son caras grandes y planas y con el
     sesgo justo salian moteadas de sombra propia. */
  clave.shadow.bias = -0.0016;
  clave.shadow.normalBias = 0.06;
  esc.add(clave);
  var relleno = new DirectionalLight(0xdce8f5, 0.85);
  relleno.position.set(18, 10, 14);
  esc.add(relleno);
  esc.add(new HemisphereLight(0xdfe8f2, 0x8b9099, 0.55));
  /* Ambiente bajo a proposito: un blanco sobre blanco (vinilo) solo se lee si
     las caras que no dan al sol quedan claramente mas oscuras. */
  esc.add(new AmbientLight(0xffffff, 0.18));

  /* Suelo: no es cesped, es la sombra de apoyo. Del mismo gris que el fondo
     para que no se lea como un plano sino como el pie de la foto. */
  var suelo = new Mesh(
    new PlaneGeometry(300, 300),
    new MeshStandardMaterial({ color: new Color('#e3e6ea'), roughness: 1 })
  );
  suelo.rotation.x = -Math.PI / 2;
  suelo.receiveShadow = true;
  esc.add(suelo);

  var actual = null;
  var giro = 0;

  /* Encuadre de foto de producto: elevacion y giro fijos, y la distancia
     calculada del lado que peor cabe. Antes la camara iba a media altura del
     objeto por una constante y el porton acababa arriba a la izquierda con
     medio encuadre de suelo vacio. */
  var ELEVACION = 0.20;        // ~11 grados sobre el centro del porton
  var GIRO_BASE = 0.58;        // tres cuartos
  /* Cuanto mas girado, mas se acorta el ancho proyectado y mas grande cabe el
     porton en un marco 4:3: de frente, un porton de 12 pies deja media altura
     de encuadre vacia arriba y abajo. */

  function encuadrar(caja) {
    var t = new Vector3(); caja.getSize(t);
    var c = new Vector3(); caja.getCenter(c);
    var vFov = cam.fov * Math.PI / 180;
    var hFov = 2 * Math.atan(Math.tan(vFov / 2) * cam.aspect);
    var az = GIRO_BASE + giro;
    var obj = new Vector3(c.x, Math.max(1, t.y * 0.5), c.z);

    /* Las 8 esquinas de la caja. Se ajusta la distancia sobre su proyeccion
       real, no sobre la esfera envolvente: la esfera cabe siempre pero deja el
       porton pequeño en medio del encuadre, y el ancho proyectado a secas se
       desborda porque de tres cuartos el extremo cercano se agranda. */
    var esquinas = [];
    for (var i = 0; i < 8; i++) {
      esquinas.push(new Vector3(
        i & 1 ? caja.max.x : caja.min.x,
        i & 2 ? caja.max.y : caja.min.y,
        i & 4 ? caja.max.z : caja.min.z
      ));
    }
    var sf = caja.getBoundingSphere(new Sphere());
    var d = sf.radius / Math.sin(Math.min(vFov, hFov) / 2);
    var tv = Math.tan(vFov / 2), th = Math.tan(hFov / 2);

    function colocar(dd) {
      cam.position.set(
        obj.x + dd * Math.cos(ELEVACION) * Math.sin(az),
        obj.y + dd * Math.sin(ELEVACION),
        obj.z + dd * Math.cos(ELEVACION) * Math.cos(az)
      );
      cam.lookAt(obj);
      cam.updateMatrixWorld();
      cam.updateProjectionMatrix();
    }
    /* Tres pasadas bastan: cada una mide cuanto se sale y corrige. */
    for (var k = 0; k < 3; k++) {
      colocar(d);
      var peor = 0;
      for (var j = 0; j < 8; j++) {
        var v = esquinas[j].clone().applyMatrix4(cam.matrixWorldInverse);
        var z = Math.max(0.1, -v.z);
        peor = Math.max(peor, Math.abs(v.x) / (z * th), Math.abs(v.y) / (z * tv));
      }
      d *= peor / 0.94;             // 0.94: un pelin de aire en el borde
    }
    colocar(d);
    esc.fog.near = d * 0.85;
    esc.fog.far = d * 2.6;
    return obj;
  }

  var api = {
    /** Rehace el porton con lo que hay elegido. */
    actualizar: function (est) {
      if (actual) {
        esc.remove(actual);
        actual.traverse(function (o) { if (o.geometry) { o.geometry.dispose(); } });
        actual = null;
      }
      var tipo = est.gate || 'single';
      /* El ancho lo manda la opcion elegida: es lo que distingue un porton
         estandar de uno "a la medida de tu abertura". Sin opcion, la medida
         habitual de ese tipo. */
      var L = est.ancho || HUECO[tipo] || 6;
      var alto = parseFloat(String(est.alto || '6').replace(/[^0-9.]/g, '')) || 6;
      var res = Cerca.construir({
        mat: est.mat, estilo: est.estilo, alto: alto, color: est.colorHex,
        /* Los dos tramos van hacia fuera desde el hueco, y en la corredera el
           de la derecha se alarga para que la hoja aparcada tenga contra que
           apoyarse en vez de quedar suelta en el aire. */
        tramos: [
          { a: [-L / 2 - ALA, 0], b: [-L / 2, 0] },
          { a: [L / 2, 0], b: [L / 2 + ALA + (tipo === 'single' || tipo === 'double' ? 0 : L * 0.95), 0] }
        ],
        huecos: [{ a: [-L / 2, 0], b: [L / 2, 0], tipo: tipo,
                   /* Batientes cerrados: aislados, dos hojas abiertas se leen
                      como dos paneles mas de valla. */
                   abierto: !(tipo === 'single' || tipo === 'double'),
                   /* Correderas a media apertura: del todo dejan un hueco
                      vacio del ancho del porton y la foto se descuadra. */
                   apertura: 0.42 }]
      });
      /* La persona va DENTRO del grupo que se encuadra, no suelta en la
         escena: si queda fuera del calculo, al cambiar de altura la camara se
         reajusta al porton y la referencia se sale del cuadro justo cuando
         hace falta. Se planta al lado del batiente, no delante. */
      actual = new Group();
      actual.add(res.grupo);
      actual.add(Persona.crear(-(L / 2 + ALA) - 1.4, 1.1, Math.PI * 0.78, '#868d99'));
      esc.add(actual);
      var caja = new Box3().setFromObject(actual);
      encuadrar(caja);
      this._caja = caja;
      return res.cuenta;
    },
    girar: function (d) {
      giro = Math.max(-0.6, Math.min(0.6, giro + d));
      if (this._caja) { encuadrar(this._caja); }
    },
    medir: function (w, h) {
      r.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      r.setSize(w, h, false);
      cam.aspect = w / Math.max(1, h);
      if (this._caja) { encuadrar(this._caja); } else { cam.updateProjectionMatrix(); }
    },
    pintar: function () { r.render(esc, cam); },
    soltar: function () {
      esc.traverse(function (o) {
        if (o.geometry) { o.geometry.dispose(); }
        var m = o.material;
        if (!m) { return; }
        var l = Array.isArray(m) ? m : [m];
        for (var i = 0; i < l.length; i++) {
          if (l[i].map) { l[i].map.dispose(); }
          if (l[i].alphaMap) { l[i].alphaMap.dispose(); }
          l[i].dispose();
        }
      });
      r.dispose();
      var gl = r.getContext && r.getContext();
      var ext = gl && gl.getExtension && gl.getExtension('WEBGL_lose_context');
      if (ext) { ext.loseContext(); }
    }
  };
  return api;
}
