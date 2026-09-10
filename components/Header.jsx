// Header.jsx — fixed transparent over hero, becomes Bone after scroll
// The club's real member portal (Clubessential). Linked, not routed — it is a
// separate application on its own subdomain, so these are true <a href> links
// that cmd-click and open-in-new-tab correctly.
const DP_MEMBER_PORTAL = 'https://members.dutchmanspipeclub.com/login';
const { useState: useHeaderState, useEffect: useHeaderEffect, useRef: useHeaderRef } = React;

function Header({ route, onNav, lightOnTop = true }) {
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
      const opener = document.activeElement;        // the hamburger toggle
      const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
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

  const cls = [
    'site-header',
    scrolled ? 'is-scrolled' : '',
    hidden && !menuOpen ? 'is-hidden' : '',
    lightOnTop ? 'is-light' : '',
  ].join(' ');

  // Branding stays blue/yellow everywhere — no white logo variants (client decision 6/9).
  // The wordmark alone gets a white treatment over the hero for legibility.
  const wordmarkFilter = scrolled || !lightOnTop ? 'none' : 'brightness(0) invert(1)';

  // The four primary destinations run across the bar; Villas / In the News /
  // Guest Information are grouped into one stacked column so the nav reads
  // cleaner without hiding anything (club 8/3).
  const navItems = [
    { id: 'golf', label: 'Golf' },
    { id: 'racquets', label: 'Racquets' },
    { id: 'location', label: 'Location' },
    { id: 'membership', label: 'Membership' },
  ];
  // `short` keeps the top bar tight; the drawer and footer use the full label.
  const navStack = [
    { id: 'villas', label: 'Villas', href: 'https://www.belgrovevillas.com/' },
    { id: 'news', label: 'In the News' },
    { id: 'guests', label: 'Guest Information', short: 'Guests' },
  ];

  const goTo = (id) => { setMenuOpen(false); onNav(id); };

  // The drawer is deliberately a SIBLING of <header>, not a child. .site-header
  // carries backdrop-filter once scrolled (and a transform while hiding), and
  // either of those makes the header the containing block for position:fixed
  // descendants — which collapsed the "full screen" overlay to the 64px header
  // box as soon as the page was scrolled (Madison, mobile, 9/10).
  return (
    <>
    <header className={cls}>
      <a {...actionProps(() => goTo('home'))} aria-label="Dutchman's Pipe Club — home" className="site-header-brand" style={{
        display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer',
        textDecoration: 'none', color: 'inherit',
      }}>
        {/* real white logo over the hero; color emblem once scrolled onto bone */}
        <img src={scrolled || !lightOnTop ? 'assets/logo-emblem-color.png' : 'assets/logo-white.svg'} className="site-header-logo"
          style={{ height: 44, transition: 'opacity 320ms var(--ease-club)' }} alt="" />
        <img src="assets/wordmark-navy.png" className="site-header-wordmark"
          style={{ height: 13, filter: wordmarkFilter, transition: 'filter 320ms var(--ease-club)' }} alt="Dutchman's Pipe" />
      </a>

      {/* Desktop nav */}
      <nav className="site-header-nav-desktop" style={{ marginLeft: 'auto' }}>
        {navItems.map((it) => (
          it.href ? (
            <a key={it.id} className="nav-link" href={it.href} target="_blank" rel="noopener noreferrer">
              {it.label}
            </a>
          ) : (
            <a key={it.id}
               className={`nav-link ${route === it.id ? 'is-active' : ''}`}
               aria-current={route === it.id ? 'page' : undefined}
               {...actionProps(() => goTo(it.id), 'link')}>
              {it.label}
            </a>
          )
        ))}
        {/* secondary destinations — same row, quieter, behind a hairline */}
        <div className="nav-secondary">
          {navStack.map((it) => (
            it.href ? (
              <a key={it.id} className="nav-link" href={it.href} target="_blank" rel="noopener noreferrer">
                {it.short || it.label}
              </a>
            ) : (
              <a key={it.id}
                 className={`nav-link ${route === it.id ? 'is-active' : ''}`}
                 aria-current={route === it.id ? 'page' : undefined}
                 {...actionProps(() => goTo(it.id), 'link')}>
                {it.short || it.label}
              </a>
            )
          ))}
        </div>
        <a className="nav-link"
           style={{ padding: '10px 20px', border: '1px solid currentColor', borderRadius: 2 }}
           href={DP_MEMBER_PORTAL} target="_blank" rel="noopener noreferrer">
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

    </header>

    {/* Mobile menu overlay */}
    {menuOpen && (
      <div className="site-header-menu" onClick={() => setMenuOpen(false)}>
        <div
          ref={menuRef}
          className="site-header-menu-inner"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {[{ id: 'home', label: 'Home' }, ...navItems, ...navStack].map((it) => (
              it.href ? (
                <a key={it.id} className="mobile-nav-link" href={it.href} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>
                  {it.label}
                </a>
              ) : (
                <a key={it.id}
                   className={`mobile-nav-link ${route === it.id ? 'is-active' : ''}`}
                   aria-current={route === it.id ? 'page' : undefined}
                   {...actionProps(() => goTo(it.id), 'link')}>
                  {it.label}
                </a>
              )
            ))}
            <a className="mobile-nav-link mobile-nav-login"
               href={DP_MEMBER_PORTAL} target="_blank" rel="noopener noreferrer"
               onClick={() => setMenuOpen(false)}>
              Member Login
            </a>
          </nav>
        </div>
      </div>
    )}
    </>
  );
}

window.Header = Header;
window.DP_MEMBER_PORTAL = DP_MEMBER_PORTAL;
