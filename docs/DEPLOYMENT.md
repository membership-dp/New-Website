# Hosting & launch

## Hosting

The site is static files. Anything that serves a directory over HTTPS will host
it: Vercel, Netlify, Cloudflare Pages, S3 + CloudFront, or a plain web server.

The compiled `.js` files are committed, so the site works with no build step at
all — point a host at the repository root and serve `index.html`.

On Vercel there is one wrinkle worth knowing, because it has already broken a
deploy. Adding `package.json` makes Vercel stop treating this as a plain static
site: it runs `npm run build` and then looks for a `public/` output directory.
There isn't one — the site *is* the root — so the deploy fails with
`No Output Directory named "public" found` even though the build itself
succeeded. **`vercel.json` fixes this** and must stay in the repo:

```json
{
  "framework": null,
  "buildCommand": "node build.cjs",
  "outputDirectory": "."
}
```

Running the build on deploy is deliberate rather than merely tolerated: it
regenerates every `.js` from its `.jsx`, so a commit where someone edited a
`.jsx` and forgot to run `build.cjs` still deploys correctly. Verify a change
locally with `vercel build` before pushing.

Two things to configure:

- **Serve `index.html` for unknown paths.** The site has one page; anything else
  should fall back to it rather than 404.
- **Don't cache aggressively at the CDN.** Cache-busting is handled by the `?v=`
  query strings in `index.html`; `index.html` itself should be served fresh.

## Adobe Fonts — do this before launch

The brand typefaces come from the club's own Adobe Fonts kit:

```html
<link rel="stylesheet" href="https://use.typekit.net/bux1rla.css">
```

Kit `bux1rla` is the same kit `dutchmanspipeclub.com` loads, and it carries both
brand faces: **`sweet-sans-pro`** (body) and **`freight-big-pro`** (display).

Adobe Fonts kits are **domain-locked**. The kit serves only to domains on its
allow-list. Two items are outstanding on the club's Adobe account:

1. **Add every domain the site runs on** to the kit's allowed domains —
   production, staging, and any preview URL. On a domain that is not listed, the
   fonts silently fail and the page falls back to Georgia and system sans. It
   still renders; it just stops looking like the brand.
2. **Add the Sweet Sans Pro Regular weight.** The kit currently ships
   `sweet-sans-pro` in **600 and 800 only**. Body copy set at 400 falls back.
   `freight-big-pro` is fine — 300/400/600 plus italics.

Both are changes in the club's Adobe Fonts account, not in this repository.

## Before launch — the functional gaps

Three interfaces are complete visually but have nothing behind them:

| Feature | State | Needs |
|---|---|---|
| **Membership inquiry form** (`pages/Membership.jsx`) | Submits properly, but `INQUIRY_ENDPOINT` is empty so nothing is sent | A form endpoint (HubSpot, or a hosted form service) |
| **Club Admin / In the News** (`pages/Admin.jsx`) | Edits save to one browser only | Database + real auth — see [IN-THE-NEWS.md](IN-THE-NEWS.md) |

**The member portal is done.** Member Login links to the club's Clubessential
portal (`members.dutchmanspipeclub.com/login`); the URL lives in
`DP_MEMBER_PORTAL` at the top of `components/Header.jsx`.

### Turning the inquiry form on
Set `INQUIRY_ENDPOINT` at the top of `pages/Membership.jsx` to the form
provider's endpoint. Nothing else needs to change — the form already POSTs JSON,
handles sending and error states, and drops honeypot submissions. Until it is
set, the form runs in demo mode: it shows the confirmation panel and sends
nothing. **Recipient addresses belong in the provider's dashboard, never in this
repo** — anything in the source ships to the browser in plain text.

**Remove or replace the hardcoded admin passcode** in `pages/Admin.jsx` before
this is public. It is a demo stub sitting in client-side code, readable by anyone.

## Instagram

The homepage Instagram grid (`InstagramStrip` in `components/Blocks.jsx`) shows
six static images from `assets/`. It is a placeholder for the real feed.

Two routes:

- **A hosted widget** (SnapWidget, Behold, EmbedSocial) — connect the club's
  account, paste an embed snippet in place of the strip. No code, small
  subscription, live in an afternoon.
- **The Instagram Graph API** — requires a Business/Creator account linked to a
  Facebook Page, a Meta app, and a long-lived token that must be refreshed.
  More control, meaningfully more setup and maintenance.

The widget route is the right call unless the club wants custom presentation.

## If the site needs real URLs

Pages are React state, not routes — `/golf` does not exist (see
[ARCHITECTURE.md](ARCHITECTURE.md)). That is fine for a wireframe and a problem
for a launched marketing site: no shareable page links, no per-page SEO, no
analytics per page, and nothing for a paid campaign to land on.

Fixing it means either adding a small router that syncs `route` to
`window.history` and reads it back on load, or rebuilding on a framework that
does it natively. This is a decision to make deliberately before launch rather
than discover after it.
