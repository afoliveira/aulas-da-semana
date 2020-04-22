# Aulas da Semana

O intuitio desse projeto é fazer um calendário de aulas semanais, onde as informações vem através de uma API e as
aulas são montadas de forma dinâmica através do mesmo.

## Instalação

Execute o comando:
```bash
$ yarn install
```
ou simplesmente:
```bash
$ yarn
```

### Executando a Aplicação

```bash
$ yarn start
```

Iniciará o projeto em ambiente de Desenvolvimento.

Abra [http://localhost:19002](http://localhost:19002)

Baixe o aplicativo EXPO
Playstore: [https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR]
App Store: [https://apps.apple.com/br/app/expo-client/id982107779]

Depois de aberto o programa basta apenas selecionar a opção Scan QR Code e scannear o QR Code
que se encontra no [http://localhost:19002].

## Padronização de Código

- [ESLint](https://eslint.org/docs/user-guide/getting-started)
- [Prettier](https://prettier.io/docs/en/install.html)

Para rodar o ESLint e Prettier em todo o projeto, basta executar:

Eslint:
```bash
$ yarn lint
```

Prettier:
```bash
$ yarn format
```

### VS Code

Para que o VSCode faça a formatação do código de forma automática ao salvar o arquivo. É necessário instalar as extensões:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

Em seguida, abrir o `settings.json`, use *ctrl + shift + P* e procure por: `Preferences: Open Settings (JSON)`, então, adicione as seguintes configurações:

```json
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true,
},
"[javascript]" : {
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
},
```
