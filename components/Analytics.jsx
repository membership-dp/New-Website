// Analytics.jsx — one place for every measurement script on the site.
//
// WHY THIS EXISTS AT ALL: the site is a single-page app with ONE real URL, so
// out of the box GA4 would record every visit as "/" and you could never tell
// whether anyone reached Membership. This module fires a *virtual* page_view
// whenever the React route changes, so Golf, Instruction and Membership report
// as separate pages without the site needing real per-page URLs.
//
// TO TURN GA4 ON: paste the Measurement ID below and rebuild. Nothing else.
// While it is empty no Google script loads and no Google cookie is set.
const GA4_MEASUREMENT_ID = '';

// route id -> [virtual path, page title] reported to GA4. Keep in step with
// the routes in app.jsx; an unlisted route still reports, using its own id.
const DP_ROUTE_META = {
  home:        ['/',            'Home'],
  golf:        ['/golf',        'Golf'],
  racquets:    ['/racquets',    'Racquet Sports'],
  instruction: ['/instruction', 'Instruction'],
  location:    ['/location',    'Location'],
  guests:      ['/guests',      'Guest Information'],
  news:        ['/news',        'In the News'],
  membership:  ['/membership',  'Membership'],
  admin:       ['/admin',       'Club Admin'],
};

const DPAnalytics = {
  ready: false,

  // Loads gtag.js once. Safe to call repeatedly; no-ops without an ID.
  init() {
    if (this.ready || !GA4_MEASUREMENT_ID) return;
    try {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () { window.dataLayer.push(arguments); };
      window.gtag('js', new Date());
      // send_page_view:false — we send our own virtual page_views on route
      // change, otherwise every visit double-counts as "/" on load.
      window.gtag('config', GA4_MEASUREMENT_ID, { send_page_view: false });

      const s = document.createElement('script');
      s.async = true;
      s.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
      document.head.appendChild(s);
      this.ready = true;
    } catch (e) { /* never let measurement break the site */ }
  },

  page(route) {
    if (!GA4_MEASUREMENT_ID) return;
    this.init();
    const [path, title] = DP_ROUTE_META[route] || [`/${route}`, route];
    try {
      window.gtag('event', 'page_view', {
        page_title: title,
        page_path: path,
        page_location: window.location.origin + path,
      });
    } catch (e) {}
  },

  event(name, params) {
    if (!GA4_MEASUREMENT_ID) return;
    this.init();
    try { window.gtag('event', name, params || {}); } catch (e) {}
  },
};

window.DPAnalytics = DPAnalytics;
