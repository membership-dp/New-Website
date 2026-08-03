function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// pages/Guests.jsx — Guest Information. Reworked per Madison 8/3: new header
// image, no sub-copy under the title, the beige lede band removed, and Guest
// Registration promoted to a feature across the top with the remaining notes
// stacked beneath it. Copy is hers.
function GuestsPage({
  onNav
}) {
  const items = [{
    title: 'Arrival & Security',
    body: "Upon arrival at the Club's guarded entrance, guests will simply provide their name and the name of their sponsoring Member to the gate attendant before proceeding to the clubhouse."
  }, {
    title: 'Valet Parking',
    body: 'Complimentary valet parking is available at the clubhouse entrance. To help ensure a smooth arrival, we encourage Members to arrive prior to their guests whenever possible.'
  }, {
    title: 'Clubhouse Check-In',
    body: 'Once you arrive at the clubhouse, please check in at either the Golf Pro Shop or the Racquets Pro Shop, where our team will be happy to welcome you and direct you to the appropriate facilities.'
  }, {
    title: 'Dress Code',
    body: 'Appropriate golf and racquets attire is required throughout the Club. If you need anything during your visit, both Pro Shops offer a selection of apparel and accessories.'
  }, {
    title: 'Caddie Program',
    body: 'Caddies are required for all golf rounds and will be assigned by the Caddie Master upon arrival. Please note that there is no ATM available on property.'
  }, {
    title: 'Cell Phones',
    body: 'To help preserve the relaxed atmosphere of the Club, we kindly ask that mobile phones remain on silent throughout your visit. Respectful and discreet use is always appreciated.'
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
      backgroundImage: `url('assets/guests-hero.jpg')`,
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
  }, "Guest Information"), /*#__PURE__*/React.createElement("h1", {
    className: "display-xl",
    style: {
      color: 'var(--color-bone)',
      maxWidth: 1100,
      marginBottom: 0
    }
  }, "Welcome to Dutchman's Pipe."))), /*#__PURE__*/React.createElement("section", {
    className: "section surface-white"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-rule",
    style: {
      marginBottom: 24
    }
  }, "Guest Registration"), /*#__PURE__*/React.createElement("h2", {
    className: "display-lg",
    style: {
      color: 'var(--color-club-navy)',
      maxWidth: 900
    }
  }, "Before You Arrive"), /*#__PURE__*/React.createElement("span", {
    className: "champagne-rule"
  }), /*#__PURE__*/React.createElement("p", {
    className: "body-text",
    style: {
      color: 'var(--color-navy-70)',
      marginTop: 32,
      maxWidth: 900,
      fontSize: 19,
      lineHeight: 1.7
    }
  }, "We look forward to welcoming you to Dutchman's Pipe. Guests are welcomed by invitation of a current Member of the Club and should be registered prior to arrival. The information below has been thoughtfully prepared to help ensure a seamless arrival and an enjoyable experience during your visit.")), /*#__PURE__*/React.createElement("div", {
    className: "three-up",
    style: {
      marginTop: 88
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: it.title,
    delay: i % 3 * 120
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--color-champagne)',
      paddingTop: 24
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "display-sm",
    style: {
      color: 'var(--color-club-navy)',
      fontSize: 22,
      margin: 0
    }
  }, it.title), /*#__PURE__*/React.createElement("p", {
    className: "body-text",
    style: {
      color: 'var(--color-navy-70)',
      marginTop: 12,
      fontSize: 15
    }
  }, it.body))))))), /*#__PURE__*/React.createElement("section", {
    className: "section surface-satin"
  }, /*#__PURE__*/React.createElement(Parallax, {
    speed: -0.25,
    className: "satin-sheen"
  }), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-rule",
    style: {
      color: 'rgba(245,241,232,0.78)',
      marginBottom: 24
    }
  }, "Finding Us"), /*#__PURE__*/React.createElement("h2", {
    className: "display-md",
    style: {
      color: 'var(--color-bone)',
      maxWidth: 720
    }
  }, "1900 Banyan Club Road."), /*#__PURE__*/React.createElement("p", {
    className: "body-text",
    style: {
      color: 'rgba(245,241,232,0.78)',
      marginTop: 28,
      maxWidth: 620
    }
  }, "West Palm Beach, Florida 33401 \u2014 east of I-95, minutes from Palm Beach Island and downtown."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 11px/1 var(--font-body)',
      letterSpacing: '0.24em',
      textTransform: 'uppercase',
      color: 'var(--color-champagne)'
    }
  }, "Club Reception"), /*#__PURE__*/React.createElement("a", {
    href: "tel:+15615575840",
    style: {
      font: '400 17px/1.6 var(--font-body)',
      color: 'var(--color-bone)',
      textDecoration: 'none'
    }
  }, "+1 561 557 5840")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement("a", _extends({}, actionProps(() => onNav('location')), {
    className: "arrow-link",
    style: {
      color: 'rgba(245,241,232,0.85)',
      borderColor: 'var(--color-champagne)'
    }
  }), "The Setting", /*#__PURE__*/React.createElement("img", {
    src: "assets/arrow-link.png",
    style: {
      filter: 'brightness(0) invert(1)'
    },
    alt: ""
  })))))));
}
window.GuestsPage = GuestsPage;
