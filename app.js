// app.jsx — App shell + member-login dialog + bootstrap.
// (Was the inline <script type="text/babel"> in index.html; extracted so it can
// be precompiled to app.js like every other source file.)
const {
  useState,
  useEffect
} = React;

// Every page now has a real URL (see components/Routes.jsx for the table and
// vercel.json for the matching rewrites). The path is the source of truth on
// boot; navigation pushes history; back/forward is handled below.
//
// The News editor at /admin is unlinked and noindexed. That makes it
// undiscoverable, NOT protected — the passcode in pages/Admin.jsx is
// client-side and readable. Tolerable only because the editor writes to the
// visitor's own browser and no real data sits behind it. See
// docs/IN-THE-NEWS.md.
const routeFromUrl = () => {
  try {
    return window.dpRouteFromPath(window.location.pathname);
  } catch (e) {
    return null;
  }
};

// Visitors arriving from a paid click or a tagged campaign skip the splash
// gate and land directly on the site.
//
// WHY: the gate asks for a second click before anything is visible. Someone
// who arrived organically is browsing and will tap Enter. Someone who arrived
// from an ad has ALREADY clicked, and has been paid for — making them click
// again to see any content costs conversions outright, and Google grades
// landing page experience as part of Quality Score, so a content-free
// interstitial raises cost-per-click across the whole campaign.
//
// gclid/gbraid/wbraid are Google Ads auto-tagging; msclkid is Microsoft;
// fbclid is Meta; the utm_* trio covers anything hand-tagged (newsletters,
// the Instagram bio link, partner placements).
//
// The query string is left intact so GA4 and Google Ads attribution still
// resolve normally.
const CAMPAIGN_PARAMS = ['gclid', 'gbraid', 'wbraid', 'msclkid', 'fbclid', 'utm_source', 'utm_medium', 'utm_campaign'];
const isCampaignArrival = () => {
  try {
    const q = new URLSearchParams(window.location.search);
    return CAMPAIGN_PARAMS.some(k => q.has(k));
  } catch (e) {
    return false;
  }
};
function App() {
  const urlRoute = routeFromUrl();

  // The splash gate is for the front door only. Anyone who asked for a
  // specific page — a deep link, a shared URL, an ad landing page, a search
  // result — gets that page, not a gate. That is also what lets Googlebot
  // index real content instead of an Enter button.
  const [stage, setStage] = useState(() => {
    if (urlRoute && urlRoute !== 'home' || isCampaignArrival()) return 'site';
    try {
      return sessionStorage.getItem('dp-stage') || 'splash';
    } catch (e) {
      return 'splash';
    }
  });

  // The URL wins over the stored route, so refresh and deep links are honest.
  const [route, setRoute] = useState(() => {
    if (urlRoute) return urlRoute;
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
    // Title, description, canonical and og:* follow the route.
    if (window.dpApplyHead) window.dpApplyHead(route);
    if (window.DPAnalytics) window.DPAnalytics.page(route);
  }, [route]);

  // Browser back/forward. popstate fires only for real history entries, so
  // this cannot loop with the pushState in onNav.
  useEffect(() => {
    const onPop = () => {
      const r = routeFromUrl() || 'home';
      setRoute(r);
      if (r !== 'home') setStage('site');
      window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // Bind tel:/mailto: click tracking once, for the life of the page.
  useEffect(() => {
    if (window.DPAnalytics) window.DPAnalytics.trackContactLinks();
  }, []);
  const enter = () => {
    // Measures how many arrivals get past the splash gate at all.
    if (window.DPAnalytics) window.DPAnalytics.event('enter_site');
    setStage('site');
    setRoute('home');
    try {
      if (window.location.pathname !== '/') {
        window.history.replaceState({
          route: 'home'
        }, '', '/' + window.location.search);
      }
    } catch (e) {}
    window.scrollTo(0, 0);
  };

  // 'login' is no longer routed — Member Login is a real external link to the
  // club's Clubessential portal (see DP_MEMBER_PORTAL in Header.jsx).
  const onNav = where => {
    // Push the real URL so the address bar, back button, sharing and
    // analytics all agree with what is on screen. The query string is
    // preserved so campaign attribution survives in-site navigation.
    try {
      const path = window.dpPathForRoute(where);
      if (window.location.pathname !== path) {
        window.history.pushState({
          route: where
        }, '', path + window.location.search);
      }
    } catch (e) {/* navigation must work even if history does not */}
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
