// pages/Instruction.jsx — Instruction (club 8/4). Reached from the "Learn More"
// link in the Golf page's Elite Instruction chapter and from the footer nav —
// deliberately NOT in the top nav. Copy is Madison's, verbatim.
function InstructionPage({ onNav }) {
  const coaches = [
    {
      img: 'assets/coach-kirk.jpg',
      name: 'Kevin Kirk',
      role: 'Director of Performance',
      body: "Recognized as one of the country's premier instructors, Kevin Kirk is a GOLF Magazine Top 100 Teacher and one of Golf Digest's 50 Best Teachers in America. His performance-based approach combines biomechanics, technology, and personalized coaching to help golfers of every level reach their full potential.",
    },
    {
      img: 'assets/coach-stenzel.jpg',
      name: 'Kellie Stenzel',
      role: 'Director of Instruction',
      body: 'A Golf Digest Top 50 Teacher, Kellie Stenzel is widely respected for her personalized teaching philosophy and ability to help golfers of all skill levels build confidence and consistency. Her experience spans recreational players, accomplished amateurs, and elite competitors.',
    },
    {
      img: 'assets/coach-como.jpg',
      name: 'Chris Como',
      role: 'Golf Ambassador',
      body: "One of the most respected coaches in the game, Chris Como is recognized as one of Golf Digest's 50 Best Teachers in America and has guided major champions and some of the world's top players throughout his career. As Golf Ambassador, he brings his innovative approach to performance and player development to Dutchman's Pipe through exclusive instructional programming and member experiences.",
    },
  ];

  const facilities = [
    '310-Yard Practice Tee',
    'Two-Acre Short Game Area',
    'Multiple Putting Greens',
    'TrackMan Technology',
  ];

  return (
    <div className="page-shell">
      {/* HERO — parallax drift */}
      <section className="page-hero page-hero-short" style={{ overflow: 'hidden' }}>
        <Parallax speed={0.18} style={{ position: 'absolute', inset: '-9% 0', zIndex: 0 }}>
          <div style={{ backgroundImage: `url('assets/instruction-hero.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%' }} />
        </Parallax>
        <div className="photo-scrim" style={{ zIndex: 1 }} />
        <div className="page-hero-inner hero-stagger" style={{ position: 'relative', zIndex: 2 }}>
          <div className="eyebrow-rule" style={{ color: 'rgba(245,241,232,0.85)', marginBottom: 32 }}>
            Instruction
          </div>
          <h1 className="display-xl" style={{ color: 'var(--color-bone)', maxWidth: 1100, marginBottom: 0 }}>
            Personalized coaching.<br/>
            <em style={{ fontStyle: 'italic', color: 'var(--color-champagne-bright)' }}>World-class expertise.</em>
          </h1>
        </div>
      </section>

      {/* LEDE — centred intro */}
      <section className="section-tight surface-bone-95">
        <Reveal style={{ textAlign: 'center' }}>
          <div className="container">
            <p className="body-text" style={{
              color: 'var(--color-navy-70)',
              maxWidth: 860, marginInline: 'auto', fontSize: 19, lineHeight: 1.7,
            }}>
              Instruction at Dutchman's Pipe is designed around the individual. Led by
              nationally recognized coaches and supported by exceptional practice
              facilities, our instructional program combines personalized coaching,
              modern technology, and proven teaching methods to help every member
              achieve their goals.
            </p>
          </div>
        </Reveal>
      </section>

      {/* THE TEAM */}
      <section className="section surface-white">
        <div className="container">
          <Reveal>
            <div className="folio">No. I — The Team</div>
            <h2 className="display-lg" style={{ color: 'var(--color-club-navy)', maxWidth: 900 }}>
              Meet our instruction team.
            </h2>
            <p className="body-text" style={{ color: 'var(--color-navy-70)', marginTop: 28, maxWidth: 780 }}>
              Dutchman's Pipe brings together some of the most respected names in golf
              instruction, offering members access to world-class coaching across every
              aspect of the game. Through private lessons, specialty clinics, and
              exclusive member programming, our team delivers an exceptional
              instructional experience tailored to every level of golfer.
            </p>
          </Reveal>

          <div className="three-up" style={{ marginTop: 88 }}>
            {coaches.map((c, i) => (
              <Reveal key={c.name} delay={i * 120} style={{ height: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div className="photo-frame" style={{ aspectRatio: '4/5' }}>
                    <Parallax speed={0.08} className="img-drift">
                      <img src={c.img} alt={`${c.name}, ${c.role}`} loading="lazy" decoding="async" />
                    </Parallax>
                  </div>
                  <h3 className="display-sm" style={{ color: 'var(--color-club-navy)', marginTop: 28, fontSize: 26 }}>
                    {c.name}
                  </h3>
                  <div className="eyebrow-rule" style={{ marginTop: 14 }}>{c.role}</div>
                  <p className="body-text" style={{ color: 'var(--color-navy-70)', marginTop: 18, fontSize: 15 }}>
                    {c.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRACTICE FACILITIES — satin chapter */}
      <section className="section surface-satin" style={{ paddingBottom: 0 }}>
        <Parallax speed={-0.25} className="satin-sheen" />
        <div className="satin-content">
          <div className="container">
            <Reveal><div className="folio" style={{ color: 'var(--color-champagne-bright)' }}>No. II — The Practice Grounds</div></Reveal>
          </div>
          <LayeredCallout
            flipped dark
            eyebrow="Practice Facilities"
            title="Designed for performance."
            body="Every lesson is supported by practice facilities purposefully designed to develop every aspect of the game. Members enjoy access to a 310-yard Practice Tee, an expansive two-acre short game area, multiple putting greens, and TrackMan technology, creating an environment where purposeful practice leads to lasting improvement."
            lgImg="assets/instruction-practice.jpg"
            motif="pipe"
          />
        </div>
      </section>

      {/* FACILITY DETAIL STRIP */}
      <section className="section-tight surface-bone-95">
        <Reveal>
          <div className="container">
            <div className="four-up-strip">
              {facilities.map((f) => (
                <div key={f} className="four-up-cell" style={{ justifyContent: 'center' }}>
                  <div style={{
                    font: '500 15px/1.4 var(--font-body)',
                    color: 'var(--color-club-navy)',
                    letterSpacing: '0.04em',
                  }}>
                    {f}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* PLAYER DEVELOPMENT */}
      <section className="section surface-white">
        <div className="container">
          <Reveal><div className="folio">No. III — Player Development</div></Reveal>
        </div>
        <LayeredCallout
          eyebrow="Personalized Player Development"
          title="No two golfers are the same."
          body="No two golfers are the same, and neither is our approach to instruction. Whether your focus is improving consistency, sharpening your short game, or preparing for tournament play, every coaching experience is tailored to your individual goals through private instruction, on-course coaching, performance analysis, and specialty clinics."
          lgImg="assets/instruction-development.jpg"
          motif="grass"
        />
      </section>

      {/* CTA — parallax drift */}
      <section className="full-bleed-quote" style={{ minHeight: '60vh', overflow: 'hidden' }}>
        <Parallax speed={0.18} style={{ position: 'absolute', inset: '-9% 0', zIndex: 0 }}>
          <div style={{ backgroundImage: `url('assets/instruction-hero.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%' }} />
        </Parallax>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(rgba(15,25,40,0.55), rgba(15,25,40,0.82))' }} />
        <Reveal style={{ position: 'relative', zIndex: 2, maxWidth: 820, textAlign: 'center' }}>
          <h2 className="display-lg" style={{ color: 'var(--color-bone)' }}>
            The pursuit of better golf.
          </h2>
          <p className="body-text" style={{
            color: 'rgba(245,241,232,0.82)',
            marginTop: 28, maxWidth: 620, marginInline: 'auto',
          }}>
            Every member's path looks a little different. Ours begins with a
            conversation about yours.
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
window.InstructionPage = InstructionPage;
