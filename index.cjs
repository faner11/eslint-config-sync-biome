const biomeRules = require('./rules.cjs')
const eslintConfigPrettier = require('eslint-config-prettier')

const { rules: prettierRules } = eslintConfigPrettier
const ruleMaps = {
  ...biomeRules,
  ...prettierRules,
}
module.exports = {
  configs: {
    recommended: {
      plugins: ['biome'],
      rules: ruleMaps,
    },
    'only-lint': {
      plugins: ['biome'],
      rules: biomeRules,
    },
    'flat/recommended': {
      rules: ruleMaps,
    },
    'flat/only-lint': {
      rules: biomeRules,
    },
  },
}
