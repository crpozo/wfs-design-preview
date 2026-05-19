/* Estimate page — hero + live agent (form comes from FinalCTA in sections.jsx) */

const EstimateHero = () => (
  <PageHero
    eyebrow="Quote in 24 hours"
    title="Tell us your run."
    accent="We'll come back with stock + price."
    subtitle="Send your linear feet, height, gate count and ZIP. One rep follows the order from quote to pickup or delivery — no chatbot in between."
    image="https://images.unsplash.com/photo-1718909704612-29e9707612b7?auto=format&fit=crop&w=1600&q=80"
  />
);

const LiveAgentBand = () => (
  <section style={{ background: 'var(--ink)', color: 'var(--parchment)', padding: '56px 0' }}>
    <div className="container">
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32, alignItems: 'center',
      }}>
        <div>
          <div className="mono" style={{
            fontSize: 11, fontWeight: 700, letterSpacing: '0.22em',
            color: 'var(--tangerine)', textTransform: 'uppercase', marginBottom: 14,
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 0 4px rgba(34,197,94,0.25)' }}/>
            Live now · Mon–Fri 7am–4pm
          </div>
          <h2 className="display" style={{ margin: 0, fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: 1, letterSpacing: '-0.02em' }}>
            Talk to a<br/>
            <span style={{ color: 'var(--tangerine)' }}>real sales rep.</span>
          </h2>
        </div>
        <div>
          <div className="mono" style={{ fontSize: 10, letterSpacing: '0.22em', color: 'var(--tangerine)', fontWeight: 700, marginBottom: 8 }}>Call</div>
          <a href="tel:2396895496" className="display" style={{ fontSize: 28, color: 'var(--white)', lineHeight: 1.1 }}>(239) 689-5496</a>
          <div style={{ marginTop: 14, fontSize: 13, color: 'var(--alice-blue)' }}>Avg pickup time: under 18 seconds during business hours.</div>
        </div>
        <div>
          <div className="mono" style={{ fontSize: 10, letterSpacing: '0.22em', color: 'var(--tangerine)', fontWeight: 700, marginBottom: 8 }}>Email</div>
          <a href="mailto:sales@westernfencesupply.com" style={{ fontSize: 18, color: 'var(--white)', lineHeight: 1.2, wordBreak: 'break-all' }}>
            sales@westernfencesupply.com
          </a>
          <div style={{ marginTop: 14, fontSize: 13, color: 'var(--alice-blue)' }}>Quote turnaround on email: 18 hrs avg this week.</div>
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { EstimateHero, LiveAgentBand });
