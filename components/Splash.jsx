// Splash.jsx — invitation gate
function Splash({ onEnter }) {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
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
      <div style={{
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
        <div style={{ marginTop: 56 }}>
          <button onClick={onEnter} className="btn btn-ghost-light" style={{
            padding: '14px 26px',
            gap: 10,
            justifyContent: 'center',
          }}>
            Enter
            <img src="assets/arrow-link.png" style={{
              height: 10,
              filter: 'brightness(0) invert(1)',
            }} alt="" />
          </button>
        </div>
      </div>
    </section>
  );
}
window.Splash = Splash;
