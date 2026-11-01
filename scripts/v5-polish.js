/* Pequenas melhorias de usabilidade para NotasVA 5.0. */
(() => {
  'use strict';
  const byId = id => document.getElementById(id);

  // Atalhos acessíveis sem interferir na digitação dentro de campos.
  document.addEventListener('keydown', event => {
    const target = event.target;
    const typing = target && (target.isContentEditable || /INPUT|TEXTAREA|SELECT/.test(target.tagName));
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 's') {
      event.preventDefault();
      window.NotasVA?.save?.();
      const status = byId('status');
      if (status) status.textContent = '✓ Salvo';
    }
    if (!typing && (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'n') {
      event.preventDefault();
      byId('newNote')?.click();
    }
    if (!typing && (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'f') {
      event.preventDefault();
      byId('noteSearch')?.focus();
    }
    if (event.key === 'Escape') {
      document.querySelectorAll('.popup.show').forEach(popup => popup.classList.remove('show'));
      byId('tagsDrawer')?.classList.remove('show');
    }
  });

  // Corrige a etiqueta do contador para singular/plural.
  const updateCountLabel = () => {
    const count = byId('count');
    const editor = byId('writing');
    if (!count || !editor) return;
    const total = (editor.innerText || '').length;
    count.textContent = total + (total === 1 ? ' caractere' : ' caracteres');
  };
  byId('writing')?.addEventListener('input', updateCountLabel);
  updateCountLabel();

  // Explica atalhos sem ocupar espaço permanente na interface.
  byId('newNote')?.setAttribute('title', 'Nova nota (Ctrl/⌘ + N)');
  byId('noteSearch')?.setAttribute('title', 'Buscar notas (Ctrl/⌘ + F)');
})();
