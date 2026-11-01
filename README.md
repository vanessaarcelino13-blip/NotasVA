# NotasVA

Aplicativo de anotações, escrita manual e desenho, otimizado para telas Android e desktop.

## Recursos da interface v4.1

- Criar, pesquisar, duplicar e excluir notas.
- Salvamento local automático.
- Favoritar notas e organizar com etiquetas.
- Texto editável e desenho por toque ou mouse.
- Caneta, lápis, tinteiro, marca-texto e borracha.
- Inserir e arrastar figurinhas, imagens, retângulos e setas.
- Papéis branco, pautado, quadriculado, pontilhado, creme, escuro, azul técnico e kraft.
- Desfazer e refazer ações em objetos.
- Exportar notas em TXT ou PDF pela impressão.
- Criar e restaurar backup JSON.
- Cache atualizado para carregar a interface nova no dispositivo.

## Executar no navegador

Abra `index.html` em um navegador moderno.

## Gerar APK Android

O GitHub Actions compila automaticamente o APK quando os arquivos da aplicação são atualizados na branch `main`.

1. Abra a aba **Actions** do repositório.
2. Entre na execução **Gerar APK do NotasVA**.
3. Aguarde a conclusão da compilação.
4. Baixe o artefato **NotasVA-APK** na seção Artifacts.

O projeto usa Capacitor com o identificador Android `br.com.notasva.app`.
