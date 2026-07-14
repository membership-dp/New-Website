function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// pages/Admin.jsx — "In the News" editor (wireframe CMS).
// A unique-login admin area where the club edits the News page content:
// featured story + article list (title, excerpt, tag, date, photo; add /
// remove / reorder). WIREFRAME SCOPE: the login is a demo credential and
// edits persist in this browser via localStorage (NewsStore). Production
// replaces both with real auth + a database — the editor UI stays.
const {
  useState: useAdminState
} = React;
const DP_ADMIN_USER = 'madison';
const DP_ADMIN_PASS = 'dutchmans';
function AdminPage({
  onNav
}) {
  const [authed, setAuthed] = useAdminState(() => {
    try {
      return sessionStorage.getItem('dp-admin') === 'in';
    } catch (e) {
      return false;
    }
  });
  const signIn = () => {
    try {
      sessionStorage.setItem('dp-admin', 'in');
    } catch (e) {}
    setAuthed(true);
  };
  const signOut = () => {
    try {
      sessionStorage.removeItem('dp-admin');
    } catch (e) {}
    setAuthed(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "page-shell"
  }, /*#__PURE__*/React.createElement("section", {
    className: "surface-satin",
    style: {
      padding: 'calc(var(--header-height) + 64px) var(--gutter) 56px'
    }
  }, /*#__PURE__*/React.createElement(Parallax, {
    speed: -0.25,
    className: "satin-sheen"
  }), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-rule",
    style: {
      color: 'rgba(245,241,232,0.78)',
      marginBottom: 24
    }
  }, "Club Admin"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexWrap: 'wrap',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "display-md",
    style: {
      color: 'var(--color-bone)'
    }
  }, "In the News \u2014 Editor"), authed && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", _extends({}, actionProps(() => onNav('news')), {
    className: "arrow-link",
    style: {
      color: 'rgba(245,241,232,0.85)',
      borderColor: 'var(--color-champagne)'
    }
  }), "View News Page", /*#__PURE__*/React.createElement("img", {
    src: "assets/arrow-link.png",
    style: {
      filter: 'brightness(0) invert(1)'
    },
    alt: ""
  })), /*#__PURE__*/React.createElement("a", _extends({}, actionProps(signOut), {
    style: {
      font: '500 11px/1 var(--font-body)',
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'rgba(245,241,232,0.6)',
      cursor: 'pointer',
      textDecoration: 'none'
    }
  }), "Sign Out"))))), authed ? /*#__PURE__*/React.createElement(NewsEditor, {
    onNav: onNav
  }) : /*#__PURE__*/React.createElement(AdminLogin, {
    onSuccess: signIn
  }));
}

/* ---- Login gate (demo credential for the wireframe) ---- */
function AdminLogin({
  onSuccess
}) {
  const [user, setUser] = useAdminState('');
  const [pass, setPass] = useAdminState('');
  const [error, setError] = useAdminState(false);
  const submit = e => {
    e.preventDefault();
    if (user.trim().toLowerCase() === DP_ADMIN_USER && pass === DP_ADMIN_PASS) onSuccess();else setError(true);
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "section surface-bone"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      maxWidth: 520
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("h2", {
    className: "display-sm",
    style: {
      color: 'var(--color-club-navy)'
    }
  }, "Editor sign in."), /*#__PURE__*/React.createElement("p", {
    className: "body-text",
    style: {
      marginTop: 16,
      color: 'var(--color-navy-70)'
    }
  }, "This area is reserved for club staff. Each editor receives a unique login; changes publish to the In the News page."), /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: 'grid',
      gap: 28,
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", {
    className: "field-label"
  }, "Username"), /*#__PURE__*/React.createElement("input", {
    className: "field-input",
    value: user,
    onChange: e => {
      setUser(e.target.value);
      setError(false);
    },
    autoComplete: "username"
  })), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", {
    className: "field-label"
  }, "Passcode"), /*#__PURE__*/React.createElement("input", {
    className: "field-input",
    type: "password",
    value: pass,
    onChange: e => {
      setPass(e.target.value);
      setError(false);
    },
    autoComplete: "current-password"
  })), error && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px/1.5 var(--font-body)',
      color: '#A0522D'
    }
  }, "That username and passcode combination wasn't recognized."), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    type: "submit",
    style: {
      justifyContent: 'center'
    }
  }, "Sign In")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 13px/1.6 var(--font-body)',
      fontStyle: 'italic',
      color: 'var(--color-navy-40)',
      marginTop: 28
    }
  }, "Wireframe demo \u2014 sign in with ", /*#__PURE__*/React.createElement("strong", null, "madison"), " / ", /*#__PURE__*/React.createElement("strong", null, "dutchmans"), ". In production each editor has private credentials."))));
}

