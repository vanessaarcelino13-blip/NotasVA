const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const out = path.join(root, 'www');
const files = ['index.html', 'manifest.webmanifest', 'sw.js', 'icon.svg', 'pdf-tools.js', 'dashboard.css', 'dashboard.js'];

fs.mkdirSync(out, { recursive: true });
for (const file of files) {
  const source = path.join(root, file);
  if (fs.existsSync(source)) fs.copyFileSync(source, path.join(out, file));
}

const vendor = path.join(out, 'vendor');
fs.mkdirSync(vendor, { recursive: true });
const libraries = [
  ['pdfjs-dist/build/pdf.min.js', 'pdf.min.js'],
  ['pdfjs-dist/build/pdf.worker.min.js', 'pdf.worker.min.js'],
  ['pdf-lib/dist/pdf-lib.min.js', 'pdf-lib.min.js']
];

for (const [source, destination] of libraries) {
  const from = path.join(root, 'node_modules', source);
  if (!fs.existsSync(from)) {
    throw new Error('Biblioteca não encontrada: ' + source + '. Execute npm install antes do build.');
  }
  fs.copyFileSync(from, path.join(vendor, destination));
}

console.log('Arquivos web e ferramentas PDF preparados em www/.');
