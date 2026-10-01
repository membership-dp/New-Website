// Routes.jsx — the single source of truth for URL ↔ route, and for the per-page
// <head> metadata that goes with each one.
//
// Loaded before Analytics.js and app.js (see index.html), because both read it.
//
// build.cjs reads this table to generate one HTML file per route (golf.html,
// served at /golf by cleanUrls in vercel.json) and sitemap.xml. After adding or
// changing a route, run `node build.cjs` — a route with no generated file 404s.
// New indexable routes also belong in the <nav> of index.html's no-JS fallback.
const DP_ROUTES = [{
  id: 'home',
  path: '/',
  title: "Dutchman's Pipe Club | Private Golf & Racquets Club, West Palm Beach",
  description: "An invitation-only private club in West Palm Beach, Florida, with a Jack Nicklaus Signature golf course, no tee times, Top 100 instruction, and a racquet club."
}, {
  id: 'golf',
  path: '/golf',
  title: "Golf | Jack Nicklaus Signature Course — Dutchman's Pipe Club",
  description: "A Jack Nicklaus Signature championship course in West Palm Beach, played without tee times. 7,300 yards, a 75.8 rating, caddies on every round, and brand-agnostic club fitting."
}, {
  id: 'instruction',
  path: '/instruction',
  title: "Golf Instruction | Top 100 Coaching — Dutchman's Pipe Club",
  description: "Coaching from GOLF Magazine Top 100 Teachers and Golf Digest Top 50 Instructors, supported by a 315-yard range, a two-acre short game complex and a planned Golf Performance Center."
}, {
  id: 'racquets',
  path: '/racquets',
  title: "Racquet Sports | Tennis, Padel & Pickleball — Dutchman's Pipe Club",
  description: "Tennis, padel and pickleball at a private West Palm Beach club, with clinics, leagues and social play, and one of the area's few private padel programs."
}, {
  id: 'location',
  path: '/location',
  title: "Location | West Palm Beach — Dutchman's Pipe Club",
  description: "East of I-95 in West Palm Beach, minutes from Palm Beach Island, Worth Avenue, downtown and President Donald J. Trump International Airport."
}, {
  id: 'membership',
  path: '/membership',
  title: "Membership | Dutchman's Pipe Club",
  description: "Membership at Dutchman's Pipe is by private introduction. Full Golf, Next Gen., Visiting, Corporate and Social categories, with limited opportunities available."
}, {
  id: 'guests',
  path: '/guests',
  title: "Guest Information | Dutchman's Pipe Club",
  description: "What guests need to know before visiting Dutchman's Pipe Club in West Palm Beach: arrival, registration, dress code, caddies and finding the Club."
}, {
  id: 'news',
  path: '/news',
  title: "In the News | Dutchman's Pipe Club",
  description: "Press and media coverage of Dutchman's Pipe Club, the private Jack Nicklaus Signature club in West Palm Beach."
},
// Staff editor. Unlinked, and kept out of robots.txt and the sitemap.
{
  id: 'admin',
  path: '/admin',
  title: "Club Admin — Dutchman's Pipe Club",
  description: '',
  noindex: true
}];
const DP_ROUTE_BY_ID = {};
const DP_ROUTE_BY_PATH = {};
DP_ROUTES.forEach(r => {
  DP_ROUTE_BY_ID[r.id] = r;
  DP_ROUTE_BY_PATH[r.path] = r;
});

// Trailing slashes are normalised so /golf and /golf/ resolve the same.
function dpRouteFromPath(pathname) {
  try {
    let p = (pathname || '/').toLowerCase();
    if (p.length > 1 && p.slice(-1) === '/') p = p.slice(0, -1);
    const r = DP_ROUTE_BY_PATH[p || '/'];
    return r ? r.id : null;
  } catch (e) {
    return null;
  }
}
function dpPathForRoute(id) {
  const r = DP_ROUTE_BY_ID[id];
  return r ? r.path : '/';
}

// Keeps <head> honest as the route changes. Googlebot renders JS, so these
// updates are seen — but only one page can be served per URL, which is exactly
// why the routes above have to exist at all.
function dpApplyHead(id) {
  const r = DP_ROUTE_BY_ID[id];
  if (!r) return;
  try {
    const origin = window.location.origin;
    document.title = r.title;
    const set = (selector, attr, value) => {
      const el = document.head.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };
    if (r.description) {
      set('meta[name="description"]', 'content', r.description);
      set('meta[property="og:description"]', 'content', r.description);
      set('meta[name="twitter:description"]', 'content', r.description);
    }
    set('link[rel="canonical"]', 'href', origin + r.path);
    set('meta[property="og:url"]', 'content', origin + r.path);
    set('meta[property="og:title"]', 'content', r.title);
    set('meta[name="twitter:title"]', 'content', r.title);

    // The editor must never be indexed, even if someone links to it.
    let robots = document.head.querySelector('meta[name="robots"]');
    if (robots) robots.setAttribute('content', r.noindex ? 'noindex,nofollow' : 'index,follow,max-image-preview:large,max-snippet:-1');
  } catch (e) {/* head updates must never break navigation */}
}
window.DP_ROUTES = DP_ROUTES;
window.dpRouteFromPath = dpRouteFromPath;
window.dpPathForRoute = dpPathForRoute;
window.dpApplyHead = dpApplyHead;
