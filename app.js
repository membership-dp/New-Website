// app.jsx — App shell + member-login dialog + bootstrap.
// (Was the inline <script type="text/babel"> in index.html; extracted so it can
// be precompiled to app.js like every other source file.)
const {
  useState,
  useEffect
} = React;
function App() {
  // Stage: 'splash' or 'site'. Persist past entry so refresh keeps you in.
  const [stage, setStage] = useState(() => {
    try {
      return sessionStorage.getItem('dp-stage') || 'splash';
    } catch (e) {
      return 'splash';
    }
  });
  const [route, setRoute] = useState(() => {
    try {
      return sessionStorage.getItem('dp-route') || 'home';
    } catch (e) {
      return 'home';
    }
  });
  useEffect(() => {
    try {
      sessionStorage.setItem('dp-stage', stage);
    } catch (e) {}
  }, [stage]);
  useEffect(() => {
    try {
      sessionStorage.setItem('dp-route', route);
    } catch (e) {}
  }, [route]);
  const enter = () => {
    setStage('site');
    setRoute('home');
    window.scrollTo(0, 0);
  };

  // 'login' is no longer routed — Member Login is a real external link to the
  // club's Clubessential portal (see DP_MEMBER_PORTAL in Header.jsx).
  const onNav = where => {
    setRoute(where);
    window.scrollTo(0, 0);
  };
  if (stage === 'splash') return /*#__PURE__*/React.createElement(Splash, {
    onEnter: enter
  });

  // Each page sets dark/light header behavior — they all start with full-bleed photo,
  // so light header on top is correct for every route.
  const lightOnTop = true;
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": `${route}`
  }, /*#__PURE__*/React.createElement(Header, {
    route: route,
    onNav: onNav,
    lightOnTop: lightOnTop
  }), /*#__PURE__*/React.createElement("main", null, route === 'home' && /*#__PURE__*/React.createElement(HomePage, {
    onNav: onNav
  }), route === 'golf' && /*#__PURE__*/React.createElement(GolfPage, {
    onNav: onNav
  }), route === 'racquets' && /*#__PURE__*/React.createElement(RacquetsPage, {
    onNav: onNav
  }), route === 'location' && /*#__PURE__*/React.createElement(LocationPage, {
    onNav: onNav
  }), route === 'news' && /*#__PURE__*/React.createElement(NewsPage, {
    onNav: onNav
  }), route === 'guests' && /*#__PURE__*/React.createElement(GuestsPage, {
    onNav: onNav
  }), route === 'instruction' && /*#__PURE__*/React.createElement(InstructionPage, {
    onNav: onNav
  }), route === 'membership' && /*#__PURE__*/React.createElement(MembershipPage, {
    onNav: onNav
  }), route === 'admin' && /*#__PURE__*/React.createElement(AdminPage, {
    onNav: onNav
  })), /*#__PURE__*/React.createElement(Footer, {
    onNav: onNav
  }));
}
ReactDOM.createRoot(document.getElementById('app')).render(/*#__PURE__*/React.createElement(App, null));
