# "In the News" and the Club Admin editor

This is the one part of the site with an editing interface rather than a source
file to hand-edit. It is a **demonstration of the editing flow**, not a working
CMS — read the limitation below before showing it to anyone as finished.

## How it fits together

```
components/NewsStore.jsx   the content itself + load/save
        │
        ├── pages/News.jsx   reads it and renders the public page
        └── pages/Admin.jsx  writes it through the editor UI
```

`NewsStore` is the single source of truth. `DP_NEWS_DEFAULTS` inside it holds the
club's real media coverage: one featured story (Forbes) plus the placement list.
Each item is:

```js
{ img, tag, date, title, excerpt, url }
```

`tag` is the outlet, `date` is month/year, `url` opens the live article in a new
tab. A handful of placements arrived without a link — those have `url: ''` and
render as coverage with no click-through until URLs are supplied.

## Reaching the editor

The **Club Admin** link is in the footer. The sign-in is a hardcoded demo
username and passcode in `pages/Admin.jsx` (`DP_ADMIN_USER` / `DP_ADMIN_PASS`).

**This is not security.** The check runs in the browser, in code any visitor can
read. It exists so the editing flow can be demonstrated. Nothing behind it is
private, and it must be replaced before launch.

## The limitation that matters

Edits save to **`localStorage`**, under the key `dp-news-v3`.

That means changes live in **one browser, on one machine**. If Madison adds an
article on her laptop, nobody else sees it — not the public site, not another
editor, not her own phone. Clearing site data erases the edits.

`NewsStore` exposes `reset()`, which drops the saved copy and restores
`DP_NEWS_DEFAULTS`.

## Editing the coverage list for real, today

Until there is a backend, the way to publish a change is to edit
`DP_NEWS_DEFAULTS` in `components/NewsStore.jsx`, then rebuild
([BUILD.md](BUILD.md)). That change is committed and reaches everyone.

## What production needs

`NewsStore` was written so this swap touches one file. `load()` and `save()` are
the only two functions that know where content lives; the News page and the Admin
editor call the store, not storage. Replacing the `localStorage` bodies with
fetches to a backend leaves both pages untouched.

Two pieces are required:

1. **A database** for the articles.
2. **Real authentication** for the editors, replacing the hardcoded passcode.

Supabase was scoped for this and the SQL schema and setup steps were delivered
earlier. The work was never started because the project credentials were never
issued — so this remains outstanding. Any equivalent backend (a headless CMS, a
small serverless API) would work as well; the store's interface is the contract.
