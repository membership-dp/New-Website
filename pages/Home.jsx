// pages/Home.jsx
function HomePage({ onNav }) {
  return (
    <div className="page-shell">
      {/* HERO — full-bleed cinematic, big serif, anchored bottom-left */}
      <section className="page-hero" style={{ backgroundImage: `url('assets/hero-sunset.jpg')` }}>
        <div className="photo-scrim" />
        <div className="page-hero-inner">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 64, flexWrap: 'wrap' }}>
            <div style={{ maxWidth: 920 }}>
              <div className="eyebrow-rule" style={{ color: 'rgba(245,241,232,0.85)', marginBottom: 32 }}>
                West Palm Beach &nbsp;·&nbsp; Est. 2024
              </div>
              <h1 className="display-xl" style={{ color: 'var(--color-bone)' }}>
                Freedom to play, whenever you please.
              </h1>
              <p style={{
                font: '400 20px/1.55 var(--font-body)',
                color: 'rgba(245,241,232,0.82)',
                marginTop: 32, maxWidth: 580, marginBottom: 0,
              }}>
                A Jack Nicklaus Signature course played without tee times, a racquet
                pavilion alive with tennis, padel and pickleball — and a quiet rhythm
                of belonging on the edge of Palm Beach.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, paddingBottom: 8 }}>
              <a onClick={() => onNav('membership')} className="btn btn-ghost-light">
                Request Membership
              </a>
              <a onClick={() => onNav('golf')} className="arrow-link" style={{ color: 'rgba(245,241,232,0.8)', borderColor: 'rgba(245,241,232,0.4)' }}>
                Discover the Club
                <img src="assets/arrow-link.png" style={{ filter: 'brightness(0) invert(1)' }} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div style={{
          position: 'absolute', bottom: 24, right: 'var(--gutter)',
          font: '500 10px/1 var(--font-body)',
          letterSpacing: '0.36em', textTransform: 'uppercase',
          color: 'rgba(245,241,232,0.55)',
          writingMode: 'vertical-rl', transform: 'rotate(180deg)',
        }}>
          Scroll
        </div>
      </section>

      {/* TAGLINE STRIP */}
      <Reveal as="section" className="section-tight surface-bone" style={{ borderBottom: '1px solid var(--color-mist)' }}>
        <div className="container" style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          gap: 48, flexWrap: 'wrap',
        }}>
          <div className="display-md" style={{ color: 'var(--color-club-navy)', maxWidth: 720 }}>
            Play. Train. Belong.
          </div>
          <div className="body-text" style={{ maxWidth: 460, color: 'var(--color-navy-70)' }}>
            An oasis for the discerning few, where excellence is the standard and
            leisure is unhurried.
          </div>
        </div>
      </Reveal>

      {/* THE PILLARS — 3-up amenity grid */}
      <section className="section surface-white">
        <div className="container">
          <Reveal>
            <div className="eyebrow-rule" style={{ marginBottom: 24 }}>The Club</div>
            <h2 className="display-lg" style={{ color: 'var(--color-club-navy)', maxWidth: 920 }}>
              A property shaped by three pursuits.
            </h2>
          </Reveal>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 40, marginTop: 80,
          }}>
            {[
              { img: 'assets/hero-green.jpg', eyebrow: 'Golf', title: 'Jack Nicklaus Signature.', body: '7,300 yards of unhurried play. No tee times. A 12,000 sq ft putting green and a two-acre short game complex.', target: 'golf' },
              { img: 'assets/hero-tennis.jpg', eyebrow: 'Racquets', title: 'Tennis. Padel. Pickleball.', body: 'Eight courts woven through landscaped walkways — a racquet culture that lives from first serve to glow-padel sunset.', target: 'racquets' },
              { img: 'assets/hero-villa.jpg', eyebrow: 'Belonging', title: 'A Palm Beach lifestyle.', body: 'Wellness, dining, and the quiet rhythm of a private community — minutes from Worth Avenue and Palm Beach International.', target: 'location' },
            ].map((it, i) => (
              <Reveal key={it.eyebrow} delay={i * 120}>
                <a onClick={() => onNav(it.target)} style={{
                  display: 'flex', flexDirection: 'column', cursor: 'pointer',
                  textDecoration: 'none', color: 'inherit',
                }}>
                  <div className="photo-frame" style={{ aspectRatio: '4/5' }}>
                    <img src={it.img} alt="" />
                  </div>
                  <div className="eyebrow-rule" style={{ marginTop: 28 }}>{it.eyebrow}</div>
                  <h3 className="display-sm" style={{ color: 'var(--color-club-navy)', marginTop: 12 }}>
                    {it.title}
                  </h3>
                  <p className="body-text" style={{ color: 'var(--color-navy-70)', marginTop: 14 }}>
                    {it.body}
                  </p>
                  <span className="arrow-link" style={{ marginTop: 24, alignSelf: 'flex-start', color: 'var(--color-club-navy)' }}>
                    Explore
                    <img src="assets/arrow-link.png" alt="" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SIGNATURE LINE — full-bleed editorial quote */}
      <section className="full-bleed-quote" style={{ backgroundImage: `url('assets/hero-fairway.jpg')` }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(rgba(15,25,40,0.45), rgba(15,25,40,0.7))' }} />
        <Reveal style={{ position: 'relative', maxWidth: 1100, textAlign: 'center' }}>
          <div className="eyebrow-rule" style={{
            color: 'rgba(245,241,232,0.85)',
            justifyContent: 'center', marginBottom: 32,
          }}>
            The Atmosphere
          </div>
          <h2 className="display-lg" style={{ color: 'var(--color-bone)' }}>
            Here, nature sets the rhythm —<br/>
            <em style={{ fontStyle: 'italic', color: 'var(--color-pennant-yellow)' }}>not the tee sheet.</em>
          </h2>
        </Reveal>
      </section>

      {/* EDITORIAL — The Course (image left, text right) */}
      <section className="section surface-bone">
        <div className="container">
          <div className="editorial">
            <Reveal>
              <div className="photo-frame" style={{ aspectRatio: '4/5' }}>
                <img src="assets/course-skyline.jpg" alt="" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="eyebrow-rule" style={{ marginBottom: 24 }}>The Course</div>
              <h2 className="display-md" style={{ color: 'var(--color-club-navy)' }}>
                A test worthy of its design — beautifully playable.
              </h2>
              <p className="body-text" style={{ marginTop: 28, color: 'var(--color-navy-70)' }}>
                Stretching to 7,300 yards from the championship tees, the Jack Nicklaus
                Signature course moves through subtle elevation, sculpted bunkering, and
                natural water features. Every hole reflects thoughtful, refined architecture
                — a 75.8 course rating in service of pure golf.
              </p>
              <a onClick={() => onNav('golf')} className="arrow-link" style={{ marginTop: 36, color: 'var(--color-club-navy)' }}>
                Explore the Course
                <img src="assets/arrow-link.png" alt="" />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* EDITORIAL — Racquets (image right, navy surface) */}
      <section className="section surface-navy">
        <div className="container">
          <div className="editorial editorial-reverse">
            <Reveal>
              <div className="photo-frame" style={{ aspectRatio: '4/5' }}>
                <img src="assets/tennis-serve.jpg" alt="" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="eyebrow-rule" style={{ marginBottom: 24, color: 'rgba(245,241,232,0.78)' }}>The Racquet Pavilion</div>
              <h2 className="display-md" style={{ color: 'var(--color-bone)' }}>
                A racquet culture that lives beyond the baseline.
              </h2>
              <p className="body-text" style={{ marginTop: 28, color: 'rgba(245,241,232,0.78)' }}>
                Four Har-Tru tennis courts, two pickleball courts, and two padel courts —
                set among landscaped walkways and shaded viewing areas. Chilled towels at
                changeover, post-match smoothies on the veranda. A racquet calendar that
                moves from morning clinic to Glow Padel after sunset.
              </p>
              <a onClick={() => onNav('racquets')} className="arrow-link" style={{
                marginTop: 36, color: 'var(--color-bone)',
                borderColor: 'var(--color-pennant-yellow)',
              }}>
                Explore the Racquet Club
                <img src="assets/arrow-link.png" alt="" style={{ filter: 'brightness(0) invert(1)' }} />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* LOCATION TEASE */}
      <section className="section surface-white">
        <div className="container">
          <div className="editorial">
            <Reveal>
              <div className="photo-frame" style={{ aspectRatio: '4/5' }}>
                <img src="assets/hero-palms.jpg" alt="" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="eyebrow-rule" style={{ marginBottom: 24 }}>The Location</div>
              <h2 className="display-md" style={{ color: 'var(--color-club-navy)' }}>
                Quietly removed — moments from everywhere.
              </h2>
              <p className="body-text" style={{ marginTop: 28, color: 'var(--color-navy-70)' }}>
                Minutes from the boutiques of Worth Avenue, the waterfront promenades of
                downtown West Palm Beach, and Palm Beach International — with discreet
                access to private aviation. A rare balance of accessibility and separation.
              </p>
              <a onClick={() => onNav('location')} className="arrow-link" style={{ marginTop: 36, color: 'var(--color-club-navy)' }}>
                The Setting
                <img src="assets/arrow-link.png" alt="" />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP CTA — closing */}
      <section className="full-bleed-quote" style={{
        backgroundImage: `url('assets/hero-clubhouse.jpg')`,
        minHeight: '70vh',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(rgba(15,25,40,0.55), rgba(15,25,40,0.85))' }} />
        <Reveal style={{ position: 'relative', maxWidth: 880, textAlign: 'center' }}>
          <div className="eyebrow-rule" style={{
            color: 'rgba(245,241,232,0.85)',
            justifyContent: 'center', marginBottom: 32,
          }}>
            Membership
          </div>
          <h2 className="display-lg" style={{ color: 'var(--color-bone)' }}>
            An oasis for the discerning few.
          </h2>
          <p style={{
            font: '400 19px/1.55 var(--font-body)',
            color: 'rgba(245,241,232,0.8)',
            marginTop: 28, maxWidth: 620, marginInline: 'auto',
          }}>
            Membership at Dutchman's Pipe is by invitation. To begin a conversation,
            please introduce yourself.
          </p>
          <div style={{ marginTop: 48 }}>
            <a onClick={() => onNav('membership')} className="btn btn-ghost-light">
              Request Membership Information
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
window.HomePage = HomePage;
