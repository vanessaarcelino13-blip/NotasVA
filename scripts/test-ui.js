const fs = require('node:fs');
const vm = require('node:vm');
const html = fs.readFileSync('index.html', 'utf8');

const ids = [...html.matchAll(/\\bid=["']([^"']+)["']/g)].map(m => m[1]);
const duplicates = ids.filter((id, i) => ids.indexOf(id) !== i);
if (duplicates.length) throw new Error('IDs duplicados: ' + [...new Set(duplicates)].join(', '));

const known = new Set(ids);
const referenced = new Set([
  ...[...html.matchAll(/\\$\\(["']([^"']+)["']\\)/g)].map(m => m[1]),
  ...[...html.matchAll(/getElementById\\(["']([^"']+)["']\\)/g)].map(m => m[1])
]);
const dynamic = new Set(['v4Layer']);
const missing = [...referenced].filter(id => !known.has(id) && !dynamic.has(id));
if (missing.length) throw new Error('Elementos referenciados mas ausentes: ' + missing.join(', '));

const scripts = [...html.matchAll(/<script\\b(?![^>]*\\bsrc=)[^>]*>([\\s\\S]*?)<\\/script>/gi)];
if (!scripts.length) throw new Error('Nenhum script inline encontrado');
scripts.forEach((match, index) => new vm.Script(match[1], { filename: 'index.html:inline-script-' + (index + 1) }));

for (const id of ['newNote', 'writing', 'title', 'toolsBtn', 'paperBtn', 'layersBtn', 'undoBtn', 'redoBtn', 'backupBtn', 'restoreBtn']) {
  if (!known.has(id)) throw new Error('Controle essencial ausente: ' + id);
}
console.log('Teste estático aprovado: ' + scripts.length + ' scripts analisados, ' + ids.length + ' IDs e referências DOM conferidos.');
