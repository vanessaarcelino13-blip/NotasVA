# NotasVA 5.0.0

Aplicativo de anotações, escrita manual e desenho, com interface responsiva para Android e desktop.

## Recursos disponíveis

- Criar, pesquisar, favoritar, duplicar e excluir notas.
- Salvamento automático no armazenamento local do dispositivo.
- Editor de texto com contador de caracteres.
- Desenho por toque ou mouse: caneta, lápis, tinteiro, marca-texto e borracha.
- Ferramentas de formas e setas.
- Camadas com seleção, visibilidade e exclusão.
- Inserção e movimentação de imagens e figurinhas.
- Oito estilos de papel.
- Desfazer e refazer ações de desenho e objetos.
- Exportação TXT e impressão/Salvar como PDF.
- Backup e restauração JSON.
- Aplicativo web instalável e empacotamento Android com Capacitor 6.

## Executar no navegador

Requer Node.js 20 ou superior:

```bash
npm install
npm run dev
```

## Gerar APK localmente

Requer Java 17 e Android SDK:

```bash
npm install
npm run build
npx cap add android
npx cap sync android
cd android
./gradlew assembleDebug
```

O APK de depuração será criado em `android/app/build/outputs/apk/debug/app-debug.apk`.

## Gerar APK pelo GitHub

A cada atualização na branch `main` ou `release/notasva-5.0.0`, o GitHub Actions compila o APK. Também é possível iniciar manualmente em **Actions → Gerar APK do NotasVA 5.0.0 → Run workflow**. Ao concluir, baixe o artefato **NotasVA-5.0.0-APK**.

O APK gerado pelo workflow é uma versão de teste (debug), não uma versão assinada para publicação na Play Store.

## Dados e privacidade

As notas permanecem no armazenamento local do navegador/aplicativo. Faça backups JSON regularmente antes de reinstalar ou limpar os dados do aplicativo.

Identificador Android: `br.com.notasva.app`.
