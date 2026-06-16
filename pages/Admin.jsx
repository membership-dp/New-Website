// pages/Admin.jsx — "In the News" editor (wireframe CMS).
// A unique-login admin area where the club edits the News page content:
// featured story + article list (title, excerpt, tag, date, photo; add /
// remove / reorder). WIREFRAME SCOPE: the login is a demo credential and
// edits persist in this browser via localStorage (NewsStore). Production
// replaces both with real auth + a database — the editor UI stays.
const { useState: useAdminState } = React;

const DP_ADMIN_USER = 'madison';
const DP_ADMIN_PASS = 'dutchmans';

function AdminPage({ onNav }) {
  const [authed, setAuthed] = useAdminState(() => {
    try { return sessionStorage.getItem('dp-admin') === 'in'; } catch (e) { return false; }
  });
  const signIn = () => { try { sessionStorage.setItem('dp-admin', 'in'); } catch (e) {} setAuthed(true); };
  const signOut = () => { try { sessionStorage.removeItem('dp-admin'); } catch (e) {} setAuthed(false); };

  return (
    <div className="page-shell">
      {/* Satin masthead — dark, so the fixed light header reads on arrival */}
      <section className="surface-satin" style={{ padding: 'calc(var(--header-height) + 64px) var(--gutter) 56px' }}>
        <Parallax speed={-0.25} className="satin-sheen" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="eyebrow-rule" style={{ color: 'rgba(245,241,232,0.78)', marginBottom: 24 }}>
            Club Admin
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
            <h1 className="display-md" style={{ color: 'var(--color-bone)' }}>
              In the News — Editor
            </h1>
            {authed && (
              <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
                <a {...actionProps(() => onNav('news'))} className="arrow-link" style={{ color: 'rgba(245,241,232,0.85)', borderColor: 'var(--color-champagne)' }}>
                  View News Page
                  <img src="assets/arrow-link.png" style={{ filter: 'brightness(0) invert(1)' }} alt="" />
                </a>
                <a {...actionProps(signOut)} style={{
                  font: '500 11px/1 var(--font-body)', letterSpacing: '0.22em',
                  textTransform: 'uppercase', color: 'rgba(245,241,232,0.6)',
                  cursor: 'pointer', textDecoration: 'none',
                }}>
                  Sign Out
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {authed ? <NewsEditor onNav={onNav} /> : <AdminLogin onSuccess={signIn} />}
    </div>
  );
}

/* ---- Login gate (demo credential for the wireframe) ---- */
function AdminLogin({ onSuccess }) {
  const [user, setUser] = useAdminState('');
  const [pass, setPass] = useAdminState('');
  const [error, setError] = useAdminState(false);
  const submit = (e) => {
    e.preventDefault();
    if (user.trim().toLowerCase() === DP_ADMIN_USER && pass === DP_ADMIN_PASS) onSuccess();
    else setError(true);
  };
  return (
    <section className="section surface-bone">
      <div className="container" style={{ maxWidth: 520 }}>
        <Reveal>
          <h2 className="display-sm" style={{ color: 'var(--color-club-navy)' }}>
            Editor sign in.
          </h2>
          <p className="body-text" style={{ marginTop: 16, color: 'var(--color-navy-70)' }}>
            This area is reserved for club staff. Each editor receives a unique
            login; changes publish to the In the News page.
          </p>
          <form onSubmit={submit} style={{ display: 'grid', gap: 28, marginTop: 40 }}>
            <label>
              <span className="field-label">Username</span>
              <input className="field-input" value={user} onChange={(e) => { setUser(e.target.value); setError(false); }} autoComplete="username" />
            </label>
            <label>
              <span className="field-label">Passcode</span>
              <input className="field-input" type="password" value={pass} onChange={(e) => { setPass(e.target.value); setError(false); }} autoComplete="current-password" />
            </label>
            {error && (
              <div style={{ font: '400 14px/1.5 var(--font-body)', color: '#A0522D' }}>
                That username and passcode combination wasn't recognized.
              </div>
            )}
            <button className="btn btn-primary" type="submit" style={{ justifyContent: 'center' }}>
              Sign In
            </button>
          </form>
          <p style={{
            font: '400 13px/1.6 var(--font-body)', fontStyle: 'italic',
            color: 'var(--color-navy-40)', marginTop: 28,
          }}>
            Wireframe demo — sign in with <strong>madison</strong> / <strong>dutchmans</strong>.
            In production each editor has private credentials.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---- The editor ---- */
function NewsEditor({ onNav }) {
  const [draft, setDraft] = useAdminState(() => NewsStore.load());
  const [savedAt, setSavedAt] = useAdminState(0); // increments to flash "Saved"
  const [dirty, setDirty] = useAdminState(false);

  const touch = (next) => { setDraft(next); setDirty(true); };
  const setFeatured = (patch) => touch({ ...draft, featured: { ...draft.featured, ...patch } });
  const setArticle = (i, patch) => {
    const articles = draft.articles.map((a, k) => (k === i ? { ...a, ...patch } : a));
    touch({ ...draft, articles });
  };
  const move = (i, dir) => {
    const j = i + dir;
    if (j < 0 || j >= draft.articles.length) return;
    const articles = [...draft.articles];
    const [it] = articles.splice(i, 1);
    articles.splice(j, 0, it);
    touch({ ...draft, articles });
  };
  const remove = (i) => touch({ ...draft, articles: draft.articles.filter((_, k) => k !== i) });
  const add = () => touch({
    ...draft,
    articles: [
      { id: 'a' + Math.random().toString(36).slice(2, 9), img: NewsStore.images[0], tag: 'Club News', date: '', title: 'New story title', excerpt: '' },
      ...draft.articles,
    ],
  });
  const save = () => { NewsStore.save(draft); setDirty(false); setSavedAt(savedAt + 1); };
  const resetAll = () => {
    if (!window.confirm('Restore the original News content? Your edits in this browser will be discarded.')) return;
    NewsStore.reset();
    setDraft(NewsStore.load());
    setDirty(false);
  };

  return (
    <section className="section-tight surface-bone" style={{ paddingTop: 56 }}>
      <div className="container" style={{ maxWidth: 880 }}>

        {/* Featured story */}
        <div className="eyebrow-rule" style={{ marginBottom: 28 }}>Featured Story</div>
        <ArticleCard
          a={draft.featured}
          onChange={setFeatured}
          excerptRows={3}
        />

        {/* Article list */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 72, marginBottom: 28, gap: 24, flexWrap: 'wrap' }}>
          <div className="eyebrow-rule">Latest Stories — {draft.articles.length}</div>
          <a {...actionProps(add)} className="arrow-link" style={{ color: 'var(--color-club-navy)' }}>
            Add a Story
            <img src="assets/arrow-link.png" alt="" />
          </a>
        </div>
        {draft.articles.map((a, i) => (
          <ArticleCard
            key={a.id}
            a={a}
            onChange={(patch) => setArticle(i, patch)}
            onMoveUp={i > 0 ? () => move(i, -1) : null}
            onMoveDown={i < draft.articles.length - 1 ? () => move(i, 1) : null}
            onRemove={() => remove(i)}
            index={i}
          />
        ))}

        {/* Action bar */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 28, flexWrap: 'wrap',
          marginTop: 56, paddingTop: 32,
          borderTop: '1px solid rgba(201,165,92,0.35)',
        }}>
          <button onClick={save} className="btn btn-primary">Save &amp; Publish</button>
          {savedAt > 0 && !dirty && (
            <span key={savedAt} style={{
              font: '500 12px/1 var(--font-body)', letterSpacing: '0.18em',
              textTransform: 'uppercase', color: 'var(--color-champagne)',
              animation: 'fadeIn 400ms var(--ease-club)',
            }}>
              Saved — live on the News page
            </span>
          )}
          {dirty && (
            <span style={{
              font: '500 12px/1 var(--font-body)', letterSpacing: '0.18em',
              textTransform: 'uppercase', color: 'var(--color-navy-40)',
            }}>
              Unsaved changes
            </span>
          )}
          <a {...actionProps(resetAll)} style={{
            marginLeft: 'auto',
            font: '400 13px/1 var(--font-body)', color: 'var(--color-navy-40)',
            textDecoration: 'underline', cursor: 'pointer',
          }}>
            Restore original content
          </a>
        </div>
        <p style={{
          font: '400 13px/1.6 var(--font-body)', fontStyle: 'italic',
          color: 'var(--color-navy-40)', marginTop: 24,
        }}>
          Wireframe note: edits publish to this browser only (saved locally), which
          is enough to demo the workflow. The production build connects this editor
          to a database so changes publish for every visitor.
        </p>
      </div>
    </section>
  );
}

/* One editable story card */
function ArticleCard({ a, onChange, onMoveUp, onMoveDown, onRemove, index, excerptRows = 2 }) {
  const hasTools = onRemove || onMoveUp || onMoveDown;
  return (
    <div className="admin-card">
      {/* photo + picker */}
      <div>
        <div style={{ width: 120, aspectRatio: '1/1', overflow: 'hidden', borderRadius: 2 }}>
          <img src={a.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <select
          value={a.img}
          aria-label="Article photo"
          onChange={(e) => onChange({ img: e.target.value })}
          style={{
            marginTop: 10, width: 120,
            font: '400 12px/1.3 var(--font-body)', color: 'var(--color-navy-70)',
            border: '1px solid var(--color-mist)', background: 'transparent',
            padding: '6px 4px', borderRadius: 2, cursor: 'pointer',
          }}
        >
          {NewsStore.images.map((src) => (
            <option key={src} value={src}>{src.replace('assets/', '').replace('.jpg', '')}</option>
          ))}
        </select>
      </div>

      {/* fields */}
      <div style={{ display: 'grid', gap: 18 }}>
        <div className="admin-field-row">
          <label>
            <span className="field-label">Tag</span>
            <input className="field-input" value={a.tag} onChange={(e) => onChange({ tag: e.target.value })} />
          </label>
          <label>
            <span className="field-label">Date</span>
            <input className="field-input" value={a.date} onChange={(e) => onChange({ date: e.target.value })} placeholder="Jun 2026" />
          </label>
        </div>
        <label>
          <span className="field-label">Headline</span>
          <input className="field-input" value={a.title} onChange={(e) => onChange({ title: e.target.value })} />
        </label>
        <label>
          <span className="field-label">Excerpt</span>
          <textarea className="field-input" rows={excerptRows} value={a.excerpt} onChange={(e) => onChange({ excerpt: e.target.value })} style={{ resize: 'vertical' }} />
        </label>
        {hasTools && (
          <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
            {onMoveUp && <AdminTool label="↑ Move up" onClick={onMoveUp} />}
            {onMoveDown && <AdminTool label="↓ Move down" onClick={onMoveDown} />}
            <span style={{ marginLeft: 'auto' }} />
            {onRemove && <AdminTool label="Remove" onClick={onRemove} danger />}
          </div>
        )}
      </div>
    </div>
  );
}

function AdminTool({ label, onClick, danger }) {
  return (
    <a {...actionProps(onClick)} style={{
      font: '500 11px/1 var(--font-body)', letterSpacing: '0.16em',
      textTransform: 'uppercase', cursor: 'pointer', textDecoration: 'none',
      color: danger ? '#A0522D' : 'var(--color-navy-70)',
      padding: '8px 0',
    }}>
      {label}
    </a>
  );
}

window.AdminPage = AdminPage;
