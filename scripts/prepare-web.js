const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const out = path.join(root, 'www');
const required = ['index.html', 'manifest.webmanifest', 'sw.js', 'icon.svg'];

for (const file of required) {
  if (!fs.existsSync(path.join(root, file))) {
    throw new Error(`Arquivo obrigatório ausente: ${file}`);
  }
}

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
for (const file of required) {
  fs.copyFileSync(path.join(root, file), path.join(out, file));
}
console.log('NotasVA: arquivos web preparados em www/.');
