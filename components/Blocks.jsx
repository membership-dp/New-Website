// Blocks.jsx — shared layout modules for the layered, "artsy" design language.
// LayeredCallout (signature module), ThreePanel (slideshow), InstagramStrip.
const { useState: useBlockState, useEffect: useBlockEffect, useRef: useBlockRef } = React;

function blockReduced() {
  return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/* LayeredCallout — large photo + (optionally) a smaller matted photo over its
   corner, scroll-triggered reveals. Per client (6/9): the double-picture
   treatment is used sparingly — omit smImg for a single photo. `flipped`
   mirrors it; `dark` adapts colors for navy surfaces. (`motif` prop is
   accepted but currently unused — plant backdrops removed per client.) */
function LayeredCallout({ lgImg, smImg, eyebrow, title, body, ctaLabel, onCta, flipped, motif = 'grass', dark }) {
  const muted = dark ? 'rgba(245,241,232,0.78)' : 'var(--color-navy-70)';
  const head = dark ? 'var(--color-bone)' : 'var(--color-club-navy)';
  return (
    <InView className={`callout ${flipped ? 'flipped' : ''}`}>
      <div className="callout-inner">
        <div className="callout-media">
          <div className="callout-img-lg">
            <Parallax speed={0.12} className="callout-img-drift"><img src={lgImg} alt="" /></Parallax>
          </div>
          {smImg && <div className="callout-img-sm"><img src={smImg} alt="" /></div>}
        </div>
        <div className="callout-text">
          <div className="callout-rule" />
          {eyebrow && <div className="eyebrow-rule" style={{ marginBottom: 22, color: dark ? 'rgba(245,241,232,0.78)' : undefined }}>{eyebrow}</div>}
          <h2 className="display-md" style={{ color: head }}>{title}</h2>
          {Array.isArray(body)
            ? body.map((p, i) => (
                <p key={i} className="body-text" style={{ marginTop: i === 0 ? 26 : 18, color: muted }}>{p}</p>
              ))
            : <p className="body-text" style={{ marginTop: 26, color: muted }}>{body}</p>}
          {ctaLabel && (
            <a onClick={onCta} className="arrow-link" style={{
              marginTop: 34, color: head,
              borderColor: dark ? 'var(--color-champagne)' : undefined,
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

/* ZoomHero — auto-playing cinematic dolly-in from a photo zoom sequence.
   On arrival the camera moves through the frames by itself (~4s, eased,
   cross-fades with a micro-scale handoff so it reads as one continuous
   move). When it settles on the final frame, the scrim fades up and the
   copy (children) staggers in. Normal 100dvh section — no scroll track.
   Reduced-motion: final frame + copy immediately. */
function ZoomHero({ frames = [], duration = 4000, children }) {
  const ref = useBlockRef(null);
  const [done, setDone] = useBlockState(false);
  useBlockEffect(() => {
    const host = ref.current;
    if (!host) return;
    const imgs = Array.from(host.querySelectorAll('.zoom-frame'));
    const n = imgs.length;
    if (!n) { setDone(true); return; }
    const showLast = () => {
      imgs.forEach((img, k) => {
        img.style.opacity = k === n - 1 ? 1 : 0;
        img.style.transform = 'scale(1)';
      });
      setDone(true);
    };
    if (blockReduced()) { showLast(); return; }

    const HANDOFF = 0.06;
    const ease = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; // easeInOutCubic
    let raf = 0, t0 = 0, finished = false;
    const finish = () => { if (finished) return; finished = true; showLast(); };
    const tick = (now) => {
      if (!t0) t0 = now;
      const p = ease(Math.min((now - t0) / duration, 1));
      const pos = p * (n - 1);
      const i = Math.min(n - 2, Math.floor(pos));
      const f = pos - i;
      imgs.forEach((img, idx) => {
        if (idx === i) {
          img.style.opacity = 1;
          img.style.transform = `scale(${1 + f * HANDOFF})`;
        } else if (idx === i + 1) {
          img.style.opacity = f;
          img.style.transform = `scale(${1 - (1 - f) * HANDOFF})`;
        } else {
          img.style.opacity = 0;
        }
      });
      if (p < 1) raf = requestAnimationFrame(tick);
      else finish();
    };

    // Start once the early frames have decoded (capped wait), so the journey
    // never plays over half-loaded imagery.
    let cancelled = false;
    const start = () => { if (!cancelled && !finished) raf = requestAnimationFrame(tick); };
    const decodes = imgs.slice(0, 3).map((img) =>
      (img.decode ? img.decode() : Promise.resolve()).catch(() => {}));
    const waitCap = new Promise((r) => setTimeout(r, 1500));
    Promise.race([Promise.all(decodes), waitCap]).then(start);

    // Hard safety: hidden/throttled tabs still land on the finished state.
    const safety = setTimeout(finish, duration + 4000);
    return () => { cancelled = true; clearTimeout(safety); if (raf) cancelAnimationFrame(raf); };
  }, [frames.length, duration]);
  return (
    <section ref={ref} className="zoom-hero">
      {frames.map((src, k) => (
        <img key={src} className="zoom-frame" src={src} alt="" style={{ opacity: k === 0 ? 1 : 0 }} />
      ))}
      <div className={`zoom-scrim photo-scrim ${done ? 'is-on' : ''}`} />
      {done && <div className="zoom-copy">{children}</div>}
    </section>
  );
}

window.LayeredCallout = LayeredCallout;
window.ThreePanel = ThreePanel;
window.InstagramStrip = InstagramStrip;
window.ZoomHero = ZoomHero;
