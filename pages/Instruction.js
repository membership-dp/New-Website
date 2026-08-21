function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// pages/Instruction.jsx — Instruction (club 8/4). Reached from the "Learn More"
// link in the Golf page's Elite Instruction chapter and from the footer nav —
// deliberately NOT in the top nav. Copy is Madison's, verbatim.
function InstructionPage({
  onNav
}) {
  const coaches = [{
    img: 'assets/coach-kirk.jpg',
    name: 'Kevin Kirk',
    role: 'Director of Performance',
    body: "Recognized as one of the country's premier instructors, Kevin Kirk is a GOLF Magazine Top 100 Teacher and one of Golf Digest's 50 Best Teachers in America. His performance-based approach combines biomechanics, technology, and personalized coaching to help golfers of every level reach their full potential."
  }, {
    img: 'assets/coach-stenzel.jpg',
    name: 'Kellie Stenzel',
    role: 'Director of Instruction',
    body: 'A Golf Digest Top 50 Teacher, Kellie Stenzel is widely respected for her personalized teaching philosophy and ability to help golfers of all skill levels build confidence and consistency. Her experience spans recreational players, accomplished amateurs, and elite competitors.'
  }, {
    img: 'assets/coach-como.jpg',
    name: 'Chris Como',
    role: 'Golf Ambassador',
    body: "One of the most respected coaches in the game, Chris Como is recognized as one of Golf Digest's 50 Best Teachers in America and has guided major champions and some of the world's top players throughout his career. As Golf Ambassador, he brings his innovative approach to performance and player development to Dutchman's Pipe through exclusive instructional programming and member experiences."
  },
  // Added 8/5 after Shannon's review — appended in the order Madison listed.
  {
    img: 'assets/coach-cain.jpg',
    name: 'Matt Cain',
    role: 'Director of Golf',
    body: "Matt Cain brings experience from some of the country's most respected private clubs, including Yellowstone Club, Victoria National, and Spanish Oaks. As Director of Golf, he is committed to creating exceptional member experiences while fostering a welcoming culture where personalized service, instruction, and the traditions of the game come together."
  }, {
    img: 'assets/coach-rowles.jpg',
    name: 'Terry Rowles',
    role: 'Performance Coach',
    body: 'A GOLF Magazine Top 100 Teacher and Golf Digest Top 50 Instructor, Terry Rowles has spent more than three decades coaching tour professionals, elite amateurs, and recreational golfers. His individualized, movement-based teaching philosophy simplifies the game and helps players build lasting confidence, consistency, and performance.'
  },
  // GM review 8/7: Mark Sweeney added, Mark Carter removed.
  {
    img: 'assets/coach-sweeney.jpg',
    name: 'Mark Sweeney',
    role: 'AimPoint Founder & Performance Coach',
    body: "Founder of the revolutionary AimPoint green-reading system, Mark Sweeney is one of the game's leading experts in putting and green reading. His methods are trusted by many of the world's top professional golfers, and his performance-based approach helps players develop a clearer understanding of slope, speed, and decision-making on the greens."
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "page-shell"
  }, /*#__PURE__*/React.createElement("section", {
    className: "page-hero page-hero-short",
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Parallax, {
    speed: 0.18,
    style: {
      position: 'absolute',
      inset: '-9% 0',
      zIndex: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: `url('assets/instruction-hero.jpg')`,
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
  }, "Instruction"), /*#__PURE__*/React.createElement("h1", {
    className: "display-xl",
    style: {
      color: 'var(--color-bone)',
      maxWidth: 1100,
      marginBottom: 0
    }
  }, "Personalized coaching.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--color-champagne-bright)'
    }
  }, "World-class expertise.")))), /*#__PURE__*/React.createElement("section", {
    className: "section surface-white"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "folio"
  }, "No. I \u2014 The Team"), /*#__PURE__*/React.createElement("h2", {
    className: "display-lg",
    style: {
      color: 'var(--color-club-navy)',
      maxWidth: 900
    }
  }, "Meet our instruction team."), /*#__PURE__*/React.createElement("p", {
    className: "body-text",
    style: {
      color: 'var(--color-navy-70)',
      marginTop: 28,
      maxWidth: 820
    }
  }, "At Dutchman's Pipe, instruction is designed around the individual. Supported by exceptional practice facilities, modern technology, and proven teaching methods, our nationally recognized coaches provide personalized guidance tailored to every member's goals. Meet the team behind one of the country's premier instructional programs.")), /*#__PURE__*/React.createElement("div", {
    className: "three-up",
    style: {
      marginTop: 88
    }
  }, coaches.map((c, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: c.name,
    delay: i % 3 * 120,
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "photo-frame",
    style: {
      aspectRatio: '3/4'
    }
  }, /*#__PURE__*/React.createElement(Parallax, {
    speed: 0.08,
    className: "img-drift"
  }, /*#__PURE__*/React.createElement("img", {
    src: c.img,
    alt: `${c.name}, ${c.role}`,
    loading: "lazy",
    decoding: "async"
  }))), /*#__PURE__*/React.createElement("h3", {
    className: "display-sm",
    style: {
      color: 'var(--color-club-navy)',
      marginTop: 28,
      fontSize: 26
    }
  }, c.name), /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-rule",
    style: {
      marginTop: 14
    }
  }, c.role), /*#__PURE__*/React.createElement("p", {
    className: "body-text",
    style: {
      color: 'var(--color-navy-70)',
      marginTop: 18,
      fontSize: 15
    }
  }, c.body))))))), /*#__PURE__*/React.createElement("section", {
    className: "section surface-satin"
  }, /*#__PURE__*/React.createElement(Parallax, {
    speed: -0.25,
    className: "satin-sheen"
  }), /*#__PURE__*/React.createElement("div", {
    className: "satin-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "folio",
    style: {
      color: 'var(--color-champagne-bright)'
    }
  }, "No. II \u2014 The Practice Grounds"))), /*#__PURE__*/React.createElement(LayeredCallout, {
    flipped: true,
    dark: true,
    eyebrow: "Practice Facilities",
    title: "Designed for performance.",
    body: "Beyond the course, members enjoy exceptional practice facilities designed to develop every aspect of their game. The golf campus features a 315-yard driving range with four target greens and a PGA Tour-inspired wedge matrix, a 12,000-square-foot putting green, and a two-acre short game complex with multiple greens and bunkers for situational practice. Paired with personalized instruction and advanced technology, every practice session is designed for meaningful improvement.",
    lgImg: "assets/instruction-practice.jpg",
    motif: "pipe"
  }))), /*#__PURE__*/React.createElement("section", {
    className: "section surface-bone"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "folio"
  }, "No. III \u2014 Performance Training"))), /*#__PURE__*/React.createElement(LayeredCallout, {
    flipped: true,
    eyebrow: "Performance Training",
    title: "The Fitness Center.",
    body: "Our holistic approach to performance extends into the Fitness Center, where mobility, strength, stability, and functional movement complement golf instruction. By connecting physical performance with the golf swing, members can move more efficiently, build greater body awareness, and support their performance on the course.",
    lgImg: "assets/performance-training.jpg",
    motif: "pipe"
  })), /*#__PURE__*/React.createElement("section", {
    className: "section surface-white"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "folio"
  }, "No. IV \u2014 Future Vision"))), /*#__PURE__*/React.createElement(LayeredCallout, {
    eyebrow: "Future Vision",
    title: "The Golf Performance Center.",
    body: "Designed as the next evolution of the Club's instructional program, the future Golf Performance Center will feature two dedicated instructional bays and inviting indoor-outdoor gathering spaces, creating a vibrant community hub where members can learn, practice, connect, and enjoy the game year-round.",
    lgImg: "assets/performance-center.jpg",
    motif: "grass"
  })), /*#__PURE__*/React.createElement("section", {
    className: "full-bleed-quote",
    style: {
      minHeight: '60vh',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Parallax, {
    speed: 0.18,
    style: {
      position: 'absolute',
      inset: '-9% 0',
      zIndex: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: `url('assets/instruction-hero.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: '100%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 1,
      background: 'linear-gradient(rgba(15,25,40,0.55), rgba(15,25,40,0.82))'
    }
  }), /*#__PURE__*/React.createElement(Reveal, {
    style: {
      position: 'relative',
      zIndex: 2,
      maxWidth: 820,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "display-lg",
    style: {
      color: 'var(--color-bone)'
    }
  }, "The pursuit of better golf."), /*#__PURE__*/React.createElement("p", {
    className: "body-text",
    style: {
      color: 'rgba(245,241,232,0.82)',
      marginTop: 28,
      maxWidth: 620,
      marginInline: 'auto'
    }
  }, "Every member's path looks a little different. Ours begins with a conversation about yours."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement("a", _extends({}, actionProps(() => onNav('membership')), {
    className: "btn btn-ghost-light"
  }), "Request Membership Information")))));
}
window.InstructionPage = InstructionPage;
