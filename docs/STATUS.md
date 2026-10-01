# Status

Where the site stands. Read alongside [DEPLOYMENT.md](DEPLOYMENT.md) and
[SEO.md](SEO.md).

**The site is live** at `https://www.dutchmanspipeclub.com`. The bare domain
redirects to `www`, SSL is issued, and DNS sits at Cloudflare while the domain
is registered at GoDaddy.

## Working

All nine pages are built, populated with the club's approved copy and
photography, and have been through many rounds of client review:

Home · Golf · Instruction · Racquet Sports · Location · Guest Information ·
In the News · Membership · Club Admin

Also complete:

- **Membership inquiry form** submits into the club's own HubSpot (portal
  `242324318`), creating a contact and triggering HubSpot's own notifications,
  so the club controls the recipient list without touching the site. Handles
  sending and error states, and drops honeypot spam.
- **Member Login** links to the club's Clubessential portal at
  `members.dutchmanspipeclub.com/login` from the header, mobile drawer and
  footer.
- **Instagram** shows the six most recent posts from `@dutchmanspipeclub`,
  rendered in the site's own markup — no third-party widget or stylesheet.
- **Analytics** — GA4, HubSpot tracking, and per-page virtual page views. See
  [ANALYTICS.md](ANALYTICS.md).
- **SEO** — metadata, structured data, share card, sitemap, robots.txt, and a
  verified Search Console property. See [SEO.md](SEO.md).
- Responsive down to mobile, with motion that respects
  `prefers-reduced-motion` throughout.
- Brand type wired to the club's Adobe Fonts kit.

## Known issues

**Body copy is not rendering in the brand typeface.** The club's body face is
Artifakt, which is not in Adobe kit `bux1rla` yet. `--font-body` already lists
Artifakt first, so it will start rendering the moment the font is added to that
kit — **no code change or deploy needed at that point**. Until then body text
falls back to a system sans. Headlines are unaffected.

Also in that kit: Freight Big Pro ships 300/400/600, but the site asks for 500
and 700 in places. Those headings substitute to the nearest available weight —
correct typeface, slightly wrong weight.

## Placeholder content

- **`assets/tennis-rally.jpg`** in the Racquets gallery is a stand-in. The
  intended photograph (`DSC01870`) arrived as a broken image and was never
  re-sent.
- **Seven media placements** in "In the News" have no article URL and render
  without a click-through until the links are supplied.

## Stubbed — interface only

**The Club Admin editor** (`pages/Admin.jsx`) still saves to the editor's own
browser via `localStorage`, so changes are not shared or published. It lives at
`/admin`, unlinked from the site. The passcode is client-side and readable —
this makes it undiscoverable, **not protected**. See
[IN-THE-NEWS.md](IN-THE-NEWS.md).

## Outstanding on the club's side

1. **Add Artifakt to Adobe kit `bux1rla`** (Regular 400 + Medium 500), and
   ideally 500/700 for Freight Big Pro while in there.
2. **Article URLs** for the seven unlinked placements.
3. **`DSC01870`** for the Racquets gallery.
4. Confirm a test inquiry populates **City**, **A Note** and **Membership
   Interest** in HubSpot — unknown field names are silently ignored, so a
   mismatch saves the contact but drops the data with no error.

## Not started

- **Google Ads** conversion tracking.
- **Vercel Analytics**, and a **Google Business Profile** — the biggest local
  search lever for a physical club.
- **A real backend for the News editor.** Supabase was scoped and the schema
  delivered; the work never began because credentials were not issued.
- **URL routing.** This is the root constraint behind the SEO ceiling, the lack
  of per-page ad landing pages, and Google only ever seeing the splash screen.
  Everything to date has worked around it. See [SEO.md](SEO.md).

## Unused assets

`assets/coach-carter.jpg` is no longer referenced — the coach it pictured was
replaced in the 8/7 review. Left in place in case the change is reversed.
