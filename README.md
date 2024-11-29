# Portfolio Pablo Cavalcante | React + TypeScript + Vite

- Desenvolvi esse portfolio para demonstrar minha habilidades e colocar meus projetos que acho mais relevantes.

# Imagens | Responsividade
![home](https://github.com/user-attachments/assets/69f79eb6-70e3-47dd-b3e0-73bb95833098)
![sobre](https://github.com/user-attachments/assets/d473c9fd-2304-4f37-8917-e5a3f3574d09)
![cursos](https://github.com/user-attachments/assets/f6567190-f89d-41b5-892b-234bf8cbe357)
![projetos](https://github.com/user-attachments/assets/32de6b94-7a23-4565-8849-db5cd0efb57a)
![notfound](https://github.com/user-attachments/assets/33ffc00d-5cbf-4570-a1ea-b14924d3221c)

![Home - Responsividade](https://github.com/user-attachments/assets/7f89cf32-0822-4f84-8628-a8e99b5652ac)
![NotFound](https://github.com/user-attachments/assets/0cbf8c37-028a-4468-b573-c7f9e7bff6a3)
![Projetos](https://github.com/user-attachments/assets/ea2b9ea7-17de-4af7-bddb-a51e4a31e2dc)
![Sobre](https://github.com/user-attachments/assets/66f3b602-1ebe-43d0-9ca4-f53e611b9982)
![Cursos](https://github.com/user-attachments/assets/e0a29ecb-f58f-4039-b067-c9cc0c18aa1f)

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
