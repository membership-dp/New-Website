// pages/Golf.jsx
function GolfPage({ onNav }) {
  return (
    <div className="page-shell">
      {/* HERO — parallax drift */}
      <section className="page-hero page-hero-short" style={{ overflow: 'hidden' }}>
        <Parallax speed={0.18} style={{ position: 'absolute', inset: '-9% 0', zIndex: 0 }}>
          <div style={{ backgroundImage: `url('assets/hero-fairway.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%' }} />
        </Parallax>
        <div className="photo-scrim" style={{ zIndex: 1 }} />
        <div className="page-hero-inner hero-stagger" style={{ position: 'relative', zIndex: 2 }}>
          <div className="eyebrow-rule" style={{ color: 'rgba(245,241,232,0.85)', marginBottom: 32 }}>
            The Course
          </div>
          <h1 className="display-xl" style={{ color: 'var(--color-bone)', maxWidth: 1100 }}>
            Golf at Dutchman's Pipe.
          </h1>
          <p className="hero-sub" style={{
            color: 'rgba(245,241,232,0.84)',
            marginTop: 28, maxWidth: 720, marginBottom: 0,
          }}>
            An 18-hole Jack Nicklaus Signature course where nature sets the rhythm —
            not the tee sheet.
          </p>
        </div>
      </section>

      {/* STAT STRIP — section stays opaque; the Reveal wraps the content so the
          fixed satin sheet never shows through during the fade-in */}
      <section className="surface-bone" style={{ padding: '0 var(--gutter)' }}>
        <Reveal>
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
      </section>

      {/* FULL BLEED QUOTE — No tee times, parallax drift */}
      <section className="full-bleed-quote" style={{ minHeight: '70vh', overflow: 'hidden' }}>
        <Parallax speed={0.22} style={{ position: 'absolute', inset: '-11% 0', zIndex: 0 }}>
          <div style={{ backgroundImage: `url('assets/hero-sunset.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%' }} />
        </Parallax>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(rgba(15,25,40,0.45), rgba(15,25,40,0.7))' }} />
        <Reveal style={{ position: 'relative', zIndex: 2, maxWidth: 1100, textAlign: 'center' }}>
          <div className="eyebrow-rule" style={{
            color: 'rgba(245,241,232,0.85)',
            justifyContent: 'center', marginBottom: 32,
          }}>
            The Pace
          </div>
          <h2 className="display-lg" style={{ color: 'var(--color-bone)' }}>
            No tee times. <em style={{ fontStyle: 'italic', color: 'var(--color-champagne-bright)' }}>No compromise.</em>
          </h2>
          <p style={{
            font: '400 19px/1.6 var(--font-body)',
            color: 'rgba(245,241,232,0.82)',
            marginTop: 32, maxWidth: 680, marginInline: 'auto',
          }}>
            Golf without tee times is central to the Dutchman's Pipe experience,
            preserving access, enhancing pace of play, and allowing members to enjoy
            the course entirely on their own schedule.
          </p>
        </Reveal>
      </section>

      {/* PRACTICE & PERFORMANCE — layered callout */}
      <section className="section surface-white">
        <LayeredCallout
          eyebrow="Practice & Performance"
          title="A practice ground designed for meaningful improvement."
          body={[
            "Designed for purposeful practice and measurable improvement, the Club's training grounds include a 315-yard driving range, a two-acre short game complex, multiple practice greens, and a 12,000-square-foot putting surface.",
            'Eight varieties of premium range balls allow members to refine distance control, trajectory, and feel in a setting built to support every aspect of the game.',
          ]}
          lgImg="assets/hero-putting.jpg"
          motif="grass"
        />
      </section>

      {/* INSTRUCTION — satin chapter, flipped */}
      <section className="section surface-satin">
        <Parallax speed={-0.25} className="satin-sheen" />
        <div className="satin-content">
        <LayeredCallout
          flipped dark
          eyebrow="Elite Instruction"
          title="Led by Top 100 instructors. Designed for lasting improvement."
          body={[
            "Instruction at Dutchman's Pipe is led by nationally recognized professionals, including Golf Magazine Top 100 instructors. Through private coaching, playing lessons, clinics, and performance-based training, members benefit from a comprehensive approach that blends technical expertise, biomechanics, and on-course strategy.",
            'A strong commitment to player development extends across the membership, with dedicated programming for women, men, and juniors. From weekly Ladies Clinics to competitive member events, opportunities to learn, improve, and engage are woven into the Club experience year-round.',
          ]}
          lgImg="assets/instruction.jpg"
          motif="pipe"
        />
        </div>
      </section>

      {/* CLUB FITTING — layered callout */}
      <section className="section surface-bone">
        <LayeredCallout
          eyebrow="Club Fitting & Customization"
          title="Performance optimization. Not retail fitting."
          body="Our club fitting philosophy is entirely brand agnostic. Equipment decisions are driven by performance data, not manufacturer loyalty. Through advanced fitting technology and real-condition testing, members refine every detail of their equipment to match their swing characteristics and playing goals."
          lgImg="assets/clubfitting.jpg"
          motif="grass"
        />
      </section>

      {/* COURSE GALLERY — centered square opens, the wings glide in toward
          it, then the triptych sifts through the course */}
      <section className="surface-bone" style={{ padding: '0 0 var(--space-section)' }}>
        <RevealGallery
          images={[
            'assets/hero-fairway.jpg', 'assets/hero-green.jpg',
            'assets/course-skyline.jpg', 'assets/hero-sunset.jpg',
            'assets/hero-putting.jpg',
          ]}
        />
      </section>

      {/* MEMBERSHIP — the five categories in the original column layout
          (the club liked the columns for low-verbiage placements) */}
      <section className="section surface-white">
        <div className="container">
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 24, marginBottom: 64 }}>
              <div>
                <div className="eyebrow-rule" style={{ marginBottom: 24 }}>Membership</div>
                <h2 className="display-md" style={{ color: 'var(--color-club-navy)', maxWidth: 720 }}>
                  Five pathways to membership.
                </h2>
              </div>
              <p className="body-text" style={{ color: 'var(--color-navy-70)', maxWidth: 380 }}>
                Each category is designed to match the rhythm of how you wish to
                engage with the Club.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <TierColumns />
          </Reveal>
          <Reveal>
            <a {...actionProps(() => onNav('membership'))} className="arrow-link" style={{ marginTop: 48, color: 'var(--color-club-navy)' }}>
              Explore Membership
              <img src="assets/arrow-link.png" alt="" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* CTA — parallax drift */}
      <section className="full-bleed-quote" style={{ minHeight: '60vh', overflow: 'hidden' }}>
        <Parallax speed={0.18} style={{ position: 'absolute', inset: '-9% 0', zIndex: 0 }}>
          <div style={{ backgroundImage: `url('assets/golf-cta.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%' }} />
        </Parallax>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(rgba(15,25,40,0.55), rgba(15,25,40,0.82))' }} />
        <Reveal style={{ position: 'relative', zIndex: 2, maxWidth: 820, textAlign: 'center' }}>
          <h2 className="display-lg" style={{ color: 'var(--color-bone)' }}>
            An invitation to explore.
          </h2>
          <p style={{
            font: '400 19px/1.55 var(--font-body)',
            color: 'rgba(245,241,232,0.82)',
            marginTop: 28, maxWidth: 640, marginInline: 'auto',
          }}>
            For golfers who seek more time on the course and fewer constraints around
            it, Dutchman's Pipe offers an experience unlike any other in Palm Beach.
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
window.GolfPage = GolfPage;