/* ---- The editor ---- */
function NewsEditor({
  onNav
}) {
  const [draft, setDraft] = useAdminState(() => NewsStore.load());
  const [savedAt, setSavedAt] = useAdminState(0); // increments to flash "Saved"
  const [dirty, setDirty] = useAdminState(false);
  const touch = next => {
    setDraft(next);
    setDirty(true);
  };
  const setFeatured = patch => touch({
    ...draft,
    featured: {
      ...draft.featured,
      ...patch
    }
  });
  const setArticle = (i, patch) => {
    const articles = draft.articles.map((a, k) => k === i ? {
      ...a,
      ...patch
    } : a);
    touch({
      ...draft,
      articles
    });
  };
  const move = (i, dir) => {
    const j = i + dir;
    if (j < 0 || j >= draft.articles.length) return;
    const articles = [...draft.articles];
    const [it] = articles.splice(i, 1);
    articles.splice(j, 0, it);
    touch({
      ...draft,
      articles
    });
  };
  const remove = i => touch({
    ...draft,
    articles: draft.articles.filter((_, k) => k !== i)
  });
  const add = () => touch({
    ...draft,
    articles: [{
      id: 'a' + Math.random().toString(36).slice(2, 9),
      img: NewsStore.images[0],
      tag: 'Club News',
      date: '',
      title: 'New story title',
      excerpt: ''
    }, ...draft.articles]
  });
  const save = () => {
    NewsStore.save(draft);
    setDirty(false);
    setSavedAt(savedAt + 1);
  };
  const resetAll = () => {
    if (!window.confirm('Restore the original News content? Your edits in this browser will be discarded.')) return;
    NewsStore.reset();
    setDraft(NewsStore.load());
    setDirty(false);
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "section-tight surface-bone",
    style: {
      paddingTop: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      maxWidth: 880
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-rule",
    style: {
      marginBottom: 28
    }
  }, "Featured Story"), /*#__PURE__*/React.createElement(ArticleCard, {
    a: draft.featured,
    onChange: setFeatured,
    excerptRows: 3
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginTop: 72,
      marginBottom: 28,
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-rule"
  }, "Latest Stories \u2014 ", draft.articles.length), /*#__PURE__*/React.createElement("a", _extends({}, actionProps(add), {
    className: "arrow-link",
    style: {
      color: 'var(--color-club-navy)'
    }
  }), "Add a Story", /*#__PURE__*/React.createElement("img", {
    src: "assets/arrow-link.png",
    alt: ""
  }))), draft.articles.map((a, i) => /*#__PURE__*/React.createElement(ArticleCard, {
    key: a.id,
    a: a,
    onChange: patch => setArticle(i, patch),
    onMoveUp: i > 0 ? () => move(i, -1) : null,
    onMoveDown: i < draft.articles.length - 1 ? () => move(i, 1) : null,
    onRemove: () => remove(i),
    index: i
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 28,
      flexWrap: 'wrap',
      marginTop: 56,
      paddingTop: 32,
      borderTop: '1px solid rgba(201,165,92,0.35)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: save,
    className: "btn btn-primary"
  }, "Save & Publish"), savedAt > 0 && !dirty && /*#__PURE__*/React.createElement("span", {
    key: savedAt,
    style: {
      font: '500 12px/1 var(--font-body)',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--color-champagne)',
      animation: 'fadeIn 400ms var(--ease-club)'
    }
  }, "Saved \u2014 live on the News page"), dirty && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 12px/1 var(--font-body)',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--color-navy-40)'
    }
  }, "Unsaved changes"), /*#__PURE__*/React.createElement("a", _extends({}, actionProps(resetAll), {
    style: {
      marginLeft: 'auto',
      font: '400 13px/1 var(--font-body)',
      color: 'var(--color-navy-40)',
      textDecoration: 'underline',
      cursor: 'pointer'
    }
  }), "Restore original content")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 13px/1.6 var(--font-body)',
      fontStyle: 'italic',
      color: 'var(--color-navy-40)',
      marginTop: 24
    }
  }, "Wireframe note: edits publish to this browser only (saved locally), which is enough to demo the workflow. The production build connects this editor to a database so changes publish for every visitor.")));
}

