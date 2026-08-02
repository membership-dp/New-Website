// Footer.jsx
function Footer({ onNav }) {
  const cols = [
    {
      title: 'The Club',
      links: [
        { label: 'Golf', id: 'golf' },
        { label: 'Racquet Sports', id: 'racquets' },
        { label: 'Location', id: 'location' },
        { label: 'Guest Information', id: 'guests' },
        { label: 'In the News', id: 'news' },
      ],
    },
    {
      title: 'Membership',
      links: [
        { label: 'Membership Inquiry', id: 'membership' },
        { label: 'Member Login', id: 'login' },
      ],
    },
  ];

  return (
    <footer className="site-footer">
      <Parallax speed={-0.25} className="satin-sheen" />
      <div className="container">
        <div className="site-footer-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <img src="assets/logo-white.svg" style={{ height: 80, width: 'auto', objectFit: 'contain', alignSelf: 'flex-start' }} alt="Dutchman's Pipe Club" />
            <div style={{
              font: '500 12px/1 var(--font-body)',
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
              color: 'var(--color-champagne)',
            }}>
              By Invitation Only
            </div>
            <div style={{
              font: '400 14px/1.65 var(--font-body)',
              color: 'rgba(245,241,232,0.72)',
              maxWidth: 280,
            }}>
              An invitation-only private club in West Palm Beach.
              Play. Train. Belong.
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{
                font: '500 11px/1 var(--font-body)',
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color: 'var(--color-champagne)',
                marginBottom: 8,
              }}>
                {col.title}
              </div>
              <nav aria-label={col.title} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {col.links.map((l) => (
                  <a key={l.id} className="footer-link" {...actionProps(() => onNav(l.id))} style={{
                    font: '400 15px/1.4 var(--font-body)',
                    color: 'rgba(245,241,232,0.78)',
                    textDecoration: 'none', cursor: 'pointer',
                    alignSelf: 'flex-start',
                  }}>
                    {l.label}
                  </a>
                ))}
              </nav>
            </div>
          ))}

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{
              font: '500 11px/1 var(--font-body)',
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: 'var(--color-champagne)',
              marginBottom: 8,
            }}>
              Visit
            </div>
            <div style={{ font: '400 15px/1.65 var(--font-body)', color: 'rgba(245,241,232,0.78)' }}>
              1900 Banyan Club Road<br/>
              West Palm Beach, FL 33401
            </div>
            <a href="tel:+15615575840" className="footer-link" style={{ font: '400 15px/1.4 var(--font-body)', color: 'rgba(245,241,232,0.78)', textDecoration: 'none', alignSelf: 'flex-start' }}>
              +1 561 557 5840
            </a>
            <a href="mailto:Membership@dutchmanspipeclub.com" className="footer-link" style={{ font: '400 15px/1.4 var(--font-body)', color: 'rgba(245,241,232,0.78)', textDecoration: 'none', alignSelf: 'flex-start' }}>
              Membership@dutchmanspipeclub.com
            </a>
          </div>
        </div>

        <div className="site-footer-bottom">
          <div>© 2026 Dutchman's Pipe Club. All Rights Reserved.</div>
          <div style={{ display: 'flex', gap: 28 }}>
            {/* Privacy/Terms/Press have no destinations yet — render as plain
                text so they aren't announced as links that do nothing. */}
            <span>Privacy</span>
            <span>Terms</span>
            <span>Press</span>
            <a className="footer-link" {...actionProps(() => onNav('admin'))} style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}>Club Admin</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
