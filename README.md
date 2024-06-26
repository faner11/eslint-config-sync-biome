# eslint-config-sync-biome


![NPM Version](https://img.shields.io/npm/v/eslint-config-sync-biome) ![NPM Downloads](https://img.shields.io/npm/dm/eslint-config-sync-biome)



## Installation

```shell
pnpm add eslint-config-sync-biome eslint-config-prettier --D
```

## Usage

### Flat config

This plugin is optimized for flat config usage (eslint >= 9.0). See [here](https://eslint.org/docs/latest/use/configure/configuration-files-new) for more details. Use it like this:

```js
// eslint.config.js
import biome from "eslint-config-sync-biome";
export default [
  ...// other plugins
  biome.configs["flat/recommended"], // biome should be the last one
];
```

### Legacy config

If you are using legacy configuration (eslint < 9.0), you can use the following config:

```js
// .eslintrc.js
module.exports = {
  ... // other config
  extends: [
    ... // other presets
    "plugin:biome/recommended",
  ],
}
```
### Shared rules
- `flat/recommended`/ `recommended` - Turn off all lint rules and format rules already supported by biome.(format rules originate from eslint-config-prettier).
- `flat/only-lint`/ `only-lint` - Turn off lint rules only
### Run it before eslint

And then you can add the following script to your `package.json`:

```json
{
  "scripts": {
    "lint": "npx biome lint . && npx eslint"
  }
}
```

## VSCode Support

You need to install both the [biome](https://marketplace.visualstudio.com/items?itemName=biomejs.biome) and [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extensions

In VSCode, to apply Biome and ESLint on save, you should have these in your project's `.vscode/settings.json`:
```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports.biome": "explicit",
    "quickfix.biome": "explicit"
  },
  "editor.defaultFormatter": "biomejs.biome"
}
```
## License

[MIT](https://github.com/faner11/eslint-config-sync-biome/blob/main/LICENSE)
