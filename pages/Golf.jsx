// pages/Golf.jsx
function GolfPage({ onNav }) {
  return (
    <div className="page-shell">
      {/* HERO */}
      <section className="page-hero page-hero-short" style={{ backgroundImage: `url('assets/hero-fairway.jpg')` }}>
        <div className="photo-scrim" />
        <div className="page-hero-inner">
          <div className="eyebrow-rule" style={{ color: 'rgba(245,241,232,0.85)', marginBottom: 32 }}>
            The Course
          </div>
          <h1 className="display-xl" style={{ color: 'var(--color-bone)', maxWidth: 1100 }}>
            Golf at Dutchman's Pipe.
          </h1>
          <p style={{
            font: '400 22px/1.5 var(--font-body)',
            color: 'rgba(245,241,232,0.84)',
            marginTop: 28, maxWidth: 720, marginBottom: 0,
          }}>
            An 18-hole Jack Nicklaus Signature course where nature sets the rhythm —
            not the tee sheet.
          </p>
        </div>
      </section>

      {/* STAT STRIP */}
      <Reveal as="section" className="surface-bone" style={{ padding: '0 var(--gutter)' }}>
        <div className="container">
          <div className="stat-row">
            {[
              { num: '7,300', label: 'Yards from the tips' },
              { num: '75.8', label: 'Course rating' },
              { num: '315', label: 'Yard driving range' },
              { num: '12,000', label: 'Sq ft putting green' },
            ].map((s) => (
              <div key={s.label} className="stat-cell">
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* INTRO LEDE */}
      <section className="section surface-bone">
        <div className="container">
          <div className="lede-page-grid">
            <Reveal>
              <div className="eyebrow-rule">A Nicklaus Signature</div>
            </Reveal>
            <Reveal delay={100}>
              <p style={{
                font: '400 26px/1.5 var(--font-display)',
                color: 'var(--color-club-navy)',
                margin: 0, maxWidth: '40ch',
                letterSpacing: '-0.005em',
                fontStyle: 'italic',
              }}>
                Stretching to 7,300 yards from the championship tees, the course moves
                through subtle elevation, sculpted bunkering, and natural water features
                that reward precision while remaining beautifully playable.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FULL BLEED QUOTE — No tee times */}
      <section className="full-bleed-quote" style={{ backgroundImage: `url('assets/hero-sunset.jpg')`, minHeight: '70vh' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(rgba(15,25,40,0.45), rgba(15,25,40,0.7))' }} />
        <Reveal style={{ position: 'relative', maxWidth: 1100, textAlign: 'center' }}>
          <div className="eyebrow-rule" style={{
            color: 'rgba(245,241,232,0.85)',
            justifyContent: 'center', marginBottom: 32,
          }}>
            The Pace
          </div>
          <h2 className="display-lg" style={{ color: 'var(--color-bone)' }}>
            No tee times. <em style={{ fontStyle: 'italic', color: 'var(--color-pennant-yellow)' }}>No compromise.</em>
          </h2>
          <p style={{
            font: '400 19px/1.6 var(--font-body)',
            color: 'rgba(245,241,232,0.82)',
            marginTop: 32, maxWidth: 660, marginInline: 'auto',
          }}>
            Our no tee time model is foundational. It preserves pace, protects member
            access, and eliminates the constraints typical of traditional clubs. Your
            day flows from arrival to final putt without scheduling pressure.
          </p>
        </Reveal>
      </section>

      {/* PRACTICE & PERFORMANCE — editorial */}
      <section className="section surface-white">
        <div className="container">
          <div className="editorial">
            <Reveal>
              <div className="photo-frame" style={{ aspectRatio: '4/5' }}>
                <img src="assets/hero-putting.jpg" alt="" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="eyebrow-rule" style={{ marginBottom: 24 }}>Practice & Performance</div>
              <h2 className="display-md" style={{ color: 'var(--color-club-navy)' }}>
                A practice ground designed for meaningful improvement.
              </h2>
              <p className="body-text" style={{ marginTop: 28, color: 'var(--color-navy-70)' }}>
                A 315-yard driving range sets the stage for focused preparation,
                complemented by a two-acre short game area with multiple greens and
                bunkers, and a 12,000 square-foot undulating putting green.
              </p>
              <p className="body-text" style={{ marginTop: 20, color: 'var(--color-navy-70)' }}>
                Eight types of premium, brand-agnostic range balls allow distance
                control, trajectory, and feel to be refined with intention — ensuring
                preparation translates seamlessly to the course.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* INSTRUCTION — navy editorial */}
      <section className="section surface-navy">
        <div className="container">
          <div className="editorial editorial-reverse">
            <Reveal>
              <div className="photo-frame" style={{ aspectRatio: '4/5' }}>
                <img src="assets/instruction.jpg" alt="" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="eyebrow-rule" style={{ marginBottom: 24, color: 'rgba(245,241,232,0.78)' }}>
                Elite Instruction
              </div>
              <h2 className="display-md" style={{ color: 'var(--color-bone)' }}>
                Led by Top 100 instructors. Rooted in fundamentals.
              </h2>
              <p className="body-text" style={{ marginTop: 28, color: 'rgba(245,241,232,0.78)' }}>
                Instruction at Dutchman's Pipe is led by nationally recognized
                professionals, including Golf Magazine Top 100 instructors. Lessons are
                individualized and rooted in fundamentals, biomechanics, and on-course
                application.
              </p>
              <p className="body-text" style={{ marginTop: 20, color: 'rgba(245,241,232,0.78)' }}>
                The Club has made a meaningful commitment to women's golf programming.
                Weekly Ladies Clinics create structured development and camaraderie,
                while signature events such as the Ladies Member-Member tournament
                elevate the competitive and social experience alike.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CLUB FITTING — editorial */}
      <section className="section surface-bone">
        <div className="container">
          <div className="editorial">
            <Reveal>
              <div className="photo-frame" style={{ aspectRatio: '4/5' }}>
                <img src="assets/clubfitting.jpg" alt="" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="eyebrow-rule" style={{ marginBottom: 24 }}>Club Fitting & Customization</div>
              <h2 className="display-md" style={{ color: 'var(--color-club-navy)' }}>
                Performance optimization. Not retail fitting.
              </h2>
              <p className="body-text" style={{ marginTop: 28, color: 'var(--color-navy-70)' }}>
                Our club fitting philosophy is entirely brand agnostic. Equipment
                decisions are driven by performance data — not manufacturer loyalty.
                Through advanced fitting technology and real-condition testing, members
                refine every detail of their equipment to match their swing
                characteristics and playing goals.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="full-bleed-quote" style={{
        backgroundImage: `url('assets/hero-clubhouse.jpg')`,
        minHeight: '60vh',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(rgba(15,25,40,0.55), rgba(15,25,40,0.82))' }} />
        <Reveal style={{ position: 'relative', maxWidth: 820, textAlign: 'center' }}>
          <h2 className="display-lg" style={{ color: 'var(--color-bone)' }}>
            An invitation to explore.
          </h2>
          <p style={{
            font: '400 19px/1.55 var(--font-body)',
            color: 'rgba(245,241,232,0.82)',
            marginTop: 28, maxWidth: 620, marginInline: 'auto',
          }}>
            If you value uninterrupted access, exceptional course conditions, and a
            private club culture built for dedicated players, we invite you to explore
            membership at Dutchman's Pipe.
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
window.GolfPage = GolfPage;
