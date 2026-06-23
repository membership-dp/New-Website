// pages/Membership.jsx
const {
  useState: useMemState
} = React;
function MembershipPage({
  onNav
}) {
  const tiers = DP_TIERS; // shared with the Golf page's column layout (Blocks.jsx)

  const [submitted, setSubmitted] = useMemState(false);
  const [data, setData] = useMemState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: 'Full Golf',
    residence: '',
    message: ''
  });
  const set = k => e => setData({
    ...data,
    [k]: e.target.value
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "page-shell"
  }, /*#__PURE__*/React.createElement("section", {
    className: "page-hero page-hero-short",
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Parallax, {
    speed: 0.2,
    style: {
      position: 'absolute',
      inset: '-9% 0',
      zIndex: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: `url('assets/membership-hero.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: '100%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "photo-scrim",
    style: {
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "page-hero-inner hero-stagger",
    style: {
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-rule",
    style: {
      color: 'rgba(245,241,232,0.85)',
      marginBottom: 32
    }
  }, "Membership"), /*#__PURE__*/React.createElement("h1", {
    className: "display-xl",
    style: {
      color: 'var(--color-bone)',
      maxWidth: 1100
    }
  }, "By invitation. ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--color-champagne-bright)'
    }
  }, "By design.")), /*#__PURE__*/React.createElement("p", {
    className: "hero-sub",
    style: {
      color: 'rgba(245,241,232,0.84)',
      marginTop: 28,
      maxWidth: 720,
      marginBottom: 0
    }
  }, "Private club membership centered on golf, racquet sports, wellness, and a distinctly Palm Beach setting."))), /*#__PURE__*/React.createElement("section", {
    className: "section surface-white"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      flexWrap: 'wrap',
      gap: 24,
      marginBottom: 64
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-rule",
    style: {
      marginBottom: 24
    }
  }, "Categories"), /*#__PURE__*/React.createElement("h2", {
    className: "display-md",
    style: {
      color: 'var(--color-club-navy)',
      maxWidth: 720
    }
  }, "Five pathways to membership.")), /*#__PURE__*/React.createElement("p", {
    className: "body-text",
    style: {
      color: 'var(--color-navy-70)',
      maxWidth: 380
    }
  }, "Each category is designed to match the rhythm of how you wish to engage with the Club."))), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(TierAccordion, {
    tiers: tiers
  })))), /*#__PURE__*/React.createElement("section", {
    className: "section surface-bone"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(PhotoGrid, {
    images: ['assets/golf-hero.jpg', 'assets/hero-green.jpg', 'assets/padel-rally.jpg', 'assets/tennis-veranda.jpg', 'assets/hero-villa.jpg', 'assets/hero-clubhouse.jpg', 'assets/membership-hero.jpg', 'assets/hero-palms.jpg', 'assets/course-skyline.jpg', 'assets/clubfitting-bags.jpg']
  }))), /*#__PURE__*/React.createElement("section", {
    className: "section surface-satin",
    id: "inquiry"
  }, /*#__PURE__*/React.createElement(Parallax, {
    speed: -0.25,
    className: "satin-sheen"
  }), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inquiry-page-grid"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-rule",
    style: {
      marginBottom: 24,
      color: 'rgba(245,241,232,0.78)'
    }
  }, "Membership Inquiry"), /*#__PURE__*/React.createElement("h2", {
    className: "display-md",
    style: {
      color: 'var(--color-bone)'
    }
  }, "Please introduce yourself."), /*#__PURE__*/React.createElement("p", {
    className: "body-text",
    style: {
      marginTop: 28,
      color: 'rgba(245,241,232,0.78)'
    }
  }, "A member of our Membership team will be in touch personally. All inquiries are confidential."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 11px/1 var(--font-body)',
      letterSpacing: '0.24em',
      textTransform: 'uppercase',
      color: 'var(--color-champagne)'
    }
  }, "Direct Contact"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 16px/1.5 var(--font-body)',
      color: 'var(--color-bone)'
    }
  }, "Shannon Mattes"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 15px/1.6 var(--font-body)',
      color: 'rgba(245,241,232,0.72)'
    }
  }, "Membership@dutchmanspipeclub.com", /*#__PURE__*/React.createElement("br", null), "+1 772 633 3815"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, submitted ? /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid rgba(245,241,232,0.16)',
      padding: '64px 48px',
      textAlign: 'center',
      borderRadius: 4
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "display-sm",
    style: {
      color: 'var(--color-bone)'
    }
  }, "Your inquiry has been received."), /*#__PURE__*/React.createElement("p", {
    className: "body-text",
    style: {
      color: 'rgba(245,241,232,0.72)',
      marginTop: 20,
      maxWidth: 440,
      marginInline: 'auto'
    }
  }, "A member of our Membership team will be in touch within two business days.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSubmitted(true);
    },
    className: "inquiry-form"
  }, /*#__PURE__*/React.createElement(FormField, {
    label: "First Name",
    value: data.firstName,
    onChange: set('firstName'),
    required: true
  }), /*#__PURE__*/React.createElement(FormField, {
    label: "Last Name",
    value: data.lastName,
    onChange: set('lastName'),
    required: true
  }), /*#__PURE__*/React.createElement(FormField, {
    label: "Email",
    type: "email",
    value: data.email,
    onChange: set('email'),
    required: true
  }), /*#__PURE__*/React.createElement(FormField, {
    label: "Phone",
    type: "tel",
    value: data.phone,
    onChange: set('phone')
  }), /*#__PURE__*/React.createElement(FormField, {
    label: "City of Residence",
    value: data.residence,
    onChange: set('residence'),
    span: 2
  }), /*#__PURE__*/React.createElement(FormField, {
    label: "Membership Interest",
    type: "select",
    value: data.interest,
    onChange: set('interest'),
    span: 2,
    options: ['Full Golf', 'Next Generation', 'Visiting', 'Social', 'Corporate']
  }), /*#__PURE__*/React.createElement(FormField, {
    label: "A Note (optional)",
    type: "textarea",
    value: data.message,
    onChange: set('message'),
    span: 2
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-ghost-light"
  }, "Submit Inquiry", /*#__PURE__*/React.createElement("img", {
    src: "assets/arrow-link.png",
    style: {
      height: 9,
      filter: 'brightness(0) invert(1)'
    },
    alt: ""
  })))))))));
}

/* TierAccordion — membership categories as expandable rows (club 6/11).
   First category open by default; champagne hairlines; smooth CSS collapse. */
function TierAccordion({
  tiers
}) {
  const [openIdx, setOpenIdx] = useMemState(0);
  return /*#__PURE__*/React.createElement("div", {
    className: "accordion"
  }, tiers.map((t, i) => {
    const open = openIdx === i;
    const headId = `acc-head-${i}`;
    const panelId = `acc-panel-${i}`;
    return /*#__PURE__*/React.createElement("div", {
      key: t.name,
      className: `acc-item ${open ? 'open' : ''}`
    }, /*#__PURE__*/React.createElement("button", {
      id: headId,
      className: "acc-head",
      "aria-expanded": open,
      "aria-controls": panelId,
      onClick: () => setOpenIdx(open ? -1 : i)
    }, /*#__PURE__*/React.createElement("span", {
      className: "acc-num"
    }, "0", i + 1), /*#__PURE__*/React.createElement("span", {
      className: "acc-name"
    }, t.name), /*#__PURE__*/React.createElement("span", {
      className: "acc-tag"
    }, t.tag), /*#__PURE__*/React.createElement("span", {
      className: "acc-chevron",
      "aria-hidden": "true"
    }, "+")), /*#__PURE__*/React.createElement("div", {
      className: "acc-panel",
      id: panelId,
      role: "region",
      "aria-labelledby": headId
    }, /*#__PURE__*/React.createElement("div", {
      className: "acc-panel-inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "acc-body"
    }, /*#__PURE__*/React.createElement("p", null, t.body), /*#__PURE__*/React.createElement("div", {
      className: "acc-audience"
    }, t.audience)))));
  }));
}
function FormField({
  label,
  value,
  onChange,
  type = 'text',
  required,
  options,
  span = 1
}) {
  const labelStyle = {
    display: 'block',
    font: 'var(--type-eyebrow)',
    textTransform: 'uppercase',
    letterSpacing: '0.18em',
    color: 'rgba(245,241,232,0.6)',
    marginBottom: 12
  };
  const inputStyle = {
    width: '100%',
    border: 0,
    borderBottom: '1px solid rgba(245,241,232,0.25)',
    background: 'transparent',
    font: '400 17px/1.5 var(--font-body)',
    color: 'var(--color-bone)',
    padding: '12px 0',
    outline: 'none',
    borderRadius: 0,
    transition: 'border-color 200ms var(--ease-club)'
  };
  const onFocus = e => {
    e.target.style.borderBottomColor = 'var(--color-champagne)';
  };
  const onBlur = e => {
    e.target.style.borderBottomColor = 'rgba(245,241,232,0.25)';
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      gridColumn: span === 2 ? '1 / -1' : 'auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, label), type === 'select' ? /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: onChange,
    onFocus: onFocus,
    onBlur: onBlur,
    style: {
      ...inputStyle,
      appearance: 'none',
      cursor: 'pointer'
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    style: {
      color: '#000'
    }
  }, o))) : type === 'textarea' ? /*#__PURE__*/React.createElement("textarea", {
    rows: 3,
    value: value,
    onChange: onChange,
    onFocus: onFocus,
    onBlur: onBlur,
    style: {
      ...inputStyle,
      resize: 'vertical'
    }
  }) : /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value,
    onChange: onChange,
    required: required,
    onFocus: onFocus,
    onBlur: onBlur,
    style: inputStyle
  }));
}
window.MembershipPage = MembershipPage;
