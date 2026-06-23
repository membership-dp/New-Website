function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// pages/News.jsx — "In the News". Content comes from NewsStore (defaults,
// or whatever the Admin editor saved in this browser).
function NewsPage({
  onNav
}) {
  const {
    featured,
    articles
  } = NewsStore.load();
  const Meta = ({
    tag,
    date,
    light
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      font: '500 11px/1 var(--font-body)',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: light ? 'rgba(245,241,232,0.7)' : 'var(--color-navy-70)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-champagne)'
    }
  }, tag), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, date));
  return /*#__PURE__*/React.createElement("div", {
    className: "page-shell"
  }, /*#__PURE__*/React.createElement("section", {
    className: "page-hero page-hero-short",
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Parallax, {
    speed: 0.2,
    style: {
      position: 'absolute',
      inset: '-9% 0',
      zIndex: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/news-featured.jpg",
    alt: "",
    decoding: "async",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "photo-scrim",
    style: {
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "page-hero-inner",
    style: {
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "display-xl",
    style: {
      color: 'var(--color-bone)',
      maxWidth: 1100
    }
  }, "In the News"))), /*#__PURE__*/React.createElement("section", {
    className: "section surface-bone"
  }, /*#__PURE__*/React.createElement(LayeredCallout, {
    eyebrow: "Featured",
    title: featured.title,
    body: featured.excerpt,
    lgImg: featured.img,
    ctaLabel: "Read the Story",
    onCta: () => {},
    motif: "grass"
  })), /*#__PURE__*/React.createElement("section", {
    className: "section surface-white"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-rule",
    style: {
      marginBottom: 40
    }
  }, "Latest")), /*#__PURE__*/React.createElement("div", {
    className: "three-up"
  }, articles.map((a, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: a.title,
    delay: i % 3 * 120
  }, /*#__PURE__*/React.createElement("a", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      cursor: 'pointer',
      textDecoration: 'none',
      color: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "photo-frame",
    style: {
      aspectRatio: '4/3'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: a.img,
    alt: "",
    loading: "lazy",
    decoding: "async"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(Meta, {
    tag: a.tag,
    date: a.date
  })), /*#__PURE__*/React.createElement("h3", {
    className: "display-sm",
    style: {
      color: 'var(--color-club-navy)',
      marginTop: 14,
      fontSize: 24
    }
  }, a.title), /*#__PURE__*/React.createElement("p", {
    className: "body-text",
    style: {
      color: 'var(--color-navy-70)',
      marginTop: 12,
      fontSize: 15
    }
  }, a.excerpt), /*#__PURE__*/React.createElement("span", {
    className: "arrow-link",
    style: {
      marginTop: 20,
      alignSelf: 'flex-start',
      color: 'var(--color-club-navy)'
    }
  }, "Read", /*#__PURE__*/React.createElement("img", {
    src: "assets/arrow-link.png",
    alt: ""
  })))))))), /*#__PURE__*/React.createElement("section", {
    className: "full-bleed-quote",
    style: {
      minHeight: '56vh',
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
  }, "Be part of the story."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("a", _extends({}, actionProps(() => onNav('membership')), {
    className: "btn btn-ghost-light"
  }), "Request Membership Information")))));
}
window.NewsPage = NewsPage;
