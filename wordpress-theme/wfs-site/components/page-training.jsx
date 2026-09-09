/* WFS Training Companion landing, standalone page, not linked from the
   sales navigation. Explains the platform, shows the tutorial video and
   sends the user to the existing login.

   VIDEO DELIVERY: the tutorial plays from the locally hosted MP4
   (assets/training/wfs-training-tutorial.mp4, H.264/AAC, faststart).
   If it fails to load, the player falls back automatically to the
   Google Drive embed, and the text fallback under the player always
   offers the login path. */

const TRAINING_LOGIN_URL = 'https://westernfencesupply.com/training/';
const TRAINING_MP4 = 'https://crpozo.github.io/wfs-design-preview/assets/training/wfs-training-tutorial.mp4';
const TRAINING_DRIVE_EMBED = 'https://drive.google.com/file/d/1JgoXBp87xjLGzI-_v1GMf9HHah75Vhie/preview';

const TrainingHeader = () => {
  const t = useT();
  const [curLang, setCurLang] = useLang();
  return (
    <header style={{
      background: 'var(--white)', borderBottom: '1px solid rgba(0,16,17,0.1)', position: 'sticky', top: 0, zIndex: 50, }}>
      <div className="container" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 14, paddingBottom: 14, gap: 20, }}>
        <a href="Homepage.html" style={{ display: 'inline-flex', alignItems: 'center' }}>
          <img src="https://crpozo.github.io/wfs-design-preview/assets/wfs-logo.svg" alt="Western Fence Supply" style={{ height: 36, width: 'auto', display: 'block' }}/>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <span className="mono" style={{
            fontSize: 13.5, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--charcoal)', }}>{t('Training Companion', 'Training Companion')}</span>
          <div className="mono" style={{ display: 'inline-flex', alignItems: 'center', gap: 14 }}>
            {['EN', 'ES'].map((l) => {
              const isActive = curLang === l;
              return (
                <button key={l} onClick={() => setCurLang(l)} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6, padding: 0, background: 'transparent', cursor: 'pointer', fontFamily: 'inherit', fontSize: 13.5, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: isActive ? 'var(--ink)' : 'rgba(0,16,17,0.35)', }}>
                  <span aria-hidden style={{
                    fontSize: 15.5, lineHeight: 1, filter: isActive ? 'none' : 'grayscale(0.55)', opacity: isActive ? 1 : 0.75, }}>{l === 'EN' ? '🇺🇸' : '🇲🇽'}</span>
                  {l}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

const TrainingHero = () => {
  const t = useT();
  return (
    <section style={{ background: 'var(--ink)', color: 'var(--white)', padding: 'clamp(44px, 7vh, 72px) 0' }}>
      <div className="container">
        <div className="mono" style={{
          display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 18, fontSize: 13.5, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)', }}>
          <span aria-hidden style={{ width: 30, height: 3, background: 'var(--tangerine)', borderRadius: 2 }}/>
          {t('WFS · Internal training', 'WFS · Capacitación interna')}
        </div>
        <h1 className="display" style={{
          margin: 0, fontSize: 'clamp(30px, 3.6vw, 50px)', lineHeight: 1.02, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.01em', }}>
          {t('Before you', 'Antes de')}{' '}
          <span style={{ color: 'var(--tangerine)' }}>{t('begin.', 'empezar.')}</span>
        </h1>
        <div style={{
          marginTop: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap', }}>
          <p style={{ margin: 0, maxWidth: 420, fontSize: 16, lineHeight: 1.6, color: 'rgba(255,255,255,0.8)' }}>
            {t('Two steps between you and your first module: watch the short platform tour, then log in.', 'Dos pasos entre tú y tu primer módulo: mira el recorrido corto de la plataforma y luego inicia sesión.')}
          </p>
          <a href={TRAINING_LOGIN_URL} target="_blank" rel="noopener" className="mono" style={{
            fontSize: 13.5, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--tangerine)', borderBottom: '1px solid rgba(255,113,51,0.5)', paddingBottom: 3, whiteSpace: 'nowrap', }}>
            {t('Already trained? Skip to login →', '¿Ya te capacitaste? Ir al login →')}
          </a>
        </div>
      </div>
    </section>
  );
};

const TrainingSteps = () => {
  const t = useT();
  /* Step 1's player tries the locally hosted MP4 first and falls back to
     the Google Drive embed automatically if it cannot load. */
  const [mode, setMode] = React.useState('native');
  const Circle = ({ n, filled }) => (
    <span className="mono" aria-hidden style={{
      position: 'relative', zIndex: 1, flexShrink: 0, width: 38, height: 38, borderRadius: '50%', background: filled ? 'var(--tangerine)' : 'var(--white)', border: filled ? 'none' : '1.5px solid var(--ink)', color: filled ? 'var(--white)' : 'var(--ink)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 15.5, fontWeight: 700, }}>{n}</span>
  );
  const kickerStyle = {
    fontSize: 13.5, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--tangerine)', marginBottom: 8, };
  const titleStyle = {
    margin: '0 0 10px', fontSize: 'clamp(19px, 1.8vw, 24px)', lineHeight: 1.1, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.01em', color: 'var(--ink)', };
  const bodyStyle = { margin: 0, maxWidth: 560, fontSize: 16, lineHeight: 1.65, color: 'var(--charcoal)' };
  return (
    <section style={{ background: 'var(--white)', padding: 'clamp(56px, 8vh, 90px) 0 clamp(64px, 9vh, 110px)' }}>
      <div className="container" style={{ maxWidth: 900 }}>
        <div style={{ position: 'relative' }}>
          {/* Timeline spine */}
          <div aria-hidden style={{ position: 'absolute', left: 19, top: 10, bottom: 10, width: 1, background: 'rgba(38,49,102,0.2)' }}/>

          {/* Step 1: watch the tour (video inside) */}
          <div style={{ display: 'grid', gridTemplateColumns: '64px 1fr', alignItems: 'start', paddingBottom: 'clamp(40px, 6vh, 64px)' }}>
            <Circle n="1" filled/>
            <div>
              <div className="mono" style={kickerStyle}>{t('Required · 3:14', 'Obligatorio · 3:14')}</div>
              <h2 className="display" style={titleStyle}>{t('Watch the platform tour', 'Mira el recorrido de la plataforma')}</h2>
              <p style={bodyStyle}>
                {t('The modules, how to navigate, and how your progress is tracked, everything you need to get started with confidence.', 'Los módulos, cómo navegar y cómo se registra tu progreso, todo lo que necesitas para empezar con confianza.')}
              </p>
              {/* Player */}
              <div style={{ marginTop: 24, maxWidth: 680 }}>
                <div style={{
                  position: 'relative', aspectRatio: '16 / 9', background: '#1a2350', border: '1px solid rgba(0,16,17,0.15)', overflow: 'hidden', }}>
                  {mode === 'native' ? (
                    <video
                      controls
                      playsInline
                      preload="metadata"
                      poster="https://crpozo.github.io/wfs-design-preview/assets/training/poster.svg"
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
                  {/* Duration chip */}
                  <span className="mono" aria-hidden style={{
                    position: 'absolute', top: 12, right: 12, background: 'var(--ink)', color: 'var(--white)', padding: '4px 9px', fontSize: 13.5, fontWeight: 700, letterSpacing: '0.1em', pointerEvents: 'none', }}>3:14</span>
                </div>
                {/* Caption + fallback row */}
                <div style={{
                  marginTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16, flexWrap: 'wrap', }}>
                  <span className="mono" style={{
                    fontSize: 13, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--charcoal)', }}>{t('Welcome to the Training Companion', 'Bienvenido al Training Companion')}</span>
                  <span style={{ fontSize: 14.5, color: 'var(--charcoal)' }}>
                    {t('Not loading?', '¿No carga?')}{' '}
                    <a href={TRAINING_LOGIN_URL} target="_blank" rel="noopener" style={{ color: 'var(--tangerine)' }}>
                      {t('Continue to login', 'Continúa al login')}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: what the tour covers */}
          <div style={{ display: 'grid', gridTemplateColumns: '64px 1fr', alignItems: 'start', paddingBottom: 'clamp(40px, 6vh, 64px)' }}>
            <Circle n="2"/>
            <div>
              <div className="mono" style={kickerStyle}>{t('In the tour', 'En el recorrido')}</div>
              <h2 className="display" style={titleStyle}>{t('Know your way around', 'Ubícate en la plataforma')}</h2>
              <p style={bodyStyle}>
                {t("You'll see how to find your assigned modules, work through lessons at your pace, mark them complete, and check how far you are from finishing.", 'Verás cómo encontrar tus módulos asignados, avanzar las lecciones a tu ritmo, marcarlas como completadas y revisar cuánto te falta para terminar.')}
              </p>
            </div>
          </div>

          {/* Step 3: log in */}
          <div style={{ display: 'grid', gridTemplateColumns: '64px 1fr', alignItems: 'start' }}>
            <Circle n="3"/>
            <div>
              <div className="mono" style={kickerStyle}>{t('Then', 'Después')}</div>
              <h2 className="display" style={titleStyle}>{t('Log in and start module one', 'Inicia sesión y empieza el módulo uno')}</h2>
              <p style={bodyStyle}>
                {t('Your progress is saved automatically, leave any time and pick up exactly where you left off.', 'Tu progreso se guarda automáticamente, sal cuando quieras y retoma exactamente donde te quedaste.')}
              </p>
              <div style={{ marginTop: 22, display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap' }}>
                <a href={TRAINING_LOGIN_URL} target="_blank" rel="noopener"
                  onClick={() => { if (window.gtag) window.gtag('event', 'training_login_click'); }}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 12, padding: '15px 26px', background: 'var(--tangerine)', color: 'var(--white)', fontFamily: 'var(--sans)', fontSize: 14.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', boxShadow: '0 10px 26px rgba(255, 113, 51,0.35)', transition: 'transform 0.18s', }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; }}>
                  {t('Login to Training Companion', 'Iniciar sesión en Training Companion')}
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
                </a>
                <span className="mono" style={{
                  fontSize: 13, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--charcoal)', }}>{t('Uses your WFS staff credentials', 'Usa tus credenciales de personal WFS')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TrainingFooter = () => {
  const t = useT();
  return (
    <footer style={{ background: 'var(--ink)', borderTop: '1px solid rgba(255,255,255,0.12)', padding: '22px 0' }}>
      <div className="container" style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap', }}>
        <span className="mono" style={{ fontSize: 13.5, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase' }}>
          © Western Fence Supply · {t('Internal training resource', 'Recurso interno de capacitación')}
        </span>
        <a href="Homepage.html" className="mono" style={{ fontSize: 13.5, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase' }}>
          westernfencesupply.com
        </a>
      </div>
    </footer>
  );
};

Object.assign(window, { TrainingHeader, TrainingHero, TrainingSteps, TrainingFooter });
