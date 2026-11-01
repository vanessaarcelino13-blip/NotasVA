# NotasVA

Aplicativo de anotações, escrita manual e desenho, com foco em Android.

## Recursos existentes

- Criar, pesquisar, duplicar e excluir notas.
- Salvamento automático no armazenamento local do dispositivo.
- Favoritar notas e organizar com etiquetas.
- Editor de texto.
- Desenho por toque ou mouse com caneta, lápis, tinteiro, marca-texto e borracha.
- Inserir e mover imagens, figurinhas, retângulos e setas.
- Papéis branco, pautado, quadriculado, pontilhado, creme, escuro, azul técnico e kraft.
- Camadas de desenho.
- Desfazer e refazer ações de desenho e objetos.
- Importar arquivos PDF, navegar pelas páginas, anotar com caneta ou marca-texto, apagar e desfazer traços.
- Exportar o PDF original com as anotações incorporadas em todas as páginas.
- Exportar notas em TXT e imprimir/salvar em PDF.
- Criar e restaurar backup JSON.

## Executar no navegador

Abra `index.html` em um navegador moderno.

## Gerar APK pelo GitHub

O workflow **Gerar APK do NotasVA** é executado automaticamente quando há um push na branch `main`. Também pode ser iniciado manualmente.

1. Abra a aba **Actions** do repositório.
2. Selecione **Gerar APK do NotasVA**.
3. Abra a execução mais recente.
4. Aguarde o job **Compilar aplicativo Android** terminar com sucesso.
5. Baixe **NotasVA-APK** na seção **Artifacts**.

O APK gerado é uma versão de depuração (debug), adequada para instalação e testes.

## Tecnologias

- HTML, CSS e JavaScript.
- Capacitor 6 para empacotar a aplicação web como aplicativo Android.
- GitHub Actions para compilar o APK.
- Identificador Android: `br.com.notasva.app`.

## Dados e privacidade

As notas são armazenadas localmente no dispositivo/navegador. Faça backups JSON regularmente para evitar perder seus dados ao limpar os dados do aplicativo ou trocar de aparelho.
