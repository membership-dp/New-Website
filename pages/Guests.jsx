// pages/Guests.jsx — Guest Information. Reworked per Madison 8/3: new header
// image, no sub-copy under the title, the beige lede band removed, and Guest
// Registration promoted to a feature across the top with the remaining notes
// stacked beneath it. Copy is hers.
function GuestsPage({ onNav }) {
  const items = [
    { title: 'Arrival & Security', body: "Upon arrival at the Club's guarded entrance, guests will simply provide their name and the name of their sponsoring Member to the gate attendant before proceeding to the clubhouse." },
    { title: 'Valet Parking', body: 'Complimentary valet parking is available at the clubhouse entrance. To help ensure a smooth arrival, we encourage Members to arrive prior to their guests whenever possible.' },
    { title: 'Clubhouse Check-In', body: 'Once you arrive at the clubhouse, please check in at either the Golf Pro Shop or the Racquets Pro Shop, where our team will be happy to welcome you and direct you to the appropriate facilities.' },
    { title: 'Dress Code', body: 'Appropriate golf and racquets attire is required throughout the Club. If you need anything during your visit, both Pro Shops offer a selection of apparel and accessories.' },
    { title: 'Caddie Program', body: 'Caddies are required for all golf rounds and will be assigned by the Caddie Master upon arrival. Please note that there is no ATM available on property.' },
    { title: 'Cell Phones', body: 'To help preserve the relaxed atmosphere of the Club, we kindly ask that mobile phones remain on silent throughout your visit. Respectful and discreet use is always appreciated.' },
  ];

  return (
    <div className="page-shell">
      {/* HERO — parallax drift */}
      <section className="page-hero page-hero-short" style={{ overflow: 'hidden' }}>
        <Parallax speed={0.18} style={{ position: 'absolute', inset: '-9% 0', zIndex: 0 }}>
          <div style={{ backgroundImage: `url('assets/guests-hero.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%' }} />
        </Parallax>
        <div className="photo-scrim" style={{ zIndex: 1 }} />
        <div className="page-hero-inner hero-stagger" style={{ position: 'relative', zIndex: 2 }}>
          <div className="eyebrow-rule" style={{ color: 'rgba(245,241,232,0.85)', marginBottom: 32 }}>
            Guest Information
          </div>
          <h1 className="display-xl" style={{ color: 'var(--color-bone)', maxWidth: 1100, marginBottom: 0 }}>
            Welcome to Dutchman's Pipe.
          </h1>
        </div>
      </section>

      {/* GUEST REGISTRATION — feature across the top, then the notes beneath */}
      <section className="section surface-white">
        <div className="container">
          {/* club 8/4: eyebrow dropped, heading + intro centred. The champagne
              rule already auto-centres, so it now sits under the heading. */}
          <Reveal style={{ textAlign: 'center' }}>
            <h2 className="display-lg" style={{ color: 'var(--color-club-navy)', maxWidth: 900, marginInline: 'auto' }}>
              Before You Arrive
            </h2>
            <span className="champagne-rule" />
            <p className="body-text" style={{
              color: 'var(--color-navy-70)',
              marginTop: 32, maxWidth: 820, marginInline: 'auto', fontSize: 19, lineHeight: 1.7,
            }}>
              We look forward to welcoming you to Dutchman's Pipe. Guests are welcomed
              by invitation of a current Member of the Club and should be registered
              prior to arrival. The information below has been thoughtfully prepared to
              help ensure a seamless arrival and an enjoyable experience during your
              visit.
            </p>
          </Reveal>

          <div className="three-up" style={{ marginTop: 88 }}>
            {items.map((it, i) => (
              <Reveal key={it.title} delay={(i % 3) * 120}>
                <div style={{ borderTop: '1px solid var(--color-champagne)', paddingTop: 24 }}>
                  <h3 className="display-sm" style={{ color: 'var(--color-club-navy)', fontSize: 22, margin: 0 }}>
                    {it.title}
                  </h3>
                  <p className="body-text" style={{ color: 'var(--color-navy-70)', marginTop: 12, fontSize: 15 }}>
                    {it.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINDING US — satin chapter */}
      <section className="section surface-satin">
        <Parallax speed={-0.25} className="satin-sheen" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <Reveal>
            <div className="eyebrow-rule" style={{ color: 'rgba(245,241,232,0.78)', marginBottom: 24 }}>
              Finding Us
            </div>
            <h2 className="display-md" style={{ color: 'var(--color-bone)', maxWidth: 720 }}>
              1900 Banyan Club Road.
            </h2>
            <p className="body-text" style={{ color: 'rgba(245,241,232,0.78)', marginTop: 28, maxWidth: 620 }}>
              West Palm Beach, Florida 33401 — east of I-95, minutes from Palm Beach
              Island and downtown.
            </p>
            <div style={{ marginTop: 36, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{
                font: '500 11px/1 var(--font-body)',
                letterSpacing: '0.24em', textTransform: 'uppercase',
                color: 'var(--color-champagne)',
              }}>
                Club Reception
              </div>
              <a href="tel:+15615575840" style={{
                font: '400 17px/1.6 var(--font-body)',
                color: 'var(--color-bone)', textDecoration: 'none',
              }}>
                +1 561 557 5840
              </a>
            </div>
            <div style={{ marginTop: 44 }}>
              <a {...actionProps(() => onNav('location'))} className="arrow-link" style={{ color: 'rgba(245,241,232,0.85)', borderColor: 'var(--color-champagne)' }}>
                The Setting
                <img src="assets/arrow-link.png" style={{ filter: 'brightness(0) invert(1)' }} alt="" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
window.GuestsPage = GuestsPage;
