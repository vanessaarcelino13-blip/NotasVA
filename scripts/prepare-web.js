const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const out = path.join(root, 'www');
const required = ['index.html', 'manifest.webmanifest', 'sw.js', 'icon.svg'];
const extras = ['styles/v5-polish.css', 'scripts/v5-polish.js'];

for (const file of [...required, ...extras]) {
  if (!fs.existsSync(path.join(root, file))) {
    throw new Error(`Arquivo obrigatório ausente: ${file}`);
  }
}

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
for (const file of [...required, ...extras]) {
  const destination = path.join(out, file);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.copyFileSync(path.join(root, file), destination);
}

const htmlPath = path.join(out, 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');
if (!html.includes('styles/v5-polish.css')) {
  html = html.replace('</head>', '  <link rel="stylesheet" href="./styles/v5-polish.css">\n</head>');
}
if (!html.includes('scripts/v5-polish.js')) {
  html = html.replace('</body>', '  <script src="./scripts/v5-polish.js" defer></script>\n</body>');
}
fs.writeFileSync(htmlPath, html, 'utf8');
console.log('NotasVA 5.0: arquivos web preparados e refinamento visual aplicado em www/.');
