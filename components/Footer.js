function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Footer.jsx
function Footer({
  onNav
}) {
  const cols = [{
    title: 'The Club',
    links: [{
      label: 'Golf',
      id: 'golf'
    }, {
      label: 'Racquet Sports',
      id: 'racquets'
    }, {
      label: 'Location',
      id: 'location'
    }, {
      label: 'In the News',
      id: 'news'
    }]
  }, {
    title: 'Membership',
    links: [{
      label: 'Membership Inquiry',
      id: 'membership'
    }, {
      label: 'Member Login',
      id: 'login'
    }]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    className: "site-footer"
  }, /*#__PURE__*/React.createElement(Parallax, {
    speed: -0.25,
    className: "satin-sheen"
  }), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "site-footer-grid"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo-emblem-white.png",
    style: {
      height: 72,
      width: 'auto',
      objectFit: 'contain',
      alignSelf: 'flex-start'
    },
    alt: "Dutchman's Pipe Club"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px/1 var(--font-body)',
      letterSpacing: '0.32em',
      textTransform: 'uppercase',
      color: 'var(--color-champagne)'
    }
  }, "By Invitation Only"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px/1.65 var(--font-body)',
      color: 'rgba(245,241,232,0.72)',
      maxWidth: 280
    }
  }, "An invitation-only private club in West Palm Beach. Play. Train. Belong.")), cols.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 11px/1 var(--font-body)',
      letterSpacing: '0.24em',
      textTransform: 'uppercase',
      color: 'var(--color-champagne)',
      marginBottom: 8
    }
  }, col.title), /*#__PURE__*/React.createElement("nav", {
    "aria-label": col.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, col.links.map(l => /*#__PURE__*/React.createElement("a", _extends({
    key: l.id,
    className: "footer-link"
  }, actionProps(() => onNav(l.id)), {
    style: {
      font: '400 15px/1.4 var(--font-body)',
      color: 'rgba(245,241,232,0.78)',
      textDecoration: 'none',
      cursor: 'pointer',
      alignSelf: 'flex-start'
    }
  }), l.label))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 11px/1 var(--font-body)',
      letterSpacing: '0.24em',
      textTransform: 'uppercase',
      color: 'var(--color-champagne)',
      marginBottom: 8
    }
  }, "Visit"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 15px/1.65 var(--font-body)',
      color: 'rgba(245,241,232,0.78)'
    }
  }, "1900 Banyan Club Road", /*#__PURE__*/React.createElement("br", null), "West Palm Beach, FL 33401"), /*#__PURE__*/React.createElement("a", {
    href: "tel:+17726333815",
    className: "footer-link",
    style: {
      font: '400 15px/1.4 var(--font-body)',
      color: 'rgba(245,241,232,0.78)',
      textDecoration: 'none',
      alignSelf: 'flex-start'
    }
  }, "+1 772 633 3815"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:Membership@dutchmanspipeclub.com",
    className: "footer-link",
    style: {
      font: '400 15px/1.4 var(--font-body)',
      color: 'rgba(245,241,232,0.78)',
      textDecoration: 'none',
      alignSelf: 'flex-start'
    }
  }, "Membership@dutchmanspipeclub.com"))), /*#__PURE__*/React.createElement("div", {
    className: "site-footer-bottom"
  }, /*#__PURE__*/React.createElement("div", null, "\xA9 2026 Dutchman's Pipe Club. All Rights Reserved."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("span", null, "Privacy"), /*#__PURE__*/React.createElement("span", null, "Terms"), /*#__PURE__*/React.createElement("span", null, "Press"), /*#__PURE__*/React.createElement("a", _extends({
    className: "footer-link"
  }, actionProps(() => onNav('admin')), {
    style: {
      color: 'inherit',
      textDecoration: 'none',
      cursor: 'pointer'
    }
  }), "Club Admin")))));
}
window.Footer = Footer;
