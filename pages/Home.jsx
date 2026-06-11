// pages/Home.jsx
// LayeredCallout / InstagramStrip live in components/Blocks.jsx (shared).

function HomePage({ onNav }) {
  return (
    <div className="page-shell">
      {/* HERO — auto-playing cinematic dolly-in through the native grasses
          onto the green; the copy staggers in once the camera settles. */}
      <ZoomHero
        duration={4000}
        frames={[
          'assets/zoom/frame_01.jpg', 'assets/zoom/frame_02.jpg',
          'assets/zoom/frame_03.jpg', 'assets/zoom/frame_04.jpg',
          'assets/zoom/frame_05.jpg', 'assets/zoom/frame_06.jpg',
          'assets/zoom/frame_07.jpg', 'assets/zoom/frame_08.jpg',
        ]}
      >
        <div className="page-hero-inner">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 64, flexWrap: 'wrap' }}>
            <div className="hero-stagger" style={{ maxWidth: 920 }}>
              <div className="eyebrow-rule" style={{ color: 'rgba(245,241,232,0.85)', marginBottom: 32 }}>
                West Palm Beach &nbsp;·&nbsp; Est. 2024
              </div>
              <h1 className="display-xl" style={{ color: 'var(--color-bone)' }}>
                Freedom to play, whenever you please.
              </h1>
              <p className="hero-sub hero-sub--home" style={{
                color: 'rgba(245,241,232,0.82)',
                marginTop: 32, maxWidth: 580, marginBottom: 0,
              }}>
                A Jack Nicklaus Signature course played without tee times, a racquet
                pavilion alive with tennis, padel and pickleball, and a quiet rhythm
                of belonging on the edge of Palm Beach.
              </p>
            </div>
            <div className="hero-stagger" style={{ display: 'flex', flexDirection: 'column', gap: 16, paddingBottom: 8 }}>
              <a onClick={() => onNav('membership')} className="btn btn-ghost-light">
                Request Membership
              </a>
              <a onClick={() => onNav('golf')} className="arrow-link arrow-link-bob" style={{ color: 'rgba(245,241,232,0.8)', borderColor: 'rgba(245,241,232,0.4)' }}>
                Discover the Club
                <img src="assets/arrow-link.png" style={{ filter: 'brightness(0) invert(1)' }} alt="" />
              </a>
            </div>
          </div>
          <div className="scroll-indicator" style={{
            position: 'absolute', bottom: 24, right: 'var(--gutter)',
            font: '500 10px/1 var(--font-body)',
            letterSpacing: '0.36em', textTransform: 'uppercase',
            color: 'rgba(245,241,232,0.55)',
            writingMode: 'vertical-rl', transform: 'rotate(180deg)',
          }}>
            Scroll
          </div>
        </div>
      </ZoomHero>

      {/* TAGLINE — substantial section, not a strip */}
      <section className="section surface-bone" style={{ borderBottom: '1px solid var(--color-mist)' }}>
        <div className="container">
          <Reveal>
            <div className="eyebrow-rule" style={{ marginBottom: 40 }}>An Invitation</div>
          </Reveal>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr',
            gap: 80,
            alignItems: 'end',
          }} className="tagline-grid">
            <Reveal>
              <div className="display-lg" style={{
                color: 'var(--color-club-navy)',
                margin: 0,
              }}>
                Play. Train. <em style={{ fontStyle: 'italic', color: 'var(--color-champagne)' }}>Belong.</em>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <p style={{
                font: '400 19px/1.6 var(--font-body)',
                color: 'var(--color-navy-70)',
                margin: 0,
              }}>
                A private retreat where excellence is the standard and leisure is unhurried.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* THE PILLARS — 3-up amenity grid */}
      <section className="section surface-white">
        <div className="container">
          <Reveal>
            <div className="folio">No. I — The Club</div>
            <h2 className="display-lg" style={{ color: 'var(--color-club-navy)', maxWidth: 920 }}>
              A property shaped by three pursuits.
            </h2>
          </Reveal>

          <div className="three-up" style={{ marginTop: 80 }}>
            {[
              { img: 'assets/hero-green.jpg', eyebrow: 'Golf', title: 'Jack Nicklaus Signature.', body: '7,300 yards of unhurried play. No tee times. A 12,000 sq ft putting green and a two-acre short game complex.', target: 'golf' },
              { img: 'assets/hero-tennis.jpg', eyebrow: 'Racquets', title: 'Tennis. Padel. Pickleball.', body: 'Eight courts woven through landscaped walkways. A racquet culture that lives from first serve to glow-padel sunset.', target: 'racquets' },
              { img: 'assets/hero-villa.jpg', eyebrow: 'Belonging', title: 'A Palm Beach lifestyle.', body: 'Wellness, dining, and the quiet rhythm of a private community, minutes from Worth Avenue and Palm Beach International.', target: 'location' },
            ].map((it, i) => (
              <Reveal key={it.eyebrow} delay={i * 120}>
                <a onClick={() => onNav(it.target)} style={{
                  display: 'flex', flexDirection: 'column', cursor: 'pointer',
                  textDecoration: 'none', color: 'inherit',
                }}>
                  <div className="photo-frame" style={{ aspectRatio: '4/5' }}>
                    <Parallax speed={0.1} className="img-drift"><img src={it.img} alt="" /></Parallax>
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

      {/* SIGNATURE LINE — full-bleed editorial quote, drifting background */}
      <section className="full-bleed-quote" style={{ overflow: 'hidden' }}>
        <Parallax speed={0.22} style={{ position: 'absolute', inset: '-11% 0', zIndex: 0 }}>
          <img src="assets/hero-fairway.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Parallax>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(rgba(15,25,40,0.45), rgba(15,25,40,0.7))' }} />
        <Parallax speed={-0.1} style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <Reveal style={{ maxWidth: 1100, marginInline: 'auto', textAlign: 'center' }}>
            <div className="eyebrow-rule" style={{
              color: 'rgba(245,241,232,0.85)',
              justifyContent: 'center', marginBottom: 32,
            }}>
              The Atmosphere
            </div>
            <h2 className="display-lg" style={{ color: 'var(--color-bone)' }}>
              Here, nature sets the rhythm —<br/>
              <em style={{ fontStyle: 'italic', color: 'var(--color-champagne-bright)' }}>not the tee sheet.</em>
            </h2>
          </Reveal>
        </Parallax>
      </section>

      {/* CHAPTER II — The Course */}
      <section className="section surface-bone">
        <div className="container">
          <Reveal><div className="folio">No. II — The Course</div></Reveal>
        </div>
        <LayeredCallout
          title="A test worthy of its design — beautifully playable."
          body="Stretching to 7,300 yards from the championship tees, the Jack Nicklaus Signature course moves through subtle elevation, sculpted bunkering, and natural water features. Every hole reflects thoughtful, refined architecture, with a 75.8 course rating in service of pure golf."
          lgImg="assets/course-skyline.jpg"
          smImg="assets/hero-green.jpg"
          ctaLabel="Explore the Course"
          onCta={() => onNav('golf')}
        />
      </section>

      {/* CHAPTER III — Racquets (satin chapter, flipped) */}
      <section className="section surface-satin">
        <Parallax speed={-0.25} className="satin-sheen" />
        <div className="satin-content">
          <div className="container">
            <Reveal><div className="folio">No. III — The Racquet Pavilion</div></Reveal>
          </div>
          <LayeredCallout
            flipped dark
            title="A racquet culture that lives beyond the baseline."
            body="Four Har-Tru tennis courts, two pickleball courts, and two padel courts, set among landscaped walkways and shaded viewing areas. Chilled towels at changeover, post-match smoothies on the veranda. A racquet calendar that moves from morning clinic to Glow Padel after sunset."
            lgImg="assets/tennis-serve.jpg"
            ctaLabel="Explore the Racquet Club"
            onCta={() => onNav('racquets')}
          />
        </div>
      </section>

      {/* CHAPTER IV — Location */}
      <section className="section surface-white">
        <div className="container">
          <Reveal><div className="folio">No. IV — The Location</div></Reveal>
        </div>
        <LayeredCallout
          title={<>Quietly removed — <span style={{ whiteSpace: 'nowrap' }}>moments from everywhere.</span></>}
          body="Minutes from the boutiques of Worth Avenue, the waterfront promenades of downtown West Palm Beach, and Palm Beach International, with discreet access to private aviation. A rare balance of accessibility and separation."
          lgImg="assets/hero-palms.jpg"
          ctaLabel="The Setting"
          onCta={() => onNav('location')}
        />
      </section>

      {/* INSTAGRAM — homepage widget (placeholder grid; SnapWidget in prod) */}
      <section className="section-tight surface-bone" style={{ borderTop: '1px solid var(--color-mist)' }}>
        <div className="container">
          <Reveal>
            <InstagramStrip
              handle="@dutchmanspipeclub"
              images={[
                'assets/hero-green.jpg', 'assets/tennis-serve.jpg', 'assets/hero-palms.jpg',
                'assets/padel-action.jpg', 'assets/course-skyline.jpg', 'assets/hero-villa.jpg',
              ]}
            />
          </Reveal>
        </div>
      </section>

      {/* CHAPTER V — MEMBERSHIP CTA: the satin proscenium (jewel-box close) */}
      <section className="section surface-satin" style={{ paddingBottom: 72 }}>
        <Parallax speed={-0.25} className="satin-sheen" />
        <Reveal style={{ position: 'relative', zIndex: 2, maxWidth: 880, marginInline: 'auto', textAlign: 'center' }}>
          <div className="eyebrow-rule" style={{
            color: 'var(--color-champagne-bright)',
            justifyContent: 'center', marginBottom: 32,
          }}>
            No. V — Membership
          </div>
          <h2 className="display-lg" style={{ color: 'var(--color-bone)' }}>
            A private world, by invitation.
          </h2>
          <span className="champagne-rule" />
          <p style={{
            font: '400 19px/1.55 var(--font-body)',
            color: 'rgba(245,241,232,0.8)',
            marginTop: 32, maxWidth: 620, marginInline: 'auto',
          }}>
            Membership at Dutchman's Pipe is by invitation. To begin a conversation,
            please introduce yourself.
          </p>
          <div style={{ marginTop: 48 }}>
            <a onClick={() => onNav('membership')} className="btn btn-gold">
              Request Membership Information
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
window.HomePage = HomePage;
