function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// pages/Guests.jsx — Guest Information (club 7/31). Content mirrors the club's
// existing guest page (dutchmanspipeclub.com/guests) so a sponsoring member can
// send guests here for arrival protocol, caddies, and dress code.
function GuestsPage({
  onNav
}) {
  const items = [{
    title: 'Registration',
    body: 'All guests must be sponsored by a current Member of the Club.'
  }, {
    title: 'Gate & Security',
    body: 'On arrival at the guarded entrance, please provide your name and the name of your sponsoring Member before continuing to valet.'
  }, {
    title: 'Valet & Bag Drop',
    body: 'Complimentary valet and bag drop service is available at the clubhouse entrance. Members are asked to arrive ahead of their guests.'
  }, {
    title: 'Arrival',
    body: 'Please check in at the Golf Pro Shop or the Tennis Pro Shop upon arrival, where our staff will direct you to the facilities.'
  }, {
    title: 'Caddies',
    body: 'Caddies are mandatory. The Caddie Master will assign a caddie upon your arrival. Please note there is no ATM on property.'
  }, {
    title: 'Mobile Phones',
    body: 'Phones should be silenced throughout the Club. Respectful, discreet use is permitted.'
  }, {
    title: 'Dress Code',
    body: 'Proper golf and tennis attire is required at all times. Appropriate clothing is available in the pro shops.'
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
      backgroundImage: `url('assets/hero-clubhouse.jpg')`,
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
      maxWidth: 1100
    }
  }, "Welcome to Dutchman's Pipe."), /*#__PURE__*/React.createElement("p", {
    className: "hero-sub",
    style: {
      color: 'rgba(245,241,232,0.84)',
      marginTop: 28,
      maxWidth: 760,
      marginBottom: 0
    }
  }, "Every Member guest is meant to experience the Club with the same pleasure and enjoyment as full Membership."))), /*#__PURE__*/React.createElement("section", {
    className: "section-tight surface-bone-95"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("p", {
    className: "body-text",
    style: {
      color: 'var(--color-navy-70)',
      maxWidth: 820
    }
  }, "We are delighted to welcome you. So that every visit is a comfortable one, we ask that guests observe the protocols and customs of the Club during their time on property. Should you have any question at all, our staff is always happy to help.")))), /*#__PURE__*/React.createElement("section", {
    className: "section surface-white"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-rule",
    style: {
      marginBottom: 24
    }
  }, "Before You Arrive"), /*#__PURE__*/React.createElement("h2", {
    className: "display-md",
    style: {
      color: 'var(--color-club-navy)',
      maxWidth: 720,
      marginBottom: 64
    }
  }, "A few notes for your visit.")), /*#__PURE__*/React.createElement("div", {
    className: "three-up"
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
