# Build & edit workflow

Read this once. It is short, and the site will behave strangely if you skip it.

## The rule

The browser never reads your `.jsx` files. It reads the `.js` file next to each
one, which is *generated*. So every edit is three steps, not one:

```
1. edit the .jsx
2. node build.cjs          ← compiles every .jsx to its .js twin
3. bump ?v=NN in index.html ← forces browsers to pick up the new files
```

Miss step 2 and nothing changes on screen. Miss step 3 and *you* see the change
but anyone with the old version cached does not.

## One-time setup

```bash
npm install
```

That installs `@babel/standalone`, the only dependency. It is a build-time tool
only — nothing from `node_modules` is shipped.

## Making a change

```bash
# 1. edit, e.g. pages/Golf.jsx

# 2. compile
node build.cjs
```

The output ends with a count:

```
  ✓ components/Blocks.jsx -> components/Blocks.js
  ...
compiled 17 files
```

**Check that last line.** If a file has a syntax error, Babel throws — but only
*after* it has already written the files that compiled cleanly. You get a partial
build, a stale `.js`, and a page that silently shows the old content. The count
is how you know the whole set went through. Scrolling past the error and assuming
it worked has cost real time on this project before.

```bash
# 3. bump the cache-buster
```

In `index.html`, every stylesheet and script carries `?v=NN`. Increment all of
them together — a find-and-replace of `?v=79` → `?v=80` across the file. There
are 19 of them, and it sits at `?v=79` today.

```bash
# 4. commit BOTH the .jsx and the generated .js
git add -A && git commit -m "…"
```

If you commit only the `.jsx`, the deployed site does not change.

## Adding a new page

1. Create `pages/Whatever.jsx`, ending with `window.WhateverPage = WhateverPage;`
2. Add `<script defer src="pages/Whatever.js?v=NN"></script>` to `index.html`,
   in the Pages block.
3. Add the route in `app.jsx`:
   `{route === 'whatever' && <WhateverPage onNav={onNav} />}`
4. Link to it from `components/Header.jsx` and/or `components/Footer.jsx`.
5. `node build.cjs`, bump `?v=`.

Script order in `index.html` matters: React first, then components, then pages,
then `app.js` last. `defer` preserves that order.

## Gotchas that have actually bitten

**JSX comments inside an arrow function.** A parenthesised arrow body must be a
single expression, so this throws:

```jsx
items.map((c, i) => (
  {/* a comment */}          ← breaks the build
  <div>…</div>
))
```

Put the comment above the `.map(` instead.

**`grep` on the compiled `.js` files** fails with "character not in range" —
the compiled output contains non-ASCII characters (em dashes, curly quotes).
Prefix with `LC_ALL=C`:

```bash
LC_ALL=C grep -n "Caddie" pages/Golf.js
```

**Verifying a removal by name is unreliable.** Source comments often preserve
the name of something that was removed, so grepping for a person's name can
match the comment rather than live content. Grep for the asset filename or the
role string instead.
