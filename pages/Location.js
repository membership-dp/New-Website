function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// pages/Location.jsx
function LocationPage({
  onNav
}) {
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
      backgroundImage: `url('assets/location-hero.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: '100%',
      transform: 'rotate(-1.2deg) scale(1.08)'
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
  }, "The Location"), /*#__PURE__*/React.createElement("h1", {
    className: "display-xl",
    style: {
      color: 'var(--color-bone)',
      maxWidth: 1100
    }
  }, "Ideally situated in Palm Beach."), /*#__PURE__*/React.createElement("p", {
    className: "hero-sub",
    style: {
      color: 'rgba(245,241,232,0.84)',
      marginTop: 28,
      maxWidth: 720,
      marginBottom: 0
    }
  }, "Quietly removed, yet moments from the island, downtown, and private air travel."))), /*#__PURE__*/React.createElement("section", {
    className: "section-tight surface-bone-95"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-rule",
    style: {
      marginBottom: 40
    }
  }, "From the Clubhouse"), /*#__PURE__*/React.createElement("div", {
    className: "four-up-strip"
  }, [{
    time: '8',
    unit: 'min',
    dest: 'Worth Avenue'
  }, {
    time: '10',
    unit: 'min',
    dest: 'Palm Beach Island'
  }, {
    time: '12',
    unit: 'min',
    dest: 'PBI Airport'
  }, {
    time: '20',
    unit: 'min',
    dest: 'Private Aviation'
  }].map(d => /*#__PURE__*/React.createElement("div", {
    key: d.dest,
    className: "four-up-cell"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "stat-num",
    style: {
      fontSize: 64
    }
  }, d.time), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 12px/1 var(--font-body)',
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'var(--color-navy-70)'
    }
  }, d.unit)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 15px/1.35 var(--font-body)',
      color: 'var(--color-club-navy)',
      letterSpacing: '0.04em'
    }
  }, d.dest))))))), /*#__PURE__*/React.createElement("section", {
    className: "section surface-satin"
  }, /*#__PURE__*/React.createElement(Parallax, {
    speed: -0.25,
    className: "satin-sheen"
  }), /*#__PURE__*/React.createElement("div", {
    className: "satin-content"
  }, /*#__PURE__*/React.createElement(LayeredCallout, {
    flipped: true,
    dark: true,
    eyebrow: "Air Access",
    title: "Runway to clubhouse \u2014 measured in minutes.",
    body: ['Palm Beach International Airport (PBI) is located nearby, providing direct and efficient commercial access for seasonal residents and traveling members. For those arriving by private aviation, multiple executive airports are within close reach, ensuring discreet, streamlined arrivals.', 'From runway to clubhouse, the transition is measured in minutes — not hours.'],
    lgImg: "assets/air-access.jpg",
    motif: "pipe"
  }))), /*#__PURE__*/React.createElement("section", {
    className: "section surface-white"
  }, /*#__PURE__*/React.createElement(LayeredCallout, {
    eyebrow: "The Island",
    title: "Minutes from Palm Beach.",
    body: "Located moments from Palm Beach Island and Worth Avenue, Dutchman's Pipe places members close to the destinations they enjoy most\u2014from luxury shopping and dining to cultural events and waterfront experiences. The Club offers the convenience of proximity while maintaining a setting defined by privacy and ease.",
    lgImg: "assets/course-skyline.jpg",
    motif: "grass"
  })), /*#__PURE__*/React.createElement("section", {
    className: "section-tight surface-bone"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(PhotoGrid, {
    images: ['assets/location-hero.jpg', 'assets/golf-aerial.jpg', 'assets/course-skyline.jpg', 'assets/hero-palms.jpg', 'assets/hero-sunset.jpg', 'assets/hero-clubhouse.jpg']
  }))), /*#__PURE__*/React.createElement("section", {
    className: "section surface-white"
  }, /*#__PURE__*/React.createElement(LayeredCallout, {
    flipped: true,
    eyebrow: "Downtown & CityPlace",
    title: "The best of the city, minutes away.",
    body: "Dinner at Milos, a performance at the Kravis Center, or cocktails with friends downtown\u2014some of West Palm Beach's most sought-after experiences are just minutes from Dutchman's Pipe. The Club offers effortless access to the city while remaining a quiet retreat from it.",
    lgImg: "assets/golf-aerial.jpg",
    motif: "pipe"
  })), /*#__PURE__*/React.createElement("section", {
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
      backgroundImage: `url('assets/hero-fairway.jpg')`,
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
      background: 'linear-gradient(rgba(15,25,40,0.5), rgba(15,25,40,0.78))'
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
  }, "A Rare Balance"), /*#__PURE__*/React.createElement("h2", {
    className: "display-lg",
    style: {
      color: 'var(--color-bone)'
    }
  }, "Protected and intentional \u2014", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--color-champagne-bright)'
    }
  }, "fully connected.")), /*#__PURE__*/React.createElement("p", {
    className: "body-text",
    style: {
      color: 'rgba(245,241,232,0.82)',
      marginTop: 32,
      maxWidth: 700,
      marginInline: 'auto'
    }
  }, "Few clubs offer this level of accessibility while maintaining a sense of separation. This balance is what makes the location exceptional."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement("a", _extends({}, actionProps(() => onNav('membership')), {
    className: "btn btn-ghost-light"
  }), "Request Membership Information")))));
}
window.LocationPage = LocationPage;
