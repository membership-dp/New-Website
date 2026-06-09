// pages/Membership.jsx
const { useState: useMemState } = React;

function MembershipPage({ onNav }) {
  const tiers = [
    {
      name: 'Full Golf',
      tag: 'Anchor',
      body: 'Unlimited access to the Jack Nicklaus Signature course played without tee times, the full racquet program, wellness facilities, and all club amenities.',
      audience: 'For members who wish to engage fully in every aspect of club life.',
    },
    {
      name: 'Next Generation',
      tag: 'Under 40',
      body: 'Long-term affiliation with progression to Full Golf Membership. Meaningful access today, a clear pathway within the club\u2019s future community.',
      audience: 'Reserved for members under 40.',
    },
    {
      name: 'Visiting',
      tag: 'Non-Resident',
      body: 'Tailored for non-residents, with limited access to the course, practice facilities, and select club amenities during their time in Palm Beach.',
      audience: 'For seasonal members and travelers.',
    },
    {
      name: 'Social',
      tag: 'Beyond the Fairways',
      body: 'Centers on racquet sports, wellness programming, dining, and the social calendar. The daily rhythm of the Club beyond the fairways.',
      audience: 'For racquet, wellness, and social members.',
    },
    {
      name: 'Corporate',
      tag: 'Executive',
      body: 'Designated access for multiple executives under one membership. An elevated setting to host clients, reward leadership, and build relationships.',
      audience: 'For organizations.',
    },
  ];

  const [submitted, setSubmitted] = useMemState(false);
  const [data, setData] = useMemState({
    firstName: '', lastName: '', email: '', phone: '',
    interest: 'Full Golf', residence: '', message: '',
  });
  const set = (k) => (e) => setData({ ...data, [k]: e.target.value });

  return (
    <div className="page-shell">
      {/* HERO — with drifting parallax background */}
      <section className="page-hero page-hero-short" style={{ overflow: 'hidden' }}>
        <Parallax speed={0.2} style={{ position: 'absolute', inset: '-9% 0', zIndex: 0 }}>
          <div style={{
            backgroundImage: `url('assets/hero-clubhouse.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%', height: '100%',
          }} />
        </Parallax>
        <div className="photo-scrim" style={{ zIndex: 1 }} />
        <div className="page-hero-inner hero-stagger" style={{ position: 'relative', zIndex: 2 }}>
          <div className="eyebrow-rule" style={{ color: 'rgba(245,241,232,0.85)', marginBottom: 32 }}>
            Membership
          </div>
          <h1 className="display-xl" style={{ color: 'var(--color-bone)', maxWidth: 1100 }}>
            By invitation. <em style={{ fontStyle: 'italic', color: 'var(--color-pennant-yellow)' }}>By design.</em>
          </h1>
          <span className="brush-stroke" style={{ opacity: 0.9, transform: 'none' }} />
          <p className="hero-sub" style={{
            color: 'rgba(245,241,232,0.84)',
            marginTop: 28, maxWidth: 720, marginBottom: 0,
          }}>
            Private club membership centered on golf, racquet sports, wellness, and a
            distinctly Palm Beach setting.
          </p>
        </div>
      </section>

      {/* INTRO — LayeredCallout signature module */}
      <section className="section surface-bone">
        <div className="container">
          <LayeredCallout
            lgImg="assets/hero-clubhouse.jpg"
            smImg="assets/hero-villa.jpg"
            motif="pipe"
            eyebrow="An Invitation"
            title="A club shaped around the lives of its members."
            body={[
              "Dutchman's Pipe is an invitation-only private club for those who expect more from their time: more access, more intention, more connection.",
              "From golf played without tee times to evenings on the padel courts and a dedicated wellness program, membership is shaped around an engaged Palm Beach lifestyle.",
            ]}
          />
        </div>
      </section>

      {/* WHAT MEMBERSHIP OFFERS — three pillars with image accents + motif backdrop */}
      <section className="section-tight surface-bone-95" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="callout-bg motif motif-grass" style={{
          '--motif': `url('/assets/motif-grass.svg?v=15')`,
          position: 'absolute', inset: 'auto 0 0 60%', height: '70%',
          maskPosition: 'center bottom', WebkitMaskPosition: 'center bottom',
          opacity: 0.32, pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative' }}>
          <Reveal>
            <div className="eyebrow-rule" style={{ marginBottom: 40 }}>What Membership Offers</div>
          </Reveal>
          <div className="three-up three-up-tight">
            {[
              { title: 'Golf', img: 'assets/hero-green.jpg', body: 'A Jack Nicklaus Signature course played without tee times. Performance-driven practice, Top 100 instruction, brand-agnostic club fitting.' },
              { title: 'Racquets', img: 'assets/tennis-serve.jpg', body: 'Four Har-Tru tennis courts, two pickleball courts, and two padel courts. Weekly clinics, mixers, and Glow Padel evenings.' },
              { title: 'Wellness', img: 'assets/hero-villa.jpg', body: 'Dedicated training spaces, group classes, and personal training. A holistic approach focused on strength, mobility, and long-term vitality.' },
            ].map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <div className="photo-frame" style={{ aspectRatio: '16/10', marginBottom: 24 }}>
                  <img src={p.img} alt="" />
                </div>
                <h3 style={{
                  font: '500 30px/1.15 var(--font-display)',
                  letterSpacing: '-0.02em',
                  color: 'var(--color-club-navy)',
                  margin: 0,
                }}>
                  {p.title}
                </h3>
                <div style={{
                  width: 32, height: 1,
                  background: 'var(--color-pennant-yellow)',
                  marginTop: 18, marginBottom: 22,
                }} />
                <p className="body-text" style={{ color: 'var(--color-navy-70)', margin: 0 }}>
                  {p.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERSHIP CATEGORIES — five-column tier row */}
      <section className="section surface-white">
        <div className="container">
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 24, marginBottom: 64 }}>
              <div>
                <div className="eyebrow-rule" style={{ marginBottom: 24 }}>Categories</div>
                <h2 className="display-md" style={{ color: 'var(--color-club-navy)', maxWidth: 720 }}>
                  Five pathways to membership.
                </h2>
              </div>
              <p className="body-text" style={{ color: 'var(--color-navy-70)', maxWidth: 380 }}>
                Each category is designed to match the rhythm of how you wish to engage
                with the Club.
              </p>
            </div>
          </Reveal>

          <Reveal>
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
                  <div style={{ width: 24, height: 1, background: 'var(--color-pennant-yellow)' }} />
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
          </Reveal>
        </div>
      </section>

      {/* INQUIRY FORM */}
      <section className="section surface-navy" id="inquiry">
        <div className="container">
          <div className="inquiry-page-grid">
            <Reveal>
              <div className="eyebrow-rule" style={{ marginBottom: 24, color: 'rgba(245,241,232,0.78)' }}>
                Membership Inquiry
              </div>
              <h2 className="display-md" style={{ color: 'var(--color-bone)' }}>
                Please introduce yourself.
              </h2>
              <p className="body-text" style={{ marginTop: 28, color: 'rgba(245,241,232,0.78)' }}>
                A member of our Membership team will be in touch personally. All inquiries are confidential.
              </p>
              <div style={{ marginTop: 48, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{
                  font: '500 11px/1 var(--font-body)',
                  letterSpacing: '0.24em', textTransform: 'uppercase',
                  color: 'var(--color-pennant-yellow)',
                }}>
                  Direct Contact
                </div>
                <div style={{ font: '400 16px/1.5 var(--font-body)', color: 'var(--color-bone)' }}>
                  Shannon Mattes
                </div>
                <div style={{ font: '400 15px/1.6 var(--font-body)', color: 'rgba(245,241,232,0.72)' }}>
                  Membership@dutchmanspipeclub.com<br/>
                  +1 772 633 3815
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              {submitted ? (
                <div style={{
                  border: '1px solid rgba(245,241,232,0.16)',
                  padding: '64px 48px',
                  textAlign: 'center',
                  borderRadius: 4,
                }}>
                  <h3 className="display-sm" style={{ color: 'var(--color-bone)' }}>
                    Your inquiry has been received.
                  </h3>
                  <p style={{
                    font: '400 16px/1.6 var(--font-body)',
                    color: 'rgba(245,241,232,0.72)',
                    marginTop: 20, maxWidth: 440, marginInline: 'auto',
                  }}>
                    A member of our Membership team will be in touch within two
                    business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="inquiry-form">
                  <FormField label="First Name" value={data.firstName} onChange={set('firstName')} required />
                  <FormField label="Last Name" value={data.lastName} onChange={set('lastName')} required />
                  <FormField label="Email" type="email" value={data.email} onChange={set('email')} required />
                  <FormField label="Phone" type="tel" value={data.phone} onChange={set('phone')} />
                  <FormField label="City of Residence" value={data.residence} onChange={set('residence')} span={2} />
                  <FormField label="Membership Interest" type="select" value={data.interest} onChange={set('interest')} span={2}
                    options={['Full Golf', 'Next Generation', 'Visiting', 'Social', 'Corporate']}
                  />
                  <FormField label="A Note (optional)" type="textarea" value={data.message} onChange={set('message')} span={2} />
                  <div style={{ gridColumn: '1 / -1', marginTop: 16 }}>
                    <button type="submit" className="btn btn-ghost-light">
                      Submit Inquiry
                      <img src="assets/arrow-link.png" style={{ height: 9, filter: 'brightness(0) invert(1)' }} alt="" />
                    </button>
                  </div>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

function FormField({ label, value, onChange, type = 'text', required, options, span = 1 }) {
  const labelStyle = {
    display: 'block',
    font: 'var(--type-eyebrow)',
    textTransform: 'uppercase',
    letterSpacing: '0.18em',
    color: 'rgba(245,241,232,0.6)',
    marginBottom: 12,
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
    transition: 'border-color 200ms var(--ease-club)',
  };
  const onFocus = (e) => { e.target.style.borderBottomColor = 'var(--color-pennant-yellow)'; };
  const onBlur  = (e) => { e.target.style.borderBottomColor = 'rgba(245,241,232,0.25)'; };

  return (
    <label style={{ gridColumn: span === 2 ? '1 / -1' : 'auto' }}>
      <span style={labelStyle}>{label}</span>
      {type === 'select' ? (
        <select value={value} onChange={onChange} onFocus={onFocus} onBlur={onBlur}
          style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}>
          {options.map((o) => <option key={o} style={{ color: '#000' }}>{o}</option>)}
        </select>
      ) : type === 'textarea' ? (
        <textarea rows={3} value={value} onChange={onChange} onFocus={onFocus} onBlur={onBlur}
          style={{ ...inputStyle, resize: 'vertical' }} />
      ) : (
        <input type={type} value={value} onChange={onChange} required={required} onFocus={onFocus} onBlur={onBlur}
          style={inputStyle} />
      )}
    </label>
  );
}

window.MembershipPage = MembershipPage;
