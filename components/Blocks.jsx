// Blocks.jsx — shared layout modules for the layered, "artsy" design language.
// LayeredCallout (signature module), ThreePanel (slideshow), InstagramStrip.
const { useState: useBlockState, useEffect: useBlockEffect, useRef: useBlockRef } = React;

function blockReduced() {
  return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/* LayeredCallout — large photo + smaller matted photo over its corner, brand
   motif behind, scroll-triggered reveals. `flipped` mirrors it; `dark` adapts
   colors for navy surfaces; `motif` chooses the behind-graphic (grass | pipe). */
function LayeredCallout({ lgImg, smImg, eyebrow, title, body, ctaLabel, onCta, flipped, motif = 'grass', dark }) {
  const muted = dark ? 'rgba(245,241,232,0.78)' : 'var(--color-navy-70)';
  const head = dark ? 'var(--color-bone)' : 'var(--color-club-navy)';
  return (
    <InView className={`callout ${flipped ? 'flipped' : ''}`}>
      <div className={`callout-bg motif motif-${motif}`} style={{ '--motif': `url('/assets/motif-${motif}.svg?v=15')` }} />
      <div className="callout-inner">
        <div className="callout-media">
          <div className="callout-img-lg">
            <Parallax speed={0.12} className="callout-img-drift"><img src={lgImg} alt="" /></Parallax>
          </div>
          <div className="callout-img-sm"><img src={smImg} alt="" /></div>
        </div>
        <div className="callout-text">
          <div className="callout-rule" />
          <div className="eyebrow-rule" style={{ marginBottom: 22, color: dark ? 'rgba(245,241,232,0.78)' : undefined }}>{eyebrow}</div>
          <h2 className="display-md" style={{ color: head }}>{title}</h2>
          {Array.isArray(body)
            ? body.map((p, i) => (
                <p key={i} className="body-text" style={{ marginTop: i === 0 ? 26 : 18, color: muted }}>{p}</p>
              ))
            : <p className="body-text" style={{ marginTop: 26, color: muted }}>{body}</p>}
          {ctaLabel && (
            <a onClick={onCta} className="arrow-link" style={{
              marginTop: 34, color: head,
              borderColor: dark ? 'var(--color-pennant-yellow)' : undefined,
            }}>
              {ctaLabel}
              <img src="assets/arrow-link.png" alt="" style={dark ? { filter: 'brightness(0) invert(1)' } : undefined} />
            </a>
          )}
        </div>
      </div>
    </InView>
  );
}

/* ThreePanel — three photos shown side by side, cycling through a larger set.
   Auto-advances unless reduced-motion; arrows step manually. */
function ThreePanel({ images = [], interval = 3800, captions = [] }) {
  const [start, setStart] = useBlockState(0);
  const n = images.length;
  const step = (dir) => setStart((s) => (s + dir + n) % n);

  useBlockEffect(() => {
    if (blockReduced() || n <= 3) return;
    const t = setInterval(() => setStart((s) => (s + 1) % n), interval);
    return () => clearInterval(t);
  }, [n, interval]);

  const cols = [0, 1, 2].map((i) => (start + i) % n);
  return (
    <div className="threepanel-wrap">
      <div className="threepanel">
        {cols.map((idx, col) => (
          <div className="tp-cell" key={col}>
            <Parallax speed={0.08} className="img-drift"><img key={idx} src={images[idx]} alt="" /></Parallax>
            {captions[idx] && <div className="tp-caption">{captions[idx]}</div>}
          </div>
        ))}
      </div>
      {n > 3 && (
        <div className="threepanel-nav">
          <button onClick={() => step(-1)} aria-label="Previous">←</button>
          <button onClick={() => step(1)} aria-label="Next">→</button>
        </div>
      )}
    </div>
  );
}

/* InstagramStrip — placeholder for the homepage Instagram widget. In production
   the inner grid is replaced by the SnapWidget embed (same as the reference). */
function InstagramStrip({ handle = '@dutchmanspipeclub', images = [] }) {
  return (
    <div className="ig-strip">
      <div className="ig-head">
        <div className="eyebrow-rule">Follow Along</div>
        <a className="ig-handle" href={`https://instagram.com/${handle.replace('@', '')}`} target="_blank" rel="noopener noreferrer">{handle}</a>
      </div>
      {/* TODO(prod): replace this grid with the SnapWidget embed script/iframe */}
      <div className="ig-grid" data-snapwidget-placeholder="true">
        {images.map((src, i) => (
          <a key={i} className="ig-tile" href={`https://instagram.com/${handle.replace('@', '')}`} target="_blank" rel="noopener noreferrer">
            <img src={src} alt="" />
          </a>
        ))}
      </div>
    </div>
  );
}

/* MarginVine — a refined botanical Aristolochia climber in a section's side
   gutter. Filled, tapered forms (not pencil-outline). On scroll-in it reveals
   with a clip-path wipe that grows the vine up from the bottom. side='left'
   |'right'; honors reduced-motion (appears instantly). */
function MarginVine({ side = 'left', style }) {
  const ref = useBlockRef(null);
  useBlockEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (blockReduced()) { el.classList.add('is-in'); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { el.classList.add('is-in'); io.unobserve(el); } });
    }, { threshold: 0.12 });
    io.observe(el);
    const t = setTimeout(() => el.classList.add('is-in'), 1900); // safety net
    return () => { clearTimeout(t); io.disconnect(); };
  }, []);
  return (
    <div ref={ref} className={`margin-vine margin-vine-${side}`} aria-hidden="true" style={style}>
      <svg viewBox="0 0 120 640" fill="none" preserveAspectRatio="xMidYMax meet">
        <g fill="currentColor">
          <path d="M58,638 C46,560 70,500 60,430 C52,372 70,312 60,242 C53,186 66,118 57,12 L63,12 C72,118 60,186 66,242 C74,312 60,372 66,430 C74,500 54,560 66,638 Z"/>
          <g transform="translate(62,452) rotate(-122) scale(0.6)">
            <path fill-rule="evenodd" d="M0,0 C-9,-16 -8,-46 0,-72 C8,-46 9,-16 0,0 Z M0,-10 C-1.4,-28 -1.4,-50 0,-64 C1.4,-50 1.4,-28 0,-10 Z"/>
          </g>
          <g transform="translate(63,300) rotate(52) scale(0.64)">
            <path fill-rule="evenodd" d="M0,0 C-9,-16 -8,-46 0,-72 C8,-46 9,-16 0,0 Z M0,-10 C-1.4,-28 -1.4,-50 0,-64 C1.4,-50 1.4,-28 0,-10 Z"/>
          </g>
          <g transform="translate(60,158) rotate(-120) scale(0.52)">
            <path fill-rule="evenodd" d="M0,0 C-9,-16 -8,-46 0,-72 C8,-46 9,-16 0,0 Z M0,-10 C-1.4,-28 -1.4,-50 0,-64 C1.4,-50 1.4,-28 0,-10 Z"/>
          </g>
          <path d="M58,86 C48,77 50,60 61,55 C70,60 72,75 64,84 C62,87 60,87 58,86 Z"/>
        </g>
        <g stroke="currentColor" stroke-width="1.3" fill="none" stroke-linecap="round">
          <path d="M70,384 C86,380 90,366 79,362 C73,360 71,369 78,371"/>
          <path d="M52,230 C36,226 32,212 43,208 C49,206 51,215 44,217"/>
        </g>
      </svg>
    </div>
  );
}

window.LayeredCallout = LayeredCallout;
window.ThreePanel = ThreePanel;
window.InstagramStrip = InstagramStrip;
window.MarginVine = MarginVine;
