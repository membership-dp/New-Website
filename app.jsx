// app.jsx — App shell + member-login dialog + bootstrap.
// (Was the inline <script type="text/babel"> in index.html; extracted so it can
// be precompiled to app.js like every other source file.)
const { useState, useEffect, useRef } = React;

function App() {
  // Stage: 'splash' or 'site'. Persist past entry so refresh keeps you in.
  const [stage, setStage] = useState(() => {
    try { return sessionStorage.getItem('dp-stage') || 'splash'; }
    catch (e) { return 'splash'; }
  });
  const [route, setRoute] = useState(() => {
    try { return sessionStorage.getItem('dp-route') || 'home'; }
    catch (e) { return 'home'; }
  });
  const [loginOpen, setLoginOpen] = useState(false);

  useEffect(() => {
    try { sessionStorage.setItem('dp-stage', stage); } catch (e) {}
  }, [stage]);
  useEffect(() => {
    try { sessionStorage.setItem('dp-route', route); } catch (e) {}
  }, [route]);

  const enter = () => { setStage('site'); setRoute('home'); window.scrollTo(0, 0); };

  const onNav = (where) => {
    if (where === 'login') { setLoginOpen(true); return; }
    setRoute(where);
    window.scrollTo(0, 0);
  };

  if (stage === 'splash') return <Splash onEnter={enter} />;

  // Each page sets dark/light header behavior — they all start with full-bleed photo,
  // so light header on top is correct for every route.
  const lightOnTop = true;

  return (
    <div data-screen-label={`${route}`}>
      <Header route={route} onNav={onNav} lightOnTop={lightOnTop} />
      <main>
        {route === 'home' && <HomePage onNav={onNav} />}
        {route === 'golf' && <GolfPage onNav={onNav} />}
        {route === 'racquets' && <RacquetsPage onNav={onNav} />}
        {route === 'location' && <LocationPage onNav={onNav} />}
        {route === 'news' && <NewsPage onNav={onNav} />}
        {route === 'membership' && <MembershipPage onNav={onNav} />}
        {route === 'admin' && <AdminPage onNav={onNav} />}
      </main>
      <Footer onNav={onNav} />

      {loginOpen && <LoginPanel onClose={() => setLoginOpen(false)} />}
    </div>
  );
}

function LoginPanel({ onClose }) {
  const firstFieldRef = useRef(null);
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    // move focus into the dialog; restore it to the opener on close
    const opener = document.activeElement;
    if (firstFieldRef.current) firstFieldRef.current.focus();
    return () => {
      window.removeEventListener('keydown', onKey);
      if (opener && opener.focus) opener.focus();
    };
  }, []);

  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 100,
      background: 'rgba(15,25,40,0.6)',
      display: 'flex', justifyContent: 'flex-end',
      animation: 'fadeIn 320ms var(--ease-club)',
    }}>
      <div
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-title"
        style={{
          width: 'min(480px, 100%)',
          background: 'var(--color-bone)',
          padding: '56px 48px',
          display: 'flex', flexDirection: 'column', gap: 24,
          animation: 'slideIn 420ms var(--ease-club)',
        }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <img src="assets/logo-emblem-color.png" style={{ height: 48 }} alt="Dutchman's Pipe Club" />
          <button onClick={onClose} className="icon-btn" aria-label="Close" style={{
            font: '400 24px/1 var(--font-body)', color: 'var(--color-club-navy)',
            width: 36, height: 36, display: 'inline-flex',
            alignItems: 'center', justifyContent: 'center',
          }}>×</button>
        </div>
        <div className="eyebrow-rule" style={{ marginTop: 16 }}>Member Portal</div>
        <h2 id="login-title" className="display-sm" style={{ color: 'var(--color-club-navy)' }}>
          Welcome back.
        </h2>
        <form onSubmit={(e) => e.preventDefault()} style={{ display: 'grid', gap: 28, marginTop: 16 }}>
          <label>
            <span className="field-label">Member Number or Email</span>
            <input ref={firstFieldRef} className="field-input" />
          </label>
          <label>
            <span className="field-label">Password</span>
            <input type="password" className="field-input" />
          </label>
          <button className="btn btn-primary" type="submit" style={{ marginTop: 12, justifyContent: 'center' }}>
            Sign In
          </button>
        </form>
        <button type="button" style={{
          font: '400 14px/1.4 var(--font-body)',
          color: 'var(--color-navy-70)',
          textDecoration: 'underline',
          background: 'none', border: 0, padding: 0,
          alignSelf: 'flex-start', cursor: 'pointer',
        }}>
          Forgot password?
        </button>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
