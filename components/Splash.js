// Splash.jsx — invitation gate with staggered intro + smooth exit
const {
  useState: useSplashState
} = React;
function Splash({
  onEnter
}) {
  const [leaving, setLeaving] = useSplashState(false);
  const handleEnter = () => {
    if (leaving) return;
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      onEnter();
      return;
    }
    setLeaving(true);
    setTimeout(onEnter, 520);
  };
  return /*#__PURE__*/React.createElement("section", {
    className: `splash-root surface-satin ${leaving ? 'is-leaving' : ''}`,
    style: {
      position: 'relative',
      color: 'var(--color-bone)',
      display: 'grid',
      placeItems: 'center',
      padding: '64px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'radial-gradient(125% 90% at 50% 38%, transparent 42%, rgba(6,15,27,0.5))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "splash-intro splash-stage",
    style: {
      position: 'relative',
      width: '100%',
      maxWidth: 720,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 11px/1 var(--font-body)',
      letterSpacing: '0.36em',
      textTransform: 'uppercase',
      color: 'var(--color-pennant-yellow)',
      marginBottom: 28
    }
  }, "By Invitation Only"), /*#__PURE__*/React.createElement("h1", {
    className: "display-xl",
    style: {
      color: 'var(--color-bone)',
      margin: 0
    }
  }, "Dutchman's Pipe"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: handleEnter,
    className: "btn btn-gold",
    style: {
      padding: '18px 36px',
      gap: 14,
      minHeight: 52,
      justifyContent: 'center'
    }
  }, "Enter", /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "10",
    viewBox: "0 0 18 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 5h16M12 1l4 4-4 4",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "square",
    strokeLinejoin: "miter",
    fill: "none"
  }))))));
}
window.Splash = Splash;
