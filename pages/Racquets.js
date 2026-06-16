// pages/Racquets.jsx
function RacquetsPage({
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
      backgroundImage: `url('assets/hero-tennis.jpg')`,
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
  }, "The Racquet Pavilion"), /*#__PURE__*/React.createElement("h1", {
    className: "display-xl",
    style: {
      color: 'var(--color-bone)',
      maxWidth: 1100
    }
  }, "A premier destination for tennis, padel, and pickleball."), /*#__PURE__*/React.createElement("p", {
    className: "hero-sub",
    style: {
      color: 'rgba(245,241,232,0.84)',
      marginTop: 28,
      maxWidth: 700,
      marginBottom: 0
    }
  }, "Professional instruction, competitive play, and year-round programming."))), /*#__PURE__*/React.createElement("section", {
    className: "surface-bone",
    style: {
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-row stat-row-3"
  }, [{
    num: '4',
    label: 'Har-Tru Tennis Courts'
  }, {
    num: '2',
    label: 'Padel Courts'
  }, {
    num: '2',
    label: 'Pickleball Courts'
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
      minHeight: '75vh',
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
      backgroundImage: `url('assets/padel-serve.jpg')`,
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
      background: 'linear-gradient(rgba(15,25,40,0.5), rgba(15,25,40,0.75))'
    }
  }), /*#__PURE__*/React.createElement(Reveal, {
    style: {
      position: 'relative',
      zIndex: 2,
      maxWidth: 1000,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-rule",
    style: {
      color: 'rgba(245,241,232,0.85)',
      justifyContent: 'center',
      marginBottom: 32
    }
  }, "Padel at Dutchman's Pipe"), /*#__PURE__*/React.createElement("h2", {
    className: "display-lg",
    style: {
      color: 'var(--color-bone)'
    }
  }, "Fast-paced, strategic, ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--color-champagne-bright)'
    }
  }, "inherently social.")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 19px/1.6 var(--font-body)',
      color: 'rgba(245,241,232,0.82)',
      marginTop: 32,
      maxWidth: 720,
      marginInline: 'auto'
    }
  }, "One of the fastest-growing sports in the world has found a natural home at Dutchman's Pipe. Structured match play, private instruction, and member events create an environment where both experienced players and newcomers can enjoy the game."))), /*#__PURE__*/React.createElement("section", {
    className: "section surface-bone"
  }, /*#__PURE__*/React.createElement(LayeredCallout, {
    eyebrow: "The Courts",
    title: "Open. Intentional. Alive with play.",
    body: "Four Har-Tru tennis courts, two pickleball courts, and two padel courts set the stage for a racquet program that feels active from first serve to sunset. Competitive when it needs to be, relaxed when it should be.",
    lgImg: "assets/pickleball.jpg",
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
    eyebrow: "Programming & Member Experience",
    title: "A racquet calendar built for every level, year-round.",
    body: "Members enjoy a thoughtfully curated mix of clinics, private coaching, match play, tournaments, and signature events throughout the year.",
    lgImg: "assets/padel-rally.jpg",
    motif: "pipe"
  }))), /*#__PURE__*/React.createElement("section", {
    className: "section surface-white"
  }, /*#__PURE__*/React.createElement(LayeredCallout, {
    eyebrow: "Beyond the Baseline",
    title: "A gathering place as active as the courts themselves.",
    body: "Thoughtfully integrated throughout the property, the Club's courts are connected by landscaped pathways and comfortable gathering spaces. Whether participating in a clinic, enjoying a competitive match, or watching courtside, the racquet experience is designed to be as social as it is active.",
    lgImg: "assets/tennis-veranda.jpg",
    motif: "grass"
  })), /*#__PURE__*/React.createElement("section", {
    className: "section surface-bone"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(PhotoGrid, {
    images: ['assets/padel-serve.jpg', 'assets/pickleball.jpg', 'assets/padel-rally.jpg', 'assets/padel-action.jpg', 'assets/hero-tennis.jpg', 'assets/tennis-veranda.jpg', 'assets/padel-skyline.jpg']
  }))));
}
window.RacquetsPage = RacquetsPage;
