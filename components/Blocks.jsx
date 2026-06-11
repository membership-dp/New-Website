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

/* ZoomHero — cinematic dolly-in with two modes for A/B review:
   mode="auto"  (default): the clip plays once on arrival; on its final
     frame the scrim fades up and the copy staggers in.
   mode="scrub": Apple-style pinned journey — a ~280vh track pins the
     stage while scroll drives the video playhead (use the all-intra
     scrubSrc so seeks are exact); the copy + scrim fade in over the
     last 15% of the pin, then the page releases.
   poster = first frame; settleImg = final-frame still for reduced-motion
   or any failure. */
function ZoomHero({ videoSrc, scrubSrc, poster, settleImg, mode = 'auto', children }) {
  const ref = useBlockRef(null);
  const [done, setDone] = useBlockState(false);
  const [fallback, setFallback] = useBlockState(false);
  useBlockEffect(() => {
    const host = ref.current;
    if (!host) return;
    const video = host.querySelector('video');
    if (!video || blockReduced()) { setFallback(true); setDone(true); return; }

    if (mode === 'scrub') {
      // ----- scroll-scrubbed pinned journey -----
      const track = host;
      const copy = host.querySelector('.zoom-copy');
      const scrim = host.querySelector('.zoom-scrim');
      let raf = 0;
      const render = () => {
        raf = 0;
        const dur = video.duration;
        if (!dur || !isFinite(dur)) return;
        const rect = track.getBoundingClientRect();
        const scrollable = rect.height - (window.innerHeight || 1);
        const p = Math.min(1, Math.max(0, -rect.top / (scrollable || 1)));
        // video completes over the first 85% of the pin…
        const t = Math.min(1, p / 0.85) * Math.max(0, dur - 0.05);
        if (Math.abs(video.currentTime - t) > 1 / 30) video.currentTime = t;
        // …then the words arrive over the last 15%
        const o = Math.min(1, Math.max(0, (p - 0.85) / 0.15));
        if (copy) { copy.style.opacity = o; copy.style.pointerEvents = o < 0.05 ? 'none' : 'auto'; }
        if (scrim) scrim.style.opacity = o;
      };
      const onScroll = () => { if (!raf) raf = requestAnimationFrame(render); };
      const onMeta = () => render();
      const onError = () => { setFallback(true); setDone(true); };
      video.addEventListener('loadedmetadata', onMeta);
      video.addEventListener('error', onError);
      video.muted = true;
      render();
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll);
      return () => {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
        video.removeEventListener('loadedmetadata', onMeta);
        video.removeEventListener('error', onError);
        if (raf) cancelAnimationFrame(raf);
      };
    }

    // ----- auto-playing intro -----
    let finished = false;
    const finish = (toFallback) => {
      if (finished) return;
      finished = true;
      if (toFallback) setFallback(true);
      else {
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
    if (p && p.catch) p.catch(() => finish(true));
    const safety = setTimeout(() => finish(false), 10000);
    return () => {
      clearTimeout(safety);
      video.removeEventListener('ended', onEnded);
      video.removeEventListener('error', onError);
    };
  }, [videoSrc, mode]);

  if (mode === 'scrub' && !fallback) {
    return (
      <div ref={ref} className="zoom-track">
        <div className="zoom-stage">
          <video className="zoom-frame" src={scrubSrc || videoSrc} poster={poster} muted playsInline preload="auto" />
          <div className="zoom-scrim photo-scrim" style={{ opacity: 0 }} />
          <div className="zoom-copy" style={{ opacity: 0, pointerEvents: 'none' }}>{children}</div>
        </div>
      </div>
    );
  }
  return (
    <section ref={ref} className="zoom-hero">
      <video className="zoom-frame" src={videoSrc} poster={poster} muted playsInline preload="auto" />
      {fallback && settleImg && <img className="zoom-frame" src={settleImg} alt="" />}
      <div className={`zoom-scrim photo-scrim ${done ? 'is-on' : ''}`} />
      {done && <div className="zoom-copy">{children}</div>}
    </section>
  );
}

/* RevealGallery — the Hideaway image animation the club asked for (6/11):
   on scroll-in, the image is unveiled through a window that grows from a
   small center seed out to the full band (clip-path only, nothing scales),
   then the frame "sifts" through the image set with slow cross-fades.
   Reduced-motion: full band, static first image. */
function RevealGallery({ images = [], interval = 3800 }) {
  const ref = useBlockRef(null);
  const [open, setOpen] = useBlockState(false);
  const [active, setActive] = useBlockState(0);
  useBlockEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (blockReduced()) { setOpen(true); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setOpen(true); io.unobserve(el); } });
    }, { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  useBlockEffect(() => {
    if (!open || blockReduced() || images.length < 2) return;
    // start sifting once the reveal has finished opening
    const t = setInterval(() => setActive((a) => (a + 1) % images.length), interval);
    return () => clearInterval(t);
  }, [open, images.length, interval]);
  return (
    <div ref={ref} className={`reveal-gallery ${open ? 'is-open' : ''}`}>
      {images.map((src, k) => (
        <img key={src} src={src} alt="" className={k === active ? 'active' : ''} />
      ))}
    </div>
  );
}

window.LayeredCallout = LayeredCallout;
window.ThreePanel = ThreePanel;
window.InstagramStrip = InstagramStrip;
window.ZoomHero = ZoomHero;
window.RevealGallery = RevealGallery;
