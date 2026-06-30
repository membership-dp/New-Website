// pages/Location.jsx
function LocationPage({ onNav }) {
  return (
    <div className="page-shell">
      {/* HERO — parallax drift */}
      <section className="page-hero page-hero-short" style={{ overflow: 'hidden' }}>
        <Parallax speed={0.18} style={{ position: 'absolute', inset: '-9% 0', zIndex: 0 }}>
          {/* nudged counterclockwise + scaled to level the horizon (club: looked crooked) */}
          <div style={{ backgroundImage: `url('assets/location-hero.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%', transform: 'rotate(-1.2deg) scale(1.08)' }} />
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
            marginTop: 28, maxWidth: 720, marginBottom: 0,
          }}>
            Quietly removed, yet moments from the island, downtown, and private air travel.
          </p>
        </div>
      </section>

      {/* FROM THE CLUBHOUSE — travel-time strip, moved directly under the hero
          (club: delete "A Rare Position", move this up, remove the collage).
          Section stays opaque; Reveal wraps the content so the fixed satin
          sheet never shows through during the fade-in. */}
      <section className="section-tight surface-bone-95">
        <Reveal>
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
      </section>

      {/* AIR ACCESS — satin chapter, flipped */}
      <section className="section surface-satin">
        <Parallax speed={-0.25} className="satin-sheen" />
        <div className="satin-content">
        <LayeredCallout
          flipped dark
          eyebrow="Air Access"
          title="Runway to clubhouse — measured in minutes."
          body={[
            'Palm Beach International Airport is just moments away, with convenient commercial service and nearby private aviation options for effortless arrivals.',
            'Close to everything, yet quietly removed.',
          ]}
          lgImg="assets/air-access.jpg"
          motif="pipe"
        />
        </div>
      </section>

      {/* ISLAND & WORTH AVENUE — layered callout. Image swapped to the new
          lagoon/skyline aerial (Madison 6/30). Bottom padding dropped so the
          gap with CityPlace is one section (120px), not the doubled 240px. */}
      <section className="section surface-white" style={{ paddingBottom: 0 }}>
        <LayeredCallout
          eyebrow="The Island"
          title="Palm Beach, within reach."
          body="From mornings along the Lake Trail to afternoons on the beach and shopping along Worth Avenue, Dutchman's Pipe is ideally positioned to enjoy the lifestyle that has made Palm Beach one of America's most desirable destinations."
          lgImg="assets/palmbeach-aerial.jpg"
          motif="grass"
        />
      </section>

      {/* CITYPLACE / DOWNTOWN — new section (club 6/15); CityPlace photo 6/19 */}
      <section className="section surface-white">
        <LayeredCallout
          flipped
          eyebrow="Downtown & CityPlace"
          title="The best of the city, minutes away."
          body="Dinner at Milos, a performance at the Kravis Center, or cocktails with friends downtown—some of West Palm Beach's most sought-after experiences are just minutes from Dutchman's Pipe. The Club offers effortless access to the city while remaining a quiet retreat from it."
          lgImg="assets/cityplace.jpg"
          motif="pipe"
        />
      </section>

      {/* PALM BEACH GALLERY — one row of WPB lifestyle photos (club 6/23:
          single row, course shot removed). NOTE: club's new left-side photo
          (doc image6) still to drop in. */}
      <section className="section-tight surface-bone">
        <div className="container">
          <PhotoGrid
            images={[
              'assets/worth-ave.jpg', 'assets/wpb-dining.jpg', 'assets/cityplace-walk.jpg',
              'assets/wpb-aerial.jpg', 'assets/cityplace.jpg',
            ]}
          />
        </div>
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
          <p className="body-text" style={{
            color: 'rgba(245,241,232,0.82)',
            marginTop: 32, maxWidth: 700, marginInline: 'auto',
          }}>
            Few clubs offer this level of accessibility while maintaining a sense of
            separation. This balance is what makes the location exceptional.
          </p>
          <div style={{ marginTop: 44 }}>
            <a {...actionProps(() => onNav('membership'))} className="btn btn-ghost-light">
              Request Membership Information
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
window.LocationPage = LocationPage;
