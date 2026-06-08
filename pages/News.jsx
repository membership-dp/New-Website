// pages/News.jsx — "In the News" (placeholder content for wireframe review)
function NewsPage({ onNav }) {
  const featured = {
    img: 'assets/hero-clubhouse.jpg',
    tag: 'Press', date: 'May 2026',
    title: "Dutchman's Pipe Club named among the most anticipated private clubs in Florida.",
    excerpt: 'A look at the no-tee-time philosophy, the Jack Nicklaus Signature course, and the racquet pavilion drawing members to West Palm Beach.',
  };
  const articles = [
    { img: 'assets/hero-green.jpg', tag: 'Golf', date: 'Apr 2026', title: 'Inside the Jack Nicklaus Signature design.', excerpt: 'How 7,300 yards of sculpted bunkering and natural water came together.' },
    { img: 'assets/padel-action.jpg', tag: 'Racquets', date: 'Mar 2026', title: 'Why padel is becoming the Club’s social heartbeat.', excerpt: 'Glow Padel after sunset and a calendar built for every level.' },
    { img: 'assets/hero-palms.jpg', tag: 'Lifestyle', date: 'Feb 2026', title: 'A Palm Beach address, quietly removed.', excerpt: 'Minutes from Worth Avenue, with discreet access to private aviation.' },
    { img: 'assets/instruction.jpg', tag: 'Instruction', date: 'Feb 2026', title: 'Top 100 instruction comes to the practice ground.', excerpt: 'Individualized lessons rooted in fundamentals and biomechanics.' },
    { img: 'assets/tennis-veranda.jpg', tag: 'Community', date: 'Jan 2026', title: 'The veranda: where time on court becomes time together.', excerpt: 'Chilled towels, post-match smoothies, and an easy social rhythm.' },
    { img: 'assets/course-skyline.jpg', tag: 'Club News', date: 'Jan 2026', title: 'Membership inquiries open for the founding season.', excerpt: 'An invitation-only community takes shape on the edge of Palm Beach.' },
  ];

  const Meta = ({ tag, date, light }) => (
    <div style={{
      display: 'flex', gap: 12, alignItems: 'center',
      font: '500 11px/1 var(--font-body)', letterSpacing: '0.2em', textTransform: 'uppercase',
      color: light ? 'rgba(245,241,232,0.7)' : 'var(--color-navy-70)',
    }}>
      <span style={{ color: 'var(--color-pennant-yellow)' }}>{tag}</span>
      <span>·</span>
      <span>{date}</span>
    </div>
  );

  return (
    <div className="page-shell">
      {/* HERO */}
      <section className="page-hero page-hero-short" style={{ overflow: 'hidden' }}>
        <Parallax speed={0.2} style={{ position: 'absolute', inset: '-9% 0', zIndex: 0 }}>
          <img src="assets/hero-villa.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Parallax>
        <div className="photo-scrim" style={{ zIndex: 1 }} />
        <div className="page-hero-inner" style={{ zIndex: 2 }}>
          <div className="eyebrow-rule" style={{ color: 'rgba(245,241,232,0.85)', marginBottom: 32 }}>
            In the News
          </div>
          <h1 className="display-xl" style={{ color: 'var(--color-bone)', maxWidth: 1100 }}>
            Stories from the Club.
          </h1>
          <p style={{
            font: '400 22px/1.5 var(--font-body)',
            color: 'rgba(245,241,232,0.84)',
            marginTop: 28, maxWidth: 680, marginBottom: 0,
          }}>
            Press, announcements, and dispatches from life at Dutchman's Pipe.
          </p>
        </div>
      </section>

      {/* FEATURED — large layered callout */}
      <section className="section surface-bone">
        <LayeredCallout
          eyebrow="Featured"
          title={featured.title}
          body={featured.excerpt}
          lgImg={featured.img}
          smImg="assets/hero-sunset.jpg"
          ctaLabel="Read the Story"
          onCta={() => {}}
          motif="grass"
        />
      </section>

      {/* ARTICLE GRID */}
      <section className="section surface-white">
        <div className="container">
          <Reveal>
            <div className="eyebrow-rule" style={{ marginBottom: 40 }}>Latest</div>
          </Reveal>
          <div className="three-up">
            {articles.map((a, i) => (
              <Reveal key={a.title} delay={(i % 3) * 120}>
                <a style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}>
                  <div className="photo-frame" style={{ aspectRatio: '4/3' }}>
                    <img src={a.img} alt="" />
                  </div>
                  <div style={{ marginTop: 22 }}><Meta tag={a.tag} date={a.date} /></div>
                  <h3 className="display-sm" style={{ color: 'var(--color-club-navy)', marginTop: 14, fontSize: 24 }}>
                    {a.title}
                  </h3>
                  <p className="body-text" style={{ color: 'var(--color-navy-70)', marginTop: 12, fontSize: 15 }}>
                    {a.excerpt}
                  </p>
                  <span className="arrow-link" style={{ marginTop: 20, alignSelf: 'flex-start', color: 'var(--color-club-navy)' }}>
                    Read
                    <img src="assets/arrow-link.png" alt="" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="full-bleed-quote" style={{ minHeight: '56vh', overflow: 'hidden' }}>
        <Parallax speed={0.22} style={{ position: 'absolute', inset: '-11% 0', zIndex: 0 }}>
          <img src="assets/hero-fairway.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Parallax>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(rgba(15,25,40,0.55), rgba(15,25,40,0.82))' }} />
        <Reveal style={{ position: 'relative', zIndex: 2, maxWidth: 820, textAlign: 'center' }}>
          <h2 className="display-lg" style={{ color: 'var(--color-bone)' }}>
            Be part of the story.
          </h2>
          <div style={{ marginTop: 40 }}>
            <a onClick={() => onNav('membership')} className="btn btn-ghost-light">
              Request Membership Information
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
window.NewsPage = NewsPage;
