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
            <Parallax speed={0.12} className="callout-img-drift"><img src={lgImg} alt="" loading="lazy" decoding="async" /></Parallax>
          </div>
          {smImg && <div className="callout-img-sm"><img src={smImg} alt="" loading="lazy" decoding="async" /></div>}
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
            <a {...actionProps(onCta)} className="arrow-link" style={{
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
            <Parallax speed={0.08} className="img-drift"><img key={idx} src={images[idx]} alt="" loading="lazy" decoding="async" /></Parallax>
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
            <img src={src} alt="" loading="lazy" decoding="async" />
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
   poster = the auto-mode start frame (mid-flight, since auto trims the
   clip); scrubPoster = the true first frame for scrub mode; settleImg =
   final-frame still for reduced-motion or any failure. */
function ZoomHero({ videoSrc, scrubSrc, poster, scrubPoster, settleImg, mode = 'auto', children }) {
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
    // The clip is PRE-TRIMMED to the exact ~2.1s segment we want, so we just
    // play it start to finish: NO runtime seeking (seeking to a non-keyframe
    // was the "cut halfway through") and NO speed-up. We start only once the
    // clip can play through without stalling, so the motion stays smooth — and
    // a whisper of deceleration softens the final beat before the words pop in.
    const RAMP = 0.7;    // longer glide window (video-seconds) for a smoother settle
    const FLOOR = 0.55;  // ease further down so the dolly drifts gently to rest
    let finished = false;
    let started = false;
    const finish = (toFallback) => {
      if (finished) return;
      finished = true;
      if (toFallback) { setFallback(true); setDone(true); return; }
      try {
        if (video.duration && isFinite(video.duration) && video.currentTime < video.duration - 0.1) {
          video.currentTime = video.duration;
        }
        video.pause();
      } catch (e) { setFallback(true); setDone(true); return; }
      setDone(true); // the words arrive the instant the zoom settles
    };
    const startPlay = () => {
      if (started || finished) return;
      started = true;
      try { video.playbackRate = 1; } catch (e) {}
      const p = video.play();
      if (p && p.catch) p.catch(() => finish(true));
    };
    const onEnded = () => finish(false);
    const onError = () => finish(true);
    video.addEventListener('ended', onEnded);
    video.addEventListener('error', onError);
    video.muted = true; // belt-and-suspenders for autoplay policy
    // Start only once enough is buffered to play through cleanly → no stutter.
    if (video.readyState >= 4) startPlay();
    else video.addEventListener('canplaythrough', startPlay, { once: true });
    // …but don't wait forever: kick off once it's merely playable.
    const kick = setTimeout(startPlay, 1400);
    // Glide to a stop: ease playbackRate down over the final beat.
    let rampRaf = 0;
    const rampTick = () => {
      if (finished) return;
      const dur = video.duration;
      if (started && dur && isFinite(dur)) {
        const remaining = dur - video.currentTime;
        if (remaining <= RAMP) {
          const k = Math.max(0, remaining / RAMP);
          video.playbackRate = FLOOR + (1 - FLOOR) * (k * k); // ease-out: 1 -> FLOOR
        }
      }
      rampRaf = requestAnimationFrame(rampTick);
    };
    rampRaf = requestAnimationFrame(rampTick);
    const safety = setTimeout(() => finish(false), 9000);
    return () => {
      clearTimeout(safety);
      clearTimeout(kick);
      if (rampRaf) cancelAnimationFrame(rampRaf);
      video.removeEventListener('canplaythrough', startPlay);
      video.removeEventListener('ended', onEnded);
      video.removeEventListener('error', onError);
    };
  }, [videoSrc, mode]);

  if (mode === 'scrub' && !fallback) {
    return (
      <div ref={ref} className="zoom-track">
        <div className="zoom-stage">
          <video className="zoom-frame" src={scrubSrc || videoSrc} poster={scrubPoster || poster} muted playsInline preload="auto" />
          <div className="zoom-scrim photo-scrim" style={{ opacity: 0 }} />
          <div className="zoom-copy" style={{ opacity: 0, pointerEvents: 'none' }}>{children}</div>
        </div>
      </div>
    );
  }
  return (
    // The poster also paints as the section background, so the very first paint
    // is the course photo — never the dark/satin surface while the clip buffers.
    <section
      ref={ref}
      className="zoom-hero"
      style={poster ? { backgroundImage: `url(${poster})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}
    >
      <video className="zoom-frame" src={videoSrc} poster={poster} muted playsInline preload="auto" />
      {/* On settle, cross-fade from the motion-soft video to a crisp high-res
          still so the resting frame (what the viewer reads) is sharp. Also the
          static fallback for reduced-motion / blocked autoplay. */}
      {settleImg && <img className={`zoom-frame zoom-settle ${(done || fallback) ? 'is-on' : ''}`} src={settleImg} alt="" />}
      <div className={`zoom-scrim photo-scrim ${done ? 'is-on' : ''}`} />
      {done && <div className="zoom-copy">{children}</div>}
    </section>
  );
}

/* RevealGallery — the Hideaway image animation, v2 (club 6/11 + Kyle):
   the center window opens first (clip-path from its center — nothing scales),
   then the two side panels glide in toward it. Then it sifts through the image
   set with slow cross-fades.
   continuous=true (Kyle 6/15): the three panels are contiguous windows onto ONE
   image (each img is sized to the full gallery and offset by a third), so once
   assembled it reads as a single image spanning the section — but it still
   arrives as three animated pieces. Default: each panel shows a different image.
   Reduced-motion: fully assembled, static. */
function RevealGallery({ images = [], interval = 3800, continuous = false }) {
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
    // start sifting once the reveal has finished assembling
    const t = setInterval(() => setActive((a) => (a + 1) % images.length), interval);
    return () => clearInterval(t);
  }, [open, images.length, interval]);
  const n = images.length;
  if (!n) return null;
  // plain helper (not a component) so panels reconcile in place and the
  // cross-fade transitions survive re-renders
  // continuous mode: every panel shows the SAME image (offset 0) so the slices
  // line up into one picture; default mode: each panel is a different image.
  const panel = (cls, offset) => (
    <div className={`rg-panel ${cls}`}>
      {images.map((src, k) => (
        <img key={src} src={src} alt="" loading="lazy" decoding="async" className={k === (active + (continuous ? 0 : offset)) % n ? 'active' : ''} />
      ))}
    </div>
  );
  return (
    // IO observes the UNCLIPPED wrapper — the clipped layer reports ~0%
    // visibility to IntersectionObserver, so it can never trigger itself.
    <div ref={ref} className="reveal-gallery-wrap">
      <div className={`reveal-gallery ${continuous ? 'is-continuous' : ''} ${open ? 'is-open' : ''}`}>
        {panel('rg-side rg-left', 1)}
        {panel('rg-square', 0)}
        {panel('rg-side rg-right', 2)}
      </div>
    </div>
  );
}

/* Membership categories — single source shared by the Membership page
   (accordion, per club 6/11) and the Golf page (the original column
   layout, which the club liked for low-verbiage placements). */
const DP_TIERS = [
  {
    name: 'Full Golf',
    tag: 'Anchor',
    body: 'Full Golf Membership provides unlimited access to the Jack Nicklaus Signature course played without tee times, the full racquet program, wellness facilities, and all club amenities. A distinguished instructional team, including Golf Magazine Top 100 instructors and performance specialists, supports every stage of a member’s golf journey.',
    audience: 'For members who wish to engage fully in every aspect of club life.',
  },
  {
    name: 'Next Generation',
    tag: 'Under 40',
    body: 'Next Generation Membership is reserved for members under 40 seeking long-term affiliation and progression to Full Golf Membership. It offers meaningful access today while establishing a clear pathway within the club’s future community.',
    audience: 'Reserved for members under 40.',
  },
  {
    name: 'Visiting',
    tag: 'Non-Resident',
    body: 'Visiting Membership offers a membership tailored for non-residents, providing limited access to the course, practice facilities, and select club amenities during their time in Palm Beach.',
    audience: 'For seasonal members and travelers.',
  },
  {
    name: 'Social',
    tag: 'Beyond the Fairways',
    body: 'Social Membership centers on racquet sports, wellness programming, and dining, allowing members to participate in the club’s daily rhythm beyond the fairways.',
    audience: 'For racquet, wellness, and social members.',
  },
  {
    name: 'Corporate',
    tag: 'Executive',
    body: 'Corporate Membership provides designated access for multiple executives under one membership, offering an elevated setting to host clients, reward leadership, and build lasting business relationships.',
    audience: 'For organizations.',
  },
];

/* TierColumns — the original five-column membership layout. */
function TierColumns({ tiers = DP_TIERS }) {
  return (
    <div className="tier-row" style={{
      borderTop: '1px solid var(--color-mist)',
      borderBottom: '1px solid var(--color-mist)',
    }}>
      {tiers.map((t, i) => (
        <div key={t.name} className="tier-col">
          <div style={{
            font: '500 11px/1 var(--font-body)',
            letterSpacing: '0.22em', textTransform: 'uppercase',
            color: 'var(--color-navy-40)',
          }}>
            0{i + 1} &nbsp;·&nbsp; {t.tag}
          </div>
          <h3>{t.name}</h3>
          <div style={{ width: 24, height: 1, background: 'var(--color-champagne)' }} />
          <p>{t.body}</p>
          <div style={{
            marginTop: 'auto',
            paddingTop: 24,
            font: '400 13px/1.5 var(--font-body)',
            fontStyle: 'italic',
            color: 'var(--color-navy-70)',
          }}>
            {t.audience}
          </div>
        </div>
      ))}
    </div>
  );
}

window.LayeredCallout = LayeredCallout;
window.ThreePanel = ThreePanel;
window.InstagramStrip = InstagramStrip;
window.ZoomHero = ZoomHero;
window.RevealGallery = RevealGallery;
window.DP_TIERS = DP_TIERS;
window.TierColumns = TierColumns;
