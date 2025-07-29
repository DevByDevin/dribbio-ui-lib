# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

# 🏀 dribbio-ui-lib

A modern, reusable React component library for the [Dribbio](https://github.com/your-org/dribbio) ecosystem — built with **TypeScript**, **Tailwind CSS**, and **Storybook**. Designed for elegant UI, developer ergonomics, and performance.

![npm](https://img.shields.io/npm/v/dribbio-ui-lib?color=blue&logo=npm)
![build](https://img.shields.io/github/actions/workflow/status/your-org/dribbio-ui-lib/ci.yml?label=build)
![storybook](https://img.shields.io/badge/docs-Storybook-blueviolet?logo=storybook)

---

## ✨ Features

- ⚛️ **React + TypeScript**: full typings, autocompletion
- 🎨 **Tailwind CSS**: consistent, utility-first styling
- 🧱 **Composable components**: Button, Input and more
- 🧪 **Testable**: props, behaviors, and accessibility
- 📖 **Storybook**: live preview and docs
- 📦 **Optimized for publishing**: Vite library mode ready

---

## 📦 Installation

```bash
npm install dribbio-ui-lib
# or
yarn add dribbio-ui-lib
```
