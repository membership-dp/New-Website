// NewsStore — single source of truth for "In the News" content, shared by
// the News page (reads) and the Admin editor (writes). The wireframe
// persists edits to localStorage, so changes live in THIS browser only —
// enough to demo the editing flow. Production swaps load/save for a real
// backend (per-editor login + database) without touching either page.
//
// Content = the club's real media coverage (Dutchman's Pipe Club Coverage,
// provided 7/9). Each item: tag = outlet, date = month/year, title = the
// story focus, url = the live article (opens in a new tab). Seven placements
// arrived without a link in the source doc — those show as coverage without a
// click-through until the URLs are provided (url left empty).
const DP_NEWS_DEFAULTS = {
  featured: {
    img: 'assets/palmbeach-aerial.jpg',
    tag: 'Forbes',
    date: 'Oct 2025',
    title: "How the Witkoff Group built South Florida's new breed of private clubs.",
    excerpt: "Forbes examines the group behind a new generation of South Florida private clubs — with Dutchman's Pipe among them.",
    url: 'https://www.forbes.com/sites/erikmatuszewski/2025/10/11/how-the-witkoff-group-built-south-floridas-new-breed-of-private-clubs/'
  },
  articles: [
  // Added 8/27 at Madison's request — AOL/Athlon Sports, 23 Aug 2026.
  {
    img: 'assets/course-fountain-aerial.jpg',
    tag: 'AOL',
    date: 'Aug 2026',
    title: 'Rare golf access can open doors for golf’s next generation.',
    excerpt: '',
    url: 'https://www.aol.com/articles/rare-golf-access-open-doors-005225000.html?guccounter=1'
  }, {
    img: 'assets/golf-island.jpg',
    tag: 'The Golf Wire',
    date: 'Jul 2026',
    title: 'Dutchman’s Pipe Club shines as host of the Final Qualifier for the 126th U.S. Amateur Championship.',
    excerpt: '',
    url: 'https://thegolfwire.com/dutchmans-pipe-club-us-amateur-championship/'
  }, {
    img: 'assets/practice-cart.jpg',
    tag: 'Yahoo! Sports',
    date: 'Jul 2026',
    title: 'The surprising drawback of driving it longer — and the shot data you’re probably not using.',
    excerpt: '',
    url: 'https://sports.yahoo.com/articles/surprising-drawback-driving-longer-piece-165937484.html?guccounter=1'
  }, {
    img: 'assets/golf-aerial.jpg',
    tag: 'Golf News Net',
    date: 'Jul 2026',
    title: 'Course and infrastructure enhancements elevate the member experience.',
    excerpt: '',
    url: 'https://clubhouse.thegolfnewsnet.com/2026/07/02/dutchmans-pipe-club-announces-course-and-infrastructure-enhancements-to-further-elevate-member-experience/'
  }, {
    img: 'assets/course-dusk.jpg',
    tag: 'AOL',
    date: 'Jul 2026',
    title: "Dutchman's Pipe is quietly becoming one of America's most fascinating private golf clubs.",
    excerpt: '',
    url: 'https://www.aol.com/articles/dutchmans-pipe-quietly-becoming-one-003543000.html?guccounter=1'
  }, {
    img: 'assets/course-skyline.jpg',
    tag: 'Markets of Tomorrow',
    date: 'Jun 2026',
    title: "Inside Dutchman's Pipe Club.",
    excerpt: '',
    url: 'https://www.oftmw.com/post/inside-dutchman-s-pipe-the-ultra-private-jack-nicklaus-club-bringing-no-tee-time-golf-to-the-heart-of-west-palm-beach/'
  }, {
    img: 'assets/clubhouse-tacos.jpg',
    tag: 'GOLF',
    date: 'Jun 2026',
    title: 'Clubhouse eats.',
    excerpt: '',
    url: 'https://golf.com/lifestyle/food/elevate-hot-dog-tips-michelin-starred-chef/'
  }, {
    img: 'assets/hero-green.jpg',
    tag: 'Golf Digest',
    date: 'May 2026',
    title: 'Playing with CEO of Golf at the Golf Digest Open.',
    excerpt: '',
    url: 'https://www.golfdigest.com/story/six-things-i-learned-playing-with-ceo-of-golf-at-golf-digest-open-late-scratch'
  }, {
    img: 'assets/golf-island.jpg',
    tag: 'Amateur Golf',
    date: 'Apr 2026',
    title: '2026 U.S. Amateur qualifying.',
    excerpt: '',
    url: 'https://www.amateurgolf.com/golf-tournament-news/2026-u-s-amateur-qualifying-dates-sites-registration-info-and-how-to-enter-34004'
  }, {
    img: 'assets/instruction-coach.jpg',
    tag: 'Yahoo! Sports',
    date: 'Apr 2026',
    title: "Golf's most powerful instruction hub.",
    excerpt: '',
    url: 'https://sports.yahoo.com/articles/dutchman-pipe-quietly-becoming-golf-172448653.html?guccounter=2'
  }, {
    img: 'assets/practice-cart.jpg',
    tag: 'GOLF',
    date: 'Mar 2026',
    title: 'GOLF Schools: where our experts help your game.',
    excerpt: '',
    url: 'https://golf.com/instruction/lesson-top-100-teacher-signup-golf-schools/'
  }, {
    img: 'assets/hero-fairway.jpg',
    tag: 'Golf Digest',
    date: 'Mar 2026',
    title: 'The Golf Digest Open.',
    excerpt: '',
    url: 'https://www.golfdigest.com/story/golf-digest-open-2026-golf-courses'
  }, {
    img: 'assets/hero-sunset.jpg',
    tag: 'Front Office Sports',
    date: 'Jan 2026',
    title: 'Inside LIV Golf.',
    excerpt: '',
    url: 'https://frontofficesports.com/what-do-liv-golfs-team-gms-do-wear-a-lot-of-hats/'
  }, {
    img: 'assets/jet-arrival.jpg',
    tag: 'Golf Pass',
    date: 'Nov 2025',
    title: 'The amenities arms race.',
    excerpt: '',
    url: 'https://www.golfpass.com/travel-advisor/articles/upscale-private-golf-club-resort-amenities'
  }, {
    img: 'assets/golf-green.jpg',
    tag: 'The Palm Beaches',
    date: 'Jul 2025',
    title: 'The best golf courses in Palm Beach.',
    excerpt: '',
    url: 'https://www.thepalmbeaches.com/blog/24-best-golf-courses-palm-beach-county'
  }, {
    img: 'assets/hero-palms.jpg',
    tag: 'Modern Luxury Palm Beach',
    date: 'Apr 2025',
    title: "The best private clubs in Palm Beach — Dutchman's Pipe spotlight.",
    excerpt: '',
    url: ''
  }, {
    img: 'assets/hero-putting.jpg',
    tag: 'GOLF',
    date: 'Mar 2025',
    title: "LIV players and Bubba Watson — Dutchman's Pipe mention.",
    excerpt: '',
    url: ''
  }, {
    img: 'assets/clubfitting-bags.jpg',
    tag: 'Amateur Golf',
    date: 'Mar 2025',
    title: "U.S. Open amateur qualifying courses — Dutchman's Pipe mention.",
    excerpt: '',
    url: ''
  }, {
    img: 'assets/downtown-plaza.jpg',
    tag: 'New York Post',
    date: 'Mar 2025',
    title: "West Palm Beach's luxury growth — Dutchman's Pipe spotlight.",
    excerpt: '',
    url: ''
  }, {
    img: 'assets/hero-villa.jpg',
    tag: 'Mansion Global',
    date: 'Mar 2025',
    title: "Luxury Rolls-Royces at private clubs — Dutchman's Pipe mention.",
    excerpt: '',
    url: ''
  }, {
    img: 'assets/golf-aerial.jpg',
    tag: 'Golf Today',
    date: 'Mar 2025',
    title: "A Dutchman's Pipe course feature review.",
    excerpt: '',
    url: ''
  }, {
    img: 'assets/course-golden-hour.jpg',
    tag: 'Score Golf Magazine',
    date: 'Mar 2025',
    title: "A Dutchman's Pipe mention timed to the Cognizant Classic.",
    excerpt: '',
    url: ''
  }]
};

