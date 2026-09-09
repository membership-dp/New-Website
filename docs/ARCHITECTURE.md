# Architecture

## Boot sequence

`index.html` is the whole entry point. It loads, in order:

1. **React 18 + ReactDOM** — UMD production builds from unpkg, as `window.React`
   and `window.ReactDOM`.
2. **`components/*.js`** — each attaches its component to `window`.
3. **`pages/*.js`** — each attaches its page component to `window`.
4. **`app.js`** — last, because it references everything above.

Every script tag is `defer`, which preserves order and keeps them off the
critical rendering path. There are no ES modules and no imports; components find
each other as globals. That is why every source file ends with a line like:

```js
window.GolfPage = GolfPage;
```

Adding a component without that line is the usual cause of "X is not defined".

## Routing

There is no router and no URL routing. `app.jsx` holds a `route` string in React
state and switches on it:

```jsx
{route === 'golf' && <GolfPage onNav={onNav} />}
```

`onNav('golf')` changes the route and scrolls to top. Every page receives `onNav`
so it can link anywhere. Two special values:

- `onNav('login')` opens the member-portal dialog instead of navigating.
- `onNav('admin')` reaches the Club Admin editor. It is linked from the footer.

Route and splash stage persist in `sessionStorage` (`dp-route`, `dp-stage`), so a
refresh keeps you where you were.

**Consequence:** pages have no shareable URLs. `/golf` does not exist; there is
only `/`. If the club ever needs deep links, share links, or per-page SEO, this
is the thing that has to change — see [DEPLOYMENT.md](DEPLOYMENT.md).

## The splash gate

`components/Splash.jsx` renders first and covers the site until the visitor
clicks **Enter**. It is a presentation device, not access control — it stores a
flag in `sessionStorage` and shows the site. Nothing is protected by it.

## Shared building blocks

`components/Blocks.jsx` holds the reusable layout pieces. Most pages are
assembled almost entirely from these, which is what keeps the pages consistent:

| Block | Used for |
|---|---|
| `LayeredCallout` | The signature block: large photo, offset text panel, optional small overlapping image and CTA. `flipped` mirrors it; `dark` inverts the text for satin sections. |
| `PhotoGrid` | Editorial gallery grid. |
| `RevealGallery` | Auto-advancing image sequence. |
| `ThreePanel` | Three-image rotating panel. |
| `TierColumns` | The membership tier columns (CSS subgrid, so all rows align). |
| `InstagramStrip` | Homepage social grid — placeholder images today. |
| `ZoomHero` | Homepage hero. Supports a still poster or a scrubbed video. |
| `DP_TIERS` | The canonical membership tier copy, used by the Membership page. |

`components/Motion.jsx` holds `Parallax`, `Tilt`, `InView`, `CountUp`, and
`actionProps` (which makes a non-`<a>` element behave like a link for keyboard
and screen-reader users). `components/Reveal.jsx` is the scroll-in fade used
almost everywhere, with a `delay` prop for staggering.

Everything in `Motion.jsx` and `Reveal.jsx` respects
`prefers-reduced-motion: reduce` and degrades to no animation.

## Sections and surfaces

Pages are built from `<section>` elements carrying a surface class:

- `surface-white`, `surface-bone` — the two light grounds
- `surface-satin` — the dark navy "satin fold" chapters, with a `Parallax`
  sheen layer inside
- `full-bleed-quote` — an edge-to-edge photo with an overlaid line

Chapters are numbered with the `folio` class (`No. I — The Club`). That numbering
is editorial, not automatic: if you insert a chapter, renumber the ones after it
by hand.

## Design system

Everything lives in **`styles/colors_and_type.css`** as custom properties.
Change a colour or a type size there and it changes everywhere.

- `--color-club-navy` is the primary. `--color-pennant-yellow` is reserved for
  the logo and the primary CTA only — the file marks it "sacred" for a reason.
- `--color-champagne` / `--color-champagne-bright` are the gold accents used for
  emphasised words and hairlines.
- `--font-display` is `freight-big-pro`; `--font-body` is `sweet-sans-pro`. Both
  come from the club's Adobe Fonts kit — see [DEPLOYMENT.md](DEPLOYMENT.md).
- The type scale is defined as `font` shorthands (`--type-display-xl`, etc.) and
  applied through classes like `.display-xl`, `.display-lg`, `.body-text`.

**`styles/site.css`** holds layout, components, and breakpoints. Notable ones:

- `1340px` — nav gaps tighten
- `1240px` — desktop nav swaps to the hamburger drawer
- `960px` — grids collapse to a single column

The header is filled navy at the top of the page and transitions to bone
(`.is-scrolled`) once you scroll.
