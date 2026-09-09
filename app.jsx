// app.jsx — App shell + member-login dialog + bootstrap.
// (Was the inline <script type="text/babel"> in index.html; extracted so it can
// be precompiled to app.js like every other source file.)
const { useState, useEffect } = React;

// The News editor lives at its own URL (/admin) and is linked from nowhere on
// the site. Vercel rewrites /admin to index.html — see vercel.json — and this
// reads the path on boot. Arriving there skips the splash gate, so staff go
// straight to the sign-in.
//
// NOTE: this makes the editor undiscoverable, not protected. The passcode in
// pages/Admin.jsx is client-side and readable by anyone who views source. That
// is tolerable only because the editor writes to the visitor's own browser and
// there is no real data behind it. Anything more needs a real backend — see
// docs/IN-THE-NEWS.md.
const isAdminPath = () => {
  try { return /^\/admin\/?$/i.test(window.location.pathname); }
  catch (e) { return false; }
};

function App() {
  // Stage: 'splash' or 'site'. Persist past entry so refresh keeps you in.
  const [stage, setStage] = useState(() => {
    if (isAdminPath()) return 'site';
    try { return sessionStorage.getItem('dp-stage') || 'splash'; }
    catch (e) { return 'splash'; }
  });
  const [route, setRoute] = useState(() => {
    if (isAdminPath()) return 'admin';
    try { return sessionStorage.getItem('dp-route') || 'home'; }
    catch (e) { return 'home'; }
  });

  useEffect(() => {
    try { sessionStorage.setItem('dp-stage', stage); } catch (e) {}
  }, [stage]);
  useEffect(() => {
    try { sessionStorage.setItem('dp-route', route); } catch (e) {}
  }, [route]);

  const enter = () => { setStage('site'); setRoute('home'); window.scrollTo(0, 0); };

  // 'login' is no longer routed — Member Login is a real external link to the
  // club's Clubessential portal (see DP_MEMBER_PORTAL in Header.jsx).
  const onNav = (where) => {
    // Navigating away from /admin drops the path back to the root, so the URL
    // never disagrees with what is on screen.
    if (where !== 'admin' && isAdminPath()) {
      try { window.history.replaceState({}, '', '/'); } catch (e) {}
    }
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
        {route === 'guests' && <GuestsPage onNav={onNav} />}
        {route === 'instruction' && <InstructionPage onNav={onNav} />}
        {route === 'membership' && <MembershipPage onNav={onNav} />}
        {route === 'admin' && <AdminPage onNav={onNav} />}
      </main>
      <Footer onNav={onNav} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
