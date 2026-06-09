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
            A distinct racquet culture in Palm Beach.
          </h1>
          <p className="hero-sub" style={{
            color: 'rgba(245,241,232,0.84)',
            marginTop: 28, maxWidth: 700, marginBottom: 0,
          }}>
            Eight courts, woven through landscaped walkways. Active from first serve
            to sunset.
          </p>
        </div>
      </section>

      {/* STAT STRIP — court counts */}
      <Reveal as="section" className="surface-bone" style={{ padding: '0 var(--gutter)' }}>
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

      {/* THE COURTS — layered callout */}
      <section className="section surface-bone">
        <LayeredCallout
          eyebrow="The Courts"
          title="Open. Intentional. Alive with play."
          body="Four Har-Tru tennis courts, two pickleball courts, and two padel courts set the stage for a racquet program that feels active from first serve to sunset. Competitive when it needs to be, relaxed when it should be."
          lgImg="assets/padel-action.jpg"
          motif="grass"
        />
      </section>

      {/* PADEL — full bleed, parallax drift */}
      <section className="full-bleed-quote" style={{ minHeight: '75vh', overflow: 'hidden' }}>
        <Parallax speed={0.22} style={{ position: 'absolute', inset: '-11% 0', zIndex: 0 }}>
          <div style={{ backgroundImage: `url('assets/padel-skyline.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%' }} />
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
            Fast-paced, strategic, <em style={{ fontStyle: 'italic', color: 'var(--color-pennant-yellow)' }}>inherently social.</em>
          </h2>
          <p style={{
            font: '400 19px/1.6 var(--font-body)',
            color: 'rgba(245,241,232,0.82)',
            marginTop: 32, maxWidth: 700, marginInline: 'auto',
          }}>
            Padel has become a defining part of the Club's culture. Organized match
            play, curated programming, and private instruction create an environment
            where competitive players and recreational members find their rhythm.
          </p>
        </Reveal>
      </section>

      {/* PROGRAMMING — navy, flipped */}
      <section className="section surface-navy">
        <LayeredCallout
          flipped dark
          eyebrow="Programming & Member Experience"
          title="A racquet calendar built for every level, year-round."
          body="Whether joining a weekly clinic, scheduling a private lesson with our certified professionals, or stepping onto the court for Glow Padel after sunset, members transition effortlessly between skill development and social competition."
          lgImg="assets/tennis-serve.jpg"
          motif="pipe"
        />
      </section>

      {/* BEYOND THE BASELINE — layered callout */}
      <section className="section surface-white">
        <LayeredCallout
          eyebrow="Beyond the Baseline"
          title="The veranda extends the experience."
          body={[
            'All eight courts are thoughtfully intertwined by lush, landscaped walkways. Comfortable viewing areas are placed throughout, allowing members to gather courtside with ease.',
            'Following play, chilled towels are offered as a quiet luxury, and post-match smoothies extend the experience naturally into the pavilion. Time on court transitions into time together.',
          ]}
          lgImg="assets/tennis-veranda.jpg"
          motif="grass"
        />
      </section>

      {/* CTA — parallax drift */}
      <section className="full-bleed-quote" style={{ minHeight: '60vh', overflow: 'hidden' }}>
        <Parallax speed={0.18} style={{ position: 'absolute', inset: '-9% 0', zIndex: 0 }}>
          <div style={{ backgroundImage: `url('assets/hero-fairway.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%' }} />
        </Parallax>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(rgba(15,25,40,0.55), rgba(15,25,40,0.82))' }} />
        <Reveal style={{ position: 'relative', zIndex: 2, maxWidth: 820, textAlign: 'center' }}>
          <h2 className="display-lg" style={{ color: 'var(--color-bone)' }}>
            For those who play with intention.
          </h2>
          <p style={{
            font: '400 19px/1.55 var(--font-body)',
            color: 'rgba(245,241,232,0.82)',
            marginTop: 28, maxWidth: 620, marginInline: 'auto',
          }}>
            For those who value spirited competition, thoughtful programming, and an
            atmosphere that extends beyond the baseline, we invite you to explore
            racquet membership at Dutchman's Pipe.
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
window.RacquetsPage = RacquetsPage;
