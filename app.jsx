// app.jsx — App shell + member-login dialog + bootstrap.
// (Was the inline <script type="text/babel"> in index.html; extracted so it can
// be precompiled to app.js like every other source file.)
const { useState, useEffect } = React;

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
