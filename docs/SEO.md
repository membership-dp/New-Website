# SEO & AEO

What is in place, and the two structural limits that cap how far it can go.

## In place

- **Title and meta description** describing the club, its location and its offering.
- **Canonical URL**, `robots` directive with `max-image-preview:large`.
- **Open Graph and Twitter cards** with a purpose-built 1200×630 share image
  (`assets/og-share.jpg`). Before this, sharing the link produced a bare URL
  with no preview.
- **JSON-LD structured data** in `index.html` — a `GolfCourse` /
  `SportsActivityLocation` node carrying the club's name, address, phone,
  email, founding year, service area, social profile, amenities, course facts
  (7,300 yards, 75.8 rating, 315-yard range, 12,000 sq ft green, two-acre short
  game complex) and the five membership categories, plus a `WebSite` node.
- **`robots.txt`** allowing everything except `/admin`, pointing at the sitemap.
- **`sitemap.xml`**.
- **A no-JS content fallback** inside `<div id="app">`. React replaces it on
  first paint, so users never see it, but crawlers and AI scrapers that do not
  execute JavaScript now read a factual summary of every section instead of an
  empty page.
- **Heading hierarchy** was already correct: exactly one `<h1>` per page, `<h2>`
  for chapters, `<h3>` for sub-items. `LayeredCallout` renders its title as an
  `<h2>`. No changes were needed.

Structured data matters more than usual here. AI answer engines lean heavily on
JSON-LD, and because ours is static in the HTML it is read without running any
JavaScript — which, given the two limits below, is currently the most reliable
route into an AI answer about the club.

## Limit 1 — the splash gate hides the site from crawlers

`app.jsx` starts at `stage: 'splash'` whenever `sessionStorage` is empty. A
crawler arrives with empty session storage **every single visit**, renders the
page, and sees a logo, a headline and an Enter button. It does not click.

So the only content Google can index from the rendered page is the splash
screen. The JSON-LD and the no-JS fallback are currently doing the heavy
lifting on their own.

**Fix:** render the site into the DOM underneath the splash and let the splash
sit over it as an overlay, rather than replacing it. Content then exists in the
DOM for crawlers while the visitor experience is unchanged. This is a change to
`app.jsx` and worth a deliberate decision, not a silent edit.

## Limit 2 — nine pages share one URL

There is no router. Golf, Racquets, Instruction, Location, Guests, News and
Membership are all `/`, held in React state (see
[ARCHITECTURE.md](ARCHITECTURE.md)).

That means:

- **No per-page titles or descriptions.** One title and one description have to
  cover the whole club. Everything in `index.html` today is written to that
  constraint.
- **No page can rank for its own topic.** "Private padel West Palm Beach"
  has no page to land on.
- **Nothing is shareable.** A link to the membership page cannot be sent.
- **No per-page analytics**, and no landing pages for paid campaigns.
- **The sitemap has one entry**, because one URL exists.

**Fix:** sync `route` to `window.history` and read it back on load, with a
Vercel rewrite per path (the `/admin` rewrite in `vercel.json` is the pattern).
Then give each route its own title, description, canonical and — where it fits
— its own schema node: `SportsActivityLocation` for Racquets, `Course` or
`Service` for Instruction, `FAQPage` for Guest Information.

Doing both fixes is what turns this from "correct metadata on one page" into
per-page SEO. Until then the ceiling is fixed no matter how good the tags are.

## Still outstanding

- **Geo coordinates** are deliberately absent from the JSON-LD rather than
  guessed. Add `geo` with the club's real latitude and longitude — it measurably
  helps local search.
- **Google Search Console** is not yet verified (domain property, DNS TXT —
  add it *alongside* the existing SPF record, never over it).
- **Google Business Profile** is not linked. For a physical club in a specific
  city, that is a bigger local-search lever than anything on the site.
- **Opening hours** were left out of the schema because they are not published
  anywhere on the site. Add `openingHoursSpecification` if the club wants them
  public.
