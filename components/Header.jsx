// Header.jsx — fixed transparent over hero, becomes Bone after scroll
const { useState: useHeaderState, useEffect: useHeaderEffect } = React;

function Header({ route, onNav, lightOnTop = true }) {
  const [scrolled, setScrolled] = useHeaderState(false);
  useHeaderEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const cls = [
    'site-header',
    scrolled ? 'is-scrolled' : '',
    lightOnTop ? 'is-light' : '',
  ].join(' ');

  const logoFilter = scrolled || !lightOnTop ? 'none' : 'brightness(0) invert(1)';

  const navItems = [
    { id: 'golf', label: 'Golf' },
    { id: 'racquets', label: 'Racquets' },
    { id: 'location', label: 'Location' },
    { id: 'membership', label: 'Membership' },
  ];

  return (
    <header className={cls}>
      <a onClick={() => onNav('home')} style={{
        display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer',
        textDecoration: 'none', color: 'inherit',
      }}>
        <img src="assets/logo-emblem-color.png" style={{ height: 44, filter: logoFilter, transition: 'filter 320ms var(--ease-club)' }} alt="" />
        <img src="assets/wordmark-navy.png" style={{ height: 13, filter: logoFilter, transition: 'filter 320ms var(--ease-club)' }} alt="Dutchman's Pipe" />
      </a>
      <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 40 }}>
        {navItems.map((it) => (
          <a key={it.id}
             className={`nav-link ${route === it.id ? 'is-active' : ''}`}
             onClick={() => onNav(it.id)}>
            {it.label}
          </a>
        ))}
        <a className="nav-link"
           style={{ padding: '10px 20px', border: '1px solid currentColor', borderRadius: 2 }}
           onClick={() => onNav('login')}>
          Member Login
        </a>
      </nav>
    </header>
  );
}

window.Header = Header;
