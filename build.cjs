// build.cjs — precompile JSX -> plain JS so the site needs no in-browser Babel.
//
//   npm install --no-save @babel/standalone@7   (one-time, node_modules gitignored)
//   node build.cjs
//
// Source files stay as .jsx (the things you edit). This emits a .js next to each
// one (classic React.createElement transform — React is a UMD global, no imports).
// After editing any .jsx, re-run `node build.cjs` and bump the ?v= in index.html.
const fs = require('fs');
const path = require('path');
const Babel = require('@babel/standalone');

const files = [];
for (const dir of ['components', 'pages']) {
  for (const f of fs.readdirSync(dir)) {
    if (f.endsWith('.jsx')) files.push(path.join(dir, f));
  }
}
files.push('app.jsx');

let ok = 0;
for (const src of files) {
  const code = fs.readFileSync(src, 'utf8');
  // preset-react only: transform JSX/fragments, leave modern JS (arrow fns,
  // spread, optional chaining) untouched for evergreen browsers.
  const out = Babel.transform(code, { presets: [['react']] }).code;
  const dest = src.replace(/\.jsx$/, '.js');
  fs.writeFileSync(dest, out + '\n');
  ok++;
  console.log('  ✓', src, '->', dest);
}
console.log(`compiled ${ok} files`);
