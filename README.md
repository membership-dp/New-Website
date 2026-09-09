# Dutchman's Pipe Club — Website

The marketing site for Dutchman's Pipe Club (West Palm Beach). This repository
holds the complete site: source, compiled output, photography, and type/colour
system.

It is a **static site**. There is no server, no framework CLI, and no build step
required to view it — open `index.html` and it runs. The only tooling is a small
script that compiles `.jsx` files down to plain `.js`.

---

## Quick start

```bash
git clone https://github.com/membership-dp/New-Website.git
cd New-Website
npm run serve          # then open http://localhost:8080
```

`npm run serve` is just Python's built-in static file server. Any static server
works (`npx serve`, VS Code Live Server, etc.). You need a server rather than
opening the file directly, because the browser blocks some requests on `file://`.

To change anything in `.jsx`, see **[docs/BUILD.md](docs/BUILD.md)** — there is one
extra step, and skipping it is the single most common way to get confused.

---

## Documentation

| Document | What it covers |
|---|---|
| **[docs/BUILD.md](docs/BUILD.md)** | The edit → compile → cache-bust loop. **Read this before your first edit.** |
| **[docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)** | How the site is wired: routing, components, the design system. |
| **[docs/CONTENT-EDITING.md](docs/CONTENT-EDITING.md)** | Where each piece of copy and each image lives, page by page. |
| **[docs/IN-THE-NEWS.md](docs/IN-THE-NEWS.md)** | The "In the News" page and its Club Admin editor. |
| **[docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)** | Hosting, the Adobe Fonts kit, and what must be done before launch. |
| **[docs/STATUS.md](docs/STATUS.md)** | What is finished, what is placeholder, what is still owed. |

---

## What's in here

```
index.html              Entry point. Loads React, then every component and page.
app.jsx / app.js        App shell: splash gate, routing, member-login dialog.
build.cjs               Compiles every .jsx to a .js sitting next to it.

components/             Shared pieces used across pages
  Header, Footer, Splash        chrome
  Blocks                        the reusable layout blocks (see ARCHITECTURE)
  Reveal, Motion                scroll-reveal and parallax
  NewsStore                     content store for "In the News"

pages/                  One file per route
  Home, Golf, Racquets, Instruction, Location,
  Guests, News, Membership, Admin

styles/
  colors_and_type.css   Brand palette and type scale — change colours here
  site.css              Layout, components, breakpoints

assets/                 All photography, video, logos, icons
```

Every `.jsx` file has a `.js` twin. **The `.jsx` is the source you edit; the `.js`
is generated.** Both are committed, because the browser loads the `.js`.

---

## Stack

- **React 18** via UMD `<script>` tags from unpkg — no npm runtime dependency,
  no bundler, no build server.
- **JSX precompiled** by `build.cjs` (`@babel/standalone`, classic
  `React.createElement` transform). Components attach themselves to `window`.
- **Plain CSS**, custom properties for the whole design system.
- **Adobe Fonts** for the brand faces (`sweet-sans-pro`, `freight-big-pro`).

This was a deliberate choice for a wireframe: it stays readable, it has no
dependency tree to rot, and it can be hosted anywhere that serves files.

---

## Status

This is a **design wireframe**, not a production site. Several things are
intentionally stubbed — the member portal, the membership inquiry form, and the
Club Admin editor all present their real interface but have no backend behind
them. See **[docs/STATUS.md](docs/STATUS.md)** for the full list before quoting
anyone a launch date.
