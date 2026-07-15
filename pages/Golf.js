function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// pages/Golf.jsx
function GolfPage({
  onNav
}) {
  // Golf-page pathways use their own concise copy (club 6/23) — the Membership
  // page accordion uses the longer DP_TIERS copy. Social omitted here.
  const golfTiers = [{
    name: 'Full Golf',
    tag: 'Signature',
    body: 'The Club in its fullest expression. Full Golf Membership includes unlimited access to championship golf, racquets, wellness, dining, and a distinguished instructional team led by nationally recognized professionals.',
    audience: 'For members who wish to engage fully in every aspect of club life.'
  }, {
    name: 'Next Generation',
    tag: 'Under 40',
    body: 'Designed for members under 40 seeking a long-term connection to Dutchman’s Pipe. Next Generation Membership offers Full Golf privileges today and a clear path toward lifelong membership.',
    audience: 'Reserved for members under 40.'
  }, {
    name: 'Visiting',
    tag: 'Non-Resident',
    body: 'Created for those who spend only part of the year in Palm Beach. Visiting Membership offers access to golf, practice facilities, and club amenities tailored to a seasonal lifestyle.',
    audience: 'For seasonal residents and frequent visitors.'
  }, {
    name: 'Corporate',
    tag: 'Executive',
    body: 'An elevated membership designed for organizations seeking a distinctive setting for business and leisure. Corporate Membership provides designated access for executives while creating opportunities to host, connect, and enjoy the Club together.',
    audience: 'For organizations.'
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "page-shell"
  }, /*#__PURE__*/React.createElement("section", {
    className: "page-hero page-hero-short",
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Parallax, {
    speed: 0.18,
    style: {
      position: 'absolute',
      inset: '-9% 0',
      zIndex: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: `url('assets/golf-header.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: '100%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "photo-scrim",
    style: {
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "page-hero-inner hero-stagger",
    style: {
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-rule",
    style: {
      color: 'rgba(245,241,232,0.85)',
      marginBottom: 32
    }
  }, "The Course"), /*#__PURE__*/React.createElement("h1", {
    className: "display-xl",
    style: {
      color: 'var(--color-bone)',
      maxWidth: 1100
    }
  }, "Golf at Dutchman's Pipe."), /*#__PURE__*/React.createElement("p", {
    className: "hero-sub",
    style: {
      color: 'rgba(245,241,232,0.84)',
      marginTop: 28,
      maxWidth: 720,
      marginBottom: 0
    }
  }, "An 18-hole Jack Nicklaus Signature course where nature sets the rhythm \u2014 not the tee sheet."))), /*#__PURE__*/React.createElement("section", {
    className: "surface-bone",
    style: {
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-row"
  }, [{
    num: '7,300',
    label: 'Yards from the tips'
  }, {
    num: '75.8',
    label: 'Course rating'
  }, {
    num: '315',
    label: 'Yard driving range'
  }, {
    num: '12,000',
    label: 'Sq ft putting green'
  }].map(s => /*#__PURE__*/React.createElement("div", {
    key: s.label,
    className: "stat-cell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-num"
  }, s.num), /*#__PURE__*/React.createElement("div", {
    className: "stat-label"
  }, s.label))))))), /*#__PURE__*/React.createElement("section", {
    className: "full-bleed-quote",
    style: {
      minHeight: '70vh',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Parallax, {
    speed: 0.22,
    style: {
      position: 'absolute',
      inset: '-11% 0',
      zIndex: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: `url('assets/hero-sunset.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: '100%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 1,
      background: 'linear-gradient(rgba(15,25,40,0.45), rgba(15,25,40,0.7))'
    }
  }), /*#__PURE__*/React.createElement(Reveal, {
    style: {
      position: 'relative',
      zIndex: 2,
      maxWidth: 1100,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-rule",
    style: {
      color: 'rgba(245,241,232,0.85)',
      justifyContent: 'center',
      marginBottom: 32
    }
  }, "The Pace"), /*#__PURE__*/React.createElement("h2", {
    className: "display-lg",
    style: {
      color: 'var(--color-bone)'
    }
  }, "No tee times. ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--color-champagne-bright)'
    }
  }, "No compromise.")), /*#__PURE__*/React.createElement("p", {
    className: "body-text",
    style: {
      color: 'rgba(245,241,232,0.82)',
      marginTop: 32,
      maxWidth: 680,
      marginInline: 'auto'
    }
  }, "Golf without tee times is central to the Dutchman's Pipe experience, preserving access, enhancing pace of play, and allowing members to enjoy the course entirely on their own schedule."))), /*#__PURE__*/React.createElement("section", {
    className: "section surface-white"
  }, /*#__PURE__*/React.createElement(LayeredCallout, {
    title: "Practice with purpose.",
    body: "The practice grounds at Dutchman's Pipe are designed to mirror the challenges of the course. A two-acre short game area, championship-caliber greens, thoughtfully designed practice spaces, and eight varieties of premium range balls create an environment where preparation is as rewarding as play.",
    lgImg: "assets/practice-cart.jpg",
    motif: "grass"
  })), /*#__PURE__*/React.createElement("section", {
    className: "section surface-satin"
  }, /*#__PURE__*/React.createElement(Parallax, {
    speed: -0.25,
    className: "satin-sheen"
  }), /*#__PURE__*/React.createElement("div", {
    className: "satin-content"
  }, /*#__PURE__*/React.createElement(LayeredCallout, {
    flipped: true,
    dark: true,
    eyebrow: "Elite Instruction",
    title: "The pursuit of better golf.",
    body: ["Instruction at Dutchman's Pipe is led by nationally recognized professionals, including Golf Magazine Top 100 instructors, who bring decades of experience to a highly personalized coaching environment.", 'Private lessons, playing sessions, clinics, and performance training are all designed around the individual golfer.'],
    lgImg: "assets/instruction-coach.jpg",
    motif: "pipe"
  }))), /*#__PURE__*/React.createElement("section", {
    className: "section surface-bone"
  }, /*#__PURE__*/React.createElement(LayeredCallout, {
    eyebrow: "Club Fitting & Customization",
    title: "Performance optimization. Not retail fitting.",
    body: ['Our club fitting philosophy is entirely brand agnostic. Equipment decisions are driven by performance data, not manufacturer loyalty.', 'Using advanced fitting technology and personalized analysis, every club is optimized to complement the individual golfer and elevate their performance.'],
    lgImg: "assets/clubfitting-bags.jpg",
    motif: "grass"
  })), /*#__PURE__*/React.createElement("section", {
    className: "section surface-white"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      flexWrap: 'wrap',
      gap: 24,
      marginBottom: 64
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-rule",
    style: {
      marginBottom: 24
    }
  }, "Membership"), /*#__PURE__*/React.createElement("h2", {
    className: "display-md",
    style: {
      color: 'var(--color-club-navy)',
      maxWidth: 720
    }
  }, "Four pathways to membership.")))), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(TierColumns, {
    tiers: golfTiers
  })), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("a", _extends({}, actionProps(() => onNav('membership')), {
    className: "arrow-link",
    style: {
      marginTop: 48,
      color: 'var(--color-club-navy)'
    }
  }), "Explore Membership", /*#__PURE__*/React.createElement("img", {
    src: "assets/arrow-link.png",
    alt: ""
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "section surface-bone"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(PhotoGrid, {
    images: ['assets/golf-island.jpg', 'assets/golf-hero.jpg', 'assets/golf-aerial.jpg', 'assets/golf-green.jpg', 'assets/golf-grasses.jpg', 'assets/course-skyline.jpg', 'assets/hero-fairway.jpg', 'assets/hero-green.jpg', 'assets/hero-sunset.jpg', 'assets/hero-putting.jpg']
  }))), /*#__PURE__*/React.createElement("section", {
    className: "full-bleed-quote",
    style: {
      minHeight: '60vh',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Parallax, {
    speed: 0.18,
    style: {
      position: 'absolute',
      inset: '-9% 0',
      zIndex: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: `url('assets/golf-cta.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: '100%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 1,
      background: 'linear-gradient(rgba(15,25,40,0.55), rgba(15,25,40,0.82))'
    }
  }), /*#__PURE__*/React.createElement(Reveal, {
    style: {
      position: 'relative',
      zIndex: 2,
      maxWidth: 820,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "display-lg",
    style: {
      color: 'var(--color-bone)'
    }
  }, "An invitation to explore."), /*#__PURE__*/React.createElement("p", {
    className: "body-text",
    style: {
      color: 'rgba(245,241,232,0.82)',
      marginTop: 28,
      maxWidth: 640,
      marginInline: 'auto'
    }
  }, "For golfers who seek more time on the course and fewer constraints around it, Dutchman's Pipe offers an experience unlike any other in Palm Beach."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement("a", _extends({}, actionProps(() => onNav('membership')), {
    className: "btn btn-ghost-light"
  }), "Request Membership Information")))));
}
window.GolfPage = GolfPage;
