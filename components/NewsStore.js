// NewsStore — single source of truth for "In the News" content, shared by
// the News page (reads) and the Admin editor (writes). The wireframe
// persists edits to localStorage, so changes live in THIS browser only —
// enough to demo the editing flow. Production swaps load/save for a real
// backend (per-editor login + database) without touching either page.
const DP_NEWS_DEFAULTS = {
  featured: {
    img: 'assets/news-featured.jpg',
    tag: 'Press',
    date: 'May 2026',
    title: "Dutchman's Pipe Club named among the most anticipated private clubs in Florida.",
    excerpt: 'A look at the no-tee-time philosophy, the Jack Nicklaus Signature course, and the racquet pavilion drawing members to West Palm Beach.'
  },
  articles: [{
    img: 'assets/hero-green.jpg',
    tag: 'Golf',
    date: 'Apr 2026',
    title: 'Inside the Jack Nicklaus Signature design.',
    excerpt: 'How 7,300 yards of sculpted bunkering and natural water came together.'
  }, {
    img: 'assets/padel-action.jpg',
    tag: 'Racquets',
    date: 'Mar 2026',
    title: 'Why padel is becoming the Club’s social heartbeat.',
    excerpt: 'Glow Padel after sunset and a calendar built for every level.'
  }, {
    img: 'assets/hero-palms.jpg',
    tag: 'Lifestyle',
    date: 'Feb 2026',
    title: 'A Palm Beach address, quietly removed.',
    excerpt: 'Minutes from Worth Avenue, with discreet access to private aviation.'
  }, {
    img: 'assets/instruction.jpg',
    tag: 'Instruction',
    date: 'Feb 2026',
    title: 'Top 100 instruction comes to the practice ground.',
    excerpt: 'Individualized lessons rooted in fundamentals and biomechanics.'
  }, {
    img: 'assets/tennis-veranda.jpg',
    tag: 'Community',
    date: 'Jan 2026',
    title: 'The veranda: where time on court becomes time together.',
    excerpt: 'Chilled towels, post-match smoothies, and an easy social rhythm.'
  }, {
    img: 'assets/course-skyline.jpg',
    tag: 'Club News',
    date: 'Jan 2026',
    title: 'Membership inquiries open for the founding season.',
    excerpt: 'An invitation-only community takes shape on the edge of Palm Beach.'
  }]
};

// The photo library the Admin image pickers offer (current site assets).
const DP_NEWS_IMAGES = ['assets/hero-clubhouse.jpg', 'assets/hero-green.jpg', 'assets/hero-fairway.jpg', 'assets/hero-palms.jpg', 'assets/hero-sunset.jpg', 'assets/hero-villa.jpg', 'assets/hero-putting.jpg', 'assets/hero-tennis.jpg', 'assets/tennis-serve.jpg', 'assets/tennis-veranda.jpg', 'assets/padel-action.jpg', 'assets/course-skyline.jpg', 'assets/instruction.jpg', 'assets/clubfitting.jpg'];
window.NewsStore = {
  KEY: 'dp-news-v1',
  defaults: DP_NEWS_DEFAULTS,
  images: DP_NEWS_IMAGES,
  // stamp a stable per-article id so the Admin editor can key rows by identity
  // (index keys corrupt controlled inputs on reorder/remove). id is internal-only.
  _stamp(v) {
    if (v && Array.isArray(v.articles)) {
      v.articles.forEach(a => {
        if (!a.id) a.id = 'a' + Math.random().toString(36).slice(2, 9);
      });
    }
    return v;
  },
  load() {
    try {
      const raw = localStorage.getItem(this.KEY);
      if (raw) {
        const v = JSON.parse(raw);
        if (v && v.featured && Array.isArray(v.articles)) return this._stamp(v);
      }
    } catch (e) {}
    return this._stamp(JSON.parse(JSON.stringify(DP_NEWS_DEFAULTS))); // fresh copy — safe to mutate
  },
  save(v) {
    try {
      localStorage.setItem(this.KEY, JSON.stringify(v));
    } catch (e) {}
  },
  reset() {
    try {
      localStorage.removeItem(this.KEY);
    } catch (e) {}
  },
  isCustomized() {
    try {
      return localStorage.getItem(this.KEY) != null;
    } catch (e) {
      return false;
    }
  }
};
