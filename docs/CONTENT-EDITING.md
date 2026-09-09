# Editing content

All copy lives **inside the page files**. There is no CMS and no content JSON —
with one exception, "In the News", which has its own editor
([IN-THE-NEWS.md](IN-THE-NEWS.md)).

So: find the page, edit the text, run `node build.cjs`, bump `?v=`. See
[BUILD.md](BUILD.md).

---

## Where each page lives

| On the site | File |
|---|---|
| Splash / Enter screen | `components/Splash.jsx` |
| Home | `pages/Home.jsx` |
| Golf | `pages/Golf.jsx` |
| Instruction | `pages/Instruction.jsx` |
| Racquet Sports | `pages/Racquets.jsx` |
| Location | `pages/Location.jsx` |
| Guest Information | `pages/Guests.jsx` |
| In the News | `pages/News.jsx` (+ `components/NewsStore.jsx`) |
| Membership | `pages/Membership.jsx` |
| Club Admin | `pages/Admin.jsx` |
| Top navigation | `components/Header.jsx` |
| Footer | `components/Footer.jsx` |

## Page contents at a glance

**Home** — hero → tagline → *No. I The Club* (three pillars) → The Atmosphere
quote → *No. II The Course* → *No. III The Racquet Club* → *No. IV The Location*
→ Instagram strip → *No. V Membership* CTA.

**Golf** — hero → stat strip → "No tee times" quote → Practice → Elite
Instruction (links to the Instruction page) → Club Fitting → Caddie Program →
membership pathways → course gallery → CTA.

**Instruction** — hero → *No. I The Team* (coach cards) → *No. II The Practice
Grounds* → *No. III Performance Training* → *No. IV Future Vision* (the Golf
Performance Center) → CTA. Reached from
the Golf page's "Learn More" and from the footer; deliberately **not** in the top
nav.

**Racquets** — hero → court-count stats → The Courts → Padel → Beyond the
Baseline → court gallery.

**Location** — hero → travel-time strip → Air Access → The Island & Worth Avenue
→ The Belgrove Resort & Spa → Downtown & CityPlace → Palm Beach gallery → closing
quote.

**Guests** — hero → "Before You Arrive" → six guest notes → "Finding Us".

**Membership** — hero → five tier columns → lifestyle gallery → inquiry form.

## Common edits

### Change a headline or paragraph

Find the text in the page file and edit it in place. Watch for two things:

- Apostrophes in JSX strings. `"Dutchman's Pipe"` in double quotes is fine;
  `'Dutchman's Pipe'` is a syntax error. Most strings here use double quotes or a
  typographic apostrophe (`’`) for exactly this reason.
- `<br/>` is used to control line breaks in display headlines. Keep it if the
  line break is intentional.

### Swap an image

1. Put the new file in `assets/`.
2. Point the page at it — either `lgImg="assets/new-name.jpg"` on a
   `LayeredCallout`, a `src=` on an `<img>`, or a `backgroundImage` URL on a hero.

Sizing conventions, so a new photo matches its neighbours:

| Where | Aspect | Notes |
|---|---|---|
| Coach headshots (`pages/Instruction.jsx`) | **3:4**, 600×800 | Uncropped — the frame is `aspectRatio: '3/4'`. |
| Home pillar cards | **4:5** | `photo-frame` with `aspectRatio: '4/5'`. |
| `LayeredCallout` large image | landscape | Roughly 4:3 to 3:2 reads best. |
| Heroes | wide landscape | Centre-weighted; the top and bottom get cropped at narrow widths. |

Keep JPEGs around 1MB or under. Several existing files are close to that ceiling;
anything much larger noticeably slows the page.

Aim for descriptive filenames (`clubfitting-station.jpg`, not `DSC01432.jpg`) —
and **check an image's contents before reusing it**, because filenames on this
project have not always described what is in the picture.

### Add or reorder a membership tier

- **Membership page**: edit `DP_TIERS` in `components/Blocks.jsx`. Each entry is
  `{ name, tag, body, audience }`.
- **Golf page**: edit `golfTiers` at the top of `pages/Golf.jsx`. This is a
  separate, shorter set on purpose — the Golf page shows four tiers, the
  Membership page shows five.

Changing one does not change the other. If a tier's copy is meant to match in
both places, edit both.

The columns use CSS subgrid so every tier's rows line up. Adding a sixth tier
means updating `--tier-cols` in `styles/site.css`.

### Add a coach to the Instruction page

Add an entry to the `coaches` array at the top of `pages/Instruction.jsx`:

```jsx
{
  img: 'assets/coach-name.jpg',
  name: 'Full Name',
  role: 'Title',
  body: 'Bio paragraph.',
},
```

The grid is three across. Keeping the count a multiple of three keeps the rows
full. The reveal stagger (`delay={(i % 3) * 120}`) restarts each row, so no extra
work is needed.

### Change navigation

`components/Header.jsx` has two arrays:

- `navItems` — the four primary links (Golf, Racquets, Location, Membership)
- `navStack` — the smaller secondary group (Villas, In the News, Guest
  Information). An entry with an `href` becomes an external link; a `short`
  property gives it a shorter desktop label.

The mobile drawer renders `[home, ...navItems, ...navStack]`, so adding to
either array covers both.

Footer links are grouped by column in `components/Footer.jsx`.
