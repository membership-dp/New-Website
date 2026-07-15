function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// pages/Home.jsx
// LayeredCallout / InstagramStrip live in components/Blocks.jsx (shared).

function HomePage({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-shell"
  }, /*#__PURE__*/React.createElement(ZoomHero, {
    mode: new URLSearchParams(window.location.search).get('hero') === 'scrub' ? 'scrub' : 'still',
    videoSrc: "assets/zoom/hero-zoom-2s.mp4",
    scrubSrc: "assets/zoom/hero-zoom-scrub.mp4",
    poster: "assets/home-hero.jpg",
    scrubPoster: "assets/zoom/frame_01.jpg",
    settleImg: "assets/home-hero.jpg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-hero-inner"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 64,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-stagger",
    style: {
      maxWidth: 920
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-rule",
    style: {
      color: 'rgba(245,241,232,0.85)',
      marginBottom: 32
    }
  }, "West Palm Beach \xA0\xB7\xA0 Est. 2024"), /*#__PURE__*/React.createElement("h1", {
    className: "display-xl",
    style: {
      color: 'var(--color-bone)'
    }
  }, "Freedom to play, whenever you please.")), /*#__PURE__*/React.createElement("div", {
    className: "hero-stagger",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      paddingBottom: 8
    }
  }, /*#__PURE__*/React.createElement("a", _extends({}, actionProps(() => onNav('membership')), {
    className: "btn btn-ghost-light"
  }), "Request Membership"), /*#__PURE__*/React.createElement("a", _extends({}, actionProps(() => onNav('golf')), {
    className: "arrow-link arrow-link-bob",
    style: {
      color: 'rgba(245,241,232,0.8)',
      borderColor: 'rgba(245,241,232,0.4)'
    }
  }), "Discover the Club", /*#__PURE__*/React.createElement("img", {
    src: "assets/arrow-link.png",
    style: {
      filter: 'brightness(0) invert(1)'
    },
    alt: ""
  })))))), /*#__PURE__*/React.createElement("section", {
    className: "section surface-bone",
    style: {
      borderBottom: '1px solid var(--color-mist)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr',
      gap: 80,
      alignItems: 'end'
    },
    className: "tagline-grid"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "display-lg",
    style: {
      color: 'var(--color-club-navy)',
      margin: 0
    }
  }, "Play. Train. ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--color-champagne)'
    }
  }, "Belong."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("p", {
    className: "body-text",
    style: {
      color: 'var(--color-navy-70)',
      margin: 0
    }
  }, "A private Palm Beach club built around the freedom to play, the pursuit of improvement, and the relationships that make a club worth belonging to."))))), /*#__PURE__*/React.createElement("section", {
    className: "section surface-white"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "folio"
  }, "No. I \u2014 The Club"), /*#__PURE__*/React.createElement("h2", {
    className: "display-lg",
    style: {
      color: 'var(--color-club-navy)',
      maxWidth: 920
    }
  }, "A property shaped by three pursuits.")), /*#__PURE__*/React.createElement("div", {
    className: "three-up",
    style: {
      marginTop: 80
    }
  }, [{
    img: 'assets/hero-green.jpg',
    eyebrow: 'Golf',
    title: 'Jack Nicklaus Signature.',
    body: 'Championship golf without tee times, where exceptional conditioning and effortless access define the experience.',
    target: 'golf'
  }, {
    img: 'assets/hero-tennis.jpg',
    eyebrow: 'Racquets',
    title: 'Always in play.',
    body: 'Tennis, padel, and pickleball with instruction, clinics, leagues, and social play for every level.',
    target: 'racquets'
  }, {
    img: 'assets/hero-villa.jpg',
    eyebrow: 'Wellness',
    title: 'Built around wellbeing.',
    body: 'A thoughtful approach to fitness, recovery, and performance designed to support both everyday wellness and athletic goals.',
    target: 'membership'
  }].map((it, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: it.eyebrow,
    delay: i * 120,
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("a", _extends({}, actionProps(() => onNav(it.target)), {
    "aria-label": `${it.eyebrow}: ${it.title}`,
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      cursor: 'pointer',
      textDecoration: 'none',
      color: 'inherit'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "photo-frame",
    style: {
      aspectRatio: '4/5'
    }
  }, /*#__PURE__*/React.createElement(Parallax, {
    speed: 0.1,
    className: "img-drift"
  }, /*#__PURE__*/React.createElement("img", {
    src: it.img,
    alt: "",
    loading: "lazy",
    decoding: "async"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-rule",
    style: {
      marginTop: 28
    }
  }, it.eyebrow), /*#__PURE__*/React.createElement("h3", {
    className: "display-sm",
    style: {
      color: 'var(--color-club-navy)',
      marginTop: 12
    }
  }, it.title), /*#__PURE__*/React.createElement("p", {
    className: "body-text",
    style: {
      color: 'var(--color-navy-70)',
      marginTop: 14
    }
  }, it.body), /*#__PURE__*/React.createElement("span", {
    className: "arrow-link",
    style: {
      marginTop: 'auto',
      paddingTop: 24,
      alignSelf: 'flex-start',
      color: 'var(--color-club-navy)'
    }
  }, "Explore", /*#__PURE__*/React.createElement("img", {
    src: "assets/arrow-link.png",
    alt: ""
  })))))))), /*#__PURE__*/React.createElement("section", {
    className: "full-bleed-quote",
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Parallax, {
    speed: 0.22,
    style: {
      position: 'absolute',
      inset: '-11% 0',
      zIndex: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/hero-fairway.jpg",
    alt: "",
    loading: "lazy",
    decoding: "async",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 1,
      background: 'linear-gradient(rgba(15,25,40,0.45), rgba(15,25,40,0.7))'
    }
  }), /*#__PURE__*/React.createElement(Parallax, {
    speed: -0.1,
    style: {
      position: 'relative',
      zIndex: 2,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      maxWidth: 1100,
      marginInline: 'auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-rule",
    style: {
      color: 'rgba(245,241,232,0.85)',
      justifyContent: 'center',
      marginBottom: 32
    }
  }, "The Atmosphere"), /*#__PURE__*/React.createElement("h2", {
    className: "display-lg",
    style: {
      color: 'var(--color-bone)'
    }
  }, "Here, nature sets the rhythm \u2014", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--color-champagne-bright)'
    }
  }, "not the tee sheet."))))), /*#__PURE__*/React.createElement("section", {
    className: "section surface-bone"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "folio"
  }, "No. II \u2014 The Course"))), /*#__PURE__*/React.createElement(LayeredCallout, {
    title: "A test worthy of its design \u2014 beautifully playable.",
    body: "Stretching to 7,300 yards from the championship tees, the Jack Nicklaus Signature course moves through subtle elevation, sculpted bunkering, and natural water features. Every hole reflects thoughtful, refined architecture, with a 75.8 course rating in service of pure golf.",
    lgImg: "assets/hero-green.jpg",
    smImg: "assets/course-emblem.jpg",
    smBare: true,
    ctaLabel: "Explore the Course",
    onCta: () => onNav('golf')
  })), /*#__PURE__*/React.createElement("section", {
    className: "section surface-satin"
  }, /*#__PURE__*/React.createElement(Parallax, {
    speed: -0.25,
    className: "satin-sheen"
  }), /*#__PURE__*/React.createElement("div", {
    className: "satin-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "folio"
  }, "No. III \u2014 The Racquet Club"))), /*#__PURE__*/React.createElement(LayeredCallout, {
    flipped: true,
    dark: true,
    title: "Where competition meets connection.",
    body: "From early morning matches to evening socials, the Racquet Club is one of the Club\u2019s most active gathering places.",
    lgImg: "assets/padel-action.jpg",
    ctaLabel: "Explore the Racquet Club",
    onCta: () => onNav('racquets')
  }))), /*#__PURE__*/React.createElement("section", {
    className: "section surface-white"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "folio"
  }, "No. IV \u2014 The Location"))), /*#__PURE__*/React.createElement(LayeredCallout, {
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Quietly removed \u2014 ", /*#__PURE__*/React.createElement("span", {
      style: {
        whiteSpace: 'nowrap'
      }
    }, "moments from everywhere.")),
    body: "Minutes from Worth Avenue and Palm Beach International Airport, yet a world apart.",
    lgImg: "assets/location-aerial.jpg",
    ctaLabel: "The Setting",
    onCta: () => onNav('location')
  })), /*#__PURE__*/React.createElement("section", {
    className: "section-tight surface-bone",
    style: {
      borderTop: '1px solid var(--color-mist)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(InstagramStrip, {
    handle: "@dutchmanspipeclub",
    images: ['assets/hero-green.jpg', 'assets/tennis-serve.jpg', 'assets/hero-palms.jpg', 'assets/padel-action.jpg', 'assets/course-skyline.jpg', 'assets/hero-villa.jpg']
  })))), /*#__PURE__*/React.createElement("section", {
    className: "section surface-satin",
    style: {
      paddingBottom: 72
    }
  }, /*#__PURE__*/React.createElement(Parallax, {
    speed: -0.25,
    className: "satin-sheen"
  }), /*#__PURE__*/React.createElement(Reveal, {
    style: {
      position: 'relative',
      zIndex: 2,
      maxWidth: 880,
      marginInline: 'auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-rule",
    style: {
      color: 'var(--color-champagne-bright)',
      justifyContent: 'center',
      marginBottom: 32
    }
  }, "No. V \u2014 Membership"), /*#__PURE__*/React.createElement("h2", {
    className: "display-lg",
    style: {
      color: 'var(--color-bone)'
    }
  }, "A private world, by invitation."), /*#__PURE__*/React.createElement("span", {
    className: "champagne-rule"
  }), /*#__PURE__*/React.createElement("p", {
    className: "body-text",
    style: {
      color: 'rgba(245,241,232,0.8)',
      marginTop: 32,
      maxWidth: 640,
      marginInline: 'auto'
    }
  }, "Membership at Dutchman's Pipe provides access to one of Palm Beach's most distinctive private club experiences. Opportunities for membership are limited and available through a private introduction process."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("a", _extends({}, actionProps(() => onNav('membership')), {
    className: "btn btn-gold"
  }), "Request Membership Information")))));
}
window.HomePage = HomePage;
