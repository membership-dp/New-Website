function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Blocks.jsx — shared layout modules for the layered, "artsy" design language.
// LayeredCallout (signature module), ThreePanel (slideshow), InstagramStrip.
const {
  useState: useBlockState,
  useEffect: useBlockEffect,
  useRef: useBlockRef
} = React;
function blockReduced() {
  return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/* LayeredCallout — large photo + (optionally) a smaller matted photo over its
   corner, scroll-triggered reveals. Per client (6/9): the double-picture
   treatment is used sparingly — omit smImg for a single photo. `flipped`
   mirrors it; `dark` adapts colors for navy surfaces. (`motif` prop is
   accepted but currently unused — plant backdrops removed per client.) */
function LayeredCallout({
  lgImg,
  smImg,
  smBare,
  eyebrow,
  title,
  body,
  ctaLabel,
  onCta,
  flipped,
  motif = 'grass',
  dark
}) {
  const muted = dark ? 'rgba(245,241,232,0.78)' : 'var(--color-navy-70)';
  const head = dark ? 'var(--color-bone)' : 'var(--color-club-navy)';
  return /*#__PURE__*/React.createElement(InView, {
    className: `callout ${flipped ? 'flipped' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "callout-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "callout-media"
  }, /*#__PURE__*/React.createElement("div", {
    className: "callout-img-lg"
  }, /*#__PURE__*/React.createElement(Parallax, {
    speed: 0.12,
    className: "callout-img-drift"
  }, /*#__PURE__*/React.createElement("img", {
    src: lgImg,
    alt: "",
    loading: "lazy",
    decoding: "async"
  }))), smImg && /*#__PURE__*/React.createElement("div", {
    className: `callout-img-sm ${smBare ? 'callout-img-sm--bare' : ''}`
  }, /*#__PURE__*/React.createElement("img", {
    src: smImg,
    alt: "",
    loading: "lazy",
    decoding: "async"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "callout-text"
  }, /*#__PURE__*/React.createElement("div", {
    className: "callout-rule"
  }), eyebrow && /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-rule",
    style: {
      marginBottom: 22,
      color: dark ? 'rgba(245,241,232,0.78)' : undefined
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "display-md",
    style: {
      color: head
    }
  }, title), Array.isArray(body) ? body.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    className: "body-text",
    style: {
      marginTop: i === 0 ? 26 : 18,
      color: muted
    }
  }, p)) : /*#__PURE__*/React.createElement("p", {
    className: "body-text",
    style: {
      marginTop: 26,
      color: muted
    }
  }, body), ctaLabel && /*#__PURE__*/React.createElement("a", _extends({}, actionProps(onCta), {
    className: "arrow-link",
    style: {
      marginTop: 34,
      color: head,
      borderColor: dark ? 'var(--color-champagne)' : undefined
    }
  }), ctaLabel, /*#__PURE__*/React.createElement("img", {
    src: "assets/arrow-link.png",
    alt: "",
    style: dark ? {
      filter: 'brightness(0) invert(1)'
    } : undefined
  })))));
}

/* ThreePanel — three photos shown side by side, cycling through a larger set.
   Auto-advances unless reduced-motion; arrows step manually. */
function ThreePanel({
  images = [],
  interval = 3800,
  captions = []
}) {
  const [start, setStart] = useBlockState(0);
  const n = images.length;
  const step = dir => setStart(s => (s + dir + n) % n);
  useBlockEffect(() => {
    if (blockReduced() || n <= 3) return;
    const t = setInterval(() => setStart(s => (s + 1) % n), interval);
    return () => clearInterval(t);
  }, [n, interval]);
  const cols = [0, 1, 2].map(i => (start + i) % n);
  return /*#__PURE__*/React.createElement("div", {
    className: "threepanel-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "threepanel"
  }, cols.map((idx, col) => /*#__PURE__*/React.createElement("div", {
    className: "tp-cell",
    key: col
  }, /*#__PURE__*/React.createElement(Parallax, {
    speed: 0.08,
    className: "img-drift"
  }, /*#__PURE__*/React.createElement("img", {
    key: idx,
    src: images[idx],
    alt: "",
    loading: "lazy",
    decoding: "async"
  })), captions[idx] && /*#__PURE__*/React.createElement("div", {
    className: "tp-caption"
  }, captions[idx])))), n > 3 && /*#__PURE__*/React.createElement("div", {
    className: "threepanel-nav"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => step(-1),
    "aria-label": "Previous"
  }, "\u2190"), /*#__PURE__*/React.createElement("button", {
    onClick: () => step(1),
    "aria-label": "Next"
  }, "\u2192")));
}

/* InstagramStrip — placeholder for the homepage Instagram widget. In production
   the inner grid is replaced by the SnapWidget embed (same as the reference). */
function InstagramStrip({
  handle = '@dutchmanspipeclub',
  images = []
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ig-strip"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ig-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-rule"
  }, "Follow Along"), /*#__PURE__*/React.createElement("a", {
    className: "ig-handle",
    href: `https://instagram.com/${handle.replace('@', '')}`,
    target: "_blank",
    rel: "noopener noreferrer"
  }, handle)), /*#__PURE__*/React.createElement("div", {
    className: "ig-grid",
    "data-snapwidget-placeholder": "true"
  }, images.map((src, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    className: "ig-tile",
    href: `https://instagram.com/${handle.replace('@', '')}`,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    loading: "lazy",
    decoding: "async"
  })))));
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
function ZoomHero({
  videoSrc,
  scrubSrc,
  poster,
  scrubPoster,
  settleImg,
  mode = 'auto',
  children
}) {
  const ref = useBlockRef(null);
  const [done, setDone] = useBlockState(false);
  const [fallback, setFallback] = useBlockState(false);
  useBlockEffect(() => {
    if (mode === 'still') return; // static hero — no video, no motion
    const host = ref.current;
    if (!host) return;
    const video = host.querySelector('video');
    if (!video || blockReduced()) {
      setFallback(true);
      setDone(true);
      return;
    }
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
        if (copy) {
          copy.style.opacity = o;
          copy.style.pointerEvents = o < 0.05 ? 'none' : 'auto';
        }
        if (scrim) scrim.style.opacity = o;
      };
      const onScroll = () => {
        if (!raf) raf = requestAnimationFrame(render);
      };
      const onMeta = () => render();
      const onError = () => {
        setFallback(true);
        setDone(true);
      };
      video.addEventListener('loadedmetadata', onMeta);
      video.addEventListener('error', onError);
      video.muted = true;
      render();
      window.addEventListener('scroll', onScroll, {
        passive: true
      });
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
    const RAMP = 0.7; // longer glide window (video-seconds) for a smoother settle
    const FLOOR = 0.55; // ease further down so the dolly drifts gently to rest
    let finished = false;
    let started = false;
    const finish = toFallback => {
      if (finished) return;
      finished = true;
      if (toFallback) {
        setFallback(true);
        setDone(true);
        return;
      }
      try {
        if (video.duration && isFinite(video.duration) && video.currentTime < video.duration - 0.1) {
          video.currentTime = video.duration;
        }
        video.pause();
      } catch (e) {
        setFallback(true);
        setDone(true);
        return;
      }
      setDone(true); // the words arrive the instant the zoom settles
    };
    const startPlay = () => {
      if (started || finished) return;
      started = true;
      try {
        video.playbackRate = 1;
      } catch (e) {}
      const p = video.play();
      if (p && p.catch) p.catch(() => finish(true));
    };
    const onEnded = () => finish(false);
    const onError = () => finish(true);
    video.addEventListener('ended', onEnded);
    video.addEventListener('error', onError);
    video.muted = true; // belt-and-suspenders for autoplay policy
    // Start only once enough is buffered to play through cleanly → no stutter.
    if (video.readyState >= 4) startPlay();else video.addEventListener('canplaythrough', startPlay, {
      once: true
    });
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
  if (mode === 'still') {
    // Static hero — the club found the photo quality too soft for the zoom
    // (6/15 doc). A crisp high-res still, copy fades in over it. No motion.
    const img = settleImg || poster;
    return /*#__PURE__*/React.createElement("section", {
      ref: ref,
      className: "zoom-hero",
      style: img ? {
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : undefined
    }, img && /*#__PURE__*/React.createElement("img", {
      className: "zoom-frame",
      src: img,
      alt: "",
      fetchpriority: "high"
    }), /*#__PURE__*/React.createElement("div", {
      className: "zoom-scrim photo-scrim is-on"
    }), /*#__PURE__*/React.createElement("div", {
      className: "zoom-copy"
    }, children));
  }
  if (mode === 'scrub' && !fallback) {
    return /*#__PURE__*/React.createElement("div", {
      ref: ref,
      className: "zoom-track"
    }, /*#__PURE__*/React.createElement("div", {
      className: "zoom-stage"
    }, /*#__PURE__*/React.createElement("video", {
      className: "zoom-frame",
      src: scrubSrc || videoSrc,
      poster: scrubPoster || poster,
      muted: true,
      playsInline: true,
      preload: "auto"
    }), /*#__PURE__*/React.createElement("div", {
      className: "zoom-scrim photo-scrim",
      style: {
        opacity: 0
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "zoom-copy",
      style: {
        opacity: 0,
        pointerEvents: 'none'
      }
    }, children)));
  }
  return (
    /*#__PURE__*/
    // The poster also paints as the section background, so the very first paint
    // is the course photo — never the dark/satin surface while the clip buffers.
    React.createElement("section", {
      ref: ref,
      className: "zoom-hero",
      style: poster ? {
        backgroundImage: `url(${poster})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : undefined
    }, /*#__PURE__*/React.createElement("video", {
      className: "zoom-frame",
      src: videoSrc,
      poster: poster,
      muted: true,
      playsInline: true,
      preload: "auto"
    }), settleImg && /*#__PURE__*/React.createElement("img", {
      className: `zoom-frame zoom-settle ${done || fallback ? 'is-on' : ''}`,
      src: settleImg,
      alt: ""
    }), /*#__PURE__*/React.createElement("div", {
      className: `zoom-scrim photo-scrim ${done ? 'is-on' : ''}`
    }), done && /*#__PURE__*/React.createElement("div", {
      className: "zoom-copy"
    }, children))
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
function RevealGallery({
  images = [],
  interval = 3800,
  continuous = false
}) {
  const ref = useBlockRef(null);
  const [open, setOpen] = useBlockState(false);
  const [active, setActive] = useBlockState(0);
  useBlockEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (blockReduced()) {
      setOpen(true);
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setOpen(true);
          io.unobserve(el);
        }
      });
    }, {
      threshold: 0.35
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  useBlockEffect(() => {
    if (!open || blockReduced() || images.length < 2) return;
    // start sifting once the reveal has finished assembling
    const t = setInterval(() => setActive(a => (a + 1) % images.length), interval);
    return () => clearInterval(t);
  }, [open, images.length, interval]);
  const n = images.length;
  if (!n) return null;
  // plain helper (not a component) so panels reconcile in place and the
  // cross-fade transitions survive re-renders
  // continuous mode: every panel shows the SAME image (offset 0) so the slices
  // line up into one picture; default mode: each panel is a different image.
  const panel = (cls, offset) => /*#__PURE__*/React.createElement("div", {
    className: `rg-panel ${cls}`
  }, images.map((src, k) => /*#__PURE__*/React.createElement("img", {
    key: src,
    src: src,
    alt: "",
    loading: "lazy",
    decoding: "async",
    className: k === (active + (continuous ? 0 : offset)) % n ? 'active' : ''
  })));
  return (
    /*#__PURE__*/
    // IO observes the UNCLIPPED wrapper — the clipped layer reports ~0%
    // visibility to IntersectionObserver, so it can never trigger itself.
    React.createElement("div", {
      ref: ref,
      className: "reveal-gallery-wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: `reveal-gallery ${continuous ? 'is-continuous' : ''} ${open ? 'is-open' : ''}`
    }, panel('rg-side rg-left', 1), panel('rg-square', 0), panel('rg-side rg-right', 2)))
  );
}

/* Membership categories — single source shared by the Membership page
   (accordion, per club 6/11) and the Golf page (the original column
   layout, which the club liked for low-verbiage placements). */
const DP_TIERS = [{
  name: 'Full Golf',
  tag: 'Signature',
  body: 'The Club in its fullest expression. Full Golf Membership offers unlimited access to championship golf, racquets, wellness, dining, and the complete calendar of member events and experiences.',
  audience: 'Designed for those who wish to engage fully in every aspect of club life and make Dutchman’s Pipe part of their everyday routine.'
}, {
  name: 'Next Generation',
  tag: 'Under 40',
  body: 'Created for members age 39 and under seeking a long-term connection to the Club. Next Generation Membership provides Full Golf privileges today while establishing a protected pathway to Full Golf Membership at a locked initiation rate.',
  audience: 'One hundred percent of annual dues paid are credited toward future Full Golf initiation.'
}, {
  name: 'Visiting',
  tag: 'Non-Resident',
  body: 'Tailored for those who spend only part of the year in Palm Beach. Visiting Membership is available exclusively to individuals who do not reside in Palm Beach, Broward, or Martin Counties and provides access to golf, practice facilities, and club amenities during time spent in residence.',
  audience: 'Members enjoy up to 30 rounds annually, with a pathway to Full Golf Membership should their lifestyle evolve.'
}, {
  name: 'Corporate',
  tag: 'Executive',
  body: 'An elevated membership designed for organizations seeking a distinctive setting for business and leisure. Corporate Membership allows up to four designated representatives to enjoy golf, racquets, wellness, dining, and the full range of club amenities.',
  audience: 'A unique opportunity to host clients, reward leadership, and build lasting relationships in an exceptional setting.'
}, {
  name: 'Social',
  tag: 'Lifestyle',
  body: 'Designed for members who value connection, recreation, and an active club lifestyle. Social Membership includes access to racquets, wellness, dining, social programming, and The Belgrove resort amenities and pools.',
  audience: 'Members also enjoy summer golf privileges from June through September, creating opportunities to experience the game in a relaxed and welcoming environment.'
}];

/* TierColumns — the original five-column membership layout. */
function TierColumns({
  tiers = DP_TIERS
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "tier-row",
    style: {
      borderTop: '1px solid var(--color-mist)',
      borderBottom: '1px solid var(--color-mist)',
      '--tier-cols': tiers.length
    }
  }, tiers.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: t.name,
    className: "tier-col"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 11px/1 var(--font-body)',
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'var(--color-navy-40)'
    }
  }, "0", i + 1, " \xA0\xB7\xA0 ", t.tag), /*#__PURE__*/React.createElement("h3", null, t.name), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 24,
      height: 1,
      background: 'var(--color-champagne)'
    }
  }), /*#__PURE__*/React.createElement("p", null, t.body), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 24,
      font: '400 13px/1.5 var(--font-body)',
      fontStyle: 'italic',
      color: 'var(--color-navy-70)'
    }
  }, t.audience))));
}

/* PhotoGrid — a responsive grid of equal thumbnails (club 6/15: galleries
   "like the mock" — many smaller images rather than the big 3-panel reveal).
   Each cell scroll-reveals with a soft rise + fade (no scale, per client). */
function PhotoGrid({
  images = []
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "photo-grid"
  }, images.map((src, i) => /*#__PURE__*/React.createElement(InView, {
    key: src + i,
    className: "photo-grid-cell",
    style: {
      transitionDelay: `${i % 5 * 60}ms`
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    loading: "lazy",
    decoding: "async"
  }))));
}
window.LayeredCallout = LayeredCallout;
window.ThreePanel = ThreePanel;
window.InstagramStrip = InstagramStrip;
window.ZoomHero = ZoomHero;
window.RevealGallery = RevealGallery;
window.PhotoGrid = PhotoGrid;
window.DP_TIERS = DP_TIERS;
window.TierColumns = TierColumns;
