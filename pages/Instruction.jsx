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
    // Added 8/5 after Shannon's review — appended in the order Madison listed.
    {
      img: 'assets/coach-cain.jpg',
      name: 'Matt Cain',
      role: 'Director of Golf',
      body: "Matt Cain brings experience from some of the country's most respected private clubs, including Yellowstone Club, Victoria National, and Spanish Oaks. As Director of Golf, he is committed to creating exceptional member experiences while fostering a welcoming culture where personalized service, instruction, and the traditions of the game come together.",
    },
    {
      img: 'assets/coach-rowles.jpg',
      name: 'Terry Rowles',
      role: 'Performance Coach',
      body: 'A GOLF Magazine Top 100 Teacher and Golf Digest Top 50 Instructor, Terry Rowles has spent more than three decades coaching tour professionals, elite amateurs, and recreational golfers. His individualized, movement-based teaching philosophy simplifies the game and helps players build lasting confidence, consistency, and performance.',
    },
    // GM review 8/7: Mark Sweeney added, Mark Carter removed.
    {
      img: 'assets/coach-sweeney.jpg',
      name: 'Mark Sweeney',
      role: 'AimPoint Founder & Performance Coach',
      body: "Founder of the revolutionary AimPoint green-reading system, Mark Sweeney is one of the game's leading experts in putting and green reading. His methods are trusted by many of the world's top professional golfers, and his performance-based approach helps players develop a clearer understanding of slope, speed, and decision-making on the greens.",
    },
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

      {/* (club 8/4: the beige lede band was removed — the page goes straight
          from the hero into the team, whose intro now carries that copy.) */}

      {/* THE TEAM */}
      <section className="section surface-white">
        <div className="container">
          <Reveal>
            <div className="folio">No. I — The Team</div>
            <h2 className="display-lg" style={{ color: 'var(--color-club-navy)', maxWidth: 900 }}>
              Meet our instruction team.
            </h2>
            <p className="body-text" style={{ color: 'var(--color-navy-70)', marginTop: 28, maxWidth: 820 }}>
              At Dutchman's Pipe, instruction is designed around the individual.
              Supported by exceptional practice facilities, modern technology, and
              proven teaching methods, our nationally recognized coaches provide
              personalized guidance tailored to every member's goals. Meet the team
              behind one of the country's premier instructional programs.
            </p>
          </Reveal>

          {/* delay staggers per row (i % 3), so the second row of coaches
              doesn't sit waiting on the first to finish revealing */}
          <div className="three-up" style={{ marginTop: 88 }}>
            {coaches.map((c, i) => (
              <Reveal key={c.name} delay={(i % 3) * 120} style={{ height: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  {/* 3/4 matches the club's re-cut headshots exactly (all 600×800),
                      so the three portraits are shown uncropped (club 8/4). */}
                  <div className="photo-frame" style={{ aspectRatio: '3/4' }}>
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
      <section className="section surface-satin">
        <Parallax speed={-0.25} className="satin-sheen" />
        <div className="satin-content">
          <div className="container">
            <Reveal><div className="folio" style={{ color: 'var(--color-champagne-bright)' }}>No. II — The Practice Grounds</div></Reveal>
          </div>
          <LayeredCallout
            flipped dark
            eyebrow="Practice Facilities"
            title="Designed for performance."
            body="Beyond the course, members enjoy exceptional practice facilities designed to develop every aspect of their game. The golf campus features a 315-yard driving range with four target greens and a PGA Tour-inspired wedge matrix, a 12,000-square-foot putting green, and a two-acre short game complex with multiple greens and bunkers for situational practice. Paired with personalized instruction and advanced technology, every practice session is designed for meaningful improvement."
            lgImg="assets/instruction-practice.jpg"
            motif="pipe"
          />
        </div>
      </section>

      {/* FUTURE VISION — Golf Performance Center (club 8/4, replaces the old
          Player Development chapter; rendering supplied by the club) */}
      <section className="section surface-white">
        <div className="container">
          <Reveal><div className="folio">No. III — Future Vision</div></Reveal>
        </div>
        <LayeredCallout
          eyebrow="Future Vision"
          title="The Golf Performance Center."
          body="Designed as the next evolution of the Club's instructional program, the future Golf Performance Center will feature two dedicated instructional bays and inviting indoor-outdoor gathering spaces, creating a vibrant community hub where members can learn, practice, connect, and enjoy the game year-round."
          lgImg="assets/performance-center.jpg"
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
