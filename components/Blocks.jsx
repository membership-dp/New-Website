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
      <div className={`callout-bg motif motif-${motif}`} style={{ '--motif': `url('/assets/motif-${motif}.svg?v=9')` }} />
      <div className="callout-inner">
        <div className="callout-media">
          <div className="callout-img-lg"><img src={lgImg} alt="" /></div>
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
            <img key={idx} src={images[idx]} alt="" />
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

/* MarginVine — a thin line-art Aristolochia (Dutchman's-pipe) climber that
   "grows" up a section's side gutter as it scrolls into view. Each path
   self-measures and animates stroke-dashoffset 0 so the stem and leaves
   draw on. side='left'|'right'; honors reduced-motion (draws instantly). */
function MarginVine({ side = 'left', style }) {
  const ref = useBlockRef(null);
  useBlockEffect(() => {
    const el = ref.current;
    if (!el) return;
    const paths = Array.from(el.querySelectorAll('path'));
    paths.forEach((p, i) => {
      const L = p.getTotalLength();
      p.style.strokeDasharray = L;
      p.style.strokeDashoffset = L;
      p.style.transition = `stroke-dashoffset 2200ms var(--ease-club) ${i * 160}ms`;
    });
    const draw = () => paths.forEach((p) => { p.style.strokeDashoffset = 0; });
    if (blockReduced()) { draw(); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { draw(); io.unobserve(el); } });
    }, { threshold: 0.12 });
    io.observe(el);
    const t = setTimeout(draw, 1900); // safety net
    return () => { clearTimeout(t); io.disconnect(); };
  }, []);
  return (
    <div ref={ref} className={`margin-vine margin-vine-${side}`} aria-hidden="true" style={style}>
      <svg viewBox="0 0 120 640" fill="none" preserveAspectRatio="xMidYMid meet">
        <g stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M62,634 C42,566 84,524 66,456 C50,396 92,360 66,296 C44,240 86,202 62,138 C46,90 80,54 60,8"/>
          <g transform="translate(66,456) rotate(-150) scale(0.34)">
            <path d="M0,0 C-7,-9 -34,-11 -49,-34 C-62,-55 -47,-86 0,-108 C47,-86 62,-55 49,-34 C34,-11 7,-9 0,0 Z"/>
            <path d="M0,-8 L0,-96" stroke-width="5"/>
          </g>
          <g transform="translate(66,300) rotate(38) scale(0.32)">
            <path d="M0,0 C-7,-9 -34,-11 -49,-34 C-62,-55 -47,-86 0,-108 C47,-86 62,-55 49,-34 C34,-11 7,-9 0,0 Z"/>
            <path d="M0,-8 L0,-96" stroke-width="5"/>
          </g>
          <g transform="translate(62,150) rotate(-148) scale(0.3)">
            <path d="M0,0 C-7,-9 -34,-11 -49,-34 C-62,-55 -47,-86 0,-108 C47,-86 62,-55 49,-34 C34,-11 7,-9 0,0 Z"/>
            <path d="M0,-8 L0,-96" stroke-width="5"/>
          </g>
          <path d="M70,388 C92,384 98,366 86,360 C78,356 76,368 84,370" stroke-width="2.4"/>
          <path d="M58,86 C36,84 30,66 42,60 C50,56 53,68 45,70" stroke-width="2.4"/>
        </g>
      </svg>
    </div>
  );
}

window.LayeredCallout = LayeredCallout;
window.ThreePanel = ThreePanel;
window.InstagramStrip = InstagramStrip;
window.MarginVine = MarginVine;
