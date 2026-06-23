function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Header.jsx — fixed transparent over hero, becomes Bone after scroll
const {
  useState: useHeaderState,
  useEffect: useHeaderEffect,
  useRef: useHeaderRef
} = React;
function Header({
  route,
  onNav,
  lightOnTop = true
}) {
  const [scrolled, setScrolled] = useHeaderState(false);
  const [hidden, setHidden] = useHeaderState(false);
  const [menuOpen, setMenuOpen] = useHeaderState(false);
  const menuRef = useHeaderRef(null);
  useHeaderEffect(() => {
    let lastY = window.scrollY;
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      setScrolled(y > 60);
      // hide when scrolling down past the hero zone; reveal on scroll up
      if (y > 140 && y > lastY + 6) setHidden(true);else if (y < lastY - 6 || y <= 140) setHidden(false);
      lastY = y;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Lock body scroll when mobile menu is open.
  useHeaderEffect(() => {
    if (menuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      const opener = document.activeElement; // the hamburger toggle
      const onKey = e => {
        if (e.key === 'Escape') setMenuOpen(false);
      };
      window.addEventListener('keydown', onKey);
      // move focus into the drawer; restore it to the toggle on close
      const first = menuRef.current && menuRef.current.querySelector('a, button');
      if (first) first.focus();
      return () => {
        document.body.style.overflow = prev;
        window.removeEventListener('keydown', onKey);
        if (opener && opener.focus) opener.focus();
      };
    }
  }, [menuOpen]);
  const cls = ['site-header', scrolled ? 'is-scrolled' : '', hidden && !menuOpen ? 'is-hidden' : '', lightOnTop ? 'is-light' : ''].join(' ');

  // Branding stays blue/yellow everywhere — no white logo variants (client decision 6/9).
  // The wordmark alone gets a white treatment over the hero for legibility.
  const wordmarkFilter = scrolled || !lightOnTop ? 'none' : 'brightness(0) invert(1)';
  const navItems = [{
    id: 'golf',
    label: 'Golf'
  }, {
    id: 'racquets',
    label: 'Racquets'
  }, {
    id: 'location',
    label: 'Location'
  }, {
    id: 'villas',
    label: 'Villas',
    href: 'https://www.belgrovevillas.com/'
  }, {
    id: 'news',
    label: 'In the News'
  }, {
    id: 'membership',
    label: 'Membership'
  }];
  const goTo = id => {
    setMenuOpen(false);
    onNav(id);
  };
  return /*#__PURE__*/React.createElement("header", {
    className: cls
  }, /*#__PURE__*/React.createElement("a", _extends({}, actionProps(() => goTo('home')), {
    "aria-label": "Dutchman's Pipe Club \u2014 home",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      cursor: 'pointer',
      textDecoration: 'none',
      color: 'inherit'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: scrolled || !lightOnTop ? 'assets/logo-emblem-color.png' : 'assets/logo-white.svg',
    className: "site-header-logo",
    style: {
      height: 44,
      transition: 'opacity 320ms var(--ease-club)'
    },
    alt: ""
  }), /*#__PURE__*/React.createElement("img", {
    src: "assets/wordmark-navy.png",
    className: "site-header-wordmark",
    style: {
      height: 13,
      filter: wordmarkFilter,
      transition: 'filter 320ms var(--ease-club)'
    },
    alt: "Dutchman's Pipe"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "site-header-nav-desktop",
    style: {
      marginLeft: 'auto',
      alignItems: 'center',
      gap: 40
    }
  }, navItems.map(it => it.href ? /*#__PURE__*/React.createElement("a", {
    key: it.id,
    className: "nav-link",
    href: it.href,
    target: "_blank",
    rel: "noopener noreferrer"
  }, it.label) : /*#__PURE__*/React.createElement("a", _extends({
    key: it.id,
    className: `nav-link ${route === it.id ? 'is-active' : ''}`,
    "aria-current": route === it.id ? 'page' : undefined
  }, actionProps(() => goTo(it.id), 'link')), it.label)), /*#__PURE__*/React.createElement("a", _extends({
    className: "nav-link",
    style: {
      padding: '10px 20px',
      border: '1px solid currentColor',
      borderRadius: 2
    }
  }, actionProps(() => goTo('login'))), "Member Login")), /*#__PURE__*/React.createElement("button", {
    className: "site-header-toggle",
    onClick: () => setMenuOpen(!menuOpen),
    "aria-label": menuOpen ? 'Close menu' : 'Open menu',
    "aria-expanded": menuOpen
  }, /*#__PURE__*/React.createElement("span", {
    className: `hamburger-icon ${menuOpen ? 'is-open' : ''}`
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null))), menuOpen && /*#__PURE__*/React.createElement("div", {
    className: "site-header-menu",
    onClick: () => setMenuOpen(false)
  }, /*#__PURE__*/React.createElement("div", {
    ref: menuRef,
    className: "site-header-menu-inner",
    onClick: e => e.stopPropagation(),
    role: "dialog",
    "aria-modal": "true",
    "aria-label": "Menu"
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }
  }, [{
    id: 'home',
    label: 'Home'
  }, ...navItems].map(it => it.href ? /*#__PURE__*/React.createElement("a", {
    key: it.id,
    className: "mobile-nav-link",
    href: it.href,
    target: "_blank",
    rel: "noopener noreferrer",
    onClick: () => setMenuOpen(false)
  }, it.label) : /*#__PURE__*/React.createElement("a", _extends({
    key: it.id,
    className: `mobile-nav-link ${route === it.id ? 'is-active' : ''}`,
    "aria-current": route === it.id ? 'page' : undefined
  }, actionProps(() => goTo(it.id), 'link')), it.label)), /*#__PURE__*/React.createElement("a", _extends({
    className: "mobile-nav-link mobile-nav-login"
  }, actionProps(() => goTo('login'))), "Member Login")))));
}
window.Header = Header;
