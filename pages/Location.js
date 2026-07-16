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
  }, "East of I-95, minutes from Palm Beach Island and Downtown."))), /*#__PURE__*/React.createElement("section", {
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
    time: '1',
    unit: 'min',
    dest: 'The Belgrove Resort & Spa'
  }, {
    time: '10',
    unit: 'min',
    dest: 'Palm Beach Island'
  }, {
    time: '12',
    unit: 'min',
    dest: 'President Donald J. Trump International Airport'
  }, {
    time: '15',
    unit: 'min',
    dest: 'Atlantic Ocean Beaches'
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
    body: ['President Donald J. Trump International Airport is just moments away, offering convenient commercial service and private aviation options for effortless arrivals.', 'Close to everything, yet quietly removed.'],
    lgImg: "assets/air-access.jpg",
    motif: "pipe"
  }))), /*#__PURE__*/React.createElement("section", {
    className: "section surface-white",
    style: {
      paddingBottom: 0
    }
  }, /*#__PURE__*/React.createElement(LayeredCallout, {
    eyebrow: "The Island",
    title: "Palm Beach, within reach.",
    body: "From mornings along the Lake Trail to afternoons on the beach and shopping along Worth Avenue, Dutchman's Pipe is ideally positioned to enjoy the lifestyle that has made Palm Beach one of America's most desirable destinations.",
    lgImg: "assets/palmbeach-aerial.jpg",
    motif: "grass"
  })), /*#__PURE__*/React.createElement("section", {
    className: "section surface-white",
    style: {
      paddingBottom: 0
    }
  }, /*#__PURE__*/React.createElement(LayeredCallout, {
    flipped: true,
    eyebrow: "The Belgrove Resort & Spa",
    title: "Steps from the Club.",
    body: "Adjacent to the Clubhouse, The Belgrove Resort & Spa, an Autograph Collection property, features 150 guest rooms, multiple dining venues, a full-service spa, and resort-style pools.",
    lgImg: "assets/spa-treatment.jpg",
    motif: "pipe"
  })), /*#__PURE__*/React.createElement("section", {
    className: "section surface-white"
  }, /*#__PURE__*/React.createElement(LayeredCallout, {
    eyebrow: "Downtown & CityPlace",
    title: "The best of the city, minutes away.",
    body: "Dinner at Milos, a performance at the Kravis Center, or cocktails with friends downtown\u2014some of West Palm Beach's most sought-after experiences are just minutes from Dutchman's Pipe. The Club offers effortless access to the city while remaining a quiet retreat from it.",
    lgImg: "assets/cityplace.jpg",
    motif: "pipe"
  })), /*#__PURE__*/React.createElement("section", {
    className: "section-tight surface-bone"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(PhotoGrid, {
    images: ['assets/worth-ave.jpg', 'assets/wpb-dining.jpg', 'assets/cityplace-walk.jpg', 'assets/wpb-aerial.jpg', 'assets/cityplace.jpg']
  }))), /*#__PURE__*/React.createElement("section", {
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
