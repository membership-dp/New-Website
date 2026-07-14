// pages/News.jsx — "In the News". Content comes from NewsStore (defaults,
// or whatever the Admin editor saved in this browser).
function NewsPage({ onNav }) {
  const { featured, articles } = NewsStore.load();

  const Meta = ({ tag, date, light }) => (
    <div style={{
      display: 'flex', gap: 12, alignItems: 'center',
      font: '500 11px/1 var(--font-body)', letterSpacing: '0.2em', textTransform: 'uppercase',
      color: light ? 'rgba(245,241,232,0.7)' : 'var(--color-navy-70)',
    }}>
      <span style={{ color: 'var(--color-champagne)' }}>{tag}</span>
      <span>·</span>
      <span>{date}</span>
    </div>
  );

  return (
    <div className="page-shell">
      {/* HERO */}
      <section className="page-hero page-hero-short" style={{ overflow: 'hidden' }}>
        <Parallax speed={0.2} style={{ position: 'absolute', inset: '-9% 0', zIndex: 0 }}>
          <img src="assets/news-featured.jpg" alt="" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Parallax>
        <div className="photo-scrim" style={{ zIndex: 1 }} />
        <div className="page-hero-inner" style={{ zIndex: 2 }}>
          <h1 className="display-xl" style={{ color: 'var(--color-bone)', maxWidth: 1100 }}>
            In the News
          </h1>
        </div>
      </section>

      {/* FEATURED — large layered callout */}
      <section className="section surface-bone">
        <LayeredCallout
          eyebrow={`Featured — ${featured.tag}`}
          title={featured.title}
          body={featured.excerpt}
          lgImg={featured.img}
          ctaLabel={featured.url ? `Read on ${featured.tag}` : undefined}
          onCta={() => { if (featured.url) window.open(featured.url, '_blank', 'noopener,noreferrer'); }}
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
            {articles.map((a, i) => {
              const linked = !!a.url;
              const linkProps = linked ? { href: a.url, target: '_blank', rel: 'noopener noreferrer' } : {};
              return (
                <Reveal key={a.id || a.title} delay={(i % 3) * 120} style={{ height: '100%' }}>
                  <a {...linkProps} style={{ display: 'flex', flexDirection: 'column', height: '100%', cursor: linked ? 'pointer' : 'default', textDecoration: 'none', color: 'inherit' }}>
                    <div className="photo-frame" style={{ aspectRatio: '4/3' }}>
                      <img src={a.img} alt="" loading="lazy" decoding="async" />
                    </div>
                    <div style={{ marginTop: 22 }}><Meta tag={a.tag} date={a.date} /></div>
                    <h3 className="display-sm" style={{ color: 'var(--color-club-navy)', marginTop: 14, fontSize: 24 }}>
                      {a.title}
                    </h3>
                    {a.excerpt ? (
                      <p className="body-text" style={{ color: 'var(--color-navy-70)', marginTop: 12, fontSize: 15 }}>
                        {a.excerpt}
                      </p>
                    ) : null}
                    {linked && (
                      <span className="arrow-link" style={{ marginTop: 'auto', paddingTop: 20, alignSelf: 'flex-start', color: 'var(--color-club-navy)' }}>
                        Read the story
                        <img src="assets/arrow-link.png" alt="" />
                      </span>
                    )}
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="full-bleed-quote" style={{ minHeight: '56vh', overflow: 'hidden' }}>
        <Parallax speed={0.22} style={{ position: 'absolute', inset: '-11% 0', zIndex: 0 }}>
          <img src="assets/hero-fairway.jpg" alt="" loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Parallax>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(rgba(15,25,40,0.55), rgba(15,25,40,0.82))' }} />
        <Reveal style={{ position: 'relative', zIndex: 2, maxWidth: 820, textAlign: 'center' }}>
          <h2 className="display-lg" style={{ color: 'var(--color-bone)' }}>
            Be part of the story.
          </h2>
          <div style={{ marginTop: 40 }}>
            <a {...actionProps(() => onNav('membership'))} className="btn btn-ghost-light">
              Request Membership Information
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
window.NewsPage = NewsPage;
