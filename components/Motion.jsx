// Motion.jsx — lightweight, reduced-motion-aware micro-interaction primitives.
// Used to add "elevated but livelier" depth and physics without heavy libraries.
const { useEffect: useMotionEffect, useRef: useMotionRef } = React;

function prefersReducedMotion() {
  return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Parallax — drifts its content vertically as it passes through the viewport.
 * speed: fraction of viewport height to travel (positive = moves down slower / "further back").
 * Set a small speed for lead images, a larger one for faded background echoes => depth.
 */
function Parallax({ speed = 0.08, children, className, style, ...rest }) {
  const ref = useMotionRef(null);
  useMotionEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // -1 (entering from bottom) .. 0 (centered) .. +1 (leaving top)
      const progress = ((r.top + r.height / 2) - vh / 2) / vh;
      const shift = -(progress * speed * 100);
      el.style.transform = `translate3d(0, ${shift.toFixed(2)}px, 0)`;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);

  return <div ref={ref} className={`parallax ${className || ''}`.trim()} style={style} {...rest}>{children}</div>;
}

/**
 * Tilt — subtle 3D tilt toward the cursor. Kept gentle (small max) for an
 * elevated feel rather than a toy-like one. No-ops under reduced-motion.
 */
function Tilt({ max = 4, children, className, style, ...rest }) {
  const ref = useMotionRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform =
      `perspective(1000px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg)`;
  };
  const reset = () => {
    const el = ref.current;
    if (el) el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ transition: 'transform 500ms var(--ease-club)', transformStyle: 'preserve-3d', ...style }}
      {...rest}
    >
      {children}
    </div>
  );
}

/**
 * InView — adds an `is-in` class to itself when it scrolls into view, so CSS
 * can run staged "magic" reveals (slide-ups, line draws, fades) on descendants.
 * Mirrors the ScrollMagic/GSAP pattern the reference site uses. Reduced-motion
 * shows everything immediately.
 */
function InView({ as: Tag = 'div', className = '', once = true, threshold = 0.18, children, style, ...rest }) {
  const ref = useMotionRef(null);
  const [vis, setVis] = React.useState(false);
  useMotionEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) { setVis(true); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { setVis(true); if (once) io.unobserve(el); }
        else if (!once) { setVis(false); }
      });
    }, { threshold, rootMargin: '0px 0px -8% 0px' });
    io.observe(el);
    const t = setTimeout(() => setVis(true), 1900); // safety net
    return () => { io.disconnect(); clearTimeout(t); };
  }, [once, threshold]);
  return (
    <Tag ref={ref} className={`${className} ${vis ? 'is-in' : ''}`.trim()} style={style} {...rest}>
      {children}
    </Tag>
  );
}

/**
 * CountUp — animates a numeral from 0 to its target when it scrolls into view,
 * preserving the original formatting (thousands commas, decimals, and any
 * prefix/suffix like "$" or "+"). Reduced-motion shows the final value at once.
 * Usage: <CountUp value="7,300" />  <CountUp value="75.8" />  <CountUp value="12,000" />
 */
function CountUp({ value, duration = 1500, className, style }) {
  const ref = useMotionRef(null);
  useMotionEffect(() => {
    const el = ref.current;
    if (!el) return;
    const str = String(value);
    const m = str.match(/[\d.,]+/);
    if (!m) { el.textContent = str; return; }       // nothing numeric — render as-is
    const numStr = m[0];
    const pre = str.slice(0, m.index);
    const post = str.slice(m.index + numStr.length);
    const hasComma = numStr.includes(',');
    const decimals = (numStr.split('.')[1] || '').length;
    const target = parseFloat(numStr.replace(/,/g, ''));
    const fmt = (n) => {
      const fixed = n.toFixed(decimals);
      if (!hasComma) return fixed;
      const [i, d] = fixed.split('.');
      const withSep = i.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return d ? `${withSep}.${d}` : withSep;
    };

    const setFinal = () => { el.textContent = pre + fmt(target) + post; };
    if (prefersReducedMotion()) { setFinal(); return; }

    el.textContent = pre + fmt(0) + post;
    let started = false, raf = 0, t0 = 0;
    const ease = (t) => 1 - Math.pow(1 - t, 3);       // easeOutCubic
    const tick = (now) => {
      if (!t0) t0 = now;
      const p = Math.min((now - t0) / duration, 1);
      el.textContent = pre + fmt(target * ease(p)) + post;
      if (p < 1) raf = requestAnimationFrame(tick); else setFinal();
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started) { started = true; raf = requestAnimationFrame(tick); io.unobserve(el); }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    const safety = setTimeout(() => { if (!started) setFinal(); }, 2200);
    return () => { io.disconnect(); cancelAnimationFrame(raf); clearTimeout(safety); };
  }, [value, duration]);
  return <span ref={ref} className={className} style={style}>{value}</span>;
}

window.Parallax = Parallax;
window.Tilt = Tilt;
window.InView = InView;
window.CountUp = CountUp;
