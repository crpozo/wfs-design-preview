/* WFS Training Companion landing — standalone page, not linked from the
   sales navigation. Explains the platform, shows the tutorial video and
   sends the user to the existing login.

   VIDEO DELIVERY: the tutorial plays from the locally hosted MP4
   (assets/training/wfs-training-tutorial.mp4, H.264/AAC, faststart).
   If it fails to load, the player falls back automatically to the
   Google Drive embed, and the text fallback under the player always
   offers the login path. */

const TRAINING_LOGIN_URL = 'https://westernfencesupply.com/training/';
const TRAINING_MP4 = 'assets/training/wfs-training-tutorial.mp4';
const TRAINING_DRIVE_EMBED = 'https://drive.google.com/file/d/1JgoXBp87xjLGzI-_v1GMf9HHah75Vhie/preview';

const TrainingHeader = () => {
  const t = useT();
  const [curLang, setCurLang] = useLang();
  return (
    <header style={{
      background: 'var(--white)', borderBottom: '1px solid rgba(0,16,17,0.1)',
      position: 'sticky', top: 0, zIndex: 50,
    }}>
      <div className="container" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        paddingTop: 14, paddingBottom: 14, gap: 20,
      }}>
        <a href="Homepage.html" style={{ display: 'inline-flex', alignItems: 'center' }}>
          <img src="assets/wfs-logo.svg" alt="Western Fence Supply" style={{ height: 36, width: 'auto', display: 'block' }}/>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <span className="mono" style={{
            fontSize: 12, fontWeight: 700, letterSpacing: '0.2em',
            textTransform: 'uppercase', color: 'var(--charcoal)',
          }}>{t('Training Companion', 'Training Companion')}</span>
          <div className="mono" style={{ display: 'inline-flex', gap: 12, fontSize: 12, fontWeight: 700, letterSpacing: '0.14em' }}>
            {['EN', 'ES'].map((l) => (
              <button key={l} onClick={() => setCurLang(l)} style={{
                padding: 0, background: 'transparent', cursor: 'pointer',
                fontFamily: 'inherit', fontSize: 12, fontWeight: 700, letterSpacing: '0.14em',
                color: curLang === l ? 'var(--ink)' : 'rgba(0,16,17,0.35)',
                borderBottom: curLang === l ? '2px solid var(--tangerine)' : '2px solid transparent',
              }}>{l}</button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

const TrainingHero = () => {
  const t = useT();
  return (
    <section style={{ background: 'var(--ink)', color: 'var(--white)', padding: 'clamp(56px, 9vh, 96px) 0 clamp(40px, 6vh, 64px)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="mono" style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          padding: '7px 14px', marginBottom: 22,
          border: '1px solid rgba(255,255,255,0.35)',
          fontSize: 12, fontWeight: 700, letterSpacing: '0.22em',
          textTransform: 'uppercase', color: 'var(--white)',
        }}>
          <span aria-hidden style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--tangerine)' }}/>
          {t('Internal training', 'Capacitación interna')}
        </div>
        <h1 className="display" style={{
          margin: 0, fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1.02,
          fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.01em',
        }}>
          WFS <span style={{ color: 'var(--tangerine)' }}>Training Companion</span>
        </h1>
        <p className="display" style={{
          margin: '14px 0 0', fontSize: 'clamp(17px, 1.8vw, 24px)', fontWeight: 700,
          color: 'var(--blue-ice)', letterSpacing: '0',
        }}>
          {t('Learn the platform before you begin.', 'Conoce la plataforma antes de empezar.')}
        </p>
        <p style={{
          margin: '18px auto 0', maxWidth: 560,
          fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,0.8)',
        }}>
          {t('This short tutorial walks you through the modules, how to navigate the platform, and how your progress is tracked — everything you need to get started with confidence.',
             'Este tutorial corto te muestra los módulos, cómo navegar la plataforma y cómo se registra tu progreso: todo lo que necesitas para empezar con confianza.')}
        </p>
      </div>
    </section>
  );
};

const TrainingVideo = () => {
  const t = useT();
  /* 'native' -> try the locally hosted MP4; 'drive' -> Google Drive embed;
     the text fallback below the player always offers the login path. */
  const [mode, setMode] = React.useState('native');
  return (
    <section style={{ background: 'var(--ink)', padding: '0 0 clamp(56px, 9vh, 96px)' }}>
      <div className="container" style={{ maxWidth: 1000 }}>
        <div style={{
          position: 'relative', aspectRatio: '16 / 9',
          background: '#1a2350', border: '1px solid rgba(255,255,255,0.15)',
          overflow: 'hidden',
        }}>
          {mode === 'native' ? (
            <video
              controls
              playsInline
              preload="metadata"
              poster="assets/training/poster.svg"
              onError={() => setMode('drive')}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', background: '#1a2350' }}
            >
              <source src={TRAINING_MP4} type="video/mp4" onError={() => setMode('drive')} />
            </video>
          ) : (
            <iframe
              title="WFS Training Companion tutorial"
              src={TRAINING_DRIVE_EMBED}
              allow="fullscreen"
              allowFullScreen
              loading="lazy"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
            />
          )}
        </div>
        {/* Required error fallback, always available under the player */}
        <p className="mono" style={{
          margin: '14px 0 0', textAlign: 'center',
          fontSize: 12.5, letterSpacing: '0.08em', lineHeight: 1.6,
          color: 'rgba(255,255,255,0.6)',
        }}>
          {t('The tutorial could not be loaded? Please try again or', '¿No carga el tutorial? Inténtalo de nuevo o')}{' '}
          <a href={TRAINING_LOGIN_URL} target="_blank" rel="noopener" style={{ color: 'var(--tangerine)' }}>
            {t('continue to login', 'continúa al inicio de sesión')}
          </a>.
        </p>
      </div>
    </section>
  );
};

const TrainingLearn = () => {
  const t = useT();
  const blocks = [
    [{ EN: 'Navigate the Modules', ES: 'Navega los módulos' },
     { EN: 'Find your assigned modules, move between lessons, and pick up exactly where you left off.', ES: 'Encuentra tus módulos asignados, muévete entre lecciones y retoma exactamente donde te quedaste.' },
     (<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="7" height="7" rx="1"/><rect x="14" y="4" width="7" height="7" rx="1"/><rect x="3" y="15" width="7" height="7" rx="1"/><rect x="14" y="15" width="7" height="7" rx="1"/></svg>)],
    [{ EN: 'Complete Your Training', ES: 'Completa tu capacitación' },
     { EN: 'Work through each lesson at your pace and mark them complete as you go.', ES: 'Avanza cada lección a tu ritmo y márcalas como completadas conforme avanzas.' },
     (<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11 L12 14 L20 6"/><path d="M20 12 V19 a2 2 0 0 1 -2 2 H5 a2 2 0 0 1 -2 -2 V6 a2 2 0 0 1 2 -2 h9"/></svg>)],
    [{ EN: 'Track Your Progress', ES: 'Sigue tu progreso' },
     { EN: 'See what is done, what is pending, and how far you are from finishing your training.', ES: 'Ve qué está hecho, qué falta y cuánto te queda para terminar tu capacitación.' },
     (<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20 V10"/><path d="M10 20 V4"/><path d="M16 20 V14"/><path d="M22 20 H2"/></svg>)],
  ];
  return (
    <section style={{ background: 'var(--white)', padding: 'clamp(64px, 9vh, 110px) 0' }}>
      <div className="container">
        <h2 className="display" style={{
          margin: '0 0 40px', textAlign: 'center',
          fontSize: 'clamp(26px, 2.8vw, 40px)', fontWeight: 800,
          textTransform: 'uppercase', letterSpacing: '-0.01em',
        }}>
          {t("What you'll", 'Lo que vas a')}{' '}
          <span style={{ color: 'var(--tangerine)' }}>{t('learn.', 'aprender.')}</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {blocks.map(([title, body, icon], i) => (
            <div key={i} style={{
              border: '1px solid rgba(0,16,17,0.12)', padding: '30px 28px',
            }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: 52, height: 52, marginBottom: 18,
                border: '1.5px solid var(--ink)', color: 'var(--tangerine)',
              }}>{icon}</span>
              <h3 className="display" style={{ margin: '0 0 10px', fontSize: 20, lineHeight: 1.15 }}>{t(title)}</h3>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'var(--charcoal)' }}>{t(body)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TrainingCTA = () => {
  const t = useT();
  return (
    <section style={{ background: 'var(--ink)', color: 'var(--white)', padding: 'clamp(64px, 9vh, 110px) 0', textAlign: 'center' }}>
      <div className="container">
        <h2 className="display" style={{
          margin: 0, fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 800,
          textTransform: 'uppercase', letterSpacing: '-0.01em',
        }}>
          {t('Ready to', '¿Listo para')}{' '}
          <span style={{ color: 'var(--tangerine)' }}>{t('begin?', 'empezar?')}</span>
        </h2>
        <a href={TRAINING_LOGIN_URL} target="_blank" rel="noopener"
          onClick={() => { if (window.gtag) window.gtag('event', 'training_login_click'); }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 12,
            marginTop: 28, padding: '17px 34px',
            background: 'var(--tangerine)', color: 'var(--white)',
            fontFamily: 'var(--sans)', fontSize: 14, fontWeight: 700,
            letterSpacing: '0.16em', textTransform: 'uppercase',
            boxShadow: '0 12px 32px rgba(255, 113, 51,0.4)',
            transition: 'transform 0.18s, box-shadow 0.18s',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = ''; }}>
          {t('Login to Training Companion', 'Iniciar sesión en Training Companion')}
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
        </a>
        <p className="mono" style={{
          margin: '22px 0 0', fontSize: 12, letterSpacing: '0.14em',
          textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)',
        }}>
          {t('First time here? Watch the tutorial above before logging in.', '¿Primera vez aquí? Mira el tutorial de arriba antes de iniciar sesión.')}
        </p>
      </div>
    </section>
  );
};

const TrainingFooter = () => {
  const t = useT();
  return (
    <footer style={{ background: 'var(--ink)', borderTop: '1px solid rgba(255,255,255,0.12)', padding: '22px 0' }}>
      <div className="container" style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap',
      }}>
        <span className="mono" style={{ fontSize: 12, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase' }}>
          © Western Fence Supply · {t('Internal training resource', 'Recurso interno de capacitación')}
        </span>
        <a href="Homepage.html" className="mono" style={{ fontSize: 12, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase' }}>
          westernfencesupply.com
        </a>
      </div>
    </footer>
  );
};

Object.assign(window, { TrainingHeader, TrainingHero, TrainingVideo, TrainingLearn, TrainingCTA, TrainingFooter });
