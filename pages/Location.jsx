// pages/Location.jsx
function LocationPage({ onNav }) {
  return (
    <div className="page-shell">
      {/* HERO */}
      <section className="page-hero page-hero-short" style={{ backgroundImage: `url('assets/hero-palms.jpg')` }}>
        <div className="photo-scrim" />
        <div className="page-hero-inner">
          <div className="eyebrow-rule" style={{ color: 'rgba(245,241,232,0.85)', marginBottom: 32 }}>
            The Location
          </div>
          <h1 className="display-xl" style={{ color: 'var(--color-bone)', maxWidth: 1100 }}>
            Ideally situated in Palm Beach.
          </h1>
          <p style={{
            font: '400 22px/1.5 var(--font-body)',
            color: 'rgba(245,241,232,0.84)',
            marginTop: 28, maxWidth: 700, marginBottom: 0,
          }}>
            Connected to the best of the island — positioned for ease.
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
                Dutchman's Pipe Club occupies a rare position — quietly removed, yet
                moments from the island, downtown, and private air travel.
              </p>
              <p className="body-text" style={{ marginTop: 28, color: 'var(--color-navy-70)' }}>
                A private setting, seamlessly connected to everything that defines the
                Palm Beach lifestyle — convenience and proximity, while preserving a
                sense of calm and discretion.
              </p>
            </Reveal>
          </div>
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

      {/* ISLAND & WORTH AVENUE — editorial */}
      <section className="section surface-white">
        <div className="container">
          <div className="editorial">
            <Reveal>
              <div className="photo-frame" style={{ aspectRatio: '4/5' }}>
                <img src="assets/hero-clubhouse.jpg" alt="" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="eyebrow-rule" style={{ marginBottom: 24 }}>The Island</div>
              <h2 className="display-md" style={{ color: 'var(--color-club-navy)' }}>
                Palm Beach Island & Worth Avenue.
              </h2>
              <p className="body-text" style={{ marginTop: 28, color: 'var(--color-navy-70)' }}>
                Just minutes from Palm Beach Island, the Club offers effortless
                proximity to the boutiques of Worth Avenue, oceanfront dining, private
                beach clubs, and the architectural charm that defines the island.
              </p>
              <p className="body-text" style={{ marginTop: 20, color: 'var(--color-navy-70)' }}>
                Members move easily between a morning round and an afternoon
                engagement, never feeling rushed or removed.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* AIR ACCESS — navy */}
      <section className="section surface-navy">
        <div className="container">
          <div className="editorial editorial-reverse">
            <Reveal>
              <div className="photo-frame" style={{ aspectRatio: '4/5' }}>
                <img src="assets/hero-sunset.jpg" alt="" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="eyebrow-rule" style={{ marginBottom: 24, color: 'rgba(245,241,232,0.78)' }}>
                Air Access
              </div>
              <h2 className="display-md" style={{ color: 'var(--color-bone)' }}>
                Runway to clubhouse — measured in minutes.
              </h2>
              <p className="body-text" style={{ marginTop: 28, color: 'rgba(245,241,232,0.78)' }}>
                Palm Beach International (PBI) is located nearby, providing direct,
                efficient commercial access for seasonal residents and traveling
                members.
              </p>
              <p className="body-text" style={{ marginTop: 20, color: 'rgba(245,241,232,0.78)' }}>
                For those arriving by private aviation, multiple executive airports are
                within close reach, ensuring discreet, streamlined arrivals.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* RARE BALANCE quote */}
      <section className="full-bleed-quote" style={{
        backgroundImage: `url('assets/hero-fairway.jpg')`,
        minHeight: '70vh',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(rgba(15,25,40,0.5), rgba(15,25,40,0.78))' }} />
        <Reveal style={{ position: 'relative', maxWidth: 1100, textAlign: 'center' }}>
          <div className="eyebrow-rule" style={{
            color: 'rgba(245,241,232,0.85)',
            justifyContent: 'center', marginBottom: 32,
          }}>
            A Rare Balance
          </div>
          <h2 className="display-lg" style={{ color: 'var(--color-bone)' }}>
            Protected and intentional —<br/>
            <em style={{ fontStyle: 'italic', color: 'var(--color-pennant-yellow)' }}>fully connected.</em>
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
