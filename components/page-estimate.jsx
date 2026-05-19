/* Estimate page — quote intake, calculator, draw-my-fence stub, live agent */

const EstimateHero = () => (
  <PageHero
    crumbs={[['Home', 'Homepage.html'], ['Get a Quote', null]]}
    eyebrow="Quote in 24 hours"
    title="Tell us your run."
    accent="We'll come back with stock + price."
    subtitle="Three ways to start: a quick calculator, a sketch tool, or our intake form. Same rep follows the order from quote to pickup or delivery."
    image="https://images.unsplash.com/photo-1718909704612-29e9707612b7?auto=format&fit=crop&w=1600&q=80"
  />
);

const EstimatePaths = () => (
  <section style={{ background: 'var(--white)', padding: '64px 0 32px' }}>
    <div className="container">
      <PageSectionHeader
        number="01" label="Pick a starting point"
        title="Two ways"
        accent="to get a quote."
        sub="Both land in the same inbox. Whichever feels easier."
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
        {[
          { tag: 'Visual',   title: 'Draw my fence', body: 'Sketch your layout in the browser, drop gate openings, hit submit. We figure the takeoff.', href: '#draw', cta: 'Open sketch tool' },
          { tag: 'Detailed', title: 'Intake form',   body: 'Project type, height, gates, ZIP, anything else relevant. Pair it with a survey or photo if you have one.', href: '#form', cta: 'Open form' },
        ].map((c, i) => (
          <a key={c.title} href={c.href} style={{
            display: 'block', padding: 28,
            background: i === 0 ? 'var(--ink)' : 'var(--white)',
            color: i === 0 ? 'var(--parchment)' : 'var(--ink)',
            border: `1px solid ${i === 0 ? 'var(--ink)' : 'rgba(0,16,17,0.12)'}`,
          }}>
            <div className="mono" style={{
              fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase',
              color: 'var(--tangerine)', fontWeight: 700, marginBottom: 22,
            }}>0{i+1} · {c.tag}</div>
            <h3 className="display" style={{ margin: '0 0 12px', fontSize: 24, lineHeight: 1.1 }}>{c.title}</h3>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: i === 0 ? 'var(--alice-blue)' : 'var(--charcoal)', maxWidth: 280 }}>{c.body}</p>
            <div style={{ marginTop: 22, display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 600, fontFamily: 'var(--mono)', letterSpacing: '0.18em', textTransform: 'uppercase', color: i === 0 ? 'var(--tangerine)' : 'var(--ink)' }}>
              {c.cta}
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square"/></svg>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const DrawMyFence = () => (
  <section id="draw" style={{ background: 'var(--parchment)', padding: '64px 0' }}>
    <div className="container">
      <PageSectionHeader
        number="02" label="Draw my fence"
        title="Sketch your layout —"
        accent="we'll handle the takeoff."
        sub="Drag the edges of your property, drop in gate openings, mark height. We'll come back with the parts list."
      />
      <div style={{
        position: 'relative',
        aspectRatio: '16 / 9',
        background: 'var(--white)',
        border: '1px solid var(--ink)',
        overflow: 'hidden',
      }}>
        {/* Faux canvas grid */}
        <div aria-hidden style={{
          position: 'absolute', inset: 0,
          backgroundImage:
            'linear-gradient(rgba(26,37,72,0.08) 1px, transparent 1px),' +
            'linear-gradient(90deg, rgba(26,37,72,0.08) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}/>
        {/* Sketched lot */}
        <svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid meet"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <polygon points="120,80 680,80 680,360 380,360 380,300 120,300"
            fill="rgba(255,113,51,0.08)" stroke="#ff7133" strokeWidth="2" strokeDasharray="6 4"/>
          {[
            [120, 80], [680, 80], [680, 360], [380, 360], [380, 300], [120, 300],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="6" fill="#1a2548" stroke="#fff" strokeWidth="2"/>
          ))}
          {/* Gate markers */}
          <g>
            <rect x="260" y="74" width="60" height="12" fill="#ff7133"/>
            <text x="290" y="68" textAnchor="middle" fontSize="11" fontFamily="ui-monospace" fill="#1a2548" fontWeight="700">GATE · 8 ft</text>
          </g>
          <g>
            <rect x="670" y="190" width="20" height="60" fill="#ff7133"/>
            <text x="652" y="225" textAnchor="end" fontSize="11" fontFamily="ui-monospace" fill="#1a2548" fontWeight="700">WALK · 4 ft</text>
          </g>
        </svg>
        {/* Tools overlay */}
        <div style={{
          position: 'absolute', top: 16, left: 16,
          background: 'rgba(26,37,72,0.95)', color: 'var(--white)',
          padding: '12px 14px',
          display: 'flex', gap: 8, alignItems: 'center',
        }}>
          {['Edge', 'Gate', 'Height', 'Material'].map((t, i) => (
            <button key={t} className="mono" style={{
              padding: '6px 10px', fontSize: 10, letterSpacing: '0.18em', fontWeight: 700,
              background: i === 0 ? 'var(--tangerine)' : 'transparent',
              color: i === 0 ? 'var(--ink)' : 'var(--white)',
              border: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.3)',
              textTransform: 'uppercase', cursor: 'pointer',
            }}>{t}</button>
          ))}
        </div>
        <div className="mono" style={{
          position: 'absolute', bottom: 16, right: 16,
          background: 'var(--white)', color: 'var(--ink)',
          padding: '10px 14px',
          fontSize: 11, letterSpacing: '0.18em',
          textTransform: 'uppercase', fontWeight: 700,
        }}>1,180 LF · 2 gates · 6 ft</div>
      </div>
      <div style={{ marginTop: 22, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 14 }}>
        <p className="mono" style={{ margin: 0, fontSize: 11, letterSpacing: '0.18em', color: 'var(--charcoal)', textTransform: 'uppercase' }}>
          Beta preview · launches in this UI
        </p>
        <a href="#form" className="btn btn-primary">Send sketch to a rep <ArrowRight /></a>
      </div>
    </div>
  </section>
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

Object.assign(window, { EstimateHero, EstimatePaths, DrawMyFence, LiveAgentBand });