/* One editable story card */
function ArticleCard({
  a,
  onChange,
  onMoveUp,
  onMoveDown,
  onRemove,
  index,
  excerptRows = 2
}) {
  const hasTools = onRemove || onMoveUp || onMoveDown;
  return /*#__PURE__*/React.createElement("div", {
    className: "admin-card"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 120,
      aspectRatio: '1/1',
      overflow: 'hidden',
      borderRadius: 2
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: a.img,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("select", {
    value: a.img,
    "aria-label": "Article photo",
    onChange: e => onChange({
      img: e.target.value
    }),
    style: {
      marginTop: 10,
      width: 120,
      font: '400 12px/1.3 var(--font-body)',
      color: 'var(--color-navy-70)',
      border: '1px solid var(--color-mist)',
      background: 'transparent',
      padding: '6px 4px',
      borderRadius: 2,
      cursor: 'pointer'
    }
  }, NewsStore.images.map(src => /*#__PURE__*/React.createElement("option", {
    key: src,
    value: src
  }, src.replace('assets/', '').replace('.jpg', ''))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "admin-field-row"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", {
    className: "field-label"
  }, "Tag"), /*#__PURE__*/React.createElement("input", {
    className: "field-input",
    value: a.tag,
    onChange: e => onChange({
      tag: e.target.value
    })
  })), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", {
    className: "field-label"
  }, "Date"), /*#__PURE__*/React.createElement("input", {
    className: "field-input",
    value: a.date,
    onChange: e => onChange({
      date: e.target.value
    }),
    placeholder: "Jun 2026"
  }))), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", {
    className: "field-label"
  }, "Headline"), /*#__PURE__*/React.createElement("input", {
    className: "field-input",
    value: a.title,
    onChange: e => onChange({
      title: e.target.value
    })
  })), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", {
    className: "field-label"
  }, "Excerpt"), /*#__PURE__*/React.createElement("textarea", {
    className: "field-input",
    rows: excerptRows,
    value: a.excerpt || '',
    onChange: e => onChange({
      excerpt: e.target.value
    }),
    style: {
      resize: 'vertical'
    }
  })), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", {
    className: "field-label"
  }, "Link (URL)"), /*#__PURE__*/React.createElement("input", {
    className: "field-input",
    type: "url",
    value: a.url || '',
    onChange: e => onChange({
      url: e.target.value
    }),
    placeholder: "https://\u2026  (leave blank for coverage with no link)"
  })), hasTools && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center'
    }
  }, onMoveUp && /*#__PURE__*/React.createElement(AdminTool, {
    label: "\u2191 Move up",
    onClick: onMoveUp
  }), onMoveDown && /*#__PURE__*/React.createElement(AdminTool, {
    label: "\u2193 Move down",
    onClick: onMoveDown
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }), onRemove && /*#__PURE__*/React.createElement(AdminTool, {
    label: "Remove",
    onClick: onRemove,
    danger: true
  }))));
}
function AdminTool({
  label,
  onClick,
  danger
}) {
  return /*#__PURE__*/React.createElement("a", _extends({}, actionProps(onClick), {
    style: {
      font: '500 11px/1 var(--font-body)',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      cursor: 'pointer',
      textDecoration: 'none',
      color: danger ? '#A0522D' : 'var(--color-navy-70)',
      padding: '8px 0'
    }
  }), label);
}
window.AdminPage = AdminPage;
