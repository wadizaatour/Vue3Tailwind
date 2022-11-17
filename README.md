# Boilterplate Vue 3 Typescript  Vite Pinia  TailwindUI/Css


## :hammer: Configured development tools:

- [Vue 3](https://v3.vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Vue Router](https://router.vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Axios](https://axios-http.com/)
- [ESLint](https://eslint.org/) - [Prettier](https://prettier.io/)

## Unit tests tools

- [Jest](https://jestjs.io/)

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

## :rocket: How to get started ?

### :one: Clone the repository

**HTTPS**
```
git clone https://github.com/wadizaatour/Vue3Tailwind
```

**SSH**
```
git clone https://github.com/wadizaatour/Vue3Tailwind
```

### :two: Install dependencies

**NPM**
```
npm install
```
or only:
```
npm i
```

**YARN**
```
yarn install
```
or only:
```
yarn
```

### :three: Compilation and HMR for development with Vite

**NPM**
```
npm run dev
```

**YARN**
```
yarn dev
```

- **Perfect!** :white_check_mark: If you followed the previous steps correctly, the application will be running by default on: [http://localhost:3000](http://localhost:3000)

### :four: Compile and minify for production

**NPM**
```
npm run build
```

**YARN**
```
yarn build
```

### :five: Lints and fix files

**NPM**
```
npm run lint
```

**YARN**
```
yarn lint
```
