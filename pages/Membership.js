// pages/Membership.jsx
const {
  useState: useMemState
} = React;

// Membership inquiries submit straight into the club's own HubSpot (portal
// 242324318) through the Forms Submission API. That endpoint is public by
// design — no API key, no server, nothing secret in this file — and it fires
// HubSpot's own notification settings, so Madison and Shannon manage their own
// recipient list without us touching the site.
//
// We do NOT use HubSpot's embed code: that renders the form inside a
// cross-origin iframe with its own styling. The form in HubSpot is only a
// schema (which fields are accepted, who gets notified); the markup below
// stays entirely ours.
//
// Region matters: this portal is na2, so the host is api-na2, not api.
// Set to '' to fall back to demo mode (confirmation shown, nothing sent).
const HS_PORTAL_ID = '242324318';
const HS_FORM_GUID = 'd8daf1ec-ccff-4e99-8bf2-3ced75d3ec36';
const INQUIRY_ENDPOINT = `https://api-na2.hsforms.com/submissions/v3/integration/submit/${HS_PORTAL_ID}/${HS_FORM_GUID}`;
function MembershipPage({
  onNav
}) {
  const tiers = DP_TIERS; // shared with the Golf page's column layout (Blocks.jsx)

  const [submitted, setSubmitted] = useMemState(false);
  const [status, setStatus] = useMemState('idle'); // idle | sending | error
  const [data, setData] = useMemState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: 'Full Golf',
    residence: '',
    message: '',
    company: '' // honeypot — see the hidden field below
  });
  const set = k => e => setData({
    ...data,
    [k]: e.target.value
  });
  const submitInquiry = async e => {
    e.preventDefault();
    if (status === 'sending') return;
    // A bot filled the hidden field. Show success, send nothing.
    if (data.company) {
      setSubmitted(true);
      return;
    }
    // Demo mode — no endpoint configured yet.
    if (!INQUIRY_ENDPOINT) {
      setSubmitted(true);
      return;
    }
    setStatus('sending');
    try {
      // HubSpot expects a flat `fields` array keyed by contact property name.
      // Empty values are dropped so optional fields never overwrite good CRM
      // data with blanks.
      const hsFields = [['email', data.email], ['firstname', data.firstName], ['lastname', data.lastName], ['phone', data.phone], ['city', data.residence], ['membership_interest', data.interest], ['message', data.message]].filter(([, v]) => v && String(v).trim()).map(([name, value]) => ({
        objectTypeId: '0-1',
        name,
        value: String(value).trim()
      }));
      const res = await fetch(INQUIRY_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          fields: hsFields,
          context: {
            pageUri: window.location.href,
            pageName: "Membership Inquiry — Dutchman's Pipe Club"
          }
        })
      });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      setStatus('idle');
      setSubmitted(true);
    } catch (err) {
      // Never swallow it — the visitor gets the direct email as a fallback.
      setStatus('error');
    }
  };
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
  }, "Five pathways to membership.")))), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(TierAccordion, {
    tiers: tiers
  })))), /*#__PURE__*/React.createElement("section", {
    className: "section surface-bone"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(PhotoGrid, {
    images: ['assets/golf-hero.jpg', 'assets/hero-green.jpg', 'assets/padel-rally.jpg', 'assets/tennis-rally.jpg', 'assets/hero-villa.jpg', 'assets/spa-belgrove.jpg', 'assets/membership-hero.jpg', 'assets/hero-palms.jpg', 'assets/course-skyline.jpg', 'assets/clubfitting-bags.jpg']
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
  }, "Membership@dutchmanspipeclub.com", /*#__PURE__*/React.createElement("br", null), "+1 561 557 5840"))), /*#__PURE__*/React.createElement(Reveal, {
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
    onSubmit: submitInquiry,
    className: "inquiry-form"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "company",
    tabIndex: -1,
    autoComplete: "off",
    "aria-hidden": "true",
    value: data.company,
    onChange: set('company'),
    style: {
      position: 'absolute',
      left: -9999,
      width: 1,
      height: 1,
      opacity: 0
    }
  }), /*#__PURE__*/React.createElement(FormField, {
    label: "First Name",
    name: "firstName",
    autoComplete: "given-name",
    value: data.firstName,
    onChange: set('firstName'),
    required: true
  }), /*#__PURE__*/React.createElement(FormField, {
    label: "Last Name",
    name: "lastName",
    autoComplete: "family-name",
    value: data.lastName,
    onChange: set('lastName'),
    required: true
  }), /*#__PURE__*/React.createElement(FormField, {
    label: "Email",
    type: "email",
    name: "email",
    autoComplete: "email",
    value: data.email,
    onChange: set('email'),
    required: true
  }), /*#__PURE__*/React.createElement(FormField, {
    label: "Phone",
    type: "tel",
    name: "phone",
    autoComplete: "tel",
    value: data.phone,
    onChange: set('phone')
  }), /*#__PURE__*/React.createElement(FormField, {
    label: "City of Residence",
    name: "residence",
    autoComplete: "address-level2",
    value: data.residence,
    onChange: set('residence'),
    span: 2
  }), /*#__PURE__*/React.createElement(FormField, {
    label: "Membership Interest",
    type: "select",
    name: "interest",
    value: data.interest,
    onChange: set('interest'),
    span: 2,
    options: ['Full Golf', 'Next Gen.', 'Visiting', 'Social', 'Corporate']
  }), /*#__PURE__*/React.createElement(FormField, {
    label: "A Note (optional)",
    type: "textarea",
    name: "message",
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
    className: "btn btn-ghost-light",
    disabled: status === 'sending',
    style: status === 'sending' ? {
      opacity: 0.6,
      cursor: 'wait'
    } : undefined
  }, status === 'sending' ? 'Sending…' : 'Submit Inquiry', /*#__PURE__*/React.createElement("img", {
    src: "assets/arrow-link.png",
    style: {
      height: 9,
      filter: 'brightness(0) invert(1)'
    },
    alt: ""
  })), status === 'error' && /*#__PURE__*/React.createElement("p", {
    role: "alert",
    className: "body-text",
    style: {
      marginTop: 20,
      fontSize: 15,
      color: 'var(--color-champagne-bright)'
    }
  }, "We couldn't send that just now. Please email", ' ', /*#__PURE__*/React.createElement("a", {
    href: "mailto:Membership@dutchmanspipeclub.com",
    style: {
      color: 'inherit'
    }
  }, "Membership@dutchmanspipeclub.com"), ' ', "or call +1 561 557 5840 and we'll take care of it."))))))));
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
  span = 1,
  name,
  autoComplete
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
    name: name,
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
    name: name,
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
    name: name,
    autoComplete: autoComplete,
    value: value,
    onChange: onChange,
    required: required,
    onFocus: onFocus,
    onBlur: onBlur,
    style: inputStyle
  }));
}
window.MembershipPage = MembershipPage;
