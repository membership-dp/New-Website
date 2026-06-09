// Header.jsx — fixed transparent over hero, becomes Bone after scroll
const { useState: useHeaderState, useEffect: useHeaderEffect } = React;

function Header({ route, onNav, lightOnTop = true }) {
  const [scrolled, setScrolled] = useHeaderState(false);
  const [hidden, setHidden] = useHeaderState(false);
  const [menuOpen, setMenuOpen] = useHeaderState(false);

  useHeaderEffect(() => {
    let lastY = window.scrollY;
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      setScrolled(y > 60);
      // hide when scrolling down past the hero zone; reveal on scroll up
      if (y > 140 && y > lastY + 6) setHidden(true);
      else if (y < lastY - 6 || y <= 140) setHidden(false);
      lastY = y;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); if (raf) cancelAnimationFrame(raf); };
  }, []);

  // Lock body scroll when mobile menu is open.
  useHeaderEffect(() => {
    if (menuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
      window.addEventListener('keydown', onKey);
      return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', onKey); };
    }
  }, [menuOpen]);

  const cls = [
    'site-header',
    scrolled ? 'is-scrolled' : '',
    hidden && !menuOpen ? 'is-hidden' : '',
    lightOnTop ? 'is-light' : '',
  ].join(' ');

  // Branding stays blue/yellow everywhere — no white logo variants (client decision 6/9).
  // The wordmark alone gets a white treatment over the hero for legibility.
  const wordmarkFilter = scrolled || !lightOnTop ? 'none' : 'brightness(0) invert(1)';

  const navItems = [
    { id: 'golf', label: 'Golf' },
    { id: 'racquets', label: 'Racquets' },
    { id: 'location', label: 'Location' },
    { id: 'news', label: 'In the News' },
    { id: 'membership', label: 'Membership' },
  ];

  const goTo = (id) => { setMenuOpen(false); onNav(id); };

  return (
    <header className={cls}>
      <a onClick={() => goTo('home')} style={{
        display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer',
        textDecoration: 'none', color: 'inherit',
      }}>
        <img src="assets/logo-emblem-color.png" className="site-header-logo"
          style={{ height: 44 }} alt="" />
        <img src="assets/wordmark-navy.png" className="site-header-wordmark"
          style={{ height: 13, filter: wordmarkFilter, transition: 'filter 320ms var(--ease-club)' }} alt="Dutchman's Pipe" />
      </a>

      {/* Desktop nav */}
      <nav className="site-header-nav-desktop" style={{ marginLeft: 'auto', alignItems: 'center', gap: 40 }}>
        {navItems.map((it) => (
          <a key={it.id}
             className={`nav-link ${route === it.id ? 'is-active' : ''}`}
             onClick={() => goTo(it.id)}>
            {it.label}
          </a>
        ))}
        <a className="nav-link"
           style={{ padding: '10px 20px', border: '1px solid currentColor', borderRadius: 2 }}
           onClick={() => goTo('login')}>
          Member Login
        </a>
      </nav>

      {/* Mobile hamburger */}
      <button
        className="site-header-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        <span className={`hamburger-icon ${menuOpen ? 'is-open' : ''}`}>
          <span /><span /><span />
        </span>
      </button>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="site-header-menu" onClick={() => setMenuOpen(false)}>
          <div className="site-header-menu-inner" onClick={(e) => e.stopPropagation()}>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              {[{ id: 'home', label: 'Home' }, ...navItems].map((it) => (
                <a key={it.id}
                   className={`mobile-nav-link ${route === it.id ? 'is-active' : ''}`}
                   onClick={() => goTo(it.id)}>
                  {it.label}
                </a>
              ))}
              <a className="mobile-nav-link mobile-nav-login" onClick={() => goTo('login')}>
                Member Login
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

window.Header = Header;
