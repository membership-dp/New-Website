// pages/Racquets.jsx
function RacquetsPage({ onNav }) {
  return (
    <div className="page-shell">
      {/* HERO — parallax drift */}
      <section className="page-hero page-hero-short" style={{ overflow: 'hidden' }}>
        <Parallax speed={0.18} style={{ position: 'absolute', inset: '-9% 0', zIndex: 0 }}>
          <div style={{ backgroundImage: `url('assets/hero-tennis.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%' }} />
        </Parallax>
        <div className="photo-scrim" style={{ zIndex: 1 }} />
        <div className="page-hero-inner hero-stagger" style={{ position: 'relative', zIndex: 2 }}>
          <div className="eyebrow-rule" style={{ color: 'rgba(245,241,232,0.85)', marginBottom: 32 }}>
            The Racquet Pavilion
          </div>
          <h1 className="display-xl" style={{ color: 'var(--color-bone)', maxWidth: 1100 }}>
            A premier destination for tennis, padel, and pickleball.
          </h1>
          <p className="hero-sub" style={{
            color: 'rgba(245,241,232,0.84)',
            marginTop: 28, maxWidth: 700, marginBottom: 0,
          }}>
            Professional instruction, competitive play, and year-round programming.
          </p>
        </div>
      </section>

      {/* STAT STRIP — court counts. Section stays opaque; Reveal wraps the
          content so the fixed satin sheet never shows through the fade-in */}
      <section className="surface-bone" style={{ padding: '0 var(--gutter)' }}>
        <Reveal>
          <div className="container">
            <div className="stat-row stat-row-3">
              {[
                { num: '4', label: 'Har-Tru Tennis Courts' },
                { num: '2', label: 'Padel Courts' },
                { num: '2', label: 'Pickleball Courts' },
              ].map((s) => (
                <div key={s.label} className="stat-cell">
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* PADEL — full bleed, parallax drift */}
      <section className="full-bleed-quote" style={{ minHeight: '75vh', overflow: 'hidden' }}>
        <Parallax speed={0.22} style={{ position: 'absolute', inset: '-11% 0', zIndex: 0 }}>
          <div style={{ backgroundImage: `url('assets/padel-serve.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%' }} />
        </Parallax>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(rgba(15,25,40,0.5), rgba(15,25,40,0.75))' }} />
        <Reveal style={{ position: 'relative', zIndex: 2, maxWidth: 1000, textAlign: 'center' }}>
          <div className="eyebrow-rule" style={{
            color: 'rgba(245,241,232,0.85)',
            justifyContent: 'center', marginBottom: 32,
          }}>
            Padel at Dutchman's Pipe
          </div>
          <h2 className="display-lg" style={{ color: 'var(--color-bone)' }}>
            Fast-paced, strategic, <em style={{ fontStyle: 'italic', color: 'var(--color-champagne-bright)' }}>inherently social.</em>
          </h2>
          <p className="body-text" style={{
            color: 'rgba(245,241,232,0.82)',
            marginTop: 32, maxWidth: 720, marginInline: 'auto',
          }}>
            One of the fastest-growing sports in the world has found a natural home at
            Dutchman's Pipe. Structured match play, private instruction, and member
            events create an environment where both experienced players and newcomers
            can enjoy the game.
          </p>
        </Reveal>
      </section>

      {/* THE COURTS — layered callout */}
      <section className="section surface-bone">
        <LayeredCallout
          eyebrow="The Courts"
          title="Open. Intentional. Alive with play."
          body="Four Har-Tru tennis courts, two pickleball courts, and two padel courts set the stage for a racquet program that feels active from first serve to sunset. Competitive when it needs to be, relaxed when it should be."
          lgImg="assets/pickleball.jpg"
          motif="grass"
        />
      </section>

      {/* PROGRAMMING — satin chapter, flipped */}
      <section className="section surface-satin">
        <Parallax speed={-0.25} className="satin-sheen" />
        <div className="satin-content">
        <LayeredCallout
          flipped dark
          eyebrow="Programming & Member Experience"
          title="A racquet calendar built for every level, year-round."
          body="Members enjoy a thoughtfully curated mix of clinics, private coaching, match play, tournaments, and signature events throughout the year."
          lgImg="assets/padel-rally.jpg"
          motif="pipe"
        />
        </div>
      </section>

      {/* BEYOND THE BASELINE — layered callout */}
      <section className="section surface-white">
        <LayeredCallout
          eyebrow="Beyond the Baseline"
          title="A gathering place as active as the courts themselves."
          body="Thoughtfully integrated throughout the property, the Club's courts are connected by landscaped pathways and comfortable gathering spaces. Whether participating in a clinic, enjoying a competitive match, or watching courtside, the racquet experience is designed to be as social as it is active."
          lgImg="assets/tennis-veranda.jpg"
          motif="grass"
        />
      </section>

      {/* COURT GALLERY — grid of smaller images (club 6/15: "smaller images
          like the mock instead of the three") */}
      <section className="section surface-bone">
        <div className="container">
          <PhotoGrid
            images={[
              'assets/padel-serve.jpg', 'assets/pickleball.jpg', 'assets/padel-rally.jpg',
              'assets/padel-action.jpg', 'assets/hero-tennis.jpg',
              'assets/tennis-veranda.jpg', 'assets/padel-skyline.jpg',
            ]}
          />
        </div>
      </section>
    </div>
  );
}
window.RacquetsPage = RacquetsPage;
