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

/* ZoomHero — auto-playing cinematic dolly-in, now driven by a real video
   for perfectly smooth motion. The clip plays once on arrival (muted,
   inline); when it ends it holds its final frame, the scrim fades up and
   the copy (children) staggers in. poster = first frame (shown while the
   video loads); settleImg = final-frame still used for reduced-motion or
   if the video fails. */
function ZoomHero({ videoSrc, poster, settleImg, children }) {
  const ref = useBlockRef(null);
  const [done, setDone] = useBlockState(false);
  const [fallback, setFallback] = useBlockState(false);
  useBlockEffect(() => {
    const host = ref.current;
    if (!host) return;
    const video = host.querySelector('video');
    if (!video) { setFallback(true); setDone(true); return; }
    if (blockReduced()) { setFallback(true); setDone(true); return; }

    let finished = false;
    const finish = (toFallback) => {
      if (finished) return;
      finished = true;
      if (toFallback) setFallback(true);
      else {
        // hold the clip's final frame if playback stalled short of the end
        try {
          if (video.duration && isFinite(video.duration) && video.currentTime < video.duration - 0.1) {
            video.currentTime = video.duration;
          }
          video.pause();
        } catch (e) { setFallback(true); }
      }
      setDone(true);
    };
    const onEnded = () => finish(false);
    const onError = () => finish(true);
    video.addEventListener('ended', onEnded);
    video.addEventListener('error', onError);
    video.muted = true; // belt-and-suspenders for autoplay policy
    const p = video.play();
    if (p && p.catch) p.catch(() => finish(true)); // autoplay blocked → settle still
    const safety = setTimeout(() => finish(false), 10000);
    return () => {
      clearTimeout(safety);
      video.removeEventListener('ended', onEnded);
      video.removeEventListener('error', onError);
    };
  }, [videoSrc]);
  return (
    <section ref={ref} className="zoom-hero">
      <video className="zoom-frame" src={videoSrc} poster={poster} muted playsInline preload="auto" />
      {fallback && settleImg && <img className="zoom-frame" src={settleImg} alt="" />}
      <div className={`zoom-scrim photo-scrim ${done ? 'is-on' : ''}`} />
      {done && <div className="zoom-copy">{children}</div>}
    </section>
  );
}

window.LayeredCallout = LayeredCallout;
window.ThreePanel = ThreePanel;
window.InstagramStrip = InstagramStrip;
window.ZoomHero = ZoomHero;
