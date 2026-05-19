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
  <section style={{
    background: '#faf9f7', padding: '88px 0',
    borderTop: '1px solid rgba(0,16,17,0.08)',
  }}>
    <div className="container">
      {/* Editorial header */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 56, alignItems: 'end',
        paddingBottom: 32, marginBottom: 40,
        borderBottom: '1px solid rgba(0,16,17,0.12)',
      }}>
        <div>
          <div className="mono" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            fontSize: 11, fontWeight: 700, letterSpacing: '0.22em',
            color: 'var(--tangerine)', textTransform: 'uppercase',
            marginBottom: 16,
          }}>
            <span style={{
              width: 8, height: 8, borderRadius: '50%',
              background: '#22c55e',
              boxShadow: '0 0 0 4px rgba(34,197,94,0.25)',
            }}/>
            Live now · Mon–Fri 7am–4pm
          </div>
          <h2 className="display" style={{
            margin: 0, fontSize: 'clamp(28px, 3vw, 44px)',
            lineHeight: 1, letterSpacing: '-0.02em',
            maxWidth: 620,
          }}>
            Talk to a <span style={{ color: 'var(--tangerine)' }}>real sales rep</span>
            <span style={{ color: 'var(--charcoal)', fontWeight: 700 }}> — no chatbot.</span>
          </h2>
        </div>
        <p style={{
          margin: 0, maxWidth: 320, justifySelf: 'end', textAlign: 'right',
          fontSize: 13.5, lineHeight: 1.6, color: 'var(--charcoal)',
        }}>
          Two reps splitting calls Mon–Fri. Avg pickup under 18 seconds during business hours.
        </p>
      </div>

      {/* Two contact cards — ink + white for visual rhythm */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        {/* CALL card — ink */}
        <a href="tel:2396895496" style={{
          display: 'block', padding: '40px 36px',
          background: 'var(--ink)', color: 'var(--parchment)',
          textDecoration: 'none',
          border: '1px solid var(--ink)',
          transition: 'transform 0.18s ease, box-shadow 0.18s ease',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 18px 36px -18px rgba(26,37,72,0.5)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            marginBottom: 32,
          }}>
            <div className="mono" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              fontSize: 10, fontWeight: 700, letterSpacing: '0.22em',
              color: 'var(--tangerine)', textTransform: 'uppercase',
            }}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 3h3l1.5 4-2 1c1 2 2.5 3.5 4.5 4.5l1-2 4 1.5v3c0 0.5-0.5 1-1 1C8 16 0 8 0 4c0-0.5 0.5-1 1-1z" stroke="currentColor" strokeWidth="1.4" fill="none"/>
              </svg>
              01 — Call
            </div>
            <span style={{
              width: 38, height: 38, borderRadius: '50%',
              background: 'var(--tangerine)', color: 'var(--ink)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square"/>
              </svg>
            </span>
          </div>
          <div className="display" style={{
            fontSize: 'clamp(30px, 3.6vw, 46px)',
            lineHeight: 1, letterSpacing: '-0.02em',
            marginBottom: 18,
          }}>
            (239) 689-5496
          </div>
          <div className="mono" style={{
            fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'var(--alice-blue)', lineHeight: 1.5,
          }}>
            Avg pickup · under 18 seconds<br/>
            Fort Myers + Port Charlotte yards
          </div>
        </a>

        {/* EMAIL card — white */}
        <a href="mailto:sales@westernfencesupply.com" style={{
          display: 'block', padding: '40px 36px',
          background: 'var(--white)', color: 'var(--ink)',
          textDecoration: 'none',
          border: '1px solid var(--ink)',
          transition: 'transform 0.18s ease, box-shadow 0.18s ease',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 18px 36px -18px rgba(0,16,17,0.25)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            marginBottom: 32,
          }}>
            <div className="mono" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              fontSize: 10, fontWeight: 700, letterSpacing: '0.22em',
              color: 'var(--tangerine)', textTransform: 'uppercase',
            }}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <rect x="1.5" y="3" width="13" height="10" stroke="currentColor" strokeWidth="1.4"/>
                <path d="M1.5 4 L8 9 L14.5 4" stroke="currentColor" strokeWidth="1.4"/>
              </svg>
              02 — Email
            </div>
            <span style={{
              width: 38, height: 38, borderRadius: '50%',
              background: 'var(--ink)', color: 'var(--white)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square"/>
              </svg>
            </span>
          </div>
          <div className="display" style={{
            fontSize: 'clamp(20px, 2.2vw, 28px)',
            lineHeight: 1.1, letterSpacing: '-0.01em',
            marginBottom: 18,
            wordBreak: 'break-all',
          }}>
            sales@westernfencesupply.com
          </div>
          <div className="mono" style={{
            fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'var(--charcoal)', lineHeight: 1.5,
          }}>
            Quote turnaround · 18 hrs avg this week<br/>
            Attach a sketch or survey if you have one
          </div>
        </a>
      </div>
    </div>
  </section>
);

Object.assign(window, { EstimateHero, LiveAgentBand });
