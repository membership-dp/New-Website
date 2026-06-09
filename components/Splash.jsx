// Splash.jsx — invitation gate with staggered intro + smooth exit
const { useState: useSplashState } = React;

function Splash({ onEnter }) {
  const [leaving, setLeaving] = useSplashState(false);

  const handleEnter = () => {
    if (leaving) return;
    const prefersReduced = window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) { onEnter(); return; }
    setLeaving(true);
    setTimeout(onEnter, 520);
  };

  return (
    <section className={`splash-root ${leaving ? 'is-leaving' : ''}`} style={{
      position: 'relative',
      backgroundImage: `url('assets/hero-sunset.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'var(--color-bone)',
      display: 'grid',
      placeItems: 'center',
      padding: '64px 24px',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(rgba(15,25,40,0.55), rgba(15,25,40,0.78))',
      }} />
      <div className="splash-intro splash-stage" style={{
        position: 'relative',
        width: '100%',
        maxWidth: 720,
        textAlign: 'center',
      }}>
        <img src="assets/logo-emblem-white.png" className="splash-logo"
          style={{ height: 120, marginBottom: 56, display: 'inline-block' }} alt="" />
        <div style={{
          font: '500 11px/1 var(--font-body)',
          letterSpacing: '0.36em',
          textTransform: 'uppercase',
          color: 'var(--color-pennant-yellow)',
          marginBottom: 28,
        }}>
          By Invitation Only
        </div>
        <h1 className="display-xl" style={{ color: 'var(--color-bone)', margin: 0 }}>
          Dutchman's Pipe
        </h1>
        <div className="splash-tagline" style={{
          font: '400 18px/1.5 var(--font-body)',
          color: 'rgba(245,241,232,0.8)',
          marginTop: 28,
          maxWidth: 520,
          marginInline: 'auto',
        }}>
          A private golf and racquets sanctuary in West Palm Beach.
        </div>
        <div style={{ marginTop: 56, display: 'flex', justifyContent: 'center' }}>
          <button onClick={handleEnter} className="btn btn-ghost-light" style={{
            padding: '18px 36px',
            gap: 14,
            minHeight: 52,
            justifyContent: 'center',
          }}>
            Enter
            <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M0 5h16M12 1l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" strokeLinejoin="miter" fill="none"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
window.Splash = Splash;
