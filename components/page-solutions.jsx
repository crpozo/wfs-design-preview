/* Solutions page, who we serve + yard locations */

const SolutionsHero = () => (
  <PageHero
    crumbs={[['Home', 'Homepage.html'], ['Solutions', null]]}
    eyebrow="Who we serve · SW Florida"
    title="Built for the way"
    accent="you actually buy fence."
    subtitle="Contractors, homeowners, DIY builders and commercial GCs. Same supplier-direct pricing, same in-house fabrication shop, same two yards."
    image="assets/wfs-shop.webp"
  />
);

const SolutionsAudiences = () => {
  const audiences = [
    {
      tag: 'For Contractors',
      title: 'Predictable lead times,',
      accent: 'better job margins.',
      body: 'Account-level pricing on volume, dedicated sales rep, dispatched delivery from Fort Myers. Ready-to-assemble gates ship welded with hardware kits packed and labeled per opening.',
      bullets: [
        'Trade accounts after second order',
        'Will-call staging, pull up to bay, walk out in 15 min',
        'Custom welded gates fabricated in-house',
        'Job-site delivery across Lee, Collier, Charlotte, Hendry',
      ],
      cta: ['Open a trade account', 'estimate.html'],
      image: 'assets/wfs-shop.webp',
    },
    {
      tag: 'For Homeowners',
      title: 'Same supplier-direct floor',
      accent: 'no contractor markup.',
      body: 'We sell to the public at the same price contractors pay. No minimums, no membership. We won\'t install, but we\'ll help you spec the material and recommend a trusted local installer.',
      bullets: [
        'No order minimums, buy one panel or 400 ft',
        'Hand-drawn layout or survey OK, we figure the takeoff',
        'Pickup at FM or PC; delivery available within Florida',
        'Trusted-installer list across 4 counties',
      ],
      cta: ['Get a homeowner quote', 'estimate.html'],
      image: FENCE_IMG.aluminum,
    },
    {
      tag: 'For DIY',
      title: 'You\'re building it.',
      accent: 'We\'ll make sure the parts add up.',
      body: 'DIY projects get the same takeoff treatment as contractors. Send us a sketch and we\'ll come back with the full parts list, panels, posts, rails, caps, concrete count and gate hardware.',
      bullets: [
        'Free takeoff from your sketch or survey',
        'Hardware kits packed per opening, no missing latch on Saturday morning',
        'Install guides + spec sheets included with every order',
        'Phone support during install hours, both yards',
      ],
      cta: ['Start a DIY takeoff', 'estimate.html'],
      image: FENCE_IMG.vinyl,
    },
    {
      tag: 'For Commercial / Builders',
      title: 'Spec-compliant material,',
      accent: 'released to your job number.',
      body: 'HVHZ-rated panels, code-compliant pool enclosures, sealed manufacturer specs on request. We work with GCs, property managers, municipalities and self-perform crews.',
      bullets: [
        'HVHZ Exposure C wind ratings on EC Fence and aluminum',
        'Florida Pool Code-compliant enclosure profiles',
        'Sealed product data sheets on request',
        'Phased deliveries against a release schedule',
      ],
      cta: ['Submit RFQ', 'estimate.html'],
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

const SolutionsCTA = () => (
  <CTABand
    kicker="Not sure which fits?"
    title="Tell us your project."
    accent="We'll route you to the right rep."
    body="One form, one rep, one quote in 24 hours. Doesn't matter if you're building 80 LF for the backyard or 0.9 miles for a self-storage perimeter."
    primary={['Request a quote', 'estimate.html']}
    secondary={['Call Fort Myers', 'tel:2396895496']}
  />
);

Object.assign(window, { SolutionsHero, SolutionsAudiences, SolutionsCTA });