// The photo library the Admin image pickers offer (current site assets).
const DP_NEWS_IMAGES = ['assets/course-dusk.jpg', 'assets/golf-island.jpg', 'assets/palmbeach-aerial.jpg', 'assets/hero-green.jpg', 'assets/hero-fairway.jpg', 'assets/hero-sunset.jpg', 'assets/golf-aerial.jpg', 'assets/golf-green.jpg', 'assets/course-skyline.jpg', 'assets/hero-putting.jpg', 'assets/hero-clubhouse.jpg', 'assets/hero-villa.jpg', 'assets/hero-palms.jpg', 'assets/instruction-coach.jpg', 'assets/practice-cart.jpg', 'assets/clubfitting-bags.jpg', 'assets/padel-player.jpg', 'assets/tennis-player.jpg', 'assets/tennis-rally.jpg', 'assets/pickleball.jpg',
// added 8/27 with the news cover refresh
'assets/course-fountain-aerial.jpg', 'assets/clubhouse-tacos.jpg', 'assets/course-golden-hour.jpg', 'assets/jet-arrival.jpg', 'assets/downtown-plaza.jpg'];
window.NewsStore = {
  // v4 — AOL placement added 8/27, plus four replacement covers (clubhouse
  // eats, Cognizant Classic, amenities arms race, WPB luxury growth). Bumping
  // the key makes the new defaults win over anything saved under v3 in a
  // browser (wireframe edits are per-browser; production moves this to a database).
  KEY: 'dp-news-v4',
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
