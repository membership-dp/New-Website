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
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      padding: '64px 24px', textAlign: 'center',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(rgba(15,25,40,0.55), rgba(15,25,40,0.78))',
      }} />
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src="assets/logo-emblem-white.png" style={{ height: 120, marginBottom: 56 }} alt="" />
        <div style={{
          font: '500 11px/1 var(--font-body)',
          letterSpacing: '0.36em',
          textTransform: 'uppercase',
          color: 'var(--color-pennant-yellow)',
          marginBottom: 28,
        }}>
          By Invitation Only
        </div>
        <h1 className="display-xl" style={{ color: 'var(--color-bone)', maxWidth: 900 }}>
          Dutchman's Pipe
        </h1>
        <div style={{
          font: '400 18px/1.5 var(--font-body)',
          color: 'rgba(245,241,232,0.8)',
          marginTop: 28, maxWidth: 520,
        }}>
          A private golf and racquets sanctuary in West Palm Beach.
        </div>
        <button onClick={onEnter} className="btn btn-ghost-light" style={{ marginTop: 64 }}>
          Enter
          <img src="assets/arrow-link.png" style={{ height: 9, filter: 'brightness(0) invert(1)' }} alt="" />
        </button>
      </div>
    </section>
  );
}
window.Splash = Splash;
