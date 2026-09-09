# Status

Where the site stands as of the last update. Read alongside
[DEPLOYMENT.md](DEPLOYMENT.md), which covers what has to happen before launch.

## Complete

All nine pages are built, styled, populated with the club's approved copy and
photography, and have been through several rounds of client review:

Home · Golf · Instruction · Racquet Sports · Location · Guest Information ·
In the News · Membership · Club Admin

Also done: the splash gate, responsive layouts down to mobile, the scroll-reveal
and parallax motion system (with `prefers-reduced-motion` respected throughout),
and the brand type system wired to the club's Adobe Fonts kit.

## Stubbed — interface only, no backend

| What | Where |
|---|---|
| Membership inquiry form | `pages/Membership.jsx` |
| Member portal sign-in | `app.jsx` |
| Club Admin editor (saves to one browser) | `pages/Admin.jsx` |

## Placeholder content

- **Instagram strip** on the home page — six static images standing in for the
  live feed. See [DEPLOYMENT.md](DEPLOYMENT.md).
- **`assets/tennis-rally.jpg`** in the Racquets gallery — a stand-in. The
  intended photograph (`DSC01870`) arrived as a broken image and has not been
  re-sent.

## Outstanding on the club's side

1. **Adobe Fonts kit `bux1rla`** — add the live and preview domains to the
   allowed-domains list, and add the Sweet Sans Pro **Regular (400)** weight.
   Details in [DEPLOYMENT.md](DEPLOYMENT.md).
2. **`DSC01870`** — the missing Racquets photograph.
3. **Article URLs** — seven media placements in "In the News" have no link
   and render without a click-through until URLs are supplied.
4. **Instagram** — confirm which integration route, and provide account access.

## Not started

- HubSpot integration for the membership inquiry form.
- Database and real authentication for the News editor. Supabase was scoped and
  the schema and setup steps were delivered; the work never began because
  project credentials were not issued.
- URL routing, if the club wants shareable page links and per-page SEO. See
  [DEPLOYMENT.md](DEPLOYMENT.md).

## Unused assets kept in the repository

`assets/coach-carter.jpg` is no longer referenced by any page — the coach it
pictured was replaced during the 8/7 review. It was left in place rather than
deleted, in case the change is reversed.
