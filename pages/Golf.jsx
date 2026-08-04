// pages/Golf.jsx
function GolfPage({ onNav }) {
  // Golf-page pathways use their own concise copy (club 6/23) — the Membership
  // page accordion uses the longer DP_TIERS copy. Social omitted here.
  const golfTiers = [
    { name: 'Full Golf', tag: 'Signature', body: 'Full Golf Membership includes unlimited access to championship golf, racquets, wellness, dining, and a distinguished instructional team led by nationally recognized professionals.', audience: 'For members who wish to engage fully in every aspect of club life.' },
    { name: 'Next Gen.', tag: 'Under 40', body: 'Designed for members under 40 seeking a long-term connection to Dutchman’s Pipe. Next Gen. Membership offers Full Golf privileges today and a clear path toward lifelong membership.', audience: 'Reserved for members under 40. Limited opportunities available.' },
    { name: 'Visiting', tag: 'Non-Resident', body: 'Created for those who spend only part of the year in Palm Beach. Visiting Membership offers access to golf, practice facilities, and club amenities tailored to a seasonal lifestyle.', audience: 'For seasonal residents and frequent visitors. Limited memberships available.' },
    { name: 'Corporate', tag: 'Executive', body: 'An elevated membership designed for organizations seeking a distinctive setting for business and leisure. Corporate Membership provides designated access for executives while creating opportunities to host, connect, and enjoy the Club together.', audience: 'For organizations.' },
  ];
  return (
    <div className="page-shell">
      {/* HERO — parallax drift */}
      <section className="page-hero page-hero-short" style={{ overflow: 'hidden' }}>
        <Parallax speed={0.18} style={{ position: 'absolute', inset: '-9% 0', zIndex: 0 }}>
          <div style={{ backgroundImage: `url('assets/golf-header.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%' }} />
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
            A Championship Jack Nicklaus Signature course where nature sets the rhythm —
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
          title="Practice with purpose."
          body="The practice grounds at Dutchman's Pipe are designed to mirror the challenges of the course. A two-acre short game area, championship-caliber greens, thoughtfully designed practice spaces, and eight varieties of premium range balls create an environment where preparation is as rewarding as play."
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
            "Instruction at Dutchman's Pipe is led by nationally recognized professionals, including Golf Magazine Top 100 instructors, who bring decades of experience to a highly personalized coaching environment.",
            'Private lessons, playing sessions, clinics, and performance training are all designed around the individual golfer.',
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
            'Our club fitting philosophy is entirely brand agnostic. Equipment decisions are driven by performance data, not manufacturer loyalty.',
            'Using advanced fitting technology and personalized analysis, every club is optimized to complement the individual golfer and elevate their performance.',
          ]}
          lgImg="assets/clubfitting-bags.jpg"
          motif="grass"
        />
      </section>

      {/* CADDIE PROGRAM — added under Club Fitting per Shannon review 7/16.
          Bottom padding dropped (club 7/31 "fix padding around the caddie
          section"): it and the Membership section below are both white, so the
          gap was reading as a doubled 240px void. */}
      <section className="section surface-white" style={{ paddingBottom: 0 }}>
        <LayeredCallout
          flipped
          eyebrow="Caddie Program"
          title="White-glove service. Every step of the way."
          body="At Dutchman's Pipe Club, every round is accompanied by a professional caddie who serves as an extension of the Club's commitment to exceptional hospitality. More than carrying a bag, our caddies anticipate every detail—from reading greens and recommending strategy to cleaning clubs, arranging refreshments, placing lunch orders, and ensuring every aspect of the day is effortlessly managed."
          lgImg="assets/caddie-program.jpg"
          motif="pipe"
        />
      </section>

      {/* MEMBERSHIP — pathway columns (club 6/23: moved above the gallery) */}
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
            <TierColumns tiers={golfTiers} />
          </Reveal>
          <Reveal>
            <a {...actionProps(() => onNav('membership'))} className="arrow-link" style={{ marginTop: 48, color: 'var(--color-club-navy)' }}>
              Explore Membership
              <img src="assets/arrow-link.png" alt="" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* COURSE GALLERY — moved below membership (club 6/23). Club's new course
          aerial added as the lead image (Madison 6/30). */}
      <section className="section surface-bone">
        <div className="container">
          <PhotoGrid
            images={[
              'assets/golf-island.jpg', 'assets/golf-hero.jpg', 'assets/golf-aerial.jpg',
              'assets/golf-green.jpg', 'assets/golf-grasses.jpg', 'assets/course-skyline.jpg',
              'assets/hero-fairway.jpg', 'assets/hero-green.jpg', 'assets/hero-sunset.jpg',
              'assets/hero-putting.jpg',
            ]}
          />
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
