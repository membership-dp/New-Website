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
          <p className="body-text" style={{
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
          eyebrow="Practice with Purpose"
          title="Practice with purpose."
          body={[
            "The practice grounds at Dutchman's Pipe are designed to mirror the challenges of the course. A two-acre short game area, championship-caliber greens, strategically placed bunkers, and a dedicated wedge matrix create an environment where players build skills that translate directly to scoring.",
            'Improvement is not treated as a separate activity. Practice, coaching, and performance are connected as part of everyday club life.',
          ]}
          lgImg="assets/practice-cart.jpg"
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
          title="The pursuit of better golf."
          body={[
            "Instruction at Dutchman's Pipe is led by nationally recognized professionals, including Golf Magazine Top 100 instructors. Private coaching, playing lessons, clinics, and performance training combine technical expertise, biomechanics, and on-course strategy to create a complete approach to player development.",
            'Programming for women, men, and juniors ensures opportunities to learn, improve, and compete throughout the year.',
          ]}
          lgImg="assets/instruction-coach.jpg"
          motif="pipe"
        />
        </div>
      </section>

      {/* CLUB FITTING — layered callout */}
      <section className="section surface-bone">
        <LayeredCallout
          eyebrow="Club Fitting & Customization"
          title="Performance optimization. Not retail fitting."
          body={[
            'Our club fitting philosophy is entirely brand agnostic. Equipment decisions are driven by performance data, not manufacturer loyalty. Eight varieties of premium range balls provide the ideal environment to refine distance control, trajectory, and feel.',
            'Through advanced fitting technology and real-condition testing, every club is optimized to match the individual golfer and the way they play.',
          ]}
          lgImg="assets/clubfitting-bags.jpg"
          motif="grass"
        />
      </section>

      {/* COURSE GALLERY — one image spanning the section, assembled from three
          animated pieces (center opens, wings glide in), then sifts the set */}
      <section className="surface-bone" style={{ padding: '0 0 var(--space-section)' }}>
        <RevealGallery
          continuous
          images={[
            'assets/golf-hero.jpg', 'assets/golf-aerial.jpg',
            'assets/golf-green.jpg', 'assets/golf-grasses.jpg',
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
                  Four pathways to membership.
                </h2>
              </div>
            </div>
          </Reveal>
          <Reveal>
            {/* Social omitted here (Kyle 6/15) — golfers' pathways only */}
            <TierColumns tiers={DP_TIERS.filter((t) => t.name !== 'Social')} />
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
          <p className="body-text" style={{
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
