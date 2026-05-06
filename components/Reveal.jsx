// Reveal.jsx — IntersectionObserver-based scroll reveal
const { useEffect: useRevealEffect, useRef: useRevealRef } = React;

function Reveal({ children, delay = 0, as: Tag = 'div', style, ...rest }) {
  const ref = useRevealRef(null);
  useRevealEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (delay) el.style.transitionDelay = `${delay}ms`;

    // Honor reduced-motion: skip the fade entirely.
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      el.classList.add('is-visible');
      return;
    }

    // If already in viewport on mount, reveal immediately.
    const rect = el.getBoundingClientRect();
    const inView = rect.top < (window.innerHeight || 0) && rect.bottom > 0;
    if (inView) {
      // small delay so the transition still plays
      requestAnimationFrame(() => el.classList.add('is-visible'));
      return;
    }

    let revealed = false;
    const reveal = () => {
      if (revealed) return;
      revealed = true;
      el.classList.add('is-visible');
    };

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          reveal();
          io.unobserve(el);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    io.observe(el);

    // Safety net: force-reveal after 1.6s no matter what.
    const t = setTimeout(reveal, 1600 + delay);
    return () => { clearTimeout(t); io.disconnect(); };
  }, [delay]);
  return <Tag ref={ref} className="reveal" style={style} {...rest}>{children}</Tag>;
}

window.Reveal = Reveal;
