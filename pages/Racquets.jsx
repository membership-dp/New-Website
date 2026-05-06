// pages/Racquets.jsx
function RacquetsPage({ onNav }) {
  return (
    <div className="page-shell">
      {/* HERO */}
      <section className="page-hero page-hero-short" style={{ backgroundImage: `url('assets/hero-tennis.jpg')` }}>
        <div className="photo-scrim" />
        <div className="page-hero-inner">
          <div className="eyebrow-rule" style={{ color: 'rgba(245,241,232,0.85)', marginBottom: 32 }}>
            The Racquet Pavilion
          </div>
          <h1 className="display-xl" style={{ color: 'var(--color-bone)', maxWidth: 1100 }}>
            A distinct racquet culture in Palm Beach.
          </h1>
          <p style={{
            font: '400 22px/1.5 var(--font-body)',
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
          <div className="stat-row" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {[
              { num: '4', label: 'Har-Tru Tennis Courts' },
              { num: '2', label: 'Padel Courts' },
              { num: '2', label: 'Pickleball Courts' },
            ].map((s, i, arr) => (
              <div key={s.label} className="stat-cell" style={{ borderRight: i === arr.length - 1 ? 0 : '1px solid var(--color-mist)' }}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* THE COURTS — editorial */}
      <section className="section surface-bone">
        <div className="container">
          <div className="editorial">
            <Reveal>
              <div className="photo-frame" style={{ aspectRatio: '4/5' }}>
                <img src="assets/padel-action.jpg" alt="" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="eyebrow-rule" style={{ marginBottom: 24 }}>The Courts</div>
              <h2 className="display-md" style={{ color: 'var(--color-club-navy)' }}>
                Open. Intentional. Alive with play.
              </h2>
              <p className="body-text" style={{ marginTop: 28, color: 'var(--color-navy-70)' }}>
                Four Har-Tru tennis courts, two pickleball courts, and two padel courts
                set the stage for a racquet program that feels active from first serve
                to sunset — competitive when it needs to be, relaxed when it should be.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PADEL — full bleed */}
      <section className="full-bleed-quote" style={{
        backgroundImage: `url('assets/padel-skyline.jpg')`,
        minHeight: '75vh',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(rgba(15,25,40,0.5), rgba(15,25,40,0.75))' }} />
        <Reveal style={{ position: 'relative', maxWidth: 1000, textAlign: 'center' }}>
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

      {/* PROGRAMMING — navy */}
      <section className="section surface-navy">
        <div className="container">
          <div className="editorial editorial-reverse">
            <Reveal>
              <div className="photo-frame" style={{ aspectRatio: '4/5' }}>
                <img src="assets/tennis-serve.jpg" alt="" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="eyebrow-rule" style={{ marginBottom: 24, color: 'rgba(245,241,232,0.78)' }}>
                Programming & Member Experience
              </div>
              <h2 className="display-md" style={{ color: 'var(--color-bone)' }}>
                A racquet calendar built for every level, year-round.
              </h2>
              <p className="body-text" style={{ marginTop: 28, color: 'rgba(245,241,232,0.78)' }}>
                Whether joining a weekly clinic, scheduling a private lesson with our
                certified professionals, or stepping onto the court for Glow Padel after
                sunset, members transition effortlessly between skill development and
                social competition.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BEYOND THE BASELINE */}
      <section className="section surface-white">
        <div className="container">
          <div className="editorial">
            <Reveal>
              <div className="photo-frame" style={{ aspectRatio: '4/5' }}>
                <img src="assets/tennis-veranda.jpg" alt="" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="eyebrow-rule" style={{ marginBottom: 24 }}>Beyond the Baseline</div>
              <h2 className="display-md" style={{ color: 'var(--color-club-navy)' }}>
                The veranda extends the experience.
              </h2>
              <p className="body-text" style={{ marginTop: 28, color: 'var(--color-navy-70)' }}>
                All eight courts are thoughtfully intertwined by lush, landscaped
                walkways. Comfortable viewing areas are placed throughout, allowing
                members to gather courtside with ease.
              </p>
              <p className="body-text" style={{ marginTop: 20, color: 'var(--color-navy-70)' }}>
                Following play, chilled towels are offered as a quiet luxury, and
                post-match smoothies extend the experience naturally into the pavilion.
                Time on court transitions into time together.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="full-bleed-quote" style={{
        backgroundImage: `url('assets/hero-fairway.jpg')`,
        minHeight: '60vh',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(rgba(15,25,40,0.55), rgba(15,25,40,0.82))' }} />
        <Reveal style={{ position: 'relative', maxWidth: 820, textAlign: 'center' }}>
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
