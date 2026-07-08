/* Solutions page, who we serve + yard locations */

const SolutionsHero = () => {
  const t = useT();
  return (
  <PageHero
    crumbs={[[t('Home', 'Inicio'), 'Homepage.html'], [t('Solutions', 'Soluciones'), null]]}
    eyebrow={t('Who we serve · SW Florida', 'A quién servimos · suroeste de Florida')}
    title={t('Built for the way', 'Hecho para la forma')}
    accent={t('you actually buy fence.', 'en que realmente compra cerca.')}
    subtitle={t('Contractors, homeowners, DIY builders and commercial GCs. Same supplier-direct pricing, same in-house fabrication shop, same two yards.', 'Contratistas, propietarios, constructores de bricolaje y contratistas generales comerciales. Los mismos precios directos de proveedor, el mismo taller de fabricación en planta, las mismas dos sucursales.')}
    image="assets/wfs-shop.webp"
  />
  );
};

const SolutionsAudiences = () => {
  const t = useT();
  const audiences = [
    {
      tag: t('For Contractors', 'Para contratistas'),
      title: t('Predictable lead times,', 'Tiempos de entrega predecibles,'),
      accent: t('better job margins.', 'mejores márgenes de obra.'),
      body: t('Account-level pricing on volume, dedicated sales rep, dispatched delivery from Fort Myers. Ready-to-assemble gates ship welded with hardware kits packed and labeled per opening.', 'Precios a nivel de cuenta por volumen, asesor de ventas dedicado, entrega despachada desde Fort Myers. Los portones listos para ensamblar se envían soldados con kits de herrajes empacados y etiquetados por cada abertura.'),
      bullets: [
        t('Trade accounts after second order', 'Cuentas comerciales después del segundo pedido'),
        t('Will-call staging, pull up to bay, walk out in 15 min', 'Preparación de retiro, acérquese a la bahía y salga en 15 min'),
        t('Custom welded gates fabricated in-house', 'Portones soldados a medida fabricados en planta'),
        t('Job-site delivery across Lee, Collier, Charlotte, Hendry', 'Entrega en obra en Lee, Collier, Charlotte y Hendry'),
      ],
      cta: [t('Open a trade account', 'Abrir una cuenta comercial'), 'estimate.html'],
      image: 'assets/wfs-shop.webp',
    },
    {
      tag: t('For Homeowners', 'Para propietarios'),
      title: t('Same supplier-direct floor', 'El mismo precio directo de proveedor'),
      accent: t('no contractor markup.', 'sin recargo de contratista.'),
      body: t('We sell to the public at the same price contractors pay. No minimums, no membership. We won\'t install, but we\'ll help you spec the material and recommend a trusted local installer.', 'Vendemos al público al mismo precio que pagan los contratistas. Sin mínimos, sin membresía. No instalamos, pero le ayudamos a especificar el material y le recomendamos un instalador local de confianza.'),
      bullets: [
        t('No order minimums, buy one panel or 400 ft', 'Sin pedidos mínimos, compre un panel o 400 ft'),
        t('Hand-drawn layout or survey OK, we figure the takeoff', 'Un plano dibujado a mano o un levantamiento sirven, nosotros calculamos el despiece'),
        t('Pickup at FM or PC; delivery available within Florida', 'Retiro en FM o PC; entrega disponible dentro de Florida'),
        t('Trusted-installer list across 4 counties', 'Lista de instaladores de confianza en 4 condados'),
      ],
      cta: [t('Get a homeowner quote', 'Obtener una cotización para propietario'), 'estimate.html'],
      image: FENCE_IMG.aluminum,
    },
    {
      tag: t('For DIY', 'Para bricolaje'),
      title: t('You\'re building it.', 'Usted lo construye.'),
      accent: t('We\'ll make sure the parts add up.', 'Nosotros nos aseguramos de que las piezas cuadren.'),
      body: t('DIY projects get the same takeoff treatment as contractors. Send us a sketch and we\'ll come back with the full parts list, panels, posts, rails, caps, concrete count and gate hardware.', 'Los proyectos DIY reciben el mismo tratamiento de despiece que los contratistas. Envíenos un boceto y le devolvemos la lista completa de piezas: paneles, postes, rieles, tapas, cantidad de concreto y herrajes de portón.'),
      bullets: [
        t('Free takeoff from your sketch or survey', 'Despiece gratuito a partir de su boceto o levantamiento'),
        t('Hardware kits packed per opening, no missing latch on Saturday morning', 'Kits de herrajes empacados por cada abertura, sin pestillos faltantes el sábado por la mañana'),
        t('Install guides + spec sheets included with every order', 'Guías de instalación + hojas de especificaciones incluidas con cada pedido'),
        t('Phone support during install hours, both yards', 'Soporte telefónico durante el horario de instalación, en ambas sucursales'),
      ],
      cta: [t('Start a DIY takeoff', 'Iniciar un despiece DIY'), 'estimate.html'],
      image: FENCE_IMG.vinyl,
    },
    {
      tag: t('For Commercial / Builders', 'Para comerciales / constructores'),
      title: t('Spec-compliant material,', 'Material conforme a especificación,'),
      accent: t('released to your job number.', 'liberado a su número de obra.'),
      body: t('HVHZ-rated panels, code-compliant pool enclosures, sealed manufacturer specs on request. We work with GCs, property managers, municipalities and self-perform crews.', 'Paneles con certificación HVHZ, cerramientos de piscina conformes al código, especificaciones selladas del fabricante a solicitud. Trabajamos con contratistas generales, administradores de propiedades, municipios y cuadrillas de ejecución propia.'),
      bullets: [
        t('HVHZ Exposure C wind ratings on EC Fence and aluminum', 'Clasificaciones de viento HVHZ Exposición C en EC Fence y aluminio'),
        t('Florida Pool Code-compliant enclosure profiles', 'Perfiles de cerramiento conformes al Florida Pool Code'),
        t('Sealed product data sheets on request', 'Hojas de datos de producto selladas a solicitud'),
        t('Phased deliveries against a release schedule', 'Entregas por fases según un cronograma de liberación'),
      ],
      cta: [t('Submit RFQ', 'Enviar solicitud de cotización'), 'estimate.html'],
      image: FENCE_IMG.chainlink,
    },
  ];

  return (
    <section style={{ background: 'var(--white)', padding: '32px 0 0' }}>
      {audiences.map((a, i) => (
        <SplitBlock
          key={i}
          kicker={`0${i+1}, ${a.tag}`}
          title={a.title}
          accent={a.accent}
          body={a.body}
          bullets={a.bullets}
          image={a.image}
          imageRight={i % 2 === 0}
          dark={i % 2 === 1}
        />
      ))}
    </section>
  );
};

const SolutionsCTA = () => {
  const t = useT();
  return (
  <CTABand
    kicker={t('Not sure which fits?', '¿No está seguro de cuál le conviene?')}
    title={t('Tell us your project.', 'Cuéntenos su proyecto.')}
    accent={t('We\'ll route you to the right rep.', 'Lo dirigimos al asesor indicado.')}
    body={t('One form, one rep, one quote in 24 hours. Doesn\'t matter if you\'re building 80 LF for the backyard or 0.9 miles for a self-storage perimeter.', 'Un formulario, un asesor, una cotización en 24 horas. No importa si construye 80 LF para el patio trasero o 0.9 millas para el perímetro de un self-storage.')}
    primary={[t('Request a quote', 'Solicitar una cotización'), 'estimate.html']}
    secondary={[t('Call Fort Myers', 'Llamar a Fort Myers'), 'tel:2396895496']}
  />
  );
};

Object.assign(window, { SolutionsHero, SolutionsAudiences, SolutionsCTA });
