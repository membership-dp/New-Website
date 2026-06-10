// pages/Location.jsx
function LocationPage({ onNav }) {
  return (
    <div className="page-shell">
      {/* HERO — parallax drift */}
      <section className="page-hero page-hero-short" style={{ overflow: 'hidden' }}>
        <Parallax speed={0.18} style={{ position: 'absolute', inset: '-9% 0', zIndex: 0 }}>
          <div style={{ backgroundImage: `url('assets/hero-palms.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%' }} />
        </Parallax>
        <div className="photo-scrim" style={{ zIndex: 1 }} />
        <div className="page-hero-inner hero-stagger" style={{ position: 'relative', zIndex: 2 }}>
          <div className="eyebrow-rule" style={{ color: 'rgba(245,241,232,0.85)', marginBottom: 32 }}>
            The Location
          </div>
          <h1 className="display-xl" style={{ color: 'var(--color-bone)', maxWidth: 1100 }}>
            Ideally situated in Palm Beach.
          </h1>
          <p className="hero-sub" style={{
            color: 'rgba(245,241,232,0.84)',
            marginTop: 28, maxWidth: 700, marginBottom: 0,
          }}>
            Connected to the best of the island. Positioned for ease.
          </p>
        </div>
      </section>

      {/* INTRO LEDE */}
      <section className="section surface-bone">
        <div className="container">
          <div className="lede-page-grid">
            <Reveal>
              <div className="eyebrow-rule">A Rare Position</div>
            </Reveal>
            <Reveal delay={100}>
              <p style={{
                font: '400 26px/1.5 var(--font-display)',
                color: 'var(--color-club-navy)',
                margin: 0, maxWidth: '40ch',
                letterSpacing: '-0.005em',
                fontStyle: 'italic',
              }}>
                Dutchman's Pipe Club occupies a rare position. Quietly removed, yet
                moments from the island, downtown, and private air travel.
              </p>
              <p className="body-text" style={{ marginTop: 28, color: 'var(--color-navy-70)' }}>
                A private setting, seamlessly connected to everything that defines the
                Palm Beach lifestyle. Convenience and proximity, while preserving a
                sense of calm and discretion.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* THREE-PANEL SLIDESHOW — the setting, cycling */}
      <section className="section-tight surface-bone">
        <div className="container">
          <Reveal>
            <div className="eyebrow-rule" style={{ marginBottom: 32 }}>The Setting</div>
            <ThreePanel
              images={[
                'assets/hero-palms.jpg', 'assets/hero-clubhouse.jpg', 'assets/course-skyline.jpg',
                'assets/hero-sunset.jpg', 'assets/hero-villa.jpg', 'assets/hero-fairway.jpg',
              ]}
              captions={[
                'Coastal palms', 'The clubhouse', 'Downtown skyline',
                'Evening light', 'Private residences', 'Signature fairway',
              ]}
            />
          </Reveal>
        </div>
      </section>

      {/* MAP / KEY DESTINATIONS — illustrative diagram */}
      <Reveal as="section" className="section-tight surface-bone-95">
        <div className="container">
          <div className="eyebrow-rule" style={{ marginBottom: 40 }}>From the Clubhouse</div>
          <div className="four-up-strip">
            {[
              { time: '8', unit: 'min', dest: 'Worth Avenue' },
              { time: '10', unit: 'min', dest: 'Palm Beach Island' },
              { time: '12', unit: 'min', dest: 'PBI Airport' },
              { time: '20', unit: 'min', dest: 'Private Aviation' },
            ].map((d) => (
              <div key={d.dest} className="four-up-cell">
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                  <span className="stat-num" style={{ fontSize: 64 }}>{d.time}</span>
                  <span style={{
                    font: '500 12px/1 var(--font-body)',
                    letterSpacing: '0.22em', textTransform: 'uppercase',
                    color: 'var(--color-navy-70)',
                  }}>
                    {d.unit}
                  </span>
                </div>
                <div style={{
                  font: '500 15px/1.35 var(--font-body)',
                  color: 'var(--color-club-navy)',
                  letterSpacing: '0.04em',
                }}>
                  {d.dest}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* AIR ACCESS — satin chapter, flipped */}
      <section className="section surface-satin">
        <Parallax speed={-0.25} className="satin-sheen" />
        <div className="satin-content">
        <LayeredCallout
          flipped dark
          eyebrow="Air Access"
          title="Runway to clubhouse — measured in minutes."
          body={[
            'Palm Beach International (PBI) is located nearby, providing direct, efficient commercial access for seasonal residents and traveling members.',
            'For those arriving by private aviation, multiple executive airports are within close reach, ensuring discreet, streamlined arrivals.',
          ]}
          lgImg="assets/hero-sunset.jpg"
          motif="pipe"
        />
        </div>
      </section>

      {/* ISLAND & WORTH AVENUE — layered callout */}
      <section className="section surface-white">
        <LayeredCallout
          eyebrow="The Island"
          title="Palm Beach Island & Worth Avenue."
          body={[
            'Just minutes from Palm Beach Island, the Club offers effortless proximity to the boutiques of Worth Avenue, oceanfront dining, private beach clubs, and the architectural charm that defines the island.',
            'Members move easily between a morning round and an afternoon engagement, never feeling rushed or removed.',
          ]}
          lgImg="assets/hero-clubhouse.jpg"
          motif="grass"
        />
      </section>

      {/* RARE BALANCE quote — parallax drift */}
      <section className="full-bleed-quote" style={{ minHeight: '70vh', overflow: 'hidden' }}>
        <Parallax speed={0.22} style={{ position: 'absolute', inset: '-11% 0', zIndex: 0 }}>
          <div style={{ backgroundImage: `url('assets/hero-fairway.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%' }} />
        </Parallax>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(rgba(15,25,40,0.5), rgba(15,25,40,0.78))' }} />
        <Reveal style={{ position: 'relative', zIndex: 2, maxWidth: 1100, textAlign: 'center' }}>
          <div className="eyebrow-rule" style={{
            color: 'rgba(245,241,232,0.85)',
            justifyContent: 'center', marginBottom: 32,
          }}>
            A Rare Balance
          </div>
          <h2 className="display-lg" style={{ color: 'var(--color-bone)' }}>
            Protected and intentional —<br/>
            <em style={{ fontStyle: 'italic', color: 'var(--color-champagne-bright)' }}>fully connected.</em>
          </h2>
          <p style={{
            font: '400 19px/1.6 var(--font-body)',
            color: 'rgba(245,241,232,0.82)',
            marginTop: 32, maxWidth: 700, marginInline: 'auto',
          }}>
            Few clubs offer this level of accessibility while maintaining a sense of
            separation. This balance is what makes the location exceptional.
          </p>
          <div style={{ marginTop: 44 }}>
            <a onClick={() => onNav('membership')} className="btn btn-ghost-light">
              Request Membership Information
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
window.LocationPage = LocationPage;
