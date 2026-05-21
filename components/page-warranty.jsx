/* Warranty + Warranty Claims + Manufacturer Specs pages */

/* ═══════════════════════════════════════════════════════════
   1. WARRANTY — Lifetime warranty coverage details
   ═══════════════════════════════════════════════════════════ */

const WarrantyHero = () => (
  <PageHero
    crumbs={[['Home', 'Homepage.html'], ['Warranty', null]]}
    eyebrow="Warranty · Coverage"
    title="Lifetime warranty"
    accent="on every system we make."
    subtitle="Material-specific terms below, written in plain English. Manufacturer-backed, transferable to the next owner, and claimable from either yard."
    image="assets/ec-fence.jpg"
  />
);

const WarrantyHighlights = () => {
  const cards = [
    {
      title: 'Manufacturer-backed',
      body: 'Every system we sell is covered by the original manufacturer warranty plus our in-house workmanship guarantee on welded and fabricated assemblies.',
      svg: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 L19 6 V12 Q19 17 12 21 Q5 17 5 12 V6 Z"/><path d="M9 12 L11 14 L15 10"/></svg>),
    },
    {
      title: 'Transferable',
      body: 'Sell the house — the warranty goes with it. New owners can register with original PO + closing date and keep full coverage.',
      svg: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12 H20"/><path d="M14 6 L20 12 L14 18"/><path d="M10 18 L4 12 L10 6"/></svg>),
    },
    {
      title: 'Honored at both yards',
      body: 'Claim from Fort Myers or Port Charlotte. Same rep network, same SKUs in stock, same turnaround on warranty replacements.',
      svg: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21 Q4 14 4 9 A8 8 0 0 1 20 9 Q20 14 12 21 Z"/><circle cx="12" cy="9.5" r="2.6"/></svg>),
    },
  ];
  return (
    <section style={{ background: 'var(--white)', padding: '88px 0' }}>
      <div className="container">
        <PageSectionHeader
          number="01" label="At a glance"
          title="What you get"
          accent="on day one."
          sub="Coverage starts the day material leaves the yard. Register your PO online or by phone — both work."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
          {cards.map(c => (
            <article key={c.title} style={{
              background: 'var(--white)',
              border: '1.5px solid var(--ink)',
              padding: '32px 30px',
              minHeight: 240,
            }}>
              <div style={{ marginBottom: 24, color: 'var(--tangerine)' }}>{c.svg}</div>
              <h3 className="display" style={{
                margin: '0 0 12px', fontSize: 19,
                letterSpacing: '-0.005em', color: 'var(--ink)',
              }}>{c.title}</h3>
              <p className="mono" style={{
                margin: 0, fontSize: 13, lineHeight: 1.65,
                color: 'var(--charcoal)',
              }}>{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const WarrantyMaterialTable = () => (
  <section style={{ background: '#faf9f7', padding: '88px 0' }}>
    <div className="container">
      <PageSectionHeader
        number="02" label="Coverage by material"
        title="Terms vary by system,"
        accent="not by yard."
        sub="The full legal warranty doc is on the spec sheet for each system. The table below is the short version."
        link={['Download specs', 'specs.html']}
      />
      <div style={{ border: '1.5px solid var(--ink)', overflow: 'hidden' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 1.2fr',
          background: 'var(--ink)', color: 'var(--white)',
        }}>
          {['System', 'Structural', 'Finish', 'Notes'].map((h, i) => (
            <div key={i} className="mono" style={{
              padding: '16px 18px',
              fontSize: 11, fontWeight: 700, letterSpacing: '0.22em',
              textTransform: 'uppercase',
              borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.15)',
            }}>{h}</div>
          ))}
        </div>
        {[
          ['Vinyl / PVC',          'Lifetime',     'Lifetime UV',   'Veka-extruded. No fading, peeling or rotting.'],
          ['Aluminum',             'Lifetime',     '20-year finish','Powder-coat over marine-grade extrusion.'],
          ['Chain Link · Galv',    'Rust-thru',    '—',             'ASTM A392 zinc-coat. Salt-air rated.'],
          ['Chain Link · PVC',     'Rust-thru',    '15-year color', 'Black, brown, green PVC-coated.'],
          ['Metal / DuraFence',    '20 years',     '10-year finish','HVHZ-rated aluminum board.'],
          ['EC Fence',             'Lifetime',     '20-year finish','Self-mating galv steel, Exp. C wind-load.'],
          ['Gates · welded',       '10 years',     'Per system',    'WFS in-house weld + hardware coverage.'],
        ].map((row, ri) => (
          <div key={ri} style={{
            display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 1.2fr',
            background: ri % 2 === 0 ? 'var(--white)' : '#faf9f7',
            borderTop: '1px solid rgba(0,16,17,0.08)',
          }}>
            {row.map((cell, ci) => (
              <div key={ci} style={{
                padding: '16px 18px',
                fontSize: 13.5, lineHeight: 1.5,
                color: ci === 0 ? 'var(--ink)' : 'var(--ink)',
                fontWeight: ci === 0 ? 700 : 400,
                fontFamily: ci === 0 ? 'var(--mono)' : 'var(--sans)',
                letterSpacing: ci === 0 ? '0.06em' : 'normal',
                textTransform: ci === 0 ? 'uppercase' : 'none',
                borderLeft: ci === 0 ? 'none' : '1px solid rgba(0,16,17,0.08)',
              }}>{cell}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WarrantyExclusions = () => {
  const items = [
    ['Impact damage',             'Vehicles, fallen trees, lawn equipment, intentional impact.'],
    ['Acts of God beyond rated wind load', 'Hurricane damage above the system\'s rated wind speed (HVHZ rating per system).'],
    ['Improper installation',     'Coverage assumes WFS spec install. Use a certified installer to keep terms intact.'],
    ['Normal cosmetic wear',      'Scratches, dings, scuffs and minor surface abrasion from normal use.'],
    ['Vandalism + theft',         'Pickets cut, mesh sliced, hardware removed.'],
    ['Modified material',         'Posts cut down on-site, panels repainted with non-spec finish, etc.'],
  ];
  return (
    <section style={{ background: 'var(--white)', padding: '88px 0' }}>
      <div className="container">
        <PageSectionHeader
          number="03" label="Exclusions"
          title="What's not covered."
          accent="No surprises."
          sub="Manufacturer warranty doesn't cover damage you'd file with insurance. If you're unsure whether something qualifies, call us before opening a claim."
        />
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 0,
          border: '1.5px solid var(--ink)',
        }}>
          {items.map(([t, body], i) => (
            <div key={i} style={{
              padding: '24px 26px',
              borderRight: (i % 2 === 0) ? '1.5px solid var(--ink)' : 'none',
              borderBottom: (i < items.length - 2) ? '1.5px solid var(--ink)' : 'none',
              background: 'var(--white)',
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                <span style={{
                  width: 28, height: 28, flexShrink: 0,
                  border: '1.5px solid var(--ink)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--tangerine)',
                }}>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M4 4 L12 12 M12 4 L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
                <div>
                  <h3 className="display" style={{
                    margin: '0 0 6px', fontSize: 15,
                    letterSpacing: '-0.005em', color: 'var(--ink)',
                  }}>{t}</h3>
                  <p className="mono" style={{
                    margin: 0, fontSize: 12.5, lineHeight: 1.6,
                    color: 'var(--charcoal)',
                  }}>{body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WarrantyProcess = () => {
  const steps = [
    { n: '01', t: 'Document', body: 'Take dated photos of the issue, find your original PO, and note install date if known.' },
    { n: '02', t: 'Submit',   body: 'Open a claim online or call the yard. Average response in 24 hours, often same-day.' },
    { n: '03', t: 'Inspect',  body: 'A WFS rep visits in-county (FM + PC) or coordinates with your certified installer.' },
    { n: '04', t: 'Replace',  body: 'Approved claims ship replacement material from stock — most within 1–2 business days.' },
  ];
  return (
    <section style={{ background: '#faf9f7', padding: '88px 0' }}>
      <div className="container">
        <PageSectionHeader
          number="04" label="Process"
          title="From claim to"
          accent="replacement."
          sub="The full lifecycle, end to end. Most homeowner claims close inside two weeks."
          link={['Start a claim', 'warranty-claims.html']}
        />
        <div style={{
          position: 'relative',
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 24,
        }}>
          {/* Connector */}
          <div aria-hidden style={{
            position: 'absolute', top: 36, left: '10%', right: '10%', height: 1,
            borderTop: '1px dashed rgba(26,37,72,0.2)',
            zIndex: 0, pointerEvents: 'none',
          }}/>
          {steps.map((s, i) => (
            <div key={s.n} style={{
              position: 'relative', zIndex: 1,
              background: 'var(--white)',
              border: '1.5px solid var(--ink)',
              padding: '24px 24px 28px',
            }}>
              <span className="mono" style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: 36, height: 36,
                background: i === 0 ? 'var(--tangerine)' : 'var(--ink)',
                color: 'var(--white)',
                fontSize: 11, fontWeight: 700, letterSpacing: '0.05em',
                marginBottom: 22,
              }}>{s.n}</span>
              <h3 className="display" style={{
                margin: '0 0 10px', fontSize: 18,
                letterSpacing: '-0.005em', color: 'var(--ink)',
              }}>{s.t}</h3>
              <p className="mono" style={{
                margin: 0, fontSize: 12.5, lineHeight: 1.6,
                color: 'var(--charcoal)',
              }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WarrantyCTA = () => (
  <CTABand
    kicker="Need to start a claim?"
    title="Open a warranty claim,"
    accent="we respond in 24 hours."
    body="Have your PO number, install date and a few dated photos ready. Or call the yard and a rep will walk you through it."
    primary={['Start a claim', 'warranty-claims.html']}
    secondary={['Call (239) 689-5496', 'tel:2396895496']}
    theme="ink"
  />
);

const WarrantyPage = () => (
  <>
    <SiteHeader active="Warranty" />
    <WarrantyHero />
    <WarrantyHighlights />
    <WarrantyMaterialTable />
    <WarrantyExclusions />
    <WarrantyProcess />
    <WarrantyCTA />
    <Footer />
  </>
);

/* ═══════════════════════════════════════════════════════════
   2. WARRANTY CLAIMS — Submit a claim
   ═══════════════════════════════════════════════════════════ */

const ClaimsHero = () => (
  <PageHero
    crumbs={[['Home', 'Homepage.html'], ['Warranty', 'warranty.html'], ['Submit a claim', null]]}
    eyebrow="Warranty · Claims"
    title="Submit a warranty claim."
    accent="24-hour response."
    subtitle="One short form, four required fields. A rep follows up by phone the next business morning to schedule inspection or ship replacement material."
    image="assets/gate-cantilever.jpg"
  />
);

const ClaimsProcess = () => {
  const steps = [
    { n: '01', t: 'Find your PO',         body: 'PO number is on your invoice or pickup slip. Don\'t have it? Call the yard — we look it up by phone, address or last name.' },
    { n: '02', t: 'Photograph the issue', body: 'Three dated photos minimum: wide shot, close-up, and one showing scale. Phone camera is fine.' },
    { n: '03', t: 'Submit the form',      body: 'PO + install date + photos + a short description. Submit triggers an email confirmation with your claim number.' },
    { n: '04', t: 'We come look',         body: 'For in-county claims a WFS rep schedules inspection within 5 business days. Out-of-county we coordinate with your installer.' },
  ];
  return (
    <section style={{ background: 'var(--white)', padding: '88px 0 64px' }}>
      <div className="container">
        <PageSectionHeader
          number="01" label="Process"
          title="How a claim works."
          accent="Four steps."
          sub="Most claims are resolved inside two weeks from first photo to replacement material in your hands."
        />
        <div style={{
          position: 'relative',
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 24,
        }}>
          <div aria-hidden style={{
            position: 'absolute', top: 36, left: '10%', right: '10%', height: 1,
            borderTop: '1px dashed rgba(26,37,72,0.2)',
            zIndex: 0, pointerEvents: 'none',
          }}/>
          {steps.map((s, i) => (
            <div key={s.n} style={{
              position: 'relative', zIndex: 1,
              background: 'var(--white)',
              border: '1.5px solid var(--ink)',
              padding: '24px 24px 28px',
            }}>
              <span className="mono" style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: 36, height: 36,
                background: i === 0 ? 'var(--tangerine)' : 'var(--ink)',
                color: 'var(--white)',
                fontSize: 11, fontWeight: 700, letterSpacing: '0.05em',
                marginBottom: 22,
              }}>{s.n}</span>
              <h3 className="display" style={{
                margin: '0 0 10px', fontSize: 18,
                letterSpacing: '-0.005em', color: 'var(--ink)',
              }}>{s.t}</h3>
              <p className="mono" style={{
                margin: 0, fontSize: 12.5, lineHeight: 1.6,
                color: 'var(--charcoal)',
              }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ClaimsForm = () => {
  const Field = ({ label, name, type = 'text', placeholder, required, children, span = 1 }) => (
    <div style={{ gridColumn: `span ${span}` }}>
      <label htmlFor={name} className="mono" style={{
        display: 'block', marginBottom: 8,
        fontSize: 10.5, fontWeight: 700, letterSpacing: '0.18em',
        textTransform: 'uppercase', color: 'var(--ink)',
      }}>
        {label} {required && <span style={{ color: 'var(--tangerine)' }}>*</span>}
      </label>
      {children || (
        <input
          id={name} name={name} type={type} placeholder={placeholder}
          style={{
            width: '100%', padding: '14px 16px',
            border: '1.5px solid var(--ink)', background: 'var(--white)',
            fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--ink)',
            outline: 'none',
          }}
        />
      )}
    </div>
  );

  return (
    <section style={{ background: '#faf9f7', padding: '64px 0 96px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.7fr 1fr', gap: 56, alignItems: 'start' }}>
          {/* Left — form card */}
          <article style={{
            background: 'var(--white)',
            border: '1.5px solid var(--ink)',
            padding: '40px 44px',
            boxShadow: '8px 8px 0 var(--tangerine)',
          }}>
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              paddingBottom: 22, marginBottom: 28,
              borderBottom: '1px dashed rgba(26,37,72,0.18)',
            }}>
              <h3 className="display" style={{
                margin: 0, fontSize: 22, letterSpacing: '-0.01em', color: 'var(--ink)',
              }}>Claim form</h3>
              <span className="mono" style={{
                fontSize: 10, fontWeight: 700, letterSpacing: '0.22em',
                color: 'var(--charcoal)', textTransform: 'uppercase',
              }}>≈ 4 minutes</span>
            </div>

            <form onSubmit={e => { e.preventDefault(); alert('Demo form — would submit to claims@westernfencesupply.com'); }}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>

              <Field label="Full name" name="name" required placeholder="Marisol R."/>
              <Field label="Phone" name="phone" type="tel" required placeholder="(239) 555-0142"/>

              <Field label="Email" name="email" type="email" required placeholder="you@email.com" span={2}/>

              <Field label="PO / Invoice #" name="po" required placeholder="e.g. WFS-2025-04812"/>
              <Field label="Install date" name="install" type="date" required/>

              <Field label="Material / system" name="material" span={2}>
                <select id="material" name="material" defaultValue=""
                  style={{
                    width: '100%', padding: '14px 16px',
                    border: '1.5px solid var(--ink)', background: 'var(--white)',
                    fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--ink)',
                    outline: 'none',
                  }}>
                  <option value="" disabled>Select the system on your claim…</option>
                  <option>Vinyl / PVC</option>
                  <option>Aluminum</option>
                  <option>Chain Link · Galvanized</option>
                  <option>Chain Link · Vinyl-coated</option>
                  <option>Metal / DuraFence</option>
                  <option>EC Fence</option>
                  <option>Welded gate</option>
                  <option>Hardware</option>
                </select>
              </Field>

              <Field label="What's happening?" name="description" required span={2}>
                <textarea id="description" name="description" rows={5}
                  placeholder="Briefly describe the issue, when you noticed it, and approx. linear feet affected."
                  style={{
                    width: '100%', padding: '14px 16px',
                    border: '1.5px solid var(--ink)', background: 'var(--white)',
                    fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--ink)',
                    outline: 'none', resize: 'vertical', minHeight: 120,
                  }}/>
              </Field>

              <Field label="Photos (min. 3)" name="photos" span={2}>
                <div style={{
                  border: '1.5px dashed var(--ink)', background: '#faf9f7',
                  padding: '28px 22px', textAlign: 'center',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
                }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="6" width="18" height="14" rx="1"/>
                    <circle cx="12" cy="13" r="3.5"/>
                    <path d="M8 6 L9.5 4 H14.5 L16 6"/>
                  </svg>
                  <div className="mono" style={{
                    fontSize: 12, fontWeight: 700, letterSpacing: '0.14em',
                    textTransform: 'uppercase', color: 'var(--ink)',
                  }}>Drag photos here, or click to browse</div>
                  <div className="mono" style={{ fontSize: 10.5, color: 'var(--charcoal)', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                    JPG / PNG / HEIC · 20 MB max
                  </div>
                  <input type="file" id="photos" name="photos" accept="image/*" multiple style={{ display: 'none' }}/>
                </div>
              </Field>

              <div style={{ gridColumn: 'span 2', display: 'flex', gap: 16, alignItems: 'center', marginTop: 8, flexWrap: 'wrap' }}>
                <button type="submit" style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  padding: '16px 36px',
                  background: 'var(--ink)', color: 'var(--white)',
                  fontFamily: 'var(--sans)', fontSize: 12.5, fontWeight: 700,
                  letterSpacing: '0.18em', textTransform: 'uppercase',
                  border: 'none', cursor: 'pointer',
                  boxShadow: '6px 6px 0 var(--tangerine)',
                  transition: 'transform 0.18s ease, box-shadow 0.18s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-2px,-2px)'; e.currentTarget.style.boxShadow = '8px 8px 0 var(--tangerine)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '6px 6px 0 var(--tangerine)'; }}>
                  Submit claim
                </button>
                <span className="mono" style={{
                  fontSize: 10.5, fontWeight: 700, letterSpacing: '0.16em',
                  textTransform: 'uppercase', color: 'var(--charcoal)',
                }}>
                  You'll get a claim number by email
                </span>
              </div>
            </form>
          </article>

          {/* Right — help sidebar */}
          <aside style={{ position: 'sticky', top: 100, display: 'grid', gap: 16 }}>
            <div style={{
              background: 'var(--ink)', color: 'var(--white)',
              padding: '28px 28px 26px',
            }}>
              <div className="mono" style={{
                fontSize: 10, fontWeight: 700, letterSpacing: '0.22em',
                color: 'var(--tangerine)', textTransform: 'uppercase',
                marginBottom: 14,
                display: 'flex', alignItems: 'center', gap: 10,
              }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 0 3px rgba(34,197,94,0.25)' }}/>
                Live · 7am – 4pm EST
              </div>
              <h3 className="display" style={{
                margin: '0 0 16px', fontSize: 22, lineHeight: 1.1, color: 'var(--white)',
              }}>Can't find your PO?</h3>
              <p className="mono" style={{
                margin: '0 0 22px', fontSize: 13, lineHeight: 1.65,
                color: 'rgba(255,255,255,0.78)',
              }}>
                Call the yard. We pull the order by phone, address, or last name in under two minutes.
              </p>
              <a href="tel:2396895496" className="display" style={{
                display: 'block', marginBottom: 6,
                fontSize: 22, color: 'var(--white)', lineHeight: 1.1,
                letterSpacing: '-0.005em',
              }}>(239) 689-5496</a>
              <a href="mailto:claims@westernfencesupply.com" className="mono" style={{
                display: 'block', wordBreak: 'break-all',
                fontSize: 12, color: 'rgba(255,255,255,0.7)',
              }}>claims@westernfencesupply.com</a>
            </div>

            <div style={{
              background: 'var(--white)',
              border: '1.5px solid var(--ink)',
              padding: '24px 26px',
            }}>
              <div className="mono" style={{
                fontSize: 10, fontWeight: 700, letterSpacing: '0.22em',
                color: 'var(--tangerine)', textTransform: 'uppercase',
                marginBottom: 14,
              }}>What to expect</div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 12 }}>
                {[
                  ['Response window', '≤ 24 business hrs'],
                  ['In-county inspect', '≤ 5 business days'],
                  ['Stock-item replace', '1–2 business days'],
                  ['Welded re-fab', '5–10 business days'],
                ].map(([k, v]) => (
                  <li key={k} style={{
                    display: 'flex', justifyContent: 'space-between',
                    paddingBottom: 10, borderBottom: '1px dashed rgba(26,37,72,0.18)',
                  }}>
                    <span className="mono" style={{ fontSize: 12, color: 'var(--charcoal)' }}>{k}</span>
                    <span className="mono" style={{
                      fontSize: 12, fontWeight: 700, color: 'var(--ink)',
                    }}>{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

const ClaimsCTA = () => (
  <CTABand
    kicker="Not sure if it's covered?"
    title="Read the warranty doc"
    accent="before you file."
    body="Coverage, exclusions and material-specific terms in one page. Two minutes to scan."
    primary={['Read the warranty', 'warranty.html']}
    secondary={['Call the yard', 'tel:2396895496']}
  />
);

const WarrantyClaimsPage = () => (
  <>
    <SiteHeader active="Warranty" />
    <ClaimsHero />
    <ClaimsProcess />
    <ClaimsForm />
    <ClaimsCTA />
    <Footer />
  </>
);

/* ═══════════════════════════════════════════════════════════
   3. SPECS — Manufacturer Specs library
   ═══════════════════════════════════════════════════════════ */

const SpecsHero = () => (
  <PageHero
    crumbs={[['Home', 'Homepage.html'], ['Warranty', 'warranty.html'], ['Manufacturer Specs', null]]}
    eyebrow="Warranty · Specs"
    title="Manufacturer specs,"
    accent="ready to send."
    subtitle="PDF spec sheets, profile drawings and wind-load data for every system we stock. Formatted for AHJ submission and HOA review. Stamped copies on request."
    image="assets/hero-warehouse.webp"
  />
);

const SpecsLibrary = () => {
  const [filter, setFilter] = React.useState('All');
  const docs = [
    // Fences
    { cat: 'Fences', title: 'Vinyl Privacy + Picket Profiles',     meta: 'PDF · 1.1 MB · 24 pages',  rev: 'Rev. 2026.02' },
    { cat: 'Fences', title: 'Aluminum 3 / 4 / 5 Rail Systems',     meta: 'PDF · 980 KB · 18 pages',  rev: 'Rev. 2026.01' },
    { cat: 'Fences', title: 'Chain Link — Gauges + Mesh Chart',    meta: 'PDF · 620 KB · 8 pages',   rev: 'Rev. 2025.11' },
    { cat: 'Fences', title: 'DuraFence — Aluminum Board Privacy',  meta: 'PDF · 1.4 MB · 22 pages',  rev: 'Rev. 2025.12' },
    { cat: 'Fences', title: 'EC Fence — Exposure C Wind Load',     meta: 'PDF · 1.2 MB · 16 pages',  rev: 'Rev. 2026.01', isNew: true },
    // Gates
    { cat: 'Gates',  title: 'Single + Double Swing Gates',         meta: 'PDF · 740 KB · 12 pages',  rev: 'Rev. 2025.10' },
    { cat: 'Gates',  title: 'Sliding + Cantilever Gates',          meta: 'PDF · 980 KB · 18 pages',  rev: 'Rev. 2025.12' },
    { cat: 'Gates',  title: 'Industrial Rolling Gates',            meta: 'PDF · 820 KB · 14 pages',  rev: 'Rev. 2025.10' },
    { cat: 'Gates',  title: 'Gate Hardware + Latch Catalog',       meta: 'PDF · 540 KB · 10 pages',  rev: 'Rev. 2025.09' },
    // Code
    { cat: 'Code',   title: 'Florida Pool Code — Profile Sheet',   meta: 'PDF · 1.6 MB · 20 pages',  rev: 'Rev. 2026.01' },
    { cat: 'Code',   title: 'HVHZ Wind-Load Letter (Miami-Dade)',  meta: 'PDF · 320 KB · 4 pages',   rev: 'Rev. 2026.01' },
    { cat: 'Code',   title: 'NEC Bonding for Metallic Fences',     meta: 'PDF · 280 KB · 4 pages',   rev: 'Rev. 2025.08' },
    // Finishes
    { cat: 'Finishes', title: 'Powder-coat Color Library',         meta: 'PDF · 1.8 MB · 32 pages',  rev: 'Rev. 2026.01' },
    { cat: 'Finishes', title: 'PVC Color Chart — Vinyl-coated',    meta: 'PDF · 460 KB · 4 pages',   rev: 'Rev. 2025.11' },
  ];
  const cats = ['All', 'Fences', 'Gates', 'Code', 'Finishes'];
  const visible = filter === 'All' ? docs : docs.filter(d => d.cat === filter);

  return (
    <section style={{ background: 'var(--white)', padding: '88px 0' }}>
      <div className="container">
        <PageSectionHeader
          number="01" label="Library"
          title="The full library,"
          accent="filtered or browsed."
          sub="Pick a category or scan the whole list. Every doc carries a revision date — older revs available on request."
        />
        {/* Filter chips */}
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 28 }}>
          {cats.map(c => {
            const active = filter === c;
            return (
              <button key={c} onClick={() => setFilter(c)} className="mono" style={{
                padding: '10px 18px',
                background: active ? 'var(--ink)' : 'var(--white)',
                color: active ? 'var(--white)' : 'var(--ink)',
                border: '1.5px solid var(--ink)',
                fontSize: 11, fontWeight: 700, letterSpacing: '0.18em',
                textTransform: 'uppercase', cursor: 'pointer',
                transition: 'all 0.18s ease',
              }}>{c}</button>
            );
          })}
          <span className="mono" style={{
            marginLeft: 'auto', alignSelf: 'center',
            fontSize: 10.5, fontWeight: 700, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: 'var(--charcoal)',
          }}>{visible.length} document{visible.length === 1 ? '' : 's'}</span>
        </div>
        {/* Downloads grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
          {visible.map((d, i) => (
            <a key={d.title} href="#"
              onClick={e => e.preventDefault()}
              style={{
                display: 'flex', alignItems: 'center', gap: 18,
                padding: '22px 24px',
                border: '1.5px solid var(--ink)',
                background: 'var(--white)', color: 'var(--ink)',
                position: 'relative',
                transition: 'transform 0.18s ease, box-shadow 0.18s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '6px 6px 0 var(--tangerine)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
              {/* PDF tile */}
              <span style={{
                width: 56, height: 56, flexShrink: 0,
                background: 'var(--ink)', color: 'var(--white)',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--sans)', fontSize: 10, fontWeight: 700,
                letterSpacing: '0.12em',
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 3 H15 L19 7 V21 H7 Z"/>
                  <path d="M15 3 V7 H19"/>
                </svg>
                <span style={{ marginTop: 2 }}>PDF</span>
              </span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                  <span className="mono" style={{
                    fontSize: 9.5, fontWeight: 700, letterSpacing: '0.22em',
                    color: 'var(--tangerine)', textTransform: 'uppercase',
                  }}>{d.cat}</span>
                  {d.isNew && (
                    <span className="mono" style={{
                      padding: '2px 8px',
                      background: 'var(--tangerine)', color: 'var(--white)',
                      fontSize: 8.5, fontWeight: 700, letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                    }}>New</span>
                  )}
                </div>
                <div style={{
                  fontSize: 14.5, fontWeight: 600, color: 'var(--ink)',
                  lineHeight: 1.35, marginBottom: 6,
                }}>{d.title}</div>
                <div style={{
                  display: 'flex', gap: 12, flexWrap: 'wrap',
                  fontFamily: 'var(--mono)', fontSize: 10.5,
                  letterSpacing: '0.14em', textTransform: 'uppercase',
                  color: 'var(--charcoal)', fontWeight: 700,
                }}>
                  <span>{d.meta}</span>
                  <span>·</span>
                  <span>{d.rev}</span>
                </div>
              </div>
              <span style={{
                flexShrink: 0,
                width: 36, height: 36,
                background: 'var(--tangerine)', color: 'var(--white)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2v10m0 0l-4-4m4 4l4-4M3 14h12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="square"/>
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const SpecsStamped = () => (
  <section style={{ background: '#faf9f7', padding: '88px 0' }}>
    <div className="container">
      <div style={{
        display: 'grid', gridTemplateColumns: '1.2fr 1fr',
        gap: 48, alignItems: 'center',
        background: 'var(--ink)', color: 'var(--white)',
        padding: '56px 56px',
        boxShadow: '12px 12px 0 var(--tangerine)',
      }}>
        <div>
          <div className="mono" style={{
            fontSize: 11, fontWeight: 700, letterSpacing: '0.24em',
            color: 'var(--tangerine)', textTransform: 'uppercase',
            marginBottom: 18,
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <span style={{ width: 32, height: 1, background: 'var(--tangerine)' }}/>
            02 — Stamped / sealed
          </div>
          <h2 className="display" style={{
            margin: '0 0 18px', fontSize: 'clamp(26px, 3vw, 38px)',
            lineHeight: 1.05, letterSpacing: '-0.015em', color: 'var(--white)',
          }}>
            Need a stamped<br/>copy for AHJ?
          </h2>
          <p className="mono" style={{
            margin: 0, fontSize: 14, lineHeight: 1.7,
            color: 'rgba(255,255,255,0.78)', maxWidth: 480,
          }}>
            We have a licensed FL Professional Engineer on retainer for stamped wind-load letters, structural calcs and HVHZ submission packages. Most stamped requests close in 5–7 business days.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <a href="mailto:engineering@westernfencesupply.com" style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            padding: '16px 28px',
            background: 'var(--tangerine)', color: 'var(--white)',
            fontFamily: 'var(--sans)', fontSize: 12, fontWeight: 700,
            letterSpacing: '0.18em', textTransform: 'uppercase',
          }}>Request stamped doc</a>
          <a href="tel:2396895496" style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            padding: '16px 28px',
            background: 'transparent', color: 'var(--white)',
            border: '1.5px solid rgba(255,255,255,0.5)',
            fontFamily: 'var(--sans)', fontSize: 12, fontWeight: 700,
            letterSpacing: '0.18em', textTransform: 'uppercase',
          }}>(239) 689-5496</a>
        </div>
      </div>
    </div>
  </section>
);

const SpecsCTA = () => (
  <CTABand
    kicker="Don't see what you need?"
    title="Email engineering,"
    accent="we'll cut it for you."
    body="Custom specs, color drops, project-specific cut sheets — we generate one-off PDFs for HOAs, AHJs and commercial submittals."
    primary={['Request custom spec', 'mailto:engineering@westernfencesupply.com']}
    secondary={['Browse warranty', 'warranty.html']}
  />
);

const SpecsPage = () => (
  <>
    <SiteHeader active="Warranty" />
    <SpecsHero />
    <SpecsLibrary />
    <SpecsStamped />
    <SpecsCTA />
    <Footer />
  </>
);

Object.assign(window, {
  WarrantyHero, WarrantyHighlights, WarrantyMaterialTable, WarrantyExclusions,
  WarrantyProcess, WarrantyCTA, WarrantyPage,
  ClaimsHero, ClaimsProcess, ClaimsForm, ClaimsCTA, WarrantyClaimsPage,
  SpecsHero, SpecsLibrary, SpecsStamped, SpecsCTA, SpecsPage,
});
